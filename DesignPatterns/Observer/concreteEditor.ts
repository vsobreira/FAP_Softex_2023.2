import { Observer } from "./interfacesObsNSubj";
import { TextEditor } from "./concreteTextEditor";

export class Editor implements Observer {
    private textEditor: TextEditor;

    constructor(textEditor: TextEditor) {
        this.textEditor = textEditor;
        this.textEditor.addObserver(this);
    }

    update(): void {
        this.display();
    }

    display(): void {
        console.log("Conteúdo do editor: ");
        const lines = this.textEditor.getLines();
        for (let i = 0; i<lines.length; i++) {
            console.log(`${i+1}. ${lines[i]}`);
        }
    }
}