/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/presenters/MatrixPresenter.ts"
/*!*******************************************!*\
  !*** ./src/presenters/MatrixPresenter.ts ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MatrixPresenter: () => (/* binding */ MatrixPresenter)
/* harmony export */ });
class MatrixPresenter {
    static printTableMatrix(matrix, container) {
        let rowEchelonForm = matrix.isRowEchelonForm();
        let reducedRowEchelonForm = rowEchelonForm ? matrix.isReducedRowEchelonForm() : false;
        let table = document.createElement("table");
        table.className = "matrix";
        if (reducedRowEchelonForm) {
            table.className = "reducedRowEchelonMatrix";
        }
        else if (rowEchelonForm) {
            table.className = "rowEchelonMatrix";
        }
        for (let i = 0; i < matrix.m; i++) {
            let tr = document.createElement("tr");
            for (let j = 0; j < matrix.n; j++) {
                let td = document.createElement("td");
                td.innerText = matrix.elements[i][j].toString();
                td.className = "matrixElement";
                if (reducedRowEchelonForm && j === i) {
                    td.className = "pivotElement";
                }
                tr.append(td);
            }
            table.append(tr);
        }
        container.append(table);
        container.append(document.createElement("br"));
    }
    static printMatrixEquality(matrix1, opeartor, matrix2, result, container) {
        let table = document.createElement("table");
        let tr0 = document.createElement("tr");
        table.append(tr0);
        let td01 = document.createElement("td");
        tr0.append(td01);
        let td02 = document.createElement("td");
        td02.innerText = opeartor;
        td02.style.verticalAlign = "middle";
        td02.style.paddingLeft = "5px";
        td02.style.paddingRight = "5px";
        tr0.append(td02);
        let td03 = document.createElement("td");
        tr0.append(td03);
        let td04 = document.createElement("td");
        td04.innerText = "=";
        td04.style.verticalAlign = "middle";
        td04.style.paddingLeft = "5px";
        td04.style.paddingRight = "5px";
        tr0.append(td04);
        let td05 = document.createElement("td");
        tr0.append(td05);
        let table1 = document.createElement("table");
        table1.className = "matrix";
        for (let i = 0; i < matrix1.m; i++) {
            let tr = document.createElement("tr");
            for (let j = 0; j < matrix1.n; j++) {
                let td = document.createElement("td");
                td.innerText = matrix1.elements[i][j].toString();
                td.style.paddingLeft = "5px";
                td.style.paddingRight = "5px";
                tr.append(td);
            }
            table1.append(tr);
        }
        td01.append(table1);
        table1 = document.createElement("table");
        table1.className = "matrix";
        for (let i = 0; i < matrix2.m; i++) {
            let tr = document.createElement("tr");
            for (let j = 0; j < matrix2.n; j++) {
                let td = document.createElement("td");
                td.innerText = matrix2.elements[i][j].toString();
                td.style.paddingLeft = "5px";
                td.style.paddingRight = "5px";
                tr.append(td);
            }
            table1.append(tr);
        }
        td03.append(table1);
        table1 = document.createElement("table");
        table1.className = "matrix";
        for (let i = 0; i < result.m; i++) {
            let tr = document.createElement("tr");
            for (let j = 0; j < result.n; j++) {
                let td = document.createElement("td");
                td.innerText = result.elements[i][j].toString();
                td.style.paddingLeft = "5px";
                td.style.paddingRight = "5px";
                tr.append(td);
            }
            table1.append(tr);
        }
        td05.append(table1);
        container.append(table);
        container.append(document.createElement("br"));
    }
    static printMatrixEquality2(matrix1, opeartor1, matrix2, matrix3, opeartor2, matrix4, container) {
        let table = document.createElement("table");
        let tr0 = document.createElement("tr");
        table.append(tr0);
        let td01 = document.createElement("td");
        tr0.append(td01);
        let td02 = document.createElement("td");
        td02.innerText = opeartor1;
        td02.style.verticalAlign = "middle";
        td02.style.paddingLeft = "5px";
        td02.style.paddingRight = "5px";
        tr0.append(td02);
        let td03 = document.createElement("td");
        tr0.append(td03);
        let td04 = document.createElement("td");
        td04.innerText = "=";
        td04.style.verticalAlign = "middle";
        td04.style.paddingLeft = "5px";
        td04.style.paddingRight = "5px";
        tr0.append(td04);
        let td05 = document.createElement("td");
        tr0.append(td05);
        let td06 = document.createElement("td");
        td06.innerText = opeartor2;
        td06.style.verticalAlign = "middle";
        td06.style.paddingLeft = "5px";
        td06.style.paddingRight = "5px";
        tr0.append(td06);
        let td07 = document.createElement("td");
        tr0.append(td07);
        let table1 = document.createElement("table");
        table1.className = "matrix";
        for (let i = 0; i < matrix1.m; i++) {
            let tr = document.createElement("tr");
            for (let j = 0; j < matrix1.n; j++) {
                let td = document.createElement("td");
                td.innerText = matrix1.elements[i][j].toString();
                td.style.paddingLeft = "5px";
                td.style.paddingRight = "5px";
                tr.append(td);
            }
            table1.append(tr);
        }
        td01.append(table1);
        table1 = document.createElement("table");
        table1.className = "matrix";
        for (let i = 0; i < matrix2.m; i++) {
            let tr = document.createElement("tr");
            for (let j = 0; j < matrix2.n; j++) {
                let td = document.createElement("td");
                td.innerText = matrix2.elements[i][j].toString();
                td.style.paddingLeft = "5px";
                td.style.paddingRight = "5px";
                tr.append(td);
            }
            table1.append(tr);
        }
        td03.append(table1);
        table1 = document.createElement("table");
        table1.className = "matrix";
        for (let i = 0; i < matrix3.m; i++) {
            let tr = document.createElement("tr");
            for (let j = 0; j < matrix3.n; j++) {
                let td = document.createElement("td");
                td.innerText = matrix3.elements[i][j].toString();
                td.style.paddingLeft = "5px";
                td.style.paddingRight = "5px";
                tr.append(td);
            }
            table1.append(tr);
        }
        td05.append(table1);
        table1 = document.createElement("table");
        table1.className = "matrix";
        for (let i = 0; i < matrix4.m; i++) {
            let tr = document.createElement("tr");
            for (let j = 0; j < matrix4.n; j++) {
                let td = document.createElement("td");
                td.innerText = matrix4.elements[i][j].toString();
                td.style.paddingLeft = "5px";
                td.style.paddingRight = "5px";
                tr.append(td);
            }
            table1.append(tr);
        }
        td07.append(table1);
        container.append(table);
        container.append(document.createElement("br"));
    }
}


/***/ },

/***/ "./src/structures/ArithmeticEvaluator.ts"
/*!***********************************************!*\
  !*** ./src/structures/ArithmeticEvaluator.ts ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArithmeticEvaluator: () => (/* binding */ ArithmeticEvaluator),
/* harmony export */   Lexer: () => (/* binding */ Lexer),
/* harmony export */   Parser: () => (/* binding */ Parser),
/* harmony export */   Token: () => (/* binding */ Token),
/* harmony export */   TokenType: () => (/* binding */ TokenType)
/* harmony export */ });
/* harmony import */ var _Queue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Queue */ "./src/structures/Queue.ts");
/* harmony import */ var _RationalNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RationalNumber */ "./src/structures/RationalNumber.ts");
/* harmony import */ var _Stack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Stack */ "./src/structures/Stack.ts");



class ArithmeticEvaluator {
    static toReversePolishNotation(code) {
        const tokens = code.match(/\(|\)|\d+(\.\d+)?|\w+|[\+\-\*\/\^]/g);
        let i = 0;
        const outputQueue = new _Queue__WEBPACK_IMPORTED_MODULE_0__.Queue();
        const operatorStack = new _Stack__WEBPACK_IMPORTED_MODULE_2__.Stack();
        while (i < tokens.length) {
            if (this.isNumber(tokens[i])) {
                outputQueue.enqueue(tokens[i]);
            }
            else if (this.isOperator(tokens[i])) {
                let op1 = tokens[i];
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
    }
    static evaluateFromRPN(tokens) {
        const stack = new _Stack__WEBPACK_IMPORTED_MODULE_2__.Stack();
        for (let i = 0; i < tokens.length; i++) {
            if (!this.isOperator(tokens[i])) {
                stack.push(parseFloat(tokens[i]));
            }
            else {
                let op1 = stack.pop();
                let op2 = stack.pop();
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
                        stack.push(op2 ** op1);
                        break;
                }
            }
        }
        return stack.pop();
    }
    static isNumber(code) {
        return /^\d/.test(code);
    }
    static isOperator(code) {
        return /[\+\-\*\/\^]/.test(code);
    }
    static isLeftAssociativeOperator(operator) {
        return /[\+\-\*\/]/.test(operator);
    }
    static isRightAssociativeOperator(operator) {
        return /[\^]/.test(operator);
    }
    static precedence(operator) {
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
    }
}
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
class Token {
    type;
    value;
    constructor(type, value) {
        this.type = type;
        this.value = value;
    }
}
class Lexer {
    tokens;
    tokenIndex;
    constructor(input) {
        this.tokens = input.replace(" ", "").match(/\(|\)|\d+(\.\d+)?|[\+\-\*\/\^]/g);
        this.tokenIndex = 0;
    }
    getNextToken() {
        if (this.tokens.length === this.tokenIndex) {
            return new Token(TokenType.End);
        }
        let input = this.tokens[this.tokenIndex++];
        return this.getToken(input);
    }
    getCurrentToken() {
        if (this.tokens.length - 1 === this.tokenIndex) {
            return new Token(TokenType.End);
        }
        let input = this.tokens[this.tokenIndex];
        return this.getToken(input);
    }
    revert() {
        if (this.tokenIndex <= 0) {
            throw Error("Index out of range");
        }
        this.tokenIndex--;
    }
    getToken(input) {
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
    }
}
class Parser {
    lex;
    parse(code) {
        this.lex = new Lexer(code);
        const expression = this.fourthOrderOperators();
        const token = this.lex.getCurrentToken(); // is already advanced because of number()
        if (token.type === TokenType.End) {
            return expression;
        }
        throw Error("End expected");
    }
    // addition and substraction
    fourthOrderOperators() {
        let component1 = this.thirdOrderOperators();
        let token = this.lex.getNextToken();
        while (token.type === TokenType.Plus || token.type === TokenType.Minus) {
            let component2 = this.thirdOrderOperators();
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
    }
    // multiplication and division
    thirdOrderOperators() {
        let factor1 = this.secondOrderOperators();
        let token = this.lex.getNextToken();
        while (token.type === TokenType.Multiply || token.type === TokenType.Divide) {
            let factor2 = this.secondOrderOperators();
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
    }
    // exponents and roots
    secondOrderOperators() {
        let factor1 = this.firstOrderOperators();
        let token = this.lex.getNextToken();
        while (token.type === TokenType.Exponent) {
            let factor2 = this.firstOrderOperators();
            factor1 = factor1.exp(factor2);
            token = this.lex.getNextToken();
        }
        this.lex.revert();
        return factor1;
    }
    // numbers and parantheses
    firstOrderOperators() {
        let value = new _RationalNumber__WEBPACK_IMPORTED_MODULE_1__.RationalNumber(1);
        let token = this.lex.getNextToken();
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
        else {
            if (token.type === TokenType.Number) {
                value = value.mult(token.value);
            }
            else {
                throw Error("Not a number");
            }
        }
        return value;
    }
}
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


/***/ },

/***/ "./src/structures/Matrix.ts"
/*!**********************************!*\
  !*** ./src/structures/Matrix.ts ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Matrix: () => (/* binding */ Matrix),
/* harmony export */   MatrixElimination: () => (/* binding */ MatrixElimination),
/* harmony export */   MatrixIdentity: () => (/* binding */ MatrixIdentity),
/* harmony export */   MatrixPermutation: () => (/* binding */ MatrixPermutation)
/* harmony export */ });
/* harmony import */ var _RationalNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RationalNumber */ "./src/structures/RationalNumber.ts");
/* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Vector */ "./src/structures/Vector.ts");


class Matrix {
    static augment(A, B) {
        if (A.m !== B.m) {
            throw new Error("The two matrices (vector) must have the same number of rows (elements).");
        }
        let ret = null;
        if (B instanceof Matrix) {
            ret = new Matrix(A.m, B.n + A.n);
            for (let i = 0; i < A.m; i++) {
                for (let j = 0; j < A.n; j++) {
                    ret.elements[i][j] = A.elements[i][j];
                }
            }
            for (let i = 0; i < B.m; i++) {
                for (let j = 0; j < B.n; j++) {
                    ret.elements[i][A.n + j] = B.elements[i][j];
                }
            }
        }
        else {
            if (B instanceof _Vector__WEBPACK_IMPORTED_MODULE_1__.Vector) {
                ret = new Matrix(A.m, A.n + 1);
                for (let i = 0; i < A.m; i++) {
                    for (let j = 0; j < A.n; j++) {
                        ret.elements[i][j] = A.elements[i][j];
                    }
                }
                for (let j = 0; j < B.m; j++) {
                    ret.elements[j][A.n] = B.elements[j];
                }
            }
        }
        return ret;
    }
    // row-multiplying transformations
    static multiplication(n, row1, row2, mult) {
        if (n < row1 || n < row2) {
            throw new Error("Column index must be less or equalt than matrix size.");
        }
        const matrix = new MatrixIdentity(n);
        matrix.elements[row1][row2] = new _RationalNumber__WEBPACK_IMPORTED_MODULE_0__.RationalNumber(mult);
        return matrix;
    }
    static randomSquare() {
        const matrix = new Matrix(Math.floor(Math.random() * 4) + 3, Math.floor(Math.random() * 4) + 3); // minimum size 3x3 matrix
        for (let i = 0; i < matrix.m; i++) {
            for (let j = 0; j < matrix.n; j++) {
                matrix.elements[i][j] = new _RationalNumber__WEBPACK_IMPORTED_MODULE_0__.RationalNumber(Math.floor(Math.random() * 100 - 50));
            }
        }
        return matrix;
    }
    static random2() {
        const numberOfUnknowns = Math.floor(Math.random() * 4 + 3); // between 3 and 7 unknonws
        const unknowns = [];
        for (let i = 0; i < numberOfUnknowns; i++) {
            unknowns[i] = Math.floor(Math.random() * 20 - 10);
        }
        // todo: change below
        const matrix = new Matrix(Math.floor(Math.random() * 4) + 3, Math.floor(Math.random() * 4) + 3);
        return matrix;
    }
    m; // rows
    n; // columns
    elements;
    constructor(m, n) {
        this.m = m;
        this.n = n;
        this.elements = [];
        for (let i = 0; i < this.m; i++) {
            this.elements[i] = [];
        }
    }
    equals(M) {
        if (this.m !== M.m || this.n !== M.n) {
            return false;
        }
        for (let i = 0; i < this.m; i++) {
            for (let j = 0; j < this.n; j++) {
                if (!this.elements[i][j].equals(M.elements[i][j])) {
                    return false;
                }
            }
        }
        return true;
    }
    add(x) {
        if (this.m !== x.m || this.n !== x.n) {
            throw new Error("Mismatched dimensions.");
        }
        const res = new Matrix(this.m, this.n);
        for (let i = 0; i < res.m; i++) {
            for (let j = 0; j < res.n; j++) {
                res.elements[i][j] = this.elements[i][j].add(x.elements[i][j]);
            }
        }
        return res;
    }
    sub(x) {
        if (this.m !== x.m || this.n !== x.n) {
            throw new Error("Mismatched dimensions.");
        }
        const res = new Matrix(this.m, this.n);
        for (let i = 0; i < res.m; i++) {
            for (let j = 0; j < res.n; j++) {
                res.elements[i][j] = this.elements[i][j].sub(x.elements[i][j]);
            }
        }
        return res;
    }
    mult(x) {
        let res = null;
        if (typeof x === "number") {
            res = new Matrix(this.m, this.n);
            for (let i = 0; i < res.m; i++) {
                for (let j = 0; j < res.n; j++) {
                    res.elements[i][j] = this.elements[i][j].mult(x);
                }
            }
        }
        else if (x instanceof _RationalNumber__WEBPACK_IMPORTED_MODULE_0__.RationalNumber) {
            res = new Matrix(this.m, this.n);
            for (let i = 0; i < res.m; i++) {
                for (let j = 0; j < res.n; j++) {
                    res.elements[i][j] = this.elements[i][j].mult(x);
                }
            }
        }
        else {
            if (x instanceof Matrix) {
                if (this.n !== x.m) {
                    throw new Error("Mismatched dimensions.");
                }
                res = new Matrix(this.m, x.n);
                for (let i = 0; i < res.m; i++) {
                    for (let j = 0; j < res.n; j++) {
                        let sum = new _RationalNumber__WEBPACK_IMPORTED_MODULE_0__.RationalNumber(0);
                        for (let k = 0; k < this.n; k++) {
                            sum = sum.add(this.elements[i][k].mult(x.elements[k][j]));
                        }
                        res.elements[i][j] = sum;
                    }
                }
            }
        }
        return res;
    }
    vectorProduct(v) {
        if (this.n !== v.m) {
            throw new Error("Mismatched dimensions.");
        }
        const res = new _Vector__WEBPACK_IMPORTED_MODULE_1__.ColumnVector(v.m);
        for (let i = 0; i < this.m; i++) {
            let sum = new _RationalNumber__WEBPACK_IMPORTED_MODULE_0__.RationalNumber(0);
            for (let j = 0; j < this.n; j++) {
                sum = sum.add(this.elements[i][j].mult(v.elements[j]));
            }
            res.elements[i] = sum;
        }
        return res;
    }
    transpose() {
        const ret = new Matrix(this.n, this.m);
        for (let i = 0; i < this.m; i++) {
            for (let j = 0; j < this.n; j++) {
                ret.elements[j][i] = this.elements[i][j];
            }
        }
        return ret;
    }
    deepCopy() {
        const ret = new Matrix(this.m, this.n);
        for (let i = 0; i < this.m; i++) {
            for (let j = 0; j < this.n; j++) {
                ret.elements[i][j] = this.elements[i][j];
            }
        }
        return ret;
    }
    switchRows(idx1, idx2) {
        if (this.m < idx1 || this.m < idx2) {
            return;
        }
        for (let i = 0; i < this.n; i++) {
            const tmp = this.elements[idx1][i];
            this.elements[idx1][i] = this.elements[idx2][i];
            this.elements[idx2][i] = tmp;
        }
    }
    multiplyRow(idx, scalar) {
        if (this.m < idx) {
            return;
        }
        for (let i = 0; i < this.n; i++) {
            this.elements[idx][i] = this.elements[idx][i].mult(scalar).simplifiedForm();
        }
    }
    addRows(idx1, idx2, scalar) {
        if (this.m < idx1 || this.m < idx2) {
            return;
        }
        for (let i = 0; i < this.n; i++) {
            this.elements[idx1][i] = this.elements[idx2][i].mult(scalar).add(this.elements[idx1][i]).simplifiedForm();
        }
    }
    addRow1ToRow2(idx1, scalar1, idx2, scalar2) {
        if (this.m < idx1 || this.m < idx2) {
            return;
        }
        for (let i = 0; i < this.n; i++) {
            this.elements[idx2][i] = this.elements[idx2][i].mult(scalar2).add(this.elements[idx1][i].mult(scalar1)).simplifiedForm();
        }
    }
    // a square matrix is a matrix with the same number of rows and columns
    isSquare() {
        return this.m === this.n;
    }
    // a diagonal matrix is a matrix in which the entries outside the main diagonal are all zero
    isDiagonal() {
        for (let i = 0; i < this.m; i++) {
            for (let j = 0; j < this.n; j++) {
                if (i === j) {
                    continue;
                }
                if (!this.elements[i][j].equals(new _RationalNumber__WEBPACK_IMPORTED_MODULE_0__.RationalNumber(0))) {
                    return false;
                }
            }
        }
        return true;
    }
    // the identity matrix of size n is the n × n square matrix with ones on the main diagonal and zeros elsewhere
    // [ALIASES]: unit matrix
    isIdentity() {
        if (this.m !== this.n) {
            throw new Error("Not a square matrix.");
        }
        for (let i = 0; i < this.m; i++) {
            for (let j = 0; j < this.n; j++) {
                if (i === j) {
                    if (!this.elements[i][j].equals(new _RationalNumber__WEBPACK_IMPORTED_MODULE_0__.RationalNumber(1))) {
                        return false;
                    }
                    continue;
                }
                if (!this.elements[i][j].equals(new _RationalNumber__WEBPACK_IMPORTED_MODULE_0__.RationalNumber(0))) {
                    return false;
                }
            }
        }
        return true;
    }
    // a matrix is normal if it commutes with its conjugate transpose
    isNormal() {
        throw new Error("Not implemented");
    }
    // the conjugate transpose of an m-by-n matrix A with complex entries is the n-by-m matrix A∗ obtained from A
    // by taking the transpose and then taking the complex conjugate of each entry
    // [ALIASES]: Hermitian transpose
    toConjugateTranspose() {
        throw new Error("Not implemented");
    }
    isUpperTriangular() {
        // todo: check if definition is valid for a non square matrix
        // if (this.m !== this.n) { throw new Error("Not a square matrix."); }
        for (let i = 1; i < this.m; i++) {
            for (let j = 0; j < i; j++) {
                if (!this.elements[i][j].equals(new _RationalNumber__WEBPACK_IMPORTED_MODULE_0__.RationalNumber(0))) {
                    return false;
                }
            }
        }
        return true;
    }
    isLowerTriangular() {
        // todo: check if definition is valid for a non square matrix
        // if (this.m !== this.n) { throw new Error("Not a square matrix."); }
        for (let i = 0; i < this.m; i++) {
            for (let j = i + 1; j < this.n; j++) {
                if (!this.elements[i][j].equals(new _RationalNumber__WEBPACK_IMPORTED_MODULE_0__.RationalNumber(0))) {
                    return false;
                }
            }
        }
        return true;
    }
    // a symmetric matrix is a square matrix that is equal to its transpose
    isSymmetric() {
        if (this.m !== this.n) {
            throw new Error("Not a square matrix.");
        }
        for (let i = 0; i < this.m; i++) {
            for (let j = 0; j < this.n; j++) {
                if (!this.elements[i][j].equals(this.elements[j][i])) {
                    return false;
                }
            }
        }
        return true;
    }
    // an orthogonal matrix is a square matrix with real entries whose columns and rows are orthogonal unit vectors
    // [ALIASES]: real orthogonal matrix
    isOrthogonal() {
        const MT = this.transpose();
        return this.mult(MT).isIdentity();
    }
    isRowEchelonForm() {
        let foundZeroRow = false;
        // all nonzero rows (rows with at least one nonzero element) are above any rows of all zeroes
        // (all zero rows, if any, belong at the bottom of the matrix)
        for (let i = 0; i < this.m; i++) {
            if (this.isZeroRow(i)) {
                foundZeroRow = true;
            }
            else {
                if (foundZeroRow) {
                    return false;
                }
            } // if current row is not zero, but a previous row is zero, then matrix is not in row echelon form
        }
        // the leading coefficient (the first nonzero number from the left, also called the pivot) of a nonzero row
        // is always strictly to the right of the leading coefficient of the row above it
        let previousIdx = -1;
        for (let i = 0; i < this.m; i++) {
            const currentPivotIdx = this.rowPivotPosition(i);
            if (0 > currentPivotIdx) {
                continue;
            } // this is a zero row, no pivot
            // leading coefficient must be 1
            if (!this.elements[i][currentPivotIdx].equals(new _RationalNumber__WEBPACK_IMPORTED_MODULE_0__.RationalNumber(1))) {
                return false;
            }
            if (previousIdx < currentPivotIdx) {
                previousIdx = currentPivotIdx;
            }
            else {
                return false;
            }
        }
        return true;
    }
    isReducedRowEchelonForm() {
        if (!this.isRowEchelonForm()) {
            return false;
        }
        // each leading coefficient is the only nonzero entry in its column
        for (let i = 0; i < this.m; i++) {
            const pivotPosition = this.rowPivotPosition(i);
            if (1 < this.numberOfNonZeroElementForColumn(pivotPosition)) {
                return false;
            }
        }
        return true;
    }
    toReducedRowEchelonForm() {
        const res = this.deepCopy();
        let lead = 0;
        for (let r = 0; r < res.m; r++) {
            if (res.n <= lead) {
                break;
            }
            let i = r;
            while (res.elements[i][lead].equals(0)) {
                i++;
                if (res.m === i) {
                    i = r;
                    lead++;
                    if (res.n === lead) {
                        lead--;
                        break;
                    }
                }
            }
            res.switchRows(i, r);
            if (!res.elements[r][lead].equals(0)) {
                res.multiplyRow(r, res.elements[r][lead].reciprocal());
            }
            for (let j = 0; j < res.m; j++) {
                if (j !== r) {
                    res.addRows(j, r, res.elements[j][lead].opposite());
                }
            }
            lead++;
        }
        return res;
    }
    determinant() {
        // todo: implement an optimized version, like A=PLU
        if (this.m !== this.n) {
            throw new Error("Determinant can only be calculated on a square matrix");
        }
        if (this.m === 1) {
            return this.elements[0][0];
        }
        let ret = new _RationalNumber__WEBPACK_IMPORTED_MODULE_0__.RationalNumber(0);
        for (let i = 0; i < this.n; i++) {
            const minor = this.elements[0][i].mult(this.cofactor(0, i).determinant());
            ret = ret.add(minor.mult((-1) ** i));
        }
        return ret;
    }
    convolute(kernel) {
        if (kernel.m !== kernel.n) {
            throw new Error("Kernel is not a square matrix.");
        }
        if (kernel.m % 2 === 0) {
            throw new Error("Kernel is not an even size matrix.");
        }
        const sz = Math.floor(kernel.m / 2);
        const res = new Matrix(this.m, this.n);
        for (let i = 0; i < this.m; i++) {
            for (let j = 0; j < this.n; j++) {
                res.elements[i][j] = new _RationalNumber__WEBPACK_IMPORTED_MODULE_0__.RationalNumber(0);
                for (let ti = 0; ti < kernel.m; ti++) {
                    if (i + ti - sz < 0 || i + ti - sz >= this.m) {
                        continue;
                    }
                    for (let tj = 0; tj < kernel.n; tj++) {
                        if (j + tj - sz < 0 || j + tj - sz >= this.n) {
                            continue;
                        }
                        res.elements[i][j] = res.elements[i][j].add(this.elements[i + ti - sz][j + tj - sz].mult(kernel.elements[ti][tj]));
                    }
                }
            }
        }
        return res;
    }
    isZeroRow(rowId) {
        for (let j = 0; j < this.n; j++) {
            if (!this.elements[rowId][j].equals(new _RationalNumber__WEBPACK_IMPORTED_MODULE_0__.RationalNumber(0))) {
                return false;
            }
        }
        return true;
    }
    rowPivotPosition(rowId) {
        for (let j = 0; j < this.n; j++) {
            if (!this.elements[rowId][j].equals(new _RationalNumber__WEBPACK_IMPORTED_MODULE_0__.RationalNumber(0))) {
                return j;
            }
        }
        return -1;
    }
    numberOfNonZeroElementForColumn(columnId) {
        let acc = 0;
        for (let j = 0; j < this.m; j++) {
            if (!this.elements[j][columnId].equals(new _RationalNumber__WEBPACK_IMPORTED_MODULE_0__.RationalNumber(0))) {
                acc++;
            }
        }
        return acc;
    }
    cofactor(rowId, columnId) {
        const ret = new Matrix(this.m - 1, this.n - 1);
        let rowOffset = 0;
        for (let i = 0; i < this.m - 1; i++) {
            if (i === rowId) {
                rowOffset = 1;
            }
            let columnOffset = 0;
            for (let j = 0; j < this.n - 1; j++) {
                if (j === columnId) {
                    columnOffset = 1;
                }
                ret.elements[i][j] = this.elements[i + rowOffset][j + columnOffset];
            }
        }
        return ret;
    }
}
class MatrixIdentity extends Matrix {
    constructor(m) {
        super(m, m);
        this.elements = [];
        for (let i = 0; i < this.m; i++) {
            this.elements[i] = [];
            for (let j = 0; j < this.m; j++) {
                if (i === j) {
                    this.elements[i][j] = new _RationalNumber__WEBPACK_IMPORTED_MODULE_0__.RationalNumber(1);
                }
                else {
                    this.elements[i][j] = new _RationalNumber__WEBPACK_IMPORTED_MODULE_0__.RationalNumber(0);
                }
            }
        }
    }
}
// elimination - multiply on the left (E*A); Row-addition transformations
// to mult*(row2 of Matrix A) add (row1 of Matrix A)
class MatrixElimination extends Matrix {
    row1;
    row2;
    constructor(m, r1, r2, mult) {
        if (m < r1 || m < r2) {
            throw new Error("Column index must be less than or equal to the matrix size.");
        }
        super(m, m);
        this.row1 = r1;
        this.row2 = r2;
        this.elements = [];
        for (let i = 0; i < this.m; i++) {
            this.elements[i] = [];
            for (let j = 0; j < this.m; j++) {
                if (i === j) {
                    this.elements[i][j] = new _RationalNumber__WEBPACK_IMPORTED_MODULE_0__.RationalNumber(1);
                }
                else {
                    this.elements[i][j] = new _RationalNumber__WEBPACK_IMPORTED_MODULE_0__.RationalNumber(0);
                }
            }
        }
        if (typeof mult === "number") {
            this.elements[r1][r2] = new _RationalNumber__WEBPACK_IMPORTED_MODULE_0__.RationalNumber(mult);
        }
        else {
            if (mult instanceof _RationalNumber__WEBPACK_IMPORTED_MODULE_0__.RationalNumber) {
                this.elements[r1][r2] = mult;
            }
        }
    }
}
// permutation - multiply on the right (A*P); Row-switching transformations
class MatrixPermutation extends Matrix {
    constructor(m, row1, row2) {
        if (m < row1 || m < row2) {
            throw new Error("Column index must be less than or equal to the matrix size.");
        }
        super(m, m);
        this.elements = [];
        for (let i = 0; i < this.m; i++) {
            this.elements[i] = [];
            for (let j = 0; j < this.m; j++) {
                if (i === j) {
                    this.elements[i][j] = new _RationalNumber__WEBPACK_IMPORTED_MODULE_0__.RationalNumber(1);
                }
                else {
                    this.elements[i][j] = new _RationalNumber__WEBPACK_IMPORTED_MODULE_0__.RationalNumber(0);
                }
            }
        }
        this.elements[row1][row1] = new _RationalNumber__WEBPACK_IMPORTED_MODULE_0__.RationalNumber(0);
        this.elements[row1][row2] = new _RationalNumber__WEBPACK_IMPORTED_MODULE_0__.RationalNumber(1);
        this.elements[row2][row2] = new _RationalNumber__WEBPACK_IMPORTED_MODULE_0__.RationalNumber(0);
        this.elements[row2][row1] = new _RationalNumber__WEBPACK_IMPORTED_MODULE_0__.RationalNumber(1);
    }
}


/***/ },

/***/ "./src/structures/Queue.ts"
/*!*********************************!*\
  !*** ./src/structures/Queue.ts ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Queue: () => (/* binding */ Queue)
/* harmony export */ });
class Queue {
    queue;
    constructor() {
        this.queue = [];
    }
    isEmpty() {
        return this.queue.length === 0;
    }
    enqueue(element) {
        this.queue.push(element);
    }
    dequeue() {
        if (this.isEmpty()) {
            throw new Error("Queue is empty");
        }
        return this.queue.shift();
    }
    peek() {
        if (this.isEmpty()) {
            throw new Error("Queue is empty");
        }
        return this.queue[0];
    }
    toArray() {
        return this.queue;
    }
}


/***/ },

/***/ "./src/structures/RationalNumber.ts"
/*!******************************************!*\
  !*** ./src/structures/RationalNumber.ts ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RationalNumber: () => (/* binding */ RationalNumber)
/* harmony export */ });
/* harmony import */ var _ArithmeticEvaluator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ArithmeticEvaluator */ "./src/structures/ArithmeticEvaluator.ts");
/* harmony import */ var _Queue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Queue */ "./src/structures/Queue.ts");
/* harmony import */ var _Stack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Stack */ "./src/structures/Stack.ts");



class RationalNumber {
    static toReversePolishNotation(code) {
        const tokens = code.match(/\(|\)|\d+(\.\d+)?|\w+|[\+\-\*\/\^]/g);
        let i = 0;
        const outputQueue = new _Queue__WEBPACK_IMPORTED_MODULE_1__.Queue();
        const operatorStack = new _Stack__WEBPACK_IMPORTED_MODULE_2__.Stack();
        while (i < tokens.length) {
            if (this.isNumber(tokens[i])) {
                outputQueue.enqueue(tokens[i]);
            }
            else if (this.isOperator(tokens[i])) {
                const op1 = tokens[i];
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
    }
    static fromString(code) {
        const p = new _ArithmeticEvaluator__WEBPACK_IMPORTED_MODULE_0__.Parser();
        return p.parse(code);
    }
    static greatestCommonDivisor(a, b) {
        return b ? RationalNumber.greatestCommonDivisor(b, a % b) : a;
    }
    static leastCommonMultiple(a, b) {
        return Math.abs(a * b / RationalNumber.greatestCommonDivisor(a, b));
    }
    static isNumber(code) {
        return /^\d/.test(code);
    }
    static isOperator(code) {
        return /[\+\-\*\/\^]/.test(code);
    }
    static isLeftAssociativeOperator(operator) {
        return /[\+\-\*\/]/.test(operator);
    }
    static isRightAssociativeOperator(operator) {
        return /[\^]/.test(operator);
    }
    static precedence(operator) {
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
    }
    static evaluateFromRPN(tokens) {
        const stack = new _Stack__WEBPACK_IMPORTED_MODULE_2__.Stack();
        for (let i = 0; i < tokens.length; i++) {
            if (!this.isOperator(tokens[i])) {
                stack.push(new RationalNumber(parseFloat(tokens[i])));
            }
            else {
                const op1 = stack.pop();
                const op2 = stack.pop();
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
    }
    numerator;
    denominator;
    constructor(n, d = 1) {
        if (d === 0) {
            throw new Error("Division by zero!");
        }
        // todo: potential for overflow. When Math.sign becomes available in TypeScript use it instead of the multiplication
        const sign = n * d >= 0 ? 1 : -1;
        this.numerator = sign * Math.abs(n);
        this.denominator = Math.abs(d);
    }
    simplifiedForm() {
        const gcd = RationalNumber.greatestCommonDivisor(this.numerator, this.denominator);
        return new RationalNumber(this.numerator / gcd, this.denominator / gcd);
    }
    equals(x) {
        const rn1 = this.simplifiedForm();
        if (typeof x === "number") {
            return rn1.numerator === x && rn1.denominator === 1;
        }
        else {
            const rn2 = x.simplifiedForm();
            return rn1.numerator === rn2.numerator && rn1.denominator === rn2.denominator;
        }
    }
    lt(x) {
        const rn1 = this.simplifiedForm();
        if (typeof x === "number") {
            return rn1.numerator < x * rn1.denominator;
        }
        else {
            const rn2 = x.simplifiedForm();
            return rn1.numerator * rn2.denominator < rn2.numerator * rn1.denominator;
        }
    }
    le(x) {
        const rn1 = this.simplifiedForm();
        if (typeof x === "number") {
            return rn1.numerator <= x * rn1.denominator;
        }
        else {
            const rn2 = x.simplifiedForm();
            return rn1.numerator * rn2.denominator <= rn2.numerator * rn1.denominator;
        }
    }
    gt(x) {
        const rn1 = this.simplifiedForm();
        if (typeof x === "number") {
            return rn1.numerator > x * rn1.denominator;
        }
        else {
            const rn2 = x.simplifiedForm();
            return rn1.numerator * rn2.denominator > rn2.numerator * rn1.denominator;
        }
    }
    ge(x) {
        const rn1 = this.simplifiedForm();
        if (typeof x === "number") {
            return rn1.numerator >= x * rn1.denominator;
        }
        else {
            const rn2 = x.simplifiedForm();
            return rn1.numerator * rn2.denominator >= rn2.numerator * rn1.denominator;
        }
    }
    // multiplicative inverse
    reciprocal() {
        if (this.denominator === 0) {
            throw new Error("Division by zero!");
        }
        return new RationalNumber(this.denominator, this.numerator);
    }
    // additive inverse
    opposite() {
        return new RationalNumber(this.numerator * (-1), this.denominator);
    }
    add(x) {
        if (typeof x === "number") {
            return new RationalNumber((this.numerator + x * this.denominator), this.denominator);
        }
        else {
            const lcm = RationalNumber.leastCommonMultiple(this.denominator, x.denominator);
            const n1 = this.numerator * lcm / this.denominator;
            const n2 = x.numerator * lcm / x.denominator;
            return new RationalNumber(n1 + n2, lcm);
        }
    }
    sub(x) {
        if (typeof x === "number") {
            return new RationalNumber((this.numerator - x * this.denominator), this.denominator);
        }
        else {
            const lcm = RationalNumber.leastCommonMultiple(this.denominator, x.denominator);
            const n1 = this.numerator * lcm / this.denominator;
            const n2 = x.numerator * lcm / x.denominator;
            return new RationalNumber(n1 - n2, lcm);
        }
    }
    mult(x) {
        if (typeof x === "number") {
            return new RationalNumber((this.numerator * x), this.denominator);
        }
        else {
            return new RationalNumber((this.numerator * x.numerator), x.denominator * this.denominator);
        }
    }
    div(x) {
        if (typeof x === "number") {
            return new RationalNumber((this.numerator), this.denominator * x);
        }
        else {
            return new RationalNumber((this.numerator * x.denominator), x.numerator * this.denominator);
        }
    }
    exp(x) {
        if (typeof x === "number") {
            return new RationalNumber(this.numerator ** x, this.denominator ** x);
        }
        else {
            if (this.denominator !== 1) {
                throw Error("Exponentiation with rational powers not supported.");
            }
            return new RationalNumber(this.numerator ** x.numerator, this.denominator ** x.numerator);
        }
    }
    toNumber() {
        return this.numerator / this.denominator;
    }
    toString() {
        return this.numerator.toString() + (1 === this.denominator ? "" : "/" + this.denominator.toString());
    }
    deepCopy() {
        return new RationalNumber(this.numerator, this.denominator);
    }
}


/***/ },

/***/ "./src/structures/Stack.ts"
/*!*********************************!*\
  !*** ./src/structures/Stack.ts ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Stack: () => (/* binding */ Stack)
/* harmony export */ });
class Stack {
    stack;
    constructor() {
        this.stack = [];
    }
    isEmpty() {
        return this.stack.length === 0;
    }
    push(element) {
        this.stack.push(element);
    }
    pop() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        return this.stack.pop();
    }
    peek() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        return this.stack[this.stack.length - 1];
    }
    toArray() {
        return this.stack;
    }
}


/***/ },

/***/ "./src/structures/Vector.ts"
/*!**********************************!*\
  !*** ./src/structures/Vector.ts ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ColumnVector: () => (/* binding */ ColumnVector),
/* harmony export */   RowVector: () => (/* binding */ RowVector),
/* harmony export */   Vector: () => (/* binding */ Vector)
/* harmony export */ });
/* harmony import */ var _Matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Matrix */ "./src/structures/Matrix.ts");
/* harmony import */ var _RationalNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RationalNumber */ "./src/structures/RationalNumber.ts");


class Vector {
    static areLinearlyIndependent(vectors) {
        const m = vectors.length;
        if (0 === m) {
            return true;
        }
        const n = vectors[0].m;
        for (let i = 1; i < vectors.length; i++) {
            if (n !== vectors[i].m) {
                throw new Error("Mismatched dimensions.");
            }
        }
        if (m > n) {
            return false;
        }
        throw new Error("Not implemented.");
    }
    m;
    elements;
    constructor(n) {
        if (typeof n === "number") {
            this.m = n;
            this.elements = [];
        }
        else if (n instanceof Array) {
            this.m = n.length;
            this.elements = [];
            for (let i = 0; i < this.m; i++) {
                this.elements[i] = new _RationalNumber__WEBPACK_IMPORTED_MODULE_1__.RationalNumber(n[i]);
            }
        }
    }
    add(x) {
        if (this.m !== x.m) {
            throw new Error("Mismatched dimensions.");
        }
        const res = new Vector(this.m);
        for (let i = 0; i < res.m; i++) {
            res.elements[i] = this.elements[i].add(x.elements[i]);
        }
        return res;
    }
    sub(x) {
        if (this.m !== x.m) {
            throw new Error("Mismatched dimensions.");
        }
        const res = new Vector(this.m);
        for (let i = 0; i < res.m; i++) {
            res.elements[i] = this.elements[i].sub(x.elements[i]);
        }
        return res;
    }
    mult(x) {
        const res = new Vector(this.m);
        for (let i = 0; i < res.m; i++) {
            res.elements[i] = this.elements[i].mult(x);
        }
        return res;
    }
    // [ALIASES]: innerProduct, projectionProduct, scalarProduct
    dotProduct(x) {
        if (this.m !== x.m) {
            throw new Error("Mismatched dimensions.");
        }
        let res = new _RationalNumber__WEBPACK_IMPORTED_MODULE_1__.RationalNumber(0);
        for (let i = 0; i < x.m; i++) {
            res = res.add(this.elements[i].mult(x.elements[i]));
        }
        return res;
    }
    // [ALIASES]: directedAreaProduct, vectorProduct
    crossProduct(x) {
        throw new Error("Not implemented.");
    }
    // [ALIASES]: magnitude, norm
    length() {
        const length = new _RationalNumber__WEBPACK_IMPORTED_MODULE_1__.RationalNumber(0);
        for (let i = 0; i < this.m; i++) {
            length.add(this.elements[i]);
        }
        return length;
    }
    deepCopy() {
        const ret = new Vector(this.m);
        for (let i = 0; i < this.m; i++) {
            ret.elements[i] = this.elements[i];
        }
        return ret;
    }
    toMatrix() {
        const ret = new _Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(this.m, 1);
        for (let i = 0; i < this.m; i++) {
            ret.elements[i][0] = this.elements[i];
        }
        return ret;
    }
}
class ColumnVector extends Vector {
}
class RowVector extends Vector {
    matrixProduct(m) {
        if (this.m !== m.n) {
            throw new Error("Mismatched dimensions.");
        }
        const res = new RowVector(this.m);
        for (let i = 0; i < this.m; i++) {
            let sum = new _RationalNumber__WEBPACK_IMPORTED_MODULE_1__.RationalNumber(0);
            for (let j = 0; j < m.n; j++) {
                sum = sum.add(m.elements[i][j].mult(this.elements[i]));
            }
            res.elements[i] = sum;
        }
        return res;
    }
}


/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!********************************!*\
  !*** ./src/exercises/graph.ts ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _presenters_MatrixPresenter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../presenters/MatrixPresenter */ "./src/presenters/MatrixPresenter.ts");
/* harmony import */ var _structures_Matrix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../structures/Matrix */ "./src/structures/Matrix.ts");
/* harmony import */ var _structures_Queue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../structures/Queue */ "./src/structures/Queue.ts");
/* harmony import */ var _structures_RationalNumber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../structures/RationalNumber */ "./src/structures/RationalNumber.ts");
/* harmony import */ var _structures_Vector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../structures/Vector */ "./src/structures/Vector.ts");





class Vector2D extends _structures_Vector__WEBPACK_IMPORTED_MODULE_4__.Vector {
    static fromVector(v) {
        if (v.m !== 2) {
            throw new Error("Vector dimension must be 2.");
        }
        return new Vector2D(v.elements[0], v.elements[1]);
    }
    static GetScallingMatrix(scale) {
        const m = new _structures_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(2, 2);
        m.elements = [[new _structures_RationalNumber__WEBPACK_IMPORTED_MODULE_3__.RationalNumber(scale), new _structures_RationalNumber__WEBPACK_IMPORTED_MODULE_3__.RationalNumber(0)], [new _structures_RationalNumber__WEBPACK_IMPORTED_MODULE_3__.RationalNumber(0), new _structures_RationalNumber__WEBPACK_IMPORTED_MODULE_3__.RationalNumber(scale)]];
        return m;
    }
    static GetRotationMatrix(angle) {
        const rotationAngle = angle * (180 / Math.PI); // converted to radians
        const m = new _structures_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(2, 2);
        m.elements = [[new _structures_RationalNumber__WEBPACK_IMPORTED_MODULE_3__.RationalNumber(Math.cos(rotationAngle)), new _structures_RationalNumber__WEBPACK_IMPORTED_MODULE_3__.RationalNumber(-Math.sin(rotationAngle))],
            [new _structures_RationalNumber__WEBPACK_IMPORTED_MODULE_3__.RationalNumber(Math.sin(rotationAngle)), new _structures_RationalNumber__WEBPACK_IMPORTED_MODULE_3__.RationalNumber(Math.cos(rotationAngle))]];
        return m;
    }
    constructor(x, y) {
        super(2);
        if (typeof x === "number") {
            this.elements[0] = new _structures_RationalNumber__WEBPACK_IMPORTED_MODULE_3__.RationalNumber(x);
        }
        else if (x instanceof _structures_RationalNumber__WEBPACK_IMPORTED_MODULE_3__.RationalNumber) {
            this.elements[0] = x;
        }
        if (typeof y === "number") {
            this.elements[1] = new _structures_RationalNumber__WEBPACK_IMPORTED_MODULE_3__.RationalNumber(y);
        }
        else if (y instanceof _structures_RationalNumber__WEBPACK_IMPORTED_MODULE_3__.RationalNumber) {
            this.elements[1] = y;
        }
    }
    get x() {
        return this.elements[0].toNumber();
    }
    get y() {
        return this.elements[1].toNumber();
    }
    toRowVector() {
        const res = new _structures_Vector__WEBPACK_IMPORTED_MODULE_4__.RowVector(2);
        res.elements = [new _structures_RationalNumber__WEBPACK_IMPORTED_MODULE_3__.RationalNumber(this.x), new _structures_RationalNumber__WEBPACK_IMPORTED_MODULE_3__.RationalNumber(this.y)];
        return res;
    }
    toColumnVector() {
        const res = new _structures_Vector__WEBPACK_IMPORTED_MODULE_4__.ColumnVector(2);
        res.elements = [new _structures_RationalNumber__WEBPACK_IMPORTED_MODULE_3__.RationalNumber(this.x), new _structures_RationalNumber__WEBPACK_IMPORTED_MODULE_3__.RationalNumber(this.y)];
        return res;
    }
}
function randomVector2D() {
    return new Vector2D(Math.floor(Math.random() * 20) - 10, Math.floor(Math.random() * 20) - 10);
}
const orthonormalAxesColor = "#666600";
const orthonormalGridLinesColor = "#f0f0ff";
const vectorColor = "#3030f0";
const transformedVectorColor = "#909090";
const unitSize = 20;
const vector = randomVector2D();
const secondBasis = [new Vector2D(6, 2), new Vector2D(2, 6)];
const transformations = new _structures_Queue__WEBPACK_IMPORTED_MODULE_2__.Queue();
transformations.enqueue(Vector2D.GetScallingMatrix(0.5));
transformations.enqueue(Vector2D.GetRotationMatrix(60));
// const transformedVector: Vector2D = Vector2D.fromVector(vector.toRowVector().matrixProduct(T));
const secondVectorSpaceAxesColor = "#006666";
const secondVectorSpaceGridColor = "#fff0f0";
document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("graphCanvas");
    const ctx = canvas.getContext("2d");
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const originX = canvasWidth / 2;
    const originY = canvasHeight / 2;
    let legend1 = document.createElement("div");
    legend1.innerText = "Canvas size: " + canvasWidth + " x " + canvasHeight + " px";
    document.getElementById("legend").append(legend1);
    let legend2 = document.createElement("div");
    legend2.innerText = "Canvas origin: " + originX + " x " + originY + " px";
    document.getElementById("legend").append(legend2);
    let legend3 = document.createElement("div");
    legend3.innerText = "Vector: [" + vector.x + ", " + vector.y + "]";
    legend3.style.color = vectorColor;
    document.getElementById("legend").append(legend3);
    drawOrthonormalGrid();
    drawVector(vector);
    // drawTransformedVector(vector, transformations);
    drawChangeCoordinates();
    function drawOrthonormalGrid() {
        // grid
        ctx.beginPath();
        ctx.strokeStyle = orthonormalGridLinesColor;
        ctx.setLineDash([2, 2]);
        ctx.lineWidth = 1;
        let i = 0;
        do {
            ctx.moveTo(originX + unitSize * i, 0);
            ctx.lineTo(originX + unitSize * i, canvasHeight);
            ctx.stroke();
            ctx.moveTo(originX - unitSize * i, 0);
            ctx.lineTo(originX - unitSize * i, canvasHeight);
            ctx.stroke();
            i++;
        } while (originX + unitSize * i < canvasWidth);
        i = 0;
        do {
            ctx.moveTo(0, originY + unitSize * i);
            ctx.lineTo(canvasWidth, originY + unitSize * i);
            ctx.stroke();
            ctx.moveTo(0, originY - unitSize * i);
            ctx.lineTo(canvasWidth, originY - unitSize * i);
            ctx.stroke();
            i++;
        } while (originY + unitSize * i < canvasHeight);
        // axes
        ctx.beginPath();
        ctx.strokeStyle = orthonormalAxesColor;
        ctx.setLineDash([]);
        ctx.lineWidth = 2;
        ctx.moveTo(originX, 0);
        ctx.lineTo(originX, canvasHeight);
        ctx.stroke();
        ctx.moveTo(0, originY);
        ctx.lineTo(canvasWidth, originY);
        ctx.stroke();
    }
    function drawVector(vector, color = vectorColor, lineWidth = 2) {
        ctx.beginPath();
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = color;
        ctx.moveTo(originX, originY);
        // because the canvas origin is top left:
        ctx.lineTo(originX + unitSize * vector.elements[0].toNumber(), originY - unitSize * vector.elements[1].toNumber());
        ctx.stroke();
    }
    function drawTransformedVector(vector, transformations) {
        let transformedVector = vector;
        while (!transformations.isEmpty()) {
            const transformation = transformations.dequeue();
            transformedVector = Vector2D.fromVector(transformation.vectorProduct(transformedVector.toColumnVector()));
            drawVector(transformedVector, transformedVectorColor, 1);
            let divHeader = document.createElement("div");
            divHeader.innerText = "Transformation matrix:";
            document.getElementById("legend").append(divHeader);
            let divMatrix = document.createElement("div");
            document.getElementById("legend").append(divMatrix);
            _presenters_MatrixPresenter__WEBPACK_IMPORTED_MODULE_0__.MatrixPresenter.printTableMatrix(transformation, divMatrix);
            let divFooter = document.createElement("div");
            divFooter.innerText = `Transformed vector: (${transformedVector.x}, ${transformedVector.y})`;
            divFooter.style.color = transformedVectorColor;
            document.getElementById("legend").append(divFooter);
        }
    }
    function drawChangeCoordinates() {
        drawVector(secondBasis[0], secondVectorSpaceAxesColor);
        drawVector(secondBasis[1], secondVectorSpaceAxesColor);
        const changeOfCoordinatesMatrix = new _structures_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix(2, 2);
        changeOfCoordinatesMatrix.elements[0] = [new _structures_RationalNumber__WEBPACK_IMPORTED_MODULE_3__.RationalNumber(6), new _structures_RationalNumber__WEBPACK_IMPORTED_MODULE_3__.RationalNumber(2)];
        changeOfCoordinatesMatrix.elements[1] = [new _structures_RationalNumber__WEBPACK_IMPORTED_MODULE_3__.RationalNumber(2), new _structures_RationalNumber__WEBPACK_IMPORTED_MODULE_3__.RationalNumber(6)];
        const vectorSecondBasis = Vector2D.fromVector(changeOfCoordinatesMatrix.vectorProduct(vector.toColumnVector())); // it's the other way around
        let divHeader = document.createElement("div");
        divHeader.innerText = "Change of basis matrix:";
        document.getElementById("legend").append(divHeader);
        let divMatrix = document.createElement("div");
        document.getElementById("legend").append(divMatrix);
        _presenters_MatrixPresenter__WEBPACK_IMPORTED_MODULE_0__.MatrixPresenter.printTableMatrix(changeOfCoordinatesMatrix, divMatrix);
        let divFooter = document.createElement("div");
        divFooter.innerText = `Vector in the new basis: (${vectorSecondBasis.x}, ${vectorSecondBasis.y})`;
        divFooter.style.color = transformedVectorColor;
        document.getElementById("legend").append(divFooter);
    }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5RCxTQUFTLENBQUMsU0FBUyxHQUFHLHlCQUF5QixDQUFDO1FBQ2hELFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3BELElBQUksU0FBUyxHQUFtQixRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlELFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3BELHdFQUFlLENBQUMsZ0JBQWdCLENBQUMseUJBQXlCLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDdkUsSUFBSSxTQUFTLEdBQW1CLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUQsU0FBUyxDQUFDLFNBQVMsR0FBRyw2QkFBNkIsaUJBQWlCLENBQUMsQ0FBQyxLQUFLLGlCQUFpQixDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ2xHLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLHNCQUFzQixDQUFDO1FBQy9DLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7QUFDRixDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xpbmVhcmFsZ2VicmEvLi9zcmMvcHJlc2VudGVycy9NYXRyaXhQcmVzZW50ZXIudHMiLCJ3ZWJwYWNrOi8vbGluZWFyYWxnZWJyYS8uL3NyYy9zdHJ1Y3R1cmVzL0FyaXRobWV0aWNFdmFsdWF0b3IudHMiLCJ3ZWJwYWNrOi8vbGluZWFyYWxnZWJyYS8uL3NyYy9zdHJ1Y3R1cmVzL01hdHJpeC50cyIsIndlYnBhY2s6Ly9saW5lYXJhbGdlYnJhLy4vc3JjL3N0cnVjdHVyZXMvUXVldWUudHMiLCJ3ZWJwYWNrOi8vbGluZWFyYWxnZWJyYS8uL3NyYy9zdHJ1Y3R1cmVzL1JhdGlvbmFsTnVtYmVyLnRzIiwid2VicGFjazovL2xpbmVhcmFsZ2VicmEvLi9zcmMvc3RydWN0dXJlcy9TdGFjay50cyIsIndlYnBhY2s6Ly9saW5lYXJhbGdlYnJhLy4vc3JjL3N0cnVjdHVyZXMvVmVjdG9yLnRzIiwid2VicGFjazovL2xpbmVhcmFsZ2VicmEvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbGluZWFyYWxnZWJyYS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbGluZWFyYWxnZWJyYS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2xpbmVhcmFsZ2VicmEvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9saW5lYXJhbGdlYnJhLy4vc3JjL2V4ZXJjaXNlcy9ncmFwaC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNYXRyaXggfSBmcm9tIFwiLi4vc3RydWN0dXJlcy9NYXRyaXhcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBNYXRyaXhQcmVzZW50ZXIge1xyXG5cdHB1YmxpYyBzdGF0aWMgcHJpbnRUYWJsZU1hdHJpeChtYXRyaXg6IE1hdHJpeCwgY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudCk6IHZvaWQge1xyXG5cdFx0bGV0IHJvd0VjaGVsb25Gb3JtOiBib29sZWFuID0gbWF0cml4LmlzUm93RWNoZWxvbkZvcm0oKTtcclxuXHRcdGxldCByZWR1Y2VkUm93RWNoZWxvbkZvcm06IGJvb2xlYW4gPSByb3dFY2hlbG9uRm9ybSA/IG1hdHJpeC5pc1JlZHVjZWRSb3dFY2hlbG9uRm9ybSgpIDogZmFsc2U7XHJcblx0XHRsZXQgdGFibGU6IEhUTUxUYWJsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XHJcblx0XHR0YWJsZS5jbGFzc05hbWUgPSBcIm1hdHJpeFwiO1xyXG5cdFx0aWYgKHJlZHVjZWRSb3dFY2hlbG9uRm9ybSkge1xyXG5cdFx0XHR0YWJsZS5jbGFzc05hbWUgPSBcInJlZHVjZWRSb3dFY2hlbG9uTWF0cml4XCI7XHJcblx0XHR9IGVsc2UgaWYgKHJvd0VjaGVsb25Gb3JtKSB7XHJcblx0XHRcdHRhYmxlLmNsYXNzTmFtZSA9IFwicm93RWNoZWxvbk1hdHJpeFwiO1xyXG5cdFx0fVxyXG5cdFx0Zm9yIChsZXQgaTpudW1iZXIgPSAwOyBpIDwgbWF0cml4Lm07IGkrKykge1xyXG5cdFx0XHRsZXQgdHI6IEhUTUxUYWJsZVJvd0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcblx0XHRcdGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCBtYXRyaXgubjsgaisrKSB7XHJcblx0XHRcdFx0bGV0IHRkOiBIVE1MVGFibGVDZWxsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuXHRcdFx0XHR0ZC5pbm5lclRleHQgPSBtYXRyaXguZWxlbWVudHNbaV1bal0udG9TdHJpbmcoKTtcclxuXHRcdFx0XHR0ZC5jbGFzc05hbWUgPSBcIm1hdHJpeEVsZW1lbnRcIjtcclxuXHRcdFx0XHRpZiAocmVkdWNlZFJvd0VjaGVsb25Gb3JtICYmIGogPT09IGkpIHsgdGQuY2xhc3NOYW1lID0gXCJwaXZvdEVsZW1lbnRcIjsgfVxyXG5cdFx0XHRcdHRyLmFwcGVuZCh0ZCk7XHJcblx0XHRcdH1cclxuXHRcdFx0dGFibGUuYXBwZW5kKHRyKTtcclxuXHRcdH1cclxuXHRcdGNvbnRhaW5lci5hcHBlbmQodGFibGUpO1xyXG5cdFx0Y29udGFpbmVyLmFwcGVuZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xyXG5cdH1cclxuXHRwdWJsaWMgc3RhdGljIHByaW50TWF0cml4RXF1YWxpdHkobWF0cml4MTogTWF0cml4LCBvcGVhcnRvcjogc3RyaW5nLCBtYXRyaXgyOiBNYXRyaXgsIHJlc3VsdDogTWF0cml4LCBjb250YWluZXI6IEhUTUxEaXZFbGVtZW50KTogdm9pZCB7XHJcblx0XHRsZXQgdGFibGU6IEhUTUxUYWJsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XHJcblx0XHRsZXQgdHIwOiBIVE1MVGFibGVSb3dFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG5cdFx0dGFibGUuYXBwZW5kKHRyMCk7XHJcblx0XHRsZXQgdGQwMTogSFRNTFRhYmxlQ2VsbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcblx0XHR0cjAuYXBwZW5kKHRkMDEpO1xyXG5cdFx0bGV0IHRkMDI6IEhUTUxUYWJsZUNlbGxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG5cdFx0dGQwMi5pbm5lclRleHQgPSBvcGVhcnRvcjtcclxuXHRcdHRkMDIuc3R5bGUudmVydGljYWxBbGlnbiA9IFwibWlkZGxlXCI7XHJcblx0XHR0ZDAyLnN0eWxlLnBhZGRpbmdMZWZ0ID0gXCI1cHhcIjtcclxuXHRcdHRkMDIuc3R5bGUucGFkZGluZ1JpZ2h0ID0gXCI1cHhcIjtcclxuXHRcdHRyMC5hcHBlbmQodGQwMik7XHJcblx0XHRsZXQgdGQwMzogSFRNTFRhYmxlQ2VsbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcblx0XHR0cjAuYXBwZW5kKHRkMDMpO1xyXG5cdFx0bGV0IHRkMDQ6IEhUTUxUYWJsZUNlbGxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG5cdFx0dGQwNC5pbm5lclRleHQgPSBcIj1cIjtcclxuXHRcdHRkMDQuc3R5bGUudmVydGljYWxBbGlnbiA9IFwibWlkZGxlXCI7XHJcblx0XHR0ZDA0LnN0eWxlLnBhZGRpbmdMZWZ0ID0gXCI1cHhcIjtcclxuXHRcdHRkMDQuc3R5bGUucGFkZGluZ1JpZ2h0ID0gXCI1cHhcIjtcclxuXHRcdHRyMC5hcHBlbmQodGQwNCk7XHJcblx0XHRsZXQgdGQwNTogSFRNTFRhYmxlQ2VsbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcblx0XHR0cjAuYXBwZW5kKHRkMDUpO1xyXG5cdFx0bGV0IHRhYmxlMTogSFRNTFRhYmxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcclxuXHRcdHRhYmxlMS5jbGFzc05hbWUgPSBcIm1hdHJpeFwiO1xyXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IG1hdHJpeDEubTsgaSsrKSB7XHJcblx0XHRcdGxldCB0cjogSFRNTFRhYmxlUm93RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuXHRcdFx0Zm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IG1hdHJpeDEubjsgaisrKSB7XHJcblx0XHRcdFx0bGV0IHRkOiBIVE1MVGFibGVDZWxsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuXHRcdFx0XHR0ZC5pbm5lclRleHQgPSBtYXRyaXgxLmVsZW1lbnRzW2ldW2pdLnRvU3RyaW5nKCk7XHJcblx0XHRcdFx0dGQuc3R5bGUucGFkZGluZ0xlZnQgPSBcIjVweFwiO1xyXG5cdFx0XHRcdHRkLnN0eWxlLnBhZGRpbmdSaWdodCA9IFwiNXB4XCI7XHJcblx0XHRcdFx0dHIuYXBwZW5kKHRkKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0YWJsZTEuYXBwZW5kKHRyKTtcclxuXHRcdH1cclxuXHRcdHRkMDEuYXBwZW5kKHRhYmxlMSk7XHJcblx0XHR0YWJsZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XHJcblx0XHR0YWJsZTEuY2xhc3NOYW1lID0gXCJtYXRyaXhcIjtcclxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBtYXRyaXgyLm07IGkrKykge1xyXG5cdFx0XHRsZXQgdHI6IEhUTUxUYWJsZVJvd0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcblx0XHRcdGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCBtYXRyaXgyLm47IGorKykge1xyXG5cdFx0XHRcdGxldCB0ZDogSFRNTFRhYmxlQ2VsbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcblx0XHRcdFx0dGQuaW5uZXJUZXh0ID0gbWF0cml4Mi5lbGVtZW50c1tpXVtqXS50b1N0cmluZygpO1xyXG5cdFx0XHRcdHRkLnN0eWxlLnBhZGRpbmdMZWZ0ID0gXCI1cHhcIjtcclxuXHRcdFx0XHR0ZC5zdHlsZS5wYWRkaW5nUmlnaHQgPSBcIjVweFwiO1xyXG5cdFx0XHRcdHRyLmFwcGVuZCh0ZCk7XHJcblx0XHRcdH1cclxuXHRcdFx0dGFibGUxLmFwcGVuZCh0cik7XHJcblx0XHR9XHJcblx0XHR0ZDAzLmFwcGVuZCh0YWJsZTEpO1xyXG5cdFx0dGFibGUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xyXG5cdFx0dGFibGUxLmNsYXNzTmFtZSA9IFwibWF0cml4XCI7XHJcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgcmVzdWx0Lm07IGkrKykge1xyXG5cdFx0XHRsZXQgdHI6IEhUTUxUYWJsZVJvd0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcblx0XHRcdGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCByZXN1bHQubjsgaisrKSB7XHJcblx0XHRcdFx0bGV0IHRkOiBIVE1MVGFibGVDZWxsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuXHRcdFx0XHR0ZC5pbm5lclRleHQgPSByZXN1bHQuZWxlbWVudHNbaV1bal0udG9TdHJpbmcoKTtcclxuXHRcdFx0XHR0ZC5zdHlsZS5wYWRkaW5nTGVmdCA9IFwiNXB4XCI7XHJcblx0XHRcdFx0dGQuc3R5bGUucGFkZGluZ1JpZ2h0ID0gXCI1cHhcIjtcclxuXHRcdFx0XHR0ci5hcHBlbmQodGQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRhYmxlMS5hcHBlbmQodHIpO1xyXG5cdFx0fVxyXG5cdFx0dGQwNS5hcHBlbmQodGFibGUxKTtcclxuXHRcdGNvbnRhaW5lci5hcHBlbmQodGFibGUpO1xyXG5cdFx0Y29udGFpbmVyLmFwcGVuZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xyXG5cdH1cclxuXHRwdWJsaWMgc3RhdGljIHByaW50TWF0cml4RXF1YWxpdHkyKG1hdHJpeDE6IE1hdHJpeCwgb3BlYXJ0b3IxOiBzdHJpbmcsIG1hdHJpeDI6IE1hdHJpeCwgbWF0cml4MzogTWF0cml4LCBvcGVhcnRvcjI6IHN0cmluZywgbWF0cml4NDogTWF0cml4LCBjb250YWluZXI6IEhUTUxEaXZFbGVtZW50KTogdm9pZCB7XHJcblx0XHRsZXQgdGFibGU6IEhUTUxUYWJsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XHJcblx0XHRsZXQgdHIwOiBIVE1MVGFibGVSb3dFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG5cdFx0dGFibGUuYXBwZW5kKHRyMCk7XHJcblx0XHRsZXQgdGQwMTogSFRNTFRhYmxlQ2VsbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcblx0XHR0cjAuYXBwZW5kKHRkMDEpO1xyXG5cdFx0bGV0IHRkMDI6IEhUTUxUYWJsZUNlbGxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG5cdFx0dGQwMi5pbm5lclRleHQgPSBvcGVhcnRvcjE7XHJcblx0XHR0ZDAyLnN0eWxlLnZlcnRpY2FsQWxpZ24gPSBcIm1pZGRsZVwiO1xyXG5cdFx0dGQwMi5zdHlsZS5wYWRkaW5nTGVmdCA9IFwiNXB4XCI7XHJcblx0XHR0ZDAyLnN0eWxlLnBhZGRpbmdSaWdodCA9IFwiNXB4XCI7XHJcblx0XHR0cjAuYXBwZW5kKHRkMDIpO1xyXG5cdFx0bGV0IHRkMDM6IEhUTUxUYWJsZUNlbGxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG5cdFx0dHIwLmFwcGVuZCh0ZDAzKTtcclxuXHRcdGxldCB0ZDA0OiBIVE1MVGFibGVDZWxsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuXHRcdHRkMDQuaW5uZXJUZXh0ID0gXCI9XCI7XHJcblx0XHR0ZDA0LnN0eWxlLnZlcnRpY2FsQWxpZ24gPSBcIm1pZGRsZVwiO1xyXG5cdFx0dGQwNC5zdHlsZS5wYWRkaW5nTGVmdCA9IFwiNXB4XCI7XHJcblx0XHR0ZDA0LnN0eWxlLnBhZGRpbmdSaWdodCA9IFwiNXB4XCI7XHJcblx0XHR0cjAuYXBwZW5kKHRkMDQpO1xyXG5cdFx0bGV0IHRkMDU6IEhUTUxUYWJsZUNlbGxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG5cdFx0dHIwLmFwcGVuZCh0ZDA1KTtcclxuXHRcdGxldCB0ZDA2OiBIVE1MVGFibGVDZWxsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuXHRcdHRkMDYuaW5uZXJUZXh0ID0gb3BlYXJ0b3IyO1xyXG5cdFx0dGQwNi5zdHlsZS52ZXJ0aWNhbEFsaWduID0gXCJtaWRkbGVcIjtcclxuXHRcdHRkMDYuc3R5bGUucGFkZGluZ0xlZnQgPSBcIjVweFwiO1xyXG5cdFx0dGQwNi5zdHlsZS5wYWRkaW5nUmlnaHQgPSBcIjVweFwiO1xyXG5cdFx0dHIwLmFwcGVuZCh0ZDA2KTtcclxuXHRcdGxldCB0ZDA3OiBIVE1MVGFibGVDZWxsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuXHRcdHRyMC5hcHBlbmQodGQwNyk7XHJcblx0XHRsZXQgdGFibGUxOiBIVE1MVGFibGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xyXG5cdFx0dGFibGUxLmNsYXNzTmFtZSA9IFwibWF0cml4XCI7XHJcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgbWF0cml4MS5tOyBpKyspIHtcclxuXHRcdFx0bGV0IHRyOiBIVE1MVGFibGVSb3dFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG5cdFx0XHRmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgbWF0cml4MS5uOyBqKyspIHtcclxuXHRcdFx0XHRsZXQgdGQ6IEhUTUxUYWJsZUNlbGxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG5cdFx0XHRcdHRkLmlubmVyVGV4dCA9IG1hdHJpeDEuZWxlbWVudHNbaV1bal0udG9TdHJpbmcoKTtcclxuXHRcdFx0XHR0ZC5zdHlsZS5wYWRkaW5nTGVmdCA9IFwiNXB4XCI7XHJcblx0XHRcdFx0dGQuc3R5bGUucGFkZGluZ1JpZ2h0ID0gXCI1cHhcIjtcclxuXHRcdFx0XHR0ci5hcHBlbmQodGQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRhYmxlMS5hcHBlbmQodHIpO1xyXG5cdFx0fVxyXG5cdFx0dGQwMS5hcHBlbmQodGFibGUxKTtcclxuXHRcdHRhYmxlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcclxuXHRcdHRhYmxlMS5jbGFzc05hbWUgPSBcIm1hdHJpeFwiO1xyXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IG1hdHJpeDIubTsgaSsrKSB7XHJcblx0XHRcdGxldCB0cjogSFRNTFRhYmxlUm93RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuXHRcdFx0Zm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IG1hdHJpeDIubjsgaisrKSB7XHJcblx0XHRcdFx0bGV0IHRkOiBIVE1MVGFibGVDZWxsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuXHRcdFx0XHR0ZC5pbm5lclRleHQgPSBtYXRyaXgyLmVsZW1lbnRzW2ldW2pdLnRvU3RyaW5nKCk7XHJcblx0XHRcdFx0dGQuc3R5bGUucGFkZGluZ0xlZnQgPSBcIjVweFwiO1xyXG5cdFx0XHRcdHRkLnN0eWxlLnBhZGRpbmdSaWdodCA9IFwiNXB4XCI7XHJcblx0XHRcdFx0dHIuYXBwZW5kKHRkKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0YWJsZTEuYXBwZW5kKHRyKTtcclxuXHRcdH1cclxuXHRcdHRkMDMuYXBwZW5kKHRhYmxlMSk7XHJcblx0XHR0YWJsZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XHJcblx0XHR0YWJsZTEuY2xhc3NOYW1lID0gXCJtYXRyaXhcIjtcclxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBtYXRyaXgzLm07IGkrKykge1xyXG5cdFx0XHRsZXQgdHI6IEhUTUxUYWJsZVJvd0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcblx0XHRcdGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCBtYXRyaXgzLm47IGorKykge1xyXG5cdFx0XHRcdGxldCB0ZDogSFRNTFRhYmxlQ2VsbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcblx0XHRcdFx0dGQuaW5uZXJUZXh0ID0gbWF0cml4My5lbGVtZW50c1tpXVtqXS50b1N0cmluZygpO1xyXG5cdFx0XHRcdHRkLnN0eWxlLnBhZGRpbmdMZWZ0ID0gXCI1cHhcIjtcclxuXHRcdFx0XHR0ZC5zdHlsZS5wYWRkaW5nUmlnaHQgPSBcIjVweFwiO1xyXG5cdFx0XHRcdHRyLmFwcGVuZCh0ZCk7XHJcblx0XHRcdH1cclxuXHRcdFx0dGFibGUxLmFwcGVuZCh0cik7XHJcblx0XHR9XHJcblx0XHR0ZDA1LmFwcGVuZCh0YWJsZTEpO1xyXG5cdFx0dGFibGUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xyXG5cdFx0dGFibGUxLmNsYXNzTmFtZSA9IFwibWF0cml4XCI7XHJcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgbWF0cml4NC5tOyBpKyspIHtcclxuXHRcdFx0bGV0IHRyOiBIVE1MVGFibGVSb3dFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG5cdFx0XHRmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgbWF0cml4NC5uOyBqKyspIHtcclxuXHRcdFx0XHRsZXQgdGQ6IEhUTUxUYWJsZUNlbGxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG5cdFx0XHRcdHRkLmlubmVyVGV4dCA9IG1hdHJpeDQuZWxlbWVudHNbaV1bal0udG9TdHJpbmcoKTtcclxuXHRcdFx0XHR0ZC5zdHlsZS5wYWRkaW5nTGVmdCA9IFwiNXB4XCI7XHJcblx0XHRcdFx0dGQuc3R5bGUucGFkZGluZ1JpZ2h0ID0gXCI1cHhcIjtcclxuXHRcdFx0XHR0ci5hcHBlbmQodGQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRhYmxlMS5hcHBlbmQodHIpO1xyXG5cdFx0fVxyXG5cdFx0dGQwNy5hcHBlbmQodGFibGUxKTtcclxuXHRcdGNvbnRhaW5lci5hcHBlbmQodGFibGUpO1xyXG5cdFx0Y29udGFpbmVyLmFwcGVuZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xyXG5cdH1cclxufSIsImltcG9ydCB7IFF1ZXVlIH0gZnJvbSBcIi4vUXVldWVcIjtcclxuaW1wb3J0IHsgUmF0aW9uYWxOdW1iZXIgfSBmcm9tIFwiLi9SYXRpb25hbE51bWJlclwiO1xyXG5pbXBvcnQgeyBTdGFjayB9IGZyb20gXCIuL1N0YWNrXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQXJpdGhtZXRpY0V2YWx1YXRvciB7XHJcblx0cHVibGljIHN0YXRpYyB0b1JldmVyc2VQb2xpc2hOb3RhdGlvbihjb2RlOiBzdHJpbmcpOiBzdHJpbmdbXSB7XHJcblx0XHRjb25zdCB0b2tlbnM6IHN0cmluZ1tdID0gY29kZS5tYXRjaCgvXFwofFxcKXxcXGQrKFxcLlxcZCspP3xcXHcrfFtcXCtcXC1cXCpcXC9cXF5dL2cpO1xyXG5cdFx0bGV0IGk6IG51bWJlciA9IDA7XHJcblx0XHRjb25zdCBvdXRwdXRRdWV1ZTogUXVldWU8c3RyaW5nPiA9IG5ldyBRdWV1ZTxzdHJpbmc+KCk7XHJcblx0XHRjb25zdCBvcGVyYXRvclN0YWNrOiBTdGFjazxzdHJpbmc+ID0gbmV3IFN0YWNrPHN0cmluZz4oKTtcclxuXHRcdHdoaWxlIChpIDwgdG9rZW5zLmxlbmd0aCkge1xyXG5cdFx0XHRpZiAodGhpcy5pc051bWJlcih0b2tlbnNbaV0pKSB7XHJcblx0XHRcdFx0b3V0cHV0UXVldWUuZW5xdWV1ZSh0b2tlbnNbaV0pO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMuaXNPcGVyYXRvcih0b2tlbnNbaV0pKSB7XHJcblx0XHRcdFx0bGV0IG9wMTogc3RyaW5nID0gdG9rZW5zW2ldO1xyXG5cdFx0XHRcdHdoaWxlICghb3BlcmF0b3JTdGFjay5pc0VtcHR5KCkgJiYgdGhpcy5pc09wZXJhdG9yKG9wZXJhdG9yU3RhY2sucGVlaygpKSkge1xyXG5cdFx0XHRcdFx0aWYgKCh0aGlzLmlzTGVmdEFzc29jaWF0aXZlT3BlcmF0b3Iob3AxKSAmJiAodGhpcy5wcmVjZWRlbmNlKG9wMSkgPD0gdGhpcy5wcmVjZWRlbmNlKG9wZXJhdG9yU3RhY2sucGVlaygpKSkpIHx8XHJcblx0XHRcdFx0XHRcdCh0aGlzLmlzUmlnaHRBc3NvY2lhdGl2ZU9wZXJhdG9yKG9wMSkgJiYgKHRoaXMucHJlY2VkZW5jZShvcDEpIDwgdGhpcy5wcmVjZWRlbmNlKG9wZXJhdG9yU3RhY2sucGVlaygpKSkpKSB7XHJcblx0XHRcdFx0XHRcdG91dHB1dFF1ZXVlLmVucXVldWUob3BlcmF0b3JTdGFjay5wb3AoKSk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0b3BlcmF0b3JTdGFjay5wdXNoKG9wMSk7XHJcblx0XHRcdH0gZWxzZSBpZiAodG9rZW5zW2ldID09PSBcIihcIikge1xyXG5cdFx0XHRcdG9wZXJhdG9yU3RhY2sucHVzaCh0b2tlbnNbaV0pO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHRva2Vuc1tpXSA9PT0gXCIpXCIpIHtcclxuXHRcdFx0XHR3aGlsZSAoIW9wZXJhdG9yU3RhY2suaXNFbXB0eSgpICYmIG9wZXJhdG9yU3RhY2sucGVlaygpICE9PSBcIihcIikge1xyXG5cdFx0XHRcdFx0b3V0cHV0UXVldWUuZW5xdWV1ZShvcGVyYXRvclN0YWNrLnBvcCgpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKCFvcGVyYXRvclN0YWNrLmlzRW1wdHkoKSAmJiBvcGVyYXRvclN0YWNrLnBlZWsoKSA9PT0gXCIoXCIpIHtcclxuXHRcdFx0XHRcdG9wZXJhdG9yU3RhY2sucG9wKCk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIk1pc21hdGNoZWQgcGFyZW50aGVzZXMuXCIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRpKys7XHJcblx0XHR9XHJcblx0XHR3aGlsZSAoIW9wZXJhdG9yU3RhY2suaXNFbXB0eSgpKSB7XHJcblx0XHRcdGlmIChvcGVyYXRvclN0YWNrLnBlZWsoKSA9PT0gXCIoXCIpIHtcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJNaXNtYXRjaGVkIHBhcmVudGhlc2VzLlwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRvdXRwdXRRdWV1ZS5lbnF1ZXVlKG9wZXJhdG9yU3RhY2sucG9wKCkpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gb3V0cHV0UXVldWUudG9BcnJheSgpO1xyXG5cdH1cclxuXHRwdWJsaWMgc3RhdGljIGV2YWx1YXRlRnJvbVJQTih0b2tlbnM6IHN0cmluZ1tdKTogbnVtYmVyIHtcclxuXHRcdGNvbnN0IHN0YWNrOiBTdGFjazxudW1iZXI+ID0gbmV3IFN0YWNrPG51bWJlcj4oKTtcclxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0aWYgKCF0aGlzLmlzT3BlcmF0b3IodG9rZW5zW2ldKSkge1xyXG5cdFx0XHRcdHN0YWNrLnB1c2gocGFyc2VGbG9hdCh0b2tlbnNbaV0pKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRsZXQgb3AxOiBudW1iZXIgPSBzdGFjay5wb3AoKTtcclxuXHRcdFx0XHRsZXQgb3AyOiBudW1iZXIgPSBzdGFjay5wb3AoKTtcclxuXHRcdFx0XHRzd2l0Y2ggKHRva2Vuc1tpXSkge1xyXG5cdFx0XHRcdFx0Y2FzZSBcIitcIjogc3RhY2sucHVzaChvcDIgKyBvcDEpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgXCItXCI6IHN0YWNrLnB1c2gob3AyIC0gb3AxKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlIFwiKlwiOiBzdGFjay5wdXNoKG9wMiAqIG9wMSk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSBcIi9cIjogc3RhY2sucHVzaChvcDIgLyBvcDEpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgXCJeXCI6IHN0YWNrLnB1c2gob3AyICoqIG9wMSk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHN0YWNrLnBvcCgpO1xyXG5cdH1cclxuXHRwcml2YXRlIHN0YXRpYyBpc051bWJlcihjb2RlOiBzdHJpbmcpOiBib29sZWFuIHtcclxuXHRcdHJldHVybiAvXlxcZC8udGVzdChjb2RlKTtcclxuXHR9XHJcblx0cHJpdmF0ZSBzdGF0aWMgaXNPcGVyYXRvcihjb2RlOiBzdHJpbmcpOiBib29sZWFuIHtcclxuXHRcdHJldHVybiAvW1xcK1xcLVxcKlxcL1xcXl0vLnRlc3QoY29kZSk7XHJcblx0fVxyXG5cdHByaXZhdGUgc3RhdGljIGlzTGVmdEFzc29jaWF0aXZlT3BlcmF0b3Iob3BlcmF0b3I6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG5cdFx0cmV0dXJuIC9bXFwrXFwtXFwqXFwvXS8udGVzdChvcGVyYXRvcik7XHJcblx0fVxyXG5cdHByaXZhdGUgc3RhdGljIGlzUmlnaHRBc3NvY2lhdGl2ZU9wZXJhdG9yKG9wZXJhdG9yOiBzdHJpbmcpOiBib29sZWFuIHtcclxuXHRcdHJldHVybiAvW1xcXl0vLnRlc3Qob3BlcmF0b3IpO1xyXG5cdH1cclxuXHRwcml2YXRlIHN0YXRpYyBwcmVjZWRlbmNlKG9wZXJhdG9yOiBzdHJpbmcpOiBudW1iZXIge1xyXG5cdFx0aWYgKC9bXFwrXFwtXS8udGVzdChvcGVyYXRvcikpIHtcclxuXHRcdFx0IHJldHVybiAxO1xyXG5cdFx0fVxyXG5cdFx0aWYgKC9bXFwqXFwvXS8udGVzdChvcGVyYXRvcikpIHtcclxuXHRcdFx0IHJldHVybiAyO1xyXG5cdFx0fVxyXG5cdFx0aWYgKC9bXFxeXS8udGVzdChvcGVyYXRvcikpIHtcclxuXHRcdFx0IHJldHVybiAzO1xyXG5cdFx0fVxyXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiVW5rbm93biBvcGVyYXRvci5cIik7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZW51bSBUb2tlblR5cGUgeyBQbHVzLCBNaW51cywgTXVsdGlwbHksIERpdmlkZSwgRXhwb25lbnQsIE51bWJlciwgTFBhcmVuLCBSUGFyZW4sIEVuZCwgVW5rbm93biB9XHJcbmV4cG9ydCBjbGFzcyBUb2tlbiB7XHJcblx0cHVibGljIHR5cGU6IFRva2VuVHlwZTtcclxuXHRwdWJsaWMgdmFsdWU6IG51bWJlcjtcclxuXHRjb25zdHJ1Y3Rvcih0eXBlOiBUb2tlblR5cGUsIHZhbHVlPzogbnVtYmVyKSB7XHJcblx0XHR0aGlzLnR5cGUgPSB0eXBlO1xyXG5cdFx0dGhpcy52YWx1ZSA9IHZhbHVlO1xyXG5cdH1cclxufVxyXG5leHBvcnQgY2xhc3MgTGV4ZXIge1xyXG5cdHByaXZhdGUgdG9rZW5zOiBzdHJpbmdbXTtcclxuXHRwcml2YXRlIHRva2VuSW5kZXg6IG51bWJlcjtcclxuXHRjb25zdHJ1Y3RvcihpbnB1dDogc3RyaW5nKSB7XHJcblx0XHR0aGlzLnRva2VucyA9IGlucHV0LnJlcGxhY2UoXCIgXCIsIFwiXCIpLm1hdGNoKC9cXCh8XFwpfFxcZCsoXFwuXFxkKyk/fFtcXCtcXC1cXCpcXC9cXF5dL2cpO1xyXG5cdFx0dGhpcy50b2tlbkluZGV4ID0gMDtcclxuXHR9XHJcblx0cHVibGljIGdldE5leHRUb2tlbigpOiBUb2tlbiB7XHJcblx0XHRpZiAodGhpcy50b2tlbnMubGVuZ3RoID09PSB0aGlzLnRva2VuSW5kZXgpIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBUb2tlbihUb2tlblR5cGUuRW5kKTtcclxuXHRcdH1cclxuXHRcdGxldCBpbnB1dDogc3RyaW5nID0gdGhpcy50b2tlbnNbdGhpcy50b2tlbkluZGV4KytdO1xyXG5cdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oaW5wdXQpO1xyXG5cdH1cclxuXHRwdWJsaWMgZ2V0Q3VycmVudFRva2VuKCk6IFRva2VuIHtcclxuXHRcdGlmICh0aGlzLnRva2Vucy5sZW5ndGggLSAxID09PSB0aGlzLnRva2VuSW5kZXgpIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBUb2tlbihUb2tlblR5cGUuRW5kKTtcclxuXHRcdH1cclxuXHRcdGxldCBpbnB1dDogc3RyaW5nID0gdGhpcy50b2tlbnNbdGhpcy50b2tlbkluZGV4XTtcclxuXHRcdHJldHVybiB0aGlzLmdldFRva2VuKGlucHV0KTtcclxuXHR9XHJcblx0cHVibGljIHJldmVydCgpOiB2b2lkIHtcclxuXHRcdGlmICh0aGlzLnRva2VuSW5kZXggPD0gMCkgeyB0aHJvdyBFcnJvcihcIkluZGV4IG91dCBvZiByYW5nZVwiKTsgfVxyXG5cdFx0dGhpcy50b2tlbkluZGV4LS07XHJcblx0fVxyXG5cdHByaXZhdGUgZ2V0VG9rZW4oaW5wdXQ6IHN0cmluZyk6IFRva2VuIHtcclxuXHRcdGlmICgvXFwrLy50ZXN0KGlucHV0KSkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IFRva2VuKFRva2VuVHlwZS5QbHVzKTtcclxuXHRcdH1cclxuXHRcdGlmICgvXFwtLy50ZXN0KGlucHV0KSkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IFRva2VuKFRva2VuVHlwZS5NaW51cyk7XHJcblx0XHR9XHJcblx0XHRpZiAoL1xcKi8udGVzdChpbnB1dCkpIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBUb2tlbihUb2tlblR5cGUuTXVsdGlwbHkpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKC9cXC8vLnRlc3QoaW5wdXQpKSB7XHJcblx0XHRcdHJldHVybiBuZXcgVG9rZW4oVG9rZW5UeXBlLkRpdmlkZSk7XHJcblx0XHR9XHJcblx0XHRpZiAoL1xcXi8udGVzdChpbnB1dCkpIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBUb2tlbihUb2tlblR5cGUuRXhwb25lbnQpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKC9cXGQrKFxcLlxcZCspPy8udGVzdChpbnB1dCkpIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBUb2tlbihUb2tlblR5cGUuTnVtYmVyLCBwYXJzZUZsb2F0KGlucHV0KSk7XHJcblx0XHR9XHJcblx0XHRpZiAoL1xcKC8udGVzdChpbnB1dCkpIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBUb2tlbihUb2tlblR5cGUuTFBhcmVuKTtcclxuXHRcdH1cclxuXHRcdGlmICgvXFwpLy50ZXN0KGlucHV0KSkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IFRva2VuKFRva2VuVHlwZS5SUGFyZW4pO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIG5ldyBUb2tlbihUb2tlblR5cGUuVW5rbm93bik7XHJcblx0fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBQYXJzZXIge1xyXG5cdHByaXZhdGUgbGV4OiBMZXhlcjtcclxuXHRwdWJsaWMgcGFyc2UoY29kZTogc3RyaW5nKTogUmF0aW9uYWxOdW1iZXIge1xyXG5cdFx0dGhpcy5sZXggPSBuZXcgTGV4ZXIoY29kZSk7XHJcblx0XHRjb25zdCBleHByZXNzaW9uOiBSYXRpb25hbE51bWJlciA9IHRoaXMuZm91cnRoT3JkZXJPcGVyYXRvcnMoKTtcclxuXHRcdGNvbnN0IHRva2VuOiBUb2tlbiA9IHRoaXMubGV4LmdldEN1cnJlbnRUb2tlbigpOyAvLyBpcyBhbHJlYWR5IGFkdmFuY2VkIGJlY2F1c2Ugb2YgbnVtYmVyKClcclxuXHRcdGlmICh0b2tlbi50eXBlID09PSBUb2tlblR5cGUuRW5kKSB7XHJcblx0XHRcdHJldHVybiBleHByZXNzaW9uO1xyXG5cdFx0fVxyXG5cdFx0dGhyb3cgRXJyb3IoXCJFbmQgZXhwZWN0ZWRcIik7XHJcblx0fVxyXG5cdC8vIGFkZGl0aW9uIGFuZCBzdWJzdHJhY3Rpb25cclxuXHRwcml2YXRlIGZvdXJ0aE9yZGVyT3BlcmF0b3JzKCk6IFJhdGlvbmFsTnVtYmVyIHtcclxuXHRcdGxldCBjb21wb25lbnQxOiBSYXRpb25hbE51bWJlciA9IHRoaXMudGhpcmRPcmRlck9wZXJhdG9ycygpO1xyXG5cdFx0bGV0IHRva2VuOiBUb2tlbiA9IHRoaXMubGV4LmdldE5leHRUb2tlbigpO1xyXG5cdFx0d2hpbGUgKHRva2VuLnR5cGUgPT09IFRva2VuVHlwZS5QbHVzIHx8IHRva2VuLnR5cGUgPT09IFRva2VuVHlwZS5NaW51cykge1xyXG5cdFx0XHRsZXQgY29tcG9uZW50MjogUmF0aW9uYWxOdW1iZXIgPSB0aGlzLnRoaXJkT3JkZXJPcGVyYXRvcnMoKTtcclxuXHRcdFx0aWYgKHRva2VuLnR5cGUgPT09IFRva2VuVHlwZS5QbHVzKSB7XHJcblx0XHRcdFx0Y29tcG9uZW50MSA9IGNvbXBvbmVudDEuYWRkKGNvbXBvbmVudDIpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHRva2VuLnR5cGUgPT09IFRva2VuVHlwZS5NaW51cykge1xyXG5cdFx0XHRcdGNvbXBvbmVudDEgPSBjb21wb25lbnQxLnN1Yihjb21wb25lbnQyKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0b2tlbiA9IHRoaXMubGV4LmdldE5leHRUb2tlbigpO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5sZXgucmV2ZXJ0KCk7XHJcblx0XHRyZXR1cm4gY29tcG9uZW50MTtcclxuXHR9XHJcblx0Ly8gbXVsdGlwbGljYXRpb24gYW5kIGRpdmlzaW9uXHJcblx0cHJpdmF0ZSB0aGlyZE9yZGVyT3BlcmF0b3JzKCk6IFJhdGlvbmFsTnVtYmVyIHtcclxuXHRcdGxldCBmYWN0b3IxOiBSYXRpb25hbE51bWJlciA9IHRoaXMuc2Vjb25kT3JkZXJPcGVyYXRvcnMoKTtcclxuXHRcdGxldCB0b2tlbjogVG9rZW4gPSB0aGlzLmxleC5nZXROZXh0VG9rZW4oKTtcclxuXHRcdHdoaWxlICh0b2tlbi50eXBlID09PSBUb2tlblR5cGUuTXVsdGlwbHkgfHwgdG9rZW4udHlwZSA9PT0gVG9rZW5UeXBlLkRpdmlkZSkge1xyXG5cdFx0XHRsZXQgZmFjdG9yMjogUmF0aW9uYWxOdW1iZXIgPSB0aGlzLnNlY29uZE9yZGVyT3BlcmF0b3JzKCk7XHJcblx0XHRcdGlmICh0b2tlbi50eXBlID09PSBUb2tlblR5cGUuTXVsdGlwbHkpIHtcclxuXHRcdFx0XHRmYWN0b3IxID0gZmFjdG9yMS5tdWx0KGZhY3RvcjIpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHRva2VuLnR5cGUgPT09IFRva2VuVHlwZS5EaXZpZGUpIHtcclxuXHRcdFx0XHRmYWN0b3IxID0gZmFjdG9yMS5kaXYoZmFjdG9yMik7XHJcblx0XHRcdH1cclxuXHRcdFx0dG9rZW4gPSB0aGlzLmxleC5nZXROZXh0VG9rZW4oKTtcclxuXHRcdH1cclxuXHRcdHRoaXMubGV4LnJldmVydCgpO1xyXG5cdFx0cmV0dXJuIGZhY3RvcjE7XHJcblx0fVxyXG5cdC8vIGV4cG9uZW50cyBhbmQgcm9vdHNcclxuXHRwcml2YXRlIHNlY29uZE9yZGVyT3BlcmF0b3JzKCk6IFJhdGlvbmFsTnVtYmVyIHtcclxuXHRcdGxldCBmYWN0b3IxOiBSYXRpb25hbE51bWJlciA9IHRoaXMuZmlyc3RPcmRlck9wZXJhdG9ycygpO1xyXG5cdFx0bGV0IHRva2VuOiBUb2tlbiA9IHRoaXMubGV4LmdldE5leHRUb2tlbigpO1xyXG5cdFx0d2hpbGUgKHRva2VuLnR5cGUgPT09IFRva2VuVHlwZS5FeHBvbmVudCkge1xyXG5cdFx0XHRsZXQgZmFjdG9yMjogUmF0aW9uYWxOdW1iZXIgPSB0aGlzLmZpcnN0T3JkZXJPcGVyYXRvcnMoKTtcclxuXHRcdFx0ZmFjdG9yMSA9IGZhY3RvcjEuZXhwKGZhY3RvcjIpO1xyXG5cdFx0XHR0b2tlbiA9IHRoaXMubGV4LmdldE5leHRUb2tlbigpO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5sZXgucmV2ZXJ0KCk7XHJcblx0XHRyZXR1cm4gZmFjdG9yMTtcclxuXHR9XHJcblx0Ly8gbnVtYmVycyBhbmQgcGFyYW50aGVzZXNcclxuXHRwcml2YXRlIGZpcnN0T3JkZXJPcGVyYXRvcnMoKTogUmF0aW9uYWxOdW1iZXIge1xyXG5cdFx0bGV0IHZhbHVlOiBSYXRpb25hbE51bWJlciA9IG5ldyBSYXRpb25hbE51bWJlcigxKTtcclxuXHRcdGxldCB0b2tlbjogVG9rZW4gPSB0aGlzLmxleC5nZXROZXh0VG9rZW4oKTtcclxuXHRcdGlmICh0b2tlbi50eXBlID09PSBUb2tlblR5cGUuUGx1cyB8fCB0b2tlbi50eXBlID09PSBUb2tlblR5cGUuTWludXMpIHtcclxuXHRcdFx0aWYgKHRva2VuLnR5cGUgPT09IFRva2VuVHlwZS5NaW51cykge1xyXG5cdFx0XHRcdHZhbHVlID0gdmFsdWUubXVsdCgtMSk7XHJcblx0XHRcdH1cclxuXHRcdFx0dG9rZW4gPSB0aGlzLmxleC5nZXROZXh0VG9rZW4oKTtcclxuXHRcdH1cclxuXHRcdGlmICh0b2tlbi50eXBlID09PSBUb2tlblR5cGUuTFBhcmVuKSB7XHJcblx0XHRcdHZhbHVlID0gdmFsdWUubXVsdCh0aGlzLmZvdXJ0aE9yZGVyT3BlcmF0b3JzKCkpO1xyXG5cdFx0XHR0b2tlbiA9IHRoaXMubGV4LmdldE5leHRUb2tlbigpO1xyXG5cdFx0XHRpZiAodG9rZW4udHlwZSAhPT0gVG9rZW5UeXBlLlJQYXJlbikge1xyXG5cdFx0XHRcdHRocm93IEVycm9yKFwiVW5iYWxhbmNlZCBwYXJlbnRoZXNpc1wiKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKHRva2VuLnR5cGUgPT09IFRva2VuVHlwZS5OdW1iZXIpIHtcclxuXHRcdFx0XHR2YWx1ZSA9IHZhbHVlLm11bHQodG9rZW4udmFsdWUpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRocm93IEVycm9yKFwiTm90IGEgbnVtYmVyXCIpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdmFsdWU7XHJcblx0fVxyXG59XHJcblxyXG4vKlxyXG5cdHB1YmxpYyBzdGF0aWMgZXZhbHVhdGUoZXhwcmVzaW9uOiBzdHJpbmcpOiBSYXRpb25hbE51bWJlciB7XHJcblx0dmFyIGRpZ2l0UGF0dGVybiA9IG5ldyBSZWdFeHAoJzAgfCAxIHwgMiB8IDMgfCA0IHwgNSB8IDYgfCA3IHwgOCB8IDknKTtcclxuXHR2YXIgc2lnblBhdHRlcm4gPSBuZXcgUmVnRXhwKCdcXCt8XFwtJyk7XHJcblx0dmFyIG51bWJlclBhdHRlcm4gPSBuZXcgUmVnRXhwKCdbJyArIHNpZ25QYXR0ZXJuICsgJ10nICsgJ3snICsgZGlnaXRQYXR0ZXJuICsgJ30nKTtcclxuXHR2YXIgZmFjdG9yUGF0dGVybiA9IG5ldyBSZWdFeHAobnVtYmVyUGF0dGVybiArICd8XFwoJyArIGV4cHJlc3Npb25QYXR0ZXJuICsgJ1xcKScpO1xyXG5cdHZhciBjb21wb25lbnRQYXR0ZXJuID0gbmV3IFJlZ0V4cChmYWN0b3JQYXR0ZXJuICsgJ1t7KCBcXCogfCBcXC8gKScgKyBmYWN0b3JQYXR0ZXJuICsgJ31dJyk7XHJcblx0dmFyIGV4cHJlc3Npb25QYXR0ZXJuID0gbmV3IFJlZ0V4cChjb21wb25lbnRQYXR0ZXJuICsgJ1t7KCBcXCsgfCBcXC0pJyArIGNvbXBvbmVudFBhdHRlcm4gKyAnfV0nKTtcclxufSovXHJcblxyXG4vKlxyXG5leHBycjogNHRoT1JERVIrO1xyXG40dGhPUkRFUjogY29tcG9uZW50MT0zcmRPUkRFUiAoKFBMVVN8TUlOVVMpIGNvbXBvbmVudDI9M3JkT1JERVIpKztcclxuM3JkT1JERVI6IGZhY3RvcjE9Mk5ET1JERVIgKChNVUxUSVBMWXxESVZJREUpIGZhY3RvcjE9Mm5kT1JERVIpK1xyXG4ybmRPUkRFUjogZmFjdG9yMT0xc3RPUkRFUiAoRVhQT05FTlQgZmFjdG9yMj0xc3RPUkRFUikrXHJcbjFzdE9SREVSOiAoUExVU3xNSU5VU3xlbXB0eSkgKExQQVJFTiB2YWx1ZT00dGhPUkRFUiBSUEFSRU58IE5VTUJFUilcclxuKi8iLCJpbXBvcnQgeyBSYXRpb25hbE51bWJlciB9IGZyb20gXCIuL1JhdGlvbmFsTnVtYmVyXCI7XHJcbmltcG9ydCB7IENvbHVtblZlY3RvciwgVmVjdG9yIH0gZnJvbSBcIi4vVmVjdG9yXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTWF0cml4IHtcclxuXHRwdWJsaWMgc3RhdGljIGF1Z21lbnQoQTogTWF0cml4LCBCOiBNYXRyaXggfCBWZWN0b3IpOiBNYXRyaXgge1xyXG5cdFx0aWYgKEEubSAhPT0gQi5tKSB7IHRocm93IG5ldyBFcnJvcihcIlRoZSB0d28gbWF0cmljZXMgKHZlY3RvcikgbXVzdCBoYXZlIHRoZSBzYW1lIG51bWJlciBvZiByb3dzIChlbGVtZW50cykuXCIpOyB9XHJcblx0XHRsZXQgcmV0OiBNYXRyaXggPSBudWxsO1xyXG5cdFx0aWYgKEIgaW5zdGFuY2VvZiBNYXRyaXgpIHtcclxuXHRcdFx0cmV0ID0gbmV3IE1hdHJpeChBLm0sIEIubiArIEEubik7XHJcblx0XHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBBLm07IGkrKykge1xyXG5cdFx0XHRcdGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCBBLm47IGorKykge1xyXG5cdFx0XHRcdFx0cmV0LmVsZW1lbnRzW2ldW2pdID0gQS5lbGVtZW50c1tpXVtqXTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IEIubTsgaSsrKSB7XHJcblx0XHRcdFx0Zm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IEIubjsgaisrKSB7XHJcblx0XHRcdFx0XHRyZXQuZWxlbWVudHNbaV1bQS5uICsgal0gPSBCLmVsZW1lbnRzW2ldW2pdO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKEIgaW5zdGFuY2VvZiBWZWN0b3IpIHtcclxuXHRcdFx0XHRyZXQgPSBuZXcgTWF0cml4KEEubSwgQS5uICsgMSk7XHJcblx0XHRcdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IEEubTsgaSsrKSB7XHJcblx0XHRcdFx0XHRmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgQS5uOyBqKyspIHtcclxuXHRcdFx0XHRcdFx0cmV0LmVsZW1lbnRzW2ldW2pdID0gQS5lbGVtZW50c1tpXVtqXTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Zm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IEIubTsgaisrKSB7XHJcblx0XHRcdFx0XHRyZXQuZWxlbWVudHNbal1bQS5uXSA9IEIuZWxlbWVudHNbal07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmV0O1xyXG5cdH1cclxuXHQvLyByb3ctbXVsdGlwbHlpbmcgdHJhbnNmb3JtYXRpb25zXHJcblx0cHVibGljIHN0YXRpYyBtdWx0aXBsaWNhdGlvbihuOiBudW1iZXIsIHJvdzE6IG51bWJlciwgcm93MjogbnVtYmVyLCBtdWx0OiBudW1iZXIpOiBNYXRyaXgge1xyXG5cdFx0aWYgKG4gPCByb3cxIHx8IG4gPCByb3cyKSB7IHRocm93IG5ldyBFcnJvcihcIkNvbHVtbiBpbmRleCBtdXN0IGJlIGxlc3Mgb3IgZXF1YWx0IHRoYW4gbWF0cml4IHNpemUuXCIpOyB9XHJcblx0XHRjb25zdCBtYXRyaXg6IE1hdHJpeCA9IG5ldyBNYXRyaXhJZGVudGl0eShuKTtcclxuXHRcdG1hdHJpeC5lbGVtZW50c1tyb3cxXVtyb3cyXSA9IG5ldyBSYXRpb25hbE51bWJlcihtdWx0KTtcclxuXHRcdHJldHVybiBtYXRyaXg7XHJcblx0fVxyXG5cdHB1YmxpYyBzdGF0aWMgcmFuZG9tU3F1YXJlKCk6IE1hdHJpeCB7XHJcblx0XHRjb25zdCBtYXRyaXg6IE1hdHJpeCA9IG5ldyBNYXRyaXgoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCkgKyAzLCBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0KSArIDMpOyAvLyBtaW5pbXVtIHNpemUgM3gzIG1hdHJpeFxyXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IG1hdHJpeC5tOyBpKyspIHtcclxuXHRcdFx0Zm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IG1hdHJpeC5uOyBqKyspIHtcclxuXHRcdFx0XHRtYXRyaXguZWxlbWVudHNbaV1bal0gPSBuZXcgUmF0aW9uYWxOdW1iZXIoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwIC0gNTApKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIG1hdHJpeDtcclxuXHR9XHJcblx0cHVibGljIHN0YXRpYyByYW5kb20yKCk6IE1hdHJpeCB7XHJcblx0XHRjb25zdCBudW1iZXJPZlVua25vd25zOiBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0ICsgMyk7IC8vIGJldHdlZW4gMyBhbmQgNyB1bmtub253c1xyXG5cdFx0Y29uc3QgdW5rbm93bnM6IG51bWJlcltdID0gW107XHJcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgbnVtYmVyT2ZVbmtub3duczsgaSsrKSB7XHJcblx0XHRcdHVua25vd25zW2ldID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjAgLSAxMCk7XHJcblx0XHR9XHJcblx0XHQvLyB0b2RvOiBjaGFuZ2UgYmVsb3dcclxuXHRcdGNvbnN0IG1hdHJpeDogTWF0cml4ID0gbmV3IE1hdHJpeChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0KSArIDMsIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQpICsgMyk7XHJcblx0XHRyZXR1cm4gbWF0cml4O1xyXG5cdH1cclxuXHRwdWJsaWMgbTogbnVtYmVyOyAvLyByb3dzXHJcblx0cHVibGljIG46IG51bWJlcjsgLy8gY29sdW1uc1xyXG5cdHB1YmxpYyBlbGVtZW50czogUmF0aW9uYWxOdW1iZXJbXVtdO1xyXG5cdGNvbnN0cnVjdG9yKG06IG51bWJlciwgbjogbnVtYmVyKSB7XHJcblx0XHR0aGlzLm0gPSBtO1xyXG5cdFx0dGhpcy5uID0gbjtcclxuXHRcdHRoaXMuZWxlbWVudHMgPSBbXTtcclxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLm07IGkrKykge1xyXG5cdFx0XHR0aGlzLmVsZW1lbnRzW2ldID0gW107XHJcblx0XHR9XHJcblx0fVxyXG5cdHB1YmxpYyBlcXVhbHMoTTogTWF0cml4KTogYm9vbGVhbiB7XHJcblx0XHRpZiAodGhpcy5tICE9PSBNLm0gfHwgdGhpcy5uICE9PSBNLm4pIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMubTsgaSsrKSB7XHJcblx0XHRcdGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCB0aGlzLm47IGorKykge1xyXG5cdFx0XHRcdGlmICghdGhpcy5lbGVtZW50c1tpXVtqXS5lcXVhbHMoTS5lbGVtZW50c1tpXVtqXSkpIHsgcmV0dXJuIGZhbHNlOyB9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHRwdWJsaWMgYWRkKHg6IE1hdHJpeCk6IE1hdHJpeCB7XHJcblx0XHRpZiAodGhpcy5tICE9PSB4Lm0gfHwgdGhpcy5uICE9PSB4Lm4pIHsgdGhyb3cgbmV3IEVycm9yKFwiTWlzbWF0Y2hlZCBkaW1lbnNpb25zLlwiKTsgfVxyXG5cdFx0Y29uc3QgcmVzOiBNYXRyaXggPSBuZXcgTWF0cml4KHRoaXMubSwgdGhpcy5uKTtcclxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCByZXMubTsgaSsrKSB7XHJcblx0XHRcdGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCByZXMubjsgaisrKSB7XHJcblx0XHRcdFx0cmVzLmVsZW1lbnRzW2ldW2pdID0gdGhpcy5lbGVtZW50c1tpXVtqXS5hZGQoeC5lbGVtZW50c1tpXVtqXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXM7XHJcblx0fVxyXG5cdHB1YmxpYyBzdWIoeDogTWF0cml4KTogTWF0cml4IHtcclxuXHRcdGlmICh0aGlzLm0gIT09IHgubSB8fCB0aGlzLm4gIT09IHgubikgeyB0aHJvdyBuZXcgRXJyb3IoXCJNaXNtYXRjaGVkIGRpbWVuc2lvbnMuXCIpOyB9XHJcblx0XHRjb25zdCByZXM6IE1hdHJpeCA9IG5ldyBNYXRyaXgodGhpcy5tLCB0aGlzLm4pO1xyXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHJlcy5tOyBpKyspIHtcclxuXHRcdFx0Zm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IHJlcy5uOyBqKyspIHtcclxuXHRcdFx0XHRyZXMuZWxlbWVudHNbaV1bal0gPSB0aGlzLmVsZW1lbnRzW2ldW2pdLnN1Yih4LmVsZW1lbnRzW2ldW2pdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlcztcclxuXHR9XHJcblx0cHVibGljIG11bHQoeDogbnVtYmVyIHwgUmF0aW9uYWxOdW1iZXIgfCBNYXRyaXgpOiBNYXRyaXgge1xyXG5cdFx0bGV0IHJlczogTWF0cml4ID0gbnVsbDtcclxuXHRcdGlmICh0eXBlb2YgeCA9PT0gXCJudW1iZXJcIikge1xyXG5cdFx0XHRyZXMgPSBuZXcgTWF0cml4KHRoaXMubSwgdGhpcy5uKTtcclxuXHRcdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHJlcy5tOyBpKyspIHtcclxuXHRcdFx0XHRmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgcmVzLm47IGorKykge1xyXG5cdFx0XHRcdFx0cmVzLmVsZW1lbnRzW2ldW2pdID0gdGhpcy5lbGVtZW50c1tpXVtqXS5tdWx0KHgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIGlmICh4IGluc3RhbmNlb2YgUmF0aW9uYWxOdW1iZXIpIHtcclxuXHRcdFx0cmVzID0gbmV3IE1hdHJpeCh0aGlzLm0sIHRoaXMubik7XHJcblx0XHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCByZXMubTsgaSsrKSB7XHJcblx0XHRcdFx0Zm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IHJlcy5uOyBqKyspIHtcclxuXHRcdFx0XHRcdHJlcy5lbGVtZW50c1tpXVtqXSA9IHRoaXMuZWxlbWVudHNbaV1bal0ubXVsdCh4KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmICh4IGluc3RhbmNlb2YgTWF0cml4KSB7XHJcblx0XHRcdFx0aWYgKHRoaXMubiAhPT0geC5tKSB7IHRocm93IG5ldyBFcnJvcihcIk1pc21hdGNoZWQgZGltZW5zaW9ucy5cIik7IH1cclxuXHRcdFx0XHRyZXMgPSBuZXcgTWF0cml4KHRoaXMubSwgeC5uKTtcclxuXHRcdFx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgcmVzLm07IGkrKykge1xyXG5cdFx0XHRcdFx0Zm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IHJlcy5uOyBqKyspIHtcclxuXHRcdFx0XHRcdFx0bGV0IHN1bTogUmF0aW9uYWxOdW1iZXIgPSBuZXcgUmF0aW9uYWxOdW1iZXIoMCk7XHJcblx0XHRcdFx0XHRcdGZvciAobGV0IGs6IG51bWJlciA9IDA7IGsgPCB0aGlzLm47IGsrKykge1xyXG5cdFx0XHRcdFx0XHRcdHN1bSA9IHN1bS5hZGQodGhpcy5lbGVtZW50c1tpXVtrXS5tdWx0KHguZWxlbWVudHNba11bal0pKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRyZXMuZWxlbWVudHNbaV1bal0gPSBzdW07XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzO1xyXG5cdH1cclxuXHRwdWJsaWMgdmVjdG9yUHJvZHVjdCh2OiBDb2x1bW5WZWN0b3IpOiBDb2x1bW5WZWN0b3Ige1xyXG5cdFx0aWYgKHRoaXMubiAhPT0gdi5tKSB7IHRocm93IG5ldyBFcnJvcihcIk1pc21hdGNoZWQgZGltZW5zaW9ucy5cIik7IH1cclxuXHRcdGNvbnN0IHJlczogQ29sdW1uVmVjdG9yID0gbmV3IENvbHVtblZlY3Rvcih2Lm0pO1xyXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMubTsgaSsrKSB7XHJcblx0XHRcdGxldCBzdW06IFJhdGlvbmFsTnVtYmVyID0gbmV3IFJhdGlvbmFsTnVtYmVyKDApO1xyXG5cdFx0XHRmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgdGhpcy5uOyBqKyspIHtcclxuXHRcdFx0XHRzdW0gPSBzdW0uYWRkKHRoaXMuZWxlbWVudHNbaV1bal0ubXVsdCh2LmVsZW1lbnRzW2pdKSk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmVzLmVsZW1lbnRzW2ldID0gc3VtO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlcztcclxuXHR9XHJcblx0cHVibGljIHRyYW5zcG9zZSgpOiBNYXRyaXgge1xyXG5cdFx0Y29uc3QgcmV0OiBNYXRyaXggPSBuZXcgTWF0cml4KHRoaXMubiwgdGhpcy5tKTtcclxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLm07IGkrKykge1xyXG5cdFx0XHRmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgdGhpcy5uOyBqKyspIHtcclxuXHRcdFx0XHRyZXQuZWxlbWVudHNbal1baV0gPSB0aGlzLmVsZW1lbnRzW2ldW2pdO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmV0O1xyXG5cdH1cclxuXHRwdWJsaWMgZGVlcENvcHkoKTogTWF0cml4IHtcclxuXHRcdGNvbnN0IHJldDogTWF0cml4ID0gbmV3IE1hdHJpeCh0aGlzLm0sIHRoaXMubik7XHJcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5tOyBpKyspIHtcclxuXHRcdFx0Zm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IHRoaXMubjsgaisrKSB7XHJcblx0XHRcdFx0cmV0LmVsZW1lbnRzW2ldW2pdID0gdGhpcy5lbGVtZW50c1tpXVtqXTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJldDtcclxuXHR9XHJcblx0cHVibGljIHN3aXRjaFJvd3MoaWR4MTogbnVtYmVyLCBpZHgyOiBudW1iZXIpOiB2b2lkIHtcclxuXHRcdGlmICh0aGlzLm0gPCBpZHgxIHx8IHRoaXMubSA8IGlkeDIpIHsgcmV0dXJuOyB9XHJcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5uOyBpKyspIHtcclxuXHRcdFx0Y29uc3QgdG1wOiBSYXRpb25hbE51bWJlciA9IHRoaXMuZWxlbWVudHNbaWR4MV1baV07XHJcblx0XHRcdHRoaXMuZWxlbWVudHNbaWR4MV1baV0gPSB0aGlzLmVsZW1lbnRzW2lkeDJdW2ldO1xyXG5cdFx0XHR0aGlzLmVsZW1lbnRzW2lkeDJdW2ldID0gdG1wO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRwdWJsaWMgbXVsdGlwbHlSb3coaWR4OiBudW1iZXIsIHNjYWxhcjogUmF0aW9uYWxOdW1iZXIpOiB2b2lkIHtcclxuXHRcdGlmICh0aGlzLm0gPCBpZHgpIHsgcmV0dXJuOyB9XHJcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5uOyBpKyspIHtcclxuXHRcdFx0dGhpcy5lbGVtZW50c1tpZHhdW2ldID0gdGhpcy5lbGVtZW50c1tpZHhdW2ldLm11bHQoc2NhbGFyKS5zaW1wbGlmaWVkRm9ybSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRwdWJsaWMgYWRkUm93cyhpZHgxOiBudW1iZXIsIGlkeDI6IG51bWJlciwgc2NhbGFyOiBSYXRpb25hbE51bWJlcik6IHZvaWQge1xyXG5cdFx0aWYgKHRoaXMubSA8IGlkeDEgfHwgdGhpcy5tIDwgaWR4MikgeyByZXR1cm47IH1cclxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLm47IGkrKykge1xyXG5cdFx0XHR0aGlzLmVsZW1lbnRzW2lkeDFdW2ldID0gdGhpcy5lbGVtZW50c1tpZHgyXVtpXS5tdWx0KHNjYWxhcikuYWRkKHRoaXMuZWxlbWVudHNbaWR4MV1baV0pLnNpbXBsaWZpZWRGb3JtKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cdHB1YmxpYyBhZGRSb3cxVG9Sb3cyKGlkeDE6IG51bWJlciwgc2NhbGFyMTogUmF0aW9uYWxOdW1iZXIsIGlkeDI6IG51bWJlciwgc2NhbGFyMjogUmF0aW9uYWxOdW1iZXIpOiB2b2lkIHtcclxuXHRcdGlmICh0aGlzLm0gPCBpZHgxIHx8IHRoaXMubSA8IGlkeDIpIHsgcmV0dXJuOyB9XHJcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5uOyBpKyspIHtcclxuXHRcdFx0dGhpcy5lbGVtZW50c1tpZHgyXVtpXSA9IHRoaXMuZWxlbWVudHNbaWR4Ml1baV0ubXVsdChzY2FsYXIyKS5hZGQodGhpcy5lbGVtZW50c1tpZHgxXVtpXS5tdWx0KHNjYWxhcjEpKS5zaW1wbGlmaWVkRm9ybSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHQvLyBhIHNxdWFyZSBtYXRyaXggaXMgYSBtYXRyaXggd2l0aCB0aGUgc2FtZSBudW1iZXIgb2Ygcm93cyBhbmQgY29sdW1uc1xyXG5cdHB1YmxpYyBpc1NxdWFyZSgpOiBib29sZWFuIHtcclxuXHRcdHJldHVybiB0aGlzLm0gPT09IHRoaXMubjtcclxuXHR9XHJcblx0Ly8gYSBkaWFnb25hbCBtYXRyaXggaXMgYSBtYXRyaXggaW4gd2hpY2ggdGhlIGVudHJpZXMgb3V0c2lkZSB0aGUgbWFpbiBkaWFnb25hbCBhcmUgYWxsIHplcm9cclxuXHRwdWJsaWMgaXNEaWFnb25hbCgpOiBib29sZWFuIHtcclxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLm07IGkrKykge1xyXG5cdFx0XHRmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgdGhpcy5uOyBqKyspIHtcclxuXHRcdFx0XHRpZiAoaSA9PT0gaikge1xyXG5cdFx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmICghdGhpcy5lbGVtZW50c1tpXVtqXS5lcXVhbHMobmV3IFJhdGlvbmFsTnVtYmVyKDApKSkgeyByZXR1cm4gZmFsc2U7IH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cdC8vIHRoZSBpZGVudGl0eSBtYXRyaXggb2Ygc2l6ZSBuIGlzIHRoZSBuIMOXIG4gc3F1YXJlIG1hdHJpeCB3aXRoIG9uZXMgb24gdGhlIG1haW4gZGlhZ29uYWwgYW5kIHplcm9zIGVsc2V3aGVyZVxyXG5cdC8vIFtBTElBU0VTXTogdW5pdCBtYXRyaXhcclxuXHRwdWJsaWMgaXNJZGVudGl0eSgpOiBib29sZWFuIHtcclxuXHRcdGlmICh0aGlzLm0gIT09IHRoaXMubikgeyB0aHJvdyBuZXcgRXJyb3IoXCJOb3QgYSBzcXVhcmUgbWF0cml4LlwiKTsgfVxyXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMubTsgaSsrKSB7XHJcblx0XHRcdGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCB0aGlzLm47IGorKykge1xyXG5cdFx0XHRcdGlmIChpID09PSBqKSB7XHJcblx0XHRcdFx0XHRpZiAoIXRoaXMuZWxlbWVudHNbaV1bal0uZXF1YWxzKG5ldyBSYXRpb25hbE51bWJlcigxKSkpIHsgcmV0dXJuIGZhbHNlOyB9XHJcblx0XHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKCF0aGlzLmVsZW1lbnRzW2ldW2pdLmVxdWFscyhuZXcgUmF0aW9uYWxOdW1iZXIoMCkpKSB7IHJldHVybiBmYWxzZTsgfVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblx0Ly8gYSBtYXRyaXggaXMgbm9ybWFsIGlmIGl0IGNvbW11dGVzIHdpdGggaXRzIGNvbmp1Z2F0ZSB0cmFuc3Bvc2VcclxuXHRwdWJsaWMgaXNOb3JtYWwoKTogYm9vbGVhbiB7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJOb3QgaW1wbGVtZW50ZWRcIik7XHJcblx0fVxyXG5cdC8vIHRoZSBjb25qdWdhdGUgdHJhbnNwb3NlIG9mIGFuIG0tYnktbiBtYXRyaXggQSB3aXRoIGNvbXBsZXggZW50cmllcyBpcyB0aGUgbi1ieS1tIG1hdHJpeCBB4oiXIG9idGFpbmVkIGZyb20gQVxyXG5cdC8vIGJ5IHRha2luZyB0aGUgdHJhbnNwb3NlIGFuZCB0aGVuIHRha2luZyB0aGUgY29tcGxleCBjb25qdWdhdGUgb2YgZWFjaCBlbnRyeVxyXG5cdC8vIFtBTElBU0VTXTogSGVybWl0aWFuIHRyYW5zcG9zZVxyXG5cdHB1YmxpYyB0b0Nvbmp1Z2F0ZVRyYW5zcG9zZSgpOiBNYXRyaXgge1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiTm90IGltcGxlbWVudGVkXCIpO1xyXG5cdH1cclxuXHRwdWJsaWMgaXNVcHBlclRyaWFuZ3VsYXIoKTogYm9vbGVhbiB7XHJcblx0XHQvLyB0b2RvOiBjaGVjayBpZiBkZWZpbml0aW9uIGlzIHZhbGlkIGZvciBhIG5vbiBzcXVhcmUgbWF0cml4XHJcblx0XHQvLyBpZiAodGhpcy5tICE9PSB0aGlzLm4pIHsgdGhyb3cgbmV3IEVycm9yKFwiTm90IGEgc3F1YXJlIG1hdHJpeC5cIik7IH1cclxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDE7IGkgPCB0aGlzLm07IGkrKykge1xyXG5cdFx0XHRmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgaTsgaisrKSB7XHJcblx0XHRcdFx0aWYgKCF0aGlzLmVsZW1lbnRzW2ldW2pdLmVxdWFscyhuZXcgUmF0aW9uYWxOdW1iZXIoMCkpKSB7IHJldHVybiBmYWxzZTsgfVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblx0cHVibGljIGlzTG93ZXJUcmlhbmd1bGFyKCk6IGJvb2xlYW4ge1xyXG5cdFx0Ly8gdG9kbzogY2hlY2sgaWYgZGVmaW5pdGlvbiBpcyB2YWxpZCBmb3IgYSBub24gc3F1YXJlIG1hdHJpeFxyXG5cdFx0Ly8gaWYgKHRoaXMubSAhPT0gdGhpcy5uKSB7IHRocm93IG5ldyBFcnJvcihcIk5vdCBhIHNxdWFyZSBtYXRyaXguXCIpOyB9XHJcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5tOyBpKyspIHtcclxuXHRcdFx0Zm9yIChsZXQgajogbnVtYmVyID0gaSArIDE7IGogPCB0aGlzLm47IGorKykge1xyXG5cdFx0XHRcdGlmICghdGhpcy5lbGVtZW50c1tpXVtqXS5lcXVhbHMobmV3IFJhdGlvbmFsTnVtYmVyKDApKSkgeyByZXR1cm4gZmFsc2U7IH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cdC8vIGEgc3ltbWV0cmljIG1hdHJpeCBpcyBhIHNxdWFyZSBtYXRyaXggdGhhdCBpcyBlcXVhbCB0byBpdHMgdHJhbnNwb3NlXHJcblx0cHVibGljIGlzU3ltbWV0cmljKCk6IGJvb2xlYW4ge1xyXG5cdFx0aWYgKHRoaXMubSAhPT0gdGhpcy5uKSB7IHRocm93IG5ldyBFcnJvcihcIk5vdCBhIHNxdWFyZSBtYXRyaXguXCIpOyB9XHJcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5tOyBpKyspIHtcclxuXHRcdFx0Zm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IHRoaXMubjsgaisrKSB7XHJcblx0XHRcdFx0aWYgKCF0aGlzLmVsZW1lbnRzW2ldW2pdLmVxdWFscyh0aGlzLmVsZW1lbnRzW2pdW2ldKSkgeyByZXR1cm4gZmFsc2U7IH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cdC8vIGFuIG9ydGhvZ29uYWwgbWF0cml4IGlzIGEgc3F1YXJlIG1hdHJpeCB3aXRoIHJlYWwgZW50cmllcyB3aG9zZSBjb2x1bW5zIGFuZCByb3dzIGFyZSBvcnRob2dvbmFsIHVuaXQgdmVjdG9yc1xyXG5cdC8vIFtBTElBU0VTXTogcmVhbCBvcnRob2dvbmFsIG1hdHJpeFxyXG5cdHB1YmxpYyBpc09ydGhvZ29uYWwoKTogYm9vbGVhbiB7XHJcblx0XHRjb25zdCBNVDogTWF0cml4ID0gdGhpcy50cmFuc3Bvc2UoKTtcclxuXHRcdHJldHVybiB0aGlzLm11bHQoTVQpLmlzSWRlbnRpdHkoKTtcclxuXHR9XHJcblx0cHVibGljIGlzUm93RWNoZWxvbkZvcm0oKTogYm9vbGVhbiB7XHJcblx0XHRsZXQgZm91bmRaZXJvUm93OiBib29sZWFuID0gZmFsc2U7XHJcblx0XHQvLyBhbGwgbm9uemVybyByb3dzIChyb3dzIHdpdGggYXQgbGVhc3Qgb25lIG5vbnplcm8gZWxlbWVudCkgYXJlIGFib3ZlIGFueSByb3dzIG9mIGFsbCB6ZXJvZXNcclxuXHRcdC8vIChhbGwgemVybyByb3dzLCBpZiBhbnksIGJlbG9uZyBhdCB0aGUgYm90dG9tIG9mIHRoZSBtYXRyaXgpXHJcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5tOyBpKyspIHtcclxuXHRcdFx0aWYgKHRoaXMuaXNaZXJvUm93KGkpKSB7XHJcblx0XHRcdFx0Zm91bmRaZXJvUm93ID0gdHJ1ZTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRpZiAoZm91bmRaZXJvUm93KSB7IHJldHVybiBmYWxzZTsgfVxyXG5cdFx0XHR9Ly8gaWYgY3VycmVudCByb3cgaXMgbm90IHplcm8sIGJ1dCBhIHByZXZpb3VzIHJvdyBpcyB6ZXJvLCB0aGVuIG1hdHJpeCBpcyBub3QgaW4gcm93IGVjaGVsb24gZm9ybVxyXG5cdFx0fVxyXG5cdFx0Ly8gdGhlIGxlYWRpbmcgY29lZmZpY2llbnQgKHRoZSBmaXJzdCBub256ZXJvIG51bWJlciBmcm9tIHRoZSBsZWZ0LCBhbHNvIGNhbGxlZCB0aGUgcGl2b3QpIG9mIGEgbm9uemVybyByb3dcclxuXHRcdC8vIGlzIGFsd2F5cyBzdHJpY3RseSB0byB0aGUgcmlnaHQgb2YgdGhlIGxlYWRpbmcgY29lZmZpY2llbnQgb2YgdGhlIHJvdyBhYm92ZSBpdFxyXG5cdFx0bGV0IHByZXZpb3VzSWR4OiBudW1iZXIgPSAtMTtcclxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLm07IGkrKykge1xyXG5cdFx0XHRjb25zdCBjdXJyZW50UGl2b3RJZHg6IG51bWJlciA9IHRoaXMucm93UGl2b3RQb3NpdGlvbihpKTtcclxuXHRcdFx0aWYgKDAgPiBjdXJyZW50UGl2b3RJZHgpIHsgY29udGludWU7IH0vLyB0aGlzIGlzIGEgemVybyByb3csIG5vIHBpdm90XHJcblx0XHRcdC8vIGxlYWRpbmcgY29lZmZpY2llbnQgbXVzdCBiZSAxXHJcblx0XHRcdGlmICghdGhpcy5lbGVtZW50c1tpXVtjdXJyZW50UGl2b3RJZHhdLmVxdWFscyhuZXcgUmF0aW9uYWxOdW1iZXIoMSkpKSB7IHJldHVybiBmYWxzZTsgfVxyXG5cdFx0XHRpZiAocHJldmlvdXNJZHggPCBjdXJyZW50UGl2b3RJZHgpIHtcclxuXHRcdFx0XHRwcmV2aW91c0lkeCA9IGN1cnJlbnRQaXZvdElkeDtcclxuXHRcdFx0fSBlbHNlIHsgcmV0dXJuIGZhbHNlOyB9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblx0cHVibGljIGlzUmVkdWNlZFJvd0VjaGVsb25Gb3JtKCk6IGJvb2xlYW4ge1xyXG5cdFx0aWYgKCF0aGlzLmlzUm93RWNoZWxvbkZvcm0oKSkgeyByZXR1cm4gZmFsc2U7IH1cclxuXHRcdC8vIGVhY2ggbGVhZGluZyBjb2VmZmljaWVudCBpcyB0aGUgb25seSBub256ZXJvIGVudHJ5IGluIGl0cyBjb2x1bW5cclxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLm07IGkrKykge1xyXG5cdFx0XHRjb25zdCBwaXZvdFBvc2l0aW9uOiBudW1iZXIgPSB0aGlzLnJvd1Bpdm90UG9zaXRpb24oaSk7XHJcblx0XHRcdGlmICgxIDwgdGhpcy5udW1iZXJPZk5vblplcm9FbGVtZW50Rm9yQ29sdW1uKHBpdm90UG9zaXRpb24pKSB7IHJldHVybiBmYWxzZTsgfVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cdHB1YmxpYyB0b1JlZHVjZWRSb3dFY2hlbG9uRm9ybSgpOiBNYXRyaXgge1xyXG5cdFx0Y29uc3QgcmVzOiBNYXRyaXggPSB0aGlzLmRlZXBDb3B5KCk7XHJcblx0XHRsZXQgbGVhZDogbnVtYmVyID0gMDtcclxuXHRcdGZvciAobGV0IHI6IG51bWJlciA9IDA7IHIgPCByZXMubTsgcisrKSB7XHJcblx0XHRcdGlmIChyZXMubiA8PSBsZWFkKSB7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdFx0bGV0IGk6IG51bWJlciA9IHI7XHJcblx0XHRcdHdoaWxlIChyZXMuZWxlbWVudHNbaV1bbGVhZF0uZXF1YWxzKDApKSB7XHJcblx0XHRcdFx0aSsrO1xyXG5cdFx0XHRcdGlmIChyZXMubSA9PT0gaSkge1xyXG5cdFx0XHRcdFx0aSA9IHI7XHJcblx0XHRcdFx0XHRsZWFkKys7XHJcblx0XHRcdFx0XHRpZiAocmVzLm4gPT09IGxlYWQpIHtcclxuXHRcdFx0XHRcdFx0bGVhZC0tO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0cmVzLnN3aXRjaFJvd3MoaSwgcik7XHJcblx0XHRcdGlmICghcmVzLmVsZW1lbnRzW3JdW2xlYWRdLmVxdWFscygwKSkge1xyXG5cdFx0XHRcdHJlcy5tdWx0aXBseVJvdyhyLCByZXMuZWxlbWVudHNbcl1bbGVhZF0ucmVjaXByb2NhbCgpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgcmVzLm07IGorKykge1xyXG5cdFx0XHRcdGlmIChqICE9PSByKSB7XHJcblx0XHRcdFx0XHRyZXMuYWRkUm93cyhqLCByLCByZXMuZWxlbWVudHNbal1bbGVhZF0ub3Bwb3NpdGUoKSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGxlYWQrKztcclxuXHRcdH1cclxuXHRcdHJldHVybiByZXM7XHJcblx0fVxyXG5cdHB1YmxpYyBkZXRlcm1pbmFudCgpOiBSYXRpb25hbE51bWJlciB7XHJcblx0XHQvLyB0b2RvOiBpbXBsZW1lbnQgYW4gb3B0aW1pemVkIHZlcnNpb24sIGxpa2UgQT1QTFVcclxuXHRcdGlmICh0aGlzLm0gIT09IHRoaXMubikge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJEZXRlcm1pbmFudCBjYW4gb25seSBiZSBjYWxjdWxhdGVkIG9uIGEgc3F1YXJlIG1hdHJpeFwiKTtcclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLm0gPT09IDEpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuZWxlbWVudHNbMF1bMF07XHJcblx0XHR9XHJcblx0XHRsZXQgcmV0OiBSYXRpb25hbE51bWJlciA9IG5ldyBSYXRpb25hbE51bWJlcigwKTtcclxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLm47IGkrKykge1xyXG5cdFx0XHRjb25zdCBtaW5vcjogUmF0aW9uYWxOdW1iZXIgPSB0aGlzLmVsZW1lbnRzWzBdW2ldLm11bHQodGhpcy5jb2ZhY3RvcigwLCBpKS5kZXRlcm1pbmFudCgpKTtcclxuXHRcdFx0cmV0ID0gcmV0LmFkZChtaW5vci5tdWx0KCgtMSkgKiogaSkpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJldDtcclxuXHR9XHJcblx0cHVibGljIGNvbnZvbHV0ZShrZXJuZWw6IE1hdHJpeCk6IE1hdHJpeCB7XHJcblx0XHRpZiAoa2VybmVsLm0gIT09IGtlcm5lbC5uKSB7IHRocm93IG5ldyBFcnJvcihcIktlcm5lbCBpcyBub3QgYSBzcXVhcmUgbWF0cml4LlwiKTsgfVxyXG5cdFx0aWYgKGtlcm5lbC5tICUgMiA9PT0gMCkgeyB0aHJvdyBuZXcgRXJyb3IoXCJLZXJuZWwgaXMgbm90IGFuIGV2ZW4gc2l6ZSBtYXRyaXguXCIpOyB9XHJcblx0XHRjb25zdCBzeiA9IE1hdGguZmxvb3Ioa2VybmVsLm0gLyAyKTtcclxuXHRcdGNvbnN0IHJlczogTWF0cml4ID0gbmV3IE1hdHJpeCh0aGlzLm0sIHRoaXMubik7XHJcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5tOyBpKyspIHtcclxuXHRcdFx0Zm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IHRoaXMubjsgaisrKSB7XHJcblx0XHRcdFx0cmVzLmVsZW1lbnRzW2ldW2pdID0gbmV3IFJhdGlvbmFsTnVtYmVyKDApO1xyXG5cdFx0XHRcdGZvciAobGV0IHRpOiBudW1iZXIgPSAwOyB0aSA8IGtlcm5lbC5tOyB0aSsrKSB7XHJcblx0XHRcdFx0XHRpZiAoaSArIHRpIC0gc3ogPCAwIHx8IGkgKyB0aSAtIHN6ID49IHRoaXMubSkge1xyXG5cdFx0XHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGZvciAobGV0IHRqOiBudW1iZXIgPSAwOyB0aiA8IGtlcm5lbC5uOyB0aisrKSB7XHJcblx0XHRcdFx0XHRcdGlmIChqICsgdGogLSBzeiA8IDAgfHwgaiArIHRqIC0gc3ogPj0gdGhpcy5uKSB7XHJcblx0XHRcdFx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0cmVzLmVsZW1lbnRzW2ldW2pdID0gcmVzLmVsZW1lbnRzW2ldW2pdLmFkZCh0aGlzLmVsZW1lbnRzW2kgKyB0aSAtIHN6XVtqICsgdGogLSBzel0ubXVsdChrZXJuZWwuZWxlbWVudHNbdGldW3RqXSkpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlcztcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgaXNaZXJvUm93KHJvd0lkOiBudW1iZXIpOiBib29sZWFuIHtcclxuXHRcdGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCB0aGlzLm47IGorKykge1xyXG5cdFx0XHRpZiAoIXRoaXMuZWxlbWVudHNbcm93SWRdW2pdLmVxdWFscyhuZXcgUmF0aW9uYWxOdW1iZXIoMCkpKSB7IHJldHVybiBmYWxzZTsgfVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cdHByaXZhdGUgcm93UGl2b3RQb3NpdGlvbihyb3dJZDogbnVtYmVyKTogbnVtYmVyIHtcclxuXHRcdGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCB0aGlzLm47IGorKykge1xyXG5cdFx0XHRpZiAoIXRoaXMuZWxlbWVudHNbcm93SWRdW2pdLmVxdWFscyhuZXcgUmF0aW9uYWxOdW1iZXIoMCkpKSB7IHJldHVybiBqOyB9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gLTE7XHJcblx0fVxyXG5cdHByaXZhdGUgbnVtYmVyT2ZOb25aZXJvRWxlbWVudEZvckNvbHVtbihjb2x1bW5JZDogbnVtYmVyKTogbnVtYmVyIHtcclxuXHRcdGxldCBhY2M6IG51bWJlciA9IDA7XHJcblx0XHRmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgdGhpcy5tOyBqKyspIHtcclxuXHRcdFx0aWYgKCF0aGlzLmVsZW1lbnRzW2pdW2NvbHVtbklkXS5lcXVhbHMobmV3IFJhdGlvbmFsTnVtYmVyKDApKSkgeyBhY2MrKzsgfVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGFjYztcclxuXHR9XHJcblx0cHJpdmF0ZSBjb2ZhY3Rvcihyb3dJZDogbnVtYmVyLCBjb2x1bW5JZDogbnVtYmVyKTogTWF0cml4IHtcclxuXHRcdGNvbnN0IHJldDogTWF0cml4ID0gbmV3IE1hdHJpeCh0aGlzLm0gLSAxLCB0aGlzLm4gLSAxKTtcclxuXHRcdGxldCByb3dPZmZzZXQ6IG51bWJlciA9IDA7XHJcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5tIC0gMTsgaSsrKSB7XHJcblx0XHRcdGlmIChpID09PSByb3dJZCkge1xyXG5cdFx0XHRcdHJvd09mZnNldCA9IDE7XHJcblx0XHRcdH1cclxuXHRcdFx0bGV0IGNvbHVtbk9mZnNldDogbnVtYmVyID0gMDtcclxuXHRcdFx0Zm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IHRoaXMubiAtIDE7IGorKykge1xyXG5cdFx0XHRcdGlmIChqID09PSBjb2x1bW5JZCkge1xyXG5cdFx0XHRcdFx0Y29sdW1uT2Zmc2V0ID0gMTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0LmVsZW1lbnRzW2ldW2pdID0gdGhpcy5lbGVtZW50c1tpICsgcm93T2Zmc2V0XVtqICsgY29sdW1uT2Zmc2V0XTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJldDtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBNYXRyaXhJZGVudGl0eSBleHRlbmRzIE1hdHJpeCB7XHJcblx0Y29uc3RydWN0b3IobTogbnVtYmVyKSB7XHJcblx0XHRzdXBlcihtLCBtKTtcclxuXHRcdHRoaXMuZWxlbWVudHMgPSBbXTtcclxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLm07IGkrKykge1xyXG5cdFx0XHR0aGlzLmVsZW1lbnRzW2ldID0gW107XHJcblx0XHRcdGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCB0aGlzLm07IGorKykge1xyXG5cdFx0XHRcdGlmIChpID09PSBqKSB7XHJcblx0XHRcdFx0XHR0aGlzLmVsZW1lbnRzW2ldW2pdID0gbmV3IFJhdGlvbmFsTnVtYmVyKDEpO1xyXG5cdFx0XHRcdH0gZWxzZSB7IHRoaXMuZWxlbWVudHNbaV1bal0gPSBuZXcgUmF0aW9uYWxOdW1iZXIoMCk7IH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuLy8gZWxpbWluYXRpb24gLSBtdWx0aXBseSBvbiB0aGUgbGVmdCAoRSpBKTsgUm93LWFkZGl0aW9uIHRyYW5zZm9ybWF0aW9uc1xyXG4vLyB0byBtdWx0Kihyb3cyIG9mIE1hdHJpeCBBKSBhZGQgKHJvdzEgb2YgTWF0cml4IEEpXHJcbmV4cG9ydCBjbGFzcyBNYXRyaXhFbGltaW5hdGlvbiBleHRlbmRzIE1hdHJpeCB7XHJcblx0cHVibGljIHJvdzE6IG51bWJlcjtcclxuXHRwdWJsaWMgcm93MjogbnVtYmVyO1xyXG5cdGNvbnN0cnVjdG9yKG06IG51bWJlciwgcjE6IG51bWJlciwgcjI6IG51bWJlciwgbXVsdDogbnVtYmVyIHwgUmF0aW9uYWxOdW1iZXIpIHtcclxuXHRcdGlmIChtIDwgcjEgfHwgbSA8IHIyKSB7IHRocm93IG5ldyBFcnJvcihcIkNvbHVtbiBpbmRleCBtdXN0IGJlIGxlc3MgdGhhbiBvciBlcXVhbCB0byB0aGUgbWF0cml4IHNpemUuXCIpOyB9XHJcblx0XHRzdXBlcihtLCBtKTtcclxuXHRcdHRoaXMucm93MSA9IHIxO1xyXG5cdFx0dGhpcy5yb3cyID0gcjI7XHJcblx0XHR0aGlzLmVsZW1lbnRzID0gW107XHJcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5tOyBpKyspIHtcclxuXHRcdFx0dGhpcy5lbGVtZW50c1tpXSA9IFtdO1xyXG5cdFx0XHRmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgdGhpcy5tOyBqKyspIHtcclxuXHRcdFx0XHRpZiAoaSA9PT0gaikge1xyXG5cdFx0XHRcdFx0dGhpcy5lbGVtZW50c1tpXVtqXSA9IG5ldyBSYXRpb25hbE51bWJlcigxKTtcclxuXHRcdFx0XHR9IGVsc2UgeyB0aGlzLmVsZW1lbnRzW2ldW2pdID0gbmV3IFJhdGlvbmFsTnVtYmVyKDApOyB9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmICh0eXBlb2YgbXVsdCA9PT0gXCJudW1iZXJcIikge1xyXG5cdFx0XHR0aGlzLmVsZW1lbnRzW3IxXVtyMl0gPSBuZXcgUmF0aW9uYWxOdW1iZXIobXVsdCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAobXVsdCBpbnN0YW5jZW9mIFJhdGlvbmFsTnVtYmVyKSB7IHRoaXMuZWxlbWVudHNbcjFdW3IyXSA9IG11bHQ7IH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi8vIHBlcm11dGF0aW9uIC0gbXVsdGlwbHkgb24gdGhlIHJpZ2h0IChBKlApOyBSb3ctc3dpdGNoaW5nIHRyYW5zZm9ybWF0aW9uc1xyXG5leHBvcnQgY2xhc3MgTWF0cml4UGVybXV0YXRpb24gZXh0ZW5kcyBNYXRyaXgge1xyXG5cdGNvbnN0cnVjdG9yKG06IG51bWJlciwgcm93MTogbnVtYmVyLCByb3cyOiBudW1iZXIpIHtcclxuXHRcdGlmIChtIDwgcm93MSB8fCBtIDwgcm93MikgeyB0aHJvdyBuZXcgRXJyb3IoXCJDb2x1bW4gaW5kZXggbXVzdCBiZSBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gdGhlIG1hdHJpeCBzaXplLlwiKTsgfVxyXG5cdFx0c3VwZXIobSwgbSk7XHJcblx0XHR0aGlzLmVsZW1lbnRzID0gW107XHJcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5tOyBpKyspIHtcclxuXHRcdFx0dGhpcy5lbGVtZW50c1tpXSA9IFtdO1xyXG5cdFx0XHRmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgdGhpcy5tOyBqKyspIHtcclxuXHRcdFx0XHRpZiAoaSA9PT0gaikge1xyXG5cdFx0XHRcdFx0dGhpcy5lbGVtZW50c1tpXVtqXSA9IG5ldyBSYXRpb25hbE51bWJlcigxKTtcclxuXHRcdFx0XHR9IGVsc2UgeyB0aGlzLmVsZW1lbnRzW2ldW2pdID0gbmV3IFJhdGlvbmFsTnVtYmVyKDApOyB9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHRoaXMuZWxlbWVudHNbcm93MV1bcm93MV0gPSBuZXcgUmF0aW9uYWxOdW1iZXIoMCk7XHJcblx0XHR0aGlzLmVsZW1lbnRzW3JvdzFdW3JvdzJdID0gbmV3IFJhdGlvbmFsTnVtYmVyKDEpO1xyXG5cdFx0dGhpcy5lbGVtZW50c1tyb3cyXVtyb3cyXSA9IG5ldyBSYXRpb25hbE51bWJlcigwKTtcclxuXHRcdHRoaXMuZWxlbWVudHNbcm93Ml1bcm93MV0gPSBuZXcgUmF0aW9uYWxOdW1iZXIoMSk7XHJcblx0fVxyXG59IiwiZXhwb3J0IGNsYXNzIFF1ZXVlPFQ+IHtcclxuXHRwcml2YXRlIHF1ZXVlOiBUW107XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLnF1ZXVlID0gW107XHJcblx0fVxyXG5cdHB1YmxpYyBpc0VtcHR5KCk6IGJvb2xlYW4ge1xyXG5cdFx0cmV0dXJuIHRoaXMucXVldWUubGVuZ3RoID09PSAwO1xyXG5cdH1cclxuXHRwdWJsaWMgZW5xdWV1ZShlbGVtZW50OiBUKTogdm9pZCB7XHJcblx0XHR0aGlzLnF1ZXVlLnB1c2goZWxlbWVudCk7XHJcblx0fVxyXG5cdHB1YmxpYyBkZXF1ZXVlKCk6IFQge1xyXG5cdFx0aWYgKHRoaXMuaXNFbXB0eSgpKSB7IHRocm93IG5ldyBFcnJvcihcIlF1ZXVlIGlzIGVtcHR5XCIpOyB9XHJcblx0XHRyZXR1cm4gdGhpcy5xdWV1ZS5zaGlmdCgpO1xyXG5cdH1cclxuXHRwdWJsaWMgcGVlaygpOiBUIHtcclxuXHRcdGlmICh0aGlzLmlzRW1wdHkoKSkgeyB0aHJvdyBuZXcgRXJyb3IoXCJRdWV1ZSBpcyBlbXB0eVwiKTsgfVxyXG5cdFx0cmV0dXJuIHRoaXMucXVldWVbMF07XHJcblx0fVxyXG5cdHB1YmxpYyB0b0FycmF5KCk6IFRbXSB7XHJcblx0XHRyZXR1cm4gdGhpcy5xdWV1ZTtcclxuXHR9XHJcbn0iLCJpbXBvcnQgeyBQYXJzZXIgfSBmcm9tIFwiLi9Bcml0aG1ldGljRXZhbHVhdG9yXCI7XHJcbmltcG9ydCB7IFF1ZXVlIH0gZnJvbSBcIi4vUXVldWVcIjtcclxuaW1wb3J0IHsgU3RhY2sgfSBmcm9tIFwiLi9TdGFja1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJhdGlvbmFsTnVtYmVyIHtcclxuXHRwdWJsaWMgc3RhdGljIHRvUmV2ZXJzZVBvbGlzaE5vdGF0aW9uKGNvZGU6IHN0cmluZyk6IHN0cmluZ1tdIHtcclxuXHRcdGNvbnN0IHRva2Vuczogc3RyaW5nW10gPSBjb2RlLm1hdGNoKC9cXCh8XFwpfFxcZCsoXFwuXFxkKyk/fFxcdyt8W1xcK1xcLVxcKlxcL1xcXl0vZyk7XHJcblx0XHRsZXQgaTogbnVtYmVyID0gMDtcclxuXHRcdGNvbnN0IG91dHB1dFF1ZXVlOiBRdWV1ZTxzdHJpbmc+ID0gbmV3IFF1ZXVlPHN0cmluZz4oKTtcclxuXHRcdGNvbnN0IG9wZXJhdG9yU3RhY2s6IFN0YWNrPHN0cmluZz4gPSBuZXcgU3RhY2s8c3RyaW5nPigpO1xyXG5cdFx0d2hpbGUgKGkgPCB0b2tlbnMubGVuZ3RoKSB7XHJcblx0XHRcdGlmICh0aGlzLmlzTnVtYmVyKHRva2Vuc1tpXSkpIHtcclxuXHRcdFx0XHRvdXRwdXRRdWV1ZS5lbnF1ZXVlKHRva2Vuc1tpXSk7XHJcblx0XHRcdH0gZWxzZSBpZiAodGhpcy5pc09wZXJhdG9yKHRva2Vuc1tpXSkpIHtcclxuXHRcdFx0XHRjb25zdCBvcDE6IHN0cmluZyA9IHRva2Vuc1tpXTtcclxuXHRcdFx0XHR3aGlsZSAoIW9wZXJhdG9yU3RhY2suaXNFbXB0eSgpICYmIHRoaXMuaXNPcGVyYXRvcihvcGVyYXRvclN0YWNrLnBlZWsoKSkpIHtcclxuXHRcdFx0XHRcdGlmICgodGhpcy5pc0xlZnRBc3NvY2lhdGl2ZU9wZXJhdG9yKG9wMSkgJiYgKHRoaXMucHJlY2VkZW5jZShvcDEpIDw9IHRoaXMucHJlY2VkZW5jZShvcGVyYXRvclN0YWNrLnBlZWsoKSkpKSB8fFxyXG5cdFx0XHRcdFx0XHQodGhpcy5pc1JpZ2h0QXNzb2NpYXRpdmVPcGVyYXRvcihvcDEpICYmICh0aGlzLnByZWNlZGVuY2Uob3AxKSA8IHRoaXMucHJlY2VkZW5jZShvcGVyYXRvclN0YWNrLnBlZWsoKSkpKSkge1xyXG5cdFx0XHRcdFx0XHRvdXRwdXRRdWV1ZS5lbnF1ZXVlKG9wZXJhdG9yU3RhY2sucG9wKCkpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdG9wZXJhdG9yU3RhY2sucHVzaChvcDEpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHRva2Vuc1tpXSA9PT0gXCIoXCIpIHtcclxuXHRcdFx0XHRvcGVyYXRvclN0YWNrLnB1c2godG9rZW5zW2ldKTtcclxuXHRcdFx0fSBlbHNlIGlmICh0b2tlbnNbaV0gPT09IFwiKVwiKSB7XHJcblx0XHRcdFx0d2hpbGUgKCFvcGVyYXRvclN0YWNrLmlzRW1wdHkoKSAmJiBvcGVyYXRvclN0YWNrLnBlZWsoKSAhPT0gXCIoXCIpIHtcclxuXHRcdFx0XHRcdG91dHB1dFF1ZXVlLmVucXVldWUob3BlcmF0b3JTdGFjay5wb3AoKSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmICghb3BlcmF0b3JTdGFjay5pc0VtcHR5KCkgJiYgb3BlcmF0b3JTdGFjay5wZWVrKCkgPT09IFwiKFwiKSB7XHJcblx0XHRcdFx0XHRvcGVyYXRvclN0YWNrLnBvcCgpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJNaXNtYXRjaGVkIHBhcmVudGhlc2VzLlwiKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0aSsrO1xyXG5cdFx0fVxyXG5cdFx0d2hpbGUgKCFvcGVyYXRvclN0YWNrLmlzRW1wdHkoKSkge1xyXG5cdFx0XHRpZiAob3BlcmF0b3JTdGFjay5wZWVrKCkgPT09IFwiKFwiKSB7XHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiTWlzbWF0Y2hlZCBwYXJlbnRoZXNlcy5cIik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0b3V0cHV0UXVldWUuZW5xdWV1ZShvcGVyYXRvclN0YWNrLnBvcCgpKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIG91dHB1dFF1ZXVlLnRvQXJyYXkoKTtcclxuXHR9XHJcblx0cHVibGljIHN0YXRpYyBmcm9tU3RyaW5nKGNvZGU6IHN0cmluZyk6IFJhdGlvbmFsTnVtYmVyIHtcclxuXHRcdGNvbnN0IHA6IFBhcnNlciA9IG5ldyBQYXJzZXIoKTtcclxuXHRcdHJldHVybiBwLnBhcnNlKGNvZGUpO1xyXG5cdH1cclxuXHRwdWJsaWMgc3RhdGljIGdyZWF0ZXN0Q29tbW9uRGl2aXNvcihhOiBudW1iZXIsIGI6IG51bWJlcik6IG51bWJlciB7XHJcblx0XHRyZXR1cm4gYiA/IFJhdGlvbmFsTnVtYmVyLmdyZWF0ZXN0Q29tbW9uRGl2aXNvcihiLCBhICUgYikgOiBhO1xyXG5cdH1cclxuXHRwdWJsaWMgc3RhdGljIGxlYXN0Q29tbW9uTXVsdGlwbGUoYTogbnVtYmVyLCBiOiBudW1iZXIpOiBudW1iZXIge1xyXG5cdFx0cmV0dXJuIE1hdGguYWJzKGEgKiBiIC8gUmF0aW9uYWxOdW1iZXIuZ3JlYXRlc3RDb21tb25EaXZpc29yKGEsIGIpKTtcclxuXHR9XHJcblx0cHJpdmF0ZSBzdGF0aWMgaXNOdW1iZXIoY29kZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcblx0XHRyZXR1cm4gL15cXGQvLnRlc3QoY29kZSk7XHJcblx0fVxyXG5cdHByaXZhdGUgc3RhdGljIGlzT3BlcmF0b3IoY29kZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcblx0XHRyZXR1cm4gL1tcXCtcXC1cXCpcXC9cXF5dLy50ZXN0KGNvZGUpO1xyXG5cdH1cclxuXHRwcml2YXRlIHN0YXRpYyBpc0xlZnRBc3NvY2lhdGl2ZU9wZXJhdG9yKG9wZXJhdG9yOiBzdHJpbmcpOiBib29sZWFuIHtcclxuXHRcdHJldHVybiAvW1xcK1xcLVxcKlxcL10vLnRlc3Qob3BlcmF0b3IpO1xyXG5cdH1cclxuXHRwcml2YXRlIHN0YXRpYyBpc1JpZ2h0QXNzb2NpYXRpdmVPcGVyYXRvcihvcGVyYXRvcjogc3RyaW5nKTogYm9vbGVhbiB7XHJcblx0XHRyZXR1cm4gL1tcXF5dLy50ZXN0KG9wZXJhdG9yKTtcclxuXHR9XHJcblx0cHJpdmF0ZSBzdGF0aWMgcHJlY2VkZW5jZShvcGVyYXRvcjogc3RyaW5nKTogbnVtYmVyIHtcclxuXHRcdGlmICgvW1xcK1xcLV0vLnRlc3Qob3BlcmF0b3IpKSB7XHJcblx0XHRcdHJldHVybiAxO1xyXG5cdFx0fVxyXG5cdFx0aWYgKC9bXFwqXFwvXS8udGVzdChvcGVyYXRvcikpIHtcclxuXHRcdFx0cmV0dXJuIDI7XHJcblx0XHR9XHJcblx0XHRpZiAoL1tcXF5dLy50ZXN0KG9wZXJhdG9yKSkge1xyXG5cdFx0XHRyZXR1cm4gMztcclxuXHRcdH1cclxuXHRcdHRocm93IG5ldyBFcnJvcihcIlVua25vd24gb3BlcmF0b3IuXCIpO1xyXG5cdH1cclxuXHRwcml2YXRlIHN0YXRpYyBldmFsdWF0ZUZyb21SUE4odG9rZW5zOiBzdHJpbmdbXSk6IFJhdGlvbmFsTnVtYmVyIHtcclxuXHRcdGNvbnN0IHN0YWNrOiBTdGFjazxSYXRpb25hbE51bWJlcj4gPSBuZXcgU3RhY2s8UmF0aW9uYWxOdW1iZXI+KCk7XHJcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGlmICghdGhpcy5pc09wZXJhdG9yKHRva2Vuc1tpXSkpIHtcclxuXHRcdFx0XHRzdGFjay5wdXNoKG5ldyBSYXRpb25hbE51bWJlcihwYXJzZUZsb2F0KHRva2Vuc1tpXSkpKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRjb25zdCBvcDE6IFJhdGlvbmFsTnVtYmVyID0gc3RhY2sucG9wKCk7XHJcblx0XHRcdFx0Y29uc3Qgb3AyOiBSYXRpb25hbE51bWJlciA9IHN0YWNrLnBvcCgpO1xyXG5cdFx0XHRcdHN3aXRjaCAodG9rZW5zW2ldKSB7XHJcblx0XHRcdFx0XHRjYXNlIFwiK1wiOiBzdGFjay5wdXNoKG9wMi5hZGQob3AxKSk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSBcIi1cIjogc3RhY2sucHVzaChvcDIuc3ViKG9wMSkpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgXCIqXCI6IHN0YWNrLnB1c2gob3AyLm11bHQob3AxKSk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSBcIi9cIjogc3RhY2sucHVzaChvcDIuZGl2KG9wMSkpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgXCJeXCI6IHN0YWNrLnB1c2gob3AyLmV4cChvcDEudG9OdW1iZXIoKSkpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiBzdGFjay5wb3AoKS5zaW1wbGlmaWVkRm9ybSgpO1xyXG5cdH1cclxuXHRwdWJsaWMgbnVtZXJhdG9yOiBudW1iZXI7XHJcblx0cHVibGljIGRlbm9taW5hdG9yOiBudW1iZXI7XHJcblx0Y29uc3RydWN0b3IobjogbnVtYmVyLCBkOiBudW1iZXIgPSAxKSB7XHJcblx0XHRpZiAoZCA9PT0gMCkge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJEaXZpc2lvbiBieSB6ZXJvIVwiKTtcclxuXHRcdH1cclxuXHRcdC8vIHRvZG86IHBvdGVudGlhbCBmb3Igb3ZlcmZsb3cuIFdoZW4gTWF0aC5zaWduIGJlY29tZXMgYXZhaWxhYmxlIGluIFR5cGVTY3JpcHQgdXNlIGl0IGluc3RlYWQgb2YgdGhlIG11bHRpcGxpY2F0aW9uXHJcblx0XHRjb25zdCBzaWduOiBudW1iZXIgPSBuICogZCA+PSAwID8gMSA6IC0xO1xyXG5cdFx0dGhpcy5udW1lcmF0b3IgPSBzaWduICogTWF0aC5hYnMobik7XHJcblx0XHR0aGlzLmRlbm9taW5hdG9yID0gTWF0aC5hYnMoZCk7XHJcblx0fVxyXG5cdHB1YmxpYyBzaW1wbGlmaWVkRm9ybSgpOiBSYXRpb25hbE51bWJlciB7XHJcblx0XHRjb25zdCBnY2Q6IG51bWJlciA9IFJhdGlvbmFsTnVtYmVyLmdyZWF0ZXN0Q29tbW9uRGl2aXNvcih0aGlzLm51bWVyYXRvciwgdGhpcy5kZW5vbWluYXRvcik7XHJcblx0XHRyZXR1cm4gbmV3IFJhdGlvbmFsTnVtYmVyKHRoaXMubnVtZXJhdG9yIC8gZ2NkLCB0aGlzLmRlbm9taW5hdG9yIC8gZ2NkKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBlcXVhbHMoeDogbnVtYmVyIHwgUmF0aW9uYWxOdW1iZXIpOiBib29sZWFuIHtcclxuXHRcdGNvbnN0IHJuMTogUmF0aW9uYWxOdW1iZXIgPSB0aGlzLnNpbXBsaWZpZWRGb3JtKCk7XHJcblx0XHRpZiAodHlwZW9mIHggPT09IFwibnVtYmVyXCIpIHtcclxuXHRcdFx0cmV0dXJuIHJuMS5udW1lcmF0b3IgPT09IHggJiYgcm4xLmRlbm9taW5hdG9yID09PSAxO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y29uc3Qgcm4yOiBSYXRpb25hbE51bWJlciA9IHguc2ltcGxpZmllZEZvcm0oKTtcclxuXHRcdFx0cmV0dXJuIHJuMS5udW1lcmF0b3IgPT09IHJuMi5udW1lcmF0b3IgJiYgcm4xLmRlbm9taW5hdG9yID09PSBybjIuZGVub21pbmF0b3I7XHJcblx0XHR9XHJcblx0fVxyXG5cdHB1YmxpYyBsdCh4OiBudW1iZXIgfCBSYXRpb25hbE51bWJlcik6IGJvb2xlYW4ge1xyXG5cdFx0Y29uc3Qgcm4xOiBSYXRpb25hbE51bWJlciA9IHRoaXMuc2ltcGxpZmllZEZvcm0oKTtcclxuXHRcdGlmICh0eXBlb2YgeCA9PT0gXCJudW1iZXJcIikge1xyXG5cdFx0XHRyZXR1cm4gcm4xLm51bWVyYXRvciA8IHggKiBybjEuZGVub21pbmF0b3I7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjb25zdCBybjI6IFJhdGlvbmFsTnVtYmVyID0geC5zaW1wbGlmaWVkRm9ybSgpO1xyXG5cdFx0XHRyZXR1cm4gcm4xLm51bWVyYXRvciAqIHJuMi5kZW5vbWluYXRvciA8IHJuMi5udW1lcmF0b3IgKiBybjEuZGVub21pbmF0b3I7XHJcblx0XHR9XHJcblx0fVxyXG5cdHB1YmxpYyBsZSh4OiBudW1iZXIgfCBSYXRpb25hbE51bWJlcik6IGJvb2xlYW4ge1xyXG5cdFx0Y29uc3Qgcm4xOiBSYXRpb25hbE51bWJlciA9IHRoaXMuc2ltcGxpZmllZEZvcm0oKTtcclxuXHRcdGlmICh0eXBlb2YgeCA9PT0gXCJudW1iZXJcIikge1xyXG5cdFx0XHRyZXR1cm4gcm4xLm51bWVyYXRvciA8PSB4ICogcm4xLmRlbm9taW5hdG9yO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y29uc3Qgcm4yOiBSYXRpb25hbE51bWJlciA9IHguc2ltcGxpZmllZEZvcm0oKTtcclxuXHRcdFx0cmV0dXJuIHJuMS5udW1lcmF0b3IgKiBybjIuZGVub21pbmF0b3IgPD0gcm4yLm51bWVyYXRvciAqIHJuMS5kZW5vbWluYXRvcjtcclxuXHRcdH1cclxuXHR9XHJcblx0cHVibGljIGd0KHg6IG51bWJlciB8IFJhdGlvbmFsTnVtYmVyKTogYm9vbGVhbiB7XHJcblx0XHRjb25zdCBybjE6IFJhdGlvbmFsTnVtYmVyID0gdGhpcy5zaW1wbGlmaWVkRm9ybSgpO1xyXG5cdFx0aWYgKHR5cGVvZiB4ID09PSBcIm51bWJlclwiKSB7XHJcblx0XHRcdHJldHVybiBybjEubnVtZXJhdG9yID4geCAqIHJuMS5kZW5vbWluYXRvcjtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNvbnN0IHJuMjogUmF0aW9uYWxOdW1iZXIgPSB4LnNpbXBsaWZpZWRGb3JtKCk7XHJcblx0XHRcdHJldHVybiBybjEubnVtZXJhdG9yICogcm4yLmRlbm9taW5hdG9yID4gcm4yLm51bWVyYXRvciAqIHJuMS5kZW5vbWluYXRvcjtcclxuXHRcdH1cclxuXHR9XHJcblx0cHVibGljIGdlKHg6IG51bWJlciB8IFJhdGlvbmFsTnVtYmVyKTogYm9vbGVhbiB7XHJcblx0XHRjb25zdCBybjE6IFJhdGlvbmFsTnVtYmVyID0gdGhpcy5zaW1wbGlmaWVkRm9ybSgpO1xyXG5cdFx0aWYgKHR5cGVvZiB4ID09PSBcIm51bWJlclwiKSB7XHJcblx0XHRcdHJldHVybiBybjEubnVtZXJhdG9yID49IHggKiBybjEuZGVub21pbmF0b3I7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjb25zdCBybjI6IFJhdGlvbmFsTnVtYmVyID0geC5zaW1wbGlmaWVkRm9ybSgpO1xyXG5cdFx0XHRyZXR1cm4gcm4xLm51bWVyYXRvciAqIHJuMi5kZW5vbWluYXRvciA+PSBybjIubnVtZXJhdG9yICogcm4xLmRlbm9taW5hdG9yO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly8gbXVsdGlwbGljYXRpdmUgaW52ZXJzZVxyXG5cdHB1YmxpYyByZWNpcHJvY2FsKCk6IFJhdGlvbmFsTnVtYmVyIHtcclxuXHRcdGlmICh0aGlzLmRlbm9taW5hdG9yID09PSAwKSB7IHRocm93IG5ldyBFcnJvcihcIkRpdmlzaW9uIGJ5IHplcm8hXCIpOyB9XHJcblx0XHRyZXR1cm4gbmV3IFJhdGlvbmFsTnVtYmVyKHRoaXMuZGVub21pbmF0b3IsIHRoaXMubnVtZXJhdG9yKTtcclxuXHR9XHJcblx0Ly8gYWRkaXRpdmUgaW52ZXJzZVxyXG5cdHB1YmxpYyBvcHBvc2l0ZSgpOiBSYXRpb25hbE51bWJlciB7XHJcblx0XHRyZXR1cm4gbmV3IFJhdGlvbmFsTnVtYmVyKHRoaXMubnVtZXJhdG9yICogKC0xKSwgdGhpcy5kZW5vbWluYXRvcik7XHJcblx0fVxyXG5cdHB1YmxpYyBhZGQoeDogbnVtYmVyIHwgUmF0aW9uYWxOdW1iZXIpOiBSYXRpb25hbE51bWJlciB7XHJcblx0XHRpZiAodHlwZW9mIHggPT09IFwibnVtYmVyXCIpIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBSYXRpb25hbE51bWJlcigodGhpcy5udW1lcmF0b3IgKyB4ICogdGhpcy5kZW5vbWluYXRvciksIHRoaXMuZGVub21pbmF0b3IpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y29uc3QgbGNtOiBudW1iZXIgPSBSYXRpb25hbE51bWJlci5sZWFzdENvbW1vbk11bHRpcGxlKHRoaXMuZGVub21pbmF0b3IsIHguZGVub21pbmF0b3IpO1xyXG5cdFx0XHRjb25zdCBuMTogbnVtYmVyID0gdGhpcy5udW1lcmF0b3IgKiBsY20gLyB0aGlzLmRlbm9taW5hdG9yO1xyXG5cdFx0XHRjb25zdCBuMjogbnVtYmVyID0geC5udW1lcmF0b3IgKiBsY20gLyB4LmRlbm9taW5hdG9yO1xyXG5cdFx0XHRyZXR1cm4gbmV3IFJhdGlvbmFsTnVtYmVyKG4xICsgbjIsIGxjbSk7XHJcblx0XHR9XHJcblx0fVxyXG5cdHB1YmxpYyBzdWIoeDogbnVtYmVyIHwgUmF0aW9uYWxOdW1iZXIpOiBSYXRpb25hbE51bWJlciB7XHJcblx0XHRpZiAodHlwZW9mIHggPT09IFwibnVtYmVyXCIpIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBSYXRpb25hbE51bWJlcigodGhpcy5udW1lcmF0b3IgLSB4ICogdGhpcy5kZW5vbWluYXRvciksIHRoaXMuZGVub21pbmF0b3IpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y29uc3QgbGNtOiBudW1iZXIgPSBSYXRpb25hbE51bWJlci5sZWFzdENvbW1vbk11bHRpcGxlKHRoaXMuZGVub21pbmF0b3IsIHguZGVub21pbmF0b3IpO1xyXG5cdFx0XHRjb25zdCBuMTogbnVtYmVyID0gdGhpcy5udW1lcmF0b3IgKiBsY20gLyB0aGlzLmRlbm9taW5hdG9yO1xyXG5cdFx0XHRjb25zdCBuMjogbnVtYmVyID0geC5udW1lcmF0b3IgKiBsY20gLyB4LmRlbm9taW5hdG9yO1xyXG5cdFx0XHRyZXR1cm4gbmV3IFJhdGlvbmFsTnVtYmVyKG4xIC0gbjIsIGxjbSk7XHJcblx0XHR9XHJcblx0fVxyXG5cdHB1YmxpYyBtdWx0KHg6IG51bWJlciB8IFJhdGlvbmFsTnVtYmVyKTogUmF0aW9uYWxOdW1iZXIge1xyXG5cdFx0aWYgKHR5cGVvZiB4ID09PSBcIm51bWJlclwiKSB7XHJcblx0XHRcdHJldHVybiBuZXcgUmF0aW9uYWxOdW1iZXIoKHRoaXMubnVtZXJhdG9yICogeCksIHRoaXMuZGVub21pbmF0b3IpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBSYXRpb25hbE51bWJlcigodGhpcy5udW1lcmF0b3IgKiB4Lm51bWVyYXRvciksIHguZGVub21pbmF0b3IgKiB0aGlzLmRlbm9taW5hdG9yKTtcclxuXHRcdH1cclxuXHR9XHJcblx0cHVibGljIGRpdih4OiBudW1iZXIgfCBSYXRpb25hbE51bWJlcik6IFJhdGlvbmFsTnVtYmVyIHtcclxuXHRcdGlmICh0eXBlb2YgeCA9PT0gXCJudW1iZXJcIikge1xyXG5cdFx0XHRyZXR1cm4gbmV3IFJhdGlvbmFsTnVtYmVyKCh0aGlzLm51bWVyYXRvciksIHRoaXMuZGVub21pbmF0b3IgKiB4KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiBuZXcgUmF0aW9uYWxOdW1iZXIoKHRoaXMubnVtZXJhdG9yICogeC5kZW5vbWluYXRvciksIHgubnVtZXJhdG9yICogdGhpcy5kZW5vbWluYXRvcik7XHJcblx0XHR9XHJcblx0fVxyXG5cdHB1YmxpYyBleHAoeDogbnVtYmVyIHwgUmF0aW9uYWxOdW1iZXIpOiBSYXRpb25hbE51bWJlciB7XHJcblx0XHRpZiAodHlwZW9mIHggPT09IFwibnVtYmVyXCIpIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBSYXRpb25hbE51bWJlcih0aGlzLm51bWVyYXRvciAqKiB4LCB0aGlzLmRlbm9taW5hdG9yICoqIHgpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKHRoaXMuZGVub21pbmF0b3IgIT09IDEpIHsgdGhyb3cgRXJyb3IoXCJFeHBvbmVudGlhdGlvbiB3aXRoIHJhdGlvbmFsIHBvd2VycyBub3Qgc3VwcG9ydGVkLlwiKTsgfVxyXG5cdFx0XHRyZXR1cm4gbmV3IFJhdGlvbmFsTnVtYmVyKHRoaXMubnVtZXJhdG9yICoqIHgubnVtZXJhdG9yLCB0aGlzLmRlbm9taW5hdG9yICoqIHgubnVtZXJhdG9yKTtcclxuXHRcdH1cclxuXHR9XHJcblx0cHVibGljIHRvTnVtYmVyKCk6IG51bWJlciB7XHJcblx0XHRyZXR1cm4gdGhpcy5udW1lcmF0b3IgLyB0aGlzLmRlbm9taW5hdG9yO1xyXG5cdH1cclxuXHRwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcclxuXHRcdHJldHVybiB0aGlzLm51bWVyYXRvci50b1N0cmluZygpICsgKDEgPT09IHRoaXMuZGVub21pbmF0b3IgPyBcIlwiIDogXCIvXCIgKyB0aGlzLmRlbm9taW5hdG9yLnRvU3RyaW5nKCkpO1xyXG5cdH1cclxuXHRwdWJsaWMgZGVlcENvcHkoKTogUmF0aW9uYWxOdW1iZXIge1xyXG5cdFx0cmV0dXJuIG5ldyBSYXRpb25hbE51bWJlcih0aGlzLm51bWVyYXRvciwgdGhpcy5kZW5vbWluYXRvcik7XHJcblx0fVxyXG59IiwiZXhwb3J0IGNsYXNzIFN0YWNrPFQ+IHtcclxuXHRwcml2YXRlIHN0YWNrOiBUW107XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLnN0YWNrID0gW107XHJcblx0fVxyXG5cdHB1YmxpYyBpc0VtcHR5KCk6IGJvb2xlYW4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuc3RhY2subGVuZ3RoID09PSAwO1xyXG5cdH1cclxuXHRwdWJsaWMgcHVzaChlbGVtZW50OiBUKTogdm9pZCB7XHJcblx0XHR0aGlzLnN0YWNrLnB1c2goZWxlbWVudCk7XHJcblx0fVxyXG5cdHB1YmxpYyBwb3AoKTogVCB7XHJcblx0XHRpZiAodGhpcy5pc0VtcHR5KCkpIHsgdGhyb3cgbmV3IEVycm9yKFwiU3RhY2sgaXMgZW1wdHlcIik7IH1cclxuXHRcdHJldHVybiB0aGlzLnN0YWNrLnBvcCgpO1xyXG5cdH1cclxuXHRwdWJsaWMgcGVlaygpOiBUIHtcclxuXHRcdGlmICh0aGlzLmlzRW1wdHkoKSkgeyB0aHJvdyBuZXcgRXJyb3IoXCJTdGFjayBpcyBlbXB0eVwiKTsgfVxyXG5cdFx0cmV0dXJuIHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXTtcclxuXHR9XHJcblx0cHVibGljIHRvQXJyYXkoKTogVFtdIHtcclxuXHRcdHJldHVybiB0aGlzLnN0YWNrO1xyXG5cdH1cclxufSIsImltcG9ydCB7IE1hdHJpeCB9IGZyb20gXCIuL01hdHJpeFwiO1xyXG5pbXBvcnQgeyBSYXRpb25hbE51bWJlciB9IGZyb20gXCIuL1JhdGlvbmFsTnVtYmVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVmVjdG9yIHtcclxuXHRwdWJsaWMgc3RhdGljIGFyZUxpbmVhcmx5SW5kZXBlbmRlbnQodmVjdG9yczogVmVjdG9yW10pOiBib29sZWFuIHtcclxuXHRcdGNvbnN0IG06IG51bWJlciA9IHZlY3RvcnMubGVuZ3RoO1xyXG5cdFx0aWYgKDAgPT09IG0pIHsgcmV0dXJuIHRydWU7IH1cclxuXHRcdGNvbnN0IG46IG51bWJlciA9IHZlY3RvcnNbMF0ubTtcclxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDE7IGkgPCB2ZWN0b3JzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGlmIChuICE9PSB2ZWN0b3JzW2ldLm0pIHsgdGhyb3cgbmV3IEVycm9yKFwiTWlzbWF0Y2hlZCBkaW1lbnNpb25zLlwiKTsgfVxyXG5cdFx0fVxyXG5cdFx0aWYgKG0gPiBuKSB7IHJldHVybiBmYWxzZTsgfVxyXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiTm90IGltcGxlbWVudGVkLlwiKTtcclxuXHR9XHJcblx0cHVibGljIG06IG51bWJlcjtcclxuXHRwdWJsaWMgZWxlbWVudHM6IFJhdGlvbmFsTnVtYmVyW107XHJcblx0Y29uc3RydWN0b3IobjogbnVtYmVyIHwgbnVtYmVyW10pO1xyXG5cdGNvbnN0cnVjdG9yKG46IGFueSkge1xyXG5cdFx0aWYgKHR5cGVvZiBuID09PSBcIm51bWJlclwiKSB7XHJcblx0XHRcdHRoaXMubSA9IG47XHJcblx0XHRcdHRoaXMuZWxlbWVudHMgPSBbXTtcclxuXHRcdH0gZWxzZSBpZiAobiBpbnN0YW5jZW9mIEFycmF5KSB7XHJcblx0XHRcdHRoaXMubSA9IG4ubGVuZ3RoO1xyXG5cdFx0XHR0aGlzLmVsZW1lbnRzID0gW107XHJcblx0XHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLm07IGkrKykge1xyXG5cdFx0XHRcdHRoaXMuZWxlbWVudHNbaV0gPSBuZXcgUmF0aW9uYWxOdW1iZXIobltpXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0cHVibGljIGFkZCh4OiBWZWN0b3IpOiBWZWN0b3Ige1xyXG5cdFx0aWYgKHRoaXMubSAhPT0geC5tKSB7IHRocm93IG5ldyBFcnJvcihcIk1pc21hdGNoZWQgZGltZW5zaW9ucy5cIik7IH1cclxuXHRcdGNvbnN0IHJlczogVmVjdG9yID0gbmV3IFZlY3Rvcih0aGlzLm0pO1xyXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHJlcy5tOyBpKyspIHtcclxuXHRcdFx0cmVzLmVsZW1lbnRzW2ldID0gdGhpcy5lbGVtZW50c1tpXS5hZGQoeC5lbGVtZW50c1tpXSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzO1xyXG5cdH1cclxuXHRwdWJsaWMgc3ViKHg6IFZlY3Rvcik6IFZlY3RvciB7XHJcblx0XHRpZiAodGhpcy5tICE9PSB4Lm0pIHsgdGhyb3cgbmV3IEVycm9yKFwiTWlzbWF0Y2hlZCBkaW1lbnNpb25zLlwiKTsgfVxyXG5cdFx0Y29uc3QgcmVzOiBWZWN0b3IgPSBuZXcgVmVjdG9yKHRoaXMubSk7XHJcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgcmVzLm07IGkrKykge1xyXG5cdFx0XHRyZXMuZWxlbWVudHNbaV0gPSB0aGlzLmVsZW1lbnRzW2ldLnN1Yih4LmVsZW1lbnRzW2ldKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiByZXM7XHJcblx0fVxyXG5cdHB1YmxpYyBtdWx0KHg6IFJhdGlvbmFsTnVtYmVyKTogVmVjdG9yIHtcclxuXHRcdGNvbnN0IHJlczogVmVjdG9yID0gbmV3IFZlY3Rvcih0aGlzLm0pO1xyXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHJlcy5tOyBpKyspIHtcclxuXHRcdFx0cmVzLmVsZW1lbnRzW2ldID0gdGhpcy5lbGVtZW50c1tpXS5tdWx0KHgpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlcztcclxuXHR9XHJcblx0Ly8gW0FMSUFTRVNdOiBpbm5lclByb2R1Y3QsIHByb2plY3Rpb25Qcm9kdWN0LCBzY2FsYXJQcm9kdWN0XHJcblx0cHVibGljIGRvdFByb2R1Y3QoeDogVmVjdG9yKTogUmF0aW9uYWxOdW1iZXIge1xyXG5cdFx0aWYgKHRoaXMubSAhPT0geC5tKSB7IHRocm93IG5ldyBFcnJvcihcIk1pc21hdGNoZWQgZGltZW5zaW9ucy5cIik7IH1cclxuXHRcdGxldCByZXM6IFJhdGlvbmFsTnVtYmVyID0gbmV3IFJhdGlvbmFsTnVtYmVyKDApO1xyXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHgubTsgaSsrKSB7XHJcblx0XHRcdHJlcyA9IHJlcy5hZGQodGhpcy5lbGVtZW50c1tpXS5tdWx0KHguZWxlbWVudHNbaV0pKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiByZXM7XHJcblx0fVxyXG5cdC8vIFtBTElBU0VTXTogZGlyZWN0ZWRBcmVhUHJvZHVjdCwgdmVjdG9yUHJvZHVjdFxyXG5cdHB1YmxpYyBjcm9zc1Byb2R1Y3QoeDogVmVjdG9yKTogVmVjdG9yIHtcclxuXHRcdHRocm93IG5ldyBFcnJvcihcIk5vdCBpbXBsZW1lbnRlZC5cIik7XHJcblx0fVxyXG5cdC8vIFtBTElBU0VTXTogbWFnbml0dWRlLCBub3JtXHJcblx0cHVibGljIGxlbmd0aCgpOiBSYXRpb25hbE51bWJlciB7XHJcblx0XHRjb25zdCBsZW5ndGg6IFJhdGlvbmFsTnVtYmVyID0gbmV3IFJhdGlvbmFsTnVtYmVyKDApO1xyXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMubTsgaSsrKSB7XHJcblx0XHRcdGxlbmd0aC5hZGQodGhpcy5lbGVtZW50c1tpXSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gbGVuZ3RoO1xyXG5cdH1cclxuXHRwdWJsaWMgZGVlcENvcHkoKTogVmVjdG9yIHtcclxuXHRcdGNvbnN0IHJldDogVmVjdG9yID0gbmV3IFZlY3Rvcih0aGlzLm0pO1xyXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMubTsgaSsrKSB7XHJcblx0XHRcdHJldC5lbGVtZW50c1tpXSA9IHRoaXMuZWxlbWVudHNbaV07XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmV0O1xyXG5cdH1cclxuXHRwdWJsaWMgdG9NYXRyaXgoKTogTWF0cml4IHtcclxuXHRcdGNvbnN0IHJldDogTWF0cml4ID0gbmV3IE1hdHJpeCh0aGlzLm0sIDEpO1xyXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMubTsgaSsrKSB7XHJcblx0XHRcdHJldC5lbGVtZW50c1tpXVswXSA9IHRoaXMuZWxlbWVudHNbaV07XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmV0O1xyXG5cdH1cclxufVxyXG5leHBvcnQgY2xhc3MgQ29sdW1uVmVjdG9yIGV4dGVuZHMgVmVjdG9yIHtcclxufVxyXG5leHBvcnQgY2xhc3MgUm93VmVjdG9yIGV4dGVuZHMgVmVjdG9yIHtcclxuXHRwdWJsaWMgbWF0cml4UHJvZHVjdChtOiBNYXRyaXgpOiBSb3dWZWN0b3Ige1xyXG5cdFx0aWYgKHRoaXMubSAhPT0gbS5uKSB7IHRocm93IG5ldyBFcnJvcihcIk1pc21hdGNoZWQgZGltZW5zaW9ucy5cIik7IH1cclxuXHRcdGNvbnN0IHJlczogUm93VmVjdG9yID0gbmV3IFJvd1ZlY3Rvcih0aGlzLm0pO1xyXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMubTsgaSsrKSB7XHJcblx0XHRcdGxldCBzdW06IFJhdGlvbmFsTnVtYmVyID0gbmV3IFJhdGlvbmFsTnVtYmVyKDApO1xyXG5cdFx0XHRmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgbS5uOyBqKyspIHtcclxuXHRcdFx0XHRzdW0gPSBzdW0uYWRkKG0uZWxlbWVudHNbaV1bal0ubXVsdCh0aGlzLmVsZW1lbnRzW2ldKSk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmVzLmVsZW1lbnRzW2ldID0gc3VtO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlcztcclxuXHR9XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdGlmICghKG1vZHVsZUlkIGluIF9fd2VicGFja19tb2R1bGVzX18pKSB7XG5cdFx0ZGVsZXRlIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgTWF0cml4UHJlc2VudGVyIH0gZnJvbSBcIi4uL3ByZXNlbnRlcnMvTWF0cml4UHJlc2VudGVyXCI7XHJcbmltcG9ydCB7IE1hdHJpeCB9IGZyb20gXCIuLi9zdHJ1Y3R1cmVzL01hdHJpeFwiO1xyXG5pbXBvcnQgeyBRdWV1ZSB9IGZyb20gXCIuLi9zdHJ1Y3R1cmVzL1F1ZXVlXCI7XHJcbmltcG9ydCB7IFJhdGlvbmFsTnVtYmVyIH0gZnJvbSBcIi4uL3N0cnVjdHVyZXMvUmF0aW9uYWxOdW1iZXJcIjtcclxuaW1wb3J0IHsgQ29sdW1uVmVjdG9yLCBSb3dWZWN0b3IsIFZlY3RvciB9IGZyb20gXCIuLi9zdHJ1Y3R1cmVzL1ZlY3RvclwiO1xyXG5cclxuY2xhc3MgVmVjdG9yMkQgZXh0ZW5kcyBWZWN0b3Ige1xyXG5cdHB1YmxpYyBzdGF0aWMgZnJvbVZlY3Rvcih2OiBWZWN0b3IpOiBWZWN0b3IyRCB7XHJcblx0XHRpZiAodi5tICE9PSAyKSB7IHRocm93IG5ldyBFcnJvcihcIlZlY3RvciBkaW1lbnNpb24gbXVzdCBiZSAyLlwiKTsgfVxyXG5cdFx0cmV0dXJuIG5ldyBWZWN0b3IyRCh2LmVsZW1lbnRzWzBdLCB2LmVsZW1lbnRzWzFdKTtcclxuXHR9XHJcblx0cHVibGljIHN0YXRpYyBHZXRTY2FsbGluZ01hdHJpeChzY2FsZTogbnVtYmVyKTogTWF0cml4IHtcclxuXHRcdGNvbnN0IG06IE1hdHJpeCA9IG5ldyBNYXRyaXgoMiwgMik7XHJcblx0XHRtLmVsZW1lbnRzID0gW1tuZXcgUmF0aW9uYWxOdW1iZXIoc2NhbGUpLCBuZXcgUmF0aW9uYWxOdW1iZXIoMCldLCBbbmV3IFJhdGlvbmFsTnVtYmVyKDApLCBuZXcgUmF0aW9uYWxOdW1iZXIoc2NhbGUpXV07XHJcblx0XHRyZXR1cm4gbTtcclxuXHR9XHJcblx0cHVibGljIHN0YXRpYyBHZXRSb3RhdGlvbk1hdHJpeChhbmdsZTogbnVtYmVyKTogTWF0cml4IHtcclxuXHRcdGNvbnN0IHJvdGF0aW9uQW5nbGU6IG51bWJlciA9IGFuZ2xlICogKDE4MCAvIE1hdGguUEkpOyAvLyBjb252ZXJ0ZWQgdG8gcmFkaWFuc1xyXG5cdFx0Y29uc3QgbTogTWF0cml4ID0gbmV3IE1hdHJpeCgyLCAyKTtcclxuXHRcdG0uZWxlbWVudHMgPSBbW25ldyBSYXRpb25hbE51bWJlcihNYXRoLmNvcyhyb3RhdGlvbkFuZ2xlKSksIG5ldyBSYXRpb25hbE51bWJlcigtTWF0aC5zaW4ocm90YXRpb25BbmdsZSkpXSxcclxuXHRcdCBbbmV3IFJhdGlvbmFsTnVtYmVyKE1hdGguc2luKHJvdGF0aW9uQW5nbGUpKSwgbmV3IFJhdGlvbmFsTnVtYmVyKE1hdGguY29zKHJvdGF0aW9uQW5nbGUpKV1dO1xyXG5cdFx0cmV0dXJuIG07XHJcblx0fVxyXG5cdGNvbnN0cnVjdG9yKHg6IG51bWJlciB8IFJhdGlvbmFsTnVtYmVyLCB5OiBudW1iZXIgfCBSYXRpb25hbE51bWJlcikge1xyXG5cdFx0c3VwZXIoMik7XHJcblx0XHRpZiAodHlwZW9mIHggPT09IFwibnVtYmVyXCIpIHtcclxuXHRcdFx0dGhpcy5lbGVtZW50c1swXSA9IG5ldyBSYXRpb25hbE51bWJlcih4KTtcclxuXHRcdH0gZWxzZSBpZiAoeCBpbnN0YW5jZW9mIFJhdGlvbmFsTnVtYmVyKSB7XHJcblx0XHRcdHRoaXMuZWxlbWVudHNbMF0gPSB4O1xyXG5cdFx0fVxyXG5cdFx0aWYgKHR5cGVvZiB5ID09PSBcIm51bWJlclwiKSB7XHJcblx0XHRcdHRoaXMuZWxlbWVudHNbMV0gPSBuZXcgUmF0aW9uYWxOdW1iZXIoeSk7XHJcblx0XHR9IGVsc2UgaWYgKHkgaW5zdGFuY2VvZiBSYXRpb25hbE51bWJlcikge1xyXG5cdFx0XHR0aGlzLmVsZW1lbnRzWzFdID0geTtcclxuXHRcdH1cclxuXHR9XHJcblx0Z2V0IHgoKTogbnVtYmVyIHtcclxuXHRcdHJldHVybiB0aGlzLmVsZW1lbnRzWzBdLnRvTnVtYmVyKCk7XHJcblx0fVxyXG5cdGdldCB5KCk6IG51bWJlciB7XHJcblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50c1sxXS50b051bWJlcigpO1xyXG5cdH1cclxuXHRwdWJsaWMgdG9Sb3dWZWN0b3IoKTogUm93VmVjdG9yIHtcclxuXHRcdGNvbnN0IHJlczogUm93VmVjdG9yID0gbmV3IFJvd1ZlY3RvcigyKTtcclxuXHRcdHJlcy5lbGVtZW50cyA9IFtuZXcgUmF0aW9uYWxOdW1iZXIodGhpcy54KSwgbmV3IFJhdGlvbmFsTnVtYmVyKHRoaXMueSldO1xyXG5cdFx0cmV0dXJuIHJlcztcclxuXHR9XHJcblx0cHVibGljIHRvQ29sdW1uVmVjdG9yKCk6IENvbHVtblZlY3RvciB7XHJcblx0XHRjb25zdCByZXM6IENvbHVtblZlY3RvciA9IG5ldyBDb2x1bW5WZWN0b3IoMik7XHJcblx0XHRyZXMuZWxlbWVudHMgPSBbbmV3IFJhdGlvbmFsTnVtYmVyKHRoaXMueCksIG5ldyBSYXRpb25hbE51bWJlcih0aGlzLnkpXTtcclxuXHRcdHJldHVybiByZXM7XHJcblx0fVxyXG59XHJcbmZ1bmN0aW9uIHJhbmRvbVZlY3RvcjJEKCk6IFZlY3RvcjJEIHtcclxuXHRyZXR1cm4gbmV3IFZlY3RvcjJEKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIwKSAtIDEwLCBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyMCkgLSAxMCk7XHJcbn1cclxuY29uc3Qgb3J0aG9ub3JtYWxBeGVzQ29sb3I6IHN0cmluZyA9IFwiIzY2NjYwMFwiO1xyXG5jb25zdCBvcnRob25vcm1hbEdyaWRMaW5lc0NvbG9yOiBzdHJpbmcgPSBcIiNmMGYwZmZcIjtcclxuY29uc3QgdmVjdG9yQ29sb3I6IHN0cmluZyA9IFwiIzMwMzBmMFwiO1xyXG5jb25zdCB0cmFuc2Zvcm1lZFZlY3RvckNvbG9yOiBzdHJpbmcgPSBcIiM5MDkwOTBcIjtcclxuY29uc3QgdW5pdFNpemU6IG51bWJlciA9IDIwO1xyXG5jb25zdCB2ZWN0b3I6IFZlY3RvcjJEID0gcmFuZG9tVmVjdG9yMkQoKTtcclxuY29uc3Qgc2Vjb25kQmFzaXM6IFZlY3RvcjJEW10gPSBbbmV3IFZlY3RvcjJEKDYsIDIpLCBuZXcgVmVjdG9yMkQoMiwgNildO1xyXG5jb25zdCB0cmFuc2Zvcm1hdGlvbnM6IFF1ZXVlPE1hdHJpeD4gPSBuZXcgUXVldWU8TWF0cml4PigpO1xyXG50cmFuc2Zvcm1hdGlvbnMuZW5xdWV1ZShWZWN0b3IyRC5HZXRTY2FsbGluZ01hdHJpeCgwLjUpKTtcclxudHJhbnNmb3JtYXRpb25zLmVucXVldWUoVmVjdG9yMkQuR2V0Um90YXRpb25NYXRyaXgoNjApKTtcclxuLy8gY29uc3QgdHJhbnNmb3JtZWRWZWN0b3I6IFZlY3RvcjJEID0gVmVjdG9yMkQuZnJvbVZlY3Rvcih2ZWN0b3IudG9Sb3dWZWN0b3IoKS5tYXRyaXhQcm9kdWN0KFQpKTtcclxuY29uc3Qgc2Vjb25kVmVjdG9yU3BhY2VBeGVzQ29sb3I6IHN0cmluZyA9IFwiIzAwNjY2NlwiO1xyXG5jb25zdCBzZWNvbmRWZWN0b3JTcGFjZUdyaWRDb2xvcjogc3RyaW5nID0gXCIjZmZmMGYwXCI7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuXHRjb25zdCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50ID0gPEhUTUxDYW52YXNFbGVtZW50PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdyYXBoQ2FudmFzXCIpO1xyXG5cdGNvbnN0IGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuXHRjb25zdCBjYW52YXNXaWR0aDogbnVtYmVyID0gY2FudmFzLndpZHRoO1xyXG5cdGNvbnN0IGNhbnZhc0hlaWdodDogbnVtYmVyID0gY2FudmFzLmhlaWdodDtcclxuXHRjb25zdCBvcmlnaW5YOiBudW1iZXIgPSBjYW52YXNXaWR0aCAvIDI7XHJcblx0Y29uc3Qgb3JpZ2luWTogbnVtYmVyID0gY2FudmFzSGVpZ2h0IC8gMjtcclxuXHRsZXQgbGVnZW5kMTogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdGxlZ2VuZDEuaW5uZXJUZXh0ID0gXCJDYW52YXMgc2l6ZTogXCIgKyBjYW52YXNXaWR0aCArIFwiIHggXCIgKyBjYW52YXNIZWlnaHQgKyBcIiBweFwiO1xyXG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVnZW5kXCIpLmFwcGVuZChsZWdlbmQxKTtcclxuXHRsZXQgbGVnZW5kMjogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdGxlZ2VuZDIuaW5uZXJUZXh0ID0gXCJDYW52YXMgb3JpZ2luOiBcIiArIG9yaWdpblggKyBcIiB4IFwiICsgb3JpZ2luWSArIFwiIHB4XCI7XHJcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWdlbmRcIikuYXBwZW5kKGxlZ2VuZDIpO1xyXG5cdGxldCBsZWdlbmQzOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0bGVnZW5kMy5pbm5lclRleHQgPSBcIlZlY3RvcjogW1wiICsgdmVjdG9yLnggKyBcIiwgXCIgKyB2ZWN0b3IueSArIFwiXVwiO1xyXG5cdGxlZ2VuZDMuc3R5bGUuY29sb3IgPSB2ZWN0b3JDb2xvcjtcclxuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZ2VuZFwiKS5hcHBlbmQobGVnZW5kMyk7XHJcblx0ZHJhd09ydGhvbm9ybWFsR3JpZCgpO1xyXG5cdGRyYXdWZWN0b3IodmVjdG9yKTtcclxuXHQvLyBkcmF3VHJhbnNmb3JtZWRWZWN0b3IodmVjdG9yLCB0cmFuc2Zvcm1hdGlvbnMpO1xyXG5cdGRyYXdDaGFuZ2VDb29yZGluYXRlcygpO1xyXG5cclxuXHRmdW5jdGlvbiBkcmF3T3J0aG9ub3JtYWxHcmlkKCk6IHZvaWQge1xyXG5cdFx0Ly8gZ3JpZFxyXG5cdFx0Y3R4LmJlZ2luUGF0aCgpO1xyXG5cdFx0Y3R4LnN0cm9rZVN0eWxlID0gb3J0aG9ub3JtYWxHcmlkTGluZXNDb2xvcjtcclxuXHRcdGN0eC5zZXRMaW5lRGFzaChbMiwgMl0pO1xyXG5cdFx0Y3R4LmxpbmVXaWR0aCA9IDE7XHJcblx0XHRsZXQgaTogbnVtYmVyID0gMDtcclxuXHRcdGRvIHtcclxuXHRcdFx0Y3R4Lm1vdmVUbyhvcmlnaW5YICsgdW5pdFNpemUgKiBpLCAwKTtcclxuXHRcdFx0Y3R4LmxpbmVUbyhvcmlnaW5YICsgdW5pdFNpemUgKiBpLCBjYW52YXNIZWlnaHQpO1xyXG5cdFx0XHRjdHguc3Ryb2tlKCk7XHJcblx0XHRcdGN0eC5tb3ZlVG8ob3JpZ2luWCAtIHVuaXRTaXplICogaSwgMCk7XHJcblx0XHRcdGN0eC5saW5lVG8ob3JpZ2luWCAtIHVuaXRTaXplICogaSwgY2FudmFzSGVpZ2h0KTtcclxuXHRcdFx0Y3R4LnN0cm9rZSgpO1xyXG5cdFx0XHRpKys7XHJcblx0XHR9XHJcblx0XHR3aGlsZSAob3JpZ2luWCArIHVuaXRTaXplICogaSA8IGNhbnZhc1dpZHRoKTtcclxuXHRcdGkgPSAwO1xyXG5cdFx0ZG8ge1xyXG5cdFx0XHRjdHgubW92ZVRvKDAsIG9yaWdpblkgKyB1bml0U2l6ZSAqIGkpO1xyXG5cdFx0XHRjdHgubGluZVRvKGNhbnZhc1dpZHRoLCBvcmlnaW5ZICsgdW5pdFNpemUgKiBpKTtcclxuXHRcdFx0Y3R4LnN0cm9rZSgpO1xyXG5cdFx0XHRjdHgubW92ZVRvKDAsIG9yaWdpblkgLSB1bml0U2l6ZSAqIGkpO1xyXG5cdFx0XHRjdHgubGluZVRvKGNhbnZhc1dpZHRoLCBvcmlnaW5ZIC0gdW5pdFNpemUgKiBpKTtcclxuXHRcdFx0Y3R4LnN0cm9rZSgpO1xyXG5cdFx0XHRpKys7XHJcblx0XHR9XHJcblx0XHR3aGlsZSAob3JpZ2luWSArIHVuaXRTaXplICogaSA8IGNhbnZhc0hlaWdodCk7XHJcblx0XHQvLyBheGVzXHJcblx0XHRjdHguYmVnaW5QYXRoKCk7XHJcblx0XHRjdHguc3Ryb2tlU3R5bGUgPSBvcnRob25vcm1hbEF4ZXNDb2xvcjtcclxuXHRcdGN0eC5zZXRMaW5lRGFzaChbXSk7XHJcblx0XHRjdHgubGluZVdpZHRoID0gMjtcclxuXHRcdGN0eC5tb3ZlVG8ob3JpZ2luWCwgMCk7XHJcblx0XHRjdHgubGluZVRvKG9yaWdpblgsIGNhbnZhc0hlaWdodCk7XHJcblx0XHRjdHguc3Ryb2tlKCk7XHJcblx0XHRjdHgubW92ZVRvKDAsIG9yaWdpblkpO1xyXG5cdFx0Y3R4LmxpbmVUbyhjYW52YXNXaWR0aCwgb3JpZ2luWSk7XHJcblx0XHRjdHguc3Ryb2tlKCk7XHJcblx0fVxyXG5cdGZ1bmN0aW9uIGRyYXdWZWN0b3IodmVjdG9yOiBWZWN0b3IyRCwgY29sb3I6IHN0cmluZyA9IHZlY3RvckNvbG9yLCBsaW5lV2lkdGg6IG51bWJlciA9IDIpOiB2b2lkIHtcclxuXHRcdGN0eC5iZWdpblBhdGgoKTtcclxuXHRcdGN0eC5saW5lV2lkdGggPSBsaW5lV2lkdGg7XHJcblx0XHRjdHguc3Ryb2tlU3R5bGUgPSBjb2xvcjtcclxuXHRcdGN0eC5tb3ZlVG8ob3JpZ2luWCwgb3JpZ2luWSk7XHJcblx0XHQvLyBiZWNhdXNlIHRoZSBjYW52YXMgb3JpZ2luIGlzIHRvcCBsZWZ0OlxyXG5cdFx0Y3R4LmxpbmVUbyhvcmlnaW5YICsgdW5pdFNpemUgKiB2ZWN0b3IuZWxlbWVudHNbMF0udG9OdW1iZXIoKSwgb3JpZ2luWSAtIHVuaXRTaXplICogdmVjdG9yLmVsZW1lbnRzWzFdLnRvTnVtYmVyKCkpO1xyXG5cdFx0Y3R4LnN0cm9rZSgpO1xyXG5cdH1cclxuXHRmdW5jdGlvbiBkcmF3VHJhbnNmb3JtZWRWZWN0b3IodmVjdG9yOiBWZWN0b3IyRCwgdHJhbnNmb3JtYXRpb25zOiBRdWV1ZTxNYXRyaXg+KTogdm9pZCB7XHJcblx0XHRsZXQgdHJhbnNmb3JtZWRWZWN0b3I6IFZlY3RvcjJEID0gdmVjdG9yO1xyXG5cdFx0d2hpbGUgKCF0cmFuc2Zvcm1hdGlvbnMuaXNFbXB0eSgpKSB7XHJcblx0XHRcdGNvbnN0IHRyYW5zZm9ybWF0aW9uOiBNYXRyaXggPSB0cmFuc2Zvcm1hdGlvbnMuZGVxdWV1ZSgpO1xyXG5cdFx0XHR0cmFuc2Zvcm1lZFZlY3RvciA9IFZlY3RvcjJELmZyb21WZWN0b3IodHJhbnNmb3JtYXRpb24udmVjdG9yUHJvZHVjdCh0cmFuc2Zvcm1lZFZlY3Rvci50b0NvbHVtblZlY3RvcigpKSk7XHJcblx0XHRcdGRyYXdWZWN0b3IodHJhbnNmb3JtZWRWZWN0b3IsIHRyYW5zZm9ybWVkVmVjdG9yQ29sb3IsIDEpO1xyXG5cdFx0XHRsZXQgZGl2SGVhZGVyOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0XHRcdGRpdkhlYWRlci5pbm5lclRleHQgPSBcIlRyYW5zZm9ybWF0aW9uIG1hdHJpeDpcIjtcclxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWdlbmRcIikuYXBwZW5kKGRpdkhlYWRlcik7XHJcblx0XHRcdGxldCBkaXZNYXRyaXg6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWdlbmRcIikuYXBwZW5kKGRpdk1hdHJpeCk7XHJcblx0XHRcdE1hdHJpeFByZXNlbnRlci5wcmludFRhYmxlTWF0cml4KHRyYW5zZm9ybWF0aW9uLCBkaXZNYXRyaXgpO1xyXG5cdFx0XHRsZXQgZGl2Rm9vdGVyOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0XHRcdGRpdkZvb3Rlci5pbm5lclRleHQgPSBgVHJhbnNmb3JtZWQgdmVjdG9yOiAoJHt0cmFuc2Zvcm1lZFZlY3Rvci54fSwgJHt0cmFuc2Zvcm1lZFZlY3Rvci55fSlgO1xyXG5cdFx0XHRkaXZGb290ZXIuc3R5bGUuY29sb3IgPSB0cmFuc2Zvcm1lZFZlY3RvckNvbG9yO1xyXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZ2VuZFwiKS5hcHBlbmQoZGl2Rm9vdGVyKTtcclxuXHRcdH1cclxuXHR9XHJcblx0ZnVuY3Rpb24gZHJhd0NoYW5nZUNvb3JkaW5hdGVzKCk6IHZvaWQge1xyXG5cdFx0ZHJhd1ZlY3RvcihzZWNvbmRCYXNpc1swXSwgc2Vjb25kVmVjdG9yU3BhY2VBeGVzQ29sb3IpO1xyXG5cdFx0ZHJhd1ZlY3RvcihzZWNvbmRCYXNpc1sxXSwgc2Vjb25kVmVjdG9yU3BhY2VBeGVzQ29sb3IpO1xyXG5cdFx0Y29uc3QgY2hhbmdlT2ZDb29yZGluYXRlc01hdHJpeDogTWF0cml4ID0gbmV3IE1hdHJpeCgyLCAyKTtcclxuXHRcdGNoYW5nZU9mQ29vcmRpbmF0ZXNNYXRyaXguZWxlbWVudHNbMF0gPSBbbmV3IFJhdGlvbmFsTnVtYmVyKDYpLCBuZXcgUmF0aW9uYWxOdW1iZXIoMildO1xyXG5cdFx0Y2hhbmdlT2ZDb29yZGluYXRlc01hdHJpeC5lbGVtZW50c1sxXSA9IFtuZXcgUmF0aW9uYWxOdW1iZXIoMiksIG5ldyBSYXRpb25hbE51bWJlcig2KV07XHJcblx0XHRjb25zdCB2ZWN0b3JTZWNvbmRCYXNpczogVmVjdG9yMkQgPSBWZWN0b3IyRC5mcm9tVmVjdG9yKGNoYW5nZU9mQ29vcmRpbmF0ZXNNYXRyaXgudmVjdG9yUHJvZHVjdCh2ZWN0b3IudG9Db2x1bW5WZWN0b3IoKSkpOyAvLyBpdCdzIHRoZSBvdGhlciB3YXkgYXJvdW5kXHJcblx0XHRsZXQgZGl2SGVhZGVyOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0XHRkaXZIZWFkZXIuaW5uZXJUZXh0ID0gXCJDaGFuZ2Ugb2YgYmFzaXMgbWF0cml4OlwiO1xyXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsZWdlbmRcIikuYXBwZW5kKGRpdkhlYWRlcik7XHJcblx0XHRsZXQgZGl2TWF0cml4OiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlZ2VuZFwiKS5hcHBlbmQoZGl2TWF0cml4KTtcclxuXHRcdE1hdHJpeFByZXNlbnRlci5wcmludFRhYmxlTWF0cml4KGNoYW5nZU9mQ29vcmRpbmF0ZXNNYXRyaXgsIGRpdk1hdHJpeCk7XHJcblx0XHRsZXQgZGl2Rm9vdGVyOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0XHRkaXZGb290ZXIuaW5uZXJUZXh0ID0gYFZlY3RvciBpbiB0aGUgbmV3IGJhc2lzOiAoJHt2ZWN0b3JTZWNvbmRCYXNpcy54fSwgJHt2ZWN0b3JTZWNvbmRCYXNpcy55fSlgO1xyXG5cdFx0ZGl2Rm9vdGVyLnN0eWxlLmNvbG9yID0gdHJhbnNmb3JtZWRWZWN0b3JDb2xvcjtcclxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVnZW5kXCIpLmFwcGVuZChkaXZGb290ZXIpO1xyXG5cdH1cclxufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9