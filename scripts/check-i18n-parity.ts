/**
 * i18n parity checker.
 *
 * Compares the key tree of every locale's string packs against the English
 * master. Any missing / extra / renamed key is reported.
 *
 *   node --experimental-strip-types scripts/check-i18n-parity.ts
 */
import { readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

const ROOT = join(process.cwd(), 'src/i18n/strings');
const LOCALES = ['zh', 'es', 'fr', 'de', 'ja'];

function flatten(obj: any, prefix = ''): string[] {
  if (obj === null || typeof obj !== 'object') return [prefix];
  return Object.entries(obj).flatMap(([k, v]) => flatten(v, prefix ? `${prefix}.${k}` : k));
}

async function loadPack(locale: string, file: string) {
  const path = join(ROOT, locale, file);
  if (!existsSync(path)) return null;
  const mod = await import(pathToFileURL(path).href);
  return mod;
}

const files = ['common.ts', 'pages.ts', 'tools.ts'];

let failures = 0;

for (const file of files) {
  const en = await loadPack('en', file);
  const enKeys = new Set(flatten(en));

  for (const locale of LOCALES) {
    const loc = await loadPack(locale, file);
    if (!loc) {
      console.error(`MISSING FILE  ${locale}/${file}`);
      failures++;
      continue;
    }
    const locKeys = new Set(flatten(loc));

    const missing = [...enKeys].filter((k) => !locKeys.has(k));
    const extra = [...locKeys].filter((k) => !enKeys.has(k));

    if (missing.length || extra.length) {
      failures++;
      console.error(`\n${locale}/${file}`);
      if (missing.length) console.error(`  missing (${missing.length}): ${missing.slice(0, 12).join(', ')}`);
      if (extra.length) console.error(`  extra   (${extra.length}): ${extra.slice(0, 12).join(', ')}`);
    }
  }
}

if (failures === 0) {
  console.log('i18n parity OK — all locales match the English key tree.');
} else {
  console.error(`\ni18n parity FAILED in ${failures} pack(s).`);
  process.exitCode = 1;
}
