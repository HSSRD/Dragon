# Commande Studiosport — panier A (2026-11-20)

> Statut : **commandée**, en attente de livraison.
> Prévu dans : [bom.md § Panier A](../bom.md#panier-a--à-commander-maintenant-en-stock-prix-promo)

| Champ | Valeur |
|---|---|
| Vendeur | studioSPORT (studiosport.fr) |
| Date de commande | 2026-11-20 |
| N° de commande | *(à compléter)* |
| Code promo | *(à compléter : NEWSLETTER10 appliqué ? oui / non)* |
| Frais de port | *(à compléter, gratuit attendu dès 49 € en point relais)* |
| Montant payé | *(à compléter, d'après la facture)* |
| Facture | *(à compléter : chemin du PDF)* |

## Contenu (d'après le récapitulatif de commande)

| # | Article | Réf. Studiosport | Qté | Prix barré | Prix payé TTC |
|---|---|---|---|---|---|
| 1 | Radiocommande Pocket ELRS — RadioMaster, **Charcoal** | AR0053958 | 1 | 77,90 € | 70,11 € |
| 2 | Batteries 18650 3200 mAh — RadioMaster (lot de 2) | AR0063512 | 1 | 14,90 € | 11,92 € |
| 3 | Récepteur RP4TD-M ExpressLRS 2,4 GHz — RadioMaster | AR0058554 | 1 | 22,90 € | 18,32 € |
| 4 | Smoke stopper ShortSaver 2 — Vifly | AR0050802 | 1 | 12,90 € | 10,32 € |
| 5 | Power module PM02 V3 — Holybro | AR0044756 | 1 | 19,90 € | 17,91 € |
| 6 | Module GPS M10 — Holybro | AR0054556 | 1 | 54,90 € | 43,92 € |
| 7 | Sac de sécurité pour batteries LiPo (grand format) | AR0044263 | 1 | — | 17,90 € |
| | **Total articles** | | | 221,30 € | **190,40 €** |

Économie Black Friday : **30,90 €**, hors code promo et port.

## Écarts avec le panier A prévu

| Écart | Conséquence | Action |
|---|---|---|
| Pocket **Charcoal** (70,11 €) au lieu de Transparent (66,22 €) | +3,89 €. La version **LBT** (norme européenne) a été vérifiée pour la référence Transparent (HP0157.0053-LBT), **pas pour la Charcoal** | À la réception, vérifier la mention LBT/EU sur la boîte ou dans le firmware (voir les contrôles ci-dessous) |
| **Hélices 1045 Holybro ×4 absentes** (15,92 €) | Pas d'hélices avant la commande suivante. Ce n'est pas bloquant, car tout le travail sur table se fait hélices démontées | Ajouter **2 lots** d'hélices au panier B |

## Contrôles à la réception

Résultats à noter dans `docs/journal/AAAA-MM-JJ-reception-panier-a.md`.

| Article | Test | Critère de validation |
|---|---|---|
| Colis | Inventaire contre le tableau ci-dessus | 7 lignes présentes, aucun dommage visible |
| Pocket | Boîte ou écran *About* / firmware ELRS | Mention **LBT / EU**. Sinon, flasher un firmware LBT ou retourner l'article |
| Pocket | Mise sous tension avec les 18650 (polarité vérifiée) | Démarre, manches et interrupteurs SA–SE réagissent dans l'écran de test |
| Accus 18650 | Tension au multimètre avant la 1ʳᵉ charge | Les deux entre 3,0 et 4,2 V, avec moins de 0,1 V d'écart entre eux |
| RP4TD-M | Inspection visuelle (le bind se fera au montage) | 2 antennes T et câble présents, connecteurs intacts |
| ShortSaver 2 | Inspection, puis test sur une batterie **sans charge branchée** | LED d'état conforme à la notice, coupure à l'interrupteur |
| PM02 V3 | Inspection | XT60 mâle + femelle et câble 6 broches présents |
| GPS M10 | Inspection | Câble 10 broches (standard Pixhawk) et mât fournis. Noter si le compas est un IST8310 ou un IST8308 |
| Sac LiPo | Inspection | Fermeture intacte, pas de déchirure |

Droit de rétractation : 14 jours après la réception, pour tout article non conforme.

## Black Friday

Ce panier fait moins de 450 € : il **ne participe pas** au tirage « une commande remboursée toutes les 48 h ». Le panier B (≈ 575 € avec les hélices) y serait éligible s'il est commandé **en une seule fois avant le 30/11/2026 à 23h59**. Le kit ARF et le Pixhawk 6C étaient en rupture au 2026-11-20.
