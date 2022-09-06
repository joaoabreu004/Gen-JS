import { Pessoa } from './pessoa';

export class Cliente implements Pessoa{
    nome: string;
    cpf: string;
    rg: string;
    idade: number;
    idCliente: number; 
    pontos = 0
    constructor(nome: string, cpf:string, rg:string, idade: number, idCliente: number){
        this.nome = nome, 
        this.cpf = cpf, 
        this.rg = rg, 
        this.idade = idade
        this.idCliente = idCliente
    }

    comprarProdutos(): number{
        return this.pontos += 10; 
    }
}