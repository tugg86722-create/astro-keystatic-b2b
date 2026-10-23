#!/usr/bin/env python3
"""
Generate route wrapper pages for every locale.

English lives at the site root (Astro `prefixDefaultLocale: false`); every other
locale lives under its own directory (`src/pages/zh/...`). Each wrapper is a thin
shell that renders the shared page component with the right `locale` prop.

Run from the project root:  python scripts/generate_i18n_routes.py
"""
import os

LOCALES = ['zh', 'es', 'fr', 'de', 'ja']
PAGES = 'src/pages'

# (route path under src/pages, component file, component name)
STATIC_ROUTES = [
    ('index', 'HomePage', 'HomePage'),
    ('about', 'AboutPage', 'AboutPage'),
    ('services', 'ServicesPage', 'ServicesPage'),
    ('faq', 'FaqPage', 'FaqPage'),
    ('contact', 'ContactPage', 'ContactPage'),
    ('resources/index', 'ResourcesPage', 'ResourcesPage'),
    ('products/index', 'ProductsIndexPage', 'ProductsIndexPage'),
    ('tools/index', 'RoiToolPage', 'RoiToolPage'),
    ('tools/click-loss-auditor', 'ClickLossToolPage', 'ClickLossToolPage'),
    ('tools/chargeback-scorecard', 'ScorecardToolPage', 'ScorecardToolPage'),
]

DYNAMIC_ROUTES = [
    ('products/[slug]', 'ProductDetailPage', 'ProductDetailPage', 'products', 'product'),
    ('posts/[slug]', 'PostDetailPage', 'PostDetailPage', 'posts', 'post'),
]


def write(path, content):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)


def up(path):
    """Component import path relative to the wrapper file."""
    # path is relative to src/pages, e.g. 'zh/products/[slug]' -> depth 3
    depth = path.count('/') + 1
    return '../' * depth + 'components/pages/'


def static_wrapper(locale, route, component, name):
    rel = up(route)
    return f"""---
import {name} from '{rel}{component}.astro';
---

<{name} locale="{locale}" />
"""


def dynamic_wrapper(locale, route, component, name, collection, prop):
    rel = up(route)
    return f"""---
import {name} from '{rel}{component}.astro';
import {{ getCollection }} from 'astro:content';

export async function getStaticPaths() {{
  const entries = await getCollection('{collection}', ({{ id }}) => id.startsWith('{locale}/'));
  return entries.map((entry) => ({{
    params: {{ slug: entry.id.split('/').slice(1).join('/') }},
    props: {{ {prop}: entry }},
  }}));
}}

const {{ {prop} }} = Astro.props;
---

<{name} locale="{locale}" {prop}={{{prop}}} />
"""


def main():
    # English: root level, locale "en"
    for route, component, name in STATIC_ROUTES:
        write(os.path.join(PAGES, f'{route}.astro'), static_wrapper('en', route, component, name))
    for route, component, name, collection, prop in DYNAMIC_ROUTES:
        write(os.path.join(PAGES, f'{route}.astro'), dynamic_wrapper('en', route, component, name, collection, prop))

    # Other locales: prefixed directories
    for locale in LOCALES:
        for route, component, name in STATIC_ROUTES:
            full = f'{locale}/{route}'
            write(os.path.join(PAGES, locale, f'{route}.astro'), static_wrapper(locale, full, component, name))
        for route, component, name, collection, prop in DYNAMIC_ROUTES:
            full = f'{locale}/{route}'
            write(os.path.join(PAGES, locale, f'{route}.astro'), dynamic_wrapper(locale, full, component, name, collection, prop))

    print('generated i18n route wrappers')


if __name__ == '__main__':
    main()
