import { RationalNumber } from "../structures/RationalNumber";
import { Polynomial, PolynomialTerm, VariableTerm } from "../structures/Polynomial";

QUnit.module("Polynomial");
QUnit.test("identity", () => {
	// arange
	var polynomial: Polynomial = new Polynomial();
	polynomial.terms[0] = new PolynomialTerm(new RationalNumber(1), [new VariableTerm("x", 0)]);
	polynomial.terms[1] = new PolynomialTerm(new RationalNumber(1), [new VariableTerm("x", 1)]);
	polynomial.terms[2] = new PolynomialTerm(new RationalNumber(1), [new VariableTerm("x", 2)]);
	// act
	// assert
	QUnit.assert.ok(polynomial, "identity returned null");
});