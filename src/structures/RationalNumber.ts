﻿import { Parser } from "./ArithmeticEvaluator";
import { Queue } from "./Queue";
import { Stack } from "./Stack";

export class RationalNumber {
	public static toReversePolishNotation(code: string): string[] {
		const tokens: string[] = code.match(/\(|\)|\d+(\.\d+)?|\w+|[\+\-\*\/\^]/g);
		let i: number = 0;
		const outputQueue: Queue<string> = new Queue<string>();
		const operatorStack: Stack<string> = new Stack<string>();
		while (i < tokens.length) {
			if (this.isNumber(tokens[i])) {
				outputQueue.enqueue(tokens[i]);
			} else if (this.isOperator(tokens[i])) {
				const op1: string = tokens[i];
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
					throw new Error("Mismatched parentheses.");
				}
			}
			i++;
		}
		while (!operatorStack.isEmpty()) {
			if (operatorStack.peek() === "(") {
				throw new Error("Mismatched parentheses.");
			} else {
				outputQueue.enqueue(operatorStack.pop());
			}
		}
		return outputQueue.toArray();
	}
	public static fromString(code: string): RationalNumber {
		const p: Parser = new Parser();
		return p.parse(code);
	}
	public static greatestCommonDivisor(a: number, b: number): number {
		return b ? RationalNumber.greatestCommonDivisor(b, a % b) : a;
	}
	public static leastCommonMultiple(a: number, b: number): number {
		return Math.abs(a * b / RationalNumber.greatestCommonDivisor(a, b));
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
		throw new Error("Unknown operator.");
	}
	private static evaluateFromRPN(tokens: string[]): RationalNumber {
		const stack: Stack<RationalNumber> = new Stack<RationalNumber>();
		for (let i: number = 0; i < tokens.length; i++) {
			if (!this.isOperator(tokens[i])) {
				stack.push(new RationalNumber(parseFloat(tokens[i])));
			} else {
				const op1: RationalNumber = stack.pop();
				const op2: RationalNumber = stack.pop();
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
	public numerator: number;
	public denominator: number;
	constructor(n: number, d: number = 1) {
		if (d === 0) {
			throw new Error("Division by zero!");
		}
		// todo: potential for overflow. When Math.sign becomes available in TypeScript use it instead of the multiplication
		const sign: number = n * d >= 0 ? 1 : -1;
		this.numerator = sign * Math.abs(n);
		this.denominator = Math.abs(d);
	}
	public simplifiedForm(): RationalNumber {
		const gcd: number = RationalNumber.greatestCommonDivisor(this.numerator, this.denominator);
		return new RationalNumber(this.numerator / gcd, this.denominator / gcd);
	}

	public equals(x: number | RationalNumber): boolean {
		const rn1: RationalNumber = this.simplifiedForm();
		if (typeof x === "number") {
			return rn1.numerator === x && rn1.denominator === 1;
		} else {
			const rn2: RationalNumber = x.simplifiedForm();
			return rn1.numerator === rn2.numerator && rn1.denominator === rn2.denominator;
		}
	}
	public lt(x: number | RationalNumber): boolean {
		const rn1: RationalNumber = this.simplifiedForm();
		if (typeof x === "number") {
			return rn1.numerator < x * rn1.denominator;
		} else {
			const rn2: RationalNumber = x.simplifiedForm();
			return rn1.numerator * rn2.denominator < rn2.numerator * rn1.denominator;
		}
	}
	public le(x: number | RationalNumber): boolean {
		const rn1: RationalNumber = this.simplifiedForm();
		if (typeof x === "number") {
			return rn1.numerator <= x * rn1.denominator;
		} else {
			const rn2: RationalNumber = x.simplifiedForm();
			return rn1.numerator * rn2.denominator <= rn2.numerator * rn1.denominator;
		}
	}
	public gt(x: number | RationalNumber): boolean {
		const rn1: RationalNumber = this.simplifiedForm();
		if (typeof x === "number") {
			return rn1.numerator > x * rn1.denominator;
		} else {
			const rn2: RationalNumber = x.simplifiedForm();
			return rn1.numerator * rn2.denominator > rn2.numerator * rn1.denominator;
		}
	}
	public ge(x: number | RationalNumber): boolean {
		const rn1: RationalNumber = this.simplifiedForm();
		if (typeof x === "number") {
			return rn1.numerator >= x * rn1.denominator;
		} else {
			const rn2: RationalNumber = x.simplifiedForm();
			return rn1.numerator * rn2.denominator >= rn2.numerator * rn1.denominator;
		}
	}

	// multiplicative inverse
	public reciprocal(): RationalNumber {
		if (this.denominator === 0) { throw new Error("Division by zero!"); }
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
			const lcm: number = RationalNumber.leastCommonMultiple(this.denominator, x.denominator);
			const n1: number = this.numerator * lcm / this.denominator;
			const n2: number = x.numerator * lcm / x.denominator;
			return new RationalNumber(n1 + n2, lcm);
		}
	}
	public sub(x: number | RationalNumber): RationalNumber {
		if (typeof x === "number") {
			return new RationalNumber((this.numerator - x * this.denominator), this.denominator);
		} else {
			const lcm: number = RationalNumber.leastCommonMultiple(this.denominator, x.denominator);
			const n1: number = this.numerator * lcm / this.denominator;
			const n2: number = x.numerator * lcm / x.denominator;
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
			return new RationalNumber(this.numerator ** x, this.denominator ** x);
		} else {
			if (this.denominator !== 1) { throw Error("Exponentiation with rational powers not supported."); }
			return new RationalNumber(this.numerator ** x.numerator, this.denominator ** x.numerator);
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
}