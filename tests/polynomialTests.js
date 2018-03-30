/// <reference path="../node_modules/@types/qunit/index.d.ts" />
/// <reference path="../structures/Polynomial.ts" />
/// <chutzpah_reference path="../structures/Polynomial.js" />
QUnit.module("Polynomial");
QUnit.test("identity", function () {
    // arange
    var polynomial = new Polynomial();
    polynomial.terms[0] = new PolynomialTerm(new RationalNumber(1), [new VariableTerm("x", 0)]);
    polynomial.terms[1] = new PolynomialTerm(new RationalNumber(1), [new VariableTerm("x", 1)]);
    polynomial.terms[2] = new PolynomialTerm(new RationalNumber(1), [new VariableTerm("x", 2)]);
    // act
    // assert
    QUnit.assert.ok(polynomial, "identity returned null");
});
//# sourceMappingURL=polynomialTests.js.map