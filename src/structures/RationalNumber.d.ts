/// <reference path="ArithmeticEvaluator.d.ts" />
declare class RationalNumber {
    numerator: number;
    denominator: number;
    constructor(n: number, d?: number);
    private greatestCommonDivisor(a, b);
    private leastCommonMultiple(a, b);
    simplifiedForm(): RationalNumber;
    equals(x: number | RationalNumber): boolean;
    lt(x: number | RationalNumber): boolean;
    le(x: number | RationalNumber): boolean;
    gt(x: number | RationalNumber): boolean;
    ge(x: number | RationalNumber): boolean;
    reciprocal(): RationalNumber;
    add(x: number | RationalNumber): RationalNumber;
    sub(x: number | RationalNumber): RationalNumber;
    mult(x: number | RationalNumber): RationalNumber;
    div(x: number | RationalNumber): RationalNumber;
    exp(x: number | RationalNumber): RationalNumber;
    toNumber(): number;
    toString(): string;
    deepCopy(): RationalNumber;
    static fromString(code: string): RationalNumber;
    private static isNumber(code);
    private static isOperator(code);
    private static isLeftAssociativeOperator(operator);
    private static isRightAssociativeOperator(operator);
    private static precedence(operator);
    static toReversePolishNotation(code: string): string[];
    private static evaluateFromRPN(tokens);
}
