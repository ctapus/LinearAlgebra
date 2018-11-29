declare class Queue<T> {
    private queue;
    constructor();
    isEmpty(): boolean;
    enqueue(element: T): void;
    dequeue(): T;
    peek(): T;
    toArray(): Array<T>;
}
