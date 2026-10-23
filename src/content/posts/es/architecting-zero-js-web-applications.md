---
title: Arquitectura de aplicaciones web Zero-JS para un 100/100 en Core Web Vitals
publishedDate: 2026-10-20
author: Naif
summary: Inmersión en la arquitectura Islands, la hidratación selectiva y por qué enviar menos JavaScript es la optimización definitiva para las aplicaciones web modernas de alta conversión.
coverImage: https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80
---

## Por qué las Single-Page Apps (SPA) están fallando en el rendimiento moderno

Durante la última década, la ingeniería web se ha apoyado en frameworks de JavaScript del lado del cliente. Ofrecen una experiencia de desarrollo excelente, pero introducen un peaje de hidratación pesado, bundles hinchados y un Time-to-First-Byte (TTFB) pobre.

### El paradigma de la arquitectura Islands
Astro fue pionero en la moderna **arquitectura Islands**:
1. Por defecto, las páginas se prerenderizan en un 100% de HTML semántico y CSS puro en tiempo de compilación.
2. El JavaScript se elimina por completo del resultado de la compilación.
3. Solo los widgets dinámicos concretos (p. ej., barras de filtros interactivas, autocompletado de búsqueda, formularios de contacto) se declaran con `client:idle` o `client:visible`.

### Resultados medibles
- **Payloads un 90% más pequeños**: El payload HTML inicial bajó de 480KB a 24KB.
- **Cero retardo de hidratación**: El tiempo de CPU ociosa del hilo principal mejora en más de 300ms, garantizando un Interaction to Next Paint (INP) por debajo de 30ms en dispositivos móviles 4G reales.
