// tslint:disable:no-unused-expression
// tslint:disable:eofline
// tslint:disable:max-line-length
import { expect } from "chai";
import { Matrix } from "../structures/Matrix";
import { RationalNumber } from "../structures/RationalNumber";
import { RowVector, Vector } from "../structures/Vector";

describe("Vector test suite", () => {
  it("Can be constructed from an array", () => {
    const vector: Vector = new Vector([1, 2, 3]);
    expect(vector).to.not.be.null;
    expect(vector.m).equal(3);
    expect(vector.elements[0].equals(1)).to.be.true;
    expect(vector.elements[1].equals(2)).to.be.true;
    expect(vector.elements[2].equals(3)).to.be.true;
  });
  it("Can be constructed from a number", () => {
    const vector: Vector = new Vector(3);
    expect(vector).to.not.be.null;
    expect(vector.m).to.equal(3);
  });
  it("Can be added to a vector of same dimension", () => {
    const v1: Vector = new Vector([1, 2, 3]);
    const v2: Vector = new Vector([1, 2, 3]);
    const vector: Vector = v1.add(v2);
    expect(vector).to.not.be.null;
    expect(vector.m).to.equal(3);
    expect(vector.elements[0].equals(2)).to.be.true;
    expect(vector.elements[1].equals(4)).to.be.true;
    expect(vector.elements[2].equals(6)).to.be.true;
  });
  it("Cannot be added to a vector of different dimension", () => {
    const v1: Vector = new Vector([1, 2, 3]);
    const v2: Vector = new Vector([1, 2]);
    expect(() => v1.add(v2)).to.throw(Error, /Mismatched dimensions./);
  });
  it("Can be substracted from a vector of same dimension", () => {
    const v1: Vector = new Vector([1, 2, 3]);
    const v2: Vector = new Vector([1, 2, 3]);
    const vector: Vector = v1.sub(v2);
    expect(vector).to.not.be.null;
    expect(vector.m).to.equal(3);
    expect(vector.elements[0].equals(0)).to.be.true;
    expect(vector.elements[1].equals(0)).to.be.true;
    expect(vector.elements[2].equals(0)).to.be.true;
  });
  it("Cannot be substracted from a vector of different dimension", () => {
    const v1: Vector = new Vector([1, 2, 3]);
    const v2: Vector = new Vector([1, 2]);
    expect(() => v1.sub(v2)).to.throw(Error, /Mismatched dimensions./);
  });
  it("Can be multiplied with a scalar", () => {
    const v: Vector = new Vector([2, 4, 6]);
    const rn: RationalNumber = new RationalNumber(1, 2);
    const vector: Vector = v.mult(rn);
    expect(vector).to.not.be.null;
    expect(vector.m).to.equal(3);
    expect(vector.elements[0].equals(1)).to.be.true;
    expect(vector.elements[1].equals(2)).to.be.true;
    expect(vector.elements[2].equals(3)).to.be.true;
  });
  it("Can be dotProduct with a vector of the same dimension", () => {
    const v1: Vector = new Vector([1, 2, 3]);
    const v2: Vector = new Vector([1, 2, 3]);
    const scalar: RationalNumber = v1.dotProduct(v2);
    expect(scalar).to.not.be.null;
    expect(scalar.equals(14)).to.be.true;
  });
  it("Cannot be dotProduct with a vector of different dimension", () => {
    const v1: Vector = new Vector([1, 2, 3]);
    const v2: Vector = new Vector([1, 2]);
    expect(() => v1.dotProduct(v2)).to.throw(Error, /Mismatched dimensions./);
  });
  it("Can be matrixProduct with a matrix", () => {
    const T: Matrix = new Matrix(2, 2);
    T.elements = [[new RationalNumber(-2), new RationalNumber(0)], [new RationalNumber(0), new RationalNumber(-1)]];
    const v1: RowVector = new RowVector(2);
    v1.elements = [new RationalNumber(1), new RationalNumber(1)];
    const vector: RowVector = v1.matrixProduct(T);
    expect(vector).to.not.be.null;
    expect(vector.m).to.equal(2);
    expect(vector.elements[0].equals(-2)).to.be.true;
    expect(vector.elements[1].equals(-1)).to.be.true;
  });
});