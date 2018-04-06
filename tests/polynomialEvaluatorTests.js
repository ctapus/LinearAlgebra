"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PolynomialEvaluator_1 = require("../structures/PolynomialEvaluator");
QUnit.module("PolynomialEvaluator");
QUnit.test("lexer", function () {
    // arrange
    var lexer = new PolynomialEvaluator_1.PolynomialLexer("x^2+2x+1");
    // act
    // assert
    var token = lexer.getTokenAndAdvance();
    QUnit.assert.equal(token.type, PolynomialEvaluator_1.PolynomialTokenType.Variable);
    QUnit.assert.equal(token.variable, "x");
    token = lexer.getTokenAndAdvance();
    QUnit.assert.equal(token.type, PolynomialEvaluator_1.PolynomialTokenType.Caret);
    token = lexer.getTokenAndAdvance();
    QUnit.assert.equal(token.type, PolynomialEvaluator_1.PolynomialTokenType.Number);
    QUnit.assert.equal(token.value, 2);
    token = lexer.getTokenAndAdvance();
    QUnit.assert.equal(token.type, PolynomialEvaluator_1.PolynomialTokenType.Plus);
    token = lexer.getTokenAndAdvance();
    QUnit.assert.equal(token.type, PolynomialEvaluator_1.PolynomialTokenType.Number);
    QUnit.assert.equal(token.value, 2);
    token = lexer.getTokenAndAdvance();
    QUnit.assert.equal(token.type, PolynomialEvaluator_1.PolynomialTokenType.Variable);
    QUnit.assert.equal(token.variable, "x");
    token = lexer.getTokenAndAdvance();
    QUnit.assert.equal(token.type, PolynomialEvaluator_1.PolynomialTokenType.Plus);
    token = lexer.getTokenAndAdvance();
    QUnit.assert.equal(token.type, PolynomialEvaluator_1.PolynomialTokenType.Number);
    QUnit.assert.equal(token.value, 1);
    token = lexer.getTokenAndAdvance();
    QUnit.assert.equal(token.type, PolynomialEvaluator_1.PolynomialTokenType.End);
});
QUnit.test("parser polynomial expression", function () {
    //
    var parser = new PolynomialEvaluator_1.PolynomialParser();
    var res = parser.parse("(2*x^2+x+1)+(x+2)^2");
    // act
    // assert
    QUnit.assert.ok(res, "incorrect result");
});
QUnit.test("parser polynomial", function () {
    //
    var parser = new PolynomialEvaluator_1.PolynomialParser();
    var res = parser.parse("2*x^2+x+1");
    // act
    // assert
    QUnit.assert.ok(res, "incorrect result");
});
QUnit.test("parser LPARAN polynomial RPARAN", function () {
    //
    var parser = new PolynomialEvaluator_1.PolynomialParser();
    var res = parser.parse("(x)");
    // act
    // assert
    QUnit.assert.ok(res, "incorrect result");
});
QUnit.test("parser expr PLUS expr", function () {
    //
    var parser = new PolynomialEvaluator_1.PolynomialParser();
    var res = parser.parse("(x)+(x)");
    // act
    // assert
    QUnit.assert.ok(res, "incorrect result");
});
QUnit.test("parser expr CARET number", function () {
    //
    var parser = new PolynomialEvaluator_1.PolynomialParser();
    var res = parser.parse("(x)^2");
    // act
    // assert
    QUnit.assert.ok(res, "incorrect result");
});
QUnit.test("parser number ASTERISK variable", function () {
    //
    var parser = new PolynomialEvaluator_1.PolynomialParser();
    var res = parser.parse("2*x");
    // act
    // assert
    QUnit.assert.ok(res, "incorrect result");
});
QUnit.test("parser variable", function () {
    //
    var parser = new PolynomialEvaluator_1.PolynomialParser();
    var res = parser.parse("x");
    // act
    // assert
    QUnit.assert.ok(res, "incorrect result");
});
QUnit.test("parser variable CARET number", function () {
    //
    var parser = new PolynomialEvaluator_1.PolynomialParser();
    var res = parser.parse("x^3");
    // act
    // assert
    QUnit.assert.ok(res, "incorrect result");
});
QUnit.test("parser variable PLUS variable", function () {
    //
    var parser = new PolynomialEvaluator_1.PolynomialParser();
    var res = parser.parse("x+y");
    // act
    // assert
    QUnit.assert.ok(res, "incorrect result");
});
QUnit.test("parser PLUS number ASTERISK variable CARET number PLUS variable", function () {
    //
    var parser = new PolynomialEvaluator_1.PolynomialParser();
    var res = parser.parse("+2*x^2+y");
    // act
    // assert
    QUnit.assert.ok(res, "incorrect result");
});
QUnit.test("parser PLUS LPARAN number ASTERISK variable CARET number PLUS variable RPARAN", function () {
    //
    var parser = new PolynomialEvaluator_1.PolynomialParser();
    var res = parser.parse("+(2*x^2+y)");
    // act
    // assert
    QUnit.assert.ok(res, "incorrect result");
});
//# sourceMappingURL=polynomialEvaluatorTests.js.map