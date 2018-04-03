import { RationalNumber } from "../structures/RationalNumber";
import { Vector, RowVector, ColumnVector } from "../structures/Vector";
import { Matrix } from "../structures/Matrix";

QUnit.module("Vector");
QUnit.test("constructor array", () => {
	// arange
	const vector: Vector = new Vector([1, 2, 3]);
	// act
	// assert
	QUnit.assert.ok(vector, "vector is null");
	QUnit.assert.equal(vector.elements.length, 3);
	QUnit.assert.ok(vector.elements[0].equals(1), "incorrect value " + vector.elements[0].toString());
	QUnit.assert.ok(vector.elements[1].equals(2), "incorrect value " + vector.elements[1].toString());
	QUnit.assert.ok(vector.elements[2].equals(3), "incorrect value " + vector.elements[2].toString());
});
QUnit.test("constructor number", () => {
	// arange
	const vector: Vector = new Vector(3);
	// act
	// assert
	QUnit.assert.ok(vector, "vector is null");
});
QUnit.test("add", () => {
	// arange
	const v1: Vector = new Vector([1, 2, 3]);
	const v2: Vector = new Vector([1, 2, 3]);
	// act
	const res: Vector = v1.add(v2);
	// asert
	QUnit.assert.ok(res, "vector is null");
	QUnit.assert.equal(res.elements.length, 3);
	QUnit.assert.ok(res.elements[0].equals(2), "incorrect value " + res.elements[0].toString());
	QUnit.assert.ok(res.elements[1].equals(4), "incorrect value " + res.elements[1].toString());
	QUnit.assert.ok(res.elements[2].equals(6), "incorrect value " + res.elements[2].toString());
});
QUnit.test("add negative", () => {
	// arange
	const v1: Vector = new Vector([1, 2, 3]);
	const v2: Vector = new Vector([1, 2]);
	// act
	QUnit.assert.throws(() => v1.add(v2), "function didn't report mismatched dimensions.");
	// assert
});
QUnit.test("sub", () => {
	// arange
	const v1: Vector = new Vector([1, 2, 3]);
	const v2: Vector = new Vector([1, 2, 3]);
	// act
	const res: Vector = v1.sub(v2);
	// assert
	QUnit.assert.ok(res, "vector is null");
	QUnit.assert.equal(res.elements.length, 3);
	QUnit.assert.ok(res.elements[0].equals(0), "incorrect value " + res.elements[0].toString());
	QUnit.assert.ok(res.elements[1].equals(0), "incorrect value " + res.elements[1].toString());
	QUnit.assert.ok(res.elements[2].equals(0), "incorrect value " + res.elements[2].toString());
});
QUnit.test("sub negative", () => {
	// arange
	const v1: Vector = new Vector([1, 2, 3]);
	const v2: Vector = new Vector([1, 2]);
	// act
	QUnit.assert.throws(() => v1.sub(v2), "function didn't report mismatched dimensions.");
	// assert
});
QUnit.test("mult", () => {
	// arange
	const v: Vector = new Vector([2, 4, 6]);
	const rn: RationalNumber = new RationalNumber(1, 2);
	// act
	const res: Vector = v.mult(rn);
	// assert
	QUnit.assert.ok(res, "result is null");
	QUnit.assert.equal(res.elements.length, 3);
	QUnit.assert.ok(res.elements[0].equals(1), "incorrect value " + res.elements[0].toString());
	QUnit.assert.ok(res.elements[1].equals(2), "incorrect value " + res.elements[1].toString());
	QUnit.assert.ok(res.elements[2].equals(3), "incorrect value " + res.elements[2].toString());
});
QUnit.test("dotProduct", () => {
	// arange
	const v1: Vector = new Vector([1, 2, 3]);
	const v2: Vector = new Vector([1, 2, 3]);
	// act
	const res: RationalNumber = v1.dotProduct(v2);
	// assert
	QUnit.assert.ok(res, "result is null");
	QUnit.assert.ok(res.equals(14), "incorrect value " + res.toString());
});
QUnit.test("dotProduct negative", () => {
	// arange
	const v1: Vector = new Vector([1, 2, 3]);
	const v2: Vector = new Vector([1, 2]);
	// act
	QUnit.assert.throws(() => v1.dotProduct(v2), "function didn't report mismatched dimensions.");
	// assert
});
QUnit.test("RowVector matrixProduct", () => {
	// arange
	const T: Matrix = new Matrix(2, 2);
	T.elements = [[new RationalNumber(-2), new RationalNumber(0)], [new RationalNumber(0), new RationalNumber(-1)]];
	const vector: RowVector = new RowVector(2);
	vector.elements = [new RationalNumber(1), new RationalNumber(1)];
	// act
	const transformedVector: RowVector = vector.matrixProduct(T);
	// assert
	QUnit.assert.ok(transformedVector, "matrixProduct returned null");
	QUnit.assert.ok(transformedVector.elements[0].equals(-2), "incorrect value");
	QUnit.assert.ok(transformedVector.elements[1].equals(-1), "incorrect value");
});