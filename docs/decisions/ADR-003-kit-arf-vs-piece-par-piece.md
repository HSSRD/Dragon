# ADR-003 — Acheter le kit ARF X500 V2 plutôt que la propulsion pièce par pièce

- **Statut :** proposé (à valider)
- **Date :** 2026-11-20
- **Remplace :** la logique « cadre seul + moteurs + ESC achetés séparément » des fiches 01, 03 et 05 (version initiale)

## Contexte
La première version des fiches recommandait le **cadre X500 V2 seul**, puis des moteurs « Holybro 2216 KV920 » et des **ESC AM32 individuels 35–40 A** achetés à part.

La vérification du 2026-11-20 (pages Holybro et Studiosport ouvertes) a montré trois choses :

1. Holybro vend un **kit ARF** (*Almost Ready to Fly* : presque prêt à voler) qui contient **exactement** ces moteurs, des ESC 20 A déjà montés sur les bras, 6 hélices 1045 et une carte de distribution (PDB).
2. Pièce par pièce, c'est **plus cher**.
3. Les ESC AM32 individuels de 30–45 A sont **rares en 2026**. BLHeli_32 n'est plus développé depuis juin 2024, et les modèles AM32 de qualité coûtent ~37 € l'unité et sont souvent en rupture.

## Options

| Option | Contenu | Prix constaté (2026-11-20) | Pour | Contre |
|---|---|---|---|---|
| A. Cadre seul + pièces séparées | Cadre, puis 4 moteurs, 4 ESC, hélices, PDB | Studiosport : 159,20 € + 4×29,90 € + 4×19,90 € + hélices ≈ **370 €** (rupture sur le cadre) ; Holybro : 135 $ + 80 $ + 56 $ + 23 $ ≈ 294 $ HT | Choix libre de chaque pièce | Plus cher, plus de soudures, risque d'incompatibilité |
| **B. Kit ARF X500 V2** *(recommandé)* | Cadre + 4× 2216 KV920 (= T-Motor AIR2216 II rebadgé) + 4× ESC BLHeli_S 20 A montés + 6 hélices 1045 + PDB XT60 | Holybro **329 $** HT (en stock) ; Studiosport **349,90 €** TTC (rupture au 2026-11-20) | Propulsion déjà dimensionnée et testée par le fabricant, moins de soudures, pièces de rechange au catalogue | ESC BLHeli_S basiques (flash Bluejay requis pour le filtrage RPM), pas de module de puissance inclus |
| C. PX4 Development Kit X500 V2 | ARF + Pixhawk 6C + PM02 + GPS M10 + télémétrie SiK | **609 $** HT | Tout-en-un, livré flashé PX4 | Seulement ~18 $ d'économie face à B + 6C/PM02 + M10 achetés à part, et la télémétrie **915 MHz est illégale en France** (la version 433 MHz est en rupture) |

## Décision proposée
**Option B : kit ARF X500 V2.** On y ajoute séparément le Pixhawk 6C + PM02, le GPS M10 et le récepteur ELRS (voir fiches 06, 07, 08 et 09).

## Risques
- **ESC 20 A pour des moteurs qui tirent 16,4 A à plein gaz** (fiche Holybro/T-Motor). La marge est de ×1,22 au lieu du ×1,3 de notre règle. Le pic de 30 A pendant 10 s couvre les à-coups. En vol stationnaire, on est à ~4 A par moteur. **Assumé**, avec une vérification de température des ESC après les premiers vols. Si un ESC chauffe au-delà de 80 °C, on passe à un 4-en-1 AM32 55 A (44–80 €).
- **Filtrage RPM (DShot bidirectionnel)** : les ESC ne sont pas livrés sous Bluejay. Il faut les flasher. Le flash est probablement possible (puce EFM8 BB21, cible A-H-30), mais ce n'est confirmé par aucune source *(à vérifier)*. Sans ce flash, le drone vole quand même, avec un filtrage des vibrations moins bon.
- **Stock** : le kit est en rupture chez Studiosport, et les **tubes de bras, raccords nylon et plaques de rechange sont en rupture chez Holybro**. Commander 1–2 bras de rechange dès qu'ils sont disponibles.
- **Achat direct Holybro** (hors UE) : il faut ajouter le port, la TVA de 20 % et parfois des frais de dédouanement. Les prix en $ ne sont pas comparables tels quels aux prix TTC français.

## Ce qui ferait changer d'avis
- Le kit ARF reste introuvable en Europe pendant plus de 4 semaines → option A avec le cadre seul (Unmanned Tech UK : 112,75 £, en stock) ou un châssis équivalent.
- La phase 3 prévoit une charge utile de plus de 800 g → la propulsion du kit devient juste (Holybro annonce ~1 kg de charge utile à 70 % des gaz). Il faudrait alors passer en 2814/700 KV + 12".

## Comment revenir en arrière
Les moteurs et les ESC du kit sont démontables. Le cadre reste utilisable avec n'importe quelle propulsion en fixation 16×16 / 19×19 mm.
