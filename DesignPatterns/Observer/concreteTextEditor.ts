import { Subject, Observer } from "./interfacesObsNSubj";

export class TextEditor implements Subject {
    private observers: Observer[] = [];
    private lines: string[] = [];

    addObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer): void {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }

    notifyObserver(): void {
        for (const observer of this.observers) {
            observer.update();
        }
    }

    insertLine(lineNumber: number, text: string): void {
        this.lines.splice(lineNumber - 1, 0 , text);
        this.notifyObserver();
    }

    removeLine(lineNumber: number, text: string): void {
        this.lines.splice(lineNumber - 1, 1);
        this.notifyObserver();
    }

    getLines(): string[] {
        return [...this.lines];
    }
}