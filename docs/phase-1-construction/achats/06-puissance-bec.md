# 06 — Distribution de puissance, module de puissance & BEC

[← Doc globale](../README.md) · [Challenge global](../challenge-2026-11-20.md)

> **Révision 2026-11-20 :**
> - Le kit ARF contient une **PDB** (XT60 en entrée) **mais pas de module de puissance** ✅.
> - Le PM02 n'est **pas** dans la boîte de base du Pixhawk 6C : il faut prendre la version « avec PM02 ».

## Rôle
1. **Distribution** : répartir le courant vers les 4 ESC. → la PDB du kit.
2. **Mesure** : tension et courant, pour le failsafe batterie et le retour au point de départ (RTL) au bon moment. → le module de puissance.
3. **Régulation** : 5 V propre pour le FC. → le module de puissance. Puis 5 V / 5 A pour le Raspberry Pi en phase 3. → un BEC séparé.

## Faits vérifiés ✅
| Produit | Caractéristiques | Prix |
|---|---|---|
| **PM02 V3 12S** | 2–12S, 60 A en continu, 100 A en pointe (< 60 s), 5,2 V / 3 A. **Mais les fils XT60 et 12 AWG fournis sont donnés pour 30 A en continu / 60 A en pointe** | 18,99 $ HT ; +18,99 $ dans le bundle 6C ([Holybro](https://holybro.com/products/pm02-v3-12s-power-module)) |
| PM06 V2-14S | 2–14S, 60 A, PDB intégrée, 24 g | ~21 $ (déduit du prix du bundle) |

## Le calcul qui fâche
- Courant total : **~15 A en stationnaire**, **~65 A à plein gaz** (4 × 16,4 A).
- Fils du PM02 : 30 A en continu / 60 A en pointe.
- **À plein gaz soutenu, on dépasse la tenue des fils fournis.**
- En pratique, un drone de vidéo/cartographie ne reste jamais plein gaz plus de quelques secondes, mais **il faut le savoir**.
- **Parade (au choix) :**
  1. limiter les gaz max dans le FC (par exemple 85 %) ;
  2. ou refaire les fils en 10 AWG et la prise en XT90 (plus lourd).
- On garde **les fils d'origine pour la phase 1** et on contrôle leur température après les vols agressifs.

## Recommandation
- **Pixhawk 6C en version « avec PM02 V3 »** : connecteur dédié, déjà calibré.
- On garde la PDB du kit ARF pour la distribution.
- **BEC 5 V 5 A** à acheter pour la phase 3. **Pas urgent** : reporter l'achat permet d'attendre de connaître la vraie consommation du Raspberry Pi et de la caméra.

## Challenge (renforcé)
- **« Le PM06 (PDB intégrée) serait plus propre ? »** Le kit ARF a déjà une PDB. Le PM06 ferait doublon, à remplacer. **Non.**
- **« Acheter le BEC tout de suite pour réserver la place ? »**
  - La v1 le recommandait. Revu : il suffit de **réserver un emplacement** sur la plateforme et de le noter dans le journal.
  - Le choix exact (5 A ? 8 A ? Pi 5 + caméra + capteurs ?) se fera mieux en phase 3. Les BEC 12S coûtent 10–25 € et sont toujours en stock.
- **« Prendre le 5 V du FC pour le Raspberry Pi ? »** Non. Le PM02 fournit 3 A pour le FC et ses périphériques. Un Pi 5 peut tirer 3–5 A. Une chute de tension → redémarrage du FC → chute du drone.

## Pièges
- **Inversion de polarité = destruction.**
- Calibrer le capteur de courant : comparer les mAh consommés (FC) aux mAh rechargés (chargeur).

## Où acheter

| Produit | Boutique spécialisée (page vérifiée) | Amazon | AliExpress | Leboncoin |
|---|---|---|---|---|
| Holybro PM02 V3 12S | [Holybro](https://holybro.com/products/pm02-v3-12s-power-module) (ou dans le bundle [Pixhawk 6C + PM02](https://holybro.com/products/pixhawk-6c)) | [recherche](https://www.amazon.fr/s?k=holybro+pm02) | [recherche](https://fr.aliexpress.com/w/wholesale-holybro-pm02.html) | — |
| BEC 5 V 5 A (phase 3) | — | [recherche](https://www.amazon.fr/s?k=ubec+5v+5a) | [recherche](https://fr.aliexpress.com/w/wholesale-ubec-5v-5a.html) | — |

## Validation
- [ ] Continuité : pas de court-circuit entre + et −.
- [ ] Première mise sous tension **via smoke stopper**.
- [ ] Tension lue par le FC = tension au multimètre ±0,1 V.
- [ ] Après 3 vols : mAh FC ≈ mAh rechargés ±10 %.
