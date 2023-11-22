import { Strategy } from "./interfaceStrategy";

export class SomaStrategy implements Strategy {
    execute (num1: number, num2: number): number {
        return num1 + num2;
    }
}

export class SubtracaoStrategy implements Strategy {
    execute (num1: number, num2: number): number {
        return num1-num2;
    }
}

export class MultiplicacaoStrategy implements Strategy {
    execute (num1: number, num2: number): number {
        return num1*num2;
    }
}