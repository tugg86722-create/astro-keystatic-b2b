# i18n 翻译规范（所有语言共用）

本仓库把站点拆成「英文母版 + 各语言副本」两层。你负责其中一个语言。

## 硬性约束（违反会导致构建失败或功能损坏）

### 1. 字符串包：`src/i18n/strings/{locale}/{common,pages,tools}.ts`

- **导出名必须一致**：`export const common = {...}` / `export const pages = {...}` / `export const tools = {...}`
- **key 树必须与英文母版逐字一致**——不增、不减、不改名、不改层级。
  校验命令：`node --experimental-strip-types scripts/check-i18n-parity.ts`
- 文件末尾的 `as const` 保留；`pages.ts` 里 FAQ 数组末尾的
  `] as { q: string; a: string; detail: string[] }[],` 和
  `entries: [...] as ResourceEntry[],` 这两个类型断言**必须原样保留**（只翻译字符串值）。
- `tools.ts` 里 `questions[].options[].score` 的**数值和顺序绝对不能动**——它决定风险分权重。
- `questions[].id` 不动（程序内部标识符）。
- `pages.resources.entries[]` 里的 `key` / `name` / `url` / `domain` / `category` **保持英文原样**，
  只翻译 `description`；`pages.resources.categories` 的四个分类名要翻译。
- 占位符原样保留：`{total}` `{clicks}` `{name}` `{email}` `{max}` `{error}` `{name}`（openInNewTab 里）等。
- `common.newsletter.success` / `failure` 里含 HTML 标签（`<strong>`、`<a>`），翻译文字但**保留标签**。
- `common.rfq.success` / `failure` 含 `{name}` `{email}` `{error}` 占位符，保留。

### 2. 内容集合：`src/content/products/{locale}/*.md` 和 `src/content/posts/{locale}/*.md`

- **文件名与 `en/` 目录完全一致**（3 个 products + 4 个 posts）。
- frontmatter 的 **key 名不能变**，value 里该翻译的翻译、该保留的保留：

  products frontmatter 规则：
  | 字段 | 处理方式 |
  |------|----------|
  | `title` | 翻译 |
  | `sku` | **保持原样**（如 `v4.2-LUXURY`） |
  | `category` | **保持原样**（英文分类标识符，用于筛选） |
  | `categoryLabel` | **翻译**（用于显示） |
  | `summary` | 翻译 |
  | `badge` | 翻译 |
  | `minOrderQty` | 翻译（这里是技术栈/指标描述） |
  | `leadTime` | 翻译 |
  | `image` | **保持原样**（图片 URL） |
  | `industry` | 翻译 |
  | `clientProfile` | 翻译 |
  | `engagementWindow` | 翻译 |
  | `year` | **保持原样** |
  | `headlineMetrics[].label` | 翻译 |
  | `headlineMetrics[].value` | **保持原样**（数字与指标，如 `26.2% → 7.4%`） |
  | `specs[].label` / `specs[].value` | 翻译 |
  | `features[]` | 翻译 |

  posts frontmatter 规则：
  | 字段 | 处理方式 |
  |------|----------|
  | `title` | 翻译 |
  | `publishedDate` | **保持原样** |
  | `author` | **保持原样**（Naif） |
  | `summary` | 翻译 |
  | `coverImage` | **保持原样**（图片 URL） |

- **Markdown 正文全文翻译**，保留原有的标题层级、表格、列表、代码块、强调格式。
- 正文里的**内部链接要跟着改语言前缀**：英文原文里 `/tools/click-loss-auditor` → 中文应写 `/zh/tools/click-loss-auditor`，
  `/contact#rfq` → `/zh/contact#rfq`，`/posts/xxx` → `/zh/posts/xxx`。
  也就是：**正文里所有指向站内绝对路径的链接都加 `/zh` 前缀**（对应你负责的语言前缀）。

## 翻译质量要求

- **写成目标语言母语者会写的营销文案**，不是逐词直译。语气：专业、直接、有主见，不要 AI 味，不要空话。
- 保留原文的说服力与节奏，不要弱化。原文里的破折号、括号补充、数字冲击感（`26.2% → 7.4%`）要保留。
- **技术专有名词保持英文**：Shopify、Shopify Plus、OS2.0、Liquid、Liquid Refactoring、Astro、Jamstack、
  Tailwind CSS、Cloudflare、Cloudflare Workers/Images/KV/Queues、V8 Isolates、Meta Ads、Meta Graph API、
  Meta Ads Manager、Meta Pixel、Conversions API、CAPI、TikTok Ads、Google Ads、GA4、Google Search Console、
  CrUX、Lighthouse、WebPageTest、PageSpeed Insights、Core Web Vitals、LCP、INP、CLS、TTFB、CWV、DOM、CSS、
  JavaScript、TypeScript、WASM、KV、RUM、CRO、AOV、GMV、ROAS、CTA、SEO、SLA、API、JSON、HTML、CSS、
  Puppeteer、Shopify Functions、Hydrogen、Oxygen、WordPress、Drupal、Magento、WooCommerce、BigCommerce、
  Klaviyo、Resend、React Email、QStash、Kafka、Redis、libSQL、Turso、Upstash、Keystatic、MDX、YAML、
  GitHub、Git、SPF、DKIM、DMARC、TLS、CSP、HSTS、Permissions-Policy、Referrer-Policy、DNS、DNSSEC、
  ASN、BGP、MX、SMTP、SpamAssassin、PayPal、Stripe、Chargeback、Card Network、Meta、Ad Library、
  WIPO、Trademark、Madrid System、Bill of Lading、Sea Shipment、USITC、First Class Mail、EMS、FBA。
- **不要翻译**代码块、终端输出、行内代码（如 `requestIdleCallback`、`event_id`、`getStaticPaths`）。
- 数字、单位、货币符号（$、%）、区间符号（`→`、`–`）保持不变。
- 术语一致性：同一个概念在所有文件里必须用同一个译法（术语表见下）。

## 术语表（建议译法，可按语言习惯微调但需全站统一）

| 英文 | 简体中文 | Español | Français | Deutsch | 日本語 |
|------|----------|---------|----------|----------|--------|
| Click-Loss Auditor | 点击流失审计器 | Auditor de Pérdida de Clics | Auditeur de Perte de Clic | Klick-Verlust-Prüfer | クリック損失監査 |
| Chargeback Risk Scorecard | 拒付风险评分卡 | Tarjeta de Riesgo de Chargeback | Scorecard de Risque de Chargeback | Chargeback-Risiko-Scorecard | チャージバックリスク評価 |
| Architecture Audit | 架构审计 | Auditoría de Arquitectura | Audit d'Architecture | Architektur-Audit | アーキテクチャ監査 |
| Conversion Sprint | 转化冲刺 | Sprint de Conversión | Sprint de Conversion | Conversion-Sprint | コンバージョンスプリント |
| Growth Retainer | 增长顾问合同 | Retenedor de Crecimiento | Contrat de Croissance récurrent | Growth-Retainer | グロース・リテイナー |
| White-Label Partnership | 白标合作 | Alianza de Marca Blanca | Partenariat White-Label | White-Label-Partnerschaft | ホワイトラベルパートナーシップ |
| The Ad-Waste Report | 广告浪费报告 | El Informe de Desperdicio Publicitario | Le Rapport sur le Gaspillage Publicitaire | Der Ad-Waste-Report | 広告浪費レポート |
| Core Web Vitals | 核心网页指标 | Signos Vitales Web | Signes Essentiels Web | Core Web Vitals | コアウェブバイタル |
| Fulfillment Truth | 履约真实度 | Verdad del Cumplimiento | Vérité de l'Exécution | Erfüllungswahrheit | フルフィルメントの真実 |
| Click-Loss Rate | 点击流失率 | Tasa de Pérdida de Clics | Taux de Perte de Clic | Klick-Verlust-Quote | クリック損失率 |
| Landing Page View | 落地页浏览 | Vista de Página de Aterrizaje | Vue de Page d'Atterrissage | Landingpage-Aufruf | ランディングページビュー |
| Outbound Click | 出站点击 | Clic Saliente | Clic Sortant | Ausgehender Klick | アウトバウンドクリック |
| High-Ticket | 高客单价 | Ticket Alto | Ticket Élevé | High-Ticket | ハイチケット |
| DTC (Direct-to-Consumer) | DTC（直接面向消费者） | DTC (Directo al Consumidor) | DTC (Direct au Consommateur) | DTC (Direct to Consumer) | DTC（消費者直販） |
| Full-Funnel | 全漏斗 | Embudo Completo | Entonnoir Complet | Full-Funnel | フルファネル |
| Storefront | 店铺前台 | Tienda | Boutique | Storefront | ストアフロント |
| Checkout Funnel | 结账漏斗 | Embudo de Checkout | Entonnoir de Paiement | Checkout-Funnel | チェックアウトファネル |
| Retention | 留存 | Retención | Rétention | Retention | リテンション |
| Post-Purchase | 购买后 | Pos-compra | Post-achat | Post-Purchase | ポスト 特别是：購入後 |

## 交付前自检（必须做）

1. `node --experimental-strip-types scripts/check-i18n-parity.ts` → 必须输出 `i18n parity OK`。
2. 确认 `src/content/{products,posts}/{locale}/` 下的文件名与 `en/` 完全一致（`ls` 对比）。
3. 确认所有 md 文件的 frontmatter key 与英文版一致（可用 `head -30` 对比）。
4. 确认没有残留未翻译的英文长句（专有名词除外）。
5. **不要运行 `npm run build`**（主线程会统一构建），但可以运行
   `npx astro check --minimumFailingSeverity error 2>&1 | sed 's/\x1b\[[0-9;]*m//g' | grep -E "^src/i18n/strings/{locale}"` 确认你的文件没有类型错误。
