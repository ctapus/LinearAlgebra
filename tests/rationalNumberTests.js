"use strict";
exports.__esModule = true;
var RationalNumber_1 = require("../structures/RationalNumber");
QUnit.module("RationalNumber");
QUnit.test("constructor two params", function () {
    // arange
    var rn = new RationalNumber_1.RationalNumber(3, 5);
    // act
    // assert
    QUnit.assert.notEqual(null, rn, "new failed");
    QUnit.assert.equal(rn.numerator, 3, "numerator not set correctly");
    QUnit.assert.equal(rn.denominator, 5, "denominator not set correctly");
});
QUnit.test("constructor one param", function () {
    // arange
    var rn = new RationalNumber_1.RationalNumber(3);
    // act
    // assert
    QUnit.assert.notEqual(null, rn, "new failed");
    QUnit.assert.equal(rn.numerator, 3, "numerator not set correctly");
    QUnit.assert.equal(rn.denominator, 1, "denominator not set correctly");
});
QUnit.test("simplified  form", function () {
    // arange
    var rn = new RationalNumber_1.RationalNumber(6, 12);
    // act
    var rn2 = rn.simplifiedForm();
    // assert
    QUnit.assert.equal(rn2.numerator, 1, "numerator not set correctly");
    QUnit.assert.equal(rn2.denominator, 2, "denominator not set correctly");
});
QUnit.test("reciprocal", function () {
    // arange
    var rn = new RationalNumber_1.RationalNumber(6, 12);
    // act
    var rn2 = rn.reciprocal();
    // assert
    QUnit.assert.equal(rn2.numerator, 12, "numerator not set correctly");
    QUnit.assert.equal(rn2.denominator, 6, "denominator not set correctly");
});
QUnit.test("opposite", function () {
    // arange
    var rn = new RationalNumber_1.RationalNumber(6, 12);
    // act
    var rn2 = rn.opposite();
    // assert
    QUnit.assert.equal(rn2.numerator, -6, "numerator not set correctly");
    QUnit.assert.equal(rn2.denominator, 12, "denominator not set correctly");
});
QUnit.test("equal", function () {
    // arange
    var rn = new RationalNumber_1.RationalNumber(6, 12);
    // act
    var rn2 = new RationalNumber_1.RationalNumber(1, 2);
    // assert
    QUnit.assert.ok(rn.equals(rn2), "equality failed");
});
QUnit.test("equal negative", function () {
    // arange
    var rn = new RationalNumber_1.RationalNumber(1, 3);
    // act
    var rn2 = new RationalNumber_1.RationalNumber(1, 2);
    // assert
    QUnit.assert.ok(!rn.equals(rn2), "equality failed");
});
QUnit.test("add number ++", function () {
    // arange
    var rn = new RationalNumber_1.RationalNumber(2, 3);
    // act
    var rn2 = rn.add(2);
    // assert
    QUnit.assert.equal(rn2.numerator, 8, "numerator not set correctly");
    QUnit.assert.equal(rn2.denominator, 3, "denominator not set correctly");
});
QUnit.test("add number +-", function () {
    // arange
    var rn = new RationalNumber_1.RationalNumber(2, 3);
    // act
    var rn2 = rn.add(-2);
    // assert
    QUnit.assert.equal(rn2.numerator, -4, "numerator not set correctly");
    QUnit.assert.equal(rn2.denominator, 3, "denominator not set correctly");
});
QUnit.test("add RationalNumber ++", function () {
    // arange
    var rn = new RationalNumber_1.RationalNumber(2, 3);
    // act
    var rn2 = rn.add(new RationalNumber_1.RationalNumber(3, 2));
    // assert
    QUnit.assert.equal(rn2.numerator, 13, "numerator not set correctly");
    QUnit.assert.equal(rn2.denominator, 6, "denominator not set correctly");
});
QUnit.test("add RationalNumber +-", function () {
    // arange
    var rn = new RationalNumber_1.RationalNumber(2, 3);
    // act
    var rn2 = rn.add(new RationalNumber_1.RationalNumber(-3, 3));
    // assert
    QUnit.assert.equal(rn2.numerator, -1, "numerator not set correctly");
    QUnit.assert.equal(rn2.denominator, 3, "denominator not set correctly");
});
QUnit.test("add RationalNumber --", function () {
    // arange
    var rn = new RationalNumber_1.RationalNumber(-2, 3);
    // act
    var rn2 = rn.add(new RationalNumber_1.RationalNumber(-2, 3));
    // assert
    QUnit.assert.equal(rn2.numerator, -4, "numerator not set correctly");
    QUnit.assert.equal(rn2.denominator, 3, "denominator not set correctly");
});
QUnit.test("sub number ++", function () {
    // arange
    var rn = new RationalNumber_1.RationalNumber(2, 3);
    // act
    var rn2 = rn.sub(2);
    // assert
    QUnit.assert.equal(rn2.numerator, -4, "numerator not set correctly");
    QUnit.assert.equal(rn2.denominator, 3, "denominator not set correctly");
});
QUnit.test("sub RationalNumber ++", function () {
    // arange
    var rn = new RationalNumber_1.RationalNumber(2, 3);
    // act
    var rn2 = rn.sub(new RationalNumber_1.RationalNumber(3, 2));
    // assert
    QUnit.assert.equal(rn2.numerator, -5, "numerator not set correctly");
    QUnit.assert.equal(rn2.denominator, 6, "denominator not set correctly");
});
QUnit.test("mult number ++", function () {
    // arange
    var rn = new RationalNumber_1.RationalNumber(2, 3);
    // act
    var rn2 = rn.mult(2);
    // assert
    QUnit.assert.equal(rn2.numerator, 4, "numerator not set correctly");
    QUnit.assert.equal(rn2.denominator, 3, "denominator not set correctly");
});
QUnit.test("mult number +-", function () {
    // arange
    var rn = new RationalNumber_1.RationalNumber(2, 3);
    // act
    var rn2 = rn.mult(-2);
    // assert
    QUnit.assert.equal(rn2.numerator, -4, "numerator not set correctly");
    QUnit.assert.equal(rn2.denominator, 3, "denominator not set correctly");
});
QUnit.test("mult RationalNumber ++", function () {
    // arange
    var rn = new RationalNumber_1.RationalNumber(2, 3);
    // act
    var rn2 = rn.mult(new RationalNumber_1.RationalNumber(3, 2));
    // assert
    QUnit.assert.equal(rn2.numerator, 6, "numerator not set correctly");
    QUnit.assert.equal(rn2.denominator, 6, "denominator not set correctly");
});
QUnit.test("mult RationalNumber +-", function () {
    // arange
    var rn = new RationalNumber_1.RationalNumber(2, 3);
    // act
    var rn2 = rn.mult(new RationalNumber_1.RationalNumber(-3, 2));
    // assert
    QUnit.assert.equal(rn2.numerator, -6, "numerator not set correctly");
    QUnit.assert.equal(rn2.denominator, 6, "denominator not set correctly");
});
QUnit.test("mult RationalNumber --", function () {
    // arange
    var rn = new RationalNumber_1.RationalNumber(-2, 3);
    // act
    var rn2 = rn.mult(new RationalNumber_1.RationalNumber(-3, 2));
    // assert
    QUnit.assert.equal(rn2.numerator, 6, "numerator not set correctly");
    QUnit.assert.equal(rn2.denominator, 6, "denominator not set correctly");
});
QUnit.test("div number ++", function () {
    // arange
    var rn = new RationalNumber_1.RationalNumber(2, 3);
    // act
    var rn2 = rn.div(2);
    // assert
    QUnit.assert.equal(rn2.numerator, 2, "numerator not set correctly");
    QUnit.assert.equal(rn2.denominator, 6, "denominator not set correctly");
});
QUnit.test("div RationalNumber ++", function () {
    // arange
    var rn = new RationalNumber_1.RationalNumber(2, 3);
    // act
    var rn2 = rn.div(new RationalNumber_1.RationalNumber(3, 2));
    // assert
    QUnit.assert.equal(rn2.numerator, 4, "numerator not set correctly");
    QUnit.assert.equal(rn2.denominator, 9, "denominator not set correctly");
});
QUnit.test("exp number", function () {
    // arange
    var rn = new RationalNumber_1.RationalNumber(2, 3);
    // act
    var rn2 = rn.exp(2);
    // assert
    QUnit.assert.equal(rn2.numerator, 4, "numerator not set correctly");
    QUnit.assert.equal(rn2.denominator, 9, "denominator not set correctly");
});
QUnit.test("toString positive integer ++", function () {
    // arange
    var rn = new RationalNumber_1.RationalNumber(2, 1);
    // act
    var str = rn.toString();
    // assert
    QUnit.assert.equal(str, "2");
});
QUnit.test("toString positive integer --", function () {
    // arange
    var rn = new RationalNumber_1.RationalNumber(-2, -1);
    // act
    var str = rn.toString();
    // assert
    QUnit.assert.equal(str, "2");
});
QUnit.test("toString negative integer +-", function () {
    // arange
    var rn = new RationalNumber_1.RationalNumber(2, -1);
    // act
    var str = rn.toString();
    // assert
    QUnit.assert.equal(str, "-2");
});
QUnit.test("toString negative integer -+", function () {
    // arange
    var rn = new RationalNumber_1.RationalNumber(-2, 1);
    // act
    var str = rn.toString();
    // assert
    QUnit.assert.equal(str, "-2");
});
QUnit.test("toString positive rational ++", function () {
    // arange
    var rn = new RationalNumber_1.RationalNumber(2, 3);
    // act
    var str = rn.toString();
    // assert
    QUnit.assert.equal(str, "2/3");
});
QUnit.test("toString positive rational --", function () {
    // arange
    var rn = new RationalNumber_1.RationalNumber(-2, -3);
    // act
    var str = rn.toString();
    // assert
    QUnit.assert.equal(str, "2/3");
});
QUnit.test("toString negative rational +-", function () {
    // arange
    var rn = new RationalNumber_1.RationalNumber(2, -3);
    // act
    var str = rn.toString();
    // assert
    QUnit.assert.equal(str, "-2/3");
});
QUnit.test("toString negative rational -+", function () {
    // arange
    var rn = new RationalNumber_1.RationalNumber(-2, 3);
    // act
    var str = rn.toString();
    // assert
    QUnit.assert.equal(str, "-2/3");
});
QUnit.test("evaluateFromRPN", function () {
    // arange
    var rn = RationalNumber_1.RationalNumber.fromString("2/5+(2-1)/5");
    // act
    // assert
    QUnit.assert.equal(rn.numerator, 3, "numerator not set correctly");
    QUnit.assert.equal(rn.denominator, 5, "denominator not set correctly");
});
//# sourceMappingURL=rationalNumberTests.js.map