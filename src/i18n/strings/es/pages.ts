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
      title: 'Naif | Operador de eCommerce DTC y Arquitector de Crecimiento de Embudo Completo',
      description:
        'Escala marcas DTC de ticket alto con velocidad subsegundo, CRO de landing pages de Meta Ads, retención automatizada con Klaviyo y una conversión 100% basada en datos.',
    },
    hero: {
      pill: 'Operador de eCommerce DTC y Arquitector de Crecimiento de Embudo Completo',
      titleLead: 'Escala marcas DTC de ticket alto con',
      titleHighlight: 'Velocidad Subsegundo',
      titleTail: 'y Precisión de Embudo Completo.',
      lead:
        'Cierro la brecha entre el relato de marca de lujo, el rendimiento técnico de la tienda y la rentabilidad publicitaria en Meta y Google. Cero plugins hinchados, cero plástico barato de IA, conversión 100% basada en datos.',
      fitPrefix: 'Con quién trabajo:',
      fitBody:
        'Marcas DTC con $50k–$2M/mes de facturación, normalmente con AOV de $99+, que ya gastan en tráfico pagado y lo pierden antes de que la página llegue a cargar.',
      fitLink: 'Comprueba si eres tú →',
    },
    benchmarks: {
      cwv: 'Puntuación de Core Web Vitals en móvil',
      clickLoss: 'Pérdida entre clic y landing page (vs. media del 25%+)',
      klaviyo: 'Aportación de ingresos automatizada con Klaviyo',
      ticket: 'Arquitectura de conversión de ticket alto',
    },
    cases: {
      eyebrow: 'Despliegues DTC en producción',
      heading: 'Casos de éxito de embudo completo',
    },
    pillars: {
      eyebrow: 'Pilares de crecimiento y arquitectura',
      heading: 'Los 4 pilares de la ingeniería DTC de ticket alto',
      lead:
        'Elimino el desperdicio publicitario, los stacks de apps hinchados y la fricción de conversión para construir operaciones DTC rentables y resilientes.',
      items: [
        {
          title: 'Tiendas DTC de ticket alto',
          body: 'Desarrollos a medida en Shopify OS2.0 y Jamstack, dirección visual anti-slop de 6 tomas y flujos de compra mobile-first pensados para niveles de precio de lujo de $99+.',
        },
        {
          title: 'CRO de landing page publicitaria y defensa del tráfico',
          body: 'Elimino las tasas de rebote en móvil, los flujos directos al checkout y las fugas de clics salientes en Meta y TikTok Ads. Un LCP subsegundo garantiza que ni un euro publicitario se desperdicie.',
        },
        {
          title: 'Retención y ciclo de vida automatizados (Klaviyo)',
          body: 'Abandono de navegación sin intervención, secuencias de recuperación para clientes VIP y una experiencia pos-compra que genera de forma consistente un 15%+ de ingresos automatizados de base.',
        },
        {
          title: 'Verdad del Fulfillment y Escudo Antichargeback',
          body: 'Alineo las promesas de la tienda digital con la entrega real de los paquetes para anticipar las disputas de PayPal y Stripe y asegurar una salud operativa sostenible.',
        },
      ],
    },
    fitCheck: {
      eyebrow: 'Comprobación de encaje',
      headingLead: 'La versión honesta de',
      headingHighlight: 'para quién funciona esto',
      lead:
        'La forma más rápida de perder el tiempo de los dos es un mal encaje. Este es el filtro que aplico de verdad — y prefiero perder el negocio que aceptarlo mal.',
      goodTitle: 'Esto encaja si…',
      badTitle: 'Esto no encaja si…',
      good: [
        'Ya superas los $50k/mes y gestionas tráfico pagado',
        'Tu AOV es de $99+ y la fricción en el checkout es visible',
        'PageSpeed en móvil está en rojo y nadie se hace cargo',
        'Klaviyo existe pero los flujos nunca se reconstruyeron',
        'Puedes conseguir que alguien con poder de decisión apruebe cambios cada semana',
      ],
      bad: [
        'Facturas menos de unos $50k/mes',
        'Necesitas una subida de conversión garantizada en el primer mes',
        'Quieres que otro decida por ti',
        'Haces dropshipping de un solo SKU o reventa de mercado gris',
        'Todavía no tienes tráfico pagado — empieza por la auditoría gratuita',
      ],
    },
    diagnostics: {
      eyebrow: 'Pruébalo tú mismo primero',
      heading: 'Diagnósticos gratuitos para tu tienda',
      lead:
        'Son los mismos motores que uso dentro de auditorías pagadas. Sin registro, sin discurso comercial — ejecútalos con tus propios números y decide si el trabajo merece la pena.',
      clickLossTitle: 'Auditor de Pérdida de Clics',
      clickLossDesc:
        'Concilia los clics salientes de Meta con las vistas de landing page de GA4. Pone precio a la brecha y te dice si es pérdida de renderizado o un artefacto de medición.',
      scorecardTitle: 'Scorecard de Riesgo de Chargeback',
      scorecardDesc:
        'Ocho preguntas, una puntuación de riesgo y la solución concreta para cada bandera roja — desde la verdad del fulfillment hasta los expedientes de pruebas para disputas.',
      roiTitle: 'Calculadora de ROI publicitario y latencia',
      roiDesc:
        'Cuantifica lo que te cuesta el tiempo de carga en móvil en inversión publicitaria desperdiciada, clics perdidos y pedidos recuperables — con datos de campo de Google.',
    },
    articles: {
      eyebrow: 'Publicaciones y whitepapers',
      heading: 'Escritura técnica y casos de éxito',
      read: 'Leer el whitepaper de arquitectura',
    },
  },

  about: {
    meta: {
      title: 'Sobre Naif | Operador de eCommerce DTC y Arquitector de Crecimiento de Embudo Completo',
      description:
        'Operador de eCommerce DTC que cierra la brecha entre la arquitectura de tiendas de ticket alto, el rendimiento subsegundo en el edge, la economía publicitaria en Meta y la retención automatizada con Klaviyo.',
    },
    hero: {
      pill: 'Disponible para arquitectura de marca DTC, CRO y consultoría de crecimiento',
      titleLead: 'Escala tu DTC de ticket alto con',
      titleHighlight: 'Ingeniería de Precisión',
      titleTail: 'y rentabilidad publicitaria.',
      quote:
        '«Vivo en las trincheras del eCommerce transfronterizo. A diferencia de los programadores puros, que no entienden el gasto publicitario, y de los medios compradores, que no entienden la arquitectura web, yo cubro todo el espectro: desde el código del tema y el rendimiento en el edge hasta la economía publicitaria en Meta y la retención de clientes.»',
      lead:
        'Con una experiencia práctica profunda en la operación de tiendas Shopify OS2.0 y Jamstack de ticket alto ($99+), elimino las fugas ocultas que drenan el gasto publicitario: retrasos en las landing pages de móvil, flujos de checkout sin optimizar, desconexiones entre las promesas digitales y el fulfillment físico, y una retención pos-compra abandonada.',
    },
    attributes: {
      locationLabel: 'Ubicación',
      locationValue: 'Remoto en todo el mundo',
      locationNote: 'UTC+8 / compatible con horarios de EE. UU.',
      focusLabel: 'Foco principal',
      focusValue: 'DTC de ticket alto y CRO',
      focusNote: 'Shopify, Meta Ads, Klaviyo',
      metricLabel: 'Métrica de rendimiento',
      metricValue: '< 8% de tasa de pérdida de clics',
      metricNote: '100/100 CWV en móvil',
    },
    stack: {
      eyebrow: 'Stack técnico y operativo',
      heading: 'Radar del stack DTC de embudo completo',
      lead:
        'Un stack battle-tested que combina arquitectura de tienda empresarial, ingeniería de rendimiento, atribución publicitaria y automatización de la retención.',
      items: [
        {
          title: 'Tienda y velocidad',
          desc: 'Elimino el peso del runtime en el cliente con Liquid a medida, Astro Islands y caché en el edge.',
        },
        {
          title: 'Tráfico y CRO',
          desc: 'Embudos directos al checkout, dirección visual anti-slop y marcos de copy para ticket alto.',
        },
        {
          title: 'Atribución y telemetría',
          desc: 'Análisis forense de la caída tras el clic publicitario, atribución server-side y telemetría sin intrusión.',
        },
        {
          title: 'Retención y protección',
          desc: 'Secuencias automatizadas de ciclo de vida y defensa frente a disputas de clientes y chargebacks.',
        },
      ],
    },
    pillars: {
      eyebrow: 'Pilares estratégicos',
      heading: 'Los 4 pilares estratégicos',
      lead:
        'Cada marca cliente, cada reconstrucción de tienda y cada iniciativa de crecimiento se diseña conforme a estos cuatro estándares innegociables.',
      items: [
        {
          title: 'Arquitectura de tienda y velocidad',
          body: 'Shopify OS2.0, refactorización de Liquid, Astro Jamstack y Core Web Vitals subsegundo. Elimino las apps de terceros hinchadas y el lastre de los assets para que el visitante móvil vea cargas instantáneas sin fricción que provoque rebote.',
          result: '100/100 CWV en móvil • Garantía de LCP < 0.8s',
        },
        {
          title: 'Optimización de la tasa de conversión (CRO)',
          body: 'Dirección visual de 6 tomas (hero, unboxing, caída dinámica, lifestyle, macro de gema, flatlay), copy de ticket alto (Hook-FAB-Ideal) y embudos de checkout sin fricción, pensados para sostener precios premium de $99+.',
          result: 'Confianza en ticket alto • Checkout directo sin fricción',
        },
        {
          title: 'Defensa del tráfico y la atribución',
          body: 'Integración con Meta Graph API, auditoría de pérdida de clics, forense de embudos en GA4 y seguimiento de eventos sin intrusión. Audito y cierro el hueco del 15%–30% entre los clics salientes pagados y las vistas reales de página de destino.',
          result: '< 8% de tasa de pérdida de clics • Transparencia real del ROAS',
        },
        {
          title: 'Operaciones y protección de marca',
          body: 'Recorridos de ciclo de vida en Klaviyo (bienvenida, abandono de navegación, VIP pos-compra) junto con auditorías del fulfillment físico de los paquetes. Alinear las promesas de la tienda con la realidad del embalaje evita chargebacks y retenciones de fondos del procesador de pagos.',
          result: '15%+ de ingresos por flujos automatizados • Cero retenciones por chargeback',
        },
      ],
    },
    flow: {
      eyebrow: 'Proceso de trabajo',
      heading: 'Flujo de ejecución DTC de embudo completo',
      lead:
        'Un marco de ejecución predecible y basado en datos, diseñado para eliminar el desperdicio publicitario y escalar los ingresos de la marca.',
      items: [
        {
          title: 'Auditoría de crecimiento y velocidad',
          body: 'Auditoría forense profunda de los clics salientes de Meta frente a las vistas de landing page en GA4, CWV de Lighthouse en móvil, abandono en el checkout y alineación de las promesas de envío.',
          timeline: '2-3 días',
        },
        {
          title: 'CRO y prototipado visual',
          body: 'Despliego de la dirección visual anti-slop de 6 tomas, copy Hook-FAB-Ideal de ticket alto y flujos directos al checkout sin fricción en un entorno de staging.',
          timeline: '5-7 días',
        },
        {
          title: 'Lanzamiento y conmutación de tráfico',
          body: 'Despliegue del tema sin interrupciones, aceleración en el edge con CDN, deduplicación de eventos de Meta Pixel y monitorización del checkout en tiempo real bajo tráfico publicitario.',
          timeline: '1-2 semanas',
        },
        {
          title: 'Retención y defensa de la salud de la cuenta',
          body: 'Automatización de los flujos de ciclo de vida en Klaviyo, comprobaciones de paridad multilingüe, auditorías de unboxing y prevención de chargebacks para proteger la salud del vendedor.',
          timeline: 'Seguimiento continuo',
        },
      ],
    },
    cta: {
      badge: 'Alianza estratégica directa',
      heading: '¿Listo para escalar tu marca DTC de ticket alto con rentabilidad?',
      lead:
        'Ya sea porque estés quemando euros publicitarios en landing pages lentas de móvil, porque te cueste convertir tráfico de ticket alto o porque busques retención automatizada con Klaviyo — construyamos un sistema rentable.',
      emailButton: 'Escríbeme: contact@naif.is-a.dev',
    },
  },

  services: {
    meta: {
      title: 'Modalidades de colaboración y precios — Arquitectura DTC, CRO y consultoría Klaviyo | Naif',
      description:
        'Rangos de colaboración transparentes para auditorías de arquitectura DTC, sprints de conversión, retainers de crecimiento y trabajo en marca blanca para agencias. Alcance fijo, presupuesto por escrito, sin facturación por horas.',
    },
    header: {
      badge: 'Alcance fijo · Presupuesto por escrito · Sin facturación por horas',
      headingLead: 'Cuatro formas de',
      headingHighlight: 'Trabajar juntos',
      lead:
        'Rangos orientativos para que te autocualifiques antes de que hablemos. Cada colaboración se presupuesta por escrito, con alcance y precio fijos — si el alcance cambia, primero lo apruebas tú.',
    },
    tiers: [
      {
        name: 'Auditoría de Arquitectura',
        price: '$1,500 – $3,500',
        priceNote: 'pago único, alcance fijo',
        duration: '2–3 días',
        bestFor: 'Marcas que sospechan que están perdiendo dinero pero no saben dónde.',
        includes: [
          'Desmontaje forense de la tienda, la medición y el stack de retención',
          'Conciliación de clics salientes de Meta con vistas de landing page en GA4',
          'Auditoría de datos de campo de CWV en móvil (LCP / INP / CLS en p75)',
          'Revisión de flujos, segmentación y entregabilidad en Klaviyo',
          'Chequeo de la brecha entre la promesa de envío y la realidad de la entrega',
          'Informe escrito priorizado con cambios ponderados por impacto en ingresos',
        ],
      },
      {
        name: 'Sprint de Conversión',
        price: '$5,000 – $12,000',
        priceNote: 'pago único, alcance fijo',
        duration: '4–6 semanas',
        bestFor: 'Marcas listas para lanzar cambios, no solo para recibir un documento.',
        includes: [
          'Todo lo de la Auditoría de Arquitectura, repetido como línea base en vivo',
          'Implementación de los 3–5 cambios de mayor impacto, en tu tema',
          'Liquid / JS / CSS escritos y publicados primero en staging',
          'Reconstrucción de la landing page publicitaria o del flujo directo al checkout',
          'Medición antes / después de CVR, ingresos por sesión y CWV',
          'Recorrido en Loom más documentación escrita de traspaso',
        ],
      },
      {
        name: 'Retainer de Crecimiento',
        price: '$3,000 – $8,000',
        priceNote: 'al mes, preaviso de 30 días',
        duration: 'Continuo, hoja de ruta trimestral',
        bestFor: 'Equipos que necesitan un operador senior presente cada mes.',
        includes: [
          'Hoja de ruta mensual de tests ligada a ingresos, no a intuiciones',
          'Mantenimiento continuo de CRO y rendimiento',
          'Expansión de flujos de Klaviyo y propiedad del programa de ciclo de vida',
          'Iteración sobre landing pages publicitarias y dirección creativa',
          'Informes semanales de tráfico, embudo y retención',
          'Acceso directo — sin gestor de cuenta, sin cola de tickets',
        ],
      },
      {
        name: 'Alianza de Marca Blanca',
        price: 'Alcance por agencia',
        priceNote: 'tarifa de agencia',
        duration: 'Por proyecto o continuo',
        bestFor: 'Agencias y equipos in-house que necesitan capacidad CRO senior.',
        includes: [
          'Auditoría e implementación entregadas con tu marca y tu plantilla',
          'Sin contacto con el cliente final de mi parte — tú mantienes la relación',
          'Capacidad senior de CRO, rendimiento y Klaviyo sin ampliar plantilla',
          'Sin conflictos de intereses, con una simple tarifa mensual',
          'Tu plantilla de informes de cliente, tu SLA',
        ],
      },
    ],
    footnote:
      'Los rangos reflejan el alcance habitual de marcas en la franja de $50k–$2M/mes. Los presupuestos finales son de alcance fijo y por escrito antes de empezar. Condiciones de pago: 50% al agendar, 50% en la entrega para trabajos de alcance fijo; los retainers se facturan mensualmente por adelantado.',
    process: {
      eyebrow: 'Cómo funciona la colaboración',
      heading: 'Un proceso predecible y basado en datos',
      lead: 'Las mismas cuatro fases en cada colaboración — desde una única auditoría hasta un contrato de consultoría completo.',
      items: [
        {
          stage: 'Etapa 01',
          title: 'Auditoría y línea base',
          duration: '2–3 días',
          detail:
            'Desmontaje forense de la tienda, la medición publicitaria, la retención y el envío. Acordamos la línea base juntos antes de tocar una sola línea — tasa de conversión, ingresos por sesión, CWV de campo en p75, tasa de pérdida de clics.',
        },
        {
          stage: 'Etapa 02',
          title: 'Hoja de ruta priorizada',
          duration: 'Días 3 – 4',
          detail:
            'Una lista de cambios ordenada por impacto en ingresos frente a esfuerzo, no un mazo de 50 diapositivas. Ves exactamente qué entra en el sprint y qué espera.',
        },
        {
          stage: 'Etapa 03',
          title: 'Implementación y conmutación de tráfico',
          duration: '4–6 semanas',
          detail:
            'Los cambios de mayor impacto se escriben en un tema duplicado o en un entorno de staging, se revisan contra su impacto en CWV y conversión, y luego se publican sin interrupciones.',
        },
        {
          stage: 'Etapa 04',
          title: 'Retención y defensa de la salud',
          duration: 'Continuo',
          detail:
            'Flujos de ciclo de vida en Klaviyo, auditoría de la verdad del fulfillment y comprobaciones de consistencia multilingüe se ejecutan de forma continua para proteger el LTV, la reputación y la salud del procesamiento de pagos.',
        },
      ],
    },
    notFit: {
      eyebrow: 'Antes de contratarme',
      headingLead: 'Cuando soy',
      headingHighlight: 'el encaje equivocado',
      lead:
        'Lo más caro que puedo hacer es aceptar un trabajo que no puedo sacar adelante. Estas son las situaciones en las que te voy a mandar a otro sitio — y lo diré en la primera llamada.',
      items: [
        {
          title: 'Facturas menos de unos $50k/mes',
          detail:
            'La tarifa se convierte en un porcentaje material del margen. Un tema gratuito de Shopify más una sesión de CRO bien enfocada suele superar lo que te cobraría.',
        },
        {
          title: 'Dropshipping de un solo SKU o reventa de mercado gris',
          detail:
            'No hay relación a largo plazo con el cliente que proteger ni prima de marca que defender. La economía no soporta este tipo de trabajo.',
        },
        {
          title: 'Buscas una subida de conversión garantizada',
          detail:
            'Quien promete una subida en el primer mes te está describiendo la estacionalidad. Yo puedo prometer proceso, medición y una línea base documentada — no una cifra que no controlo.',
        },
        {
          title: 'Necesitas que alguien decida por ti',
          detail:
            'Esto es consultoría más implementación, no un departamento externalizado. Necesito una persona con poder de decisión en tu lado que pueda aprobar cambios dentro de un sprint.',
        },
      ],
    },
    cta: {
      heading: 'Empieza por la respuesta honesta más barata',
      lead:
        'Ejecuta los diagnósticos gratuitos de abajo, o mándame la URL de tu tienda y te diré qué modalidad encaja de verdad — aunque la respuesta sea «ninguna todavía».',
    },
  },

  faq: {
    meta: {
      title: 'Preguntas frecuentes — Arquitectura DTC, CRO y consultoría Klaviyo | Naif',
      description:
        'Respuestas directas sobre costes, plazos, cobertura de plataformas, requisitos de acceso, gestión del NDA, estándares de medición y para quién es realmente este servicio.',
    },
    header: {
      badgePrefix: 'Antes de escribirme —',
      badgeSuffix: 'Respuestas directas',
      headingLead: 'Preguntas',
      headingHighlight: 'respondidas',
      headingTail: 'antes de que preguntes',
      lead:
        'Coste, plazo, acceso, NDA, medición y — igual de importante — las situaciones en las que te diré que no me contrates. Si tu pregunta no está aquí, pregunta directamente y recibirás una respuesta clara en menos de 24 horas.',
    },
    items: [
      {
        q: '¿Cuánto cuesta realmente una colaboración de arquitectura DTC?',
        a: 'Tres formas de trabajar juntos, con rangos orientativos para que te autocualifiques antes de que hablemos. Cada alcance se presupuesta por escrito antes de empezar cualquier trabajo — sin facturación por horas y sin facturas sorpresa.',
        detail: [
          'Auditoría de Arquitectura — $1,500–$3,500. Un desmontaje forense de 2–3 días de tu tienda, tu medición publicitaria y tu stack de retención, entregado como informe escrito priorizado con cambios ponderados por ingresos.',
          'Sprint de Conversión — $5,000–$12,000. Un programa de implementación de 4–6 semanas: los 3–5 cambios de mayor impacto publicados directamente en tu tema, con medición antes y después.',
          'Retainer de Crecimiento — $3,000–$8,000/mes. Trabajo continuo de CRO, rendimiento y Klaviyo, con hoja de ruta mensual, cadencia de tests y acceso directo.',
        ],
      },
      {
        q: '¿Cuánto tardáis en ver resultados?',
        a: 'La auditoría se entrega en 2–3 días, y los primeros hallazgos del sprint suelen publicarse en las dos primeras semanas de implementación. Pero en serio: un programa de tests necesita unos 90 días antes de que puedas leer el programa entero y no un resultado suelto. Quien te prometa una subida de conversión en el primer mes te está describiendo la estacionalidad, no el trabajo.',
        detail: [
          'Días 1–3: auditoría, acuerdo de la línea base, hoja de ruta priorizada',
          'Semanas 1–2: primer lote de cambios publicado y en vivo',
          'Semanas 3–8: ciclos de test, lecturas y efecto acumulado en ingresos',
        ],
      },
      {
        q: '¿Con qué plataformas trabajas?',
        a: 'Shopify es mi terreno — OS 2.0 y Shopify Plus, Liquid, Shopify Functions, secciones a medida, Hydrogen/Oxygen headless cuando aporta, y tiendas Jamstack (Astro). También asumo migraciones de WooCommerce y BigCommerce a Shopify Plus.',
        detail: [
          'Tienda: Shopify OS 2.0, Shopify Plus, Hydrogen, Astro/Jamstack',
          'Datos y medición: GA4, Meta Graph API, Conversions API, GTM, Shopify Web Pixels',
          'Retención: flujos de Klaviyo, SMS, integraciones de fidelización y suscripción',
        ],
      },
      {
        q: '¿Puedes trabajar con nuestro equipo en otro huso horario?',
        a: 'Sí. Estoy en UTC+8, que se solapa con la noche de la costa este de EE. UU., la mañana de Europa y la jornada de APAC. Los plazos del sprint y los incidentes no respetan husos horarios, así que mantengo un rastro asíncrono por escrito — recorridos en Loom, notas escritas y un tablero compartido — para que nada dependa de que estemos despiertos a la vez.',
        detail: [],
      },
      {
        q: '¿Qué acceso necesitas de nosotros para empezar?',
        a: 'Con acceso de lectura basta para empezar: tu propiedad de GA4, tu cuenta de Meta Ads Manager y acceso como colaborador en Shopify. No necesito —y no voy a pedir— tu contraseña de Meta ni permisos de administrador el primer día. Prefiero staging o un tema duplicado para que tu tienda en producción siga vendiendo mientras trabajo.',
        detail: [
          'Propiedad de GA4 (visor)',
          'Meta Ads Manager (acceso de lectura del anunciante)',
          'Acceso como colaborador en Shopify, o una rama de tema duplicada',
          'Acceso de lectura a Klaviyo para el trabajo de retención',
        ],
      },
      {
        q: '¿Trabajas bajo NDA?',
        a: 'Siempre, y es el estándar. La mayoría de las colaboraciones que dirijo están bajo NDA porque el trabajo es comercialmente sensible. Publicaré casos de éxito anonimizados con los números reales intactos — tus datos, tus métricas y tu marca fuera.',
        detail: [],
      },
      {
        q: '¿Cómo demuestras que un cambio ha funcionado de verdad?',
        a: 'Acordamos la línea base antes de publicar el primer cambio y luego seguimos la tasa de conversión, los ingresos por sesión, los CWV de campo en p75 (LCP, INP, CLS), la pérdida entre clic y landing page y la tasa de chargeback contra esa referencia. Si un test pierde, se revierte. Sin victorias de vanidad ni capturas de un buen día.',
        detail: [],
      },
      {
        q: '¿Puedes garantizar una subida de la tasa de conversión?',
        a: 'No, y deberías desconfiar de quien lo prometa. Lo que garantizo es el proceso: una línea base documentada, una hoja de ruta priorizada, cambios publicados dentro de tu tema y una medición que confirma o mata cada hipótesis. La subida es el resultado — no es una cláusula del contrato.',
        detail: [],
      },
      {
        q: '¿Solo haces estrategia o también implementas?',
        a: 'Implemento. Una estrategia que se le pasa a un equipo interno suele morir en el backlog, sobre todo cuando la solución es un bucle de Liquid, un evento de Meta o un flujo de Klaviyo. Escribo el código, lo publico en un tema de staging y te entrego un recorrido en Loom más notas escritas para que tu equipo sea el dueño después.',
        detail: [],
      },
      {
        q: 'Ya trabajamos con una agencia de Shopify. ¿Aún puedes ayudar?',
        a: 'Sí, y es un camino muy trillado. Trabajo en marca blanca para agencias que necesitan capacidad senior de CRO y rendimiento sin ampliar plantilla — tu equipo mantiene la relación con el cliente, yo hago la auditoría y la implementación, y todo se entrega con tu marca. También es así como mantengo un pipeline estable sin montar un equipo comercial.',
        detail: [],
      },
      {
        q: 'Somos una tienda pequeña. ¿Nos compensa?',
        a: 'Con franqueza, a menudo no. Por debajo de unos $50,000/mes de facturación, la tarifa supondría un porcentaje material del margen, y la solución barata suele ser un tema gratuito de Shopify bien construido más una sesión de CRO enfocada. Te lo diré en la primera llamada en lugar de venderte un retainer que no puedes justificar.',
        detail: [],
      },
      {
        q: 'Todavía no tenemos tráfico pagado. ¿Puedes ayudar?',
        a: 'En tienda, velocidad y CRO — sí, por supuesto. En eficiencia de la inversión publicitaria y recuperación de clics perdidos — todavía no, porque no hay datos de clics que conciliar. Empieza por la auditoría, deja el sitio rápido y listo para convertir, y vuelve al tráfico pagado cuando haya presupuesto detrás.',
        detail: [],
      },
      {
        q: '¿Qué pasa cuando termina la colaboración?',
        a: 'Te quedas con todo: el código, el Liquid, los flujos de Klaviyo, los eventos de GA4, la documentación y la configuración de medición. El retainer es una comodidad, no una dependencia. Si el trabajo no rinde, la salida no debería ser la parte difícil.',
        detail: [],
      },
    ] as { q: string; a: string; detail: string[] }[],
    cta: {
      heading: 'Tu pregunta no está en esta página',
      lead:
        'Bien — normalmente significa que es la interesante. Mándamela junto con la URL de tu tienda y responderé con datos concretos, no con un folleto.',
    },
  },

  contact: {
    meta: {
      title: 'Trabaja conmigo | Arquitectura DTC y consultoría de crecimiento | Naif',
      description:
        'Contacta con Naif para arquitectura de tiendas Shopify/Jamstack de ticket alto, CRO de landing pages de Meta Ads, sistemas de retención con Klaviyo y consultoría de crecimiento.',
    },
    eyebrow: 'Colaboración de crecimiento DTC y contratos',
    heading: 'Trabaja conmigo / Arquitectura DTC y consultoría',
    lead:
      'Me asocio con marcas DTC de ticket alto, fundadores de eCommerce de lujo y operadores transfronterizos en crecimiento para construir tiendas de alta conversión, eliminar la fuga publicitaria y proteger la salud de tu cuenta de vendedor.',
    channelsHeading: 'Canales directos',
    emailLabel: 'Email de trabajo:',
    githubLabel: 'Perfil de GitHub:',
    availabilityLabel: 'Disponibilidad y husos horarios:',
    availability:
      'Disponible para auditorías de arquitectura DTC, sprints de conversión y contratos de consultoría de crecimiento. Flexibilidad horaria con equipos de marca de EE. UU., Europa y APAC.',
    offeringsHeading: 'Servicios principales',
    offerings: [
      {
        title: 'Arquitectura de tienda de ticket alto',
        body: 'Desarrollos a medida en Shopify OS2.0 y Jamstack con dirección visual anti-slop de 6 tomas.',
      },
      {
        title: 'CRO de landing pages en Meta/Google Ads',
        body: 'Reducir la pérdida entre clic y landing page en móvil del 25%+ a menos del 8%.',
      },
      {
        title: 'Retención de ciclo de vida con Klaviyo',
        body: 'Secuencias de bienvenida de alta conversión, abandono de navegación y retención VIP.',
      },
      {
        title: 'Verdad del Fulfillment y Escudo Antichargeback',
        body: 'Anticipar disputas de PayPal y Stripe alineando las promesas digitales con la entrega física del paquete.',
      },
    ],
  },

  rfq: {
    badge: 'Consultoría de arquitectura DTC y crecimiento',
    heading: 'Inicia una auditoría de arquitectura DTC o un contrato de consultoría',
    lead:
      'Ya sea que necesites una re-arquitectura de Shopify de ticket alto, la aceleración de landing pages de Meta Ads o flujos automatizados de retención con Klaviyo, escríbeme abajo. Respuesta directa en menos de 24 horas.',
    nameLabel: 'Tu nombre *',
    companyLabel: 'Marca / URL de tienda / Empresa *',
    emailLabel: 'Email de trabajo *',
    contactLabel: 'Telegram / WhatsApp / Teléfono',
    scopeLabel: 'Tipo de colaboración / Alcance',
    budgetLabel: 'Plazo objetivo y presupuesto mensual',
    messageLabel: 'URL de la tienda, GMV mensual actual y cuellos de botella clave *',
    namePlaceholder: 'p. ej. Alex Morgan',
    companyPlaceholder: 'p. ej. Amesha Energy / marca.com',
    emailPlaceholder: 'alex@marca.com',
    contactPlaceholder: '@usuario o teléfono',
    scopePlaceholder: 'p. ej. Tienda Shopify de ticket alto / CRO de landing page en Meta Ads / Flujo de Klaviyo',
    budgetPlaceholder: 'p. ej. Inmediato / sprint de $3k-$10k o retainer de consultoría',
    messagePlaceholder:
      'Describe brevemente tu marca, tu GMV mensual actual, tus plataformas publicitarias y tus principales cuellos de botella de conversión o retención...',
    confidentiality: 'Confidencialidad estricta de PI y NDA protegida',
    submitting: 'Conectando con el gateway del edge...',
    success:
      '<strong>¡Consulta recibida!</strong> Gracias {name}. Tu solicitud de proyecto ha quedado registrada. Revisaré tus requisitos y responderé por email ({email}) en menos de 24 horas.',
    failure:
      '<strong>Error al enviar la consulta:</strong> {error}. También puedes escribirme directamente a <a href="mailto:dewellsmell@gmail.com" class="underline text-white">dewellsmell@gmail.com</a>.',
  },

  products: {
    meta: {
      title: 'Casos de éxito DTC en producción y sistemas de crecimiento | Naif',
      description:
        'Explora los casos de éxito DTC en producción de Naif. Arquitectura de tiendas de ticket alto, mitigación de la pérdida de clics en Meta Ads y motores automatizados de retención con Klaviyo.',
    },
    eyebrow: 'Sistemas DTC y portafolio de crecimiento',
    heading: 'Casos de éxito DTC en producción y arquitecturas de embudo',
    lead:
      'Arquitecturas en producción, casos de éxito de CRO y soluciones de infraestructura de retención. Cada proyecto destaca subidas reales de conversión, defensa del tráfico publicitario y resultados medibles para el negocio.',
    allSystems: 'Todos los sistemas',
  },

  productDetail: {
    stackLabel: 'Stack tecnológico principal:',
    benchmarkLabel: 'Referencia de rendimiento:',
    targetLabel: 'Objetivo del despliegue:',
    targetValue: 'Shopify & CDN en el edge',
    highlightsHeading: 'Innovaciones clave y capacidades de crecimiento',
    inquire: 'Consultar sobre una arquitectura similar',
    back: '← Volver a todos los proyectos',
    specsHeading: 'Arquitectura del sistema y parámetros técnicos',
    walkthroughHeading: 'Recorrido del caso de éxito e impacto de la ingeniería',
    footerNote: 'Arquitectura de crecimiento DTC • Abierto a auditorías de marca y consultoría',
  },

  postDetail: {
    badge: 'Whitepaper de arquitectura',
    crumb: 'Escritura técnica',
    authorRole: 'Ingeniero de software full-stack y arquitecto serverless',
    authorBio:
      'Especializado en plataformas Jamstack sub-100ms, arquitecturas Islands zero-JS y optimización de costes en la nube sobre Cloudflare Edge.',
    workWithMe: 'Trabaja conmigo →',
    metaTitleSuffix: 'Escritura técnica | Naif',
    metaFallback: 'Inmersión en la arquitectura web moderna y la ingeniería de sistemas por parte de Naif.',
  },

  resources: {
    meta: {
      title: 'Recursos de ingeniería DTC y comercio global | Naif',
      description:
        'Directorio seleccionado de 24 herramientas de desarrollo, infraestructura edge serverless, suites de diagnóstico de red y plataformas de inteligencia de comercio global.',
    },
    badge: 'Caja de herramientas técnica verificada • 24 utilidades seleccionadas',
    headingLead: 'Herramientas autorizadas de',
    headingHighlight: 'ingeniería e inteligencia',
    lead:
      'Una selección minuciosa de utilidades en producción de las que me sirvo a diario: desde suites de diagnóstico de Core Web Vitals subsegundo hasta registros de conocimiento de embarque del comercio global y plataformas cloud edge Anycast.',
    allResources: 'Todos los recursos',
    categories: {
      performance: 'Rendimiento web y auditorías',
      edge: 'Edge cloud y serverless',
      diagnostics: 'Diagnóstico de email y red',
      intelligence: 'Comercio global e inteligencia',
    },
    launch: 'Abrir',
    openInNewTab: 'Abrir {name}',
    diagnosticCta: {
      heading: '¿Necesitas una auditoría experta con estas herramientas?',
      body: 'Ejecutar la auditoría es fácil. Convertir los datos en una hoja de ruta de ingeniería sin interrupciones no lo es — exige pensar en sistemas entre rendimiento, reputación de email e infraestructura cloud.',
      button: 'Reservar una revisión de arquitectura',
    },
    entries: [
      {
        key: 'psi',
        name: 'Google PageSpeed Insights',
        url: 'https://pagespeed.web.dev/',
        domain: 'pagespeed.web.dev',
        category: 'performance',
        description:
          'El estándar definitivo para Core Web Vitals (LCP, INP, CLS) en móvil y escritorio, basado en datos de campo reales del Chrome User Experience Report.',
      },
      {
        key: 'wpt',
        name: 'WebPageTest',
        url: 'https://www.webpagetest.org/',
        domain: 'webpagetest.org',
        category: 'performance',
        description:
          'Perfilado de rendimiento multiposición con limitación de conexión, emulación de ralentización de CPU, filmstrips de vídeo y comparación visual.',
      },
      {
        key: 'urlscan',
        name: 'URLScan.io',
        url: 'https://urlscan.io/',
        domain: 'urlscan.io',
        category: 'performance',
        description:
          'Escáner de navegador en sandbox que analiza y registra todas las peticiones HTTP, scripts de seguimiento de terceros, cabeceras de seguridad y mutaciones del DOM.',
      },
      {
        key: 'gtmetrix',
        name: 'GTmetrix',
        url: 'https://gtmetrix.com/',
        domain: 'gtmetrix.com',
        category: 'performance',
        description:
          'Suite de tests sintéticos de velocidad web con desglose en cascada, cronología de generación de página e indicaciones accionables de optimización.',
      },
      {
        key: 'yellowlab',
        name: 'Yellow Lab Tools',
        url: 'https://yellowlab.tools/',
        domain: 'yellowlab.tools',
        category: 'performance',
        description:
          'Auditor de calidad de código frontend que detecta árboles de DOM profundos, selectores CSS complejos, malas prácticas de JavaScript y cuellos de botella en el renderizado de fuentes web.',
      },
      {
        key: 'speedvitals',
        name: 'SpeedVitals Global TTFB Test',
        url: 'https://speedvitals.com/ttfb-test',
        domain: 'speedvitals.com',
        category: 'performance',
        description:
          'Mide el Time to First Byte (TTFB) de forma concurrente en más de 35 ubicaciones edge globales para evaluar la eficiencia de la caché CDN y la latencia del origen.',
      },
      {
        key: 'cfworkers',
        name: 'Cloudflare Workers & Pages',
        url: 'https://workers.cloudflare.com/',
        domain: 'workers.cloudflare.com',
        category: 'edge',
        description:
          'Entorno de ejecución serverless desplegado en más de 300 ciudades Anycast, que ejecuta JavaScript/Wasm ligero sin arranques en frío de contenedores.',
      },
      {
        key: 'astro',
        name: 'Astro Web Framework',
        url: 'https://astro.build/',
        domain: 'astro.build',
        category: 'edge',
        description:
          'El framework web moderno diseñado para sitios dirigidos por contenido, pionero en la arquitectura Islands para enviar HTML puro con hidratación selectiva en cliente.',
      },
      {
        key: 'resend',
        name: 'Resend',
        url: 'https://resend.com/',
        domain: 'resend.com',
        category: 'edge',
        description:
          'API de email transaccional pensada para desarrolladores, con plantillas de React Email, endpoints REST rapidísimos y una entregabilidad a la bandeja de entrada a toda prueba.',
      },
      {
        key: 'upstash',
        name: 'Upstash',
        url: 'https://upstash.com/',
        domain: 'upstash.com',
        category: 'edge',
        description:
          'Infraestructura de datos edge-native con Redis serverless, colas de mensajes (QStash) y Kafka mediante APIs HTTP/REST sin estado para workers en el edge.',
      },
      {
        key: 'turso',
        name: 'Turso (libSQL)',
        url: 'https://turso.tech/',
        domain: 'turso.tech',
        category: 'edge',
        description:
          'Base de datos distribuida motorizada por libSQL que replica los datos de SQLite globalmente, cerca de los usuarios en el edge, para lecturas locales sub-milisegundo.',
      },
      {
        key: 'keystatic',
        name: 'Keystatic',
        url: 'https://keystatic.com/',
        domain: 'keystatic.com',
        category: 'edge',
        description:
          'CMS headless respaldado por Git que escribe archivos JSON, YAML y Markdoc estructurados directamente en tu repositorio de GitHub.',
      },
      {
        key: 'mailtester',
        name: 'Mail-Tester',
        url: 'https://www.mail-tester.com/',
        domain: 'mail-tester.com',
        category: 'diagnostics',
        description:
          'Evalúa la entregabilidad del email saliente revisando registros SPF, firma DKIM, alineación DMARC y reglas de SpamAssassin.',
      },
      {
        key: 'mxtoolbox',
        name: 'MxToolbox',
        url: 'https://mxtoolbox.com/',
        domain: 'mxtoolbox.com',
        category: 'diagnostics',
        description:
          'Plataforma integral de diagnóstico de red: consulta de registros MX, propagación DNS, pruebas de handshake SMTP y más de 100 listas negras globales de email.',
      },
      {
        key: 'ssllabs',
        name: 'Qualys SSL Labs',
        url: 'https://www.ssllabs.com/ssltest/',
        domain: 'ssllabs.com',
        category: 'diagnostics',
        description:
          'Análisis en profundidad de cualquier servidor SSL/TLS público, con nota para las cadenas de certificados, la robustez de las suites de cifrado, el secreto perfecto hacia adelante y la exposición a vulnerabilidades.',
      },
      {
        key: 'securityheaders',
        name: 'SecurityHeaders.com',
        url: 'https://securityheaders.com/',
        domain: 'securityheaders.com',
        category: 'diagnostics',
        description:
          'Auditoría instantánea de las cabeceras de seguridad HTTP, incluidos CSP, HSTS, Permissions-Policy y Referrer-Policy.',
      },
      {
        key: 'dnsviz',
        name: 'DNSViz',
        url: 'https://dnsviz.net/',
        domain: 'dnsviz.net',
        category: 'diagnostics',
        description:
          'Herramienta interactiva de visualización que analiza la salud de la cadena DNS y DNSSEC, la delegación cifrada y el estado de los servidores autoritativos.',
      },
      {
        key: 'bgpview',
        name: 'BGPView',
        url: 'https://bgpview.io/',
        domain: 'bgpview.io',
        category: 'diagnostics',
        description:
          'Inspector de enrutamiento BGP en tiempo real que revela la titularidad de los ASN, los anuncios de prefijos, el peering Anycast y los puntos de intercambio internacionales.',
      },
      {
        key: 'importyeti',
        name: 'ImportYeti',
        url: 'https://www.importyeti.com/',
        domain: 'importyeti.com',
        category: 'intelligence',
        description:
          'Base de datos consultable con millones de registros aduaneros de Estados Unidos por transporte marítimo para destapar proveedores reales de fábrica, socios OEM y rutas logísticas de competidores.',
      },
      {
        key: 'metalib',
        name: 'Meta Ad Library',
        url: 'https://www.facebook.com/ads/library/',
        domain: 'facebook.com/ads/library',
        category: 'intelligence',
        description:
          'Archivo consultable de todas las creatividades publicitarias comerciales que se difunden en Facebook, Instagram, Messenger y Audience Network.',
      },
      {
        key: 'adstransparency',
        name: 'Google Ads Transparency Center',
        url: 'https://adstransparency.google.com/',
        domain: 'adstransparency.google.com',
        category: 'intelligence',
        description:
          'Biblioteca oficial de transparencia de anunciantes que cubre campañas de búsqueda, YouTube y display en toda la red de Google a nivel mundial.',
      },
      {
        key: 'wipo',
        name: 'WIPO Global Brand Database',
        url: 'https://branddb.wipo.int/',
        domain: 'branddb.wipo.int',
        category: 'intelligence',
        description:
          'Portal global de búsqueda de marcas que cubre los registros internacionales del Sistema de Madrid y las oficinas de propiedad industrial de todas las regiones.',
      },
      {
        key: 'builtwith',
        name: 'BuiltWith',
        url: 'https://builtwith.com/',
        domain: 'builtwith.com',
        category: 'intelligence',
        description:
          'Perfilador de tecnología web que revela el CMS, la CDN, el código de seguimiento, las pasarelas de pago y los píxeles publicitarios detrás de cualquier dominio objetivo.',
      },
      {
        key: 'similarweb',
        name: 'Similarweb',
        url: 'https://www.similarweb.com/',
        domain: 'similarweb.com',
        category: 'intelligence',
        description:
          'Plataforma de inteligencia de mercado digital con referencias de tráfico, fuentes de referencia, geografía de la audiencia y desglose de intención de búsqueda.',
      },
    ] as ResourceEntry[],
  },
} as const;

export type PageStrings = typeof pages;
