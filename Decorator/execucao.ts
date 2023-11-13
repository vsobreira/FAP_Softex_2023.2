import { Sanduiche } from "./interfaceSanduiche";
import { SanduicheSimples } from "./classSanduicheSimples";
import { aditionalDecorator } from "./abstractDecorator";
import { FrangoAssado, Pepperoni, QueijoMussarela } from "./concreteDecorators";

let novoSanduiche: Sanduiche = new SanduicheSimples();

novoSanduiche = new FrangoAssado(novoSanduiche);
novoSanduiche = new Pepperoni(novoSanduiche);
novoSanduiche = new QueijoMussarela (novoSanduiche);

console.log("Descrição: " + novoSanduiche.getDescricao());
console.log("Preço: R$" + novoSanduiche.getCusto().toFixed(2));