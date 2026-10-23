export interface ResourceEntry {
  key: string;
  name: string;
  url: string;
  domain: string;
  category: 'performance' | 'edge' | 'diagnostics' | 'intelligence';
  /** Localised description. */
  description: string;
}

export const pages = {
  home: {
    meta: {
      title: 'Naif | DTC eCommerce Operator & Full-Funnel Growth Architect',
      description:
        'Scaling high-ticket DTC brands with sub-second speed, Meta ad landing page CRO, automated Klaviyo retention, and 100% data-driven conversion.',
    },
    hero: {
      pill: 'DTC eCommerce Operator & Full-Funnel Growth Architect',
      titleLead: 'Scaling High-Ticket DTC Brands with',
      titleHighlight: 'Sub-Second Speed',
      titleTail: '& Full-Funnel Precision.',
      lead:
        'Bridging the gap between luxury brand storytelling, technical storefront performance, and Meta/Google ad profitability. Zero bloated plugins, zero cheap AI plastic slop, 100% data-driven conversion.',
      fitPrefix: 'Who I work with:',
      fitBody:
        'DTC brands doing $50k–$2M/month in revenue, typically $99+ AOV, that are already spending on paid traffic and losing it before the page renders.',
      fitLink: 'See if that is you →',
    },
    benchmarks: {
      cwv: 'Core Web Vitals Mobile Score',
      clickLoss: 'Ad Click-to-Landing Loss Rate (vs 25%+ avg)',
      klaviyo: 'Automated Klaviyo Revenue Contribution',
      ticket: 'High-Ticket Conversion Architecture',
    },
    cases: {
      eyebrow: 'Production DTC Deployments',
      heading: 'Full-Funnel Case Studies',
    },
    pillars: {
      eyebrow: 'Core Growth & Architecture Tenets',
      heading: 'The 4 Pillars of High-Ticket DTC Engineering',
      lead:
        'I eliminate ad budget waste, bloated app stacks, and conversion friction to build profitable, resilient DTC operations.',
      items: [
        {
          title: 'High-Ticket DTC Storefronts',
          body: 'Bespoke Shopify OS2.0 & Jamstack builds, 6-shot anti-slop visual direction, and mobile-first purchase flows tailored for luxury $99+ price points.',
        },
        {
          title: 'Ad Landing Page CRO & Traffic Defense',
          body: 'Eliminating mobile bounce rates, direct-to-checkout flows, and Outbound Click leakage on Meta & TikTok Ads. Sub-second LCP ensures zero ad dollar waste.',
        },
        {
          title: 'Automated Retention & Lifecycle (Klaviyo)',
          body: 'Zero-touch browse abandonment, VIP win-back sequences, and post-purchase customer delight that consistently drives 15%+ baseline automated revenue.',
        },
        {
          title: 'Fulfillment Truth & Chargeback Shield',
          body: 'Aligning digital storefront promises with real parcel fulfillment to preempt PayPal & Stripe disputes, ensuring sustainable operational health.',
        },
      ],
    },
    fitCheck: {
      eyebrow: 'Fit Check',
      headingLead: 'The honest version of',
      headingHighlight: 'who this works for',
      lead:
        'The fastest way to waste both our time is a bad fit. Here is the filter I actually apply — and I would rather lose the deal than take it badly.',
      goodTitle: 'This is a fit if…',
      badTitle: 'This is not a fit if…',
      good: [
        'You are past $50k/month and already running paid traffic',
        'Your AOV is $99+ and checkout friction is visibly high',
        'Mobile PageSpeed is red and nobody owns it',
        'Klaviyo exists but the flows were never rebuilt',
        'You can get a decision-maker to approve changes weekly',
      ],
      bad: [
        'You are under roughly $50k/month in revenue',
        'You need a guaranteed conversion lift in month one',
        'You want someone to make the decisions for you',
        'You are single-SKU dropshipping or gray-market resale',
        'You have no paid traffic yet — start with the free audit instead',
      ],
    },
    diagnostics: {
      eyebrow: 'Run It Yourself First',
      heading: 'Free Diagnostics For Your Store',
      lead:
        'These are the same engines I use inside paid audits. No signup, no pitch — run them on your own numbers and decide if the work is worth it.',
      clickLossTitle: 'Click-Loss Auditor',
      clickLossDesc:
        'Reconcile Meta outbound clicks against GA4 landing page views. Prices the gap and tells you if it is rendering loss or a tracking artifact.',
      scorecardTitle: 'Chargeback Risk Scorecard',
      scorecardDesc:
        'Eight questions, one risk score, and the specific fix for every red flag — from fulfilment truth to dispute evidence packs.',
      roiTitle: 'Ad ROI & Latency Calculator',
      roiDesc:
        'Quantify what mobile load time costs you in wasted ad spend, lost clicks and recoverable orders — grounded in Google field data.',
    },
    articles: {
      eyebrow: 'Publications & Whitepapers',
      heading: 'Technical Writing & Case Studies',
      read: 'Read Architecture Whitepaper',
    },
  },

  about: {
    meta: {
      title: 'About Naif | DTC eCommerce Operator & Full-Funnel Growth Architect',
      description:
        'DTC eCommerce Operator bridging the gap between high-ticket storefront architecture, sub-second edge performance, Meta ad economics, and automated Klaviyo retention.',
    },
    hero: {
      pill: 'Available for DTC Brand Architecture, CRO & Growth Advisory',
      titleLead: 'Scaling High-Ticket DTC with',
      titleHighlight: 'Engineering Precision',
      titleTail: '& Ad Profitability.',
      quote:
        '"I live in the trenches of cross-border ecommerce. Unlike pure coders who don\'t understand ad spend, and unlike media buyers who don\'t understand web architecture, I bridge the full spectrum: from theme code and edge performance to Meta ad economics and customer retention."',
      lead:
        'With deep hands-on expertise operating high-ticket ($99+) Shopify OS2.0 and Jamstack storefronts, I eliminate the hidden leaks that drain ad spend: mobile landing page delays, unoptimized checkout flows, disconnects between digital promises and physical fulfillment, and neglected post-purchase retention.',
    },
    attributes: {
      locationLabel: 'Location',
      locationValue: 'Remote Worldwide',
      locationNote: 'UTC+8 / US Friendly',
      focusLabel: 'Primary Focus',
      focusValue: 'High-Ticket DTC & CRO',
      focusNote: 'Shopify, Meta Ads, Klaviyo',
      metricLabel: 'Performance Metric',
      metricValue: '< 8% Click-Loss Rate',
      metricNote: '100/100 Mobile CWV',
    },
    stack: {
      eyebrow: 'Technical & Operational Stack',
      heading: 'Full-Funnel DTC Tech Stack Radar',
      lead:
        'A battle-tested stack combining enterprise storefront architecture, performance engineering, ad attribution, and retention automation.',
      items: [
        {
          title: 'Storefront & Speed',
          desc: 'Eliminating client-side runtime bloat with custom Liquid, Astro Islands, and edge caching.',
        },
        {
          title: 'Traffic & CRO',
          desc: 'Direct-to-checkout funnels, anti-slop visual directing, and high-ticket copywriting frameworks.',
        },
        {
          title: 'Attribution & Telemetry',
          desc: 'Forensic analysis of ad click drop-off, server-side attribution, and zero-intrusion telemetry.',
        },
        {
          title: 'Retention & Protection',
          desc: 'Automated customer lifecycle sequences and defense against customer disputes and chargebacks.',
        },
      ],
    },
    pillars: {
      eyebrow: 'Strategic Tenets',
      heading: 'The 4 Strategic Pillars',
      lead:
        'Every client brand, storefront refactor, and growth initiative is engineered according to these four uncompromising standards.',
      items: [
        {
          title: 'Storefront Architecture & Speed',
          body: 'Shopify OS2.0, Liquid refactoring, Astro Jamstack, and sub-second Core Web Vitals. Eliminating bloated third-party apps and asset drag so mobile visitors experience instant page loads without bounce friction.',
          result: '100/100 Mobile CWV • LCP < 0.8s Guarantee',
        },
        {
          title: 'Conversion Rate Optimization (CRO)',
          body: '6-shot visual directing (hero, unboxing, dynamic drape, lifestyle, gemstone macro, flatlay), high-ticket copywriting (Hook-FAB-Ideal), and friction-free checkout funnels tailored to command premium $99+ prices.',
          result: 'High-Ticket Trust • Friction-Free Direct-to-Checkout',
        },
        {
          title: 'Traffic & Attribution Defense',
          body: 'Meta Graph API integration, click-loss auditing, GA4 funnel forensics, and zero-intrusion event tracking. We audit and close the 15%–30% gap between paid Outbound Clicks and real Landing Page Views.',
          result: '< 8% Click-Loss Rate • True ROAS Transparency',
        },
        {
          title: 'Operations & Brand Protection',
          body: 'Klaviyo lifecycle journeys (welcome, abandoned browse, VIP post-purchase) paired with physical parcel fulfillment audits. Aligning storefront promises with packaging reality prevents chargebacks and payment processor holds.',
          result: '15%+ Automated Flow Revenue • Zero Chargeback Holds',
        },
      ],
    },
    flow: {
      eyebrow: 'Working Process',
      heading: 'Full-Funnel DTC Execution Flow',
      lead:
        'A predictable, data-backed execution framework designed to eliminate ad spend waste and scale brand revenue.',
      items: [
        {
          title: 'Growth & Speed Audit',
          body: 'Deep forensic audit of Meta Outbound Clicks vs GA4 Landing Page Views, mobile Lighthouse CWV, checkout drop-off, and fulfillment promise alignment.',
          timeline: '2-3 Days',
        },
        {
          title: 'CRO & Visual Prototyping',
          body: 'Deploying 6-shot anti-slop visual direction, high-ticket Hook-FAB-Ideal copy, and friction-free direct-to-checkout flows on a staging environment.',
          timeline: '5-7 Days',
        },
        {
          title: 'Launch & Traffic Cutover',
          body: 'Zero-downtime theme deployment, CDN edge acceleration, Meta Pixel event deduplication, and real-time checkout monitoring under ad traffic.',
          timeline: '1-2 Weeks',
        },
        {
          title: 'Retention & Health Defense',
          body: 'Automating Klaviyo lifecycle flows, multi-language parity checks, customer unboxing audits, and chargeback prevention to protect seller health.',
          timeline: 'Ongoing Monitoring',
        },
      ],
    },
    cta: {
      badge: 'Direct Strategic Partnership',
      heading: 'Ready to scale your high-ticket DTC brand profitably?',
      lead:
        'Whether you are bleeding ad dollars on slow mobile landing pages, struggling to convert high-ticket traffic, or seeking automated Klaviyo retention — let\'s build a profitable system.',
      emailButton: 'Email Me: contact@naif.is-a.dev',
    },
  },

  services: {
    meta: {
      title: 'Engagement Tiers & Pricing — DTC Architecture, CRO & Klaviyo Advisory | Naif',
      description:
        'Transparent engagement ranges for DTC architecture audits, conversion sprints, growth retainers and white-label agency work. Fixed scope, written quote, no hourly billing.',
    },
    header: {
      badge: 'Fixed Scope · Written Quote · No Hourly Billing',
      headingLead: 'Four Ways to',
      headingHighlight: 'Work Together',
      lead:
        'Indicative ranges so you can self-qualify before we ever speak. Every engagement is quoted in writing with a fixed scope and a fixed price — if the scope changes, you approve the change first.',
    },
    tiers: [
      {
        name: 'Architecture Audit',
        price: '$1,500 – $3,500',
        priceNote: 'one-time, fixed scope',
        duration: '2–3 days',
        bestFor: 'Brands that suspect they are leaking money but do not know where.',
        includes: [
          'Forensic teardown of storefront, tracking and retention stack',
          'Meta outbound clicks vs GA4 landing page views reconciliation',
          'Mobile CWV field-data audit (LCP / INP / CLS at p75)',
          'Klaviyo flow, segmentation and deliverability review',
          'Fulfillment-promise vs delivery-reality gap check',
          'Prioritized written report with revenue-weighted fixes',
        ],
      },
      {
        name: 'Conversion Sprint',
        price: '$5,000 – $12,000',
        priceNote: 'one-time, fixed scope',
        duration: '4–6 weeks',
        bestFor: 'Brands ready to ship fixes, not just receive a document.',
        includes: [
          'Everything in the Architecture Audit, re-run as a live baseline',
          'Implementation of the 3–5 highest-impact changes, in your theme',
          'Liquid / JS / CSS written and shipped to staging first',
          'Ad landing page or direct-to-checkout flow rebuild',
          'Before / after measurement on CVR, revenue per session and CWV',
          'Loom walkthrough plus written handover documentation',
        ],
      },
      {
        name: 'Growth Retainer',
        price: '$3,000 – $8,000',
        priceNote: 'per month, 30 days notice',
        duration: 'Ongoing, quarterly roadmap',
        bestFor: 'Teams that need a senior operator in the loop every month.',
        includes: [
          'Monthly testing roadmap tied to revenue, not vibes',
          'Continuous CRO and performance maintenance',
          'Klaviyo flow expansion and lifecycle program ownership',
          'Ad landing page and creative-direction iteration',
          'Weekly reporting on traffic, funnel and retention',
          'Direct access — no account manager, no ticket queue',
        ],
      },
      {
        name: 'White-Label Partnership',
        price: 'Scoped per agency',
        priceNote: 'agency rate card',
        duration: 'Per project or ongoing',
        bestFor: 'Agencies and in-house teams that need senior CRO capacity.',
        includes: [
          'Audit and implementation delivered in your brand and your deck',
          'No client-facing contact from me — you stay the relationship owner',
          'Senior CRO, performance and Klaviyo capacity without headcount',
          'Conflict-free, with a simple monthly rate card',
          'Your client reporting template, your SLA',
        ],
      },
    ],
    footnote:
      'Ranges reflect typical scope for brands in the $50k–$2M/month band. Final quotes are fixed-scope and written before work begins. Payment terms: 50% to schedule, 50% on delivery for fixed-scope work; retainers billed monthly in advance.',
    process: {
      eyebrow: 'How The Engagement Runs',
      heading: 'A Predictable, Data-Driven Process',
      lead: 'The same four stages on every engagement — from a single audit to a full-scope advisory contract.',
      items: [
        {
          stage: 'Stage 01',
          title: 'Audit & Baseline',
          duration: '2–3 days',
          detail:
            'Forensic teardown of storefront, ad tracking, retention and fulfillment. We agree the baseline together before a single line changes — conversion rate, revenue per session, p75 field CWV, click-loss rate.',
        },
        {
          stage: 'Stage 02',
          title: 'Prioritized Roadmap',
          duration: 'Day 3 – 4',
          detail:
            'A ranked list of fixes scored by revenue impact against effort, not a 50-slide deck. You see exactly what ships in the sprint and what waits.',
        },
        {
          stage: 'Stage 03',
          title: 'Implementation & Traffic Switch',
          duration: '4–6 weeks',
          detail:
            'The highest-impact changes are written into a duplicate theme or staging environment, reviewed against CWV and conversion impact, then shipped with zero downtime.',
        },
        {
          stage: 'Stage 04',
          title: 'Retention & Health Defense',
          duration: 'Ongoing',
          detail:
            'Klaviyo lifecycle flows, fulfillment-truth auditing and multi-language consistency checks run continuously to protect LTV, reputation and payment processing health.',
        },
      ],
    },
    notFit: {
      eyebrow: 'Before You Hire Me',
      headingLead: 'When I am the',
      headingHighlight: 'wrong fit',
      lead:
        'The most expensive thing I can do is take a job I cannot make work. These are the situations where I will point you somewhere else — and I will say so on the first call.',
      items: [
        {
          title: 'Under roughly $50k/month in revenue',
          detail:
            'The fee becomes a material percentage of margin. A free Shopify theme plus one focused CRO session usually outperforms what I would charge.',
        },
        {
          title: 'Single-SKU dropshipping or gray-market resale',
          detail:
            'There is no long-term customer relationship to protect and no brand premium to defend. The economics do not support this kind of work.',
        },
        {
          title: 'Looking for a guaranteed conversion lift',
          detail:
            'Anyone promising a month-one lift is describing seasonality. I can promise process, measurement and a documented baseline — not a number I do not control.',
        },
        {
          title: 'You need someone to make the decisions for you',
          detail:
            'This is advisory plus implementation, not a managed department. I need a decision-maker on your side who can approve changes inside a sprint.',
        },
      ],
    },
    cta: {
      heading: 'Start With the Cheapest Honest Answer',
      lead:
        'Run the free diagnostics below, or send your store URL and I will tell you which tier actually fits — even if the answer is “none of them yet”.',
    },
  },

  faq: {
    meta: {
      title: 'FAQ — DTC Architecture, CRO & Klaviyo Advisory | Naif',
      description:
        'Direct answers on engagement costs, timelines, platform coverage, access requirements, NDA handling, measurement standards and who this service is actually for.',
    },
    header: {
      badgePrefix: 'Before You Write In —',
      badgeSuffix: 'Direct Answers',
      headingLead: 'Questions',
      headingHighlight: 'Answered',
      headingTail: 'Before You Ask',
      lead:
        'Cost, timeline, access, NDA, measurement, and — just as importantly — the situations where I will tell you not to hire me. If your question is not here, ask it directly and you will get a straight answer within 24 hours.',
    },
    items: [
      {
        q: 'What does a DTC architecture engagement actually cost?',
        a: 'Three ways to work together, with indicative ranges so you can self-qualify before we ever talk. Every scope is quoted in writing before any work starts — no hourly billing, no surprise invoices.',
        detail: [
          'Architecture Audit — $1,500–$3,500. A 2–3 day forensic teardown of your storefront, ad tracking and retention stack, delivered as a prioritized written report with revenue-weighted fixes.',
          'Conversion Sprint — $5,000–$12,000. A 4–6 week implementation program: the highest-impact 3–5 changes shipped directly into your theme, measured before and after.',
          'Growth Retainer — $3,000–$8,000/month. Ongoing CRO, performance and Klaviyo work with a monthly roadmap, testing cadence and direct access.',
        ],
      },
      {
        q: 'How long before we see results?',
        a: 'The audit lands in 2–3 days, and the first sprint findings usually ship inside the first two weeks of implementation. But honest framing: a testing programme needs roughly 90 days before you can read the programme rather than a single result. Anyone promising you a conversion lift in month one is describing seasonality, not work.',
        detail: [
          'Days 1–3: audit, baseline agreement, prioritized roadmap',
          'Weeks 1–2: first batch of fixes shipped and live',
          'Weeks 3–8: test cycles, read-outs, compounding revenue impact',
        ],
      },
      {
        q: 'Which platforms do you work with?',
        a: 'Shopify is my home turf — OS 2.0 and Shopify Plus, Liquid, Shopify Functions, custom sections, headless Hydrogen/Oxygen where it earns its keep, and Jamstack (Astro) storefronts. I also take on WooCommerce and BigCommerce replatforming into Shopify Plus.',
        detail: [
          'Storefront: Shopify OS 2.0, Shopify Plus, Hydrogen, Astro/Jamstack',
          'Data & tracking: GA4, Meta Graph API, Conversions API, GTM, Shopify Web Pixels',
          'Retention: Klaviyo flows, SMS, loyalty and subscription integrations',
        ],
      },
      {
        q: 'Can you work with our team in another timezone?',
        a: 'Yes. I am UTC+8, which overlaps the US East Coast evening, the European morning and the APAC workday. Sprint deadlines and incidents do not respect timezones, so I keep a written async trail — Loom walkthroughs, written notes and a shared board — so nothing depends on us being awake at the same moment.',
        detail: [],
      },
      {
        q: 'What access do you need from us to start?',
        a: 'Read access is enough to start: your GA4 property, your Meta Ads Manager account, and Shopify collaborator access. I do not need — and will not ask for — your Meta password or full admin rights on day one. Staging or a duplicate theme is preferable so your live store keeps trading while I work.',
        detail: [
          'GA4 property (viewer)',
          'Meta Ads Manager (advertiser read access)',
          'Shopify collaborator access, or a duplicate theme branch',
          'Klaviyo account read access for retention work',
        ],
      },
      {
        q: 'Will you work under NDA?',
        a: 'Always, and it is the default. Most of the engagements I run are under NDA because the work is commercially sensitive. I will publish anonymized case studies with the real numbers intact — your data, your metrics, your brand removed.',
        detail: [],
      },
      {
        q: 'How do you prove a change actually worked?',
        a: 'We agree the baseline before the first change ships, then track conversion rate, revenue per session, p75 field CWV (LCP, INP, CLS), click-to-landing loss rate and chargeback rate against it. If a test loses, it gets rolled back. No vanity wins, no screenshots of a good day.',
        detail: [],
      },
      {
        q: 'Can you guarantee a conversion rate lift?',
        a: 'No, and you should be suspicious of anyone who does. What I guarantee is the process: a documented baseline, a prioritized roadmap, changes shipped inside your theme, and measurement that either confirms or kills each hypothesis. The lift is the outcome — it is not a contract term.',
        detail: [],
      },
      {
        q: 'Do you only do strategy, or do you actually implement?',
        a: 'I implement. Strategy handed to an in-house team usually dies in the backlog, especially when the fix is a Liquid loop, a Meta event, or a Klaviyo flow. I write the code, ship it into a staging theme, and hand over a Loom walkthrough plus written notes so your team owns it afterwards.',
        detail: [],
      },
      {
        q: 'We already work with a Shopify agency. Can you still help?',
        a: 'Yes, and this is a well-trodden path. I work white-label for agencies that need senior CRO and performance capacity without adding headcount — your team keeps the client relationship, I do the audit and the implementation, everything is delivered in your brand. It is also how I keep a steady pipeline without building a sales team.',
        detail: [],
      },
      {
        q: 'We are a small store. Is this worth it for us?',
        a: 'Honestly, often no. Below roughly $50,000/month in revenue the fee would be a meaningful percentage of margin, and the cheaper fix is usually a well-built free Shopify theme plus one focused CRO session. I will tell you that on the first call rather than sell you a retainer you cannot justify.',
        detail: [],
      },
      {
        q: 'We have no paid traffic yet. Can you help?',
        a: 'On storefront, speed and CRO — yes, absolutely. On ad-spend efficiency and click-loss recovery — not yet, because there is no click data to reconcile. Start with the audit, get the site fast and conversion-ready, and revisit paid traffic when there is budget behind it.',
        detail: [],
      },
      {
        q: 'What happens after the engagement ends?',
        a: 'You keep everything: the code, the Liquid, the Klaviyo flows, the GA4 events, the documentation and the measurement setup. The retainer is a convenience, not a lock-in. If the work is not paying, the exit should not be the hard part.',
        detail: [],
      },
    ] as { q: string; a: string; detail: string[] }[],
    cta: {
      heading: 'Your question is not on this page',
      lead:
        'Good — that usually means it is the interesting one. Send it with your store URL and I will answer it with specifics, not a brochure.',
    },
  },

  contact: {
    meta: {
      title: 'Work With Me | DTC Architecture & Growth Advisory | Naif',
      description:
        'Contact Naif for high-ticket DTC Shopify/Jamstack storefront architecture, Meta ad landing page CRO, Klaviyo retention systems, and growth advisory.',
    },
    eyebrow: 'DTC Growth Engagement & Contracts',
    heading: 'Work With Me / DTC Architecture & Advisory',
    lead:
      'I partner with high-ticket DTC brands, luxury ecommerce founders, and scaling cross-border operators to build high-converting storefronts, eliminate ad leakage, and protect seller health.',
    channelsHeading: 'Direct Channels',
    emailLabel: 'Work Email:',
    githubLabel: 'GitHub Profile:',
    availabilityLabel: 'Availability & Timezones:',
    availability:
      'Open for DTC architecture audits, conversion sprints, and growth advisory contracts. Flexible overlap with US, European, and APAC brand teams.',
    offeringsHeading: 'Core Engagement Offerings',
    offerings: [
      {
        title: 'High-Ticket Storefront Architecture',
        body: 'Custom Shopify OS2.0 & Jamstack builds with 6-shot anti-slop visual direction.',
      },
      {
        title: 'Meta/Google Ad Landing Page CRO',
        body: 'Slashing mobile click-to-landing loss from 25%+ down to < 8%.',
      },
      {
        title: 'Klaviyo Lifecycle Retention',
        body: 'High-converting welcome sequences, browse abandonment, and VIP retention.',
      },
      {
        title: 'Fulfillment Truth & Chargeback Shield',
        body: 'Preempting PayPal & Stripe disputes by aligning digital claims with physical parcel delivery.',
      },
    ],
  },

  rfq: {
    badge: 'DTC Architecture & Growth Consultation',
    heading: 'Initiate a DTC Architecture Audit or Advisory Contract',
    lead:
      'Whether you need high-ticket Shopify re-architecture, Meta ad landing page acceleration, or automated Klaviyo retention flows, reach out below. Direct response within 24 hours.',
    nameLabel: 'Your Name *',
    companyLabel: 'Brand / Store URL / Company *',
    emailLabel: 'Work Email Address *',
    contactLabel: 'Telegram / WhatsApp / Phone',
    scopeLabel: 'Engagement Type / Scope',
    budgetLabel: 'Target Timeline & Monthly Budget',
    messageLabel: 'Store URL, Current Monthly GMV & Key Bottlenecks *',
    namePlaceholder: 'e.g. Alex Morgan',
    companyPlaceholder: 'e.g. Amesha Energy / brand.com',
    emailPlaceholder: 'alex@brand.com',
    contactPlaceholder: '@username or phone',
    scopePlaceholder: 'e.g. High-Ticket Shopify Storefront / Meta Ad Landing CRO / Klaviyo Flow',
    budgetPlaceholder: 'e.g. Immediate / $3k-$10k sprint or advisory retainer',
    messagePlaceholder:
      'Briefly describe your brand, current monthly GMV, ad platforms, and primary conversion or retention bottlenecks...',
    confidentiality: 'Strict IP & NDA Confidentiality Protected',
    submitting: 'Connecting to edge gateway...',
    success:
      '<strong>Inquiry Received!</strong> Thanks {name}. Your project request has been logged. I will review your requirements and respond via email ({email}) within 24 hours.',
    failure:
      '<strong>Error submitting inquiry:</strong> {error}. You can also email me directly at <a href="mailto:dewellsmell@gmail.com" class="underline text-white">dewellsmell@gmail.com</a>.',
  },

  products: {
    meta: {
      title: 'Production DTC Case Studies & Growth Systems | Naif',
      description:
        'Explore production DTC case studies by Naif. High-ticket storefront architecture, Meta ad click-loss mitigation, and automated Klaviyo retention engines.',
    },
    eyebrow: 'DTC Systems & Growth Portfolio',
    heading: 'Production DTC Case Studies & Funnel Architectures',
    lead:
      'Selected production architectures, CRO case studies, and retention infrastructure solutions. Each project highlights real-world conversion lifts, ad traffic defense, and measurable business outcomes.',
    allSystems: 'All Systems',
  },

  productDetail: {
    stackLabel: 'Primary Tech Stack:',
    benchmarkLabel: 'Performance Benchmark:',
    targetLabel: 'Deployment Target:',
    targetValue: 'Shopify & Edge CDN',
    highlightsHeading: 'Core Innovations & Growth Capabilities',
    inquire: 'Inquire About Similar Architecture',
    back: '← Back to All Projects',
    specsHeading: 'System Architecture & Technical Parameters',
    walkthroughHeading: 'Case Study Walkthrough & Engineering Impact',
    footerNote: 'DTC Growth Architecture • Open for Brand Audits & Advisory',
  },

  postDetail: {
    badge: 'Architecture Whitepaper',
    crumb: 'Technical Writing',
    authorRole: 'Full-Stack Software Engineer & Serverless Architect',
    authorBio:
      'Specializing in sub-100ms Jamstack platforms, zero-JS Islands architectures, and cloud cost optimization on Cloudflare Edge.',
    workWithMe: 'Work With Me →',
    metaTitleSuffix: 'Technical Writing | Naif',
    metaFallback: 'Deep dive into modern web architecture and systems engineering by Naif.',
  },

  resources: {
    meta: {
      title: 'Curated DTC Engineering & Global Trade Resources | Naif',
      description:
        'Hand-picked directory of 24 authoritative developer tools, edge serverless infrastructure, network diagnostic suites, and global trade intelligence platforms.',
    },
    badge: 'Verified Technical Toolbox • 24 Curated Utilities',
    headingLead: 'Authoritative Engineering &',
    headingHighlight: 'Intelligence Tools',
    lead:
      'A meticulously curated collection of production utilities I rely on daily: from sub-second Core Web Vitals diagnostic suites to global trade bill of lading records and Anycast edge cloud platforms.',
    allResources: 'All Resources',
    categories: {
      performance: 'Web Performance & Audits',
      edge: 'Edge Cloud & Serverless',
      diagnostics: 'Email & Network Diagnostics',
      intelligence: 'Global Trade & Intelligence',
    },
    launch: 'Launch',
    openInNewTab: 'Open {name}',
    diagnosticCta: {
      heading: 'Need an expert audit using these tools?',
      body: 'Running the audit is easy. Turning the data into a zero-downtime engineering roadmap is not — it takes systems thinking across performance, email reputation and cloud infrastructure.',
      button: 'Book Architecture Review',
    },
    entries: [
      {
        key: 'psi',
        name: 'Google PageSpeed Insights',
        url: 'https://pagespeed.web.dev/',
        domain: 'pagespeed.web.dev',
        category: 'performance',
        description:
          'The definitive standard for mobile and desktop Core Web Vitals (LCP, INP, CLS) based on actual Chrome User Experience Report field data.',
      },
      {
        key: 'wpt',
        name: 'WebPageTest',
        url: 'https://www.webpagetest.org/',
        domain: 'webpagetest.org',
        category: 'performance',
        description:
          'Deep-dive multi-location performance profiling with connection throttling, CPU slowdown emulation, video filmstrips, and visual comparison.',
      },
      {
        key: 'urlscan',
        name: 'URLScan.io',
        url: 'https://urlscan.io/',
        domain: 'urlscan.io',
        category: 'performance',
        description:
          'A sandboxed browser scanner that analyzes and records all HTTP requests, third-party tracking scripts, security headers, and DOM mutations.',
      },
      {
        key: 'gtmetrix',
        name: 'GTmetrix',
        url: 'https://gtmetrix.com/',
        domain: 'gtmetrix.com',
        category: 'performance',
        description:
          'Synthetic website speed testing suite providing waterfall breakdowns, page generation timelines, and actionable optimization insights.',
      },
      {
        key: 'yellowlab',
        name: 'Yellow Lab Tools',
        url: 'https://yellowlab.tools/',
        domain: 'yellowlab.tools',
        category: 'performance',
        description:
          'Frontend code quality auditor that detects deep DOM trees, complex CSS selectors, bad JavaScript practices, and web font rendering bottlenecks.',
      },
      {
        key: 'speedvitals',
        name: 'SpeedVitals Global TTFB Test',
        url: 'https://speedvitals.com/ttfb-test',
        domain: 'speedvitals.com',
        category: 'performance',
        description:
          'Measures Time to First Byte (TTFB) concurrently across 35+ global edge locations to evaluate CDN caching efficiency and origin latency.',
      },
      {
        key: 'cfworkers',
        name: 'Cloudflare Workers & Pages',
        url: 'https://workers.cloudflare.com/',
        domain: 'workers.cloudflare.com',
        category: 'edge',
        description:
          'Serverless execution environment deployed across 300+ Anycast cities, running lightweight JavaScript/Wasm with zero container cold starts.',
      },
      {
        key: 'astro',
        name: 'Astro Web Framework',
        url: 'https://astro.build/',
        domain: 'astro.build',
        category: 'edge',
        description:
          'The modern web framework engineered for content-driven sites, pioneering the Islands architecture to ship pure HTML with selective client hydration.',
      },
      {
        key: 'resend',
        name: 'Resend',
        url: 'https://resend.com/',
        domain: 'resend.com',
        category: 'edge',
        description:
          'Developer-first transactional email API featuring React Email templating, blazing fast REST endpoints, and rock-solid inbox deliverability.',
      },
      {
        key: 'upstash',
        name: 'Upstash',
        url: 'https://upstash.com/',
        domain: 'upstash.com',
        category: 'edge',
        description:
          'Edge-native data infrastructure offering serverless Redis, message queues (QStash), and Kafka with stateless HTTP/REST APIs for edge workers.',
      },
      {
        key: 'turso',
        name: 'Turso (libSQL)',
        url: 'https://turso.tech/',
        domain: 'turso.tech',
        category: 'edge',
        description:
          'Distributed database powered by libSQL, replicating SQLite data globally close to edge users for sub-millisecond local read queries.',
      },
      {
        key: 'keystatic',
        name: 'Keystatic',
        url: 'https://keystatic.com/',
        domain: 'keystatic.com',
        category: 'edge',
        description:
          'Git-backed headless CMS that writes structured JSON, YAML and Markdoc files straight into your GitHub repository.',
      },
      {
        key: 'mailtester',
        name: 'Mail-Tester',
        url: 'https://www.mail-tester.com/',
        domain: 'mail-tester.com',
        category: 'diagnostics',
        description:
          'Evaluates outbound email deliverability by checking SPF records, DKIM signing, DMARC alignment and SpamAssassin rules.',
      },
      {
        key: 'mxtoolbox',
        name: 'MxToolbox',
        url: 'https://mxtoolbox.com/',
        domain: 'mxtoolbox.com',
        category: 'diagnostics',
        description:
          'Comprehensive network diagnostics platform: MX record lookup, DNS propagation, SMTP handshake testing and 100+ global email blacklists.',
      },
      {
        key: 'ssllabs',
        name: 'Qualys SSL Labs',
        url: 'https://www.ssllabs.com/ssltest/',
        domain: 'ssllabs.com',
        category: 'diagnostics',
        description:
          'Deep analysis of any public SSL/TLS server, rating certificate chains, cipher suite strength, forward secrecy and vulnerability exposure.',
      },
      {
        key: 'securityheaders',
        name: 'SecurityHeaders.com',
        url: 'https://securityheaders.com/',
        domain: 'securityheaders.com',
        category: 'diagnostics',
        description:
          'Instant audit of HTTP security response headers including CSP, HSTS, Permissions-Policy and Referrer-Policy.',
      },
      {
        key: 'dnsviz',
        name: 'DNSViz',
        url: 'https://dnsviz.net/',
        domain: 'dnsviz.net',
        category: 'diagnostics',
        description:
          'Interactive visualisation tool that analyses DNS and DNSSEC chain health, encrypted delegation and authoritative server status.',
      },
      {
        key: 'bgpview',
        name: 'BGPView',
        url: 'https://bgpview.io/',
        domain: 'bgpview.io',
        category: 'diagnostics',
        description:
          'Real-time BGP routing inspector revealing ASN ownership, prefix announcements, Anycast peering and international internet exchanges.',
      },
      {
        key: 'importyeti',
        name: 'ImportYeti',
        url: 'https://www.importyeti.com/',
        domain: 'importyeti.com',
        category: 'intelligence',
        description:
          'Searchable database of millions of US customs sea-freight records for uncovering real factory suppliers, OEM partners and competitor logistics routes.',
      },
      {
        key: 'metalib',
        name: 'Meta Ad Library',
        url: 'https://www.facebook.com/ads/library/',
        domain: 'facebook.com/ads/library',
        category: 'intelligence',
        description:
          'Searchable archive of every commercial ad creative running across Facebook, Instagram, Messenger and Audience Network.',
      },
      {
        key: 'adstransparency',
        name: 'Google Ads Transparency Center',
        url: 'https://adstransparency.google.com/',
        domain: 'adstransparency.google.com',
        category: 'intelligence',
        description:
          'Official advertiser transparency library covering search, YouTube and display campaigns across the Google network worldwide.',
      },
      {
        key: 'wipo',
        name: 'WIPO Global Brand Database',
        url: 'https://branddb.wipo.int/',
        domain: 'branddb.wipo.int',
        category: 'intelligence',
        description:
          'Global trademark search portal covering Madrid System international registrations and national IP offices across every region.',
      },
      {
        key: 'builtwith',
        name: 'BuiltWith',
        url: 'https://builtwith.com/',
        domain: 'builtwith.com',
        category: 'intelligence',
        description:
          'Web technology profiler that reveals the CMS, CDN, tracking code, payment gateways and ad pixels behind any target domain.',
      },
      {
        key: 'similarweb',
        name: 'Similarweb',
        url: 'https://www.similarweb.com/',
        domain: 'similarweb.com',
        category: 'intelligence',
        description:
          'Digital market intelligence platform providing traffic benchmarks, referral sources, audience geography and search-intent breakdowns.',
      },
    ] as ResourceEntry[],
  },
} as const;

export type PageStrings = typeof pages;
