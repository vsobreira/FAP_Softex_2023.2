import { Editor } from "./concreteEditor";
import { TextEditor } from "./concreteTextEditor";

const textEditor = new TextEditor();
const editor = new Editor(textEditor);

console.log("Digite as linhas de texto (ou 'EOF' para encerrar).");

let lineNumber = 1;
let texticulo: string = "";

do {
    texticulo = prompt(`Digite o que você quer na linha ${lineNumber} (ou 'EOF' para encerrar). `) || "";
    if (texticulo.toUpperCase() !== "EOF") {
        textEditor.insertLine(lineNumber, texticulo);
        lineNumber++;
    }
} while (texticulo.toUpperCase() !== "EOF");

textEditor.removeObserver(editor);

console.log("\n Conteúdo salvo!");
console.log(textEditor.getLines());