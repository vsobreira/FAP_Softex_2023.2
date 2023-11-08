import { Computer } from "./Computer";
import { PC } from "./PCandServer";
import { Server } from "./PCandServer";

export class ComputerFactory {
    static createProduct(type:string, ram:number, hdd:number, cpu:number, preco:number) : Computer {
        if (type.toLowerCase() == "pc") {
            return new PC(type,ram,hdd,cpu,preco);
        } else if (type.toLowerCase() == "server") {
            return new Server(type,ram,hdd,cpu,preco);
        } else {
            throw new Error ("Tipo desconhecido.");
        }
    }
}