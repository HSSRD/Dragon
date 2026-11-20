# 05 — ESC (contrôleurs électroniques de vitesse)

[← Doc globale](../README.md) · [Challenge global](../challenge-2026-11-20.md)

> **Révision 2026-11-20 :** on garde les **ESC BLHeli_S 20 A du kit ARF**, flashés sous **Bluejay**. Les ESC AM32 individuels sont abandonnés : rares, chers et souvent en rupture. Voir [ADR-003](../../decisions/ADR-003-kit-arf-vs-piece-par-piece.md).

## Rôle
L'ESC transforme la consigne numérique du contrôleur de vol en courant triphasé pour le moteur.

## Les ESC du kit : vérifié ✅
- 20 A en continu, 30 A en pointe pendant 10 s.
- 3–4S, 21 g, sans BEC.
- Firmware **BLHeli_S** (cible A-H-30), protocoles DShot150/300/600.

Sources : Holybro et [Studiosport](https://www.studiosport.fr/esc-blheli-s-20a-pour-s500-v2-ou-x500-v2-holybro-a24761.html).

**Pas de DShot bidirectionnel d'origine.** Un développeur ArduPilot le confirme (nov. 2024) : *« They do not ship with BlueJay by default, you will need to flash with BlueJay »* ([forum](https://discuss.ardupilot.org/t/bdshot-support-holybro-x500v2/126174)).

## Pourquoi le DShot bidirectionnel compte
Avec le DShot bidirectionnel, l'ESC renvoie la vitesse de rotation (RPM) de chaque moteur au FC. Le FC s'en sert pour un **filtre anti-vibrations** calé sur la fréquence exacte des moteurs (filtre « notch » dynamique). C'est le principal gain de stabilité « gratuit » sur ce type de drone.

## Options comparées

| Option | Avantages | Inconvénients | Prix constaté |
|---|---|---|---|
| **ESC du kit + flash Bluejay** | Déjà montés, gratuit | Marge de courant juste (×1,22) ; flash Bluejay non confirmé pour cette cible 🟡 | inclus (rechange 13,99 $ HT ✅ / 19,90 € ✅) |
| ESC du kit, laissés en BLHeli_S | Zéro manipulation | Pas de filtrage RPM : filtre notch réglé sur les gaz, moins précis | inclus |
| 4-en-1 AM32 55 A (Aikon AK32 V3, Flywoo GOKU G55M…) | DShot bidirectionnel natif, grosse marge, souvent un capteur de courant | Fils moteur à rallonger d'environ 20 cm ; une panne coupe les 4 moteurs ; il faut redémonter les bras | 44–80 € ✅ |
| 4 ESC individuels AM32 (Holybro Tekko32 F4 45 A) | Marge énorme, remplacement unitaire | **148 € les 4**, en rupture ✅ | 36,90 € pièce ✅ |

## Recommandation
1. **Faire voler d'abord avec les ESC du kit**, en DShot600 normal.
2. Ensuite, **tenter le flash Bluejay** (configurateur web Bluejay ou ESC-Configurator, via le passthrough du FC). On garde une sauvegarde du firmware d'origine.
3. Si le flash échoue, ou si les ESC chauffent (> 80 °C mesuré au thermomètre infrarouge juste après un vol) → passer à un **4-en-1 AM32 55 A**.

## Challenge (renforcé)
- **« 20 A pour un moteur qui tire 16,4 A, c'est sous-dimensionné par rapport à la règle ×1,3 ! »**
  - **Vrai** : la marge est de ×1,22.
  - Mais les 16,4 A ne sont tirés qu'**à 100 % des gaz**. En stationnaire, on est à ~3,6 A, et le pic accepté est de 30 A pendant 10 s.
  - Le fabricant vend cet ensemble comme un système.
  - **Accepté avec une surveillance de température.** C'est le point le plus « tendu » de la configuration.
- **« Pourquoi pas un 4-en-1 directement ? »**
  - Sur un 500 mm, il faut rallonger les fils moteur et refaire tout le câblage des bras.
  - Gros travail pour un gain incertain tant qu'on n'a pas volé.
  - **On garde cette option en réserve.**
- **« Flasher un ESC, c'est risqué ? »**
  - Le risque est de bloquer l'ESC (environ 20 € de rechange).
  - Ne jamais le faire hélices montées.
  - Ne flasher qu'**un seul ESC** pour commencer, et le tester avant de faire les autres.

## Compatibilités à vérifier (vérifiées ✅)
| Firmware | Sorties à utiliser pour les ESC |
|---|---|
| **PX4** | DShot uniquement sur les sorties **FMU (AUX)** ; DShot bidirectionnel à partir de PX4 v1.16 |
| **ArduPilot** | Sorties FMU 1–8 en DShot (firmware « Pixhawk6C-bdshot » pour le bidirectionnel). Les sorties IO aussi avec `BRD_IO_DSHOT=1`, et le bidirectionnel sur IO 1–4 |

Sources : [PX4](https://docs.px4.io/main/en/peripherals/dshot.html), [ArduPilot](https://ardupilot.org/copter/docs/common-holybro-pixhawk6C.html).

→ **Brancher les ESC sur les sorties FMU/AUX** : ça marche avec les deux firmwares.

## Pièges
- Soudures froides → coupure en vol.
- Ne pas alimenter le FC par un BEC d'ESC (ceux du kit n'en ont pas, tant mieux).
- **Smoke stopper à la première mise sous tension.**

## Où acheter

| Produit | Boutique spécialisée (page vérifiée) | Amazon | AliExpress | Leboncoin |
|---|---|---|---|---|
| ESC BLHeli_S 20 A Holybro (rechange) | [Holybro](https://holybro.com/products/spare-parts-x500-v2-kit) · [Studiosport](https://www.studiosport.fr/esc-blheli-s-20a-pour-s500-v2-ou-x500-v2-holybro-a24761.html) | — | [recherche](https://fr.aliexpress.com/w/wholesale-holybro-blheli-s-20a.html) | — |
| 4-en-1 AM32 55 A (plan B) | [Studiosport — Flywoo G55M](https://www.studiosport.fr/esc-4-en-1-goku-g55m-55a-2-6s-flywoo-a30777.html) | [recherche](https://www.amazon.fr/s?k=esc+4in1+55a+am32) | [recherche](https://fr.aliexpress.com/w/wholesale-am32-4in1-esc-55a.html) | [recherche](https://www.leboncoin.fr/recherche?text=esc%204in1%2055a) |
| ESC individuel AM32 45 A | [FPV24 — Tekko32 F4 45A AM32](https://www.fpv24.com/en/holybro/holybro-tekko32-f4-45a-am32-26s-esc) | — | [recherche](https://fr.aliexpress.com/w/wholesale-am32-esc-45a.html) | — |
| Thermomètre infrarouge | — | [recherche](https://www.amazon.fr/s?k=thermometre+infrarouge) | [recherche](https://fr.aliexpress.com/w/wholesale-infrared-thermometer.html) | [recherche](https://www.leboncoin.fr/recherche?text=thermometre%20infrarouge) |

## Validation
- [ ] Configuration lue via passthrough, même firmware sur les 4 ESC.
- [ ] Sens de rotation vérifié **sans hélices**.
- [ ] Après les 3 premiers vols : température des ESC < 80 °C.
- [ ] Si Bluejay : la télémétrie RPM des 4 moteurs est visible dans la station sol.
