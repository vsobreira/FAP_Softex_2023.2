import { Sanduiche } from "./interfaceSanduiche";

export class SanduicheSimples implements Sanduiche {
    getDescricao(): string {
        return "Sanduba simples";
    }

    getCusto(): number {
        return 3;
    }
}