import { Funcionario } from './src/funcionario';
import { Cliente } from './src/cliente';
import { Preguica } from './src/preguica';
import { Cavalo } from './src/cavalo';
import { Animal } from "./src/animal"
import { Cachorro } from "./src/cachorro"


const cachorro1 = new Cachorro("Bento", 7, "PRETO");
const cavalo1 = new Cavalo("Pé de Pano", 9, "MARROM"); 
const preguica = new Preguica("Sid", 10, "BEGÊ")

cachorro1.emitirSom(); 
cachorro1.locomocao(); 

cavalo1.emitirSom(); 
cavalo1.locomocao(); 

preguica.emitirSom(); 
preguica.locomocao(); 

const cliente1 = new Cliente("Joao", "2345678", "12345678", 18, 2)
cliente1.comprarProdutos(); 
console.log(`PONTOS DO CLIENTE ${cliente1.nome}: ${cliente1.pontos}pts`)

const funcionario1 = new Funcionario("Jefferson", "1234567", "123456", 22, 4, 3000)

funcionario1.efetivarVenda(100);
funcionario1.efetivarVenda(500)
console.log(`SALÁRIO DO COLABORADOR ${funcionario1.nome}: ${funcionario1.salario}`); 
