// Importation des packages
const fs = require('fs') // Natif à JS

// Ecrire dans un fichier (création s'il n'existe pas)
fs.writeFileSync('./nouveauFichier.txt', 'Voilà le premier texte')

// Lire un fichier
let lecture = fs.readFileSync('./nouveauFichier.txt', 'utf-8')
console.log(lecture)

// Créer un nouveau dossier
fs.mkdirSync('./nouveauDossier')

// Copier coller un fichier
let copy = fs.readFileSync('./nouveauFichier.txt', 'utf-8')
fs.writeFileSync('nouveauDossier/fichierCopié.txt', copy)

// Effacer un fichier
fs.unlinkSync('nouveauDossier/fichierCopié.txt')
fs.unlinkSync('./nouveauFichier.txt')

// Effacer un dossier
fs.rmdirSync('./nouveauDossier')

// Lire le contenu d'un dossier (sous forme d'un tableau)
let list = fs.readdirSync('./')
console.log(list)


if (fs.existsSync('nouveauDossier/fichierCopié.txt')) {
  console.log('Youpi')
} else {
  console.log('ooooh')
}



// Tests
fs.mkdirSync('./nouveauDossier')

if (fs.existsSync('nouveauDossier')) {
  console.log('Youpi')
} else {
  console.log('ooooh')
}