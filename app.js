const prompt = require("prompt-sync")();

console.log("*******BEM-VINDE*******\n"); 

let nome = prompt("Digite seu nome: ");

let idade = Number(prompt("Qual é sua idade?: "));

let altura = Number(prompt("Qual é tua altura?: "))

console.log(`Meu nome é ${nome}, tenho ${idade} anos e ${altura} de altura`)