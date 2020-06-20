export class Dictionary<T> {
	private items: { [index: string]: T } = {};
	private count: number = 0;
	public Add(key: string, value: T): void {
		if (!this.items.hasOwnProperty(key)) {
			this.count++;
		}
		this.items[key] = value;
	}
	public ContainsKey(key: string): boolean {
		return this.items.hasOwnProperty(key);
	}
	public Count(): number {
		return this.count;
	}
	public Item(key: string): T {
		return this.items[key];
	}
	public Remove(key: string): T {
		const val = this.items[key];
		delete this.items[key];
		this.count--;
		return val;
	}
	public Keys(): string[] {
		const keySet: string[] = [];
		for (const prop in this.items) {
			if (this.items.hasOwnProperty(prop)) {
				keySet.push(prop);
			}
		}
		return keySet;
	}
	public Values(): T[] {
		const values: T[] = [];
		for (const prop in this.items) {
			if (this.items.hasOwnProperty(prop)) {
				values.push(this.items[prop]);
			}
		}
		return values;
	}
	public DeepCopy(): Dictionary<T> {
		const ret: Dictionary<T> = new Dictionary<T>();
		for (const item in this.items) {
			ret.items[item] = this.items[item];
		}
		ret.count = this.count;
		return ret;
	}
}