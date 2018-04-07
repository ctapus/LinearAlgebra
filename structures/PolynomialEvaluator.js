"use strict";
exports.__esModule = true;
var Polynomial_1 = require("../structures/Polynomial");
var RationalNumber_1 = require("../structures/RationalNumber");
// todo: refactor to generics
var PolynomialTokenType;
(function (PolynomialTokenType) {
    PolynomialTokenType[PolynomialTokenType["Plus"] = 0] = "Plus";
    PolynomialTokenType[PolynomialTokenType["Minus"] = 1] = "Minus";
    PolynomialTokenType[PolynomialTokenType["Asterisk"] = 2] = "Asterisk";
    PolynomialTokenType[PolynomialTokenType["Slash"] = 3] = "Slash";
    PolynomialTokenType[PolynomialTokenType["Caret"] = 4] = "Caret";
    PolynomialTokenType[PolynomialTokenType["Number"] = 5] = "Number";
    PolynomialTokenType[PolynomialTokenType["Variable"] = 6] = "Variable";
    PolynomialTokenType[PolynomialTokenType["LParen"] = 7] = "LParen";
    PolynomialTokenType[PolynomialTokenType["RParen"] = 8] = "RParen";
    PolynomialTokenType[PolynomialTokenType["End"] = 9] = "End";
    PolynomialTokenType[PolynomialTokenType["Unknown"] = 10] = "Unknown";
})(PolynomialTokenType = exports.PolynomialTokenType || (exports.PolynomialTokenType = {}));
var PolynomialToken = /** @class */ (function () {
    function PolynomialToken(type, value, variable) {
        this.type = type;
        this.value = value;
        this.variable = variable;
    }
    return PolynomialToken;
}());
exports.PolynomialToken = PolynomialToken;
var PolynomialLexer = /** @class */ (function () {
    function PolynomialLexer(input) {
        this.tokens = input.replace(" ", "").match(/\(|\)|\d+(\.\d+)?|[\+\-\*\/\^]|[a-zA-Z]+[a-zA-Z0-9_]*/g);
        this.tokenIndex = 0;
    }
    PolynomialLexer.prototype.getTokenAndAdvance = function () {
        if (this.tokens.length === this.tokenIndex) {
            return new PolynomialToken(PolynomialTokenType.End);
        }
        var input = this.tokens[this.tokenIndex++];
        return this.getToken(input);
    };
    PolynomialLexer.prototype.revert = function () {
        if (this.tokenIndex <= 0) {
            throw Error("Index out of range");
        }
        this.tokenIndex--;
    };
    PolynomialLexer.prototype.getToken = function (input) {
        if (/\+/.test(input)) {
            return new PolynomialToken(PolynomialTokenType.Plus);
        }
        if (/\-/.test(input)) {
            return new PolynomialToken(PolynomialTokenType.Minus);
        }
        if (/\*/.test(input)) {
            return new PolynomialToken(PolynomialTokenType.Asterisk);
        }
        if (/\//.test(input)) {
            return new PolynomialToken(PolynomialTokenType.Slash);
        }
        if (/\^/.test(input)) {
            return new PolynomialToken(PolynomialTokenType.Caret);
        }
        if (/[a-zA-Z]+[a-zA-Z0-9_]*/.test(input)) {
            return new PolynomialToken(PolynomialTokenType.Variable, 1, input);
        }
        if (/\d+(\.\d+)?/.test(input)) {
            return new PolynomialToken(PolynomialTokenType.Number, parseFloat(input));
        }
        if (/\(/.test(input)) {
            return new PolynomialToken(PolynomialTokenType.LParen);
        }
        if (/\)/.test(input)) {
            return new PolynomialToken(PolynomialTokenType.RParen);
        }
        return new PolynomialToken(PolynomialTokenType.Unknown);
    };
    return PolynomialLexer;
}());
exports.PolynomialLexer = PolynomialLexer;
var PolynomialParser = /** @class */ (function () {
    function PolynomialParser() {
    }
    PolynomialParser.prototype.parse = function (code) {
        this.lex = new PolynomialLexer(code);
        var expression = this.expr();
        var token = this.lex.getTokenAndAdvance();
        if (token.type === PolynomialTokenType.End) {
            return expression;
        }
        throw Error("End expected");
    };
    PolynomialParser.prototype.expr = function () {
        var polynomial;
        var token = this.lex.getTokenAndAdvance();
        if (token.type === PolynomialTokenType.LParen) {
            polynomial = this.polynomial();
            token = this.lex.getTokenAndAdvance();
            if (token.type !== PolynomialTokenType.RParen) {
                throw Error("Unbalanced parenthesis.");
            }
            token = this.lex.getTokenAndAdvance();
            switch (token.type) {
                case PolynomialTokenType.Plus:
                    polynomial = polynomial.add(this.expr());
                    break;
                case PolynomialTokenType.Minus:
                    polynomial = polynomial.sub(this.expr());
                    break;
                case PolynomialTokenType.Asterisk:
                    polynomial = polynomial.mult(this.expr());
                    break;
                case PolynomialTokenType.Slash:
                    polynomial = polynomial.div(this.expr());
                    break;
                case PolynomialTokenType.Caret:
                    // todo: implement it
                    break;
                default:
                    break;
            }
        }
        else {
            this.lex.revert();
            polynomial = this.polynomial();
        }
        token = this.lex.getTokenAndAdvance();
        while (PolynomialTokenType.Plus === token.type || PolynomialTokenType.Minus === token.type ||
            PolynomialTokenType.Asterisk === token.type || PolynomialTokenType.Slash === token.type) {
            // todo: make a polynomial expression structure
            token = this.lex.getTokenAndAdvance();
        }
        return polynomial;
    };
    PolynomialParser.prototype.polynomial = function () {
        var polynomialTerms = [];
        var token = this.lex.getTokenAndAdvance();
        switch (token.type) {
            case PolynomialTokenType.Plus:
                polynomialTerms.push(this.polynomialTerm());
                break;
            case PolynomialTokenType.Minus:
                polynomialTerms.push(this.polynomialTerm());
                break;
            case PolynomialTokenType.Variable:
                this.lex.revert();
                polynomialTerms.push(this.polynomialTerm());
                break;
            case PolynomialTokenType.Number:
                this.lex.revert();
                polynomialTerms.push(this.polynomialTerm());
                break;
            default:
                break;
        }
        token = this.lex.getTokenAndAdvance();
        while (PolynomialTokenType.Plus === token.type || PolynomialTokenType.Minus === token.type) {
            var pt = this.polynomialTerm();
            if (null !== pt) {
                polynomialTerms.push(pt);
            }
            token = this.lex.getTokenAndAdvance();
        }
        this.lex.revert();
        return new Polynomial_1.Polynomial(polynomialTerms);
    };
    PolynomialParser.prototype.polynomialTerm = function () {
        var ret = null;
        var coefficient;
        var variableTerms = [];
        var token = this.lex.getTokenAndAdvance();
        if (PolynomialTokenType.Number === token.type) {
            coefficient = new RationalNumber_1.RationalNumber(token.value);
            token = this.lex.getTokenAndAdvance();
            if (PolynomialTokenType.Asterisk === token.type) {
                var vt = this.variableTerm();
                if (null !== vt) {
                    variableTerms.push(vt);
                }
            }
            else {
                this.lex.revert();
            }
            ret = new Polynomial_1.PolynomialTerm(coefficient, variableTerms);
        }
        else {
            if (PolynomialTokenType.Variable === token.type) {
                this.lex.revert();
                coefficient = new RationalNumber_1.RationalNumber(1);
                var vt = this.variableTerm();
                if (null !== vt) {
                    variableTerms.push(vt);
                }
                ret = new Polynomial_1.PolynomialTerm(coefficient, variableTerms);
            }
        }
        token = this.lex.getTokenAndAdvance();
        while (PolynomialTokenType.Asterisk === token.type) {
            var vt = this.variableTerm();
            if (null !== vt) {
                variableTerms.push(vt);
            }
            token = this.lex.getTokenAndAdvance();
        }
        this.lex.revert();
        return ret;
    };
    PolynomialParser.prototype.variableTerm = function () {
        var ret = null;
        var variable;
        var exponent = 1;
        var token = this.lex.getTokenAndAdvance();
        if (PolynomialTokenType.Variable === token.type) {
            variable = token.variable;
            token = this.lex.getTokenAndAdvance();
            if (PolynomialTokenType.Caret === token.type) {
                token = this.lex.getTokenAndAdvance();
                if (PolynomialTokenType.Number === token.type) {
                    exponent = token.value;
                }
                else {
                    throw Error("Exponent missing");
                }
            }
            else {
                this.lex.revert();
            }
            ret = new Polynomial_1.VariableTerm(variable, exponent);
        }
        return ret;
    };
    return PolynomialParser;
}());
exports.PolynomialParser = PolynomialParser;
/*
expr			: LPARAM polynomial RPARAM
                | LPARAM polynomial RPARAM CARET number
                | LPARAM polynomial LPARAM (PLUS | MINUS | ASTREISK | SLASH) expr+
                | polynomial
polynomial		: (PLUS | MINUS) polynomialTerm ((PLUS | MINUS) polynomialTerm)+
                | polynomialTerm ((PLUS | MINUS) polynomialTerm)+
polynomialTerm	: number (ASTERISK variableTerm)+
                | variableTerm (ASTERISK variableTerm)+
variableTerm	: variable
                | variable CARET number
*/ 
//# sourceMappingURL=PolynomialEvaluator.js.map