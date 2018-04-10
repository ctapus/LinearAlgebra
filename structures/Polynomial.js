import { RationalNumber } from "../structures/RationalNumber";
export class PolynomialExpression {
    constructor(terms = null) {
        if (null === terms) {
            this.terms = [];
        }
        else {
            this.terms = terms;
        }
    }
    condense() {
        for (let pt of this.terms) {
            pt.condense();
        }
    }
    calculate() {
        let ret = new Polynomial();
        for (let pt of this.terms) {
            ret.add(pt.calculate());
        }
        return ret;
    }
}
export class PolynomialExpressionTerm {
    constructor(polynomial, exponent = 1) {
        this.polynomial = polynomial;
        this.exponent = exponent;
    }
    condense() {
        this.polynomial.condense();
    }
    deepCopy() {
        return new PolynomialExpressionTerm(this.polynomial.deepCopy(), this.exponent);
    }
    calculate() {
        return this.polynomial.deepCopy().exp(this.exponent);
    }
}
export class Polynomial {
    constructor(terms = null) {
        if (null === terms) {
            this.terms = [];
        }
        else {
            this.terms = terms;
        }
    }
    add(p) {
        this.condense();
        p.condense();
        let res = new Polynomial();
        res.terms.concat(this.terms);
        res.terms.concat(p.terms);
        res.condense();
        return res;
    }
    sub(p) {
        this.condense();
        p.condense();
        let res = new Polynomial();
        res.terms.concat(this.terms);
        res.terms.concat(p.terms.map((term) => new PolynomialTerm(term.coefficient.mult(-1), term.variables)));
        res.condense();
        return res;
    }
    mult(p) {
        this.condense();
        p.condense();
        let res = new Polynomial();
        for (let t1 of this.terms) {
            for (let t2 of p.terms) {
                let t = new PolynomialTerm(t1.coefficient.mult(t2.coefficient));
                res.terms.concat(t);
            }
        }
        res.condense();
        return res;
    }
    div(p) {
        throw "Not implemented.";
    }
    exp(p) {
        let res = this.deepCopy();
        for (let i = 1; i <= p; i++) {
            res = res.mult(this);
        }
        return res;
    }
    condense() {
        let newTerms = [];
        for (let t of this.terms) {
            if (!t.coefficient.equals(0)) {
                t.condense();
                newTerms.push(t);
            }
        }
        for (let t of newTerms) {
            for (let t2 of newTerms) {
                if (t.equals(t2)) {
                    t.coefficient.add(t2.coefficient);
                    t2.coefficient = new RationalNumber(0);
                }
            }
        }
        let newTerms2 = [];
        for (let t of newTerms) {
            if (!t.coefficient.equals(0)) {
                newTerms2.push(t);
            }
        }
        this.terms = newTerms2;
    }
    toString() {
        let ts = "";
        for (let pt of this.terms) {
            ts += pt.toString();
        }
        return ts;
    }
    deepCopy() {
        let ret = new Polynomial();
        for (let t of this.terms) {
            ret.terms.push(t.deepCopy());
        }
        return ret;
    }
}
export class PolynomialTerm {
    constructor(termCoefficient, variables = null) {
        this.coefficient = termCoefficient;
        if (null === variables) {
            this.variables = [];
        }
        else {
            this.variables = variables;
        }
    }
    condense() {
        if (this.coefficient.equals(0)) {
            this.variables = null;
            return;
        }
        for (let vt of this.variables) {
            for (let v of this.variables) {
                if (vt.variable === v.variable) {
                    vt.exponent += v.exponent;
                    v.exponent = 0;
                }
            }
        }
        let newVariables = [];
        for (let vt of this.variables) {
            if (0 !== vt.exponent) {
                newVariables.push(vt);
            }
        }
        this.variables = newVariables;
    }
    toString() {
        let vs = "";
        for (let vt of this.variables) {
            let svt = vt.toString();
            if ("1" !== svt) {
                vs += "*" + svt;
            }
        }
        vs = vs.slice(1);
        if (this.coefficient.equals(-1)) {
            return "" === vs ? "-1" : "-" + vs;
        }
        if (this.coefficient.equals(0)) {
            return "";
        }
        if (this.coefficient.equals(1)) {
            return "" === vs ? "+1" : "+" + vs;
        }
        if (this.coefficient.lt(0)) {
            return "" === vs ? "-" + this.coefficient.toString() : "-" + this.coefficient + "*" + vs;
        }
        if (this.coefficient.gt(0)) {
            return "" === vs ? this.coefficient.toString() : this.coefficient + "*" + vs;
        }
        return "";
    }
    equals(polynomialTerm) {
        if (this.coefficient !== polynomialTerm.coefficient) {
            return false;
        }
        // all this variableTerms are contained in the compared PolynomialTerm variableTerms
        for (let variable of this.variables) {
            let found = false;
            for (let v of polynomialTerm.variables) {
                if (variable.equals(v)) {
                    found = true;
                }
            }
            if (!found) {
                return false;
            }
        }
        // all the compared PolynomailTerm variableTerms are contained in the this variableTerms
        for (let v of polynomialTerm.variables) {
            let found = false;
            for (let variable of this.variables) {
                if (v.equals(variable)) {
                    found = true;
                }
            }
            if (!found) {
                return false;
            }
        }
        return true;
    }
    deepCopy() {
        let ret = new PolynomialTerm(this.coefficient.deepCopy());
        for (let v of this.variables) {
            this.variables.push(v.deepCopy());
        }
        return ret;
    }
}
export class VariableTerm {
    constructor(variable, exponent) {
        if ("" === variable) {
            throw Error("Variable missing.");
        }
        this.variable = variable;
        this.exponent = exponent;
    }
    toString() {
        return 0 === this.exponent ? "1" : this.variable + (1 === this.exponent ? "" : "^" + this.exponent);
    }
    equals(variableTerm) {
        return this.exponent === variableTerm.exponent && this.variable === variableTerm.variable;
    }
    deepCopy() {
        return new VariableTerm(this.variable, this.exponent);
    }
}
//# sourceMappingURL=Polynomial.js.map