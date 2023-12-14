import { Sanduiche } from "./interfaceSanduiche";

export abstract class aditionalDecorator implements Sanduiche {
    protected sanduiche: Sanduiche;

    constructor (sanduiche: Sanduiche) {
        this.sanduiche = sanduiche;
    }
    
    abstract getDescricao(): string;
    abstract getCusto(): number;
}