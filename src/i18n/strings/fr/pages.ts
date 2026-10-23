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
      title: 'Naif | Opérateur e-commerce DTC & Architecte de la croissance sur l’entonnoir complet',
      description:
        'Développez des marques DTC à ticket élevé : vitesse sub-seconde, CRO des landing pages pub, rétention Klaviyo automatisée, et 100% de conversion pilotée par la donnée.',
    },
    hero: {
      pill: 'Opérateur e-commerce DTC & Architecte de la croissance sur l’entonnoir complet',
      titleLead: 'Développez vos marques DTC à ticket élevé avec',
      titleHighlight: 'une vitesse sub-seconde',
      titleTail: '& une précision sur tout le parcours.',
      lead:
        'Je comble le gap entre le storytelling des marques de luxe, la performance technique de la boutique et la rentabilité des pubs Meta/Google. Zéro plugin obèse, zéro plastique IA bon marché, 100% de conversion pilotée par la donnée.',
      fitPrefix: 'Avec qui je travaille :',
      fitBody:
        'Les marques DTC qui réalisent entre $50k et $2M/mois de revenus, avec un AOV le plus souvent supérieur à $99, qui dépensent déjà en trafic payant et le perdent avant même l’affichage de la page.',
      fitLink: 'Voir si c’est votre cas →',
    },
    benchmarks: {
      cwv: 'Score Core Web Vitals mobile',
      clickLoss: 'Taux de perte clic-landing pub (vs 25%+ en moyenne)',
      klaviyo: 'Contribution au CA via Klaviyo automatisé',
      ticket: 'Architecture de conversion ticket élevé',
    },
    cases: {
      eyebrow: 'Déploiements DTC en production',
      heading: 'Études de cas sur l’entonnoir complet',
    },
    pillars: {
      eyebrow: 'Principes de croissance & d’architecture',
      heading: 'Les 4 piliers de l’ingénierie DTC à ticket élevé',
      lead:
        'Je supprime le gaspillage de budgets pub, les stacks d’applications obèses et les frictions de conversion pour construire des opérations DTC rentables et résilientes.',
      items: [
        {
          title: 'Boutiques DTC à ticket élevé',
          body: 'Développements sur mesure Shopify OS2.0 & Jamstack, direction artistique anti-slop en 6 shots et parcours d’achat mobile-first taillés pour des prix luxe à partir de $99.',
        },
        {
          title: 'CRO des landing pages pub & défense du trafic',
          body: 'Élimination des taux de rebond mobile, tunnels d’achat directs vers le checkout et fuites de clics sortants sur Meta & TikTok Ads. Un LCP sub-seconde, c’est zéro euro de pub gaspillé.',
        },
        {
          title: 'Rétention automatisée & cycle de vie (Klaviyo)',
          body: 'Abandon de navigation sans intervention, séquences de reconquête VIP et satisfaction post-achat qui génèrent régulièrement 15%+ de CA automatisé de base.',
        },
        {
          title: 'Conformité d’expédition & bouclier anti-chargeback',
          body: 'Alignement des promesses de la boutique sur la réalité du colis pour anticiper les litiges PayPal & Stripe et garantir une santé opérationnelle durable.',
        },
      ],
    },
    fitCheck: {
      eyebrow: 'Vérification d’adéquation',
      headingLead: 'La version honnête de',
      headingHighlight: 'pour qui ça marche',
      lead:
        'Le moyen le plus rapide de perdre le temps de tout le monde, c’est un mauvais fit. Voici le filtre que j’applique réellement — et je préfère perdre le deal que mal le prendre.',
      goodTitle: 'C’est un bon fit si…',
      badTitle: 'Ce n’est pas un bon fit si…',
      good: [
        'Vous dépassez $50k/mois et faites déjà tourner du trafic payant',
        'Votre AOV est supérieur à $99 et la friction au checkout est visible',
        'Le PageSpeed mobile est au rouge et personne n’en est responsable',
        'Klaviyo existe mais les flux n’ont jamais été refaits',
        'Vous pouvez obtenir qu’un décideur approuve des changements chaque semaine',
      ],
      bad: [
        'Vous êtes sous environ $50k/mois de revenus',
        'Vous attendez une hausse de conversion garantie dès le premier mois',
        'Vous voulez que quelqu’un décide à votre place',
        'Vous êtes sur du dropshipping mono-SKU ou de la revente en zone grise',
        'Vous n’avez pas encore de trafic payant — commencez plutôt par l’audit gratuit',
      ],
    },
    diagnostics: {
      eyebrow: 'Lancez-le vous-même d’abord',
      heading: 'Des diagnostics gratuits pour votre boutique',
      lead:
        'Ce sont les mêmes moteurs que j’utilise au cœur des audits payants. Aucune inscription, aucun pitch — lancez-les sur vos propres chiffres et jugez si le travail en vaut la peine.',
      clickLossTitle: 'Auditeur de perte de clics',
      clickLossDesc:
        'Rapprochez les clics sortants Meta des vues de page d’atterrissage GA4. Chiffrez l’écart et diagnosez s’il s’agit d’une perte au rendu ou d’un artefact de tracking.',
      scorecardTitle: 'Scorecard de risque de chargeback',
      scorecardDesc:
        'Huit questions, un score de risque et le correctif précis pour chaque signal d’alerte — de la conformité d’expédition aux dossiers de preuves de litige.',
      roiTitle: 'Calculateur ROI pub & latence',
      roiDesc:
        'Chiffrez ce que le temps de chargement mobile vous coûte en budget pub gaspillé, clics perdus et commandes récupérables — à partir des données terrain de Google.',
    },
    articles: {
      eyebrow: 'Publications & whitepapers',
      heading: 'Writing technique & études de cas',
      read: 'Lire le whitepaper d’architecture',
    },
  },

  about: {
    meta: {
      title: 'À propos de Naif | Opérateur e-commerce DTC & Architecte de la croissance sur l’entonnoir complet',
      description:
        'Opérateur e-commerce DTC qui comble le gap entre l’architecture de boutique à ticket élevé, la performance edge sub-seconde, l’économie des pubs Meta et la rétention Klaviyo automatisée.',
    },
    hero: {
      pill: 'Disponible pour l’architecture de marque DTC, la CRO et le conseil en croissance',
      titleLead: 'Développez votre DTC à ticket élevé avec',
      titleHighlight: 'une précision d’ingénierie',
      titleTail: '& une rentabilité pub.',
      quote:
        '« Je vis dans les tranchées de l’ecommerce transfrontalier. Contrairement aux purs développeurs qui ne comprennent pas la dépense pub, et contrairement aux media buyers qui ne comprennent pas l’architecture web, je couvre tout le spectre : du code de thème et de la performance edge jusqu’à l’économie des pubs Meta et la rétention client. »',
      lead:
        'Avec une expertise terrain de longue date sur les boutiques Shopify OS2.0 et Jamstack à ticket élevé ($99 et plus), j’élimine les fuites invisibles qui vident la dépense pub : délais de chargement des landing pages sur mobile, tunnels de checkout non optimisés, dissonances entre promesses numériques et réalité de l’expédition, rétention post-achat négligée.',
    },
    attributes: {
      locationLabel: 'Localisation',
      locationValue: 'À distance, dans le monde entier',
      locationNote: 'UTC+8 / horaires US',
      focusLabel: 'Focus principal',
      focusValue: 'DTC à ticket élevé & CRO',
      focusNote: 'Shopify, Meta Ads, Klaviyo',
      metricLabel: 'Métrique de performance',
      metricValue: '< 8% de taux de perte de clics',
      metricNote: '100/100 Core Web Vitals mobile',
    },
    stack: {
      eyebrow: 'Stack technique & opérationnel',
      heading: 'Radar du stack DTC — entonnoir complet',
      lead:
        'Un stack éprouvé au combat qui combine architecture de boutique de niveau entreprise, ingénierie de la performance, attribution publicitaire et automatisation de la rétention.',
      items: [
        {
          title: 'Boutique & vitesse',
          desc: 'Élimination du poids du runtime côté client grâce à du Liquid sur mesure, aux Astro Islands et au cache edge.',
        },
        {
          title: 'Trafic & CRO',
          desc: 'Tunnels directs vers le checkout, direction artistique anti-slop et frameworks de copywriting pour le ticket élevé.',
        },
        {
          title: 'Attribution & télémétrie',
          desc: 'Analyse forensique des pertes de clics pub, attribution côté serveur et télémétrie sans intrusion.',
        },
        {
          title: 'Rétention & protection',
          desc: 'Séquences de cycle de vie client automatisées et défense contre les litiges clients et les chargebacks.',
        },
      ],
    },
    pillars: {
      eyebrow: 'Principes stratégiques',
      heading: 'Les 4 piliers stratégiques',
      lead:
        'Chaque marque cliente, chaque refonte de boutique et chaque initiative de croissance est construite selon ces quatre standards sans compromis.',
      items: [
        {
          title: 'Architecture de boutique & vitesse',
          body: 'Shopify OS2.0, refonte Liquid, Astro Jamstack et des Core Web Vitals sub-seconde. Élimination des apps tierces obèses et du poids des assets pour que les visiteurs mobiles profitent d’un chargement instantané, sans friction de rebond.',
          result: '100/100 Core Web Vitals mobile • LCP < 0.8s garanti',
        },
        {
          title: 'Optimisation du taux de conversion (CRO)',
          body: 'Direction artistique en 6 shots (hero, unboxing, drapé dynamique, lifestyle, macro pierre, flatlay), copywriting ticket élevé (Hook-FAB-Ideal) et tunnels de checkout sans friction, taillés pour défendre des prix premium à partir de $99.',
          result: 'Confiance ticket élevé • Checkout direct sans friction',
        },
        {
          title: 'Défense du trafic & de l’attribution',
          body: 'Intégration Meta Graph API, audit de perte de clics, forensics d’entonnoir sur GA4 et tracking d’événements sans intrusion. Nous auditons et refermons l’écart de 15%–30% entre les clics sortants payants et les vraies vues de page d’atterrissage.',
          result: '< 8% de taux de perte de clics • Transparence ROAS réelle',
        },
        {
          title: 'Opérations & protection de la marque',
          body: 'Parcours de cycle de vie Klaviyo (welcome, abandon de navigation, VIP post-achat) associés à des audits de conformité d’expédition. Aligner les promesses de la boutique sur la réalité du packaging évite les chargebacks et les blocages de paiement.',
          result: '15%+ de CA automatisé sur les flux • Zéro blocage chargeback',
        },
      ],
    },
    flow: {
      eyebrow: 'Processus de travail',
      heading: 'Flux d’exécution DTC — entonnoir complet',
      lead:
        'Un cadre d’exécution prévisible, adossé à la donnée, conçu pour éliminer le gaspillage de dépense pub et faire croître le CA de la marque.',
      items: [
        {
          title: 'Audit croissance & vitesse',
          body: 'Audit forensique approfondi des clics sortants Meta face aux vues de page d’atterrissage GA4, des Core Web Vitals Lighthouse sur mobile, des pertes au checkout et de l’alignement des promesses d’expédition.',
          timeline: '2-3 jours',
        },
        {
          title: 'CRO & prototypage visuel',
          body: 'Déploiement d’une direction artistique anti-slop en 6 shots, d’un copywriting ticket élevé Hook-FAB-Ideal et de tunnels directs vers le checkout sans friction, sur un environnement de staging.',
          timeline: '5-7 jours',
        },
        {
          title: 'Lancement & bascule du trafic',
          body: 'Déploiement de thème sans interruption de service, accélération CDN edge, déduplication des événements Meta Pixel et monitoring du checkout en temps réel sous trafic publicitaire.',
          timeline: '1-2 semaines',
        },
        {
          title: 'Rétention & défense de la santé',
          body: 'Automatisation des flux de cycle de vie Klaviyo, contrôles de parité multilingue, audits d’unboxing client et prévention des chargebacks pour protéger la santé du vendeur.',
          timeline: 'Suivi continu',
        },
      ],
    },
    cta: {
      badge: 'Partenariat stratégique direct',
      heading: 'Prêt à faire croître votre marque DTC à ticket élevé de façon rentable ?',
      lead:
        'Que vous perdiez des euros de pub sur des landing pages mobiles lentes, que vous peiniez à convertir du trafic à ticket élevé, ou que vous cherchiez une rétention Klaviyo automatisée — construisons un système rentable.',
      emailButton: 'Écrivez-moi : contact@naif.is-a.dev',
    },
  },

  services: {
    meta: {
      title: 'Niveaux d’engagement & tarifs — Architecture DTC, CRO & conseil Klaviyo | Naif',
      description:
        'Fourchettes d’engagement transparentes pour les audits d’architecture DTC, les sprints de conversion, les contrats de croissance récurrents et les missions en white-label pour agences. Périmètre fixe, devis écrit, pas de facturation horaire.',
    },
    header: {
      badge: 'Périmètre fixe · Devis écrit · Pas de facturation horaire',
      headingLead: 'Quatre façons de',
      headingHighlight: 'travailler ensemble',
      lead:
        'Des fourchettes indicatives pour vous auto-évaluer avant même qu’on se parle. Chaque mission est chiffrée par écrit, avec un périmètre fixe et un prix fixe — si le périmètre change, vous validez le changement d’abord.',
    },
    tiers: [
      {
        name: 'Audit d’architecture',
        price: '$1,500 – $3,500',
        priceNote: 'paiement unique, périmètre fixe',
        duration: '2–3 jours',
        bestFor: 'Les marques qui soupçonnent de perdre de l’argent sans savoir où.',
        includes: [
          'Démontage forensique de la boutique, du tracking et du stack de rétention',
          'Rapprochement des clics sortants Meta et des vues de page d’atterrissage GA4',
          'Audit Core Web Vitals mobile sur données terrain (LCP / INP / CLS au p75)',
          'Revue des flux, de la segmentation et de la délivrabilité Klaviyo',
          'Contrôle de l’écart entre promesse d’expédition et réalité de la livraison',
          'Rapport écrit priorisé avec des correctifs pondérés par le CA',
        ],
      },
      {
        name: 'Sprint de conversion',
        price: '$5,000 – $12,000',
        priceNote: 'paiement unique, périmètre fixe',
        duration: '4–6 semaines',
        bestFor: 'Les marques prêtes à livrer des correctifs, pas seulement à recevoir un document.',
        includes: [
          'Tout l’audit d’architecture, rejoué comme base de référence active',
          'Implémentation des 3–5 changements les plus impactants, dans votre thème',
          'Liquid / JS / CSS écrits et livrés d’abord en staging',
          'Refonte de la landing page pub ou du tunnel de checkout direct',
          'Mesure avant / après sur le taux de conversion, le CA par session et les Core Web Vitals',
          'Walkthrough Loom plus documentation écrite de passation',
        ],
      },
      {
        name: 'Contrat de croissance récurrent',
        price: '$3,000 – $8,000',
        priceNote: 'par mois, préavis de 30 jours',
        duration: 'En continu, roadmap trimestrielle',
        bestFor: 'Les équipes qui ont besoin d’un opérateur senior présent chaque mois.',
        includes: [
          'Roadmap de tests mensuelle adossée au CA, pas aux intuitions',
          'Maintenance continue de la CRO et de la performance',
          'Extension des flux Klaviyo et pilotage du programme de cycle de vie',
          'Itération sur les landing pages pub et la direction artistique',
          'Reporting hebdomadaire trafic, entonnoir et rétention',
          'Accès direct — pas de chef de projet intermédiaire, pas de file de tickets',
        ],
      },
      {
        name: 'Partenariat White-Label',
        price: 'Chiffré par agence',
        priceNote: 'grille tarifaire agence',
        duration: 'Par projet ou en continu',
        bestFor: 'Les agences et équipes internes qui ont besoin d’une capacité CRO senior.',
        includes: [
          'Audit et implémentation livrés sous votre marque et dans vos templates',
          'Aucun contact client de ma part — vous restez propriétaire de la relation',
          'Capacité senior en CRO, performance et Klaviyo sans recruter',
          'Sans conflit d’intérêts, avec une simple grille tarifaire mensuelle',
          'Votre template de reporting client, votre SLA',
        ],
      },
    ],
    footnote:
      'Ces fourchettes reflètent le périmètre typique des marques de la tranche $50k–$2M/mois. Les devis finaux sont à périmètre fixe et rédigés avant le début des travaux. Conditions de paiement : 50% à la planification, 50% à la livraison pour le périmètre fixe ; les contrats récurrents sont facturés au mois, d’avance.',
    process: {
      eyebrow: 'Comment se déroule la mission',
      heading: 'Un process prévisible, piloté par la donnée',
      lead: 'Les mêmes quatre étapes à chaque mission — d’un simple audit à un contrat de conseil à périmètre complet.',
      items: [
        {
          stage: 'Étape 01',
          title: 'Audit & base de référence',
          duration: '2–3 jours',
          detail:
            'Démontage forensique de la boutique, du tracking publicitaire, de la rétention et de l’expédition. Nous fixons ensemble la base de référence avant qu’une seule ligne ne change — taux de conversion, CA par session, CWV terrain au p75, taux de perte de clics.',
        },
        {
          stage: 'Étape 02',
          title: 'Roadmap priorisée',
          duration: 'Jour 3 – 4',
          detail:
            'Une liste de correctifs classés par impact sur le CA rapporté à l’effort, pas un deck de 50 slides. Vous voyez exactement ce qui part en sprint et ce qui attend.',
        },
        {
          stage: 'Étape 03',
          title: 'Implémentation & bascule du trafic',
          duration: '4–6 semaines',
          detail:
            'Les changements les plus impactants sont écrits dans un thème dupliqué ou un environnement de staging, revus au regard des Core Web Vitals et de l’impact conversion, puis livrés sans interruption de service.',
        },
        {
          stage: 'Étape 04',
          title: 'Rétention & défense de la santé',
          duration: 'En continu',
          detail:
            'Flux de cycle de vie Klaviyo, audit de conformité d’expédition et contrôles de cohérence multilingue tournent en continu pour protéger la LTV, la réputation et la santé du traitement des paiements.',
        },
      ],
    },
    notFit: {
      eyebrow: 'Avant de m’embaucher',
      headingLead: 'Quand je suis le',
      headingHighlight: 'mauvais choix',
      lead:
        'Le plus cher que je puisse faire, c’est prendre une mission que je ne peux pas faire fonctionner. Voici les situations où je vous orienterai ailleurs — et je vous le dirai dès le premier appel.',
      items: [
        {
          title: 'Sous environ $50k/mois de revenus',
          detail:
            'Les honoraires deviennent un pourcentage significatif de la marge. Un thème Shopify gratuit bien fait plus une session CRO ciblée fait généralement mieux que ce que je facturerais.',
        },
        {
          title: 'Dropshipping mono-SKU ou revente en zone grise',
          detail:
            'Il n’y a pas de relation client de long terme à protéger ni de premium de marque à défendre. L’économie ne tient pas la route pour ce type de mission.',
        },
        {
          title: 'Vous cherchez une hausse de conversion garantie',
          detail:
            'Quiconque promet une hausse dès le premier mois est en train de décrire de la saisonnalité. Je peux promettre un process, de la mesure et une base de référence documentée — pas un chiffre que je ne contrôle pas.',
        },
        {
          title: 'Vous avez besoin que quelqu’un décide à votre place',
          detail:
            'C’est du conseil plus de l’implémentation, pas un département externalisé. J’ai besoin d’un décideur chez vous qui puisse approuver des changements dans le sprint.',
        },
      ],
    },
    cta: {
      heading: 'Commencez par la réponse honnête la moins chère',
      lead:
        'Lancez les diagnostics gratuits ci-dessous, ou envoyez-moi l’URL de votre boutique et je vous dirai quel niveau d’engagement correspond vraiment — même si la réponse est « aucun pour l’instant ».',
    },
  },

  faq: {
    meta: {
      title: 'FAQ — Architecture DTC, CRO & conseil Klaviyo | Naif',
      description:
        'Des réponses directes sur les coûts, les délais, les plateformes couvertes, les accès requis, le traitement des NDA, les standards de mesure et le public réel de ce service.',
    },
    header: {
      badgePrefix: 'Avant de m’écrire —',
      badgeSuffix: 'Réponses directes',
      headingLead: 'Questions',
      headingHighlight: 'répondues',
      headingTail: 'avant que vous ne demandiez',
      lead:
        'Le coût, le délai, les accès, le NDA, la mesure — et, tout aussi important, les situations où je vous dirai de ne pas m’embaucher. Si votre question n’est pas ici, posez-la directement et vous obtiendrez une réponse franche sous 24 heures.',
    },
    items: [
      {
        q: 'Combien coûte réellement une mission d’architecture DTC ?',
        a: 'Trois façons de travailler ensemble, avec des fourchettes indicatives pour vous auto-évaluer avant qu’on se parle. Chaque périmètre est chiffré par écrit avant le début de toute mission — pas de facturation horaire, pas de facture surprise.',
        detail: [
          'Audit d’architecture — $1,500–$3,500. Un démontage forensique de 2–3 jours sur votre boutique, votre tracking publicitaire et votre stack de rétention, livré sous forme de rapport écrit priorisé avec des correctifs pondérés par le CA.',
          'Sprint de conversion — $5,000–$12,000. Un programme d’implémentation de 4–6 semaines : les 3–5 changements les plus impactants livrés directement dans votre thème, mesurés avant et après.',
          'Contrat de croissance récurrent — $3,000–$8,000/mois. CRO, performance et Klaviyo en continu, avec une roadmap mensuelle, une cadence de tests et un accès direct.',
        ],
      },
      {
        q: 'Dans combien de temps voit-on des résultats ?',
        a: 'L’audit tombe en 2–3 jours, et les premiers résultats du sprint partent généralement dans les deux premières semaines d’implémentation. Mais soyons honnêtes : un programme de tests a besoin d’environ 90 jours avant de pouvoir lire le programme plutôt qu’un résultat isolé. Quiconque vous promet une hausse de conversion dès le premier mois décrit de la saisonnalité, pas du travail.',
        detail: [
          'Jours 1–3 : audit, accord sur la base de référence, roadmap priorisée',
          'Semaines 1–2 : première vague de correctifs livrée et en ligne',
          'Semaines 3–8 : cycles de test, restitutions, impact de CA qui se compose',
        ],
      },
      {
        q: 'Sur quelles plateformes travaillez-vous ?',
        a: 'Shopify, c’est mon terrain de jeu — OS 2.0 et Shopify Plus, Liquid, Shopify Functions, sections sur mesure, headless Hydrogen/Oxygen quand ça le justifie, et des boutiques Jamstack (Astro). Je prends aussi les migrations WooCommerce et BigCommerce vers Shopify Plus.',
        detail: [
          'Boutique : Shopify OS 2.0, Shopify Plus, Hydrogen, Astro/Jamstack',
          'Data & tracking : GA4, Meta Graph API, Conversions API, GTM, Shopify Web Pixels',
          'Rétention : flux Klaviyo, SMS, fidélité et intégrations d’abonnement',
        ],
      },
      {
        q: 'Pouvez-vous travailler avec notre équipe dans un autre fuseau horaire ?',
        a: 'Oui. Je suis en UTC+8, ce qui chevauche la soirée de la côte Est américaine, la matinée européenne et la journée APAC. Les échéances de sprint et les incidents ne respectent pas les fuseaux horaires, alors je garde une trace écrite asynchrone — walkthroughs Loom, notes écrites et tableau partagé — pour que rien ne dépende du fait que nous soyons éveillés au même moment.',
        detail: [],
      },
      {
        q: 'De quels accès avez-vous besoin pour démarrer ?',
        a: 'Un accès en lecture suffit pour démarrer : votre propriété GA4, votre compte Meta Ads Manager et un accès collaborateur Shopify. Je n’ai pas besoin — et ne demanderai pas — de votre mot de passe Meta ni de droits admin complets dès le premier jour. Un staging ou un thème dupliqué est préférable, pour que votre boutique en ligne continue de tourner pendant que je travaille.',
        detail: [
          'Propriété GA4 (lecteur)',
          'Meta Ads Manager (accès lecture annonceur)',
          'Accès collaborateur Shopify, ou une branche de thème dupliquée',
          'Accès en lecture au compte Klaviyo pour le travail de rétention',
        ],
      },
      {
        q: 'Travaillez-vous sous NDA ?',
        a: 'Toujours, et c’est le standard par défaut. La plupart des missions que je mène sont sous NDA, parce que le travail est commercialement sensible. Je publierai des études de cas anonymisées avec les vrais chiffres intacts — vos données, vos métriques, votre marque enlevées.',
        detail: [],
      },
      {
        q: 'Comment prouvez-vous qu’un changement a réellement fonctionné ?',
        a: 'Nous fixons la base de référence avant le premier changement, puis nous suivons le taux de conversion, le CA par session, les CWV terrain au p75 (LCP, INP, CLS), le taux de perte clic-landing et le taux de chargeback. Si un test perd, il est annulé. Zéro victoire de vanity, zéro capture d’écran d’un bon jour.',
        detail: [],
      },
      {
        q: 'Pouvez-vous garantir une hausse du taux de conversion ?',
        a: 'Non, et vous devriez vous méfier de quiconque le promet. Ce que je garantis, c’est le process : une base de référence documentée, une roadmap priorisée, des changements livrés dans votre thème, et une mesure qui confirme ou tue chaque hypothèse. La hausse est un résultat — pas une clause contractuelle.',
        detail: [],
      },
      {
        q: 'Vous faites seulement de la stratégie, ou vous implémentez vraiment ?',
        a: 'J’implémente. Une stratégie confiée à une équipe interne meurt généralement dans le backlog, surtout quand le correctif est une boucle Liquid, un événement Meta ou un flux Klaviyo. J’écris le code, je le livre dans un thème de staging, puis je transmets un walkthrough Loom et des notes écrites pour que votre équipe en reste propriétaire.',
        detail: [],
      },
      {
        q: 'Nous travaillons déjà avec une agence Shopify. Pouvez-vous quand même aider ?',
        a: 'Oui, et c’est un chemin très balisé. Je travaille en white-label pour les agences qui ont besoin d’une capacité senior en CRO et performance sans recruter — votre équipe garde la relation client, je fais l’audit et l’implémentation, tout est livré sous votre marque. C’est aussi comme ça que je garde un pipeline solide sans monter d’équipe commerciale.',
        detail: [],
      },
      {
        q: 'Nous sommes une petite boutique. Est-ce que ça en vaut la peine pour nous ?',
        a: 'Honnêtement, souvent non. En dessous d’environ $50,000/mois de revenus, les honoraires représenteraient un pourcentage significatif de la marge, et le correctif le moins cher reste généralement un bon thème Shopify gratuit plus une session CRO ciblée. Je vous le dirai dès le premier appel plutôt que de vous vendre un contrat que vous ne pouvez pas justifier.',
        detail: [],
      },
      {
        q: 'Nous n’avons pas encore de trafic payant. Pouvez-vous aider ?',
        a: 'Sur la boutique, la vitesse et la CRO — oui, absolument. Sur l’efficacité de la dépense pub et la récupération des clics perdus — pas encore, parce qu’il n’y a pas de données de clics à rapprocher. Commencez par l’audit, rendez le site rapide et prêt à convertir, et revenez sur le trafic payant quand il y aura du budget derrière.',
        detail: [],
      },
      {
        q: 'Que se passe-t-il après la fin de la mission ?',
        a: 'Vous gardez tout : le code, le Liquid, les flux Klaviyo, les événements GA4, la documentation et le dispositif de mesure. Le contrat récurrent est une commodité, pas un verrouillage. Si le travail ne paie pas, la sortie ne doit pas être la partie la plus dure.',
        detail: [],
      },
    ] as { q: string; a: string; detail: string[] }[],
    cta: {
      heading: 'Votre question n’est pas sur cette page',
      lead:
        'Parfait — c’est généralement qu’elle est la plus intéressante. Envoyez-la avec l’URL de votre boutique et j’y répondrai avec du concret, pas une plaquette commerciale.',
    },
  },

  contact: {
    meta: {
      title: 'Travaillons ensemble | Architecture DTC & conseil en croissance | Naif',
      description:
        'Contactez Naif pour l’architecture de boutique Shopify/Jamstack à ticket élevé, la CRO des landing pages pub Meta, les systèmes de rétention Klaviyo et le conseil en croissance.',
    },
    eyebrow: 'Engagement de croissance DTC & contrats',
    heading: 'Travaillons ensemble / Architecture DTC & conseil',
    lead:
      'Je m’associe aux marques DTC à ticket élevé, aux fondateurs de marques de luxe e-commerce et aux opérateurs transfrontaliers en croissance pour construire des boutiques qui convertissent, éliminer les fuites publicitaires et protéger la santé du vendeur.',
    channelsHeading: 'Canaux directs',
    emailLabel: 'E-mail pro :',
    githubLabel: 'Profil GitHub :',
    availabilityLabel: 'Disponibilité & fuseaux horaires :',
    availability:
      'Ouvert aux audits d’architecture DTC, aux sprints de conversion et aux contrats de conseil en croissance. Chevauchement flexible avec les équipes de marque aux US, en Europe et en APAC.',
    offeringsHeading: 'Offres d’engagement principales',
    offerings: [
      {
        title: 'Architecture de boutique à ticket élevé',
        body: 'Développements sur mesure Shopify OS2.0 & Jamstack avec direction artistique anti-slop en 6 shots.',
      },
      {
        title: 'CRO des landing pages pub Meta/Google',
        body: 'On fait tomber la perte clic-landing sur mobile de plus de 25% sous les 8%.',
      },
      {
        title: 'Rétention par le cycle de vie Klaviyo',
        body: 'Séquences de welcome qui convertissent, abandon de navigation et rétention VIP.',
      },
      {
        title: 'Conformité d’expédition & bouclier anti-chargeback',
        body: 'On anticipe les litiges PayPal & Stripe en alignant les promesses numériques sur la livraison réelle du colis.',
      },
    ],
  },

  rfq: {
    badge: 'Consultation architecture DTC & croissance',
    heading: 'Lancez un audit d’architecture DTC ou un contrat de conseil',
    lead:
      'Qu’il s’agisse d’une ré-architecture Shopify à ticket élevé, d’une accélération des landing pages pub Meta ou de flux de rétention Klaviyo automatisés, prenez contact ci-dessous. Réponse directe sous 24 heures.',
    nameLabel: 'Votre nom *',
    companyLabel: 'Marque / URL de boutique / Société *',
    emailLabel: 'E-mail professionnel *',
    contactLabel: 'Telegram / WhatsApp / Téléphone',
    scopeLabel: 'Type d’engagement / Périmètre',
    budgetLabel: 'Délai visé & budget mensuel',
    messageLabel: 'URL de la boutique, GMV mensuel actuel & goulots d’étranglement clés *',
    namePlaceholder: 'ex. Alex Morgan',
    companyPlaceholder: 'ex. Amesha Energy / marque.com',
    emailPlaceholder: 'alex@marque.com',
    contactPlaceholder: '@pseudo ou téléphone',
    scopePlaceholder: 'ex. Boutique Shopify ticket élevé / CRO landing pub Meta / Flux Klaviyo',
    budgetPlaceholder: 'ex. Immédiat / sprint à $3k-$10k ou contrat de conseil',
    messagePlaceholder:
      'Décrivez brièvement votre marque, votre GMV mensuel actuel, vos plateformes publicitaires et vos principaux goulots d’étranglement de conversion ou de rétention...',
    confidentiality: 'Confidentialité stricte : PI & NDA protégés',
    submitting: 'Connexion à la passerelle edge...',
    success:
      '<strong>Demande reçue !</strong> Merci {name}. Votre demande de projet a bien été enregistrée. J’examine vos besoins et je vous réponds par e-mail ({email}) sous 24 heures.',
    failure:
      '<strong>Erreur lors de l’envoi de la demande :</strong> {error}. Vous pouvez aussi m’écrire directement à <a href="mailto:dewellsmell@gmail.com" class="underline text-white">dewellsmell@gmail.com</a>.',
  },

  products: {
    meta: {
      title: 'Études de cas DTC en production & systèmes de croissance | Naif',
      description:
        'Explorez les études de cas DTC en production par Naif. Architecture de boutique à ticket élevé, réduction de la perte de clics pub Meta et moteurs de rétention Klaviyo automatisés.',
    },
    eyebrow: 'Systèmes DTC & portfolio de croissance',
    heading: 'Études de cas DTC en production & architectures d’entonnoir',
    lead:
      'Une sélection d’architectures en production, d’études de cas CRO et de solutions d’infrastructure de rétention. Chaque projet met en avant des hausses de conversion réelles, une défense du trafic publicitaire et des résultats business mesurables.',
    allSystems: 'Tous les systèmes',
  },

  productDetail: {
    stackLabel: 'Stack tech principal :',
    benchmarkLabel: 'Référence de performance :',
    targetLabel: 'Cible de déploiement :',
    targetValue: 'Shopify & Edge CDN',
    highlightsHeading: 'Innovations clés & capacités de croissance',
    inquire: 'Demandez un devis sur une architecture similaire',
    back: '← Retour à tous les projets',
    specsHeading: 'Architecture système & paramètres techniques',
    walkthroughHeading: 'Détail de l’étude de cas & impact engineering',
    footerNote: 'Architecture de croissance DTC • Ouvert aux audits de marque & au conseil',
  },

  postDetail: {
    badge: 'Whitepaper d’architecture',
    crumb: 'Écriture technique',
    authorRole: 'Ingénieur logiciel full-stack & architecte serverless',
    authorBio:
      'Spécialisé dans les plateformes Jamstack sub-100ms, les architectures Islands zero-JS et l’optimisation des coûts cloud sur Cloudflare Edge.',
    workWithMe: 'Travaillons ensemble →',
    metaTitleSuffix: 'Écriture technique | Naif',
    metaFallback: 'Plongée au fond de l’architecture web moderne et de l’ingénierie système par Naif.',
  },

  resources: {
    meta: {
      title: 'Ressources d’ingénierie DTC & de commerce mondial curatées | Naif',
      description:
        'Un répertoire trié à la main de 24 outils développeur de référence, d’infrastructures serverless edge, de suites de diagnostic réseau et de plateformes d’intelligence du commerce mondial.',
    },
    badge: 'Boîte à outils technique vérifiée • 24 utilitaires curatés',
    headingLead: 'Ingénierie de référence &',
    headingHighlight: 'outils d’intelligence',
    lead:
      'Une collection méticuleusement curatée d’utilitaires de production que j’utilise au quotidien : des suites de diagnostic Core Web Vitals sub-seconde aux registres de connaissements du commerce mondial et aux plateformes cloud edge Anycast.',
    allResources: 'Toutes les ressources',
    categories: {
      performance: 'Performance web & audits',
      edge: 'Cloud edge & serverless',
      diagnostics: 'Diagnostic e-mail & réseau',
      intelligence: 'Commerce mondial & intelligence',
    },
    launch: 'Ouvrir',
    openInNewTab: 'Ouvrir {name}',
    diagnosticCta: {
      heading: 'Besoin d’un audit expert avec ces outils ?',
      body: 'Lancer l’audit, c’est facile. Transformer les données en une roadmap d’ingénierie sans interruption de service, non — cela demande une vision système à travers la performance, la réputation e-mail et l’infrastructure cloud.',
      button: 'Réserver une revue d’architecture',
    },
    entries: [
      {
        key: 'psi',
        name: 'Google PageSpeed Insights',
        url: 'https://pagespeed.web.dev/',
        domain: 'pagespeed.web.dev',
        category: 'performance',
        description:
          'La référence faisant autorité pour les Core Web Vitals mobile et desktop (LCP, INP, CLS), appuyée sur les vraies données terrain du Chrome User Experience Report.',
      },
      {
        key: 'wpt',
        name: 'WebPageTest',
        url: 'https://www.webpagetest.org/',
        domain: 'webpagetest.org',
        category: 'performance',
        description:
          'Profilage de performance approfondi multi-sites avec throttling de connexion, émulation de ralentissement CPU, filmstrips vidéo et comparaison visuelle.',
      },
      {
        key: 'urlscan',
        name: 'URLScan.io',
        url: 'https://urlscan.io/',
        domain: 'urlscan.io',
        category: 'performance',
        description:
          'Un scanner navigateur isolé qui analyse et enregistre toutes les requêtes HTTP, les scripts de tracking tiers, les en-têtes de sécurité et les mutations du DOM.',
      },
      {
        key: 'gtmetrix',
        name: 'GTmetrix',
        url: 'https://gtmetrix.com/',
        domain: 'gtmetrix.com',
        category: 'performance',
        description:
          'Une suite de tests de vitesse synthétiques qui fournit des vues en cascade, des chronologies de génération de page et des insights d’optimisation actionnables.',
      },
      {
        key: 'yellowlab',
        name: 'Yellow Lab Tools',
        url: 'https://yellowlab.tools/',
        domain: 'yellowlab.tools',
        category: 'performance',
        description:
          'Un auditeur de qualité de code front-end qui détecte les arbres DOM profonds, les sélecteurs CSS complexes, les mauvaises pratiques JavaScript et les goulots d’étranglement de rendu des web fonts.',
      },
      {
        key: 'speedvitals',
        name: 'SpeedVitals Global TTFB Test',
        url: 'https://speedvitals.com/ttfb-test',
        domain: 'speedvitals.com',
        category: 'performance',
        description:
          'Mesure le Time to First Byte (TTFB) en parallèle sur plus de 35 points edge dans le monde pour évaluer l’efficacité du cache CDN et la latence de l’origine.',
      },
      {
        key: 'cfworkers',
        name: 'Cloudflare Workers & Pages',
        url: 'https://workers.cloudflare.com/',
        domain: 'workers.cloudflare.com',
        category: 'edge',
        description:
          'Un environnement d’exécution serverless déployé dans plus de 300 villes Anycast, exécutant du JavaScript/Wasm léger avec zéro démarrage à froid de conteneur.',
      },
      {
        key: 'astro',
        name: 'Astro Web Framework',
        url: 'https://astro.build/',
        domain: 'astro.build',
        category: 'edge',
        description:
          'Le framework web moderne conçu pour les sites orientés contenu, pionnier de l’architecture Islands qui livre du HTML pur avec une hydratation client sélective.',
      },
      {
        key: 'resend',
        name: 'Resend',
        url: 'https://resend.com/',
        domain: 'resend.com',
        category: 'edge',
        description:
          'Une API d’e-mail transactionnel pensée pour les développeurs, avec templating React Email, des endpoints REST fulgurants et une délivrabilité à toute épreuve.',
      },
      {
        key: 'upstash',
        name: 'Upstash',
        url: 'https://upstash.com/',
        domain: 'upstash.com',
        category: 'edge',
        description:
          'Une infrastructure de données native edge : Redis serverless, files de messages (QStash) et Kafka, avec des API HTTP/REST stateless pour les edge workers.',
      },
      {
        key: 'turso',
        name: 'Turso (libSQL)',
        url: 'https://turso.tech/',
        domain: 'turso.tech',
        category: 'edge',
        description:
          'Une base de données distribuée propulsée par libSQL, qui réplique les données SQLite mondialement au plus près des utilisateurs edge pour des lectures locales en moins d’une milliseconde.',
      },
      {
        key: 'keystatic',
        name: 'Keystatic',
        url: 'https://keystatic.com/',
        domain: 'keystatic.com',
        category: 'edge',
        description:
          'Un CMS headless versionné sur Git qui écrit des fichiers JSON, YAML et Markdoc structurés directement dans votre dépôt GitHub.',
      },
      {
        key: 'mailtester',
        name: 'Mail-Tester',
        url: 'https://www.mail-tester.com/',
        domain: 'mail-tester.com',
        category: 'diagnostics',
        description:
          'Évalue la délivrabilité des e-mails sortants en vérifiant les enregistrements SPF, la signature DKIM, l’alignement DMARC et les règles SpamAssassin.',
      },
      {
        key: 'mxtoolbox',
        name: 'MxToolbox',
        url: 'https://mxtoolbox.com/',
        domain: 'mxtoolbox.com',
        category: 'diagnostics',
        description:
          'Plateforme complète de diagnostic réseau : lookup MX, propagation DNS, test de handshake SMTP et plus de 100 listes noires e-mail mondiales.',
      },
      {
        key: 'ssllabs',
        name: 'Qualys SSL Labs',
        url: 'https://www.ssllabs.com/ssltest/',
        domain: 'ssllabs.com',
        category: 'diagnostics',
        description:
          'Analyse approfondie de n’importe quel serveur SSL/TLS public : évaluation des chaînes de certificats, de la force des suites de chiffrement, du forward secrecy et de l’exposition aux vulnérabilités.',
      },
      {
        key: 'securityheaders',
        name: 'SecurityHeaders.com',
        url: 'https://securityheaders.com/',
        domain: 'securityheaders.com',
        category: 'diagnostics',
        description:
          'Audit instantané des en-têtes de sécurité des réponses HTTP, dont CSP, HSTS, Permissions-Policy et Referrer-Policy.',
      },
      {
        key: 'dnsviz',
        name: 'DNSViz',
        url: 'https://dnsviz.net/',
        domain: 'dnsviz.net',
        category: 'diagnostics',
        description:
          'Un outil de visualisation interactif qui analyse la santé de la chaîne DNS et DNSSEC, la délégation chiffrée et le statut des serveurs autoritatifs.',
      },
      {
        key: 'bgpview',
        name: 'BGPView',
        url: 'https://bgpview.io/',
        domain: 'bgpview.io',
        category: 'diagnostics',
        description:
          'Inspecteur de routage BGP en temps réel qui révèle la propriété des ASN, les annonces de préfixes, le peering Anycast et les points d’échange Internet internationaux.',
      },
      {
        key: 'importyeti',
        name: 'ImportYeti',
        url: 'https://www.importyeti.com/',
        domain: 'importyeti.com',
        category: 'intelligence',
        description:
          'Base de données interrogeable de millions d’enregistrements douaniers américains en fret maritime, pour identifier de vrais fournisseurs d’usine, partenaires OEM et routes logistiques de concurrents.',
      },
      {
        key: 'metalib',
        name: 'Meta Ad Library',
        url: 'https://www.facebook.com/ads/library/',
        domain: 'facebook.com/ads/library',
        category: 'intelligence',
        description:
          'Archive interrogeable de tous les visuels publicitaires commerciaux qui tournent sur Facebook, Instagram, Messenger et Audience Network.',
      },
      {
        key: 'adstransparency',
        name: 'Google Ads Transparency Center',
        url: 'https://adstransparency.google.com/',
        domain: 'adstransparency.google.com',
        category: 'intelligence',
        description:
          'La bibliothèque officielle de transparence des annonceurs, couvrant les campagnes search, YouTube et display sur le réseau Google mondial.',
      },
      {
        key: 'wipo',
        name: 'WIPO Global Brand Database',
        url: 'https://branddb.wipo.int/',
        domain: 'branddb.wipo.int',
        category: 'intelligence',
        description:
          'Le portail mondial de recherche de marques, couvrant les enregistrements internationaux du Système de Madrid et les offices nationaux de PI de toutes les régions.',
      },
      {
        key: 'builtwith',
        name: 'BuiltWith',
        url: 'https://builtwith.com/',
        domain: 'builtwith.com',
        category: 'intelligence',
        description:
          'Un profileur de technologies web qui révèle le CMS, le CDN, le code de tracking, les passerelles de paiement et les pixels pub derrière n’importe quel domaine cible.',
      },
      {
        key: 'similarweb',
        name: 'Similarweb',
        url: 'https://www.similarweb.com/',
        domain: 'similarweb.com',
        category: 'intelligence',
        description:
          'Plateforme d’intelligence de marché digital : benchmarks de trafic, sources de referral, géographie de l’audience et répartition des intentions de recherche.',
      },
    ] as ResourceEntry[],
  },
} as const;

export type PageStrings = typeof pages;
