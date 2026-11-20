# Ordre d'achat & justification — phase 1

[← Doc globale](README.md) · [Liste d'achat (BOM)](bom.md) · [Challenge global](challenge-2026-11-20.md)

- **Date :** 2026-11-20
- **Budget :** 1 200 €
- **Hypothèses :** soudure « un peu », pas de club

Cette page dit **dans quel ordre** acheter, **pourquoi dans cet ordre** et **ce qui doit être validé avant de passer à la commande suivante**.

Les prix et les liens sont dans [bom.md](bom.md) et dans les fiches. Tous les prix sont *(à vérifier)* le jour de la commande.

---

## Principes qui fixent l'ordre
1. **Le gratuit d'abord.** Administratif et simulation ne coûtent rien et servent de test de motivation avant de dépenser plus de 1 000 €.
2. **La radio avant le drone.** Elle sert de manette pour le simulateur pendant 2 à 6 semaines de livraisons. Il faut 5 h d'entraînement avant le 1ᵉʳ vol.
3. **Les outils avant l'électronique.** On s'entraîne à souder sur des chutes, pas sur le récepteur.
4. **Les pièces interdépendantes ensemble.** Kit, contrôleur de vol et GPS doivent être compatibles : une seule commande, un seul vendeur si possible.
5. **Les LiPo le plus tard possible.** Une LiPo n'aime pas attendre et ne sert qu'au moment des tests sous tension. Le chargeur arrive **avant** elle.
6. **Le « de confort » après les premiers vols.** La 3ᵉ batterie et les pièces de rechange ne s'achètent qu'une fois qu'on connaît la vraie consommation et la vraie casse.

---

## Vague 0 — Maintenant, 0 €

| Action | Justification | Fait quand |
|---|---|---|
| **Examen en ligne A1/A3** ([site DGAC](https://formation-categorie-ouverte-uas.aviation-civile.gouv.fr)) | Obligatoire au-dessus de 250 g. Gratuit, valable 5 ans. Apprend les règles **avant** d'acheter | Attestation téléchargée |
| **Inscription exploitant** sur [AlphaTango](https://www.ecologie.gouv.fr/alphatango) | Obligatoire. Le numéro FRA… sera collé sur le drone | N° d'exploitant obtenu |
| **Vérifier l'assurance habitation** (clause « drones / aéromodèles ») | Le télépilote est responsable de plein droit. Si elle n'est pas couverte, une assurance spécifique sort du budget matériel : il faut le savoir **avant** | Réponse écrite de l'assureur |
| **Repérer un terrain** (A3 : à 150 m des habitations, accord du propriétaire, carte des restrictions Géoportail) | Sans terrain, pas de vol. Un club aurait réglé la question ; sans club, c'est à nous | Lieu + accord |
| **Installer ArduPilot SITL** (simulation sur PC) | Écrire notre premier code MAVLink sans matériel. Voir [ADR-001](../decisions/ADR-001-architecture-logicielle.md) | Drone simulé qui décolle et atterrit via un script |
| **Écrire à Studiosport** : stock réel du kit ARF, du Pixhawk 6C et du GPS M10, et moteurs KV880 ou KV920 | Les pages affichent des signaux de stock contradictoires et une incohérence sur les moteurs (voir [fiche 03](achats/03-moteurs.md)) | Réponse reçue |
| **Écrire à flashrc / Dronavia** : la Beacon AM est-elle au format de l'arrêté du 27/12/2019 ? Délai de réassort ? | Elle était en rupture au 2026-11-20. Il faut la confirmation écrite du format (voir [fiche 11](achats/11-signalisation-electronique.md)) | Réponse reçue |

**Passage à la vague 1 :** attestation A1/A3 obtenue. Si l'examen ou les règles A3 rebutent, mieux vaut le savoir avant d'avoir dépensé 1 000 €.

---

## Vague 1 — Radio & outillage (~210–280 €)

| # | Article | Prix | Pourquoi maintenant | Si on s'en passe |
|---|---|---|---|---|
| 1 | **Radiomaster Pocket ELRS** (EU/LBT) | 77–87 € | Simulateur pendant les livraisons ; c'est la pièce qui demande le plus d'entraînement | Premier vol sans entraînement = crash probable (~50–100 € de casse) |
| 2 | 2× accus 18650 | ~12 € | Non fournis avec la radio | La radio ne s'allume pas |
| 3 | **Récepteur RP4TD** | ~29 € | Même boutique que la radio (drone-fpv-racer) → un seul port. On peut l'appairer et le tester tout de suite | Port facturé deux fois |
| 4 | **Smoke stopper XT60** | ~5 € | Indispensable à la 1ʳᵉ mise sous tension | Un court-circuit peut détruire ~300 € d'électronique |
| 5 | Outillage manquant (fer ≥ 65 W réels, multimètre, étain, flux, hexagonaux, consommables) | 0–145 € | S'entraîner sur un XT60 et sur du 12 AWG **avant** l'arrivée de l'électronique | Soudures froides → coupure en vol |

**Justification de l'ordre :**
- La radio est le seul achat utile **dès sa réception** (simulateur).
- Les outils conditionnent la qualité de tout le montage.
- Ensemble, ils représentent ~20 % du budget : on avance sans s'engager sur le gros morceau.

**Passage à la vague 2 :**
- [ ] Radio reconnue comme joystick, 2 h de simulateur faites, stationnaire de 2 min sans crash.
- [ ] XT60 d'entraînement soudé : brillant, tient à la traction.
- [ ] Réponse de Studiosport reçue (stock et version des moteurs).

---

## Vague 2 — Le drone (~640–700 €)

**Une seule commande groupée**, chez Studiosport s'ils ont tout en stock, sinon tout chez Holybro en direct.

| # | Article | Prix | Pourquoi ce choix | Pourquoi groupé |
|---|---|---|---|---|
| 6 | **Kit ARF X500 V2** ([lien](https://www.studiosport.fr/holybro-x500-v2-kit-arf/)) — **pas** le cadre seul | 349,90 € | Moteurs, ESC, hélices et PDB assortis par le fabricant, moins cher que pièce par pièce ([ADR-003](../decisions/ADR-003-kit-arf-vs-piece-par-piece.md)) | Socle physique de tout le reste |
| 7 | **Pixhawk 6C + PM02 V3** | 230–250 € | Pas de soudure fine (tu soudes « un peu »), 5 ports série, standard ouvert, doc écrite pour ce kit. La Matek éco est arrêtée ([fiche 07](achats/07-controleur-de-vol.md)) | Le PM02 doit correspondre au FC ; connecteurs Holybro communs avec le GPS |
| 8 | **GPS Holybro M10** (IST8310, 10 broches) | 45–55 € | Branchement direct sur le Pixhawk, compas compatible PX4 et ArduPilot ([fiche 09](achats/09-gps.md)) | Même écosystème de connecteurs |
| 9 | 1 lot d'hélices 1045 de rechange | 12–15 € | Seules hélices garanties compatibles avec le moteur du kit | Évite un 2ᵉ port pour 12 € |

**Justification de l'ordre :**
- C'est le plus gros engagement (~55 % du budget). Il ne part qu'après la vague 1, qui a validé la motivation, l'entraînement et le stock.
- Grouper évite trois ports et trois délais.
- Surtout, une **incompatibilité de connecteur** entre FC, PM et GPS se découvre au même moment et se règle en un seul échange.

**Si Studiosport n'a qu'une partie du stock :**
- Ne pas mélanger les vendeurs juste pour gagner quelques jours : on paie deux ports et on risque des versions différentes.
- Attendre jusqu'à 3 semaines. Au-delà, passer chez Holybro en direct après avoir vérifié le **total TTC dans le panier** (TVA, port, douane).

**Passage à la vague 3 :**
- [ ] Toutes les pièces contrôlées à réception (checklists des fiches 01, 03, 07, 09).
- [ ] Châssis assemblé, vis au frein-filet.
- [ ] Pixhawk reconnu en USB, ArduPilot flashé, horizon artificiel correct (alimenté en USB, **sans batterie**).

---

## Vague 3 — Énergie (~195–225 €)

**Le chargeur d'abord, les batteries ensuite**, avec une semaine d'écart au plus, ou dans la même commande si le vendeur expédie les LiPo.

| # | Article | Prix | Pourquoi ce choix | Pourquoi maintenant |
|---|---|---|---|---|
| 10 | **Chargeur ToolkitRC M6AC** | 63–70 € | 100 W sur secteur, c'est-à-dire charge à 1C en ~1 h. Mesure la résistance interne ([fiche 10](achats/10-chargeur.md)) | Doit être là **à l'arrivée** des LiPo pour les contrôler et les mettre en stockage |
| 11 | **Sac ignifuge (grand) + testeur LiPo** | 20–25 € | Charge et stockage sécurisés | Même raison |
| 12 | **2× LiPo 4S 5 000–5 200 mAh XT60**, < 480 g | 110–130 € | Prise XT60 déjà montée : pas de soudure sur une LiPo chargée ([fiche 04](achats/04-batteries.md)) | Le drone est monté : on passe aux tests sous tension |

**Justification de l'ordre :**
- Une LiPo achetée trop tôt vieillit dans un placard, et elle est inutile tant que le drone n'est pas monté.
- L'acheter **après** l'assemblage, c'est aussi choisir la taille en connaissant la **vraie baie batterie** et le **vrai poids** du drone. Si le drone est plus lourd que prévu, on peut prendre un pack plus léger.

**Passage à la vague 4 :**
- [ ] Batteries contrôlées : cellules à ±0,02 V, pesées, numérotées.
- [ ] 1ʳᵉ mise sous tension **via le smoke stopper** réussie.
- [ ] Configuration complète **sans hélices** : moteurs, sens de rotation, failsafe radio testé.

---

## Vague 4 — Conformité (~40 €)

| # | Article | Prix | Pourquoi | Pourquoi maintenant |
|---|---|---|---|---|
| 13 | **Balise de signalisation** au format français (Dronavia Beacon AM) | ~40 € | Obligatoire pour tout vol à partir de 800 g hors terrain de club ([fiche 11](achats/11-signalisation-electronique.md)) | Indispensable seulement au 1ᵉʳ vol. **Mais la commander dès qu'elle est en stock**, même en vague 1 : elle était en rupture au 2026-11-20 |

Ensuite :
- Enregistrer le **drone** sur AlphaTango, avec l'identifiant de la balise.
- Coller les deux numéros sur le drone.

**Passage au 1ᵉʳ vol :**
- [ ] Balise enregistrée et signal vu avec une application de réception.
- [ ] 5 h de simulateur.
- [ ] Terrain, assurance et un ou une assistant(e) présent(e).

---

## Vague 5 — Après les premiers vols (réserve ~50–80 €, conditionnelle)

On n'achète **que** si le déclencheur se produit.

| Article | Déclencheur | Prix |
|---|---|---|
| Hélices / bras / ESC de rechange | Casse réelle | selon la casse |
| 3ᵉ batterie | Les sessions de réglage (autotune) sont trop courtes avec 2 packs | ~55–65 € |
| Moteur de rechange | Un moteur abîmé ou bruyant | ~30 € |
| ESC 4-en-1 AM32 55 A (plan B) | ESC > 80 °C ou flash Bluejay impossible. ⚠️ Gros recâblage pour qui soude « un peu » : préférer d'abord le remplacement unitaire (~20 €) | 44–80 € |
| Thermomètre infrarouge | Doute sur la température des ESC ou des moteurs | 10–20 € |

**Hors budget phase 1 :** BEC 5 V et Raspberry Pi (phase 3), FPV (option).

---

## Suivi du budget cumulé

| Après la vague | Dépense cumulée (fourchette) | Reste sur 1 200 € |
|---|---|---|
| 0 | 0 € | 1 200 € |
| 1 | 210–280 € | 920–990 € |
| 2 | 850–980 € | 220–350 € |
| 3 | 1 045–1 205 € | −5 à 155 € |
| 4 | 1 085–1 245 € | −45 à 115 € |
| 5 | selon la casse | **viser ≥ 50 € de réserve** |

**Le point de contrôle est la fin de la vague 2.** S'il reste moins de 260 €, appliquer les leviers d'économie de [bom.md](bom.md) **avant** la vague 3 :
- outillage ou radio d'occasion ;
- balise DIY ;
- dans le pire des cas, 1 seule batterie au départ.

---

## Avant **chaque** commande (règle n°3 du projet)
- [ ] Référence exacte vérifiée sur la page : kit **ARF** et non cadre seul, version **EU/LBT** de la radio, compas **IST8310**, prise **XT60**.
- [ ] Stock confirmé (pas seulement le bouton « Ajouter au panier » : chez Studiosport il s'affiche même en rupture).
- [ ] Total TTC port compris noté.
- [ ] Ligne cochée dans [bom.md](bom.md), et entrée dans le journal (`docs/journal/AAAA-MM-JJ-commande-…md`) avec le prix payé, la date et le vendeur.
