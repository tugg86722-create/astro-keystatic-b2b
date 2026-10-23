---
title: Architecter des applications web Zero-JS pour un score Core Web Vitals de 100/100
publishedDate: 2026-10-20
author: Naif
summary: Plongée au fond de l'architecture Islands, de l'hydratation sélective, et de pourquoi livrer moins de JavaScript est l'optimisation ultime pour les applications web modernes qui convertissent.
coverImage: https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80
---

## Pourquoi les Single-Page Apps (SPA) échouent sur la performance moderne

Depuis dix ans, l’ingénierie web s’est appuyée massivement sur les frameworks JavaScript côté client. S’ils offrent un confort de développement réel, ils introduisent en contrepartie un lourd coût d’hydratation, des bundles obèses et un mauvais Time-to-First-Byte (TTFB).

### Le paradigme de l’architecture Islands
Astro a été le pionnier de l’**architecture Islands** moderne :
1. Par défaut, les pages sont pré-rendues en 100% HTML et CSS sémantiques au moment du build.
2. Le JavaScript est entièrement retiré du build.
3. Seuls les widgets dynamiques spécifiques (barres de filtres interactives, autocomplétion de recherche, formulaires de contact) sont déclarés avec `client:idle` ou `client:visible`.

### Résultats mesurables
- **Payloads réduits de 90%** : le payload HTML initial est passé de 480KB à 24KB.
- **Zéro délai d’hydratation** : le temps d’inactivité CPU du main thread s’améliore de plus de 300ms, garantissant un Interaction to Next Paint (INP) sous 30ms sur des appareils mobiles 4G réels.
