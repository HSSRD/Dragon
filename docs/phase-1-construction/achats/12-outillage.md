# 12 — Outillage & consommables

[← Doc globale](../README.md) · [Challenge global](../challenge-2026-11-20.md)

> **Révision 2026-11-20 :**
> - La puissance réelle du Pinecil dépend de son alimentation.
> - Le smoke stopper coûte ~5 € (et non 10–15 €).
> - Le kit ARF réduit les soudures, mais il en reste.

## Rôle
Monter, souder, mesurer et réparer **en sécurité**.

## Soudures restantes avec la configuration révisée
| Soudure | Difficulté |
|---|---|
| Prise de la batterie | ✅ **évitée** : on achète des packs déjà en XT60, et le PM02 est livré avec ses câbles XT60 |
| Fils moteur ↔ ESC, si non connectorisés sur le kit *(à vérifier)* | 🟠 |
| Récepteur ELRS → câble JST-GH du Pixhawk | 🟠 soudure fine |
| Réparation d'un fil après un crash | 🟠 |

## Outillage

| Élément | Spécification | Priorité | Prix constaté |
|---|---|---|---|
| **Fer à souder** Pinecil V2 | **~50–64 W avec un chargeur USB-C PD 65 W ; 72–92 W avec une alimentation 24 V** ✅ | 🔴 | 26–36 $ chez Pine64 ✅ (+ alimentation) |
| ou station 80 W+ (type T12) | Plus de réserve thermique pour le XT60 / 12 AWG | 🔴 | 40–70 € 🟡 |
| Étain 63/37 avec flux, Ø 0,8 mm | — | 🔴 | ~10 € 🟡 |
| Flux en seringue | — | 🔴 | 5–10 € 🟡 |
| **Multimètre** | Continuité sonore, tension DC | 🔴 | UNI-T UT33B+ ~13 € 🟡 |
| **Smoke stopper XT60** | Fusible réarmable + LED | 🔴 | **5,29 €** Amass, Rotorama ✅ |
| Tournevis hexagonaux 1,5 / 2 / 2,5 / 3 mm | — | 🔴 | 15–30 € 🟡 |
| Pinces coupante et à dénuder | — | 🔴 | ~15 € 🟡 |
| Troisième main | — | 🟠 | 10–20 € 🟡 |
| Thermomètre infrarouge | Surveiller ESC et moteurs (fiche 05) | 🟠 | 10–20 € 🟡 |
| Lunettes de protection | — | 🔴 | ~5 € |

## Consommables
XT60 mâle/femelle, fil silicone 12 AWG, gaine thermorétractable, frein-filet bleu, colliers, scratch, entretoises M3, vis de rechange : **~40–60 €** au total 🟡.

## Challenge (renforcé)
- **« Le Pinecil suffit pour un XT60 ? »**
  - Avec un **chargeur de téléphone ordinaire** (souvent 20–30 W) : **non**, il chauffera mal → soudure froide.
  - Avec un chargeur USB-C PD **65 W** : ~50–64 W, **juste** pour le 12 AWG avec une panne large.
  - Avec une **alimentation 24 V** : 72–92 W ✅.
  - → Budgéter l'alimentation, ou prendre une station de 80 W et plus.
- **« Le smoke stopper à 5 €, c'est sérieux ? »** C'est un fusible réarmable. Il protège à la première mise sous tension, pas en vol. Pour 5 €, aucune raison de s'en passer.
- **« Outillage d'occasion ? »** **Oui** : Leboncoin pour la station de soudage, le multimètre et la troisième main. Pas pour l'étain (qualité inconnue).
- **« Je sais souder, je peux sauter l'entraînement ? »** Faire quand même **un XT60 d'essai sur du 12 AWG**. C'est la soudure la plus difficile du projet, et une soudure froide se paie en vol.

## Où acheter

| Produit | Boutique (page vérifiée) | Amazon | AliExpress | Leboncoin (occasion OK) |
|---|---|---|---|---|
| Pinecil V2 | [Pine64 (officiel)](https://pine64.com/product/pinecil-smart-mini-portable-soldering-iron/) · [doc puissance](https://pine64.org/documentation/Pinecil/Power_supplies/Watts/) | [recherche](https://www.amazon.fr/s?k=pinecil+v2) | [recherche](https://fr.aliexpress.com/w/wholesale-pinecil-v2.html) | [recherche](https://www.leboncoin.fr/recherche?text=pinecil) |
| Station de soudage T12 | — | [recherche](https://www.amazon.fr/s?k=station+soudure+t12) | [recherche](https://fr.aliexpress.com/w/wholesale-t12-soldering-station.html) | [recherche](https://www.leboncoin.fr/recherche?text=station%20de%20soudure) |
| Smoke stopper XT60 | [Rotorama — Amass](https://www.rotorama.com/product/smoke-stopper-amass-xt60) | [recherche](https://www.amazon.fr/s?k=smoke+stopper+xt60) | [recherche](https://fr.aliexpress.com/w/wholesale-smoke-stopper-xt60.html) | — |
| Multimètre | — | [recherche](https://www.amazon.fr/s?k=multimetre+uni-t) | [recherche](https://fr.aliexpress.com/w/wholesale-uni-t-multimeter.html) | [recherche](https://www.leboncoin.fr/recherche?text=multimetre) |
| Connecteurs XT60 (lot) | — | [recherche](https://www.amazon.fr/s?k=xt60+amass+lot) | [recherche](https://fr.aliexpress.com/w/wholesale-amass-xt60.html) | — |
| Fil silicone 12 AWG | — | [recherche](https://www.amazon.fr/s?k=fil+silicone+12+awg) | [recherche](https://fr.aliexpress.com/w/wholesale-silicone-wire-12awg.html) | — |

## Validation
- [ ] XT60 d'entraînement sur du 12 AWG : soudure brillante, tient à la traction.
- [ ] Smoke stopper testé.
