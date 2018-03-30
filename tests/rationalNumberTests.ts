/// <reference path="../node_modules/@types/qunit/index.d.ts" />
/// <reference path="../structures/rationalNumber.ts" />
/// <chutzpah_reference path="../structures/rationalNumber.js" />

QUnit.module("RationalNumber");
QUnit.test("constructor two params", () => {

	// arange
	var rn: RationalNumber = new RationalNumber(3, 5);
	// act
	// assert
	QUnit.assert.notEqual(null, rn, "new failed");
	QUnit.assert.equal(rn.numerator, 3, "numerator not set correctly");
	QUnit.assert.equal(rn.denominator, 5, "denominator not set correctly");
});
QUnit.test("constructor one param", () => {
	// arange
	var rn: RationalNumber = new RationalNumber(3);
	// act
	// assert
	QUnit.assert.notEqual(null, rn, "new failed");
	QUnit.assert.equal(rn.numerator, 3, "numerator not set correctly");
	QUnit.assert.equal(rn.denominator, 1, "denominator not set correctly");
});
QUnit.test("simplified  form", () => {
	// arange
	var rn: RationalNumber = new RationalNumber(6, 12);
	// act
	var rn2: RationalNumber = rn.simplifiedForm();
	// assert
	QUnit.assert.equal(rn2.numerator, 1, "numerator not set correctly");
	QUnit.assert.equal(rn2.denominator, 2, "denominator not set correctly");
});
QUnit.test("reciprocal", () => {
	// arange
	var rn: RationalNumber = new RationalNumber(6, 12);
	// act
	var rn2: RationalNumber = rn.reciprocal();
	// assert
	QUnit.assert.equal(rn2.numerator, 12, "numerator not set correctly");
	QUnit.assert.equal(rn2.denominator, 6, "denominator not set correctly");
});
QUnit.test("opposite", () => {
	// arange
	var rn: RationalNumber = new RationalNumber(6, 12);
	// act
	var rn2: RationalNumber = rn.opposite();
	// assert
	QUnit.assert.equal(rn2.numerator, -6, "numerator not set correctly");
	QUnit.assert.equal(rn2.denominator, 12, "denominator not set correctly");
});
QUnit.test("equal", () => {
	// arange
	var rn: RationalNumber = new RationalNumber(6, 12);
	// act
	var rn2: RationalNumber = new RationalNumber(1, 2);
	// assert
	QUnit.assert.ok(rn.equals(rn2), "equality failed");
});
QUnit.test("equal negative", () => {
	// arange
	var rn: RationalNumber = new RationalNumber(1, 3);
	// act
	var rn2: RationalNumber = new RationalNumber(1, 2);
	// assert
	QUnit.assert.ok(!rn.equals(rn2), "equality failed");
});
QUnit.test("add number ++", () => {
	// arange
	var rn: RationalNumber = new RationalNumber(2, 3);
	// act
	var rn2: RationalNumber = rn.add(2);
	// assert
	QUnit.assert.equal(rn2.numerator, 8, "numerator not set correctly");
	QUnit.assert.equal(rn2.denominator, 3, "denominator not set correctly");
});
QUnit.test("add number +-", () => {
	// arange
	var rn: RationalNumber = new RationalNumber(2, 3);
	// act
	var rn2: RationalNumber = rn.add(-2);
	// assert
	QUnit.assert.equal(rn2.numerator, -4, "numerator not set correctly");
	QUnit.assert.equal(rn2.denominator, 3, "denominator not set correctly");
});
QUnit.test("add RationalNumber ++", () => {
	// arange
	var rn: RationalNumber = new RationalNumber(2, 3);
	// act
	var rn2: RationalNumber = rn.add(new RationalNumber(3, 2));
	// assert
	QUnit.assert.equal(rn2.numerator, 13, "numerator not set correctly");
	QUnit.assert.equal(rn2.denominator, 6, "denominator not set correctly");
});
QUnit.test("add RationalNumber +-", () => {
	// arange
	var rn: RationalNumber = new RationalNumber(2, 3);
	// act
	var rn2: RationalNumber = rn.add(new RationalNumber(-3, 3));
	// assert
	QUnit.assert.equal(rn2.numerator, -1, "numerator not set correctly");
	QUnit.assert.equal(rn2.denominator, 3, "denominator not set correctly");
});
QUnit.test("add RationalNumber --", () => {
	// arange
	var rn: RationalNumber = new RationalNumber(-2, 3);
	// act
	var rn2: RationalNumber = rn.add(new RationalNumber(-2, 3));
	// assert
	QUnit.assert.equal(rn2.numerator, -4, "numerator not set correctly");
	QUnit.assert.equal(rn2.denominator, 3, "denominator not set correctly");
});
QUnit.test("sub number ++", () => {
	// arange
	var rn: RationalNumber = new RationalNumber(2, 3);
	// act
	var rn2: RationalNumber = rn.sub(2);
	// assert
	QUnit.assert.equal(rn2.numerator, -4, "numerator not set correctly");
	QUnit.assert.equal(rn2.denominator, 3, "denominator not set correctly");
});
QUnit.test("sub RationalNumber ++", () => {
	// arange
	var rn: RationalNumber = new RationalNumber(2, 3);
	// act
	var rn2: RationalNumber = rn.sub(new RationalNumber(3, 2));
	// assert
	QUnit.assert.equal(rn2.numerator, -5, "numerator not set correctly");
	QUnit.assert.equal(rn2.denominator, 6, "denominator not set correctly");
});
QUnit.test("mult number ++", () => {
	// arange
	var rn: RationalNumber = new RationalNumber(2, 3);
	// act
	var rn2: RationalNumber = rn.mult(2);
	// assert
	QUnit.assert.equal(rn2.numerator, 4, "numerator not set correctly");
	QUnit.assert.equal(rn2.denominator, 3, "denominator not set correctly");
});
QUnit.test("mult number +-", () => {
	// arange
	var rn: RationalNumber = new RationalNumber(2, 3);
	// act
	var rn2: RationalNumber = rn.mult(-2);
	// assert
	QUnit.assert.equal(rn2.numerator, -4, "numerator not set correctly");
	QUnit.assert.equal(rn2.denominator, 3, "denominator not set correctly");
});
QUnit.test("mult RationalNumber ++", () => {
	// arange
	var rn: RationalNumber = new RationalNumber(2, 3);
	// act
	var rn2: RationalNumber = rn.mult(new RationalNumber(3, 2));
	// assert
	QUnit.assert.equal(rn2.numerator, 6, "numerator not set correctly");
	QUnit.assert.equal(rn2.denominator, 6, "denominator not set correctly");
});
QUnit.test("mult RationalNumber +-", () => {
	// arange
	var rn: RationalNumber = new RationalNumber(2, 3);
	// act
	var rn2: RationalNumber = rn.mult(new RationalNumber(-3, 2));
	// assert
	QUnit.assert.equal(rn2.numerator, -6, "numerator not set correctly");
	QUnit.assert.equal(rn2.denominator, 6, "denominator not set correctly");
});
QUnit.test("mult RationalNumber --", () => {
	// arange
	var rn: RationalNumber = new RationalNumber(-2, 3);
	// act
	var rn2: RationalNumber = rn.mult(new RationalNumber(-3, 2));
	// assert
	QUnit.assert.equal(rn2.numerator, 6, "numerator not set correctly");
	QUnit.assert.equal(rn2.denominator, 6, "denominator not set correctly");
});
QUnit.test("div number ++", () => {
	// arange
	var rn: RationalNumber = new RationalNumber(2, 3);
	// act
	var rn2: RationalNumber = rn.div(2);
	// assert
	QUnit.assert.equal(rn2.numerator, 2, "numerator not set correctly");
	QUnit.assert.equal(rn2.denominator, 6, "denominator not set correctly");
});
QUnit.test("div RationalNumber ++", () => {
	// arange
	var rn: RationalNumber = new RationalNumber(2, 3);
	// act
	var rn2: RationalNumber = rn.div(new RationalNumber(3, 2));
	// assert
	QUnit.assert.equal(rn2.numerator, 4, "numerator not set correctly");
	QUnit.assert.equal(rn2.denominator, 9, "denominator not set correctly");
});
QUnit.test("exp number", () => {
	// arange
	var rn: RationalNumber = new RationalNumber(2, 3);
	// act
	var rn2: RationalNumber = rn.exp(2);
	// assert
	QUnit.assert.equal(rn2.numerator, 4, "numerator not set correctly");
	QUnit.assert.equal(rn2.denominator, 9, "denominator not set correctly");
});
QUnit.test("toString positive integer ++", () => {
	// arange
	var rn: RationalNumber = new RationalNumber(2, 1);
	// act
	var str: string = rn.toString();
	// assert
	QUnit.assert.equal(str, "2");
});
QUnit.test("toString positive integer --", () => {
	// arange
	var rn: RationalNumber = new RationalNumber(-2, -1);
	// act
	var str: string = rn.toString();
	// assert
	QUnit.assert.equal(str, "2");
});
QUnit.test("toString negative integer +-", () => {
	// arange
	var rn: RationalNumber = new RationalNumber(2, -1);
	// act
	var str: string = rn.toString();
	// assert
	QUnit.assert.equal(str, "-2");
});
QUnit.test("toString negative integer -+", () => {
	// arange
	var rn: RationalNumber = new RationalNumber(-2, 1);
	// act
	var str: string = rn.toString();
	// assert
	QUnit.assert.equal(str, "-2");
});
QUnit.test("toString positive rational ++", () => {
	// arange
	var rn: RationalNumber = new RationalNumber(2, 3);
	// act
	var str: string = rn.toString();
	// assert
	QUnit.assert.equal(str, "2/3");
});
QUnit.test("toString positive rational --", () => {
	// arange
	var rn: RationalNumber = new RationalNumber(-2, -3);
	// act
	var str: string = rn.toString();
	// assert
	QUnit.assert.equal(str, "2/3");
});
QUnit.test("toString negative rational +-", () => {
	// arange
	var rn: RationalNumber = new RationalNumber(2, -3);
	// act
	var str: string = rn.toString();
	// assert
	QUnit.assert.equal(str, "-2/3");
});
QUnit.test("toString negative rational -+", () => {
	// arange
	var rn: RationalNumber = new RationalNumber(-2, 3);
	// act
	var str: string = rn.toString();
	// assert
	QUnit.assert.equal(str, "-2/3");
});
QUnit.test("evaluateFromRPN", () => {
	// arange
	var rn: RationalNumber = RationalNumber.fromString("2/5+(2-1)/5");
	// act
	// assert
	QUnit.assert.equal(rn.numerator, 3, "numerator not set correctly");
	QUnit.assert.equal(rn.denominator, 5, "denominator not set correctly");
});