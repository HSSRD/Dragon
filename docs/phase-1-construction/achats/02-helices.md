# 02 — Hélices

[← Doc globale](../README.md) · [Challenge global](../challenge-2026-11-20.md)

> **Révision 2026-11-20 :** le kit ARF contient **6 hélices 1045** ✅ (soit 1,5 jeu). Il reste à acheter du rechange.

## Rôle
Les hélices produisent la poussée. Elles sont désignées par **diamètre × pas** en pouces : « 1045 » = 10" de diamètre, 4,5" de pas.

## Spécifications cibles
- **1045**, 2 CW + 2 CCW par jeu (CW = sens horaire, CCW = sens antihoraire).
- Fixation compatible avec le moteur du kit (hélices à « retainer » fournies avec le kit ✅).
- La fiche de poussée Holybro est mesurée avec des **T-Motor T1045 II** ✅ : ce sont les hélices de référence pour retrouver les chiffres de poussée.

## Options comparées

| Option | Avantages | Inconvénients | Prix |
|---|---|---|---|
| **Hélices 1045 du kit / rechange Holybro** | Identiques à la fiche de poussée, se montent sans adaptation | Disponibilité | 11,59 $ HT les 2 paires (Holybro, en stock) ✅ |
| 1045 plastique génériques (Gemfan, HQProp…) | Pas chères, partout | Axe ou fixation parfois incompatibles avec le retainer ; équilibrage variable | 5–10 €/jeu 🟡 |
| 1045 carbone | Rigide, efficace | Coupe comme un rasoir, transmet les chocs au moteur | 20–40 €/jeu 🟡 |
| 1045 tripale | Plus de poussée | Moins efficace, courant ↑ (ESC 20 A déjà justes) | 8–15 € 🟡 |

## Recommandation
Garder les hélices du kit et ajouter **2 lots de rechange Holybro (= 4 paires)**. C'est le seul modèle qui garantit l'ajustement sur le moteur et les chiffres de poussée.

## Challenge (renforcé)
- **« Pourquoi pas des Gemfan à 5 € ? »** Le moteur du kit utilise un système de fixation spécifique. Une hélice générique peut avoir le mauvais alésage ou une fixation différente. **À ne tester qu'après avoir vérifié l'ajustement sur table**, moteur à l'arrêt.
- **« Pas de tripales pour plus de poussée ? »** **Non** :
  - Les ESC du kit sont donnés pour 20 A, et le moteur tire déjà 16,4 A à plein gaz en bipale.
  - Une tripale augmente le courant et peut dépasser la capacité des ESC.
- **« 6 hélices suffisent ? »** En apprentissage, un atterrissage raté = 1 ou 2 hélices perdues. Prévoir au minimum 8 paires au total.

## Pièges
- **Hélice sur le mauvais moteur ou montée à l'envers → retournement immédiat au décollage.** Vérifier avec le schéma « Quad X » d'ArduPilot/PX4.
- **Ne jamais monter les hélices sur table.**

## Où acheter
> Liens de recherche : vérifier « 1045 », le sens CW/CCW et l'**alésage compatible avec le moteur du X500 V2**.

| Produit | Boutique spécialisée (page vérifiée) | Amazon | AliExpress | Leboncoin |
|---|---|---|---|---|
| Hélices 1045 Holybro (rechange X500) | [Holybro — pièces détachées](https://holybro.com/products/spare-parts-x500-v2-kit) | [recherche](https://www.amazon.fr/s?k=helice+1045+holybro) | [recherche](https://fr.aliexpress.com/w/wholesale-holybro-1045-propeller.html) | — |
| Hélices 1045 génériques | — | [recherche](https://www.amazon.fr/s?k=helice+1045+drone) | [recherche](https://fr.aliexpress.com/w/wholesale-1045-propeller.html) | [recherche](https://www.leboncoin.fr/recherche?text=helice%201045) |
| Équilibreur d'hélices | — | [recherche](https://www.amazon.fr/s?k=equilibreur+helice+magnetique) | [recherche](https://fr.aliexpress.com/w/wholesale-propeller-balancer.html) | — |

## Validation à réception
- [ ] Bon nombre de CW / CCW.
- [ ] Pas de fissure ni de bavure.
- [ ] Ajustement sur l'axe moteur sans jeu.
