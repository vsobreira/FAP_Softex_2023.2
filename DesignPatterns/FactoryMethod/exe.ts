import { Computer } from "./Computer";
import { ComputerFactory } from "./FactoryMethod";
import { PC } from "./PCandServer";
import { Server } from "./PCandServer";

const FabricaDeComputador = new ComputerFactory();
const PCzinho = ComputerFactory.createProduct("PC",4,1,2,4000);
const Serverzinho = ComputerFactory.createProduct("Server",16,4,8,3000);

console.log(PCzinho.toString());
console.log(Serverzinho.toString());