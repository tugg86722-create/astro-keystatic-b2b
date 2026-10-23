/**
 * i18n runtime helpers.
 *
 * The site ships 6 locales. English is the default and is served from the root
 * path (`/about`); every other locale lives under its own prefix (`/zh/about`).
 * URL construction is done by hand rather than through `astro:i18n` helpers so
 * the behaviour stays explicit and predictable.
 */

export const DEFAULT_LOCALE = 'en';

export const LOCALES = ['en', 'zh', 'es', 'fr', 'de', 'ja'] as const;

export type Locale = (typeof LOCALES)[number];

export const TRANSLATED_LOCALES = LOCALES.filter((l) => l !== DEFAULT_LOCALE) as Locale[];

export interface LocaleMeta {
  code: Locale;
  /** Endonym — shown in the switcher, always in its own language. */
  label: string;
  /** BCP-47 tag for the <html lang> attribute. */
  htmlLang: string;
  /** Open Graph / hreflang locale tag. */
  ogLocale: string;
}

export const LOCALE_META: Record<Locale, LocaleMeta> = {
  en: { code: 'en', label: 'English', htmlLang: 'en', ogLocale: 'en_US' },
  zh: { code: 'zh', label: '简体中文', htmlLang: 'zh-Hans', ogLocale: 'zh_CN' },
  es: { code: 'es', label: 'Español', htmlLang: 'es', ogLocale: 'es_ES' },
  fr: { code: 'fr', label: 'Français', htmlLang: 'fr', ogLocale: 'fr_FR' },
  de: { code: 'de', label: 'Deutsch', htmlLang: 'de', ogLocale: 'de_DE' },
  ja: { code: 'ja', label: '日本語', htmlLang: 'ja', ogLocale: 'ja_JP' },
};

export function isLocale(value: string | undefined): value is Locale {
  return !!value && (LOCALES as readonly string[]).includes(value);
}

/**
 * Build a locale-aware href.
 *
 * URLs are emitted in directory form (`/about/`). Astro's static build writes
 * `about/index.html`, and the Cloudflare adapter 307-redirects `/about` to
 * `/about/` — so emitting the final form directly means no internal link pays
 * for a redirect round trip.
 *
 * @example
 * lp('zh', '/about')            // → '/zh/about/'
 * lp('en', '/about')            // → '/about/'
 * lp('zh', '/contact', '#rfq')  // → '/zh/contact/#rfq'
 */
export function lp(locale: Locale, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  const [rawPath, hash] = clean.split('#');
  const suffix = hash ? `#${hash}` : '';
  const pathname = rawPath === '/' ? '/' : `${rawPath.replace(/\/+$/, '')}/`;
  if (locale === DEFAULT_LOCALE) return `${pathname}${suffix}`;
  return `/${locale}${pathname === '/' ? '/' : pathname}${suffix}`;
}

/** Alternate-language link for <link rel="alternate" hreflang>. */
export function hreflangPath(locale: Locale, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  const [rawPath, hash] = clean.split('#');
  const suffix = hash ? `#${hash}` : '';
  const pathname = rawPath === '/' ? '/' : `${rawPath.replace(/\/+$/, '')}/`;
  return locale === DEFAULT_LOCALE
    ? `${pathname}${suffix}`
    : `/${locale}${pathname === '/' ? '/' : pathname}${suffix}`;
}
