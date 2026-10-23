---
title: "Das Shopify CRO Audit-Playbook: 5 Schritte, die ich auf jedem Store laufen lasse, bevor ich eine einzige Zeile Code schreibe"
publishedDate: 2026-10-21
author: Naif
summary: Die exakte Audit-Sequenz in fünf Schritten, die ich vor jedem Theme-Eingriff laufen lasse — vom Click-Loss-Abgleich bis zur Erfüllungswahrheit-Prüfung — und warum die Reihenfolge wichtiger ist als die Taktiken.
coverImage: https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80
---

Die meisten CRO-Audits scheitern schon an Schritt eins — nicht weil der Auditor schlecht ist, sondern weil die Reihenfolge falsch ist. Teams starten mit Heatmaps, weil Heatmaps Spaß machen. Sie starten mit einem Theme-Redesign, weil Redesigns das Deliverable sind, das alle sehen wollen. Beides ist die falsche Tür.

Das ist die Sequenz, die ich auf jedem Store laufen lasse, bevor ich eine einzige Zeile Code schreibe.

---

## Schritt 1 — Klicks gegen Ankünfte abgleichen

Vor allem anderen: **für wie viele Klicks hat die Ad-Plattform Sie abgerechnet, und wie viele Menschen sind tatsächlich angekommen?**

Ziehen Sie die Meta Outbound Clicks aus dem Ads Manager. Ziehen Sie die Landingpage-Aufrufe aus GA4. Vergleichen Sie beide Zahlen über dasselbe 30-Tage-Fenster.

| Lücke | Was sie bedeutet | Wo Sie hinschauen müssen |
|---|---|---|
| Unter 8% | Gesund | Nichts — weiter |
| 8–15% | Abgesichert | Tracking-Drift, geringer Attributionsverlust |
| 15–30% | Erhöht | Echter Verlust plus Messlücke |
| Über 30% | Kritisch | Das Geld geht, bevor die Seite rendert |

Dieser eine Vergleich entscheidet, ob Ihr erstes Projekt ein Performance-Projekt oder ein Analytics-Projekt ist. Wer das verkehrt macht, optimiert sechs Wochen lang die falsche Schicht.

**Warum die Reihenfolge zählt:** Wenn Sie ein Theme neu bauen für einen Store, dessen echtes Problem ein kaputter CAPI-Dedupe ist, liefern Sie eine wunderschöne, schnelle, perfekt instrumentierte Seite — die weiterhin denselben Umsatz meldet. Und Sie wirken, als wären Sie gescheitert.

---

## Schritt 2 — Die Field-Data-Baseline herstellen

Lab-Daten sind ein Labor. Field-Daten sind Ihre Kunden.

Öffnen Sie CrUX für Ihre Top-20-URLs, nicht nur für die Startseite. Schauen Sie auf p75, nicht auf den Durchschnitt — p75 ist die Erfahrung Ihres schlechtesten Quartils, und genau dort sitzt der Umsatzverlust.

Prüfen Sie dann die drei Core Web Vitals auf Field-Level:

- **LCP** — ist das Hero-Bild das LCP-Element, und ist es vorgerendert?
- **INP** — was ist die längste Interaktion? Ein Review-Widget, ein Größen-Selector, ein Variant-Picker?
- **CLS** — schiebt sich nach dem First Paint noch etwas nach unten? Meist ein spät ladendes Banner, eine Cookie-Leiste oder ein Font-Swap.

Halten Sie die Baseline fest. Schreiben Sie sie auf. Das ist die Zahl, an der Sie gemessen werden — und die einzige belastbare Grundlage, später einen Uplift zu behaupten.

---

## Schritt 3 — Das Leck kartieren, nicht die Seiten

Die meisten Audits listen jede Seite auf. Das ist eine Liste, keine Diagnose.

Bauen Sie stattdessen eine Leck-Karte: Für jede Stufe des Funnels — was ist die Drop-Rate, und was ist die mechanisch wahrscheinlichste Ursache?

```
Ad-Klick → Landing-Aufruf    (Verlust: Click-Loss-Audit)
Landing → In den Warenkorb   (Verlust: Angebots-Klarheit, Preis-Schock, ATC-Sichtbarkeit)
ATC → Checkout                (Verlust: Cart-Drawer-Reibung, erzwungene Account-Erstellung)
Checkout → Kauf               (Verlust: Überraschung bei Versandkosten, Zahlungsreibung)
Kauf → Wiederholung           (Verlust: kein Post-Purchase-Flow, keine Nachbestell-Erinnerung)
```

Eine Zahl pro Stufe, eine Hypothese pro Stufe. Das ist das gesamte Audit. Alles andere ist Kommentar.

---

## Schritt 4 — Die Promise-Kette prüfen

Das ist der Schritt, den fast jedes technische Audit überspringt — und er entscheidet, ob eine High-Ticket-Marke wächst oder abspringt.

Gehen Sie die komplette Promise-Kette für Ihre Top-3-SKUs durch:

1. **Das Ad-Versprechen** — was behauptet das Creative?
2. **Das Landing-Versprechen** — bestätigt oder widerspricht der erste Screen es?
3. **Das PDP-Versprechen** — stützen Bilder, Copy und Spec das Ad?
4. **Das Warenkorb-Versprechen** — gibt es Überraschungen bei Preis, Versand oder Zoll?
5. **Das Paket-Versprechen** — entspricht der Karton der Erwartung?

Jeder Bruch in dieser Kette ist eine Retourenanfrage, die nur auf ihre Auslösung wartet — und bei $99+ kostet Sie eine Retourenanfrage weit mehr als den Bestellwert, sobald Sie Versand, Zahlungsgebühren und Support-Zeit mitrechnen.

---

## Schritt 5 — Nach Umsatzwirkung gegen Aufwand priorisieren

Jetzt, und erst jetzt, schreiben Sie Empfehlungen.

Bewerten Sie jeden Fix auf zwei Achsen:

- **Umsatzwirkung** — wenn das behoben wird, wie viel Monatsumsatz bewegt sich?
- **Aufwand** — Engineering-Stunden, plus Risiko, plus Zeit bis zur Verifikation

Alles mit hoher Wirkung und geringem Aufwand geht in Woche eins. Das sind meist drei bis fünf Änderungen, und typischerweise sind das 60% des verfügbaren Potenzials.

Alles mit hoher Wirkung und hohem Aufwand kommt mit einem expliziten Datum und einem expliziten Verantwortlichen auf die Roadmap. Fehlt eines von beidem, ist es keine Empfehlung, sondern ein Wunsch.

---

## Wie das Deliverable aussehen sollte

Ein 50-Slide-Deck ist kein Audit. Es ist eine Methode, Verantwortung zu vermeiden.

Ein brauchbares Audit-Deliverable ist:

- **Eine Seite Zahlen** — die Baseline, in einer Tabelle
- **Eine gewichtete Liste** — jeder Fix, bewertet nach Wirkung und Aufwand
- **Eine Seite pro Top-3-Position** — die konkrete Änderung, mit Code oder Anleitung, und der Messplan
- **Eine 90-Tage-Sequenz** — was geht in Woche 1, Monat 1, Monat 3 live

Das war's. Ist das Deliverable länger als die Arbeit, die es beschreibt, haben Sie eine Broschüre geschrieben.

---

## Die Frage, die niemand stellt

Fragen Sie dem Kunden vor der Übergabe eine Frage: **„Wenn wir alles in diesem Report umsetzen und sich nichts ändert, was haben Sie dann gelernt?"**

Wenn die Antwort lautet „wir wissen genau, wo das Leck ist", war das Audit sein Geld wert. Wenn die Antwort lautet „wir haben ein Dokument", war es das nicht — und Sie hätten ihm stattdessen einen Sprint verkaufen sollen, weil ein Sprint Fixes ausliefert, statt sie zu beschreiben.

---

*Führen Sie den kostenlosen [Klick-Verlust-Prüfer](/de/tools/click-loss-auditor) aus, um in unter einer Minute Ihre Zahl aus Schritt 1 zu bekommen — oder nutzen Sie den [Ad-ROI & Latency-Rechner](/de/tools), um die Latenz-Seite desselben Problems zu beziffern.*
