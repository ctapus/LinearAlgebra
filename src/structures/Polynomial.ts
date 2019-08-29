import { RationalNumber } from "./RationalNumber";

export class PolynomialExpression {
	public terms: PolynomialExpressionTerm[];
	constructor(terms: PolynomialExpressionTerm[] = null) {
		if (null === terms) {
			this.terms = [];
		} else {
			this.terms = terms;
		}
	}
	public condense(): void {
		for (const pt of this.terms) {
			pt.condense();
		}
	}
	public calculate(): Polynomial {
		const ret: Polynomial = new Polynomial();
		for (const pt of this.terms) {
			ret.add(pt.calculate());
		}
		return ret;
	}
}
export class PolynomialExpressionTerm {
	public polynomial: Polynomial;
	public exponent: number;
	constructor(polynomial: Polynomial, exponent: number = 1) {
		this.polynomial = polynomial;
		this.exponent = exponent;
	}
	public condense(): void {
		this.polynomial.condense();
	}
	public deepCopy(): PolynomialExpressionTerm {
		return new PolynomialExpressionTerm(this.polynomial.deepCopy(), this.exponent);
	}
	public calculate(): Polynomial {
		return this.polynomial.deepCopy().exp(this.exponent);
	}
}
export class Polynomial {
	public terms: PolynomialTerm[];
	constructor(terms: PolynomialTerm[] = null) {
		if (null === terms) {
			this.terms = [];
		} else {
			this.terms = terms;
		}
	}
	public add(p: Polynomial): Polynomial {
		this.condense();
		p.condense();
		const res: Polynomial = new Polynomial();
		res.terms.concat(this.terms);
		res.terms.concat(p.terms);
		res.condense();
		return res;
	}
	public sub(p: Polynomial): Polynomial {
		this.condense();
		p.condense();
		const res: Polynomial = new Polynomial();
		res.terms.concat(this.terms);
		res.terms.concat(p.terms.map((term: PolynomialTerm) => new PolynomialTerm(term.coefficient.mult(-1), term.variables)));
		res.condense();
		return res;
	}
	public mult(p: Polynomial): Polynomial {
		this.condense();
		p.condense();
		const res: Polynomial = new Polynomial();
		for (const t1 of this.terms) {
			for (const t2 of p.terms) {
				const t: PolynomialTerm = new PolynomialTerm(t1.coefficient.mult(t2.coefficient));
				res.terms.concat(t);
			}
		}
		res.condense();
		return res;
	}
	public div(p: Polynomial): Polynomial {
		throw new Error("Not implemented.");
	}
	public exp(p: number): Polynomial {
		let res: Polynomial = this.deepCopy();
		for (let i: number = 1; i <= p; i++) {
			res = res.mult(this);
		}
		return res;
	}
	public condense(): void {
		const newTerms: PolynomialTerm[] = [];
		for (const t of this.terms) {
			if (!t.coefficient.equals(0)) {
				t.condense();
				newTerms.push(t);
			}
		}
		for (const t of newTerms) {
			for (const t2 of newTerms) {
				if (t.equals(t2)) {
					t.coefficient.add(t2.coefficient);
					t2.coefficient = new RationalNumber(0);
				}
			}
		}
		const newTerms2: PolynomialTerm[] = [];
		for (const t of newTerms) {
			if (!t.coefficient.equals(0)) {
				newTerms2.push(t);
			}
		}
		this.terms = newTerms2;
	}
	public toString(): string {
		let ts: string = "";
		for (const pt of this.terms.sort((t1, t2) => t2.variables[0].exponent - t1.variables[0].exponent)) {
			ts += pt.toString();
		}
		if (ts.length > 0 && ts[0] === "+") {
			return ts.substring(1);
		}
		return ts;
	}
	public deepCopy(): Polynomial {
		const ret: Polynomial = new Polynomial();
		for (const t of this.terms) {
			ret.terms.push(t.deepCopy());
		}
		return ret;
	}
}
export class PolynomialTerm {
	public coefficient: RationalNumber;
	public variables: VariableTerm[];
	constructor(termCoefficient: RationalNumber, variables: VariableTerm[] = null) {
		this.coefficient = termCoefficient;
		if (null === variables) {
			this.variables = [];
		} else {
			this.variables = variables;
		}
	}
	public condense(): void {
		if (this.coefficient.equals(0)) {
			this.variables = null;
			return;
		}
		for (const vt of this.variables) {
			for (const v of this.variables) {
				if (vt.variable === v.variable) {
					vt.exponent += v.exponent;
					v.exponent = 0;
				}
			}
		}
		const newVariables: VariableTerm[] = [];
		for (const vt of this.variables) {
			if (0 !== vt.exponent) {
				newVariables.push(vt);
			}
		}
		this.variables = newVariables;
	}
	public toString(): string {
		let vs: string = "";
		for (const vt of this.variables) {
			const svt: string = vt.toString();
			if ("1" !== svt) {
				vs += "*" + svt;
			}
		}
		vs = vs.slice(1);
		if (this.coefficient.equals(-1)) {
			return "" === vs ? "-1" : "-" + vs;
		}
		if (this.coefficient.equals(0)) {
			return "";
		}
		if (this.coefficient.equals(1)) {
			return "" === vs ? "+1" : "+" + vs;
		}
		if (this.coefficient.lt(0)) {
			return "" === vs ? "-" + this.coefficient.toString() : "-" + this.coefficient + "*" + vs;
		}
		if (this.coefficient.gt(0)) {
			return "" === vs ? this.coefficient.toString() : this.coefficient + "*" + vs;
		}
		return "";
	}
	public equals(polynomialTerm: PolynomialTerm): boolean {
		if (this.coefficient !== polynomialTerm.coefficient) {
			return false;
		}
		// all this variableTerms are contained in the compared PolynomialTerm variableTerms
		for (const variable of this.variables) {
			let found: boolean = false;
			for (const v of polynomialTerm.variables) {
				if (variable.equals(v)) {
					found = true;
				}
			}
			if (!found) {
				return false;
			}
		}
		// all the compared PolynomailTerm variableTerms are contained in the this variableTerms
		for (const v of polynomialTerm.variables) {
			let found: boolean = false;
			for (const variable of this.variables) {
				if (v.equals(variable)) {
					found = true;
				}
			}
			if (!found) { return false; }
		}
		return true;
	}
	public deepCopy(): PolynomialTerm {
		const ret: PolynomialTerm = new PolynomialTerm(this.coefficient.deepCopy());
		for (const v of this.variables) {
			this.variables.push(v.deepCopy());
		}
		return ret;
	}
}
export class VariableTerm {
	public variable: string;
	public exponent: number;
	constructor(variable: string, exponent: number) {
		if ("" === variable) { throw Error("Variable missing."); }
		this.variable = variable;
		this.exponent = exponent;
	}
	public toString(): string {
		return 0 === this.exponent ? "1" : this.variable + (1 === this.exponent ? "" : "^" + this.exponent);
	}
	public equals(variableTerm: VariableTerm): boolean {
		return this.exponent === variableTerm.exponent && this.variable === variableTerm.variable;
	}
	public deepCopy(): VariableTerm {
		return new VariableTerm(this.variable, this.exponent);
	}
}