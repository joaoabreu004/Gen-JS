import { Animal } from "./animal";

export class Preguica extends Animal{
    constructor(nome: string, idade: number, cor: string) {
        super(nome, idade, cor);
    }

    locomocao(): void {
       console.log("SUBINDO ÁRVORE");
    }
    emitirSom(): void {
        console.log("ZZZZZZZZZZZZZ"); 
    }
}