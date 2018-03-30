/// <reference path="Queue.d.ts" />
/// <reference path="Stack.d.ts" />
declare class ArithmeticEvaluator {
    private static isNumber(code);
    private static isOperator(code);
    private static isLeftAssociativeOperator(operator);
    private static isRightAssociativeOperator(operator);
    private static precedence(operator);
    static toReversePolishNotation(code: string): string[];
    static evaluateFromRPN(tokens: string[]): number;
}
declare enum TokenType {
    Plus = 0,
    Minus = 1,
    Multiply = 2,
    Divide = 3,
    Exponent = 4,
    Number = 5,
    LParen = 6,
    RParen = 7,
    End = 8,
    Unknown = 9,
}
declare class Token {
    type: TokenType;
    value: number;
    constructor(type: TokenType, value?: number);
}
declare class Lexer {
    private tokens;
    private tokenIndex;
    constructor(input: string);
    getNextToken(): Token;
    getCurrentToken(): Token;
    revert(): void;
    private getToken(input);
}
declare class Parser {
    private lex;
    parse(code: string): RationalNumber;
    private fourthOrderOperators();
    private thirdOrderOperators();
    private secondOrderOperators();
    private firstOrderOperators();
}
