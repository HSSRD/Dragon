# ADR-002 — Format du drone (taille du châssis)

- **Statut :** proposé (à valider)
- **Date :** 2026-11-20

## Contexte
Le drone doit d'abord voler, puis **embarquer un ordinateur compagnon, des caméras et des capteurs** (phases 3–5). La taille du châssis conditionne tout le reste : moteurs, hélices, batterie, poids, réglementation.

## Options

| Critère | 5" FPV (~220 mm) | **~450–500 mm « dev »** (ex. Holybro X500 V2, F450) | 7" long-range (~300 mm) |
|---|---|---|---|
| Place pour Raspberry Pi + caméras + capteurs | ❌ très serré | ✅ plateformes et rails prévus | ⚠️ possible mais serré |
| Stabilité / vol stationnaire lent | ⚠️ nerveux | ✅ conçu pour | ✅ correct |
| Autonomie typique | 4–6 min | 12–20 min *(à vérifier selon charge)* | 15–25 min |
| Résistance aux crashs | ✅ très bonne | ⚠️ bras/hélices fragiles | ✅ bonne |
| Coût pièces de rechange | faible | moyen | moyen |
| Poids en vol | ~650 g | ~1,2–1,6 kg | ~0,9–1,2 kg |
| Écosystème autonomie (PX4/ArduPilot) | marginal | **référence** (docs officielles PX4 basées sur le X500) | correct |

## Décision proposée
**Châssis ~500 mm de type X500 V2 (kit cadre seul, sans électronique)**, car c'est une plateforme de développement standard : beaucoup de doc, de place pour la suite, et des tutoriels qui correspondent exactement à notre usage.

## Risques
- **Poids > 800 g** → en France, obligations supplémentaires (enregistrement du drone + signalisation électronique). Assumé : la suite du projet (capteurs) l'imposera de toute façon.
- **Casse en apprentissage** : prévoir hélices et 1–2 bras de rechange ; s'entraîner d'abord sur simulateur (voir fiche radiocommande).

## Challenge (revue du 2026-11-20)
- **Poids réel sous-estimé.**
  - Le cadre X500 V2 pèse **610 g** et non ~400 g.
  - Poids en vol : **~1,6–1,7 kg** en phase 1, ~2 kg avec la charge des phases 3–4.
  - Compensé par une poussée réelle plus forte que prévu (1 332 g par moteur) : ratio > 3. ✅
- **Danger et coût d'un premier drone de 1,7 kg.**
  - Une hélice de 10" à plein régime blesse gravement.
  - Un crash coûte des hélices, un bras, parfois un moteur.
  - Les pilotes conseillent souvent un *tiny whoop* (80–150 €) pour apprendre.
  - **Maintenu** pour ce projet : maintien de position par GPS, objectif non acrobatique, et taille imposée par les capteurs futurs.
  - **Conditions :**
    - 5 h de simulateur ;
    - premiers vols au club ou sur un terrain dégagé ;
    - jamais à moins de 15 m de soi pendant les essais.
- **Pièces de rechange en rupture.** Les bras, raccords et plaques du X500 V2 étaient en rupture chez Holybro au 2026-11-20. Risque d'immobilisation après un crash → commander des pièces de rechange dès qu'elles reviennent. Voir [ADR-003](ADR-003-kit-arf-vs-piece-par-piece.md).
- **L'alternative 7" n'a pas été assez étudiée.**
  - Plus robuste et plus léger (~1 kg).
  - Mais pas de plateforme de charge utile, peu de doc ArduPilot pour l'autonomie, et l'électronique (FC FPV) devient moins standard.
  - **Écartée pour l'instant.**

## Ce qui ferait changer d'avis
- Budget serré ou envie de pilotage FPV → 7" (compromis).
- Envie de rester sous 250 g pour la simplicité réglementaire → micro-drone, mais l'emport de capteurs devient quasi impossible.
