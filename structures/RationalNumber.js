"use strict";
exports.__esModule = true;
var ArithmeticEvaluator_1 = require("../structures/ArithmeticEvaluator");
var Queue_1 = require("../structures/Queue");
var Stack_1 = require("../structures/Stack");
var RationalNumber = /** @class */ (function () {
    function RationalNumber(n, d) {
        if (d === void 0) { d = 1; }
        if (d === 0) {
            throw new Error("Division by zero!");
        }
        // todo: potential for overflow. When Math.sign becomes available in TypeScript use it instead of the multiplication
        var sign = n * d >= 0 ? 1 : -1;
        this.numerator = sign * Math.abs(n);
        this.denominator = Math.abs(d);
    }
    RationalNumber.prototype.greatestCommonDivisor = function (a, b) {
        return b ? this.greatestCommonDivisor(b, a % b) : a;
    };
    RationalNumber.prototype.leastCommonMultiple = function (a, b) {
        return Math.abs(a * b / this.greatestCommonDivisor(a, b));
    };
    RationalNumber.prototype.simplifiedForm = function () {
        var gcd = this.greatestCommonDivisor(this.numerator, this.denominator);
        return new RationalNumber(this.numerator / gcd, this.denominator / gcd);
    };
    RationalNumber.prototype.equals = function (x) {
        var rn1 = this.simplifiedForm();
        if (typeof x === "number") {
            return rn1.numerator === x && rn1.denominator === 1;
        }
        else {
            var rn2 = x.simplifiedForm();
            return rn1.numerator === rn2.numerator && rn1.denominator === rn2.denominator;
        }
    };
    RationalNumber.prototype.lt = function (x) {
        var rn1 = this.simplifiedForm();
        if (typeof x === "number") {
            return rn1.numerator < x * rn1.denominator;
        }
        else {
            var rn2 = x.simplifiedForm();
            return rn1.numerator * rn2.denominator < rn2.numerator * rn1.denominator;
        }
    };
    RationalNumber.prototype.le = function (x) {
        var rn1 = this.simplifiedForm();
        if (typeof x === "number") {
            return rn1.numerator <= x * rn1.denominator;
        }
        else {
            var rn2 = x.simplifiedForm();
            return rn1.numerator * rn2.denominator <= rn2.numerator * rn1.denominator;
        }
    };
    RationalNumber.prototype.gt = function (x) {
        var rn1 = this.simplifiedForm();
        if (typeof x === "number") {
            return rn1.numerator > x * rn1.denominator;
        }
        else {
            var rn2 = x.simplifiedForm();
            return rn1.numerator * rn2.denominator > rn2.numerator * rn1.denominator;
        }
    };
    RationalNumber.prototype.ge = function (x) {
        var rn1 = this.simplifiedForm();
        if (typeof x === "number") {
            return rn1.numerator >= x * rn1.denominator;
        }
        else {
            var rn2 = x.simplifiedForm();
            return rn1.numerator * rn2.denominator >= rn2.numerator * rn1.denominator;
        }
    };
    // multiplicative inverse
    RationalNumber.prototype.reciprocal = function () {
        if (this.denominator === 0) {
            throw new Error("Division by zero!");
        }
        return new RationalNumber(this.denominator, this.numerator);
    };
    // additive inverse
    RationalNumber.prototype.opposite = function () {
        return new RationalNumber(this.numerator * (-1), this.denominator);
    };
    RationalNumber.prototype.add = function (x) {
        if (typeof x === "number") {
            return new RationalNumber((this.numerator + x * this.denominator), this.denominator);
        }
        else {
            var lcm = this.leastCommonMultiple(this.denominator, x.denominator);
            var n1 = this.numerator * lcm / this.denominator;
            var n2 = x.numerator * lcm / x.denominator;
            return new RationalNumber(n1 + n2, lcm);
        }
    };
    RationalNumber.prototype.sub = function (x) {
        if (typeof x === "number") {
            return new RationalNumber((this.numerator - x * this.denominator), this.denominator);
        }
        else {
            var lcm = this.leastCommonMultiple(this.denominator, x.denominator);
            var n1 = this.numerator * lcm / this.denominator;
            var n2 = x.numerator * lcm / x.denominator;
            return new RationalNumber(n1 - n2, lcm);
        }
    };
    RationalNumber.prototype.mult = function (x) {
        if (typeof x === "number") {
            return new RationalNumber((this.numerator * x), this.denominator);
        }
        else {
            return new RationalNumber((this.numerator * x.numerator), x.denominator * this.denominator);
        }
    };
    RationalNumber.prototype.div = function (x) {
        if (typeof x === "number") {
            return new RationalNumber((this.numerator), this.denominator * x);
        }
        else {
            return new RationalNumber((this.numerator * x.denominator), x.numerator * this.denominator);
        }
    };
    RationalNumber.prototype.exp = function (x) {
        if (typeof x === "number") {
            return new RationalNumber(Math.pow(this.numerator, x), Math.pow(this.denominator, x));
        }
        else {
            if (this.denominator !== 1) {
                throw Error("Exponentiation with rational powers not supported.");
            }
            return new RationalNumber(Math.pow(this.numerator, x.numerator), Math.pow(this.denominator, x.numerator));
        }
    };
    RationalNumber.prototype.toNumber = function () {
        return this.numerator / this.denominator;
    };
    RationalNumber.prototype.toString = function () {
        return this.numerator.toString() + (1 === this.denominator ? "" : "/" + this.denominator.toString());
    };
    RationalNumber.prototype.deepCopy = function () {
        return new RationalNumber(this.numerator, this.denominator);
    };
    RationalNumber.fromString = function (code) {
        var p = new ArithmeticEvaluator_1.Parser();
        return p.parse(code);
    };
    RationalNumber.isNumber = function (code) {
        return /^\d/.test(code);
    };
    RationalNumber.isOperator = function (code) {
        return /[\+\-\*\/\^]/.test(code);
    };
    RationalNumber.isLeftAssociativeOperator = function (operator) {
        return /[\+\-\*\/]/.test(operator);
    };
    RationalNumber.isRightAssociativeOperator = function (operator) {
        return /[\^]/.test(operator);
    };
    RationalNumber.precedence = function (operator) {
        if (/[\+\-]/.test(operator)) {
            return 1;
        }
        if (/[\*\/]/.test(operator)) {
            return 2;
        }
        if (/[\^]/.test(operator)) {
            return 3;
        }
        throw new Error("Unknown operator.");
    };
    RationalNumber.toReversePolishNotation = function (code) {
        var tokens = code.match(/\(|\)|\d+(\.\d+)?|\w+|[\+\-\*\/\^]/g);
        var i = 0;
        var outputQueue = new Queue_1.Queue();
        var operatorStack = new Stack_1.Stack();
        while (i < tokens.length) {
            if (this.isNumber(tokens[i])) {
                outputQueue.enqueue(tokens[i]);
            }
            else if (this.isOperator(tokens[i])) {
                var op1 = tokens[i];
                while (!operatorStack.isEmpty() && this.isOperator(operatorStack.peek())) {
                    if ((this.isLeftAssociativeOperator(op1) && (this.precedence(op1) <= this.precedence(operatorStack.peek()))) ||
                        (this.isRightAssociativeOperator(op1) && (this.precedence(op1) < this.precedence(operatorStack.peek())))) {
                        outputQueue.enqueue(operatorStack.pop());
                    }
                    else {
                        break;
                    }
                }
                operatorStack.push(op1);
            }
            else if (tokens[i] === "(") {
                operatorStack.push(tokens[i]);
            }
            else if (tokens[i] === ")") {
                while (!operatorStack.isEmpty() && operatorStack.peek() !== "(") {
                    outputQueue.enqueue(operatorStack.pop());
                }
                if (!operatorStack.isEmpty() && operatorStack.peek() === "(") {
                    operatorStack.pop();
                }
                else {
                    throw new Error("Mismatched parentheses.");
                }
            }
            i++;
        }
        while (!operatorStack.isEmpty()) {
            if (operatorStack.peek() === "(") {
                throw new Error("Mismatched parentheses.");
            }
            else {
                outputQueue.enqueue(operatorStack.pop());
            }
        }
        return outputQueue.toArray();
    };
    RationalNumber.evaluateFromRPN = function (tokens) {
        var stack = new Stack_1.Stack();
        for (var i = 0; i < tokens.length; i++) {
            if (!this.isOperator(tokens[i])) {
                stack.push(new RationalNumber(parseFloat(tokens[i])));
            }
            else {
                var op1 = stack.pop();
                var op2 = stack.pop();
                switch (tokens[i]) {
                    case "+":
                        stack.push(op2.add(op1));
                        break;
                    case "-":
                        stack.push(op2.sub(op1));
                        break;
                    case "*":
                        stack.push(op2.mult(op1));
                        break;
                    case "/":
                        stack.push(op2.div(op1));
                        break;
                    case "^":
                        stack.push(op2.exp(op1.toNumber()));
                        break;
                }
            }
        }
        return stack.pop().simplifiedForm();
    };
    return RationalNumber;
}());
exports.RationalNumber = RationalNumber;
//# sourceMappingURL=RationalNumber.js.map