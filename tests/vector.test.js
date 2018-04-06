"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var Matrix_1 = require("../structures/Matrix");
var RationalNumber_1 = require("../structures/RationalNumber");
var Vector_1 = require("../structures/Vector");
// tslint:disable:no-unused-expression
// tslint:disable:eofline
describe("Vector test suite", function () {
    it("Can be constructed from an array", function () {
        var vector = new Vector_1.Vector([1, 2, 3]);
        chai_1.expect(vector).to.not.be.null;
        chai_1.expect(vector.m).equal(3);
        chai_1.expect(vector.elements[0].equals(1)).to.be.true;
        chai_1.expect(vector.elements[1].equals(2)).to.be.true;
        chai_1.expect(vector.elements[2].equals(3)).to.be.true;
    });
    it("Can be constructed from a number", function () {
        var vector = new Vector_1.Vector(3);
        chai_1.expect(vector).to.not.be.null;
        chai_1.expect(vector.m).to.equals(3);
    });
    it("Can be added to a vector of same dimension", function () {
        var v1 = new Vector_1.Vector([1, 2, 3]);
        var v2 = new Vector_1.Vector([1, 2, 3]);
        var vector = v1.add(v2);
        chai_1.expect(vector).to.not.be.null;
        chai_1.expect(vector.m).to.equal(3);
        chai_1.expect(vector.elements[0].equals(2)).to.be.true;
        chai_1.expect(vector.elements[1].equals(4)).to.be.true;
        chai_1.expect(vector.elements[2].equals(6)).to.be.true;
    });
    it("Cannot be added to a vector of different dimension", function () {
        var v1 = new Vector_1.Vector([1, 2, 3]);
        var v2 = new Vector_1.Vector([1, 2]);
        chai_1.expect(function () { return v1.add(v2); }).to.throw(Error, /Mismatched dimensions./);
    });
    it("Can be substracted from a vector of same dimension", function () {
        var v1 = new Vector_1.Vector([1, 2, 3]);
        var v2 = new Vector_1.Vector([1, 2, 3]);
        var vector = v1.sub(v2);
        chai_1.expect(vector).to.not.be.null;
        chai_1.expect(vector.m).to.equal(3);
        chai_1.expect(vector.elements[0].equals(0)).to.be.true;
        chai_1.expect(vector.elements[1].equals(0)).to.be.true;
        chai_1.expect(vector.elements[2].equals(0)).to.be.true;
    });
    it("Cannot be substracted from a vector of different dimension", function () {
        var v1 = new Vector_1.Vector([1, 2, 3]);
        var v2 = new Vector_1.Vector([1, 2]);
        chai_1.expect(function () { return v1.sub(v2); }).to.throw(Error, /Mismatched dimensions./);
    });
    it("Can be multiplied with a scalar", function () {
        var v = new Vector_1.Vector([2, 4, 6]);
        var rn = new RationalNumber_1.RationalNumber(1, 2);
        var vector = v.mult(rn);
        chai_1.expect(vector).to.not.be.null;
        chai_1.expect(vector.m).to.equal(3);
        chai_1.expect(vector.elements[0].equals(1)).to.be.true;
        chai_1.expect(vector.elements[1].equals(2)).to.be.true;
        chai_1.expect(vector.elements[2].equals(3)).to.be.true;
    });
    it("Can be dotProduct with a vector of the same dimension", function () {
        var v1 = new Vector_1.Vector([1, 2, 3]);
        var v2 = new Vector_1.Vector([1, 2, 3]);
        var scalar = v1.dotProduct(v2);
        chai_1.expect(scalar).to.not.be.null;
        chai_1.expect(scalar.equals(14)).to.be.true;
    });
    it("Cannot be dotProduct with a vector of different dimension", function () {
        var v1 = new Vector_1.Vector([1, 2, 3]);
        var v2 = new Vector_1.Vector([1, 2]);
        chai_1.expect(function () { return v1.dotProduct(v2); }).to.throw(Error, /Mismatched dimensions./);
    });
    it("Can be matrixProduct with a matrix", function () {
        var T = new Matrix_1.Matrix(2, 2);
        T.elements = [[new RationalNumber_1.RationalNumber(-2), new RationalNumber_1.RationalNumber(0)], [new RationalNumber_1.RationalNumber(0), new RationalNumber_1.RationalNumber(-1)]];
        var v1 = new Vector_1.RowVector(2);
        v1.elements = [new RationalNumber_1.RationalNumber(1), new RationalNumber_1.RationalNumber(1)];
        var vector = v1.matrixProduct(T);
        chai_1.expect(vector).to.not.be.null;
        chai_1.expect(vector.m).to.equal(2);
        chai_1.expect(vector.elements[0].equals(-2)).to.be.true;
        chai_1.expect(vector.elements[1].equals(-1)).to.be.true;
    });
});
//# sourceMappingURL=vector.test.js.map