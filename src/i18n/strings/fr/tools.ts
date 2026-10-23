export const tools = {
  roi: {
    meta: {
      title: 'Calculateur de gaspillage ROI pub & performance web | Naif | Architecte DTC',
      description:
        'Calculez la part de votre budget publicitaire mensuel perdue à cause de la latence de chargement mobile. Calculateur interactif de fuite de ROI, fondé sur les travaux de Google & Cloudflare sur les Core Web Vitals.',
    },
    badge: 'Moteur de corrélation latence / impact (Google & Cloudflare)',
    headingLead: 'Performance web &',
    headingHighlight: 'gaspillage de ROI pub',
    headingTail: 'Calculateur',
    lead:
      'Un chargement mobile lent ne fait pas qu’agacer vos visiteurs — il brûle votre capital marketing payant. Mesurez comment la latence gonfle vos taux de rebond, jette vos clics payants avant le premier rendu, et calculez le gain financier exact du passage à une architecture Jamstack sub-1.0s.',
    switcher: {
      clickLoss: 'Auditeur de perte de clics',
      scorecard: 'Scorecard de risque de chargeback',
      roi: 'Calculateur ROI pub & latence',
      clickLossDesc: 'Rapprochez les clics sortants Meta des vues de page d’atterrissage GA4 et chiffrez l’écart.',
      scorecardDesc: 'Huit questions, un score de santé du vendeur, et le correctif pour chaque signal d’alerte.',
      roiDesc: 'Chiffrez le coût du temps de chargement mobile en budget pub gaspillé et en commandes perdues.',
    },
    inputsHeading: 'Données de campagne & de latence',
    reset: 'Réinitialiser les valeurs par défaut',
    fields: {
      spend: 'Budget pub mensuel payé ($)',
      cpc: 'CPC moyen ($ USD)',
      loadTime: 'Temps de chargement mobile actuel (secondes)',
      cvr: 'Taux de conversion mobile actuel (%)',
    },
    scale: {
      spend: ['$500', '$50,000', '$100,000+'],
      cpc: ['$0.20', '$5.00', '$15.00'],
      loadTime: ['0.8s (Jamstack)', '3.0s', '7.0s (sévère)'],
      cvr: ['0.2%', '2.5%', '6.0%'],
    },
    groundTruth: {
      title: 'Modèle de données de référence',
      body: 'Fondé sur la télémétrie mobile de Google Research & SOASTA : 53% des visites mobiles sont abandonnées si la page met plus de 3 secondes à charger ; le taux de conversion perd jusqu’à 4.42% par seconde de retard supplémentaire.',
    },
    results: {
      wastedTitle: 'Budget pub mensuel gaspillé',
      wastedDesc: 'Capital estimé perdu en rebonds avant même le rendu de la page sur mobile 4G.',
      wastedAnnualLabel: 'Perte annualisée :',
      bouncedTitle: 'Clics abandonnés / mois',
      bouncedDesc: 'Sur {total} visites payantes, autant ont rebondi à cause des blocages de rendu sur mobile.',
      penaltyLabel: 'Pénalité de rebond mobile :',
      recoveredTitle: 'Conversions récupérables',
      recoveredDesc: 'Clients incrémentaux projetés, captés avec une diffusion edge Jamstack sub-1.0s.',
      recoveredAnnualLabel: 'Commandes annuelles estimées :',
      valueTitle: 'Gain de ROI annuel projeté',
      valueDesc: 'Valeur calculée du trafic conservé + multiplicateur de taux de conversion sub-seconde.',
      paybackLabel: 'Période de retour sur l’architecture :',
      paybackValue: '< 30 jours',
      pills: {
        optimal: 'Vitesse edge optimale',
        moderate: 'Friction modérée',
        severe: 'Abandon massif',
        critical: 'Gaspillage critique du budget',
      },
      latencyLabels: {
        high: 'Latence élevée / goulot d’étranglement',
        moderate: 'Vitesse moyenne',
      },
    },
    benchmark: {
      heading: 'Différentiel latence / conversion',
      indexLabel: 'Indice Google SOASTA',
      currentLabel: 'Latence de l’infrastructure actuelle :',
      targetLabel: 'L’architecture Jamstack edge de Naif :',
      currentNote: 'Frais d’hydratation élevés, bundles JS bloquants, allers-retours base de données.',
      targetNote: 'HTML pré-rendu sur 300+ nœuds edge, First Contentful Paint instantané, démarrages à froid à 0ms.',
    },
    roadmap: {
      heading: 'Feuille de route de remédiation architecturale',
      items: [
        {
          title: '1. Élimination du TTFB edge',
          body: 'Remplacer le parsing base de données du serveur d’origine par du HTML edge pré-rendu via Cloudflare Workers, pour ramener le TTFB sous les 60ms dans le monde entier.',
        },
        {
          title: '2. Suppression de l’hydratation Zero-JS',
          body: 'Migrer les scripts lourds de SPA ou de thème WooCommerce/Shopify vers les Astro Islands, éliminant plus de 90% des blocages du main thread côté client.',
        },
        {
          title: '3. Transcodage automatisé des images',
          body: 'Servir des assets AVIF/WebP responsives via Cloudflare Images, calés exactement sur le DPR physique de l’écran, avec zéro layout shift (CLS = 0).',
        },
        {
          title: '4. RFQ & checkout serverless',
          body: 'Router les leads de formulaire et les commandes de façon asynchrone via des files cloud (Cloudflare Queues/KV), avec des réponses garanties sous 100ms.',
        },
      ],
    },
    cta: {
      heading: 'Arrêtez de brûler votre budget pub',
      body: 'Demandez un audit complet de latence et une proposition de migration pour votre boutique ou votre app.',
    },
  },

  clickLoss: {
    meta: {
      title: 'Auditeur de perte de clics — Rapprochez les clics sortants Meta des vues de page d’atterrissage GA4 | Naif',
      description:
        'Outil gratuit : rapprochez les clics sortants Meta Ads des vues de page d’atterrissage GA4 pour mesurer la perte de clics réelle, le budget pub gaspillé et le CA récupérable. Il vous dit si la fuite vient du rendu ou de l’attribution.',
    },
    badge: 'Moteur de rapprochement Meta Graph API × GA4',
    heading: 'Auditeur de perte de clics',
    reset: 'Réinitialiser les valeurs par défaut',
    lead:
      'Votre plateforme publicitaire dit que vous avez acheté 40 000 clics. Votre analytique dit que 31 000 personnes sont arrivées. Cet écart de 9 000, c’est de l’argent déjà payé et que vous n’avez jamais eu l’occasion de vendre — et la plupart des marques en accusent la fatigue créative. Cet outil mesure la perte réelle, la chiffre, et vous dit s’il s’agit d’un problème de rendu ou d’un artefact de mesure.',
    inputsHeading: 'Données de rapprochement',
    fields: {
      outbound: 'Clics sortants Meta / mois',
      lpv: 'Vues de page d’atterrissage GA4 / mois',
      cpc: 'Coût moyen par clic ($)',
      loadTime: 'Temps de chargement mobile de la landing page (s)',
      cvr: 'Taux de conversion de la landing page (%)',
      aov: 'Panier moyen ($)',
    },
    hints: {
      outbound: 'Meta Ads Manager → Ads Manager → Columns → Outbound clicks (toutes les campagnes, 30 derniers jours).',
      lpv: 'GA4 → Reports → Acquisition → Traffic acquisition → Session source/medium = Meta → Landing page + session starts.',
      loadTime: 'Vérifiez avec PageSpeed Insights (mobile, throttled) ou les données terrain CrUX pour l’URL visée par vos pubs.',
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
      lossTitle: 'Taux réel de perte de clics',
      lossDesc: 'Sur {total} clics payants, autant n’ont jamais produit de vue de page d’atterrissage.',
      benchmarkLabel: 'Référence du secteur :',
      benchmarkValue: '25%+ en pratique',
      wastedTitle: 'Budget pub gaspillé / mois',
      wastedDesc: 'Capital payé pour {clicks} clics qui n’ont jamais affiché la moindre page.',
      wastedAnnualLabel: 'Annualisé :',
      ordersTitle: 'Commandes récupérables / mois',
      ordersDesc: 'Commandes captées si vous refermez l’écart pour atteindre la cible sous 8%.',
      ordersAnnualLabel: 'Commandes annuelles :',
      revenueTitle: 'CA récupérable / mois',
      revenueDesc: 'Le CA issu du même budget media, moins la même dépense.',
      revenueAnnualLabel: 'Gain annualisé :',
      pills: {
        critical: 'Fuite critique',
        elevated: 'Perte élevée',
        guarded: 'Sous contrôle',
        healthy: 'Sain',
      },
    },
    diagnosis: {
      heading: 'Diagnostic de la cause racine',
      types: {
        rendering: 'Perte au rendu',
        attribution: 'Artefact de mesure',
        mixed: 'Cause mixte',
        guarded: 'Sous contrôle',
        healthy: 'Entonnoir sain',
      },
      summaries: {
        rendering:
          'Votre landing page est assez lente pour que de vrais visiteurs partent avant le rendu. C’est de la demande réellement perdue, pas un artefact de reporting.',
        attribution:
          'Votre page se charge vite, donc l’écart n’est pas un problème de rebond. Il s’agit très probablement d’un échec de tracking et d’attribution — vous payez des clics que GA4 n’enregistre jamais, ce qui signifie aussi que votre ROAS est faux.',
        mixed:
          'Les deux facteurs sont en jeu : certains visiteurs rebondissent vraiment sur un temps de chargement moyen, et une partie de l’écart relève de la dérive de mesure. Traitez-les dans cet ordre.',
        guarded:
          'Votre taux de perte de clics est proche de la cible sous 8%. L’écart résiduel mérite un contrôle trimestriel plutôt qu’un correctif d’urgence — durcissez le rapprochement de tracking et passez à autre chose.',
        healthy:
          'Votre trafic payant atterrit et est bien enregistré. À ce niveau, le reste du gisement est dans le taux de conversion et le panier moyen, pas dans le rapprochement de trafic.',
      },
      causes: {
        rendering: [
          {
            title: '1. Préchargez l’image hero LCP, retirez les scripts de tag manager qui bloquent le rendu',
            body: 'Différez les pixels non essentiels derrière requestIdleCallback pour que le premier rendu n’attende pas le JS tiers.',
          },
          {
            title: '2. Supprimez le poids des apps et libérez le main thread',
            body: 'Chaque app que vous avez ajoutée charge ses scripts sur tous les templates. Auditez le Total Blocking Time et retirez ou différez les plus coupables.',
          },
          {
            title: '3. Servez de l’AVIF/WebP au DPR exact pour bringuer le CLS à zéro',
            body: 'Le décalage de mise en page pendant le clic publicitaire est l’une des premières causes du rebond en flash blanc sur les navigateurs in-app mobiles.',
          },
        ],
        attribution: [
          {
            title: '1. Rapprochez le signal Meta sous iOS 14.5+ / Consent Mode v2',
            body: 'Vos événements serveur CAPI et vos événements client doivent être dédupliqués sur event_id, sinon GA4 sous-compte les sessions payantes que Meta compte.',
          },
          {
            title: '2. Vérifiez les chaînes de redirection et les pertes de mesure cross-domain',
            body: 'Une pub qui redirige via un raccourcisseur ou un sélecteur de pays casse l’attribution de session — le clic arrive, GA4 ne le voit jamais.',
          },
          {
            title: '3. Filtrez le trafic interne, les refus de consentement et les effets ITP',
            body: 'Safari et les navigateurs in-app suppriment les cookies tiers ; une audience réelle peut ressembler à un écart de mesure.',
          },
          {
            title: '4. Vérifiez que votre URL de landing correspond exactement à la destination de la pub',
            body: 'Un décalage entre l’URL de la pub et l’URL finale scinde silencieusement la session avant qu’elle ne soit comptabilisée.',
          },
        ],
        mixed: [
          {
            title: '1. Corrigez d’abord le chemin de rendu — il explique l’essentiel de l’écart',
            body: 'Votre page dépasse le seuil de 3 secondes où l’abandon mobile grimpe en flèche : une part de cette perte est de la demande réellement perdue.',
          },
          {
            title: '2. Rapprochez ensuite l’écart de tracking',
            body: 'Avec une page rapide, l’écart restant est une histoire de mesure. Comparez les clics sortants Meta aux sessions GA4 et dédupliquez le CAPI sur event_id.',
          },
          {
            title: '3. Lancez l’audit sur vos 5 meilleures landing pages pub, pas seulement sur la boutique',
            body: 'La fuite est rarement uniforme — une seule variante lente peut représenter l’essentiel de la perte.',
          },
        ],
      },
    },
    benchmark: {
      heading: 'Taux de perte de clics face aux références',
      targetLabel: 'Cible < 8%',
      yours: 'Votre boutique :',
      typical: 'Boutique Shopify typique :',
      typicalValue: '20% – 30%',
      target: 'Architecture edge sub-seconde :',
      targetValue: '< 8%',
    },
    gate: {
      heading: 'Obtenez le rapport de rapprochement complet',
      body: 'Détail de l’écart session par session, les chemins exacts des rapports GA4 & Meta, et une séquence de correction sur 90 jours pour votre boutique.',
      newsletterHeading: 'Envoyez-moi le rapport de rapprochement complet',
      newsletterSubheading:
        'Déposez l’URL de votre boutique et je personnaliserai le diagnostic — y compris la page qui fuit le plus.',
      cta: 'Recevoir le rapport',
      note: 'Un rapport, puis Le Rapport sur le Gaspillage Publicitaire chaque semaine. Désinscription quand vous voulez.',
    },
  },

  scorecard: {
    meta: {
      title: 'Scorecard de risque de chargeback — Diagnostic gratuit de la santé du vendeur DTC | Naif',
      description:
        'Diagnostic gratuit en 8 questions qui note votre exposition aux chargebacks, chiffre le risque et vous donne le correctif précis pour chaque signal d’alerte. Bâtit sur la conformité d’expédition, la promesse de livraison et la défense contre les litiges.',
    },
    badge: 'Diagnostic de santé du vendeur · 8 questions',
    headingLead: 'Chargeback',
    headingHighlight: 'Scorecard de risque',
    lead:
      'Un chargeback n’est pas un problème de paiement. C’est un problème de conformité d’expédition qui a été escaladé — et le marchand a généralement les preuves pour le gagner. Huit questions, un score de risque, et le correctif précis pour chaque signal d’alerte que vous croisez. La plupart des marques finissent en moins de trois minutes.',
    exposure: {
      gmv: 'CA mensuel ($)',
      gmvHint: 'Sert à chiffrer l’exposition en dollars.',
      cbRate: 'Taux de chargeback actuel (%)',
      cbRateHint: 'Les réseaux de cartes flaguent un seuil proche de 1%. Consultez le dashboard de votre prestataire.',
      aov: 'Panier moyen ($)',
      aovHint: 'Les litiges sont proportionnels au panier — une commande à $40 est rarement contestée, une commande à $200 l’est.',
    },
    questions: [
      {
        id: 'fulfillment-truth',
        q: 'Ce qui arrive dans le colis correspond-il à ce que la page produit a promis — matière, poids, quantité, finition ?',
        why: 'La conformité d’expédition non respectée est le motif de litige qui croît le plus vite. C’est aussi le plus difficile à défendre, puisque la fiche du marchand fait foi.',
        options: [
          {
            label: 'Oui — nous auditons les expéditions par rapport aux annonces',
            fix: 'Tenez cette ligne. Documentez l’audit pour pouvoir le défendre.',
            score: 0,
          },
          {
            label: 'Partiellement — certaines références sont contrôlées, d’autres pas',
            fix: 'Prenez vos 5 SKU les plus rentables par CA et auditez ceux-là d’abord. Couvrez 80% de votre CA avec la même discipline que le reste.',
            score: 12,
          },
          {
            label: 'Non — les fiches sont rédigées pour convertir, pas pour être exactes',
            fix: 'Le correctif au plus fort levier de cette liste. Réécrivez les 10 pages produits les plus vues pour que chaque promesse du texte soit tenable par le colis.',
            score: 20,
          },
        ],
      },
      {
        id: 'delivery-promise',
        q: 'La date de livraison affichée au checkout correspond-elle à ce que le transporteur livre réellement ?',
        why: 'La livraison en retard est la première cause de chargebacks en mode et en maison. Les acheteurs contestent sur la promesse, pas sur le colis.',
        options: [
          {
            label: 'Oui — la date au checkout est vérifiée auprès du transporteur',
            fix: 'Gardez l’estimation de livraison branchée sur les données live du transporteur, pas sur un buffer statique.',
            score: 0,
          },
          {
            label: 'Nous gonflons l’estimation avec un buffer, mais ne suivons pas le réel',
            fix: 'Commencez à suivre le promettre vs le réel. Un buffer de 3–5 jours calibré sur votre taux de retard réel coûte moins cher que des litiges.',
            score: 10,
          },
          {
            label: 'Non — l’estimation est optimiste et la livraison est systématiquement en retard',
            fix: 'Affichez la fenêtre réelle, même si cela vous coûte quelques clics. Une estimation honnête de 9–12 jours bat une promesse de 5 jours.',
            score: 20,
          },
        ],
      },
      {
        id: 'refund-speed',
        q: 'Quand un client demande un remboursement, en combien de temps l’obtient-il ?',
        why: 'Un remboursement lent transforme une réclamation commerciale en chargeback. L’alternative pour l’acheteur, c’est de laisser expirer le délai et de laisser l’émetteur trancher.',
        options: [
          {
            label: 'Le jour même, automatiquement',
            fix: 'Rien à corriger — cela supprime directement du volume de litiges.',
            score: 0,
          },
          {
            label: 'Sous 3–5 jours ouvrés',
            fix: 'Automatisez les remboursements instantanés sur les 30 premiers jours après livraison, puis transmettez à votre équipe.',
            score: 10,
          },
          {
            label: 'Ça dépend — souvent plus de 10 jours',
            fix: 'Fixez un SLA ferme de 24–48 heures avec approbation automatique sur les cas évidents. À lui seul, cela réduit généralement les litiges d’un tiers.',
            score: 20,
          },
        ],
      },
      {
        id: 'order-comms',
        q: 'Les clients reçoivent-ils automatiquement la confirmation de commande, l’avis d’expédition et un lien de suivi qui fonctionne ?',
        why: 'Le silence après le checkout est ce qui transforme un acheteur neutre en demandeur de litige. Quand il n’entend rien, l’acheteur suppose le pire.',
        options: [
          {
            label: 'Oui — les trois, déclenchés par de vrais événements',
            fix: 'Gardez le flux événementiel, pas calé sur un calendrier fixe.',
            score: 0,
          },
          {
            label: 'Partiellement — confirmation et expédition oui, suivi souvent manquant',
            fix: 'Ajoutez un e-mail avec le numéro de suivi qui part à la création de l’étiquette, pas à la saisie manuelle.',
            score: 8,
          },
          {
            label: 'Non — les clients doivent nous relancer',
            fix: 'Reliez les flux transactionnels Klaviyo à vos événements d’expédition. C’est deux jours de développement, et la réduction de litiges la plus rapide qui existe.',
            score: 16,
          },
        ],
      },
      {
        id: 'expectation-setting',
        q: 'Pour vos articles à prix élevé, existe-t-il une preuve visuelle et matérielle de ce que l’acheteur va recevoir ?',
        why: 'Au-delà d’environ $100, on achète sur les images. Si les images sont stylisées et le colis banal, la demande de remboursement arrive en premier et le litige en second.',
        options: [
          {
            label: 'Oui — vraies photos produit, gros plans, référence d’échelle',
            fix: 'Protégez ce point. Les vraies photos sont aussi votre meilleur actif CRO.',
            score: 0,
          },
          {
            label: 'Uniquement des visuels lifestyle, sans référence d’échelle ni gros plan',
            fix: 'Ajoutez une référence d’échelle et deux gros plans macro par SKU star. C’est moins cher que n’importe quelle remise que vous devrez accorder.',
            score: 10,
          },
          {
            label: 'Des visuels stylisés ou fortement retouchés',
            fix: 'C’est un générateur de litiges direct à ce niveau de panier. Remplacez les visuels retouchés par une photographie non retouchée et fidèle à l’échelle.',
            score: 18,
          },
        ],
      },
      {
        id: 'review-integrity',
        q: 'Vos avis, notes et témoignages sont-ils réels et vérifiables ?',
        why: 'Des avis fabriqués ou incités sont une violation vis-à-vis des réseaux de cartes et des plateformes. La sanction, ce n’est pas seulement une amende — c’est votre capacité à trancher les litiges en votre faveur.',
        options: [
          {
            label: 'Oui — uniquement des avis d’acheteurs vérifiés, aucun avis incentivé',
            fix: 'Gardez la piste de vérification documentée.',
            score: 0,
          },
          {
            label: 'Globalement réels, mais nous avons un programme d’incitation',
            fix: 'Déplacez l’incitation vers un survey post-achat non conditionné à un avis positif, et laissez le corps de l’avis non retouché.',
            score: 14,
          },
          {
            label: 'Nous ne savons pas d’où viennent nos avis',
            fix: 'Auditez l’app d’avis, les blocs d’apps et toute campagne historicisée d’incitation. Supprimez tout ce qui ne peut être rattaché à une commande réelle.',
            score: 20,
          },
        ],
      },
      {
        id: 'dispute-defence',
        q: 'Surveillez-vous les litiges en temps réel et soumettez-vous vos preuves avant la date limite ?',
        why: 'La fenêtre de représentation est courte et la plupart des marchands la ratent par défaut. Une preuve déposée dans les délais gagne ; déposée en retard, non.',
        options: [
          {
            label: 'Oui — nous soumettons des preuves pour chaque litige',
            fix: 'Gardez la bibliothèque de modèles de preuves documentée par catégorie.',
            score: 0,
          },
          {
            label: 'Nous réagissons quand l’e-mail arrive, souvent trop tard',
            fix: 'Constituez un dossier de preuves permanent par catégorie de SKU : commande, suivi, photo de livraison, capture de la fiche. Automatisez le calendrier des échéances.',
            score: 12,
          },
          {
            label: 'Nous les gagnons rarement',
            fix: 'C’est l’élément au plus fort rendement de cette liste. Un dossier de preuves permanent fait généralement la différence entre gagner et perdre un litige.',
            score: 20,
          },
        ],
      },
      {
        id: 'unboxing-parcel',
        q: 'Le colis arrive-t-il dans un état conforme à la promesse de la marque ?',
        why: 'Les dégâts, les coins écrasés et les inserts manquants se lisent comme un produit de faible valeur. L’acheteur conteste la commande et l’expédition d’un seul coup.',
        options: [
          {
            label: 'Oui — l’emballage est testé et protégé',
            fix: 'Tenez cette ligne. Incluez une photo d’unboxing dans votre dossier de preuves.',
            score: 0,
          },
          {
            label: 'Plutôt correct, mais les articles fragiles ou lourds sont le point faible',
            fix: 'Ajoutez des protections d’angle et une spec de chute testée pour les seuls SKU fragiles. Vous n’avez pas besoin de reconditionner tout le catalogue.',
            score: 10,
          },
          {
            label: 'Pas vraiment — nous expédions dans le carton minimum',
            fix: 'Sur les lignes premium et fragiles, l’emballage fait partie du produit. Une pochette et un insert moulé coûtent moins cher qu’un seul chargeback.',
            score: 16,
          },
        ],
      },
    ],
    action: {
      heading: 'Prêt à le noter ?',
      body: 'Vos réponses restent dans le navigateur — rien n’est envoyé tant que vous ne choisissez pas de recevoir le rapport par e-mail.',
      button: 'Calculer mon score de risque',
    },
    results: {
      scoreLabel: 'Score de risque de chargeback',
      outOf: 'sur {max}',
      tiers: {
        critical: 'Exposition critique',
        elevated: 'Exposition élevée',
        moderate: 'Exposition modérée',
        healthy: 'Opération saine',
      },
      verdicts: {
        critical:
          'Vos moteurs de litige sont structurels, pas accidentels. À ce rythme, vous êtes sur une liste de surveillance des réseaux de cartes, et la défense sur laquelle vous comptez — votre propre fiche produit — est précisément ce qui est utilisé contre vous. Corrigez d’abord la conformité d’expédition et la promesse de livraison ; tout le reste est du bruit tant que ces deux points tiennent.',
        elevated:
          'Vous perdez du CA sur des litiges de façon prévisible. La bonne nouvelle : au moins une de vos réponses pointe vers un correctif qui prend des jours, pas des mois. La mauvaise : chaque mois d’attente, les frais de traitement et les bons clients perdus se cumulent.',
        moderate:
          'Vos fondamentaux sont solides et votre risque résiduel se concentre sur un ou deux points. Identifiez-les ci-dessous, corrigez-les, et votre taux de litige devrait retomber sous les 0.2% — la fourchette que les prestataires de paiement considère comme saine.',
        healthy:
          'Votre santé de vendeur est bonne — vous défendez vos litiges et tenez vos promesses. Gardez le dossier de preuves à jour et refaites ce scorecard chaque trimestre, car c’est la dérive de l’expédition, pas de nouveaux concurrents, qui fait sortir les marques de cette catégorie.',
      },
      exposureLabel: 'Exposition annuelle',
      exposureDesc: 'CA menacé à votre taux de litige actuel.',
      recoverableLabel: 'Récupérable / an',
      recoverableDesc: 'Si vous atteignez un taux de litige de 0.1%.',
      disputesLabel: 'Litiges / an',
      disputesDesc: 'À votre taux actuel, hors frais.',
      fixHeading: 'Votre file de correctifs, par impact décroissant',
      fixLead: 'Chaque signal d’alerte est assorti de sa remédiation précise, pas d’un conseil générique.',
      yourAnswer: 'Votre réponse :',
      fixPrefix: 'Correctif :',
      severities: { critical: 'Critique', high: 'Élevé', moderate: 'Modéré' },
      noFlags: 'Aucun signal d’alerte. Toutes les questions sont passées — gardez le dossier de preuves à jour et refaites ce scorecard chaque trimestre.',
      gate: {
        heading: 'Obtenez le rapport complet sur la santé du vendeur',
        subheading:
          'Votre score, le modèle de dossier de preuves par catégorie de SKU, et une séquence de réduction des litiges sur 90 jours pour votre boutique.',
        cta: 'Envoyez-moi le rapport',
        note: 'Un rapport, puis Le Rapport sur le Gaspillage Publicitaire chaque semaine. Désinscription quand vous voulez.',
      },
    },
  },
} as const;

export type ToolStrings = typeof tools;
