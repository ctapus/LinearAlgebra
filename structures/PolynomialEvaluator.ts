import { RationalNumber } from "../structures/RationalNumber";
import { Polynomial, PolynomialTerm, VariableTerm } from "../structures/Polynomial";

// todo: refactor to generics
export enum PolynomialTokenType { Plus, Minus, Asterisk, Slash, Caret, Number, Variable, LParen, RParen, End, Unknown }
export class PolynomialToken {
	public type: PolynomialTokenType;
	public value: number;
	public variable: string;
	constructor(type: PolynomialTokenType, value?: number, variable?: string) {
		this.type = type;
		this.value = value;
		this.variable = variable;
	}
}
export class PolynomialLexer {
	private tokens: string[];
	private tokenIndex: number;
	constructor(input: string) {
		this.tokens = input.replace(" ", "").match(/\(|\)|\d+(\.\d+)?|[\+\-\*\/\^]|[a-zA-Z]+[a-zA-Z0-9_]*/g);
		this.tokenIndex = 0;
	}
	public getTokenAndAdvance(): PolynomialToken {
		if (this.tokens.length === this.tokenIndex) { return new PolynomialToken(PolynomialTokenType.End); }
		let input: string = this.tokens[this.tokenIndex++];
		return this.getToken(input);
	}
	public revert(): void {
		if (this.tokenIndex <= 0) { throw Error("Index out of range"); }
		this.tokenIndex--;
	}
	private getToken(input: string): PolynomialToken {
		if (/\+/.test(input)) {
			return new PolynomialToken(PolynomialTokenType.Plus);
		}
		if (/\-/.test(input)) {
			return new PolynomialToken(PolynomialTokenType.Minus);
		}
		if (/\*/.test(input)) {
			return new PolynomialToken(PolynomialTokenType.Asterisk);
		}
		if (/\//.test(input)) {
			return new PolynomialToken(PolynomialTokenType.Slash);
		}
		if (/\^/.test(input)) {
			return new PolynomialToken(PolynomialTokenType.Caret);
		}
		if (/[a-zA-Z]+[a-zA-Z0-9_]*/.test(input)) {
			return new PolynomialToken(PolynomialTokenType.Variable, 1, input);
		}
		if (/\d+(\.\d+)?/.test(input)) {
			return new PolynomialToken(PolynomialTokenType.Number, parseFloat(input));
		}
		if (/\(/.test(input)) {
			return new PolynomialToken(PolynomialTokenType.LParen);
		}
		if (/\)/.test(input)) {
			return new PolynomialToken(PolynomialTokenType.RParen);
		}
		return new PolynomialToken(PolynomialTokenType.Unknown);
	}
}
export class PolynomialParser {
	private lex: PolynomialLexer;
	public parse(code: string): Polynomial {
		this.lex = new PolynomialLexer(code);
		let expression: Polynomial = this.expr();
		let token: PolynomialToken = this.lex.getTokenAndAdvance();
		if (token.type === PolynomialTokenType.End) {
			return expression;
		}
		throw Error("End expected");
	}
	private expr(): Polynomial {
		let polynomial: Polynomial;
		let token: PolynomialToken = this.lex.getTokenAndAdvance();
		if (token.type === PolynomialTokenType.LParen) {
			polynomial = this.polynomial();
			token = this.lex.getTokenAndAdvance();
			if (token.type !== PolynomialTokenType.RParen) {
				throw Error("Unbalanced parenthesis.");
			}
			token = this.lex.getTokenAndAdvance();
			switch (token.type) {
				case PolynomialTokenType.Plus:
					polynomial = polynomial.add(this.expr());
					break;
				case PolynomialTokenType.Minus:
					polynomial = polynomial.sub(this.expr());
					break;
				case PolynomialTokenType.Asterisk:
					polynomial = polynomial.mult(this.expr());
					break;
				case PolynomialTokenType.Slash:
					polynomial = polynomial.div(this.expr());
					break;
				case PolynomialTokenType.Caret:
					// todo: implement it
					break;
				default:
					break;
			}
		} else {
			this.lex.revert();
			polynomial = this.polynomial();
		}
		token = this.lex.getTokenAndAdvance();
		while (PolynomialTokenType.Plus === token.type || PolynomialTokenType.Minus === token.type ||
			PolynomialTokenType.Asterisk === token.type || PolynomialTokenType.Slash === token.type) {
			// todo: make a polynomial expression structure
			token = this.lex.getTokenAndAdvance();
		}
		return polynomial;
	}
	private polynomial(): Polynomial {
		let polynomialTerms: PolynomialTerm[] = [];
		let token: PolynomialToken = this.lex.getTokenAndAdvance();
		switch (token.type) {
			case PolynomialTokenType.Plus:
				polynomialTerms.push(this.polynomialTerm());
				break;
			case PolynomialTokenType.Minus:
				polynomialTerms.push(this.polynomialTerm());
				break;
			case PolynomialTokenType.Variable:
				this.lex.revert();
				polynomialTerms.push(this.polynomialTerm());
				break;
			case PolynomialTokenType.Number:
				this.lex.revert();
				polynomialTerms.push(this.polynomialTerm());
				break;
			default:
				break;
		}
		token = this.lex.getTokenAndAdvance();
		while (PolynomialTokenType.Plus === token.type || PolynomialTokenType.Minus === token.type) {
			let pt: PolynomialTerm = this.polynomialTerm();
			if (null !== pt) {
				polynomialTerms.push(pt);
			}
			token = this.lex.getTokenAndAdvance();
		}
		this.lex.revert();
		return new Polynomial(polynomialTerms);
	}
	private polynomialTerm(): PolynomialTerm {
		let ret: PolynomialTerm = null;
		let coefficient: RationalNumber;
		let variableTerms: VariableTerm[] = [];
		let token: PolynomialToken = this.lex.getTokenAndAdvance();
		if (PolynomialTokenType.Number === token.type) {
			coefficient = new RationalNumber(token.value);
			token = this.lex.getTokenAndAdvance();
			if (PolynomialTokenType.Asterisk === token.type) {
				let vt: VariableTerm = this.variableTerm();
				if (null !== vt) {
					variableTerms.push(vt);
				}
			} else {
				this.lex.revert();
			}
			ret = new PolynomialTerm(coefficient, variableTerms);
		} else {
			if (PolynomialTokenType.Variable === token.type) {
				this.lex.revert();
				coefficient = new RationalNumber(1);
				let vt: VariableTerm = this.variableTerm();
				if (null !== vt) {
					variableTerms.push(vt);
				}
				ret = new PolynomialTerm(coefficient, variableTerms);
			}
		}
		token = this.lex.getTokenAndAdvance();
		while (PolynomialTokenType.Asterisk === token.type) {
			let vt: VariableTerm = this.variableTerm();
			if (null !== vt) {
				variableTerms.push(vt);
			}
			token = this.lex.getTokenAndAdvance();
		}
		this.lex.revert();
		return ret;
	}
	private variableTerm(): VariableTerm {
		let ret: VariableTerm = null;
		let variable: string;
		let exponent: number = 1;
		let token: PolynomialToken = this.lex.getTokenAndAdvance();
		if (PolynomialTokenType.Variable === token.type) {
			variable = token.variable;
			token = this.lex.getTokenAndAdvance();
			if (PolynomialTokenType.Caret === token.type) {
				token = this.lex.getTokenAndAdvance();
				if (PolynomialTokenType.Number === token.type) {
					exponent = token.value;
				} else {
					throw Error("Exponent missing");
				}
			} else {
				this.lex.revert();
			}
			ret = new VariableTerm(variable, exponent);
		}
		return ret;
	}
}

/*
expr			: LPARAM polynomial RPARAM
				| LPARAM polynomial RPARAM CARET number
				| LPARAM polynomial LPARAM (PLUS | MINUS | ASTREISK | SLASH) expr+
				| polynomial
polynomial		: (PLUS | MINUS) polynomialTerm ((PLUS | MINUS) polynomialTerm)+
				| polynomialTerm ((PLUS | MINUS) polynomialTerm)+
polynomialTerm	: number (ASTERISK variableTerm)+
				| variableTerm (ASTERISK variableTerm)+
variableTerm	: variable
				| variable CARET number
*/