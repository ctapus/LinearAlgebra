import { expect } from "chai";
import { RationalNumber } from "../structures/RationalNumber";
import { Vector } from "../structures/Vector";

describe("Vector test suite", () => {
  it("Can be constructed from an array", () => {
    const vector: Vector = new Vector([1, 2, 3]);
    // tslint:disable-next-line:no-unused-expression
    expect(vector).to.not.be.null;
    expect(vector.m).equal(3, `Should return: 3, but returned: ${vector.m}`);
    // tslint:disable-next-line:no-unused-expression
    expect(vector.elements[0].equals(1)).to.be.true;
    // tslint:disable-next-line:no-unused-expression
    expect(vector.elements[1].equals(2)).to.be.true;
    // tslint:disable-next-line:no-unused-expression
    expect(vector.elements[2].equals(3)).to.be.true;
  });
  it("Can be constructed from a number", () => {
    const vector: Vector = new Vector(3);
    // tslint:disable-next-line:no-unused-expression
    expect(vector).to.not.be.null;
    expect(vector.m).to.equals(3, `Should return: 3, but returned: ${vector.m}`);
  });
  it("Can be added", () => {
    const v1: Vector = new Vector([1, 2, 3]);
    const v2: Vector = new Vector([1, 2, 3]);
    const vector: Vector = v1.add(v2);
    // tslint:disable-next-line:no-unused-expression
    expect(vector).to.not.be.null;
    expect(vector.m).to.equal(3, `Should return: 3, but returned: ${vector.m}`);
    // tslint:disable-next-line:no-unused-expression
    expect(vector.elements[0].equals(2)).to.be.true;
    // tslint:disable-next-line:no-unused-expression
    expect(vector.elements[1].equals(4)).to.be.true;
    // tslint:disable-next-line:no-unused-expression
    expect(vector.elements[2].equals(6)).to.be.true;
  });
// tslint:disable-next-line:eofline
});