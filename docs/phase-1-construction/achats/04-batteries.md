# 04 — Batteries

[← Doc globale](../README.md) · [Challenge global](../challenge-2026-11-20.md)

> **Révision 2026-11-20 :**
> - Beaucoup de packs 4S 5 000 mAh sont vendus en **XT90 ou EC5**, pas en XT60.
> - Un pack pèse **430–550 g** selon le modèle.
> - Il est recommandé d'en acheter **3** plutôt que 2.

## Rôle
La batterie est la source d'énergie et l'élément le plus lourd. Rappels :
- **4S** = 14,8 V nominal, 16,8 V à pleine charge.
- Capacité en mAh.
- **C** = multiplicateur du courant max.

## Spécifications cibles
- **LiPo 4S, 5 000 mAh** : le X500 V2 accepte de 3 000 à 5 000 mAh, 20C minimum, en XT60 ✅.
- **≥ 25C** : 5 Ah × 25 = 125 A ≫ 65 A à plein gaz ✅.
- **XT60** : c'est la prise de la PDB du kit ✅. Sinon, il faut changer la prise.
- Dimensions : vérifier qu'elle entre dans la baie et sous les sangles du kit (~140 × 45 × 35 mm).
- **Poids : le plus léger possible**. C'est le premier levier sur l'autonomie et le ratio poussée/poids.

## Options comparées

| Option | Poids | Prise | Prix constaté |
|---|---|---|---|
| **Tattu 4S 5 200 mAh 35C XT60** | ~422–437 g 🟡 | XT60 ✅ | 56–63 $ (USA) 🟡 ; prix FR *(à vérifier)* |
| GNB/Gaoneng BA-1 4S 5 000 40C XT60 | ~475 g 🟡 | XT60 | *(à vérifier)* |
| CNHL Black 4S 5 000 40C | ~548 g 🟡 | **XT90 / EC5** ❌ | 27–37 $ 🟡 (entrepôt UE) |
| Gens Ace 4S 5 000 45C | ~550 g 🟡 | EC5 ❌ | 84,90 € flashrc 🟡 |
| Générique AliExpress 4S 5 000 XT60 | ? | XT60 | 52–60 € ✅ (vu sur la recherche AliExpress) |
| Li-ion 4S2P 21700 | plus léger à énergie égale | — | pour les phases 4–5 |

## Recommandation
- **2 ou 3 LiPo 4S 5 000–5 200 mAh XT60, de marque, < 480 g** (par exemple la Tattu 5 200 35C XT60).
- Si on prend une batterie en XT90 ou EC5 (CNHL, moins chère), il faut **changer la prise** : une soudure de puissance de plus, à faire au smoke stopper.

## Challenge (renforcé)
- **« Une CNHL à 30 $, c'est 2× moins cher ! »**
  - Oui, mais elle pèse ~120 g de plus que la Tattu, ce qui coûte ~1 min de vol et réduit la marge de poussée.
  - Et il faut changer la prise.
  - **Acceptable** si le budget prime et qu'on sait souder un XT60 sur du 10–12 AWG.
- **« 2 batteries suffisent ? »**
  - ~15 min de vol chacune, et ~1 h de recharge avec un chargeur de 100 W sur secteur.
  - Deux batteries = ~30 min de vol par sortie. Pour un autotune et des tests, c'est **juste**.
  - → 3 batteries, ou une 3ᵉ achetée après les premiers vols.
- **« Une batterie générique AliExpress ? »**
  - La capacité et le C annoncés sont souvent surévalués.
  - Une LiPo est l'élément qui peut **mettre le feu chez toi**.
  - **Déconseillé.** Si malgré tout : mesurer la résistance interne à réception (avec le chargeur) et rejeter les packs dont les cellules diffèrent de plus de 0,01 V.
- **« LiPo d'occasion sur Leboncoin ? »** **Jamais.** Historique inconnu.
- **Ce qui ferait changer d'avis :** les phases 4–5 (missions longues, vol calme) → Li-ion 4S2P, plus léger à énergie égale.

## Sécurité (non négociable)
- Jamais sous **3,5 V par cellule** en vol (régler l'alarme et le failsafe batterie du FC).
- Stockage à **3,8 V par cellule**.
- Charge dans un **sac ignifuge**, sous surveillance.
- Batterie gonflée, percée ou crashée → retirée du service.

## Où acheter
> Liens de recherche : vérifier **4S, 5 000 mAh, prise XT60, poids**. Pas de batterie d'occasion.

| Produit | Boutique spécialisée | Amazon | AliExpress | Leboncoin |
|---|---|---|---|---|
| Tattu 4S 5 200 35C XT60 | *(à trouver au moment de l'achat)* | [recherche](https://www.amazon.fr/s?k=tattu+4s+5200mah+xt60) | [recherche](https://fr.aliexpress.com/w/wholesale-tattu-4s-5200mah.html) | ⛔ pas d'occasion |
| LiPo 4S 5 000 XT60 (toutes marques) | — | [recherche](https://www.amazon.fr/s?k=lipo+4s+5000mah+xt60) | [recherche](https://fr.aliexpress.com/w/wholesale-lipo-4s-5000mah.html) ✅ | ⛔ |
| CNHL 4S 5 000 (XT90, prise à changer) | [CNHL (officiel)](https://chinahobbyline.com/products/cnhl-black-series-5000mah-14-8v-4s-40c-lipo-battery-with-xt90-plug) | [recherche](https://www.amazon.fr/s?k=cnhl+4s+5000mah) | — | ⛔ |

## Validation à réception
- [ ] Tension par cellule identique à ±0,02 V.
- [ ] Aucune déformation.
- [ ] Batteries numérotées (B1, B2…), suivi des cycles dans le journal.
- [ ] **Pesée** reportée au bilan.
