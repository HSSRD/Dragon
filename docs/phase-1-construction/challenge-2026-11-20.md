# Challenge global de la phase 1 (revue du 2026-11-20)

[← Doc globale](README.md)

Cette page **attaque** les choix de la première version des fiches. Chaque point indique :
- ce qui était écrit ;
- ce que la vérification a trouvé ;
- ce qui change.

Les sources sont les pages fabricants et boutiques, les guides DGAC et les documents Arcep consultés le 2026-11-20.

> Légende : ✅ vérifié sur une page ouverte · 🟡 vu seulement dans un extrait de moteur de recherche *(à vérifier)* · ❌ affirmation de la v1 fausse ou dépassée

---

## 1. Les erreurs factuelles de la v1

| # | La v1 disait | La réalité vérifiée | Impact |
|---|---|---|---|
| 1 | Cadre X500 V2 ~400 g | ❌ **610 g** (Holybro, Studiosport) ✅ | Le drone pèse ~200 g de plus que prévu → bilan de poids refait |
| 2 | Moteur 2216 KV920 : ~1 000 g de poussée max | ❌ **1 332 g à 16,4 A** (fiche Holybro = T-Motor AIR2216 II) ✅ ; 1 000 g correspond à 80 % des gaz | Bonne nouvelle : ratio poussée/poids meilleur |
| 3 | Acheter cadre + moteurs + ESC séparément | ❌ Le **kit ARF** contient exactement ça, pour moins cher ✅ | → [ADR-003](../decisions/ADR-003-kit-arf-vs-piece-par-piece.md) |
| 4 | ESC AM32 individuels 30–40 A pour 60–120 € les 4 | ❌ Quasi introuvables : Tekko32 45 A à 36,90 € pièce (≈148 € les 4, rupture) ✅ | On garde les ESC 20 A du kit |
| 5 | Pixhawk 6C 150–220 € « + son module PM02, câbles inclus » | ❌ **PM02 non inclus** dans la boîte de base : 199 $ nu, 217,99 $ avec PM02 ✅ | Commander la version « avec PM02 » |
| 6 | Option éco : Matek H743-SLIM | ❌ **Arrêtée** (V3 et V4). Matek met en garde contre les contrefaçons ✅ | L'option éco disparaît → voir fiche 07 |
| 7 | GPS éco : Matek M10Q-5883 | ❌ **EOL** (fin de vie), plus de stock ✅ | Holybro M10 seul choix retenu |
| 8 | Chargeur ToolkitRC « 100–150 W AC » | ⚠️ M6AC : **100 W sur secteur** / 300 W en DC ✅ ; ISDT 608AC : seulement **50 W sur secteur** ✅ | M6AC confirmé, 608AC écarté |
| 9 | Récepteur « diversity » RP3 | ❌ RP3 = 1 puce radio, 2 antennes (pas de vraie diversité) 🟡 ; vraie diversité = **RP4TD** (28,90 €) ✅ | RP4TD |
| 10 | Batterie 4S 5 000 mAh XT60, facile à trouver | ⚠️ Beaucoup de packs sont vendus en **XT90 ou EC5** (CNHL, Turnigy, Gens Ace) 🟡 | Vérifier la prise ou prévoir de la changer |
| 11 | Signalisation électronique : « Remote ID ArduPilot » possible ; balise DIY « à éviter » | ❌ Un module Remote ID européen **n'émet pas forcément le format français**. La **balise DIY est autorisée** (code constructeur « 000 », note DSAC 21-001) ✅ | Fiche 11 réécrite |
| 12 | Formation « A1/A3 » | ✅ Correct, **mais** l'ancienne formation « Fox AlphaTango » n'est plus valable ; un drone fait maison > 250 g vole **uniquement en A3** ✅ | Doc globale §1 précisée |
| 13 | Radio ELRS sans mention de puissance | ❌ Limite française **100 mW PIRE** à 2,4 GHz. Le mode ELRS « EU_CE_2400 » ajoute le LBT (écoute avant émission) **mais ne plafonne pas la puissance** ✅ | Régler ≤ 100 mW, ne pas flasher en firmware FCC |
| 14 | (implicite) Télémétrie SiK possible | ❌ La version 915 MHz (celle en stock chez Holybro) est **illégale en France** ✅ | Ne pas acheter le PX4 Dev Kit 915 MHz |

---

## 2. Les choix remis en cause (et le verdict)

### 2.1 « Un drone de 1,7 kg comme premier drone ? »
- **L'attaque.** Un premier drone de 1,7 kg avec des hélices de 10" est **dangereux** (une hélice de 10" à pleine vitesse coupe la chair) et **cher à crasher**. Les pilotes FPV conseillent presque tous de commencer par un *tiny whoop* (~30 g, 80–150 €).
- **La défense.** Notre objectif n'est pas le pilotage acrobatique. Le maintien de position par GPS rend ce drone **plus facile** à piloter qu'un whoop. Et les phases 3–5 imposent la taille.
- **Le verdict.** On garde le 500 mm, avec deux **conditions durcies** :
  1. 5 h de simulateur minimum, dont des atterrissages **en mode stabilisé, sans GPS** (le jour où le GPS décroche, il faut savoir poser à la main).
  2. Les premiers vols en **mode Loiter / maintien de position**, à ≥ 15 m de soi.
- **L'alternative crédible.** Un whoop à 100 € pour apprendre le pilotage manuel. À envisager si le simulateur révèle des difficultés.

### 2.2 « Pourquoi ne pas commencer par la phase 2 (simulation) ? »
- **L'attaque.** La simulation ArduPilot SITL (le firmware de vol tourne sur le PC) est **gratuite** et ne demande **aucun achat**. On peut écrire « notre code » de déplacement **dès cette semaine**, pendant les 2–6 semaines de livraison.
- **Le verdict.** **Accepté.** Lancer SITL + MAVLink en parallèle de la phase 1. C'est aussi un test de motivation avant de dépenser plus de 1 000 €.

### 2.3 « Pixhawk 6C à ~230 € : est-ce vraiment nécessaire ? »
- **L'attaque.** Des cartes H7 FPV (Holybro Kakute H7, SpeedyBee H743…) coûtent 60–90 € et font tourner ArduPilot.
- **La défense.**
  - Pas de soudure fine.
  - Capteurs isolés des vibrations.
  - Connecteurs normalisés.
  - Une carte de remplacement compatible chez plusieurs fabricants.
  - 5 ports série.
  - Doc PX4 et ArduPilot écrite **pour ce matériel**.
  - Et la Matek, qui était l'alternative éco, est arrêtée.
- **Le verdict.** **6C maintenu.**
  - **L'alternative crédible :** une carte H743 FPV supportée officiellement par ArduPilot (modèle et prix *(à vérifier)* au moment de l'achat), si le budget est la contrainte n°1 et que la soudure ne fait pas peur.
  - **Le 6C Mini (−20 $)** perd TELEM3 : on aurait juste assez de ports pour GPS, récepteur et ordinateur compagnon, et aucun de rechange. Déconseillé.

### 2.4 « Boxer à 185 € ou Pocket à 77 € ? »
- **L'attaque.** On ne fait pas de voltige. Pour ce drone, il faut **4 interrupteurs** (armement, modes de vol à 3 positions, arrêt d'urgence, retour maison). La Pocket a moins d'interrupteurs, mais leur nombre exact n'a pas été vérifié *(à vérifier)*.
- **La défense.**
  - Les manches de la Pocket sont petits, ce qui pénalise la précision en stationnaire.
  - Une radio se garde 10 ans et sert pour tous les futurs drones.
  - La **TX16S Mk3** (216 €, bi-bande, sortie janvier 2026) n'est que 30 € plus chère que la Boxer.
- **Le verdict.** **Boxer** si le budget le permet, sinon Pocket. **L'occasion est très pertinente ici** (Leboncoin) : les radios s'usent peu. Vérifier que c'est bien une version **ELRS 2,4 GHz**.

### 2.5 « 2 batteries suffisent-elles ? »
- **L'attaque.** Avec ~14 min de vol et 1 h de recharge par pack au chargeur M6AC (100 W sur secteur), deux batteries donnent ~30 min de vol par sortie. C'est peu pour faire un autotune et des tests.
- **Le verdict.** **3 batteries** recommandées (+55–65 €), ou 2 au début et une 3ᵉ après les premiers vols, quand on connaîtra la consommation réelle.

### 2.6 « Le club d'aéromodélisme (FFAM) : option ou évidence ? »
- **L'attaque.** Pour ~100 €/an *(à vérifier)*, une licence FFAM apporte :
  - une **assurance RC** (responsabilité civile) incluse ;
  - un **terrain autorisé** ;
  - des **gens expérimentés** pour le premier vol ;
  - une **exemption de balise électronique** sur les terrains publiés à l'AIP (le recueil officiel de l'aviation civile) ✅.
- **Le verdict.** **Fortement recommandé.** C'est probablement la dépense la plus rentable du projet. Question ouverte n°4 de la doc globale → à trancher en priorité.

### 2.7 « Holybro en direct ou revendeur français ? »
- Les prix Holybro sont en **$ hors taxes**. Il faut ajouter la TVA de 20 %, le port et parfois des frais de douane.
- Studiosport (France) affiche souvent des **stocks contradictoires** (« rupture » dans les données de la page, mais bouton « ajouter au panier » actif).
- → **Appeler ou écrire au revendeur** avant de commander. Comparer avec Unmanned Tech (Royaume-Uni : attention, douane depuis le Brexit) et drone-fpv-racer.com.

### 2.8 Ce qu'il ne faut **jamais** acheter d'occasion ni sur une marketplace anonyme
| Élément | Pourquoi |
|---|---|
| Batteries LiPo | Historique inconnu (surdécharge, choc) = risque d'incendie |
| Smoke stopper, chargeur no-name | Ce sont des organes de sécurité |
| Contrôleur de vol Matek sur AliExpress | Contrefaçons signalées par Matek ✅ |
| Balise de signalisation sans mention explicite du format français | Non conforme |

Ce qui est **bien** d'occasion : radio, chargeur de marque, outillage, fer à souder.

---

> **Mise à jour 2026-11-20 (après les réponses) :** budget 1 200 €, soudure « un peu », pas de club. La configuration retenue est dans **[bom.md](bom.md)** : Pocket, 2 batteries, balise obligatoire. Le tableau ci-dessous reste la configuration « idéale » de référence.

## 3. Configuration révisée et budget recalculé

Les prix viennent des pages ouvertes le 2026-11-20 quand c'est possible, et sont ramenés à des € TTC approximatifs. Les prix en $ HT de Holybro sont convertis grossièrement en ajoutant la TVA et le port. Tout est *(à vérifier)* au moment de la commande.

| Poste | Choix révisé | Prix estimé |
|---|---|---|
| Châssis + moteurs + ESC + hélices + PDB | Kit ARF X500 V2 | ~350–400 € |
| Hélices de rechange | 2–4 paires 1045 | ~20–25 € |
| Contrôleur de vol + module de puissance | Pixhawk 6C (boîtier plastique) + PM02 V3 | ~230–260 € |
| GPS | Holybro M10 (variante compas IST8310) | ~45–55 € |
| Radio | Boxer ELRS (ou Pocket ~77 €) | ~185 € |
| Récepteur | Radiomaster RP4TD | ~29 € |
| Batteries | 2–3× LiPo 4S 5 000 mAh XT60 | ~110–190 € |
| Chargeur + sécurité | ToolkitRC M6AC + sac ignifuge + testeur | ~85–95 € |
| Signalisation électronique | Balise au format français (ex. Dronavia Beacon AM) | ~40 € |
| BEC 5 V 5 A (phase 3) | — | ~15–25 € |
| Outillage | Fer, multimètre, smoke stopper, consommables | ~120–180 € |
| **Total matériel** | | **~1 230–1 480 €** (≈ 1 120 € avec la Pocket et 2 batteries) |
| Licence FFAM + club (annuel) | Optionnel mais recommandé | ~100 €/an *(à vérifier)* |

### Bilan de poids révisé *(estimation)*
| Élément | Poids |
|---|---|
| Cadre X500 V2 | 610 g ✅ |
| 4 moteurs | 4 × 64 g = 256 g ✅ |
| 4 ESC | 4 × 21 g = 84 g ✅ |
| Hélices, PDB, câbles | ~70 g |
| Pixhawk 6C + PM02 + GPS + récepteur + balise | ~120–150 g |
| Batterie 4S 5 000 mAh | 430–550 g 🟡 |
| **Total phase 1** | **~1,57–1,72 kg** |
| + Phase 3–4 (Raspberry Pi, BEC, caméra) | +150–300 g → **~1,9–2,0 kg** |

**Poussée max** : 4 × 1 332 g = **5,3 kg**. Le ratio poussée/poids est donc :
- **3,1–3,4** en phase 1 ✅ ;
- **~2,7** avec la charge des phases 3–4 ✅.

**Stationnaire en phase 1** : ~420 g par moteur, soit ~50 % des gaz, ~3,6 A par moteur et ~15 A au total. Cela donne **~15 min** en utilisant 80 % de la batterie *(estimation, à mesurer)*.

---

## 4. Ce qui reste incertain
- Le flash **Bluejay** des ESC du kit (cible A-H-30) n'est confirmé par aucune source.
- Le prix réel des licences FFAM.
- Le stock réel du kit ARF en France.
- Le poids réel de la batterie choisie.
- La conformité de chaque balise au format de l'arrêté du 27/12/2019 : **demander une confirmation écrite au vendeur**.

## Sources principales (consultées le 2026-11-20)
- Holybro : [kits X500 V2](https://holybro.com/products/x500-v2-kits) · [PX4 Dev Kit](https://holybro.com/products/px4-development-kit-x500-v2) · [pièces détachées](https://holybro.com/products/spare-parts-x500-v2-kit) · [Pixhawk 6C](https://holybro.com/products/pixhawk-6c) · [M10 GPS](https://holybro.com/products/m10-gps) · [PM02 V3](https://holybro.com/products/pm02-v3-12s-power-module) · [fiche moteur](https://cdn.shopify.com/s/files/1/0604/5905/7341/files/X500MotorSpec.png?v=1678791632)
- ArduPilot : [Pixhawk 6C](https://ardupilot.org/copter/docs/common-holybro-pixhawk6C.html) · [Bidirectional DShot sur X500 V2 (forum)](https://discuss.ardupilot.org/t/bdshot-support-holybro-x500v2/126174)
- PX4 : [Pixhawk 6C](https://docs.px4.io/main/en/flight_controller/pixhawk6c.html) · [DShot](https://docs.px4.io/main/en/peripherals/dshot.html)
- Matek : [liste des produits actuels](https://www.mateksys.com/?page_id=2270) · [M10Q-5883 (EOL)](https://www.mateksys.com/?portfolio=m10q-5883)
- DGAC : [Guide catégorie Ouverte éd. 2 v1.1 (26/07/2026)](https://www.ecologie.gouv.fr/sites/default/files/documents/Guide_categorie_Ouverte.pdf) · [FAQ transition européenne](https://www.ecologie.gouv.fr/sites/default/files/documents/FAQ_Transition_europeenne_UAS.pdf) · [Note DSAC code « 000 »](https://www.ecologie.gouv.fr/sites/default/files/documents/DSAC_signalement_electronique_trigramme_constructeur.pdf) · [Exploitation en catégorie Ouverte](https://www.ecologie.gouv.fr/exploitation-drones-en-categorie-ouverte) · [Examen en ligne](https://formation-categorie-ouverte-uas.aviation-civile.gouv.fr)
- Arcep : [Projet de décision sur les dispositifs de courte portée (sept. 2026)](https://www.arcep.fr/uploads/tx_gspublication/consultation-projdec-condition-utilisation-frequences-dispositifs-courte-portee-sept2026.pdf)
- ExpressLRS : [options de firmware / domaines réglementaires](https://www.expresslrs.org/quick-start/firmware-options/)
- FFAM : [licences](https://contenu-informatif.ffam.asso.fr/les-licences/) · [sites de vol](https://www.ffam.asso.fr/fr/pratiquer-l-aeromodelisme/ou-pratiquer/localisations-des-sites-de-vol.html)
