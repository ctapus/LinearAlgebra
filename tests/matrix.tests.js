"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable:no-unused-expression
// tslint:disable:eofline
// tslint:disable:max-line-length
var chai_1 = require("chai");
var Matrix_1 = require("../structures/Matrix");
var RationalNumber_1 = require("../structures/RationalNumber");
var Vector_1 = require("../structures/Vector");
describe("Matrix test suite", function () {
    it("identity", function () {
        var identity = new Matrix_1.MatrixIdentity(3);
        chai_1.expect(identity).to.not.be.null;
        chai_1.expect(identity.elements[0][0]).to.equal(1);
        chai_1.expect(identity.elements[0][1]).to.equal(0);
        chai_1.expect(identity.elements[0][2]).to.equal(0);
        chai_1.expect(identity.elements[1][0]).to.equal(0);
        chai_1.expect(identity.elements[1][1]).to.equal(1);
        chai_1.expect(identity.elements[1][2]).to.equal(0);
        chai_1.expect(identity.elements[2][0]).to.equal(0);
        chai_1.expect(identity.elements[2][1]).to.equal(0);
        chai_1.expect(identity.elements[2][2]).to.equal(1);
    });
    it("permutation", function () {
        var identity = new Matrix_1.MatrixPermutation(3, 1, 2);
        chai_1.expect(identity).to.not.be.null;
        chai_1.expect(identity.elements[0][0]).to.equal(1);
        chai_1.expect(identity.elements[0][1]).to.equal(0);
        chai_1.expect(identity.elements[0][2]).to.equal(0);
        chai_1.expect(identity.elements[1][0]).to.equal(0);
        chai_1.expect(identity.elements[1][1]).to.equal(0);
        chai_1.expect(identity.elements[1][2]).to.equal(1);
        chai_1.expect(identity.elements[2][0]).to.equal(0);
        chai_1.expect(identity.elements[2][1]).to.equal(1);
        chai_1.expect(identity.elements[2][2]).to.equal(0);
    });
    it("equals Positiv", function () {
        var M1 = new Matrix_1.Matrix(3, 3);
        M1.elements = [[new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(0), new RationalNumber_1.RationalNumber(0)],
            [new RationalNumber_1.RationalNumber(0), new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(0)],
            [new RationalNumber_1.RationalNumber(0), new RationalNumber_1.RationalNumber(0), new RationalNumber_1.RationalNumber(1)]];
        var M2 = new Matrix_1.Matrix(3, 3);
        M2.elements = [[new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(0), new RationalNumber_1.RationalNumber(0)],
            [new RationalNumber_1.RationalNumber(0), new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(0)],
            [new RationalNumber_1.RationalNumber(0), new RationalNumber_1.RationalNumber(0), new RationalNumber_1.RationalNumber(1)]];
        chai_1.expect(M1.equals(M2)).to.be.true;
    });
    it("equals Negativ 1", function () {
        var M1 = new Matrix_1.Matrix(3, 3);
        M1.elements = [[new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(0), new RationalNumber_1.RationalNumber(0)],
            [new RationalNumber_1.RationalNumber(0), new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(0)],
            [new RationalNumber_1.RationalNumber(0), new RationalNumber_1.RationalNumber(0), new RationalNumber_1.RationalNumber(1)]];
        var M2 = new Matrix_1.Matrix(1, 1);
        chai_1.expect(M1.equals(M2)).to.be.false;
    });
    it("equals Negativ 2", function () {
        var M1 = new Matrix_1.Matrix(3, 3);
        M1.elements = [[new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(0), new RationalNumber_1.RationalNumber(0)],
            [new RationalNumber_1.RationalNumber(0), new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(0)],
            [new RationalNumber_1.RationalNumber(0), new RationalNumber_1.RationalNumber(0), new RationalNumber_1.RationalNumber(1)]];
        var M2 = new Matrix_1.Matrix(3, 3);
        M2.elements = [[new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(1)],
            [new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(1)],
            [new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(1)]];
        chai_1.expect(M1.equals(M2)).to.be.false;
    });
    it("isIdentity Positiv", function () {
        var m = new Matrix_1.Matrix(3, 3);
        m.elements = [[new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(0), new RationalNumber_1.RationalNumber(0)],
            [new RationalNumber_1.RationalNumber(0), new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(0)],
            [new RationalNumber_1.RationalNumber(0), new RationalNumber_1.RationalNumber(0), new RationalNumber_1.RationalNumber(1)]];
        chai_1.expect(m.isIdentity()).to.be.true;
    });
    it("isIdentity Negativ", function () {
        var m = new Matrix_1.Matrix(3, 3);
        m.elements = [[new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(1)],
            [new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(1)],
            [new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(1)]];
        chai_1.expect(m.isIdentity()).to.be.false;
    });
    it("isDiagonal Positiv", function () {
        var m = new Matrix_1.Matrix(3, 3);
        m.elements = [[new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(0), new RationalNumber_1.RationalNumber(0)],
            [new RationalNumber_1.RationalNumber(0), new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(0)],
            [new RationalNumber_1.RationalNumber(0), new RationalNumber_1.RationalNumber(0), new RationalNumber_1.RationalNumber(1)]];
        chai_1.expect(m).to.not.be.null;
        chai_1.expect(m.isDiagonal()).to.be.true;
    });
    it("isDiagonal Negativ", function () {
        var m = new Matrix_1.Matrix(3, 3);
        m.elements = [[new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(1)],
            [new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(1)],
            [new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(1)]];
        chai_1.expect(m).to.not.be.null;
        chai_1.expect(m.isDiagonal()).to.be.false;
    });
    it("isUpperTriangular Positiv", function () {
        var m = new Matrix_1.Matrix(3, 3);
        m.elements = [[new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(1)],
            [new RationalNumber_1.RationalNumber(0), new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(1)],
            [new RationalNumber_1.RationalNumber(0), new RationalNumber_1.RationalNumber(0), new RationalNumber_1.RationalNumber(1)]];
        chai_1.expect(m).to.not.be.null;
        chai_1.expect(m.isUpperTriangular()).to.be.true;
    });
    it("isUpperTriangular Negativ", function () {
        var m = new Matrix_1.Matrix(3, 3);
        m.elements = [[new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(1)],
            [new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(1)],
            [new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(1)]];
        chai_1.expect(m).to.not.be.null;
        chai_1.expect(m.isUpperTriangular()).to.be.false;
    });
    it("isLowerTriangular Positiv", function () {
        var m = new Matrix_1.Matrix(3, 3);
        m.elements = [[new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(0), new RationalNumber_1.RationalNumber(0)],
            [new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(0)],
            [new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(1)]];
        chai_1.expect(m).to.not.be.null;
        chai_1.expect(m.isLowerTriangular()).to.be.true;
    });
    it("isLowerTriangular Negativ", function () {
        var m = new Matrix_1.Matrix(3, 3);
        m.elements = [[new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(1)],
            [new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(1)],
            [new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(1)]];
        chai_1.expect(m).to.not.be.null;
        chai_1.expect(m.isLowerTriangular()).to.be.false;
    });
    it("isSymmetric Positiv", function () {
        var m = new Matrix_1.Matrix(3, 3);
        m.elements = [[new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(2), new RationalNumber_1.RationalNumber(3)],
            [new RationalNumber_1.RationalNumber(2), new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(4)],
            [new RationalNumber_1.RationalNumber(3), new RationalNumber_1.RationalNumber(4), new RationalNumber_1.RationalNumber(1)]];
        chai_1.expect(m).to.not.be.null;
        chai_1.expect(m.isSymmetric()).to.be.true;
    });
    it("isSymmetric Negativ", function () {
        var m = new Matrix_1.Matrix(3, 3);
        m.elements = [[new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(1)],
            [new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(2), new RationalNumber_1.RationalNumber(3)],
            [new RationalNumber_1.RationalNumber(4), new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(1)]];
        chai_1.expect(m).to.not.be.null;
        chai_1.expect(m.isSymmetric()).to.be.false;
    });
    it("augment matrix-vector", function () {
        var m = new Matrix_1.Matrix(3, 2);
        m.elements = [[new RationalNumber_1.RationalNumber(0), new RationalNumber_1.RationalNumber(1)],
            [new RationalNumber_1.RationalNumber(10), new RationalNumber_1.RationalNumber(11)],
            [new RationalNumber_1.RationalNumber(20), new RationalNumber_1.RationalNumber(21)]];
        var v = new Vector_1.Vector(3);
        v.elements = [new RationalNumber_1.RationalNumber(2), new RationalNumber_1.RationalNumber(12), new RationalNumber_1.RationalNumber(22)];
        var am = Matrix_1.Matrix.augment(m, v);
        chai_1.expect(am).to.not.be.null;
        chai_1.expect(am.m).to.equal(3);
        chai_1.expect(am.n).to.equal(3);
        chai_1.expect(am.elements[0][0]).to.equal(0);
        chai_1.expect(am.elements[0][1]).to.equal(1);
        chai_1.expect(am.elements[0][2]).to.equal(2);
        chai_1.expect(am.elements[1][0]).to.equal(10);
        chai_1.expect(am.elements[1][1]).to.equal(11);
        chai_1.expect(am.elements[1][2]).to.equal(12);
        chai_1.expect(am.elements[2][0]).to.equal(20);
        chai_1.expect(am.elements[2][1]).to.equal(21);
        chai_1.expect(am.elements[2][2]).to.equal(22);
    });
    it("augment matrix-matrix", function () {
        var m = new Matrix_1.Matrix(3, 2);
        m.elements = [[new RationalNumber_1.RationalNumber(0), new RationalNumber_1.RationalNumber(1)],
            [new RationalNumber_1.RationalNumber(10), new RationalNumber_1.RationalNumber(11)],
            [new RationalNumber_1.RationalNumber(20), new RationalNumber_1.RationalNumber(21)]];
        var m2 = new Matrix_1.Matrix(3, 2);
        m2.elements = [[new RationalNumber_1.RationalNumber(2), new RationalNumber_1.RationalNumber(3)],
            [new RationalNumber_1.RationalNumber(12), new RationalNumber_1.RationalNumber(13)],
            [new RationalNumber_1.RationalNumber(22), new RationalNumber_1.RationalNumber(23)]];
        var am = Matrix_1.Matrix.augment(m, m2);
        chai_1.expect(am).to.not.be.null;
        chai_1.expect(am.m).to.equal(3);
        chai_1.expect(am.n).to.equal(4);
        chai_1.expect(am.elements[0][0]).to.equal(0);
        chai_1.expect(am.elements[0][1]).to.equal(1);
        chai_1.expect(am.elements[0][2]).to.equal(2);
        chai_1.expect(am.elements[0][3]).to.equal(3);
        chai_1.expect(am.elements[1][0]).to.equal(10);
        chai_1.expect(am.elements[1][1]).to.equal(11);
        chai_1.expect(am.elements[1][2]).to.equal(12);
        chai_1.expect(am.elements[1][3]).to.equal(13);
        chai_1.expect(am.elements[2][0]).to.equal(20);
        chai_1.expect(am.elements[2][1]).to.equal(21);
        chai_1.expect(am.elements[2][2]).to.equal(22);
        chai_1.expect(am.elements[2][3]).to.equal(23);
    });
    it("mult number", function () {
        var m = new Matrix_1.Matrix(3, 2);
        m.elements = [[new RationalNumber_1.RationalNumber(0), new RationalNumber_1.RationalNumber(1)],
            [new RationalNumber_1.RationalNumber(10), new RationalNumber_1.RationalNumber(11)],
            [new RationalNumber_1.RationalNumber(20), new RationalNumber_1.RationalNumber(21)]];
        var mult1 = 3;
        var res = m.mult(mult1);
        chai_1.expect(res).to.not.be.null;
        chai_1.expect(res.m).to.equal(3);
        chai_1.expect(res.n).to.equal(2);
        chai_1.expect(res.elements[0][0]).to.equal(0);
        chai_1.expect(res.elements[0][1]).to.equal(3);
        chai_1.expect(res.elements[1][0]).to.equal(30);
        chai_1.expect(res.elements[1][1]).to.equal(33);
        chai_1.expect(res.elements[2][0]).to.equal(60);
        chai_1.expect(res.elements[2][1]).to.equal(63);
    });
    it("mult rational", function () {
        var m = new Matrix_1.Matrix(3, 2);
        m.elements = [[new RationalNumber_1.RationalNumber(0), new RationalNumber_1.RationalNumber(1)],
            [new RationalNumber_1.RationalNumber(10), new RationalNumber_1.RationalNumber(11)],
            [new RationalNumber_1.RationalNumber(20), new RationalNumber_1.RationalNumber(21)]];
        var mult1 = new RationalNumber_1.RationalNumber(3);
        var res = m.mult(mult1);
        chai_1.expect(res).to.not.be.null;
        chai_1.expect(res.m).to.equal(3);
        chai_1.expect(res.n).to.equal(2);
        chai_1.expect(res.elements[0][0]).to.equal(0);
        chai_1.expect(res.elements[0][1]).to.equal(3);
        chai_1.expect(res.elements[1][0]).to.equal(30);
        chai_1.expect(res.elements[1][1]).to.equal(33);
        chai_1.expect(res.elements[2][0]).to.equal(60);
        chai_1.expect(res.elements[2][1]).to.equal(63);
    });
    it("mult matrix", function () {
        var m = new Matrix_1.Matrix(3, 2);
        m.elements = [[new RationalNumber_1.RationalNumber(0), new RationalNumber_1.RationalNumber(1)],
            [new RationalNumber_1.RationalNumber(10), new RationalNumber_1.RationalNumber(11)],
            [new RationalNumber_1.RationalNumber(20), new RationalNumber_1.RationalNumber(21)]];
        var m2 = new Matrix_1.Matrix(2, 3);
        m2.elements = [[new RationalNumber_1.RationalNumber(2), new RationalNumber_1.RationalNumber(3), new RationalNumber_1.RationalNumber(4)],
            [new RationalNumber_1.RationalNumber(12), new RationalNumber_1.RationalNumber(13), new RationalNumber_1.RationalNumber(14)]];
        m2.elements[0][0] = new RationalNumber_1.RationalNumber(2);
        m2.elements[0][1] = new RationalNumber_1.RationalNumber(3);
        m2.elements[0][2] = new RationalNumber_1.RationalNumber(4);
        m2.elements[1][0] = new RationalNumber_1.RationalNumber(12);
        m2.elements[1][1] = new RationalNumber_1.RationalNumber(13);
        m2.elements[1][2] = new RationalNumber_1.RationalNumber(14);
        var am = m.mult(m2);
        chai_1.expect(am).to.not.be.null;
        chai_1.expect(am.m).to.equal(3);
        chai_1.expect(am.n).to.equal(3);
        chai_1.expect(am.elements[0][0]).to.equal(12);
        chai_1.expect(am.elements[0][1]).to.equal(13);
        chai_1.expect(am.elements[0][2]).to.equal(14);
        chai_1.expect(am.elements[1][0]).to.equal(152);
        chai_1.expect(am.elements[1][1]).to.equal(173);
        chai_1.expect(am.elements[1][2]).to.equal(194);
        chai_1.expect(am.elements[2][0]).to.equal(292);
        chai_1.expect(am.elements[2][1]).to.equal(333);
        chai_1.expect(am.elements[2][2]).to.equal(374);
    });
    it("isRowEchelonForm Positiv 1", function () {
        var m = new Matrix_1.Matrix(3, 3);
        m.elements = [[new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(1)],
            [new RationalNumber_1.RationalNumber(0), new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(1)],
            [new RationalNumber_1.RationalNumber(0), new RationalNumber_1.RationalNumber(0), new RationalNumber_1.RationalNumber(1)]];
        chai_1.expect(m).to.not.be.null;
        chai_1.expect(m.isRowEchelonForm()).to.be.true;
    });
    it("isRowEchelonForm Positiv 2", function () {
        var m = new Matrix_1.Matrix(4, 3);
        m.elements = [[new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(1)],
            [new RationalNumber_1.RationalNumber(0), new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(1)],
            [new RationalNumber_1.RationalNumber(0), new RationalNumber_1.RationalNumber(0), new RationalNumber_1.RationalNumber(1)],
            [new RationalNumber_1.RationalNumber(0), new RationalNumber_1.RationalNumber(0), new RationalNumber_1.RationalNumber(0)]];
        chai_1.expect(m).to.not.be.null;
        chai_1.expect(m.isRowEchelonForm()).to.be.true;
    });
    it("isRowEchelonForm Negativ zero row", function () {
        var m = new Matrix_1.Matrix(3, 3);
        m.elements = [[new RationalNumber_1.RationalNumber(0), new RationalNumber_1.RationalNumber(0), new RationalNumber_1.RationalNumber(0)],
            [new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(1)],
            [new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(1)]];
        chai_1.expect(m).to.not.be.null;
        chai_1.expect(m.isRowEchelonForm()).to.be.false;
    });
    it("isRowEchelonForm Negativ pivot not one", function () {
        var m = new Matrix_1.Matrix(3, 3);
        m.elements = [[new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(0), new RationalNumber_1.RationalNumber(0)],
            [new RationalNumber_1.RationalNumber(0), new RationalNumber_1.RationalNumber(3), new RationalNumber_1.RationalNumber(1)],
            [new RationalNumber_1.RationalNumber(0), new RationalNumber_1.RationalNumber(0), new RationalNumber_1.RationalNumber(1)]];
        chai_1.expect(m).to.not.be.null;
        chai_1.expect(m.isRowEchelonForm()).to.be.false;
    });
    it("isRowEchelonForm Negativ leading coefficient", function () {
        var m = new Matrix_1.Matrix(3, 3);
        m.elements = [[new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(0), new RationalNumber_1.RationalNumber(0)],
            [new RationalNumber_1.RationalNumber(0), new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(0)],
            [new RationalNumber_1.RationalNumber(0), new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(0)]];
        chai_1.expect(m).to.not.be.null;
        chai_1.expect(m.isRowEchelonForm()).to.be.false;
    });
    it("isReducedRowEchelonForm Positiv", function () {
        var m = new Matrix_1.Matrix(3, 4);
        m.elements = [[new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(0), new RationalNumber_1.RationalNumber(0), new RationalNumber_1.RationalNumber(1)],
            [new RationalNumber_1.RationalNumber(0), new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(0), new RationalNumber_1.RationalNumber(1)],
            [new RationalNumber_1.RationalNumber(0), new RationalNumber_1.RationalNumber(0), new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(1)]];
        chai_1.expect(m).to.not.be.null;
        chai_1.expect(m.isReducedRowEchelonForm()).to.be.true;
    });
    it("isReducedRowEchelonForm Negativ 1", function () {
        var m = new Matrix_1.Matrix(3, 3);
        m.elements = [[new RationalNumber_1.RationalNumber(0), new RationalNumber_1.RationalNumber(0), new RationalNumber_1.RationalNumber(0)],
            [new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(1)],
            [new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(1)]];
        chai_1.expect(m).to.not.be.null;
        chai_1.expect(m.isReducedRowEchelonForm()).to.be.false;
    });
    it("isReducedRowEchelonForm Negativ 2", function () {
        var m = new Matrix_1.Matrix(3, 3);
        m.elements = [[new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(0), new RationalNumber_1.RationalNumber(0)],
            [new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(1)],
            [new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(1)]];
        chai_1.expect(m).to.not.be.null;
        chai_1.expect(m.isReducedRowEchelonForm()).to.be.false;
    });
    it("vectorProduct", function () {
        var T = new Matrix_1.Matrix(2, 2);
        T.elements = [[new RationalNumber_1.RationalNumber(-2), new RationalNumber_1.RationalNumber(0)], [new RationalNumber_1.RationalNumber(0), new RationalNumber_1.RationalNumber(-1)]];
        var vector = new Vector_1.ColumnVector(2);
        vector.elements = [new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(1)];
        var transformedVector = T.vectorProduct(vector);
        chai_1.expect(transformedVector).to.not.be.null;
        chai_1.expect(transformedVector.elements[0].equals(-2)).to.be.true;
        chai_1.expect(transformedVector.elements[1].equals(-1)).to.be.true;
    });
    it("toReducedRowEchelonForm positiv 1", function () {
        var m = new Matrix_1.Matrix(3, 4);
        m.elements = [[new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(2), new RationalNumber_1.RationalNumber(-1), new RationalNumber_1.RationalNumber(-4)],
            [new RationalNumber_1.RationalNumber(2), new RationalNumber_1.RationalNumber(3), new RationalNumber_1.RationalNumber(-1), new RationalNumber_1.RationalNumber(-11)],
            [new RationalNumber_1.RationalNumber(-2), new RationalNumber_1.RationalNumber(0), new RationalNumber_1.RationalNumber(-3), new RationalNumber_1.RationalNumber(22)]];
        var rref = m.toReducedRowEchelonForm();
        chai_1.expect(rref).to.not.be.null;
        chai_1.expect(rref.elements[0][0].equals(1)).to.be.true;
        chai_1.expect(rref.elements[0][1].equals(0)).to.be.true;
        chai_1.expect(rref.elements[0][2].equals(0)).to.be.true;
        chai_1.expect(rref.elements[0][3].equals(-8)).to.be.true;
        chai_1.expect(rref.elements[1][0].equals(0)).to.be.true;
        chai_1.expect(rref.elements[1][1].equals(1)).to.be.true;
        chai_1.expect(rref.elements[1][2].equals(0)).to.be.true;
        chai_1.expect(rref.elements[1][3].equals(1)).to.be.true;
        chai_1.expect(rref.elements[2][0].equals(0)).to.be.true;
        chai_1.expect(rref.elements[2][1].equals(0)).to.be.true;
        chai_1.expect(rref.elements[2][2].equals(1)).to.be.true;
        chai_1.expect(rref.elements[2][3].equals(-2)).to.be.true;
    });
    it("toReducedRowEchelonForm positiv 2", function () {
        var m = new Matrix_1.Matrix(4, 5);
        m.elements = [
            [new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(-2), new RationalNumber_1.RationalNumber(0), new RationalNumber_1.RationalNumber(-1)],
            [new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(2), new RationalNumber_1.RationalNumber(0), new RationalNumber_1.RationalNumber(-4), new RationalNumber_1.RationalNumber(1)],
            [new RationalNumber_1.RationalNumber(0), new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(3), new RationalNumber_1.RationalNumber(-3), new RationalNumber_1.RationalNumber(2)],
            [new RationalNumber_1.RationalNumber(2), new RationalNumber_1.RationalNumber(3), new RationalNumber_1.RationalNumber(0), new RationalNumber_1.RationalNumber(-2), new RationalNumber_1.RationalNumber(0)],
        ];
        var rref = m.toReducedRowEchelonForm();
        chai_1.expect(rref).to.not.be.null;
        chai_1.expect(rref.m).to.equal(4);
        chai_1.expect(rref.n).to.equal(5);
        chai_1.expect(rref.elements[0][0].equals(1)).to.be.true;
        chai_1.expect(rref.elements[0][1].equals(0)).to.be.true;
        chai_1.expect(rref.elements[0][2].equals(0)).to.be.true;
        chai_1.expect(rref.elements[0][3].equals(8)).to.be.true;
        chai_1.expect(rref.elements[0][4].equals(-3)).to.be.true;
        chai_1.expect(rref.elements[1][0].equals(0)).to.be.true;
        chai_1.expect(rref.elements[1][1].equals(1)).to.be.true;
        chai_1.expect(rref.elements[1][2].equals(0)).to.be.true;
        chai_1.expect(rref.elements[1][3].equals(-6)).to.be.true;
        chai_1.expect(rref.elements[1][4].equals(2)).to.be.true;
        chai_1.expect(rref.elements[2][0].equals(0)).to.be.true;
        chai_1.expect(rref.elements[2][1].equals(0)).to.be.true;
        chai_1.expect(rref.elements[2][2].equals(1)).to.be.true;
        chai_1.expect(rref.elements[2][3].equals(1)).to.be.true;
        chai_1.expect(rref.elements[2][4].equals(0)).to.be.true;
        chai_1.expect(rref.elements[3][0].equals(0)).to.be.true;
        chai_1.expect(rref.elements[3][1].equals(0)).to.be.true;
        chai_1.expect(rref.elements[3][2].equals(0)).to.be.true;
        chai_1.expect(rref.elements[3][3].equals(0)).to.be.true;
        chai_1.expect(rref.elements[3][4].equals(0)).to.be.true;
    });
    it("determinant positiv", function () {
        var m = new Matrix_1.Matrix(1, 1);
        m.elements = [[new RationalNumber_1.RationalNumber(2)]];
        var det = m.determinant();
        chai_1.expect(det.equals(2)).to.be.true;
    });
    it("determinant positiv 2", function () {
        var m = new Matrix_1.Matrix(2, 2);
        m.elements = [[new RationalNumber_1.RationalNumber(2), new RationalNumber_1.RationalNumber(3)],
            [new RationalNumber_1.RationalNumber(-3), new RationalNumber_1.RationalNumber(2)]];
        var det = m.determinant();
        chai_1.expect(det.equals(13)).to.be.true;
    });
    it("determinant positiv 3", function () {
        var m = new Matrix_1.Matrix(3, 3);
        m.elements = [[new RationalNumber_1.RationalNumber(2), new RationalNumber_1.RationalNumber(3), new RationalNumber_1.RationalNumber(-2)],
            [new RationalNumber_1.RationalNumber(-3), new RationalNumber_1.RationalNumber(2), new RationalNumber_1.RationalNumber(2)],
            [new RationalNumber_1.RationalNumber(0), new RationalNumber_1.RationalNumber(4), new RationalNumber_1.RationalNumber(1)]];
        var det = m.determinant();
        chai_1.expect(det.equals(21)).to.be.true;
    });
    it("determinant positiv 4", function () {
        var m = new Matrix_1.Matrix(4, 4);
        m.elements = [[new RationalNumber_1.RationalNumber(2), new RationalNumber_1.RationalNumber(3), new RationalNumber_1.RationalNumber(-2), new RationalNumber_1.RationalNumber(4)],
            [new RationalNumber_1.RationalNumber(-3), new RationalNumber_1.RationalNumber(2), new RationalNumber_1.RationalNumber(2), new RationalNumber_1.RationalNumber(1)],
            [new RationalNumber_1.RationalNumber(0), new RationalNumber_1.RationalNumber(4), new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(1)],
            [new RationalNumber_1.RationalNumber(2), new RationalNumber_1.RationalNumber(3), new RationalNumber_1.RationalNumber(0), new RationalNumber_1.RationalNumber(2)]];
        var det = m.determinant();
        chai_1.expect(det.equals(44)).to.be.true;
    });
});
//# sourceMappingURL=matrix.tests.js.map