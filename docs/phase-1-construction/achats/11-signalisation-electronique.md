# 11 — Signalisation électronique (obligation réglementaire)

[← Doc globale](../README.md) · [Challenge global](../challenge-2026-11-20.md)

> **Révision 2026-11-20 :** cette fiche est réécrite d'après le **Guide DGAC catégorie Ouverte (éd. 2 v1.1, 26/07/2026)**, la FAQ DGAC (juillet 2026) et la note DSAC 21-001. Deux affirmations de la v1 étaient fausses :
> 1. un module Remote ID européen ne suffit pas forcément ;
> 2. la balise DIY est **autorisée**.

## Ce qui s'applique à notre drone (fait maison, 1,6–2 kg, sans marquage de classe)

| Obligation | Applicable ? | Source |
|---|---|---|
| Enregistrement de l'**exploitant** (AlphaTango, n° FRA… affiché sur le drone) | ✅ Oui (> 250 g) | Guide §5.2 |
| Enregistrement du **drone** (≥ 800 g) | ✅ Oui, numéro apposé sur le drone | Guide §4.2 |
| **Signalement électronique national** (arrêté du 27/12/2019) | ✅ **Oui, pleinement applicable** à partir de 800 g | Guide §4.4 |
| Identification à distance **européenne** (Direct Remote ID) | ❌ Non en catégorie Ouverte pour un drone sans marquage de classe (sauf zone qui l'exige) | Guide, tableau des sous-catégories ; FAQ |
| Examen en ligne catégorie Ouverte (A1/A3) | ✅ Oui. L'ancienne formation « Fox AlphaTango » n'est **plus valable** | Guide §5.3 ; FAQ |
| Sous-catégorie | **A3 uniquement** : à 150 m des zones résidentielles, commerciales, industrielles et récréatives ; personne non impliquée à proximité ; 120 m de hauteur max | Guide §3.6, §9.1 |

**Exemption utile :** les vols de loisir d'un **membre d'un club FFAM/UFOLEP**, sur un terrain d'aéromodélisme **publié à l'AIP** (le recueil officiel de l'aviation civile), sont dispensés de signalement électronique (sauf terrains exclus par le décret 2021-1522). L'enregistrement et la formation restent obligatoires.

## Ce que la balise doit faire
- Émettre en **Wi-Fi 2,4 GHz non chiffré** (trame de gestion 802.11) : identifiant, position, point de décollage, vitesse sol, route.
- Son identifiant doit être **saisi sur AlphaTango**.
- **Il n'existe ni homologation ni liste officielle.** La DSAC n'en délivrera « a priori jamais ».
- **Balise DIY ou en kit autorisée** : code constructeur « **000** » + code modèle de 3 caractères + numéro de série de 24 caractères. On vérifie qu'il est unique en l'enregistrant sur AlphaTango ([note DSAC 21-001](https://www.ecologie.gouv.fr/sites/default/files/documents/DSAC_signalement_electronique_trigramme_constructeur.pdf)).

## Options comparées

| Option | Format français ? | Prix constaté | Remarques |
|---|---|---|---|
| **Dronavia Beacon AM** | ✅ « aux normes DGAC françaises », 9 g | **40 €** flashrc (rupture au 2026-11-20) ✅ | Le choix le plus simple |
| Dronavia Fly ID Light | ❓ Annonce le format **européen** (prEN 4709-002) seulement | 109–110 € ✅ | **Ne pas supposer** qu'elle couvre le format français |
| Holybro Remote ID | ❓ Format européen | 39,90 € Studiosport 🟡 | Idem |
| ArduRemoteID / module OpenDroneID | ❌ Format ASTM / européen, **pas le format français** par défaut | 30–70 € 🟡 | Il faudrait un firmware au format français |
| **Balise DIY ESP32** (firmware open source au format français) | ✅ si le firmware émet le format de l'arrêté | ~10 € | **Légal** avec le code « 000 ». Projet pédagogique intéressant, à valider avec une appli de réception |

## Recommandation
1. **Décision du 2026-11-20 : pas de club → la balise est obligatoire pour tous nos vols.**
2. Pour voler : **Dronavia Beacon AM** (~40 €), en obtenant **par écrit** du vendeur la confirmation qu'elle émet le format de l'arrêté du 27/12/2019.
3. Projet bonus : une balise DIY ESP32, en remplacement ou en secours.

## Challenge (renforcé)
- **« Mon Pixhawk peut piloter un module Remote ID, ça suffit ? »** **Non** : c'est le format européen, pas le format français. À ce jour, rien n'établit qu'un module européen soit accepté à la place.
- **« La DGAC va fusionner les deux systèmes. »** La FAQ dit que les autorités « travaillent » à éviter le double équipement. **Rien n'est acté** au 2026-11-20.
- **« Rester sous 800 g ? »** Impossible : le cadre seul pèse 610 g ✅.
- **« La balise DIY est-elle vraiment légale ? »** Oui pour un usage personnel avec le code « 000 » (note DSAC 21-001). Fabriquer des balises **en série pour les vendre** demande un code constructeur (CERFA 15963*01).

## Où acheter
> ⚠️ La plupart des produits « Remote ID » vendus sur Amazon et AliExpress émettent le **format européen ou américain**. Exiger la mention « arrêté du 27 décembre 2019 » ou « signalement électronique DGAC ».

| Produit | Boutique spécialisée (page vérifiée) | Amazon | AliExpress | Leboncoin |
|---|---|---|---|---|
| Dronavia Beacon AM | [flashrc](https://www.flashrc.com/dronavia/36464-balise_signalement_drones_avion_planeur_beacon_am_dronavia.html) | [recherche](https://www.amazon.fr/s?k=balise+signalement+electronique+drone) | ⛔ (format FR improbable) | [recherche](https://www.leboncoin.fr/recherche?text=balise%20signalement%20drone) |
| Dronavia Fly ID Light (format européen) | [drone-fpv-racer](https://www.drone-fpv-racer.com/en/fly-id-light-identification-tag-by-dronavia-12520.html) · [Studiosport](https://www.studiosport.fr/balise-didentification-a-distance-fly-id-light-dronavia-a28653.html) | — | — | — |
| ESP32 (balise DIY) | — | [recherche](https://www.amazon.fr/s?k=esp32+c3+mini) | [recherche](https://fr.aliexpress.com/w/wholesale-esp32-c3-mini.html) | — |

## Liens réglementaires
- [Guide DGAC catégorie Ouverte (PDF)](https://www.ecologie.gouv.fr/sites/default/files/documents/Guide_categorie_Ouverte.pdf)
- [FAQ transition européenne (PDF)](https://www.ecologie.gouv.fr/sites/default/files/documents/FAQ_Transition_europeenne_UAS.pdf)
- [AlphaTango](https://www.ecologie.gouv.fr/alphatango)
- [Examen en ligne catégorie Ouverte](https://formation-categorie-ouverte-uas.aviation-civile.gouv.fr)
- [Arrêté du 27/12/2019 (Legifrance)](https://www.legifrance.gouv.fr/loda/id/JORFTEXT000039685188)
- [Sites de vol FFAM](https://www.ffam.asso.fr/fr/pratiquer-l-aeromodelisme/ou-pratiquer/localisations-des-sites-de-vol.html)

## Validation
- [ ] Règles relues sur le site de la DGAC à la date de l'achat (lien et date dans le journal).
- [ ] Confirmation écrite du vendeur : format de l'arrêté du 27/12/2019.
- [ ] Balise enregistrée sur AlphaTango avec le drone ; numéros FRA et d'enregistrement apposés sur le drone.
- [ ] Signal vu avec une application de réception avant le premier vol.
