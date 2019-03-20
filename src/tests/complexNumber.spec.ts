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
		expect(cn.realPart.equals(3)).to.be.true;
		expect(cn.imaginaryPart.equals(5)).to.be.true;
	});
	it("constructor two RationalNumber params", () => {
		const cn: ComplexNumber = new ComplexNumber(new RationalNumber(3), new RationalNumber(5));
		expect(cn).to.not.be.null;
		expect(cn.realPart.equals(3)).to.be.true;
		expect(cn.imaginaryPart.equals(5)).to.be.true;
	});
	it("constructor one number param", () => {
		const cn: ComplexNumber = new ComplexNumber(3);
		expect(cn).to.not.be.null;
		expect(cn.realPart.equals(3)).to.be.true;
		expect(cn.imaginaryPart.equals(0)).to.be.true;
	});
	it("constructor one RationalNumber param", () => {
		const cn: ComplexNumber = new ComplexNumber(new RationalNumber(3));
		expect(cn).to.not.be.null;
		expect(cn.realPart.equals(3)).to.be.true;
		expect(cn.imaginaryPart.equals(0)).to.be.true;
	});
	it("reciprocal", () => {
		const cn: ComplexNumber = new ComplexNumber(4, 3);
		const cn2: ComplexNumber = cn.reciprocal();
		expect(cn2.realPart.equals(new RationalNumber(4, 25))).to.be.true;
		expect(cn2.imaginaryPart.equals(new RationalNumber(-3, 25))).to.be.true;
	});
	it("conjugate", () => {
		const cn: ComplexNumber = new ComplexNumber(6, 12);
		const cn2: ComplexNumber = cn.conjugate();
		expect(cn2.realPart.equals(6)).to.be.true;
		expect(cn2.imaginaryPart.equals(-12)).to.be.true;
	});
	it("opposite", () => {
		const cn: ComplexNumber = new ComplexNumber(6, 12);
		const cn2: ComplexNumber = cn.opposite();
		expect(cn2.realPart.equals(-6)).to.be.true;
		expect(cn2.imaginaryPart.equals(-12)).to.be.true;
	});
	it("equal", () => {
		const cn: ComplexNumber = new ComplexNumber(6, 12);
		const cn2: ComplexNumber = new ComplexNumber(6, 12);
		expect(cn.equals(cn2)).to.be.true;
	});
	it("equal negative", () => {
		const cn: ComplexNumber = new ComplexNumber(1, 3);
		const cn2: ComplexNumber = new ComplexNumber(1, 2);
		expect(cn.equals(cn2)).to.be.false;
	});
	it("add number ++", () => {
		const cn: ComplexNumber = new ComplexNumber(2, 3);
		const cn2: ComplexNumber = cn.add(2);
		expect(cn2.realPart.equals(4)).to.be.true;
		expect(cn2.imaginaryPart.equals(3)).to.be.true;
	});
	it("add number +-", () => {
		const cn: ComplexNumber = new ComplexNumber(2, 3);
		const cn2: ComplexNumber = cn.add(-2);
		expect(cn2.realPart.equals(0)).to.be.true;
		expect(cn2.imaginaryPart.equals(3)).to.be.true;
	});
	it("add RationalNumber ++", () => {
		const cn: ComplexNumber = new ComplexNumber(2, 3);
		const cn2: ComplexNumber = cn.add(new RationalNumber(3, 2));
		expect(cn2.realPart.equals(new RationalNumber(7, 2))).to.be.true;
		expect(cn2.imaginaryPart.equals(3)).to.be.true;
	});
	it("add RationalNumber +-", () => {
		const cn: ComplexNumber = new ComplexNumber(2, 3);
		const cn2: ComplexNumber = cn.add(new RationalNumber(-3, 3));
		expect(cn2.realPart.equals(1)).to.be.true;
		expect(cn2.imaginaryPart.equals(3)).to.be.true;
	});
	it("add RationalNumber --", () => {
		const cn: ComplexNumber = new ComplexNumber(-2, 3);
		const cn2: ComplexNumber = cn.add(new RationalNumber(-2, 3));
		expect(cn2.realPart.equals(new RationalNumber(-8, 3))).to.be.true;
		expect(cn2.imaginaryPart.equals(3)).to.be.true;
	});
	it("add ComplexNumber --", () => {
		const cn: ComplexNumber = new ComplexNumber(-2, 3);
		const cn2: ComplexNumber = cn.add(new ComplexNumber(-2, 3));
		expect(cn2.realPart.equals(-4)).to.be.true;
		expect(cn2.imaginaryPart.equals(6)).to.be.true;
	});
	it("sub number ++", () => {
		const cn: ComplexNumber = new ComplexNumber(2, 3);
		const cn2: ComplexNumber = cn.sub(2);
		expect(cn2.realPart.equals(0)).to.be.true;
		expect(cn2.imaginaryPart.equals(3)).to.be.true;
	});
	it("sub RationalNumber ++", () => {
		const cn: ComplexNumber = new ComplexNumber(2, 3);
		const cn2: ComplexNumber = cn.sub(new RationalNumber(3, 2));
		expect(cn2.realPart.equals(new RationalNumber(1, 2))).to.be.true;
		expect(cn2.imaginaryPart.equals(3)).to.be.true;
	});
	it("sub ComplexNumber ++", () => {
		const cn: ComplexNumber = new ComplexNumber(2, 3);
		const cn2: ComplexNumber = cn.sub(new ComplexNumber(3, 2));
		expect(cn2.realPart.equals(-1)).to.be.true;
		expect(cn2.imaginaryPart.equals(1)).to.be.true;
	});
	it("mult number ++", () => {
		const cn: ComplexNumber = new ComplexNumber(2, 3);
		const cn2: ComplexNumber = cn.mult(2);
		expect(cn2.realPart.equals(4)).to.be.true;
		expect(cn2.imaginaryPart.equals(6)).to.be.true;
	});
	it("mult number +-", () => {
		const cn: ComplexNumber = new ComplexNumber(2, 3);
		const cn2: ComplexNumber = cn.mult(-2);
		expect(cn2.realPart.equals(-4)).to.be.true;
		expect(cn2.imaginaryPart.equals(-6)).to.be.true;
	});
	it("mult RationalNumber ++", () => {
		const cn: ComplexNumber = new ComplexNumber(2, 3);
		const cn2: ComplexNumber = cn.mult(new RationalNumber(3, 2));
		expect(cn2.realPart.equals(3)).to.be.true;
		expect(cn2.imaginaryPart.equals(new RationalNumber(9, 2))).to.be.true;
	});
	it("mult RationalNumber +-", () => {
		const cn: ComplexNumber = new ComplexNumber(2, 3);
		const cn2: ComplexNumber = cn.mult(new RationalNumber(-3, 2));
		expect(cn2.realPart.equals(-3)).to.be.true;
		expect(cn2.imaginaryPart.equals(new RationalNumber(-9, 2))).to.be.true;
	});
	it("mult RationalNumber --", () => {
		const cn: ComplexNumber = new ComplexNumber(-2, 3);
		const cn2: ComplexNumber = cn.mult(new RationalNumber(-3, 2));
		expect(cn2.realPart.equals(3)).to.be.true;
		expect(cn2.imaginaryPart.equals(new RationalNumber(-9, 2))).to.be.true;
	});
	it("mult ComplexNumber --", () => {
		const cn: ComplexNumber = new ComplexNumber(-2, 3);
		const cn2: ComplexNumber = cn.mult(new ComplexNumber(-3, 2));
		expect(cn2.realPart.equals(0)).to.be.true;
		expect(cn2.imaginaryPart.equals(-13)).to.be.true;
	});
	it("div number ++", () => {
		const cn: ComplexNumber = new ComplexNumber(2, 4);
		const cn2: ComplexNumber = cn.div(2);
		expect(cn2.realPart.equals(1)).to.be.true;
		expect(cn2.imaginaryPart.equals(2)).to.be.true;
	});
	it("div RationalNumber ++", () => {
		const cn: ComplexNumber = new ComplexNumber(2, 3);
		const cn2: ComplexNumber = cn.div(new RationalNumber(3, 2));
		expect(cn2.realPart.equals(new RationalNumber(4, 3))).to.be.true;
		expect(cn2.imaginaryPart.equals(new RationalNumber(2))).to.be.true;
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