# cantiniere_aston
Projet 1 front Aston

========================================================================

## Liens utiles

Informations du groupe : https://docs.google.com/spreadsheets/d/16hEQ4JFsvmL_tY8ghXHF59MyWPwJxb8nRIRnOqpAmug/edit?usp=sharing

Maquette : https://www.figma.com/file/AZuQ4VctJVrueeOoPrESa5/Projet-Cantini%C3%A8re

Discord : https://discord.gg/2Cfng5FwP3

Fichiers utiles : https://drive.google.com/drive/folders/150ZGsJmORCVcEgTTWgUn278cImbprdAh

Trello : https://trello.com/b/njZDLpRR/projet-cantini%C3%A8re

Wiki du back-end : https://ferretrenaud.ovh/renaud91/stone.lunchtime/-/wikis/home

## Commandes Git de base

Pour cloner le projet : `git clone https://github.com/Myrrhe/cantiniere_aston.git`

Pour voir sur quelle branche vous êtes : `git branch`

Pour aller d'une branche à l'autre : `git checkout la-branche-ou-je-veux-aller`

Pour créer une nouvelle branche : `git checkout -b ma-branche` (on créera les nouvelles branches à partir de proto à priori)

Pour puller (recopier) une branche : `git pull origin la-branche` (en général, on fera `git pull origin proto`)

Pour ajouter des fichiers à un commit : `git add --all`

Pour commiter : `git commit -m "Message de commit"`

<<<<<<< HEAD
Pour mettre une branche à jour selon proto : `git rebase origin/proto` Tachez de toujours rebaser vos branches avant de pusher, ça limitera les conflits.
=======
Pour mettre une branche à jour selon develop : `git rebase origin/develop` Tachez de toujours rebaser vos branches avant de pusher, ça limitera les conflits.
>>>>>>> develop

Pour pusher une branche : `git push origin ma-branche` N'oubliez pas d'ouvrir une pull request sur Github ensuite
\
\
En tout premier :

1) `git clone https://github.com/Myrrhe/cantiniere_aston.git` On clone le projet
2) `cd cantiniere_aston` On se déplace dans le répertoire qu'on a cloné
3) `git branch` On est censé obtenir * *main*
<<<<<<< HEAD
4) `git checkout -b proto` On crée la branche proto
5) `git pull origin ptoto` On met à jour proto
=======
4) `git checkout -b develop` On crée la branche develop
<<<<<<< HEAD
5) `git pull origin ptoto` On met à jour develop
>>>>>>> develop
=======
5) `git pull origin develop` On met à jour develop
>>>>>>> d34e1bbd46709fc83bab82da89a35d49e751099e


On fera en général les choses de la manière suivante :

1)  `git branch` On vérifie qu'on est bien sur proto. Si on y est pas -> `git checkout proto`
2)  `git checkout -b nouvelle-branche` Ça nous téléporte automatiquement sur la nouvelle branche, pas besoin de refaire de checkout
3)  Codage. N'oubliez pas Ctrl+S !
4)  `git add --all` On ajoute les fichiers crées/modifiés
5)  `git commit -m "Message de commit"` Essayez de mettreun message de commit explicit
6)  `git checkout proto` On revient sur proto
7)  `git pull origin proto` On met à jour proto
8)  `git checkout nouvelle-branche` On revient sur la branche crée initialement
<<<<<<< HEAD
9)  `git rebase origin proto` On met à jour la branche. S'il y a des conflits, on les règle, puis on fait `git rebase --continue`
10) `git push origin nouvelle-branche` On push notre branche. Dans certain cas, il faudra faire `git push origin nouvelle-branche --force-with-lease`
11) On crée la pull request
12) On vérifie le code, puis on merge
=======

EN CAS DE CONFLITS :

Il y a plusieurs manière de régler les conflits, celle présentée ici n'en est qu'une parmis d'autres.

9)  `git rebase origin develop` On met à jour la branche. S'il y a des conflits, on les règle, puis on fait `git rebase --continue`
10) `git push origin nouvelle-branche` On push notre branche. Dans certain cas, il faudra faire `git push origin nouvelle-branche --force-with-lease`
11) On crée la pull request
12) On vérifie le code, puis on merge
=======
    10)  `git rebase origin develop` On met à jour la branche. S'il y a des conflits, on les règle, puis on fait `git rebase --continue`

11) `git push origin nouvelle-branche` On push notre branche. Dans certain cas, il faudra faire `git push origin nouvelle-branche --force-with-lease`
12) On crée la pull request
13) On vérifie le code, puis on merge
>>>>>>> develop
