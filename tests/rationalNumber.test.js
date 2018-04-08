"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable:no-unused-expression
// tslint:disable:eofline
// tslint:disable:max-line-length
var chai_1 = require("chai");
var RationalNumber_1 = require("../structures/RationalNumber");
describe("RationalNumber test suite", function () {
    it("constructor two params", function () {
        var rn = new RationalNumber_1.RationalNumber(3, 5);
        chai_1.expect(rn).to.not.be.null;
        chai_1.expect(rn.numerator).to.equal(3);
        chai_1.expect(rn.denominator).to.equal(5);
    });
    it("constructor one param", function () {
        var rn = new RationalNumber_1.RationalNumber(3);
        chai_1.expect(rn).to.not.be.null;
        chai_1.expect(rn.numerator).to.equal(3);
        chai_1.expect(rn.denominator).to.equal(1);
    });
    it("simplified  form", function () {
        var rn = new RationalNumber_1.RationalNumber(6, 12);
        var rn2 = rn.simplifiedForm();
        chai_1.expect(rn2.numerator).to.equal(1);
        chai_1.expect(rn2.denominator).to.equal(2);
    });
    it("reciprocal", function () {
        var rn = new RationalNumber_1.RationalNumber(6, 12);
        var rn2 = rn.reciprocal();
        chai_1.expect(rn2.numerator).to.equal(12);
        chai_1.expect(rn2.denominator).to.equal(6);
    });
    it("opposite", function () {
        var rn = new RationalNumber_1.RationalNumber(6, 12);
        var rn2 = rn.opposite();
        chai_1.expect(rn2.numerator).to.equal(-6);
        chai_1.expect(rn2.denominator).to.equal(12);
    });
    it("equal", function () {
        var rn = new RationalNumber_1.RationalNumber(6, 12);
        var rn2 = new RationalNumber_1.RationalNumber(1, 2);
        chai_1.expect(rn.equals(rn2)).to.be.true;
    });
    it("equal negative", function () {
        var rn = new RationalNumber_1.RationalNumber(1, 3);
        var rn2 = new RationalNumber_1.RationalNumber(1, 2);
        chai_1.expect(!rn.equals(rn2)).to.be.true;
    });
    it("add number ++", function () {
        var rn = new RationalNumber_1.RationalNumber(2, 3);
        var rn2 = rn.add(2);
        chai_1.expect(rn2.numerator).to.equal(8);
        chai_1.expect(rn2.denominator).to.equal(3);
    });
    it("add number +-", function () {
        var rn = new RationalNumber_1.RationalNumber(2, 3);
        var rn2 = rn.add(-2);
        chai_1.expect(rn2.numerator).to.equal(-4);
        chai_1.expect(rn2.denominator).to.equal(3);
    });
    it("add RationalNumber ++", function () {
        var rn = new RationalNumber_1.RationalNumber(2, 3);
        var rn2 = rn.add(new RationalNumber_1.RationalNumber(3, 2));
        chai_1.expect(rn2.numerator).to.equal(13);
        chai_1.expect(rn2.denominator).to.equal(6);
    });
    it("add RationalNumber +-", function () {
        var rn = new RationalNumber_1.RationalNumber(2, 3);
        var rn2 = rn.add(new RationalNumber_1.RationalNumber(-3, 3));
        chai_1.expect(rn2.numerator).to.equal(-1);
        chai_1.expect(rn2.denominator).to.equal(3);
    });
    it("add RationalNumber --", function () {
        var rn = new RationalNumber_1.RationalNumber(-2, 3);
        var rn2 = rn.add(new RationalNumber_1.RationalNumber(-2, 3));
        chai_1.expect(rn2.numerator).to.equal(-4);
        chai_1.expect(rn2.denominator).to.equal(3);
    });
    it("sub number ++", function () {
        var rn = new RationalNumber_1.RationalNumber(2, 3);
        var rn2 = rn.sub(2);
        chai_1.expect(rn2.numerator).to.equal(-4);
        chai_1.expect(rn2.denominator).to.equal(3);
    });
    it("sub RationalNumber ++", function () {
        var rn = new RationalNumber_1.RationalNumber(2, 3);
        var rn2 = rn.sub(new RationalNumber_1.RationalNumber(3, 2));
        chai_1.expect(rn2.numerator).to.equal(-5);
        chai_1.expect(rn2.denominator).to.equal(6);
    });
    it("mult number ++", function () {
        var rn = new RationalNumber_1.RationalNumber(2, 3);
        var rn2 = rn.mult(2);
        chai_1.expect(rn2.numerator).to.equal(4);
        chai_1.expect(rn2.denominator).to.equal(3);
    });
    it("mult number +-", function () {
        var rn = new RationalNumber_1.RationalNumber(2, 3);
        var rn2 = rn.mult(-2);
        chai_1.expect(rn2.numerator).to.equal(-4);
        chai_1.expect(rn2.denominator).to.equal(3);
    });
    it("mult RationalNumber ++", function () {
        var rn = new RationalNumber_1.RationalNumber(2, 3);
        var rn2 = rn.mult(new RationalNumber_1.RationalNumber(3, 2));
        chai_1.expect(rn2.numerator).to.equal(6);
        chai_1.expect(rn2.denominator).to.equal(6);
    });
    it("mult RationalNumber +-", function () {
        var rn = new RationalNumber_1.RationalNumber(2, 3);
        var rn2 = rn.mult(new RationalNumber_1.RationalNumber(-3, 2));
        chai_1.expect(rn2.numerator).to.equal(-6);
        chai_1.expect(rn2.denominator).to.equal(6);
    });
    it("mult RationalNumber --", function () {
        var rn = new RationalNumber_1.RationalNumber(-2, 3);
        var rn2 = rn.mult(new RationalNumber_1.RationalNumber(-3, 2));
        chai_1.expect(rn2.numerator).to.equal(6);
        chai_1.expect(rn2.denominator).to.equal(6);
    });
    it("div number ++", function () {
        var rn = new RationalNumber_1.RationalNumber(2, 3);
        var rn2 = rn.div(2);
        chai_1.expect(rn2.numerator).to.equal(2);
        chai_1.expect(rn2.denominator).to.equal(6);
    });
    it("div RationalNumber ++", function () {
        var rn = new RationalNumber_1.RationalNumber(2, 3);
        var rn2 = rn.div(new RationalNumber_1.RationalNumber(3, 2));
        chai_1.expect(rn2.numerator).to.equal(4);
        chai_1.expect(rn2.denominator).to.equal(9);
    });
    it("exp number", function () {
        var rn = new RationalNumber_1.RationalNumber(2, 3);
        var rn2 = rn.exp(2);
        chai_1.expect(rn2.numerator).to.equal(4);
        chai_1.expect(rn2.denominator).to.equal(9);
    });
    it("toString positive integer ++", function () {
        var rn = new RationalNumber_1.RationalNumber(2, 1);
        var str = rn.toString();
        chai_1.expect(str, "2");
    });
    it("toString positive integer --", function () {
        var rn = new RationalNumber_1.RationalNumber(-2, -1);
        var str = rn.toString();
        chai_1.expect(str, "2");
    });
    it("toString negative integer +-", function () {
        var rn = new RationalNumber_1.RationalNumber(2, -1);
        var str = rn.toString();
        chai_1.expect(str, "-2");
    });
    it("toString negative integer -+", function () {
        var rn = new RationalNumber_1.RationalNumber(-2, 1);
        var str = rn.toString();
        chai_1.expect(str, "-2");
    });
    it("toString positive rational ++", function () {
        var rn = new RationalNumber_1.RationalNumber(2, 3);
        var str = rn.toString();
        chai_1.expect(str, "2/3");
    });
    it("toString positive rational --", function () {
        var rn = new RationalNumber_1.RationalNumber(-2, -3);
        var str = rn.toString();
        chai_1.expect(str, "2/3");
    });
    it("toString negative rational +-", function () {
        var rn = new RationalNumber_1.RationalNumber(2, -3);
        var str = rn.toString();
        chai_1.expect(str, "-2/3");
    });
    it("toString negative rational -+", function () {
        var rn = new RationalNumber_1.RationalNumber(-2, 3);
        var str = rn.toString();
        chai_1.expect(str, "-2/3");
    });
    it("evaluateFromRPN", function () {
        var rn = RationalNumber_1.RationalNumber.fromString("2/5+(2-1)/5");
        chai_1.expect(rn.numerator).to.equal(3);
        chai_1.expect(rn.denominator).to.equal(5);
    });
});
//# sourceMappingURL=rationalNumber.test.js.map