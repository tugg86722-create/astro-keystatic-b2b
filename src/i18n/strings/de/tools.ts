export const tools = {
  roi: {
    meta: {
      title: 'Web Performance & Ad-ROI Waste Calculator | Naif | DTC Architect',
      description:
        'Berechnen Sie, wie viel Ihres monatlichen Ad-Budgets durch mobile Ladelatenz verloren geht. Interaktiver ROI-Leckage-Rechner auf Basis von Google- & Cloudflare-Core-Web-Vitals-Research.',
    },
    badge: 'Google- & Cloudflare-Latenz-Impact-Korrelation-Engine',
    headingLead: 'Web Performance &',
    headingHighlight: 'Ad-ROI-Verschwendung',
    headingTail: 'Rechner',
    lead:
      'Langsame mobile Ladezeiten frustrieren nicht nur Besucher — sie verbrennen bezahltes Marketingkapital. Messen Sie, wie Latenz die Bounce-Rate hochtreibt, bezahlte Klicks schon vor dem First Paint verwirft, und berechnen Sie den exakten finanziellen Vorteil einer Jamstack-Architektur unter 1,0s.',
    switcher: {
      clickLoss: 'Klick-Verlust-Prüfer',
      scorecard: 'Chargeback-Risiko-Scorecard',
      roi: 'Ad-ROI & Latency-Rechner',
      clickLossDesc: 'Meta Outbound Clicks gegen GA4 Landingpage-Aufrufe abgleichen und die Lücke beziffern.',
      scorecardDesc: 'Acht Fragen, ein Seller-Health-Score und der Fix für jedes rote Flag.',
      roiDesc: 'Die Kosten mobiler Ladezeit in verschwendetem Ad-Budget und verlorenen Bestellungen beziffern.',
    },
    inputsHeading: 'Kampagnen- & Latenz-Inputs',
    reset: 'Standardwerte zurücksetzen',
    fields: {
      spend: 'Monatliches Ad-Budget ($)',
      cpc: 'Durchschnittlicher CPC ($ USD)',
      loadTime: 'Aktuelle mobile Ladezeit (Sekunden)',
      cvr: 'Aktuelle mobile Conversion Rate (%)',
    },
    scale: {
      spend: ['$500', '$50,000', '$100,000+'],
      cpc: ['$0.20', '$5.00', '$15.00'],
      loadTime: ['0.8s (Jamstack)', '3.0s', '7.0s (Schwer)'],
      cvr: ['0.2%', '2.5%', '6.0%'],
    },
    groundTruth: {
      title: 'Ground-Truth-Datenmodell',
      body: 'Basiert auf Google Research & SOASTA Mobile Telemetry: 53% der mobilen Besuche werden abgebrochen, wenn Seiten länger als 3 Sekunden laden; die Conversion Rate fällt mit jeder zusätzlichen Sekunde Verzögerung um bis zu 4.42%.',
    },
    results: {
      wastedTitle: 'Monatlich verschwendetes Ad-Budget',
      wastedDesc: 'Geschätztes Kapital, das auf 4G-Mobilgeräten durch Bounces vor dem Rendern der Seite verloren geht.',
      wastedAnnualLabel: 'Jahresverlust:',
      bouncedTitle: 'Verworfene Klicks / Monat',
      bouncedDesc: 'Von {total} bezahlten Visits abgebrochen wegen langsamem mobilem Rendering.',
      penaltyLabel: 'Mobile-Bounce-Penalty:',
      recoveredTitle: 'Rettbare Conversions',
      recoveredDesc: 'Prognostizierte zusätzliche Kunden, die mit Jamstack-Edge-Auslieferung unter 1,0s gewonnen werden.',
      recoveredAnnualLabel: 'Geschätzte Bestellungen pro Jahr:',
      valueTitle: 'Prognostizierter jährlicher ROI-Uplift',
      valueDesc: 'Berechneter Wert des gehaltenen Traffics plus Conversion-Rate-Multiplikator für Sub-Second-Ladezeiten.',
      paybackLabel: 'Amortisationszeit der Architektur:',
      paybackValue: '< 30 Tage',
      pills: {
        optimal: 'Optimale Edge-Speed',
        moderate: 'Moderate Reibung',
        severe: 'Starker Drop-off',
        critical: 'Kritische Budget-Verschwendung',
      },
      latencyLabels: {
        high: 'Hohe Latenz / Engpass',
        moderate: 'Moderate Speed',
      },
    },
    benchmark: {
      heading: 'Latenz-vs-Conversion-Differenz',
      indexLabel: 'Google SOASTA Index',
      currentLabel: 'Aktuelle Infrastruktur-Latenz:',
      targetLabel: 'Naifs Jamstack-Edge-Architektur:',
      currentNote: 'Hohe Hydration-Overhead, blockierende JS-Bundles, Datenbank-Roundtrips.',
      targetNote: 'Vorgerendertes HTML an über 300 Edge-Nodes, sofortiger First Contentful Paint, 0ms Cold Starts.',
    },
    roadmap: {
      heading: 'Roadmap für die Architektur-Sanierung',
      items: [
        {
          title: '1. Edge-TTFB eliminieren',
          body: 'Datenbank-Parsing auf dem Origin-Server durch vorgerendertes Edge-HTML aus Cloudflare Workers ersetzen — TTFB global unter 60ms.',
        },
        {
          title: '2. Zero-JS-Hydration entfernen',
          body: 'Schwere SPA- oder WooCommerce-/Shopify-Theme-Skripte auf Astro Islands migrieren und 90%+ des client-seitigen Main-Thread-Blockierens eliminieren.',
        },
        {
          title: '3. Automatische Bild-Konvertierung',
          body: 'Responsive AVIF/WebP-Assets über Cloudflare Images ausliefern, exakt passend zur physischen Screen-DPR — ohne Layout Shift (CLS = 0).',
        },
        {
          title: '4. Serverless RFQ & Checkout',
          body: 'Form-Leads und Bestellanfragen asynchron über Cloud Queues (Cloudflare Queues/KV) routen, mit Antwortzeiten unter 100ms.',
        },
      ],
    },
    cta: {
      heading: 'Hören Sie auf, bezahltes Ad-Budget zu verbrennen',
      body: 'Fordern Sie eine umfassende Latenz-Analyse und einen Migrationsvorschlag für Ihren Store oder Ihre App an.',
    },
  },

  clickLoss: {
    meta: {
      title: 'Klick-Verlust-Prüfer — Meta Outbound Clicks vs. GA4 Landingpage-Aufrufe abgleichen | Naif',
      description:
        'Kostenloses Tool: Meta Ads Outbound Clicks gegen GA4 Landingpage-Aufrufe abgleichen, um echten Klick-Verlust, verschwendetes Ad-Budget und rettbaren Umsatz zu messen. Zeigt Ihnen, ob das Leck im Rendering oder in der Attribution liegt.',
    },
    badge: 'Meta Graph API × GA4 Abgleich-Engine',
    heading: 'Klick-Verlust-Prüfer',
    reset: 'Standardwerte zurücksetzen',
    lead:
      'Ihre Ad-Plattform sagt, Sie hätten 40,000 Klicks gekauft. Ihre Analytics sagen, 31,000 Menschen sind angekommen. Diese Lücke von 9,000 ist Geld, das Sie bereits bezahlt haben und nie verkaufen konnten — und die meisten Marken schieben die Schuld auf Creative Fatigue. Dieses Tool misst den echten Verlust, beziffert ihn und zeigt Ihnen, ob es ein Rendering-Problem oder ein Mess-Artefakt ist.',
    inputsHeading: 'Inputs für den Abgleich',
    fields: {
      outbound: 'Meta Outbound Clicks / Monat',
      lpv: 'GA4 Landingpage-Aufrufe / Monat',
      cpc: 'Durchschnittlicher Cost Per Click ($)',
      loadTime: 'Mobile Ladezeit der Landingpage (s)',
      cvr: 'Conversion Rate der Landingpage (%)',
      aov: 'Durchschnittlicher Warenkorbwert ($)',
    },
    hints: {
      outbound: 'Meta Ads Manager → Ads Manager → Columns → Outbound clicks (alle Kampagnen, letzte 30 Tage).',
      lpv: 'GA4 → Reports → Acquisition → Traffic acquisition → Session source/medium = Meta → Landing page + session starts.',
      loadTime: 'Prüfen Sie mit PageSpeed Insights (mobile, throttled) oder CrUX-Felddaten für die URL, auf die Ihre Ads zeigen.',
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
      lossTitle: 'Tatsächliche Klick-Verlust-Quote',
      lossDesc: 'Von {total} bezahlten Klicks haben nie einen Landingpage-Aufruf erzeugt.',
      benchmarkLabel: 'Branchen-Benchmark:',
      benchmarkValue: '25%+ typisch',
      wastedTitle: 'Verschwendetes Ad-Budget / Monat',
      wastedDesc: 'Kapital für {clicks} Klicks, die nie eine Seite gerendert haben.',
      wastedAnnualLabel: 'Jährlich:',
      ordersTitle: 'Rettbare Bestellungen / Monat',
      ordersDesc: 'Bestellungen, die Sie einholen, wenn Sie die Lücke auf die Zielquote unter 8% schließen.',
      ordersAnnualLabel: 'Bestellungen pro Jahr:',
      revenueTitle: 'Rettbarer Umsatz / Monat',
      revenueDesc: 'Umsatz aus demselben Media-Budget, minus dieselben Kosten.',
      revenueAnnualLabel: 'Jährlicher Uplift:',
      pills: {
        critical: 'Kritisches Leck',
        elevated: 'Erhöhter Verlust',
        guarded: 'Abgesichert',
        healthy: 'Gesund',
      },
    },
    diagnosis: {
      heading: 'Root-Cause-Diagnose',
      types: {
        rendering: 'Rendering-Verlust',
        attribution: 'Mess-Artefakt',
        mixed: 'Gemischte Ursache',
        guarded: 'Abgesichert',
        healthy: 'Gesunde Pipeline',
      },
      summaries: {
        rendering:
          'Ihre Landingpage ist so langsam, dass echte Besucher gehen, bevor die Seite rendert. Das ist verlorene Nachfrage, kein Reporting-Effekt.',
        attribution:
          'Ihre Seite lädt schnell, die Lücke ist also kein Bounce-Problem. Sehr wahrscheinlich ist es ein Tracking- und Attributionsfehler — Sie zahlen für Klicks, die GA4 nie erfasst. Das heißt auch: Ihr ROAS ist falsch.',
        mixed:
          'Beide Faktoren spielen eine Rolle: Einige Besucher springen bei mittlerer Ladezeit tatsächlich ab, ein Teil der Lücke ist Mess-Drift. Beheben Sie es in dieser Reihenfolge.',
        guarded:
          'Ihre Klick-Verlust-Quote liegt nahe am Ziel von unter 8%. Die verbleibende Lücke ist einen Quartals-Check wert, keinen Notfall-Fix — straffen Sie den Tracking-Abgleich und machen Sie weiter.',
        healthy:
          'Ihr bezahlter Traffic kommt an und wird erfasst. Auf diesem Level liegt das verbleibende Potenzial in der Conversion Rate und im durchschnittlichen Warenkorbwert, nicht im Traffic-Abgleich.',
      },
      causes: {
        rendering: [
          {
            title: '1. LCP-Hero-Bild preloaden, render-blockierende Tag-Manager-Skripte entfernen',
            body: 'Nicht-essenzielle Pixels hinter requestIdleCallback deferen, damit der First Paint nicht auf Third-Party-JS warten muss.',
          },
          {
            title: '2. App-Ballast killen und den Main Thread freilegen',
            body: 'Jede installierte App lädt auf jedem Template Skripte. Prüfen Sie die Total Blocking Time und entfernen oder verschieben Sie die schlimmsten Übeltäter.',
          },
          {
            title: '3. AVIF/WebP mit passender DPR ausliefern, um CLS auf null zu bringen',
            body: 'Layout Shift beim Ad-Klick ist eine der Hauptursachen für den White-Flash-Bounce in mobilen In-App-Browsern.',
          },
        ],
        attribution: [
          {
            title: '1. Meta-Signal unter iOS 14.5+ / Consent Mode v2 abgleichen',
            body: 'Ihre CAPI-Server-Events und Client-Events müssen über event_id dedupliziert werden, sonst zählt GA4 bezahlte Sessions zu niedrig, die Meta zählt.',
          },
          {
            title: '2. Redirect-Ketten und Messverlust über Domains hinweg prüfen',
            body: 'Ad-Redirects über einen Shortener oder Länder-Selektor brechen die Session-Attribution — der Click landet, GA4 sieht ihn nie.',
          },
          {
            title: '3. Internen Traffic, Consent-Denials und ITP-Effekte herausfiltern',
            body: 'Safari und In-App-Browsers strippen Third-Party-Cookies; eine echte Audience kann wie eine Messlücke aussehen.',
          },
          {
            title: '4. Prüfen, dass Ihre Landing-URL exakt dem Ad-Ziel entspricht',
            body: 'Eine Abweichung zwischen Ad-URL und finaler URL teilt die Session still auf, bevor sie gezählt wird.',
          },
        ],
        mixed: [
          {
            title: '1. Zuerst den Render-Pfad reparieren — er erklärt den Großteil der Lücke',
            body: 'Ihre Seite liegt über der 3-Sekunden-Schwelle, ab der mobile Abbrüche stark steigen — ein Teil dieses Verlusts ist also echte verlorene Nachfrage.',
          },
          {
            title: '2. Danach die Tracking-Lücke abgleichen',
            body: 'Bei einer schnellen Seite ist jede verbleibende Lücke ein Messproblem. Vergleichen Sie Meta Outbound Clicks mit GA4-Sessions und deduplizieren Sie CAPI über event_id.',
          },
          {
            title: '3. Das Audit auf Ihre Top-5-Ad-Landingpages laufen lassen, nicht nur auf den Store',
            body: 'Leckage ist selten gleichmäßig verteilt — eine langsame Variante kann den Großteil des Verlusts ausmachen.',
          },
        ],
      },
    },
    benchmark: {
      heading: 'Klick-Verlust-Quote vs. Benchmarks',
      targetLabel: 'Ziel < 8%',
      yours: 'Ihr Store:',
      typical: 'Typischer Shopify-Store:',
      typicalValue: '20% – 30%',
      target: 'Edge-Architektur mit Sub-Second-Speed:',
      targetValue: '< 8%',
    },
    gate: {
      heading: 'Holen Sie sich den vollständigen Abgleich-Report',
      body: 'Aufschlüsselung der Lücke Session für Session, die exakten GA4- & Meta-Report-Pfade und eine 90-Tage-Fix-Sequenz für Ihren Store.',
      newsletterHeading: 'Schicken Sie mir den vollständigen Abgleich-Report',
      newsletterSubheading:
        'Geben Sie Ihre Store-URL ein und ich personalisiere die Diagnose — inklusive der Frage, welche Ihrer Landingpages am meisten verliert.',
      cta: 'Report anfordern',
      note: 'Ein Report, danach jede Woche der Ad-Waste-Report. Jederzeit abmeldbar.',
    },
  },

  scorecard: {
    meta: {
      title: 'Chargeback-Risiko-Scorecard — Kostenlose DTC Seller-Health-Diagnose | Naif',
      description:
        'Kostenlose 8-Fragen-Diagnose, die Ihre Chargeback-Exponierung bewertet, das Risiko beziffert und Ihnen den konkreten Fix für jedes rote Flag gibt. Aufgebaut auf Erfüllungswahrheit, Lieferversprechen und Dispute-Abwehr.',
    },
    badge: 'Seller-Health-Diagnose · 8 Fragen',
    headingLead: 'Chargeback',
    headingHighlight: 'Risiko-Scorecard',
    lead:
      'Ein Chargeback ist kein Zahlungsproblem. Es ist ein Eskalationsfall der Erfüllungswahrheit — und der Händler hat meist die Beweise, um ihn zu gewinnen. Acht Fragen, ein Risiko-Score und der konkrete Fix für jedes rote Flag, das Sie treffen. Die meisten Marken sind in unter drei Minuten durch.',
    exposure: {
      gmv: 'Monatsumsatz ($)',
      gmvHint: 'Wird genutzt, um die Exponierung in Dollar zu beziffern.',
      cbRate: 'Aktuelle Chargeback-Quote (%)',
      cbRateHint: 'Card Networks markieren einen Schwellenwert um 1%. Prüfen Sie das Dashboard Ihres Payment-Processors.',
      aov: 'Durchschnittlicher Warenkorbwert ($)',
      aovHint: 'Streitfälle skalieren mit der Bestellgröße — eine $40-Bestellung wird selten bestritten, eine $200-Bestellung schon.',
    },
    questions: [
      {
        id: 'fulfillment-truth',
        q: 'Entspricht das, was im Paket ankommt, dem, was die Produktseite versprochen hat — Material, Gewicht, Menge, Oberfläche?',
        why: 'Abweichende Erfüllung ist der am schnellsten wachsende Streitgrund. Sie ist zugleich am schwersten zu verteidigen, weil das eigene Listing des Händlers der Beweis ist.',
        options: [
          {
            label: 'Ja — wir prüfen Sendungen gegen die Angaben im Listing',
            fix: 'Behalten Sie das. Dokumentieren Sie das Audit, damit Sie es verteidigen können.',
            score: 0,
          },
          {
            label: 'Teilweise — einige Artikel werden geprüft, andere nicht',
            fix: 'Nehmen Sie Ihre Top-5-SKUs nach Umsatz und prüfen Sie zuerst diese. Decken Sie die Top-80% des Umsatzes mit derselben Disziplin ab wie den Rest.',
            score: 12,
          },
          {
            label: 'Nein — Listings sind für Conversion geschrieben, nicht für Genauigkeit',
            fix: 'Der Hebel mit dem größten Effekt auf dieser Liste. Schreiben Sie die 10 meistbesuchten Produktseiten neu, damit jede Aussage im Copy eine ist, die das Paket belegen kann.',
            score: 20,
          },
        ],
      },
      {
        id: 'delivery-promise',
        q: 'Entspricht das im Checkout angezeigte Lieferdatum dem, was der Versanddienstleister tatsächlich liefert?',
        why: 'Verspätete Lieferung ist die häufigste Ursache für Chargebacks in Mode und Home Goods. Käufer bestreiten das Versprechen, nicht das Paket.',
        options: [
          {
            label: 'Ja — das Datum im Checkout ist vom Versanddienstleister verifiziert',
            fix: 'Binden Sie die Lieferprognose an Live-Daten des Versanddienstleisters, nicht an einen statischen Puffer.',
            score: 0,
          },
          {
            label: 'Wir polstern die Prognose mit einem Puffer, messen aber nicht nach',
            fix: 'Beginnen Sie, zugesagte und tatsächliche Lieferung zu erfassen. Ein 3–5-Tage-Puffer, kalkuliert gegen Ihre tatsächliche Verspätungsquote, ist billiger als Streitfälle.',
            score: 10,
          },
          {
            label: 'Nein — die Prognose ist optimistisch und die Lieferung ist routinemäßig zu spät',
            fix: 'Zeigen Sie das korrekte Zeitfenster, auch wenn es Sie ein paar Klicks kostet. Eine ehrliche 9–12-Tage-Prognose schlägt ein gebrochenes 5-Tage-Versprechen.',
            score: 20,
          },
        ],
      },
      {
        id: 'refund-speed',
        q: 'Wie schnell bekommt ein Kunde eine Rückerstattung, wenn er eine anfragt?',
        why: 'Eine langsame Rückerstattung macht aus einer Servicebeschwerde einen Chargeback. Die Alternative des Käufers ist, die Frist verstreichen zu lassen und den Emittenten entscheiden zu lassen.',
        options: [
          {
            label: 'Am selben Tag, automatisch',
            fix: 'Nichts zu fixen — das senkt direkt das Streitfallvolumen.',
            score: 0,
          },
          {
            label: 'Innerhalb von 3–5 Werktagen',
            fix: 'Automatisieren Sie Sofort-Rückerstattungen für die ersten 30 Tage nach der Lieferung und übergeben Sie danach an Ihr Team.',
            score: 10,
          },
          {
            label: 'Kommt darauf an — oft mehr als 10 Tage',
            fix: 'Setzen Sie eine harte 24–48-Stunden-SLA mit automatischer Freigabe bei klaren Fällen. Allein das senkt Streitfälle typischerweise um ein Drittel.',
            score: 20,
          },
        ],
      },
      {
        id: 'order-comms',
        q: 'Bekommen Kunden automatisch Bestellbestätigung, Versandbenachrichtigung und einen funktionierenden Tracking-Link?',
        why: 'Stille nach dem Checkout ist das, was einen neutralen Käufer in einen bestreitenden Käufer verwandelt. Wer nichts hört, assumeiert das Schlimmste.',
        options: [
          {
            label: 'Ja — alle drei, ausgelöst durch echte Events',
            fix: 'Halten Sie den Flow event-getrieben, nicht auf einem festen Zeitplan.',
            score: 0,
          },
          {
            label: 'Teilweise — Bestätigung und Versand ja, Tracking fehlt oft',
            fix: 'Ergänzen Sie eine Tracking-Nummer-Mail, die beim Erstellen des Labels auslöst statt bei manueller Eingabe.',
            score: 8,
          },
          {
            label: 'Nein — Kunden müssen uns hinterherlaufen',
            fix: 'Verbinden Sie Klaviyo Transactional Flows mit Ihren Fulfillment-Events. Das ist zwei Tage Aufwand und der schnellste verfügbare Abbau von Streitfällen.',
            score: 16,
          },
        ],
      },
      {
        id: 'expectation-setting',
        q: 'Gibt es bei Ihren hochwertigeren Artikeln visuelle und materielle Belege dafür, was der Käufer bekommen wird?',
        why: 'Ab rund $100 kaufen Käufer nach Bildern. Sind die Bilder stilisiert und das Paket schlicht, kommt zuerst die Rückerstattungsanfrage und der Streitfall erst danach.',
        options: [
          {
            label: 'Ja — echte Produktfotos, Detailaufnahmen, Größenvergleich',
            fix: 'Schützen Sie das. Echte Fotos sind zugleich das stärkste CRO-Asset, das Sie besitzen.',
            score: 0,
          },
          {
            label: 'Nur Lifestyle-Shots, kein Größen- oder Detailbezug',
            fix: 'Ergänzen Sie pro Hero-SKU einen Größenbezug und zwei Macro-Detailaufnahmen. Billiger als jeder Rabatt, den Sie geben müssten.',
            score: 10,
          },
          {
            label: 'Stilisierte oder stark bearbeitete Bilder',
            fix: 'Bei dieser Ticketgröße ein direkter Streitfall-Generator. Ersetzen Sie bearbeitete Bilder durch unbearbeitete, maßstabsgetreue Fotografie.',
            score: 18,
          },
        ],
      },
      {
        id: 'review-integrity',
        q: 'Sind Ihre Bewertungen, Ratings und Testimonials echt und überprüfbar?',
        why: 'Gefälschte oder incentivierte Bewertungen sind ein Verstoß gegen die Regeln von Card Networks und Plattformen. Die Strafe ist nicht nur eine Geldbuße — sie kostet Sie die Fähigkeit, Streitfälle zu Ihren Gunsten zu entscheiden.',
        options: [
          {
            label: 'Ja — nur verifizierte Käuferbewertungen, keine incentivierten Beiträge',
            fix: 'Dokumentieren Sie den Verifizierungsnachweis.',
            score: 0,
          },
          {
            label: 'Meist echt, aber wir betreiben ein Incentive-Programm',
            fix: 'Verlagern Sie den Anreiz auf eine Post-Purchase-Umfrage, die nicht an eine positive Bewertung gekoppelt ist, und lassen Sie den Bewertungstext unangetastet.',
            score: 14,
          },
          {
            label: 'Wir wissen nicht, woher unsere Bewertungen kommen',
            fix: 'Prüfen Sie die Review-App, die App-Blöcke und jede historische Incentive-Kampagne. Entfernen Sie alles, was sich nicht auf eine echte Bestellung zurückführen lässt.',
            score: 20,
          },
        ],
      },
      {
        id: 'dispute-defence',
        q: 'Beobachten Sie Streitfälle in Echtzeit und reichen Sie Beweise vor der Frist ein?',
        why: 'Das Representment-Fenster ist kurz, und die meisten Händler verpassen es aus Versehen. Fristgerecht eingereichte Beweise gewinnen; zu spät eingereichte nicht.',
        options: [
          {
            label: 'Ja — wir reichen für jeden Streitfall Beweise ein',
            fix: 'Dokumentieren Sie die Beweisvorlagen-Bibliothek je Kategorie.',
            score: 0,
          },
          {
            label: 'Wir reagieren, wenn die E-Mail eintrifft, oft zu spät',
            fix: 'Bauen Sie je SKU-Kategorie ein stehendes Beweispaket: Bestellung, Tracking, Zustellfoto, Listing-Snapshot. Automatisieren Sie die Fristenkalender.',
            score: 12,
          },
          {
            label: 'Wir gewinnen diese selten',
            fix: 'Der Posten mit dem höchsten Return auf der Liste. Ein stehendes Beweispaket ist meist der Unterschied zwischen Gewinnen und Verlieren eines Streitfalls.',
            score: 20,
          },
        ],
      },
      {
        id: 'unboxing-parcel',
        q: 'Kommt das Paket in einem Zustand an, der zum Markenversprechen passt?',
        why: 'Transportschäden, zerdrückte Ecken und fehlende Beilagen werden als niedrigwertiges Produkt gelesen. Der Käufer bestreitet Bestellung und Versand gleichzeitig.',
        options: [
          {
            label: 'Ja — die Verpackung ist getestet und geschützt',
            fix: 'Behalten Sie das. Legen Sie ein Unboxing-Foto in Ihr Beweispaket.',
            score: 0,
          },
          {
            label: 'Grundsätzlich in Ordnung, aber zerbrechliche oder schwere Artikel sind die Schwachstelle',
            fix: 'Ergänzen Sie Eckschutz und eine getestete Fallhöhe — nur für die zerbrechlichen SKUs. Sie müssen nicht alles neu verpacken.',
            score: 10,
          },
          {
            label: 'Eher nicht — wir versenden in der Minimalbox',
            fix: 'Bei Premium- und Zerbrechlichkeits-Sortimenten ist die Verpackung Teil des Produkts. Ein Mailer mit Formeinsatz ist billiger als ein einziger Chargeback.',
            score: 16,
          },
        ],
      },
    ],
    action: {
      heading: 'Bereit für die Bewertung?',
      body: 'Ihre Antworten bleiben im Browser — nichts wird gesendet, bis Sie sich entscheiden, den Report per E-Mail zu beziehen.',
      button: 'Meinen Risiko-Score berechnen',
    },
    results: {
      scoreLabel: 'Chargeback-Risiko-Score',
      outOf: 'von {max}',
      tiers: {
        critical: 'Kritische Exponierung',
        elevated: 'Erhöhte Exponierung',
        moderate: 'Moderate Exponierung',
        healthy: 'Gesunder Betrieb',
      },
      verdicts: {
        critical:
          'Ihre Streitfall-Treiber sind strukturell, nicht zufällig. Bei dieser Rate stehen Sie auf der Watchlist eines Card Networks — und die Verteidigung, auf die Sie sich verlassen, Ihr eigenes Produkt-Listing, ist genau das, was gegen Sie verwendet wird. Fixen Sie zuerst Erfüllungswahrheit und Lieferversprechen; alles andere ist Rauschen, solange die beiden nicht sitzen.',
        elevated:
          'Sie verlieren planbar Umsatz an Streitfälle. Die gute Nachricht: Mindestens eine Ihrer Antworten zeigt auf einen Fix, der Tage, nicht Monate dauert. Die schlechte Nachricht: Jeder Monat, den Sie warten, verzieht Processor-Gebühren und verlorene gute Kunden.',
        moderate:
          'Ihre Grundlagen stehen, und das verbleibende Risiko konzentriert sich auf ein oder zwei Stellen. Finden Sie sie unten, beheben Sie sie — und Ihre Streitfallquote sollte in den Bereich unter 0.2% fallen, den Processors als gesund einstufen.',
        healthy:
          'Ihre Seller-Health ist in gutem Zustand — Sie wehren Streitfälle ab und halten Ihre Versprechen. Halten Sie das Beweispaket aktuell und lassen Sie dieses Scorecard quartalsweise neu laufen, denn Erfüllungs-Drift verschiebt Marken aus dieser Stufe, nicht neue Wettbewerber.',
      },
      exposureLabel: 'Jährliche Exponierung',
      exposureDesc: 'Umsatz, der bei Ihrer aktuellen Streitfallquote gefährdet ist.',
      recoverableLabel: 'Rettbar / Jahr',
      recoverableDesc: 'Wenn Sie eine Streitfallquote von 0,1% erreichen.',
      disputesLabel: 'Streitfälle / Jahr',
      disputesDesc: 'Bei Ihrer aktuellen Quote, vor Gebühren.',
      fixHeading: 'Ihre Fix-Queue, nach Wirkung sortiert',
      fixLead: 'Jedes rote Flag enthält die konkrete Abhilfe, keine Allgemeinplätze.',
      yourAnswer: 'Ihre Antwort:',
      fixPrefix: 'Fix:',
      severities: { critical: 'Kritisch', high: 'Hoch', moderate: 'Moderat' },
      noFlags: 'Keine roten Flags. Alle Fragen bestanden — halten Sie das Beweispaket aktuell und lassen Sie das Scorecard quartalsweise neu laufen.',
      gate: {
        heading: 'Holen Sie sich den vollständigen Seller-Health-Report',
        subheading:
          'Ihr Score, die Beweispaket-Vorlage je SKU-Kategorie und eine 90-Tage-Sequenz zur Reduktion der Streitfälle für Ihren Store.',
        cta: 'Report anfordern',
        note: 'Ein Report, danach jede Woche der Ad-Waste-Report. Jederzeit abmeldbar.',
      },
    },
  },
} as const;

export type ToolStrings = typeof tools;
