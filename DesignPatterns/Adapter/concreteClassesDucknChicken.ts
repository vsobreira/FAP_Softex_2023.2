import { Galinha } from "./interfacesDucknChicken";
import { Pato } from "./interfacesDucknChicken";

export class GalinhaDeGranja implements Galinha {
    cacarejar(): void {
        console.log("Cococó!");
    }
    botarOvo(): void {
        console.log("A galinha botou um ovo.");
    }
}

export class PatoSilvestre implements Pato {
    grasnar(): void {
        console.log("Quack quack!");
    }
    voar(): void {
        console.log("O pato está voando! É tempo de migração.");
    }
}