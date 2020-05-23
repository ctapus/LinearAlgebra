export enum BooleanTokenType { Or, And, Not, True, False, Variable, LParen, RParen, End, Unknown }
export class BooleanToken {
	public type: BooleanTokenType;
	public variable: string | boolean;
	constructor(type: BooleanTokenType, variable?: string | boolean) {
		this.type = type;
		this.variable = variable;
	}
}
abstract class BooleanLexer {
	protected inputCheckRegex: RegExp;
	protected tokenRegexOr: RegExp;
	protected tokenRegexAnd: RegExp;
	protected tokenRegexNot: RegExp;
	protected tokenRegexTrue: RegExp;
	protected tokenRegexFalse: RegExp;
	protected tokenRegexLParen: RegExp = /\(/;
	protected tokenRegexRParen: RegExp = /\)/;
	protected tokenRegexVariable: RegExp = /[A-Z]/;
	private tokens: string[];
	private tokenIndex: number;
	public getTokenAndAdvance(): BooleanToken {
		if (this.tokens.length - 1 === this.tokenIndex) { return new BooleanToken(BooleanTokenType.End); }
		const input: string = this.tokens[this.tokenIndex++];
		return this.getToken(input);
	}
	public revert(): void {
		if (this.tokenIndex <= 0) { throw Error("Index out of range"); }
		this.tokenIndex--;
	}
	protected tokenize(input: string) {
		this.tokens = input.replace(" ", "").match(this.inputCheckRegex);
		this.tokenIndex = 0;
	}
	private getToken(input: string): BooleanToken {
		if (this.tokenRegexOr.test(input)) {
			return new BooleanToken(BooleanTokenType.Or);
		}
		if (this.tokenRegexAnd.test(input)) {
			return new BooleanToken(BooleanTokenType.And);
		}
		if (this.tokenRegexNot.test(input)) {
			return new BooleanToken(BooleanTokenType.Not);
		}
		if (this.tokenRegexVariable.test(input)) {
			return new BooleanToken(BooleanTokenType.Variable, input);
		}
		if (this.tokenRegexTrue.test(input)) {
			return new BooleanToken(BooleanTokenType.True);
		}
		if (this.tokenRegexFalse.test(input)) {
			return new BooleanToken(BooleanTokenType.False);
		}
		if (this.tokenRegexLParen.test(input)) {
			return new BooleanToken(BooleanTokenType.LParen);
		}
		if (this.tokenRegexRParen.test(input)) {
			return new BooleanToken(BooleanTokenType.RParen);
		}
		return new BooleanToken(BooleanTokenType.Unknown);
	}
}
enum OperationType { Or, And, Not}
export class ExpressionTree {
	public left: ExpressionTree;
	public node: string | boolean | OperationType;
	public right: ExpressionTree;
	constructor(input?: string | boolean | OperationType) {
		this.node = input;
	}
	public freeVariables(): Set<string> {
		const freeVariables: Set<string> = new Set<string>();
		if (typeof this.node === "string") {
			freeVariables.add(this.node);
		}
		for (const x of this.left.freeVariables()) {
			freeVariables.add(x);
		}
		for (const x of this.right.freeVariables()) {
			freeVariables.add(x);
		}
		return freeVariables;
	}
}
export class Parser<T extends BooleanLexer> {
	private lex: T;
	public parse(lexerType: new (code: string) => T, code: string): ExpressionTree {
		this.lex = new lexerType(code);
		const expression: ExpressionTree = this.expr();
		const token: BooleanToken = this.lex.getTokenAndAdvance();
		if (token.type === BooleanTokenType.End) {
			return expression;
		}
		throw Error("End expected");
	}
	private expr(): ExpressionTree {
		let booleanExpressionTree: ExpressionTree;
		let token: BooleanToken = this.lex.getTokenAndAdvance();
		if (token.type === BooleanTokenType.End) {
			return booleanExpressionTree;
		}
		if (token.type === BooleanTokenType.LParen) {
			booleanExpressionTree = new ExpressionTree();
			booleanExpressionTree.left = this.expr();
			token = this.lex.getTokenAndAdvance();
			if (token.type !== BooleanTokenType.RParen) {
				throw Error("Unbalanced parenthesis.");
			}
			token = this.lex.getTokenAndAdvance();
			switch (token.type) {
				case BooleanTokenType.Or:
					booleanExpressionTree.node = OperationType.Or;
					booleanExpressionTree.right = this.expr();
					break;
				case BooleanTokenType.And:
					booleanExpressionTree.node = OperationType.And;
					booleanExpressionTree.right = this.expr();
					break;
				case BooleanTokenType.End:
					return booleanExpressionTree;
				default:
					throw Error("Incorrect syntax.");
			}
		} else {
			this.lex.revert();
			booleanExpressionTree = this.binaryOp();
		}
		return booleanExpressionTree;
	}
	private binaryOp(): ExpressionTree {
		let booleanExpressionTree: ExpressionTree;
		let token: BooleanToken = this.lex.getTokenAndAdvance();
		if (token.type === BooleanTokenType.Variable || token.type === BooleanTokenType.True || token.type === BooleanTokenType.False) {
			booleanExpressionTree = new ExpressionTree();
			booleanExpressionTree.left = new ExpressionTree(token.variable);
			token = this.lex.getTokenAndAdvance();
			switch (token.type) {
				case BooleanTokenType.Or:
					booleanExpressionTree.node = OperationType.Or;
					booleanExpressionTree.right = this.expr();
					break;
				case BooleanTokenType.And:
					booleanExpressionTree.node = OperationType.And;
					booleanExpressionTree.right = this.expr();
					break;
				default:
					throw Error("Incorrect syntax.");
			}
		} else {
			this.lex.revert();
			booleanExpressionTree = this.unaryOp();
		}
		return booleanExpressionTree;
	}
	private unaryOp(): ExpressionTree {
		let booleanExpressionTree: ExpressionTree;
		let token: BooleanToken = this.lex.getTokenAndAdvance();
		if (token.type === BooleanTokenType.Not) {
			booleanExpressionTree = new ExpressionTree(OperationType.Not);
			token = this.lex.getTokenAndAdvance();
			if (token.type === BooleanTokenType.Variable || token.type === BooleanTokenType.True || token.type === BooleanTokenType.False) {
				booleanExpressionTree.left = new ExpressionTree(token.variable);
			} else {
				this.lex.revert();
				if (token.type !== BooleanTokenType.End) {
					booleanExpressionTree.left = this.expr();
				}
			}
		} else {
			throw Error("Incorrect syntax.");
		}
		return booleanExpressionTree;
	}
}

export class BooleanLexerCS extends BooleanLexer {
	protected inputCheckRegex: RegExp = /\(|\)|[\|\&\!]|[A-Z]|[10]*/g;
	protected tokenRegexOr: RegExp = /\|/;
	protected tokenRegexAnd: RegExp = /\&/;
	protected tokenRegexNot: RegExp = /\!/;
	protected tokenRegexTrue: RegExp = /1/;
	protected tokenRegexFalse: RegExp = /0/;
	constructor(input: string) {
		super();
		this.tokenize(input);
	}
}

export class BooleanLexerMath extends BooleanLexer {
	protected inputCheckRegex: RegExp = /\(|\)|[\+\*\~]|[A-Z]|[10]*/g;
	protected tokenRegexOr: RegExp = /\+/;
	protected tokenRegexAnd: RegExp = /\*/;
	protected tokenRegexNot: RegExp = /\~/;
	protected tokenRegexTrue: RegExp = /1/;
	protected tokenRegexFalse: RegExp = /0/;
	constructor(input: string) {
		super();
		this.tokenize(input);
	}
}

/*
expr			: LPARAM expr RPARAM ((AND | OR) expr)*
				| binaryOp
binaryOp		: (variableTerm | booleanTerm) ((AND | OR) expr)+
				| unaryOp ((AND | OR) expr)+
unaryOp			: NOT (variableTerm | booleanTerm | LPARAM expr RPARAM)
variableTerm	: variable
booleanTerm		: TRUE | FALSE
*/