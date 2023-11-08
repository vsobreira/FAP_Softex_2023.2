// interface comum para todos os produtos
export interface Product {
    get type(): string;
    get ram(): number;
    get hdd(): number;
    get cpu(): number;
    toString(): string;
}