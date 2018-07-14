// tslint:disable:no-unused-expression
// tslint:disable:eofline
// tslint:disable:max-line-length
import { expect } from "chai";
import { RationalNumber } from "../structures/RationalNumber";

describe("RationalNumber test suite", () => {
    it("constructor two params", () => {
        const rn: RationalNumber = new RationalNumber(3, 5);
        expect(rn).to.not.be.null;
        expect(rn.numerator).to.equal(3);
        expect(rn.denominator).to.equal(5);
    });
    it("constructor one param", () => {
        const rn: RationalNumber = new RationalNumber(3);
        expect(rn).to.not.be.null;
        expect(rn.numerator).to.equal(3);
        expect(rn.denominator).to.equal(1);
    });
    it("simplified  form", () => {
        const rn: RationalNumber = new RationalNumber(6, 12);
        const rn2: RationalNumber = rn.simplifiedForm();
        expect(rn2.numerator).to.equal(1);
        expect(rn2.denominator).to.equal(2);
    });
    it("reciprocal", () => {
        const rn: RationalNumber = new RationalNumber(6, 12);
        const rn2: RationalNumber = rn.reciprocal();
        expect(rn2.numerator).to.equal(12);
        expect(rn2.denominator).to.equal(6);
    });
    it("opposite", () => {
        const rn: RationalNumber = new RationalNumber(6, 12);
        const rn2: RationalNumber = rn.opposite();
        expect(rn2.numerator).to.equal(-6);
        expect(rn2.denominator).to.equal(12);
    });
    it("equal", () => {
        const rn: RationalNumber = new RationalNumber(6, 12);
        const rn2: RationalNumber = new RationalNumber(1, 2);
        expect(rn.equals(rn2)).to.be.true;
    });
    it("equal negative", () => {
        const rn: RationalNumber = new RationalNumber(1, 3);
        const rn2: RationalNumber = new RationalNumber(1, 2);
        expect(!rn.equals(rn2)).to.be.true;
    });
    it("add number ++", () => {
        const rn: RationalNumber = new RationalNumber(2, 3);
        const rn2: RationalNumber = rn.add(2);
        expect(rn2.numerator).to.equal(8);
        expect(rn2.denominator).to.equal(3);
    });
    it("add number +-", () => {
        const rn: RationalNumber = new RationalNumber(2, 3);
        const rn2: RationalNumber = rn.add(-2);
        expect(rn2.numerator).to.equal(-4);
        expect(rn2.denominator).to.equal(3);
    });
    it("add RationalNumber ++", () => {
        const rn: RationalNumber = new RationalNumber(2, 3);
        const rn2: RationalNumber = rn.add(new RationalNumber(3, 2));
        expect(rn2.numerator).to.equal(13);
        expect(rn2.denominator).to.equal(6);
    });
    it("add RationalNumber +-", () => {
        const rn: RationalNumber = new RationalNumber(2, 3);
        const rn2: RationalNumber = rn.add(new RationalNumber(-3, 3));
        expect(rn2.numerator).to.equal(-1);
        expect(rn2.denominator).to.equal(3);
    });
    it("add RationalNumber --", () => {
        const rn: RationalNumber = new RationalNumber(-2, 3);
        const rn2: RationalNumber = rn.add(new RationalNumber(-2, 3));
        expect(rn2.numerator).to.equal(-4);
        expect(rn2.denominator).to.equal(3);
    });
    it("sub number ++", () => {
        const rn: RationalNumber = new RationalNumber(2, 3);
        const rn2: RationalNumber = rn.sub(2);
        expect(rn2.numerator).to.equal(-4);
        expect(rn2.denominator).to.equal(3);
    });
    it("sub RationalNumber ++", () => {
        const rn: RationalNumber = new RationalNumber(2, 3);
        const rn2: RationalNumber = rn.sub(new RationalNumber(3, 2));
        expect(rn2.numerator).to.equal(-5);
        expect(rn2.denominator).to.equal(6);
    });
    it("mult number ++", () => {
        const rn: RationalNumber = new RationalNumber(2, 3);
        const rn2: RationalNumber = rn.mult(2);
        expect(rn2.numerator).to.equal(4);
        expect(rn2.denominator).to.equal(3);
    });
    it("mult number +-", () => {
        const rn: RationalNumber = new RationalNumber(2, 3);
        const rn2: RationalNumber = rn.mult(-2);
        expect(rn2.numerator).to.equal(-4);
        expect(rn2.denominator).to.equal(3);
    });
    it("mult RationalNumber ++", () => {
        const rn: RationalNumber = new RationalNumber(2, 3);
        const rn2: RationalNumber = rn.mult(new RationalNumber(3, 2));
        expect(rn2.numerator).to.equal(6);
        expect(rn2.denominator).to.equal(6);
    });
    it("mult RationalNumber +-", () => {
        const rn: RationalNumber = new RationalNumber(2, 3);
        const rn2: RationalNumber = rn.mult(new RationalNumber(-3, 2));
        expect(rn2.numerator).to.equal(-6);
        expect(rn2.denominator).to.equal(6);
    });
    it("mult RationalNumber --", () => {
        const rn: RationalNumber = new RationalNumber(-2, 3);
        const rn2: RationalNumber = rn.mult(new RationalNumber(-3, 2));
        expect(rn2.numerator).to.equal(6);
        expect(rn2.denominator).to.equal(6);
    });
    it("div number ++", () => {
        const rn: RationalNumber = new RationalNumber(2, 3);
        const rn2: RationalNumber = rn.div(2);
        expect(rn2.numerator).to.equal(2);
        expect(rn2.denominator).to.equal(6);
    });
    it("div RationalNumber ++", () => {
        const rn: RationalNumber = new RationalNumber(2, 3);
        const rn2: RationalNumber = rn.div(new RationalNumber(3, 2));
        expect(rn2.numerator).to.equal(4);
        expect(rn2.denominator).to.equal(9);
    });
    it("exp number", () => {
        const rn: RationalNumber = new RationalNumber(2, 3);
        const rn2: RationalNumber = rn.exp(2);
        expect(rn2.numerator).to.equal(4);
        expect(rn2.denominator).to.equal(9);
    });
    it("toString positive integer ++", () => {
        const rn: RationalNumber = new RationalNumber(2, 1);
        const str: string = rn.toString();
        expect(str, "2");
    });
    it("toString positive integer --", () => {
        const rn: RationalNumber = new RationalNumber(-2, -1);
        const str: string = rn.toString();
        expect(str, "2");
    });
    it("toString negative integer +-", () => {
        const rn: RationalNumber = new RationalNumber(2, -1);
        const str: string = rn.toString();
        expect(str, "-2");
    });
    it("toString negative integer -+", () => {
        const rn: RationalNumber = new RationalNumber(-2, 1);
        const str: string = rn.toString();
        expect(str, "-2");
    });
    it("toString positive rational ++", () => {
        const rn: RationalNumber = new RationalNumber(2, 3);
        const str: string = rn.toString();
        expect(str, "2/3");
    });
    it("toString positive rational --", () => {
        const rn: RationalNumber = new RationalNumber(-2, -3);
        const str: string = rn.toString();
        expect(str, "2/3");
    });
    it("toString negative rational +-", () => {
        const rn: RationalNumber = new RationalNumber(2, -3);
        const str: string = rn.toString();
        expect(str, "-2/3");
    });
    it("toString negative rational -+", () => {
        const rn: RationalNumber = new RationalNumber(-2, 3);
        const str: string = rn.toString();
        expect(str, "-2/3");
    });
    it("evaluateFromRPN", () => {
        const rn: RationalNumber = RationalNumber.fromString("2/5+(2-1)/5");
        expect(rn.numerator).to.equal(3);
        expect(rn.denominator).to.equal(5);
    });
});