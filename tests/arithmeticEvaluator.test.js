// tslint:disable:no-unused-expression
// tslint:disable:eofline
// tslint:disable:max-line-length
import { expect } from "chai";
import { ArithmeticEvaluator, Lexer, Parser, TokenType } from "../structures/ArithmeticEvaluator";
describe("ArithmeticEvaluator test suite", () => {
    it("Can lex", () => {
        const tokens = ArithmeticEvaluator.toReversePolishNotation("3.5 + 4/(2 + 2)");
        expect(tokens).to.not.be.null;
        expect(tokens.length).to.equal(7);
        expect(tokens[0]).to.equal("3.5");
        expect(tokens[1]).to.equal("4");
        expect(tokens[2]).to.equal("2");
        expect(tokens[3]).to.equal("2");
        expect(tokens[4]).to.equal("+");
        expect(tokens[5]).to.equal("/");
        expect(tokens[6]).to.equal("+");
    });
    it("Can lex a negative expression", () => {
        const tokens = ArithmeticEvaluator.toReversePolishNotation("-3/2");
        expect(tokens).to.not.be.null;
        expect(tokens.length).to.equal(4);
        expect(tokens[0]).to.equal("3");
        expect(tokens[1]).to.equal("2");
        expect(tokens[2]).to.equal("/");
        expect(tokens[3]).to.equal("-");
    });
    it("Can evaluate a negative expression", () => {
        const res = ArithmeticEvaluator.evaluateFromRPN(ArithmeticEvaluator.toReversePolishNotation("-3/2"));
        expect(res).to.equal(-1.5);
    });
    it("Can tokenize", () => {
        const lexer = new Lexer("3+3/3");
        let token = lexer.getNextToken();
        expect(token.type).to.equal(TokenType.Number);
        expect(token.value).to.equal(3);
        token = lexer.getNextToken();
        expect(token.type).to.equal(TokenType.Plus);
        token = lexer.getNextToken();
        expect(token.type).to.equal(TokenType.Number);
        expect(token.value).to.equal(3);
        token = lexer.getNextToken();
        expect(token.type).to.equal(TokenType.Divide);
        token = lexer.getNextToken();
        expect(token.type).to.equal(TokenType.Number);
        expect(token.value).to.equal(3);
        token = lexer.getNextToken();
        expect(token.type).to.equal(TokenType.End);
    });
    it("Can parse", () => {
        const parser = new Parser();
        const res = parser.parse("3+3/1");
        expect(res.equals(6)).to.be.true;
    });
    it("Can parse paranthesis", () => {
        const parser = new Parser();
        const res = parser.parse("3+3/(1+2)");
        expect(res.equals(4)).to.be.true;
    });
    it("Can parse unary operator", () => {
        const parser = new Parser();
        const res = parser.parse("-3/+(1+2)");
        expect(res.equals(-1)).to.be.true;
    });
    it("Can parse power", () => {
        const parser = new Parser();
        const res = parser.parse("+3^2+2");
        expect(res.equals(11)).to.be.true;
    });
});
//# sourceMappingURL=arithmeticEvaluator.test.js.map