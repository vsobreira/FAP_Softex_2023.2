import { Galinha } from "./interfacesDucknChicken";
import { Pato } from "./interfacesDucknChicken";

export class AdaptadorPato implements Galinha {
    private pato: Pato;

    constructor(pato: Pato) {
        this.pato = pato;
    }

    cacarejar(): void {
        this.pato.grasnar();
    }

    botarOvo(): void {
        console.log("Incrível! O pato silvestre botou um ovo.");
    }
}