// Importation des packages
const fs = require('fs')

/*
Vous pouvez utiliser diverse fonction tel que :
  Ecrire dans un nouveau fichier :
    - echo "votre contenu" >> fichierCible.extension dossierCible
  Lire le contenu d'un dossier :
    - ls votreDossier
  Déplacer un fichier dans un autre dossier:
    - mv votreFichier dossierCible
    */

// Fonction echo
const echo = (contenu, cible) => {
  // Verification de la commande echo
  if (process.argv.length < 6 || process.argv.length > 7 || process.argv[4] === '>>') {
    console.log('La fonction echo s\'utilise : node main.js echo "votre contenu" >> fichierCible.extension dossierCible\nAttention le contenu texte doit être entre des guillemets.')
    process.exit(1)
  }
  // Le dossier cible existe ?
  if (process.argv.length === 7) {
    if (!(fs.existsSync(process.argv[8]))) {
      console.log(`Le dossier ${process.argv[8]} n'existe pas.`)
      process.exit(1)
    }
  }
  // Le fichier cible existe déjà
  let isExist = false
  if ()


    return contenu
}

// Exportation des fonctions
exports.echo = echo