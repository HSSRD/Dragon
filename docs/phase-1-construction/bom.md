# Liste d'achat phase 1 (BOM) — budget 1 200 €

[← Doc globale](README.md) · [Ordre d'achat & justification](ordre-achat.md) · [Challenge global](challenge-2026-11-20.md)

- **Statut :** brouillon. **Chaque ligne doit être revérifiée** (prix, stock, référence exacte) le jour de la commande.
- **Date :** 2026-11-20

## Contraintes (données le 2026-11-20)
| Contrainte | Conséquence |
|---|---|
| **Budget 1 200 €** (phase 1 seulement ; les phases 3+ auront leur propre budget) | Radio Pocket, 2 batteries, aucune pièce de rechange « de confort » au départ |
| **Sait souder « un peu »** | Pixhawk confirmé (pas de soudure fine). Batteries **déjà en XT60** (pas de prise à changer sur une LiPo chargée). Plan B des ESC : remplacement unitaire plutôt qu'un 4-en-1 (trop de recâblage) |
| **Pas de club** | Balise électronique **obligatoire**. Assurance à vérifier soi-même. Terrain à trouver soi-même. Premiers vols sans personne d'expérimenté → règles de sécurité durcies (voir plus bas) |

## La liste

| # | Article | Où (voir la fiche) | Prix relevé | Ordre de commande |
|---|---|---|---|---|
| 1 | Radiomaster **Pocket** ELRS 2,4 GHz (version EU/LBT) | [fiche 08](achats/08-radiocommande.md) | 77–87 € | **1ᵉʳ** (simulateur pendant les livraisons) |
| 2 | 2× accus 18650 pour la radio | fiche 08 | ~12 € | 1ᵉʳ |
| 3 | Récepteur Radiomaster **RP4TD** | fiche 08 | ~29 € | 1ᵉʳ |
| 4 | **Kit ARF Holybro X500 V2**. ⚠️ **Pas** le « Kit X500 V2 » à 159,20 € (réf. a30133), qui est le **cadre seul**. Bon lien Studiosport : [Kit X500 V2 ARF](https://www.studiosport.fr/holybro-x500-v2-kit-arf/) | [fiche 01](achats/01-chassis.md) | 350–390 € | 2ᵉ (commande groupée) |
| 5 | **Pixhawk 6C, boîtier plastique, avec PM02 V3** | [fiche 07](achats/07-controleur-de-vol.md) | 230–250 € | 2ᵉ (groupée) |
| 6 | **Holybro M10 GPS**, compas IST8310, connecteur 10 broches | [fiche 09](achats/09-gps.md) | 45–55 € | 2ᵉ (groupée) |
| 7 | Hélices 1045 Holybro de rechange (1 lot = 2 paires) | [fiche 02](achats/02-helices.md) | ~12–15 € | 2ᵉ (groupée) |
| 8 | 2× LiPo 4S 5 000–5 200 mAh **XT60**, < 480 g | [fiche 04](achats/04-batteries.md) | 110–130 € | 3ᵉ |
| 9 | Chargeur **ToolkitRC M6AC** | [fiche 10](achats/10-chargeur.md) | 63–70 € | 3ᵉ (avant les batteries) |
| 10 | Sac ignifuge (grand) + testeur LiPo | fiche 10 | 20–25 € | 3ᵉ |
| 11 | Balise **Dronavia Beacon AM** (format français confirmé par écrit) | [fiche 11](achats/11-signalisation-electronique.md) | ~40 € | avant le 1ᵉʳ vol |
| 12 | Outillage minimal (détail ci-dessous) | [fiche 12](achats/12-outillage.md) | 80–150 € | 1ᵉʳ |
| | **Total** | | **~1 070–1 250 €** | |

### Outillage minimal : ne racheter que ce qui manque
| Article | Prix | Si déjà possédé |
|---|---|---|
| Fer réglable ≥ 65 W réels (Pinecil V2 + chargeur USB-C PD 65 W) | ~60–70 € | −65 € |
| Multimètre avec continuité sonore | ~15 € | −15 € |
| Smoke stopper XT60 | ~5 € | **à acheter quoi qu'il arrive** |
| Étain 63/37 + flux | ~15 € | −15 € |
| Tournevis hexagonaux 1,5–3 mm | ~15 € | −15 € |
| Frein-filet, gaine, colliers, scratch, 2 XT60 de réserve | ~25 € | — |

## Le budget tient-il ? Lecture honnête
- **Au pire (~1 250 €), on dépasse.** C'est le cas si l'on achète **tout** l'outillage et qu'on commande en direct chez Holybro, en $ hors taxes : il faut alors ajouter TVA, port et un taux de change *(à vérifier)*.
- **Au mieux (~1 070 €), il reste ~130 € de réserve.** C'est le cas avec une partie de l'outillage déjà possédée et le kit, le Pixhawk et le GPS achetés chez un revendeur européen.
- **Il faut garder ~50–80 € de réserve pour la casse** des premiers vols (hélices, un bras, un ESC à 20 €).

### Si ça dépasse : leviers par ordre de préférence
1. **Radio Pocket d'occasion** sur Leboncoin : −20 à −30 €. Vérifier : ELRS 2,4 GHz, domaine EU.
2. **Outillage d'occasion** (fer, multimètre) : −20 à −40 €.
3. **Balise DIY ESP32** au lieu de la Dronavia : −30 €. Légale avec le code « 000 », mais c'est un mini-projet en plus avant le 1ᵉʳ vol.
4. **Pixhawk 6C Mini + PM02** au lieu du 6C : ~−20 €. On perd le port TELEM3 ; il reste juste assez de ports.

**À ne pas couper :** batteries de marque, chargeur, smoke stopper, GPS d'origine, balise.

### Ce qui a été retiré par rapport à la config « idéale » du challenge
- Radio Boxer (−110 €).
- 3ᵉ batterie (−60 €).
- Moteur de rechange (−30 €).
- Thermomètre infrarouge (−15 €) : on contrôle la température des ESC au toucher, avec prudence, batterie débranchée.
- BEC phase 3 (reporté).

## Paniers Studiosport (vérifiés le 2026-11-20, promo Black Friday en cours)

Stock lu dans les données de la page et via le bloc « Recevoir une alerte ». Le bouton « Ajouter au panier » ne prouve rien : il s'affiche même en rupture.

Port **gratuit dès 49 €** en point relais (France métropolitaine). Couper en deux commandes ne coûte donc rien.

### Panier A — à commander maintenant (en stock, prix promo)

> ✅ **Commandé le 2026-11-20** (190,40 € d'articles). Détail et écarts : [commande panier A](commandes/2026-11-20-studiosport-panier-a.md). La Pocket a été prise en Charcoal, et les **hélices n'ont pas été commandées** : elles passent au panier B.
| Article | Lien | Prix |
|---|---|---|
| Radiomaster Pocket ELRS (Transparent) | [lien](https://www.studiosport.fr/radiocommande-pocket-elrs-radiomaster-a27235.html) | 66,22 € |
| Récepteur RP4TD-**M** (version mini, vraie diversité) | [lien](https://www.studiosport.fr/recepteur-rp4td-m-expresslrs-24ghz-radiomaster-a30184.html) | 18,32 € |
| Smoke stopper **Vifly ShortSaver 2** (coupe en 3 ms au-delà de 1 ou 2 A, interrupteur, XT60/XT30) — remplace l'Amass après le challenge ci-dessous | [lien](https://www.studiosport.fr/smoke-stopper-shortsaver-2-vifly-a25141.html) | 10,32 € |
| 2× accus 18650 Radiomaster 3200 mAh (lot de 2, protégés). La Pocket n'est pas dans la liste de compatibilité Studiosport, mais Oscar Liang conseille ces accus pour la Pocket | [lien](https://www.studiosport.fr/batteries-18650-3200mah-radiomaster-a33732.html) | 11,92 € |
| Power module PM02 V3 (compatible 6C d'après la page 6C) | [lien](https://www.studiosport.fr/power-module-pm02-v3-holybro-a19717.html) | 17,91 € |
| GPS M10 Holybro (IST8310, 10 broches, mât fourni) | [lien](https://www.studiosport.fr/module-gps-m10-holybro-a27639.html) | 43,92 € |
| Hélices 1045 Holybro ×4 | [lien](https://www.studiosport.fr/helices-1045-x4-pour-s500-v2-holybro-a19439.html) | 15,92 € |
| Sac LiPo grand format (26×18×13 cm) | [lien](https://www.studiosport.fr/sac-se-securite-pour-batteries-lipo-grand-format-a19371.html) | 17,90 € |
| **Total A** | | **~202 €** (dont ~190 € chez Studiosport) |

**Pourquoi on s'écarte de l'[ordre d'achat](ordre-achat.md)** (PM02, GPS et hélices avancés de la vague 2 à la vague 1) :
- −20 % de promo ;
- port gratuit ;
- pièces standard Holybro, compatibles avec le 6C quel que soit le vendeur final.

**Risque :** si on abandonne le Pixhawk, le GPS et le PM02 restent compatibles avec la plupart des contrôleurs de vol ArduPilot.

### Panier B — alerte de stock posée, à commander au réassort
| Article | Lien | Prix |
|---|---|---|
| Kit X500 V2 **ARF** (moteurs KV880 selon la fiche : à confirmer) | [lien](https://www.studiosport.fr/holybro-x500-v2-kit-arf/) | 349,90 € |
| Pixhawk 6C (**sans** PM02, il est dans le panier A) | [lien](https://www.studiosport.fr/controleur-de-vol-pixhawk-6c-holybro-a35315.html) | 209,00 € |
| Hélices 1045 Holybro ×4, **2 lots** (reportées du panier A) | [lien](https://www.studiosport.fr/helices-1045-x4-pour-s500-v2-holybro-a19439.html) | ~31,84 € *(prix promo, à vérifier)* |
| **Total B** | | **~590,74 €** |

**Total Studiosport : ~781 €** (A payé 190,40 € + B estimé ~590,74 €). Le panier B dépasse 450 € : s'il est commandé en une seule fois avant le 30/11/2026, il participe au tirage Black Friday « une commande remboursée toutes les 48 h ».

### Challenge des paniers (2026-11-20)
Vérifié sur les pages Studiosport ce jour.

| Choix | Attaque | Verdict |
|---|---|---|
| Acheter le panier A alors que le kit et le FC sont en rupture | On achète des pièces pour un drone qui n'arrivera peut-être pas. Les packs « X500 V2 + Pixhawk » ont été **retirés** du site, ce qui peut annoncer un arrêt chez ce revendeur | **Maintenu.** Radio, récepteur, smoke stopper et sac servent quoi qu'il arrive. GPS et PM02 se réutilisent sur tout contrôleur de vol au standard Pixhawk. Regret maximum : ~16 € d'hélices |
| « Profiter de la promo » | La promo sur GPS + PM02 + hélices ne rapporte que **~17 €**, et elle s'arrête le 20/11 : c'est un argument d'urgence, pas un argument technique | **Assumé, mais ce n'est pas la raison principale.** La vraie raison : un seul envoi gratuit, et des pièces standard |
| Pocket plutôt que Boxer | Petits manches, nombre d'interrupteurs non vérifié | **Maintenue** : version LBT confirmée (réf. HP0157.0053-**LBT**), −110 €, compatible simulateur. Interrupteurs **vérifiés** ([Oscar Liang](https://oscarliang.com/radiomaster-pocket/)) : SA et SD à 2 positions, SB et SC à 3 positions, SE bouton poussoir. C'est suffisant (voir l'affectation dans la [fiche 08](achats/08-radiocommande.md)). Manches à effet Hall, petits. La puissance max est de 24 dBm : **la régler à 20 dBm (100 mW)** |
| RP4TD-M plutôt que RP4TD | Version « race », télémétrie 2×10 mW au lieu de 2×100 mW | **Maintenu** : vraie diversité (2 antennes T de 65 mm), câble CRSF fourni, −10 €. La télémétrie à 10 mW suffit en vol à vue |
| Smoke stopper Amass à 3,25 € | Aucune caractéristique publiée (seuil, temps de coupure) | **Remplacé par le Vifly ShortSaver 2** (+7 €) : coupure en 3 ms au-delà de 1 ou 2 A, interrupteur. Protège ~600 € d'électronique soudée par quelqu'un qui débute |
| Oubli des 18650 | La Pocket arrive **sans accus** : pas de simulateur à réception | **Corrigé** : ligne ajoutée |
| 1 seul lot d'hélices | Trop peu pour l'apprentissage | Ajouter un **2ᵉ lot dans le panier B** (port gratuit de toute façon) |
| Pixhawk 6C nu à 209 € + PM02 à 17,91 € | +140 € par rapport à une carte H7 FPV | **Maintenu** : pas de soudure fine (tu soudes « un peu ») et la marge du budget le permet. C'est aussi moins cher que Holybro en direct une fois TVA et port ajoutés |
| Attendre le réassort du kit ARF | Délai inconnu | **Repli fixé :** sans date de réassort vers le 15/12, commander chez Holybro en direct (kit ARF + 6C nu), en vérifiant le total TTC dans le panier. Pas AliExpress (423,99 €, épuisé) |

### Ailleurs que chez Studiosport
| Article | Où | Prix |
|---|---|---|
| **Commande Rotorama (vague 3)** : ToolkitRC M6AC | [lien](https://rotorama.com/product/toolkitrc-m6ac-100-300w) (en stock) | 63,29 € |
| + 2× **GNB 5 500 mAh 4S 70C XT60** (445 g, 139×44×36 mm) | [lien](https://rotorama.com/product/gnb-5500mah-4s-70c) (« en route », annoncé le 5/12/2026) | 2 × 67,89 € |
| Testeur LiPo BX100 | [drone-fpv-racer](https://www.drone-fpv-racer.com/testeur-bx100-de-lipo-18s-avec-alarme-8187.html) (ou chez Rotorama s'ils l'ont) | 3,90 € |
| Repli batteries : Voltz 4S 5 000 50C XT60, boîtier rigide (512 g, **49 mm de haut** : vérifier que ça passe sous les sangles) | [Sud-RC](https://www.sud-rc.fr/acces-divers-fumee-bateau/897-batterie-lipo-4s-148v-5000mah-50c-voltz-vz0350xt60.html) (en stock) | 74,90 € pièce |
| Repli chargeur (France) : M6AC | [drone-fpv-racer](https://www.drone-fpv-racer.com/toolkitrc-chargeur-m6ac-ac-100w-dc-300w-14428.html) (en stock) | 65,90 € |
| Balise **au format français** (la Beacon AM a disparu de Studiosport ; la balise Remote ID Holybro qu'ils vendent est au format européen) | voir [fiche 11](achats/11-signalisation-electronique.md) | ~40 € |
| 2× accus 18650, testeur LiPo, outillage manquant | divers | ~15 € + outillage |

## Commande groupée Holybro ou revendeur ?
| Option | Estimation | Pour | Contre |
|---|---|---|---|
| Revendeur FR/UE (Studiosport, etc.) | ~640 € TTC (kit 349,90 + 6C 209 + PM02 + GPS) | Prix TTC connu, retour facile, droit de rétractation | **Rupture** au 2026-11-20 sur le kit et le 6C |
| Holybro en direct | 591 $ HT → **~650–700 €** livré *(taux de change, TVA, port et éventuels droits à vérifier dans le panier)* | En stock | Douane possible, SAV plus lointain |

→ **Demander le délai de réassort à Studiosport.** S'il dépasse 3 semaines, commander chez Holybro en direct après avoir vérifié le total TTC dans le panier.

## Sans club : règles de sécurité supplémentaires
1. **Assurance** : vérifier par écrit que la RC habitation couvre les « aéromodèles / drones de loisir ». Sinon, souscrire une assurance spécifique (coût *(à vérifier)*, hors budget matériel).
2. **Terrain** :
   - A3 = à 150 m de toute zone habitée, commerciale, industrielle ou récréative, et personne à proximité.
   - Vérifier les zones interdites sur la carte des restrictions drones de Géoportail.
   - Avoir l'accord du propriétaire du terrain.
3. **Préparation :**
   - 5 h de simulateur avant le 1ᵉʳ vol, dont des atterrissages en mode stabilisé (sans GPS).
   - **Un ou une assistant(e) présent(e)** au premier vol : non pilote, mais capable d'appeler les secours et de surveiller les alentours.
4. **Checklist pré-vol écrite**, cochée à chaque vol (dans le journal).
