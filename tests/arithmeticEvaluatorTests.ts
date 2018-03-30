/// <reference path="../node_modules/@types/qunit/index.d.ts" />
/// <reference path="../structures/arithmeticEvaluator.ts" />
/// <chutzpah_reference path="../structures/arithmeticEvaluator.js" />

QUnit.module("ArithmeticEvaluator");
QUnit.test("lex", () => {
	// arange
	var tokens: string[] = ArithmeticEvaluator.toReversePolishNotation("3.5 + 4/(2 + 2)");
	// act
	// assert
	QUnit.assert.ok(tokens, "toReversePolishNotation returned null");
	QUnit.assert.equal(tokens.length, 7, "incorrect number of tokens");
	QUnit.assert.equal(tokens[0], "3.5", "incorrect token");
	QUnit.assert.equal(tokens[1], "4", "incorrect token");
	QUnit.assert.equal(tokens[2], "2", "incorrect token");
	QUnit.assert.equal(tokens[3], "2", "incorrect token");
	QUnit.assert.equal(tokens[4], "+", "incorrect token");
	QUnit.assert.equal(tokens[5], "/", "incorrect token");
	QUnit.assert.equal(tokens[6], "+", "incorrect token");
});
QUnit.test("lex negative", () => {
	// arange
	var tokens: string[] = ArithmeticEvaluator.toReversePolishNotation("-3/2");
	// act
	// assert
	QUnit.assert.ok(tokens, "toReversePolishNotation returned null");
	QUnit.assert.equal(tokens.length, 4, "incorrect number of tokens");
	QUnit.assert.equal(tokens[0], "3", "incorrect token");
	QUnit.assert.equal(tokens[1], "2", "incorrect token");
	QUnit.assert.equal(tokens[2], "/", "incorrect token");
	QUnit.assert.equal(tokens[3], "-", "incorrect token");
});
QUnit.test("evaluator negative", () => {
	// arange
	var res: number = ArithmeticEvaluator.evaluateFromRPN(ArithmeticEvaluator.toReversePolishNotation("-3/2"));
	// act
	// assert
	QUnit.assert.equal(res, -1.5, "incorrect number of tokens");
});
QUnit.test("lexer", () => {
	// arange
	var lexer: Lexer = new Lexer("3+3/3");
	var token: Token = lexer.getNextToken();
	QUnit.assert.equal(token.type, TokenType.Number);
	QUnit.assert.equal(token.value, 3);
	token = lexer.getNextToken();
	QUnit.assert.equal(token.type, TokenType.Plus);
	token = lexer.getNextToken();
	QUnit.assert.equal(token.type, TokenType.Number);
	QUnit.assert.equal(token.value, 3);
	token = lexer.getNextToken();
	QUnit.assert.equal(token.type, TokenType.Divide);
	token = lexer.getNextToken();
	QUnit.assert.equal(token.type, TokenType.Number);
	QUnit.assert.equal(token.value, 3);
	token = lexer.getNextToken();
	QUnit.assert.equal(token.type, TokenType.End);
	// act
	// assert
});
QUnit.test("parser", () => {
	// arange
	var parser: Parser = new Parser();
	var res: RationalNumber = parser.parse("3+3/1");
	// act
	// assert
	QUnit.assert.ok(res.equals(6), "incorrect result");
});
QUnit.test("parser paranthesis", () => {
	// arange
	var parser: Parser = new Parser();
	var res: RationalNumber = parser.parse("3+3/(1+2)");
	// act
	// assert
	QUnit.assert.ok(res.equals(4), "incorrect result");
});
QUnit.test("parser unary operator", () => {
	// arrange
	var parser: Parser = new Parser();
	var res: RationalNumber = parser.parse("-3/+(1+2)");
	// act
	// assert
	QUnit.assert.ok(res.equals(-1), "incorrect result");
});
QUnit.test("parser power", () => {
	// arange
	var parser: Parser = new Parser();
	var res: RationalNumber = parser.parse("+3^2+2");
	// act
	// assert
	QUnit.assert.ok(res.equals(11), "incorrect result");
});