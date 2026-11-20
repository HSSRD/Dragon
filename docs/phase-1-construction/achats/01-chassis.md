# 01 — Châssis (frame)

[← Doc globale](../README.md) · [Challenge global](../challenge-2026-11-20.md)

> **Révision 2026-11-20 :** on achète le **kit ARF** et non le cadre seul → [ADR-003](../../decisions/ADR-003-kit-arf-vs-piece-par-piece.md). Le poids du cadre a été corrigé : **610 g** au lieu de ~400 g.

## Rôle
Le châssis est la structure qui porte tout. Son **empattement** (distance en diagonale entre deux moteurs) fixe la taille maximale des hélices. Celle-ci fixe la poussée possible, donc la charge qu'on pourra embarquer plus tard.

## Spécifications cibles
- Empattement **450–500 mm**, hélices **10"**.
- Bras en carbone (rigidité → moins de vibrations → meilleurs réglages).
- Fixation moteur compatible 2216 : X500 V2 = **16×16 et 19×19 mm** ✅.
- Platine pour le contrôleur de vol.
- **Rails / plateforme de charge utile** : X500 V2 = rails de 10 mm × 250 mm ✅.
- Train d'atterrissage haut.

## Options comparées

| Option | Matière | Poids cadre | Charge utile | Points forts | Points faibles | Prix constaté |
|---|---|---|---|---|---|---|
| **Holybro X500 V2 — kit ARF** | Carbone (tubes de 16 mm + raccords nylon) | 610 g ✅ (+ propulsion) | ✅ rails, plateforme | Moteurs, ESC, hélices et PDB inclus et assortis | ESC basiques, pas de module de puissance | 329 $ HT Holybro ✅ · 349,90 € Studiosport (rupture) ✅ |
| Holybro X500 V2 — cadre seul | idem | 610 g ✅ | ✅ | Libre choix de la propulsion | Plus cher au total (voir ADR-003) | 135 $ HT ✅ · 159,20 € Studiosport (rupture) ✅ · 112,75 £ Unmanned Tech ✅ |
| S500 générique | Nylon + carbone | ~400 g 🟡 | ✅ train haut | 3× moins cher | Qualité variable, aucune doc PX4 dédiée | 40–70 € 🟡 |
| F450 générique | Nylon/fibre + circuit imprimé | ~280 g 🟡 | ⚠️ | Très bon marché | Souple (vibrations), à bricoler pour la charge utile | 20–40 € 🟡 |

## Recommandation
**Kit ARF Holybro X500 V2.**

## Challenge (renforcé)
- **« 610 g, c'est lourd pour un cadre. »**
  - Oui, c'est 50 % de plus qu'un S500.
  - C'est le prix des rails, de la plateforme et du train haut.
  - Avec la poussée réelle des moteurs (1 332 g chacun), le ratio reste supérieur à 3 en phase 1. **Pas bloquant.**
- **« Les pièces de rechange sont en rupture chez Holybro. »**
  - Tubes de bras, raccords nylon et plaques étaient **en rupture au 2026-11-20** ✅.
  - C'est **le vrai risque** de ce choix : un crash qui casse un raccord immobilise le drone.
  - **Parade :**
    1. Commander 2 tubes et 4 raccords dès qu'ils reviennent.
    2. Sinon, les tubes de 16 mm sont un format standard (carbone 16×14 mm en vente libre) : vérifier le diamètre intérieur au pied à coulisse.
- **« Un S500 à 50 € fait le même travail. »**
  - Pour voler, oui.
  - Mais on perd la doc PX4 écrite pour ce cadre, les rails de charge utile et la propulsion assortie.
  - L'économie réelle n'est que de ~100 € une fois les moteurs et ESC ajoutés.
- **Ce qui ferait changer d'avis :**
  - kit introuvable pendant plus de 4 semaines ;
  - ou budget total inférieur à 900 € → S500 + moteurs 2216 de marque.

## Pièges
- Vis moteur trop longues → elles touchent les bobinages → court-circuit.
- Frein-filet sur les vis métal/métal.
- Les ESC du kit ARF sont **déjà montés sur les bras** : ne pas les arracher en serrant les tubes.

## Où acheter
> Les liens Amazon, AliExpress et Leboncoin sont des **recherches**, pas des produits précis : vérifier la référence exacte (ARF ≠ cadre seul ≠ PX4 Dev Kit) et le vendeur.

| Produit | Boutique spécialisée (page vérifiée) | Amazon | AliExpress | Leboncoin (occasion) |
|---|---|---|---|---|
| X500 V2 kit ARF | [Holybro (officiel)](https://holybro.com/products/x500-v2-kits) · [Studiosport](https://www.studiosport.fr/holybro-x500-v2-kit-arf/) | [recherche](https://www.amazon.fr/s?k=holybro+x500+v2) | [recherche](https://fr.aliexpress.com/w/wholesale-holybro-x500-v2.html) | [recherche](https://www.leboncoin.fr/recherche?text=x500%20holybro) |
| X500 V2 cadre seul | [Studiosport](https://www.studiosport.fr/kit-x500-v2-holybro-a30133.html) · [Unmanned Tech (UK)](https://www.unmannedtechshop.co.uk/products/holybro-x500-v2-500mm-quadcopter-frame) | — | — | — |
| Pièces de rechange X500 V2 | [Holybro](https://holybro.com/products/spare-parts-x500-v2-kit) | — | [tube carbone 16 mm](https://fr.aliexpress.com/w/wholesale-carbon-tube-16mm.html) | — |
| S500 (alternative) | — | [recherche](https://www.amazon.fr/s?k=chassis+s500+quadcopter) | [recherche](https://fr.aliexpress.com/w/wholesale-s500-frame-quadcopter.html) | [recherche](https://www.leboncoin.fr/recherche?text=chassis%20drone%20s500) |

## Validation à réception
- [ ] Toutes les pièces du bordereau sont présentes (photo dans le journal).
- [ ] Bras sans fissure, raccords nylon intacts.
- [ ] Cadre monté pesé, poids reporté au bilan.
