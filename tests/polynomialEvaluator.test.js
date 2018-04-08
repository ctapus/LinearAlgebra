"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable:no-unused-expression
// tslint:disable:eofline
// tslint:disable:max-line-length
var chai_1 = require("chai");
var PolynomialEvaluator_1 = require("../structures/PolynomialEvaluator");
describe("PolynomialEvaluator test suite", function () {
    it("Can lex", function () {
        var lexer = new PolynomialEvaluator_1.PolynomialLexer("x^2+2x+1");
        var token = lexer.getTokenAndAdvance();
        chai_1.expect(token.type).to.equal(PolynomialEvaluator_1.PolynomialTokenType.Variable);
        chai_1.expect(token.variable).to.equal("x");
        token = lexer.getTokenAndAdvance();
        chai_1.expect(token.type).to.equal(PolynomialEvaluator_1.PolynomialTokenType.Caret);
        token = lexer.getTokenAndAdvance();
        chai_1.expect(token.type).to.equal(PolynomialEvaluator_1.PolynomialTokenType.Number);
        chai_1.expect(token.value).to.equal(2);
        token = lexer.getTokenAndAdvance();
        chai_1.expect(token.type).to.equal(PolynomialEvaluator_1.PolynomialTokenType.Plus);
        token = lexer.getTokenAndAdvance();
        chai_1.expect(token.type).to.equal(PolynomialEvaluator_1.PolynomialTokenType.Number);
        chai_1.expect(token.value).to.equal(2);
        token = lexer.getTokenAndAdvance();
        chai_1.expect(token.type).to.equal(PolynomialEvaluator_1.PolynomialTokenType.Variable);
        chai_1.expect(token.variable).to.equal("x");
        token = lexer.getTokenAndAdvance();
        chai_1.expect(token.type).to.equal(PolynomialEvaluator_1.PolynomialTokenType.Plus);
        token = lexer.getTokenAndAdvance();
        chai_1.expect(token.type).to.equal(PolynomialEvaluator_1.PolynomialTokenType.Number);
        chai_1.expect(token.value).to.equal(1);
        token = lexer.getTokenAndAdvance();
        chai_1.expect(token.type).to.equal(PolynomialEvaluator_1.PolynomialTokenType.End);
    });
    it("Can parse polynomial expression", function () {
        var parser = new PolynomialEvaluator_1.PolynomialParser();
        var polynomial = parser.parse("(2*x^2+x+1)+(x+2)^2");
        chai_1.expect(polynomial).to.not.be.null;
    });
    it("Can parse polynomial", function () {
        var parser = new PolynomialEvaluator_1.PolynomialParser();
        var polynomial = parser.parse("2*x^2+x+1");
        chai_1.expect(polynomial).to.not.be.null;
    });
    it("Can parse LPARAN polynomial RPARAN", function () {
        var parser = new PolynomialEvaluator_1.PolynomialParser();
        var polynomial = parser.parse("(x)");
        chai_1.expect(polynomial).to.not.be.null;
        chai_1.expect(polynomial.terms.length).to.equal(1);
        chai_1.expect(polynomial.terms[0].coefficient.equals(1)).to.be.true;
        chai_1.expect(polynomial.terms[0].variables.length).to.equal(1);
        chai_1.expect(polynomial.terms[0].variables[0].exponent).to.equal(1);
        chai_1.expect(polynomial.terms[0].variables[0].variable).to.equal("x");
    });
    it("Can parse expr PLUS expr", function () {
        var parser = new PolynomialEvaluator_1.PolynomialParser();
        var polynomial = parser.parse("(x)+(x)");
        chai_1.expect(polynomial).to.not.be.null;
        chai_1.expect(polynomial.terms.length).to.equal(1);
        chai_1.expect(polynomial.terms[0].coefficient.equals(2)).to.be.true;
        chai_1.expect(polynomial.terms[0].variables.length).to.equal(1);
        chai_1.expect(polynomial.terms[0].variables[0].exponent).to.equal(1);
        chai_1.expect(polynomial.terms[0].variables[0].variable).to.equal("x");
    });
    it("Can parse expr CARET number", function () {
        var parser = new PolynomialEvaluator_1.PolynomialParser();
        var polynomial = parser.parse("(x)^2");
        chai_1.expect(polynomial).to.not.be.null;
        chai_1.expect(polynomial.terms.length).to.equal(1);
        chai_1.expect(polynomial.terms[0].coefficient.equals(1)).to.be.true;
        chai_1.expect(polynomial.terms[0].variables.length).to.equal(1);
        chai_1.expect(polynomial.terms[0].variables[0].exponent).to.equal(2);
        chai_1.expect(polynomial.terms[0].variables[0].variable).to.equal("x");
    });
    it("Can parse number ASTERISK variable", function () {
        var parser = new PolynomialEvaluator_1.PolynomialParser();
        var polynomial = parser.parse("2*x");
        chai_1.expect(polynomial).to.not.be.null;
        chai_1.expect(polynomial.terms.length).to.equal(1);
        chai_1.expect(polynomial.terms[0].coefficient.equals(2)).to.be.true;
        chai_1.expect(polynomial.terms[0].variables.length).to.equal(1);
        chai_1.expect(polynomial.terms[0].variables[0].exponent).to.equal(1);
        chai_1.expect(polynomial.terms[0].variables[0].variable).to.equal("x");
    });
    it("Can parse variable", function () {
        var parser = new PolynomialEvaluator_1.PolynomialParser();
        var polynomial = parser.parse("x");
        chai_1.expect(polynomial).to.not.be.null;
        chai_1.expect(polynomial.terms.length).to.equal(1);
        chai_1.expect(polynomial.terms[0].coefficient.equals(1)).to.be.true;
        chai_1.expect(polynomial.terms[0].variables.length).to.equal(1);
        chai_1.expect(polynomial.terms[0].variables[0].exponent).to.equal(1);
        chai_1.expect(polynomial.terms[0].variables[0].variable).to.equal("x");
    });
    it("Can parse variable CARET number", function () {
        var parser = new PolynomialEvaluator_1.PolynomialParser();
        var polynomial = parser.parse("x^3");
        chai_1.expect(polynomial).to.not.be.null;
        chai_1.expect(polynomial.terms.length).to.equal(1);
        chai_1.expect(polynomial.terms[0].coefficient.equals(1)).to.be.true;
        chai_1.expect(polynomial.terms[0].variables.length).to.equal(1);
        chai_1.expect(polynomial.terms[0].variables[0].exponent).to.equal(3);
        chai_1.expect(polynomial.terms[0].variables[0].variable).to.equal("x");
    });
    it("Can parse variable PLUS variable", function () {
        var parser = new PolynomialEvaluator_1.PolynomialParser();
        var polynomial = parser.parse("x+y");
        chai_1.expect(polynomial).to.not.be.null;
    });
    it("Can parse PLUS number ASTERISK variable CARET number PLUS variable", function () {
        var parser = new PolynomialEvaluator_1.PolynomialParser();
        var polynomial = parser.parse("+2*x^2+y");
        chai_1.expect(polynomial).to.not.be.null;
    });
    it("Can parse PLUS LPARAN number ASTERISK variable CARET number PLUS variable RPARAN", function () {
        var parser = new PolynomialEvaluator_1.PolynomialParser();
        var polynomial = parser.parse("+(2*x^2+y)");
        chai_1.expect(polynomial).to.not.be.null;
    });
});
//# sourceMappingURL=polynomialEvaluator.test.js.map