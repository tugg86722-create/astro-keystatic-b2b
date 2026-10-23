---
title: "El playbook de auditoría CRO en Shopify: 5 pasos que ejecuto en toda tienda antes de escribir una sola línea de código"
publishedDate: 2026-10-21
author: Naif
summary: La secuencia exacta de auditoría de cinco pasos que ejecuto antes de tocar un tema — desde la conciliación de la pérdida de clics hasta la revisión de la verdad del fulfillment — y por qué el orden importa más que las tácticas.
coverImage: https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80
---

La mayoría de las auditorías CRO fracasan en el primer paso, no porque el auditor sea malo sino porque la secuencia está mal. Los equipos empiezan por los mapas de calor porque los mapas de calor son divertido. Empiezan por un rediseño de tema porque el rediseño es el entregable que todo el mundo quiere ver. Ambas puertas son la equivocada.

Aquí tienes la secuencia que ejecuto en toda tienda antes de escribir una sola línea de código.

---

## Paso 1 — Conciliar los clics con las llegadas

Antes que nada: **¿cuántos clics te facturó la plataforma publicitaria y cuántas personas llegaron de verdad?**

Saca los clics salientes de Meta de Ads Manager. Saca las vistas de página de destino de GA4. Compara las dos cifras en la misma ventana de 30 días.

| Brecha | Qué significa | Dónde mirar |
|---|---|---|
| Menos del 8% | Correcto | Nada — sigue adelante |
| 8–15% | Protegido | Deriva de medición, pérdida menor de atribución |
| 15–30% | Elevada | Pérdida real más brecha de medición |
| Más del 30% | Crítica | El dinero se va antes de que la página se renderice |

Esta única comparación decide si tu primer proyecto es de rendimiento o de analítica, y equivocarte significa dedic seis semanas a optimizar la capa equivocada.

**Por qué importa el orden:** si reconstruyes el tema de una tienda cuyo problema real es una deduplicación de CAPI rota, vas a entregar una web preciosa, rápida y perfectamente instrumentada que sigue reportando los mismos ingresos — y parecerá que has fracasado.

---

## Paso 2 — Fijar la línea base con datos de campo

Los datos de laboratorio son un laboratorio. Los datos de campo son tus clientes.

Abre CrUX para tus 20 mejores URL, no solo para la home. Mira el p75, no la media — el p75 es la experiencia de tu cuartil peor, que es donde vive la pérdida de ingresos.

Después comprueba los tres Core Web Vitals a nivel de campo:

- **LCP** — ¿es la imagen hero el elemento LCP, y está precargada?
- **INP** — ¿cuál es la interacción más larga? ¿Un widget de reseñas, un selector de tallas, un selector de variantes?
- **CLS** — ¿algo empuja el contenido hacia abajo tras el primer pintado? Normalmente un banner que carga tarde, la barra de cookies o un cambio de fuente.

Registra la línea base. Apúntala. Este es el número con el que te van a medir, y es la única forma defendible de reclamar una subida más adelante.

---

## Paso 3 — Mapear las fugas, no las páginas

La mayoría de las auditorías listan todas las páginas. Eso es una lista, no un diagnóstico.

Construye en su lugar un mapa de fugas: para cada etapa del embudo, ¿cuál es la tasa de caída y cuál es la causa mecánica más probable?

```
Ad click → Landing view      (loss: click-loss audit)
Landing → Add to cart       (loss: offer clarity, price shock, ATC visibility)
ATC → Checkout               (loss: cart drawer friction, forced account creation)
Checkout → Purchase          (loss: shipping threshold surprise, payment friction)
Purchase → Repeat           (loss: no post-purchase flow, no replenishment prompt)
```

Una cifra por etapa, una hipótesis por etapa. Eso es toda la auditoría. Todo lo demás es comentario.

---

## Paso 4 — Revisar la cadena de promesas

Este es el paso que casi todas las auditorías técnicas se saltan, y es el que decide si una marca de ticket alto crece o se fuga.

Recorre la cadena completa de promesas de tus tres SKUs principales:

1. **La promesa del anuncio** — ¿qué afirma la creatividad?
2. **La promesa de la landing page** — ¿la primera pantalla la confirma o la contradice?
3. **La promesa de la PDP** — ¿las imágenes, el copy y las especificaciones respaldan el anuncio?
4. **La promesa del carrito** — ¿alguna sorpresa en precio, envío o aranceles?
5. **La promesa del paquete** — ¿la caja está a la altura de la expectativa?

Cualquier rotura en esta cadena es una solicitud de devolución esperando a ocurrir, y a partir de $99+ una devolución te cuesta mucho más que el valor del pedido en cuanto sumas envío, comisiones de pago y tiempo de soporte.

---

## Paso 5 — Ordenar por impacto en ingresos frente a esfuerzo

Ahora, y solo ahora, escribes recomendaciones.

Puntúa cada corrección candidata en dos ejes:

- **Impacto en ingresos** — si se arregla esto, ¿cuánto ingreso mensual se mueve?
- **Esfuerzo** — horas de ingeniería, más riesgo, más lo que tarda en verificarse

Todo lo que sea de alto impacto y bajo esfuerzo sale en la primera semana. Suelen ser tres o cinco cambios, y normalmente son el 60% del margen disponible.

Todo lo que sea de alto impacto y alto esfuerzo va a la hoja de ruta con una fecha explícita y un responsable explícito. Si no tiene las dos cosas, no es una recomendación: es un deseo.

---

## Cómo debería ser el entregable

Un mazo de 50 diapositivas no es una auditoría. Es una forma de evitar la responsabilidad.

Un entregable de auditoría útil es:

- **Una página de cifras** — la línea base, en tabla
- **Una lista ordenada** — cada corrección, puntuada por impacto y esfuerzo
- **Una página por cada uno de los tres primeros** — el cambio concreto, con el código o la instrucción, y el plan de medición
- **Una secuencia de 90 días** — qué sale en la semana 1, el mes 1 y el mes 3

Eso es todo. Si el entregable es más largo que el trabajo que describe, has escrito un folleto.

---

## La pregunta que nadie hace

Antes de entregar, hazle al cliente una pregunta: **"Si hacemos todo lo que hay en este informe y no cambia nada, ¿qué habrás aprendido?"**

Si la respuesta es "sabremos exactamente dónde está la fuga", la auditoría habrá valido la pena. Si la respuesta es "tendremos un documento", no — y deberías haberle vendido un sprint, porque un sprint entrega correcciones en vez de describirlas.

---

*Ejecuta el gratuito [Auditor de Pérdida de Clics](/es/tools/click-loss-auditor) para tener tu cifra del Paso 1 en menos de un minuto, o la [Calculadora de ROI publicitario y latencia](/es/tools) para poner precio a la cara de latencia del mismo problema.*
