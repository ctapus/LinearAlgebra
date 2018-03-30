/// <reference path="RationalNumber.d.ts" />
/// <reference path="MatrixIdentity.d.ts" />
declare class Matrix {
    m: number;
    n: number;
    elements: RationalNumber[][];
    constructor(m: number, n: number);
    add(x: Matrix): Matrix;
    sub(x: Matrix): Matrix;
    mult(x: number | RationalNumber | Matrix): Matrix;
    transpose(): Matrix;
    deepCopy(): Matrix;
    switchRows(idx1: number, idx2: number): void;
    multiplyRow(idx: number, scalar: RationalNumber): void;
    addRows(idx1: number, idx2: number, scalar: RationalNumber): void;
    addRow1ToRow2(idx1: number, scalar1: RationalNumber, idx2: number, scalar2: RationalNumber): void;
    isSquare(): boolean;
    isUpperTriangular(): boolean;
    isLowerTriangular(): boolean;
    isRowEchelonForm(): boolean;
    isReducedRowEchelonForm(): boolean;
    private isZeroRow(rowId);
    private rowPivotPosition(rowId);
    private numberOfNonZeroElementForColumn(columnId);
    static augment(A: Matrix, B: Matrix | Vector): Matrix;
    static multiplication(n: number, row1: number, row2: number, mult: number): Matrix;
    static randomSquare(): Matrix;
    static random2(): Matrix;
}
