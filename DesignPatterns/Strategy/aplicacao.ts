import { Strategy } from "./interfaceStrategy";
import { SomaStrategy } from "./concreteStrategy";
import { SubtracaoStrategy } from "./concreteStrategy";
import { MultiplicacaoStrategy } from "./concreteStrategy";
import { Calculadora } from "./contextCalculadora";

const calculadora = new Calculadora();

let num1 = Number(prompt("Digite o primeiro número do cálculo: "));
let num2 = Number(prompt("Agora o segundo número: "));
let operacao = prompt("Agora o sinal da operação: \n '+' para somar \n '-' para subtrair \n '*' para multiplicar \n digite: ");

let strategy: Strategy;

switch (operacao) {
    case "+":
        strategy = new SomaStrategy();
        break;
    case "-":
        strategy = new SubtracaoStrategy();
        break;
    case "*":
        strategy = new MultiplicacaoStrategy();
        break;
    default:
        throw new Error("Operação não reconhecida. Restrinja-se às opções dadas.");
}

calculadora.setStrategy(strategy);
let resultado = calculadora.executarCalculo(num1,num2);

console.log("Resultado: ", resultado);