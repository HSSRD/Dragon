# Règles du Projet Dragon (pour l'IA et pour nous)

## Méthode
1. **Rien n'est acheté, câblé ou flashé sans trace écrite.** Une décision structurante = un ADR dans `docs/decisions/` (contexte, options comparées, choix, risques, comment revenir en arrière).
2. **Tout choix est challengé.** Pour chaque recommandation, l'IA donne : l'alternative crédible, ce qui ferait changer d'avis, et ce qui est incertain. Les chiffres (prix, poids, poussée) non vérifiés sont marqués *(à vérifier)*.
3. **Vérifier avant d'acheter.** Avant une commande, l'IA revérifie les références (disponibilité, compatibilité connecteurs/tension, fiche technique) — ses connaissances peuvent être datées.
4. **Journal de bord.** Chaque session de montage/test = une entrée `docs/journal/AAAA-MM-JJ-sujet.md` : ce qui a été fait, mesures, problèmes, photos, prochaine étape.
5. **Critères de validation explicites.** Chaque étape se termine par un test mesurable, pas par « ça a l'air bon ».

## Sécurité (non négociable)
- **Hélices démontées** pour tout travail sur table (configuration, moteurs, firmware). On ne remet les hélices qu'au moment de voler.
- Première mise sous tension après soudure : **smoke stopper** (ou alimentation de labo limitée en courant).
- Batteries LiPo : charge sous surveillance, dans un sac ignifuge, jamais de batterie gonflée/abîmée.
- Toujours un **interrupteur d'armement/coupure** sur la radiocommande et un **failsafe testé** avant le premier vol.
- Premiers vols : espace dégagé, personne autour, pilote derrière le drone.
- Respect de la réglementation (DGAC / AlphaTango) — voir `docs/phase-1-construction/README.md` §1.

## Langue
Documentation en français. Noms de fichiers en minuscules avec tirets.
