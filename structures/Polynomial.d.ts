/// <reference path="RationalNumber.d.ts" />
declare class PolynomialExpression {
    terms: PolynomialExpressionTerm[];
    constructor(terms?: PolynomialExpressionTerm[]);
    condense(): void;
    calculate(): Polynomial;
}
declare class PolynomialExpressionTerm {
    polynomial: Polynomial;
    exponent: number;
    constructor(polynomial: Polynomial, exponent?: number);
    condense(): void;
    deepCopy(): PolynomialExpressionTerm;
    calculate(): Polynomial;
}
declare class Polynomial {
    terms: PolynomialTerm[];
    constructor(terms?: PolynomialTerm[]);
    add(p: Polynomial): Polynomial;
    sub(p: Polynomial): Polynomial;
    mult(p: Polynomial): Polynomial;
    div(p: Polynomial): Polynomial;
    exp(p: number): Polynomial;
    condense(): void;
    toString(): string;
    deepCopy(): Polynomial;
}
declare class PolynomialTerm {
    coefficient: RationalNumber;
    variables: VariableTerm[];
    constructor(termCoefficient: RationalNumber, variables?: VariableTerm[]);
    condense(): void;
    toString(): string;
    equals(polynomialTerm: PolynomialTerm): boolean;
    deepCopy(): PolynomialTerm;
}
declare class VariableTerm {
    variable: string;
    exponent: number;
    constructor(variable: string, exponent: number);
    toString(): string;
    equals(variableTerm: VariableTerm): boolean;
    deepCopy(): VariableTerm;
}
