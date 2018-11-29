export class Queue<T> {
	private queue: T[];
	constructor() {
		this.queue = [];
	}
	public isEmpty(): boolean {
		return this.queue.length === 0;
	}
	public enqueue(element: T): void {
		this.queue.push(element);
	}
	public dequeue(): T {
		if (this.isEmpty()) { throw new Error("Queue is empty"); }
		return this.queue.shift();
	}
	public peek(): T {
		if (this.isEmpty()) { throw new Error("Queue is empty"); }
		return this.queue[0];
	}
	public toArray(): T[] {
		return this.queue;
	}
}