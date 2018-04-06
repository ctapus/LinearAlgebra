import { RationalNumber } from "../structures/RationalNumber";
import { Vector } from "../structures/Vector";
import { VectorSpace } from "../structures/VectorSpace";
import { Matrix } from "../structures/Matrix";

QUnit.module("VectorSpace");
QUnit.test("number constructor", () => {
	// arange
	const vectorSpace: VectorSpace = new VectorSpace(3);
	vectorSpace.elements[0] = new Vector([1, 2, 3]);
	vectorSpace.elements[1] = new Vector([4, 5, 6]);
	// act
	// assert
	QUnit.assert.ok(vectorSpace, "Vector space is null");
	QUnit.assert.equal(vectorSpace.m, 3);
	QUnit.assert.equal(vectorSpace.elements[0].elements[0], 1);
	QUnit.assert.equal(vectorSpace.elements[0].elements[1], 2);
	QUnit.assert.equal(vectorSpace.elements[0].elements[2], 3);
	QUnit.assert.equal(vectorSpace.elements[1].elements[0], 4);
	QUnit.assert.equal(vectorSpace.elements[1].elements[1], 5);
	QUnit.assert.equal(vectorSpace.elements[1].elements[2], 6);
});
QUnit.test("array constructor", () => {
	// arange
	const vectorSpace: VectorSpace = new VectorSpace([new Vector([1, 2, 3]), new Vector([4, 5, 6])]);
	// act
	// assert
	QUnit.assert.ok(vectorSpace, "Vector space is null");
	QUnit.assert.equal(vectorSpace.m, 2);
	QUnit.assert.equal(vectorSpace.elements[0].elements[0], 1);
	QUnit.assert.equal(vectorSpace.elements[0].elements[1], 2);
	QUnit.assert.equal(vectorSpace.elements[0].elements[2], 3);
	QUnit.assert.equal(vectorSpace.elements[1].elements[0], 4);
	QUnit.assert.equal(vectorSpace.elements[1].elements[1], 5);
	QUnit.assert.equal(vectorSpace.elements[1].elements[2], 6);
});
QUnit.test("toColumnsMatrix positive", () => {
	// arange
	const vectorSpace: VectorSpace = new VectorSpace([new Vector([1, 2, 3]), new Vector([4, 5, 6])]);
	const M: Matrix = vectorSpace.toColumnsMatrix();
	// act
	// assert
	QUnit.assert.ok(M, "Matrix is null");
	QUnit.assert.equal(M.m, 3, "wrong number of rows");
	QUnit.assert.equal(M.n, 2, "wrong number of columns");
	QUnit.assert.equal(M.elements[0][0], 1);
	QUnit.assert.equal(M.elements[1][0], 2);
	QUnit.assert.equal(M.elements[2][0], 3);
	QUnit.assert.equal(M.elements[0][1], 4);
	QUnit.assert.equal(M.elements[1][1], 5);
	QUnit.assert.equal(M.elements[2][1], 6);
});
QUnit.test("toRowsMatrix positive", () => {
	// arange
	const vectorSpace: VectorSpace = new VectorSpace([new Vector([1, 2, 3]), new Vector([4, 5, 6])]);
	const M: Matrix = vectorSpace.toRowsMatrix();
	// act
	// assert
	QUnit.assert.ok(M, "Matrix is null");
	QUnit.assert.equal(M.m, 2, "wrong number of rows");
	QUnit.assert.equal(M.n, 3, "wrong number of columns");
	QUnit.assert.equal(M.elements[0][0], 1);
	QUnit.assert.equal(M.elements[0][1], 2);
	QUnit.assert.equal(M.elements[0][2], 3);
	QUnit.assert.equal(M.elements[1][0], 4);
	QUnit.assert.equal(M.elements[1][1], 5);
	QUnit.assert.equal(M.elements[1][2], 6);
});
QUnit.test("findBasis positive", () => {
	// arange
	const vectorSpace: VectorSpace = new VectorSpace([new Vector([1, 1, -2, 0, -1]),
		new Vector([1, 2, 0, -4, 1]), new Vector([0, 1, 3, -3, 2]), new Vector([2, 3, 0, -2, 0])]);
	const basis: VectorSpace = vectorSpace.findBasis();
	// act
	// assert
	QUnit.assert.ok(basis, "Matrix is null");
	QUnit.assert.equal(basis.m, 3, "wrong number of vectors");
	QUnit.assert.equal(basis.elements[0].elements[0], 1);
	QUnit.assert.equal(basis.elements[0].elements[1], 1);
	QUnit.assert.equal(basis.elements[0].elements[2], -2);
	QUnit.assert.equal(basis.elements[0].elements[3], 0);
	QUnit.assert.equal(basis.elements[0].elements[4], -1);
	QUnit.assert.equal(basis.elements[1].elements[0], 1);
	QUnit.assert.equal(basis.elements[1].elements[1], 2);
	QUnit.assert.equal(basis.elements[1].elements[2], 0);
	QUnit.assert.equal(basis.elements[1].elements[3], -4);
	QUnit.assert.equal(basis.elements[1].elements[4], 1);
	QUnit.assert.equal(basis.elements[2].elements[0], 0);
	QUnit.assert.equal(basis.elements[2].elements[1], 1);
	QUnit.assert.equal(basis.elements[2].elements[2], 3);
	QUnit.assert.equal(basis.elements[2].elements[3], -3);
	QUnit.assert.equal(basis.elements[2].elements[4], 2);
});