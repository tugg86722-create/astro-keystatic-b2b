# NAIF // DTC — Personal Site & Advisory Portfolio

> **Astro 7 (Zero-JS Islands) + Keystatic (Git-backed CMS) + Cloudflare Edge**

Production site: **https://naif.is-a.dev** (Worker: `astro-keystatic-b2b`)

A single-founder advisory site and lead-generation engine for high-ticket DTC brands.
Positioning: *DTC eCommerce Operator & Full-Funnel Growth Architect* — storefront
architecture, ad landing-page CRO, Klaviyo lifecycle retention, and fulfilment-truth /
chargeback defense.

---

## Stack

| Layer | Choice |
|-------|--------|
| Framework | Astro 7 (`output: static` + `mode: server` via Cloudflare adapter) |
| CMS | Keystatic — content lives in `src/content/**` as Markdown, committed to Git |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`), dark slate/blue design system |
| Runtime | Cloudflare Workers + KV (sessions) + Cloudflare Images |
| Islands | React 19 (only where interactivity is required) |
| Analytics | GA4 (`G-0BBTJFBP4K`), Microsoft Clarity (`z14d2fqnie`), first-party `/api/telemetry` |

---

## Routes

```
/                              Home — hero, 4 pillars, fit check, tool matrix, RFQ
/services                      Engagement tiers, price ranges, process, "not a fit"
/faq                           13 FAQs + FAQPage JSON-LD
/products                      Case study index (filterable by category)
/products/[slug]               Individual case study deep-dive
/posts/[slug]                  Whitepapers / technical guides
/tools                         Ad ROI & Latency calculator
/tools/click-loss-auditor      Meta outbound clicks vs GA4 landing views reconciler
/tools/chargeback-scorecard    8-question seller-health / chargeback risk quiz
/resources                     24-tool curated operator & trade hub
/about                         Background, pillars, working model
/contact                       RFQ form (→ /api/rfq)
```

### Internationalisation

Six locales: `en` (default, served from the root), `zh`, `es`, `fr`, `de`, `ja`.
Non-default locales live under their own prefix (`/zh/about`, `/ja/tools`, …).

| Piece | Location |
|-------|----------|
| Locale list + URL helpers (`lp`, `hreflangPath`) | `src/i18n/config.ts` |
| English master string packs | `src/i18n/strings/en/{common,pages,tools}.ts` |
| Per-locale string packs | `src/i18n/strings/{locale}/{common,pages,tools}.ts` |
| Shared page components (take a `locale` prop) | `src/components/pages/*.astro` |
| Route wrappers (thin shells, 72 files) | `src/pages/**` + `src/pages/{locale}/**` |
| Translated case studies & posts | `src/content/{products,posts}/{locale}/` |

`src/i18n/strings/index.ts` derives the `Strings` type from the English master, so
every other locale is type-checked against the English shape — a missing key is a
compile error, not a runtime blank.

**Content ids are locale-prefixed** (`en/foo`, `zh/foo`); the slug after the
first `/` segment is the route slug.

### Maintenance scripts

```bash
# Regenerate the 72 route wrapper pages (run after adding a locale or a page)
python scripts/generate_i18n_routes.py

# Verify every locale's key tree matches the English master
node --experimental-strip-types scripts/check-i18n-parity.ts

# Translation rules, field mapping table and glossary
# → scripts/i18n-translation-spec.md
```

### Serverless edge endpoints

| Endpoint | Purpose |
|----------|---------|
| `POST /api/rfq` | Advisory inquiry intake (validated, logged, 24h response SLA) |
| `POST /api/subscribe` | Newsletter / report-gate email capture |
| `GET /api/telemetry` | First-party, zero-intrusion conversion event bus |

---

## Content model

`src/content.config.ts` defines two collections with Zod validation.

**`products`** — case studies. Frontmatter fields include `title`, `sku`, `category`,
`categoryLabel`, `summary`, `badge`, `specs[]`, `features[]`, plus credibility fields for
prospect-facing detail: `industry`, `clientProfile`, `engagementWindow`, `year`,
`headlineMetrics[]`.

> ⚠️ Quote all `headlineMetrics[].value` strings in YAML — unquoted values like `4`
> are parsed as non-string types and fail schema validation.

**`posts`** — whitepapers. Fields: `title`, `publishedDate`, `author`, `summary`,
`coverImage`.

> ⚠️ Content lives under a locale sub-directory (`en/`, `zh/`, …). The collection id is
> `<locale>/<slug>`, so `getCollection('posts', ({ id }) => id.startsWith('zh/'))` filters
> by language and `id.split('/')[1]` is the route slug.

---

## Local development

```bash
npm install
npm run dev        # http://localhost:4321  (CMS at /keystatic)
npm run build
npm run preview
```

> **Windows note:** if `npm run build` fails at `prerendering static routes` with
> `fetch failed` / `other side closed`, the Cloudflare prerenderer's local workerd
> connection is being intercepted by proxy environment variables. Build with them
> unset:
>
> ```bash
> env -u HTTP_PROXY -u HTTPS_PROXY -u http_proxy -u https_proxy -u ALL_PROXY -u all_proxy npm run build
> ```

---

## Deployment

Cloudflare Worker deployment (the site is not on Pages — it is a Worker with the
Astro Cloudflare adapter).

```bash
npm run build
npx wrangler deploy
```

Verify what is live:

```bash
npx wrangler deployments list --name astro-keystatic-b2b
```

---

## Conventions

- **Content edits go through Keystatic** in dev, or by editing `src/content/**`
  Markdown directly in production. Both paths write the same files.
- **Public CMS links are hidden** from the site UI by design — `/keystatic` is not
  linked in the nav or footer.
- **Price ranges on `/services` are indicative** and live in
  `src/pages/services.astro`; update them there when they change.
- **Design tokens**: `bg-slate-950` base, `bg-slate-900` panels, `border-slate-800`,
  `text-blue-400` accent, `text-xs` body copy, `font-mono` for data. Reuse the
  existing class vocabulary rather than introducing new colors.
