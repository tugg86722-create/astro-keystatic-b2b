# Apex Precision — B2B Industrial Showcase & RFQ Engine
> **Architecture**: Astro 5/7 (Zero-JS Islands) + Keystatic (Embedded Visual Git CMS) + Cloudflare (Edge Pages & Serverless Workers)

This is a modern, high-converting, 100% free-tier serverless template engineered for **foreign trade B2B manufacturers, export distributors, and industrial showcase websites**.

---

## 🌟 Key Architecture Highlights

1. **Google Core Web Vitals (Lighthouse 95-100)**:
   - Built on Astro’s **Zero-JS by Default** Islands architecture.
   - All marketing, product catalog, and specification pages are pre-rendered into pure static HTML during build (sub-2s build time).
2. **Embedded Visual CMS (Keystatic)**:
   - Visit `/keystatic` in your browser.
   - Provides a Notion-grade, rich-text visual editing dashboard for non-technical sales/operations staff.
   - In development: Saves directly to local files (`src/content/products/`).
   - In production: Commits directly to your GitHub repository via GitHub OAuth, triggering instant Cloudflare Pages re-deployment.
3. **Serverless Edge RFQ Lead Capture (`/api/rfq`)**:
   - Zero-server dependency: Runs on Cloudflare Workers / Pages Functions.
   - Handles buyer inquiries, DFM quotation requests, and drawing notes.
   - Ready to connect with **Resend** (3,000 free transactional emails/mo) or Feishu/Slack Webhooks.
4. **Rich SEO & Google Structured Data**:
   - Built-in Schema.org `Product`, `Organization`, and `BreadcrumbList` JSON-LD tags for Google Rich Snippets (star ratings, in-stock badges, and price terms).

---

## 📁 Directory Structure

```
astro-keystatic-b2b/
├── keystatic.config.ts          # Keystatic CMS schemas (Products, Posts, Global Settings)
├── astro.config.mjs             # Astro config (Cloudflare Adapter + React + Tailwind v4)
├── src/
│   ├── content.config.ts        # Astro Content Collections (Zod schema validation)
│   ├── content/
│   │   ├── products/            # Markdown products with specs, MOQs, and lead times
│   │   ├── posts/               # Technical whitepapers & engineering insights
│   │   └── settings/            # Global company contact & slogan
│   ├── layouts/
│   │   └── Layout.astro         # Global HTML layout with SEO meta, OpenGraph, Navbar, Footer
│   ├── components/
│   │   ├── ProductCard.astro    # High-converting product card with hover zoom & tags
│   │   └── RfqForm.astro        # Interactive B2B inquiry form with validation
│   ├── pages/
│   │   ├── index.astro          # Hero, Value metrics, Product highlights, Factory audit
│   │   ├── products/
│   │   │   ├── index.astro      # Full catalog with dynamic category filters
│   │   │   └── [slug].astro     # Dynamic product data sheet + Specs matrix + Lead capture
│   │   ├── contact.astro        # Factory address, WhatsApp, emergency hotline, RFQ
│   │   └── api/
│   │       └── rfq.ts           # Serverless Edge API route on Cloudflare Workers
│   └── styles/
│       └── global.css           # Tailwind CSS v4 design tokens
└── dist/                        # Cloudflare Pages production build output
```

---

## 🚀 Quick Start (Local Development)

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
- Open `http://localhost:4321` to view the website.
- Open `http://localhost:4321/keystatic` to launch the visual CMS dashboard!

### 3. Production Build Test
```bash
npm run build
```

---

## ☁️ 1-Click Deployment to Cloudflare Pages

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Astro + Keystatic B2B Showcase"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **Connect to Cloudflare Pages**:
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/) → **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
   - Select your repository.
   - Configure Build Settings:
     - **Framework preset**: `Astro`
     - **Build command**: `npm run build`
     - **Build output directory**: `dist`
   - Click **Save and Deploy**. Your site will be globally live on 300+ edge locations in ~1 minute!

3. **Enable GitHub Cloud Editing in Keystatic**:
   - Create a GitHub Personal Access Token or Keystatic GitHub App.
   - In Cloudflare Pages Settings → **Environment Variables**, set:
     - `KEYSTATIC_GITHUB_REPO`: `YOUR_USERNAME/YOUR_REPO`
   - Non-technical colleagues can now visit `yourdomain.com/keystatic`, log in with GitHub, and publish products with zero terminal commands!
