/// <reference path="RationalNumber.d.ts" />
declare class Vector {
    m: number;
    elements: RationalNumber[];
    constructor(n: number);
    deepCopy(): Vector;
    toMatrix(): Matrix;
}
declare class ColumnVector extends Vector {
}
declare class RowVector extends Vector {
}
