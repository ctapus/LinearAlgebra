// tslint:disable:no-unused-expression
// tslint:disable:eofline
// tslint:disable:max-line-length
import { expect } from "chai";
import { Polynomial, PolynomialTerm, VariableTerm } from "../structures/Polynomial";
import { PolynomialLexer, PolynomialParser, PolynomialToken, PolynomialTokenType } from "../structures/PolynomialEvaluator";
import { RationalNumber } from "../structures/RationalNumber";

describe("PolynomialEvaluator test suite", () => {
	it("Can lex", () => {
		const lexer: PolynomialLexer = new PolynomialLexer("x^2+2x+1");
		let token: PolynomialToken = lexer.getTokenAndAdvance();
		expect(token.type).to.equal(PolynomialTokenType.Variable);
		expect(token.variable).to.equal("x");
		token = lexer.getTokenAndAdvance();
		expect(token.type).to.equal(PolynomialTokenType.Caret);
		token = lexer.getTokenAndAdvance();
		expect(token.type).to.equal(PolynomialTokenType.Number);
		expect(token.value).to.equal(2);
		token = lexer.getTokenAndAdvance();
		expect(token.type).to.equal(PolynomialTokenType.Plus);
		token = lexer.getTokenAndAdvance();
		expect(token.type).to.equal(PolynomialTokenType.Number);
		expect(token.value).to.equal(2);
		token = lexer.getTokenAndAdvance();
		expect(token.type).to.equal(PolynomialTokenType.Variable);
		expect(token.variable).to.equal("x");
		token = lexer.getTokenAndAdvance();
		expect(token.type).to.equal(PolynomialTokenType.Plus);
		token = lexer.getTokenAndAdvance();
		expect(token.type).to.equal(PolynomialTokenType.Number);
		expect(token.value).to.equal(1);
		token = lexer.getTokenAndAdvance();
		expect(token.type).to.equal(PolynomialTokenType.End);
	});
	it("Can parse polynomial expression", () => {
		const parser: PolynomialParser = new PolynomialParser();
		const polynomial: Polynomial = parser.parse("(2*x^2+x+1)+(x+2)^2");
		expect(polynomial).to.not.be.null;
	});
	it("Can parse polynomial", () => {
		const parser: PolynomialParser = new PolynomialParser();
		const polynomial: Polynomial = parser.parse("2*x^2+x+1");
		expect(polynomial).to.not.be.null;
	});
	it("Can parse LPARAN polynomial RPARAN", () => {
		const parser: PolynomialParser = new PolynomialParser();
		const polynomial: Polynomial = parser.parse("(x)");
		expect(polynomial).to.not.be.null;
		expect(polynomial.terms.length).to.equal(1);
		expect(polynomial.terms[0].coefficient.equals(1)).to.be.true;
		expect(polynomial.terms[0].variables.length).to.equal(1);
		expect(polynomial.terms[0].variables[0].exponent).to.equal(1);
		expect(polynomial.terms[0].variables[0].variable).to.equal("x");
	});
	it("Can parse expr PLUS expr", () => {
		const parser: PolynomialParser = new PolynomialParser();
		const polynomial: Polynomial = parser.parse("(x)+(x)");
		expect(polynomial).to.not.be.null;
		expect(polynomial.terms.length).to.equal(1);
		expect(polynomial.terms[0].coefficient.equals(2)).to.be.true;
		expect(polynomial.terms[0].variables.length).to.equal(1);
		expect(polynomial.terms[0].variables[0].exponent).to.equal(1);
		expect(polynomial.terms[0].variables[0].variable).to.equal("x");
	});
	it("Can parse expr CARET number", () => {
		const parser: PolynomialParser = new PolynomialParser();
		const polynomial: Polynomial = parser.parse("(x)^2");
		expect(polynomial).to.not.be.null;
		expect(polynomial.terms.length).to.equal(1);
		expect(polynomial.terms[0].coefficient.equals(1)).to.be.true;
		expect(polynomial.terms[0].variables.length).to.equal(1);
		expect(polynomial.terms[0].variables[0].exponent).to.equal(2);
		expect(polynomial.terms[0].variables[0].variable).to.equal("x");
	});
	it("Can parse number ASTERISK variable", () => {
		const parser: PolynomialParser = new PolynomialParser();
		const polynomial: Polynomial = parser.parse("2*x");
		expect(polynomial).to.not.be.null;
		expect(polynomial.terms.length).to.equal(1);
		expect(polynomial.terms[0].coefficient.equals(2)).to.be.true;
		expect(polynomial.terms[0].variables.length).to.equal(1);
		expect(polynomial.terms[0].variables[0].exponent).to.equal(1);
		expect(polynomial.terms[0].variables[0].variable).to.equal("x");
	});
	it("Can parse variable", () => {
		const parser: PolynomialParser = new PolynomialParser();
		const polynomial: Polynomial = parser.parse("x");
		expect(polynomial).to.not.be.null;
		expect(polynomial.terms.length).to.equal(1);
		expect(polynomial.terms[0].coefficient.equals(1)).to.be.true;
		expect(polynomial.terms[0].variables.length).to.equal(1);
		expect(polynomial.terms[0].variables[0].exponent).to.equal(1);
		expect(polynomial.terms[0].variables[0].variable).to.equal("x");
	});
	it("Can parse variable CARET number", () => {
		const parser: PolynomialParser = new PolynomialParser();
		const polynomial: Polynomial = parser.parse("x^3");
		expect(polynomial).to.not.be.null;
		expect(polynomial.terms.length).to.equal(1);
		expect(polynomial.terms[0].coefficient.equals(1)).to.be.true;
		expect(polynomial.terms[0].variables.length).to.equal(1);
		expect(polynomial.terms[0].variables[0].exponent).to.equal(3);
		expect(polynomial.terms[0].variables[0].variable).to.equal("x");
	});
	it("Can parse variable PLUS variable", () => {
		const parser: PolynomialParser = new PolynomialParser();
		const polynomial: Polynomial = parser.parse("x+y");
		expect(polynomial).to.not.be.null;
	});
	it("Can parse PLUS number ASTERISK variable CARET number PLUS variable", () => {
		const parser: PolynomialParser = new PolynomialParser();
		const polynomial: Polynomial = parser.parse("+2*x^2+y");
		expect(polynomial).to.not.be.null;
	});
	it("Can parse PLUS LPARAN number ASTERISK variable CARET number PLUS variable RPARAN", () => {
		const parser: PolynomialParser = new PolynomialParser();
		const polynomial: Polynomial = parser.parse("+(2*x^2+y)");
		expect(polynomial).to.not.be.null;
	});
});