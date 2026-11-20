# 08 — Radiocommande & récepteur

[← Doc globale](../README.md) · [Challenge global](../challenge-2026-11-20.md)

> **Révision 2026-11-20 :**
> - Limite légale **100 mW PIRE** à 2,4 GHz.
> - La Boxer coûte **165–185 €** (et non 130–170 €).
> - La TX16S Mk II est remplacée par la **Mk3**.
> - Le RP3 n'est pas un vrai récepteur diversity → **RP4TD**.

## Rôle
- Pilotage manuel.
- **Sécurité** : armement, coupure d'urgence, changement de mode, reprise en main quand notre code fait n'importe quoi.
- Manette USB pour les simulateurs.

## Réglementation radio (vérifiée ✅)
- **2,4 GHz : 100 mW PIRE maximum** (PIRE = puissance rayonnée, gain d'antenne compris) pour les liaisons à saut de fréquence de type ELRS ([Arcep](https://www.arcep.fr/uploads/tx_gspublication/consultation-projdec-condition-utilisation-frequences-dispositifs-courte-portee-sept2026.pdf)).
- ELRS : utiliser le domaine **EU_CE_2400** (LBT : écoute avant émission). Ce mode **ne plafonne pas la puissance** : il faut régler ≤ 100 mW soi-même ([ExpressLRS](https://www.expresslrs.org/quick-start/firmware-options/)).
- Les radios EU sont livrées à 100 mW en LBT. Des tutoriels expliquent comment les reflasher en FCC à 1 W : **c'est illégal en France.**
- **915 MHz (FCC) : illégal.** 868 MHz : possible en EU_868 avec des limites (500 mW PIRE, 10 % de rapport cyclique, sur 869,4–869,65 MHz). Inutile pour notre usage.
- Émetteur et récepteur doivent être dans le **même domaine**, sinon ils ne s'appairent pas.

## Options comparées — radio

| Option | Caractéristiques | Prix constaté |
|---|---|---|
| **Radiomaster Boxer ELRS** | EdgeTX, ELRS interne 100 mW en EU-LBT, 2× 18650 **non fournies** | **184,90 €** drone-fpv-racer (en stock) ✅ · 168 € hobbydrone.cz 🟡 |
| Radiomaster Pocket ELRS | EdgeTX, compacte, 2× 18650 non fournies, charge USB-C | **77,31 €** drone-fpv-racer (promo) ✅ · 78–87 € ailleurs 🟡 |
| **Radiomaster TX16S Mk3** (janvier 2026) | Processeur H7, ELRS **bi-bande** 2,4 GHz + 900 MHz, manches à effet Hall, charge USB-C | **215,99 €** Helidigital (promo, en stock) ✅ |
| Radiomaster GX10 (nouveau) | ELRS LR1121, EdgeTX | ~130 $ en précommande, livrable vers déc. 2026 🟡 |

## Options comparées — récepteur

| Option | Caractéristiques | Prix constaté |
|---|---|---|
| **Radiomaster RP4TD** | **Vraie diversité** (2 puces SX1281), sortie CRSF, télémétrie | **28,90 €** drone-fpv-racer (dispo fin novembre) ✅ |
| Radiomaster RP3 | 1 puce, 2 antennes (diversité d'antenne seulement) | ~27 € 🟡 |
| RP4TD-M (mini) | Vraie diversité, plus petit | ~20 $ 🟡 |

## Recommandation
- **Radio : Pocket ELRS** (choix retenu avec le budget de 1 200 €, voir [bom.md](../bom.md)). Boxer si le budget le permet un jour. **Version ELRS 2,4 GHz EU/LBT.** Prévoir **2 accus 18650** (~10–15 € 🟡).
- **Récepteur : RP4TD.**
- Commander la radio **en premier**, pour s'entraîner au simulateur.

## Challenge (renforcé)
- **« La Pocket à 77 € suffit-elle ? »**
  - Pour ce drone, il faut **4 interrupteurs** :
    1. armement ;
    2. modes de vol (3 positions) ;
    3. arrêt d'urgence ;
    4. retour maison.
  - Le nombre exact d'interrupteurs de la Pocket est *(à vérifier)* sur la fiche produit.
  - Ses manches sont plus petits : moins de précision en stationnaire.
  - **La Pocket est un choix raisonnable** pour économiser ~110 €.
- **« La TX16S Mk3 pour 30 € de plus que la Boxer ? »**
  - Plus lourde, mais bi-bande, manches à effet Hall et grand écran (utile pour la télémétrie).
  - **Défendable** si on vise le long terme.
  - Le 900 MHz ne sert à rien en France (915 MHz est illégal), donc ce n'est pas un argument.
- **« Radio d'occasion ? »**
  - **Oui, c'est l'achat d'occasion le plus pertinent du projet.**
  - Vérifier :
    - module **ELRS 2,4 GHz** (pas FrSky, pas 915 MHz) ;
    - manches sans jeu ;
    - EdgeTX à jour ;
    - et demander si elle a été flashée en FCC (si oui, la repasser en EU_CE_2400).
- **« ELRS à 1 W pour plus de sécurité ? »** Illégal. Et en vol à vue (A3, quelques centaines de mètres), 100 mW suffisent largement.
- **« Télémétrie SiK séparée ? »** Pas en phase 1. La version 915 MHz est illégale ; la 433 MHz est possible mais inutile tant que l'ordinateur compagnon (phase 3) n'est pas là.

## Critères de choix (par ordre d'importance)
| # | Critère | Pourquoi | Pocket |
|---|---|---|---|
| 1 | **ELRS 2,4 GHz intégré** | Protocole ouvert, récepteurs à 20–30 €, sortie CRSF lue nativement par ArduPilot et PX4, télémétrie. Écarte FrSky ACCESS, Spektrum, Flysky, DJI (fermés, récepteurs chers) | ✅ |
| 2 | **Version EU / LBT, puissance réglable ≤ 100 mW** | Légalité en France | ✅ réf. HP0157.0053-**LBT** ; max 24 dBm → **régler à 20 dBm** |
| 3 | **EdgeTX** | Firmware ouvert. Les « interrupteurs logiques » permettent de sécuriser l'armement. Script Lua ELRS pour régler le récepteur depuis la radio | ✅ |
| 4 | **≥ 4 interrupteurs, dont un à 3 positions** | Armement, modes de vol, arrêt d'urgence, retour maison : chacun sur un interrupteur distinct, sans ambiguïté | ✅ 2× 2 positions + 2× 3 positions + 1 bouton |
| 5 | **Joystick USB** | Simulateur pendant les livraisons | ✅ |
| 6 | Manches : précision et durabilité | Stationnaire fin ; l'effet Hall ne s'use pas | ⚠️ effet Hall, mais **petits** et courts (~21 mm) |
| 7 | Alimentation standard | 18650 : courants, pas chers, ~8–10 h d'autonomie | ✅ (non fournies) |
| 8 | Évolutivité | Baie pour module externe (autre protocole un jour) | ✅ baie nano |
| — | **Inutile ici** | 1 W (illégal), 900 MHz (915 illégal, 868 inutile), écran couleur, tactile | — |

**Affectation proposée (ArduPilot) :**
| Interrupteur | Fonction |
|---|---|
| SA (2 positions, côté gauche) | **Armement / désarmement** |
| SB (3 positions) | **Modes de vol** : Stabilize / AltHold / Loiter |
| SC (3 positions) | Bas : rien · milieu : **RTL** (retour maison) · haut : Land |
| SD (2 positions, côté droit) | **Arrêt d'urgence moteurs** (Motor Emergency Stop) |
| SE (bouton) | Libre (plus tard : déclencher notre script) |

## Pièges
- Même version majeure d'ELRS, même *binding phrase* (phrase d'appairage), **même domaine EU_CE_2400**.
- Antennes du récepteur hors du carbone, à 90° l'une de l'autre.
- **Failsafe configuré côté FC.**

## Où acheter

| Produit | Boutique spécialisée (page vérifiée) | Amazon | AliExpress | Leboncoin (occasion ✅) |
|---|---|---|---|---|
| Radiomaster Boxer ELRS | [drone-fpv-racer](https://drone-fpv-racer.com/en/boxer-radio-elrs-24g-by-radiomaster-10582.html) | [recherche](https://www.amazon.fr/s?k=radiomaster+boxer+elrs) | [recherche](https://fr.aliexpress.com/w/wholesale-radiomaster-boxer-elrs.html) | [recherche](https://www.leboncoin.fr/recherche?text=radiomaster%20boxer) |
| Radiomaster Pocket ELRS | [drone-fpv-racer](https://www.drone-fpv-racer.com/en/pocket-radio-elrs-24g-by-radiomaster-11580-84125.html) | [recherche](https://www.amazon.fr/s?k=radiomaster+pocket+elrs) | [recherche](https://fr.aliexpress.com/w/wholesale-radiomaster-pocket-elrs.html) | [recherche](https://www.leboncoin.fr/recherche?text=radiomaster%20pocket) |
| Radiomaster TX16S Mk3 | [Helidigital](https://helidigital.com/en/radios/7504-radiomaster-tx16s-mk3-elrs-noir-mode-2.html) | [recherche](https://www.amazon.fr/s?k=radiomaster+tx16s+mk3) | [recherche](https://fr.aliexpress.com/w/wholesale-radiomaster-tx16s-mk3.html) | [recherche](https://www.leboncoin.fr/recherche?text=radiomaster%20tx16s) |
| Récepteur RP4TD | [drone-fpv-racer](https://www.drone-fpv-racer.com/en/rp4td-elrs-24g-diversity-receiver-by-radiomaster-12200.html) | [recherche](https://www.amazon.fr/s?k=radiomaster+rp4td) | [recherche](https://fr.aliexpress.com/w/wholesale-radiomaster-rp4td.html) | — |
| Accus 18650 | — | [recherche](https://www.amazon.fr/s?k=accu+18650+3000mah) | — | — |

## Validation
- [ ] Radio reconnue en joystick USB dans un simulateur.
- [ ] Domaine **EU_CE_2400** et puissance ≤ 100 mW vérifiés dans le menu ELRS (photo dans le journal).
- [ ] Récepteur appairé, voies visibles, sens corrects.
- [ ] Failsafe déclenché en éteignant la radio (sans hélices).
