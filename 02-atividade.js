/*
    Ler 10 números e imprimir quantos são pares e quantos são ímpares. (FOR) 
*/
const prompt = require("prompt-sync")();

let numPares = 0;
let numImpares = 0;

for(let i = 0; i < 10; i++){
    let num = Number(prompt("Digite um número: "));
    if(num % 2 == 0){
        numPares++
    }else{
        numImpares++
    }
}

console.log(`São ${numPares} números pares`);
console.log(`E são ${numImpares} número ímpares`); 