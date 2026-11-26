# Commande Studiosport — panier B (2026-11-25)

> Statut : **reçue**, contrôles à réception à faire.
> Prévu dans : [bom.md § Panier B](../bom.md#panier-b--alerte-de-stock-posée-à-commander-au-réassort) · Issue [#5](https://github.com/HSSRD/Dragon/issues/5)

| Champ | Valeur |
|---|---|
| Vendeur | studioSPORT (studiosport.fr) |
| Date de commande | 2026-11-25 |
| Date de réception | *(à compléter)* |
| N° de commande | *(à compléter)* |
| Frais de port | **7,90 € TTC** |
| **Montant payé** | **536,80 € TTC** |
| Facture | *(à compléter : chemin du PDF)* |

## Contenu (d'après le récapitulatif de commande)

| # | Article | Réf. Studiosport | Qté | Prix payé TTC |
|---|---|---|---|---|
| 1 | Kit **Holybro X500 V2 ARF** : cadre carbone 500 mm, 4 moteurs 2216, 4 ESC BLHeli_S 20 A, PDB (XT60 batterie, XT30 vers les ESC), 6 hélices 1045, sangles et support batterie | AR10000198 | 1 | 349,90 € |
| 2 | Contrôleur de vol **Holybro Pixhawk 6C Mini**, avec module de puissance *(à compléter : PM02 V3 ou PM06)* et jeu de câbles | AR0064840 | 1 | 179,00 € |
| | Port | | | 7,90 € |
| | **Total** | | | **536,80 €** |

## Écarts avec le panier B prévu

| Écart | Raison | Conséquence |
|---|---|---|
| **Pixhawk 6C Mini** au lieu du 6C standard | Le 6C standard était en rupture. Surtout, Holybro livre une nouvelle révision du 6C (IMU DSK320X + BMI423) : le **BMI423 n'a aucun pilote dans ArduPilot**, et le DSK320X n'est reconnu qu'en master (rétroportage vers 4.7 : [PR #34484](https://github.com/ArduPilot/ardupilot/pull/34484), ouverte au 24/11/2026). Le Mini garde l'ICM-42688-P + BMI088, reconnus en stable | **4 ports série au lieu de 5** (pas de TELEM3) : GPS1 = GPS M10, TELEM1 = ELRS, TELEM2 = Raspberry Pi (phase 3), GPS2 libre. Capteurs futurs en I2C ou DroneCAN de préférence. Une seule entrée d'alimentation (POWER1). Sorties moteurs intégrées : pas de carte PWM à acheter |
| Module de puissance fourni avec le Mini | Inclus dans le prix | Doublon avec le PM02 V3 du panier A : **un module de rechange** |
| **Hélices** non commandées | — | Le kit en fournit 6 (2 de rechange). 1 lot Holybro 1045 (a19439) à acheter en plus |
| Kit ARF : moteurs annoncés KV880 (Studiosport) ou KV920 (Holybro) | Fiches contradictoires | À noter à réception (voir ci-dessous) |

## Contrôles à la réception

Résultats à noter dans `docs/journal/AAAA-MM-JJ-reception-panier-b.md`, avec photos.

**Sécurité : aucune batterie LiPo branchée pendant ces contrôles. Le Pixhawk est alimenté par l'USB seulement.**

| Article | Test | Critère de validation |
|---|---|---|
| Colis | Inventaire contre le bordereau Holybro du kit et la boîte du Mini | Toutes les pièces présentes, aucun dommage. Photo du contenu étalé |
| Kit — moteurs | Lire l'étiquette | **KV noté** (920 attendu ; KV880 = poussée un peu plus faible, à reporter dans la fiche 03) |
| Kit — moteurs | Tourner chaque cloche à la main | Rotation libre, sans point dur ni frottement |
| Kit — cadre | Inspection des tubes, plaques et raccords | Aucune fissure, plaques planes |
| Kit — PDB et ESC | Inspection | Aucune trace de choc, câbles et prises XT30 intacts |
| Kit — hélices | Compter, repérer CW / CCW | 6 hélices, sens notés |
| Kit — mât GPS | Chercher dans le kit ou avec le GPS M10 | Présent, sinon le noter |
| Kit — outils | Inventaire | Tailles des clés hexagonales notées |
| Kit — poids | Peser le kit monté, sans batterie | Poids reporté au bilan (attendu ~1 kg *(à vérifier)*) |
| 6C Mini — boîte | Inventaire | Carte, module de puissance (noter lequel), câbles JST-GH |
| 6C Mini — USB | Brancher en USB à Mission Planner après flash d'ArduPilot **stable** | Carte reconnue |
| 6C Mini — IMU | Messages de démarrage | **IMU0 et IMU1 détectées toutes les deux**. Sinon : retour de la carte, pas de contournement |
| 6C Mini — capteurs | Horizon artificiel, baromètre | L'horizon suit les mouvements de la carte, l'altitude barométrique réagit |
| 6C Mini — alimentation | Plus tard, avec le module de puissance et le smoke stopper | `POWR.Vcc` ≥ 5,0 V ; tension batterie = testeur ± 0,1 V |

Droit de rétractation : 14 jours après la réception, pour tout article non conforme.
