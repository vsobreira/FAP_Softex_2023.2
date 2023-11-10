import { Veiculo } from "./classVeiculo";

export class Motocicleta extends Veiculo {
    constructor (
        modelo: string,
        marca: string,
        rodas: number,
        cor: string,
        private cilindradas: number
    ) {
        super(modelo,marca,rodas,cor);
    }

    clone(): Veiculo {
        return new Motocicleta(
            this.modelo,
            this.marca,
            this.rodas,
            this.cor,
            this.cilindradas
        );
    }

    override represent(): string {
        return super.represent() + `
            Cilindradas: ${this.cilindradas} cc.
            MOTOCICLETA`
    }
}