// tslint:disable:no-unused-expression
// tslint:disable:eofline
// tslint:disable:max-line-length
import { expect } from "chai";
import { ComplexNumber } from "../structures/ComplexNumber";
import { RationalNumber } from "../structures/RationalNumber";

describe("ComplexNumber test suite", () => {
	it("constructor two number params", () => {
		const cn: ComplexNumber = new ComplexNumber(3, 5);
		expect(cn).to.not.be.null;
		expect(cn.realPart).to.equal(3);
		expect(cn.imaginaryPart).to.equal(5);
	});
	it("constructor two RationalNumber params", () => {
		const cn: ComplexNumber = new ComplexNumber(new RationalNumber(3), new RationalNumber(5));
		expect(cn).to.not.be.null;
		expect(cn.realPart).to.equal(3);
		expect(cn.imaginaryPart).to.equal(5);
	});
	it("constructor one number param", () => {
		const cn: ComplexNumber = new ComplexNumber(3);
		expect(cn).to.not.be.null;
		expect(cn.realPart).to.equal(3);
		expect(cn.imaginaryPart).to.equal(0);
	});
	it("constructor one RationalNumber param", () => {
		const cn: ComplexNumber = new ComplexNumber(new RationalNumber(3));
		expect(cn).to.not.be.null;
		expect(cn.realPart).to.equal(3);
		expect(cn.imaginaryPart).to.equal(0);
	});
	it("reciprocal", () => {
		const cn: ComplexNumber = new ComplexNumber(4, 3);
		const cn2: ComplexNumber = cn.reciprocal();
		expect(cn2.realPart).to.equal(new RationalNumber(4, 25));
		expect(cn2.imaginaryPart).to.equal(new RationalNumber(-3, 25));
	});
	it("conjugate", () => {
		const cn: ComplexNumber = new ComplexNumber(6, 12);
		const cn2: ComplexNumber = cn.conjugate();
		expect(cn2.realPart).to.equal(-6);
		expect(cn2.imaginaryPart).to.equal(-12);
	});
	it("opposite", () => {
		const cn: ComplexNumber = new ComplexNumber(6, 12);
		const cn2: ComplexNumber = cn.opposite();
		expect(cn2.realPart).to.equal(-6);
		expect(cn2.imaginaryPart).to.equal(12);
	});
	it("equal", () => {
		const cn: ComplexNumber = new ComplexNumber(6, 12);
		const cn2: ComplexNumber = new ComplexNumber(6, 12);
		expect(cn.equals(cn2)).to.be.true;
	});
	it("equal negative", () => {
		const cn: ComplexNumber = new ComplexNumber(1, 3);
		const cn2: ComplexNumber = new ComplexNumber(1, 2);
		expect(!cn.equals(cn2)).to.be.true;
	});
	it("add number ++", () => {
		const cn: ComplexNumber = new ComplexNumber(2, 3);
		const cn2: ComplexNumber = cn.add(2);
		expect(cn2.realPart).to.equal(4);
		expect(cn2.imaginaryPart).to.equal(3);
	});
	it("add number +-", () => {
		const cn: ComplexNumber = new ComplexNumber(2, 3);
		const cn2: ComplexNumber = cn.add(-2);
		expect(cn2.realPart).to.equal(0);
		expect(cn2.imaginaryPart).to.equal(3);
	});
	it("add RationalNumber ++", () => {
		const cn: ComplexNumber = new ComplexNumber(2, 3);
		const cn2: ComplexNumber = cn.add(new RationalNumber(3, 2));
		expect(cn2.realPart).to.equal(new RationalNumber(7, 2));
		expect(cn2.imaginaryPart).to.equal(3);
	});
	it("add RationalNumber +-", () => {
		const cn: ComplexNumber = new ComplexNumber(2, 3);
		const cn2: ComplexNumber = cn.add(new RationalNumber(-3, 3));
		expect(cn2.realPart).to.equal(new RationalNumber(1));
		expect(cn2.imaginaryPart).to.equal(3);
	});
	it("add RationalNumber --", () => {
		const cn: ComplexNumber = new ComplexNumber(-2, 3);
		const cn2: ComplexNumber = cn.add(new RationalNumber(-2, 3));
		expect(cn2.realPart).to.equal(new RationalNumber(-8, 3));
		expect(cn2.imaginaryPart).to.equal(3);
	});
	it("add ComplexNumber --", () => {
		const cn: ComplexNumber = new ComplexNumber(-2, 3);
		const cn2: ComplexNumber = cn.add(new ComplexNumber(-2, 3));
		expect(cn2.realPart).to.equal(-4);
		expect(cn2.imaginaryPart).to.equal(6);
	});
	it("sub number ++", () => {
		const cn: ComplexNumber = new ComplexNumber(2, 3);
		const cn2: ComplexNumber = cn.sub(2);
		expect(cn2.realPart).to.equal(0);
		expect(cn2.imaginaryPart).to.equal(3);
	});
	it("sub RationalNumber ++", () => {
		const cn: ComplexNumber = new ComplexNumber(2, 3);
		const cn2: ComplexNumber = cn.sub(new RationalNumber(3, 2));
		expect(cn2.realPart).to.equal(new RationalNumber(1, 2));
		expect(cn2.imaginaryPart).to.equal(3);
	});
	it("sub ComplexNumber ++", () => {
		const cn: ComplexNumber = new ComplexNumber(2, 3);
		const cn2: ComplexNumber = cn.sub(new ComplexNumber(3, 2));
		expect(cn2.realPart).to.equal(-1);
		expect(cn2.imaginaryPart).to.equal(2);
	});
	it("mult number ++", () => {
		const cn: ComplexNumber = new ComplexNumber(2, 3);
		const cn2: ComplexNumber = cn.mult(2);
		expect(cn2.realPart).to.equal(4);
		expect(cn2.imaginaryPart).to.equal(6);
	});
	it("mult number +-", () => {
		const cn: ComplexNumber = new ComplexNumber(2, 3);
		const crn2: ComplexNumber = cn.mult(-2);
		expect(crn2.realPart).to.equal(-4);
		expect(crn2.imaginaryPart).to.equal(-6);
	});
	it("mult RationalNumber ++", () => {
		const cn: ComplexNumber = new ComplexNumber(2, 3);
		const cn2: ComplexNumber = cn.mult(new RationalNumber(3, 2));
		expect(cn2.realPart).to.equal(3);
		expect(cn2.imaginaryPart).to.equal(new RationalNumber(9, 2));
	});
	it("mult RationalNumber +-", () => {
		const cn: ComplexNumber = new ComplexNumber(2, 3);
		const cn2: ComplexNumber = cn.mult(new RationalNumber(-3, 2));
		expect(cn2.realPart).to.equal(-3);
		expect(cn2.imaginaryPart).to.equal(new RationalNumber(-9, 2));
	});
	it("mult RationalNumber --", () => {
		const cn: ComplexNumber = new ComplexNumber(-2, 3);
		const cn2: ComplexNumber = cn.mult(new RationalNumber(-3, 2));
		expect(cn2.realPart).to.equal(3);
		expect(cn2.imaginaryPart).to.equal(new RationalNumber(-9, 2));
	});
	it("mult ComplexNumber --", () => {
		const cn: ComplexNumber = new ComplexNumber(-2, 3);
		const cn2: ComplexNumber = cn.mult(new ComplexNumber(-3, 2));
		expect(cn2.realPart).to.equal(0);
		expect(cn2.imaginaryPart).to.equal(-13);
	});
	it("div number ++", () => {
		const cn: ComplexNumber = new ComplexNumber(2, 4);
		const cn2: ComplexNumber = cn.div(2);
		expect(cn2.realPart).to.equal(1);
		expect(cn2.imaginaryPart).to.equal(2);
	});
	it("div RationalNumber ++", () => {
		const cn: ComplexNumber = new ComplexNumber(2, 3);
		const cn2: ComplexNumber = cn.div(new RationalNumber(3, 2));
		expect(cn2.realPart).to.equal(new RationalNumber(4, 3));
		expect(cn2.imaginaryPart).to.equal(new RationalNumber(2));
	});
	it("toString positive integer ++", () => {
		const cn: ComplexNumber = new ComplexNumber(2);
		const str: string = cn.toString();
		expect(str, "2");
	});
	it("toString positive integer --", () => {
		const cn: ComplexNumber = new ComplexNumber(-2);
		const str: string = cn.toString();
		expect(str, "-2");
	});
	it("toString positive rational ++", () => {
		const cn: ComplexNumber = new ComplexNumber(new RationalNumber(2, 3));
		const str: string = cn.toString();
		expect(str, "2/3");
	});
	it("toString positive rational --", () => {
		const cn: ComplexNumber = new ComplexNumber(new RationalNumber(-2, -3), new RationalNumber(-2, -3));
		const str: string = cn.toString();
		expect(str, "2/3 + 2/3*i");
	});
	it("toString negative rational +-", () => {
		const cn: ComplexNumber = new ComplexNumber(2, -3);
		const str: string = cn.toString();
		expect(str, "2 - 3*i");
	});
	it("toString negative rational -+", () => {
		const cn: ComplexNumber = new ComplexNumber(-2, 3);
		const str: string = cn.toString();
		expect(str, "-2 + 3*i");
	});
});