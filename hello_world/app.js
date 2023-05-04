const readline = require('readline');
const read = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



var nome = "";


function how_name(name){
	nome = name;
	console.log("hello world, "+nome+"!");
}

read.question('Qual o seu nome? ', (name) => {
  how_name(name);
  read.close();
});





