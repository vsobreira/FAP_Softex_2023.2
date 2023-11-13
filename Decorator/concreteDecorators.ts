import { Sanduiche } from "./interfaceSanduiche";
import { aditionalDecorator } from "./abstractDecorator";

export class FrangoAssado extends aditionalDecorator {
    constructor(sanduiche: Sanduiche) {
        super(sanduiche);
    }

    getDescricao(): string {
        return `${this.sanduiche.getDescricao()} + steak de frango`;
    }

    getCusto(): number {
        return this.sanduiche.getCusto() + 3.50;
    }
}

export class Pepperoni extends aditionalDecorator {
    constructor (sanduiche: Sanduiche) {
        super(sanduiche);
    }

    getDescricao(): string {
        return `${this.sanduiche.getDescricao()} + pepperoni`;
    }

    getCusto(): number {
        return this.sanduiche.getCusto() + 0.99;
    }
}

export class QueijoMussarela extends aditionalDecorator {
    constructor(sanduiche: Sanduiche) {
        super(sanduiche);
    }

    getDescricao(): string {
        return `${this.sanduiche.getDescricao()} + queijo mussarela`;
    }

    getCusto(): number {
        return this.sanduiche.getCusto() + 1.99;
    }
}