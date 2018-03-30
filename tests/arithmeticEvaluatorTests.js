/// <reference path="../node_modules/@types/qunit/index.d.ts" />
/// <reference path="../structures/arithmeticEvaluator.ts" />
/// <chutzpah_reference path="../structures/arithmeticEvaluator.js" />
QUnit.module("ArithmeticEvaluator");
QUnit.test("lex", function () {
    // arange
    var tokens = ArithmeticEvaluator.toReversePolishNotation("3.5 + 4/(2 + 2)");
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
QUnit.test("lex negative", function () {
    // arange
    var tokens = ArithmeticEvaluator.toReversePolishNotation("-3/2");
    // act
    // assert
    QUnit.assert.ok(tokens, "toReversePolishNotation returned null");
    QUnit.assert.equal(tokens.length, 4, "incorrect number of tokens");
    QUnit.assert.equal(tokens[0], "3", "incorrect token");
    QUnit.assert.equal(tokens[1], "2", "incorrect token");
    QUnit.assert.equal(tokens[2], "/", "incorrect token");
    QUnit.assert.equal(tokens[3], "-", "incorrect token");
});
QUnit.test("evaluator negative", function () {
    // arange
    var res = ArithmeticEvaluator.evaluateFromRPN(ArithmeticEvaluator.toReversePolishNotation("-3/2"));
    // act
    // assert
    QUnit.assert.equal(res, -1.5, "incorrect number of tokens");
});
QUnit.test("lexer", function () {
    // arange
    var lexer = new Lexer("3+3/3");
    var token = lexer.getNextToken();
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
QUnit.test("parser", function () {
    // arange
    var parser = new Parser();
    var res = parser.parse("3+3/1");
    // act
    // assert
    QUnit.assert.ok(res.equals(6), "incorrect result");
});
QUnit.test("parser paranthesis", function () {
    // arange
    var parser = new Parser();
    var res = parser.parse("3+3/(1+2)");
    // act
    // assert
    QUnit.assert.ok(res.equals(4), "incorrect result");
});
QUnit.test("parser unary operator", function () {
    // arrange
    var parser = new Parser();
    var res = parser.parse("-3/+(1+2)");
    // act
    // assert
    QUnit.assert.ok(res.equals(-1), "incorrect result");
});
QUnit.test("parser power", function () {
    // arange
    var parser = new Parser();
    var res = parser.parse("+3^2+2");
    // act
    // assert
    QUnit.assert.ok(res.equals(11), "incorrect result");
});
//# sourceMappingURL=arithmeticEvaluatorTests.js.map