import { RationalNumber } from "../structures/RationalNumber";
import { Polynomial, PolynomialTerm, VariableTerm } from "../structures/Polynomial";
import { PolynomialLexer, PolynomialParser, PolynomialToken, PolynomialTokenType } from "../structures/PolynomialEvaluator";

QUnit.module("PolynomialEvaluator");
QUnit.test("lexer", () => {
	// arrange
	var lexer: PolynomialLexer = new PolynomialLexer("x^2+2x+1");
	// act
	// assert
	var token: PolynomialToken = lexer.getTokenAndAdvance();
	QUnit.assert.equal(token.type, PolynomialTokenType.Variable);
	QUnit.assert.equal(token.variable, "x");
	token = lexer.getTokenAndAdvance();
	QUnit.assert.equal(token.type, PolynomialTokenType.Caret);
	token = lexer.getTokenAndAdvance();
	QUnit.assert.equal(token.type, PolynomialTokenType.Number);
	QUnit.assert.equal(token.value, 2);
	token = lexer.getTokenAndAdvance();
	QUnit.assert.equal(token.type, PolynomialTokenType.Plus);
	token = lexer.getTokenAndAdvance();
	QUnit.assert.equal(token.type, PolynomialTokenType.Number);
	QUnit.assert.equal(token.value, 2);
	token = lexer.getTokenAndAdvance();
	QUnit.assert.equal(token.type, PolynomialTokenType.Variable);
	QUnit.assert.equal(token.variable, "x");
	token = lexer.getTokenAndAdvance();
	QUnit.assert.equal(token.type, PolynomialTokenType.Plus);
	token = lexer.getTokenAndAdvance();
	QUnit.assert.equal(token.type, PolynomialTokenType.Number);
	QUnit.assert.equal(token.value, 1);
	token = lexer.getTokenAndAdvance();
	QUnit.assert.equal(token.type, PolynomialTokenType.End);
});
QUnit.test("parser polynomial expression", () => {
	//
	var parser: PolynomialParser = new PolynomialParser();
	var res: Polynomial = parser.parse("(2*x^2+x+1)+(x+2)^2");
	// act
	// assert
	QUnit.assert.ok(res, "incorrect result");
});
QUnit.test("parser polynomial", () => {
	//
	var parser: PolynomialParser = new PolynomialParser();
	var res: Polynomial = parser.parse("2*x^2+x+1");
	// act
	// assert
	QUnit.assert.ok(res, "incorrect result");
});
QUnit.test("parser LPARAN polynomial RPARAN", () => {
	//
	var parser: PolynomialParser = new PolynomialParser();
	var res: Polynomial = parser.parse("(x)");
	// act
	// assert
	QUnit.assert.ok(res, "incorrect result");
});
QUnit.test("parser expr PLUS expr", () => {
	//
	var parser: PolynomialParser = new PolynomialParser();
	var res: Polynomial = parser.parse("(x)+(x)");
	// act
	// assert
	QUnit.assert.ok(res, "incorrect result");
});
QUnit.test("parser expr CARET number", () => {
	//
	var parser: PolynomialParser = new PolynomialParser();
	var res: Polynomial = parser.parse("(x)^2");
	// act
	// assert
	QUnit.assert.ok(res, "incorrect result");
});
QUnit.test("parser number ASTERISK variable", () => {
	//
	var parser: PolynomialParser = new PolynomialParser();
	var res: Polynomial = parser.parse("2*x");
	// act
	// assert
	QUnit.assert.ok(res, "incorrect result");
});
QUnit.test("parser variable", () => {
	//
	var parser: PolynomialParser = new PolynomialParser();
	var res: Polynomial = parser.parse("x");
	// act
	// assert
	QUnit.assert.ok(res, "incorrect result");
});
QUnit.test("parser variable CARET number", () => {
	//
	var parser: PolynomialParser = new PolynomialParser();
	var res: Polynomial = parser.parse("x^3");
	// act
	// assert
	QUnit.assert.ok(res, "incorrect result");
});
QUnit.test("parser variable PLUS variable", () => {
	//
	var parser: PolynomialParser = new PolynomialParser();
	var res: Polynomial = parser.parse("x+y");
	// act
	// assert
	QUnit.assert.ok(res, "incorrect result");
});
QUnit.test("parser PLUS number ASTERISK variable CARET number PLUS variable", () => {
	//
	var parser: PolynomialParser = new PolynomialParser();
	var res: Polynomial = parser.parse("+2*x^2+y");
	// act
	// assert
	QUnit.assert.ok(res, "incorrect result");
});
QUnit.test("parser PLUS LPARAN number ASTERISK variable CARET number PLUS variable RPARAN", () => {
	//
	var parser: PolynomialParser = new PolynomialParser();
	var res: Polynomial = parser.parse("+(2*x^2+y)");
	// act
	// assert
	QUnit.assert.ok(res, "incorrect result");
});