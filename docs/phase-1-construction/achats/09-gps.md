# 09 — GPS & compas

[← Doc globale](../README.md) · [Challenge global](../challenge-2026-11-20.md)

> **Révision 2026-11-20 :**
> - La **Matek M10Q-5883 est en fin de vie (EOL)** ✅.
> - Holybro M10 : choisir la variante de compas **IST8310**.

## Rôle
- **Position** : maintien de position, retour au point de départ, missions par points de passage (waypoints).
- **Compas** : le cap du drone, monté en hauteur, loin des câbles de puissance.

## Faits vérifiés ✅
| Produit | Caractéristiques | Prix |
|---|---|---|
| **Holybro M10 GPS** | Compas **IST8310 ou IST8308** (variante à choisir), connecteur 10 broches (standard Pixhawk) ou 6 broches, 32 g. Nécessite PX4 ≥ 1.14 ou ArduPilot ≥ 4.3 | 43,99 $ HT ([Holybro](https://holybro.com/products/m10-gps)) ; 44–55 € chez Studiosport (prix ambigu, rupture) |
| Holybro Micro M10 | Plus petit | 27,99 $ HT ([Holybro](https://holybro.com/products/micro-m10-gps)) |
| Matek M10Q-5883 | — | ❌ EOL, « no stocks/substitutes » ([Matek](https://www.mateksys.com/?portfolio=m10q-5883)) |

## Recommandation
**Holybro M10 GPS, variante IST8310, connecteur 10 broches**, plus un **mât GPS**. Le mât est fourni avec le kit X500 V2 *(à vérifier sur le bordereau)*.

## Challenge (renforcé)
- **« Pourquoi l'IST8310 et pas l'IST8308 ? »** PX4 ne gère l'IST8308 sur le 6C qu'à partir de la v1.16 ✅. L'IST8310 marche partout. Même prix.
- **« Le Micro M10 à 28 $ ? »**
  - Plus petite antenne → fix plus lent, moins de satellites.
  - Pas de bouton de sécurité ni de buzzer, et le connecteur est différent *(à vérifier)*.
  - **15 $ d'économie qui dégradent la sécurité. Non.**
- **« Un GPS AliExpress à 15 € ? »**
  - Beaucoup de modules « M10 » sont des copies, avec un compas mal orienté ou absent.
  - Un mauvais compas donne le « toilet bowl » (le drone tourne en spirale) en maintien de position.
  - **Non pour le GPS principal.**
- **« Le GPS est-il nécessaire pour un premier vol ? »** Pour voler, non. **Pour la sécurité d'un débutant, oui** : maintien de position et retour automatique.
- **« Deux GPS pour la redondance ? »** Le 6C a un port GPS2. C'est une bonne idée pour les phases 4–5 (missions loin), **pas en phase 1**.

## Pièges
- Interférences magnétiques : mât + câbles de puissance torsadés.
- Flèche du module vers l'avant.
- Premier fix : plusieurs minutes, en extérieur dégagé.

## Où acheter

| Produit | Boutique spécialisée (page vérifiée) | Amazon | AliExpress | Leboncoin |
|---|---|---|---|---|
| Holybro M10 GPS | [Holybro](https://holybro.com/products/m10-gps) · [Studiosport](https://www.studiosport.fr/module-gps-m10-holybro-a27639.html) | [recherche](https://www.amazon.fr/s?k=holybro+m10+gps) | [recherche (boutique Holybro uniquement)](https://fr.aliexpress.com/w/wholesale-holybro-m10-gps.html) | [recherche](https://www.leboncoin.fr/recherche?text=gps%20holybro%20m10) |
| Mât GPS pliable | — | [recherche](https://www.amazon.fr/s?k=mat+gps+pliable+drone) | [recherche](https://fr.aliexpress.com/w/wholesale-foldable-gps-mount-drone.html) | — |

## Validation
- [ ] Fix 3D, ≥ 10 satellites, HDOP < 1,5 en extérieur.
- [ ] Calibration du compas réussie, cap = boussole du téléphone ±10°.
- [ ] Le cap ne bouge pas quand on met les gaz (sans hélices).
