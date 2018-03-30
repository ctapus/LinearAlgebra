class Stack<T> {
	private stack: Array<T>;
	constructor() {
		this.stack = [];
	}
	public isEmpty(): boolean {
		return this.stack.length === 0;
	}
	public push(element: T): void {
		this.stack.push(element);
	}
	public pop(): T {
		if (this.isEmpty()) { throw "Stack is empty"; }
		return this.stack.pop();
	}
	public peek(): T {
		if (this.isEmpty()) { throw "Stack is empty"; }
		return this.stack[this.stack.length - 1];
	}
	public toArray(): Array<T> {
		return this.stack;
	}
}