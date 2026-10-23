export const tools = {
  roi: {
    meta: {
      title: 'Calculadora de ROI publicitario y desperdicio por rendimiento web | Naif | Arquitecto DTC',
      description:
        'Calcula cuánta parte de tu inversión publicitaria mensual se pierde por la latencia de carga en móvil. Calculadora interactiva de fugas de ROI basada en la investigación de Core Web Vitals de Google y Cloudflare.',
    },
    badge: 'Motor de correlación entre el impacto de la latencia de Google y Cloudflare',
    headingLead: 'Rendimiento web y',
    headingHighlight: 'desperdicio de ROI',
    headingTail: 'publicitario',
    lead:
      'Una carga lenta en móvil no solo frustra al visitante: quema capital de marketing pagado. Mide cómo la latencia infla las tasas de rebote, tira los clics pagados antes del primer pintado y calcula el beneficio financiero exacto de pasar a una arquitectura Jamstack sub-1.0s.',
    switcher: {
      clickLoss: 'Auditor de Pérdida de Clics',
      scorecard: 'Scorecard de Riesgo de Chargeback',
      roi: 'Calculadora de ROI publicitario y latencia',
      clickLossDesc: 'Concilia los clics salientes de Meta con las vistas de landing page de GA4 y pone precio a la brecha.',
      scorecardDesc: 'Ocho preguntas, una puntuación de salud del vendedor y la solución para cada bandera roja.',
      roiDesc: 'Pone precio al coste del tiempo de carga en móvil en inversión publicitaria desperdiciada y pedidos perdidos.',
    },
    inputsHeading: 'Datos de campaña y latencia',
    reset: 'Restablecer valores',
    fields: {
      spend: 'Inversión publicitaria mensual ($)',
      cpc: 'CPC medio ($ USD)',
      loadTime: 'Tiempo de carga actual en móvil (segundos)',
      cvr: 'Tasa de conversión actual en móvil (%)',
    },
    scale: {
      spend: ['$500', '$50,000', '$100,000+'],
      cpc: ['$0.20', '$5.00', '$15.00'],
      loadTime: ['0.8s (Jamstack)', '3.0s', '7.0s (Severo)'],
      cvr: ['0.2%', '2.5%', '6.0%'],
    },
    groundTruth: {
      title: 'Modelo de datos de referencia',
      body: 'Basado en la telemetría móvil de Google Research y SOASTA: el 53% de las visitas móviles se abandonan si las páginas tardan más de 3 segundos en cargar; la tasa de conversión cae hasta un 4.42% con cada segundo extra de retraso.',
    },
    results: {
      wastedTitle: 'Presupuesto publicitario mensual desperdiciado',
      wastedDesc: 'Capital estimado que se pierde en rebotes antes de que la página se renderice en dispositivos móviles 4G.',
      wastedAnnualLabel: 'Pérdida anualizada:',
      bouncedTitle: 'Clics abandonados / mes',
      bouncedDesc: 'De {total} visitas pagadas, rebotadas por paradas de renderizado en móvil.',
      penaltyLabel: 'Penalización por rebote en móvil:',
      recoveredTitle: 'Conversiones recuperables',
      recoveredDesc: 'Clientes incrementales proyectados con entrega edge Jamstack sub-1.0s.',
      recoveredAnnualLabel: 'Pedidos anuales estimados:',
      valueTitle: 'Beneficio anual proyectado en ROI',
      valueDesc: 'Valor calculado del tráfico retenido más el multiplicador de conversión subsegundo.',
      paybackLabel: 'Periodo de amortización de la arquitectura:',
      paybackValue: '< 30 días',
      pills: {
        optimal: 'Velocidad edge óptima',
        moderate: 'Fricción moderada',
        severe: 'Abandono severo',
        critical: 'Desperdicio crítico de presupuesto',
      },
      latencyLabels: {
        high: 'Latencia alta / cuello de botella',
        moderate: 'Velocidad moderada',
      },
    },
    benchmark: {
      heading: 'Diferencial entre latencia y conversión',
      indexLabel: 'Índice Google SOASTA',
      currentLabel: 'Latencia de tu infraestructura actual:',
      targetLabel: 'La arquitectura edge Jamstack de Naif:',
      currentNote: 'Overhead alto de hidratación, bundles de JS bloqueantes, idas y vueltas a la base de datos.',
      targetNote: 'HTML prerenderizado en más de 300 nodos edge, First Contentful Paint instantáneo, arranques en frío de 0ms.',
    },
    roadmap: {
      heading: 'Hoja de ruta de remediación arquitectónica',
      items: [
        {
          title: '1. Eliminación del TTFB en el edge',
          body: 'Sustituye el análisis de la base de datos en el servidor de origen por HTML prerenderizado en Cloudflare Workers, dejando el TTFB por debajo de 60ms en todo el mundo.',
        },
        {
          title: '2. Eliminación de la hidratación Zero-JS',
          body: 'Migra los scripts pesados de las SPA o de los temas WooCommerce/Shopify a Astro Islands, eliminando más del 90% del bloqueo del hilo principal en el cliente.',
        },
        {
          title: '3. Transcodificación automatizada de imágenes',
          body: 'Sirve assets AVIF/WebP responsive vía Cloudflare Images, ajustados al DPR real de la pantalla con cero desplazamiento de layout (CLS = 0).',
        },
        {
          title: '4. RFQ y checkout serverless',
          body: 'Enruta los formularios y las peticiones de pedido de forma asíncrona mediante colas en la nube (Cloudflare Queues/KV) con respuestas garantizadas por debajo de 100ms.',
        },
      ],
    },
    cta: {
      heading: 'Deja de quemar inversión publicitaria',
      body: 'Solicita un desglose completo de la latencia y una propuesta de migración para tu tienda o tu app.',
    },
  },

  clickLoss: {
    meta: {
      title: 'Auditor de Pérdida de Clics — Concilia clics salientes de Meta con vistas de página de destino en GA4 | Naif',
      description:
        'Herramienta gratuita: concilia los clics salientes de Meta Ads con las vistas de landing page de GA4 para medir la pérdida real de clics, la inversión publicitaria desperdiciada y los ingresos recuperables. Te dice si la fuga es de renderizado o de atribución.',
    },
    badge: 'Motor de conciliación Meta Graph API × GA4',
    heading: 'Auditor de Pérdida de Clics',
    reset: 'Restablecer valores',
    lead:
      'Tu plataforma publicitaria dice que compraste 40.000 clics. Tu analítica dice que llegaron 31.000 personas. Esa brecha de 9.000 es dinero que ya pagaste y nunca tuviste ocasión de vender — y la mayoría de marcas lo achacan a la fatiga creativa. Esta herramienta mide la pérdida real, le pone precio y te dice si es un problema de renderizado o un artefacto de medición.',
    inputsHeading: 'Datos de conciliación',
    fields: {
      outbound: 'Clics salientes de Meta / mes',
      lpv: 'Vistas de página de destino de GA4 / mes',
      cpc: 'Coste medio por clic ($)',
      loadTime: 'Tiempo de carga de la landing page en móvil (s)',
      cvr: 'Tasa de conversión de la landing page (%)',
      aov: 'Valor medio del pedido ($)',
    },
    hints: {
      outbound: 'Meta Ads Manager → Ads Manager → Columns → Outbound clicks (todas las campañas, últimos 30 días).',
      lpv: 'GA4 → Informes → Adquisición → Tráfico de adquisición → Session source/medium = Meta → Landing page + session starts.',
      loadTime: 'Compruébalo con PageSpeed Insights (móvil, con limitación) o con los datos de campo de CrUX para la URL a la que apuntan tus anuncios.',
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
      lossTitle: 'Tasa real de pérdida de clics',
      lossDesc: 'De {total} clics pagados nunca produjeron una vista de página de destino.',
      benchmarkLabel: 'Referencia del sector:',
      benchmarkValue: '25%+ habitual',
      wastedTitle: 'Inversión publicitaria desperdiciada / mes',
      wastedDesc: 'Capital pagado por {clicks} clics que nunca renderizaron una página.',
      wastedAnnualLabel: 'Anualizado:',
      ordersTitle: 'Pedidos recuperables / mes',
      ordersDesc: 'Pedidos capturados si cierras la brecha hasta la tasa objetivo por debajo del 8%.',
      ordersAnnualLabel: 'Pedidos anuales:',
      revenueTitle: 'Ingresos recuperables / mes',
      revenueDesc: 'Ingresos con el mismo presupuesto en medios, descontando la misma inversión.',
      revenueAnnualLabel: 'Beneficio anualizado:',
      pills: {
        critical: 'Fuga crítica',
        elevated: 'Pérdida elevada',
        guarded: 'Protegido',
        healthy: 'Correcto',
      },
    },
    diagnosis: {
      heading: 'Diagnóstico de causa raíz',
      types: {
        rendering: 'Pérdida por renderizado',
        attribution: 'Artefacto de medición',
        mixed: 'Causa mixta',
        guarded: 'Protegido',
        healthy: 'Embudo correcto',
      },
      summaries: {
        rendering:
          'Tu landing page es lo bastante lenta como para que los visitantes reales se vayan antes de que la página se renderice. Esto es demanda genuinamente perdida, no un capricho del informe.',
        attribution:
          'Tu página carga rápido, así que la brecha no es un problema de rebote. Lo más probable es un fallo de medición y atribución — estás pagando por clics que GA4 nunca registra, lo que además significa que tu ROAS es incorrecto.',
        mixed:
          'Juegan los dos factores: algunos visitantes rebotan de verdad con un tiempo de carga intermedio y parte de la brecha es deriva de medición. Arréglalos en ese orden.',
        guarded:
          'Tu tasa de pérdida de clics está cerca del objetivo por debajo del 8%. La brecha residual merece una revisión trimestral más que una corrección de urgencia — ajusta la conciliación de medición y sigue adelante.',
        healthy:
          'Tu tráfico pagado llega y se registra. A este nivel, el margen que queda está en la tasa de conversión y en el valor medio del pedido, no en reconciliar tráfico.',
      },
      causes: {
        rendering: [
          {
            title: '1. Precarga la imagen hero del LCP y elimina los scripts del tag manager que bloquean el renderizado',
            body: 'Aplaza los píxeles no esenciales con requestIdleCallback para que el primer pintado no espere al JS de terceros.',
          },
          {
            title: '2. Elimina el peso de las apps y libera el hilo principal',
            body: 'Cada app que añades carga scripts en todas las plantillas. Audita el Total Blocking Time y elimina o aplaza a los peores infractores.',
          },
          {
            title: '3. Sirve AVIF/WebP con el DPR correcto para llevar el CLS a cero',
            body: 'El desplazamiento de layout durante el clic publicitario es una de las causas principales del rebote con pantalla en blanco en los navegadores in-app de móvil.',
          },
        ],
        attribution: [
          {
            title: '1. Concilia la señal de Meta bajo iOS 14.5+ / Consent Mode v2',
            body: 'Los eventos de servidor de tu CAPI y los eventos de cliente deben deduplicarse por event_id, o GA4 contará por debajo las sesiones pagadas que Meta sí está contando.',
          },
          {
            title: '2. Comprueba si hay cadenas de redirección y pérdida de medición entre dominios',
            body: 'Las redirecciones del anuncio a través de un acortador o un selector de país rompen la atribución de la sesión — el clic aterriza y GA4 nunca lo ve.',
          },
          {
            title: '3. Filtra el tráfico interno, los rechazos de consentimiento y los efectos de ITP',
            body: 'Safari y los navegadores in-app bloquean las cookies de terceros; una audiencia real puede parecer una brecha de medición.',
          },
          {
            title: '4. Verifica que tu URL de landing page coincide exactamente con el destino del anuncio',
            body: 'Una discrepancia entre la URL del anuncio y la URL final parte la sesión en silencio antes de que se contabilice.',
          },
        ],
        mixed: [
          {
            title: '1. Arregla primero la ruta de renderizado — explica la mayor parte de la brecha',
            body: 'Tu página supera el umbral de 3 segundos en el que el abandono móvil se dispara, así que parte de esta pérdida es demanda real perdida.',
          },
          {
            title: '2. Después concilia la brecha de medición',
            body: 'Con una página rápida, cualquier brecha restante es de medición. Compara los clics salientes de Meta con las sesiones de GA4 y deduplica la CAPI por event_id.',
          },
          {
            title: '3. Ejecuta la auditoría en tus 5 mejores landing pages publicitarias, no solo en la tienda',
            body: 'La fuga rara vez es uniforme — una variante lenta puede explicar la mayor parte de la pérdida.',
          },
        ],
      },
    },
    benchmark: {
      heading: 'Tasa de pérdida de clics frente a referencias',
      targetLabel: 'Objetivo < 8%',
      yours: 'Tu tienda:',
      typical: 'Tienda Shopify habitual:',
      typicalValue: '20% – 30%',
      target: 'Arquitectura edge subsegundo:',
      targetValue: '< 8%',
    },
    gate: {
      heading: 'Consigue el informe completo de conciliación',
      body: 'Desglose de la brecha sesión a sesión, las rutas exactas de los informes de GA4 y Meta, y una secuencia de correcciones de 90 días para tu tienda.',
      newsletterHeading: 'Envíame el informe completo de conciliación',
      newsletterSubheading:
        'Deja la URL de tu tienda y personalizo el diagnóstico — incluido qué landing page es la que más pierde.',
      cta: 'Consigue el informe',
      note: 'Un informe y después El Informe de Desperdicio Publicitario cada semana. Bajas cuando quieras.',
    },
  },

  scorecard: {
    meta: {
      title: 'Scorecard de Riesgo de Chargeback — Diagnóstico gratuito de salud del vendedor DTC | Naif',
      description:
        'Diagnóstico gratuito de 8 preguntas que puntúa tu exposición a chargebacks, cuantifica el riesgo y te da la solución concreta para cada bandera roja. Construido sobre la verdad del fulfillment, la promesa de entrega y la defensa de disputas.',
    },
    badge: 'Diagnóstico de salud del vendedor · 8 preguntas',
    headingLead: 'Scorecard de Riesgo',
    headingHighlight: 'de Chargeback',
    lead:
      'Un chargeback no es un problema de pago. Es un problema de verdad del fulfillment que se ha escalado — y el comercio normalmente tiene las pruebas para ganarlo. Ocho preguntas, una puntuación de riesgo y la solución concreta para cada bandera roja que te encuentres. La mayoría de marcas termina en menos de tres minutos.',
    exposure: {
      gmv: 'Facturación mensual ($)',
      gmvHint: 'Se usa para cuantificar la exposición en dólares.',
      cbRate: 'Tasa actual de chargeback (%)',
      cbRateHint: 'Las redes de tarjetas marcan un umbral en torno al 1%. Consulta el panel de tu procesador.',
      aov: 'Valor medio del pedido ($)',
      aovHint: 'Las disputas escalan con el tamaño del ticket — un pedido de $40 rara vez se disputa, uno de $200 sí.',
    },
    questions: [
      {
        id: 'fulfillment-truth',
        q: '¿Lo que llega en el paquete coincide con lo que prometía la ficha del producto — material, peso, cantidad, acabado?',
        why: 'Un fulfillment que no coincide es el motivo de disputa que más rápido crece. También es el más difícil de defender, porque la propia ficha del comercio es la prueba.',
        options: [
          {
            label: 'Sí — auditamos los envíos contra lo que declara la ficha',
            fix: 'Mantén esta línea. Documenta la auditoría para poder defenderte.',
            score: 0,
          },
          {
            label: 'En parte — hay referencias que se comprueban y otras que no',
            fix: 'Elige tus 5 SKUs con más ingresos y audítalos primero. Cubre el 80% de los ingresos con la misma disciplina que aplicas al resto.',
            score: 12,
          },
          {
            label: 'No — las fichas están escritas para convertir, no para ser exactas',
            fix: 'La corrección con más impacto de toda la lista. Reescribe las 10 páginas de producto con más tráfico para que cada afirmación del copy sea algo que el paquete pueda respaldar.',
            score: 20,
          },
        ],
      },
      {
        id: 'delivery-promise',
        q: '¿La fecha de entrega que se muestra en el checkout coincide con lo que entrega realmente el transportista?',
        why: 'La entrega tardía es la principal causa de chargebacks en moda y artículos de hogar. El comprador disputa por la promesa, no por el paquete.',
        options: [
          {
            label: 'Sí — la fecha del checkout está verificada con el transportista',
            fix: 'Mantén la estimación de entrega atada a datos en vivo del transportista, no a un margen estático.',
            score: 0,
          },
          {
            label: 'Añadimos un margen a la estimación, pero no rastreamos lo real',
            fix: 'Empieza a registrar lo prometido frente a lo entregado. Un margen de 3–5 días ajustado a tu tasa real de retraso sale más barato que las disputas.',
            score: 10,
          },
          {
            label: 'No — la estimación es optimista y la entrega se retrasa a menudo',
            fix: 'Muestra la ventana real, aunque te cueste unos clics. Una estimación honesta de 9–12 días le gana a una promesa rota de 5 días.',
            score: 20,
          },
        ],
      },
      {
        id: 'refund-speed',
        q: 'Cuando un cliente pide la devolución, ¿cuánto tarda en recibirla?',
        why: 'Una devolución lenta convierte una queja de servicio en un chargeback. La alternativa del comprador es dejar que venza el plazo y que decida el emisor.',
        options: [
          {
            label: 'El mismo día, automáticamente',
            fix: 'Nada que arreglar — esto reduce directamente el volumen de disputas.',
            score: 0,
          },
          {
            label: 'En 3–5 días laborables',
            fix: 'Automatiza devoluciones instantáneas durante los primeros 30 días posteriores a la entrega y luego pásalas a tu equipo.',
            score: 10,
          },
          {
            label: 'Depende — a menudo más de 10 días',
            fix: 'Fija un SLA estricto de 24–48 horas con aprobación automática en los casos evidentes. Solo esto suele reducir las disputas en un tercio.',
            score: 20,
          },
        ],
      },
      {
        id: 'order-comms',
        q: '¿Los clientes reciben la confirmación de pedido, el aviso de envío y un enlace de seguimiento que funciona — todo automáticamente?',
        why: 'El silencio después del checkout es lo que convierte a un comprador neutral en un reclamante. El comprador asume lo peor cuando no recibe nada.',
        options: [
          {
            label: 'Sí — las tres cosas, disparadas por eventos reales',
            fix: 'Mantén el flujo basado en eventos, no en un calendario fijo.',
            score: 0,
          },
          {
            label: 'En parte — confirmación y envío sí, el seguimiento suele faltar',
            fix: 'Añade un email con el número de seguimiento que se dispara al crear la etiqueta, no al introducirla a mano.',
            score: 8,
          },
          {
            label: 'No — los clientes tienen que perseguirnos',
            fix: 'Conecta los flujos transaccionales de Klaviyo a tus eventos de fulfillment. Es un desarrollo de dos días y la reducción de disputas más rápida que existe.',
            score: 16,
          },
        ],
      },
      {
        id: 'expectation-setting',
        q: 'Para tus artículos de ticket alto, ¿hay evidencia visual y del material de lo que recibirá el comprador?',
        why: 'Por encima de unos $100, el comprador compra a partir de las imágenes. Si las imágenes están estilizadas y el paquete es soso, la petición de devolución llega primero y la disputa después.',
        options: [
          {
            label: 'Sí — fotos reales del producto, tomas de detalle y referencia de escala',
            fix: 'Protege esto. Las fotos reales son además el mejor activo de CRO que tienes.',
            score: 0,
          },
          {
            label: 'Solo tomas de lifestyle, sin referencia de escala ni de detalle',
            fix: 'Añade una referencia de escala y dos macros de detalle por SKU principal. Sale más barato que cualquier descuento que vayas a tener que dar.',
            score: 10,
          },
          {
            label: 'Imágenes estilizadas o muy retocadas',
            fix: 'Esto genera disputas directamente en ticket alto. Sustituye las imágenes retocadas por fotografía sin retocar y con escala exacta.',
            score: 18,
          },
        ],
      },
      {
        id: 'review-integrity',
        q: '¿Tus reseñas, valoraciones y testimonios son reales y verificables?',
        why: 'Las reseñas fabricadas o incentivadas son una infracción de las marcas de tarjeta y de las plataformas. La sanción no es solo una multa — es la capacidad de resolver disputas a tu favor.',
        options: [
          {
            label: 'Sí — solo reseñas de compradores verificados, sin publicaciones incentivadas',
            fix: 'Mantén documentada la trazabilidad de la verificación.',
            score: 0,
          },
          {
            label: 'Mayormente reales, pero tenemos un programa de incentivos',
            fix: 'Mueve el incentivo a una encuesta pos-compra que no esté condicionada a una reseña positiva y deja el cuerpo de la reseña sin editar.',
            score: 14,
          },
          {
            label: 'No sabemos de dónde salen nuestras reseñas',
            fix: 'Audita la app de reseñas, los bloques de reseñas y cualquier campaña incentivada histórica. Elimina todo lo que no se pueda rastrear hasta un pedido real.',
            score: 20,
          },
        ],
      },
      {
        id: 'dispute-defence',
        q: '¿Supervisas las disputas en tiempo real y presentas las pruebas antes del plazo?',
        why: 'La ventana de representación es corta y la mayoría de los comercios la pierde por defecto. Las pruebas presentadas dentro de la ventana ganan; las presentadas tarde, no.',
        options: [
          {
            label: 'Sí — presentamos pruebas en cada disputa',
            fix: 'Mantén documentada la biblioteca de plantillas de pruebas por categoría.',
            score: 0,
          },
          {
            label: 'Reaccionamos cuando llega el email, a menudo tarde',
            fix: 'Crea un expediente de pruebas permanente por categoría de SKU: pedido, seguimiento, foto de entrega, captura de la ficha. Automatiza el calendario de plazos.',
            score: 12,
          },
          {
            label: 'Poquísima ganamos estas',
            fix: 'Es el punto con más retorno de toda la lista. Un expediente de pruebas permanente suele ser la diferencia entre ganar y perder una disputa.',
            score: 20,
          },
        ],
      },
      {
        id: 'unboxing-parcel',
        q: '¿El paquete llega en unas condiciones que se ajustan a la promesa de la marca?',
        why: 'Los daños, las esquinas aplastadas y los insertos que faltan se leen como un producto de poco valor. El comprador disputa el pedido y el envío a la vez.',
        options: [
          {
            label: 'Sí — el embalaje está probado y protegido',
            fix: 'Mantén esto. Incluye una foto del unboxing en tu expediente de pruebas.',
            score: 0,
          },
          {
            label: 'En general bien, pero los artículos frágiles o pesados son el punto débil',
            fix: 'Añade protección de esquinas y una especificación de caída probada solo para los SKUs frágiles. No necesitas reembalar todo.',
            score: 10,
          },
          {
            label: 'La verdad es que no — enviamos en la caja mínima',
            fix: 'Para las líneas premium y frágiles, el embalaje es parte del producto. Una funda de correo y un inserto moldeado sale más barato que un chargeback.',
            score: 16,
          },
        ],
      },
    ],
    action: {
      heading: '¿Listo para puntuarla?',
      body: 'Tus respuestas se quedan en el navegador — no se envía nada hasta que decidas enviarme el informe por email.',
      button: 'Calcular mi puntuación de riesgo',
    },
    results: {
      scoreLabel: 'Puntuación de riesgo de chargeback',
      outOf: 'sobre {max}',
      tiers: {
        critical: 'Exposición crítica',
        elevated: 'Exposición elevada',
        moderate: 'Exposición moderada',
        healthy: 'Operación correcta',
      },
      verdicts: {
        critical:
          'Los factores que disparan tus disputas son estructurales, no ocasionales. A este ritmo estás en la lista de vigilancia de una red de tarjetas, y la defensa en la que te apoyas — tu propia ficha de producto — es justo lo que se está usando en tu contra. Arregla primero la verdad del fulfillment y la promesa de entrega; el resto es ruido hasta que eso esté sólido.',
        elevated:
          'Estás perdiendo ingresos por disputas de forma predecible. La buena noticia: al menos una de tus respuestas apunta a una corrección que son días de trabajo, no meses. La mala: cada mes que esperas, las comisiones del procesador y los buenos clientes que pierdes se acumulan.',
        moderate:
          'Tus cimientos son sólidos y el riesgo que te queda está concentrado en uno o dos sitios. Encuéntralos abajo, arréglalos, y tu tasa de disputas debería caer al rango por debajo del 0.2% que los procesadores consideran sano.',
        healthy:
          'Tu salud como vendedor está en buen estado — estás defendiendo disputas y cumpliendo tus promesas. Mantén el expediente de pruebas al día y repite este scorecard cada trimestre, porque lo que saca a las marcas de este nivel es la deriva del fulfillment, no un competidor nuevo.',
      },
      exposureLabel: 'Exposición anual',
      exposureDesc: 'Ingresos en riesgo a tu tasa actual de disputas.',
      recoverableLabel: 'Recuperable / año',
      recoverableDesc: 'Si llegas a una tasa de disputas del 0.1%.',
      disputesLabel: 'Disputas / año',
      disputesDesc: 'A tu tasa actual, antes de comisiones.',
      fixHeading: 'Tu cola de correcciones, de mayor impacto a menor',
      fixLead: 'Cada bandera roja lleva la remediación concreta, no consejos genéricos.',
      yourAnswer: 'Tu respuesta:',
      fixPrefix: 'Corrección:',
      severities: { critical: 'Crítica', high: 'Alta', moderate: 'Moderada' },
      noFlags: 'Sin banderas rojas. Todas las preguntas superadas — mantén el expediente de pruebas al día y repite esto cada trimestre.',
      gate: {
        heading: 'Consigue el informe completo de salud del vendedor',
        subheading:
          'Tu puntuación, la plantilla de expediente de pruebas por categoría de SKU y una secuencia de 90 días para reducir disputas en tu tienda.',
        cta: 'Envíame el informe',
        note: 'Un informe y después El Informe de Desperdicio Publicitario cada semana. Bajas cuando quieras.',
      },
    },
  },
} as const;

export type ToolStrings = typeof tools;
