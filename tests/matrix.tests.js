// tslint:disable:no-unused-expression
// tslint:disable:eofline
// tslint:disable:max-line-length
import { expect } from "chai";
import { Matrix, MatrixIdentity, MatrixPermutation } from "../structures/Matrix";
import { RationalNumber } from "../structures/RationalNumber";
import { ColumnVector, Vector } from "../structures/Vector";
describe("Matrix test suite", () => {
    it("identity", () => {
        const identity = new MatrixIdentity(3);
        expect(identity).to.not.be.null;
        expect(identity.elements[0][0]).to.equal(1);
        expect(identity.elements[0][1]).to.equal(0);
        expect(identity.elements[0][2]).to.equal(0);
        expect(identity.elements[1][0]).to.equal(0);
        expect(identity.elements[1][1]).to.equal(1);
        expect(identity.elements[1][2]).to.equal(0);
        expect(identity.elements[2][0]).to.equal(0);
        expect(identity.elements[2][1]).to.equal(0);
        expect(identity.elements[2][2]).to.equal(1);
    });
    it("permutation", () => {
        const identity = new MatrixPermutation(3, 1, 2);
        expect(identity).to.not.be.null;
        expect(identity.elements[0][0]).to.equal(1);
        expect(identity.elements[0][1]).to.equal(0);
        expect(identity.elements[0][2]).to.equal(0);
        expect(identity.elements[1][0]).to.equal(0);
        expect(identity.elements[1][1]).to.equal(0);
        expect(identity.elements[1][2]).to.equal(1);
        expect(identity.elements[2][0]).to.equal(0);
        expect(identity.elements[2][1]).to.equal(1);
        expect(identity.elements[2][2]).to.equal(0);
    });
    it("equals Positiv", () => {
        const M1 = new Matrix(3, 3);
        M1.elements = [[new RationalNumber(1), new RationalNumber(0), new RationalNumber(0)],
            [new RationalNumber(0), new RationalNumber(1), new RationalNumber(0)],
            [new RationalNumber(0), new RationalNumber(0), new RationalNumber(1)]];
        const M2 = new Matrix(3, 3);
        M2.elements = [[new RationalNumber(1), new RationalNumber(0), new RationalNumber(0)],
            [new RationalNumber(0), new RationalNumber(1), new RationalNumber(0)],
            [new RationalNumber(0), new RationalNumber(0), new RationalNumber(1)]];
        expect(M1.equals(M2)).to.be.true;
    });
    it("equals Negativ 1", () => {
        const M1 = new Matrix(3, 3);
        M1.elements = [[new RationalNumber(1), new RationalNumber(0), new RationalNumber(0)],
            [new RationalNumber(0), new RationalNumber(1), new RationalNumber(0)],
            [new RationalNumber(0), new RationalNumber(0), new RationalNumber(1)]];
        const M2 = new Matrix(1, 1);
        expect(M1.equals(M2)).to.be.false;
    });
    it("equals Negativ 2", () => {
        const M1 = new Matrix(3, 3);
        M1.elements = [[new RationalNumber(1), new RationalNumber(0), new RationalNumber(0)],
            [new RationalNumber(0), new RationalNumber(1), new RationalNumber(0)],
            [new RationalNumber(0), new RationalNumber(0), new RationalNumber(1)]];
        const M2 = new Matrix(3, 3);
        M2.elements = [[new RationalNumber(1), new RationalNumber(1), new RationalNumber(1)],
            [new RationalNumber(1), new RationalNumber(1), new RationalNumber(1)],
            [new RationalNumber(1), new RationalNumber(1), new RationalNumber(1)]];
        expect(M1.equals(M2)).to.be.false;
    });
    it("isIdentity Positiv", () => {
        const m = new Matrix(3, 3);
        m.elements = [[new RationalNumber(1), new RationalNumber(0), new RationalNumber(0)],
            [new RationalNumber(0), new RationalNumber(1), new RationalNumber(0)],
            [new RationalNumber(0), new RationalNumber(0), new RationalNumber(1)]];
        expect(m.isIdentity()).to.be.true;
    });
    it("isIdentity Negativ", () => {
        const m = new Matrix(3, 3);
        m.elements = [[new RationalNumber(1), new RationalNumber(1), new RationalNumber(1)],
            [new RationalNumber(1), new RationalNumber(1), new RationalNumber(1)],
            [new RationalNumber(1), new RationalNumber(1), new RationalNumber(1)]];
        expect(m.isIdentity()).to.be.false;
    });
    it("isDiagonal Positiv", () => {
        const m = new Matrix(3, 3);
        m.elements = [[new RationalNumber(1), new RationalNumber(0), new RationalNumber(0)],
            [new RationalNumber(0), new RationalNumber(1), new RationalNumber(0)],
            [new RationalNumber(0), new RationalNumber(0), new RationalNumber(1)]];
        expect(m).to.not.be.null;
        expect(m.isDiagonal()).to.be.true;
    });
    it("isDiagonal Negativ", () => {
        const m = new Matrix(3, 3);
        m.elements = [[new RationalNumber(1), new RationalNumber(1), new RationalNumber(1)],
            [new RationalNumber(1), new RationalNumber(1), new RationalNumber(1)],
            [new RationalNumber(1), new RationalNumber(1), new RationalNumber(1)]];
        expect(m).to.not.be.null;
        expect(m.isDiagonal()).to.be.false;
    });
    it("isUpperTriangular Positiv", () => {
        const m = new Matrix(3, 3);
        m.elements = [[new RationalNumber(1), new RationalNumber(1), new RationalNumber(1)],
            [new RationalNumber(0), new RationalNumber(1), new RationalNumber(1)],
            [new RationalNumber(0), new RationalNumber(0), new RationalNumber(1)]];
        expect(m).to.not.be.null;
        expect(m.isUpperTriangular()).to.be.true;
    });
    it("isUpperTriangular Negativ", () => {
        const m = new Matrix(3, 3);
        m.elements = [[new RationalNumber(1), new RationalNumber(1), new RationalNumber(1)],
            [new RationalNumber(1), new RationalNumber(1), new RationalNumber(1)],
            [new RationalNumber(1), new RationalNumber(1), new RationalNumber(1)]];
        expect(m).to.not.be.null;
        expect(m.isUpperTriangular()).to.be.false;
    });
    it("isLowerTriangular Positiv", () => {
        const m = new Matrix(3, 3);
        m.elements = [[new RationalNumber(1), new RationalNumber(0), new RationalNumber(0)],
            [new RationalNumber(1), new RationalNumber(1), new RationalNumber(0)],
            [new RationalNumber(1), new RationalNumber(1), new RationalNumber(1)]];
        expect(m).to.not.be.null;
        expect(m.isLowerTriangular()).to.be.true;
    });
    it("isLowerTriangular Negativ", () => {
        const m = new Matrix(3, 3);
        m.elements = [[new RationalNumber(1), new RationalNumber(1), new RationalNumber(1)],
            [new RationalNumber(1), new RationalNumber(1), new RationalNumber(1)],
            [new RationalNumber(1), new RationalNumber(1), new RationalNumber(1)]];
        expect(m).to.not.be.null;
        expect(m.isLowerTriangular()).to.be.false;
    });
    it("isSymmetric Positiv", () => {
        const m = new Matrix(3, 3);
        m.elements = [[new RationalNumber(1), new RationalNumber(2), new RationalNumber(3)],
            [new RationalNumber(2), new RationalNumber(1), new RationalNumber(4)],
            [new RationalNumber(3), new RationalNumber(4), new RationalNumber(1)]];
        expect(m).to.not.be.null;
        expect(m.isSymmetric()).to.be.true;
    });
    it("isSymmetric Negativ", () => {
        const m = new Matrix(3, 3);
        m.elements = [[new RationalNumber(1), new RationalNumber(1), new RationalNumber(1)],
            [new RationalNumber(1), new RationalNumber(2), new RationalNumber(3)],
            [new RationalNumber(4), new RationalNumber(1), new RationalNumber(1)]];
        expect(m).to.not.be.null;
        expect(m.isSymmetric()).to.be.false;
    });
    it("augment matrix-vector", () => {
        const m = new Matrix(3, 2);
        m.elements = [[new RationalNumber(0), new RationalNumber(1)],
            [new RationalNumber(10), new RationalNumber(11)],
            [new RationalNumber(20), new RationalNumber(21)]];
        const v = new Vector(3);
        v.elements = [new RationalNumber(2), new RationalNumber(12), new RationalNumber(22)];
        const am = Matrix.augment(m, v);
        expect(am).to.not.be.null;
        expect(am.m).to.equal(3);
        expect(am.n).to.equal(3);
        expect(am.elements[0][0]).to.equal(0);
        expect(am.elements[0][1]).to.equal(1);
        expect(am.elements[0][2]).to.equal(2);
        expect(am.elements[1][0]).to.equal(10);
        expect(am.elements[1][1]).to.equal(11);
        expect(am.elements[1][2]).to.equal(12);
        expect(am.elements[2][0]).to.equal(20);
        expect(am.elements[2][1]).to.equal(21);
        expect(am.elements[2][2]).to.equal(22);
    });
    it("augment matrix-matrix", () => {
        const m = new Matrix(3, 2);
        m.elements = [[new RationalNumber(0), new RationalNumber(1)],
            [new RationalNumber(10), new RationalNumber(11)],
            [new RationalNumber(20), new RationalNumber(21)]];
        const m2 = new Matrix(3, 2);
        m2.elements = [[new RationalNumber(2), new RationalNumber(3)],
            [new RationalNumber(12), new RationalNumber(13)],
            [new RationalNumber(22), new RationalNumber(23)]];
        const am = Matrix.augment(m, m2);
        expect(am).to.not.be.null;
        expect(am.m).to.equal(3);
        expect(am.n).to.equal(4);
        expect(am.elements[0][0]).to.equal(0);
        expect(am.elements[0][1]).to.equal(1);
        expect(am.elements[0][2]).to.equal(2);
        expect(am.elements[0][3]).to.equal(3);
        expect(am.elements[1][0]).to.equal(10);
        expect(am.elements[1][1]).to.equal(11);
        expect(am.elements[1][2]).to.equal(12);
        expect(am.elements[1][3]).to.equal(13);
        expect(am.elements[2][0]).to.equal(20);
        expect(am.elements[2][1]).to.equal(21);
        expect(am.elements[2][2]).to.equal(22);
        expect(am.elements[2][3]).to.equal(23);
    });
    it("mult number", () => {
        const m = new Matrix(3, 2);
        m.elements = [[new RationalNumber(0), new RationalNumber(1)],
            [new RationalNumber(10), new RationalNumber(11)],
            [new RationalNumber(20), new RationalNumber(21)]];
        const mult1 = 3;
        const res = m.mult(mult1);
        expect(res).to.not.be.null;
        expect(res.m).to.equal(3);
        expect(res.n).to.equal(2);
        expect(res.elements[0][0]).to.equal(0);
        expect(res.elements[0][1]).to.equal(3);
        expect(res.elements[1][0]).to.equal(30);
        expect(res.elements[1][1]).to.equal(33);
        expect(res.elements[2][0]).to.equal(60);
        expect(res.elements[2][1]).to.equal(63);
    });
    it("mult rational", () => {
        const m = new Matrix(3, 2);
        m.elements = [[new RationalNumber(0), new RationalNumber(1)],
            [new RationalNumber(10), new RationalNumber(11)],
            [new RationalNumber(20), new RationalNumber(21)]];
        const mult1 = new RationalNumber(3);
        const res = m.mult(mult1);
        expect(res).to.not.be.null;
        expect(res.m).to.equal(3);
        expect(res.n).to.equal(2);
        expect(res.elements[0][0]).to.equal(0);
        expect(res.elements[0][1]).to.equal(3);
        expect(res.elements[1][0]).to.equal(30);
        expect(res.elements[1][1]).to.equal(33);
        expect(res.elements[2][0]).to.equal(60);
        expect(res.elements[2][1]).to.equal(63);
    });
    it("mult matrix", () => {
        const m = new Matrix(3, 2);
        m.elements = [[new RationalNumber(0), new RationalNumber(1)],
            [new RationalNumber(10), new RationalNumber(11)],
            [new RationalNumber(20), new RationalNumber(21)]];
        const m2 = new Matrix(2, 3);
        m2.elements = [[new RationalNumber(2), new RationalNumber(3), new RationalNumber(4)],
            [new RationalNumber(12), new RationalNumber(13), new RationalNumber(14)]];
        m2.elements[0][0] = new RationalNumber(2);
        m2.elements[0][1] = new RationalNumber(3);
        m2.elements[0][2] = new RationalNumber(4);
        m2.elements[1][0] = new RationalNumber(12);
        m2.elements[1][1] = new RationalNumber(13);
        m2.elements[1][2] = new RationalNumber(14);
        const am = m.mult(m2);
        expect(am).to.not.be.null;
        expect(am.m).to.equal(3);
        expect(am.n).to.equal(3);
        expect(am.elements[0][0]).to.equal(12);
        expect(am.elements[0][1]).to.equal(13);
        expect(am.elements[0][2]).to.equal(14);
        expect(am.elements[1][0]).to.equal(152);
        expect(am.elements[1][1]).to.equal(173);
        expect(am.elements[1][2]).to.equal(194);
        expect(am.elements[2][0]).to.equal(292);
        expect(am.elements[2][1]).to.equal(333);
        expect(am.elements[2][2]).to.equal(374);
    });
    it("isRowEchelonForm Positiv 1", () => {
        const m = new Matrix(3, 3);
        m.elements = [[new RationalNumber(1), new RationalNumber(1), new RationalNumber(1)],
            [new RationalNumber(0), new RationalNumber(1), new RationalNumber(1)],
            [new RationalNumber(0), new RationalNumber(0), new RationalNumber(1)]];
        expect(m).to.not.be.null;
        expect(m.isRowEchelonForm()).to.be.true;
    });
    it("isRowEchelonForm Positiv 2", () => {
        const m = new Matrix(4, 3);
        m.elements = [[new RationalNumber(1), new RationalNumber(1), new RationalNumber(1)],
            [new RationalNumber(0), new RationalNumber(1), new RationalNumber(1)],
            [new RationalNumber(0), new RationalNumber(0), new RationalNumber(1)],
            [new RationalNumber(0), new RationalNumber(0), new RationalNumber(0)]];
        expect(m).to.not.be.null;
        expect(m.isRowEchelonForm()).to.be.true;
    });
    it("isRowEchelonForm Negativ zero row", () => {
        const m = new Matrix(3, 3);
        m.elements = [[new RationalNumber(0), new RationalNumber(0), new RationalNumber(0)],
            [new RationalNumber(1), new RationalNumber(1), new RationalNumber(1)],
            [new RationalNumber(1), new RationalNumber(1), new RationalNumber(1)]];
        expect(m).to.not.be.null;
        expect(m.isRowEchelonForm()).to.be.false;
    });
    it("isRowEchelonForm Negativ pivot not one", () => {
        const m = new Matrix(3, 3);
        m.elements = [[new RationalNumber(1), new RationalNumber(0), new RationalNumber(0)],
            [new RationalNumber(0), new RationalNumber(3), new RationalNumber(1)],
            [new RationalNumber(0), new RationalNumber(0), new RationalNumber(1)]];
        expect(m).to.not.be.null;
        expect(m.isRowEchelonForm()).to.be.false;
    });
    it("isRowEchelonForm Negativ leading coefficient", () => {
        const m = new Matrix(3, 3);
        m.elements = [[new RationalNumber(1), new RationalNumber(0), new RationalNumber(0)],
            [new RationalNumber(0), new RationalNumber(1), new RationalNumber(0)],
            [new RationalNumber(0), new RationalNumber(1), new RationalNumber(0)]];
        expect(m).to.not.be.null;
        expect(m.isRowEchelonForm()).to.be.false;
    });
    it("isReducedRowEchelonForm Positiv", () => {
        const m = new Matrix(3, 4);
        m.elements = [[new RationalNumber(1), new RationalNumber(0), new RationalNumber(0), new RationalNumber(1)],
            [new RationalNumber(0), new RationalNumber(1), new RationalNumber(0), new RationalNumber(1)],
            [new RationalNumber(0), new RationalNumber(0), new RationalNumber(1), new RationalNumber(1)]];
        expect(m).to.not.be.null;
        expect(m.isReducedRowEchelonForm()).to.be.true;
    });
    it("isReducedRowEchelonForm Negativ 1", () => {
        const m = new Matrix(3, 3);
        m.elements = [[new RationalNumber(0), new RationalNumber(0), new RationalNumber(0)],
            [new RationalNumber(1), new RationalNumber(1), new RationalNumber(1)],
            [new RationalNumber(1), new RationalNumber(1), new RationalNumber(1)]];
        expect(m).to.not.be.null;
        expect(m.isReducedRowEchelonForm()).to.be.false;
    });
    it("isReducedRowEchelonForm Negativ 2", () => {
        const m = new Matrix(3, 3);
        m.elements = [[new RationalNumber(1), new RationalNumber(0), new RationalNumber(0)],
            [new RationalNumber(1), new RationalNumber(1), new RationalNumber(1)],
            [new RationalNumber(1), new RationalNumber(1), new RationalNumber(1)]];
        expect(m).to.not.be.null;
        expect(m.isReducedRowEchelonForm()).to.be.false;
    });
    it("vectorProduct", () => {
        const T = new Matrix(2, 2);
        T.elements = [[new RationalNumber(-2), new RationalNumber(0)], [new RationalNumber(0), new RationalNumber(-1)]];
        const vector = new ColumnVector(2);
        vector.elements = [new RationalNumber(1), new RationalNumber(1)];
        const transformedVector = T.vectorProduct(vector);
        expect(transformedVector).to.not.be.null;
        expect(transformedVector.elements[0].equals(-2)).to.be.true;
        expect(transformedVector.elements[1].equals(-1)).to.be.true;
    });
    it("toReducedRowEchelonForm positiv 1", () => {
        const m = new Matrix(3, 4);
        m.elements = [[new RationalNumber(1), new RationalNumber(2), new RationalNumber(-1), new RationalNumber(-4)],
            [new RationalNumber(2), new RationalNumber(3), new RationalNumber(-1), new RationalNumber(-11)],
            [new RationalNumber(-2), new RationalNumber(0), new RationalNumber(-3), new RationalNumber(22)]];
        const rref = m.toReducedRowEchelonForm();
        expect(rref).to.not.be.null;
        expect(rref.elements[0][0].equals(1)).to.be.true;
        expect(rref.elements[0][1].equals(0)).to.be.true;
        expect(rref.elements[0][2].equals(0)).to.be.true;
        expect(rref.elements[0][3].equals(-8)).to.be.true;
        expect(rref.elements[1][0].equals(0)).to.be.true;
        expect(rref.elements[1][1].equals(1)).to.be.true;
        expect(rref.elements[1][2].equals(0)).to.be.true;
        expect(rref.elements[1][3].equals(1)).to.be.true;
        expect(rref.elements[2][0].equals(0)).to.be.true;
        expect(rref.elements[2][1].equals(0)).to.be.true;
        expect(rref.elements[2][2].equals(1)).to.be.true;
        expect(rref.elements[2][3].equals(-2)).to.be.true;
    });
    it("toReducedRowEchelonForm positiv 2", () => {
        const m = new Matrix(4, 5);
        m.elements = [
            [new RationalNumber(1), new RationalNumber(1), new RationalNumber(-2), new RationalNumber(0), new RationalNumber(-1)],
            [new RationalNumber(1), new RationalNumber(2), new RationalNumber(0), new RationalNumber(-4), new RationalNumber(1)],
            [new RationalNumber(0), new RationalNumber(1), new RationalNumber(3), new RationalNumber(-3), new RationalNumber(2)],
            [new RationalNumber(2), new RationalNumber(3), new RationalNumber(0), new RationalNumber(-2), new RationalNumber(0)],
        ];
        const rref = m.toReducedRowEchelonForm();
        expect(rref).to.not.be.null;
        expect(rref.m).to.equal(4);
        expect(rref.n).to.equal(5);
        expect(rref.elements[0][0].equals(1)).to.be.true;
        expect(rref.elements[0][1].equals(0)).to.be.true;
        expect(rref.elements[0][2].equals(0)).to.be.true;
        expect(rref.elements[0][3].equals(8)).to.be.true;
        expect(rref.elements[0][4].equals(-3)).to.be.true;
        expect(rref.elements[1][0].equals(0)).to.be.true;
        expect(rref.elements[1][1].equals(1)).to.be.true;
        expect(rref.elements[1][2].equals(0)).to.be.true;
        expect(rref.elements[1][3].equals(-6)).to.be.true;
        expect(rref.elements[1][4].equals(2)).to.be.true;
        expect(rref.elements[2][0].equals(0)).to.be.true;
        expect(rref.elements[2][1].equals(0)).to.be.true;
        expect(rref.elements[2][2].equals(1)).to.be.true;
        expect(rref.elements[2][3].equals(1)).to.be.true;
        expect(rref.elements[2][4].equals(0)).to.be.true;
        expect(rref.elements[3][0].equals(0)).to.be.true;
        expect(rref.elements[3][1].equals(0)).to.be.true;
        expect(rref.elements[3][2].equals(0)).to.be.true;
        expect(rref.elements[3][3].equals(0)).to.be.true;
        expect(rref.elements[3][4].equals(0)).to.be.true;
    });
    it("determinant positiv", () => {
        const m = new Matrix(1, 1);
        m.elements = [[new RationalNumber(2)]];
        const det = m.determinant();
        expect(det.equals(2)).to.be.true;
    });
    it("determinant positiv 2", () => {
        const m = new Matrix(2, 2);
        m.elements = [[new RationalNumber(2), new RationalNumber(3)],
            [new RationalNumber(-3), new RationalNumber(2)]];
        const det = m.determinant();
        expect(det.equals(13)).to.be.true;
    });
    it("determinant positiv 3", () => {
        const m = new Matrix(3, 3);
        m.elements = [[new RationalNumber(2), new RationalNumber(3), new RationalNumber(-2)],
            [new RationalNumber(-3), new RationalNumber(2), new RationalNumber(2)],
            [new RationalNumber(0), new RationalNumber(4), new RationalNumber(1)]];
        const det = m.determinant();
        expect(det.equals(21)).to.be.true;
    });
    it("determinant positiv 4", () => {
        const m = new Matrix(4, 4);
        m.elements = [[new RationalNumber(2), new RationalNumber(3), new RationalNumber(-2), new RationalNumber(4)],
            [new RationalNumber(-3), new RationalNumber(2), new RationalNumber(2), new RationalNumber(1)],
            [new RationalNumber(0), new RationalNumber(4), new RationalNumber(1), new RationalNumber(1)],
            [new RationalNumber(2), new RationalNumber(3), new RationalNumber(0), new RationalNumber(2)]];
        const det = m.determinant();
        expect(det.equals(44)).to.be.true;
    });
});
//# sourceMappingURL=matrix.tests.js.map