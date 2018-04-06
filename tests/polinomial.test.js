"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var Polynomial_1 = require("../structures/Polynomial");
var RationalNumber_1 = require("../structures/RationalNumber");
// tslint:disable:no-unused-expression
// tslint:disable:eofline
// tslint:disable:max-line-length
describe("Polinomial test suite", function () {
    it("Can be constructed", function () {
        var polynomial = new Polynomial_1.Polynomial();
        polynomial.terms[0] = new Polynomial_1.PolynomialTerm(new RationalNumber_1.RationalNumber(1), [new Polynomial_1.VariableTerm("x", 0)]);
        polynomial.terms[1] = new Polynomial_1.PolynomialTerm(new RationalNumber_1.RationalNumber(1), [new Polynomial_1.VariableTerm("x", 1)]);
        polynomial.terms[2] = new Polynomial_1.PolynomialTerm(new RationalNumber_1.RationalNumber(1), [new Polynomial_1.VariableTerm("x", 2)]);
        chai_1.expect(polynomial).to.not.be.null;
    });
    it("Can be printed as a string", function () {
        var polynomial = new Polynomial_1.Polynomial();
        polynomial.terms[0] = new Polynomial_1.PolynomialTerm(new RationalNumber_1.RationalNumber(1), [new Polynomial_1.VariableTerm("x", 0)]);
        polynomial.terms[1] = new Polynomial_1.PolynomialTerm(new RationalNumber_1.RationalNumber(1), [new Polynomial_1.VariableTerm("x", 1)]);
        polynomial.terms[2] = new Polynomial_1.PolynomialTerm(new RationalNumber_1.RationalNumber(1), [new Polynomial_1.VariableTerm("x", 2)]);
        chai_1.expect(polynomial).to.not.be.null;
        chai_1.expect(polynomial.toString()).to.equal("x^2+x+1");
    });
});
//# sourceMappingURL=polinomial.test.js.map