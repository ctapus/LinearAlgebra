/// <reference path="Queue.ts"/>
/// <reference path="Stack.ts"/>
var ArithmeticEvaluator = /** @class */ (function () {
    function ArithmeticEvaluator() {
    }
    ArithmeticEvaluator.isNumber = function (code) {
        return /^\d/.test(code);
    };
    ArithmeticEvaluator.isOperator = function (code) {
        return /[\+\-\*\/\^]/.test(code);
    };
    ArithmeticEvaluator.isLeftAssociativeOperator = function (operator) {
        return /[\+\-\*\/]/.test(operator);
    };
    ArithmeticEvaluator.isRightAssociativeOperator = function (operator) {
        return /[\^]/.test(operator);
    };
    ArithmeticEvaluator.precedence = function (operator) {
        if (/[\+\-]/.test(operator)) {
            return 1;
        }
        if (/[\*\/]/.test(operator)) {
            return 2;
        }
        if (/[\^]/.test(operator)) {
            return 3;
        }
        throw "Unknown operator.";
    };
    ArithmeticEvaluator.toReversePolishNotation = function (code) {
        var tokens = code.match(/\(|\)|\d+(\.\d+)?|\w+|[\+\-\*\/\^]/g);
        var i = 0;
        var outputQueue = new Queue();
        var operatorStack = new Stack();
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
                    throw "Mismatched parentheses.";
                }
            }
            i++;
        }
        while (!operatorStack.isEmpty()) {
            if (operatorStack.peek() === "(") {
                throw "Mismatched parentheses.";
            }
            else {
                outputQueue.enqueue(operatorStack.pop());
            }
        }
        return outputQueue.toArray();
    };
    ArithmeticEvaluator.evaluateFromRPN = function (tokens) {
        var stack = new Stack();
        for (var i = 0; i < tokens.length; i++) {
            if (!this.isOperator(tokens[i])) {
                stack.push(parseFloat(tokens[i]));
            }
            else {
                var op1 = stack.pop();
                var op2 = stack.pop();
                switch (tokens[i]) {
                    case "+":
                        stack.push(op2 + op1);
                        break;
                    case "-":
                        stack.push(op2 - op1);
                        break;
                    case "*":
                        stack.push(op2 * op1);
                        break;
                    case "/":
                        stack.push(op2 / op1);
                        break;
                    case "^":
                        stack.push(Math.pow(op2, op1));
                        break;
                }
            }
        }
        return stack.pop();
    };
    return ArithmeticEvaluator;
}());
var TokenType;
(function (TokenType) {
    TokenType[TokenType["Plus"] = 0] = "Plus";
    TokenType[TokenType["Minus"] = 1] = "Minus";
    TokenType[TokenType["Multiply"] = 2] = "Multiply";
    TokenType[TokenType["Divide"] = 3] = "Divide";
    TokenType[TokenType["Exponent"] = 4] = "Exponent";
    TokenType[TokenType["Number"] = 5] = "Number";
    TokenType[TokenType["LParen"] = 6] = "LParen";
    TokenType[TokenType["RParen"] = 7] = "RParen";
    TokenType[TokenType["End"] = 8] = "End";
    TokenType[TokenType["Unknown"] = 9] = "Unknown";
})(TokenType || (TokenType = {}));
var Token = /** @class */ (function () {
    function Token(type, value) {
        this.type = type;
        this.value = value;
    }
    return Token;
}());
var Lexer = /** @class */ (function () {
    function Lexer(input) {
        this.tokens = input.replace(" ", "").match(/\(|\)|\d+(\.\d+)?|[\+\-\*\/\^]/g);
        this.tokenIndex = 0;
    }
    Lexer.prototype.getNextToken = function () {
        if (this.tokens.length === this.tokenIndex) {
            return new Token(TokenType.End);
        }
        var input = this.tokens[this.tokenIndex++];
        return this.getToken(input);
    };
    Lexer.prototype.getCurrentToken = function () {
        if (this.tokens.length - 1 === this.tokenIndex) {
            return new Token(TokenType.End);
        }
        var input = this.tokens[this.tokenIndex];
        return this.getToken(input);
    };
    Lexer.prototype.revert = function () {
        if (this.tokenIndex <= 0)
            throw Error("Index out of range");
        this.tokenIndex--;
    };
    Lexer.prototype.getToken = function (input) {
        if (/\+/.test(input)) {
            return new Token(TokenType.Plus);
        }
        if (/\-/.test(input)) {
            return new Token(TokenType.Minus);
        }
        if (/\*/.test(input)) {
            return new Token(TokenType.Multiply);
        }
        if (/\//.test(input)) {
            return new Token(TokenType.Divide);
        }
        if (/\^/.test(input)) {
            return new Token(TokenType.Exponent);
        }
        if (/\d+(\.\d+)?/.test(input)) {
            return new Token(TokenType.Number, parseFloat(input));
        }
        if (/\(/.test(input)) {
            return new Token(TokenType.LParen);
        }
        if (/\)/.test(input)) {
            return new Token(TokenType.RParen);
        }
        return new Token(TokenType.Unknown);
    };
    return Lexer;
}());
var Parser = /** @class */ (function () {
    function Parser() {
    }
    Parser.prototype.parse = function (code) {
        this.lex = new Lexer(code);
        var expression = this.fourthOrderOperators();
        var token = this.lex.getCurrentToken(); //is already advanced because of number()
        if (token.type === TokenType.End) {
            return expression;
        }
        throw Error("End expected");
    };
    //addition and substraction
    Parser.prototype.fourthOrderOperators = function () {
        var component1 = this.thirdOrderOperators();
        var token = this.lex.getNextToken();
        while (token.type === TokenType.Plus || token.type === TokenType.Minus) {
            var component2 = this.thirdOrderOperators();
            if (token.type === TokenType.Plus) {
                component1 = component1.add(component2);
            }
            else if (token.type === TokenType.Minus) {
                component1 = component1.sub(component2);
            }
            token = this.lex.getNextToken();
        }
        this.lex.revert();
        return component1;
    };
    //multiplication and division
    Parser.prototype.thirdOrderOperators = function () {
        var factor1 = this.secondOrderOperators();
        var token = this.lex.getNextToken();
        while (token.type === TokenType.Multiply || token.type === TokenType.Divide) {
            var factor2 = this.secondOrderOperators();
            if (token.type === TokenType.Multiply) {
                factor1 = factor1.mult(factor2);
            }
            else if (token.type === TokenType.Divide) {
                factor1 = factor1.div(factor2);
            }
            token = this.lex.getNextToken();
        }
        this.lex.revert();
        return factor1;
    };
    //exponents and roots
    Parser.prototype.secondOrderOperators = function () {
        var factor1 = this.firstOrderOperators();
        var token = this.lex.getNextToken();
        while (token.type === TokenType.Exponent) {
            var factor2 = this.firstOrderOperators();
            factor1 = factor1.exp(factor2);
            token = this.lex.getNextToken();
        }
        this.lex.revert();
        return factor1;
    };
    //numbers and parantheses
    Parser.prototype.firstOrderOperators = function () {
        var value = new RationalNumber(1);
        var token = this.lex.getNextToken();
        if (token.type === TokenType.Plus || token.type === TokenType.Minus) {
            if (token.type === TokenType.Minus) {
                value = value.mult(-1);
            }
            token = this.lex.getNextToken();
        }
        if (token.type === TokenType.LParen) {
            value = value.mult(this.fourthOrderOperators());
            token = this.lex.getNextToken();
            if (token.type !== TokenType.RParen) {
                throw Error("Unbalanced parenthesis");
            }
        }
        else if (token.type === TokenType.Number) {
            value = value.mult(token.value);
        }
        else
            throw Error("Not a number");
        return value;
    };
    return Parser;
}());
/*
    public static evaluate(expresion: string): RationalNumber {
    var digitPattern = new RegExp('0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9');
    var signPattern = new RegExp('\+|\-');
    var numberPattern = new RegExp('[' + signPattern + ']' + '{' + digitPattern + '}');
    var factorPattern = new RegExp(numberPattern + '|\(' + expressionPattern + '\)');
    var componentPattern = new RegExp(factorPattern + '[{( \* | \/ )' + factorPattern + '}]');
    var expressionPattern = new RegExp(componentPattern + '[{( \+ | \-)' + componentPattern + '}]');
}*/
/*
exprr: 4thORDER+;
4thORDER: component1=3rdORDER ((PLUS|MINUS) component2=3rdORDER)+;
3rdORDER: factor1=2NDORDER ((MULTIPLY|DIVIDE) factor1=2ndORDER)+
2ndORDER: factor1=1stORDER (EXPONENT factor2=1stORDER)+
1stORDER: (PLUS|MINUS|empty) (LPAREN value=4thORDER RPAREN| NUMBER)
*/ 
//# sourceMappingURL=ArithmeticEvaluator.js.map