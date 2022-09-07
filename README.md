# cantiniere_aston
Projet 1 front Aston

## Liens utiles

Tâches en cours : https://docs.google.com/spreadsheets/d/16hEQ4JFsvmL_tY8ghXHF59MyWPwJxb8nRIRnOqpAmug/edit?usp=sharing

Maquette : https://www.figma.com/file/z3fHWypK45At2UaAsv5VdQ/Project-Cafetaria?node-id=0%3A1

Discord : https://discord.gg/2Cfng5FwP3

Fichiers utiles : https://drive.google.com/file/d/19zDyMm1bVu6r04lzEK0U8uumgXV5pQ-W/view?usp=sharing

Trello : https://trello.com/b/njZDLpRR/projet-cantini%C3%A8re


## Commandes Git de base

Pour cloner le projet : `git clone https://github.com/Myrrhe/cantiniere_aston.git`

Pour voir sur quelle branche vous êtes : `git branch`

Pour aller d'une branche à l'autre : `git checkout la-branche-ou-je-veux-aller`

Pour créer une nouvelle branche : `git checkout -b ma-branche` (on créera les nouvelles branches à partir de develop à priori)

Pour puller (recopier) une branche : `git pull origin la-branche` (en général, on fera `git pull origin develop`)

Pour ajouter des fichiers à un commit : `git add --all`

Pour commiter : `git commit -m "Message de commit"`

Pour mettre une branche à jour selon develop : `git rebase origin develop` Tachez de toujours rebaser vos branches avant de pusher, ça limitera les conflits.

Pour pusher une branche : `git push origin ma-branche` N'oubliez pas d'ouvrir une pull request sur Github ensuite
\
\
En tout premier :

1) `git clone https://github.com/Myrrhe/cantiniere_aston.git` On clone le projet
2) `cd cantiniere_aston` On se déplace dans le répertoire qu'on a cloné
3) `git branch` On est censé obtenir * *main*
4) `git checkout -b develop` On crée la branche develop
5) `git pull origin develop` On met à jour develop


On fera en général les choses de la manière suivante :

1)  `git branch` On vérifie qu'on est bien sur develop. Si on y est pas -> `git checkout develop`
2)  `git checkout -b nouvelle-branche` Ça nous téléporte automatiquement sur la nouvelle branche, pas besoin de refaire de checkout
3)  Codage. N'oubliez pas Ctrl+S !
4)  `git add --all` On ajoute les fichiers crées/modifiés
5)  `git commit -m "Message de commit"` Essayez de mettreun message de commit explicit
6)  `git checkout develop` On revient sur develop
7)  `git pull origin develop` On met à jour develop
8)  `git checkout nouvelle-branche` On revient sur la branche crée initialement
9)  `git rebase origin develop` On met à jour la branche. S'il y a des conflits, on les règle, puis on fait `git rebase --continue`
10) `git push origin nouvelle-branche` On push notre branche. Dans certain cas, il faudra faire `git push origin nouvelle-branche --force-with-lease`
11) On crée la pull request
12) On vérifie le code, puis on merge
