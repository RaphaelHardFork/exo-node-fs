// Message d'acceuil
console.log(`\
Bienvenue dans le faux Linux

Vous pouvez utiliser diverse fonction tel que :
  Ecrire dans un nouveau fichier :
    - echo "votre contenu" >> fichierCible.extension
  Lire le contenu d'un dossier :
    - ls votreDossier
  Déplacer un fichier dans un autre dossier:
    - mv votreFichier dossierCible
    
    `)


// Gestion des erreurs du terminal
if (process.argv.length === 2) {
  console.log('Vous devez sélectionner une des fonctions ci-dessus en argument')
  process.exit(1)
}
if (process.argv[2] !== 'echo' && process.argv[2] !== 'ls' && process.argv[2] !== 'mv') {
  console.log('Vous avez entrer une fonction qui n\'existe pas')
  process.exit(1)
}

// Importation des fonctions
const { echo } = require('./fonctionLinux')

// Choix de la fonction
switch (process.argv[2]) {
  case 'echo':
    console.log(echo(process.argv[3]))
    break
  default:
    console.log('DEFAULT')
}