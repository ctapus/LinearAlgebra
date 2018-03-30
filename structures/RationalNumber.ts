/// <reference path="ArithmeticEvaluator.ts" />

class RationalNumber {
	public numerator: number;
	public denominator: number;
	constructor(n: number, d: number = 1) {
		if (d === 0) {
			throw "Division by zero!";
		}
		// todo: potential for overflow. When Math.sign becomes available in TypeScript use it instead of the multiplication
		let sign: number = n * d >= 0 ? 1 : -1;
		this.numerator = sign * Math.abs(n);
		this.denominator = Math.abs(d);
	}
	private greatestCommonDivisor(a: number, b: number): number {
		return b ? this.greatestCommonDivisor(b, a % b) : a;
	}
	private leastCommonMultiple(a: number, b: number): number {
		return Math.abs(a * b / this.greatestCommonDivisor(a, b));
	}
	public simplifiedForm(): RationalNumber {
		let gcd: number = this.greatestCommonDivisor(this.numerator, this.denominator);
		return new RationalNumber(this.numerator / gcd, this.denominator / gcd);
	}

	public equals(x: number | RationalNumber): boolean {
		let rn1: RationalNumber = this.simplifiedForm();
		if (typeof x === "number") {
			return rn1.numerator === x && rn1.denominator === 1;
		} else {
			let rn2: RationalNumber = x.simplifiedForm();
			return rn1.numerator === rn2.numerator && rn1.denominator === rn2.denominator;
		}
	}
	public lt(x: number | RationalNumber): boolean {
		let rn1: RationalNumber = this.simplifiedForm();
		if (typeof x === "number") {
			return rn1.numerator < x * rn1.denominator;
		} else {
			let rn2: RationalNumber = x.simplifiedForm();
			return rn1.numerator * rn2.denominator < rn2.numerator * rn1.denominator;
		}
	}
	public le(x: number | RationalNumber): boolean {
		let rn1: RationalNumber = this.simplifiedForm();
		if (typeof x === "number") {
			return rn1.numerator <= x * rn1.denominator;
		} else {
			let rn2: RationalNumber = x.simplifiedForm();
			return rn1.numerator * rn2.denominator <= rn2.numerator * rn1.denominator;
		}
	}
	public gt(x: number | RationalNumber): boolean {
		let rn1: RationalNumber = this.simplifiedForm();
		if (typeof x === "number") {
			return rn1.numerator > x * rn1.denominator;
		} else {
			let rn2: RationalNumber = x.simplifiedForm();
			return rn1.numerator * rn2.denominator > rn2.numerator * rn1.denominator;
		}
	}
	public ge(x: number | RationalNumber): boolean {
		let rn1: RationalNumber = this.simplifiedForm();
		if (typeof x === "number") {
			return rn1.numerator >= x * rn1.denominator;
		} else {
			let rn2: RationalNumber = x.simplifiedForm();
			return rn1.numerator * rn2.denominator >= rn2.numerator * rn1.denominator;
		}
	}

	// multiplicative inverse
	public reciprocal(): RationalNumber {
		if (this.denominator === 0) { throw "Division by zero!"; }
		return new RationalNumber(this.denominator, this.numerator);
	}
	// additive inverse
	public opposite(): RationalNumber {
		return new RationalNumber(this.numerator * (-1), this.denominator);
	}
	public add(x: number | RationalNumber): RationalNumber {
		if (typeof x === "number") {
			return new RationalNumber((this.numerator + x * this.denominator), this.denominator);
		} else {
			let lcm: number = this.leastCommonMultiple(this.denominator, x.denominator);
			let n1: number = this.numerator * lcm / this.denominator;
			let n2: number = x.numerator * lcm / x.denominator;
			return new RationalNumber(n1 + n2, lcm);
		}
	}
	public sub(x: number | RationalNumber): RationalNumber {
		if (typeof x === "number") {
			return new RationalNumber((this.numerator - x * this.denominator), this.denominator);
		} else {
			let lcm: number = this.leastCommonMultiple(this.denominator, x.denominator);
			let n1: number = this.numerator * lcm / this.denominator;
			let n2: number = x.numerator * lcm / x.denominator;
			return new RationalNumber(n1 - n2, lcm);
		}
	}
	public mult(x: number | RationalNumber): RationalNumber {
		if (typeof x === "number") {
			return new RationalNumber((this.numerator * x), this.denominator);
		} else {
			return new RationalNumber((this.numerator * x.numerator), x.denominator * this.denominator);
		}
	}
	public div(x: number | RationalNumber): RationalNumber {
		if (typeof x === "number") {
			return new RationalNumber((this.numerator), this.denominator * x);
		} else {
			return new RationalNumber((this.numerator * x.denominator), x.numerator * this.denominator);
		}
	}
	public exp(x: number | RationalNumber): RationalNumber {
		if (typeof x === "number") {
			return new RationalNumber(this.numerator**x, this.denominator**x);
		} else {
			if (this.denominator !== 1) { throw Error("Exponentiation with rational powers not supported."); }
			return new RationalNumber(this.numerator**x.numerator, this.denominator**x.numerator);
		}
	}
	public toNumber(): number {
		return this.numerator / this.denominator;
	}
	public toString(): string {
		return this.numerator.toString() + (1 === this.denominator ? "" : "/" + this.denominator.toString());
	}
	public deepCopy(): RationalNumber {
		return new RationalNumber(this.numerator, this.denominator);
	}
	public static fromString(code: string): RationalNumber {
		let p: Parser = new Parser();
		return p.parse(code);
	}

	private static isNumber(code: string): boolean {
		return /^\d/.test(code);
	}
	private static isOperator(code: string): boolean {
		return /[\+\-\*\/\^]/.test(code);
	}
	private static isLeftAssociativeOperator(operator: string): boolean {
		return /[\+\-\*\/]/.test(operator);
	}
	private static isRightAssociativeOperator(operator: string): boolean {
		return /[\^]/.test(operator);
	}
	private static precedence(operator: string): number {
		if (/[\+\-]/.test(operator)) {
			return 1;
		}
		if (/[\*\/]/.test(operator)) {
			return 2;
		}
		if (/[\^]/.test(operator)) {
			return 3;
		}
		throw "Unknown operator.";
	}
	public static toReversePolishNotation(code: string): string[] {
		let tokens: string[] = code.match(/\(|\)|\d+(\.\d+)?|\w+|[\+\-\*\/\^]/g);
		let i: number = 0;
		let outputQueue: Queue<string> = new Queue<string>();
		let operatorStack: Stack<string> = new Stack<string>();
		while (i < tokens.length) {
			if (this.isNumber(tokens[i])) {
				outputQueue.enqueue(tokens[i]);
			} else if (this.isOperator(tokens[i])) {
				let op1: string = tokens[i];
				while (!operatorStack.isEmpty() && this.isOperator(operatorStack.peek())) {
					if ((this.isLeftAssociativeOperator(op1) && (this.precedence(op1) <= this.precedence(operatorStack.peek()))) ||
						(this.isRightAssociativeOperator(op1) && (this.precedence(op1) < this.precedence(operatorStack.peek())))) {
						outputQueue.enqueue(operatorStack.pop());
					} else {
						break;
					}
				}
				operatorStack.push(op1);
			} else if (tokens[i] === "(") {
				operatorStack.push(tokens[i]);
			} else if (tokens[i] === ")") {
				while (!operatorStack.isEmpty() && operatorStack.peek() !== "(") {
					outputQueue.enqueue(operatorStack.pop());
				}
				if (!operatorStack.isEmpty() && operatorStack.peek() === "(") {
					operatorStack.pop();
				} else {
					throw "Mismatched parentheses.";
				}
			}
			i++;
		}
		while (!operatorStack.isEmpty()) {
			if (operatorStack.peek() === "(") {
				throw "Mismatched parentheses.";
			} else {
				outputQueue.enqueue(operatorStack.pop());
			}
		}
		return outputQueue.toArray();
	}
	private static evaluateFromRPN(tokens: string[]): RationalNumber {
		let stack: Stack<RationalNumber> = new Stack<RationalNumber>();
		for (let i: number = 0; i < tokens.length; i++) {
			if (!this.isOperator(tokens[i])) {
				stack.push(new RationalNumber(parseFloat(tokens[i])));
			} else {
				let op1: RationalNumber = stack.pop();
				let op2: RationalNumber = stack.pop();
				switch (tokens[i]) {
					case "+": stack.push(op2.add(op1));
						break;
					case "-": stack.push(op2.sub(op1));
						break;
					case "*": stack.push(op2.mult(op1));
						break;
					case "/": stack.push(op2.div(op1));
						break;
					case "^": stack.push(op2.exp(op1.toNumber()));
						break;
				}
			}
		}
		return stack.pop().simplifiedForm();
	}
}