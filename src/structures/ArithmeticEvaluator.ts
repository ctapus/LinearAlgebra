import { Queue } from "./Queue";
import { RationalNumber } from "./RationalNumber";
import { Stack } from "./Stack";

export class ArithmeticEvaluator {
	public static toReversePolishNotation(code: string): string[] {
		const tokens: string[] = code.match(/\(|\)|\d+(\.\d+)?|\w+|[\+\-\*\/\^]/g);
		let i: number = 0;
		const outputQueue: Queue<string> = new Queue<string>();
		const operatorStack: Stack<string> = new Stack<string>();
		while (i < tokens.length) {
			if (this.isNumber(tokens[i])) {
				outputQueue.enqueue(tokens[i]);
			} else if (this.isOperator(tokens[i])) {
				let op1: string = tokens[i];
				while (!operatorStack.isEmpty() && this.isOperator(operatorStack.peek())) {
					if ((this.isLeftAssociativeOperator(op1) && (this.precedence(op1) <= this.precedence(operatorStack.peek()))) ||
						(this.isRightAssociativeOperator(op1) && (this.precedence(op1) < this.precedence(operatorStack.peek())))) {
						outputQueue.enqueue(operatorStack.pop());
					} else {
						break;
					}
				}
				operatorStack.push(op1);
			} else if (tokens[i] === "(") {
				operatorStack.push(tokens[i]);
			} else if (tokens[i] === ")") {
				while (!operatorStack.isEmpty() && operatorStack.peek() !== "(") {
					outputQueue.enqueue(operatorStack.pop());
				}
				if (!operatorStack.isEmpty() && operatorStack.peek() === "(") {
					operatorStack.pop();
				} else {
					throw new Error("Mismatched parentheses.");
				}
			}
			i++;
		}
		while (!operatorStack.isEmpty()) {
			if (operatorStack.peek() === "(") {
				throw new Error("Mismatched parentheses.");
			} else {
				outputQueue.enqueue(operatorStack.pop());
			}
		}
		return outputQueue.toArray();
	}
	public static evaluateFromRPN(tokens: string[]): number {
		const stack: Stack<number> = new Stack<number>();
		for (let i: number = 0; i < tokens.length; i++) {
			if (!this.isOperator(tokens[i])) {
				stack.push(parseFloat(tokens[i]));
			} else {
				let op1: number = stack.pop();
				let op2: number = stack.pop();
				switch (tokens[i]) {
					case "+": stack.push(op2 + op1);
						break;
					case "-": stack.push(op2 - op1);
						break;
					case "*": stack.push(op2 * op1);
						break;
					case "/": stack.push(op2 / op1);
						break;
					case "^": stack.push(op2 ** op1);
						break;
				}
			}
		}
		return stack.pop();
	}
	private static isNumber(code: string): boolean {
		return /^\d/.test(code);
	}
	private static isOperator(code: string): boolean {
		return /[\+\-\*\/\^]/.test(code);
	}
	private static isLeftAssociativeOperator(operator: string): boolean {
		return /[\+\-\*\/]/.test(operator);
	}
	private static isRightAssociativeOperator(operator: string): boolean {
		return /[\^]/.test(operator);
	}
	private static precedence(operator: string): number {
		if (/[\+\-]/.test(operator)) {
			 return 1;
		}
		if (/[\*\/]/.test(operator)) {
			 return 2;
		}
		if (/[\^]/.test(operator)) {
			 return 3;
		}
		throw new Error("Unknown operator.");
	}
}

export enum TokenType { Plus, Minus, Multiply, Divide, Exponent, Number, LParen, RParen, End, Unknown }
export class Token {
	public type: TokenType;
	public value: number;
	constructor(type: TokenType, value?: number) {
		this.type = type;
		this.value = value;
	}
}
export class Lexer {
	private tokens: string[];
	private tokenIndex: number;
	constructor(input: string) {
		this.tokens = input.replace(" ", "").match(/\(|\)|\d+(\.\d+)?|[\+\-\*\/\^]/g);
		this.tokenIndex = 0;
	}
	public getNextToken(): Token {
		if (this.tokens.length === this.tokenIndex) {
			return new Token(TokenType.End);
		}
		let input: string = this.tokens[this.tokenIndex++];
		return this.getToken(input);
	}
	public getCurrentToken(): Token {
		if (this.tokens.length - 1 === this.tokenIndex) {
			return new Token(TokenType.End);
		}
		let input: string = this.tokens[this.tokenIndex];
		return this.getToken(input);
	}
	public revert(): void {
		if (this.tokenIndex <= 0) { throw Error("Index out of range"); }
		this.tokenIndex--;
	}
	private getToken(input: string): Token {
		if (/\+/.test(input)) {
			return new Token(TokenType.Plus);
		}
		if (/\-/.test(input)) {
			return new Token(TokenType.Minus);
		}
		if (/\*/.test(input)) {
			return new Token(TokenType.Multiply);
		}
		if (/\//.test(input)) {
			return new Token(TokenType.Divide);
		}
		if (/\^/.test(input)) {
			return new Token(TokenType.Exponent);
		}
		if (/\d+(\.\d+)?/.test(input)) {
			return new Token(TokenType.Number, parseFloat(input));
		}
		if (/\(/.test(input)) {
			return new Token(TokenType.LParen);
		}
		if (/\)/.test(input)) {
			return new Token(TokenType.RParen);
		}
		return new Token(TokenType.Unknown);
	}
}
export class Parser {
	private lex: Lexer;
	public parse(code: string): RationalNumber {
		this.lex = new Lexer(code);
		const expression: RationalNumber = this.fourthOrderOperators();
		const token: Token = this.lex.getCurrentToken(); // is already advanced because of number()
		if (token.type === TokenType.End) {
			return expression;
		}
		throw Error("End expected");
	}
	// addition and substraction
	private fourthOrderOperators(): RationalNumber {
		let component1: RationalNumber = this.thirdOrderOperators();
		let token: Token = this.lex.getNextToken();
		while (token.type === TokenType.Plus || token.type === TokenType.Minus) {
			let component2: RationalNumber = this.thirdOrderOperators();
			if (token.type === TokenType.Plus) {
				component1 = component1.add(component2);
			} else if (token.type === TokenType.Minus) {
				component1 = component1.sub(component2);
			}
			token = this.lex.getNextToken();
		}
		this.lex.revert();
		return component1;
	}
	// multiplication and division
	private thirdOrderOperators(): RationalNumber {
		let factor1: RationalNumber = this.secondOrderOperators();
		let token: Token = this.lex.getNextToken();
		while (token.type === TokenType.Multiply || token.type === TokenType.Divide) {
			let factor2: RationalNumber = this.secondOrderOperators();
			if (token.type === TokenType.Multiply) {
				factor1 = factor1.mult(factor2);
			} else if (token.type === TokenType.Divide) {
				factor1 = factor1.div(factor2);
			}
			token = this.lex.getNextToken();
		}
		this.lex.revert();
		return factor1;
	}
	// exponents and roots
	private secondOrderOperators(): RationalNumber {
		let factor1: RationalNumber = this.firstOrderOperators();
		let token: Token = this.lex.getNextToken();
		while (token.type === TokenType.Exponent) {
			let factor2: RationalNumber = this.firstOrderOperators();
			factor1 = factor1.exp(factor2);
			token = this.lex.getNextToken();
		}
		this.lex.revert();
		return factor1;
	}
	// numbers and parantheses
	private firstOrderOperators(): RationalNumber {
		let value: RationalNumber = new RationalNumber(1);
		let token: Token = this.lex.getNextToken();
		if (token.type === TokenType.Plus || token.type === TokenType.Minus) {
			if (token.type === TokenType.Minus) {
				value = value.mult(-1);
			}
			token = this.lex.getNextToken();
		}
		if (token.type === TokenType.LParen) {
			value = value.mult(this.fourthOrderOperators());
			token = this.lex.getNextToken();
			if (token.type !== TokenType.RParen) {
				throw Error("Unbalanced parenthesis");
			}
		} else {
			if (token.type === TokenType.Number) {
				value = value.mult(token.value);
			} else {
				throw Error("Not a number");
			}
		}
		return value;
	}
}

/*
	public static evaluate(expresion: string): RationalNumber {
	var digitPattern = new RegExp('0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9');
	var signPattern = new RegExp('\+|\-');
	var numberPattern = new RegExp('[' + signPattern + ']' + '{' + digitPattern + '}');
	var factorPattern = new RegExp(numberPattern + '|\(' + expressionPattern + '\)');
	var componentPattern = new RegExp(factorPattern + '[{( \* | \/ )' + factorPattern + '}]');
	var expressionPattern = new RegExp(componentPattern + '[{( \+ | \-)' + componentPattern + '}]');
}*/

/*
exprr: 4thORDER+;
4thORDER: component1=3rdORDER ((PLUS|MINUS) component2=3rdORDER)+;
3rdORDER: factor1=2NDORDER ((MULTIPLY|DIVIDE) factor1=2ndORDER)+
2ndORDER: factor1=1stORDER (EXPONENT factor2=1stORDER)+
1stORDER: (PLUS|MINUS|empty) (LPAREN value=4thORDER RPAREN| NUMBER)
*/