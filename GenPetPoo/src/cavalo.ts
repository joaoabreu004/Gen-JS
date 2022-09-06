import { Animal } from "./animal";

export class Cavalo extends Animal{
    constructor(nome: string, idade: number, cor: string){
        super(nome, idade, cor); 
    }

    locomocao(): void {
        console.log("Correndo!");
    }
    emitirSom(): void {
        console.log("IH AH IH AH IH AH");
    }   
}