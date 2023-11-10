import { Veiculo } from "./classVeiculo";

export class Carro extends Veiculo {
    constructor (
        modelo: string,
        marca: string,
        rodas: number,
        cor: string,
        private portas: number,
        private potencia: number
    ) {
        super(modelo, marca, rodas, cor);
    }

    clone(): Veiculo {
        return new Carro(
            this.modelo,
            this.marca,
            this.rodas,
            this.cor,
            this.portas,
            this.potencia
        );
    }

    override represent(): string {
        return super.represent() + `
            Portas: ${this.portas},
            Potência: ${this.potencia} cv.
            CARRO`;
    }
}