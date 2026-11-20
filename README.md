# Dragon

Construire un drone de A à Z : châssis en kit, électronique choisie pièce par pièce, puis logiciel écrit par nous (déplacements, missions), puis caméras et capteurs.

Le projet est piloté avec l'IA : chaque choix est **documenté**, **justifié** et **challengé** avant d'être acté.

## Feuille de route

| Phase | Objectif | Critère de sortie | Statut |
|---|---|---|---|
| 0. Cadrage | Budget, réglementation, sécurité, architecture | Décisions ADR-001/002/003 validées, examen A1/A3 + inscription AlphaTango faits | 🟡 en cours |
| **1. Construction** | **Un drone qui vole en manuel, stable** | **Vol stationnaire stable 3 min, failsafe testé** | 🟡 en cours — [doc globale](docs/phase-1-construction/README.md) |
| 2. Simulation | Environnement de dev : simulateur (SITL + Gazebo) | Décollage / carré / atterrissage codés et rejoués en simulation | ⚪ |
| 3. Cerveau embarqué | Ordinateur compagnon (Raspberry Pi) sur un Linux minimal, lien MAVLink | Notre code fait décoller, déplacer et atterrir le vrai drone | ⚪ |
| 4. Capteurs | Caméra, télémètre, flux optique… | Flux vidéo + données capteurs exploités par notre code | ⚪ |
| 5. Autonomie | Vision, suivi, évitement d'obstacles | À définir | ⚪ |
| 6. (Option) Firmware maison | Écrire notre propre contrôleur de vol | Vol stationnaire avec notre stabilisation, sur banc puis en vol attaché | ⚪ |

Pourquoi le « code maison » arrive en phase 3 et non dès le début : voir [ADR-001](docs/decisions/ADR-001-architecture-logicielle.md).

## Organisation de la doc

```
docs/
  decisions/            Décisions d'architecture (ADR) : contexte, options, choix, risques
  phase-1-construction/ Doc globale de construction + achats/ (une fiche par achat)
  journal/              Journal de bord (montage, tests, incidents) — une entrée par session
```

## Règles du projet

Voir [CLAUDE.md](CLAUDE.md) — elles s'appliquent aussi bien aux humains qu'à l'IA.
