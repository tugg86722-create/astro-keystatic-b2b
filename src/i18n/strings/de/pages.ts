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
      title: 'Naif | DTC E-Commerce Operator & Full-Funnel Growth-Architekt',
      description:
        'High-Ticket DTC Marken skalieren mit Sub-Second-Speed, Meta-Ad-Landingpage-CRO, automatisierter Klaviyo-Retention und 100% datengetriebener Conversion.',
    },
    hero: {
      pill: 'DTC E-Commerce Operator & Full-Funnel Growth-Architekt',
      titleLead: 'High-Ticket DTC Marken skalieren mit',
      titleHighlight: 'Sub-Second-Speed',
      titleTail: '& Full-Funnel-Präzision.',
      lead:
        'Ich schließe die Lücke zwischen Luxus-Brand-Storytelling, technischer Storefront-Performance und Meta/Google-Ad-Profitabilität. Keine aufgeblähten Plugins, kein billiger KI-Plastik-Slop, 100% datengetriebene Conversion.',
      fitPrefix: 'Mit wem ich arbeite:',
      fitBody:
        'DTC Brands mit $50k–$2M/Monat Umsatz, in der Regel $99+ AOV, die bereits Paid Traffic buchen — und ihn verlieren, bevor die Seite rendert.',
      fitLink: 'Ist das Ihr Fall? →',
    },
    benchmarks: {
      cwv: 'Core Web Vitals Mobile Score',
      clickLoss: 'Klick-Verlust-Quote von Ad-Klicks zur Landingpage (vs. 25%+ Durchschnitt)',
      klaviyo: 'Automatisierter Klaviyo-Umsatzbeitrag',
      ticket: 'High-Ticket Conversion-Architektur',
    },
    cases: {
      eyebrow: 'DTC Deployments in Produktion',
      heading: 'Full-Funnel Case Studies',
    },
    pillars: {
      eyebrow: 'Kernprinzipien für Growth & Architektur',
      heading: 'Die 4 Säulen des High-Ticket DTC-Engineering',
      lead:
        'Ich eliminiere Ad-Budget-Verschwendung, aufgeblähte App-Stacks und Conversion-Reibung, um profitable, robuste DTC-Betriebe zu bauen.',
      items: [
        {
          title: 'High-Ticket DTC Storefronts',
          body: 'Maßgeschneiderte Shopify OS2.0- & Jamstack-Builds, 6-Shot Anti-Slop Visual Direction und mobile-first Kaufstrecken für luxuriöse $99+ Preispunkte.',
        },
        {
          title: 'Ad-Landingpage CRO & Traffic-Verteidigung',
          body: 'Mobile-Bounce-Raten eliminieren, Direct-to-Checkout-Flows und die Outbound-Click-Leckage auf Meta & TikTok Ads. Sub-Second-LCP garantiert: kein Ad-Dollar verschenkt.',
        },
        {
          title: 'Automatisierte Retention & Lifecycle (Klaviyo)',
          body: 'Zero-Touch Browse-Abandonment, VIP-Win-Back-Sequenzen und Post-Purchase-Kundenbegeisterung, die konstant 15%+ Baseline-Umsatz aus Automation generiert.',
        },
        {
          title: 'Erfüllungswahrheit & Chargeback-Schutz',
          body: 'Digitale Storefront-Versprechen mit der realen Paket-Erfüllung abgleichen, um PayPal- & Stripe-Streitigkeiten zuvorzukommen und die operative Gesundheit dauerhaft zu sichern.',
        },
      ],
    },
    fitCheck: {
      eyebrow: 'Fit-Check',
      headingLead: 'Die ehrliche Version von',
      headingHighlight: 'für wen das funktioniert',
      lead:
        'Der schnellste Weg, Zeit zu verbrennen, ist eine Fehlbesetzung. Das ist der Filter, den ich tatsächlich anwende — und ich verliere den Auftrag lieber, als ihn schlecht auszuführen.',
      goodTitle: 'Das passt, wenn…',
      badTitle: 'Das passt nicht, wenn…',
      good: [
        'Sie liegen über $50k/Monat und buchen bereits Paid Traffic',
        'Ihr AOV liegt bei $99+ und der Checkout hat sichtbare Reibung',
        'Mobile PageSpeed ist rot und niemand fühlt sich dafür verantwortlich',
        'Klaviyo existiert, aber die Flows wurden nie neu gebaut',
        'Sie können einen Entscheider gewinnen, der wöchentlich Änderungen freigibt',
      ],
      bad: [
        'Sie liegen unter rund $50k Monatsumsatz',
        'Sie brauchen eine garantierte Conversion-Steigerung im ersten Monat',
        'Sie möchten, dass jemand für Sie entscheidet',
        'Sie sind Single-SKU-Dropshipping oder Gray-Market-Reselling',
        'Sie haben noch keinen Paid Traffic — starten Sie stattdessen mit dem kostenlosen Audit',
      ],
    },
    diagnostics: {
      eyebrow: 'Erst selbst durchspielen',
      heading: 'Kostenlose Diagnosen für Ihren Store',
      lead:
        'Das sind dieselben Engines, die in meinen bezahlten Audits laufen. Keine Anmeldung, kein Pitch — rechnen Sie mit Ihren eigenen Zahlen und entscheiden Sie, ob die Arbeit ihr Geld wert ist.',
      clickLossTitle: 'Klick-Verlust-Prüfer',
      clickLossDesc:
        'Meta Outbound Clicks gegen GA4 Landingpage-Aufrufe abgleichen. Beziffert die Lücke und zeigt, ob es Rendering-Verlust oder ein Tracking-Artefakt ist.',
      scorecardTitle: 'Chargeback-Risiko-Scorecard',
      scorecardDesc:
        'Acht Fragen, ein Risiko-Score und der konkrete Fix für jedes rote Flag — von der Erfüllungswahrheit bis zur Beweispaket-Dokumentation für Streitfälle.',
      roiTitle: 'Ad-ROI & Latency-Rechner',
      roiDesc:
        'Beziffern Sie, was mobile Ladezeit in verschwendetem Ad-Budget, verlorenen Klicks und rettbaren Bestellungen kostet — auf Basis von Google-Felddaten.',
    },
    articles: {
      eyebrow: 'Publikationen & Whitepapers',
      heading: 'Technische Texte & Case Studies',
      read: 'Architektur-Whitepaper lesen',
    },
  },

  about: {
    meta: {
      title: 'Über Naif | DTC E-Commerce Operator & Full-Funnel Growth-Architekt',
      description:
        'DTC E-Commerce Operator an der Schnittstelle von High-Ticket Storefront-Architektur, Sub-Second-Edge-Performance, Meta-Ad-Ökonomie und automatisierter Klaviyo-Retention.',
    },
    hero: {
      pill: 'Offen für DTC-Markenarchitektur, CRO & Growth-Beratung',
      titleLead: 'High-Ticket DTC skalieren mit',
      titleHighlight: 'Engineering-Präzision',
      titleTail: '& Ad-Profitabilität.',
      quote:
        '„Ich lebe in den Schützengräben des Cross-Border-E-Commerce. Anders als reine Entwickler, die kein Verständnis für Ad-Spend haben, und anders als Media Buyer, die kein Verständnis für Web-Architektur haben, decke ich das komplette Spektrum ab: vom Theme-Code und der Edge-Performance bis zur Meta-Ad-Ökonomie und zur Kunden-Retention."',
      lead:
        'Mit tiefer praktischer Erfahrung im Betrieb von High-Ticket ($99+) Shopify OS2.0- und Jamstack-Storefronts beseitige ich die verdeckten Lecks, die Ad-Budget fressen: Verzögerungen auf mobilen Landingpages, unoptimierte Checkout-Flows, Diskrepanzen zwischen digitalen Versprechen und physischer Erfüllung sowie vernachlässigte Post-Purchase-Retention.',
    },
    attributes: {
      locationLabel: 'Standort',
      locationValue: 'Remote, weltweit',
      locationNote: 'UTC+8 / US-freundlich',
      focusLabel: 'Schwerpunkt',
      focusValue: 'High-Ticket DTC & CRO',
      focusNote: 'Shopify, Meta Ads, Klaviyo',
      metricLabel: 'Performance-Kennzahl',
      metricValue: '< 8% Klick-Verlust-Quote',
      metricNote: '100/100 Mobile CWV',
    },
    stack: {
      eyebrow: 'Technischer & operativer Stack',
      heading: 'Full-Funnel DTC Tech-Stack-Radar',
      lead:
        'Ein kampferprobter Stack aus Enterprise-Storefront-Architektur, Performance Engineering, Ad-Attribution und Retention-Automation.',
      items: [
        {
          title: 'Storefront & Speed',
          desc: 'Client-seitigen Runtime-Ballast eliminieren: eigenes Liquid, Astro Islands und Edge-Caching.',
        },
        {
          title: 'Traffic & CRO',
          desc: 'Direct-to-Checkout-Funnels, Anti-Slop Visual Direction und Copywriting-Frameworks für High-Ticket.',
        },
        {
          title: 'Attribution & Telemetry',
          desc: 'Forensische Analyse des Click-Drop-offs, serverseitige Attribution und Telemetrie ohne Eingriff.',
        },
        {
          title: 'Retention & Schutz',
          desc: 'Automatisierte Customer-Lifecycle-Sequences und Abwehr von Kundenstreitigkeiten und Chargebacks.',
        },
      ],
    },
    pillars: {
      eyebrow: 'Strategische Grundsätze',
      heading: 'Die 4 Strategischen Säulen',
      lead:
        'Jede Marke, jedes Storefront-Refactoring und jede Growth-Initiative wird nach diesen vier kompromisslosen Standards entwickelt.',
      items: [
        {
          title: 'Storefront-Architektur & Speed',
          body: 'Shopify OS2.0, Liquid-Refactoring, Astro Jamstack und Sub-Second Core Web Vitals. Blähende Third-Party-Apps und Asset-Ballast raus, damit mobile Besucher sofortige Page Loads ohne Bounce-Reibung erleben.',
          result: '100/100 Mobile CWV • LCP < 0.8s garantiert',
        },
        {
          title: 'Conversion Rate Optimization (CRO)',
          body: '6-Shot Visual Direction (Hero, Unboxing, Drape, Lifestyle, Gemstone Macro, Flatlay), High-Ticket Copywriting (Hook-FAB-Ideal) und reibungsfreie Checkout-Funnels, die $99+ Premiumpreise durchsetzen.',
          result: 'High-Ticket Vertrauen • Reibungsfreies Direct-to-Checkout',
        },
        {
          title: 'Traffic- & Attribution-Verteidigung',
          body: 'Meta Graph API Integration, Click-Loss-Auditing, GA4-Funnel-Forensik und Event-Tracking ohne Eingriff. Wir messen und schließen die 15%–30% Lücke zwischen bezahlten Outbound Clicks und echten Landingpage-Aufrufen.',
          result: '< 8% Klick-Verlust-Quote • Echtes ROAS-Reporting',
        },
        {
          title: 'Operations & Markenschutz',
          body: 'Klaviyo Lifecycle Journeys (Welcome, Browse Abandonment, VIP Post-Purchase), kombiniert mit Audits der physischen Paket-Erfüllung. Storefront-Versprechen mit der Verpackungsrealität abzugleichen verhindert Chargebacks und Payment-Processor-Sperren.',
          result: '15%+ Flow-Umsatz aus Automation • Keine Chargeback-Sperren',
        },
      ],
    },
    flow: {
      eyebrow: 'Arbeitsprozess',
      heading: 'Full-Funnel DTC Execution Flow',
      lead:
        'Ein planbares, datenfundiertes Execution-Framework, das Ad-Spend-Verschwendung beseitigt und Markenumsatz skaliert.',
      items: [
        {
          title: 'Growth- & Speed-Audit',
          body: 'Tiefe forensische Prüfung von Meta Outbound Clicks vs. GA4 Landingpage-Aufrufen, mobilem Lighthouse CWV, Checkout-Drop-off und der Passung von Lieferversprechen und Lieferrealität.',
          timeline: '2–3 Tage',
        },
        {
          title: 'CRO & Visual Prototyping',
          body: 'Deployment von 6-Shot Anti-Slop Visual Direction, High-Ticket Hook-FAB-Ideal Copy und reibungsfreien Direct-to-Checkout-Flows in einer Staging-Umgebung.',
          timeline: '5–7 Tage',
        },
        {
          title: 'Launch & Traffic-Umleitung',
          body: 'Theme-Deployment ohne Downtime, CDN-Edge-Beschleunigung, Meta Pixel Event-Deduplizierung und Echtzeit-Checkout-Monitoring unter Ad-Traffic.',
          timeline: '1–2 Wochen',
        },
        {
          title: 'Retention & Health-Verteidigung',
          body: 'Automatisierung von Klaviyo-Lifecycle-Flows, Multi-Language-Parity-Checks, Kunden-Unboxing-Audits und Chargeback-Prävention zum Schutz der Seller-Health.',
          timeline: 'Laufendes Monitoring',
        },
      ],
    },
    cta: {
      badge: 'Direkte strategische Partnerschaft',
      heading: 'Bereit, Ihre High-Ticket DTC Marke profitabel zu skalieren?',
      lead:
        'Ob Sie auf langsamen mobilen Landingpages Ad-Dollar verbrennen, High-Ticket-Traffic nicht konvertieren oder automatisierte Klaviyo-Retention suchen — bauen wir ein profitables System.',
      emailButton: 'E-Mail an mich: contact@naif.is-a.dev',
    },
  },

  services: {
    meta: {
      title: 'Engagement-Stufen & Preise — DTC-Architektur, CRO & Klaviyo-Beratung | Naif',
      description:
        'Transparente Engagement-Spannen für DTC-Architektur-Audits, Conversion-Sprints, Growth-Retainer und White-Label-Agenturarbeit. Fester Scope, schriftliches Angebot, keine Stundenabrechnung.',
    },
    header: {
      badge: 'Fester Scope · Schriftliches Angebot · Keine Stundenabrechnung',
      headingLead: 'Vier Wege,',
      headingHighlight: 'zusammenzuarbeiten',
      lead:
        'Richtwerte, damit Sie sich selbst einordnen können, bevor wir überhaupt sprechen. Jedes Engagement wird schriftlich angeboten — mit festem Scope und festem Preis. Ändert sich der Scope, stimmen Sie die Änderung zuerst ab.',
    },
    tiers: [
      {
        name: 'Architektur-Audit',
        price: '$1,500 – $3,500',
        priceNote: 'einmalig, fester Scope',
        duration: '2–3 Tage',
        bestFor: 'Marken, die vermuten, dass Geld verloren geht, aber nicht wissen, wo.',
        includes: [
          'Forensische Zerlegung von Storefront, Tracking und Retention-Stack',
          'Abgleich von Meta Outbound Clicks vs. GA4 Landingpage-Aufrufen',
          'Mobile CWV Felddaten-Audit (LCP / INP / CLS auf p75)',
          'Prüfung von Klaviyo-Flows, Segmentierung und Zustellbarkeit',
          'Prüfung der Lücke zwischen Lieferversprechen und Lieferrealität',
          'Priorisierter schriftlicher Report mit umsatzgewichteten Fixes',
        ],
      },
      {
        name: 'Conversion-Sprint',
        price: '$5,000 – $12,000',
        priceNote: 'einmalig, fester Scope',
        duration: '4–6 Wochen',
        bestFor: 'Marken, die Fixes ausliefern wollen, nicht nur ein Dokument erhalten.',
        includes: [
          'Alles aus dem Architektur-Audit, neu gefahren als Live-Baseline',
          'Umsetzung der 3–5 wirksamsten Änderungen direkt in Ihrem Theme',
          'Liquid / JS / CSS geschrieben und zuerst in Staging ausgeliefert',
          'Rebuild der Ad-Landingpage oder des Direct-to-Checkout-Flows',
          'Vorher-/Nachher-Messung von CVR, Umsatz pro Session und CWV',
          'Loom-Walkthrough plus schriftliche Übergabedokumentation',
        ],
      },
      {
        name: 'Growth-Retainer',
        price: '$3,000 – $8,000',
        priceNote: 'pro Monat, 30 Tage Kündigungsfrist',
        duration: 'Laufend, Quartals-Roadmap',
        bestFor: 'Teams, die jeden Monat einen Senior Operator im Loop brauchen.',
        includes: [
          'Monatliche Testing-Roadmap, an Umsatz gekoppelt, nicht an Bauchgefühl',
          'Kontinuierliche CRO- und Performance-Wartung',
          'Ausbau der Klaviyo-Flows und Verantwortung für das Lifecycle-Programm',
          'Iteration an Ad-Landingpage und Creative Direction',
          'Wöchentliches Reporting zu Traffic, Funnel und Retention',
          'Direkter Zugriff — kein Account Manager, keine Ticket-Warteschlange',
        ],
      },
      {
        name: 'White-Label-Partnerschaft',
        price: 'Nach Agenturumfang',
        priceNote: 'Agentur-Preisliste',
        duration: 'Pro Projekt oder laufend',
        bestFor: 'Agenturen und Inhouse-Teams, die Senior-CRO-Kapazität brauchen.',
        includes: [
          'Audit und Umsetzung, geliefert in Ihrem Brand und Ihrem Deck',
          'Kein Kundenkontakt durch mich — die Kundenbeziehung bleibt bei Ihnen',
          'Senior-CRO-, Performance- und Klaviyo-Kapazität ohne zusätzlichen Headcount',
          'Konfliktfrei, mit einer einfachen monatlichen Preisliste',
          'Ihre Kunden-Reporting-Vorlage, Ihre SLA',
        ],
      },
    ],
    footnote:
      'Die Spannen bilden den typischen Umfang für Marken im Band von $50k–$2M/Monat ab. Endangebote sind fest im Scope und werden vor Projektbeginn schriftlich ausgestellt. Zahlungsbedingungen: 50% zur Terminierung, 50% bei Lieferung bei festem Scope; Retainer werden monatlich im Voraus abgerechnet.',
    process: {
      eyebrow: 'Wie das Engagement läuft',
      heading: 'Ein planbarer, datengetriebener Prozess',
      lead:
        'Die gleichen vier Phasen bei jedem Engagement — vom einzelnen Audit bis zum Full-Scope-Beratungsvertrag.',
      items: [
        {
          stage: 'Phase 01',
          title: 'Audit & Baseline',
          duration: '2–3 Tage',
          detail:
            'Forensische Zerlegung von Storefront, Ad-Tracking, Retention und Fulfillment. Wir einigen uns gemeinsam auf die Baseline, bevor eine einzige Zeile geändert wird — Conversion Rate, Umsatz pro Session, p75 Field CWV, Klick-Verlust-Quote.',
        },
        {
          stage: 'Phase 02',
          title: 'Priorisierte Roadmap',
          duration: 'Tag 3 – 4',
          detail:
            'Eine nach Umsatzwirkung gegen Aufwand gewichtete Rangliste der Fixes — kein 50-Slide-Deck. Sie sehen exakt, was im Sprint ausgeliefert wird und was wartet.',
        },
        {
          stage: 'Phase 03',
          title: 'Umsetzung & Traffic-Umleitung',
          duration: '4–6 Wochen',
          detail:
            'Die wirksamsten Änderungen werden in ein Duplikat-Theme oder eine Staging-Umgebung geschrieben, gegen CWV und Conversion-Wirkung geprüft und dann ohne Downtime ausgeliefert.',
        },
        {
          stage: 'Phase 04',
          title: 'Retention & Health-Verteidigung',
          duration: 'Laufend',
          detail:
            'Klaviyo-Lifecycle-Flows, Erfüllungswahrheit-Audits und Multi-Language-Konsistenzchecks laufen kontinuierlich, um LTV, Reputation und Zahlungsabwicklung gesund zu halten.',
        },
      ],
    },
    notFit: {
      eyebrow: 'Bevor Sie mich beauftragen',
      headingLead: 'Wann ich der',
      headingHighlight: 'falsche Ansprechpartner bin',
      lead:
        'Das Teuerste, was ich tun kann, ist einen Auftrag anzunehmen, den ich nicht zum Laufen bringen kann. Das sind die Fälle, in denen ich Sie woanders hinweise — und das sage ich Ihnen im ersten Call.',
      items: [
        {
          title: 'Unter rund $50k Monatsumsatz',
          detail:
            'Das Honorar wird ein spürbarer Anteil der Marge. Ein kostenloses Shopify-Theme plus eine fokussierte CRO-Session schlägt mein Honorar meistens.',
        },
        {
          title: 'Single-SKU-Dropshipping oder Gray-Market-Reselling',
          detail:
            'Es gibt keine langfristige Kundenbeziehung zu schützen und keine Markenprämie zu verteidigen. Die Ökonomie trägt diese Art Arbeit nicht.',
        },
        {
          title: 'Sie suchen eine garantierte Conversion-Steigerung',
          detail:
            'Wer eine Steigerung im ersten Monat verspricht, beschreibt Saisonalität. Ich kann Prozess, Messung und eine dokumentierte Baseline garantieren — keine Zahl, die ich nicht kontrolliere.',
        },
        {
          title: 'Sie brauchen jemanden, der für Sie entscheidet',
          detail:
            'Das ist Beratung plus Umsetzung, keine geführte Abteilung. Ich brauche auf Ihrer Seite einen Entscheider, der Änderungen innerhalb eines Sprints freigeben kann.',
        },
      ],
    },
    cta: {
      heading: 'Starten Sie mit der billigsten ehrlichen Antwort',
      lead:
        'Führen Sie die kostenlosen Diagnosen unten durch oder schicken Sie mir Ihre Store-URL — und ich sage Ihnen, welche Stufe wirklich passt. Auch wenn die Antwort lautet: „noch keine davon“.',
    },
  },

  faq: {
    meta: {
      title: 'FAQ — DTC-Architektur, CRO & Klaviyo-Beratung | Naif',
      description:
        'Direkte Antworten zu Kosten, Zeitrahmen, Plattformabdeckung, Zugangsvoraussetzungen, NDA-Handling, Messstandards — und dazu, für wen dieses Angebot tatsächlich ist.',
    },
    header: {
      badgePrefix: 'Bevor Sie schreiben —',
      badgeSuffix: 'direkte Antworten',
      headingLead: 'Fragen',
      headingHighlight: 'beantwortet',
      headingTail: 'bevor Sie fragen',
      lead:
        'Kosten, Zeitrahmen, Zugang, NDA, Messung — und, genauso wichtig, die Fälle, in denen ich Ihnen sage, mich nicht zu beauftragen. Wenn Ihre Frage nicht dabei ist: fragen Sie direkt — Sie bekommen innerhalb von 24 Stunden eine klare Antwort.',
    },
    items: [
      {
        q: 'Was kostet ein DTC-Architektur-Engagement tatsächlich?',
        a: 'Drei Wege, zusammenzuarbeiten, mit Richtwerten, damit Sie sich vorab selbst einordnen können. Jeder Scope wird vor Beginn schriftlich angeboten — keine Stundenabrechnung, keine überraschenden Rechnungen.',
        detail: [
          'Architektur-Audit — $1,500–$3,500. Eine 2–3 Tage dauernde forensische Zerlegung von Storefront, Ad-Tracking und Retention-Stack, geliefert als priorisierter schriftlicher Report mit umsatzgewichteten Fixes.',
          'Conversion-Sprint — $5,000–$12,000. Ein 4–6-wöchiges Umsetzungsprogramm: die 3–5 wirksamsten Änderungen direkt in Ihr Theme ausgeliefert, vorher und nachher gemessen.',
          'Growth-Retainer — $3,000–$8,000/Monat. Laufende CRO-, Performance- und Klaviyo-Arbeit mit monatlicher Roadmap, Test-Takt und direktem Zugriff.',
        ],
      },
      {
        q: 'Wie lange dauert es, bis wir Ergebnisse sehen?',
        a: 'Das Audit steht nach 2–3 Tagen, die ersten Sprint-Ergebnisse liefern meist in den ersten zwei Umsetzungswochen. Aber ehrlich gerahmt: Ein Testprogramm braucht rund 90 Tage, bevor Sie das Programm lesen können statt eines Einzelresultats. Wer Ihnen eine Conversion-Steigerung im ersten Monat verspricht, beschreibt Saisonalität, nicht Arbeit.',
        detail: [
          'Tag 1–3: Audit, Baseline-Abstimmung, priorisierte Roadmap',
          'Woche 1–2: erste Fixes ausgeliefert und live',
          'Woche 3–8: Testzyklen, Read-outs, kumelierender Umsatzhebel',
        ],
      },
      {
        q: 'Mit welchen Plattformen arbeiten Sie?',
        a: 'Shopify ist mein Heimatgebiet — OS 2.0 und Shopify Plus, Liquid, Shopify Functions, eigene Sections, Headless mit Hydrogen/Oxygen, wo es sich rechnet, und Jamstack-Storefronts mit Astro. Ich übernehme auch das Replatforming von WooCommerce und BigCommerce nach Shopify Plus.',
        detail: [
          'Storefront: Shopify OS 2.0, Shopify Plus, Hydrogen, Astro/Jamstack',
          'Daten & Tracking: GA4, Meta Graph API, Conversions API, GTM, Shopify Web Pixels',
          'Retention: Klaviyo-Flows, SMS-, Loyalty- und Subscription-Integrationen',
        ],
      },
      {
        q: 'Können Sie mit unserem Team in einer anderen Zeitzone arbeiten?',
        a: 'Ja. Ich bin auf UTC+8, das überschneidet sich mit dem Abend an der US-Ostküste, dem europäischen Morgen und dem APAC-Arbeitstag. Sprint-Deadlines und Incidents kennen keine Zeitzonen, also halte ich eine schriftliche asynchrone Spur — Loom-Walkthroughs, Notizen und ein gemeinsames Board — damit nichts davon abhängt, dass wir gleichzeitig wach sind.',
        detail: [],
      },
      {
        q: 'Welchen Zugang brauchen Sie von uns, um zu starten?',
        a: 'Für den Start genügt Lesezugriff: Ihre GA4-Property, Ihr Meta Ads Manager Account und Shopify Collaborator Access. Das Meta-Passwort oder volle Admin-Rechte brauche ich am ersten Tag nicht — und werde ich auch nicht verlangen. Eine Staging-Umgebung oder ein Duplikat-Theme ist besser, damit Ihr Live-Store weiter Umsatz macht, während ich arbeite.',
        detail: [
          'GA4-Property (Viewer)',
          'Meta Ads Manager (Lesezugriff für den Advertiser)',
          'Shopify Collaborator Access oder ein Branch eines Duplikat-Themes',
          'Klaviyo-Account mit Lesezugriff für die Retention-Arbeit',
        ],
      },
      {
        q: 'Arbeiten Sie unter NDA?',
        a: 'Immer, und das ist der Default. Die meisten Engagements, die ich führe, laufen unter NDA, weil die Arbeit wirtschaftlich sensibel ist. Ich veröffentliche anonymisierte Case Studies mit den echten Zahlen — Ihre Daten, Ihre Kennzahlen, Ihre Marke entfernt.',
        detail: [],
      },
      {
        q: 'Wie beweisen Sie, dass eine Änderung wirklich gewirkt hat?',
        a: 'Wir einigen uns auf die Baseline, bevor die erste Änderung ausgeliefert wird, und messen danach Conversion Rate, Umsatz pro Session, p75 Field CWV (LCP, INP, CLS), Klick-Verlust-Quote und Chargeback-Quote dagegen. Verliert ein Test, wird er zurückgerollt. Keine Vanity-Wins, keine Screenshots von guten Tagen.',
        detail: [],
      },
      {
        q: 'Können Sie eine Steigerung der Conversion Rate garantieren?',
        a: 'Nein — und Sie sollten jeden misstrauisch betrachten, der das behauptet. Ich garantiere den Prozess: eine dokumentierte Baseline, eine priorisierte Roadmap, Änderungen direkt in Ihrem Theme und eine Messung, die jede Hypothese bestätigt oder widerlegt. Der Uplift ist das Ergebnis — kein Vertragsmerkmal.',
        detail: [],
      },
      {
        q: 'Machen Sie nur Strategie — oder setzen Sie tatsächlich um?',
        a: 'Ich setze um. Strategie, die an ein Inhouse-Team geht, stirbt meist im Backlog — besonders wenn der Fix eine Liquid-Loop, ein Meta-Event oder ein Klaviyo-Flow ist. Ich schreibe den Code, liefere ihn in ein Staging-Theme und übergebe einen Loom-Walkthrough plus Notizen, damit Ihr Team ihn danach besitzt.',
        detail: [],
      },
      {
        q: 'Wir arbeiten bereits mit einer Shopify-Agentur. Können Sie da trotzdem helfen?',
        a: 'Ja, das ist ein gut gehener Pfad. Ich arbeite White-Label für Agenturen, die Senior-CRO- und Performance-Kapazität ohne zusätzlichen Headcount brauchen — Ihr Team behält die Kundenbeziehung, ich mache Audit und Umsetzung, alles wird in Ihrem Brand geliefert. So halte ich außerdem eine stabile Pipeline, ohne ein Sales-Team aufzubauen.',
        detail: [],
      },
      {
        q: 'Wir sind ein kleiner Store. Lohnt sich das für uns?',
        a: 'Ehrlich: oft nicht. Unter rund $50,000/Monat Umsatz wäre das Honorar ein spürbarer Anteil der Marge, und der billigere Fix ist meist ein gut gebautes kostenloses Shopify-Theme plus eine fokussierte CRO-Session. Das sage ich Ihnen im ersten Call, statt Ihnen einen Retainer zu verkaufen, den Sie nicht rechtfertigen können.',
        detail: [],
      },
      {
        q: 'Wir haben noch keinen Paid Traffic. Können Sie helfen?',
        a: 'Bei Storefront, Speed und CRO — ja, absolut. Bei Ad-Spend-Effizienz und Rückgewinnung von Klick-Verlusten — noch nicht, weil es keine Click-Daten zum Abgleichen gibt. Starten Sie mit dem Audit, machen Sie die Seite schnell und conversion-ready, und nehmen Sie Paid Traffic auf, wenn Budget dahintersteht.',
        detail: [],
      },
      {
        q: 'Was passiert, wenn das Engagement endet?',
        a: 'Sie behalten alles: den Code, das Liquid, die Klaviyo-Flows, die GA4-Events, die Dokumentation und das Mess-Setup. Der Retainer ist ein Komfort, keine Abhängigkeit. Wenn die Arbeit sich nicht rechnet, darf der Ausstieg nicht der schwierige Teil sein.',
        detail: [],
      },
    ] as { q: string; a: string; detail: string[] }[],
    cta: {
      heading: 'Ihre Frage steht nicht auf dieser Seite',
      lead:
        'Gut — das heißt meist, dass es die interessante ist. Schicken Sie sie mit Ihrer Store-URL, und ich beantworte sie mit konkreten Details statt mit Broschüre.',
    },
  },

  contact: {
    meta: {
      title: 'Arbeiten Sie mit mir | DTC-Architektur & Growth-Beratung | Naif',
      description:
        'Kontaktieren Sie Naif für High-Ticket DTC Shopify/Jamstack Storefront-Architektur, Meta-Ad-Landingpage-CRO, Klaviyo-Retention-Systeme und Growth-Beratung.',
    },
    eyebrow: 'DTC Growth Engagements & Verträge',
    heading: 'Arbeiten Sie mit mir / DTC-Architektur & Beratung',
    lead:
      'Ich arbeite mit High-Ticket DTC Marken, Luxus-E-Commerce-Gründern und wachsenden Cross-Border-Operatoren zusammen, um konversionsstarke Storefronts zu bauen, Ad-Leckage zu eliminieren und die Seller-Health zu schützen.',
    channelsHeading: 'Direkte Kontaktwege',
    emailLabel: 'Geschäftliche E-Mail:',
    githubLabel: 'GitHub-Profil:',
    availabilityLabel: 'Verfügbarkeit & Zeitzonen:',
    availability:
      'Offen für DTC-Architektur-Audits, Conversion-Sprints und Growth-Beratungsverträge. Flexible Überschneidung mit Brand-Teams aus den USA, Europa und APAC.',
    offeringsHeading: 'Kern-Leistungen',
    offerings: [
      {
        title: 'High-Ticket Storefront-Architektur',
        body: 'Maßgeschneiderte Shopify OS2.0- & Jamstack-Builds mit 6-Shot Anti-Slop Visual Direction.',
      },
      {
        title: 'Meta/Google Ad-Landingpage CRO',
        body: 'Mobile Klick-Verlust von 25%+ auf < 8% reduzieren.',
      },
      {
        title: 'Klaviyo Lifecycle Retention',
        body: 'Konversionsstarke Welcome-Sequences, Browse Abandonment und VIP-Retention.',
      },
      {
        title: 'Erfüllungswahrheit & Chargeback-Schutz',
        body: 'PayPal- & Stripe-Streitigkeiten zuvorkommen, indem digitale Aussagen mit der realen Paketlieferung abgeglichen werden.',
      },
    ],
  },

  rfq: {
    badge: 'DTC-Architektur & Growth-Konsultation',
    heading: 'DTC-Architektur-Audit oder Beratungsvertrag anstoßen',
    lead:
      'Ob Sie eine High-Ticket Shopify Re-Architektur, eine schnellere Meta-Ad-Landingpage oder automatisierte Klaviyo-Retention-Flows brauchen — melden Sie sich unten. Antwort direkt innerhalb von 24 Stunden.',
    nameLabel: 'Ihr Name *',
    companyLabel: 'Marke / Store-URL / Unternehmen *',
    emailLabel: 'Geschäftliche E-Mail-Adresse *',
    contactLabel: 'Telegram / WhatsApp / Telefon',
    scopeLabel: 'Engagement-Typ / Scope',
    budgetLabel: 'Ziel-Zeitrahmen & Monatsbudget',
    messageLabel: 'Store-URL, aktueller monatlicher GMV & zentrale Engpässe *',
    namePlaceholder: 'z. B. Alex Morgan',
    companyPlaceholder: 'z. B. Amesha Energy / brand.com',
    emailPlaceholder: 'alex@brand.com',
    contactPlaceholder: '@username oder Telefonnummer',
    scopePlaceholder: 'z. B. High-Ticket Shopify Storefront / Meta Ad Landing CRO / Klaviyo Flow',
    budgetPlaceholder: 'z. B. Sofort / $3k-$10k Sprint oder Beratungs-Retainer',
    messagePlaceholder:
      'Beschreiben Sie kurz Ihre Marke, den aktuellen monatlichen GMV, die Ad-Plattformen und die zentralen Conversion- oder Retention-Engpässe...',
    confidentiality: 'Strikter Schutz von IP & NDA-Vertraulichkeit',
    submitting: 'Verbindung zum Edge-Gateway wird hergestellt...',
    success:
      '<strong>Anfrage erhalten!</strong> Danke, {name}. Ihre Projektanfrage ist protokolliert. Ich prüfe Ihre Anforderungen und antworte per E-Mail ({email}) innerhalb von 24 Stunden.',
    failure:
      '<strong>Fehler beim Absenden der Anfrage:</strong> {error}. Sie können mir auch direkt schreiben an <a href="mailto:dewellsmell@gmail.com" class="underline text-white">dewellsmell@gmail.com</a>.',
  },

  products: {
    meta: {
      title: 'DTC Case Studies & Growth-Systeme in Produktion | Naif',
      description:
        'Entdecken Sie die DTC-Case-Studies von Naif aus der Produktion. High-Ticket Storefront-Architektur, Mitigation des Meta-Ad-Click-Verlusts und automatisierte Klaviyo-Retention-Engines.',
    },
    eyebrow: 'DTC Systeme & Growth-Portfolio',
    heading: 'DTC Case Studies & Funnel-Architekturen aus der Produktion',
    lead:
      'Ausgewählte Produktions-Architekturen, CRO-Case-Studies und Retention-Infrastruktur-Lösungen. Jedes Projekt zeigt reale Conversion-Steigerungen, Ad-Traffic-Verteidigung und messbare Business-Resultate.',
    allSystems: 'Alle Systeme',
  },

  productDetail: {
    stackLabel: 'Primärer Tech-Stack:',
    benchmarkLabel: 'Performance-Benchmark:',
    targetLabel: 'Deployment-Ziel:',
    targetValue: 'Shopify & Edge CDN',
    highlightsHeading: 'Kerninnovationen & Growth-Fähigkeiten',
    inquire: 'Ähnliche Architektur anfragen',
    back: '← Zurück zu allen Projekten',
    specsHeading: 'Systemarchitektur & technische Parameter',
    walkthroughHeading: 'Case-Study-Walkthrough & Engineering-Impact',
    footerNote: 'DTC Growth Architecture • Offen für Brand-Audits & Beratung',
  },

  postDetail: {
    badge: 'Architektur-Whitepaper',
    crumb: 'Technische Texte',
    authorRole: 'Full-Stack Software Engineer & Serverless-Architekt',
    authorBio:
      'Spezialist für Jamstack-Plattformen unter 100ms, Zero-JS-Islands-Architekturen und Cloud-Kostenoptimierung auf der Cloudflare Edge.',
    workWithMe: 'Arbeiten Sie mit mir →',
    metaTitleSuffix: 'Technische Texte | Naif',
    metaFallback: 'Naifs Deep Dive in moderne Web-Architektur und Systems Engineering.',
  },

  resources: {
    meta: {
      title: 'Kuratierte DTC Engineering- & Global-Trade-Ressourcen | Naif',
      description:
        'Handverlesenes Verzeichnis mit 24 autoritativen Developer-Tools, Edge-Serverless-Infrastruktur, Netzwerk-Diagnose-Suites und Global-Trade-Intelligence-Plattformen.',
    },
    badge: 'Geprüfte Tech-Toolbox • 24 kuratierte Utilities',
    headingLead: 'Autoritative Engineering- &',
    headingHighlight: 'Intelligence-Tools',
    lead:
      'Eine sorgfältig kuratierte Sammlung an Utilities aus der Produktion, auf die ich täglich baue: von Sub-Second-Core-Web-Vitals-Diagnosesuites bis zu globalen Bill-of-Lading-Daten und Anycast-Edge-Cloud-Plattformen.',
    allResources: 'Alle Ressourcen',
    categories: {
      performance: 'Web Performance & Audits',
      edge: 'Edge Cloud & Serverless',
      diagnostics: 'E-Mail- & Netzwerkdiagnostik',
      intelligence: 'Globaler Handel & Intelligence',
    },
    launch: 'Öffnen',
    openInNewTab: '{name} öffnen',
    diagnosticCta: {
      heading: 'Brauchen Sie ein Experten-Audit mit diesen Tools?',
      body: 'Das Audit zu fahren ist einfach. Aus den Daten eine Engineering-Roadmap ohne Downtime zu machen, ist es nicht — das verlangt Systems Thinking über Performance, E-Mail-Reputation und Cloud-Infrastruktur hinweg.',
      button: 'Architektur-Review buchen',
    },
    entries: [
      {
        key: 'psi',
        name: 'Google PageSpeed Insights',
        url: 'https://pagespeed.web.dev/',
        domain: 'pagespeed.web.dev',
        category: 'performance',
        description:
          'Der maßgebliche Standard für mobile und Desktop Core Web Vitals (LCP, INP, CLS), basierend auf echten Chrome User Experience Report Felddaten.',
      },
      {
        key: 'wpt',
        name: 'WebPageTest',
        url: 'https://www.webpagetest.org/',
        domain: 'webpagetest.org',
        category: 'performance',
        description:
          'Tiefen-Analysen des Performance-Verhaltens von mehreren Standorten, mit Connection Throttling, CPU-Slowdown-Emulation, Video-Filmstrips und visuellem Vergleich.',
      },
      {
        key: 'urlscan',
        name: 'URLScan.io',
        url: 'https://urlscan.io/',
        domain: 'urlscan.io',
        category: 'performance',
        description:
          'Ein Scanner mit sandboxed Browser, der alle HTTP-Requests, Third-Party-Tracking-Skripte, Security-Header und DOM-Mutationen analysiert und aufzeichnet.',
      },
      {
        key: 'gtmetrix',
        name: 'GTmetrix',
        url: 'https://gtmetrix.com/',
        domain: 'gtmetrix.com',
        category: 'performance',
        description:
          'Eine synthetische Website-Speedtest-Suite mit Waterfall-Aufschlüsselungen, Page-Generation-Timelines und umsetzbaren Optimierungs-Insights.',
      },
      {
        key: 'yellowlab',
        name: 'Yellow Lab Tools',
        url: 'https://yellowlab.tools/',
        domain: 'yellowlab.tools',
        category: 'performance',
        description:
          'Ein Frontend-Code-Quality-Auditor, der tiefe DOM-Bäume, komplexe CSS-Selektoren, schlechte JavaScript-Praktiken und Webfont-Rendering-Engpässe aufspürt.',
      },
      {
        key: 'speedvitals',
        name: 'SpeedVitals Global TTFB Test',
        url: 'https://speedvitals.com/ttfb-test',
        domain: 'speedvitals.com',
        category: 'performance',
        description:
          'Misst die Time to First Byte (TTFB) parallel an über 35 globalen Edge-Standorten, um CDN-Caching-Effizienz und Origin-Latenz zu bewerten.',
      },
      {
        key: 'cfworkers',
        name: 'Cloudflare Workers & Pages',
        url: 'https://workers.cloudflare.com/',
        domain: 'workers.cloudflare.com',
        category: 'edge',
        description:
          'Serverless Execution Environment in über 300 Anycast-Städten, die leichtgewichtiges JavaScript/Wasm ohne Container-Cold-Starts ausführt.',
      },
      {
        key: 'astro',
        name: 'Astro Web Framework',
        url: 'https://astro.build/',
        domain: 'astro.build',
        category: 'edge',
        description:
          'Das moderne Web-Framework für content-getriebene Sites, Wegbereiter der Islands-Architektur: reines HTML mit selektiver Client-Hydration.',
      },
      {
        key: 'resend',
        name: 'Resend',
        url: 'https://resend.com/',
        domain: 'resend.com',
        category: 'edge',
        description:
          'Developer-first Transaktions-Mail-API mit React-Email-Templating, blitzschnellen REST-Endpoints und belastbarer Zustellung im Posteingang.',
      },
      {
        key: 'upstash',
        name: 'Upstash',
        url: 'https://upstash.com/',
        domain: 'upstash.com',
        category: 'edge',
        description:
          'Edge-native Dateninfrastruktur mit Serverless Redis, Message Queues (QStash) und Kafka sowie zustandslosen HTTP/REST-APIs für Edge Workers.',
      },
      {
        key: 'turso',
        name: 'Turso (libSQL)',
        url: 'https://turso.tech/',
        domain: 'turso.tech',
        category: 'edge',
        description:
          'Verteilte Datenbank auf libSQL-Basis, repliziert SQLite-Daten global in die Nähe der Edge-Nutzer — lokale Read-Queries unter einer Millisekunde.',
      },
      {
        key: 'keystatic',
        name: 'Keystatic',
        url: 'https://keystatic.com/',
        domain: 'keystatic.com',
        category: 'edge',
        description:
          'Git-basiertes Headless CMS, das strukturierte JSON-, YAML- und Markdoc-Dateien direkt in Ihr GitHub-Repository schreibt.',
      },
      {
        key: 'mailtester',
        name: 'Mail-Tester',
        url: 'https://www.mail-tester.com/',
        domain: 'mail-tester.com',
        category: 'diagnostics',
        description:
          'Bewertet die Zustellbarkeit ausgehender E-Mails anhand von SPF-Records, DKIM-Signierung, DMARC-Alignment und SpamAssassin-Regeln.',
      },
      {
        key: 'mxtoolbox',
        name: 'MxToolbox',
        url: 'https://mxtoolbox.com/',
        domain: 'mxtoolbox.com',
        category: 'diagnostics',
        description:
          'Umfassende Netzwerkdiagnose-Plattform: MX-Record-Lookup, DNS-Propagation, SMTP-Handshake-Tests und über 100 globale E-Mail-Blacklists.',
      },
      {
        key: 'ssllabs',
        name: 'Qualys SSL Labs',
        url: 'https://www.ssllabs.com/ssltest/',
        domain: 'ssllabs.com',
        category: 'diagnostics',
        description:
          'Tiefenanalyse jedes öffentlichen SSL/TLS-Servers: Bewertung von Zertifikatsketten, Cipher-Suite-Stärke, Forward Secrecy und Schwachstellen-Exposition.',
      },
      {
        key: 'securityheaders',
        name: 'SecurityHeaders.com',
        url: 'https://securityheaders.com/',
        domain: 'securityheaders.com',
        category: 'diagnostics',
        description:
          'Sofort-Audit der HTTP-Security-Response-Header, inklusive CSP, HSTS, Permissions-Policy und Referrer-Policy.',
      },
      {
        key: 'dnsviz',
        name: 'DNSViz',
        url: 'https://dnsviz.net/',
        domain: 'dnsviz.net',
        category: 'diagnostics',
        description:
          'Interaktives Visualisierungs-Tool, das DNS- und DNSSEC-Chain-Health, verschlüsselte Delegation und den Status autoritativer Server analysiert.',
      },
      {
        key: 'bgpview',
        name: 'BGPView',
        url: 'https://bgpview.io/',
        domain: 'bgpview.io',
        category: 'diagnostics',
        description:
          'Echtzeit-BGP-Routing-Inspektor, der ASN-Ownership, Prefix-Ankündigungen, Anycast-Peering und internationale Internet-Exchanges offenlegt.',
      },
      {
        key: 'importyeti',
        name: 'ImportYeti',
        url: 'https://www.importyeti.com/',
        domain: 'importyeti.com',
        category: 'intelligence',
        description:
          'Durchsuchbare Datenbank mit Millionen US-Zolldaten zur Seefracht — für die Suche nach echten Fabrik-Lieferanten, OEM-Partnern und Logistikrouten der Wettbewerber.',
      },
      {
        key: 'metalib',
        name: 'Meta Ad Library',
        url: 'https://www.facebook.com/ads/library/',
        domain: 'facebook.com/ads/library',
        category: 'intelligence',
        description:
          'Durchsuchbares Archiv aller kommerziellen Ad-Creatives, die auf Facebook, Instagram, Messenger und im Audience Network laufen.',
      },
      {
        key: 'adstransparency',
        name: 'Google Ads Transparency Center',
        url: 'https://adstransparency.google.com/',
        domain: 'adstransparency.google.com',
        category: 'intelligence',
        description:
          'Offizielle Transparenzbibliothek für Werbetreibende, die Search-, YouTube- und Display-Kampagnen im weltweiten Google-Netzwerk abdeckt.',
      },
      {
        key: 'wipo',
        name: 'WIPO Global Brand Database',
        url: 'https://branddb.wipo.int/',
        domain: 'branddb.wipo.int',
        category: 'intelligence',
        description:
          'Globales Markenregister-Portal mit internationalen Eintragungen des Madrid Systems und nationalen IP-Behörden aus allen Regionen.',
      },
      {
        key: 'builtwith',
        name: 'BuiltWith',
        url: 'https://builtwith.com/',
        domain: 'builtwith.com',
        category: 'intelligence',
        description:
          'Web-Technology-Profiler, der CMS, CDN, Tracking-Code, Payment-Gateways und Ad-Pixels hinter jeder Ziel-Domain aufdeckt.',
      },
      {
        key: 'similarweb',
        name: 'Similarweb',
        url: 'https://www.similarweb.com/',
        domain: 'similarweb.com',
        category: 'intelligence',
        description:
          'Digital-Market-Intelligence-Plattform mit Traffic-Benchmarks, Referral-Quellen, Audience-Geografie und Search-Intent-Aufschlüsselungen.',
      },
    ] as ResourceEntry[],
  },
} as const;

export type PageStrings = typeof pages;
