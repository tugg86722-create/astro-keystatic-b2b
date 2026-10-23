import type { Locale } from '../config';
import { common as enCommon } from './en/common';
import { pages as enPages } from './en/pages';
import { tools as enTools } from './en/tools';

import { common as zhCommon } from './zh/common';
import { pages as zhPages } from './zh/pages';
import { tools as zhTools } from './zh/tools';

import { common as esCommon } from './es/common';
import { pages as esPages } from './es/pages';
import { tools as esTools } from './es/tools';

import { common as frCommon } from './fr/common';
import { pages as frPages } from './fr/pages';
import { tools as frTools } from './fr/tools';

import { common as deCommon } from './de/common';
import { pages as dePages } from './de/pages';
import { tools as deTools } from './de/tools';

import { common as jaCommon } from './ja/common';
import { pages as jaPages } from './ja/pages';
import { tools as jaTools } from './ja/tools';

/**
 * Widen the `as const` literal types from the English master into plain
 * `string` / `number` types, so every other locale is structurally checked
 * against the English shape without being forced to match its exact wording.
 */
type Widen<T> = T extends string
  ? string
  : T extends number
    ? number
    : T extends boolean
      ? boolean
      : T extends readonly (infer U)[]
        ? readonly Widen<U>[]
        : { -readonly [K in keyof T]: Widen<T[K]> };

export interface Strings {
  common: Widen<typeof enCommon>;
  pages: Widen<typeof enPages>;
  tools: Widen<typeof enTools>;
}

const bundles: Record<Locale, Strings> = {
  en: { common: enCommon, pages: enPages, tools: enTools },
  zh: { common: zhCommon, pages: zhPages, tools: zhTools },
  es: { common: esCommon, pages: esPages, tools: esTools },
  fr: { common: frCommon, pages: frPages, tools: frTools },
  de: { common: deCommon, pages: dePages, tools: deTools },
  ja: { common: jaCommon, pages: jaPages, tools: jaTools },
};

export function getStrings(locale: Locale): Strings {
  return bundles[locale];
}

export { enCommon, enPages, enTools };
