# Phase 1 — Construire un drone qui vole (doc globale)

**Objectif de sortie :** le drone décolle, tient un vol stationnaire stable 3 minutes en mode stabilisé, se pose ou revient seul quand la radio est coupée (failsafe testé), et atterrit sans casse.

**Hypothèses** (voir [ADR-001](../decisions/ADR-001-architecture-logicielle.md) et [ADR-002](../decisions/ADR-002-format-chassis.md)) : châssis ~500 mm, batterie 4S, contrôleur de vol STM32H7 sous ArduPilot/PX4, radio ExpressLRS, GPS. Le code « maison » arrive en phase 3, mais **chaque achat réserve la place, le poids, l'alimentation et les ports** pour la suite.

> 🔎 **Revue du 2026-11-20 :** prix, spécifications et règles ont été vérifiés sur les pages des fabricants et des boutiques, et sur les documents DGAC et Arcep. **14 erreurs de la v1 ont été corrigées.** Le détail et la configuration révisée sont dans le **[challenge global](challenge-2026-11-20.md)**. Décision principale : acheter le kit ARF → [ADR-003](../decisions/ADR-003-kit-arf-vs-piece-par-piece.md).
>
> Les prix restent des relevés à une date donnée : les revérifier dans `bom.md` avant chaque commande.

> 🧰 **Équipement déjà acheté** : à quoi sert chaque pièce, pourquoi elle, et le challenge → **[récapitulatif équipement](equipement.md)**.

---

## 1. Préalables (avant tout achat)

| Tâche | Pourquoi | Validation |
|---|---|---|
| Inscription exploitant sur **AlphaTango** (DGAC) | Obligatoire pour un drone ≥ 250 g ou équipé d'une caméra | N° d'exploitant obtenu |
| **Examen en ligne catégorie Ouverte (A1/A3)** sur [formation-categorie-ouverte-uas.aviation-civile.gouv.fr](https://formation-categorie-ouverte-uas.aviation-civile.gouv.fr) | Obligatoire au-dessus de 250 g. Gratuit, 40 questions, 75 % de bonnes réponses requises, valable 5 ans. **L'ancienne formation « Fox AlphaTango » n'est plus valable** | Attestation obtenue |
| Enregistrement du drone + **signalisation électronique** | Obligatoire à partir de 800 g. **Notre cas est certain** (le cadre seul pèse 610 g) | Voir [fiche 11](achats/11-signalisation-electronique.md) |
| Repérer un **terrain de vol** autorisé | Drone fait maison > 250 g = **A3 uniquement** : à 150 m des zones habitées, commerciales, industrielles et récréatives, personne à proximité, 120 m de hauteur max | Lieu identifié |
| **Club FFAM** (recommandé) | Assurance RC incluse, terrain, aide au premier vol, exemption de balise sur les terrains publiés à l'AIP. ~100 €/an *(à vérifier)* | Club contacté |
| Vérifier l'**assurance** responsabilité civile | Pas d'obligation spécifique trouvée, mais le télépilote est **responsable de plein droit** des dommages au sol | Attestation (RC habitation couvrant les drones, ou licence FFAM) |

*Règles vérifiées le 2026-11-20 dans le [Guide DGAC catégorie Ouverte éd. 2 v1.1](https://www.ecologie.gouv.fr/sites/default/files/documents/Guide_categorie_Ouverte.pdf). Les relire avant le premier vol.*

## 2. Architecture : comment les composants se parlent

```
                 Radiocommande (au sol)
                        │ 2,4 GHz ExpressLRS
                        ▼
 GPS+compas ──► CONTRÔLEUR DE VOL ◄── Récepteur radio
                 (STM32H7, ArduPilot/PX4)
                   │ signaux DShot        ▲ tension/courant
                   ▼                      │
 Batterie 4S ──► Module de puissance ──► ESC (x4) ──► Moteurs (x4) ──► Hélices
                   │
                   ├─► 5 V régulé pour le contrôleur de vol
                   └─► (phase 3) BEC 5 V 5 A ──► Raspberry Pi, caméras
```

## 3. Méthode de dimensionnement

On dimensionne **de la charge vers la propulsion** :

1. Estimer le **poids final** (avec capteurs et ordinateur compagnon des phases 3–4), avec 15 % de marge.
2. Exiger un rapport **poussée totale / poids ≥ 2:1** (marge pour corriger le vent et manœuvrer ; 2,5–3 idéal).
3. Choisir hélices + moteurs + tension qui donnent cette poussée **d'après la fiche de poussée du fabricant**.
4. Choisir batterie et ESC d'après le **courant** que ces moteurs consomment.

### Bilan de poids prévisionnel (révisé le 2026-11-20)

| Élément | Poids |
|---|---|
| Cadre X500 V2 (train, rails, plateforme) | 610 g ✅ |
| 4 moteurs 2216 KV920 | 256 g ✅ |
| 4 ESC 20 A | 84 g ✅ |
| Hélices, PDB, câbles | ~70 g |
| Pixhawk 6C + PM02 + GPS + récepteur + balise | ~120–150 g |
| Batterie 4S 5 000 mAh | 430–550 g *(selon modèle)* |
| **Sous-total phase 1** | **~1,57–1,72 kg** |
| Réserve phases 3–4 (Raspberry Pi, BEC, caméra, capteurs) | +150–300 g |
| **Poids visé max** | **~2,0 kg** |

→ Poussée requise ≥ 4 kg (ratio 2:1). Poussée disponible : **4 × 1 332 g = 5,3 kg** ✅ (fiche moteur vérifiée). Ratio : **3,1–3,4** en phase 1, **~2,7** en phases 3–4.

## 4. Les fiches d'achat

Ordre de choix : chaque élément dépend du précédent.

Chaque fiche contient une section **« Où acheter »**, avec :
- des liens vers des boutiques spécialisées (pages vérifiées) ;
- des liens de recherche Amazon, AliExpress et Leboncoin.

| # | Achat | Recommandation (révisée 2026-11-20) | Budget relevé | Obligatoire phase 1 |
|---|---|---|---|---|
| 01 | [Châssis](achats/01-chassis.md) | **Kit ARF Holybro X500 V2** (cadre + moteurs + ESC + hélices + PDB) | 350–400 € | ✅ |
| 02 | [Hélices](achats/02-helices.md) | 6 incluses + 4 paires 1045 Holybro de rechange | 20–25 € | ✅ |
| 03 | [Moteurs](achats/03-moteurs.md) | Inclus dans le kit ; 1 de rechange conseillé | 0–30 € | ✅ |
| 04 | [Batteries](achats/04-batteries.md) | 2–3× LiPo 4S 5 000–5 200 mAh XT60, < 480 g | 110–190 € | ✅ |
| 05 | [ESC](achats/05-esc.md) | Inclus dans le kit (flash Bluejay) ; plan B 4-en-1 AM32 | 0 € (plan B : 44–80 €) | ✅ |
| 06 | [Puissance & BEC](achats/06-puissance-bec.md) | PM02 V3 (dans le bundle du 6C) ; BEC reporté en phase 3 | 0 € maintenant | ✅ |
| 07 | [Contrôleur de vol](achats/07-controleur-de-vol.md) | **Pixhawk 6C + PM02** (la Matek est arrêtée) | 230–260 € | ✅ |
| 08 | [Radiocommande & récepteur](achats/08-radiocommande.md) | Boxer ELRS (ou Pocket) + RP4TD, **≤ 100 mW** | 105–215 € (+ accus 18650) | ✅ |
| 09 | [GPS & compas](achats/09-gps.md) | Holybro M10, variante IST8310 | 45–55 € | ✅ |
| 10 | [Chargeur LiPo](achats/10-chargeur.md) | ToolkitRC M6AC (100 W sur secteur) + grand sac ignifuge | 85–95 € | ✅ |
| 11 | [Signalisation électronique](achats/11-signalisation-electronique.md) | Balise au **format français** (Dronavia Beacon AM) ou DIY | 10–40 € | ✅ (sauf vols uniquement sur un terrain de club publié à l'AIP) |
| 12 | [Outillage & consommables](achats/12-outillage.md) | Fer ≥ 65 W réels, smoke stopper, multimètre… | 120–180 € | ✅ |
| | **Total** | | **~1 120–1 480 €** | |

**Où économiser :**
- radio Pocket (−110 €) ;
- radio, chargeur et outillage **d'occasion** (Leboncoin) ;
- 2 batteries au départ.

**Où ne pas économiser :**
- batteries (jamais d'occasion, pas de no-name) ;
- chargeur ;
- smoke stopper ;
- GPS (pas de copie) ;
- contrôleur de vol (pas de contrefaçon).

### Matrice de compatibilité (ce qui doit concorder)

| Contrainte | Pièces concernées |
|---|---|
| Diamètre d'hélice ≤ max du châssis | 01 ↔ 02 |
| KV moteur × tension batterie × hélice → poussée et courant (fiche fabricant) | 02 ↔ 03 ↔ 04 |
| Entraxe de fixation moteur | 01 ↔ 03 |
| Courant ESC ≥ 1,3 × courant max moteur ; tension ESC ≥ 4S | 03 ↔ 04 ↔ 05 |
| Courant max module de puissance ≥ courant total | 05 ↔ 06 |
| Connecteur batterie identique partout (XT60) | 04 ↔ 06 ↔ 10 |
| Ports série du FC : GPS + récepteur + **1 libre pour la phase 3** | 07 ↔ 08 ↔ 09 |
| Protocole récepteur (CRSF) supporté par le FC | 07 ↔ 08 |
| Connecteurs (JST-GH Pixhawk vs soudure) | 06 ↔ 07 ↔ 09 |

## 5. Étapes de réalisation

| # | Étape | Validation |
|---|---|---|
| 1 | Valider ADR-001 / 002 / 003, faire les préalables §1 | ADR « accepté » |
| 1 bis | **Lancer la simulation ArduPilot SITL dès maintenant** (gratuit, sans matériel) : premier script MAVLink de décollage et d'atterrissage | Script qui fait décoller, avancer et poser le drone simulé |
| 2 | **Liste d'achat finale** `bom.md` : vérification de chaque référence (dispo, compatibilité, fiche de poussée) | Bilan poids + poussée/poids ≥ 2 recalculé avec les vraies valeurs |
| 3 | Entraînement simulateur avec la radio pendant la livraison | 5 min de stationnaire sans crash en simu |
| 4 | Contrôle à réception de chaque pièce (voir § « Validation » de chaque fiche) | Checklist cochée dans le journal |
| 5 | Montage mécanique du châssis | Vis au frein-filet, pas de jeu |
| 6 | Soudures puissance (XT60, ESC, distribution) | Continuité OK, pas de court-circuit, smoke stopper OK |
| 7 | Montage FC, GPS, récepteur | Câblage photographié + schéma dans le journal |
| 8 | Flash firmware + configuration **sans hélices** | Orientation, calibrations, sens et ordre moteurs vérifiés |
| 9 | Sécurité : armement, alarme batterie, **failsafe radio**, geofence | Failsafe déclenché en coupant la radio (sans hélices) |
| 10 | Premier vol : 1–2 m, mode stabilisé, terrain dégagé | Décolle droit, pas d'oscillation |
| 11 | Autotune + vols de validation | **Critère de sortie atteint**, logs archivés |

## 6. Questions

### Tranchées le 2026-11-20
| Question | Réponse | Conséquence |
|---|---|---|
| Budget max phase 1 | **1 200 €** | Radio Pocket, 2 batteries → **[liste d'achat `bom.md`](bom.md)** et **[ordre d'achat & justification](ordre-achat.md)** |
| Expérience en soudure | **Un peu** | Pixhawk 6C confirmé, batteries achetées en XT60, pas de 4-en-1 |
| Club d'aéromodélisme | **Non** | Balise obligatoire, assurance et terrain à trouver soi-même, sécurité durcie (voir `bom.md`) |

### Encore ouvertes
1. FPV (vol en immersion) dès la phase 1 ? Ajouterait ~150–250 € *(à vérifier)* → **hors budget** de 1 200 €, à reporter.
2. Priorité : apprendre la stabilisation bas niveau, ou avoir vite un drone autonome ? (confirme ou remet en cause ADR-001)
3. Quel outillage est déjà possédé ? Jusqu'à ~100 € d'écart sur le budget.
4. La RC habitation couvre-t-elle les drones ?
