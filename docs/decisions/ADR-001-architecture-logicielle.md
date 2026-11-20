# ADR-001 — Architecture logicielle : où vit « notre code » ?

- **Statut :** proposé (à valider)
- **Date :** 2026-11-20

## Contexte
Objectif exprimé : « utiliser un OS vide et coder moi-même le drone (ses déplacements) ».

Un quadricoptère n'est **pas stable naturellement** : il faut recalculer la poussée des 4 moteurs ~1 000 à 8 000 fois par seconde à partir du gyroscope. Un bug dans cette boucle = chute immédiate (et hélices à 20 000 tr/min). Ce travail est fait par une puce dédiée : le **contrôleur de vol** (microcontrôleur STM32, pas un ordinateur avec OS).

Il faut donc distinguer deux niveaux :

| Niveau | Rôle | Fréquence | Matériel |
|---|---|---|---|
| Bas niveau (stabilisation) | Garder le drone à plat, appliquer une consigne d'angle/vitesse | 1–8 kHz, temps réel strict | Contrôleur de vol (STM32) |
| Haut niveau (déplacements, missions) | « Monte à 5 m, avance de 10 m, suis cet objet » | 1–50 Hz | Ordinateur compagnon (Raspberry Pi) sous Linux |

## Options

**A. Tout coder soi-même dès le départ (firmware de vol maison sur le STM32).**
+ Apprentissage maximal. − Des mois avant le premier vol, risque de casse élevé, débogage très difficile sans référence qui marche.

**B. Firmware ouvert éprouvé (ArduPilot ou PX4) sur le contrôleur de vol + notre code sur un ordinateur compagnon sous Linux minimal.** *(recommandé)*
+ Le drone vole vite et en sécurité ; notre code pilote tous les déplacements via MAVLink ; le « OS vide » existe bien : on part d'une image Linux minimale (Raspberry Pi OS Lite / Ubuntu Server, voire Buildroot plus tard) qu'on configure nous-mêmes.
− On ne code pas la stabilisation (au début).

**C. Firmware FPV (Betaflight).**
− Pensé pour le pilotage manuel acrobatique ; pas de GPS sérieux, pas de modes autonomes. Écarté pour ce projet.

## Décision proposée
**Option B maintenant, option A en phase 6** (optionnelle), une fois qu'on a un drone qui vole, un simulateur et un banc de test. On pourra alors remplacer ArduPilot/PX4 par notre firmware sur le **même** matériel — le choix du contrôleur de vol en phase 1 doit donc le permettre (STM32H7 documenté, flashable via USB/DFU).

## Ce qui ferait changer d'avis
- Si l'objectif principal est d'apprendre l'automatique/embarqué plutôt que d'avoir un drone utile → commencer par un petit drone de dev type *ESP-Drone / Crazyflie* (code de vol 100 % lisible, faible danger) en parallèle.

## Challenge (revue du 2026-11-20)
- **« Notre code n'arrive qu'en phase 3, c'est trop tard. »**
  - **Vrai, et évitable.** Deux façons d'écrire du code avant :
    1. **ArduPilot SITL** : le firmware tourne sur le PC, et on pilote le drone simulé en MAVLink (Python / pymavlink ou MAVSDK). Dès aujourd'hui, sans matériel.
    2. **Scripts Lua d'ArduPilot** : de petits programmes exécutés **sur le contrôleur de vol** lui-même (cartes H7 comme le Pixhawk 6C). Notre code vole dès la phase 1, sans Raspberry Pi.
  - → La phase 2 (simulation) démarre **en parallèle** de la phase 1.
- **« La phase 6 (firmware maison) est-elle réaliste ? »**
  - Écrire une stabilisation qui vole demande :
    - des estimateurs d'attitude (calcul de l'orientation à partir des capteurs) ;
    - des boucles PID ;
    - des pilotes de capteurs ;
    - la gestion du DShot.
  - Comptez des mois de travail.
  - Un drone de 2 kg avec des hélices de 10" est **le pire banc d'essai possible** pour du code de stabilisation encore buggé.
  - **L'alternative crédible :** faire la phase 6 sur un **petit drone dédié** (Crazyflie, ESP-Drone, ou un 3" avec une carte H7), pas sur le Dragon.
  - **Ce qui ferait changer d'avis :** un banc de test sécurisé (drone attaché sur un cardan) disponible.
- **« PX4 plutôt qu'ArduPilot, puisque le X500 est la plateforme de référence de PX4 ? »**
  - La doc d'assemblage PX4 est un vrai avantage pour **monter** le drone.
  - Mais ArduPilot offre :
    - le DShot sur toutes les sorties du 6C ;
    - les scripts Lua ;
    - un SITL plus simple ;
    - des outils sol (Mission Planner) plus complets.
  - Le matériel est identique, donc le choix est réversible en 10 minutes (reflash).
  - **Penchant ArduPilot maintenu.**

## Point ouvert : ArduPilot ou PX4 ?
Les deux sont compatibles avec le matériel recommandé ; on tranchera en phase 2. Penchant initial : **ArduPilot** (outils sol plus accessibles, très bon support MAVLink/Python) ; PX4 si on part sur ROS 2.
