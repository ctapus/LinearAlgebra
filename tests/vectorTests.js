/// <reference path="../node_modules/@types/qunit/index.d.ts" />
/// <reference path="../structures/Vector.ts" />
/// <chutzpah_reference path="../structures/Vector.js" />
QUnit.module("Vector");
QUnit.test("constructor array", function () {
    // arange
    var vector = new Vector([1, 2, 3]);
    // act
    // assert
    QUnit.assert.ok(vector, "vector is null");
    QUnit.assert.equal(vector.elements.length, 3);
    QUnit.assert.ok(vector.elements[0].equals(1), "incorrect value " + vector.elements[0].toString());
    QUnit.assert.ok(vector.elements[1].equals(2), "incorrect value " + vector.elements[1].toString());
    QUnit.assert.ok(vector.elements[2].equals(3), "incorrect value " + vector.elements[2].toString());
});
QUnit.test("constructor number", function () {
    // arange
    var vector = new Vector(3);
    // act
    // assert
    QUnit.assert.ok(vector, "vector is null");
});
QUnit.test("add", function () {
    // arange
    var v1 = new Vector([1, 2, 3]);
    var v2 = new Vector([1, 2, 3]);
    // act
    var res = v1.add(v2);
    // asert
    QUnit.assert.ok(res, "vector is null");
    QUnit.assert.equal(res.elements.length, 3);
    QUnit.assert.ok(res.elements[0].equals(2), "incorrect value " + res.elements[0].toString());
    QUnit.assert.ok(res.elements[1].equals(4), "incorrect value " + res.elements[1].toString());
    QUnit.assert.ok(res.elements[2].equals(6), "incorrect value " + res.elements[2].toString());
});
QUnit.test("add negative", function () {
    // arange
    var v1 = new Vector([1, 2, 3]);
    var v2 = new Vector([1, 2]);
    // act
    QUnit.assert.throws(function () { return v1.add(v2); }, "function didn't report mismatched dimensions.");
    // assert
});
QUnit.test("sub", function () {
    // arange
    var v1 = new Vector([1, 2, 3]);
    var v2 = new Vector([1, 2, 3]);
    // act
    var res = v1.sub(v2);
    // assert
    QUnit.assert.ok(res, "vector is null");
    QUnit.assert.equal(res.elements.length, 3);
    QUnit.assert.ok(res.elements[0].equals(0), "incorrect value " + res.elements[0].toString());
    QUnit.assert.ok(res.elements[1].equals(0), "incorrect value " + res.elements[1].toString());
    QUnit.assert.ok(res.elements[2].equals(0), "incorrect value " + res.elements[2].toString());
});
QUnit.test("sub negative", function () {
    // arange
    var v1 = new Vector([1, 2, 3]);
    var v2 = new Vector([1, 2]);
    // act
    QUnit.assert.throws(function () { return v1.sub(v2); }, "function didn't report mismatched dimensions.");
    // assert
});
QUnit.test("mult", function () {
    // arange
    var v = new Vector([2, 4, 6]);
    var rn = new RationalNumber(1, 2);
    // act
    var res = v.mult(rn);
    // assert
    QUnit.assert.ok(res, "result is null");
    QUnit.assert.equal(res.elements.length, 3);
    QUnit.assert.ok(res.elements[0].equals(1), "incorrect value " + res.elements[0].toString());
    QUnit.assert.ok(res.elements[1].equals(2), "incorrect value " + res.elements[1].toString());
    QUnit.assert.ok(res.elements[2].equals(3), "incorrect value " + res.elements[2].toString());
});
QUnit.test("dotProduct", function () {
    // arange
    var v1 = new Vector([1, 2, 3]);
    var v2 = new Vector([1, 2, 3]);
    // act
    var res = v1.dotProduct(v2);
    // assert
    QUnit.assert.ok(res, "result is null");
    QUnit.assert.ok(res.equals(14), "incorrect value " + res.toString());
});
QUnit.test("dotProduct negative", function () {
    // arange
    var v1 = new Vector([1, 2, 3]);
    var v2 = new Vector([1, 2]);
    // act
    QUnit.assert.throws(function () { return v1.dotProduct(v2); }, "function didn't report mismatched dimensions.");
    // assert
});
QUnit.test("RowVector matrixProduct", function () {
    // arange
    var T = new Matrix(2, 2);
    T.elements = [[new RationalNumber(-2), new RationalNumber(0)], [new RationalNumber(0), new RationalNumber(-1)]];
    var vector = new RowVector(2);
    vector.elements = [new RationalNumber(1), new RationalNumber(1)];
    // act
    var transformedVector = vector.matrixProduct(T);
    // assert
    QUnit.assert.ok(transformedVector, "matrixProduct returned null");
    QUnit.assert.ok(transformedVector.elements[0].equals(-2), "incorrect value");
    QUnit.assert.ok(transformedVector.elements[1].equals(-1), "incorrect value");
});
//# sourceMappingURL=vectorTests.js.map