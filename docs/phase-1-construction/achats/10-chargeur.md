# 10 — Chargeur LiPo & accessoires de batterie

[← Doc globale](../README.md) · [Challenge global](../challenge-2026-11-20.md)

> **Révision 2026-11-20 :** la puissance **sur secteur (AC)** est souvent bien inférieure à la puissance annoncée, qui correspond au mode alimentation externe (DC). Valeurs vérifiées ci-dessous.

## Rôle
Charger **en équilibrant les cellules**, mettre en tension de stockage, mesurer la résistance interne (RI).

## Le besoin chiffré
- Charger un pack 4S 5 000 mAh à 1C demande 16,8 V × 5 A ≈ **84 W**.
- En dessous, la charge est simplement plus lente. Exemple : à 50 W, ~0,6C, soit **~1 h 40** par pack.

## Options comparées (puissance secteur vs alimentation externe)

| Option | Sur secteur (AC) | En DC (alimentation externe) | Prix constaté |
|---|---|---|---|
| **ToolkitRC M6AC** | **100 W** ✅ | 300 W ✅ | **63,29 €** Rotorama (en stock) ✅ · 69,90 € ailleurs 🟡 |
| ToolkitRC M8AC | **200 W** 🟡 | 600 W 🟡 | 104–112 € 🟡 |
| ISDT 608AC | **50 W** 🟡 | 200 W | 55–70 € 🟡 |
| SkyRC B6AC Neo | 60 W 🟡 | 200 W | ~67 € 🟡 |
| ISDT Q6 Nano / SkyRC B6 Neo | **aucune** (DC seulement) | 200 W | 30–45 € + alimentation ; Q6 Nano arrêté chez certains revendeurs 🟡 |

## Recommandation
**ToolkitRC M6AC** : 100 W sur secteur, c'est assez pour charger un pack à 1C en ~1 h. Il mesure la RI. ~63 €.

## Challenge (renforcé)
- **« Le M8AC pour charger 2 packs plus vite ? »**
  - Il donne 200 W sur secteur, mais n'a qu'**une seule sortie** : il ne charge pas 2 packs en même temps sans carte de charge parallèle.
  - La charge parallèle a ses propres risques.
  - **+45 € sans vrai gain en phase 1.**
- **« L'ISDT 608AC est plus compact. »** 50 W sur secteur : 1 h 40 par pack. Il faudrait une alimentation 24 V en plus pour en profiter. **Non.**
- **« Un clone B6 à 25 € ? »** C'est l'appareil qui touche 75 Wh d'énergie **chez toi**. **Non.**
- **« Chargeur d'occasion ? »**
  - **Acceptable pour une marque reconnue** (ToolkitRC, ISDT, SkyRC original).
  - Tester sur une batterie surveillée, et vérifier que l'équilibrage affiche des écarts < 0,01 V.
- **« Sac ignifuge de 6 € ? »** Le format S (100 × 200 mm) est **trop petit** pour un pack de 5 000 mAh. Prendre au moins 2 tailles au-dessus, ou une malle LiPo.

## Accessoires

| Élément | Pourquoi | Prix constaté |
|---|---|---|
| **Sac ignifuge** (assez grand pour 2–3 packs) | Contient un départ de feu | 15–25 € 🟡 (T2M ~21 € chez RC Team 🟡) |
| Testeur LiPo (BX100 ou équivalent) | Tension par cellule sur le terrain | 2–5 € 🟡 |
| Câble de charge XT60 | Souvent fourni | ~5 € |

## Règles de charge
- 1C par défaut, toujours en mode **équilibré**.
- Jamais sans surveillance, jamais une batterie encore chaude.
- Stockage à 3,8 V par cellule.

## Où acheter

| Produit | Boutique spécialisée (page vérifiée) | Amazon | AliExpress | Leboncoin (occasion OK) |
|---|---|---|---|---|
| ToolkitRC M6AC | [Rotorama](https://www.rotorama.com/product/toolkitrc-m6ac-100-300w) | [recherche](https://www.amazon.fr/s?k=toolkitrc+m6ac) | [recherche](https://fr.aliexpress.com/w/wholesale-toolkitrc-m6ac.html) | [recherche](https://www.leboncoin.fr/recherche?text=toolkitrc) |
| ToolkitRC M8AC | — | [recherche](https://www.amazon.fr/s?k=toolkitrc+m8ac) | [recherche](https://fr.aliexpress.com/w/wholesale-toolkitrc-m8ac.html) | — |
| Sac ignifuge LiPo | [Powair6 (taille S, trop petit pour nous)](https://www.powair6.com/fr/accessoires-batteries/40701-balystik-sac-ignifuge-pour-batterie-lipo-taille-s.html) | [recherche](https://www.amazon.fr/s?k=sac+ignifuge+lipo) | [recherche](https://fr.aliexpress.com/w/wholesale-lipo-safe-bag.html) | — |
| Testeur LiPo | — | [recherche](https://www.amazon.fr/s?k=testeur+lipo+bx100) | [recherche](https://fr.aliexpress.com/w/wholesale-lipo-checker.html) | — |

## Validation
- [ ] Charge équilibrée complète : 16,8 V, écart entre cellules < 0,01 V.
- [ ] Mode stockage testé.
- [ ] RI de chaque batterie notée dans le journal.
