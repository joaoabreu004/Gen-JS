import { Animal } from "./animal";

export class Cachorro extends Animal{
    constructor(nome: string, idade: number, cor: string){
        super(nome, idade, cor);  
    }


    locomocao(): void {
        console.log("Correndo!")
    }

    emitirSom(): void {
        console.log("AU AU AU AU!!")
    }
}    