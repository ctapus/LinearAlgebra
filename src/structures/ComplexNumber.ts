import { RationalNumber } from "./RationalNumber";

// TODO: implement polar form
export class ComplexNumber {
	public realPart: RationalNumber;
	public imaginaryPart: RationalNumber;
	constructor(a: number | RationalNumber, b?: number | RationalNumber);
	// Cartezian form only
	constructor(a: any, b: any = 0) {
		if (typeof a === "number") {
			this.realPart = new RationalNumber(a);
		} else if (a instanceof RationalNumber) {
			this.realPart = a;
		}
		if (typeof b === "number") {
			this.imaginaryPart = new RationalNumber(b);
		} else if (b instanceof RationalNumber) {
			this.imaginaryPart = b;
		}
	}
	public equals(x: number | RationalNumber | ComplexNumber): boolean {
		if (typeof x === "number" || x instanceof RationalNumber) {
			return this.realPart.equals(x) && this.imaginaryPart.equals(0);
		} else {
			return this.realPart === x.realPart && this.imaginaryPart === x.imaginaryPart;
		}
	}

	// multiplicative inverse
	public reciprocal(): ComplexNumber {
		if (this.realPart.equals(0) && this.imaginaryPart.equals(0)) { throw new Error("Division by zero!"); }
		const t = this.realPart.exp(2).add(this.imaginaryPart.exp(2));
		return new ComplexNumber(this.realPart.div(t), this.imaginaryPart.div(t).mult(-1));
	}
	// additive inverse
	public opposite(): ComplexNumber {
		return new ComplexNumber(this.realPart.mult(-1), this.imaginaryPart.mult(-1));
	}
	// complex conjugate
	public conjugate(): ComplexNumber {
		return new ComplexNumber(this.realPart, this.imaginaryPart.mult(-1));
	}
	// absolute value, modulus, magnitude
	// TODO: replace returned value with RationalNumber
	public absoluteValue(): number {
		return Math.sqrt(this.realPart.exp(2).add(this.imaginaryPart.exp(2)).toNumber());
	}
	public add(x: number | RationalNumber | ComplexNumber): ComplexNumber {
		if (typeof x === "number" || x instanceof RationalNumber) {
			return new ComplexNumber(this.realPart.add(x), this.imaginaryPart);
		} else {
			return new ComplexNumber(this.realPart.add(x.realPart), this.imaginaryPart.add(x.imaginaryPart));
		}
	}
	public sub(x: number | RationalNumber | ComplexNumber): ComplexNumber {
		if (typeof x === "number" || x instanceof RationalNumber) {
			return new ComplexNumber(this.realPart.sub(x), this.imaginaryPart);
		} else {
			return new ComplexNumber(this.realPart.sub(x.realPart), this.imaginaryPart.sub(x.imaginaryPart));
		}
	}
	public mult(x: number | RationalNumber | ComplexNumber): ComplexNumber {
		if (typeof x === "number" || x instanceof RationalNumber) {
			return new ComplexNumber(this.realPart.mult(x), this.imaginaryPart.mult(x));
		} else {
			return new ComplexNumber(this.realPart.mult(x.realPart).sub(this.imaginaryPart.mult(x.imaginaryPart)),
			 this.realPart.mult(x.imaginaryPart).add(this.imaginaryPart.mult(x.realPart)));
		}
	}
	public div(x: number | RationalNumber | ComplexNumber): ComplexNumber {
		if (typeof x === "number" || x instanceof RationalNumber) {
			return new ComplexNumber(this.realPart.div(x), this.imaginaryPart.div(x));
		} else {
			if (x.realPart.equals(0) && x.imaginaryPart.equals(0)) { throw new Error("Division by zero!"); }
			const t = this.realPart.exp(2).add(this.imaginaryPart.exp(2));
			return new ComplexNumber(this.realPart.mult(x.realPart).add(this.imaginaryPart.mult(x.imaginaryPart)).div(t),
			 this.realPart.mult(x.imaginaryPart).sub(this.imaginaryPart.mult(x.realPart)).div(t));
		}
	}
	public exp(x: number | RationalNumber): ComplexNumber {
		throw Error("Exponentiation not implemented.");
	}
	public toString(): string {
		return this.realPart.toString() + (this.imaginaryPart.equals(0) ? "" : "+" + this.imaginaryPart.toString() + "*i");
	}
	public deepCopy(): ComplexNumber {
		return new ComplexNumber(this.realPart, this.imaginaryPart);
	}
}