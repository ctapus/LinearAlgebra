/// <reference path="Polynomial.ts" />

declare enum PolynomialTokenType {
    Plus = 0,
    Minus = 1,
    Asterisk = 2,
    Slash = 3,
    Caret = 4,
    Number = 5,
    Variable = 6,
    LParen = 7,
    RParen = 8,
    End = 9,
    Unknown = 10,
}
declare class PolynomialToken {
    type: PolynomialTokenType;
    value: number;
    variable: string;
    constructor(type: PolynomialTokenType, value?: number, variable?: string);
}
declare class PolynomialLexer {
    private tokens;
    private tokenIndex;
    constructor(input: string);
    getTokenAndAdvance(): PolynomialToken;
    revert(): void;
    private getToken(input);
}
declare class PolynomialParser {
    private lex;
    parse(code: string): Polynomial;
    private expr();
    private polynomial();
    private polynomialTerm();
    private variableTerm();
}
