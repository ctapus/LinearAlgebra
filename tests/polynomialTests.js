"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RationalNumber_1 = require("../structures/RationalNumber");
var Polynomial_1 = require("../structures/Polynomial");
QUnit.module("Polynomial");
QUnit.test("identity", function () {
    // arange
    var polynomial = new Polynomial_1.Polynomial();
    polynomial.terms[0] = new Polynomial_1.PolynomialTerm(new RationalNumber_1.RationalNumber(1), [new Polynomial_1.VariableTerm("x", 0)]);
    polynomial.terms[1] = new Polynomial_1.PolynomialTerm(new RationalNumber_1.RationalNumber(1), [new Polynomial_1.VariableTerm("x", 1)]);
    polynomial.terms[2] = new Polynomial_1.PolynomialTerm(new RationalNumber_1.RationalNumber(1), [new Polynomial_1.VariableTerm("x", 2)]);
    // act
    // assert
    QUnit.assert.ok(polynomial, "identity returned null");
});
//# sourceMappingURL=polynomialTests.js.map