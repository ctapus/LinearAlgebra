/// <reference path="RationalNumber.ts" />
var PolynomialExpression = /** @class */ (function () {
    function PolynomialExpression(terms) {
        if (terms === void 0) { terms = null; }
        if (null === terms) {
            this.terms = [];
        }
        else {
            this.terms = terms;
        }
    }
    PolynomialExpression.prototype.condense = function () {
        for (var _i = 0, _a = this.terms; _i < _a.length; _i++) {
            var pt = _a[_i];
            pt.condense();
        }
    };
    PolynomialExpression.prototype.calculate = function () {
        var ret = new Polynomial();
        for (var _i = 0, _a = this.terms; _i < _a.length; _i++) {
            var pt = _a[_i];
            ret.add(pt.calculate());
        }
        return ret;
    };
    return PolynomialExpression;
}());
var PolynomialExpressionTerm = /** @class */ (function () {
    function PolynomialExpressionTerm(polynomial, exponent) {
        if (exponent === void 0) { exponent = 1; }
        this.polynomial = polynomial;
        this.exponent = exponent;
    }
    PolynomialExpressionTerm.prototype.condense = function () {
        this.polynomial.condense();
    };
    PolynomialExpressionTerm.prototype.deepCopy = function () {
        return new PolynomialExpressionTerm(this.polynomial.deepCopy(), this.exponent);
    };
    PolynomialExpressionTerm.prototype.calculate = function () {
        return this.polynomial.deepCopy().exp(this.exponent);
    };
    return PolynomialExpressionTerm;
}());
var Polynomial = /** @class */ (function () {
    function Polynomial(terms) {
        if (terms === void 0) { terms = null; }
        if (null === terms) {
            this.terms = [];
        }
        else {
            this.terms = terms;
        }
    }
    Polynomial.prototype.add = function (p) {
        this.condense();
        p.condense();
        var res = new Polynomial();
        res.terms.concat(this.terms);
        res.terms.concat(p.terms);
        res.condense();
        return res;
    };
    Polynomial.prototype.sub = function (p) {
        this.condense();
        p.condense();
        var res = new Polynomial();
        res.terms.concat(this.terms);
        res.terms.concat(p.terms.map(function (term) { return new PolynomialTerm(term.coefficient.mult(-1), term.variables); }));
        res.condense();
        return res;
    };
    Polynomial.prototype.mult = function (p) {
        this.condense();
        p.condense();
        var res = new Polynomial();
        for (var _i = 0, _a = this.terms; _i < _a.length; _i++) {
            var t1 = _a[_i];
            for (var _b = 0, _c = p.terms; _b < _c.length; _b++) {
                var t2 = _c[_b];
                var t = new PolynomialTerm(t1.coefficient.mult(t2.coefficient));
                res.terms.concat(t);
            }
        }
        res.condense();
        return res;
    };
    Polynomial.prototype.div = function (p) {
        throw "Not implemented.";
    };
    Polynomial.prototype.exp = function (p) {
        var res = this.deepCopy();
        for (var i = 1; i <= p; i++) {
            res = res.mult(this);
        }
        return res;
    };
    Polynomial.prototype.condense = function () {
        var newTerms = [];
        for (var _i = 0, _a = this.terms; _i < _a.length; _i++) {
            var t = _a[_i];
            if (!t.coefficient.equals(0)) {
                t.condense();
                newTerms.push(t);
            }
        }
        for (var _b = 0, newTerms_1 = newTerms; _b < newTerms_1.length; _b++) {
            var t = newTerms_1[_b];
            for (var _c = 0, newTerms_2 = newTerms; _c < newTerms_2.length; _c++) {
                var t2 = newTerms_2[_c];
                if (t.equals(t2)) {
                    t.coefficient.add(t2.coefficient);
                    t2.coefficient = new RationalNumber(0);
                }
            }
        }
        var newTerms2 = [];
        for (var _d = 0, newTerms_3 = newTerms; _d < newTerms_3.length; _d++) {
            var t = newTerms_3[_d];
            if (!t.coefficient.equals(0)) {
                newTerms2.push(t);
            }
        }
        this.terms = newTerms2;
    };
    Polynomial.prototype.toString = function () {
        var ts = "";
        for (var _i = 0, _a = this.terms; _i < _a.length; _i++) {
            var pt = _a[_i];
            ts += pt.toString();
        }
        return ts;
    };
    Polynomial.prototype.deepCopy = function () {
        var ret = new Polynomial();
        for (var _i = 0, _a = this.terms; _i < _a.length; _i++) {
            var t = _a[_i];
            ret.terms.push(t.deepCopy());
        }
        return ret;
    };
    return Polynomial;
}());
var PolynomialTerm = /** @class */ (function () {
    function PolynomialTerm(termCoefficient, variables) {
        if (variables === void 0) { variables = null; }
        this.coefficient = termCoefficient;
        if (null === variables) {
            this.variables = [];
        }
        else {
            this.variables = variables;
        }
    }
    PolynomialTerm.prototype.condense = function () {
        if (this.coefficient.equals(0)) {
            this.variables = null;
            return;
        }
        for (var _i = 0, _a = this.variables; _i < _a.length; _i++) {
            var vt = _a[_i];
            for (var _b = 0, _c = this.variables; _b < _c.length; _b++) {
                var v = _c[_b];
                if (vt.variable === v.variable) {
                    vt.exponent += v.exponent;
                    v.exponent = 0;
                }
            }
        }
        var newVariables = [];
        for (var _d = 0, _e = this.variables; _d < _e.length; _d++) {
            var vt = _e[_d];
            if (0 !== vt.exponent) {
                newVariables.push(vt);
            }
        }
        this.variables = newVariables;
    };
    PolynomialTerm.prototype.toString = function () {
        var vs = "";
        for (var _i = 0, _a = this.variables; _i < _a.length; _i++) {
            var vt = _a[_i];
            var svt = vt.toString();
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
    };
    PolynomialTerm.prototype.equals = function (polynomialTerm) {
        if (this.coefficient !== polynomialTerm.coefficient) {
            return false;
        }
        // all this variableTerms are contained in the compared PolynomialTerm variableTerms
        for (var _i = 0, _a = this.variables; _i < _a.length; _i++) {
            var variable = _a[_i];
            var found = false;
            for (var _b = 0, _c = polynomialTerm.variables; _b < _c.length; _b++) {
                var v = _c[_b];
                if (variable.equals(v)) {
                    found = true;
                }
            }
            if (!found) {
                return false;
            }
        }
        // all the compared PolynomailTerm variableTerms are contained in the this variableTerms
        for (var _d = 0, _e = polynomialTerm.variables; _d < _e.length; _d++) {
            var v = _e[_d];
            var found = false;
            for (var _f = 0, _g = this.variables; _f < _g.length; _f++) {
                var variable = _g[_f];
                if (v.equals(variable)) {
                    found = true;
                }
            }
            if (!found) {
                return false;
            }
        }
        return true;
    };
    PolynomialTerm.prototype.deepCopy = function () {
        var ret = new PolynomialTerm(this.coefficient.deepCopy());
        for (var _i = 0, _a = this.variables; _i < _a.length; _i++) {
            var v = _a[_i];
            this.variables.push(v.deepCopy());
        }
        return ret;
    };
    return PolynomialTerm;
}());
var VariableTerm = /** @class */ (function () {
    function VariableTerm(variable, exponent) {
        if ("" === variable) {
            throw Error("Variable missing.");
        }
        this.variable = variable;
        this.exponent = exponent;
    }
    VariableTerm.prototype.toString = function () {
        return 0 === this.exponent ? "1" : this.variable + (1 === this.exponent ? "" : "^" + this.exponent);
    };
    VariableTerm.prototype.equals = function (variableTerm) {
        return this.exponent === variableTerm.exponent && this.variable === variableTerm.variable;
    };
    VariableTerm.prototype.deepCopy = function () {
        return new VariableTerm(this.variable, this.exponent);
    };
    return VariableTerm;
}());
//# sourceMappingURL=Polynomial.js.map