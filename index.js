const userName = require('./informations');

const chalk = require('chalk');

//console.log(chalk.blue('Hello, npm!'));

//on aurait pu 
//- soit boucler sur le tableau (plus compliqué que ça en a l'air)
//- soit tout entrer dans un unique console.log : console.log(`${chalk.blue('Ranto')} et ${chalk.green('Anaïs')}`);

console.log(chalk.yellow(`${userName.wilders[0]}`));
console.log(chalk.green(`${userName.wilders[1]}`));
console.log(chalk.red(`${userName.wilders[2]}`));
console.log(chalk.blueBright(`${userName.wilders[3]}`));

//Ajouter un alias npm start : "start" dans script package.json, et lancer avec npm start
//Avec un autre alias, comme truc, il faudrait lancer avec npm run truc
//mettre en repo Git

//https://www.npmjs.com/package/chalk

// Create a Node.js project and use an external package:

// initiating a new Node.js project called "wilders".
// When you type npm start in the console, the program should display the names of 4 of your wilder colleagues in different colours. To do this, use the chalk package 
// Your code must be versioned and available for deposit to your github account. Ask one of your colleagues to clone and test it.