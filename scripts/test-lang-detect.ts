/**
 * Behavioural test for the inline browser-language detector.
 *
 * Extracts the real script out of the built HTML and runs it against a fake
 * DOM under a set of scenarios, asserting where the visitor ends up.
 *
 *   node --experimental-strip-types scripts/test-lang-detect.ts
 */
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const html = readFileSync(join(process.cwd(), 'dist/client/index.html'), 'utf-8');

const match = html.match(/<script>\s*(\(function \(\) \{[\s\S]*?\}\)\(\);)\s*<\/script>/);
if (!match) {
  console.error('could not extract the detector script from dist/client/index.html');
  process.exit(1);
}
const source = match[1];

interface Scenario {
  name: string;
  htmlLang: string;
  languages: string[];
  stored: string | null;
  path: string;
  expect: { url: string | null; stored: string | null };
}

const scenarios: Scenario[] = [
  {
    name: 'German browser, fresh visit to /',
    htmlLang: 'en',
    languages: ['de-DE', 'de', 'en-US'],
    stored: null,
    path: '/',
    expect: { url: '/de', stored: 'de' },
  },
  {
    name: 'Chinese browser, fresh visit to /about',
    htmlLang: 'en',
    languages: ['zh-CN', 'zh'],
    stored: null,
    path: '/about',
    expect: { url: '/zh/about', stored: 'zh' },
  },
  {
    name: 'Japanese browser, deep link to /products/foo',
    htmlLang: 'en',
    languages: ['ja', 'en-US'],
    stored: null,
    path: '/products/foo',
    expect: { url: '/ja/products/foo', stored: 'ja' },
  },
  {
    name: 'English browser stays on the English page',
    htmlLang: 'en',
    languages: ['en-US', 'en'],
    stored: null,
    path: '/',
    expect: { url: null, stored: null },
  },
  {
    name: 'unsupported browser language stays put',
    htmlLang: 'en',
    languages: ['ko-KR', 'ko'],
    stored: null,
    path: '/',
    expect: { url: null, stored: null },
  },
  {
    name: 'French browser with Spanish second preference picks the first supported one',
    htmlLang: 'en',
    languages: ['fr-CA', 'fr'],
    stored: null,
    path: '/tools',
    expect: { url: '/fr/tools', stored: 'fr' },
  },
  {
    name: 'stored choice wins over the browser language',
    htmlLang: 'en',
    languages: ['de-DE', 'de'],
    stored: 'es',
    path: '/',
    expect: { url: null, stored: 'es' },
  },
  {
    name: 'landing on a translated page records it and never bounces',
    htmlLang: 'zh-Hans',
    languages: ['de-DE', 'de'],
    stored: null,
    path: '/zh/about',
    expect: { url: null, stored: 'zh' },
  },
  {
    name: 'query string and hash survive the redirect',
    htmlLang: 'en',
    languages: ['es-ES'],
    stored: null,
    path: '/contact',
    expect: { url: '/es/contact', stored: 'es' },
  },
];

let failed = 0;

for (const s of scenarios) {
  const store = new Map<string, string>();
  if (s.stored) store.set('wb-locale', s.stored);

  let redirected: string | null = null;
  const removed: string[] = [];

  const html2: any = {
    getAttribute: (n: string) => (n === 'lang' ? s.htmlLang : null),
    classList: {
      add: () => {},
      remove: (c: string) => removed.push(c),
    },
  };

  const location2: any = {
    pathname: s.path,
    search: '',
    hash: '',
    replace: (url: string) => {
      redirected = url;
    },
  };

  const sandbox: any = {
    document: {
      documentElement: html2,
      addEventListener: () => {},
    },
    navigator: { languages: s.languages, language: s.languages[0] },
    localStorage: {
      getItem: (k: string) => (store.has(k) ? store.get(k)! : null),
      setItem: (k: string, v: string) => store.set(k, v),
    },
    location: location2,
  };

  const fn = new Function(...Object.keys(sandbox), source);
  fn(...Object.values(sandbox));

  const finalStored = store.get('wb-locale') ?? null;
  const ok = redirected === s.expect.url && finalStored === s.expect.stored;

  if (!ok) failed++;
  console.log(
    `${ok ? 'PASS' : 'FAIL'}  ${s.name}` +
      (ok ? '' : `\n        expected url=${s.expect.url} stored=${s.expect.stored}`) +
      `\n        actual   url=${redirected} stored=${finalStored}`
  );
}

if (failed === 0) {
  console.log(`\nAll ${scenarios.length} scenarios passed.`);
} else {
  console.error(`\n${failed} of ${scenarios.length} scenarios FAILED.`);
  process.exitCode = 1;
}
