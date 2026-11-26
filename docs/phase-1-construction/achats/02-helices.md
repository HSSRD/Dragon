# 02 — Hélices

[← Doc globale](../README.md) · [Challenge global](../challenge-2026-11-20.md)

> **Révision 2026-11-26 :** ajout de la **limite de poussée de 1,2 kg par hélice** (fiche Holybro, relevée le 2026-11-22). Elle vaut pour le X500 V2 comme pour le S500 V2, qui ont la même propulsion.
>
> **Révision 2026-11-20 :** le kit ARF contient **6 hélices 1045** ✅ (soit 1,5 jeu). Il reste à acheter du rechange.

## Rôle
Les hélices produisent la poussée. Elles sont désignées par **diamètre × pas** en pouces : « 1045 » = 10" de diamètre, 4,5" de pas.

## Spécifications cibles
- **1045**, 2 CW + 2 CCW par jeu (CW = sens horaire, CCW = sens antihoraire).
- Fixation compatible avec le moteur du kit (hélices à « retainer » fournies avec le kit ✅).
- La fiche de poussée Holybro est mesurée avec des **T-Motor T1045 II** ✅ : ce sont les hélices de référence pour retrouver les chiffres de poussée.

## Limite de poussée de l'hélice
La fiche Holybro du kit indique pour l'hélice T1045 II une **limite de poussée de 1,2 kg** (« Thrust Limitation 1.2kg ») ✅, alors que le moteur 2216 KV920 atteint **1 332 g à 100 % des gaz** (16,4 A en 4S).

| Conséquence | Valeur |
|---|---|
| Poussée utile retenue | **4 × 1,2 kg = 4,8 kg** (au lieu de 5,3 kg) |
| Gaz à partir desquels on dépasse la limite | ~90 % *(à vérifier)* |
| Rendement optimal annoncé | 6 000–7 000 tr/min, soit ~55–62 % des gaz |

**Parade : plafonner la sortie moteur dans ArduPilot** avec `MOT_SPIN_MAX` ≈ **0,90** *(valeur à vérifier en vol, dans les logs)*.
- L'hélice reste sous sa limite mécanique.
- Le courant tombe à ~14 A par moteur au lieu de 16,4 A : marge ×1,45 pour les ESC 20 A ([fiche 05](05-esc.md)).
- Le courant total à plein gaz baisse aussi, ce qui soulage les fils du PM02 V3, donnés pour 30 A en continu ([fiche 06](06-puissance-bec.md)).

**Conséquence sur la charge utile :** avec un rapport poussée/poids de 2, le drone peut peser au plus ~2,4 kg en vol, soit **~0,8–1 kg de charge utile** en plus de la configuration de la phase 1 (~1,4–1,6 kg). Les « 1 500 g de charge utile » annoncés par Holybro donnent un rapport d'environ 1,7 : argument commercial, non retenu.

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
