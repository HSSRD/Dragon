# 03 — Moteurs brushless

[← Doc globale](../README.md) · [Challenge global](../challenge-2026-11-20.md)

> **Révision 2026-11-20 :**
> - Les moteurs sont **inclus dans le kit ARF** → [ADR-003](../../decisions/ADR-003-kit-arf-vs-piece-par-piece.md).
> - La poussée max a été corrigée : **1 332 g** (et non ~1 000 g).

## Rôle
Les moteurs font tourner les hélices. Un moteur est désigné par :
- la **taille du stator** : « 2216 » = 22 mm de diamètre × 16 mm de hauteur ;
- le **KV** : tours/min par volt, à vide.

> ⚠️ **Incohérence à lever avant la commande.**
> - Holybro annonce des moteurs **KV920** dans le kit ARF.
> - La page Studiosport du même kit (vérifiée le 2026-11-20) liste « 4 x Moteur Holybro 2216 **KV880** ».
>
> → **Demander au vendeur** quelle version est livrée. En KV880, la poussée max serait un peu plus faible (estimation non sourcée : ~10 %). Le ratio resterait supérieur à 2,5.

## Le moteur du kit : fiche vérifiée ✅
Le « Holybro 2216 KV920 » est un **T-Motor AIR2216 II KV920 rebadgé** :
- 64 g ;
- pic de 17 A pendant 180 s ;
- 272 W.

Source : [fiche Holybro](https://cdn.shopify.com/s/files/1/0604/5905/7341/files/X500MotorSpec.png?v=1678791632).

Poussée avec des hélices T1045 II à 16 V :

| Gaz | Poussée | Courant |
|---|---|---|
| 50 % | 447 g | 3,6 A |
| 70 % | 814 g | 7,9 A |
| 80 % | 993 g | 10,6 A |
| **100 %** | **1 332 g** | **16,37 A** |

## Calcul de validation (avec les vraies valeurs)
- Poids phase 1 : ~1,6–1,7 kg. Avec la charge des phases 3–4 : ~1,9–2,0 kg (voir [bilan révisé](../challenge-2026-11-20.md#bilan-de-poids-révisé-estimation)).
- Poussée totale : 4 × 1 332 = **5,3 kg** → ratio **3,1–3,4** en phase 1, **~2,7** en phases 3–4 ✅ (seuil : 2).
- Stationnaire : ~420 g par moteur, soit **~50 % des gaz, ~3,6 A par moteur** ✅ (zone efficace).
- Courant total à plein gaz : ~65 A, pendant quelques secondes seulement. Les conséquences sont dans les fiches 05 et 06.

## Options comparées

| Option | Poussée max 1045/4S | Points forts | Points faibles | Prix constaté |
|---|---|---|---|---|
| **Moteurs du kit ARF** | 1 332 g ✅ | Inclus, assortis au cadre et aux ESC | — | inclus (rechange : 19,99 $ HT ✅ / 29,90 € Studiosport ✅) |
| T-Motor AIR2216 II (le même, de marque) | identique | Même moteur sous sa marque d'origine | Plus cher | 🟡 *(à vérifier)* |
| Générique « A2212 1000KV » | ~800 g (souvent surévalué) 🟡 | 8 € pièce | Roulements et fiabilité aléatoires | 30–50 € les 4 🟡 |

## Recommandation
Les moteurs du kit, plus **1 moteur de rechange** (un CW ou un CCW). C'est la pièce qui empêche de voler si elle casse.

## Challenge (renforcé)
- **« Acheter un moteur de rechange, c'est du gaspillage ? »** À ~30 €, il évite d'attendre 2–3 semaines après un crash. Un moteur abîmé (axe tordu, roulement) est la casse la plus fréquente après les hélices. **Recommandé, pas obligatoire.**
- **« Passer en 6S pour plus d'efficacité ? »** Le moteur 920 KV en 6S avec du 1045 dépasserait sa puissance max, et les ESC du kit sont limités à 3–4S ✅. **Non.**
- **« Et si la charge future dépasse 800 g ? »** Holybro annonce soit ~1 kg, soit 1,5 kg de charge utile : **ses deux pages se contredisent** ✅. On reste prudent sur ~800 g. Au-delà → 2814/700 KV + 12" et un nouveau cadre.

## Pièges
- Vis de fixation trop longues → bobinages abîmés.
- Sens de rotation : se règle dans l'ESC ou en croisant 2 fils. **À vérifier sans hélices.**

## Où acheter

| Produit | Boutique spécialisée (page vérifiée) | Amazon | AliExpress | Leboncoin |
|---|---|---|---|---|
| Moteur 2216 KV920 Holybro (rechange) | [Holybro](https://holybro.com/products/spare-parts-x500-v2-kit) · [Studiosport](https://www.studiosport.fr/moteur-2216-920kv-pour-x500-ou-s500-holybro-a24760.html) | [recherche](https://www.amazon.fr/s?k=moteur+2216+920kv) | [recherche](https://fr.aliexpress.com/w/wholesale-2216-920kv-motor.html) | [recherche](https://www.leboncoin.fr/recherche?text=moteur%202216%20920kv) |
| T-Motor AIR2216 II KV920 | — | [recherche](https://www.amazon.fr/s?k=t-motor+air2216) | [recherche](https://fr.aliexpress.com/w/wholesale-t-motor-air2216.html) | — |

## Validation à réception
- [ ] Rotation libre à la main, sans point dur.
- [ ] Pas de jeu axial excessif.
- [ ] Résistance des 3 phases identique au multimètre.
