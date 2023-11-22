import { Strategy } from "./interfaceStrategy";

export class Calculadora {
    private strategy: Strategy | null = null;

    setStrategy(strategy: Strategy): void {
        this.strategy = strategy;
    }

    executarCalculo(num1: number, num2: number): number {
        if (!this.strategy) {
            throw new Error ("Estratégia não definida.");
        }
        return this.strategy.execute(num1,num2);
    }
}