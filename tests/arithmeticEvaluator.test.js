"use strict";
exports.__esModule = true;
// tslint:disable:no-unused-expression
// tslint:disable:eofline
// tslint:disable:max-line-length
var chai_1 = require("chai");
var ArithmeticEvaluator_1 = require("../structures/ArithmeticEvaluator");
describe("ArithmeticEvaluator test suite", function () {
    it("Can lex", function () {
        var tokens = ArithmeticEvaluator_1.ArithmeticEvaluator.toReversePolishNotation("3.5 + 4/(2 + 2)");
        chai_1.expect(tokens).to.not.be["null"];
        chai_1.expect(tokens.length).to.equal(7);
        chai_1.expect(tokens[0]).to.equal("3.5");
        chai_1.expect(tokens[1]).to.equal("4");
        chai_1.expect(tokens[2]).to.equal("2");
        chai_1.expect(tokens[3]).to.equal("2");
        chai_1.expect(tokens[4]).to.equal("+");
        chai_1.expect(tokens[5]).to.equal("/");
        chai_1.expect(tokens[6]).to.equal("+");
    });
    it("Can lex a negative expression", function () {
        var tokens = ArithmeticEvaluator_1.ArithmeticEvaluator.toReversePolishNotation("-3/2");
        chai_1.expect(tokens).to.not.be["null"];
        chai_1.expect(tokens.length).to.equal(4);
        chai_1.expect(tokens[0]).to.equal("3");
        chai_1.expect(tokens[1]).to.equal("2");
        chai_1.expect(tokens[2]).to.equal("/");
        chai_1.expect(tokens[3]).to.equal("-");
    });
    it("Can evaluate a negative expression", function () {
        var res = ArithmeticEvaluator_1.ArithmeticEvaluator.evaluateFromRPN(ArithmeticEvaluator_1.ArithmeticEvaluator.toReversePolishNotation("-3/2"));
        chai_1.expect(res).to.equal(-1.5);
    });
    it("Can tokenize", function () {
        var lexer = new ArithmeticEvaluator_1.Lexer("3+3/3");
        var token = lexer.getNextToken();
        chai_1.expect(token.type).to.equal(ArithmeticEvaluator_1.TokenType.Number);
        chai_1.expect(token.value).to.equal(3);
        token = lexer.getNextToken();
        chai_1.expect(token.type).to.equal(ArithmeticEvaluator_1.TokenType.Plus);
        token = lexer.getNextToken();
        chai_1.expect(token.type).to.equal(ArithmeticEvaluator_1.TokenType.Number);
        chai_1.expect(token.value).to.equal(3);
        token = lexer.getNextToken();
        chai_1.expect(token.type).to.equal(ArithmeticEvaluator_1.TokenType.Divide);
        token = lexer.getNextToken();
        chai_1.expect(token.type).to.equal(ArithmeticEvaluator_1.TokenType.Number);
        chai_1.expect(token.value).to.equal(3);
        token = lexer.getNextToken();
        chai_1.expect(token.type).to.equal(ArithmeticEvaluator_1.TokenType.End);
    });
    it("Can parse", function () {
        var parser = new ArithmeticEvaluator_1.Parser();
        var res = parser.parse("3+3/1");
        chai_1.expect(res.equals(6)).to.be["true"];
    });
    it("Can parse paranthesis", function () {
        var parser = new ArithmeticEvaluator_1.Parser();
        var res = parser.parse("3+3/(1+2)");
        chai_1.expect(res.equals(4)).to.be["true"];
    });
    it("Can parse unary operator", function () {
        var parser = new ArithmeticEvaluator_1.Parser();
        var res = parser.parse("-3/+(1+2)");
        chai_1.expect(res.equals(-1)).to.be["true"];
    });
    it("Can parse power", function () {
        var parser = new ArithmeticEvaluator_1.Parser();
        var res = parser.parse("+3^2+2");
        chai_1.expect(res.equals(11)).to.be["true"];
    });
});
//# sourceMappingURL=arithmeticEvaluator.test.js.map