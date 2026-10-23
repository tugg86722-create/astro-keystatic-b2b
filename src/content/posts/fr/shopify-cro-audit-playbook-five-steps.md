---
title: "Le playbook d’audit CRO Shopify : les 5 étapes que je lance sur chaque boutique avant d’écrire la moindre ligne de code"
publishedDate: 2026-10-21
author: Naif
summary: La séquence d’audit en cinq étapes exacte que je lance avant de toucher un thème — du rapprochement des clics jusqu’à la revue de conformité d’expédition — et pourquoi l’ordre compte plus que les tactiques.
coverImage: https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80
---

La plupart des audits CRO échouent dès la première étape, non parce que l’auditeur est mauvais, mais parce que la séquence est mauvaise. Les équipes commencent par les heatmaps parce que les heatmaps sont amusants. Elles commencent par une refonte de thème parce que la refonte est le livrable que tout le monde veut voir. Les deux sont la mauvaise porte.

Voici la séquence que je lance sur chaque boutique avant d’écrire la moindre ligne de code.

---

## Étape 1 — Rapprocher les clics des arrivées

Avant tout le reste : **combien de clics votre plateforme publicitaire vous a-t-elle facturés, et combien de personnes sont réellement arrivées ?**

Récupérez les clics sortants Meta dans Ads Manager. Récupérez les vues de page d’atterrissage dans GA4. Comparez les deux chiffres sur la même fenêtre de 30 jours.

| Écart | Ce que ça veut dire | Où regarder |
|---|---|---|
| Sous 8% | Sain | Rien — passez à la suite |
| 8–15% | Sous contrôle | Dérive de tracking, perte d’attribution mineure |
| 15–30% | Élevé | Perte réelle plus écart de mesure |
| Plus de 30% | Critique | L’argent part avant que la page ne s’affiche |

Cette seule comparaison détermine si votre premier projet est un projet de performance ou un projet d’analytics — et se tromper, c’est six semaines passées à optimiser la mauvaise couche.

**Pourquoi l’ordre compte :** si vous refaites un thème pour une boutique dont le vrai problème est un dédoublonnage CAPI cassé, vous livrerez un site magnifique, rapide et parfaitement instrumenté qui continue de rapporter le même chiffre d’affaires — et vous aurez l’air d’avoir échoué.

---

## Étape 2 — Établir la base de référence en données terrain

Les données de laboratoire, c’est un laboratoire. Les données terrain, c’est vos clients.

Ouvrez CrUX pour vos 20 premières URL, pas seulement la home. Regardez le p75, pas la moyenne — le p75, c’est l’expérience de votre quartile le plus médiocre, et c’est là que se loge la perte de revenus.

Vérifiez ensuite les trois Core Web Vitals au niveau terrain :

- **LCP** — l’image hero est-elle bien l’élément LCP, et est-elle préchargée ?
- **INP** — quelle est l’interaction la plus longue ? Un widget d’avis, un sélecteur de taille, un picker de variante ?
- **CLS** — est-ce que quelque chose repousse le contenu après le premier rendu ? Généralement une bannière à chargement tardif, un bandeau cookies ou un swap de police.

Enregistrez la base de référence. Écrivez-la. C’est le chiffre sur lequel on vous jugera, et c’est la seule façon défendable de revendiquer une hausse plus tard.

---

## Étape 3 — Cartographier les fuites, pas les pages

La plupart des audits listent toutes les pages. C’est une liste, pas un diagnostic.

Construisez plutôt une carte des fuites : pour chaque étape de l’entonnoir, quel est le taux de perte, et quelle est la cause mécanique la plus probable ?

```
Clic pub → Vue d'atterrissage   (perte : audit de perte de clics)
Atterrissage → Ajout au panier    (perte : clarté de l'offre, choc de prix, visibilité de l'ATC)
ATC → Checkout                    (perte : friction du tiroir panier, création de compte imposée)
Checkout → Achat                  (perte : surprise du seuil de livraison, friction de paiement)
Achat → Réachat                  (perte : pas de flux post-achat, pas de relance réassort)
```

Un chiffre par étape, une hypothèse par étape. C’est tout l’audit. Tout le reste est du commentaire.

---

## Étape 4 — Vérifier la chaîne des promesses

C’est l’étape que presque tous les audits techniques sautent, et c’est celle qui détermine si une marque à ticket élevé grandit ou se fait purger.

Parcourez toute la chaîne des promesses pour vos trois SKU principaux :

1. **La promesse de la pub** — qu’est-ce que la création revendique ?
2. **La promesse de l’atterrissage** — le premier écran confirme-t-il cette promesse ou la contredit-il ?
3. **La promesse de la fiche produit** — les images, le copy et les specs soutiennent-ils la pub ?
4. **La promesse du panier** — une surprise sur le prix, la livraison ou les droits de douane ?
5. **La promesse du colis** — la boîte est-elle à la hauteur de l’attente ?

Toute rupture dans cette chaîne est une demande de remboursement qui s’annonce, et à 99 $ et plus, une demande de remboursement vous coûte bien plus que la valeur de la commande une fois comptés la livraison, les frais de paiement et le temps de support.

---

## Étape 5 — Classer par impact sur le CA rapporté à l’effort

Maintenant, et seulement maintenant, vous rédigez des recommandations.

Évaluez chaque correctif candidat sur deux axes :

- **Impact sur le CA** — si c’est corrigé, combien de CA mensuel bouge ?
- **Effort** — heures d’ingénierie, plus le risque, plus le temps de vérification

Tout ce qui est à fort impact et faible effort part en semaine 1. C’est généralement trois à cinq changements, et cela représente typiquement 60% du gisement disponible.

Tout ce qui est à fort impact et fort effort part sur la roadmap, avec une date explicite et un responsable explicite. Si ça n’a pas les deux, ce n’est pas une recommandation, c’est un vœu pieux.

---

## À quoi doit ressembler le livrable

Un deck de 50 slides n’est pas un audit. C’est une manière d’éviter la responsabilité.

Un livrable d’audit utile, c’est :

- **Une page de chiffres** — la base de référence, dans un tableau
- **Une liste classée** — chaque correctif, noté par impact et effort
- **Une page par item du top 3** — le changement spécifique, avec le code ou l’instruction, et le plan de mesure
- **Une séquence sur 90 jours** — ce qui part en semaine 1, mois 1, mois 3

C’est tout. Si le livrable est plus long que le travail qu’il décrit, vous avez écrit une plaquette commerciale.

---

## La question que personne ne pose

Avant de livrer, posez au client une seule question : **« Si on met tout ce rapport en œuvre et que rien ne change, qu’aurons-nous appris ? »**

Si la réponse est « on saura exactement où est la fuite », l’audit valait le coup. Si la réponse est « on aura un document », il ne valait pas le coup — et vous auriez dû leur vendre un sprint, parce qu’un sprint livre des correctifs au lieu de les décrire.

---

*Lancez l’[Auditeur de perte de clics](/fr/tools/click-loss-auditor/) gratuit pour obtenir votre chiffre d’étape 1 en moins d’une minute, ou le [Calculateur ROI pub & latence](/fr/tools/) pour chiffrer le versant latence du même problème.*
