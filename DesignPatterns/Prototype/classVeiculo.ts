export abstract class Veiculo {
    constructor (
        protected modelo: string,
        protected marca: string,
        protected rodas: number,
        protected cor: string
    ) {}

    abstract clone(): Veiculo;

    public represent(): string {
        return `Marca: ${this.marca},
            Modelo: ${this.modelo},
            Rodas: ${this.rodas},
            Cor: ${this.cor}`;
    }

}