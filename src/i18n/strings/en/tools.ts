export const tools = {
  roi: {
    meta: {
      title: 'Web Performance & Ad ROI Waste Calculator | Naif | DTC Architect',
      description:
        'Calculate how much of your monthly ad spend is lost to mobile loading latency. Interactive ROI leakage calculator based on Google & Cloudflare Core Web Vitals research.',
    },
    badge: 'Google & Cloudflare Latency Impact Correlation Engine',
    headingLead: 'Web Performance &',
    headingHighlight: 'Ad ROI Waste',
    headingTail: 'Calculator',
    lead:
      'Slow mobile loading times do not just frustrate visitors—they burn paid marketing capital. Measure how latency inflates bounce rates, discards paid clicks before first paint, and calculate the exact financial upside of upgrading to a sub-1.0s Jamstack architecture.',
    switcher: {
      clickLoss: 'Click-Loss Auditor',
      scorecard: 'Chargeback Risk Scorecard',
      roi: 'Ad ROI & Latency Calculator',
      clickLossDesc: 'Reconcile Meta outbound clicks vs GA4 landing page views and price the gap.',
      scorecardDesc: 'Eight questions, one seller-health score, and the fix for every red flag.',
      roiDesc: 'Price the cost of mobile load time in wasted ad spend and lost orders.',
    },
    inputsHeading: 'Campaign & Latency Inputs',
    reset: 'Reset Defaults',
    fields: {
      spend: 'Monthly Paid Ad Spend ($)',
      cpc: 'Average CPC ($ USD)',
      loadTime: 'Current Mobile Load Time (Seconds)',
      cvr: 'Current Mobile Conversion Rate (%)',
    },
    scale: {
      spend: ['$500', '$50,000', '$100,000+'],
      cpc: ['$0.20', '$5.00', '$15.00'],
      loadTime: ['0.8s (Jamstack)', '3.0s', '7.0s (Severe)'],
      cvr: ['0.2%', '2.5%', '6.0%'],
    },
    groundTruth: {
      title: 'Ground Truth Data Model',
      body: 'Grounded on Google Research & SOASTA mobile telemetry: 53% of mobile visits are abandoned if pages take over 3 seconds to load; conversion rate drops by up to 4.42% with each additional second of delay.',
    },
    results: {
      wastedTitle: 'Monthly Ad Budget Wasted',
      wastedDesc: 'Estimated capital lost to bounces before the page renders on 4G mobile devices.',
      wastedAnnualLabel: 'Annualized Loss:',
      bouncedTitle: 'Abandoned Clicks / Month',
      bouncedDesc: 'Out of {total} paid visits, bounced due to mobile rendering stalls.',
      penaltyLabel: 'Mobile Bounce Penalty:',
      recoveredTitle: 'Recoverable Conversions',
      recoveredDesc: 'Projected incremental customers captured with sub-1.0s Jamstack edge delivery.',
      recoveredAnnualLabel: 'Estimated Annual Orders:',
      valueTitle: 'Projected Annual ROI Upside',
      valueDesc: 'Calculated value of retained traffic + sub-second conversion rate multiplier.',
      paybackLabel: 'Architecture Payback Period:',
      paybackValue: '< 30 Days',
      pills: {
        optimal: 'Optimal Edge Speed',
        moderate: 'Moderate Friction',
        severe: 'Severe Drop-Off',
        critical: 'Critical Budget Waste',
      },
      latencyLabels: {
        high: 'High Latency / Bottleneck',
        moderate: 'Moderate Speed',
      },
    },
    benchmark: {
      heading: 'Latency vs Conversion Differential',
      indexLabel: 'Google SOASTA Index',
      currentLabel: 'Current Infrastructure Latency:',
      targetLabel: "Naif's Jamstack Edge Architecture:",
      currentNote: 'High hydration overhead, blocking JS bundles, database roundtrips.',
      targetNote: 'Pre-rendered HTML at 300+ edge nodes, instant First Contentful Paint, 0ms cold starts.',
    },
    roadmap: {
      heading: 'Architectural Remediation Roadmap',
      items: [
        {
          title: '1. Edge TTFB Elimination',
          body: 'Replace origin server database parsing with Cloudflare Workers pre-rendered edge HTML, bringing TTFB under 60ms globally.',
        },
        {
          title: '2. Zero-JS Hydration Stripping',
          body: 'Migrate heavy SPA or WooCommerce/Shopify theme scripts to Astro Islands, eliminating 90%+ of client-side main-thread freezing.',
        },
        {
          title: '3. Automated Image Transcoding',
          body: 'Serve responsive AVIF/WebP assets via Cloudflare Images directly matching physical screen DPR with zero layout shift (CLS = 0).',
        },
        {
          title: '4. Serverless RFQ & Checkout',
          body: 'Route form leads and order requests asynchronously via cloud queues (Cloudflare Queues/KV) with sub-100ms response guarantees.',
        },
      ],
    },
    cta: {
      heading: 'Stop Burning Paid Ad Spend',
      body: 'Request a comprehensive latency breakdown and migration proposal for your store or app.',
    },
  },

  clickLoss: {
    meta: {
      title: 'Click-Loss Auditor — Reconcile Meta Outbound Clicks vs GA4 Landing Page Views | Naif',
      description:
        'Free tool: reconcile Meta Ads outbound clicks against GA4 landing page views to measure real click loss, wasted ad spend, and recoverable revenue. Tells you if the leak is rendering or attribution.',
    },
    badge: 'Meta Graph API × GA4 Reconciliation Engine',
    heading: 'Click-Loss Auditor',
    reset: 'Reset Defaults',
    lead:
      'Your ad platform says you bought 40,000 clicks. Your analytics says 31,000 people arrived. That 9,000 gap is money you already paid for and never got a chance to sell to — and most brands blame creative fatigue for it. This tool measures the real loss, prices it, and tells you whether it is a rendering problem or a measurement artifact.',
    inputsHeading: 'Reconciliation Inputs',
    fields: {
      outbound: 'Meta Outbound Clicks / Month',
      lpv: 'GA4 Landing Page Views / Month',
      cpc: 'Average Cost Per Click ($)',
      loadTime: 'Landing Page Mobile Load Time (s)',
      cvr: 'Landing Page Conversion Rate (%)',
      aov: 'Average Order Value ($)',
    },
    hints: {
      outbound: 'Meta Ads Manager → Ads Manager → Columns → Outbound clicks (all campaigns, last 30 days).',
      lpv: 'GA4 → Reports → Acquisition → Traffic acquisition → Session source/medium = Meta → Landing page + session starts.',
      loadTime: 'Check with PageSpeed Insights (mobile, throttled) or CrUX field data for the URL your ads point to.',
    },
    scale: {
      outbound: ['1K', '500K'],
      lpv: ['500', '500K'],
      cpc: ['$0.10', '$5', '$15'],
      loadTime: ['0.8s', '3.0s', '8.0s+'],
      cvr: ['0.1%', '2.5%', '10%'],
      aov: ['$20', '$120', '$800'],
    },
    results: {
      lossTitle: 'Real Click-Loss Rate',
      lossDesc: 'Of {total} paid clicks never produced a landing page view.',
      benchmarkLabel: 'Industry benchmark:',
      benchmarkValue: '25%+ typical',
      wastedTitle: 'Wasted Ad Spend / Month',
      wastedDesc: 'Capital paid for {clicks} clicks that never rendered a page.',
      wastedAnnualLabel: 'Annualized:',
      ordersTitle: 'Recoverable Orders / Month',
      ordersDesc: 'Orders captured if you close the gap to the sub-8% target rate.',
      ordersAnnualLabel: 'Annual orders:',
      revenueTitle: 'Recoverable Revenue / Month',
      revenueDesc: 'Revenue from the same media budget, minus the same spend.',
      revenueAnnualLabel: 'Annualized upside:',
      pills: {
        critical: 'Critical Leakage',
        elevated: 'Elevated Loss',
        guarded: 'Guarded',
        healthy: 'Healthy',
      },
    },
    diagnosis: {
      heading: 'Root Cause Diagnosis',
      types: {
        rendering: 'Rendering Loss',
        attribution: 'Measurement Artifact',
        mixed: 'Mixed Cause',
        guarded: 'Guarded',
        healthy: 'Healthy Pipeline',
      },
      summaries: {
        rendering:
          'Your landing page is slow enough that real visitors are leaving before the page renders. This is genuine lost demand, not a reporting quirk.',
        attribution:
          'Your page loads fast, so the gap is not a bounce problem. This is most likely a tracking and attribution failure — you are paying for clicks that GA4 never records, which also means your ROAS is wrong.',
        mixed:
          'Both factors are in play: some visitors genuinely bounce on a mid-range load time, and some of the gap is measurement drift. Fix them in that order.',
        guarded:
          'Your click-loss rate is close to the sub-8% target. The residual gap is worth a quarterly check rather than an emergency fix — tighten the tracking reconciliation and move on.',
        healthy:
          'Your paid traffic is landing and being recorded. At this level the remaining upside is in conversion rate and average order value, not in traffic reconciliation.',
      },
      causes: {
        rendering: [
          {
            title: '1. Preload the LCP hero image, strip render-blocking tag manager scripts',
            body: 'Defer non-essential pixels behind requestIdleCallback so the first paint does not wait on third-party JS.',
          },
          {
            title: '2. Kill app bloat and unblock the main thread',
            body: 'Every app you added loads scripts on every template. Audit Total Blocking Time and remove or defer the worst offenders.',
          },
          {
            title: '3. Serve AVIF/WebP at matching DPR to drive CLS to zero',
            body: 'Layout shift during the ad click is a top cause of the white-flash bounce on mobile in-app browsers.',
          },
        ],
        attribution: [
          {
            title: '1. Reconcile the Meta signal under iOS 14.5+ / Consent Mode v2',
            body: 'Your CAPI server events and client events must dedupe on event_id, or GA4 undercounts paid sessions that Meta is counting.',
          },
          {
            title: '2. Check for redirect chains and cross-domain measurement loss',
            body: 'Ad redirects through a shortener or a country selector break the session attribution — the click lands, GA4 never sees it.',
          },
          {
            title: '3. Filter out internal traffic, consent denials and ITP effects',
            body: 'Safari and in-app browsers strip third-party cookies; a real audience can look like a measurement gap.',
          },
          {
            title: '4. Validate that your landing URL matches the ad destination exactly',
            body: 'A mismatch between the ad URL and the final URL silently splits the session before it is counted.',
          },
        ],
        mixed: [
          {
            title: '1. Fix the render path first — it explains most of the gap',
            body: 'Your page is over the 3-second threshold where mobile abandonment climbs sharply, so part of this loss is real lost demand.',
          },
          {
            title: '2. Then reconcile the tracking gap',
            body: 'With a fast page, any remaining gap is measurement. Compare Meta outbound clicks against GA4 sessions and CAPI dedupe on event_id.',
          },
          {
            title: '3. Run the audit on your top 5 ad landing pages, not just the store',
            body: 'Leakage is rarely uniform — one slow variant can account for most of the loss.',
          },
        ],
      },
    },
    benchmark: {
      heading: 'Click-Loss Rate vs Benchmarks',
      targetLabel: 'Target < 8%',
      yours: 'Your store:',
      typical: 'Typical Shopify store:',
      typicalValue: '20% – 30%',
      target: 'Sub-second edge architecture:',
      targetValue: '< 8%',
    },
    gate: {
      heading: 'Get the full reconciliation report',
      body: 'Session-by-session gap breakdown, the exact GA4 & Meta report paths, and a 90-day fix sequence for your store.',
      newsletterHeading: 'Send me the full reconciliation report',
      newsletterSubheading:
        'Drop your store URL in and I will personalise the diagnosis — including which of your landing pages is leaking the most.',
      cta: 'Get The Report',
      note: 'One report, then The Ad-Waste Report each week. Unsubscribe any time.',
    },
  },

  scorecard: {
    meta: {
      title: 'Chargeback Risk Scorecard — Free DTC Seller Health Diagnostic | Naif',
      description:
        'Free 8-question diagnostic that scores your chargeback exposure, prices the risk, and gives you the specific fix for every red flag. Built on fulfilment-truth, delivery promise and dispute defence.',
    },
    badge: 'Seller Health Diagnostic · 8 Questions',
    headingLead: 'Chargeback',
    headingHighlight: 'Risk Scorecard',
    lead:
      'A chargeback is not a payment problem. It is a fulfilment-truth problem that got escalated — and the merchant usually has the evidence to win it. Eight questions, one risk score, and the specific fix for every red flag you hit. Most brands finish in under three minutes.',
    exposure: {
      gmv: 'Monthly Revenue ($)',
      gmvHint: 'Used to price the exposure in dollars.',
      cbRate: 'Current Chargeback Rate (%)',
      cbRateHint: 'Card networks flag a threshold near 1%. Check your processor dashboard.',
      aov: 'Average Order Value ($)',
      aovHint: 'Disputes scale with ticket size — a $40 order rarely gets disputed, a $200 one does.',
    },
    questions: [
      {
        id: 'fulfillment-truth',
        q: 'Does what arrives in the parcel match what the product page promised — material, weight, quantity, finish?',
        why: 'Mismatched fulfilment is the single fastest-growing dispute reason. It is also the hardest to defend, because the merchant’s own listing is the evidence.',
        options: [
          {
            label: 'Yes — we audit shipments against listing claims',
            fix: 'Hold this line. Document the audit so you can defend it.',
            score: 0,
          },
          {
            label: 'Partly — some lines are checked, others are not',
            fix: 'Pick your top 5 SKUs by revenue and audit those first. Cover the top 80% of revenue with the same discipline you apply to the rest.',
            score: 12,
          },
          {
            label: 'No — listings are written for conversion, not for accuracy',
            fix: 'Highest-leverage fix on this list. Rewrite the 10 highest-traffic product pages so every claim in the copy is one the parcel can substantiate.',
            score: 20,
          },
        ],
      },
      {
        id: 'delivery-promise',
        q: 'Does the delivery date shown at checkout match what the carrier actually delivers?',
        why: 'Late delivery is the leading cause of chargebacks in apparel and home goods. Buyers dispute on the promise, not the parcel.',
        options: [
          {
            label: 'Yes — the date at checkout is carrier-verified',
            fix: 'Keep the delivery estimate tied to live carrier data, not a static buffer.',
            score: 0,
          },
          {
            label: 'We pad the estimate with a buffer, but do not track actuals',
            fix: 'Start tracking promised vs actual delivery. A 3–5 day buffer priced against your actual late rate is cheaper than disputes.',
            score: 10,
          },
          {
            label: 'No — the estimate is optimistic and delivery is routinely late',
            fix: 'Show the accurate window, even if it costs you a few clicks. A 9–12 day honest estimate beats a 5-day broken promise.',
            score: 20,
          },
        ],
      },
      {
        id: 'refund-speed',
        q: 'When a customer asks for a refund, how fast do they get it?',
        why: 'A slow refund converts a service complaint into a chargeback. The buyer’s alternative is to let the deadline pass and let the issuer decide.',
        options: [
          {
            label: 'Same day, automatically',
            fix: 'Nothing to fix — this directly suppresses dispute volume.',
            score: 0,
          },
          {
            label: 'Within 3–5 business days',
            fix: 'Automate instant refunds for the first 30 days post-delivery, then hand off to your team.',
            score: 10,
          },
          {
            label: 'It depends — often more than 10 days',
            fix: 'Set a hard 24–48 hour SLA with automated approval on clear cases. This alone typically cuts disputes by a third.',
            score: 20,
          },
        ],
      },
      {
        id: 'order-comms',
        q: 'Do customers get order confirmation, dispatch notice and a working tracking link — automatically?',
        why: 'Silence after checkout is what turns a neutral buyer into a disputing one. The buyer assumes the worst when they hear nothing.',
        options: [
          {
            label: 'Yes — all three, triggered by real events',
            fix: 'Keep the flow event-driven, not on a fixed schedule.',
            score: 0,
          },
          {
            label: 'Partly — confirmation and dispatch yes, tracking often missing',
            fix: 'Add a tracking-number email that fires on label creation, not on manual entry.',
            score: 8,
          },
          {
            label: 'No — customers have to chase us',
            fix: 'Wire Klaviyo transactional flows to your fulfilment events. This is a two-day build and it is the fastest dispute reduction available.',
            score: 16,
          },
        ],
      },
      {
        id: 'expectation-setting',
        q: 'For your higher-ticket items, is there visual and material evidence of what the buyer will receive?',
        why: 'Above roughly $100, buyers buy from images. If the images are stylised and the parcel is plain, the refund request comes first and the dispute comes second.',
        options: [
          {
            label: 'Yes — real product photos, detail shots, scale reference',
            fix: 'Protect this. Real photos are also the strongest CRO asset you own.',
            score: 0,
          },
          {
            label: 'Lifestyle shots only, no scale or detail reference',
            fix: 'Add a scale reference and two macro detail shots per hero SKU. Cheaper than any discount you will have to give.',
            score: 10,
          },
          {
            label: 'Stylised or heavily edited imagery',
            fix: 'This is a direct dispute generator at ticket. Replace edited imagery with unretouched, scale-accurate photography.',
            score: 18,
          },
        ],
      },
      {
        id: 'review-integrity',
        q: 'Are your reviews, ratings and testimonials real and verifiable?',
        why: 'Fabricated or incentivised reviews are a card-brand and platform violation. The penalty is not just a fine — it is the ability to settle disputes in your favour.',
        options: [
          {
            label: 'Yes — verified-buyer reviews only, no incentivised posts',
            fix: 'Keep the verification trail documented.',
            score: 0,
          },
          {
            label: 'Mostly real, but we do run an incentive programme',
            fix: 'Move the incentive to a post-purchase survey that is not conditioned on a positive review, and keep the review body unedited.',
            score: 14,
          },
          {
            label: 'We do not know where our reviews come from',
            fix: 'Audit the review app, the app blocks and any historic incentivised campaign. Remove anything that cannot be traced to a real order.',
            score: 20,
          },
        ],
      },
      {
        id: 'dispute-defence',
        q: 'Do you monitor disputes in real time and submit evidence before the deadline?',
        why: 'The representment window is short and most merchants miss it by default. Evidence submitted inside the window wins; evidence submitted late does not.',
        options: [
          {
            label: 'Yes — we submit evidence for every dispute',
            fix: 'Keep the evidence template library documented per category.',
            score: 0,
          },
          {
            label: 'We react when the email arrives, often late',
            fix: 'Build a standing evidence pack per SKU category: order, tracking, delivery photo, listing snapshot. Automate the deadline calendar.',
            score: 12,
          },
          {
            label: 'We rarely win these',
            fix: 'This is the highest-return item on the list. A standing evidence pack is usually the difference between winning and losing a dispute.',
            score: 20,
          },
        ],
      },
      {
        id: 'unboxing-parcel',
        q: 'Does the parcel arrive in a condition that matches the brand promise?',
        why: 'Damage, crushed corners and missing inserts are read as a low-value product. The buyer disputes the order and the shipment simultaneously.',
        options: [
          {
            label: 'Yes — packaging is tested and protected',
            fix: 'Hold this. Include an unboxing photo in your dispute evidence pack.',
            score: 0,
          },
          {
            label: 'Generally fine, but fragile or heavy items are the weak spot',
            fix: 'Add corner protection and a tested drop spec for the fragile SKUs only. You do not need to repackage everything.',
            score: 10,
          },
          {
            label: 'Not really — we ship in the minimum box',
            fix: 'For premium and fragile lines, the packaging is part of the product. A mailer and a moulded insert is cheaper than one chargeback.',
            score: 16,
          },
        ],
      },
    ],
    action: {
      heading: 'Ready to score it?',
      body: 'Your answers stay in the browser — nothing is sent until you choose to email the report.',
      button: 'Calculate My Risk Score',
    },
    results: {
      scoreLabel: 'Chargeback Risk Score',
      outOf: 'out of {max}',
      tiers: {
        critical: 'Critical Exposure',
        elevated: 'Elevated Exposure',
        moderate: 'Moderate Exposure',
        healthy: 'Healthy Operation',
      },
      verdicts: {
        critical:
          'Your dispute drivers are structural, not incidental. At this rate you are on a card-network watch list, and the defence you are relying on — your own product listing — is the thing being used against you. Fix fulfilment truth and delivery promise first; the rest is noise until those are solid.',
        elevated:
          'You are leaking revenue to disputes on a predictable basis. The good news: at least one of your answers points at a fix that is days of work, not months. The bad news: every month you wait, the processor fees and the lost good customers compound.',
        moderate:
          'Your fundamentals are sound and your remaining risk is concentrated in one or two places. Find them below, fix them, and your dispute rate should drop into the sub-0.2% range that processors consider healthy.',
        healthy:
          'Your seller health is in good shape — you are defending disputes and honouring your promises. Keep the evidence pack current and re-run this scorecard quarterly, because fulfilment drift is what moves brands out of this tier, not new competitors.',
      },
      exposureLabel: 'Annual Exposure',
      exposureDesc: 'Revenue at risk at your current dispute rate.',
      recoverableLabel: 'Recoverable / Year',
      recoverableDesc: 'If you reach a 0.1% dispute rate.',
      disputesLabel: 'Disputes / Year',
      disputesDesc: 'At your current rate, before fees.',
      fixHeading: 'Your Fix Queue, Highest Impact First',
      fixLead: 'Each red flag carries the specific remediation, not generic advice.',
      yourAnswer: 'Your answer:',
      fixPrefix: 'Fix:',
      severities: { critical: 'Critical', high: 'High', moderate: 'Moderate' },
      noFlags: 'No red flags. Every question passed — keep the evidence pack current and re-run this quarterly.',
      gate: {
        heading: 'Get the full seller-health report',
        subheading:
          'Your score, the evidence pack template per SKU category, and a 90-day dispute-reduction sequence for your store.',
        cta: 'Send Me The Report',
        note: 'One report, then The Ad-Waste Report each week. Unsubscribe any time.',
      },
    },
  },
} as const;

export type ToolStrings = typeof tools;
