// O usuário digitará sua idade e o programa deverá printar o ano em que ele nasceu.
const prompt = require("prompt-sync")();

let age = Number(prompt("DIGITE SUA IDADE?: "));
let jaCompletou = prompt("VOCÊ JÁ COMPLETOU NESSE ANO?: (S/N) ");
if(jaCompletou == "n"){
    age++; 
    console.log(`VOCÊ NASCEU EM ${retornaAno(age)}`); 
}else {
    console.log(`VOCÊ NASCEU EM ${retornaAno(age)}`);
}




function retornaAno(idade){
    var today = new Date();
    var ano = today.getFullYear();
    return ano - idade;
}