import { Computer } from "./Computer";

export class PC extends Computer {
    constructor (type:string, ram:number, hdd:number, cpu:number, preco:number) {
        super(type,ram,hdd,cpu,preco);
    }
}

export class Server extends Computer {
    constructor(type:string, ram:number, hdd:number, cpu:number, preco:number) {
        super(type,ram,hdd,cpu,preco);
    }
}