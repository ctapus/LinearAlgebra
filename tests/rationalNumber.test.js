// tslint:disable:no-unused-expression
// tslint:disable:eofline
// tslint:disable:max-line-length
import { expect } from "chai";
import { RationalNumber } from "../structures/RationalNumber";
describe("RationalNumber test suite", () => {
    it("constructor two params", () => {
        const rn = new RationalNumber(3, 5);
        expect(rn).to.not.be.null;
        expect(rn.numerator).to.equal(3);
        expect(rn.denominator).to.equal(5);
    });
    it("constructor one param", () => {
        const rn = new RationalNumber(3);
        expect(rn).to.not.be.null;
        expect(rn.numerator).to.equal(3);
        expect(rn.denominator).to.equal(1);
    });
    it("simplified  form", () => {
        const rn = new RationalNumber(6, 12);
        const rn2 = rn.simplifiedForm();
        expect(rn2.numerator).to.equal(1);
        expect(rn2.denominator).to.equal(2);
    });
    it("reciprocal", () => {
        const rn = new RationalNumber(6, 12);
        const rn2 = rn.reciprocal();
        expect(rn2.numerator).to.equal(12);
        expect(rn2.denominator).to.equal(6);
    });
    it("opposite", () => {
        const rn = new RationalNumber(6, 12);
        const rn2 = rn.opposite();
        expect(rn2.numerator).to.equal(-6);
        expect(rn2.denominator).to.equal(12);
    });
    it("equal", () => {
        const rn = new RationalNumber(6, 12);
        const rn2 = new RationalNumber(1, 2);
        expect(rn.equals(rn2)).to.be.true;
    });
    it("equal negative", () => {
        const rn = new RationalNumber(1, 3);
        const rn2 = new RationalNumber(1, 2);
        expect(!rn.equals(rn2)).to.be.true;
    });
    it("add number ++", () => {
        const rn = new RationalNumber(2, 3);
        const rn2 = rn.add(2);
        expect(rn2.numerator).to.equal(8);
        expect(rn2.denominator).to.equal(3);
    });
    it("add number +-", () => {
        const rn = new RationalNumber(2, 3);
        const rn2 = rn.add(-2);
        expect(rn2.numerator).to.equal(-4);
        expect(rn2.denominator).to.equal(3);
    });
    it("add RationalNumber ++", () => {
        const rn = new RationalNumber(2, 3);
        const rn2 = rn.add(new RationalNumber(3, 2));
        expect(rn2.numerator).to.equal(13);
        expect(rn2.denominator).to.equal(6);
    });
    it("add RationalNumber +-", () => {
        const rn = new RationalNumber(2, 3);
        const rn2 = rn.add(new RationalNumber(-3, 3));
        expect(rn2.numerator).to.equal(-1);
        expect(rn2.denominator).to.equal(3);
    });
    it("add RationalNumber --", () => {
        const rn = new RationalNumber(-2, 3);
        const rn2 = rn.add(new RationalNumber(-2, 3));
        expect(rn2.numerator).to.equal(-4);
        expect(rn2.denominator).to.equal(3);
    });
    it("sub number ++", () => {
        const rn = new RationalNumber(2, 3);
        const rn2 = rn.sub(2);
        expect(rn2.numerator).to.equal(-4);
        expect(rn2.denominator).to.equal(3);
    });
    it("sub RationalNumber ++", () => {
        const rn = new RationalNumber(2, 3);
        const rn2 = rn.sub(new RationalNumber(3, 2));
        expect(rn2.numerator).to.equal(-5);
        expect(rn2.denominator).to.equal(6);
    });
    it("mult number ++", () => {
        const rn = new RationalNumber(2, 3);
        const rn2 = rn.mult(2);
        expect(rn2.numerator).to.equal(4);
        expect(rn2.denominator).to.equal(3);
    });
    it("mult number +-", () => {
        const rn = new RationalNumber(2, 3);
        const rn2 = rn.mult(-2);
        expect(rn2.numerator).to.equal(-4);
        expect(rn2.denominator).to.equal(3);
    });
    it("mult RationalNumber ++", () => {
        const rn = new RationalNumber(2, 3);
        const rn2 = rn.mult(new RationalNumber(3, 2));
        expect(rn2.numerator).to.equal(6);
        expect(rn2.denominator).to.equal(6);
    });
    it("mult RationalNumber +-", () => {
        const rn = new RationalNumber(2, 3);
        const rn2 = rn.mult(new RationalNumber(-3, 2));
        expect(rn2.numerator).to.equal(-6);
        expect(rn2.denominator).to.equal(6);
    });
    it("mult RationalNumber --", () => {
        const rn = new RationalNumber(-2, 3);
        const rn2 = rn.mult(new RationalNumber(-3, 2));
        expect(rn2.numerator).to.equal(6);
        expect(rn2.denominator).to.equal(6);
    });
    it("div number ++", () => {
        const rn = new RationalNumber(2, 3);
        const rn2 = rn.div(2);
        expect(rn2.numerator).to.equal(2);
        expect(rn2.denominator).to.equal(6);
    });
    it("div RationalNumber ++", () => {
        const rn = new RationalNumber(2, 3);
        const rn2 = rn.div(new RationalNumber(3, 2));
        expect(rn2.numerator).to.equal(4);
        expect(rn2.denominator).to.equal(9);
    });
    it("exp number", () => {
        const rn = new RationalNumber(2, 3);
        const rn2 = rn.exp(2);
        expect(rn2.numerator).to.equal(4);
        expect(rn2.denominator).to.equal(9);
    });
    it("toString positive integer ++", () => {
        const rn = new RationalNumber(2, 1);
        const str = rn.toString();
        expect(str, "2");
    });
    it("toString positive integer --", () => {
        const rn = new RationalNumber(-2, -1);
        const str = rn.toString();
        expect(str, "2");
    });
    it("toString negative integer +-", () => {
        const rn = new RationalNumber(2, -1);
        const str = rn.toString();
        expect(str, "-2");
    });
    it("toString negative integer -+", () => {
        const rn = new RationalNumber(-2, 1);
        const str = rn.toString();
        expect(str, "-2");
    });
    it("toString positive rational ++", () => {
        const rn = new RationalNumber(2, 3);
        const str = rn.toString();
        expect(str, "2/3");
    });
    it("toString positive rational --", () => {
        const rn = new RationalNumber(-2, -3);
        const str = rn.toString();
        expect(str, "2/3");
    });
    it("toString negative rational +-", () => {
        const rn = new RationalNumber(2, -3);
        const str = rn.toString();
        expect(str, "-2/3");
    });
    it("toString negative rational -+", () => {
        const rn = new RationalNumber(-2, 3);
        const str = rn.toString();
        expect(str, "-2/3");
    });
    it("evaluateFromRPN", () => {
        const rn = RationalNumber.fromString("2/5+(2-1)/5");
        expect(rn.numerator).to.equal(3);
        expect(rn.denominator).to.equal(5);
    });
});
//# sourceMappingURL=rationalNumber.test.js.map