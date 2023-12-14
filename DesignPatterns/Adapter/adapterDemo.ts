import { Galinha } from "./interfacesDucknChicken";
import { Pato } from "./interfacesDucknChicken";
import { GalinhaDeGranja } from "./concreteClassesDucknChicken";
import { PatoSilvestre } from "./concreteClassesDucknChicken";
import { AdaptadorPato } from "./adapterDuck";

export class AdaptadorPatoDemo {
    static demonstracao(adaptador: Galinha): void {
        console.log("Demo do adaptador para Pato:");
        adaptador.cacarejar();
        adaptador.botarOvo();
        console.log("fim.");
    }
}

const pato = new PatoSilvestre();

const adaptadorPato = new AdaptadorPato(pato);

AdaptadorPatoDemo.demonstracao(adaptadorPato);