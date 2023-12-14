export interface Observer {
    update(): void;
}

export interface Subject {
    addObserver(observer: Observer): void;
    removeObserver(observer: Observer): void;
    notifyObserver(): void;
}