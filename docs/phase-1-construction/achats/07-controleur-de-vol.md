# 07 — Contrôleur de vol (FC) — composant clé

[← Doc globale](../README.md) · [Challenge global](../challenge-2026-11-20.md)

> **Révision 2026-11-20 :**
> - La **Matek H743-SLIM est arrêtée** (V3 et V4) ✅ → l'option « éco » de la v1 disparaît.
> - Le PM02 n'est **pas inclus** dans la boîte de base du 6C.

## Rôle
Le FC lit les capteurs, stabilise le drone des milliers de fois par seconde, exécute les modes de vol et parle **MAVLink** avec la station sol puis avec notre ordinateur compagnon (phase 3).

C'est aussi la cible de la **phase 6** (firmware maison).

## Spécifications cibles
- **STM32H743**, support officiel **ArduPilot ET PX4**.
- **≥ 3 ports série** (UART) : GPS, récepteur, ordinateur compagnon, plus 1 libre.
- DShot sur au moins 4 sorties.
- IMU amorties, carte microSD, USB / DFU.

## Faits vérifiés ✅
| Carte | Prix | Ports et sorties | Remarques |
|---|---|---|---|
| **Pixhawk 6C (boîtier plastique)** | 199 $ HT nu · **217,99 $ avec PM02** · 219,99 $ avec PM06 (Holybro, en stock) ; 209 € nu chez Studiosport (rupture) | 5 UART utiles (TELEM1/2/3, GPS1/2) + un port debug ; 8 sorties IO + 8 sorties FMU | 34,6 g |
| Pixhawk 6C Mini | 179 $ nu · 197,99 $ avec PM02 | **Sans TELEM3** ni PWM 7–8 | — |
| Matek H743-SLIM V3/V4 | — | — | ❌ **Arrêtée**, contrefaçons signalées par Matek |
| Cube Orange+ | 300–450 € 🟡 | — | Surdimensionné |

Sources : [Holybro 6C](https://holybro.com/products/pixhawk-6c), [Holybro 6C Mini](https://holybro.com/products/pixhawk-6c-mini), [doc PX4](https://docs.px4.io/main/en/flight_controller/pixhawk6c.html), [doc ArduPilot](https://ardupilot.org/copter/docs/common-holybro-pixhawk6C.html), [liste Matek](https://www.mateksys.com/?page_id=2270).

## Allocation des ports série (prévisionnelle)
| Port | Usage |
|---|---|
| GPS1 | GPS M10 + compas |
| TELEM1 | **Ordinateur compagnon (phase 3), réservé** |
| TELEM2 | Récepteur ELRS (CRSF) |
| TELEM3 | Libre : télémétrie radio, balise, capteur |
| GPS2 | Libre |

## Recommandation
**Pixhawk 6C, boîtier plastique, version « avec PM02 V3 »** (~218 $ HT, soit ~230–260 € TTC livré *(à vérifier)*).

## Challenge (renforcé)
- **« 230 € pour un FC alors que des cartes FPV H7 coûtent 70 € ? »**
  - Ce que paient les ~150 € d'écart :
    - aucune soudure fine ;
    - 2 IMU isolées ;
    - connecteurs normalisés ;
    - la doc PX4 et ArduPilot écrite pour cette carte ;
    - un standard « Pixhawk » ouvert, utile pour la phase 6.
  - **L'alternative crédible :** une carte H743 FPV supportée officiellement par ArduPilot (marque et modèle à choisir au moment de l'achat, en vérifiant qu'elle figure dans la liste ArduPilot et qu'elle a ≥ 5 UART). Économie de ~150 €, au prix de soudures fines et d'un support PX4 plus incertain.
- **« Le 6C Mini à −20 $ ? »** Sans TELEM3, une fois le GPS, le récepteur et l'ordinateur compagnon branchés, il ne reste que GPS2 de libre. **20 $ ne valent pas la perte de marge.**
- **« Le PX4 Dev Kit à 609 $ avec tout dedans ? »** Il n'économise que ~18 $ et fournit une télémétrie **915 MHz, illégale en France** (la version 433 MHz est en rupture). Voir [ADR-003](../../decisions/ADR-003-kit-arf-vs-piece-par-piece.md).
- **« ArduPilot ou PX4 ? »**
  - Le 6C acheté seul arrive sans firmware imposé ; on choisit en le flashant.
  - Penchant **ArduPilot** :
    - DShot possible sur toutes les sorties ;
    - **scripts Lua embarqués** (petits programmes qui tournent directement sur le FC) : une première façon d'écrire « notre code » **dès la phase 1**, sans Raspberry Pi ;
    - SITL (simulation) très simple.
- **Ce qui ferait changer d'avis :** budget total < 1 000 € → carte H7 FPV + câblage soudé.

## Pièges
- Orientation (flèche vers l'avant).
- Montage sur amortisseurs, loin des câbles de puissance.
- Jamais d'USB + batterie avec les hélices montées.
- ESC sur les sorties **FMU/AUX** (voir fiche 05).
- Compas du GPS M10 : la variante **IST8308** n'est supportée par PX4 sur le 6C qu'à partir de v1.16 ✅ → préférer la **IST8310**.

## Où acheter
> ⛔ **Pas de FC Matek ni de « Pixhawk » à prix cassé sur AliExpress** : contrefaçons. Leboncoin : acceptable si le vendeur montre la carte reconnue dans QGroundControl / Mission Planner.

| Produit | Boutique spécialisée (page vérifiée) | Amazon | AliExpress | Leboncoin |
|---|---|---|---|---|
| Pixhawk 6C (+ PM02) | [Holybro (officiel)](https://holybro.com/products/pixhawk-6c) · [Studiosport](https://www.studiosport.fr/controleur-de-vol-pixhawk-6c-holybro-a35315.html) | [recherche](https://www.amazon.fr/s?k=holybro+pixhawk+6c) | [boutique Holybro uniquement](https://fr.aliexpress.com/w/wholesale-holybro-pixhawk-6c.html) | [recherche](https://www.leboncoin.fr/recherche?text=pixhawk) |
| Pixhawk 6C Mini | [Holybro](https://holybro.com/products/pixhawk-6c-mini) · [Studiosport](https://www.studiosport.fr/controleur-de-vol-pixhawk-6c-mini-holybro-a34703.html) | — | — | — |

## Validation à réception
- [ ] Reconnu en USB par Mission Planner / QGroundControl.
- [ ] Dernier firmware stable flashé (version notée dans le journal).
- [ ] L'horizon artificiel suit la carte, sans dérive.
- [ ] Logs écrits sur la carte microSD.
