import { Product } from "./interfaceProduct";

export abstract class Computer implements Product {
    constructor (type:string, ram:number, hdd:number, cpu:number, preco:number) {
        type = this.type;
        ram = this.ram
        hdd = this.hdd
        cpu = this.cpu
        preco = this.preco;
    }

    get type(): string {
        return this.type;
    }
    get ram(): number {
        return this.ram;
    }
    get hdd(): number {
        return this.hdd;
    }
    get cpu(): number {
        return this.cpu;
    }
    get preco(): number {
        return this.preco;
    }
    toString(): string {
        return `Tipo: ${this.type}
                RAM: ${this.ram}
                HDD: ${this.hdd}
                CPU: ${this.cpu}
                Preço: ${this.preco}
                `
    }
}