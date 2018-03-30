declare class Stack<T> {
    private stack;
    constructor();
    isEmpty(): boolean;
    push(element: T): void;
    pop(): T;
    peek(): T;
    toArray(): Array<T>;
}
