// tslint:disable:no-unused-expression
// tslint:disable:eofline
// tslint:disable:max-line-length
import { expect } from "chai";
import { BooleanLexerCS, BooleanLexerMath, BooleanToken, BooleanTokenType, ExpressionTree, Parser } from "../structures/BooleanEvaluator";

describe("BooleanEvaluatorCS test suite", () => {
	it("Can lex", () => {
		const lexer: BooleanLexerCS = new BooleanLexerCS("A&B|(1&!0)");
		let token: BooleanToken = lexer.getTokenAndAdvance();
		expect(token.type).to.equal(BooleanTokenType.Variable);
		expect(token.variable).to.equal("A");
		token = lexer.getTokenAndAdvance();
		expect(token.type).to.equal(BooleanTokenType.And);
		token = lexer.getTokenAndAdvance();
		expect(token.type).to.equal(BooleanTokenType.Variable);
		expect(token.variable).to.equal("B");
		token = lexer.getTokenAndAdvance();
		expect(token.type).to.equal(BooleanTokenType.Or);
		token = lexer.getTokenAndAdvance();
		expect(token.type).to.equal(BooleanTokenType.LParen);
		token = lexer.getTokenAndAdvance();
		expect(token.type).to.equal(BooleanTokenType.True);
		token = lexer.getTokenAndAdvance();
		expect(token.type).to.equal(BooleanTokenType.And);
		token = lexer.getTokenAndAdvance();
		expect(token.type).to.equal(BooleanTokenType.Not);
		token = lexer.getTokenAndAdvance();
		expect(token.type).to.equal(BooleanTokenType.False);
		token = lexer.getTokenAndAdvance();
		expect(token.type).to.equal(BooleanTokenType.RParen);
	});
	it("Can parse", () => {
		const parser: Parser<BooleanLexerCS> = new Parser<BooleanLexerCS>();
		const expressionTree: ExpressionTree = parser.parse(BooleanLexerCS, "A&B|(1&!0)");
		expect(expressionTree).to.not.be.null;
	});
});

describe("BooleanEvaluatorMath test suite", () => {
	it("Can lex", () => {
		const lexer: BooleanLexerMath = new BooleanLexerMath("A*B+(1*~0)");
		let token: BooleanToken = lexer.getTokenAndAdvance();
		expect(token.type).to.equal(BooleanTokenType.Variable);
		expect(token.variable).to.equal("A");
		token = lexer.getTokenAndAdvance();
		expect(token.type).to.equal(BooleanTokenType.And);
		token = lexer.getTokenAndAdvance();
		expect(token.type).to.equal(BooleanTokenType.Variable);
		expect(token.variable).to.equal("B");
		token = lexer.getTokenAndAdvance();
		expect(token.type).to.equal(BooleanTokenType.Or);
		token = lexer.getTokenAndAdvance();
		expect(token.type).to.equal(BooleanTokenType.LParen);
		token = lexer.getTokenAndAdvance();
		expect(token.type).to.equal(BooleanTokenType.True);
		token = lexer.getTokenAndAdvance();
		expect(token.type).to.equal(BooleanTokenType.And);
		token = lexer.getTokenAndAdvance();
		expect(token.type).to.equal(BooleanTokenType.Not);
		token = lexer.getTokenAndAdvance();
		expect(token.type).to.equal(BooleanTokenType.False);
		token = lexer.getTokenAndAdvance();
		expect(token.type).to.equal(BooleanTokenType.RParen);
	});
});