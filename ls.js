// Importation des packages
const fs = require('fs')

let pathFolder

// Erreurs terminal
if (process.argv.length < 3 || process.argv.length > 4) {
  console.log(`usage: node ls.js ls pathOfYourFolder`)
  process.exit(1)
}

if (process.argv[2] !== 'ls') {
  console.log('The only function avialiable is ls')
  process.exit(1)
}

// Option par default
if (process.argv.length === 3) {
  pathFolder = './'
} else {
  pathFolder = process.argv[3]
}

// La fontion
const ls = (path) => {
  //Is exist?
  if (!fs.existsSync(path)) {
    console.log(`The path ${path} doesn't exist`)
    process.exit(1)
  }
  // Is directory?
  let stats = fs.statSync(path)
  if (!(stats.isDirectory())) {
    console.log(`The path ${path} is not defined as a directory.`)
    process.exit(1)
  }
  // Lecture du dossier
  let folder = fs.readdirSync(path)

  // Affichage du contenu sous forme de liste
  for (let elem of folder) {
    console.log(elem)
  }
}


ls(pathFolder)