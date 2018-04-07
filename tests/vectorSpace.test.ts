// tslint:disable:no-unused-expression
// tslint:disable:eofline
// tslint:disable:max-line-length
import { expect } from "chai";
import { Matrix } from "../structures/Matrix";
import { RationalNumber } from "../structures/RationalNumber";
import { RowVector, Vector } from "../structures/Vector";
import { VectorSpace } from "../structures/VectorSpace";

describe("VectorSpace test suite", () => {
  it("Can be constructed from a number", () => {
      const vectorSpace: VectorSpace = new VectorSpace(3);
      vectorSpace.elements[0] = new Vector([1, 2, 3]);
      vectorSpace.elements[1] = new Vector([4, 5, 6]);
      expect(vectorSpace).to.not.be.null;
      expect(vectorSpace.m).equal(3);
      expect(vectorSpace.elements[0].elements[0].equals(1)).to.be.true;
      expect(vectorSpace.elements[0].elements[1].equals(2)).to.be.true;
      expect(vectorSpace.elements[0].elements[2].equals(3)).to.be.true;
      expect(vectorSpace.elements[1].elements[0].equals(4)).to.be.true;
      expect(vectorSpace.elements[1].elements[1].equals(5)).to.be.true;
      expect(vectorSpace.elements[1].elements[2].equals(6)).to.be.true;
  });
  it("Can be constructed from an array", () => {
      const vectorSpace: VectorSpace = new VectorSpace([new Vector([1, 2, 3]), new Vector([4, 5, 6])]);
      expect(vectorSpace).to.not.be.null;
      expect(vectorSpace.m).equal(2);
      expect(vectorSpace.elements[0].elements[0].equals(1)).to.be.true;
      expect(vectorSpace.elements[0].elements[1].equals(2)).to.be.true;
      expect(vectorSpace.elements[0].elements[2].equals(3)).to.be.true;
      expect(vectorSpace.elements[1].elements[0].equals(4)).to.be.true;
      expect(vectorSpace.elements[1].elements[1].equals(5)).to.be.true;
      expect(vectorSpace.elements[1].elements[2].equals(6)).to.be.true;
    });
  it("Can be cast to a ColumnsMatrix", () => {
      const vectorSpace: VectorSpace = new VectorSpace([new Vector([1, 2, 3]), new Vector([4, 5, 6])]);
      const M: Matrix = vectorSpace.toColumnsMatrix();
      expect(M).to.not.be.null;
      expect(M.m).equal(3);
      expect(M.n).equal(2);
      expect(M.elements[0][0].equals(1)).to.be.true;
      expect(M.elements[1][0].equals(2)).to.be.true;
      expect(M.elements[2][0].equals(3)).to.be.true;
      expect(M.elements[0][1].equals(4)).to.be.true;
      expect(M.elements[1][1].equals(5)).to.be.true;
      expect(M.elements[2][1].equals(6)).to.be.true;
    });
  it("Can be cast to a RowsMatrix", () => {
      const vectorSpace: VectorSpace = new VectorSpace([new Vector([1, 2, 3]), new Vector([4, 5, 6])]);
      const M: Matrix = vectorSpace.toRowsMatrix();
      expect(M).to.not.be.null;
      expect(M.m).equal(2);
      expect(M.n).equal(3);
      expect(M.elements[0][0].equals(1)).to.be.true;
      expect(M.elements[0][1].equals(2)).to.be.true;
      expect(M.elements[0][2].equals(3)).to.be.true;
      expect(M.elements[1][0].equals(4)).to.be.true;
      expect(M.elements[1][1].equals(5)).to.be.true;
      expect(M.elements[1][2].equals(6)).to.be.true;
    });
  it("Can find a basis", () => {
      const vectorSpace: VectorSpace = new VectorSpace([new Vector([1, 1, -2, 0, -1]),
        new Vector([1, 2, 0, -4, 1]), new Vector([0, 1, 3, -3, 2]), new Vector([2, 3, 0, -2, 0])]);
      const basis: VectorSpace = vectorSpace.findBasis();
      expect(basis).to.not.be.null;
      expect(basis.m).equal(3);
      expect(basis.elements[0].elements[0].equals(1)).to.be.true;
      expect(basis.elements[0].elements[1].equals(1)).to.be.true;
      expect(basis.elements[0].elements[2].equals(-2)).to.be.true;
      expect(basis.elements[0].elements[3].equals(0)).to.be.true;
      expect(basis.elements[0].elements[4].equals(-1)).to.be.true;
      expect(basis.elements[1].elements[0].equals(1)).to.be.true;
      expect(basis.elements[1].elements[1].equals(2)).to.be.true;
      expect(basis.elements[1].elements[2].equals(0)).to.be.true;
      expect(basis.elements[1].elements[3].equals(-4)).to.be.true;
      expect(basis.elements[1].elements[4].equals(1)).to.be.true;
      expect(basis.elements[2].elements[0].equals(0)).to.be.true;
      expect(basis.elements[2].elements[1].equals(1)).to.be.true;
      expect(basis.elements[2].elements[2].equals(3)).to.be.true;
      expect(basis.elements[2].elements[3].equals(-3)).to.be.true;
      expect(basis.elements[2].elements[4].equals(2)).to.be.true;
    });
});