import { Pessoa } from './pessoa';

export class Funcionario implements Pessoa{
    nome: string;
    cpf: string;
    rg: string;
    idade: number;
    idFuncionario: number; 
    salario = 0
    constructor(nome: string, cpf:string, rg:string, idade: number, idFuncionario: number, salario: number){
        this.nome = nome, 
        this.cpf = cpf, 
        this.rg = rg, 
        this.idade = idade,
        this.idFuncionario = idFuncionario, 
        this.salario = salario
    }

    efetivarVenda(valorVenda: number){
        let taxa = valorVenda * (2/100)
        return this.salario += taxa 
    }

}