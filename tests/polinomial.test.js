// tslint:disable:no-unused-expression
// tslint:disable:eofline
// tslint:disable:max-line-length
import { expect } from "chai";
import { Polynomial, PolynomialTerm, VariableTerm } from "../structures/Polynomial";
import { RationalNumber } from "../structures/RationalNumber";
describe("Polinomial test suite", () => {
    it("Can be constructed", () => {
        const polynomial = new Polynomial();
        polynomial.terms[0] = new PolynomialTerm(new RationalNumber(1), [new VariableTerm("x", 0)]);
        polynomial.terms[1] = new PolynomialTerm(new RationalNumber(1), [new VariableTerm("x", 1)]);
        polynomial.terms[2] = new PolynomialTerm(new RationalNumber(1), [new VariableTerm("x", 2)]);
        expect(polynomial).to.not.be.null;
    });
    it("Can be printed as a string", () => {
        const polynomial = new Polynomial();
        polynomial.terms[0] = new PolynomialTerm(new RationalNumber(1), [new VariableTerm("x", 0)]);
        polynomial.terms[1] = new PolynomialTerm(new RationalNumber(1), [new VariableTerm("x", 1)]);
        polynomial.terms[2] = new PolynomialTerm(new RationalNumber(1), [new VariableTerm("x", 2)]);
        expect(polynomial).to.not.be.null;
        expect(polynomial.toString()).to.equal("x^2+x+1");
    });
});
//# sourceMappingURL=polinomial.test.js.map