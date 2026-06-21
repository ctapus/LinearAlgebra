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
/*!****************************************!*\
  !*** ./src/exercises/inverseMatrix.ts ***!
  \****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _presenters_MatrixPresenter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../presenters/MatrixPresenter */ "./src/presenters/MatrixPresenter.ts");
/* harmony import */ var _structures_Matrix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../structures/Matrix */ "./src/structures/Matrix.ts");
/* harmony import */ var _structures_RationalNumber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../structures/RationalNumber */ "./src/structures/RationalNumber.ts");
/* harmony import */ var _structures_Stack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../structures/Stack */ "./src/structures/Stack.ts");




document.addEventListener("DOMContentLoaded", () => {
    function toggle(id) {
        const element = document.getElementById(id);
        if (element.style.display == 'none') {
            element.style.display = 'block';
        }
        else {
            element.style.display = 'none';
        }
    }
    let undoStack;
    let redoStack;
    const initialMatrix = _structures_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix.randomSquare();
    let workingMatrix = null;
    let operationDivIdx = 0;
    init();
    _presenters_MatrixPresenter__WEBPACK_IMPORTED_MODULE_0__.MatrixPresenter.printTableMatrix(initialMatrix, document.getElementById("content"));
    document.getElementById("btnAugmentMatrix").addEventListener("click", () => {
        document.getElementById("error").innerText = "";
        preProcessOperation();
        if ("A" === document.getElementById("selAugmentOptions1").value) {
            workingMatrix = initialMatrix.deepCopy();
        }
        if ("I" === document.getElementById("selAugmentOptions1").value) {
            workingMatrix = new _structures_Matrix__WEBPACK_IMPORTED_MODULE_1__.MatrixIdentity(initialMatrix.m);
        }
        if ("A" === document.getElementById("selAugmentOptions2").value) {
            workingMatrix = _structures_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix.augment(workingMatrix, initialMatrix);
        }
        if ("I" === document.getElementById("selAugmentOptions2").value) {
            workingMatrix = _structures_Matrix__WEBPACK_IMPORTED_MODULE_1__.Matrix.augment(workingMatrix, new _structures_Matrix__WEBPACK_IMPORTED_MODULE_1__.MatrixIdentity(initialMatrix.m));
        }
        postProcessOperation("Augmented " + document.getElementById("selAugmentOptions1").value + " with " + document.getElementById("selAugmentOptions2").value + ".");
    });
    document.getElementById("btnSwitchRows").addEventListener("click", () => {
        document.getElementById("error").innerText = "";
        const idxRow1 = Number(document.getElementById("row1").value) - 1;
        const idxRow2 = Number(document.getElementById("row2").value) - 1;
        if (0 > idxRow1 || workingMatrix.m < idxRow1 || 0 > idxRow2 || workingMatrix.m < idxRow2) {
            document.getElementById("error").innerText = "Row index must be greater than 0 and smaller than " + workingMatrix.m;
            return;
        }
        preProcessOperation();
        workingMatrix.switchRows(idxRow1, idxRow2);
        postProcessOperation("Switched row " + document.getElementById("row1").value + " with row " + document.getElementById("row2").value + ".");
    });
    document.getElementById("btnMultiplyRow").addEventListener("click", () => {
        document.getElementById("error").innerText = "";
        const idxRow = Number(document.getElementById("rowIdx").value) - 1;
        const scalar = _structures_RationalNumber__WEBPACK_IMPORTED_MODULE_2__.RationalNumber.fromString(document.getElementById("scalar").value);
        if (0 > idxRow || workingMatrix.m < idxRow) {
            document.getElementById("error").innerText = "Row index must be greater than 0 and smaller than " + workingMatrix.m;
            return;
        }
        preProcessOperation();
        workingMatrix.multiplyRow(idxRow, scalar);
        postProcessOperation("Multiplied row " + document.getElementById("rowIdx").value + " with scalar" + document.getElementById("scalar").value + ".");
    });
    document.getElementById("btnAddRows").addEventListener("click", () => {
        document.getElementById("error").innerText = "";
        const idxRow1 = Number(document.getElementById("addRow1Idx").value) - 1;
        const idxRow2 = Number(document.getElementById("addRow2Idx").value) - 1;
        const scalar1 = _structures_RationalNumber__WEBPACK_IMPORTED_MODULE_2__.RationalNumber.fromString(document.getElementById("addRow1Mult").value);
        const scalar2 = _structures_RationalNumber__WEBPACK_IMPORTED_MODULE_2__.RationalNumber.fromString(document.getElementById("addRow2Mult").value);
        if (0 > idxRow1 || workingMatrix.m < idxRow1 || 0 > idxRow2 || workingMatrix.m < idxRow2) {
            document.getElementById("error").innerText = "Row index must be greater than 0 and smaller than " + workingMatrix.m;
            return;
        }
        preProcessOperation();
        workingMatrix.addRow1ToRow2(idxRow1, scalar1, idxRow2, scalar2);
        postProcessOperation(`Added ${scalar1} time(s) row ${document.getElementById("addRow1Idx").value} to ${scalar2} time(s) row ${document.getElementById("addRow2Idx").value}.`);
    });
    document.getElementById("btnUndo").addEventListener("click", () => {
        if (undoStack.isEmpty()) {
            return;
        }
        redoStack.push(null != workingMatrix ? workingMatrix.deepCopy() : null);
        workingMatrix = undoStack.pop();
        let divId = "operationDiv" + operationDivIdx;
        document.getElementById("" + divId).style.display = "none";
        const buttonId = "toggleButton" + operationDivIdx;
        document.getElementById("" + buttonId).style.display = "none";
        --operationDivIdx;
        divId = "operationDiv" + operationDivIdx;
        document.getElementById("" + divId).style.display = "block";
        setEditOperations();
        setAvailableOperations();
    });
    document.getElementById("btnRedo").addEventListener("click", () => {
        if (redoStack.isEmpty()) {
            return;
        }
        undoStack.push(null != workingMatrix ? workingMatrix.deepCopy() : null);
        workingMatrix = redoStack.pop();
        let divId = "operationDiv" + operationDivIdx;
        document.getElementById("" + divId).style.display = "none";
        ++operationDivIdx;
        divId = "operationDiv" + operationDivIdx;
        document.getElementById("" + divId).style.display = "block";
        const buttonId = "toggleButton" + operationDivIdx;
        document.getElementById("" + buttonId).style.display = "block";
        setEditOperations();
        setAvailableOperations();
    });
    document.getElementById("btnReset").addEventListener("click", () => {
        init();
        while (operationDivIdx > 0) {
            const divId = "operationDiv" + operationDivIdx;
            document.getElementById("" + divId).remove();
            const buttonId = "toggleButton" + operationDivIdx;
            document.getElementById("" + buttonId).remove();
            --operationDivIdx;
        }
        setEditOperations();
        setAvailableOperations();
    });
    function init() {
        undoStack = new _structures_Stack__WEBPACK_IMPORTED_MODULE_3__.Stack();
        redoStack = new _structures_Stack__WEBPACK_IMPORTED_MODULE_3__.Stack();
        workingMatrix = null;
        setEditOperations();
        setAvailableOperations();
    }
    function preProcessOperation() {
        undoStack.push(null != workingMatrix ? workingMatrix.deepCopy() : null);
    }
    function postProcessOperation(title) {
        clearRedo();
        if (operationDivIdx > 0) {
            toggle("operationDiv" + operationDivIdx);
        }
        ++operationDivIdx;
        const divId = "operationDiv" + operationDivIdx;
        const div = document.createElement("div");
        div.id = divId;
        const buttonId = "toggleButton" + operationDivIdx;
        const toggleButton = document.createElement("button");
        toggleButton.id = buttonId;
        toggleButton.classList.add("operationButton");
        toggleButton.textContent = title;
        toggleButton.addEventListener("click", () => {
            toggle(divId);
        });
        document.getElementById("content").append(toggleButton);
        document.getElementById("content").append(div);
        _presenters_MatrixPresenter__WEBPACK_IMPORTED_MODULE_0__.MatrixPresenter.printTableMatrix(workingMatrix, div);
        if (workingMatrix.isReducedRowEchelonForm()) {
            toggleButton.append(" Matrix is in reduced row eschelon form.");
        }
        else {
            if (workingMatrix.isRowEchelonForm()) {
                toggleButton.append(" Matrix is in row eschelon form.");
            }
        }
        document.getElementById("selAugmentOptions1").value = "";
        document.getElementById("selAugmentOptions2").value = "";
        document.getElementById("row1").value = "";
        document.getElementById("row2").value = "";
        document.getElementById("rowIdx").value = "";
        document.getElementById("scalar").value = "1";
        document.getElementById("addRow1Idx").value = "";
        document.getElementById("addRow1Mult").value = "1";
        document.getElementById("addRow2Idx").value = "";
        document.getElementById("addRow2Mult").value = "1";
        setEditOperations();
        setAvailableOperations();
    }
    function setEditOperations() {
        if (undoStack.isEmpty()) {
            document.getElementById("btnUndo").setAttribute("disabled", "disabled");
        }
        else {
            document.getElementById("btnUndo").removeAttribute("disabled");
        }
        if (redoStack.isEmpty()) {
            document.getElementById("btnRedo").setAttribute("disabled", "disabled");
        }
        else {
            document.getElementById("btnRedo").removeAttribute("disabled");
        }
    }
    function clearRedo() {
        let i = operationDivIdx;
        while (!redoStack.isEmpty()) {
            ++i;
            const divId = "operationDiv" + i;
            document.getElementById("" + divId).remove();
            const buttonId = "toggleButton" + i;
            document.getElementById("" + buttonId).remove();
            redoStack.pop();
        }
    }
    function setAvailableOperations() {
        if (null == workingMatrix) {
            document.getElementById("divAugmentMatrix").style.display = "block";
            document.getElementById("divSwitchRows").style.display = "none";
            document.getElementById("divMultiplyRow").style.display = "none";
            document.getElementById("divAddRows").style.display = "none";
        }
        else {
            document.getElementById("divAugmentMatrix").style.display = "none";
            document.getElementById("divSwitchRows").style.display = "block";
            document.getElementById("divMultiplyRow").style.display = "block";
            document.getElementById("divAddRows").style.display = "block";
        }
    }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQy9ELENBQUM7SUFDRixDQUFDO0FBQ0YsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saW5lYXJhbGdlYnJhLy4vc3JjL3ByZXNlbnRlcnMvTWF0cml4UHJlc2VudGVyLnRzIiwid2VicGFjazovL2xpbmVhcmFsZ2VicmEvLi9zcmMvc3RydWN0dXJlcy9Bcml0aG1ldGljRXZhbHVhdG9yLnRzIiwid2VicGFjazovL2xpbmVhcmFsZ2VicmEvLi9zcmMvc3RydWN0dXJlcy9NYXRyaXgudHMiLCJ3ZWJwYWNrOi8vbGluZWFyYWxnZWJyYS8uL3NyYy9zdHJ1Y3R1cmVzL1F1ZXVlLnRzIiwid2VicGFjazovL2xpbmVhcmFsZ2VicmEvLi9zcmMvc3RydWN0dXJlcy9SYXRpb25hbE51bWJlci50cyIsIndlYnBhY2s6Ly9saW5lYXJhbGdlYnJhLy4vc3JjL3N0cnVjdHVyZXMvU3RhY2sudHMiLCJ3ZWJwYWNrOi8vbGluZWFyYWxnZWJyYS8uL3NyYy9zdHJ1Y3R1cmVzL1ZlY3Rvci50cyIsIndlYnBhY2s6Ly9saW5lYXJhbGdlYnJhL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xpbmVhcmFsZ2VicmEvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2xpbmVhcmFsZ2VicmEvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9saW5lYXJhbGdlYnJhL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbGluZWFyYWxnZWJyYS8uL3NyYy9leGVyY2lzZXMvaW52ZXJzZU1hdHJpeC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNYXRyaXggfSBmcm9tIFwiLi4vc3RydWN0dXJlcy9NYXRyaXhcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBNYXRyaXhQcmVzZW50ZXIge1xyXG5cdHB1YmxpYyBzdGF0aWMgcHJpbnRUYWJsZU1hdHJpeChtYXRyaXg6IE1hdHJpeCwgY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudCk6IHZvaWQge1xyXG5cdFx0bGV0IHJvd0VjaGVsb25Gb3JtOiBib29sZWFuID0gbWF0cml4LmlzUm93RWNoZWxvbkZvcm0oKTtcclxuXHRcdGxldCByZWR1Y2VkUm93RWNoZWxvbkZvcm06IGJvb2xlYW4gPSByb3dFY2hlbG9uRm9ybSA/IG1hdHJpeC5pc1JlZHVjZWRSb3dFY2hlbG9uRm9ybSgpIDogZmFsc2U7XHJcblx0XHRsZXQgdGFibGU6IEhUTUxUYWJsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XHJcblx0XHR0YWJsZS5jbGFzc05hbWUgPSBcIm1hdHJpeFwiO1xyXG5cdFx0aWYgKHJlZHVjZWRSb3dFY2hlbG9uRm9ybSkge1xyXG5cdFx0XHR0YWJsZS5jbGFzc05hbWUgPSBcInJlZHVjZWRSb3dFY2hlbG9uTWF0cml4XCI7XHJcblx0XHR9IGVsc2UgaWYgKHJvd0VjaGVsb25Gb3JtKSB7XHJcblx0XHRcdHRhYmxlLmNsYXNzTmFtZSA9IFwicm93RWNoZWxvbk1hdHJpeFwiO1xyXG5cdFx0fVxyXG5cdFx0Zm9yIChsZXQgaTpudW1iZXIgPSAwOyBpIDwgbWF0cml4Lm07IGkrKykge1xyXG5cdFx0XHRsZXQgdHI6IEhUTUxUYWJsZVJvd0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcblx0XHRcdGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCBtYXRyaXgubjsgaisrKSB7XHJcblx0XHRcdFx0bGV0IHRkOiBIVE1MVGFibGVDZWxsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuXHRcdFx0XHR0ZC5pbm5lclRleHQgPSBtYXRyaXguZWxlbWVudHNbaV1bal0udG9TdHJpbmcoKTtcclxuXHRcdFx0XHR0ZC5jbGFzc05hbWUgPSBcIm1hdHJpeEVsZW1lbnRcIjtcclxuXHRcdFx0XHRpZiAocmVkdWNlZFJvd0VjaGVsb25Gb3JtICYmIGogPT09IGkpIHsgdGQuY2xhc3NOYW1lID0gXCJwaXZvdEVsZW1lbnRcIjsgfVxyXG5cdFx0XHRcdHRyLmFwcGVuZCh0ZCk7XHJcblx0XHRcdH1cclxuXHRcdFx0dGFibGUuYXBwZW5kKHRyKTtcclxuXHRcdH1cclxuXHRcdGNvbnRhaW5lci5hcHBlbmQodGFibGUpO1xyXG5cdFx0Y29udGFpbmVyLmFwcGVuZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xyXG5cdH1cclxuXHRwdWJsaWMgc3RhdGljIHByaW50TWF0cml4RXF1YWxpdHkobWF0cml4MTogTWF0cml4LCBvcGVhcnRvcjogc3RyaW5nLCBtYXRyaXgyOiBNYXRyaXgsIHJlc3VsdDogTWF0cml4LCBjb250YWluZXI6IEhUTUxEaXZFbGVtZW50KTogdm9pZCB7XHJcblx0XHRsZXQgdGFibGU6IEhUTUxUYWJsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XHJcblx0XHRsZXQgdHIwOiBIVE1MVGFibGVSb3dFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG5cdFx0dGFibGUuYXBwZW5kKHRyMCk7XHJcblx0XHRsZXQgdGQwMTogSFRNTFRhYmxlQ2VsbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcblx0XHR0cjAuYXBwZW5kKHRkMDEpO1xyXG5cdFx0bGV0IHRkMDI6IEhUTUxUYWJsZUNlbGxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG5cdFx0dGQwMi5pbm5lclRleHQgPSBvcGVhcnRvcjtcclxuXHRcdHRkMDIuc3R5bGUudmVydGljYWxBbGlnbiA9IFwibWlkZGxlXCI7XHJcblx0XHR0ZDAyLnN0eWxlLnBhZGRpbmdMZWZ0ID0gXCI1cHhcIjtcclxuXHRcdHRkMDIuc3R5bGUucGFkZGluZ1JpZ2h0ID0gXCI1cHhcIjtcclxuXHRcdHRyMC5hcHBlbmQodGQwMik7XHJcblx0XHRsZXQgdGQwMzogSFRNTFRhYmxlQ2VsbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcblx0XHR0cjAuYXBwZW5kKHRkMDMpO1xyXG5cdFx0bGV0IHRkMDQ6IEhUTUxUYWJsZUNlbGxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG5cdFx0dGQwNC5pbm5lclRleHQgPSBcIj1cIjtcclxuXHRcdHRkMDQuc3R5bGUudmVydGljYWxBbGlnbiA9IFwibWlkZGxlXCI7XHJcblx0XHR0ZDA0LnN0eWxlLnBhZGRpbmdMZWZ0ID0gXCI1cHhcIjtcclxuXHRcdHRkMDQuc3R5bGUucGFkZGluZ1JpZ2h0ID0gXCI1cHhcIjtcclxuXHRcdHRyMC5hcHBlbmQodGQwNCk7XHJcblx0XHRsZXQgdGQwNTogSFRNTFRhYmxlQ2VsbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcblx0XHR0cjAuYXBwZW5kKHRkMDUpO1xyXG5cdFx0bGV0IHRhYmxlMTogSFRNTFRhYmxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcclxuXHRcdHRhYmxlMS5jbGFzc05hbWUgPSBcIm1hdHJpeFwiO1xyXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IG1hdHJpeDEubTsgaSsrKSB7XHJcblx0XHRcdGxldCB0cjogSFRNTFRhYmxlUm93RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuXHRcdFx0Zm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IG1hdHJpeDEubjsgaisrKSB7XHJcblx0XHRcdFx0bGV0IHRkOiBIVE1MVGFibGVDZWxsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuXHRcdFx0XHR0ZC5pbm5lclRleHQgPSBtYXRyaXgxLmVsZW1lbnRzW2ldW2pdLnRvU3RyaW5nKCk7XHJcblx0XHRcdFx0dGQuc3R5bGUucGFkZGluZ0xlZnQgPSBcIjVweFwiO1xyXG5cdFx0XHRcdHRkLnN0eWxlLnBhZGRpbmdSaWdodCA9IFwiNXB4XCI7XHJcblx0XHRcdFx0dHIuYXBwZW5kKHRkKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0YWJsZTEuYXBwZW5kKHRyKTtcclxuXHRcdH1cclxuXHRcdHRkMDEuYXBwZW5kKHRhYmxlMSk7XHJcblx0XHR0YWJsZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XHJcblx0XHR0YWJsZTEuY2xhc3NOYW1lID0gXCJtYXRyaXhcIjtcclxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBtYXRyaXgyLm07IGkrKykge1xyXG5cdFx0XHRsZXQgdHI6IEhUTUxUYWJsZVJvd0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcblx0XHRcdGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCBtYXRyaXgyLm47IGorKykge1xyXG5cdFx0XHRcdGxldCB0ZDogSFRNTFRhYmxlQ2VsbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcblx0XHRcdFx0dGQuaW5uZXJUZXh0ID0gbWF0cml4Mi5lbGVtZW50c1tpXVtqXS50b1N0cmluZygpO1xyXG5cdFx0XHRcdHRkLnN0eWxlLnBhZGRpbmdMZWZ0ID0gXCI1cHhcIjtcclxuXHRcdFx0XHR0ZC5zdHlsZS5wYWRkaW5nUmlnaHQgPSBcIjVweFwiO1xyXG5cdFx0XHRcdHRyLmFwcGVuZCh0ZCk7XHJcblx0XHRcdH1cclxuXHRcdFx0dGFibGUxLmFwcGVuZCh0cik7XHJcblx0XHR9XHJcblx0XHR0ZDAzLmFwcGVuZCh0YWJsZTEpO1xyXG5cdFx0dGFibGUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xyXG5cdFx0dGFibGUxLmNsYXNzTmFtZSA9IFwibWF0cml4XCI7XHJcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgcmVzdWx0Lm07IGkrKykge1xyXG5cdFx0XHRsZXQgdHI6IEhUTUxUYWJsZVJvd0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcblx0XHRcdGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCByZXN1bHQubjsgaisrKSB7XHJcblx0XHRcdFx0bGV0IHRkOiBIVE1MVGFibGVDZWxsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuXHRcdFx0XHR0ZC5pbm5lclRleHQgPSByZXN1bHQuZWxlbWVudHNbaV1bal0udG9TdHJpbmcoKTtcclxuXHRcdFx0XHR0ZC5zdHlsZS5wYWRkaW5nTGVmdCA9IFwiNXB4XCI7XHJcblx0XHRcdFx0dGQuc3R5bGUucGFkZGluZ1JpZ2h0ID0gXCI1cHhcIjtcclxuXHRcdFx0XHR0ci5hcHBlbmQodGQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRhYmxlMS5hcHBlbmQodHIpO1xyXG5cdFx0fVxyXG5cdFx0dGQwNS5hcHBlbmQodGFibGUxKTtcclxuXHRcdGNvbnRhaW5lci5hcHBlbmQodGFibGUpO1xyXG5cdFx0Y29udGFpbmVyLmFwcGVuZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xyXG5cdH1cclxuXHRwdWJsaWMgc3RhdGljIHByaW50TWF0cml4RXF1YWxpdHkyKG1hdHJpeDE6IE1hdHJpeCwgb3BlYXJ0b3IxOiBzdHJpbmcsIG1hdHJpeDI6IE1hdHJpeCwgbWF0cml4MzogTWF0cml4LCBvcGVhcnRvcjI6IHN0cmluZywgbWF0cml4NDogTWF0cml4LCBjb250YWluZXI6IEhUTUxEaXZFbGVtZW50KTogdm9pZCB7XHJcblx0XHRsZXQgdGFibGU6IEhUTUxUYWJsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XHJcblx0XHRsZXQgdHIwOiBIVE1MVGFibGVSb3dFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG5cdFx0dGFibGUuYXBwZW5kKHRyMCk7XHJcblx0XHRsZXQgdGQwMTogSFRNTFRhYmxlQ2VsbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcblx0XHR0cjAuYXBwZW5kKHRkMDEpO1xyXG5cdFx0bGV0IHRkMDI6IEhUTUxUYWJsZUNlbGxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG5cdFx0dGQwMi5pbm5lclRleHQgPSBvcGVhcnRvcjE7XHJcblx0XHR0ZDAyLnN0eWxlLnZlcnRpY2FsQWxpZ24gPSBcIm1pZGRsZVwiO1xyXG5cdFx0dGQwMi5zdHlsZS5wYWRkaW5nTGVmdCA9IFwiNXB4XCI7XHJcblx0XHR0ZDAyLnN0eWxlLnBhZGRpbmdSaWdodCA9IFwiNXB4XCI7XHJcblx0XHR0cjAuYXBwZW5kKHRkMDIpO1xyXG5cdFx0bGV0IHRkMDM6IEhUTUxUYWJsZUNlbGxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG5cdFx0dHIwLmFwcGVuZCh0ZDAzKTtcclxuXHRcdGxldCB0ZDA0OiBIVE1MVGFibGVDZWxsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuXHRcdHRkMDQuaW5uZXJUZXh0ID0gXCI9XCI7XHJcblx0XHR0ZDA0LnN0eWxlLnZlcnRpY2FsQWxpZ24gPSBcIm1pZGRsZVwiO1xyXG5cdFx0dGQwNC5zdHlsZS5wYWRkaW5nTGVmdCA9IFwiNXB4XCI7XHJcblx0XHR0ZDA0LnN0eWxlLnBhZGRpbmdSaWdodCA9IFwiNXB4XCI7XHJcblx0XHR0cjAuYXBwZW5kKHRkMDQpO1xyXG5cdFx0bGV0IHRkMDU6IEhUTUxUYWJsZUNlbGxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG5cdFx0dHIwLmFwcGVuZCh0ZDA1KTtcclxuXHRcdGxldCB0ZDA2OiBIVE1MVGFibGVDZWxsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuXHRcdHRkMDYuaW5uZXJUZXh0ID0gb3BlYXJ0b3IyO1xyXG5cdFx0dGQwNi5zdHlsZS52ZXJ0aWNhbEFsaWduID0gXCJtaWRkbGVcIjtcclxuXHRcdHRkMDYuc3R5bGUucGFkZGluZ0xlZnQgPSBcIjVweFwiO1xyXG5cdFx0dGQwNi5zdHlsZS5wYWRkaW5nUmlnaHQgPSBcIjVweFwiO1xyXG5cdFx0dHIwLmFwcGVuZCh0ZDA2KTtcclxuXHRcdGxldCB0ZDA3OiBIVE1MVGFibGVDZWxsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuXHRcdHRyMC5hcHBlbmQodGQwNyk7XHJcblx0XHRsZXQgdGFibGUxOiBIVE1MVGFibGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xyXG5cdFx0dGFibGUxLmNsYXNzTmFtZSA9IFwibWF0cml4XCI7XHJcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgbWF0cml4MS5tOyBpKyspIHtcclxuXHRcdFx0bGV0IHRyOiBIVE1MVGFibGVSb3dFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG5cdFx0XHRmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgbWF0cml4MS5uOyBqKyspIHtcclxuXHRcdFx0XHRsZXQgdGQ6IEhUTUxUYWJsZUNlbGxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG5cdFx0XHRcdHRkLmlubmVyVGV4dCA9IG1hdHJpeDEuZWxlbWVudHNbaV1bal0udG9TdHJpbmcoKTtcclxuXHRcdFx0XHR0ZC5zdHlsZS5wYWRkaW5nTGVmdCA9IFwiNXB4XCI7XHJcblx0XHRcdFx0dGQuc3R5bGUucGFkZGluZ1JpZ2h0ID0gXCI1cHhcIjtcclxuXHRcdFx0XHR0ci5hcHBlbmQodGQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRhYmxlMS5hcHBlbmQodHIpO1xyXG5cdFx0fVxyXG5cdFx0dGQwMS5hcHBlbmQodGFibGUxKTtcclxuXHRcdHRhYmxlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcclxuXHRcdHRhYmxlMS5jbGFzc05hbWUgPSBcIm1hdHJpeFwiO1xyXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IG1hdHJpeDIubTsgaSsrKSB7XHJcblx0XHRcdGxldCB0cjogSFRNTFRhYmxlUm93RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuXHRcdFx0Zm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IG1hdHJpeDIubjsgaisrKSB7XHJcblx0XHRcdFx0bGV0IHRkOiBIVE1MVGFibGVDZWxsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuXHRcdFx0XHR0ZC5pbm5lclRleHQgPSBtYXRyaXgyLmVsZW1lbnRzW2ldW2pdLnRvU3RyaW5nKCk7XHJcblx0XHRcdFx0dGQuc3R5bGUucGFkZGluZ0xlZnQgPSBcIjVweFwiO1xyXG5cdFx0XHRcdHRkLnN0eWxlLnBhZGRpbmdSaWdodCA9IFwiNXB4XCI7XHJcblx0XHRcdFx0dHIuYXBwZW5kKHRkKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0YWJsZTEuYXBwZW5kKHRyKTtcclxuXHRcdH1cclxuXHRcdHRkMDMuYXBwZW5kKHRhYmxlMSk7XHJcblx0XHR0YWJsZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XHJcblx0XHR0YWJsZTEuY2xhc3NOYW1lID0gXCJtYXRyaXhcIjtcclxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBtYXRyaXgzLm07IGkrKykge1xyXG5cdFx0XHRsZXQgdHI6IEhUTUxUYWJsZVJvd0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcblx0XHRcdGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCBtYXRyaXgzLm47IGorKykge1xyXG5cdFx0XHRcdGxldCB0ZDogSFRNTFRhYmxlQ2VsbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcblx0XHRcdFx0dGQuaW5uZXJUZXh0ID0gbWF0cml4My5lbGVtZW50c1tpXVtqXS50b1N0cmluZygpO1xyXG5cdFx0XHRcdHRkLnN0eWxlLnBhZGRpbmdMZWZ0ID0gXCI1cHhcIjtcclxuXHRcdFx0XHR0ZC5zdHlsZS5wYWRkaW5nUmlnaHQgPSBcIjVweFwiO1xyXG5cdFx0XHRcdHRyLmFwcGVuZCh0ZCk7XHJcblx0XHRcdH1cclxuXHRcdFx0dGFibGUxLmFwcGVuZCh0cik7XHJcblx0XHR9XHJcblx0XHR0ZDA1LmFwcGVuZCh0YWJsZTEpO1xyXG5cdFx0dGFibGUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xyXG5cdFx0dGFibGUxLmNsYXNzTmFtZSA9IFwibWF0cml4XCI7XHJcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgbWF0cml4NC5tOyBpKyspIHtcclxuXHRcdFx0bGV0IHRyOiBIVE1MVGFibGVSb3dFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG5cdFx0XHRmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgbWF0cml4NC5uOyBqKyspIHtcclxuXHRcdFx0XHRsZXQgdGQ6IEhUTUxUYWJsZUNlbGxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG5cdFx0XHRcdHRkLmlubmVyVGV4dCA9IG1hdHJpeDQuZWxlbWVudHNbaV1bal0udG9TdHJpbmcoKTtcclxuXHRcdFx0XHR0ZC5zdHlsZS5wYWRkaW5nTGVmdCA9IFwiNXB4XCI7XHJcblx0XHRcdFx0dGQuc3R5bGUucGFkZGluZ1JpZ2h0ID0gXCI1cHhcIjtcclxuXHRcdFx0XHR0ci5hcHBlbmQodGQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRhYmxlMS5hcHBlbmQodHIpO1xyXG5cdFx0fVxyXG5cdFx0dGQwNy5hcHBlbmQodGFibGUxKTtcclxuXHRcdGNvbnRhaW5lci5hcHBlbmQodGFibGUpO1xyXG5cdFx0Y29udGFpbmVyLmFwcGVuZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xyXG5cdH1cclxufSIsImltcG9ydCB7IFF1ZXVlIH0gZnJvbSBcIi4vUXVldWVcIjtcclxuaW1wb3J0IHsgUmF0aW9uYWxOdW1iZXIgfSBmcm9tIFwiLi9SYXRpb25hbE51bWJlclwiO1xyXG5pbXBvcnQgeyBTdGFjayB9IGZyb20gXCIuL1N0YWNrXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQXJpdGhtZXRpY0V2YWx1YXRvciB7XHJcblx0cHVibGljIHN0YXRpYyB0b1JldmVyc2VQb2xpc2hOb3RhdGlvbihjb2RlOiBzdHJpbmcpOiBzdHJpbmdbXSB7XHJcblx0XHRjb25zdCB0b2tlbnM6IHN0cmluZ1tdID0gY29kZS5tYXRjaCgvXFwofFxcKXxcXGQrKFxcLlxcZCspP3xcXHcrfFtcXCtcXC1cXCpcXC9cXF5dL2cpO1xyXG5cdFx0bGV0IGk6IG51bWJlciA9IDA7XHJcblx0XHRjb25zdCBvdXRwdXRRdWV1ZTogUXVldWU8c3RyaW5nPiA9IG5ldyBRdWV1ZTxzdHJpbmc+KCk7XHJcblx0XHRjb25zdCBvcGVyYXRvclN0YWNrOiBTdGFjazxzdHJpbmc+ID0gbmV3IFN0YWNrPHN0cmluZz4oKTtcclxuXHRcdHdoaWxlIChpIDwgdG9rZW5zLmxlbmd0aCkge1xyXG5cdFx0XHRpZiAodGhpcy5pc051bWJlcih0b2tlbnNbaV0pKSB7XHJcblx0XHRcdFx0b3V0cHV0UXVldWUuZW5xdWV1ZSh0b2tlbnNbaV0pO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMuaXNPcGVyYXRvcih0b2tlbnNbaV0pKSB7XHJcblx0XHRcdFx0bGV0IG9wMTogc3RyaW5nID0gdG9rZW5zW2ldO1xyXG5cdFx0XHRcdHdoaWxlICghb3BlcmF0b3JTdGFjay5pc0VtcHR5KCkgJiYgdGhpcy5pc09wZXJhdG9yKG9wZXJhdG9yU3RhY2sucGVlaygpKSkge1xyXG5cdFx0XHRcdFx0aWYgKCh0aGlzLmlzTGVmdEFzc29jaWF0aXZlT3BlcmF0b3Iob3AxKSAmJiAodGhpcy5wcmVjZWRlbmNlKG9wMSkgPD0gdGhpcy5wcmVjZWRlbmNlKG9wZXJhdG9yU3RhY2sucGVlaygpKSkpIHx8XHJcblx0XHRcdFx0XHRcdCh0aGlzLmlzUmlnaHRBc3NvY2lhdGl2ZU9wZXJhdG9yKG9wMSkgJiYgKHRoaXMucHJlY2VkZW5jZShvcDEpIDwgdGhpcy5wcmVjZWRlbmNlKG9wZXJhdG9yU3RhY2sucGVlaygpKSkpKSB7XHJcblx0XHRcdFx0XHRcdG91dHB1dFF1ZXVlLmVucXVldWUob3BlcmF0b3JTdGFjay5wb3AoKSk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0b3BlcmF0b3JTdGFjay5wdXNoKG9wMSk7XHJcblx0XHRcdH0gZWxzZSBpZiAodG9rZW5zW2ldID09PSBcIihcIikge1xyXG5cdFx0XHRcdG9wZXJhdG9yU3RhY2sucHVzaCh0b2tlbnNbaV0pO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHRva2Vuc1tpXSA9PT0gXCIpXCIpIHtcclxuXHRcdFx0XHR3aGlsZSAoIW9wZXJhdG9yU3RhY2suaXNFbXB0eSgpICYmIG9wZXJhdG9yU3RhY2sucGVlaygpICE9PSBcIihcIikge1xyXG5cdFx0XHRcdFx0b3V0cHV0UXVldWUuZW5xdWV1ZShvcGVyYXRvclN0YWNrLnBvcCgpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKCFvcGVyYXRvclN0YWNrLmlzRW1wdHkoKSAmJiBvcGVyYXRvclN0YWNrLnBlZWsoKSA9PT0gXCIoXCIpIHtcclxuXHRcdFx0XHRcdG9wZXJhdG9yU3RhY2sucG9wKCk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIk1pc21hdGNoZWQgcGFyZW50aGVzZXMuXCIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRpKys7XHJcblx0XHR9XHJcblx0XHR3aGlsZSAoIW9wZXJhdG9yU3RhY2suaXNFbXB0eSgpKSB7XHJcblx0XHRcdGlmIChvcGVyYXRvclN0YWNrLnBlZWsoKSA9PT0gXCIoXCIpIHtcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJNaXNtYXRjaGVkIHBhcmVudGhlc2VzLlwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRvdXRwdXRRdWV1ZS5lbnF1ZXVlKG9wZXJhdG9yU3RhY2sucG9wKCkpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gb3V0cHV0UXVldWUudG9BcnJheSgpO1xyXG5cdH1cclxuXHRwdWJsaWMgc3RhdGljIGV2YWx1YXRlRnJvbVJQTih0b2tlbnM6IHN0cmluZ1tdKTogbnVtYmVyIHtcclxuXHRcdGNvbnN0IHN0YWNrOiBTdGFjazxudW1iZXI+ID0gbmV3IFN0YWNrPG51bWJlcj4oKTtcclxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0aWYgKCF0aGlzLmlzT3BlcmF0b3IodG9rZW5zW2ldKSkge1xyXG5cdFx0XHRcdHN0YWNrLnB1c2gocGFyc2VGbG9hdCh0b2tlbnNbaV0pKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRsZXQgb3AxOiBudW1iZXIgPSBzdGFjay5wb3AoKTtcclxuXHRcdFx0XHRsZXQgb3AyOiBudW1iZXIgPSBzdGFjay5wb3AoKTtcclxuXHRcdFx0XHRzd2l0Y2ggKHRva2Vuc1tpXSkge1xyXG5cdFx0XHRcdFx0Y2FzZSBcIitcIjogc3RhY2sucHVzaChvcDIgKyBvcDEpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgXCItXCI6IHN0YWNrLnB1c2gob3AyIC0gb3AxKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlIFwiKlwiOiBzdGFjay5wdXNoKG9wMiAqIG9wMSk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSBcIi9cIjogc3RhY2sucHVzaChvcDIgLyBvcDEpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgXCJeXCI6IHN0YWNrLnB1c2gob3AyICoqIG9wMSk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHN0YWNrLnBvcCgpO1xyXG5cdH1cclxuXHRwcml2YXRlIHN0YXRpYyBpc051bWJlcihjb2RlOiBzdHJpbmcpOiBib29sZWFuIHtcclxuXHRcdHJldHVybiAvXlxcZC8udGVzdChjb2RlKTtcclxuXHR9XHJcblx0cHJpdmF0ZSBzdGF0aWMgaXNPcGVyYXRvcihjb2RlOiBzdHJpbmcpOiBib29sZWFuIHtcclxuXHRcdHJldHVybiAvW1xcK1xcLVxcKlxcL1xcXl0vLnRlc3QoY29kZSk7XHJcblx0fVxyXG5cdHByaXZhdGUgc3RhdGljIGlzTGVmdEFzc29jaWF0aXZlT3BlcmF0b3Iob3BlcmF0b3I6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG5cdFx0cmV0dXJuIC9bXFwrXFwtXFwqXFwvXS8udGVzdChvcGVyYXRvcik7XHJcblx0fVxyXG5cdHByaXZhdGUgc3RhdGljIGlzUmlnaHRBc3NvY2lhdGl2ZU9wZXJhdG9yKG9wZXJhdG9yOiBzdHJpbmcpOiBib29sZWFuIHtcclxuXHRcdHJldHVybiAvW1xcXl0vLnRlc3Qob3BlcmF0b3IpO1xyXG5cdH1cclxuXHRwcml2YXRlIHN0YXRpYyBwcmVjZWRlbmNlKG9wZXJhdG9yOiBzdHJpbmcpOiBudW1iZXIge1xyXG5cdFx0aWYgKC9bXFwrXFwtXS8udGVzdChvcGVyYXRvcikpIHtcclxuXHRcdFx0IHJldHVybiAxO1xyXG5cdFx0fVxyXG5cdFx0aWYgKC9bXFwqXFwvXS8udGVzdChvcGVyYXRvcikpIHtcclxuXHRcdFx0IHJldHVybiAyO1xyXG5cdFx0fVxyXG5cdFx0aWYgKC9bXFxeXS8udGVzdChvcGVyYXRvcikpIHtcclxuXHRcdFx0IHJldHVybiAzO1xyXG5cdFx0fVxyXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiVW5rbm93biBvcGVyYXRvci5cIik7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZW51bSBUb2tlblR5cGUgeyBQbHVzLCBNaW51cywgTXVsdGlwbHksIERpdmlkZSwgRXhwb25lbnQsIE51bWJlciwgTFBhcmVuLCBSUGFyZW4sIEVuZCwgVW5rbm93biB9XHJcbmV4cG9ydCBjbGFzcyBUb2tlbiB7XHJcblx0cHVibGljIHR5cGU6IFRva2VuVHlwZTtcclxuXHRwdWJsaWMgdmFsdWU6IG51bWJlcjtcclxuXHRjb25zdHJ1Y3Rvcih0eXBlOiBUb2tlblR5cGUsIHZhbHVlPzogbnVtYmVyKSB7XHJcblx0XHR0aGlzLnR5cGUgPSB0eXBlO1xyXG5cdFx0dGhpcy52YWx1ZSA9IHZhbHVlO1xyXG5cdH1cclxufVxyXG5leHBvcnQgY2xhc3MgTGV4ZXIge1xyXG5cdHByaXZhdGUgdG9rZW5zOiBzdHJpbmdbXTtcclxuXHRwcml2YXRlIHRva2VuSW5kZXg6IG51bWJlcjtcclxuXHRjb25zdHJ1Y3RvcihpbnB1dDogc3RyaW5nKSB7XHJcblx0XHR0aGlzLnRva2VucyA9IGlucHV0LnJlcGxhY2UoXCIgXCIsIFwiXCIpLm1hdGNoKC9cXCh8XFwpfFxcZCsoXFwuXFxkKyk/fFtcXCtcXC1cXCpcXC9cXF5dL2cpO1xyXG5cdFx0dGhpcy50b2tlbkluZGV4ID0gMDtcclxuXHR9XHJcblx0cHVibGljIGdldE5leHRUb2tlbigpOiBUb2tlbiB7XHJcblx0XHRpZiAodGhpcy50b2tlbnMubGVuZ3RoID09PSB0aGlzLnRva2VuSW5kZXgpIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBUb2tlbihUb2tlblR5cGUuRW5kKTtcclxuXHRcdH1cclxuXHRcdGxldCBpbnB1dDogc3RyaW5nID0gdGhpcy50b2tlbnNbdGhpcy50b2tlbkluZGV4KytdO1xyXG5cdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oaW5wdXQpO1xyXG5cdH1cclxuXHRwdWJsaWMgZ2V0Q3VycmVudFRva2VuKCk6IFRva2VuIHtcclxuXHRcdGlmICh0aGlzLnRva2Vucy5sZW5ndGggLSAxID09PSB0aGlzLnRva2VuSW5kZXgpIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBUb2tlbihUb2tlblR5cGUuRW5kKTtcclxuXHRcdH1cclxuXHRcdGxldCBpbnB1dDogc3RyaW5nID0gdGhpcy50b2tlbnNbdGhpcy50b2tlbkluZGV4XTtcclxuXHRcdHJldHVybiB0aGlzLmdldFRva2VuKGlucHV0KTtcclxuXHR9XHJcblx0cHVibGljIHJldmVydCgpOiB2b2lkIHtcclxuXHRcdGlmICh0aGlzLnRva2VuSW5kZXggPD0gMCkgeyB0aHJvdyBFcnJvcihcIkluZGV4IG91dCBvZiByYW5nZVwiKTsgfVxyXG5cdFx0dGhpcy50b2tlbkluZGV4LS07XHJcblx0fVxyXG5cdHByaXZhdGUgZ2V0VG9rZW4oaW5wdXQ6IHN0cmluZyk6IFRva2VuIHtcclxuXHRcdGlmICgvXFwrLy50ZXN0KGlucHV0KSkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IFRva2VuKFRva2VuVHlwZS5QbHVzKTtcclxuXHRcdH1cclxuXHRcdGlmICgvXFwtLy50ZXN0KGlucHV0KSkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IFRva2VuKFRva2VuVHlwZS5NaW51cyk7XHJcblx0XHR9XHJcblx0XHRpZiAoL1xcKi8udGVzdChpbnB1dCkpIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBUb2tlbihUb2tlblR5cGUuTXVsdGlwbHkpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKC9cXC8vLnRlc3QoaW5wdXQpKSB7XHJcblx0XHRcdHJldHVybiBuZXcgVG9rZW4oVG9rZW5UeXBlLkRpdmlkZSk7XHJcblx0XHR9XHJcblx0XHRpZiAoL1xcXi8udGVzdChpbnB1dCkpIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBUb2tlbihUb2tlblR5cGUuRXhwb25lbnQpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKC9cXGQrKFxcLlxcZCspPy8udGVzdChpbnB1dCkpIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBUb2tlbihUb2tlblR5cGUuTnVtYmVyLCBwYXJzZUZsb2F0KGlucHV0KSk7XHJcblx0XHR9XHJcblx0XHRpZiAoL1xcKC8udGVzdChpbnB1dCkpIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBUb2tlbihUb2tlblR5cGUuTFBhcmVuKTtcclxuXHRcdH1cclxuXHRcdGlmICgvXFwpLy50ZXN0KGlucHV0KSkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IFRva2VuKFRva2VuVHlwZS5SUGFyZW4pO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIG5ldyBUb2tlbihUb2tlblR5cGUuVW5rbm93bik7XHJcblx0fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBQYXJzZXIge1xyXG5cdHByaXZhdGUgbGV4OiBMZXhlcjtcclxuXHRwdWJsaWMgcGFyc2UoY29kZTogc3RyaW5nKTogUmF0aW9uYWxOdW1iZXIge1xyXG5cdFx0dGhpcy5sZXggPSBuZXcgTGV4ZXIoY29kZSk7XHJcblx0XHRjb25zdCBleHByZXNzaW9uOiBSYXRpb25hbE51bWJlciA9IHRoaXMuZm91cnRoT3JkZXJPcGVyYXRvcnMoKTtcclxuXHRcdGNvbnN0IHRva2VuOiBUb2tlbiA9IHRoaXMubGV4LmdldEN1cnJlbnRUb2tlbigpOyAvLyBpcyBhbHJlYWR5IGFkdmFuY2VkIGJlY2F1c2Ugb2YgbnVtYmVyKClcclxuXHRcdGlmICh0b2tlbi50eXBlID09PSBUb2tlblR5cGUuRW5kKSB7XHJcblx0XHRcdHJldHVybiBleHByZXNzaW9uO1xyXG5cdFx0fVxyXG5cdFx0dGhyb3cgRXJyb3IoXCJFbmQgZXhwZWN0ZWRcIik7XHJcblx0fVxyXG5cdC8vIGFkZGl0aW9uIGFuZCBzdWJzdHJhY3Rpb25cclxuXHRwcml2YXRlIGZvdXJ0aE9yZGVyT3BlcmF0b3JzKCk6IFJhdGlvbmFsTnVtYmVyIHtcclxuXHRcdGxldCBjb21wb25lbnQxOiBSYXRpb25hbE51bWJlciA9IHRoaXMudGhpcmRPcmRlck9wZXJhdG9ycygpO1xyXG5cdFx0bGV0IHRva2VuOiBUb2tlbiA9IHRoaXMubGV4LmdldE5leHRUb2tlbigpO1xyXG5cdFx0d2hpbGUgKHRva2VuLnR5cGUgPT09IFRva2VuVHlwZS5QbHVzIHx8IHRva2VuLnR5cGUgPT09IFRva2VuVHlwZS5NaW51cykge1xyXG5cdFx0XHRsZXQgY29tcG9uZW50MjogUmF0aW9uYWxOdW1iZXIgPSB0aGlzLnRoaXJkT3JkZXJPcGVyYXRvcnMoKTtcclxuXHRcdFx0aWYgKHRva2VuLnR5cGUgPT09IFRva2VuVHlwZS5QbHVzKSB7XHJcblx0XHRcdFx0Y29tcG9uZW50MSA9IGNvbXBvbmVudDEuYWRkKGNvbXBvbmVudDIpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHRva2VuLnR5cGUgPT09IFRva2VuVHlwZS5NaW51cykge1xyXG5cdFx0XHRcdGNvbXBvbmVudDEgPSBjb21wb25lbnQxLnN1Yihjb21wb25lbnQyKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0b2tlbiA9IHRoaXMubGV4LmdldE5leHRUb2tlbigpO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5sZXgucmV2ZXJ0KCk7XHJcblx0XHRyZXR1cm4gY29tcG9uZW50MTtcclxuXHR9XHJcblx0Ly8gbXVsdGlwbGljYXRpb24gYW5kIGRpdmlzaW9uXHJcblx0cHJpdmF0ZSB0aGlyZE9yZGVyT3BlcmF0b3JzKCk6IFJhdGlvbmFsTnVtYmVyIHtcclxuXHRcdGxldCBmYWN0b3IxOiBSYXRpb25hbE51bWJlciA9IHRoaXMuc2Vjb25kT3JkZXJPcGVyYXRvcnMoKTtcclxuXHRcdGxldCB0b2tlbjogVG9rZW4gPSB0aGlzLmxleC5nZXROZXh0VG9rZW4oKTtcclxuXHRcdHdoaWxlICh0b2tlbi50eXBlID09PSBUb2tlblR5cGUuTXVsdGlwbHkgfHwgdG9rZW4udHlwZSA9PT0gVG9rZW5UeXBlLkRpdmlkZSkge1xyXG5cdFx0XHRsZXQgZmFjdG9yMjogUmF0aW9uYWxOdW1iZXIgPSB0aGlzLnNlY29uZE9yZGVyT3BlcmF0b3JzKCk7XHJcblx0XHRcdGlmICh0b2tlbi50eXBlID09PSBUb2tlblR5cGUuTXVsdGlwbHkpIHtcclxuXHRcdFx0XHRmYWN0b3IxID0gZmFjdG9yMS5tdWx0KGZhY3RvcjIpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHRva2VuLnR5cGUgPT09IFRva2VuVHlwZS5EaXZpZGUpIHtcclxuXHRcdFx0XHRmYWN0b3IxID0gZmFjdG9yMS5kaXYoZmFjdG9yMik7XHJcblx0XHRcdH1cclxuXHRcdFx0dG9rZW4gPSB0aGlzLmxleC5nZXROZXh0VG9rZW4oKTtcclxuXHRcdH1cclxuXHRcdHRoaXMubGV4LnJldmVydCgpO1xyXG5cdFx0cmV0dXJuIGZhY3RvcjE7XHJcblx0fVxyXG5cdC8vIGV4cG9uZW50cyBhbmQgcm9vdHNcclxuXHRwcml2YXRlIHNlY29uZE9yZGVyT3BlcmF0b3JzKCk6IFJhdGlvbmFsTnVtYmVyIHtcclxuXHRcdGxldCBmYWN0b3IxOiBSYXRpb25hbE51bWJlciA9IHRoaXMuZmlyc3RPcmRlck9wZXJhdG9ycygpO1xyXG5cdFx0bGV0IHRva2VuOiBUb2tlbiA9IHRoaXMubGV4LmdldE5leHRUb2tlbigpO1xyXG5cdFx0d2hpbGUgKHRva2VuLnR5cGUgPT09IFRva2VuVHlwZS5FeHBvbmVudCkge1xyXG5cdFx0XHRsZXQgZmFjdG9yMjogUmF0aW9uYWxOdW1iZXIgPSB0aGlzLmZpcnN0T3JkZXJPcGVyYXRvcnMoKTtcclxuXHRcdFx0ZmFjdG9yMSA9IGZhY3RvcjEuZXhwKGZhY3RvcjIpO1xyXG5cdFx0XHR0b2tlbiA9IHRoaXMubGV4LmdldE5leHRUb2tlbigpO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5sZXgucmV2ZXJ0KCk7XHJcblx0XHRyZXR1cm4gZmFjdG9yMTtcclxuXHR9XHJcblx0Ly8gbnVtYmVycyBhbmQgcGFyYW50aGVzZXNcclxuXHRwcml2YXRlIGZpcnN0T3JkZXJPcGVyYXRvcnMoKTogUmF0aW9uYWxOdW1iZXIge1xyXG5cdFx0bGV0IHZhbHVlOiBSYXRpb25hbE51bWJlciA9IG5ldyBSYXRpb25hbE51bWJlcigxKTtcclxuXHRcdGxldCB0b2tlbjogVG9rZW4gPSB0aGlzLmxleC5nZXROZXh0VG9rZW4oKTtcclxuXHRcdGlmICh0b2tlbi50eXBlID09PSBUb2tlblR5cGUuUGx1cyB8fCB0b2tlbi50eXBlID09PSBUb2tlblR5cGUuTWludXMpIHtcclxuXHRcdFx0aWYgKHRva2VuLnR5cGUgPT09IFRva2VuVHlwZS5NaW51cykge1xyXG5cdFx0XHRcdHZhbHVlID0gdmFsdWUubXVsdCgtMSk7XHJcblx0XHRcdH1cclxuXHRcdFx0dG9rZW4gPSB0aGlzLmxleC5nZXROZXh0VG9rZW4oKTtcclxuXHRcdH1cclxuXHRcdGlmICh0b2tlbi50eXBlID09PSBUb2tlblR5cGUuTFBhcmVuKSB7XHJcblx0XHRcdHZhbHVlID0gdmFsdWUubXVsdCh0aGlzLmZvdXJ0aE9yZGVyT3BlcmF0b3JzKCkpO1xyXG5cdFx0XHR0b2tlbiA9IHRoaXMubGV4LmdldE5leHRUb2tlbigpO1xyXG5cdFx0XHRpZiAodG9rZW4udHlwZSAhPT0gVG9rZW5UeXBlLlJQYXJlbikge1xyXG5cdFx0XHRcdHRocm93IEVycm9yKFwiVW5iYWxhbmNlZCBwYXJlbnRoZXNpc1wiKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKHRva2VuLnR5cGUgPT09IFRva2VuVHlwZS5OdW1iZXIpIHtcclxuXHRcdFx0XHR2YWx1ZSA9IHZhbHVlLm11bHQodG9rZW4udmFsdWUpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRocm93IEVycm9yKFwiTm90IGEgbnVtYmVyXCIpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdmFsdWU7XHJcblx0fVxyXG59XHJcblxyXG4vKlxyXG5cdHB1YmxpYyBzdGF0aWMgZXZhbHVhdGUoZXhwcmVzaW9uOiBzdHJpbmcpOiBSYXRpb25hbE51bWJlciB7XHJcblx0dmFyIGRpZ2l0UGF0dGVybiA9IG5ldyBSZWdFeHAoJzAgfCAxIHwgMiB8IDMgfCA0IHwgNSB8IDYgfCA3IHwgOCB8IDknKTtcclxuXHR2YXIgc2lnblBhdHRlcm4gPSBuZXcgUmVnRXhwKCdcXCt8XFwtJyk7XHJcblx0dmFyIG51bWJlclBhdHRlcm4gPSBuZXcgUmVnRXhwKCdbJyArIHNpZ25QYXR0ZXJuICsgJ10nICsgJ3snICsgZGlnaXRQYXR0ZXJuICsgJ30nKTtcclxuXHR2YXIgZmFjdG9yUGF0dGVybiA9IG5ldyBSZWdFeHAobnVtYmVyUGF0dGVybiArICd8XFwoJyArIGV4cHJlc3Npb25QYXR0ZXJuICsgJ1xcKScpO1xyXG5cdHZhciBjb21wb25lbnRQYXR0ZXJuID0gbmV3IFJlZ0V4cChmYWN0b3JQYXR0ZXJuICsgJ1t7KCBcXCogfCBcXC8gKScgKyBmYWN0b3JQYXR0ZXJuICsgJ31dJyk7XHJcblx0dmFyIGV4cHJlc3Npb25QYXR0ZXJuID0gbmV3IFJlZ0V4cChjb21wb25lbnRQYXR0ZXJuICsgJ1t7KCBcXCsgfCBcXC0pJyArIGNvbXBvbmVudFBhdHRlcm4gKyAnfV0nKTtcclxufSovXHJcblxyXG4vKlxyXG5leHBycjogNHRoT1JERVIrO1xyXG40dGhPUkRFUjogY29tcG9uZW50MT0zcmRPUkRFUiAoKFBMVVN8TUlOVVMpIGNvbXBvbmVudDI9M3JkT1JERVIpKztcclxuM3JkT1JERVI6IGZhY3RvcjE9Mk5ET1JERVIgKChNVUxUSVBMWXxESVZJREUpIGZhY3RvcjE9Mm5kT1JERVIpK1xyXG4ybmRPUkRFUjogZmFjdG9yMT0xc3RPUkRFUiAoRVhQT05FTlQgZmFjdG9yMj0xc3RPUkRFUikrXHJcbjFzdE9SREVSOiAoUExVU3xNSU5VU3xlbXB0eSkgKExQQVJFTiB2YWx1ZT00dGhPUkRFUiBSUEFSRU58IE5VTUJFUilcclxuKi8iLCJpbXBvcnQgeyBSYXRpb25hbE51bWJlciB9IGZyb20gXCIuL1JhdGlvbmFsTnVtYmVyXCI7XHJcbmltcG9ydCB7IENvbHVtblZlY3RvciwgVmVjdG9yIH0gZnJvbSBcIi4vVmVjdG9yXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTWF0cml4IHtcclxuXHRwdWJsaWMgc3RhdGljIGF1Z21lbnQoQTogTWF0cml4LCBCOiBNYXRyaXggfCBWZWN0b3IpOiBNYXRyaXgge1xyXG5cdFx0aWYgKEEubSAhPT0gQi5tKSB7IHRocm93IG5ldyBFcnJvcihcIlRoZSB0d28gbWF0cmljZXMgKHZlY3RvcikgbXVzdCBoYXZlIHRoZSBzYW1lIG51bWJlciBvZiByb3dzIChlbGVtZW50cykuXCIpOyB9XHJcblx0XHRsZXQgcmV0OiBNYXRyaXggPSBudWxsO1xyXG5cdFx0aWYgKEIgaW5zdGFuY2VvZiBNYXRyaXgpIHtcclxuXHRcdFx0cmV0ID0gbmV3IE1hdHJpeChBLm0sIEIubiArIEEubik7XHJcblx0XHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBBLm07IGkrKykge1xyXG5cdFx0XHRcdGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCBBLm47IGorKykge1xyXG5cdFx0XHRcdFx0cmV0LmVsZW1lbnRzW2ldW2pdID0gQS5lbGVtZW50c1tpXVtqXTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IEIubTsgaSsrKSB7XHJcblx0XHRcdFx0Zm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IEIubjsgaisrKSB7XHJcblx0XHRcdFx0XHRyZXQuZWxlbWVudHNbaV1bQS5uICsgal0gPSBCLmVsZW1lbnRzW2ldW2pdO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKEIgaW5zdGFuY2VvZiBWZWN0b3IpIHtcclxuXHRcdFx0XHRyZXQgPSBuZXcgTWF0cml4KEEubSwgQS5uICsgMSk7XHJcblx0XHRcdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IEEubTsgaSsrKSB7XHJcblx0XHRcdFx0XHRmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgQS5uOyBqKyspIHtcclxuXHRcdFx0XHRcdFx0cmV0LmVsZW1lbnRzW2ldW2pdID0gQS5lbGVtZW50c1tpXVtqXTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Zm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IEIubTsgaisrKSB7XHJcblx0XHRcdFx0XHRyZXQuZWxlbWVudHNbal1bQS5uXSA9IEIuZWxlbWVudHNbal07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmV0O1xyXG5cdH1cclxuXHQvLyByb3ctbXVsdGlwbHlpbmcgdHJhbnNmb3JtYXRpb25zXHJcblx0cHVibGljIHN0YXRpYyBtdWx0aXBsaWNhdGlvbihuOiBudW1iZXIsIHJvdzE6IG51bWJlciwgcm93MjogbnVtYmVyLCBtdWx0OiBudW1iZXIpOiBNYXRyaXgge1xyXG5cdFx0aWYgKG4gPCByb3cxIHx8IG4gPCByb3cyKSB7IHRocm93IG5ldyBFcnJvcihcIkNvbHVtbiBpbmRleCBtdXN0IGJlIGxlc3Mgb3IgZXF1YWx0IHRoYW4gbWF0cml4IHNpemUuXCIpOyB9XHJcblx0XHRjb25zdCBtYXRyaXg6IE1hdHJpeCA9IG5ldyBNYXRyaXhJZGVudGl0eShuKTtcclxuXHRcdG1hdHJpeC5lbGVtZW50c1tyb3cxXVtyb3cyXSA9IG5ldyBSYXRpb25hbE51bWJlcihtdWx0KTtcclxuXHRcdHJldHVybiBtYXRyaXg7XHJcblx0fVxyXG5cdHB1YmxpYyBzdGF0aWMgcmFuZG9tU3F1YXJlKCk6IE1hdHJpeCB7XHJcblx0XHRjb25zdCBtYXRyaXg6IE1hdHJpeCA9IG5ldyBNYXRyaXgoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCkgKyAzLCBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0KSArIDMpOyAvLyBtaW5pbXVtIHNpemUgM3gzIG1hdHJpeFxyXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IG1hdHJpeC5tOyBpKyspIHtcclxuXHRcdFx0Zm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IG1hdHJpeC5uOyBqKyspIHtcclxuXHRcdFx0XHRtYXRyaXguZWxlbWVudHNbaV1bal0gPSBuZXcgUmF0aW9uYWxOdW1iZXIoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwIC0gNTApKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIG1hdHJpeDtcclxuXHR9XHJcblx0cHVibGljIHN0YXRpYyByYW5kb20yKCk6IE1hdHJpeCB7XHJcblx0XHRjb25zdCBudW1iZXJPZlVua25vd25zOiBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0ICsgMyk7IC8vIGJldHdlZW4gMyBhbmQgNyB1bmtub253c1xyXG5cdFx0Y29uc3QgdW5rbm93bnM6IG51bWJlcltdID0gW107XHJcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgbnVtYmVyT2ZVbmtub3duczsgaSsrKSB7XHJcblx0XHRcdHVua25vd25zW2ldID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjAgLSAxMCk7XHJcblx0XHR9XHJcblx0XHQvLyB0b2RvOiBjaGFuZ2UgYmVsb3dcclxuXHRcdGNvbnN0IG1hdHJpeDogTWF0cml4ID0gbmV3IE1hdHJpeChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0KSArIDMsIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQpICsgMyk7XHJcblx0XHRyZXR1cm4gbWF0cml4O1xyXG5cdH1cclxuXHRwdWJsaWMgbTogbnVtYmVyOyAvLyByb3dzXHJcblx0cHVibGljIG46IG51bWJlcjsgLy8gY29sdW1uc1xyXG5cdHB1YmxpYyBlbGVtZW50czogUmF0aW9uYWxOdW1iZXJbXVtdO1xyXG5cdGNvbnN0cnVjdG9yKG06IG51bWJlciwgbjogbnVtYmVyKSB7XHJcblx0XHR0aGlzLm0gPSBtO1xyXG5cdFx0dGhpcy5uID0gbjtcclxuXHRcdHRoaXMuZWxlbWVudHMgPSBbXTtcclxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLm07IGkrKykge1xyXG5cdFx0XHR0aGlzLmVsZW1lbnRzW2ldID0gW107XHJcblx0XHR9XHJcblx0fVxyXG5cdHB1YmxpYyBlcXVhbHMoTTogTWF0cml4KTogYm9vbGVhbiB7XHJcblx0XHRpZiAodGhpcy5tICE9PSBNLm0gfHwgdGhpcy5uICE9PSBNLm4pIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMubTsgaSsrKSB7XHJcblx0XHRcdGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCB0aGlzLm47IGorKykge1xyXG5cdFx0XHRcdGlmICghdGhpcy5lbGVtZW50c1tpXVtqXS5lcXVhbHMoTS5lbGVtZW50c1tpXVtqXSkpIHsgcmV0dXJuIGZhbHNlOyB9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHRwdWJsaWMgYWRkKHg6IE1hdHJpeCk6IE1hdHJpeCB7XHJcblx0XHRpZiAodGhpcy5tICE9PSB4Lm0gfHwgdGhpcy5uICE9PSB4Lm4pIHsgdGhyb3cgbmV3IEVycm9yKFwiTWlzbWF0Y2hlZCBkaW1lbnNpb25zLlwiKTsgfVxyXG5cdFx0Y29uc3QgcmVzOiBNYXRyaXggPSBuZXcgTWF0cml4KHRoaXMubSwgdGhpcy5uKTtcclxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCByZXMubTsgaSsrKSB7XHJcblx0XHRcdGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCByZXMubjsgaisrKSB7XHJcblx0XHRcdFx0cmVzLmVsZW1lbnRzW2ldW2pdID0gdGhpcy5lbGVtZW50c1tpXVtqXS5hZGQoeC5lbGVtZW50c1tpXVtqXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXM7XHJcblx0fVxyXG5cdHB1YmxpYyBzdWIoeDogTWF0cml4KTogTWF0cml4IHtcclxuXHRcdGlmICh0aGlzLm0gIT09IHgubSB8fCB0aGlzLm4gIT09IHgubikgeyB0aHJvdyBuZXcgRXJyb3IoXCJNaXNtYXRjaGVkIGRpbWVuc2lvbnMuXCIpOyB9XHJcblx0XHRjb25zdCByZXM6IE1hdHJpeCA9IG5ldyBNYXRyaXgodGhpcy5tLCB0aGlzLm4pO1xyXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHJlcy5tOyBpKyspIHtcclxuXHRcdFx0Zm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IHJlcy5uOyBqKyspIHtcclxuXHRcdFx0XHRyZXMuZWxlbWVudHNbaV1bal0gPSB0aGlzLmVsZW1lbnRzW2ldW2pdLnN1Yih4LmVsZW1lbnRzW2ldW2pdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlcztcclxuXHR9XHJcblx0cHVibGljIG11bHQoeDogbnVtYmVyIHwgUmF0aW9uYWxOdW1iZXIgfCBNYXRyaXgpOiBNYXRyaXgge1xyXG5cdFx0bGV0IHJlczogTWF0cml4ID0gbnVsbDtcclxuXHRcdGlmICh0eXBlb2YgeCA9PT0gXCJudW1iZXJcIikge1xyXG5cdFx0XHRyZXMgPSBuZXcgTWF0cml4KHRoaXMubSwgdGhpcy5uKTtcclxuXHRcdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHJlcy5tOyBpKyspIHtcclxuXHRcdFx0XHRmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgcmVzLm47IGorKykge1xyXG5cdFx0XHRcdFx0cmVzLmVsZW1lbnRzW2ldW2pdID0gdGhpcy5lbGVtZW50c1tpXVtqXS5tdWx0KHgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIGlmICh4IGluc3RhbmNlb2YgUmF0aW9uYWxOdW1iZXIpIHtcclxuXHRcdFx0cmVzID0gbmV3IE1hdHJpeCh0aGlzLm0sIHRoaXMubik7XHJcblx0XHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCByZXMubTsgaSsrKSB7XHJcblx0XHRcdFx0Zm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IHJlcy5uOyBqKyspIHtcclxuXHRcdFx0XHRcdHJlcy5lbGVtZW50c1tpXVtqXSA9IHRoaXMuZWxlbWVudHNbaV1bal0ubXVsdCh4KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmICh4IGluc3RhbmNlb2YgTWF0cml4KSB7XHJcblx0XHRcdFx0aWYgKHRoaXMubiAhPT0geC5tKSB7IHRocm93IG5ldyBFcnJvcihcIk1pc21hdGNoZWQgZGltZW5zaW9ucy5cIik7IH1cclxuXHRcdFx0XHRyZXMgPSBuZXcgTWF0cml4KHRoaXMubSwgeC5uKTtcclxuXHRcdFx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgcmVzLm07IGkrKykge1xyXG5cdFx0XHRcdFx0Zm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IHJlcy5uOyBqKyspIHtcclxuXHRcdFx0XHRcdFx0bGV0IHN1bTogUmF0aW9uYWxOdW1iZXIgPSBuZXcgUmF0aW9uYWxOdW1iZXIoMCk7XHJcblx0XHRcdFx0XHRcdGZvciAobGV0IGs6IG51bWJlciA9IDA7IGsgPCB0aGlzLm47IGsrKykge1xyXG5cdFx0XHRcdFx0XHRcdHN1bSA9IHN1bS5hZGQodGhpcy5lbGVtZW50c1tpXVtrXS5tdWx0KHguZWxlbWVudHNba11bal0pKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRyZXMuZWxlbWVudHNbaV1bal0gPSBzdW07XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzO1xyXG5cdH1cclxuXHRwdWJsaWMgdmVjdG9yUHJvZHVjdCh2OiBDb2x1bW5WZWN0b3IpOiBDb2x1bW5WZWN0b3Ige1xyXG5cdFx0aWYgKHRoaXMubiAhPT0gdi5tKSB7IHRocm93IG5ldyBFcnJvcihcIk1pc21hdGNoZWQgZGltZW5zaW9ucy5cIik7IH1cclxuXHRcdGNvbnN0IHJlczogQ29sdW1uVmVjdG9yID0gbmV3IENvbHVtblZlY3Rvcih2Lm0pO1xyXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMubTsgaSsrKSB7XHJcblx0XHRcdGxldCBzdW06IFJhdGlvbmFsTnVtYmVyID0gbmV3IFJhdGlvbmFsTnVtYmVyKDApO1xyXG5cdFx0XHRmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgdGhpcy5uOyBqKyspIHtcclxuXHRcdFx0XHRzdW0gPSBzdW0uYWRkKHRoaXMuZWxlbWVudHNbaV1bal0ubXVsdCh2LmVsZW1lbnRzW2pdKSk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmVzLmVsZW1lbnRzW2ldID0gc3VtO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlcztcclxuXHR9XHJcblx0cHVibGljIHRyYW5zcG9zZSgpOiBNYXRyaXgge1xyXG5cdFx0Y29uc3QgcmV0OiBNYXRyaXggPSBuZXcgTWF0cml4KHRoaXMubiwgdGhpcy5tKTtcclxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLm07IGkrKykge1xyXG5cdFx0XHRmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgdGhpcy5uOyBqKyspIHtcclxuXHRcdFx0XHRyZXQuZWxlbWVudHNbal1baV0gPSB0aGlzLmVsZW1lbnRzW2ldW2pdO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmV0O1xyXG5cdH1cclxuXHRwdWJsaWMgZGVlcENvcHkoKTogTWF0cml4IHtcclxuXHRcdGNvbnN0IHJldDogTWF0cml4ID0gbmV3IE1hdHJpeCh0aGlzLm0sIHRoaXMubik7XHJcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5tOyBpKyspIHtcclxuXHRcdFx0Zm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IHRoaXMubjsgaisrKSB7XHJcblx0XHRcdFx0cmV0LmVsZW1lbnRzW2ldW2pdID0gdGhpcy5lbGVtZW50c1tpXVtqXTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJldDtcclxuXHR9XHJcblx0cHVibGljIHN3aXRjaFJvd3MoaWR4MTogbnVtYmVyLCBpZHgyOiBudW1iZXIpOiB2b2lkIHtcclxuXHRcdGlmICh0aGlzLm0gPCBpZHgxIHx8IHRoaXMubSA8IGlkeDIpIHsgcmV0dXJuOyB9XHJcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5uOyBpKyspIHtcclxuXHRcdFx0Y29uc3QgdG1wOiBSYXRpb25hbE51bWJlciA9IHRoaXMuZWxlbWVudHNbaWR4MV1baV07XHJcblx0XHRcdHRoaXMuZWxlbWVudHNbaWR4MV1baV0gPSB0aGlzLmVsZW1lbnRzW2lkeDJdW2ldO1xyXG5cdFx0XHR0aGlzLmVsZW1lbnRzW2lkeDJdW2ldID0gdG1wO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRwdWJsaWMgbXVsdGlwbHlSb3coaWR4OiBudW1iZXIsIHNjYWxhcjogUmF0aW9uYWxOdW1iZXIpOiB2b2lkIHtcclxuXHRcdGlmICh0aGlzLm0gPCBpZHgpIHsgcmV0dXJuOyB9XHJcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5uOyBpKyspIHtcclxuXHRcdFx0dGhpcy5lbGVtZW50c1tpZHhdW2ldID0gdGhpcy5lbGVtZW50c1tpZHhdW2ldLm11bHQoc2NhbGFyKS5zaW1wbGlmaWVkRm9ybSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRwdWJsaWMgYWRkUm93cyhpZHgxOiBudW1iZXIsIGlkeDI6IG51bWJlciwgc2NhbGFyOiBSYXRpb25hbE51bWJlcik6IHZvaWQge1xyXG5cdFx0aWYgKHRoaXMubSA8IGlkeDEgfHwgdGhpcy5tIDwgaWR4MikgeyByZXR1cm47IH1cclxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLm47IGkrKykge1xyXG5cdFx0XHR0aGlzLmVsZW1lbnRzW2lkeDFdW2ldID0gdGhpcy5lbGVtZW50c1tpZHgyXVtpXS5tdWx0KHNjYWxhcikuYWRkKHRoaXMuZWxlbWVudHNbaWR4MV1baV0pLnNpbXBsaWZpZWRGb3JtKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cdHB1YmxpYyBhZGRSb3cxVG9Sb3cyKGlkeDE6IG51bWJlciwgc2NhbGFyMTogUmF0aW9uYWxOdW1iZXIsIGlkeDI6IG51bWJlciwgc2NhbGFyMjogUmF0aW9uYWxOdW1iZXIpOiB2b2lkIHtcclxuXHRcdGlmICh0aGlzLm0gPCBpZHgxIHx8IHRoaXMubSA8IGlkeDIpIHsgcmV0dXJuOyB9XHJcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5uOyBpKyspIHtcclxuXHRcdFx0dGhpcy5lbGVtZW50c1tpZHgyXVtpXSA9IHRoaXMuZWxlbWVudHNbaWR4Ml1baV0ubXVsdChzY2FsYXIyKS5hZGQodGhpcy5lbGVtZW50c1tpZHgxXVtpXS5tdWx0KHNjYWxhcjEpKS5zaW1wbGlmaWVkRm9ybSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHQvLyBhIHNxdWFyZSBtYXRyaXggaXMgYSBtYXRyaXggd2l0aCB0aGUgc2FtZSBudW1iZXIgb2Ygcm93cyBhbmQgY29sdW1uc1xyXG5cdHB1YmxpYyBpc1NxdWFyZSgpOiBib29sZWFuIHtcclxuXHRcdHJldHVybiB0aGlzLm0gPT09IHRoaXMubjtcclxuXHR9XHJcblx0Ly8gYSBkaWFnb25hbCBtYXRyaXggaXMgYSBtYXRyaXggaW4gd2hpY2ggdGhlIGVudHJpZXMgb3V0c2lkZSB0aGUgbWFpbiBkaWFnb25hbCBhcmUgYWxsIHplcm9cclxuXHRwdWJsaWMgaXNEaWFnb25hbCgpOiBib29sZWFuIHtcclxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLm07IGkrKykge1xyXG5cdFx0XHRmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgdGhpcy5uOyBqKyspIHtcclxuXHRcdFx0XHRpZiAoaSA9PT0gaikge1xyXG5cdFx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmICghdGhpcy5lbGVtZW50c1tpXVtqXS5lcXVhbHMobmV3IFJhdGlvbmFsTnVtYmVyKDApKSkgeyByZXR1cm4gZmFsc2U7IH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cdC8vIHRoZSBpZGVudGl0eSBtYXRyaXggb2Ygc2l6ZSBuIGlzIHRoZSBuIMOXIG4gc3F1YXJlIG1hdHJpeCB3aXRoIG9uZXMgb24gdGhlIG1haW4gZGlhZ29uYWwgYW5kIHplcm9zIGVsc2V3aGVyZVxyXG5cdC8vIFtBTElBU0VTXTogdW5pdCBtYXRyaXhcclxuXHRwdWJsaWMgaXNJZGVudGl0eSgpOiBib29sZWFuIHtcclxuXHRcdGlmICh0aGlzLm0gIT09IHRoaXMubikgeyB0aHJvdyBuZXcgRXJyb3IoXCJOb3QgYSBzcXVhcmUgbWF0cml4LlwiKTsgfVxyXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMubTsgaSsrKSB7XHJcblx0XHRcdGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCB0aGlzLm47IGorKykge1xyXG5cdFx0XHRcdGlmIChpID09PSBqKSB7XHJcblx0XHRcdFx0XHRpZiAoIXRoaXMuZWxlbWVudHNbaV1bal0uZXF1YWxzKG5ldyBSYXRpb25hbE51bWJlcigxKSkpIHsgcmV0dXJuIGZhbHNlOyB9XHJcblx0XHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKCF0aGlzLmVsZW1lbnRzW2ldW2pdLmVxdWFscyhuZXcgUmF0aW9uYWxOdW1iZXIoMCkpKSB7IHJldHVybiBmYWxzZTsgfVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblx0Ly8gYSBtYXRyaXggaXMgbm9ybWFsIGlmIGl0IGNvbW11dGVzIHdpdGggaXRzIGNvbmp1Z2F0ZSB0cmFuc3Bvc2VcclxuXHRwdWJsaWMgaXNOb3JtYWwoKTogYm9vbGVhbiB7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJOb3QgaW1wbGVtZW50ZWRcIik7XHJcblx0fVxyXG5cdC8vIHRoZSBjb25qdWdhdGUgdHJhbnNwb3NlIG9mIGFuIG0tYnktbiBtYXRyaXggQSB3aXRoIGNvbXBsZXggZW50cmllcyBpcyB0aGUgbi1ieS1tIG1hdHJpeCBB4oiXIG9idGFpbmVkIGZyb20gQVxyXG5cdC8vIGJ5IHRha2luZyB0aGUgdHJhbnNwb3NlIGFuZCB0aGVuIHRha2luZyB0aGUgY29tcGxleCBjb25qdWdhdGUgb2YgZWFjaCBlbnRyeVxyXG5cdC8vIFtBTElBU0VTXTogSGVybWl0aWFuIHRyYW5zcG9zZVxyXG5cdHB1YmxpYyB0b0Nvbmp1Z2F0ZVRyYW5zcG9zZSgpOiBNYXRyaXgge1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiTm90IGltcGxlbWVudGVkXCIpO1xyXG5cdH1cclxuXHRwdWJsaWMgaXNVcHBlclRyaWFuZ3VsYXIoKTogYm9vbGVhbiB7XHJcblx0XHQvLyB0b2RvOiBjaGVjayBpZiBkZWZpbml0aW9uIGlzIHZhbGlkIGZvciBhIG5vbiBzcXVhcmUgbWF0cml4XHJcblx0XHQvLyBpZiAodGhpcy5tICE9PSB0aGlzLm4pIHsgdGhyb3cgbmV3IEVycm9yKFwiTm90IGEgc3F1YXJlIG1hdHJpeC5cIik7IH1cclxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDE7IGkgPCB0aGlzLm07IGkrKykge1xyXG5cdFx0XHRmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgaTsgaisrKSB7XHJcblx0XHRcdFx0aWYgKCF0aGlzLmVsZW1lbnRzW2ldW2pdLmVxdWFscyhuZXcgUmF0aW9uYWxOdW1iZXIoMCkpKSB7IHJldHVybiBmYWxzZTsgfVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblx0cHVibGljIGlzTG93ZXJUcmlhbmd1bGFyKCk6IGJvb2xlYW4ge1xyXG5cdFx0Ly8gdG9kbzogY2hlY2sgaWYgZGVmaW5pdGlvbiBpcyB2YWxpZCBmb3IgYSBub24gc3F1YXJlIG1hdHJpeFxyXG5cdFx0Ly8gaWYgKHRoaXMubSAhPT0gdGhpcy5uKSB7IHRocm93IG5ldyBFcnJvcihcIk5vdCBhIHNxdWFyZSBtYXRyaXguXCIpOyB9XHJcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5tOyBpKyspIHtcclxuXHRcdFx0Zm9yIChsZXQgajogbnVtYmVyID0gaSArIDE7IGogPCB0aGlzLm47IGorKykge1xyXG5cdFx0XHRcdGlmICghdGhpcy5lbGVtZW50c1tpXVtqXS5lcXVhbHMobmV3IFJhdGlvbmFsTnVtYmVyKDApKSkgeyByZXR1cm4gZmFsc2U7IH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cdC8vIGEgc3ltbWV0cmljIG1hdHJpeCBpcyBhIHNxdWFyZSBtYXRyaXggdGhhdCBpcyBlcXVhbCB0byBpdHMgdHJhbnNwb3NlXHJcblx0cHVibGljIGlzU3ltbWV0cmljKCk6IGJvb2xlYW4ge1xyXG5cdFx0aWYgKHRoaXMubSAhPT0gdGhpcy5uKSB7IHRocm93IG5ldyBFcnJvcihcIk5vdCBhIHNxdWFyZSBtYXRyaXguXCIpOyB9XHJcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5tOyBpKyspIHtcclxuXHRcdFx0Zm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IHRoaXMubjsgaisrKSB7XHJcblx0XHRcdFx0aWYgKCF0aGlzLmVsZW1lbnRzW2ldW2pdLmVxdWFscyh0aGlzLmVsZW1lbnRzW2pdW2ldKSkgeyByZXR1cm4gZmFsc2U7IH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cdC8vIGFuIG9ydGhvZ29uYWwgbWF0cml4IGlzIGEgc3F1YXJlIG1hdHJpeCB3aXRoIHJlYWwgZW50cmllcyB3aG9zZSBjb2x1bW5zIGFuZCByb3dzIGFyZSBvcnRob2dvbmFsIHVuaXQgdmVjdG9yc1xyXG5cdC8vIFtBTElBU0VTXTogcmVhbCBvcnRob2dvbmFsIG1hdHJpeFxyXG5cdHB1YmxpYyBpc09ydGhvZ29uYWwoKTogYm9vbGVhbiB7XHJcblx0XHRjb25zdCBNVDogTWF0cml4ID0gdGhpcy50cmFuc3Bvc2UoKTtcclxuXHRcdHJldHVybiB0aGlzLm11bHQoTVQpLmlzSWRlbnRpdHkoKTtcclxuXHR9XHJcblx0cHVibGljIGlzUm93RWNoZWxvbkZvcm0oKTogYm9vbGVhbiB7XHJcblx0XHRsZXQgZm91bmRaZXJvUm93OiBib29sZWFuID0gZmFsc2U7XHJcblx0XHQvLyBhbGwgbm9uemVybyByb3dzIChyb3dzIHdpdGggYXQgbGVhc3Qgb25lIG5vbnplcm8gZWxlbWVudCkgYXJlIGFib3ZlIGFueSByb3dzIG9mIGFsbCB6ZXJvZXNcclxuXHRcdC8vIChhbGwgemVybyByb3dzLCBpZiBhbnksIGJlbG9uZyBhdCB0aGUgYm90dG9tIG9mIHRoZSBtYXRyaXgpXHJcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5tOyBpKyspIHtcclxuXHRcdFx0aWYgKHRoaXMuaXNaZXJvUm93KGkpKSB7XHJcblx0XHRcdFx0Zm91bmRaZXJvUm93ID0gdHJ1ZTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRpZiAoZm91bmRaZXJvUm93KSB7IHJldHVybiBmYWxzZTsgfVxyXG5cdFx0XHR9Ly8gaWYgY3VycmVudCByb3cgaXMgbm90IHplcm8sIGJ1dCBhIHByZXZpb3VzIHJvdyBpcyB6ZXJvLCB0aGVuIG1hdHJpeCBpcyBub3QgaW4gcm93IGVjaGVsb24gZm9ybVxyXG5cdFx0fVxyXG5cdFx0Ly8gdGhlIGxlYWRpbmcgY29lZmZpY2llbnQgKHRoZSBmaXJzdCBub256ZXJvIG51bWJlciBmcm9tIHRoZSBsZWZ0LCBhbHNvIGNhbGxlZCB0aGUgcGl2b3QpIG9mIGEgbm9uemVybyByb3dcclxuXHRcdC8vIGlzIGFsd2F5cyBzdHJpY3RseSB0byB0aGUgcmlnaHQgb2YgdGhlIGxlYWRpbmcgY29lZmZpY2llbnQgb2YgdGhlIHJvdyBhYm92ZSBpdFxyXG5cdFx0bGV0IHByZXZpb3VzSWR4OiBudW1iZXIgPSAtMTtcclxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLm07IGkrKykge1xyXG5cdFx0XHRjb25zdCBjdXJyZW50UGl2b3RJZHg6IG51bWJlciA9IHRoaXMucm93UGl2b3RQb3NpdGlvbihpKTtcclxuXHRcdFx0aWYgKDAgPiBjdXJyZW50UGl2b3RJZHgpIHsgY29udGludWU7IH0vLyB0aGlzIGlzIGEgemVybyByb3csIG5vIHBpdm90XHJcblx0XHRcdC8vIGxlYWRpbmcgY29lZmZpY2llbnQgbXVzdCBiZSAxXHJcblx0XHRcdGlmICghdGhpcy5lbGVtZW50c1tpXVtjdXJyZW50UGl2b3RJZHhdLmVxdWFscyhuZXcgUmF0aW9uYWxOdW1iZXIoMSkpKSB7IHJldHVybiBmYWxzZTsgfVxyXG5cdFx0XHRpZiAocHJldmlvdXNJZHggPCBjdXJyZW50UGl2b3RJZHgpIHtcclxuXHRcdFx0XHRwcmV2aW91c0lkeCA9IGN1cnJlbnRQaXZvdElkeDtcclxuXHRcdFx0fSBlbHNlIHsgcmV0dXJuIGZhbHNlOyB9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblx0cHVibGljIGlzUmVkdWNlZFJvd0VjaGVsb25Gb3JtKCk6IGJvb2xlYW4ge1xyXG5cdFx0aWYgKCF0aGlzLmlzUm93RWNoZWxvbkZvcm0oKSkgeyByZXR1cm4gZmFsc2U7IH1cclxuXHRcdC8vIGVhY2ggbGVhZGluZyBjb2VmZmljaWVudCBpcyB0aGUgb25seSBub256ZXJvIGVudHJ5IGluIGl0cyBjb2x1bW5cclxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLm07IGkrKykge1xyXG5cdFx0XHRjb25zdCBwaXZvdFBvc2l0aW9uOiBudW1iZXIgPSB0aGlzLnJvd1Bpdm90UG9zaXRpb24oaSk7XHJcblx0XHRcdGlmICgxIDwgdGhpcy5udW1iZXJPZk5vblplcm9FbGVtZW50Rm9yQ29sdW1uKHBpdm90UG9zaXRpb24pKSB7IHJldHVybiBmYWxzZTsgfVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cdHB1YmxpYyB0b1JlZHVjZWRSb3dFY2hlbG9uRm9ybSgpOiBNYXRyaXgge1xyXG5cdFx0Y29uc3QgcmVzOiBNYXRyaXggPSB0aGlzLmRlZXBDb3B5KCk7XHJcblx0XHRsZXQgbGVhZDogbnVtYmVyID0gMDtcclxuXHRcdGZvciAobGV0IHI6IG51bWJlciA9IDA7IHIgPCByZXMubTsgcisrKSB7XHJcblx0XHRcdGlmIChyZXMubiA8PSBsZWFkKSB7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdFx0bGV0IGk6IG51bWJlciA9IHI7XHJcblx0XHRcdHdoaWxlIChyZXMuZWxlbWVudHNbaV1bbGVhZF0uZXF1YWxzKDApKSB7XHJcblx0XHRcdFx0aSsrO1xyXG5cdFx0XHRcdGlmIChyZXMubSA9PT0gaSkge1xyXG5cdFx0XHRcdFx0aSA9IHI7XHJcblx0XHRcdFx0XHRsZWFkKys7XHJcblx0XHRcdFx0XHRpZiAocmVzLm4gPT09IGxlYWQpIHtcclxuXHRcdFx0XHRcdFx0bGVhZC0tO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0cmVzLnN3aXRjaFJvd3MoaSwgcik7XHJcblx0XHRcdGlmICghcmVzLmVsZW1lbnRzW3JdW2xlYWRdLmVxdWFscygwKSkge1xyXG5cdFx0XHRcdHJlcy5tdWx0aXBseVJvdyhyLCByZXMuZWxlbWVudHNbcl1bbGVhZF0ucmVjaXByb2NhbCgpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgcmVzLm07IGorKykge1xyXG5cdFx0XHRcdGlmIChqICE9PSByKSB7XHJcblx0XHRcdFx0XHRyZXMuYWRkUm93cyhqLCByLCByZXMuZWxlbWVudHNbal1bbGVhZF0ub3Bwb3NpdGUoKSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGxlYWQrKztcclxuXHRcdH1cclxuXHRcdHJldHVybiByZXM7XHJcblx0fVxyXG5cdHB1YmxpYyBkZXRlcm1pbmFudCgpOiBSYXRpb25hbE51bWJlciB7XHJcblx0XHQvLyB0b2RvOiBpbXBsZW1lbnQgYW4gb3B0aW1pemVkIHZlcnNpb24sIGxpa2UgQT1QTFVcclxuXHRcdGlmICh0aGlzLm0gIT09IHRoaXMubikge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJEZXRlcm1pbmFudCBjYW4gb25seSBiZSBjYWxjdWxhdGVkIG9uIGEgc3F1YXJlIG1hdHJpeFwiKTtcclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLm0gPT09IDEpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuZWxlbWVudHNbMF1bMF07XHJcblx0XHR9XHJcblx0XHRsZXQgcmV0OiBSYXRpb25hbE51bWJlciA9IG5ldyBSYXRpb25hbE51bWJlcigwKTtcclxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLm47IGkrKykge1xyXG5cdFx0XHRjb25zdCBtaW5vcjogUmF0aW9uYWxOdW1iZXIgPSB0aGlzLmVsZW1lbnRzWzBdW2ldLm11bHQodGhpcy5jb2ZhY3RvcigwLCBpKS5kZXRlcm1pbmFudCgpKTtcclxuXHRcdFx0cmV0ID0gcmV0LmFkZChtaW5vci5tdWx0KCgtMSkgKiogaSkpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJldDtcclxuXHR9XHJcblx0cHVibGljIGNvbnZvbHV0ZShrZXJuZWw6IE1hdHJpeCk6IE1hdHJpeCB7XHJcblx0XHRpZiAoa2VybmVsLm0gIT09IGtlcm5lbC5uKSB7IHRocm93IG5ldyBFcnJvcihcIktlcm5lbCBpcyBub3QgYSBzcXVhcmUgbWF0cml4LlwiKTsgfVxyXG5cdFx0aWYgKGtlcm5lbC5tICUgMiA9PT0gMCkgeyB0aHJvdyBuZXcgRXJyb3IoXCJLZXJuZWwgaXMgbm90IGFuIGV2ZW4gc2l6ZSBtYXRyaXguXCIpOyB9XHJcblx0XHRjb25zdCBzeiA9IE1hdGguZmxvb3Ioa2VybmVsLm0gLyAyKTtcclxuXHRcdGNvbnN0IHJlczogTWF0cml4ID0gbmV3IE1hdHJpeCh0aGlzLm0sIHRoaXMubik7XHJcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5tOyBpKyspIHtcclxuXHRcdFx0Zm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IHRoaXMubjsgaisrKSB7XHJcblx0XHRcdFx0cmVzLmVsZW1lbnRzW2ldW2pdID0gbmV3IFJhdGlvbmFsTnVtYmVyKDApO1xyXG5cdFx0XHRcdGZvciAobGV0IHRpOiBudW1iZXIgPSAwOyB0aSA8IGtlcm5lbC5tOyB0aSsrKSB7XHJcblx0XHRcdFx0XHRpZiAoaSArIHRpIC0gc3ogPCAwIHx8IGkgKyB0aSAtIHN6ID49IHRoaXMubSkge1xyXG5cdFx0XHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGZvciAobGV0IHRqOiBudW1iZXIgPSAwOyB0aiA8IGtlcm5lbC5uOyB0aisrKSB7XHJcblx0XHRcdFx0XHRcdGlmIChqICsgdGogLSBzeiA8IDAgfHwgaiArIHRqIC0gc3ogPj0gdGhpcy5uKSB7XHJcblx0XHRcdFx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0cmVzLmVsZW1lbnRzW2ldW2pdID0gcmVzLmVsZW1lbnRzW2ldW2pdLmFkZCh0aGlzLmVsZW1lbnRzW2kgKyB0aSAtIHN6XVtqICsgdGogLSBzel0ubXVsdChrZXJuZWwuZWxlbWVudHNbdGldW3RqXSkpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlcztcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgaXNaZXJvUm93KHJvd0lkOiBudW1iZXIpOiBib29sZWFuIHtcclxuXHRcdGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCB0aGlzLm47IGorKykge1xyXG5cdFx0XHRpZiAoIXRoaXMuZWxlbWVudHNbcm93SWRdW2pdLmVxdWFscyhuZXcgUmF0aW9uYWxOdW1iZXIoMCkpKSB7IHJldHVybiBmYWxzZTsgfVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cdHByaXZhdGUgcm93UGl2b3RQb3NpdGlvbihyb3dJZDogbnVtYmVyKTogbnVtYmVyIHtcclxuXHRcdGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCB0aGlzLm47IGorKykge1xyXG5cdFx0XHRpZiAoIXRoaXMuZWxlbWVudHNbcm93SWRdW2pdLmVxdWFscyhuZXcgUmF0aW9uYWxOdW1iZXIoMCkpKSB7IHJldHVybiBqOyB9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gLTE7XHJcblx0fVxyXG5cdHByaXZhdGUgbnVtYmVyT2ZOb25aZXJvRWxlbWVudEZvckNvbHVtbihjb2x1bW5JZDogbnVtYmVyKTogbnVtYmVyIHtcclxuXHRcdGxldCBhY2M6IG51bWJlciA9IDA7XHJcblx0XHRmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgdGhpcy5tOyBqKyspIHtcclxuXHRcdFx0aWYgKCF0aGlzLmVsZW1lbnRzW2pdW2NvbHVtbklkXS5lcXVhbHMobmV3IFJhdGlvbmFsTnVtYmVyKDApKSkgeyBhY2MrKzsgfVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGFjYztcclxuXHR9XHJcblx0cHJpdmF0ZSBjb2ZhY3Rvcihyb3dJZDogbnVtYmVyLCBjb2x1bW5JZDogbnVtYmVyKTogTWF0cml4IHtcclxuXHRcdGNvbnN0IHJldDogTWF0cml4ID0gbmV3IE1hdHJpeCh0aGlzLm0gLSAxLCB0aGlzLm4gLSAxKTtcclxuXHRcdGxldCByb3dPZmZzZXQ6IG51bWJlciA9IDA7XHJcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5tIC0gMTsgaSsrKSB7XHJcblx0XHRcdGlmIChpID09PSByb3dJZCkge1xyXG5cdFx0XHRcdHJvd09mZnNldCA9IDE7XHJcblx0XHRcdH1cclxuXHRcdFx0bGV0IGNvbHVtbk9mZnNldDogbnVtYmVyID0gMDtcclxuXHRcdFx0Zm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IHRoaXMubiAtIDE7IGorKykge1xyXG5cdFx0XHRcdGlmIChqID09PSBjb2x1bW5JZCkge1xyXG5cdFx0XHRcdFx0Y29sdW1uT2Zmc2V0ID0gMTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0LmVsZW1lbnRzW2ldW2pdID0gdGhpcy5lbGVtZW50c1tpICsgcm93T2Zmc2V0XVtqICsgY29sdW1uT2Zmc2V0XTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJldDtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBNYXRyaXhJZGVudGl0eSBleHRlbmRzIE1hdHJpeCB7XHJcblx0Y29uc3RydWN0b3IobTogbnVtYmVyKSB7XHJcblx0XHRzdXBlcihtLCBtKTtcclxuXHRcdHRoaXMuZWxlbWVudHMgPSBbXTtcclxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLm07IGkrKykge1xyXG5cdFx0XHR0aGlzLmVsZW1lbnRzW2ldID0gW107XHJcblx0XHRcdGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCB0aGlzLm07IGorKykge1xyXG5cdFx0XHRcdGlmIChpID09PSBqKSB7XHJcblx0XHRcdFx0XHR0aGlzLmVsZW1lbnRzW2ldW2pdID0gbmV3IFJhdGlvbmFsTnVtYmVyKDEpO1xyXG5cdFx0XHRcdH0gZWxzZSB7IHRoaXMuZWxlbWVudHNbaV1bal0gPSBuZXcgUmF0aW9uYWxOdW1iZXIoMCk7IH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuLy8gZWxpbWluYXRpb24gLSBtdWx0aXBseSBvbiB0aGUgbGVmdCAoRSpBKTsgUm93LWFkZGl0aW9uIHRyYW5zZm9ybWF0aW9uc1xyXG4vLyB0byBtdWx0Kihyb3cyIG9mIE1hdHJpeCBBKSBhZGQgKHJvdzEgb2YgTWF0cml4IEEpXHJcbmV4cG9ydCBjbGFzcyBNYXRyaXhFbGltaW5hdGlvbiBleHRlbmRzIE1hdHJpeCB7XHJcblx0cHVibGljIHJvdzE6IG51bWJlcjtcclxuXHRwdWJsaWMgcm93MjogbnVtYmVyO1xyXG5cdGNvbnN0cnVjdG9yKG06IG51bWJlciwgcjE6IG51bWJlciwgcjI6IG51bWJlciwgbXVsdDogbnVtYmVyIHwgUmF0aW9uYWxOdW1iZXIpIHtcclxuXHRcdGlmIChtIDwgcjEgfHwgbSA8IHIyKSB7IHRocm93IG5ldyBFcnJvcihcIkNvbHVtbiBpbmRleCBtdXN0IGJlIGxlc3MgdGhhbiBvciBlcXVhbCB0byB0aGUgbWF0cml4IHNpemUuXCIpOyB9XHJcblx0XHRzdXBlcihtLCBtKTtcclxuXHRcdHRoaXMucm93MSA9IHIxO1xyXG5cdFx0dGhpcy5yb3cyID0gcjI7XHJcblx0XHR0aGlzLmVsZW1lbnRzID0gW107XHJcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5tOyBpKyspIHtcclxuXHRcdFx0dGhpcy5lbGVtZW50c1tpXSA9IFtdO1xyXG5cdFx0XHRmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgdGhpcy5tOyBqKyspIHtcclxuXHRcdFx0XHRpZiAoaSA9PT0gaikge1xyXG5cdFx0XHRcdFx0dGhpcy5lbGVtZW50c1tpXVtqXSA9IG5ldyBSYXRpb25hbE51bWJlcigxKTtcclxuXHRcdFx0XHR9IGVsc2UgeyB0aGlzLmVsZW1lbnRzW2ldW2pdID0gbmV3IFJhdGlvbmFsTnVtYmVyKDApOyB9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmICh0eXBlb2YgbXVsdCA9PT0gXCJudW1iZXJcIikge1xyXG5cdFx0XHR0aGlzLmVsZW1lbnRzW3IxXVtyMl0gPSBuZXcgUmF0aW9uYWxOdW1iZXIobXVsdCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAobXVsdCBpbnN0YW5jZW9mIFJhdGlvbmFsTnVtYmVyKSB7IHRoaXMuZWxlbWVudHNbcjFdW3IyXSA9IG11bHQ7IH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi8vIHBlcm11dGF0aW9uIC0gbXVsdGlwbHkgb24gdGhlIHJpZ2h0IChBKlApOyBSb3ctc3dpdGNoaW5nIHRyYW5zZm9ybWF0aW9uc1xyXG5leHBvcnQgY2xhc3MgTWF0cml4UGVybXV0YXRpb24gZXh0ZW5kcyBNYXRyaXgge1xyXG5cdGNvbnN0cnVjdG9yKG06IG51bWJlciwgcm93MTogbnVtYmVyLCByb3cyOiBudW1iZXIpIHtcclxuXHRcdGlmIChtIDwgcm93MSB8fCBtIDwgcm93MikgeyB0aHJvdyBuZXcgRXJyb3IoXCJDb2x1bW4gaW5kZXggbXVzdCBiZSBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gdGhlIG1hdHJpeCBzaXplLlwiKTsgfVxyXG5cdFx0c3VwZXIobSwgbSk7XHJcblx0XHR0aGlzLmVsZW1lbnRzID0gW107XHJcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5tOyBpKyspIHtcclxuXHRcdFx0dGhpcy5lbGVtZW50c1tpXSA9IFtdO1xyXG5cdFx0XHRmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgdGhpcy5tOyBqKyspIHtcclxuXHRcdFx0XHRpZiAoaSA9PT0gaikge1xyXG5cdFx0XHRcdFx0dGhpcy5lbGVtZW50c1tpXVtqXSA9IG5ldyBSYXRpb25hbE51bWJlcigxKTtcclxuXHRcdFx0XHR9IGVsc2UgeyB0aGlzLmVsZW1lbnRzW2ldW2pdID0gbmV3IFJhdGlvbmFsTnVtYmVyKDApOyB9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHRoaXMuZWxlbWVudHNbcm93MV1bcm93MV0gPSBuZXcgUmF0aW9uYWxOdW1iZXIoMCk7XHJcblx0XHR0aGlzLmVsZW1lbnRzW3JvdzFdW3JvdzJdID0gbmV3IFJhdGlvbmFsTnVtYmVyKDEpO1xyXG5cdFx0dGhpcy5lbGVtZW50c1tyb3cyXVtyb3cyXSA9IG5ldyBSYXRpb25hbE51bWJlcigwKTtcclxuXHRcdHRoaXMuZWxlbWVudHNbcm93Ml1bcm93MV0gPSBuZXcgUmF0aW9uYWxOdW1iZXIoMSk7XHJcblx0fVxyXG59IiwiZXhwb3J0IGNsYXNzIFF1ZXVlPFQ+IHtcclxuXHRwcml2YXRlIHF1ZXVlOiBUW107XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLnF1ZXVlID0gW107XHJcblx0fVxyXG5cdHB1YmxpYyBpc0VtcHR5KCk6IGJvb2xlYW4ge1xyXG5cdFx0cmV0dXJuIHRoaXMucXVldWUubGVuZ3RoID09PSAwO1xyXG5cdH1cclxuXHRwdWJsaWMgZW5xdWV1ZShlbGVtZW50OiBUKTogdm9pZCB7XHJcblx0XHR0aGlzLnF1ZXVlLnB1c2goZWxlbWVudCk7XHJcblx0fVxyXG5cdHB1YmxpYyBkZXF1ZXVlKCk6IFQge1xyXG5cdFx0aWYgKHRoaXMuaXNFbXB0eSgpKSB7IHRocm93IG5ldyBFcnJvcihcIlF1ZXVlIGlzIGVtcHR5XCIpOyB9XHJcblx0XHRyZXR1cm4gdGhpcy5xdWV1ZS5zaGlmdCgpO1xyXG5cdH1cclxuXHRwdWJsaWMgcGVlaygpOiBUIHtcclxuXHRcdGlmICh0aGlzLmlzRW1wdHkoKSkgeyB0aHJvdyBuZXcgRXJyb3IoXCJRdWV1ZSBpcyBlbXB0eVwiKTsgfVxyXG5cdFx0cmV0dXJuIHRoaXMucXVldWVbMF07XHJcblx0fVxyXG5cdHB1YmxpYyB0b0FycmF5KCk6IFRbXSB7XHJcblx0XHRyZXR1cm4gdGhpcy5xdWV1ZTtcclxuXHR9XHJcbn0iLCJpbXBvcnQgeyBQYXJzZXIgfSBmcm9tIFwiLi9Bcml0aG1ldGljRXZhbHVhdG9yXCI7XHJcbmltcG9ydCB7IFF1ZXVlIH0gZnJvbSBcIi4vUXVldWVcIjtcclxuaW1wb3J0IHsgU3RhY2sgfSBmcm9tIFwiLi9TdGFja1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJhdGlvbmFsTnVtYmVyIHtcclxuXHRwdWJsaWMgc3RhdGljIHRvUmV2ZXJzZVBvbGlzaE5vdGF0aW9uKGNvZGU6IHN0cmluZyk6IHN0cmluZ1tdIHtcclxuXHRcdGNvbnN0IHRva2Vuczogc3RyaW5nW10gPSBjb2RlLm1hdGNoKC9cXCh8XFwpfFxcZCsoXFwuXFxkKyk/fFxcdyt8W1xcK1xcLVxcKlxcL1xcXl0vZyk7XHJcblx0XHRsZXQgaTogbnVtYmVyID0gMDtcclxuXHRcdGNvbnN0IG91dHB1dFF1ZXVlOiBRdWV1ZTxzdHJpbmc+ID0gbmV3IFF1ZXVlPHN0cmluZz4oKTtcclxuXHRcdGNvbnN0IG9wZXJhdG9yU3RhY2s6IFN0YWNrPHN0cmluZz4gPSBuZXcgU3RhY2s8c3RyaW5nPigpO1xyXG5cdFx0d2hpbGUgKGkgPCB0b2tlbnMubGVuZ3RoKSB7XHJcblx0XHRcdGlmICh0aGlzLmlzTnVtYmVyKHRva2Vuc1tpXSkpIHtcclxuXHRcdFx0XHRvdXRwdXRRdWV1ZS5lbnF1ZXVlKHRva2Vuc1tpXSk7XHJcblx0XHRcdH0gZWxzZSBpZiAodGhpcy5pc09wZXJhdG9yKHRva2Vuc1tpXSkpIHtcclxuXHRcdFx0XHRjb25zdCBvcDE6IHN0cmluZyA9IHRva2Vuc1tpXTtcclxuXHRcdFx0XHR3aGlsZSAoIW9wZXJhdG9yU3RhY2suaXNFbXB0eSgpICYmIHRoaXMuaXNPcGVyYXRvcihvcGVyYXRvclN0YWNrLnBlZWsoKSkpIHtcclxuXHRcdFx0XHRcdGlmICgodGhpcy5pc0xlZnRBc3NvY2lhdGl2ZU9wZXJhdG9yKG9wMSkgJiYgKHRoaXMucHJlY2VkZW5jZShvcDEpIDw9IHRoaXMucHJlY2VkZW5jZShvcGVyYXRvclN0YWNrLnBlZWsoKSkpKSB8fFxyXG5cdFx0XHRcdFx0XHQodGhpcy5pc1JpZ2h0QXNzb2NpYXRpdmVPcGVyYXRvcihvcDEpICYmICh0aGlzLnByZWNlZGVuY2Uob3AxKSA8IHRoaXMucHJlY2VkZW5jZShvcGVyYXRvclN0YWNrLnBlZWsoKSkpKSkge1xyXG5cdFx0XHRcdFx0XHRvdXRwdXRRdWV1ZS5lbnF1ZXVlKG9wZXJhdG9yU3RhY2sucG9wKCkpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdG9wZXJhdG9yU3RhY2sucHVzaChvcDEpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHRva2Vuc1tpXSA9PT0gXCIoXCIpIHtcclxuXHRcdFx0XHRvcGVyYXRvclN0YWNrLnB1c2godG9rZW5zW2ldKTtcclxuXHRcdFx0fSBlbHNlIGlmICh0b2tlbnNbaV0gPT09IFwiKVwiKSB7XHJcblx0XHRcdFx0d2hpbGUgKCFvcGVyYXRvclN0YWNrLmlzRW1wdHkoKSAmJiBvcGVyYXRvclN0YWNrLnBlZWsoKSAhPT0gXCIoXCIpIHtcclxuXHRcdFx0XHRcdG91dHB1dFF1ZXVlLmVucXVldWUob3BlcmF0b3JTdGFjay5wb3AoKSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmICghb3BlcmF0b3JTdGFjay5pc0VtcHR5KCkgJiYgb3BlcmF0b3JTdGFjay5wZWVrKCkgPT09IFwiKFwiKSB7XHJcblx0XHRcdFx0XHRvcGVyYXRvclN0YWNrLnBvcCgpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJNaXNtYXRjaGVkIHBhcmVudGhlc2VzLlwiKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0aSsrO1xyXG5cdFx0fVxyXG5cdFx0d2hpbGUgKCFvcGVyYXRvclN0YWNrLmlzRW1wdHkoKSkge1xyXG5cdFx0XHRpZiAob3BlcmF0b3JTdGFjay5wZWVrKCkgPT09IFwiKFwiKSB7XHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiTWlzbWF0Y2hlZCBwYXJlbnRoZXNlcy5cIik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0b3V0cHV0UXVldWUuZW5xdWV1ZShvcGVyYXRvclN0YWNrLnBvcCgpKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIG91dHB1dFF1ZXVlLnRvQXJyYXkoKTtcclxuXHR9XHJcblx0cHVibGljIHN0YXRpYyBmcm9tU3RyaW5nKGNvZGU6IHN0cmluZyk6IFJhdGlvbmFsTnVtYmVyIHtcclxuXHRcdGNvbnN0IHA6IFBhcnNlciA9IG5ldyBQYXJzZXIoKTtcclxuXHRcdHJldHVybiBwLnBhcnNlKGNvZGUpO1xyXG5cdH1cclxuXHRwdWJsaWMgc3RhdGljIGdyZWF0ZXN0Q29tbW9uRGl2aXNvcihhOiBudW1iZXIsIGI6IG51bWJlcik6IG51bWJlciB7XHJcblx0XHRyZXR1cm4gYiA/IFJhdGlvbmFsTnVtYmVyLmdyZWF0ZXN0Q29tbW9uRGl2aXNvcihiLCBhICUgYikgOiBhO1xyXG5cdH1cclxuXHRwdWJsaWMgc3RhdGljIGxlYXN0Q29tbW9uTXVsdGlwbGUoYTogbnVtYmVyLCBiOiBudW1iZXIpOiBudW1iZXIge1xyXG5cdFx0cmV0dXJuIE1hdGguYWJzKGEgKiBiIC8gUmF0aW9uYWxOdW1iZXIuZ3JlYXRlc3RDb21tb25EaXZpc29yKGEsIGIpKTtcclxuXHR9XHJcblx0cHJpdmF0ZSBzdGF0aWMgaXNOdW1iZXIoY29kZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcblx0XHRyZXR1cm4gL15cXGQvLnRlc3QoY29kZSk7XHJcblx0fVxyXG5cdHByaXZhdGUgc3RhdGljIGlzT3BlcmF0b3IoY29kZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcblx0XHRyZXR1cm4gL1tcXCtcXC1cXCpcXC9cXF5dLy50ZXN0KGNvZGUpO1xyXG5cdH1cclxuXHRwcml2YXRlIHN0YXRpYyBpc0xlZnRBc3NvY2lhdGl2ZU9wZXJhdG9yKG9wZXJhdG9yOiBzdHJpbmcpOiBib29sZWFuIHtcclxuXHRcdHJldHVybiAvW1xcK1xcLVxcKlxcL10vLnRlc3Qob3BlcmF0b3IpO1xyXG5cdH1cclxuXHRwcml2YXRlIHN0YXRpYyBpc1JpZ2h0QXNzb2NpYXRpdmVPcGVyYXRvcihvcGVyYXRvcjogc3RyaW5nKTogYm9vbGVhbiB7XHJcblx0XHRyZXR1cm4gL1tcXF5dLy50ZXN0KG9wZXJhdG9yKTtcclxuXHR9XHJcblx0cHJpdmF0ZSBzdGF0aWMgcHJlY2VkZW5jZShvcGVyYXRvcjogc3RyaW5nKTogbnVtYmVyIHtcclxuXHRcdGlmICgvW1xcK1xcLV0vLnRlc3Qob3BlcmF0b3IpKSB7XHJcblx0XHRcdHJldHVybiAxO1xyXG5cdFx0fVxyXG5cdFx0aWYgKC9bXFwqXFwvXS8udGVzdChvcGVyYXRvcikpIHtcclxuXHRcdFx0cmV0dXJuIDI7XHJcblx0XHR9XHJcblx0XHRpZiAoL1tcXF5dLy50ZXN0KG9wZXJhdG9yKSkge1xyXG5cdFx0XHRyZXR1cm4gMztcclxuXHRcdH1cclxuXHRcdHRocm93IG5ldyBFcnJvcihcIlVua25vd24gb3BlcmF0b3IuXCIpO1xyXG5cdH1cclxuXHRwcml2YXRlIHN0YXRpYyBldmFsdWF0ZUZyb21SUE4odG9rZW5zOiBzdHJpbmdbXSk6IFJhdGlvbmFsTnVtYmVyIHtcclxuXHRcdGNvbnN0IHN0YWNrOiBTdGFjazxSYXRpb25hbE51bWJlcj4gPSBuZXcgU3RhY2s8UmF0aW9uYWxOdW1iZXI+KCk7XHJcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGlmICghdGhpcy5pc09wZXJhdG9yKHRva2Vuc1tpXSkpIHtcclxuXHRcdFx0XHRzdGFjay5wdXNoKG5ldyBSYXRpb25hbE51bWJlcihwYXJzZUZsb2F0KHRva2Vuc1tpXSkpKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRjb25zdCBvcDE6IFJhdGlvbmFsTnVtYmVyID0gc3RhY2sucG9wKCk7XHJcblx0XHRcdFx0Y29uc3Qgb3AyOiBSYXRpb25hbE51bWJlciA9IHN0YWNrLnBvcCgpO1xyXG5cdFx0XHRcdHN3aXRjaCAodG9rZW5zW2ldKSB7XHJcblx0XHRcdFx0XHRjYXNlIFwiK1wiOiBzdGFjay5wdXNoKG9wMi5hZGQob3AxKSk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSBcIi1cIjogc3RhY2sucHVzaChvcDIuc3ViKG9wMSkpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgXCIqXCI6IHN0YWNrLnB1c2gob3AyLm11bHQob3AxKSk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSBcIi9cIjogc3RhY2sucHVzaChvcDIuZGl2KG9wMSkpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgXCJeXCI6IHN0YWNrLnB1c2gob3AyLmV4cChvcDEudG9OdW1iZXIoKSkpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiBzdGFjay5wb3AoKS5zaW1wbGlmaWVkRm9ybSgpO1xyXG5cdH1cclxuXHRwdWJsaWMgbnVtZXJhdG9yOiBudW1iZXI7XHJcblx0cHVibGljIGRlbm9taW5hdG9yOiBudW1iZXI7XHJcblx0Y29uc3RydWN0b3IobjogbnVtYmVyLCBkOiBudW1iZXIgPSAxKSB7XHJcblx0XHRpZiAoZCA9PT0gMCkge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJEaXZpc2lvbiBieSB6ZXJvIVwiKTtcclxuXHRcdH1cclxuXHRcdC8vIHRvZG86IHBvdGVudGlhbCBmb3Igb3ZlcmZsb3cuIFdoZW4gTWF0aC5zaWduIGJlY29tZXMgYXZhaWxhYmxlIGluIFR5cGVTY3JpcHQgdXNlIGl0IGluc3RlYWQgb2YgdGhlIG11bHRpcGxpY2F0aW9uXHJcblx0XHRjb25zdCBzaWduOiBudW1iZXIgPSBuICogZCA+PSAwID8gMSA6IC0xO1xyXG5cdFx0dGhpcy5udW1lcmF0b3IgPSBzaWduICogTWF0aC5hYnMobik7XHJcblx0XHR0aGlzLmRlbm9taW5hdG9yID0gTWF0aC5hYnMoZCk7XHJcblx0fVxyXG5cdHB1YmxpYyBzaW1wbGlmaWVkRm9ybSgpOiBSYXRpb25hbE51bWJlciB7XHJcblx0XHRjb25zdCBnY2Q6IG51bWJlciA9IFJhdGlvbmFsTnVtYmVyLmdyZWF0ZXN0Q29tbW9uRGl2aXNvcih0aGlzLm51bWVyYXRvciwgdGhpcy5kZW5vbWluYXRvcik7XHJcblx0XHRyZXR1cm4gbmV3IFJhdGlvbmFsTnVtYmVyKHRoaXMubnVtZXJhdG9yIC8gZ2NkLCB0aGlzLmRlbm9taW5hdG9yIC8gZ2NkKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBlcXVhbHMoeDogbnVtYmVyIHwgUmF0aW9uYWxOdW1iZXIpOiBib29sZWFuIHtcclxuXHRcdGNvbnN0IHJuMTogUmF0aW9uYWxOdW1iZXIgPSB0aGlzLnNpbXBsaWZpZWRGb3JtKCk7XHJcblx0XHRpZiAodHlwZW9mIHggPT09IFwibnVtYmVyXCIpIHtcclxuXHRcdFx0cmV0dXJuIHJuMS5udW1lcmF0b3IgPT09IHggJiYgcm4xLmRlbm9taW5hdG9yID09PSAxO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y29uc3Qgcm4yOiBSYXRpb25hbE51bWJlciA9IHguc2ltcGxpZmllZEZvcm0oKTtcclxuXHRcdFx0cmV0dXJuIHJuMS5udW1lcmF0b3IgPT09IHJuMi5udW1lcmF0b3IgJiYgcm4xLmRlbm9taW5hdG9yID09PSBybjIuZGVub21pbmF0b3I7XHJcblx0XHR9XHJcblx0fVxyXG5cdHB1YmxpYyBsdCh4OiBudW1iZXIgfCBSYXRpb25hbE51bWJlcik6IGJvb2xlYW4ge1xyXG5cdFx0Y29uc3Qgcm4xOiBSYXRpb25hbE51bWJlciA9IHRoaXMuc2ltcGxpZmllZEZvcm0oKTtcclxuXHRcdGlmICh0eXBlb2YgeCA9PT0gXCJudW1iZXJcIikge1xyXG5cdFx0XHRyZXR1cm4gcm4xLm51bWVyYXRvciA8IHggKiBybjEuZGVub21pbmF0b3I7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjb25zdCBybjI6IFJhdGlvbmFsTnVtYmVyID0geC5zaW1wbGlmaWVkRm9ybSgpO1xyXG5cdFx0XHRyZXR1cm4gcm4xLm51bWVyYXRvciAqIHJuMi5kZW5vbWluYXRvciA8IHJuMi5udW1lcmF0b3IgKiBybjEuZGVub21pbmF0b3I7XHJcblx0XHR9XHJcblx0fVxyXG5cdHB1YmxpYyBsZSh4OiBudW1iZXIgfCBSYXRpb25hbE51bWJlcik6IGJvb2xlYW4ge1xyXG5cdFx0Y29uc3Qgcm4xOiBSYXRpb25hbE51bWJlciA9IHRoaXMuc2ltcGxpZmllZEZvcm0oKTtcclxuXHRcdGlmICh0eXBlb2YgeCA9PT0gXCJudW1iZXJcIikge1xyXG5cdFx0XHRyZXR1cm4gcm4xLm51bWVyYXRvciA8PSB4ICogcm4xLmRlbm9taW5hdG9yO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y29uc3Qgcm4yOiBSYXRpb25hbE51bWJlciA9IHguc2ltcGxpZmllZEZvcm0oKTtcclxuXHRcdFx0cmV0dXJuIHJuMS5udW1lcmF0b3IgKiBybjIuZGVub21pbmF0b3IgPD0gcm4yLm51bWVyYXRvciAqIHJuMS5kZW5vbWluYXRvcjtcclxuXHRcdH1cclxuXHR9XHJcblx0cHVibGljIGd0KHg6IG51bWJlciB8IFJhdGlvbmFsTnVtYmVyKTogYm9vbGVhbiB7XHJcblx0XHRjb25zdCBybjE6IFJhdGlvbmFsTnVtYmVyID0gdGhpcy5zaW1wbGlmaWVkRm9ybSgpO1xyXG5cdFx0aWYgKHR5cGVvZiB4ID09PSBcIm51bWJlclwiKSB7XHJcblx0XHRcdHJldHVybiBybjEubnVtZXJhdG9yID4geCAqIHJuMS5kZW5vbWluYXRvcjtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNvbnN0IHJuMjogUmF0aW9uYWxOdW1iZXIgPSB4LnNpbXBsaWZpZWRGb3JtKCk7XHJcblx0XHRcdHJldHVybiBybjEubnVtZXJhdG9yICogcm4yLmRlbm9taW5hdG9yID4gcm4yLm51bWVyYXRvciAqIHJuMS5kZW5vbWluYXRvcjtcclxuXHRcdH1cclxuXHR9XHJcblx0cHVibGljIGdlKHg6IG51bWJlciB8IFJhdGlvbmFsTnVtYmVyKTogYm9vbGVhbiB7XHJcblx0XHRjb25zdCBybjE6IFJhdGlvbmFsTnVtYmVyID0gdGhpcy5zaW1wbGlmaWVkRm9ybSgpO1xyXG5cdFx0aWYgKHR5cGVvZiB4ID09PSBcIm51bWJlclwiKSB7XHJcblx0XHRcdHJldHVybiBybjEubnVtZXJhdG9yID49IHggKiBybjEuZGVub21pbmF0b3I7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjb25zdCBybjI6IFJhdGlvbmFsTnVtYmVyID0geC5zaW1wbGlmaWVkRm9ybSgpO1xyXG5cdFx0XHRyZXR1cm4gcm4xLm51bWVyYXRvciAqIHJuMi5kZW5vbWluYXRvciA+PSBybjIubnVtZXJhdG9yICogcm4xLmRlbm9taW5hdG9yO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly8gbXVsdGlwbGljYXRpdmUgaW52ZXJzZVxyXG5cdHB1YmxpYyByZWNpcHJvY2FsKCk6IFJhdGlvbmFsTnVtYmVyIHtcclxuXHRcdGlmICh0aGlzLmRlbm9taW5hdG9yID09PSAwKSB7IHRocm93IG5ldyBFcnJvcihcIkRpdmlzaW9uIGJ5IHplcm8hXCIpOyB9XHJcblx0XHRyZXR1cm4gbmV3IFJhdGlvbmFsTnVtYmVyKHRoaXMuZGVub21pbmF0b3IsIHRoaXMubnVtZXJhdG9yKTtcclxuXHR9XHJcblx0Ly8gYWRkaXRpdmUgaW52ZXJzZVxyXG5cdHB1YmxpYyBvcHBvc2l0ZSgpOiBSYXRpb25hbE51bWJlciB7XHJcblx0XHRyZXR1cm4gbmV3IFJhdGlvbmFsTnVtYmVyKHRoaXMubnVtZXJhdG9yICogKC0xKSwgdGhpcy5kZW5vbWluYXRvcik7XHJcblx0fVxyXG5cdHB1YmxpYyBhZGQoeDogbnVtYmVyIHwgUmF0aW9uYWxOdW1iZXIpOiBSYXRpb25hbE51bWJlciB7XHJcblx0XHRpZiAodHlwZW9mIHggPT09IFwibnVtYmVyXCIpIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBSYXRpb25hbE51bWJlcigodGhpcy5udW1lcmF0b3IgKyB4ICogdGhpcy5kZW5vbWluYXRvciksIHRoaXMuZGVub21pbmF0b3IpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y29uc3QgbGNtOiBudW1iZXIgPSBSYXRpb25hbE51bWJlci5sZWFzdENvbW1vbk11bHRpcGxlKHRoaXMuZGVub21pbmF0b3IsIHguZGVub21pbmF0b3IpO1xyXG5cdFx0XHRjb25zdCBuMTogbnVtYmVyID0gdGhpcy5udW1lcmF0b3IgKiBsY20gLyB0aGlzLmRlbm9taW5hdG9yO1xyXG5cdFx0XHRjb25zdCBuMjogbnVtYmVyID0geC5udW1lcmF0b3IgKiBsY20gLyB4LmRlbm9taW5hdG9yO1xyXG5cdFx0XHRyZXR1cm4gbmV3IFJhdGlvbmFsTnVtYmVyKG4xICsgbjIsIGxjbSk7XHJcblx0XHR9XHJcblx0fVxyXG5cdHB1YmxpYyBzdWIoeDogbnVtYmVyIHwgUmF0aW9uYWxOdW1iZXIpOiBSYXRpb25hbE51bWJlciB7XHJcblx0XHRpZiAodHlwZW9mIHggPT09IFwibnVtYmVyXCIpIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBSYXRpb25hbE51bWJlcigodGhpcy5udW1lcmF0b3IgLSB4ICogdGhpcy5kZW5vbWluYXRvciksIHRoaXMuZGVub21pbmF0b3IpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y29uc3QgbGNtOiBudW1iZXIgPSBSYXRpb25hbE51bWJlci5sZWFzdENvbW1vbk11bHRpcGxlKHRoaXMuZGVub21pbmF0b3IsIHguZGVub21pbmF0b3IpO1xyXG5cdFx0XHRjb25zdCBuMTogbnVtYmVyID0gdGhpcy5udW1lcmF0b3IgKiBsY20gLyB0aGlzLmRlbm9taW5hdG9yO1xyXG5cdFx0XHRjb25zdCBuMjogbnVtYmVyID0geC5udW1lcmF0b3IgKiBsY20gLyB4LmRlbm9taW5hdG9yO1xyXG5cdFx0XHRyZXR1cm4gbmV3IFJhdGlvbmFsTnVtYmVyKG4xIC0gbjIsIGxjbSk7XHJcblx0XHR9XHJcblx0fVxyXG5cdHB1YmxpYyBtdWx0KHg6IG51bWJlciB8IFJhdGlvbmFsTnVtYmVyKTogUmF0aW9uYWxOdW1iZXIge1xyXG5cdFx0aWYgKHR5cGVvZiB4ID09PSBcIm51bWJlclwiKSB7XHJcblx0XHRcdHJldHVybiBuZXcgUmF0aW9uYWxOdW1iZXIoKHRoaXMubnVtZXJhdG9yICogeCksIHRoaXMuZGVub21pbmF0b3IpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBSYXRpb25hbE51bWJlcigodGhpcy5udW1lcmF0b3IgKiB4Lm51bWVyYXRvciksIHguZGVub21pbmF0b3IgKiB0aGlzLmRlbm9taW5hdG9yKTtcclxuXHRcdH1cclxuXHR9XHJcblx0cHVibGljIGRpdih4OiBudW1iZXIgfCBSYXRpb25hbE51bWJlcik6IFJhdGlvbmFsTnVtYmVyIHtcclxuXHRcdGlmICh0eXBlb2YgeCA9PT0gXCJudW1iZXJcIikge1xyXG5cdFx0XHRyZXR1cm4gbmV3IFJhdGlvbmFsTnVtYmVyKCh0aGlzLm51bWVyYXRvciksIHRoaXMuZGVub21pbmF0b3IgKiB4KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiBuZXcgUmF0aW9uYWxOdW1iZXIoKHRoaXMubnVtZXJhdG9yICogeC5kZW5vbWluYXRvciksIHgubnVtZXJhdG9yICogdGhpcy5kZW5vbWluYXRvcik7XHJcblx0XHR9XHJcblx0fVxyXG5cdHB1YmxpYyBleHAoeDogbnVtYmVyIHwgUmF0aW9uYWxOdW1iZXIpOiBSYXRpb25hbE51bWJlciB7XHJcblx0XHRpZiAodHlwZW9mIHggPT09IFwibnVtYmVyXCIpIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBSYXRpb25hbE51bWJlcih0aGlzLm51bWVyYXRvciAqKiB4LCB0aGlzLmRlbm9taW5hdG9yICoqIHgpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKHRoaXMuZGVub21pbmF0b3IgIT09IDEpIHsgdGhyb3cgRXJyb3IoXCJFeHBvbmVudGlhdGlvbiB3aXRoIHJhdGlvbmFsIHBvd2VycyBub3Qgc3VwcG9ydGVkLlwiKTsgfVxyXG5cdFx0XHRyZXR1cm4gbmV3IFJhdGlvbmFsTnVtYmVyKHRoaXMubnVtZXJhdG9yICoqIHgubnVtZXJhdG9yLCB0aGlzLmRlbm9taW5hdG9yICoqIHgubnVtZXJhdG9yKTtcclxuXHRcdH1cclxuXHR9XHJcblx0cHVibGljIHRvTnVtYmVyKCk6IG51bWJlciB7XHJcblx0XHRyZXR1cm4gdGhpcy5udW1lcmF0b3IgLyB0aGlzLmRlbm9taW5hdG9yO1xyXG5cdH1cclxuXHRwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcclxuXHRcdHJldHVybiB0aGlzLm51bWVyYXRvci50b1N0cmluZygpICsgKDEgPT09IHRoaXMuZGVub21pbmF0b3IgPyBcIlwiIDogXCIvXCIgKyB0aGlzLmRlbm9taW5hdG9yLnRvU3RyaW5nKCkpO1xyXG5cdH1cclxuXHRwdWJsaWMgZGVlcENvcHkoKTogUmF0aW9uYWxOdW1iZXIge1xyXG5cdFx0cmV0dXJuIG5ldyBSYXRpb25hbE51bWJlcih0aGlzLm51bWVyYXRvciwgdGhpcy5kZW5vbWluYXRvcik7XHJcblx0fVxyXG59IiwiZXhwb3J0IGNsYXNzIFN0YWNrPFQ+IHtcclxuXHRwcml2YXRlIHN0YWNrOiBUW107XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLnN0YWNrID0gW107XHJcblx0fVxyXG5cdHB1YmxpYyBpc0VtcHR5KCk6IGJvb2xlYW4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuc3RhY2subGVuZ3RoID09PSAwO1xyXG5cdH1cclxuXHRwdWJsaWMgcHVzaChlbGVtZW50OiBUKTogdm9pZCB7XHJcblx0XHR0aGlzLnN0YWNrLnB1c2goZWxlbWVudCk7XHJcblx0fVxyXG5cdHB1YmxpYyBwb3AoKTogVCB7XHJcblx0XHRpZiAodGhpcy5pc0VtcHR5KCkpIHsgdGhyb3cgbmV3IEVycm9yKFwiU3RhY2sgaXMgZW1wdHlcIik7IH1cclxuXHRcdHJldHVybiB0aGlzLnN0YWNrLnBvcCgpO1xyXG5cdH1cclxuXHRwdWJsaWMgcGVlaygpOiBUIHtcclxuXHRcdGlmICh0aGlzLmlzRW1wdHkoKSkgeyB0aHJvdyBuZXcgRXJyb3IoXCJTdGFjayBpcyBlbXB0eVwiKTsgfVxyXG5cdFx0cmV0dXJuIHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXTtcclxuXHR9XHJcblx0cHVibGljIHRvQXJyYXkoKTogVFtdIHtcclxuXHRcdHJldHVybiB0aGlzLnN0YWNrO1xyXG5cdH1cclxufSIsImltcG9ydCB7IE1hdHJpeCB9IGZyb20gXCIuL01hdHJpeFwiO1xyXG5pbXBvcnQgeyBSYXRpb25hbE51bWJlciB9IGZyb20gXCIuL1JhdGlvbmFsTnVtYmVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVmVjdG9yIHtcclxuXHRwdWJsaWMgc3RhdGljIGFyZUxpbmVhcmx5SW5kZXBlbmRlbnQodmVjdG9yczogVmVjdG9yW10pOiBib29sZWFuIHtcclxuXHRcdGNvbnN0IG06IG51bWJlciA9IHZlY3RvcnMubGVuZ3RoO1xyXG5cdFx0aWYgKDAgPT09IG0pIHsgcmV0dXJuIHRydWU7IH1cclxuXHRcdGNvbnN0IG46IG51bWJlciA9IHZlY3RvcnNbMF0ubTtcclxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDE7IGkgPCB2ZWN0b3JzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGlmIChuICE9PSB2ZWN0b3JzW2ldLm0pIHsgdGhyb3cgbmV3IEVycm9yKFwiTWlzbWF0Y2hlZCBkaW1lbnNpb25zLlwiKTsgfVxyXG5cdFx0fVxyXG5cdFx0aWYgKG0gPiBuKSB7IHJldHVybiBmYWxzZTsgfVxyXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiTm90IGltcGxlbWVudGVkLlwiKTtcclxuXHR9XHJcblx0cHVibGljIG06IG51bWJlcjtcclxuXHRwdWJsaWMgZWxlbWVudHM6IFJhdGlvbmFsTnVtYmVyW107XHJcblx0Y29uc3RydWN0b3IobjogbnVtYmVyIHwgbnVtYmVyW10pO1xyXG5cdGNvbnN0cnVjdG9yKG46IGFueSkge1xyXG5cdFx0aWYgKHR5cGVvZiBuID09PSBcIm51bWJlclwiKSB7XHJcblx0XHRcdHRoaXMubSA9IG47XHJcblx0XHRcdHRoaXMuZWxlbWVudHMgPSBbXTtcclxuXHRcdH0gZWxzZSBpZiAobiBpbnN0YW5jZW9mIEFycmF5KSB7XHJcblx0XHRcdHRoaXMubSA9IG4ubGVuZ3RoO1xyXG5cdFx0XHR0aGlzLmVsZW1lbnRzID0gW107XHJcblx0XHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLm07IGkrKykge1xyXG5cdFx0XHRcdHRoaXMuZWxlbWVudHNbaV0gPSBuZXcgUmF0aW9uYWxOdW1iZXIobltpXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0cHVibGljIGFkZCh4OiBWZWN0b3IpOiBWZWN0b3Ige1xyXG5cdFx0aWYgKHRoaXMubSAhPT0geC5tKSB7IHRocm93IG5ldyBFcnJvcihcIk1pc21hdGNoZWQgZGltZW5zaW9ucy5cIik7IH1cclxuXHRcdGNvbnN0IHJlczogVmVjdG9yID0gbmV3IFZlY3Rvcih0aGlzLm0pO1xyXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHJlcy5tOyBpKyspIHtcclxuXHRcdFx0cmVzLmVsZW1lbnRzW2ldID0gdGhpcy5lbGVtZW50c1tpXS5hZGQoeC5lbGVtZW50c1tpXSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzO1xyXG5cdH1cclxuXHRwdWJsaWMgc3ViKHg6IFZlY3Rvcik6IFZlY3RvciB7XHJcblx0XHRpZiAodGhpcy5tICE9PSB4Lm0pIHsgdGhyb3cgbmV3IEVycm9yKFwiTWlzbWF0Y2hlZCBkaW1lbnNpb25zLlwiKTsgfVxyXG5cdFx0Y29uc3QgcmVzOiBWZWN0b3IgPSBuZXcgVmVjdG9yKHRoaXMubSk7XHJcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgcmVzLm07IGkrKykge1xyXG5cdFx0XHRyZXMuZWxlbWVudHNbaV0gPSB0aGlzLmVsZW1lbnRzW2ldLnN1Yih4LmVsZW1lbnRzW2ldKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiByZXM7XHJcblx0fVxyXG5cdHB1YmxpYyBtdWx0KHg6IFJhdGlvbmFsTnVtYmVyKTogVmVjdG9yIHtcclxuXHRcdGNvbnN0IHJlczogVmVjdG9yID0gbmV3IFZlY3Rvcih0aGlzLm0pO1xyXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHJlcy5tOyBpKyspIHtcclxuXHRcdFx0cmVzLmVsZW1lbnRzW2ldID0gdGhpcy5lbGVtZW50c1tpXS5tdWx0KHgpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlcztcclxuXHR9XHJcblx0Ly8gW0FMSUFTRVNdOiBpbm5lclByb2R1Y3QsIHByb2plY3Rpb25Qcm9kdWN0LCBzY2FsYXJQcm9kdWN0XHJcblx0cHVibGljIGRvdFByb2R1Y3QoeDogVmVjdG9yKTogUmF0aW9uYWxOdW1iZXIge1xyXG5cdFx0aWYgKHRoaXMubSAhPT0geC5tKSB7IHRocm93IG5ldyBFcnJvcihcIk1pc21hdGNoZWQgZGltZW5zaW9ucy5cIik7IH1cclxuXHRcdGxldCByZXM6IFJhdGlvbmFsTnVtYmVyID0gbmV3IFJhdGlvbmFsTnVtYmVyKDApO1xyXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHgubTsgaSsrKSB7XHJcblx0XHRcdHJlcyA9IHJlcy5hZGQodGhpcy5lbGVtZW50c1tpXS5tdWx0KHguZWxlbWVudHNbaV0pKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiByZXM7XHJcblx0fVxyXG5cdC8vIFtBTElBU0VTXTogZGlyZWN0ZWRBcmVhUHJvZHVjdCwgdmVjdG9yUHJvZHVjdFxyXG5cdHB1YmxpYyBjcm9zc1Byb2R1Y3QoeDogVmVjdG9yKTogVmVjdG9yIHtcclxuXHRcdHRocm93IG5ldyBFcnJvcihcIk5vdCBpbXBsZW1lbnRlZC5cIik7XHJcblx0fVxyXG5cdC8vIFtBTElBU0VTXTogbWFnbml0dWRlLCBub3JtXHJcblx0cHVibGljIGxlbmd0aCgpOiBSYXRpb25hbE51bWJlciB7XHJcblx0XHRjb25zdCBsZW5ndGg6IFJhdGlvbmFsTnVtYmVyID0gbmV3IFJhdGlvbmFsTnVtYmVyKDApO1xyXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMubTsgaSsrKSB7XHJcblx0XHRcdGxlbmd0aC5hZGQodGhpcy5lbGVtZW50c1tpXSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gbGVuZ3RoO1xyXG5cdH1cclxuXHRwdWJsaWMgZGVlcENvcHkoKTogVmVjdG9yIHtcclxuXHRcdGNvbnN0IHJldDogVmVjdG9yID0gbmV3IFZlY3Rvcih0aGlzLm0pO1xyXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMubTsgaSsrKSB7XHJcblx0XHRcdHJldC5lbGVtZW50c1tpXSA9IHRoaXMuZWxlbWVudHNbaV07XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmV0O1xyXG5cdH1cclxuXHRwdWJsaWMgdG9NYXRyaXgoKTogTWF0cml4IHtcclxuXHRcdGNvbnN0IHJldDogTWF0cml4ID0gbmV3IE1hdHJpeCh0aGlzLm0sIDEpO1xyXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMubTsgaSsrKSB7XHJcblx0XHRcdHJldC5lbGVtZW50c1tpXVswXSA9IHRoaXMuZWxlbWVudHNbaV07XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmV0O1xyXG5cdH1cclxufVxyXG5leHBvcnQgY2xhc3MgQ29sdW1uVmVjdG9yIGV4dGVuZHMgVmVjdG9yIHtcclxufVxyXG5leHBvcnQgY2xhc3MgUm93VmVjdG9yIGV4dGVuZHMgVmVjdG9yIHtcclxuXHRwdWJsaWMgbWF0cml4UHJvZHVjdChtOiBNYXRyaXgpOiBSb3dWZWN0b3Ige1xyXG5cdFx0aWYgKHRoaXMubSAhPT0gbS5uKSB7IHRocm93IG5ldyBFcnJvcihcIk1pc21hdGNoZWQgZGltZW5zaW9ucy5cIik7IH1cclxuXHRcdGNvbnN0IHJlczogUm93VmVjdG9yID0gbmV3IFJvd1ZlY3Rvcih0aGlzLm0pO1xyXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMubTsgaSsrKSB7XHJcblx0XHRcdGxldCBzdW06IFJhdGlvbmFsTnVtYmVyID0gbmV3IFJhdGlvbmFsTnVtYmVyKDApO1xyXG5cdFx0XHRmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgbS5uOyBqKyspIHtcclxuXHRcdFx0XHRzdW0gPSBzdW0uYWRkKG0uZWxlbWVudHNbaV1bal0ubXVsdCh0aGlzLmVsZW1lbnRzW2ldKSk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmVzLmVsZW1lbnRzW2ldID0gc3VtO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlcztcclxuXHR9XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdGlmICghKG1vZHVsZUlkIGluIF9fd2VicGFja19tb2R1bGVzX18pKSB7XG5cdFx0ZGVsZXRlIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgTWF0cml4UHJlc2VudGVyIH0gZnJvbSBcIi4uL3ByZXNlbnRlcnMvTWF0cml4UHJlc2VudGVyXCI7XHJcbmltcG9ydCB7IE1hdHJpeCwgTWF0cml4SWRlbnRpdHkgfSBmcm9tIFwiLi4vc3RydWN0dXJlcy9NYXRyaXhcIjtcclxuaW1wb3J0IHsgUmF0aW9uYWxOdW1iZXIgfSBmcm9tIFwiLi4vc3RydWN0dXJlcy9SYXRpb25hbE51bWJlclwiO1xyXG5pbXBvcnQgeyBTdGFjayB9IGZyb20gXCIuLi9zdHJ1Y3R1cmVzL1N0YWNrXCI7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcblx0ZnVuY3Rpb24gdG9nZ2xlKGlkOiBzdHJpbmcpIHtcclxuXHRcdGNvbnN0IGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG5cdFx0aWYgKGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9PSAnbm9uZScpIHtcclxuXHRcdFx0ZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0ZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcblx0XHR9XHJcblx0fVxyXG5cdGxldCB1bmRvU3RhY2s6IFN0YWNrPE1hdHJpeD47XHJcblx0bGV0IHJlZG9TdGFjazogU3RhY2s8TWF0cml4PjtcclxuXHRjb25zdCBpbml0aWFsTWF0cml4OiBNYXRyaXggPSBNYXRyaXgucmFuZG9tU3F1YXJlKCk7XHJcblx0bGV0IHdvcmtpbmdNYXRyaXg6IE1hdHJpeCA9IG51bGw7XHJcblx0bGV0IG9wZXJhdGlvbkRpdklkeDogbnVtYmVyID0gMDtcclxuXHRpbml0KCk7XHJcblx0TWF0cml4UHJlc2VudGVyLnByaW50VGFibGVNYXRyaXgoaW5pdGlhbE1hdHJpeCwgPEhUTUxEaXZFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKSk7XHJcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG5BdWdtZW50TWF0cml4XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVycm9yXCIpLmlubmVyVGV4dCA9IFwiXCI7XHJcblx0XHRwcmVQcm9jZXNzT3BlcmF0aW9uKCk7XHJcblx0XHRpZiAoXCJBXCIgPT09ICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlbEF1Z21lbnRPcHRpb25zMVwiKSkudmFsdWUpIHtcclxuXHRcdFx0d29ya2luZ01hdHJpeCA9IGluaXRpYWxNYXRyaXguZGVlcENvcHkoKTtcclxuXHRcdH1cclxuXHRcdGlmIChcIklcIiA9PT0gKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VsQXVnbWVudE9wdGlvbnMxXCIpKS52YWx1ZSkge1xyXG5cdFx0XHR3b3JraW5nTWF0cml4ID0gbmV3IE1hdHJpeElkZW50aXR5KGluaXRpYWxNYXRyaXgubSk7XHJcblx0XHR9XHJcblx0XHRpZiAoXCJBXCIgPT09ICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlbEF1Z21lbnRPcHRpb25zMlwiKSkudmFsdWUpIHtcclxuXHRcdFx0d29ya2luZ01hdHJpeCA9IE1hdHJpeC5hdWdtZW50KHdvcmtpbmdNYXRyaXgsIGluaXRpYWxNYXRyaXgpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKFwiSVwiID09PSAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWxBdWdtZW50T3B0aW9uczJcIikpLnZhbHVlKSB7XHJcblx0XHRcdHdvcmtpbmdNYXRyaXggPSBNYXRyaXguYXVnbWVudCh3b3JraW5nTWF0cml4LCBuZXcgTWF0cml4SWRlbnRpdHkoaW5pdGlhbE1hdHJpeC5tKSk7XHJcblx0XHR9XHJcblx0XHRwb3N0UHJvY2Vzc09wZXJhdGlvbihcIkF1Z21lbnRlZCBcIiArICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlbEF1Z21lbnRPcHRpb25zMVwiKSkudmFsdWUgKyBcIiB3aXRoIFwiICsgKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VsQXVnbWVudE9wdGlvbnMyXCIpKS52YWx1ZSArIFwiLlwiKTtcclxuXHR9KTtcclxuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0blN3aXRjaFJvd3NcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXJyb3JcIikuaW5uZXJUZXh0ID0gXCJcIjtcclxuXHRcdGNvbnN0IGlkeFJvdzE6IG51bWJlciA9IE51bWJlcigoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb3cxXCIpKS52YWx1ZSkgLSAxO1xyXG5cdFx0Y29uc3QgaWR4Um93MjogbnVtYmVyID0gTnVtYmVyKCg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvdzJcIikpLnZhbHVlKSAtIDE7XHJcblx0XHRpZiAoMCA+IGlkeFJvdzEgfHwgd29ya2luZ01hdHJpeC5tIDwgaWR4Um93MSB8fCAwID4gaWR4Um93MiB8fCB3b3JraW5nTWF0cml4Lm0gPCBpZHhSb3cyKSB7XHJcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXJyb3JcIikuaW5uZXJUZXh0ID0gXCJSb3cgaW5kZXggbXVzdCBiZSBncmVhdGVyIHRoYW4gMCBhbmQgc21hbGxlciB0aGFuIFwiICsgd29ya2luZ01hdHJpeC5tO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRwcmVQcm9jZXNzT3BlcmF0aW9uKCk7XHJcblx0XHR3b3JraW5nTWF0cml4LnN3aXRjaFJvd3MoaWR4Um93MSwgaWR4Um93Mik7XHJcblx0XHRwb3N0UHJvY2Vzc09wZXJhdGlvbihcIlN3aXRjaGVkIHJvdyBcIiArICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvdzFcIikpLnZhbHVlICsgXCIgd2l0aCByb3cgXCIgKyAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb3cyXCIpKS52YWx1ZSArIFwiLlwiKTtcclxuXHR9KTtcclxuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bk11bHRpcGx5Um93XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVycm9yXCIpLmlubmVyVGV4dCA9IFwiXCI7XHJcblx0XHRjb25zdCBpZHhSb3c6IG51bWJlciA9IE51bWJlcigoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb3dJZHhcIikpLnZhbHVlKSAtIDE7XHJcblx0XHRjb25zdCBzY2FsYXI6IFJhdGlvbmFsTnVtYmVyID0gUmF0aW9uYWxOdW1iZXIuZnJvbVN0cmluZygoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzY2FsYXJcIikpLnZhbHVlKTtcclxuXHRcdGlmICgwID4gaWR4Um93IHx8IHdvcmtpbmdNYXRyaXgubSA8IGlkeFJvdykge1xyXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVycm9yXCIpLmlubmVyVGV4dCA9IFwiUm93IGluZGV4IG11c3QgYmUgZ3JlYXRlciB0aGFuIDAgYW5kIHNtYWxsZXIgdGhhbiBcIiArIHdvcmtpbmdNYXRyaXgubTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0cHJlUHJvY2Vzc09wZXJhdGlvbigpO1xyXG5cdFx0d29ya2luZ01hdHJpeC5tdWx0aXBseVJvdyhpZHhSb3csIHNjYWxhcik7XHJcblx0XHRwb3N0UHJvY2Vzc09wZXJhdGlvbihcIk11bHRpcGxpZWQgcm93IFwiICsgKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm93SWR4XCIpKS52YWx1ZSArIFwiIHdpdGggc2NhbGFyXCIgKyAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzY2FsYXJcIikpLnZhbHVlICsgXCIuXCIpO1xyXG5cdH0pO1xyXG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuQWRkUm93c1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlcnJvclwiKS5pbm5lclRleHQgPSBcIlwiO1xyXG5cdFx0Y29uc3QgaWR4Um93MTogbnVtYmVyID0gTnVtYmVyKCg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFJvdzFJZHhcIikpLnZhbHVlKSAtIDE7XHJcblx0XHRjb25zdCBpZHhSb3cyOiBudW1iZXIgPSBOdW1iZXIoKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkUm93MklkeFwiKSkudmFsdWUpIC0gMTtcclxuXHRcdGNvbnN0IHNjYWxhcjE6IFJhdGlvbmFsTnVtYmVyID0gUmF0aW9uYWxOdW1iZXIuZnJvbVN0cmluZygoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRSb3cxTXVsdFwiKSkudmFsdWUpO1xyXG5cdFx0Y29uc3Qgc2NhbGFyMjogUmF0aW9uYWxOdW1iZXIgPSBSYXRpb25hbE51bWJlci5mcm9tU3RyaW5nKCg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFJvdzJNdWx0XCIpKS52YWx1ZSk7XHJcblx0XHRpZiAoMCA+IGlkeFJvdzEgfHwgd29ya2luZ01hdHJpeC5tIDwgaWR4Um93MSB8fCAwID4gaWR4Um93MiB8fCB3b3JraW5nTWF0cml4Lm0gPCBpZHhSb3cyKSB7XHJcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXJyb3JcIikuaW5uZXJUZXh0ID0gXCJSb3cgaW5kZXggbXVzdCBiZSBncmVhdGVyIHRoYW4gMCBhbmQgc21hbGxlciB0aGFuIFwiICsgd29ya2luZ01hdHJpeC5tO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRwcmVQcm9jZXNzT3BlcmF0aW9uKCk7XHJcblx0XHR3b3JraW5nTWF0cml4LmFkZFJvdzFUb1JvdzIoaWR4Um93MSwgc2NhbGFyMSwgaWR4Um93Miwgc2NhbGFyMik7XHJcblx0XHRwb3N0UHJvY2Vzc09wZXJhdGlvbihgQWRkZWQgJHtzY2FsYXIxfSB0aW1lKHMpIHJvdyAkeyg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFJvdzFJZHhcIikpLnZhbHVlfSB0byAke3NjYWxhcjJ9IHRpbWUocykgcm93ICR7KDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkUm93MklkeFwiKSkudmFsdWV9LmApO1xyXG5cdH0pO1xyXG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuVW5kb1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG5cdFx0aWYgKHVuZG9TdGFjay5pc0VtcHR5KCkpIHsgcmV0dXJuOyB9XHJcblx0XHRyZWRvU3RhY2sucHVzaChudWxsICE9IHdvcmtpbmdNYXRyaXggPyB3b3JraW5nTWF0cml4LmRlZXBDb3B5KCkgOiBudWxsKTtcclxuXHRcdHdvcmtpbmdNYXRyaXggPSB1bmRvU3RhY2sucG9wKCk7XHJcblx0XHRsZXQgZGl2SWQ6IHN0cmluZyA9IFwib3BlcmF0aW9uRGl2XCIgKyBvcGVyYXRpb25EaXZJZHg7XHJcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIlwiICsgZGl2SWQpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHRcdGNvbnN0IGJ1dHRvbklkOiBzdHJpbmcgPSBcInRvZ2dsZUJ1dHRvblwiICsgb3BlcmF0aW9uRGl2SWR4O1xyXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJcIiArIGJ1dHRvbklkKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblx0XHQtLW9wZXJhdGlvbkRpdklkeDtcclxuXHRcdGRpdklkID0gXCJvcGVyYXRpb25EaXZcIiArIG9wZXJhdGlvbkRpdklkeDtcclxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiXCIgKyBkaXZJZCkuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHRcdHNldEVkaXRPcGVyYXRpb25zKCk7XHJcblx0XHRzZXRBdmFpbGFibGVPcGVyYXRpb25zKCk7XHJcblx0fSk7XHJcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG5SZWRvXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcblx0XHRpZiAocmVkb1N0YWNrLmlzRW1wdHkoKSkgeyByZXR1cm47IH1cclxuXHRcdHVuZG9TdGFjay5wdXNoKG51bGwgIT0gd29ya2luZ01hdHJpeCA/IHdvcmtpbmdNYXRyaXguZGVlcENvcHkoKSA6IG51bGwpO1xyXG5cdFx0d29ya2luZ01hdHJpeCA9IHJlZG9TdGFjay5wb3AoKTtcclxuXHRcdGxldCBkaXZJZDogc3RyaW5nID0gXCJvcGVyYXRpb25EaXZcIiArIG9wZXJhdGlvbkRpdklkeDtcclxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiXCIgKyBkaXZJZCkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cdFx0KytvcGVyYXRpb25EaXZJZHg7XHJcblx0XHRkaXZJZCA9IFwib3BlcmF0aW9uRGl2XCIgKyBvcGVyYXRpb25EaXZJZHg7XHJcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIlwiICsgZGl2SWQpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcblx0XHRjb25zdCBidXR0b25JZDogc3RyaW5nID0gXCJ0b2dnbGVCdXR0b25cIiArIG9wZXJhdGlvbkRpdklkeDtcclxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiXCIgKyBidXR0b25JZCkuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHRcdHNldEVkaXRPcGVyYXRpb25zKCk7XHJcblx0XHRzZXRBdmFpbGFibGVPcGVyYXRpb25zKCk7XHJcblx0fSk7XHJcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG5SZXNldFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG5cdFx0aW5pdCgpO1xyXG5cdFx0d2hpbGUgKG9wZXJhdGlvbkRpdklkeCA+IDApIHtcclxuXHRcdFx0Y29uc3QgZGl2SWQ6IHN0cmluZyA9IFwib3BlcmF0aW9uRGl2XCIgKyBvcGVyYXRpb25EaXZJZHg7XHJcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiXCIgKyBkaXZJZCkucmVtb3ZlKCk7XHJcblx0XHRcdGNvbnN0IGJ1dHRvbklkOiBzdHJpbmcgPSBcInRvZ2dsZUJ1dHRvblwiICsgb3BlcmF0aW9uRGl2SWR4O1xyXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIlwiICsgYnV0dG9uSWQpLnJlbW92ZSgpO1xyXG5cdFx0XHQtLW9wZXJhdGlvbkRpdklkeDtcclxuXHRcdH1cclxuXHRcdHNldEVkaXRPcGVyYXRpb25zKCk7XHJcblx0XHRzZXRBdmFpbGFibGVPcGVyYXRpb25zKCk7XHJcblx0fSk7XHJcblx0ZnVuY3Rpb24gaW5pdCgpOiB2b2lkIHtcclxuXHRcdHVuZG9TdGFjayA9IG5ldyBTdGFjazxNYXRyaXg+KCk7XHJcblx0XHRyZWRvU3RhY2sgPSBuZXcgU3RhY2s8TWF0cml4PigpO1xyXG5cdFx0d29ya2luZ01hdHJpeCA9IG51bGw7XHJcblx0XHRzZXRFZGl0T3BlcmF0aW9ucygpO1xyXG5cdFx0c2V0QXZhaWxhYmxlT3BlcmF0aW9ucygpO1xyXG5cdH1cclxuXHRmdW5jdGlvbiBwcmVQcm9jZXNzT3BlcmF0aW9uKCk6IHZvaWQge1xyXG5cdFx0dW5kb1N0YWNrLnB1c2gobnVsbCAhPSB3b3JraW5nTWF0cml4ID8gd29ya2luZ01hdHJpeC5kZWVwQ29weSgpIDogbnVsbCk7XHJcblx0fVxyXG5cdGZ1bmN0aW9uIHBvc3RQcm9jZXNzT3BlcmF0aW9uKHRpdGxlOiBzdHJpbmcpOiB2b2lkIHtcclxuXHRcdGNsZWFyUmVkbygpO1xyXG5cdFx0aWYgKG9wZXJhdGlvbkRpdklkeCA+IDApIHsgdG9nZ2xlKFwib3BlcmF0aW9uRGl2XCIgKyBvcGVyYXRpb25EaXZJZHgpOyB9XHJcblx0XHQrK29wZXJhdGlvbkRpdklkeDtcclxuXHRcdGNvbnN0IGRpdklkOiBzdHJpbmcgPSBcIm9wZXJhdGlvbkRpdlwiICsgb3BlcmF0aW9uRGl2SWR4O1xyXG5cdFx0Y29uc3QgZGl2OiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0XHRkaXYuaWQgPSBkaXZJZDtcclxuXHRcdGNvbnN0IGJ1dHRvbklkOiBzdHJpbmcgPSBcInRvZ2dsZUJ1dHRvblwiICsgb3BlcmF0aW9uRGl2SWR4O1xyXG5cdFx0Y29uc3QgdG9nZ2xlQnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcblx0XHR0b2dnbGVCdXR0b24uaWQgPSBidXR0b25JZDtcclxuXHRcdHRvZ2dsZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwib3BlcmF0aW9uQnV0dG9uXCIpO1xyXG5cdFx0dG9nZ2xlQnV0dG9uLnRleHRDb250ZW50ID0gdGl0bGU7XHJcblx0XHR0b2dnbGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuXHRcdFx0dG9nZ2xlKGRpdklkKTtcclxuXHRcdH0pO1xyXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpLmFwcGVuZCh0b2dnbGVCdXR0b24pO1xyXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpLmFwcGVuZChkaXYpO1xyXG5cdFx0TWF0cml4UHJlc2VudGVyLnByaW50VGFibGVNYXRyaXgod29ya2luZ01hdHJpeCwgZGl2KTtcclxuXHRcdGlmICh3b3JraW5nTWF0cml4LmlzUmVkdWNlZFJvd0VjaGVsb25Gb3JtKCkpIHtcclxuXHRcdFx0dG9nZ2xlQnV0dG9uLmFwcGVuZChcIiBNYXRyaXggaXMgaW4gcmVkdWNlZCByb3cgZXNjaGVsb24gZm9ybS5cIik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAod29ya2luZ01hdHJpeC5pc1Jvd0VjaGVsb25Gb3JtKCkpIHtcclxuXHRcdFx0XHR0b2dnbGVCdXR0b24uYXBwZW5kKFwiIE1hdHJpeCBpcyBpbiByb3cgZXNjaGVsb24gZm9ybS5cIik7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdCg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlbEF1Z21lbnRPcHRpb25zMVwiKSkudmFsdWUgPSBcIlwiO1xyXG5cdFx0KDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VsQXVnbWVudE9wdGlvbnMyXCIpKS52YWx1ZSA9IFwiXCI7XHJcblx0XHQoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb3cxXCIpKS52YWx1ZSA9IFwiXCI7XHJcblx0XHQoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb3cyXCIpKS52YWx1ZSA9IFwiXCI7XHJcblx0XHQoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb3dJZHhcIikpLnZhbHVlID0gXCJcIjtcclxuXHRcdCg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNjYWxhclwiKSkudmFsdWUgPSBcIjFcIjtcclxuXHRcdCg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFJvdzFJZHhcIikpLnZhbHVlID0gXCJcIjtcclxuXHRcdCg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFJvdzFNdWx0XCIpKS52YWx1ZSA9IFwiMVwiO1xyXG5cdFx0KDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkUm93MklkeFwiKSkudmFsdWUgPSBcIlwiO1xyXG5cdFx0KDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkUm93Mk11bHRcIikpLnZhbHVlID0gXCIxXCI7XHJcblx0XHRzZXRFZGl0T3BlcmF0aW9ucygpO1xyXG5cdFx0c2V0QXZhaWxhYmxlT3BlcmF0aW9ucygpO1xyXG5cdH1cclxuXHRmdW5jdGlvbiBzZXRFZGl0T3BlcmF0aW9ucygpOiB2b2lkIHtcclxuXHRcdGlmICh1bmRvU3RhY2suaXNFbXB0eSgpKSB7XHJcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuVW5kb1wiKS5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkXCIpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG5VbmRvXCIpLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHJlZG9TdGFjay5pc0VtcHR5KCkpIHtcclxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG5SZWRvXCIpLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0blJlZG9cIikucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XHJcblx0XHR9XHJcblx0fVxyXG5cdGZ1bmN0aW9uIGNsZWFyUmVkbygpOiB2b2lkIHtcclxuXHRcdGxldCBpOiBudW1iZXIgPSBvcGVyYXRpb25EaXZJZHg7XHJcblx0XHR3aGlsZSAoIXJlZG9TdGFjay5pc0VtcHR5KCkpIHtcclxuXHRcdFx0KytpO1xyXG5cdFx0XHRjb25zdCBkaXZJZDogc3RyaW5nID0gXCJvcGVyYXRpb25EaXZcIiArIGk7XHJcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiXCIgKyBkaXZJZCkucmVtb3ZlKCk7XHJcblx0XHRcdGNvbnN0IGJ1dHRvbklkOiBzdHJpbmcgPSBcInRvZ2dsZUJ1dHRvblwiICsgaTtcclxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJcIiArIGJ1dHRvbklkKS5yZW1vdmUoKTtcclxuXHRcdFx0cmVkb1N0YWNrLnBvcCgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gc2V0QXZhaWxhYmxlT3BlcmF0aW9ucygpOiB2b2lkIHtcclxuXHRcdGlmIChudWxsID09IHdvcmtpbmdNYXRyaXgpIHtcclxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXZBdWdtZW50TWF0cml4XCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGl2U3dpdGNoUm93c1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGl2TXVsdGlwbHlSb3dcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpdkFkZFJvd3NcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXZBdWdtZW50TWF0cml4XCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXZTd2l0Y2hSb3dzXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGl2TXVsdGlwbHlSb3dcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXZBZGRSb3dzXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcblx0XHR9XHJcblx0fVxyXG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=