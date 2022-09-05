/*
    Escrever um programa que receba vários números inteiros no teclado. E no
    final imprimir a média dos números múltiplos de 3. Para sair digitar
    0(zero).(DO...WHILE)
 */
const prompt = require("prompt-sync")();

let num = 0; let mult3 = 0; let somaMult3 = 0

do{
    num = Number(prompt("DIGITE UM NÚMERO: "));
    if(num % 3 == 0 && num != 0){
        somaMult3+= num; 
        mult3++; 
    }
}while(num != 0); 

console.log(`A MÉDIA DOS NÚMEROS MÚLTIPLOS É ${somaMult3/mult3}`); 
console.log(somaMult3);
console.log(mult3)
