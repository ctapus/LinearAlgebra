/// <reference path="RationalNumber.d.ts" />
/// <reference path="Vector.d.ts" />
/// <reference path="Matrix.d.ts" />
declare class SystemOfLinearEquations {
    noEquations: number;
    noVariables: number;
    A: Matrix;
    b: Vector;
    constructor(noEquations: number, noVariables: number);
}
