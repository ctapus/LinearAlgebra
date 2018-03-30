/// <reference path="../node_modules/@types/qunit/index.d.ts" />
/// <reference path="../structures/Matrix.ts" />
/// <chutzpah_reference path="../structures/Matrix.js" />
/// <chutzpah_reference path="../structures/MatrixIdentity.js" />
QUnit.module("Matrix");
QUnit.test("identity", function () {
    // arange
    var identity = new MatrixIdentity(3);
    // act
    // assert
    QUnit.assert.ok(identity, "identity returned null");
    QUnit.assert.equal(identity.elements[0][0], 1, "incorrect value");
    QUnit.assert.equal(identity.elements[0][1], 0, "incorrect value");
    QUnit.assert.equal(identity.elements[0][2], 0, "incorrect value");
    QUnit.assert.equal(identity.elements[1][0], 0, "incorrect value");
    QUnit.assert.equal(identity.elements[1][1], 1, "incorrect value");
    QUnit.assert.equal(identity.elements[1][2], 0, "incorrect value");
    QUnit.assert.equal(identity.elements[2][0], 0, "incorrect value");
    QUnit.assert.equal(identity.elements[2][1], 0, "incorrect value");
    QUnit.assert.equal(identity.elements[2][2], 1, "incorrect value");
});
QUnit.test("permutation", function () {
    // arange
    var identity = new MatrixPermutation(3, 1, 2);
    // act
    // assert
    QUnit.assert.ok(identity, "identity returned null");
    QUnit.assert.equal(identity.elements[0][0], 1, "incorrect value");
    QUnit.assert.equal(identity.elements[0][1], 0, "incorrect value");
    QUnit.assert.equal(identity.elements[0][2], 0, "incorrect value");
    QUnit.assert.equal(identity.elements[1][0], 0, "incorrect value");
    QUnit.assert.equal(identity.elements[1][1], 0, "incorrect value");
    QUnit.assert.equal(identity.elements[1][2], 1, "incorrect value");
    QUnit.assert.equal(identity.elements[2][0], 0, "incorrect value");
    QUnit.assert.equal(identity.elements[2][1], 1, "incorrect value");
    QUnit.assert.equal(identity.elements[2][2], 0, "incorrect value");
});
QUnit.test("equals Positiv", function () {
    // arange
    var M1 = new Matrix(3, 3);
    M1.elements = [[new RationalNumber(1), new RationalNumber(0), new RationalNumber(0)],
        [new RationalNumber(0), new RationalNumber(1), new RationalNumber(0)],
        [new RationalNumber(0), new RationalNumber(0), new RationalNumber(1)]];
    var M2 = new Matrix(3, 3);
    M2.elements = [[new RationalNumber(1), new RationalNumber(0), new RationalNumber(0)],
        [new RationalNumber(0), new RationalNumber(1), new RationalNumber(0)],
        [new RationalNumber(0), new RationalNumber(0), new RationalNumber(1)]];
    // act
    // assert
    QUnit.assert.equal(M1.equals(M2), true, "incorrect value");
});
QUnit.test("equals Negativ 1", function () {
    // arange
    var M1 = new Matrix(3, 3);
    M1.elements = [[new RationalNumber(1), new RationalNumber(0), new RationalNumber(0)],
        [new RationalNumber(0), new RationalNumber(1), new RationalNumber(0)],
        [new RationalNumber(0), new RationalNumber(0), new RationalNumber(1)]];
    var M2 = new Matrix(1, 1);
    // act
    // assert
    QUnit.assert.equal(M1.equals(M2), false, "incorrect value");
});
QUnit.test("equals Negativ 2", function () {
    // arange
    var M1 = new Matrix(3, 3);
    M1.elements = [[new RationalNumber(1), new RationalNumber(0), new RationalNumber(0)],
        [new RationalNumber(0), new RationalNumber(1), new RationalNumber(0)],
        [new RationalNumber(0), new RationalNumber(0), new RationalNumber(1)]];
    var M2 = new Matrix(3, 3);
    M2.elements = [[new RationalNumber(1), new RationalNumber(1), new RationalNumber(1)],
        [new RationalNumber(1), new RationalNumber(1), new RationalNumber(1)],
        [new RationalNumber(1), new RationalNumber(1), new RationalNumber(1)]];
    // act
    // assert
    QUnit.assert.equal(M1.equals(M2), false, "incorrect value");
});
QUnit.test("isIdentity Positiv", function () {
    // arange
    var m = new Matrix(3, 3);
    m.elements = [[new RationalNumber(1), new RationalNumber(0), new RationalNumber(0)],
        [new RationalNumber(0), new RationalNumber(1), new RationalNumber(0)],
        [new RationalNumber(0), new RationalNumber(0), new RationalNumber(1)]];
    // act
    // assert
    QUnit.assert.equal(m.isIdentity(), true, "incorrect value");
});
QUnit.test("isIdentity Negativ", function () {
    // arange
    var m = new Matrix(3, 3);
    m.elements = [[new RationalNumber(1), new RationalNumber(1), new RationalNumber(1)],
        [new RationalNumber(1), new RationalNumber(1), new RationalNumber(1)],
        [new RationalNumber(1), new RationalNumber(1), new RationalNumber(1)]];
    // act
    // assert
    QUnit.assert.equal(m.isIdentity(), false, "incorrect value");
});
QUnit.test("isDiagonal Positiv", function () {
    // arange
    var m = new Matrix(3, 3);
    m.elements = [[new RationalNumber(1), new RationalNumber(0), new RationalNumber(0)],
        [new RationalNumber(0), new RationalNumber(1), new RationalNumber(0)],
        [new RationalNumber(0), new RationalNumber(0), new RationalNumber(1)]];
    // act
    // assert
    QUnit.assert.ok(m, "matrix is null");
    QUnit.assert.equal(m.isDiagonal(), true, "incorrect value");
});
QUnit.test("isDiagonal Negativ", function () {
    // arange
    var m = new Matrix(3, 3);
    m.elements = [[new RationalNumber(1), new RationalNumber(1), new RationalNumber(1)],
        [new RationalNumber(1), new RationalNumber(1), new RationalNumber(1)],
        [new RationalNumber(1), new RationalNumber(1), new RationalNumber(1)]];
    // act
    // assert
    QUnit.assert.ok(m, "matrix is null");
    QUnit.assert.equal(m.isDiagonal(), false, "incorrect value");
});
QUnit.test("isUpperTriangular Positiv", function () {
    // arange
    var m = new Matrix(3, 3);
    m.elements = [[new RationalNumber(1), new RationalNumber(1), new RationalNumber(1)],
        [new RationalNumber(0), new RationalNumber(1), new RationalNumber(1)],
        [new RationalNumber(0), new RationalNumber(0), new RationalNumber(1)]];
    // act
    // assert
    QUnit.assert.ok(m, "matrix is null");
    QUnit.assert.equal(m.isUpperTriangular(), true, "incorrect value");
});
QUnit.test("isUpperTriangular Negativ", function () {
    // arange
    var m = new Matrix(3, 3);
    m.elements = [[new RationalNumber(1), new RationalNumber(1), new RationalNumber(1)],
        [new RationalNumber(1), new RationalNumber(1), new RationalNumber(1)],
        [new RationalNumber(1), new RationalNumber(1), new RationalNumber(1)]];
    // act
    // assert
    QUnit.assert.ok(m, "matrix is null");
    QUnit.assert.equal(m.isUpperTriangular(), false, "incorrect value");
});
QUnit.test("isLowerTriangular Positiv", function () {
    // arange
    var m = new Matrix(3, 3);
    m.elements = [[new RationalNumber(1), new RationalNumber(0), new RationalNumber(0)],
        [new RationalNumber(1), new RationalNumber(1), new RationalNumber(0)],
        [new RationalNumber(1), new RationalNumber(1), new RationalNumber(1)]];
    // act
    // assert
    QUnit.assert.ok(m, "matrix is null");
    QUnit.assert.equal(m.isLowerTriangular(), true, "incorrect value");
});
QUnit.test("isLowerTriangular Negativ", function () {
    // arange
    var m = new Matrix(3, 3);
    m.elements = [[new RationalNumber(1), new RationalNumber(1), new RationalNumber(1)],
        [new RationalNumber(1), new RationalNumber(1), new RationalNumber(1)],
        [new RationalNumber(1), new RationalNumber(1), new RationalNumber(1)]];
    // act
    // assert
    QUnit.assert.ok(m, "matrix is null");
    QUnit.assert.equal(m.isLowerTriangular(), false, "incorrect value");
});
QUnit.test("isSymmetric Positiv", function () {
    // arange
    var m = new Matrix(3, 3);
    m.elements = [[new RationalNumber(1), new RationalNumber(2), new RationalNumber(3)],
        [new RationalNumber(2), new RationalNumber(1), new RationalNumber(4)],
        [new RationalNumber(3), new RationalNumber(4), new RationalNumber(1)]];
    // act
    // assert
    QUnit.assert.ok(m, "matrix is null");
    QUnit.assert.equal(m.isSymmetric(), true, "incorrect value");
});
QUnit.test("isSymmetric Negativ", function () {
    // arange
    var m = new Matrix(3, 3);
    m.elements = [[new RationalNumber(1), new RationalNumber(1), new RationalNumber(1)],
        [new RationalNumber(1), new RationalNumber(2), new RationalNumber(3)],
        [new RationalNumber(4), new RationalNumber(1), new RationalNumber(1)]];
    // act
    // assert
    QUnit.assert.ok(m, "matrix is null");
    QUnit.assert.equal(m.isSymmetric(), false, "incorrect value");
});
QUnit.test("augment matrix-vector", function () {
    // arange
    var m = new Matrix(3, 2);
    m.elements = [[new RationalNumber(0), new RationalNumber(1)],
        [new RationalNumber(10), new RationalNumber(11)],
        [new RationalNumber(20), new RationalNumber(21)]];
    var v = new Vector(3);
    v.elements = [new RationalNumber(2), new RationalNumber(12), new RationalNumber(22)];
    // act
    var am = Matrix.augment(m, v);
    // assert
    QUnit.assert.ok(am, "identity returned null");
    QUnit.assert.equal(am.m, 3, "incorrect value");
    QUnit.assert.equal(am.n, 3, "incorrect value");
    QUnit.assert.equal(am.elements[0][0], 0, "incorrect value");
    QUnit.assert.equal(am.elements[0][1], 1, "incorrect value");
    QUnit.assert.equal(am.elements[0][2], 2, "incorrect value");
    QUnit.assert.equal(am.elements[1][0], 10, "incorrect value");
    QUnit.assert.equal(am.elements[1][1], 11, "incorrect value");
    QUnit.assert.equal(am.elements[1][2], 12, "incorrect value");
    QUnit.assert.equal(am.elements[2][0], 20, "incorrect value");
    QUnit.assert.equal(am.elements[2][1], 21, "incorrect value");
    QUnit.assert.equal(am.elements[2][2], 22, "incorrect value");
});
QUnit.test("augment matrix-matrix", function () {
    // arange
    var m = new Matrix(3, 2);
    m.elements = [[new RationalNumber(0), new RationalNumber(1)],
        [new RationalNumber(10), new RationalNumber(11)],
        [new RationalNumber(20), new RationalNumber(21)]];
    var m2 = new Matrix(3, 2);
    m2.elements = [[new RationalNumber(2), new RationalNumber(3)],
        [new RationalNumber(12), new RationalNumber(13)],
        [new RationalNumber(22), new RationalNumber(23)]];
    // act
    var am = Matrix.augment(m, m2);
    // assert
    QUnit.assert.ok(am, "identity returned null");
    QUnit.assert.equal(am.m, 3, "incorrect value");
    QUnit.assert.equal(am.n, 4, "incorrect value");
    QUnit.assert.equal(am.elements[0][0], 0, "incorrect value");
    QUnit.assert.equal(am.elements[0][1], 1, "incorrect value");
    QUnit.assert.equal(am.elements[0][2], 2, "incorrect value");
    QUnit.assert.equal(am.elements[0][3], 3, "incorrect value");
    QUnit.assert.equal(am.elements[1][0], 10, "incorrect value");
    QUnit.assert.equal(am.elements[1][1], 11, "incorrect value");
    QUnit.assert.equal(am.elements[1][2], 12, "incorrect value");
    QUnit.assert.equal(am.elements[1][3], 13, "incorrect value");
    QUnit.assert.equal(am.elements[2][0], 20, "incorrect value");
    QUnit.assert.equal(am.elements[2][1], 21, "incorrect value");
    QUnit.assert.equal(am.elements[2][2], 22, "incorrect value");
    QUnit.assert.equal(am.elements[2][3], 23, "incorrect value");
});
QUnit.test("mult number", function () {
    // arange
    var m = new Matrix(3, 2);
    m.elements = [[new RationalNumber(0), new RationalNumber(1)],
        [new RationalNumber(10), new RationalNumber(11)],
        [new RationalNumber(20), new RationalNumber(21)]];
    var mult1 = 3;
    // act
    var res = m.mult(mult1);
    // assert
    QUnit.assert.ok(res, "identity returned null");
    QUnit.assert.equal(res.m, 3, "incorrect value");
    QUnit.assert.equal(res.n, 2, "incorrect value");
    QUnit.assert.equal(res.elements[0][0], 0, "incorrect value");
    QUnit.assert.equal(res.elements[0][1], 3, "incorrect value");
    QUnit.assert.equal(res.elements[1][0], 30, "incorrect value");
    QUnit.assert.equal(res.elements[1][1], 33, "incorrect value");
    QUnit.assert.equal(res.elements[2][0], 60, "incorrect value");
    QUnit.assert.equal(res.elements[2][1], 63, "incorrect value");
});
QUnit.test("mult rational", function () {
    // arange
    var m = new Matrix(3, 2);
    m.elements = [[new RationalNumber(0), new RationalNumber(1)],
        [new RationalNumber(10), new RationalNumber(11)],
        [new RationalNumber(20), new RationalNumber(21)]];
    var mult1 = new RationalNumber(3);
    // act
    var res = m.mult(mult1);
    // assert
    QUnit.assert.ok(res, "identity returned null");
    QUnit.assert.equal(res.m, 3, "incorrect value");
    QUnit.assert.equal(res.n, 2, "incorrect value");
    QUnit.assert.equal(res.elements[0][0], 0, "incorrect value");
    QUnit.assert.equal(res.elements[0][1], 3, "incorrect value");
    QUnit.assert.equal(res.elements[1][0], 30, "incorrect value");
    QUnit.assert.equal(res.elements[1][1], 33, "incorrect value");
    QUnit.assert.equal(res.elements[2][0], 60, "incorrect value");
    QUnit.assert.equal(res.elements[2][1], 63, "incorrect value");
});
QUnit.test("mult matrix", function () {
    // arange
    var m = new Matrix(3, 2);
    m.elements = [[new RationalNumber(0), new RationalNumber(1)],
        [new RationalNumber(10), new RationalNumber(11)],
        [new RationalNumber(20), new RationalNumber(21)]];
    var m2 = new Matrix(2, 3);
    m2.elements = [[new RationalNumber(2), new RationalNumber(3), new RationalNumber(4)],
        [new RationalNumber(12), new RationalNumber(13), new RationalNumber(14)]];
    m2.elements[0][0] = new RationalNumber(2);
    m2.elements[0][1] = new RationalNumber(3);
    m2.elements[0][2] = new RationalNumber(4);
    m2.elements[1][0] = new RationalNumber(12);
    m2.elements[1][1] = new RationalNumber(13);
    m2.elements[1][2] = new RationalNumber(14);
    // act
    var am = m.mult(m2);
    // assert
    QUnit.assert.ok(am, "identity returned null");
    QUnit.assert.equal(am.m, 3, "incorrect value");
    QUnit.assert.equal(am.n, 3, "incorrect value");
    QUnit.assert.equal(am.elements[0][0], 12, "incorrect value");
    QUnit.assert.equal(am.elements[0][1], 13, "incorrect value");
    QUnit.assert.equal(am.elements[0][2], 14, "incorrect value");
    QUnit.assert.equal(am.elements[1][0], 152, "incorrect value");
    QUnit.assert.equal(am.elements[1][1], 173, "incorrect value");
    QUnit.assert.equal(am.elements[1][2], 194, "incorrect value");
    QUnit.assert.equal(am.elements[2][0], 292, "incorrect value");
    QUnit.assert.equal(am.elements[2][1], 333, "incorrect value");
    QUnit.assert.equal(am.elements[2][2], 374, "incorrect value");
});
QUnit.test("isRowEchelonForm Positiv 1", function () {
    // arange
    var m = new Matrix(3, 3);
    m.elements = [[new RationalNumber(1), new RationalNumber(1), new RationalNumber(1)],
        [new RationalNumber(0), new RationalNumber(1), new RationalNumber(1)],
        [new RationalNumber(0), new RationalNumber(0), new RationalNumber(1)]];
    // act
    // assert
    QUnit.assert.ok(m, "matrix is null");
    QUnit.assert.equal(m.isRowEchelonForm(), true, "incorrect value");
});
QUnit.test("isRowEchelonForm Positiv 2", function () {
    // arange
    var m = new Matrix(4, 3);
    m.elements = [[new RationalNumber(1), new RationalNumber(1), new RationalNumber(1)],
        [new RationalNumber(0), new RationalNumber(1), new RationalNumber(1)],
        [new RationalNumber(0), new RationalNumber(0), new RationalNumber(1)],
        [new RationalNumber(0), new RationalNumber(0), new RationalNumber(0)]];
    // act
    // assert
    QUnit.assert.ok(m, "matrix is null");
    QUnit.assert.equal(m.isRowEchelonForm(), true, "incorrect value");
});
QUnit.test("isRowEchelonForm Negativ zero row", function () {
    // arange
    var m = new Matrix(3, 3);
    m.elements = [[new RationalNumber(0), new RationalNumber(0), new RationalNumber(0)],
        [new RationalNumber(1), new RationalNumber(1), new RationalNumber(1)],
        [new RationalNumber(1), new RationalNumber(1), new RationalNumber(1)]];
    // act
    // assert
    QUnit.assert.ok(m, "matrix is null");
    QUnit.assert.equal(m.isRowEchelonForm(), false, "incorrect value");
});
QUnit.test("isRowEchelonForm Negativ pivot not one", function () {
    // arange
    var m = new Matrix(3, 3);
    m.elements = [[new RationalNumber(1), new RationalNumber(0), new RationalNumber(0)],
        [new RationalNumber(0), new RationalNumber(3), new RationalNumber(1)],
        [new RationalNumber(0), new RationalNumber(0), new RationalNumber(1)]];
    // act
    // assert
    QUnit.assert.ok(m, "matrix is null");
    QUnit.assert.equal(m.isRowEchelonForm(), false, "incorrect value");
});
QUnit.test("isRowEchelonForm Negativ leading coefficient", function () {
    // arange
    var m = new Matrix(3, 3);
    m.elements = [[new RationalNumber(1), new RationalNumber(0), new RationalNumber(0)],
        [new RationalNumber(0), new RationalNumber(1), new RationalNumber(0)],
        [new RationalNumber(0), new RationalNumber(1), new RationalNumber(0)]];
    // act
    // assert
    QUnit.assert.ok(m, "matrix is null");
    QUnit.assert.equal(m.isRowEchelonForm(), false, "incorrect value");
});
QUnit.test("isReducedRowEchelonForm Positiv", function () {
    // arange
    var m = new Matrix(3, 4);
    m.elements = [[new RationalNumber(1), new RationalNumber(0), new RationalNumber(0), new RationalNumber(1)],
        [new RationalNumber(0), new RationalNumber(1), new RationalNumber(0), new RationalNumber(1)],
        [new RationalNumber(0), new RationalNumber(0), new RationalNumber(1), new RationalNumber(1)]];
    // act
    // assert
    QUnit.assert.ok(m, "matrix is null");
    QUnit.assert.equal(m.isReducedRowEchelonForm(), true, "incorrect value");
});
QUnit.test("isReducedRowEchelonForm Negativ 1", function () {
    // arange
    var m = new Matrix(3, 3);
    m.elements = [[new RationalNumber(0), new RationalNumber(0), new RationalNumber(0)],
        [new RationalNumber(1), new RationalNumber(1), new RationalNumber(1)],
        [new RationalNumber(1), new RationalNumber(1), new RationalNumber(1)]];
    // act
    // assert
    QUnit.assert.ok(m, "matrix is null");
    QUnit.assert.equal(m.isReducedRowEchelonForm(), false, "incorrect value");
});
QUnit.test("isReducedRowEchelonForm Negativ 2", function () {
    // arange
    var m = new Matrix(3, 3);
    m.elements = [[new RationalNumber(1), new RationalNumber(0), new RationalNumber(0)],
        [new RationalNumber(1), new RationalNumber(1), new RationalNumber(1)],
        [new RationalNumber(1), new RationalNumber(1), new RationalNumber(1)]];
    // act
    // assert
    QUnit.assert.ok(m, "matrix is null");
    QUnit.assert.equal(m.isReducedRowEchelonForm(), false, "incorrect value");
});
QUnit.test("vectorProduct", function () {
    // arange
    var T = new Matrix(2, 2);
    T.elements = [[new RationalNumber(-2), new RationalNumber(0)], [new RationalNumber(0), new RationalNumber(-1)]];
    var vector = new ColumnVector(2);
    vector.elements = [new RationalNumber(1), new RationalNumber(1)];
    // act
    var transformedVector = T.vectorProduct(vector);
    // assert
    QUnit.assert.ok(transformedVector, "vectorProduct returned null");
    QUnit.assert.equal(transformedVector.elements[0].equals(-2), true, "incorrect value");
    QUnit.assert.equal(transformedVector.elements[1].equals(-1), true, "incorrect value");
});
QUnit.test("toReducedRowEchelonForm positiv 1", function () {
    // arange
    var m = new Matrix(3, 4);
    m.elements = [[new RationalNumber(1), new RationalNumber(2), new RationalNumber(-1), new RationalNumber(-4)],
        [new RationalNumber(2), new RationalNumber(3), new RationalNumber(-1), new RationalNumber(-11)],
        [new RationalNumber(-2), new RationalNumber(0), new RationalNumber(-3), new RationalNumber(22)]];
    // act
    var rref = m.toReducedRowEchelonForm();
    // assert
    QUnit.assert.ok(rref, "toReducedRowEchelonForm returned null");
    QUnit.assert.equal(rref.elements[0][0].equals(1), true, "incorrect value " + rref.elements[0][0].toString());
    QUnit.assert.equal(rref.elements[0][1].equals(0), true, "incorrect value");
    QUnit.assert.equal(rref.elements[0][2].equals(0), true, "incorrect value");
    QUnit.assert.equal(rref.elements[0][3].equals(-8), true, "incorrect value " + rref.elements[0][3].toString());
    QUnit.assert.equal(rref.elements[1][0].equals(0), true, "incorrect value");
    QUnit.assert.equal(rref.elements[1][1].equals(1), true, "incorrect value " + rref.elements[1][1].toString());
    QUnit.assert.equal(rref.elements[1][2].equals(0), true, "incorrect value");
    QUnit.assert.equal(rref.elements[1][3].equals(1), true, "incorrect value " + rref.elements[1][3].toString());
    QUnit.assert.equal(rref.elements[2][0].equals(0), true, "incorrect value");
    QUnit.assert.equal(rref.elements[2][1].equals(0), true, "incorrect value");
    QUnit.assert.equal(rref.elements[2][2].equals(1), true, "incorrect value " + rref.elements[2][2].toString());
    QUnit.assert.equal(rref.elements[2][3].equals(-2), true, "incorrect value " + rref.elements[2][3].toString());
});
QUnit.test("toReducedRowEchelonForm positiv 2", function () {
    // arange
    var m = new Matrix(4, 5);
    m.elements = [
        [new RationalNumber(1), new RationalNumber(1), new RationalNumber(-2), new RationalNumber(0), new RationalNumber(-1)],
        [new RationalNumber(1), new RationalNumber(2), new RationalNumber(0), new RationalNumber(-4), new RationalNumber(1)],
        [new RationalNumber(0), new RationalNumber(1), new RationalNumber(3), new RationalNumber(-3), new RationalNumber(2)],
        [new RationalNumber(2), new RationalNumber(3), new RationalNumber(0), new RationalNumber(-2), new RationalNumber(0)]
    ];
    // act
    var rref = m.toReducedRowEchelonForm();
    // assert
    QUnit.assert.ok(rref, "toReducedRowEchelonForm returned null");
    QUnit.assert.equal(rref.m, 4, "wrong number of rows");
    QUnit.assert.equal(rref.n, 5, "wrong number of columns");
    QUnit.assert.equal(rref.elements[0][0].equals(1), true, "incorrect value " + rref.elements[0][0].toString());
    QUnit.assert.equal(rref.elements[0][1].equals(0), true, "incorrect value " + rref.elements[0][1].toString());
    QUnit.assert.equal(rref.elements[0][2].equals(0), true, "incorrect value " + rref.elements[0][2].toString());
    QUnit.assert.equal(rref.elements[0][3].equals(8), true, "incorrect value " + rref.elements[0][3].toString());
    QUnit.assert.equal(rref.elements[0][4].equals(-3), true, "incorrect value " + rref.elements[0][4].toString());
    QUnit.assert.equal(rref.elements[1][0].equals(0), true, "incorrect value " + rref.elements[1][0].toString());
    QUnit.assert.equal(rref.elements[1][1].equals(1), true, "incorrect value " + rref.elements[1][1].toString());
    QUnit.assert.equal(rref.elements[1][2].equals(0), true, "incorrect value " + rref.elements[1][2].toString());
    QUnit.assert.equal(rref.elements[1][3].equals(-6), true, "incorrect value " + rref.elements[1][3].toString());
    QUnit.assert.equal(rref.elements[1][4].equals(2), true, "incorrect value " + rref.elements[1][4].toString());
    QUnit.assert.equal(rref.elements[2][0].equals(0), true, "incorrect value " + rref.elements[2][0].toString());
    QUnit.assert.equal(rref.elements[2][1].equals(0), true, "incorrect value " + rref.elements[2][1].toString());
    QUnit.assert.equal(rref.elements[2][2].equals(1), true, "incorrect value " + rref.elements[2][2].toString());
    QUnit.assert.equal(rref.elements[2][3].equals(1), true, "incorrect value " + rref.elements[2][3].toString());
    QUnit.assert.equal(rref.elements[2][4].equals(0), true, "incorrect value " + rref.elements[2][4].toString());
    QUnit.assert.equal(rref.elements[3][0].equals(0), true, "incorrect value " + rref.elements[3][0].toString());
    QUnit.assert.equal(rref.elements[3][1].equals(0), true, "incorrect value " + rref.elements[3][1].toString());
    QUnit.assert.equal(rref.elements[3][2].equals(0), true, "incorrect value " + rref.elements[3][2].toString());
    QUnit.assert.equal(rref.elements[3][3].equals(0), true, "incorrect value " + rref.elements[3][3].toString());
    QUnit.assert.equal(rref.elements[3][4].equals(0), true, "incorrect value " + rref.elements[3][4].toString());
});
QUnit.test("determinant positiv", function () {
    // arange
    var m = new Matrix(1, 1);
    m.elements = [[new RationalNumber(2)]];
    // act
    var det = m.determinant();
    // assert
    QUnit.assert.ok(det.equals(2), "incorrect value " + det.toString());
});
QUnit.test("determinant positiv 2", function () {
    // arange
    var m = new Matrix(2, 2);
    m.elements = [[new RationalNumber(2), new RationalNumber(3)],
        [new RationalNumber(-3), new RationalNumber(2)]];
    // act
    var det = m.determinant();
    // assert
    QUnit.assert.ok(det.equals(13), "incorrect value " + det.toString());
});
QUnit.test("determinant positiv 3", function () {
    // arange
    var m = new Matrix(3, 3);
    m.elements = [[new RationalNumber(2), new RationalNumber(3), new RationalNumber(-2)],
        [new RationalNumber(-3), new RationalNumber(2), new RationalNumber(2)],
        [new RationalNumber(0), new RationalNumber(4), new RationalNumber(1)]];
    // act
    var det = m.determinant();
    // assert
    QUnit.assert.ok(det.equals(21), "incorrect value " + det.toString());
});
QUnit.test("determinant positiv 4", function () {
    // arange
    var m = new Matrix(4, 4);
    m.elements = [[new RationalNumber(2), new RationalNumber(3), new RationalNumber(-2), new RationalNumber(4)],
        [new RationalNumber(-3), new RationalNumber(2), new RationalNumber(2), new RationalNumber(1)],
        [new RationalNumber(0), new RationalNumber(4), new RationalNumber(1), new RationalNumber(1)],
        [new RationalNumber(2), new RationalNumber(3), new RationalNumber(0), new RationalNumber(2)]];
    // act
    var det = m.determinant();
    // assert
    QUnit.assert.ok(det.equals(44), "incorrect value " + det.toString());
});
//# sourceMappingURL=matrixTests.js.map