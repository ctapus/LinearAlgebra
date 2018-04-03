"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RationalNumber_1 = require("../structures/RationalNumber");
var Vector_1 = require("../structures/Vector");
var Matrix_1 = require("../structures/Matrix");
QUnit.module("Vector");
QUnit.test("constructor array", function () {
    // arange
    var vector = new Vector_1.Vector([1, 2, 3]);
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
    var vector = new Vector_1.Vector(3);
    // act
    // assert
    QUnit.assert.ok(vector, "vector is null");
});
QUnit.test("add", function () {
    // arange
    var v1 = new Vector_1.Vector([1, 2, 3]);
    var v2 = new Vector_1.Vector([1, 2, 3]);
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
    var v1 = new Vector_1.Vector([1, 2, 3]);
    var v2 = new Vector_1.Vector([1, 2]);
    // act
    QUnit.assert.throws(function () { return v1.add(v2); }, "function didn't report mismatched dimensions.");
    // assert
});
QUnit.test("sub", function () {
    // arange
    var v1 = new Vector_1.Vector([1, 2, 3]);
    var v2 = new Vector_1.Vector([1, 2, 3]);
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
    var v1 = new Vector_1.Vector([1, 2, 3]);
    var v2 = new Vector_1.Vector([1, 2]);
    // act
    QUnit.assert.throws(function () { return v1.sub(v2); }, "function didn't report mismatched dimensions.");
    // assert
});
QUnit.test("mult", function () {
    // arange
    var v = new Vector_1.Vector([2, 4, 6]);
    var rn = new RationalNumber_1.RationalNumber(1, 2);
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
    var v1 = new Vector_1.Vector([1, 2, 3]);
    var v2 = new Vector_1.Vector([1, 2, 3]);
    // act
    var res = v1.dotProduct(v2);
    // assert
    QUnit.assert.ok(res, "result is null");
    QUnit.assert.ok(res.equals(14), "incorrect value " + res.toString());
});
QUnit.test("dotProduct negative", function () {
    // arange
    var v1 = new Vector_1.Vector([1, 2, 3]);
    var v2 = new Vector_1.Vector([1, 2]);
    // act
    QUnit.assert.throws(function () { return v1.dotProduct(v2); }, "function didn't report mismatched dimensions.");
    // assert
});
QUnit.test("RowVector matrixProduct", function () {
    // arange
    var T = new Matrix_1.Matrix(2, 2);
    T.elements = [[new RationalNumber_1.RationalNumber(-2), new RationalNumber_1.RationalNumber(0)], [new RationalNumber_1.RationalNumber(0), new RationalNumber_1.RationalNumber(-1)]];
    var vector = new Vector_1.RowVector(2);
    vector.elements = [new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(1)];
    // act
    var transformedVector = vector.matrixProduct(T);
    // assert
    QUnit.assert.ok(transformedVector, "matrixProduct returned null");
    QUnit.assert.ok(transformedVector.elements[0].equals(-2), "incorrect value");
    QUnit.assert.ok(transformedVector.elements[1].equals(-1), "incorrect value");
});
//# sourceMappingURL=vectorTests.js.map