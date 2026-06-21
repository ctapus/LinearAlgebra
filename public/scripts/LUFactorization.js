/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/generators/ALUGenerator.ts"
/*!****************************************!*\
  !*** ./src/generators/ALUGenerator.ts ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ALUGenerator: () => (/* binding */ ALUGenerator)
/* harmony export */ });
/* harmony import */ var _structures_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../structures/Matrix */ "./src/structures/Matrix.ts");
/* harmony import */ var _structures_RationalNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../structures/RationalNumber */ "./src/structures/RationalNumber.ts");


class ALUGenerator {
    probabilityToBeSquare = 0.8; // 80% to generate a square matrix
    isSquare = Math.random() <= this.probabilityToBeSquare;
    numberOfRowsMin = 3;
    numberOfRowsMax = 7;
    numberOfRows = Math.floor(Math.random() * (this.numberOfRowsMax - this.numberOfRowsMin) + this.numberOfRowsMin);
    numberOfColsMin = 3;
    numberOfColsMax = 7;
    numberOfCols = this.isSquare ? this.numberOfRows :
        Math.floor(Math.random() * (this.numberOfColsMax - this.numberOfColsMin) + this.numberOfColsMin);
    valueOfElementsMin = -10;
    valueOfElementsMax = 10;
    random() {
        // if A=LU for A mxn => L is mxm and U is mxn OR L is mxn and U is nxn
        const L = new _structures_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(this.numberOfRows, this.numberOfRows);
        for (let i = 0; i < L.m; i++) {
            for (let j = 0; j < L.n; j++) {
                if (i === j) {
                    L.elements[i][j] = this.randomNonZeroVariableValue(); // new RationalNumber(1);
                }
                else {
                    if (i > j) {
                        L.elements[i][j] = this.randomVariableValue();
                    }
                    else {
                        L.elements[i][j] = new _structures_RationalNumber__WEBPACK_IMPORTED_MODULE_1__.RationalNumber(0);
                    }
                }
            }
        }
        const U = new _structures_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(this.numberOfRows, this.numberOfCols);
        for (let i = 0; i < U.m; i++) {
            for (let j = 0; j < U.n; j++) {
                if (i === j) {
                    U.elements[i][j] = this.randomNonZeroVariableValue(); // new RationalNumber(1);
                }
                else {
                    if (i < j) {
                        U.elements[i][j] = this.randomVariableValue();
                    }
                    else {
                        U.elements[i][j] = new _structures_RationalNumber__WEBPACK_IMPORTED_MODULE_1__.RationalNumber(0);
                    }
                }
            }
        }
        return L.mult(U);
    }
    randomVariableValue() {
        return new _structures_RationalNumber__WEBPACK_IMPORTED_MODULE_1__.RationalNumber(Math.floor(Math.random() * (this.valueOfElementsMax - this.valueOfElementsMin) + this.valueOfElementsMin));
    }
    randomNonZeroVariableValue() {
        let r = this.randomVariableValue();
        while (r.numerator === 0) {
            r = this.randomVariableValue();
        }
        return r;
    }
}


/***/ },

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
/*!******************************************!*\
  !*** ./src/exercises/LUFactorization.ts ***!
  \******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _generators_ALUGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../generators/ALUGenerator */ "./src/generators/ALUGenerator.ts");
/* harmony import */ var _presenters_MatrixPresenter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../presenters/MatrixPresenter */ "./src/presenters/MatrixPresenter.ts");
/* harmony import */ var _structures_Matrix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../structures/Matrix */ "./src/structures/Matrix.ts");
/* harmony import */ var _structures_RationalNumber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../structures/RationalNumber */ "./src/structures/RationalNumber.ts");
/* harmony import */ var _structures_Stack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../structures/Stack */ "./src/structures/Stack.ts");





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
    const generator = new _generators_ALUGenerator__WEBPACK_IMPORTED_MODULE_0__.ALUGenerator();
    let undoStack;
    let redoStack;
    let undoLStack;
    let redoLStack;
    const initialMatrix = generator.random();
    let P = null;
    let A = null;
    let U = null;
    let L = null;
    let operationDivIdx = 0;
    init();
    _presenters_MatrixPresenter__WEBPACK_IMPORTED_MODULE_1__.MatrixPresenter.printTableMatrix(initialMatrix, document.getElementById("content"));
    document.getElementById("btnSwitchRows").addEventListener("click", () => {
        document.getElementById("error").textContent = "";
        const idxRow1 = Number(document.getElementById("row1").value) - 1;
        const idxRow2 = Number(document.getElementById("row2").value) - 1;
        if (0 > idxRow1 || A.m < idxRow1 || 0 > idxRow2 || A.m < idxRow2) {
            document.getElementById("error").textContent = "Row index must be greater than 0 and smaller than " + A.m;
            return;
        }
        preProcessOperation();
        P.switchRows(idxRow1, idxRow2);
        U.switchRows(idxRow1, idxRow2);
        L.switchRows(idxRow1, idxRow2);
        postProcessOperation("Switched row " + document.getElementById("row1").value + " with row " + document.getElementById("row2").value + ".");
    });
    document.getElementById("btnAddRows").addEventListener("click", () => {
        document.getElementById("error").textContent = "";
        const idxRow1 = Number(document.getElementById("addRow1Idx").value) - 1;
        const idxRow2 = Number(document.getElementById("addRow2Idx").value) - 1;
        const scalar = _structures_RationalNumber__WEBPACK_IMPORTED_MODULE_3__.RationalNumber.fromString(document.getElementById("addRow1Mult").value.toString());
        if (0 > idxRow1 || U.m < idxRow1 || 0 > idxRow2 || U.m < idxRow2) {
            document.getElementById("error").textContent = "Row index must be greater than 0 and smaller than " + U.m;
            return;
        }
        preProcessOperation();
        U.addRows(idxRow2, idxRow1, scalar);
        L.elements[idxRow2][idxRow1] = scalar.deepCopy().simplifiedForm()
            .mult(-1); // negative because it represents the inverse of an elimination matrix E
        postProcessOperation("Added " + scalar + " time(s) row " + document.getElementById("addRow1Idx").value + " to row" + document.getElementById("addRow2Idx").value + ".");
    });
    document.getElementById("btnUndo").addEventListener("click", () => {
        if (undoStack.isEmpty() || undoLStack.isEmpty()) {
            return;
        }
        redoStack.push(null != U ? U.deepCopy() : null);
        U = undoStack.pop();
        let divId = "operationDiv" + operationDivIdx;
        document.getElementById(divId).style.display = "none";
        const buttonId = "toggleButton" + operationDivIdx;
        document.getElementById(buttonId).style.display = "none";
        --operationDivIdx;
        divId = "operationDiv" + operationDivIdx;
        document.getElementById(divId).style.display = "block";
        setEditOperations();
        setAvailableOperations();
    });
    document.getElementById("btnRedo").addEventListener("click", () => {
        if (redoStack.isEmpty() || redoLStack.isEmpty()) {
            return;
        }
        undoStack.push(null != U ? U.deepCopy() : null);
        U = redoStack.pop();
        undoLStack.push(null != L ? L.deepCopy() : null);
        L = redoLStack.pop();
        let divId = "operationDiv" + operationDivIdx;
        document.getElementById(divId).style.display = "none";
        ++operationDivIdx;
        divId = "operationDiv" + operationDivIdx;
        document.getElementById(divId).style.display = "block";
        const buttonId = "toggleButton" + operationDivIdx;
        document.getElementById(buttonId).style.display = "block";
        setEditOperations();
        setAvailableOperations();
    });
    document.getElementById("btnReset").addEventListener("click", () => {
        init();
        while (operationDivIdx > 0) {
            const divId = "operationDiv" + operationDivIdx;
            document.getElementById(divId).remove();
            const buttonId = "toggleButton" + operationDivIdx;
            document.getElementById(buttonId).remove();
            --operationDivIdx;
        }
        setEditOperations();
        setAvailableOperations();
    });
    function init() {
        undoStack = new _structures_Stack__WEBPACK_IMPORTED_MODULE_4__.Stack();
        redoStack = new _structures_Stack__WEBPACK_IMPORTED_MODULE_4__.Stack();
        undoLStack = new _structures_Stack__WEBPACK_IMPORTED_MODULE_4__.Stack();
        redoLStack = new _structures_Stack__WEBPACK_IMPORTED_MODULE_4__.Stack();
        A = initialMatrix.deepCopy();
        U = initialMatrix.deepCopy();
        L = new _structures_Matrix__WEBPACK_IMPORTED_MODULE_2__.MatrixIdentity(U.m);
        P = new _structures_Matrix__WEBPACK_IMPORTED_MODULE_2__.MatrixIdentity(U.m);
        setEditOperations();
        setAvailableOperations();
    }
    function preProcessOperation() {
        undoStack.push(null != U ? U.deepCopy() : null);
        undoLStack.push(null != L ? L.deepCopy() : null);
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
        toggleButton.className = "operationButton";
        toggleButton.textContent = title;
        toggleButton.addEventListener("click", () => {
            toggle(divId);
        });
        document.getElementById("content").appendChild(toggleButton);
        document.getElementById("content").appendChild(div);
        const previousMatrix = undoStack.isEmpty() ? initialMatrix : undoStack.peek();
        const description = document.createElement("div");
        description.appendChild(document.createTextNode("L*U=P*A"));
        _presenters_MatrixPresenter__WEBPACK_IMPORTED_MODULE_1__.MatrixPresenter.printMatrixEquality2(L, "*", U, P, "*", A, description);
        div.append(description);
        if (U.isUpperTriangular()) {
            toggleButton.append(" U matrix found!");
        }
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
            document.getElementById(divId).remove();
            const buttonId = "toggleButton" + i;
            document.getElementById(buttonId).remove();
            redoStack.pop();
            redoLStack.pop();
        }
    }
    function setAvailableOperations() {
        if (null == U) {
            document.getElementById("divSwitchRows").style.display = "none";
            document.getElementById("divAddRows").style.display = "none";
        }
        else {
            document.getElementById("divSwitchRows").style.display = "block";
            document.getElementById("divAddRows").style.display = "block";
        }
    }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hELENBQUM7WUFDRCxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUN2QixDQUFDO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDWixDQUFDO0lBQ00sU0FBUztRQUNmLE1BQU0sR0FBRyxHQUFXLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9DLEtBQUssSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDekMsS0FBSyxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDekMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFDLENBQUM7UUFDRixDQUFDO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDWixDQUFDO0lBQ00sUUFBUTtRQUNkLE1BQU0sR0FBRyxHQUFXLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9DLEtBQUssSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDekMsS0FBSyxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDekMsR0FBRyxDQUFD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SyxRQUFRLEVBQUUsQ0FBQztZQUMzQixPQUFPLElBQUksY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDbkUsQ0FBQzthQUFNLENBQUM7WUFDUCxPQUFPLElBQUksY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDN0YsQ0FBQztJQUNGLENBQUM7SUFDTSxHQUFHLENBQUMsQ0FBMEI7UUFDcEMsSUFBSSxPQUFPLENBQUMsS0FBSyxRQUFRLEVBQUUsQ0FBQztZQUMzQixPQUFPLElBQUksY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbkUsQ0FBQzthQUFNLENBQUM7WUFDUCxPQUFPLElBQUksY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDN0YsQ0FBQztJQUNGLENBQUM7SUFDTSxHQUFHLENBQUMsQ0FBMEI7UUFDcEMsSUFBSSxPQUFPLENBQUMsS0FBSyxRQUFRLEVBQUUsQ0FBQztZQUMzQixPQUFPLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDdkUsQ0FBQzthQUFNLENBQUM7WUFDUCxJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssQ0FBQyxFQUFFLENBQUM7Z0JBQUMsTUFBTSxLQUFLLENBQUMsb0RBQW9ELENBQUMsQ0FBQztZQUFDLENBQUM7WUFDbEcsT0FBTyxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLENB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QUFNLEVBQUUsQ0FBQztZQUN4QyxNQUFNLFFBQVEsR0FBVyxjQUFjLEdBQUcsQ0FBQyxDQUFDO1lBQzVDLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDM0MsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ2hCLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNsQixDQUFDO0lBQ0YsQ0FBQztJQUVELFNBQVMsc0JBQXNCO1FBQzlCLElBQUksSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQ2YsUUFBUSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztZQUNoRSxRQUFRLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQzlELENBQUM7YUFBTSxDQUFDO1lBQ1AsUUFBUSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUNqRSxRQUFRLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQy9ELENBQUM7SUFDRixDQUFDO0FBQ0YsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saW5lYXJhbGdlYnJhLy4vc3JjL2dlbmVyYXRvcnMvQUxVR2VuZXJhdG9yLnRzIiwid2VicGFjazovL2xpbmVhcmFsZ2VicmEvLi9zcmMvcHJlc2VudGVycy9NYXRyaXhQcmVzZW50ZXIudHMiLCJ3ZWJwYWNrOi8vbGluZWFyYWxnZWJyYS8uL3NyYy9zdHJ1Y3R1cmVzL0FyaXRobWV0aWNFdmFsdWF0b3IudHMiLCJ3ZWJwYWNrOi8vbGluZWFyYWxnZWJyYS8uL3NyYy9zdHJ1Y3R1cmVzL01hdHJpeC50cyIsIndlYnBhY2s6Ly9saW5lYXJhbGdlYnJhLy4vc3JjL3N0cnVjdHVyZXMvUXVldWUudHMiLCJ3ZWJwYWNrOi8vbGluZWFyYWxnZWJyYS8uL3NyYy9zdHJ1Y3R1cmVzL1JhdGlvbmFsTnVtYmVyLnRzIiwid2VicGFjazovL2xpbmVhcmFsZ2VicmEvLi9zcmMvc3RydWN0dXJlcy9TdGFjay50cyIsIndlYnBhY2s6Ly9saW5lYXJhbGdlYnJhLy4vc3JjL3N0cnVjdHVyZXMvVmVjdG9yLnRzIiwid2VicGFjazovL2xpbmVhcmFsZ2VicmEvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbGluZWFyYWxnZWJyYS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbGluZWFyYWxnZWJyYS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2xpbmVhcmFsZ2VicmEvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9saW5lYXJhbGdlYnJhLy4vc3JjL2V4ZXJjaXNlcy9MVUZhY3Rvcml6YXRpb24udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWF0cml4IH0gZnJvbSBcIi4uL3N0cnVjdHVyZXMvTWF0cml4XCI7XHJcbmltcG9ydCB7IFJhdGlvbmFsTnVtYmVyIH0gZnJvbSBcIi4uL3N0cnVjdHVyZXMvUmF0aW9uYWxOdW1iZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBBTFVHZW5lcmF0b3Ige1xyXG5cdHB1YmxpYyBwcm9iYWJpbGl0eVRvQmVTcXVhcmU6IG51bWJlciA9IDAuODsgLy8gODAlIHRvIGdlbmVyYXRlIGEgc3F1YXJlIG1hdHJpeFxyXG5cdHB1YmxpYyBpc1NxdWFyZTogYm9vbGVhbiA9IE1hdGgucmFuZG9tKCkgPD0gdGhpcy5wcm9iYWJpbGl0eVRvQmVTcXVhcmU7XHJcblx0cHVibGljIG51bWJlck9mUm93c01pbjogbnVtYmVyID0gMztcclxuXHRwdWJsaWMgbnVtYmVyT2ZSb3dzTWF4OiBudW1iZXIgPSA3O1xyXG5cdHB1YmxpYyBudW1iZXJPZlJvd3M6IG51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICh0aGlzLm51bWJlck9mUm93c01heCAtIHRoaXMubnVtYmVyT2ZSb3dzTWluKSArIHRoaXMubnVtYmVyT2ZSb3dzTWluKTtcclxuXHRwdWJsaWMgbnVtYmVyT2ZDb2xzTWluOiBudW1iZXIgPSAzO1xyXG5cdHB1YmxpYyBudW1iZXJPZkNvbHNNYXg6IG51bWJlciA9IDc7XHJcblx0cHVibGljIG51bWJlck9mQ29sczogbnVtYmVyID0gdGhpcy5pc1NxdWFyZSA/IHRoaXMubnVtYmVyT2ZSb3dzIDpcclxuXHQgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHRoaXMubnVtYmVyT2ZDb2xzTWF4IC0gdGhpcy5udW1iZXJPZkNvbHNNaW4pICsgdGhpcy5udW1iZXJPZkNvbHNNaW4pO1xyXG5cdHB1YmxpYyB2YWx1ZU9mRWxlbWVudHNNaW46IG51bWJlciA9IC0xMDtcclxuXHRwdWJsaWMgdmFsdWVPZkVsZW1lbnRzTWF4OiBudW1iZXIgPSAxMDtcclxuXHRwdWJsaWMgcmFuZG9tKCk6IE1hdHJpeCB7XHJcblx0XHQvLyBpZiBBPUxVIGZvciBBIG14biA9PiBMIGlzIG14bSBhbmQgVSBpcyBteG4gT1IgTCBpcyBteG4gYW5kIFUgaXMgbnhuXHJcblx0XHRjb25zdCBMOiBNYXRyaXggPSBuZXcgTWF0cml4KHRoaXMubnVtYmVyT2ZSb3dzLCB0aGlzLm51bWJlck9mUm93cyk7XHJcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgTC5tOyBpKyspIHtcclxuXHRcdFx0Zm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IEwubjsgaisrKSB7XHJcblx0XHRcdFx0aWYgKGkgPT09IGopIHtcclxuXHRcdFx0XHRcdEwuZWxlbWVudHNbaV1bal0gPSB0aGlzLnJhbmRvbU5vblplcm9WYXJpYWJsZVZhbHVlKCk7IC8vIG5ldyBSYXRpb25hbE51bWJlcigxKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0aWYgKGkgPiBqKSB7XHJcblx0XHRcdFx0XHRcdEwuZWxlbWVudHNbaV1bal0gPSB0aGlzLnJhbmRvbVZhcmlhYmxlVmFsdWUoKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdEwuZWxlbWVudHNbaV1bal0gPSBuZXcgUmF0aW9uYWxOdW1iZXIoMCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRjb25zdCBVOiBNYXRyaXggPSBuZXcgTWF0cml4KHRoaXMubnVtYmVyT2ZSb3dzLCB0aGlzLm51bWJlck9mQ29scyk7XHJcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgVS5tOyBpKyspIHtcclxuXHRcdFx0Zm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IFUubjsgaisrKSB7XHJcblx0XHRcdFx0aWYgKGkgPT09IGopIHtcclxuXHRcdFx0XHRcdFUuZWxlbWVudHNbaV1bal0gPSB0aGlzLnJhbmRvbU5vblplcm9WYXJpYWJsZVZhbHVlKCk7IC8vIG5ldyBSYXRpb25hbE51bWJlcigxKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0aWYgKGkgPCBqKSB7XHJcblx0XHRcdFx0XHRcdFUuZWxlbWVudHNbaV1bal0gPSB0aGlzLnJhbmRvbVZhcmlhYmxlVmFsdWUoKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFUuZWxlbWVudHNbaV1bal0gPSBuZXcgUmF0aW9uYWxOdW1iZXIoMCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gTC5tdWx0KFUpO1xyXG5cdH1cclxuXHRwcml2YXRlIHJhbmRvbVZhcmlhYmxlVmFsdWUoKTogUmF0aW9uYWxOdW1iZXIge1xyXG5cdFx0cmV0dXJuIG5ldyBSYXRpb25hbE51bWJlcihNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAodGhpcy52YWx1ZU9mRWxlbWVudHNNYXggLSB0aGlzLnZhbHVlT2ZFbGVtZW50c01pbikgKyB0aGlzLnZhbHVlT2ZFbGVtZW50c01pbikpO1xyXG5cdH1cclxuXHRwcml2YXRlIHJhbmRvbU5vblplcm9WYXJpYWJsZVZhbHVlKCk6IFJhdGlvbmFsTnVtYmVyIHtcclxuXHRcdGxldCByOiBSYXRpb25hbE51bWJlciA9IHRoaXMucmFuZG9tVmFyaWFibGVWYWx1ZSgpO1xyXG5cdFx0d2hpbGUgKHIubnVtZXJhdG9yID09PSAwKSB7XHJcblx0XHRcdHIgPSB0aGlzLnJhbmRvbVZhcmlhYmxlVmFsdWUoKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiByO1xyXG5cdH1cclxufSIsImltcG9ydCB7IE1hdHJpeCB9IGZyb20gXCIuLi9zdHJ1Y3R1cmVzL01hdHJpeFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1hdHJpeFByZXNlbnRlciB7XHJcblx0cHVibGljIHN0YXRpYyBwcmludFRhYmxlTWF0cml4KG1hdHJpeDogTWF0cml4LCBjb250YWluZXI6IEhUTUxEaXZFbGVtZW50KTogdm9pZCB7XHJcblx0XHRsZXQgcm93RWNoZWxvbkZvcm06IGJvb2xlYW4gPSBtYXRyaXguaXNSb3dFY2hlbG9uRm9ybSgpO1xyXG5cdFx0bGV0IHJlZHVjZWRSb3dFY2hlbG9uRm9ybTogYm9vbGVhbiA9IHJvd0VjaGVsb25Gb3JtID8gbWF0cml4LmlzUmVkdWNlZFJvd0VjaGVsb25Gb3JtKCkgOiBmYWxzZTtcclxuXHRcdGxldCB0YWJsZTogSFRNTFRhYmxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcclxuXHRcdHRhYmxlLmNsYXNzTmFtZSA9IFwibWF0cml4XCI7XHJcblx0XHRpZiAocmVkdWNlZFJvd0VjaGVsb25Gb3JtKSB7XHJcblx0XHRcdHRhYmxlLmNsYXNzTmFtZSA9IFwicmVkdWNlZFJvd0VjaGVsb25NYXRyaXhcIjtcclxuXHRcdH0gZWxzZSBpZiAocm93RWNoZWxvbkZvcm0pIHtcclxuXHRcdFx0dGFibGUuY2xhc3NOYW1lID0gXCJyb3dFY2hlbG9uTWF0cml4XCI7XHJcblx0XHR9XHJcblx0XHRmb3IgKGxldCBpOm51bWJlciA9IDA7IGkgPCBtYXRyaXgubTsgaSsrKSB7XHJcblx0XHRcdGxldCB0cjogSFRNTFRhYmxlUm93RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuXHRcdFx0Zm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IG1hdHJpeC5uOyBqKyspIHtcclxuXHRcdFx0XHRsZXQgdGQ6IEhUTUxUYWJsZUNlbGxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG5cdFx0XHRcdHRkLmlubmVyVGV4dCA9IG1hdHJpeC5lbGVtZW50c1tpXVtqXS50b1N0cmluZygpO1xyXG5cdFx0XHRcdHRkLmNsYXNzTmFtZSA9IFwibWF0cml4RWxlbWVudFwiO1xyXG5cdFx0XHRcdGlmIChyZWR1Y2VkUm93RWNoZWxvbkZvcm0gJiYgaiA9PT0gaSkgeyB0ZC5jbGFzc05hbWUgPSBcInBpdm90RWxlbWVudFwiOyB9XHJcblx0XHRcdFx0dHIuYXBwZW5kKHRkKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0YWJsZS5hcHBlbmQodHIpO1xyXG5cdFx0fVxyXG5cdFx0Y29udGFpbmVyLmFwcGVuZCh0YWJsZSk7XHJcblx0XHRjb250YWluZXIuYXBwZW5kKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSk7XHJcblx0fVxyXG5cdHB1YmxpYyBzdGF0aWMgcHJpbnRNYXRyaXhFcXVhbGl0eShtYXRyaXgxOiBNYXRyaXgsIG9wZWFydG9yOiBzdHJpbmcsIG1hdHJpeDI6IE1hdHJpeCwgcmVzdWx0OiBNYXRyaXgsIGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQpOiB2b2lkIHtcclxuXHRcdGxldCB0YWJsZTogSFRNTFRhYmxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcclxuXHRcdGxldCB0cjA6IEhUTUxUYWJsZVJvd0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcblx0XHR0YWJsZS5hcHBlbmQodHIwKTtcclxuXHRcdGxldCB0ZDAxOiBIVE1MVGFibGVDZWxsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuXHRcdHRyMC5hcHBlbmQodGQwMSk7XHJcblx0XHRsZXQgdGQwMjogSFRNTFRhYmxlQ2VsbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcblx0XHR0ZDAyLmlubmVyVGV4dCA9IG9wZWFydG9yO1xyXG5cdFx0dGQwMi5zdHlsZS52ZXJ0aWNhbEFsaWduID0gXCJtaWRkbGVcIjtcclxuXHRcdHRkMDIuc3R5bGUucGFkZGluZ0xlZnQgPSBcIjVweFwiO1xyXG5cdFx0dGQwMi5zdHlsZS5wYWRkaW5nUmlnaHQgPSBcIjVweFwiO1xyXG5cdFx0dHIwLmFwcGVuZCh0ZDAyKTtcclxuXHRcdGxldCB0ZDAzOiBIVE1MVGFibGVDZWxsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuXHRcdHRyMC5hcHBlbmQodGQwMyk7XHJcblx0XHRsZXQgdGQwNDogSFRNTFRhYmxlQ2VsbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcblx0XHR0ZDA0LmlubmVyVGV4dCA9IFwiPVwiO1xyXG5cdFx0dGQwNC5zdHlsZS52ZXJ0aWNhbEFsaWduID0gXCJtaWRkbGVcIjtcclxuXHRcdHRkMDQuc3R5bGUucGFkZGluZ0xlZnQgPSBcIjVweFwiO1xyXG5cdFx0dGQwNC5zdHlsZS5wYWRkaW5nUmlnaHQgPSBcIjVweFwiO1xyXG5cdFx0dHIwLmFwcGVuZCh0ZDA0KTtcclxuXHRcdGxldCB0ZDA1OiBIVE1MVGFibGVDZWxsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuXHRcdHRyMC5hcHBlbmQodGQwNSk7XHJcblx0XHRsZXQgdGFibGUxOiBIVE1MVGFibGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xyXG5cdFx0dGFibGUxLmNsYXNzTmFtZSA9IFwibWF0cml4XCI7XHJcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgbWF0cml4MS5tOyBpKyspIHtcclxuXHRcdFx0bGV0IHRyOiBIVE1MVGFibGVSb3dFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG5cdFx0XHRmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgbWF0cml4MS5uOyBqKyspIHtcclxuXHRcdFx0XHRsZXQgdGQ6IEhUTUxUYWJsZUNlbGxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG5cdFx0XHRcdHRkLmlubmVyVGV4dCA9IG1hdHJpeDEuZWxlbWVudHNbaV1bal0udG9TdHJpbmcoKTtcclxuXHRcdFx0XHR0ZC5zdHlsZS5wYWRkaW5nTGVmdCA9IFwiNXB4XCI7XHJcblx0XHRcdFx0dGQuc3R5bGUucGFkZGluZ1JpZ2h0ID0gXCI1cHhcIjtcclxuXHRcdFx0XHR0ci5hcHBlbmQodGQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRhYmxlMS5hcHBlbmQodHIpO1xyXG5cdFx0fVxyXG5cdFx0dGQwMS5hcHBlbmQodGFibGUxKTtcclxuXHRcdHRhYmxlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcclxuXHRcdHRhYmxlMS5jbGFzc05hbWUgPSBcIm1hdHJpeFwiO1xyXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IG1hdHJpeDIubTsgaSsrKSB7XHJcblx0XHRcdGxldCB0cjogSFRNTFRhYmxlUm93RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuXHRcdFx0Zm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IG1hdHJpeDIubjsgaisrKSB7XHJcblx0XHRcdFx0bGV0IHRkOiBIVE1MVGFibGVDZWxsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuXHRcdFx0XHR0ZC5pbm5lclRleHQgPSBtYXRyaXgyLmVsZW1lbnRzW2ldW2pdLnRvU3RyaW5nKCk7XHJcblx0XHRcdFx0dGQuc3R5bGUucGFkZGluZ0xlZnQgPSBcIjVweFwiO1xyXG5cdFx0XHRcdHRkLnN0eWxlLnBhZGRpbmdSaWdodCA9IFwiNXB4XCI7XHJcblx0XHRcdFx0dHIuYXBwZW5kKHRkKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0YWJsZTEuYXBwZW5kKHRyKTtcclxuXHRcdH1cclxuXHRcdHRkMDMuYXBwZW5kKHRhYmxlMSk7XHJcblx0XHR0YWJsZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XHJcblx0XHR0YWJsZTEuY2xhc3NOYW1lID0gXCJtYXRyaXhcIjtcclxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCByZXN1bHQubTsgaSsrKSB7XHJcblx0XHRcdGxldCB0cjogSFRNTFRhYmxlUm93RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuXHRcdFx0Zm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IHJlc3VsdC5uOyBqKyspIHtcclxuXHRcdFx0XHRsZXQgdGQ6IEhUTUxUYWJsZUNlbGxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG5cdFx0XHRcdHRkLmlubmVyVGV4dCA9IHJlc3VsdC5lbGVtZW50c1tpXVtqXS50b1N0cmluZygpO1xyXG5cdFx0XHRcdHRkLnN0eWxlLnBhZGRpbmdMZWZ0ID0gXCI1cHhcIjtcclxuXHRcdFx0XHR0ZC5zdHlsZS5wYWRkaW5nUmlnaHQgPSBcIjVweFwiO1xyXG5cdFx0XHRcdHRyLmFwcGVuZCh0ZCk7XHJcblx0XHRcdH1cclxuXHRcdFx0dGFibGUxLmFwcGVuZCh0cik7XHJcblx0XHR9XHJcblx0XHR0ZDA1LmFwcGVuZCh0YWJsZTEpO1xyXG5cdFx0Y29udGFpbmVyLmFwcGVuZCh0YWJsZSk7XHJcblx0XHRjb250YWluZXIuYXBwZW5kKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSk7XHJcblx0fVxyXG5cdHB1YmxpYyBzdGF0aWMgcHJpbnRNYXRyaXhFcXVhbGl0eTIobWF0cml4MTogTWF0cml4LCBvcGVhcnRvcjE6IHN0cmluZywgbWF0cml4MjogTWF0cml4LCBtYXRyaXgzOiBNYXRyaXgsIG9wZWFydG9yMjogc3RyaW5nLCBtYXRyaXg0OiBNYXRyaXgsIGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQpOiB2b2lkIHtcclxuXHRcdGxldCB0YWJsZTogSFRNTFRhYmxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcclxuXHRcdGxldCB0cjA6IEhUTUxUYWJsZVJvd0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcblx0XHR0YWJsZS5hcHBlbmQodHIwKTtcclxuXHRcdGxldCB0ZDAxOiBIVE1MVGFibGVDZWxsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuXHRcdHRyMC5hcHBlbmQodGQwMSk7XHJcblx0XHRsZXQgdGQwMjogSFRNTFRhYmxlQ2VsbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcblx0XHR0ZDAyLmlubmVyVGV4dCA9IG9wZWFydG9yMTtcclxuXHRcdHRkMDIuc3R5bGUudmVydGljYWxBbGlnbiA9IFwibWlkZGxlXCI7XHJcblx0XHR0ZDAyLnN0eWxlLnBhZGRpbmdMZWZ0ID0gXCI1cHhcIjtcclxuXHRcdHRkMDIuc3R5bGUucGFkZGluZ1JpZ2h0ID0gXCI1cHhcIjtcclxuXHRcdHRyMC5hcHBlbmQodGQwMik7XHJcblx0XHRsZXQgdGQwMzogSFRNTFRhYmxlQ2VsbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcblx0XHR0cjAuYXBwZW5kKHRkMDMpO1xyXG5cdFx0bGV0IHRkMDQ6IEhUTUxUYWJsZUNlbGxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG5cdFx0dGQwNC5pbm5lclRleHQgPSBcIj1cIjtcclxuXHRcdHRkMDQuc3R5bGUudmVydGljYWxBbGlnbiA9IFwibWlkZGxlXCI7XHJcblx0XHR0ZDA0LnN0eWxlLnBhZGRpbmdMZWZ0ID0gXCI1cHhcIjtcclxuXHRcdHRkMDQuc3R5bGUucGFkZGluZ1JpZ2h0ID0gXCI1cHhcIjtcclxuXHRcdHRyMC5hcHBlbmQodGQwNCk7XHJcblx0XHRsZXQgdGQwNTogSFRNTFRhYmxlQ2VsbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcblx0XHR0cjAuYXBwZW5kKHRkMDUpO1xyXG5cdFx0bGV0IHRkMDY6IEhUTUxUYWJsZUNlbGxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG5cdFx0dGQwNi5pbm5lclRleHQgPSBvcGVhcnRvcjI7XHJcblx0XHR0ZDA2LnN0eWxlLnZlcnRpY2FsQWxpZ24gPSBcIm1pZGRsZVwiO1xyXG5cdFx0dGQwNi5zdHlsZS5wYWRkaW5nTGVmdCA9IFwiNXB4XCI7XHJcblx0XHR0ZDA2LnN0eWxlLnBhZGRpbmdSaWdodCA9IFwiNXB4XCI7XHJcblx0XHR0cjAuYXBwZW5kKHRkMDYpO1xyXG5cdFx0bGV0IHRkMDc6IEhUTUxUYWJsZUNlbGxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG5cdFx0dHIwLmFwcGVuZCh0ZDA3KTtcclxuXHRcdGxldCB0YWJsZTE6IEhUTUxUYWJsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XHJcblx0XHR0YWJsZTEuY2xhc3NOYW1lID0gXCJtYXRyaXhcIjtcclxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBtYXRyaXgxLm07IGkrKykge1xyXG5cdFx0XHRsZXQgdHI6IEhUTUxUYWJsZVJvd0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcblx0XHRcdGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCBtYXRyaXgxLm47IGorKykge1xyXG5cdFx0XHRcdGxldCB0ZDogSFRNTFRhYmxlQ2VsbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcblx0XHRcdFx0dGQuaW5uZXJUZXh0ID0gbWF0cml4MS5lbGVtZW50c1tpXVtqXS50b1N0cmluZygpO1xyXG5cdFx0XHRcdHRkLnN0eWxlLnBhZGRpbmdMZWZ0ID0gXCI1cHhcIjtcclxuXHRcdFx0XHR0ZC5zdHlsZS5wYWRkaW5nUmlnaHQgPSBcIjVweFwiO1xyXG5cdFx0XHRcdHRyLmFwcGVuZCh0ZCk7XHJcblx0XHRcdH1cclxuXHRcdFx0dGFibGUxLmFwcGVuZCh0cik7XHJcblx0XHR9XHJcblx0XHR0ZDAxLmFwcGVuZCh0YWJsZTEpO1xyXG5cdFx0dGFibGUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xyXG5cdFx0dGFibGUxLmNsYXNzTmFtZSA9IFwibWF0cml4XCI7XHJcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgbWF0cml4Mi5tOyBpKyspIHtcclxuXHRcdFx0bGV0IHRyOiBIVE1MVGFibGVSb3dFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG5cdFx0XHRmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgbWF0cml4Mi5uOyBqKyspIHtcclxuXHRcdFx0XHRsZXQgdGQ6IEhUTUxUYWJsZUNlbGxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG5cdFx0XHRcdHRkLmlubmVyVGV4dCA9IG1hdHJpeDIuZWxlbWVudHNbaV1bal0udG9TdHJpbmcoKTtcclxuXHRcdFx0XHR0ZC5zdHlsZS5wYWRkaW5nTGVmdCA9IFwiNXB4XCI7XHJcblx0XHRcdFx0dGQuc3R5bGUucGFkZGluZ1JpZ2h0ID0gXCI1cHhcIjtcclxuXHRcdFx0XHR0ci5hcHBlbmQodGQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRhYmxlMS5hcHBlbmQodHIpO1xyXG5cdFx0fVxyXG5cdFx0dGQwMy5hcHBlbmQodGFibGUxKTtcclxuXHRcdHRhYmxlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcclxuXHRcdHRhYmxlMS5jbGFzc05hbWUgPSBcIm1hdHJpeFwiO1xyXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IG1hdHJpeDMubTsgaSsrKSB7XHJcblx0XHRcdGxldCB0cjogSFRNTFRhYmxlUm93RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuXHRcdFx0Zm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IG1hdHJpeDMubjsgaisrKSB7XHJcblx0XHRcdFx0bGV0IHRkOiBIVE1MVGFibGVDZWxsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuXHRcdFx0XHR0ZC5pbm5lclRleHQgPSBtYXRyaXgzLmVsZW1lbnRzW2ldW2pdLnRvU3RyaW5nKCk7XHJcblx0XHRcdFx0dGQuc3R5bGUucGFkZGluZ0xlZnQgPSBcIjVweFwiO1xyXG5cdFx0XHRcdHRkLnN0eWxlLnBhZGRpbmdSaWdodCA9IFwiNXB4XCI7XHJcblx0XHRcdFx0dHIuYXBwZW5kKHRkKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0YWJsZTEuYXBwZW5kKHRyKTtcclxuXHRcdH1cclxuXHRcdHRkMDUuYXBwZW5kKHRhYmxlMSk7XHJcblx0XHR0YWJsZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XHJcblx0XHR0YWJsZTEuY2xhc3NOYW1lID0gXCJtYXRyaXhcIjtcclxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBtYXRyaXg0Lm07IGkrKykge1xyXG5cdFx0XHRsZXQgdHI6IEhUTUxUYWJsZVJvd0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcblx0XHRcdGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCBtYXRyaXg0Lm47IGorKykge1xyXG5cdFx0XHRcdGxldCB0ZDogSFRNTFRhYmxlQ2VsbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcblx0XHRcdFx0dGQuaW5uZXJUZXh0ID0gbWF0cml4NC5lbGVtZW50c1tpXVtqXS50b1N0cmluZygpO1xyXG5cdFx0XHRcdHRkLnN0eWxlLnBhZGRpbmdMZWZ0ID0gXCI1cHhcIjtcclxuXHRcdFx0XHR0ZC5zdHlsZS5wYWRkaW5nUmlnaHQgPSBcIjVweFwiO1xyXG5cdFx0XHRcdHRyLmFwcGVuZCh0ZCk7XHJcblx0XHRcdH1cclxuXHRcdFx0dGFibGUxLmFwcGVuZCh0cik7XHJcblx0XHR9XHJcblx0XHR0ZDA3LmFwcGVuZCh0YWJsZTEpO1xyXG5cdFx0Y29udGFpbmVyLmFwcGVuZCh0YWJsZSk7XHJcblx0XHRjb250YWluZXIuYXBwZW5kKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSk7XHJcblx0fVxyXG59IiwiaW1wb3J0IHsgUXVldWUgfSBmcm9tIFwiLi9RdWV1ZVwiO1xyXG5pbXBvcnQgeyBSYXRpb25hbE51bWJlciB9IGZyb20gXCIuL1JhdGlvbmFsTnVtYmVyXCI7XHJcbmltcG9ydCB7IFN0YWNrIH0gZnJvbSBcIi4vU3RhY2tcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBBcml0aG1ldGljRXZhbHVhdG9yIHtcclxuXHRwdWJsaWMgc3RhdGljIHRvUmV2ZXJzZVBvbGlzaE5vdGF0aW9uKGNvZGU6IHN0cmluZyk6IHN0cmluZ1tdIHtcclxuXHRcdGNvbnN0IHRva2Vuczogc3RyaW5nW10gPSBjb2RlLm1hdGNoKC9cXCh8XFwpfFxcZCsoXFwuXFxkKyk/fFxcdyt8W1xcK1xcLVxcKlxcL1xcXl0vZyk7XHJcblx0XHRsZXQgaTogbnVtYmVyID0gMDtcclxuXHRcdGNvbnN0IG91dHB1dFF1ZXVlOiBRdWV1ZTxzdHJpbmc+ID0gbmV3IFF1ZXVlPHN0cmluZz4oKTtcclxuXHRcdGNvbnN0IG9wZXJhdG9yU3RhY2s6IFN0YWNrPHN0cmluZz4gPSBuZXcgU3RhY2s8c3RyaW5nPigpO1xyXG5cdFx0d2hpbGUgKGkgPCB0b2tlbnMubGVuZ3RoKSB7XHJcblx0XHRcdGlmICh0aGlzLmlzTnVtYmVyKHRva2Vuc1tpXSkpIHtcclxuXHRcdFx0XHRvdXRwdXRRdWV1ZS5lbnF1ZXVlKHRva2Vuc1tpXSk7XHJcblx0XHRcdH0gZWxzZSBpZiAodGhpcy5pc09wZXJhdG9yKHRva2Vuc1tpXSkpIHtcclxuXHRcdFx0XHRsZXQgb3AxOiBzdHJpbmcgPSB0b2tlbnNbaV07XHJcblx0XHRcdFx0d2hpbGUgKCFvcGVyYXRvclN0YWNrLmlzRW1wdHkoKSAmJiB0aGlzLmlzT3BlcmF0b3Iob3BlcmF0b3JTdGFjay5wZWVrKCkpKSB7XHJcblx0XHRcdFx0XHRpZiAoKHRoaXMuaXNMZWZ0QXNzb2NpYXRpdmVPcGVyYXRvcihvcDEpICYmICh0aGlzLnByZWNlZGVuY2Uob3AxKSA8PSB0aGlzLnByZWNlZGVuY2Uob3BlcmF0b3JTdGFjay5wZWVrKCkpKSkgfHxcclxuXHRcdFx0XHRcdFx0KHRoaXMuaXNSaWdodEFzc29jaWF0aXZlT3BlcmF0b3Iob3AxKSAmJiAodGhpcy5wcmVjZWRlbmNlKG9wMSkgPCB0aGlzLnByZWNlZGVuY2Uob3BlcmF0b3JTdGFjay5wZWVrKCkpKSkpIHtcclxuXHRcdFx0XHRcdFx0b3V0cHV0UXVldWUuZW5xdWV1ZShvcGVyYXRvclN0YWNrLnBvcCgpKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRvcGVyYXRvclN0YWNrLnB1c2gob3AxKTtcclxuXHRcdFx0fSBlbHNlIGlmICh0b2tlbnNbaV0gPT09IFwiKFwiKSB7XHJcblx0XHRcdFx0b3BlcmF0b3JTdGFjay5wdXNoKHRva2Vuc1tpXSk7XHJcblx0XHRcdH0gZWxzZSBpZiAodG9rZW5zW2ldID09PSBcIilcIikge1xyXG5cdFx0XHRcdHdoaWxlICghb3BlcmF0b3JTdGFjay5pc0VtcHR5KCkgJiYgb3BlcmF0b3JTdGFjay5wZWVrKCkgIT09IFwiKFwiKSB7XHJcblx0XHRcdFx0XHRvdXRwdXRRdWV1ZS5lbnF1ZXVlKG9wZXJhdG9yU3RhY2sucG9wKCkpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoIW9wZXJhdG9yU3RhY2suaXNFbXB0eSgpICYmIG9wZXJhdG9yU3RhY2sucGVlaygpID09PSBcIihcIikge1xyXG5cdFx0XHRcdFx0b3BlcmF0b3JTdGFjay5wb3AoKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiTWlzbWF0Y2hlZCBwYXJlbnRoZXNlcy5cIik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGkrKztcclxuXHRcdH1cclxuXHRcdHdoaWxlICghb3BlcmF0b3JTdGFjay5pc0VtcHR5KCkpIHtcclxuXHRcdFx0aWYgKG9wZXJhdG9yU3RhY2sucGVlaygpID09PSBcIihcIikge1xyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIk1pc21hdGNoZWQgcGFyZW50aGVzZXMuXCIpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdG91dHB1dFF1ZXVlLmVucXVldWUob3BlcmF0b3JTdGFjay5wb3AoKSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiBvdXRwdXRRdWV1ZS50b0FycmF5KCk7XHJcblx0fVxyXG5cdHB1YmxpYyBzdGF0aWMgZXZhbHVhdGVGcm9tUlBOKHRva2Vuczogc3RyaW5nW10pOiBudW1iZXIge1xyXG5cdFx0Y29uc3Qgc3RhY2s6IFN0YWNrPG51bWJlcj4gPSBuZXcgU3RhY2s8bnVtYmVyPigpO1xyXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRpZiAoIXRoaXMuaXNPcGVyYXRvcih0b2tlbnNbaV0pKSB7XHJcblx0XHRcdFx0c3RhY2sucHVzaChwYXJzZUZsb2F0KHRva2Vuc1tpXSkpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGxldCBvcDE6IG51bWJlciA9IHN0YWNrLnBvcCgpO1xyXG5cdFx0XHRcdGxldCBvcDI6IG51bWJlciA9IHN0YWNrLnBvcCgpO1xyXG5cdFx0XHRcdHN3aXRjaCAodG9rZW5zW2ldKSB7XHJcblx0XHRcdFx0XHRjYXNlIFwiK1wiOiBzdGFjay5wdXNoKG9wMiArIG9wMSk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSBcIi1cIjogc3RhY2sucHVzaChvcDIgLSBvcDEpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgXCIqXCI6IHN0YWNrLnB1c2gob3AyICogb3AxKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlIFwiL1wiOiBzdGFjay5wdXNoKG9wMiAvIG9wMSk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSBcIl5cIjogc3RhY2sucHVzaChvcDIgKiogb3AxKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gc3RhY2sucG9wKCk7XHJcblx0fVxyXG5cdHByaXZhdGUgc3RhdGljIGlzTnVtYmVyKGNvZGU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG5cdFx0cmV0dXJuIC9eXFxkLy50ZXN0KGNvZGUpO1xyXG5cdH1cclxuXHRwcml2YXRlIHN0YXRpYyBpc09wZXJhdG9yKGNvZGU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG5cdFx0cmV0dXJuIC9bXFwrXFwtXFwqXFwvXFxeXS8udGVzdChjb2RlKTtcclxuXHR9XHJcblx0cHJpdmF0ZSBzdGF0aWMgaXNMZWZ0QXNzb2NpYXRpdmVPcGVyYXRvcihvcGVyYXRvcjogc3RyaW5nKTogYm9vbGVhbiB7XHJcblx0XHRyZXR1cm4gL1tcXCtcXC1cXCpcXC9dLy50ZXN0KG9wZXJhdG9yKTtcclxuXHR9XHJcblx0cHJpdmF0ZSBzdGF0aWMgaXNSaWdodEFzc29jaWF0aXZlT3BlcmF0b3Iob3BlcmF0b3I6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG5cdFx0cmV0dXJuIC9bXFxeXS8udGVzdChvcGVyYXRvcik7XHJcblx0fVxyXG5cdHByaXZhdGUgc3RhdGljIHByZWNlZGVuY2Uob3BlcmF0b3I6IHN0cmluZyk6IG51bWJlciB7XHJcblx0XHRpZiAoL1tcXCtcXC1dLy50ZXN0KG9wZXJhdG9yKSkge1xyXG5cdFx0XHQgcmV0dXJuIDE7XHJcblx0XHR9XHJcblx0XHRpZiAoL1tcXCpcXC9dLy50ZXN0KG9wZXJhdG9yKSkge1xyXG5cdFx0XHQgcmV0dXJuIDI7XHJcblx0XHR9XHJcblx0XHRpZiAoL1tcXF5dLy50ZXN0KG9wZXJhdG9yKSkge1xyXG5cdFx0XHQgcmV0dXJuIDM7XHJcblx0XHR9XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmtub3duIG9wZXJhdG9yLlwiKTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFRva2VuVHlwZSB7IFBsdXMsIE1pbnVzLCBNdWx0aXBseSwgRGl2aWRlLCBFeHBvbmVudCwgTnVtYmVyLCBMUGFyZW4sIFJQYXJlbiwgRW5kLCBVbmtub3duIH1cclxuZXhwb3J0IGNsYXNzIFRva2VuIHtcclxuXHRwdWJsaWMgdHlwZTogVG9rZW5UeXBlO1xyXG5cdHB1YmxpYyB2YWx1ZTogbnVtYmVyO1xyXG5cdGNvbnN0cnVjdG9yKHR5cGU6IFRva2VuVHlwZSwgdmFsdWU/OiBudW1iZXIpIHtcclxuXHRcdHRoaXMudHlwZSA9IHR5cGU7XHJcblx0XHR0aGlzLnZhbHVlID0gdmFsdWU7XHJcblx0fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBMZXhlciB7XHJcblx0cHJpdmF0ZSB0b2tlbnM6IHN0cmluZ1tdO1xyXG5cdHByaXZhdGUgdG9rZW5JbmRleDogbnVtYmVyO1xyXG5cdGNvbnN0cnVjdG9yKGlucHV0OiBzdHJpbmcpIHtcclxuXHRcdHRoaXMudG9rZW5zID0gaW5wdXQucmVwbGFjZShcIiBcIiwgXCJcIikubWF0Y2goL1xcKHxcXCl8XFxkKyhcXC5cXGQrKT98W1xcK1xcLVxcKlxcL1xcXl0vZyk7XHJcblx0XHR0aGlzLnRva2VuSW5kZXggPSAwO1xyXG5cdH1cclxuXHRwdWJsaWMgZ2V0TmV4dFRva2VuKCk6IFRva2VuIHtcclxuXHRcdGlmICh0aGlzLnRva2Vucy5sZW5ndGggPT09IHRoaXMudG9rZW5JbmRleCkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IFRva2VuKFRva2VuVHlwZS5FbmQpO1xyXG5cdFx0fVxyXG5cdFx0bGV0IGlucHV0OiBzdHJpbmcgPSB0aGlzLnRva2Vuc1t0aGlzLnRva2VuSW5kZXgrK107XHJcblx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihpbnB1dCk7XHJcblx0fVxyXG5cdHB1YmxpYyBnZXRDdXJyZW50VG9rZW4oKTogVG9rZW4ge1xyXG5cdFx0aWYgKHRoaXMudG9rZW5zLmxlbmd0aCAtIDEgPT09IHRoaXMudG9rZW5JbmRleCkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IFRva2VuKFRva2VuVHlwZS5FbmQpO1xyXG5cdFx0fVxyXG5cdFx0bGV0IGlucHV0OiBzdHJpbmcgPSB0aGlzLnRva2Vuc1t0aGlzLnRva2VuSW5kZXhdO1xyXG5cdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oaW5wdXQpO1xyXG5cdH1cclxuXHRwdWJsaWMgcmV2ZXJ0KCk6IHZvaWQge1xyXG5cdFx0aWYgKHRoaXMudG9rZW5JbmRleCA8PSAwKSB7IHRocm93IEVycm9yKFwiSW5kZXggb3V0IG9mIHJhbmdlXCIpOyB9XHJcblx0XHR0aGlzLnRva2VuSW5kZXgtLTtcclxuXHR9XHJcblx0cHJpdmF0ZSBnZXRUb2tlbihpbnB1dDogc3RyaW5nKTogVG9rZW4ge1xyXG5cdFx0aWYgKC9cXCsvLnRlc3QoaW5wdXQpKSB7XHJcblx0XHRcdHJldHVybiBuZXcgVG9rZW4oVG9rZW5UeXBlLlBsdXMpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKC9cXC0vLnRlc3QoaW5wdXQpKSB7XHJcblx0XHRcdHJldHVybiBuZXcgVG9rZW4oVG9rZW5UeXBlLk1pbnVzKTtcclxuXHRcdH1cclxuXHRcdGlmICgvXFwqLy50ZXN0KGlucHV0KSkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IFRva2VuKFRva2VuVHlwZS5NdWx0aXBseSk7XHJcblx0XHR9XHJcblx0XHRpZiAoL1xcLy8udGVzdChpbnB1dCkpIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBUb2tlbihUb2tlblR5cGUuRGl2aWRlKTtcclxuXHRcdH1cclxuXHRcdGlmICgvXFxeLy50ZXN0KGlucHV0KSkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IFRva2VuKFRva2VuVHlwZS5FeHBvbmVudCk7XHJcblx0XHR9XHJcblx0XHRpZiAoL1xcZCsoXFwuXFxkKyk/Ly50ZXN0KGlucHV0KSkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IFRva2VuKFRva2VuVHlwZS5OdW1iZXIsIHBhcnNlRmxvYXQoaW5wdXQpKTtcclxuXHRcdH1cclxuXHRcdGlmICgvXFwoLy50ZXN0KGlucHV0KSkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IFRva2VuKFRva2VuVHlwZS5MUGFyZW4pO1xyXG5cdFx0fVxyXG5cdFx0aWYgKC9cXCkvLnRlc3QoaW5wdXQpKSB7XHJcblx0XHRcdHJldHVybiBuZXcgVG9rZW4oVG9rZW5UeXBlLlJQYXJlbik7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gbmV3IFRva2VuKFRva2VuVHlwZS5Vbmtub3duKTtcclxuXHR9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFBhcnNlciB7XHJcblx0cHJpdmF0ZSBsZXg6IExleGVyO1xyXG5cdHB1YmxpYyBwYXJzZShjb2RlOiBzdHJpbmcpOiBSYXRpb25hbE51bWJlciB7XHJcblx0XHR0aGlzLmxleCA9IG5ldyBMZXhlcihjb2RlKTtcclxuXHRcdGNvbnN0IGV4cHJlc3Npb246IFJhdGlvbmFsTnVtYmVyID0gdGhpcy5mb3VydGhPcmRlck9wZXJhdG9ycygpO1xyXG5cdFx0Y29uc3QgdG9rZW46IFRva2VuID0gdGhpcy5sZXguZ2V0Q3VycmVudFRva2VuKCk7IC8vIGlzIGFscmVhZHkgYWR2YW5jZWQgYmVjYXVzZSBvZiBudW1iZXIoKVxyXG5cdFx0aWYgKHRva2VuLnR5cGUgPT09IFRva2VuVHlwZS5FbmQpIHtcclxuXHRcdFx0cmV0dXJuIGV4cHJlc3Npb247XHJcblx0XHR9XHJcblx0XHR0aHJvdyBFcnJvcihcIkVuZCBleHBlY3RlZFwiKTtcclxuXHR9XHJcblx0Ly8gYWRkaXRpb24gYW5kIHN1YnN0cmFjdGlvblxyXG5cdHByaXZhdGUgZm91cnRoT3JkZXJPcGVyYXRvcnMoKTogUmF0aW9uYWxOdW1iZXIge1xyXG5cdFx0bGV0IGNvbXBvbmVudDE6IFJhdGlvbmFsTnVtYmVyID0gdGhpcy50aGlyZE9yZGVyT3BlcmF0b3JzKCk7XHJcblx0XHRsZXQgdG9rZW46IFRva2VuID0gdGhpcy5sZXguZ2V0TmV4dFRva2VuKCk7XHJcblx0XHR3aGlsZSAodG9rZW4udHlwZSA9PT0gVG9rZW5UeXBlLlBsdXMgfHwgdG9rZW4udHlwZSA9PT0gVG9rZW5UeXBlLk1pbnVzKSB7XHJcblx0XHRcdGxldCBjb21wb25lbnQyOiBSYXRpb25hbE51bWJlciA9IHRoaXMudGhpcmRPcmRlck9wZXJhdG9ycygpO1xyXG5cdFx0XHRpZiAodG9rZW4udHlwZSA9PT0gVG9rZW5UeXBlLlBsdXMpIHtcclxuXHRcdFx0XHRjb21wb25lbnQxID0gY29tcG9uZW50MS5hZGQoY29tcG9uZW50Mik7XHJcblx0XHRcdH0gZWxzZSBpZiAodG9rZW4udHlwZSA9PT0gVG9rZW5UeXBlLk1pbnVzKSB7XHJcblx0XHRcdFx0Y29tcG9uZW50MSA9IGNvbXBvbmVudDEuc3ViKGNvbXBvbmVudDIpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRva2VuID0gdGhpcy5sZXguZ2V0TmV4dFRva2VuKCk7XHJcblx0XHR9XHJcblx0XHR0aGlzLmxleC5yZXZlcnQoKTtcclxuXHRcdHJldHVybiBjb21wb25lbnQxO1xyXG5cdH1cclxuXHQvLyBtdWx0aXBsaWNhdGlvbiBhbmQgZGl2aXNpb25cclxuXHRwcml2YXRlIHRoaXJkT3JkZXJPcGVyYXRvcnMoKTogUmF0aW9uYWxOdW1iZXIge1xyXG5cdFx0bGV0IGZhY3RvcjE6IFJhdGlvbmFsTnVtYmVyID0gdGhpcy5zZWNvbmRPcmRlck9wZXJhdG9ycygpO1xyXG5cdFx0bGV0IHRva2VuOiBUb2tlbiA9IHRoaXMubGV4LmdldE5leHRUb2tlbigpO1xyXG5cdFx0d2hpbGUgKHRva2VuLnR5cGUgPT09IFRva2VuVHlwZS5NdWx0aXBseSB8fCB0b2tlbi50eXBlID09PSBUb2tlblR5cGUuRGl2aWRlKSB7XHJcblx0XHRcdGxldCBmYWN0b3IyOiBSYXRpb25hbE51bWJlciA9IHRoaXMuc2Vjb25kT3JkZXJPcGVyYXRvcnMoKTtcclxuXHRcdFx0aWYgKHRva2VuLnR5cGUgPT09IFRva2VuVHlwZS5NdWx0aXBseSkge1xyXG5cdFx0XHRcdGZhY3RvcjEgPSBmYWN0b3IxLm11bHQoZmFjdG9yMik7XHJcblx0XHRcdH0gZWxzZSBpZiAodG9rZW4udHlwZSA9PT0gVG9rZW5UeXBlLkRpdmlkZSkge1xyXG5cdFx0XHRcdGZhY3RvcjEgPSBmYWN0b3IxLmRpdihmYWN0b3IyKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0b2tlbiA9IHRoaXMubGV4LmdldE5leHRUb2tlbigpO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5sZXgucmV2ZXJ0KCk7XHJcblx0XHRyZXR1cm4gZmFjdG9yMTtcclxuXHR9XHJcblx0Ly8gZXhwb25lbnRzIGFuZCByb290c1xyXG5cdHByaXZhdGUgc2Vjb25kT3JkZXJPcGVyYXRvcnMoKTogUmF0aW9uYWxOdW1iZXIge1xyXG5cdFx0bGV0IGZhY3RvcjE6IFJhdGlvbmFsTnVtYmVyID0gdGhpcy5maXJzdE9yZGVyT3BlcmF0b3JzKCk7XHJcblx0XHRsZXQgdG9rZW46IFRva2VuID0gdGhpcy5sZXguZ2V0TmV4dFRva2VuKCk7XHJcblx0XHR3aGlsZSAodG9rZW4udHlwZSA9PT0gVG9rZW5UeXBlLkV4cG9uZW50KSB7XHJcblx0XHRcdGxldCBmYWN0b3IyOiBSYXRpb25hbE51bWJlciA9IHRoaXMuZmlyc3RPcmRlck9wZXJhdG9ycygpO1xyXG5cdFx0XHRmYWN0b3IxID0gZmFjdG9yMS5leHAoZmFjdG9yMik7XHJcblx0XHRcdHRva2VuID0gdGhpcy5sZXguZ2V0TmV4dFRva2VuKCk7XHJcblx0XHR9XHJcblx0XHR0aGlzLmxleC5yZXZlcnQoKTtcclxuXHRcdHJldHVybiBmYWN0b3IxO1xyXG5cdH1cclxuXHQvLyBudW1iZXJzIGFuZCBwYXJhbnRoZXNlc1xyXG5cdHByaXZhdGUgZmlyc3RPcmRlck9wZXJhdG9ycygpOiBSYXRpb25hbE51bWJlciB7XHJcblx0XHRsZXQgdmFsdWU6IFJhdGlvbmFsTnVtYmVyID0gbmV3IFJhdGlvbmFsTnVtYmVyKDEpO1xyXG5cdFx0bGV0IHRva2VuOiBUb2tlbiA9IHRoaXMubGV4LmdldE5leHRUb2tlbigpO1xyXG5cdFx0aWYgKHRva2VuLnR5cGUgPT09IFRva2VuVHlwZS5QbHVzIHx8IHRva2VuLnR5cGUgPT09IFRva2VuVHlwZS5NaW51cykge1xyXG5cdFx0XHRpZiAodG9rZW4udHlwZSA9PT0gVG9rZW5UeXBlLk1pbnVzKSB7XHJcblx0XHRcdFx0dmFsdWUgPSB2YWx1ZS5tdWx0KC0xKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0b2tlbiA9IHRoaXMubGV4LmdldE5leHRUb2tlbigpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHRva2VuLnR5cGUgPT09IFRva2VuVHlwZS5MUGFyZW4pIHtcclxuXHRcdFx0dmFsdWUgPSB2YWx1ZS5tdWx0KHRoaXMuZm91cnRoT3JkZXJPcGVyYXRvcnMoKSk7XHJcblx0XHRcdHRva2VuID0gdGhpcy5sZXguZ2V0TmV4dFRva2VuKCk7XHJcblx0XHRcdGlmICh0b2tlbi50eXBlICE9PSBUb2tlblR5cGUuUlBhcmVuKSB7XHJcblx0XHRcdFx0dGhyb3cgRXJyb3IoXCJVbmJhbGFuY2VkIHBhcmVudGhlc2lzXCIpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAodG9rZW4udHlwZSA9PT0gVG9rZW5UeXBlLk51bWJlcikge1xyXG5cdFx0XHRcdHZhbHVlID0gdmFsdWUubXVsdCh0b2tlbi52YWx1ZSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhyb3cgRXJyb3IoXCJOb3QgYSBudW1iZXJcIik7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiB2YWx1ZTtcclxuXHR9XHJcbn1cclxuXHJcbi8qXHJcblx0cHVibGljIHN0YXRpYyBldmFsdWF0ZShleHByZXNpb246IHN0cmluZyk6IFJhdGlvbmFsTnVtYmVyIHtcclxuXHR2YXIgZGlnaXRQYXR0ZXJuID0gbmV3IFJlZ0V4cCgnMCB8IDEgfCAyIHwgMyB8IDQgfCA1IHwgNiB8IDcgfCA4IHwgOScpO1xyXG5cdHZhciBzaWduUGF0dGVybiA9IG5ldyBSZWdFeHAoJ1xcK3xcXC0nKTtcclxuXHR2YXIgbnVtYmVyUGF0dGVybiA9IG5ldyBSZWdFeHAoJ1snICsgc2lnblBhdHRlcm4gKyAnXScgKyAneycgKyBkaWdpdFBhdHRlcm4gKyAnfScpO1xyXG5cdHZhciBmYWN0b3JQYXR0ZXJuID0gbmV3IFJlZ0V4cChudW1iZXJQYXR0ZXJuICsgJ3xcXCgnICsgZXhwcmVzc2lvblBhdHRlcm4gKyAnXFwpJyk7XHJcblx0dmFyIGNvbXBvbmVudFBhdHRlcm4gPSBuZXcgUmVnRXhwKGZhY3RvclBhdHRlcm4gKyAnW3soIFxcKiB8IFxcLyApJyArIGZhY3RvclBhdHRlcm4gKyAnfV0nKTtcclxuXHR2YXIgZXhwcmVzc2lvblBhdHRlcm4gPSBuZXcgUmVnRXhwKGNvbXBvbmVudFBhdHRlcm4gKyAnW3soIFxcKyB8IFxcLSknICsgY29tcG9uZW50UGF0dGVybiArICd9XScpO1xyXG59Ki9cclxuXHJcbi8qXHJcbmV4cHJyOiA0dGhPUkRFUis7XHJcbjR0aE9SREVSOiBjb21wb25lbnQxPTNyZE9SREVSICgoUExVU3xNSU5VUykgY29tcG9uZW50Mj0zcmRPUkRFUikrO1xyXG4zcmRPUkRFUjogZmFjdG9yMT0yTkRPUkRFUiAoKE1VTFRJUExZfERJVklERSkgZmFjdG9yMT0ybmRPUkRFUikrXHJcbjJuZE9SREVSOiBmYWN0b3IxPTFzdE9SREVSIChFWFBPTkVOVCBmYWN0b3IyPTFzdE9SREVSKStcclxuMXN0T1JERVI6IChQTFVTfE1JTlVTfGVtcHR5KSAoTFBBUkVOIHZhbHVlPTR0aE9SREVSIFJQQVJFTnwgTlVNQkVSKVxyXG4qLyIsImltcG9ydCB7IFJhdGlvbmFsTnVtYmVyIH0gZnJvbSBcIi4vUmF0aW9uYWxOdW1iZXJcIjtcclxuaW1wb3J0IHsgQ29sdW1uVmVjdG9yLCBWZWN0b3IgfSBmcm9tIFwiLi9WZWN0b3JcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBNYXRyaXgge1xyXG5cdHB1YmxpYyBzdGF0aWMgYXVnbWVudChBOiBNYXRyaXgsIEI6IE1hdHJpeCB8IFZlY3Rvcik6IE1hdHJpeCB7XHJcblx0XHRpZiAoQS5tICE9PSBCLm0pIHsgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHR3byBtYXRyaWNlcyAodmVjdG9yKSBtdXN0IGhhdmUgdGhlIHNhbWUgbnVtYmVyIG9mIHJvd3MgKGVsZW1lbnRzKS5cIik7IH1cclxuXHRcdGxldCByZXQ6IE1hdHJpeCA9IG51bGw7XHJcblx0XHRpZiAoQiBpbnN0YW5jZW9mIE1hdHJpeCkge1xyXG5cdFx0XHRyZXQgPSBuZXcgTWF0cml4KEEubSwgQi5uICsgQS5uKTtcclxuXHRcdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IEEubTsgaSsrKSB7XHJcblx0XHRcdFx0Zm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IEEubjsgaisrKSB7XHJcblx0XHRcdFx0XHRyZXQuZWxlbWVudHNbaV1bal0gPSBBLmVsZW1lbnRzW2ldW2pdO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgQi5tOyBpKyspIHtcclxuXHRcdFx0XHRmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgQi5uOyBqKyspIHtcclxuXHRcdFx0XHRcdHJldC5lbGVtZW50c1tpXVtBLm4gKyBqXSA9IEIuZWxlbWVudHNbaV1bal07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAoQiBpbnN0YW5jZW9mIFZlY3Rvcikge1xyXG5cdFx0XHRcdHJldCA9IG5ldyBNYXRyaXgoQS5tLCBBLm4gKyAxKTtcclxuXHRcdFx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgQS5tOyBpKyspIHtcclxuXHRcdFx0XHRcdGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCBBLm47IGorKykge1xyXG5cdFx0XHRcdFx0XHRyZXQuZWxlbWVudHNbaV1bal0gPSBBLmVsZW1lbnRzW2ldW2pdO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgQi5tOyBqKyspIHtcclxuXHRcdFx0XHRcdHJldC5lbGVtZW50c1tqXVtBLm5dID0gQi5lbGVtZW50c1tqXTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXQ7XHJcblx0fVxyXG5cdC8vIHJvdy1tdWx0aXBseWluZyB0cmFuc2Zvcm1hdGlvbnNcclxuXHRwdWJsaWMgc3RhdGljIG11bHRpcGxpY2F0aW9uKG46IG51bWJlciwgcm93MTogbnVtYmVyLCByb3cyOiBudW1iZXIsIG11bHQ6IG51bWJlcik6IE1hdHJpeCB7XHJcblx0XHRpZiAobiA8IHJvdzEgfHwgbiA8IHJvdzIpIHsgdGhyb3cgbmV3IEVycm9yKFwiQ29sdW1uIGluZGV4IG11c3QgYmUgbGVzcyBvciBlcXVhbHQgdGhhbiBtYXRyaXggc2l6ZS5cIik7IH1cclxuXHRcdGNvbnN0IG1hdHJpeDogTWF0cml4ID0gbmV3IE1hdHJpeElkZW50aXR5KG4pO1xyXG5cdFx0bWF0cml4LmVsZW1lbnRzW3JvdzFdW3JvdzJdID0gbmV3IFJhdGlvbmFsTnVtYmVyKG11bHQpO1xyXG5cdFx0cmV0dXJuIG1hdHJpeDtcclxuXHR9XHJcblx0cHVibGljIHN0YXRpYyByYW5kb21TcXVhcmUoKTogTWF0cml4IHtcclxuXHRcdGNvbnN0IG1hdHJpeDogTWF0cml4ID0gbmV3IE1hdHJpeChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0KSArIDMsIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQpICsgMyk7IC8vIG1pbmltdW0gc2l6ZSAzeDMgbWF0cml4XHJcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgbWF0cml4Lm07IGkrKykge1xyXG5cdFx0XHRmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgbWF0cml4Lm47IGorKykge1xyXG5cdFx0XHRcdG1hdHJpeC5lbGVtZW50c1tpXVtqXSA9IG5ldyBSYXRpb25hbE51bWJlcihNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAgLSA1MCkpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gbWF0cml4O1xyXG5cdH1cclxuXHRwdWJsaWMgc3RhdGljIHJhbmRvbTIoKTogTWF0cml4IHtcclxuXHRcdGNvbnN0IG51bWJlck9mVW5rbm93bnM6IG51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQgKyAzKTsgLy8gYmV0d2VlbiAzIGFuZCA3IHVua25vbndzXHJcblx0XHRjb25zdCB1bmtub3duczogbnVtYmVyW10gPSBbXTtcclxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBudW1iZXJPZlVua25vd25zOyBpKyspIHtcclxuXHRcdFx0dW5rbm93bnNbaV0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyMCAtIDEwKTtcclxuXHRcdH1cclxuXHRcdC8vIHRvZG86IGNoYW5nZSBiZWxvd1xyXG5cdFx0Y29uc3QgbWF0cml4OiBNYXRyaXggPSBuZXcgTWF0cml4KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQpICsgMywgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCkgKyAzKTtcclxuXHRcdHJldHVybiBtYXRyaXg7XHJcblx0fVxyXG5cdHB1YmxpYyBtOiBudW1iZXI7IC8vIHJvd3NcclxuXHRwdWJsaWMgbjogbnVtYmVyOyAvLyBjb2x1bW5zXHJcblx0cHVibGljIGVsZW1lbnRzOiBSYXRpb25hbE51bWJlcltdW107XHJcblx0Y29uc3RydWN0b3IobTogbnVtYmVyLCBuOiBudW1iZXIpIHtcclxuXHRcdHRoaXMubSA9IG07XHJcblx0XHR0aGlzLm4gPSBuO1xyXG5cdFx0dGhpcy5lbGVtZW50cyA9IFtdO1xyXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMubTsgaSsrKSB7XHJcblx0XHRcdHRoaXMuZWxlbWVudHNbaV0gPSBbXTtcclxuXHRcdH1cclxuXHR9XHJcblx0cHVibGljIGVxdWFscyhNOiBNYXRyaXgpOiBib29sZWFuIHtcclxuXHRcdGlmICh0aGlzLm0gIT09IE0ubSB8fCB0aGlzLm4gIT09IE0ubikge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5tOyBpKyspIHtcclxuXHRcdFx0Zm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IHRoaXMubjsgaisrKSB7XHJcblx0XHRcdFx0aWYgKCF0aGlzLmVsZW1lbnRzW2ldW2pdLmVxdWFscyhNLmVsZW1lbnRzW2ldW2pdKSkgeyByZXR1cm4gZmFsc2U7IH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cdHB1YmxpYyBhZGQoeDogTWF0cml4KTogTWF0cml4IHtcclxuXHRcdGlmICh0aGlzLm0gIT09IHgubSB8fCB0aGlzLm4gIT09IHgubikgeyB0aHJvdyBuZXcgRXJyb3IoXCJNaXNtYXRjaGVkIGRpbWVuc2lvbnMuXCIpOyB9XHJcblx0XHRjb25zdCByZXM6IE1hdHJpeCA9IG5ldyBNYXRyaXgodGhpcy5tLCB0aGlzLm4pO1xyXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHJlcy5tOyBpKyspIHtcclxuXHRcdFx0Zm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IHJlcy5uOyBqKyspIHtcclxuXHRcdFx0XHRyZXMuZWxlbWVudHNbaV1bal0gPSB0aGlzLmVsZW1lbnRzW2ldW2pdLmFkZCh4LmVsZW1lbnRzW2ldW2pdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlcztcclxuXHR9XHJcblx0cHVibGljIHN1Yih4OiBNYXRyaXgpOiBNYXRyaXgge1xyXG5cdFx0aWYgKHRoaXMubSAhPT0geC5tIHx8IHRoaXMubiAhPT0geC5uKSB7IHRocm93IG5ldyBFcnJvcihcIk1pc21hdGNoZWQgZGltZW5zaW9ucy5cIik7IH1cclxuXHRcdGNvbnN0IHJlczogTWF0cml4ID0gbmV3IE1hdHJpeCh0aGlzLm0sIHRoaXMubik7XHJcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgcmVzLm07IGkrKykge1xyXG5cdFx0XHRmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgcmVzLm47IGorKykge1xyXG5cdFx0XHRcdHJlcy5lbGVtZW50c1tpXVtqXSA9IHRoaXMuZWxlbWVudHNbaV1bal0uc3ViKHguZWxlbWVudHNbaV1bal0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzO1xyXG5cdH1cclxuXHRwdWJsaWMgbXVsdCh4OiBudW1iZXIgfCBSYXRpb25hbE51bWJlciB8IE1hdHJpeCk6IE1hdHJpeCB7XHJcblx0XHRsZXQgcmVzOiBNYXRyaXggPSBudWxsO1xyXG5cdFx0aWYgKHR5cGVvZiB4ID09PSBcIm51bWJlclwiKSB7XHJcblx0XHRcdHJlcyA9IG5ldyBNYXRyaXgodGhpcy5tLCB0aGlzLm4pO1xyXG5cdFx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgcmVzLm07IGkrKykge1xyXG5cdFx0XHRcdGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCByZXMubjsgaisrKSB7XHJcblx0XHRcdFx0XHRyZXMuZWxlbWVudHNbaV1bal0gPSB0aGlzLmVsZW1lbnRzW2ldW2pdLm11bHQoeCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2UgaWYgKHggaW5zdGFuY2VvZiBSYXRpb25hbE51bWJlcikge1xyXG5cdFx0XHRyZXMgPSBuZXcgTWF0cml4KHRoaXMubSwgdGhpcy5uKTtcclxuXHRcdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHJlcy5tOyBpKyspIHtcclxuXHRcdFx0XHRmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgcmVzLm47IGorKykge1xyXG5cdFx0XHRcdFx0cmVzLmVsZW1lbnRzW2ldW2pdID0gdGhpcy5lbGVtZW50c1tpXVtqXS5tdWx0KHgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKHggaW5zdGFuY2VvZiBNYXRyaXgpIHtcclxuXHRcdFx0XHRpZiAodGhpcy5uICE9PSB4Lm0pIHsgdGhyb3cgbmV3IEVycm9yKFwiTWlzbWF0Y2hlZCBkaW1lbnNpb25zLlwiKTsgfVxyXG5cdFx0XHRcdHJlcyA9IG5ldyBNYXRyaXgodGhpcy5tLCB4Lm4pO1xyXG5cdFx0XHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCByZXMubTsgaSsrKSB7XHJcblx0XHRcdFx0XHRmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgcmVzLm47IGorKykge1xyXG5cdFx0XHRcdFx0XHRsZXQgc3VtOiBSYXRpb25hbE51bWJlciA9IG5ldyBSYXRpb25hbE51bWJlcigwKTtcclxuXHRcdFx0XHRcdFx0Zm9yIChsZXQgazogbnVtYmVyID0gMDsgayA8IHRoaXMubjsgaysrKSB7XHJcblx0XHRcdFx0XHRcdFx0c3VtID0gc3VtLmFkZCh0aGlzLmVsZW1lbnRzW2ldW2tdLm11bHQoeC5lbGVtZW50c1trXVtqXSkpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdHJlcy5lbGVtZW50c1tpXVtqXSA9IHN1bTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXM7XHJcblx0fVxyXG5cdHB1YmxpYyB2ZWN0b3JQcm9kdWN0KHY6IENvbHVtblZlY3Rvcik6IENvbHVtblZlY3RvciB7XHJcblx0XHRpZiAodGhpcy5uICE9PSB2Lm0pIHsgdGhyb3cgbmV3IEVycm9yKFwiTWlzbWF0Y2hlZCBkaW1lbnNpb25zLlwiKTsgfVxyXG5cdFx0Y29uc3QgcmVzOiBDb2x1bW5WZWN0b3IgPSBuZXcgQ29sdW1uVmVjdG9yKHYubSk7XHJcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5tOyBpKyspIHtcclxuXHRcdFx0bGV0IHN1bTogUmF0aW9uYWxOdW1iZXIgPSBuZXcgUmF0aW9uYWxOdW1iZXIoMCk7XHJcblx0XHRcdGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCB0aGlzLm47IGorKykge1xyXG5cdFx0XHRcdHN1bSA9IHN1bS5hZGQodGhpcy5lbGVtZW50c1tpXVtqXS5tdWx0KHYuZWxlbWVudHNbal0pKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXMuZWxlbWVudHNbaV0gPSBzdW07XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzO1xyXG5cdH1cclxuXHRwdWJsaWMgdHJhbnNwb3NlKCk6IE1hdHJpeCB7XHJcblx0XHRjb25zdCByZXQ6IE1hdHJpeCA9IG5ldyBNYXRyaXgodGhpcy5uLCB0aGlzLm0pO1xyXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMubTsgaSsrKSB7XHJcblx0XHRcdGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCB0aGlzLm47IGorKykge1xyXG5cdFx0XHRcdHJldC5lbGVtZW50c1tqXVtpXSA9IHRoaXMuZWxlbWVudHNbaV1bal07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXQ7XHJcblx0fVxyXG5cdHB1YmxpYyBkZWVwQ29weSgpOiBNYXRyaXgge1xyXG5cdFx0Y29uc3QgcmV0OiBNYXRyaXggPSBuZXcgTWF0cml4KHRoaXMubSwgdGhpcy5uKTtcclxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLm07IGkrKykge1xyXG5cdFx0XHRmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgdGhpcy5uOyBqKyspIHtcclxuXHRcdFx0XHRyZXQuZWxlbWVudHNbaV1bal0gPSB0aGlzLmVsZW1lbnRzW2ldW2pdO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmV0O1xyXG5cdH1cclxuXHRwdWJsaWMgc3dpdGNoUm93cyhpZHgxOiBudW1iZXIsIGlkeDI6IG51bWJlcik6IHZvaWQge1xyXG5cdFx0aWYgKHRoaXMubSA8IGlkeDEgfHwgdGhpcy5tIDwgaWR4MikgeyByZXR1cm47IH1cclxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLm47IGkrKykge1xyXG5cdFx0XHRjb25zdCB0bXA6IFJhdGlvbmFsTnVtYmVyID0gdGhpcy5lbGVtZW50c1tpZHgxXVtpXTtcclxuXHRcdFx0dGhpcy5lbGVtZW50c1tpZHgxXVtpXSA9IHRoaXMuZWxlbWVudHNbaWR4Ml1baV07XHJcblx0XHRcdHRoaXMuZWxlbWVudHNbaWR4Ml1baV0gPSB0bXA7XHJcblx0XHR9XHJcblx0fVxyXG5cdHB1YmxpYyBtdWx0aXBseVJvdyhpZHg6IG51bWJlciwgc2NhbGFyOiBSYXRpb25hbE51bWJlcik6IHZvaWQge1xyXG5cdFx0aWYgKHRoaXMubSA8IGlkeCkgeyByZXR1cm47IH1cclxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLm47IGkrKykge1xyXG5cdFx0XHR0aGlzLmVsZW1lbnRzW2lkeF1baV0gPSB0aGlzLmVsZW1lbnRzW2lkeF1baV0ubXVsdChzY2FsYXIpLnNpbXBsaWZpZWRGb3JtKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cdHB1YmxpYyBhZGRSb3dzKGlkeDE6IG51bWJlciwgaWR4MjogbnVtYmVyLCBzY2FsYXI6IFJhdGlvbmFsTnVtYmVyKTogdm9pZCB7XHJcblx0XHRpZiAodGhpcy5tIDwgaWR4MSB8fCB0aGlzLm0gPCBpZHgyKSB7IHJldHVybjsgfVxyXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMubjsgaSsrKSB7XHJcblx0XHRcdHRoaXMuZWxlbWVudHNbaWR4MV1baV0gPSB0aGlzLmVsZW1lbnRzW2lkeDJdW2ldLm11bHQoc2NhbGFyKS5hZGQodGhpcy5lbGVtZW50c1tpZHgxXVtpXSkuc2ltcGxpZmllZEZvcm0oKTtcclxuXHRcdH1cclxuXHR9XHJcblx0cHVibGljIGFkZFJvdzFUb1JvdzIoaWR4MTogbnVtYmVyLCBzY2FsYXIxOiBSYXRpb25hbE51bWJlciwgaWR4MjogbnVtYmVyLCBzY2FsYXIyOiBSYXRpb25hbE51bWJlcik6IHZvaWQge1xyXG5cdFx0aWYgKHRoaXMubSA8IGlkeDEgfHwgdGhpcy5tIDwgaWR4MikgeyByZXR1cm47IH1cclxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLm47IGkrKykge1xyXG5cdFx0XHR0aGlzLmVsZW1lbnRzW2lkeDJdW2ldID0gdGhpcy5lbGVtZW50c1tpZHgyXVtpXS5tdWx0KHNjYWxhcjIpLmFkZCh0aGlzLmVsZW1lbnRzW2lkeDFdW2ldLm11bHQoc2NhbGFyMSkpLnNpbXBsaWZpZWRGb3JtKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cdC8vIGEgc3F1YXJlIG1hdHJpeCBpcyBhIG1hdHJpeCB3aXRoIHRoZSBzYW1lIG51bWJlciBvZiByb3dzIGFuZCBjb2x1bW5zXHJcblx0cHVibGljIGlzU3F1YXJlKCk6IGJvb2xlYW4ge1xyXG5cdFx0cmV0dXJuIHRoaXMubSA9PT0gdGhpcy5uO1xyXG5cdH1cclxuXHQvLyBhIGRpYWdvbmFsIG1hdHJpeCBpcyBhIG1hdHJpeCBpbiB3aGljaCB0aGUgZW50cmllcyBvdXRzaWRlIHRoZSBtYWluIGRpYWdvbmFsIGFyZSBhbGwgemVyb1xyXG5cdHB1YmxpYyBpc0RpYWdvbmFsKCk6IGJvb2xlYW4ge1xyXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMubTsgaSsrKSB7XHJcblx0XHRcdGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCB0aGlzLm47IGorKykge1xyXG5cdFx0XHRcdGlmIChpID09PSBqKSB7XHJcblx0XHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKCF0aGlzLmVsZW1lbnRzW2ldW2pdLmVxdWFscyhuZXcgUmF0aW9uYWxOdW1iZXIoMCkpKSB7IHJldHVybiBmYWxzZTsgfVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblx0Ly8gdGhlIGlkZW50aXR5IG1hdHJpeCBvZiBzaXplIG4gaXMgdGhlIG4gw5cgbiBzcXVhcmUgbWF0cml4IHdpdGggb25lcyBvbiB0aGUgbWFpbiBkaWFnb25hbCBhbmQgemVyb3MgZWxzZXdoZXJlXHJcblx0Ly8gW0FMSUFTRVNdOiB1bml0IG1hdHJpeFxyXG5cdHB1YmxpYyBpc0lkZW50aXR5KCk6IGJvb2xlYW4ge1xyXG5cdFx0aWYgKHRoaXMubSAhPT0gdGhpcy5uKSB7IHRocm93IG5ldyBFcnJvcihcIk5vdCBhIHNxdWFyZSBtYXRyaXguXCIpOyB9XHJcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5tOyBpKyspIHtcclxuXHRcdFx0Zm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IHRoaXMubjsgaisrKSB7XHJcblx0XHRcdFx0aWYgKGkgPT09IGopIHtcclxuXHRcdFx0XHRcdGlmICghdGhpcy5lbGVtZW50c1tpXVtqXS5lcXVhbHMobmV3IFJhdGlvbmFsTnVtYmVyKDEpKSkgeyByZXR1cm4gZmFsc2U7IH1cclxuXHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoIXRoaXMuZWxlbWVudHNbaV1bal0uZXF1YWxzKG5ldyBSYXRpb25hbE51bWJlcigwKSkpIHsgcmV0dXJuIGZhbHNlOyB9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHQvLyBhIG1hdHJpeCBpcyBub3JtYWwgaWYgaXQgY29tbXV0ZXMgd2l0aCBpdHMgY29uanVnYXRlIHRyYW5zcG9zZVxyXG5cdHB1YmxpYyBpc05vcm1hbCgpOiBib29sZWFuIHtcclxuXHRcdHRocm93IG5ldyBFcnJvcihcIk5vdCBpbXBsZW1lbnRlZFwiKTtcclxuXHR9XHJcblx0Ly8gdGhlIGNvbmp1Z2F0ZSB0cmFuc3Bvc2Ugb2YgYW4gbS1ieS1uIG1hdHJpeCBBIHdpdGggY29tcGxleCBlbnRyaWVzIGlzIHRoZSBuLWJ5LW0gbWF0cml4IEHiiJcgb2J0YWluZWQgZnJvbSBBXHJcblx0Ly8gYnkgdGFraW5nIHRoZSB0cmFuc3Bvc2UgYW5kIHRoZW4gdGFraW5nIHRoZSBjb21wbGV4IGNvbmp1Z2F0ZSBvZiBlYWNoIGVudHJ5XHJcblx0Ly8gW0FMSUFTRVNdOiBIZXJtaXRpYW4gdHJhbnNwb3NlXHJcblx0cHVibGljIHRvQ29uanVnYXRlVHJhbnNwb3NlKCk6IE1hdHJpeCB7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJOb3QgaW1wbGVtZW50ZWRcIik7XHJcblx0fVxyXG5cdHB1YmxpYyBpc1VwcGVyVHJpYW5ndWxhcigpOiBib29sZWFuIHtcclxuXHRcdC8vIHRvZG86IGNoZWNrIGlmIGRlZmluaXRpb24gaXMgdmFsaWQgZm9yIGEgbm9uIHNxdWFyZSBtYXRyaXhcclxuXHRcdC8vIGlmICh0aGlzLm0gIT09IHRoaXMubikgeyB0aHJvdyBuZXcgRXJyb3IoXCJOb3QgYSBzcXVhcmUgbWF0cml4LlwiKTsgfVxyXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMTsgaSA8IHRoaXMubTsgaSsrKSB7XHJcblx0XHRcdGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCBpOyBqKyspIHtcclxuXHRcdFx0XHRpZiAoIXRoaXMuZWxlbWVudHNbaV1bal0uZXF1YWxzKG5ldyBSYXRpb25hbE51bWJlcigwKSkpIHsgcmV0dXJuIGZhbHNlOyB9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHRwdWJsaWMgaXNMb3dlclRyaWFuZ3VsYXIoKTogYm9vbGVhbiB7XHJcblx0XHQvLyB0b2RvOiBjaGVjayBpZiBkZWZpbml0aW9uIGlzIHZhbGlkIGZvciBhIG5vbiBzcXVhcmUgbWF0cml4XHJcblx0XHQvLyBpZiAodGhpcy5tICE9PSB0aGlzLm4pIHsgdGhyb3cgbmV3IEVycm9yKFwiTm90IGEgc3F1YXJlIG1hdHJpeC5cIik7IH1cclxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLm07IGkrKykge1xyXG5cdFx0XHRmb3IgKGxldCBqOiBudW1iZXIgPSBpICsgMTsgaiA8IHRoaXMubjsgaisrKSB7XHJcblx0XHRcdFx0aWYgKCF0aGlzLmVsZW1lbnRzW2ldW2pdLmVxdWFscyhuZXcgUmF0aW9uYWxOdW1iZXIoMCkpKSB7IHJldHVybiBmYWxzZTsgfVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblx0Ly8gYSBzeW1tZXRyaWMgbWF0cml4IGlzIGEgc3F1YXJlIG1hdHJpeCB0aGF0IGlzIGVxdWFsIHRvIGl0cyB0cmFuc3Bvc2VcclxuXHRwdWJsaWMgaXNTeW1tZXRyaWMoKTogYm9vbGVhbiB7XHJcblx0XHRpZiAodGhpcy5tICE9PSB0aGlzLm4pIHsgdGhyb3cgbmV3IEVycm9yKFwiTm90IGEgc3F1YXJlIG1hdHJpeC5cIik7IH1cclxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLm07IGkrKykge1xyXG5cdFx0XHRmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgdGhpcy5uOyBqKyspIHtcclxuXHRcdFx0XHRpZiAoIXRoaXMuZWxlbWVudHNbaV1bal0uZXF1YWxzKHRoaXMuZWxlbWVudHNbal1baV0pKSB7IHJldHVybiBmYWxzZTsgfVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblx0Ly8gYW4gb3J0aG9nb25hbCBtYXRyaXggaXMgYSBzcXVhcmUgbWF0cml4IHdpdGggcmVhbCBlbnRyaWVzIHdob3NlIGNvbHVtbnMgYW5kIHJvd3MgYXJlIG9ydGhvZ29uYWwgdW5pdCB2ZWN0b3JzXHJcblx0Ly8gW0FMSUFTRVNdOiByZWFsIG9ydGhvZ29uYWwgbWF0cml4XHJcblx0cHVibGljIGlzT3J0aG9nb25hbCgpOiBib29sZWFuIHtcclxuXHRcdGNvbnN0IE1UOiBNYXRyaXggPSB0aGlzLnRyYW5zcG9zZSgpO1xyXG5cdFx0cmV0dXJuIHRoaXMubXVsdChNVCkuaXNJZGVudGl0eSgpO1xyXG5cdH1cclxuXHRwdWJsaWMgaXNSb3dFY2hlbG9uRm9ybSgpOiBib29sZWFuIHtcclxuXHRcdGxldCBmb3VuZFplcm9Sb3c6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHRcdC8vIGFsbCBub256ZXJvIHJvd3MgKHJvd3Mgd2l0aCBhdCBsZWFzdCBvbmUgbm9uemVybyBlbGVtZW50KSBhcmUgYWJvdmUgYW55IHJvd3Mgb2YgYWxsIHplcm9lc1xyXG5cdFx0Ly8gKGFsbCB6ZXJvIHJvd3MsIGlmIGFueSwgYmVsb25nIGF0IHRoZSBib3R0b20gb2YgdGhlIG1hdHJpeClcclxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLm07IGkrKykge1xyXG5cdFx0XHRpZiAodGhpcy5pc1plcm9Sb3coaSkpIHtcclxuXHRcdFx0XHRmb3VuZFplcm9Sb3cgPSB0cnVlO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGlmIChmb3VuZFplcm9Sb3cpIHsgcmV0dXJuIGZhbHNlOyB9XHJcblx0XHRcdH0vLyBpZiBjdXJyZW50IHJvdyBpcyBub3QgemVybywgYnV0IGEgcHJldmlvdXMgcm93IGlzIHplcm8sIHRoZW4gbWF0cml4IGlzIG5vdCBpbiByb3cgZWNoZWxvbiBmb3JtXHJcblx0XHR9XHJcblx0XHQvLyB0aGUgbGVhZGluZyBjb2VmZmljaWVudCAodGhlIGZpcnN0IG5vbnplcm8gbnVtYmVyIGZyb20gdGhlIGxlZnQsIGFsc28gY2FsbGVkIHRoZSBwaXZvdCkgb2YgYSBub256ZXJvIHJvd1xyXG5cdFx0Ly8gaXMgYWx3YXlzIHN0cmljdGx5IHRvIHRoZSByaWdodCBvZiB0aGUgbGVhZGluZyBjb2VmZmljaWVudCBvZiB0aGUgcm93IGFib3ZlIGl0XHJcblx0XHRsZXQgcHJldmlvdXNJZHg6IG51bWJlciA9IC0xO1xyXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMubTsgaSsrKSB7XHJcblx0XHRcdGNvbnN0IGN1cnJlbnRQaXZvdElkeDogbnVtYmVyID0gdGhpcy5yb3dQaXZvdFBvc2l0aW9uKGkpO1xyXG5cdFx0XHRpZiAoMCA+IGN1cnJlbnRQaXZvdElkeCkgeyBjb250aW51ZTsgfS8vIHRoaXMgaXMgYSB6ZXJvIHJvdywgbm8gcGl2b3RcclxuXHRcdFx0Ly8gbGVhZGluZyBjb2VmZmljaWVudCBtdXN0IGJlIDFcclxuXHRcdFx0aWYgKCF0aGlzLmVsZW1lbnRzW2ldW2N1cnJlbnRQaXZvdElkeF0uZXF1YWxzKG5ldyBSYXRpb25hbE51bWJlcigxKSkpIHsgcmV0dXJuIGZhbHNlOyB9XHJcblx0XHRcdGlmIChwcmV2aW91c0lkeCA8IGN1cnJlbnRQaXZvdElkeCkge1xyXG5cdFx0XHRcdHByZXZpb3VzSWR4ID0gY3VycmVudFBpdm90SWR4O1xyXG5cdFx0XHR9IGVsc2UgeyByZXR1cm4gZmFsc2U7IH1cclxuXHRcdH1cclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHRwdWJsaWMgaXNSZWR1Y2VkUm93RWNoZWxvbkZvcm0oKTogYm9vbGVhbiB7XHJcblx0XHRpZiAoIXRoaXMuaXNSb3dFY2hlbG9uRm9ybSgpKSB7IHJldHVybiBmYWxzZTsgfVxyXG5cdFx0Ly8gZWFjaCBsZWFkaW5nIGNvZWZmaWNpZW50IGlzIHRoZSBvbmx5IG5vbnplcm8gZW50cnkgaW4gaXRzIGNvbHVtblxyXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMubTsgaSsrKSB7XHJcblx0XHRcdGNvbnN0IHBpdm90UG9zaXRpb246IG51bWJlciA9IHRoaXMucm93UGl2b3RQb3NpdGlvbihpKTtcclxuXHRcdFx0aWYgKDEgPCB0aGlzLm51bWJlck9mTm9uWmVyb0VsZW1lbnRGb3JDb2x1bW4ocGl2b3RQb3NpdGlvbikpIHsgcmV0dXJuIGZhbHNlOyB9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblx0cHVibGljIHRvUmVkdWNlZFJvd0VjaGVsb25Gb3JtKCk6IE1hdHJpeCB7XHJcblx0XHRjb25zdCByZXM6IE1hdHJpeCA9IHRoaXMuZGVlcENvcHkoKTtcclxuXHRcdGxldCBsZWFkOiBudW1iZXIgPSAwO1xyXG5cdFx0Zm9yIChsZXQgcjogbnVtYmVyID0gMDsgciA8IHJlcy5tOyByKyspIHtcclxuXHRcdFx0aWYgKHJlcy5uIDw9IGxlYWQpIHtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0XHRsZXQgaTogbnVtYmVyID0gcjtcclxuXHRcdFx0d2hpbGUgKHJlcy5lbGVtZW50c1tpXVtsZWFkXS5lcXVhbHMoMCkpIHtcclxuXHRcdFx0XHRpKys7XHJcblx0XHRcdFx0aWYgKHJlcy5tID09PSBpKSB7XHJcblx0XHRcdFx0XHRpID0gcjtcclxuXHRcdFx0XHRcdGxlYWQrKztcclxuXHRcdFx0XHRcdGlmIChyZXMubiA9PT0gbGVhZCkge1xyXG5cdFx0XHRcdFx0XHRsZWFkLS07XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRyZXMuc3dpdGNoUm93cyhpLCByKTtcclxuXHRcdFx0aWYgKCFyZXMuZWxlbWVudHNbcl1bbGVhZF0uZXF1YWxzKDApKSB7XHJcblx0XHRcdFx0cmVzLm11bHRpcGx5Um93KHIsIHJlcy5lbGVtZW50c1tyXVtsZWFkXS5yZWNpcHJvY2FsKCkpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCByZXMubTsgaisrKSB7XHJcblx0XHRcdFx0aWYgKGogIT09IHIpIHtcclxuXHRcdFx0XHRcdHJlcy5hZGRSb3dzKGosIHIsIHJlcy5lbGVtZW50c1tqXVtsZWFkXS5vcHBvc2l0ZSgpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0bGVhZCsrO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlcztcclxuXHR9XHJcblx0cHVibGljIGRldGVybWluYW50KCk6IFJhdGlvbmFsTnVtYmVyIHtcclxuXHRcdC8vIHRvZG86IGltcGxlbWVudCBhbiBvcHRpbWl6ZWQgdmVyc2lvbiwgbGlrZSBBPVBMVVxyXG5cdFx0aWYgKHRoaXMubSAhPT0gdGhpcy5uKSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIkRldGVybWluYW50IGNhbiBvbmx5IGJlIGNhbGN1bGF0ZWQgb24gYSBzcXVhcmUgbWF0cml4XCIpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMubSA9PT0gMSkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5lbGVtZW50c1swXVswXTtcclxuXHRcdH1cclxuXHRcdGxldCByZXQ6IFJhdGlvbmFsTnVtYmVyID0gbmV3IFJhdGlvbmFsTnVtYmVyKDApO1xyXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMubjsgaSsrKSB7XHJcblx0XHRcdGNvbnN0IG1pbm9yOiBSYXRpb25hbE51bWJlciA9IHRoaXMuZWxlbWVudHNbMF1baV0ubXVsdCh0aGlzLmNvZmFjdG9yKDAsIGkpLmRldGVybWluYW50KCkpO1xyXG5cdFx0XHRyZXQgPSByZXQuYWRkKG1pbm9yLm11bHQoKC0xKSAqKiBpKSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmV0O1xyXG5cdH1cclxuXHRwdWJsaWMgY29udm9sdXRlKGtlcm5lbDogTWF0cml4KTogTWF0cml4IHtcclxuXHRcdGlmIChrZXJuZWwubSAhPT0ga2VybmVsLm4pIHsgdGhyb3cgbmV3IEVycm9yKFwiS2VybmVsIGlzIG5vdCBhIHNxdWFyZSBtYXRyaXguXCIpOyB9XHJcblx0XHRpZiAoa2VybmVsLm0gJSAyID09PSAwKSB7IHRocm93IG5ldyBFcnJvcihcIktlcm5lbCBpcyBub3QgYW4gZXZlbiBzaXplIG1hdHJpeC5cIik7IH1cclxuXHRcdGNvbnN0IHN6ID0gTWF0aC5mbG9vcihrZXJuZWwubSAvIDIpO1xyXG5cdFx0Y29uc3QgcmVzOiBNYXRyaXggPSBuZXcgTWF0cml4KHRoaXMubSwgdGhpcy5uKTtcclxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLm07IGkrKykge1xyXG5cdFx0XHRmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgdGhpcy5uOyBqKyspIHtcclxuXHRcdFx0XHRyZXMuZWxlbWVudHNbaV1bal0gPSBuZXcgUmF0aW9uYWxOdW1iZXIoMCk7XHJcblx0XHRcdFx0Zm9yIChsZXQgdGk6IG51bWJlciA9IDA7IHRpIDwga2VybmVsLm07IHRpKyspIHtcclxuXHRcdFx0XHRcdGlmIChpICsgdGkgLSBzeiA8IDAgfHwgaSArIHRpIC0gc3ogPj0gdGhpcy5tKSB7XHJcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Zm9yIChsZXQgdGo6IG51bWJlciA9IDA7IHRqIDwga2VybmVsLm47IHRqKyspIHtcclxuXHRcdFx0XHRcdFx0aWYgKGogKyB0aiAtIHN6IDwgMCB8fCBqICsgdGogLSBzeiA+PSB0aGlzLm4pIHtcclxuXHRcdFx0XHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRyZXMuZWxlbWVudHNbaV1bal0gPSByZXMuZWxlbWVudHNbaV1bal0uYWRkKHRoaXMuZWxlbWVudHNbaSArIHRpIC0gc3pdW2ogKyB0aiAtIHN6XS5tdWx0KGtlcm5lbC5lbGVtZW50c1t0aV1bdGpdKSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBpc1plcm9Sb3cocm93SWQ6IG51bWJlcik6IGJvb2xlYW4ge1xyXG5cdFx0Zm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IHRoaXMubjsgaisrKSB7XHJcblx0XHRcdGlmICghdGhpcy5lbGVtZW50c1tyb3dJZF1bal0uZXF1YWxzKG5ldyBSYXRpb25hbE51bWJlcigwKSkpIHsgcmV0dXJuIGZhbHNlOyB9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblx0cHJpdmF0ZSByb3dQaXZvdFBvc2l0aW9uKHJvd0lkOiBudW1iZXIpOiBudW1iZXIge1xyXG5cdFx0Zm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IHRoaXMubjsgaisrKSB7XHJcblx0XHRcdGlmICghdGhpcy5lbGVtZW50c1tyb3dJZF1bal0uZXF1YWxzKG5ldyBSYXRpb25hbE51bWJlcigwKSkpIHsgcmV0dXJuIGo7IH1cclxuXHRcdH1cclxuXHRcdHJldHVybiAtMTtcclxuXHR9XHJcblx0cHJpdmF0ZSBudW1iZXJPZk5vblplcm9FbGVtZW50Rm9yQ29sdW1uKGNvbHVtbklkOiBudW1iZXIpOiBudW1iZXIge1xyXG5cdFx0bGV0IGFjYzogbnVtYmVyID0gMDtcclxuXHRcdGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCB0aGlzLm07IGorKykge1xyXG5cdFx0XHRpZiAoIXRoaXMuZWxlbWVudHNbal1bY29sdW1uSWRdLmVxdWFscyhuZXcgUmF0aW9uYWxOdW1iZXIoMCkpKSB7IGFjYysrOyB9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gYWNjO1xyXG5cdH1cclxuXHRwcml2YXRlIGNvZmFjdG9yKHJvd0lkOiBudW1iZXIsIGNvbHVtbklkOiBudW1iZXIpOiBNYXRyaXgge1xyXG5cdFx0Y29uc3QgcmV0OiBNYXRyaXggPSBuZXcgTWF0cml4KHRoaXMubSAtIDEsIHRoaXMubiAtIDEpO1xyXG5cdFx0bGV0IHJvd09mZnNldDogbnVtYmVyID0gMDtcclxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLm0gLSAxOyBpKyspIHtcclxuXHRcdFx0aWYgKGkgPT09IHJvd0lkKSB7XHJcblx0XHRcdFx0cm93T2Zmc2V0ID0gMTtcclxuXHRcdFx0fVxyXG5cdFx0XHRsZXQgY29sdW1uT2Zmc2V0OiBudW1iZXIgPSAwO1xyXG5cdFx0XHRmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgdGhpcy5uIC0gMTsgaisrKSB7XHJcblx0XHRcdFx0aWYgKGogPT09IGNvbHVtbklkKSB7XHJcblx0XHRcdFx0XHRjb2x1bW5PZmZzZXQgPSAxO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXQuZWxlbWVudHNbaV1bal0gPSB0aGlzLmVsZW1lbnRzW2kgKyByb3dPZmZzZXRdW2ogKyBjb2x1bW5PZmZzZXRdO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmV0O1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE1hdHJpeElkZW50aXR5IGV4dGVuZHMgTWF0cml4IHtcclxuXHRjb25zdHJ1Y3RvcihtOiBudW1iZXIpIHtcclxuXHRcdHN1cGVyKG0sIG0pO1xyXG5cdFx0dGhpcy5lbGVtZW50cyA9IFtdO1xyXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMubTsgaSsrKSB7XHJcblx0XHRcdHRoaXMuZWxlbWVudHNbaV0gPSBbXTtcclxuXHRcdFx0Zm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IHRoaXMubTsgaisrKSB7XHJcblx0XHRcdFx0aWYgKGkgPT09IGopIHtcclxuXHRcdFx0XHRcdHRoaXMuZWxlbWVudHNbaV1bal0gPSBuZXcgUmF0aW9uYWxOdW1iZXIoMSk7XHJcblx0XHRcdFx0fSBlbHNlIHsgdGhpcy5lbGVtZW50c1tpXVtqXSA9IG5ldyBSYXRpb25hbE51bWJlcigwKTsgfVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4vLyBlbGltaW5hdGlvbiAtIG11bHRpcGx5IG9uIHRoZSBsZWZ0IChFKkEpOyBSb3ctYWRkaXRpb24gdHJhbnNmb3JtYXRpb25zXHJcbi8vIHRvIG11bHQqKHJvdzIgb2YgTWF0cml4IEEpIGFkZCAocm93MSBvZiBNYXRyaXggQSlcclxuZXhwb3J0IGNsYXNzIE1hdHJpeEVsaW1pbmF0aW9uIGV4dGVuZHMgTWF0cml4IHtcclxuXHRwdWJsaWMgcm93MTogbnVtYmVyO1xyXG5cdHB1YmxpYyByb3cyOiBudW1iZXI7XHJcblx0Y29uc3RydWN0b3IobTogbnVtYmVyLCByMTogbnVtYmVyLCByMjogbnVtYmVyLCBtdWx0OiBudW1iZXIgfCBSYXRpb25hbE51bWJlcikge1xyXG5cdFx0aWYgKG0gPCByMSB8fCBtIDwgcjIpIHsgdGhyb3cgbmV3IEVycm9yKFwiQ29sdW1uIGluZGV4IG11c3QgYmUgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIHRoZSBtYXRyaXggc2l6ZS5cIik7IH1cclxuXHRcdHN1cGVyKG0sIG0pO1xyXG5cdFx0dGhpcy5yb3cxID0gcjE7XHJcblx0XHR0aGlzLnJvdzIgPSByMjtcclxuXHRcdHRoaXMuZWxlbWVudHMgPSBbXTtcclxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLm07IGkrKykge1xyXG5cdFx0XHR0aGlzLmVsZW1lbnRzW2ldID0gW107XHJcblx0XHRcdGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCB0aGlzLm07IGorKykge1xyXG5cdFx0XHRcdGlmIChpID09PSBqKSB7XHJcblx0XHRcdFx0XHR0aGlzLmVsZW1lbnRzW2ldW2pdID0gbmV3IFJhdGlvbmFsTnVtYmVyKDEpO1xyXG5cdFx0XHRcdH0gZWxzZSB7IHRoaXMuZWxlbWVudHNbaV1bal0gPSBuZXcgUmF0aW9uYWxOdW1iZXIoMCk7IH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKHR5cGVvZiBtdWx0ID09PSBcIm51bWJlclwiKSB7XHJcblx0XHRcdHRoaXMuZWxlbWVudHNbcjFdW3IyXSA9IG5ldyBSYXRpb25hbE51bWJlcihtdWx0KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmIChtdWx0IGluc3RhbmNlb2YgUmF0aW9uYWxOdW1iZXIpIHsgdGhpcy5lbGVtZW50c1tyMV1bcjJdID0gbXVsdDsgfVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuLy8gcGVybXV0YXRpb24gLSBtdWx0aXBseSBvbiB0aGUgcmlnaHQgKEEqUCk7IFJvdy1zd2l0Y2hpbmcgdHJhbnNmb3JtYXRpb25zXHJcbmV4cG9ydCBjbGFzcyBNYXRyaXhQZXJtdXRhdGlvbiBleHRlbmRzIE1hdHJpeCB7XHJcblx0Y29uc3RydWN0b3IobTogbnVtYmVyLCByb3cxOiBudW1iZXIsIHJvdzI6IG51bWJlcikge1xyXG5cdFx0aWYgKG0gPCByb3cxIHx8IG0gPCByb3cyKSB7IHRocm93IG5ldyBFcnJvcihcIkNvbHVtbiBpbmRleCBtdXN0IGJlIGxlc3MgdGhhbiBvciBlcXVhbCB0byB0aGUgbWF0cml4IHNpemUuXCIpOyB9XHJcblx0XHRzdXBlcihtLCBtKTtcclxuXHRcdHRoaXMuZWxlbWVudHMgPSBbXTtcclxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLm07IGkrKykge1xyXG5cdFx0XHR0aGlzLmVsZW1lbnRzW2ldID0gW107XHJcblx0XHRcdGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCB0aGlzLm07IGorKykge1xyXG5cdFx0XHRcdGlmIChpID09PSBqKSB7XHJcblx0XHRcdFx0XHR0aGlzLmVsZW1lbnRzW2ldW2pdID0gbmV3IFJhdGlvbmFsTnVtYmVyKDEpO1xyXG5cdFx0XHRcdH0gZWxzZSB7IHRoaXMuZWxlbWVudHNbaV1bal0gPSBuZXcgUmF0aW9uYWxOdW1iZXIoMCk7IH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0dGhpcy5lbGVtZW50c1tyb3cxXVtyb3cxXSA9IG5ldyBSYXRpb25hbE51bWJlcigwKTtcclxuXHRcdHRoaXMuZWxlbWVudHNbcm93MV1bcm93Ml0gPSBuZXcgUmF0aW9uYWxOdW1iZXIoMSk7XHJcblx0XHR0aGlzLmVsZW1lbnRzW3JvdzJdW3JvdzJdID0gbmV3IFJhdGlvbmFsTnVtYmVyKDApO1xyXG5cdFx0dGhpcy5lbGVtZW50c1tyb3cyXVtyb3cxXSA9IG5ldyBSYXRpb25hbE51bWJlcigxKTtcclxuXHR9XHJcbn0iLCJleHBvcnQgY2xhc3MgUXVldWU8VD4ge1xyXG5cdHByaXZhdGUgcXVldWU6IFRbXTtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMucXVldWUgPSBbXTtcclxuXHR9XHJcblx0cHVibGljIGlzRW1wdHkoKTogYm9vbGVhbiB7XHJcblx0XHRyZXR1cm4gdGhpcy5xdWV1ZS5sZW5ndGggPT09IDA7XHJcblx0fVxyXG5cdHB1YmxpYyBlbnF1ZXVlKGVsZW1lbnQ6IFQpOiB2b2lkIHtcclxuXHRcdHRoaXMucXVldWUucHVzaChlbGVtZW50KTtcclxuXHR9XHJcblx0cHVibGljIGRlcXVldWUoKTogVCB7XHJcblx0XHRpZiAodGhpcy5pc0VtcHR5KCkpIHsgdGhyb3cgbmV3IEVycm9yKFwiUXVldWUgaXMgZW1wdHlcIik7IH1cclxuXHRcdHJldHVybiB0aGlzLnF1ZXVlLnNoaWZ0KCk7XHJcblx0fVxyXG5cdHB1YmxpYyBwZWVrKCk6IFQge1xyXG5cdFx0aWYgKHRoaXMuaXNFbXB0eSgpKSB7IHRocm93IG5ldyBFcnJvcihcIlF1ZXVlIGlzIGVtcHR5XCIpOyB9XHJcblx0XHRyZXR1cm4gdGhpcy5xdWV1ZVswXTtcclxuXHR9XHJcblx0cHVibGljIHRvQXJyYXkoKTogVFtdIHtcclxuXHRcdHJldHVybiB0aGlzLnF1ZXVlO1xyXG5cdH1cclxufSIsImltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuL0FyaXRobWV0aWNFdmFsdWF0b3JcIjtcclxuaW1wb3J0IHsgUXVldWUgfSBmcm9tIFwiLi9RdWV1ZVwiO1xyXG5pbXBvcnQgeyBTdGFjayB9IGZyb20gXCIuL1N0YWNrXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUmF0aW9uYWxOdW1iZXIge1xyXG5cdHB1YmxpYyBzdGF0aWMgdG9SZXZlcnNlUG9saXNoTm90YXRpb24oY29kZTogc3RyaW5nKTogc3RyaW5nW10ge1xyXG5cdFx0Y29uc3QgdG9rZW5zOiBzdHJpbmdbXSA9IGNvZGUubWF0Y2goL1xcKHxcXCl8XFxkKyhcXC5cXGQrKT98XFx3K3xbXFwrXFwtXFwqXFwvXFxeXS9nKTtcclxuXHRcdGxldCBpOiBudW1iZXIgPSAwO1xyXG5cdFx0Y29uc3Qgb3V0cHV0UXVldWU6IFF1ZXVlPHN0cmluZz4gPSBuZXcgUXVldWU8c3RyaW5nPigpO1xyXG5cdFx0Y29uc3Qgb3BlcmF0b3JTdGFjazogU3RhY2s8c3RyaW5nPiA9IG5ldyBTdGFjazxzdHJpbmc+KCk7XHJcblx0XHR3aGlsZSAoaSA8IHRva2Vucy5sZW5ndGgpIHtcclxuXHRcdFx0aWYgKHRoaXMuaXNOdW1iZXIodG9rZW5zW2ldKSkge1xyXG5cdFx0XHRcdG91dHB1dFF1ZXVlLmVucXVldWUodG9rZW5zW2ldKTtcclxuXHRcdFx0fSBlbHNlIGlmICh0aGlzLmlzT3BlcmF0b3IodG9rZW5zW2ldKSkge1xyXG5cdFx0XHRcdGNvbnN0IG9wMTogc3RyaW5nID0gdG9rZW5zW2ldO1xyXG5cdFx0XHRcdHdoaWxlICghb3BlcmF0b3JTdGFjay5pc0VtcHR5KCkgJiYgdGhpcy5pc09wZXJhdG9yKG9wZXJhdG9yU3RhY2sucGVlaygpKSkge1xyXG5cdFx0XHRcdFx0aWYgKCh0aGlzLmlzTGVmdEFzc29jaWF0aXZlT3BlcmF0b3Iob3AxKSAmJiAodGhpcy5wcmVjZWRlbmNlKG9wMSkgPD0gdGhpcy5wcmVjZWRlbmNlKG9wZXJhdG9yU3RhY2sucGVlaygpKSkpIHx8XHJcblx0XHRcdFx0XHRcdCh0aGlzLmlzUmlnaHRBc3NvY2lhdGl2ZU9wZXJhdG9yKG9wMSkgJiYgKHRoaXMucHJlY2VkZW5jZShvcDEpIDwgdGhpcy5wcmVjZWRlbmNlKG9wZXJhdG9yU3RhY2sucGVlaygpKSkpKSB7XHJcblx0XHRcdFx0XHRcdG91dHB1dFF1ZXVlLmVucXVldWUob3BlcmF0b3JTdGFjay5wb3AoKSk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0b3BlcmF0b3JTdGFjay5wdXNoKG9wMSk7XHJcblx0XHRcdH0gZWxzZSBpZiAodG9rZW5zW2ldID09PSBcIihcIikge1xyXG5cdFx0XHRcdG9wZXJhdG9yU3RhY2sucHVzaCh0b2tlbnNbaV0pO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHRva2Vuc1tpXSA9PT0gXCIpXCIpIHtcclxuXHRcdFx0XHR3aGlsZSAoIW9wZXJhdG9yU3RhY2suaXNFbXB0eSgpICYmIG9wZXJhdG9yU3RhY2sucGVlaygpICE9PSBcIihcIikge1xyXG5cdFx0XHRcdFx0b3V0cHV0UXVldWUuZW5xdWV1ZShvcGVyYXRvclN0YWNrLnBvcCgpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKCFvcGVyYXRvclN0YWNrLmlzRW1wdHkoKSAmJiBvcGVyYXRvclN0YWNrLnBlZWsoKSA9PT0gXCIoXCIpIHtcclxuXHRcdFx0XHRcdG9wZXJhdG9yU3RhY2sucG9wKCk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIk1pc21hdGNoZWQgcGFyZW50aGVzZXMuXCIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRpKys7XHJcblx0XHR9XHJcblx0XHR3aGlsZSAoIW9wZXJhdG9yU3RhY2suaXNFbXB0eSgpKSB7XHJcblx0XHRcdGlmIChvcGVyYXRvclN0YWNrLnBlZWsoKSA9PT0gXCIoXCIpIHtcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJNaXNtYXRjaGVkIHBhcmVudGhlc2VzLlwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRvdXRwdXRRdWV1ZS5lbnF1ZXVlKG9wZXJhdG9yU3RhY2sucG9wKCkpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gb3V0cHV0UXVldWUudG9BcnJheSgpO1xyXG5cdH1cclxuXHRwdWJsaWMgc3RhdGljIGZyb21TdHJpbmcoY29kZTogc3RyaW5nKTogUmF0aW9uYWxOdW1iZXIge1xyXG5cdFx0Y29uc3QgcDogUGFyc2VyID0gbmV3IFBhcnNlcigpO1xyXG5cdFx0cmV0dXJuIHAucGFyc2UoY29kZSk7XHJcblx0fVxyXG5cdHB1YmxpYyBzdGF0aWMgZ3JlYXRlc3RDb21tb25EaXZpc29yKGE6IG51bWJlciwgYjogbnVtYmVyKTogbnVtYmVyIHtcclxuXHRcdHJldHVybiBiID8gUmF0aW9uYWxOdW1iZXIuZ3JlYXRlc3RDb21tb25EaXZpc29yKGIsIGEgJSBiKSA6IGE7XHJcblx0fVxyXG5cdHB1YmxpYyBzdGF0aWMgbGVhc3RDb21tb25NdWx0aXBsZShhOiBudW1iZXIsIGI6IG51bWJlcik6IG51bWJlciB7XHJcblx0XHRyZXR1cm4gTWF0aC5hYnMoYSAqIGIgLyBSYXRpb25hbE51bWJlci5ncmVhdGVzdENvbW1vbkRpdmlzb3IoYSwgYikpO1xyXG5cdH1cclxuXHRwcml2YXRlIHN0YXRpYyBpc051bWJlcihjb2RlOiBzdHJpbmcpOiBib29sZWFuIHtcclxuXHRcdHJldHVybiAvXlxcZC8udGVzdChjb2RlKTtcclxuXHR9XHJcblx0cHJpdmF0ZSBzdGF0aWMgaXNPcGVyYXRvcihjb2RlOiBzdHJpbmcpOiBib29sZWFuIHtcclxuXHRcdHJldHVybiAvW1xcK1xcLVxcKlxcL1xcXl0vLnRlc3QoY29kZSk7XHJcblx0fVxyXG5cdHByaXZhdGUgc3RhdGljIGlzTGVmdEFzc29jaWF0aXZlT3BlcmF0b3Iob3BlcmF0b3I6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG5cdFx0cmV0dXJuIC9bXFwrXFwtXFwqXFwvXS8udGVzdChvcGVyYXRvcik7XHJcblx0fVxyXG5cdHByaXZhdGUgc3RhdGljIGlzUmlnaHRBc3NvY2lhdGl2ZU9wZXJhdG9yKG9wZXJhdG9yOiBzdHJpbmcpOiBib29sZWFuIHtcclxuXHRcdHJldHVybiAvW1xcXl0vLnRlc3Qob3BlcmF0b3IpO1xyXG5cdH1cclxuXHRwcml2YXRlIHN0YXRpYyBwcmVjZWRlbmNlKG9wZXJhdG9yOiBzdHJpbmcpOiBudW1iZXIge1xyXG5cdFx0aWYgKC9bXFwrXFwtXS8udGVzdChvcGVyYXRvcikpIHtcclxuXHRcdFx0cmV0dXJuIDE7XHJcblx0XHR9XHJcblx0XHRpZiAoL1tcXCpcXC9dLy50ZXN0KG9wZXJhdG9yKSkge1xyXG5cdFx0XHRyZXR1cm4gMjtcclxuXHRcdH1cclxuXHRcdGlmICgvW1xcXl0vLnRlc3Qob3BlcmF0b3IpKSB7XHJcblx0XHRcdHJldHVybiAzO1xyXG5cdFx0fVxyXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiVW5rbm93biBvcGVyYXRvci5cIik7XHJcblx0fVxyXG5cdHByaXZhdGUgc3RhdGljIGV2YWx1YXRlRnJvbVJQTih0b2tlbnM6IHN0cmluZ1tdKTogUmF0aW9uYWxOdW1iZXIge1xyXG5cdFx0Y29uc3Qgc3RhY2s6IFN0YWNrPFJhdGlvbmFsTnVtYmVyPiA9IG5ldyBTdGFjazxSYXRpb25hbE51bWJlcj4oKTtcclxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0aWYgKCF0aGlzLmlzT3BlcmF0b3IodG9rZW5zW2ldKSkge1xyXG5cdFx0XHRcdHN0YWNrLnB1c2gobmV3IFJhdGlvbmFsTnVtYmVyKHBhcnNlRmxvYXQodG9rZW5zW2ldKSkpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGNvbnN0IG9wMTogUmF0aW9uYWxOdW1iZXIgPSBzdGFjay5wb3AoKTtcclxuXHRcdFx0XHRjb25zdCBvcDI6IFJhdGlvbmFsTnVtYmVyID0gc3RhY2sucG9wKCk7XHJcblx0XHRcdFx0c3dpdGNoICh0b2tlbnNbaV0pIHtcclxuXHRcdFx0XHRcdGNhc2UgXCIrXCI6IHN0YWNrLnB1c2gob3AyLmFkZChvcDEpKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlIFwiLVwiOiBzdGFjay5wdXNoKG9wMi5zdWIob3AxKSk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSBcIipcIjogc3RhY2sucHVzaChvcDIubXVsdChvcDEpKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlIFwiL1wiOiBzdGFjay5wdXNoKG9wMi5kaXYob3AxKSk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSBcIl5cIjogc3RhY2sucHVzaChvcDIuZXhwKG9wMS50b051bWJlcigpKSk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHN0YWNrLnBvcCgpLnNpbXBsaWZpZWRGb3JtKCk7XHJcblx0fVxyXG5cdHB1YmxpYyBudW1lcmF0b3I6IG51bWJlcjtcclxuXHRwdWJsaWMgZGVub21pbmF0b3I6IG51bWJlcjtcclxuXHRjb25zdHJ1Y3RvcihuOiBudW1iZXIsIGQ6IG51bWJlciA9IDEpIHtcclxuXHRcdGlmIChkID09PSAwKSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIkRpdmlzaW9uIGJ5IHplcm8hXCIpO1xyXG5cdFx0fVxyXG5cdFx0Ly8gdG9kbzogcG90ZW50aWFsIGZvciBvdmVyZmxvdy4gV2hlbiBNYXRoLnNpZ24gYmVjb21lcyBhdmFpbGFibGUgaW4gVHlwZVNjcmlwdCB1c2UgaXQgaW5zdGVhZCBvZiB0aGUgbXVsdGlwbGljYXRpb25cclxuXHRcdGNvbnN0IHNpZ246IG51bWJlciA9IG4gKiBkID49IDAgPyAxIDogLTE7XHJcblx0XHR0aGlzLm51bWVyYXRvciA9IHNpZ24gKiBNYXRoLmFicyhuKTtcclxuXHRcdHRoaXMuZGVub21pbmF0b3IgPSBNYXRoLmFicyhkKTtcclxuXHR9XHJcblx0cHVibGljIHNpbXBsaWZpZWRGb3JtKCk6IFJhdGlvbmFsTnVtYmVyIHtcclxuXHRcdGNvbnN0IGdjZDogbnVtYmVyID0gUmF0aW9uYWxOdW1iZXIuZ3JlYXRlc3RDb21tb25EaXZpc29yKHRoaXMubnVtZXJhdG9yLCB0aGlzLmRlbm9taW5hdG9yKTtcclxuXHRcdHJldHVybiBuZXcgUmF0aW9uYWxOdW1iZXIodGhpcy5udW1lcmF0b3IgLyBnY2QsIHRoaXMuZGVub21pbmF0b3IgLyBnY2QpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGVxdWFscyh4OiBudW1iZXIgfCBSYXRpb25hbE51bWJlcik6IGJvb2xlYW4ge1xyXG5cdFx0Y29uc3Qgcm4xOiBSYXRpb25hbE51bWJlciA9IHRoaXMuc2ltcGxpZmllZEZvcm0oKTtcclxuXHRcdGlmICh0eXBlb2YgeCA9PT0gXCJudW1iZXJcIikge1xyXG5cdFx0XHRyZXR1cm4gcm4xLm51bWVyYXRvciA9PT0geCAmJiBybjEuZGVub21pbmF0b3IgPT09IDE7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjb25zdCBybjI6IFJhdGlvbmFsTnVtYmVyID0geC5zaW1wbGlmaWVkRm9ybSgpO1xyXG5cdFx0XHRyZXR1cm4gcm4xLm51bWVyYXRvciA9PT0gcm4yLm51bWVyYXRvciAmJiBybjEuZGVub21pbmF0b3IgPT09IHJuMi5kZW5vbWluYXRvcjtcclxuXHRcdH1cclxuXHR9XHJcblx0cHVibGljIGx0KHg6IG51bWJlciB8IFJhdGlvbmFsTnVtYmVyKTogYm9vbGVhbiB7XHJcblx0XHRjb25zdCBybjE6IFJhdGlvbmFsTnVtYmVyID0gdGhpcy5zaW1wbGlmaWVkRm9ybSgpO1xyXG5cdFx0aWYgKHR5cGVvZiB4ID09PSBcIm51bWJlclwiKSB7XHJcblx0XHRcdHJldHVybiBybjEubnVtZXJhdG9yIDwgeCAqIHJuMS5kZW5vbWluYXRvcjtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNvbnN0IHJuMjogUmF0aW9uYWxOdW1iZXIgPSB4LnNpbXBsaWZpZWRGb3JtKCk7XHJcblx0XHRcdHJldHVybiBybjEubnVtZXJhdG9yICogcm4yLmRlbm9taW5hdG9yIDwgcm4yLm51bWVyYXRvciAqIHJuMS5kZW5vbWluYXRvcjtcclxuXHRcdH1cclxuXHR9XHJcblx0cHVibGljIGxlKHg6IG51bWJlciB8IFJhdGlvbmFsTnVtYmVyKTogYm9vbGVhbiB7XHJcblx0XHRjb25zdCBybjE6IFJhdGlvbmFsTnVtYmVyID0gdGhpcy5zaW1wbGlmaWVkRm9ybSgpO1xyXG5cdFx0aWYgKHR5cGVvZiB4ID09PSBcIm51bWJlclwiKSB7XHJcblx0XHRcdHJldHVybiBybjEubnVtZXJhdG9yIDw9IHggKiBybjEuZGVub21pbmF0b3I7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjb25zdCBybjI6IFJhdGlvbmFsTnVtYmVyID0geC5zaW1wbGlmaWVkRm9ybSgpO1xyXG5cdFx0XHRyZXR1cm4gcm4xLm51bWVyYXRvciAqIHJuMi5kZW5vbWluYXRvciA8PSBybjIubnVtZXJhdG9yICogcm4xLmRlbm9taW5hdG9yO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRwdWJsaWMgZ3QoeDogbnVtYmVyIHwgUmF0aW9uYWxOdW1iZXIpOiBib29sZWFuIHtcclxuXHRcdGNvbnN0IHJuMTogUmF0aW9uYWxOdW1iZXIgPSB0aGlzLnNpbXBsaWZpZWRGb3JtKCk7XHJcblx0XHRpZiAodHlwZW9mIHggPT09IFwibnVtYmVyXCIpIHtcclxuXHRcdFx0cmV0dXJuIHJuMS5udW1lcmF0b3IgPiB4ICogcm4xLmRlbm9taW5hdG9yO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y29uc3Qgcm4yOiBSYXRpb25hbE51bWJlciA9IHguc2ltcGxpZmllZEZvcm0oKTtcclxuXHRcdFx0cmV0dXJuIHJuMS5udW1lcmF0b3IgKiBybjIuZGVub21pbmF0b3IgPiBybjIubnVtZXJhdG9yICogcm4xLmRlbm9taW5hdG9yO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRwdWJsaWMgZ2UoeDogbnVtYmVyIHwgUmF0aW9uYWxOdW1iZXIpOiBib29sZWFuIHtcclxuXHRcdGNvbnN0IHJuMTogUmF0aW9uYWxOdW1iZXIgPSB0aGlzLnNpbXBsaWZpZWRGb3JtKCk7XHJcblx0XHRpZiAodHlwZW9mIHggPT09IFwibnVtYmVyXCIpIHtcclxuXHRcdFx0cmV0dXJuIHJuMS5udW1lcmF0b3IgPj0geCAqIHJuMS5kZW5vbWluYXRvcjtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNvbnN0IHJuMjogUmF0aW9uYWxOdW1iZXIgPSB4LnNpbXBsaWZpZWRGb3JtKCk7XHJcblx0XHRcdHJldHVybiBybjEubnVtZXJhdG9yICogcm4yLmRlbm9taW5hdG9yID49IHJuMi5udW1lcmF0b3IgKiBybjEuZGVub21pbmF0b3I7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvLyBtdWx0aXBsaWNhdGl2ZSBpbnZlcnNlXHJcblx0cHVibGljIHJlY2lwcm9jYWwoKTogUmF0aW9uYWxOdW1iZXIge1xyXG5cdFx0aWYgKHRoaXMuZGVub21pbmF0b3IgPT09IDApIHsgdGhyb3cgbmV3IEVycm9yKFwiRGl2aXNpb24gYnkgemVybyFcIik7IH1cclxuXHRcdHJldHVybiBuZXcgUmF0aW9uYWxOdW1iZXIodGhpcy5kZW5vbWluYXRvciwgdGhpcy5udW1lcmF0b3IpO1xyXG5cdH1cclxuXHQvLyBhZGRpdGl2ZSBpbnZlcnNlXHJcblx0cHVibGljIG9wcG9zaXRlKCk6IFJhdGlvbmFsTnVtYmVyIHtcclxuXHRcdHJldHVybiBuZXcgUmF0aW9uYWxOdW1iZXIodGhpcy5udW1lcmF0b3IgKiAoLTEpLCB0aGlzLmRlbm9taW5hdG9yKTtcclxuXHR9XHJcblx0cHVibGljIGFkZCh4OiBudW1iZXIgfCBSYXRpb25hbE51bWJlcik6IFJhdGlvbmFsTnVtYmVyIHtcclxuXHRcdGlmICh0eXBlb2YgeCA9PT0gXCJudW1iZXJcIikge1xyXG5cdFx0XHRyZXR1cm4gbmV3IFJhdGlvbmFsTnVtYmVyKCh0aGlzLm51bWVyYXRvciArIHggKiB0aGlzLmRlbm9taW5hdG9yKSwgdGhpcy5kZW5vbWluYXRvcik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjb25zdCBsY206IG51bWJlciA9IFJhdGlvbmFsTnVtYmVyLmxlYXN0Q29tbW9uTXVsdGlwbGUodGhpcy5kZW5vbWluYXRvciwgeC5kZW5vbWluYXRvcik7XHJcblx0XHRcdGNvbnN0IG4xOiBudW1iZXIgPSB0aGlzLm51bWVyYXRvciAqIGxjbSAvIHRoaXMuZGVub21pbmF0b3I7XHJcblx0XHRcdGNvbnN0IG4yOiBudW1iZXIgPSB4Lm51bWVyYXRvciAqIGxjbSAvIHguZGVub21pbmF0b3I7XHJcblx0XHRcdHJldHVybiBuZXcgUmF0aW9uYWxOdW1iZXIobjEgKyBuMiwgbGNtKTtcclxuXHRcdH1cclxuXHR9XHJcblx0cHVibGljIHN1Yih4OiBudW1iZXIgfCBSYXRpb25hbE51bWJlcik6IFJhdGlvbmFsTnVtYmVyIHtcclxuXHRcdGlmICh0eXBlb2YgeCA9PT0gXCJudW1iZXJcIikge1xyXG5cdFx0XHRyZXR1cm4gbmV3IFJhdGlvbmFsTnVtYmVyKCh0aGlzLm51bWVyYXRvciAtIHggKiB0aGlzLmRlbm9taW5hdG9yKSwgdGhpcy5kZW5vbWluYXRvcik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjb25zdCBsY206IG51bWJlciA9IFJhdGlvbmFsTnVtYmVyLmxlYXN0Q29tbW9uTXVsdGlwbGUodGhpcy5kZW5vbWluYXRvciwgeC5kZW5vbWluYXRvcik7XHJcblx0XHRcdGNvbnN0IG4xOiBudW1iZXIgPSB0aGlzLm51bWVyYXRvciAqIGxjbSAvIHRoaXMuZGVub21pbmF0b3I7XHJcblx0XHRcdGNvbnN0IG4yOiBudW1iZXIgPSB4Lm51bWVyYXRvciAqIGxjbSAvIHguZGVub21pbmF0b3I7XHJcblx0XHRcdHJldHVybiBuZXcgUmF0aW9uYWxOdW1iZXIobjEgLSBuMiwgbGNtKTtcclxuXHRcdH1cclxuXHR9XHJcblx0cHVibGljIG11bHQoeDogbnVtYmVyIHwgUmF0aW9uYWxOdW1iZXIpOiBSYXRpb25hbE51bWJlciB7XHJcblx0XHRpZiAodHlwZW9mIHggPT09IFwibnVtYmVyXCIpIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBSYXRpb25hbE51bWJlcigodGhpcy5udW1lcmF0b3IgKiB4KSwgdGhpcy5kZW5vbWluYXRvcik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gbmV3IFJhdGlvbmFsTnVtYmVyKCh0aGlzLm51bWVyYXRvciAqIHgubnVtZXJhdG9yKSwgeC5kZW5vbWluYXRvciAqIHRoaXMuZGVub21pbmF0b3IpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRwdWJsaWMgZGl2KHg6IG51bWJlciB8IFJhdGlvbmFsTnVtYmVyKTogUmF0aW9uYWxOdW1iZXIge1xyXG5cdFx0aWYgKHR5cGVvZiB4ID09PSBcIm51bWJlclwiKSB7XHJcblx0XHRcdHJldHVybiBuZXcgUmF0aW9uYWxOdW1iZXIoKHRoaXMubnVtZXJhdG9yKSwgdGhpcy5kZW5vbWluYXRvciAqIHgpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBSYXRpb25hbE51bWJlcigodGhpcy5udW1lcmF0b3IgKiB4LmRlbm9taW5hdG9yKSwgeC5udW1lcmF0b3IgKiB0aGlzLmRlbm9taW5hdG9yKTtcclxuXHRcdH1cclxuXHR9XHJcblx0cHVibGljIGV4cCh4OiBudW1iZXIgfCBSYXRpb25hbE51bWJlcik6IFJhdGlvbmFsTnVtYmVyIHtcclxuXHRcdGlmICh0eXBlb2YgeCA9PT0gXCJudW1iZXJcIikge1xyXG5cdFx0XHRyZXR1cm4gbmV3IFJhdGlvbmFsTnVtYmVyKHRoaXMubnVtZXJhdG9yICoqIHgsIHRoaXMuZGVub21pbmF0b3IgKiogeCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAodGhpcy5kZW5vbWluYXRvciAhPT0gMSkgeyB0aHJvdyBFcnJvcihcIkV4cG9uZW50aWF0aW9uIHdpdGggcmF0aW9uYWwgcG93ZXJzIG5vdCBzdXBwb3J0ZWQuXCIpOyB9XHJcblx0XHRcdHJldHVybiBuZXcgUmF0aW9uYWxOdW1iZXIodGhpcy5udW1lcmF0b3IgKiogeC5udW1lcmF0b3IsIHRoaXMuZGVub21pbmF0b3IgKiogeC5udW1lcmF0b3IpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRwdWJsaWMgdG9OdW1iZXIoKTogbnVtYmVyIHtcclxuXHRcdHJldHVybiB0aGlzLm51bWVyYXRvciAvIHRoaXMuZGVub21pbmF0b3I7XHJcblx0fVxyXG5cdHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xyXG5cdFx0cmV0dXJuIHRoaXMubnVtZXJhdG9yLnRvU3RyaW5nKCkgKyAoMSA9PT0gdGhpcy5kZW5vbWluYXRvciA/IFwiXCIgOiBcIi9cIiArIHRoaXMuZGVub21pbmF0b3IudG9TdHJpbmcoKSk7XHJcblx0fVxyXG5cdHB1YmxpYyBkZWVwQ29weSgpOiBSYXRpb25hbE51bWJlciB7XHJcblx0XHRyZXR1cm4gbmV3IFJhdGlvbmFsTnVtYmVyKHRoaXMubnVtZXJhdG9yLCB0aGlzLmRlbm9taW5hdG9yKTtcclxuXHR9XHJcbn0iLCJleHBvcnQgY2xhc3MgU3RhY2s8VD4ge1xyXG5cdHByaXZhdGUgc3RhY2s6IFRbXTtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuc3RhY2sgPSBbXTtcclxuXHR9XHJcblx0cHVibGljIGlzRW1wdHkoKTogYm9vbGVhbiB7XHJcblx0XHRyZXR1cm4gdGhpcy5zdGFjay5sZW5ndGggPT09IDA7XHJcblx0fVxyXG5cdHB1YmxpYyBwdXNoKGVsZW1lbnQ6IFQpOiB2b2lkIHtcclxuXHRcdHRoaXMuc3RhY2sucHVzaChlbGVtZW50KTtcclxuXHR9XHJcblx0cHVibGljIHBvcCgpOiBUIHtcclxuXHRcdGlmICh0aGlzLmlzRW1wdHkoKSkgeyB0aHJvdyBuZXcgRXJyb3IoXCJTdGFjayBpcyBlbXB0eVwiKTsgfVxyXG5cdFx0cmV0dXJuIHRoaXMuc3RhY2sucG9wKCk7XHJcblx0fVxyXG5cdHB1YmxpYyBwZWVrKCk6IFQge1xyXG5cdFx0aWYgKHRoaXMuaXNFbXB0eSgpKSB7IHRocm93IG5ldyBFcnJvcihcIlN0YWNrIGlzIGVtcHR5XCIpOyB9XHJcblx0XHRyZXR1cm4gdGhpcy5zdGFja1t0aGlzLnN0YWNrLmxlbmd0aCAtIDFdO1xyXG5cdH1cclxuXHRwdWJsaWMgdG9BcnJheSgpOiBUW10ge1xyXG5cdFx0cmV0dXJuIHRoaXMuc3RhY2s7XHJcblx0fVxyXG59IiwiaW1wb3J0IHsgTWF0cml4IH0gZnJvbSBcIi4vTWF0cml4XCI7XHJcbmltcG9ydCB7IFJhdGlvbmFsTnVtYmVyIH0gZnJvbSBcIi4vUmF0aW9uYWxOdW1iZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBWZWN0b3Ige1xyXG5cdHB1YmxpYyBzdGF0aWMgYXJlTGluZWFybHlJbmRlcGVuZGVudCh2ZWN0b3JzOiBWZWN0b3JbXSk6IGJvb2xlYW4ge1xyXG5cdFx0Y29uc3QgbTogbnVtYmVyID0gdmVjdG9ycy5sZW5ndGg7XHJcblx0XHRpZiAoMCA9PT0gbSkgeyByZXR1cm4gdHJ1ZTsgfVxyXG5cdFx0Y29uc3QgbjogbnVtYmVyID0gdmVjdG9yc1swXS5tO1xyXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMTsgaSA8IHZlY3RvcnMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0aWYgKG4gIT09IHZlY3RvcnNbaV0ubSkgeyB0aHJvdyBuZXcgRXJyb3IoXCJNaXNtYXRjaGVkIGRpbWVuc2lvbnMuXCIpOyB9XHJcblx0XHR9XHJcblx0XHRpZiAobSA+IG4pIHsgcmV0dXJuIGZhbHNlOyB9XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJOb3QgaW1wbGVtZW50ZWQuXCIpO1xyXG5cdH1cclxuXHRwdWJsaWMgbTogbnVtYmVyO1xyXG5cdHB1YmxpYyBlbGVtZW50czogUmF0aW9uYWxOdW1iZXJbXTtcclxuXHRjb25zdHJ1Y3RvcihuOiBudW1iZXIgfCBudW1iZXJbXSk7XHJcblx0Y29uc3RydWN0b3IobjogYW55KSB7XHJcblx0XHRpZiAodHlwZW9mIG4gPT09IFwibnVtYmVyXCIpIHtcclxuXHRcdFx0dGhpcy5tID0gbjtcclxuXHRcdFx0dGhpcy5lbGVtZW50cyA9IFtdO1xyXG5cdFx0fSBlbHNlIGlmIChuIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuXHRcdFx0dGhpcy5tID0gbi5sZW5ndGg7XHJcblx0XHRcdHRoaXMuZWxlbWVudHMgPSBbXTtcclxuXHRcdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMubTsgaSsrKSB7XHJcblx0XHRcdFx0dGhpcy5lbGVtZW50c1tpXSA9IG5ldyBSYXRpb25hbE51bWJlcihuW2ldKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRwdWJsaWMgYWRkKHg6IFZlY3Rvcik6IFZlY3RvciB7XHJcblx0XHRpZiAodGhpcy5tICE9PSB4Lm0pIHsgdGhyb3cgbmV3IEVycm9yKFwiTWlzbWF0Y2hlZCBkaW1lbnNpb25zLlwiKTsgfVxyXG5cdFx0Y29uc3QgcmVzOiBWZWN0b3IgPSBuZXcgVmVjdG9yKHRoaXMubSk7XHJcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgcmVzLm07IGkrKykge1xyXG5cdFx0XHRyZXMuZWxlbWVudHNbaV0gPSB0aGlzLmVsZW1lbnRzW2ldLmFkZCh4LmVsZW1lbnRzW2ldKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiByZXM7XHJcblx0fVxyXG5cdHB1YmxpYyBzdWIoeDogVmVjdG9yKTogVmVjdG9yIHtcclxuXHRcdGlmICh0aGlzLm0gIT09IHgubSkgeyB0aHJvdyBuZXcgRXJyb3IoXCJNaXNtYXRjaGVkIGRpbWVuc2lvbnMuXCIpOyB9XHJcblx0XHRjb25zdCByZXM6IFZlY3RvciA9IG5ldyBWZWN0b3IodGhpcy5tKTtcclxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCByZXMubTsgaSsrKSB7XHJcblx0XHRcdHJlcy5lbGVtZW50c1tpXSA9IHRoaXMuZWxlbWVudHNbaV0uc3ViKHguZWxlbWVudHNbaV0pO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlcztcclxuXHR9XHJcblx0cHVibGljIG11bHQoeDogUmF0aW9uYWxOdW1iZXIpOiBWZWN0b3Ige1xyXG5cdFx0Y29uc3QgcmVzOiBWZWN0b3IgPSBuZXcgVmVjdG9yKHRoaXMubSk7XHJcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgcmVzLm07IGkrKykge1xyXG5cdFx0XHRyZXMuZWxlbWVudHNbaV0gPSB0aGlzLmVsZW1lbnRzW2ldLm11bHQoeCk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzO1xyXG5cdH1cclxuXHQvLyBbQUxJQVNFU106IGlubmVyUHJvZHVjdCwgcHJvamVjdGlvblByb2R1Y3QsIHNjYWxhclByb2R1Y3RcclxuXHRwdWJsaWMgZG90UHJvZHVjdCh4OiBWZWN0b3IpOiBSYXRpb25hbE51bWJlciB7XHJcblx0XHRpZiAodGhpcy5tICE9PSB4Lm0pIHsgdGhyb3cgbmV3IEVycm9yKFwiTWlzbWF0Y2hlZCBkaW1lbnNpb25zLlwiKTsgfVxyXG5cdFx0bGV0IHJlczogUmF0aW9uYWxOdW1iZXIgPSBuZXcgUmF0aW9uYWxOdW1iZXIoMCk7XHJcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgeC5tOyBpKyspIHtcclxuXHRcdFx0cmVzID0gcmVzLmFkZCh0aGlzLmVsZW1lbnRzW2ldLm11bHQoeC5lbGVtZW50c1tpXSkpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlcztcclxuXHR9XHJcblx0Ly8gW0FMSUFTRVNdOiBkaXJlY3RlZEFyZWFQcm9kdWN0LCB2ZWN0b3JQcm9kdWN0XHJcblx0cHVibGljIGNyb3NzUHJvZHVjdCh4OiBWZWN0b3IpOiBWZWN0b3Ige1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiTm90IGltcGxlbWVudGVkLlwiKTtcclxuXHR9XHJcblx0Ly8gW0FMSUFTRVNdOiBtYWduaXR1ZGUsIG5vcm1cclxuXHRwdWJsaWMgbGVuZ3RoKCk6IFJhdGlvbmFsTnVtYmVyIHtcclxuXHRcdGNvbnN0IGxlbmd0aDogUmF0aW9uYWxOdW1iZXIgPSBuZXcgUmF0aW9uYWxOdW1iZXIoMCk7XHJcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5tOyBpKyspIHtcclxuXHRcdFx0bGVuZ3RoLmFkZCh0aGlzLmVsZW1lbnRzW2ldKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBsZW5ndGg7XHJcblx0fVxyXG5cdHB1YmxpYyBkZWVwQ29weSgpOiBWZWN0b3Ige1xyXG5cdFx0Y29uc3QgcmV0OiBWZWN0b3IgPSBuZXcgVmVjdG9yKHRoaXMubSk7XHJcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5tOyBpKyspIHtcclxuXHRcdFx0cmV0LmVsZW1lbnRzW2ldID0gdGhpcy5lbGVtZW50c1tpXTtcclxuXHRcdH1cclxuXHRcdHJldHVybiByZXQ7XHJcblx0fVxyXG5cdHB1YmxpYyB0b01hdHJpeCgpOiBNYXRyaXgge1xyXG5cdFx0Y29uc3QgcmV0OiBNYXRyaXggPSBuZXcgTWF0cml4KHRoaXMubSwgMSk7XHJcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5tOyBpKyspIHtcclxuXHRcdFx0cmV0LmVsZW1lbnRzW2ldWzBdID0gdGhpcy5lbGVtZW50c1tpXTtcclxuXHRcdH1cclxuXHRcdHJldHVybiByZXQ7XHJcblx0fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBDb2x1bW5WZWN0b3IgZXh0ZW5kcyBWZWN0b3Ige1xyXG59XHJcbmV4cG9ydCBjbGFzcyBSb3dWZWN0b3IgZXh0ZW5kcyBWZWN0b3Ige1xyXG5cdHB1YmxpYyBtYXRyaXhQcm9kdWN0KG06IE1hdHJpeCk6IFJvd1ZlY3RvciB7XHJcblx0XHRpZiAodGhpcy5tICE9PSBtLm4pIHsgdGhyb3cgbmV3IEVycm9yKFwiTWlzbWF0Y2hlZCBkaW1lbnNpb25zLlwiKTsgfVxyXG5cdFx0Y29uc3QgcmVzOiBSb3dWZWN0b3IgPSBuZXcgUm93VmVjdG9yKHRoaXMubSk7XHJcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5tOyBpKyspIHtcclxuXHRcdFx0bGV0IHN1bTogUmF0aW9uYWxOdW1iZXIgPSBuZXcgUmF0aW9uYWxOdW1iZXIoMCk7XHJcblx0XHRcdGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCBtLm47IGorKykge1xyXG5cdFx0XHRcdHN1bSA9IHN1bS5hZGQobS5lbGVtZW50c1tpXVtqXS5tdWx0KHRoaXMuZWxlbWVudHNbaV0pKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXMuZWxlbWVudHNbaV0gPSBzdW07XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzO1xyXG5cdH1cclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0aWYgKCEobW9kdWxlSWQgaW4gX193ZWJwYWNrX21vZHVsZXNfXykpIHtcblx0XHRkZWxldGUgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBtb2R1bGVJZCArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBBTFVHZW5lcmF0b3IgfSBmcm9tIFwiLi4vZ2VuZXJhdG9ycy9BTFVHZW5lcmF0b3JcIjtcclxuaW1wb3J0IHsgTWF0cml4UHJlc2VudGVyIH0gZnJvbSBcIi4uL3ByZXNlbnRlcnMvTWF0cml4UHJlc2VudGVyXCI7XHJcbmltcG9ydCB7IE1hdHJpeCwgTWF0cml4SWRlbnRpdHkgfSBmcm9tIFwiLi4vc3RydWN0dXJlcy9NYXRyaXhcIjtcclxuaW1wb3J0IHsgUmF0aW9uYWxOdW1iZXIgfSBmcm9tIFwiLi4vc3RydWN0dXJlcy9SYXRpb25hbE51bWJlclwiO1xyXG5pbXBvcnQgeyBTdGFjayB9IGZyb20gXCIuLi9zdHJ1Y3R1cmVzL1N0YWNrXCI7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcblx0ZnVuY3Rpb24gdG9nZ2xlKGlkOiBzdHJpbmcpIHtcclxuXHRcdGNvbnN0IGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG5cdFx0aWYgKGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9PSAnbm9uZScpIHtcclxuXHRcdFx0ZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0ZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcblx0XHR9XHJcblx0fVxyXG5cdGNvbnN0IGdlbmVyYXRvcjogQUxVR2VuZXJhdG9yID0gbmV3IEFMVUdlbmVyYXRvcigpO1xyXG5cdGxldCB1bmRvU3RhY2s6IFN0YWNrPE1hdHJpeD47XHJcblx0bGV0IHJlZG9TdGFjazogU3RhY2s8TWF0cml4PjtcclxuXHRsZXQgdW5kb0xTdGFjazogU3RhY2s8TWF0cml4PjtcclxuXHRsZXQgcmVkb0xTdGFjazogU3RhY2s8TWF0cml4PjtcclxuXHRjb25zdCBpbml0aWFsTWF0cml4OiBNYXRyaXggPSBnZW5lcmF0b3IucmFuZG9tKCk7XHJcblx0bGV0IFA6IE1hdHJpeCA9IG51bGw7XHJcblx0bGV0IEE6IE1hdHJpeCA9IG51bGw7XHJcblx0bGV0IFU6IE1hdHJpeCA9IG51bGw7XHJcblx0bGV0IEw6IE1hdHJpeCA9IG51bGw7XHJcblx0bGV0IG9wZXJhdGlvbkRpdklkeDogbnVtYmVyID0gMDtcclxuXHRpbml0KCk7XHJcblx0TWF0cml4UHJlc2VudGVyLnByaW50VGFibGVNYXRyaXgoaW5pdGlhbE1hdHJpeCwgKDxIVE1MRGl2RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikpKTtcclxuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0blN3aXRjaFJvd3NcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXJyb3JcIikudGV4dENvbnRlbnQgPSBcIlwiO1xyXG5cdFx0Y29uc3QgaWR4Um93MTogbnVtYmVyID0gTnVtYmVyKCg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvdzFcIikpLnZhbHVlKSAtIDE7XHJcblx0XHRjb25zdCBpZHhSb3cyOiBudW1iZXIgPSBOdW1iZXIoKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm93MlwiKSkudmFsdWUpIC0gMTtcclxuXHRcdGlmICgwID4gaWR4Um93MSB8fCBBLm0gPCBpZHhSb3cxIHx8IDAgPiBpZHhSb3cyIHx8IEEubSA8IGlkeFJvdzIpIHtcclxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlcnJvclwiKS50ZXh0Q29udGVudCA9IFwiUm93IGluZGV4IG11c3QgYmUgZ3JlYXRlciB0aGFuIDAgYW5kIHNtYWxsZXIgdGhhbiBcIiArIEEubTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0cHJlUHJvY2Vzc09wZXJhdGlvbigpO1xyXG5cdFx0UC5zd2l0Y2hSb3dzKGlkeFJvdzEsIGlkeFJvdzIpO1xyXG5cdFx0VS5zd2l0Y2hSb3dzKGlkeFJvdzEsIGlkeFJvdzIpO1xyXG5cdFx0TC5zd2l0Y2hSb3dzKGlkeFJvdzEsIGlkeFJvdzIpO1xyXG5cdFx0cG9zdFByb2Nlc3NPcGVyYXRpb24oXCJTd2l0Y2hlZCByb3cgXCIgKyAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb3cxXCIpKS52YWx1ZSArIFwiIHdpdGggcm93IFwiICsgKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm93MlwiKSkudmFsdWUgKyBcIi5cIik7XHJcblx0fSk7XHJcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG5BZGRSb3dzXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVycm9yXCIpLnRleHRDb250ZW50ID0gXCJcIjtcclxuXHRcdGNvbnN0IGlkeFJvdzE6IG51bWJlciA9IE51bWJlcigoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRSb3cxSWR4XCIpKS52YWx1ZSkgLSAxO1xyXG5cdFx0Y29uc3QgaWR4Um93MjogbnVtYmVyID0gTnVtYmVyKCg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFJvdzJJZHhcIikpLnZhbHVlKSAtIDE7XHJcblx0XHRjb25zdCBzY2FsYXI6IFJhdGlvbmFsTnVtYmVyID0gUmF0aW9uYWxOdW1iZXIuZnJvbVN0cmluZygoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRSb3cxTXVsdFwiKSkudmFsdWUudG9TdHJpbmcoKSk7XHJcblx0XHRpZiAoMCA+IGlkeFJvdzEgfHwgVS5tIDwgaWR4Um93MSB8fCAwID4gaWR4Um93MiB8fCBVLm0gPCBpZHhSb3cyKSB7XHJcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXJyb3JcIikudGV4dENvbnRlbnQgPSBcIlJvdyBpbmRleCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiAwIGFuZCBzbWFsbGVyIHRoYW4gXCIgKyBVLm07XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdHByZVByb2Nlc3NPcGVyYXRpb24oKTtcclxuXHRcdFUuYWRkUm93cyhpZHhSb3cyLCBpZHhSb3cxLCBzY2FsYXIpO1xyXG5cdFx0TC5lbGVtZW50c1tpZHhSb3cyXVtpZHhSb3cxXSA9IHNjYWxhci5kZWVwQ29weSgpLnNpbXBsaWZpZWRGb3JtKClcclxuXHRcdC5tdWx0KC0xKTsgLy8gbmVnYXRpdmUgYmVjYXVzZSBpdCByZXByZXNlbnRzIHRoZSBpbnZlcnNlIG9mIGFuIGVsaW1pbmF0aW9uIG1hdHJpeCBFXHJcblx0XHRwb3N0UHJvY2Vzc09wZXJhdGlvbihcIkFkZGVkIFwiICsgc2NhbGFyICsgXCIgdGltZShzKSByb3cgXCIgKyAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRSb3cxSWR4XCIpKS52YWx1ZSArIFwiIHRvIHJvd1wiICsgKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkUm93MklkeFwiKSkudmFsdWUgKyBcIi5cIik7XHJcblx0fSk7XHJcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG5VbmRvXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcblx0XHRpZiAodW5kb1N0YWNrLmlzRW1wdHkoKSB8fCB1bmRvTFN0YWNrLmlzRW1wdHkoKSkgeyByZXR1cm47IH1cclxuXHRcdHJlZG9TdGFjay5wdXNoKG51bGwgIT0gVSA/IFUuZGVlcENvcHkoKSA6IG51bGwpO1xyXG5cdFx0VSA9IHVuZG9TdGFjay5wb3AoKTtcclxuXHRcdGxldCBkaXZJZDogc3RyaW5nID0gXCJvcGVyYXRpb25EaXZcIiArIG9wZXJhdGlvbkRpdklkeDtcclxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRpdklkKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblx0XHRjb25zdCBidXR0b25JZDogc3RyaW5nID0gXCJ0b2dnbGVCdXR0b25cIiArIG9wZXJhdGlvbkRpdklkeDtcclxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGJ1dHRvbklkKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblx0XHQtLW9wZXJhdGlvbkRpdklkeDtcclxuXHRcdGRpdklkID0gXCJvcGVyYXRpb25EaXZcIiArIG9wZXJhdGlvbkRpdklkeDtcclxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRpdklkKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5cdFx0c2V0RWRpdE9wZXJhdGlvbnMoKTtcclxuXHRcdHNldEF2YWlsYWJsZU9wZXJhdGlvbnMoKTtcclxuXHR9KTtcclxuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0blJlZG9cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuXHRcdGlmIChyZWRvU3RhY2suaXNFbXB0eSgpIHx8IHJlZG9MU3RhY2suaXNFbXB0eSgpKSB7IHJldHVybjsgfVxyXG5cdFx0dW5kb1N0YWNrLnB1c2gobnVsbCAhPSBVID8gVS5kZWVwQ29weSgpIDogbnVsbCk7XHJcblx0XHRVID0gcmVkb1N0YWNrLnBvcCgpO1xyXG5cdFx0dW5kb0xTdGFjay5wdXNoKG51bGwgIT0gTCA/IEwuZGVlcENvcHkoKSA6IG51bGwpO1xyXG5cdFx0TCA9IHJlZG9MU3RhY2sucG9wKCk7XHJcblx0XHRsZXQgZGl2SWQ6IHN0cmluZyA9IFwib3BlcmF0aW9uRGl2XCIgKyBvcGVyYXRpb25EaXZJZHg7XHJcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkaXZJZCkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cdFx0KytvcGVyYXRpb25EaXZJZHg7XHJcblx0XHRkaXZJZCA9IFwib3BlcmF0aW9uRGl2XCIgKyBvcGVyYXRpb25EaXZJZHg7XHJcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkaXZJZCkuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHRcdGNvbnN0IGJ1dHRvbklkOiBzdHJpbmcgPSBcInRvZ2dsZUJ1dHRvblwiICsgb3BlcmF0aW9uRGl2SWR4O1xyXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYnV0dG9uSWQpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcblx0XHRzZXRFZGl0T3BlcmF0aW9ucygpO1xyXG5cdFx0c2V0QXZhaWxhYmxlT3BlcmF0aW9ucygpO1xyXG5cdH0pO1xyXG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuUmVzZXRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuXHRcdGluaXQoKTtcclxuXHRcdHdoaWxlIChvcGVyYXRpb25EaXZJZHggPiAwKSB7XHJcblx0XHRcdGNvbnN0IGRpdklkOiBzdHJpbmcgPSBcIm9wZXJhdGlvbkRpdlwiICsgb3BlcmF0aW9uRGl2SWR4O1xyXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkaXZJZCkucmVtb3ZlKCk7XHJcblx0XHRcdGNvbnN0IGJ1dHRvbklkOiBzdHJpbmcgPSBcInRvZ2dsZUJ1dHRvblwiICsgb3BlcmF0aW9uRGl2SWR4O1xyXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChidXR0b25JZCkucmVtb3ZlKCk7XHJcblx0XHRcdC0tb3BlcmF0aW9uRGl2SWR4O1xyXG5cdFx0fVxyXG5cdFx0c2V0RWRpdE9wZXJhdGlvbnMoKTtcclxuXHRcdHNldEF2YWlsYWJsZU9wZXJhdGlvbnMoKTtcclxuXHR9KTtcclxuXHRmdW5jdGlvbiBpbml0KCk6IHZvaWQge1xyXG5cdFx0dW5kb1N0YWNrID0gbmV3IFN0YWNrPE1hdHJpeD4oKTtcclxuXHRcdHJlZG9TdGFjayA9IG5ldyBTdGFjazxNYXRyaXg+KCk7XHJcblx0XHR1bmRvTFN0YWNrID0gbmV3IFN0YWNrPE1hdHJpeD4oKTtcclxuXHRcdHJlZG9MU3RhY2sgPSBuZXcgU3RhY2s8TWF0cml4PigpO1xyXG5cdFx0QSA9IGluaXRpYWxNYXRyaXguZGVlcENvcHkoKTtcclxuXHRcdFUgPSBpbml0aWFsTWF0cml4LmRlZXBDb3B5KCk7XHJcblx0XHRMID0gbmV3IE1hdHJpeElkZW50aXR5KFUubSk7XHJcblx0XHRQID0gbmV3IE1hdHJpeElkZW50aXR5KFUubSk7XHJcblx0XHRzZXRFZGl0T3BlcmF0aW9ucygpO1xyXG5cdFx0c2V0QXZhaWxhYmxlT3BlcmF0aW9ucygpO1xyXG5cdH1cclxuXHRmdW5jdGlvbiBwcmVQcm9jZXNzT3BlcmF0aW9uKCk6IHZvaWQge1xyXG5cdFx0dW5kb1N0YWNrLnB1c2gobnVsbCAhPSBVID8gVS5kZWVwQ29weSgpIDogbnVsbCk7XHJcblx0XHR1bmRvTFN0YWNrLnB1c2gobnVsbCAhPSBMID8gTC5kZWVwQ29weSgpIDogbnVsbCk7XHJcblx0fVxyXG5cdGZ1bmN0aW9uIHBvc3RQcm9jZXNzT3BlcmF0aW9uKHRpdGxlOiBzdHJpbmcpOiB2b2lkIHtcclxuXHRcdGNsZWFyUmVkbygpO1xyXG5cdFx0aWYgKG9wZXJhdGlvbkRpdklkeCA+IDApIHsgdG9nZ2xlKFwib3BlcmF0aW9uRGl2XCIgKyBvcGVyYXRpb25EaXZJZHgpOyB9XHJcblx0XHQrK29wZXJhdGlvbkRpdklkeDtcclxuXHRcdGNvbnN0IGRpdklkOiBzdHJpbmcgPSBcIm9wZXJhdGlvbkRpdlwiICsgb3BlcmF0aW9uRGl2SWR4O1xyXG5cdFx0Y29uc3QgZGl2OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblx0XHRkaXYuaWQgPSBkaXZJZDtcclxuXHRcdGNvbnN0IGJ1dHRvbklkOiBzdHJpbmcgPSBcInRvZ2dsZUJ1dHRvblwiICsgb3BlcmF0aW9uRGl2SWR4O1xyXG5cdFx0Y29uc3QgdG9nZ2xlQnV0dG9uOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcblx0XHR0b2dnbGVCdXR0b24uaWQgPSBidXR0b25JZDtcclxuXHRcdHRvZ2dsZUJ1dHRvbi5jbGFzc05hbWUgPSBcIm9wZXJhdGlvbkJ1dHRvblwiO1xyXG5cdFx0dG9nZ2xlQnV0dG9uLnRleHRDb250ZW50ID0gdGl0bGU7XHJcblx0XHR0b2dnbGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuXHRcdFx0dG9nZ2xlKGRpdklkKTtcclxuXHRcdH0pO1xyXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpLmFwcGVuZENoaWxkKHRvZ2dsZUJ1dHRvbik7XHJcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikuYXBwZW5kQ2hpbGQoZGl2KTtcclxuXHRcdGNvbnN0IHByZXZpb3VzTWF0cml4OiBNYXRyaXggPSB1bmRvU3RhY2suaXNFbXB0eSgpID8gaW5pdGlhbE1hdHJpeCA6IHVuZG9TdGFjay5wZWVrKCk7XHJcblx0XHRjb25zdCBkZXNjcmlwdGlvbjogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdFx0ZGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJMKlU9UCpBXCIpKTtcclxuXHRcdE1hdHJpeFByZXNlbnRlci5wcmludE1hdHJpeEVxdWFsaXR5MihMLCBcIipcIiwgVSwgUCwgXCIqXCIsIEEsIGRlc2NyaXB0aW9uKTtcclxuXHRcdGRpdi5hcHBlbmQoZGVzY3JpcHRpb24pO1xyXG5cdFx0aWYgKFUuaXNVcHBlclRyaWFuZ3VsYXIoKSkge1xyXG5cdFx0XHR0b2dnbGVCdXR0b24uYXBwZW5kKFwiIFUgbWF0cml4IGZvdW5kIVwiKTtcclxuXHRcdH1cclxuXHRcdCg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvdzFcIikpLnZhbHVlID0gXCJcIjtcclxuXHRcdCg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvdzJcIikpLnZhbHVlID0gXCJcIjtcclxuXHRcdCg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvd0lkeFwiKSkudmFsdWUgPSBcIlwiO1xyXG5cdFx0KDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2NhbGFyXCIpKS52YWx1ZSA9IFwiMVwiO1xyXG5cdFx0KDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkUm93MUlkeFwiKSkudmFsdWUgPSBcIlwiO1xyXG5cdFx0KDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkUm93MU11bHRcIikpLnZhbHVlID0gXCIxXCI7XHJcblx0XHQoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRSb3cySWR4XCIpKS52YWx1ZSA9IFwiXCI7XHJcblx0XHQoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRSb3cyTXVsdFwiKSkudmFsdWUgPSBcIjFcIjtcclxuXHRcdHNldEVkaXRPcGVyYXRpb25zKCk7XHJcblx0XHRzZXRBdmFpbGFibGVPcGVyYXRpb25zKCk7XHJcblx0fVxyXG5cdGZ1bmN0aW9uIHNldEVkaXRPcGVyYXRpb25zKCk6IHZvaWQge1xyXG5cdFx0aWYgKHVuZG9TdGFjay5pc0VtcHR5KCkpIHtcclxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG5VbmRvXCIpLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0blVuZG9cIikucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XHJcblx0XHR9XHJcblx0XHRpZiAocmVkb1N0YWNrLmlzRW1wdHkoKSkge1xyXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0blJlZG9cIikuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuUmVkb1wiKS5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcclxuXHRcdH1cclxuXHR9XHJcblx0ZnVuY3Rpb24gY2xlYXJSZWRvKCk6IHZvaWQge1xyXG5cdFx0bGV0IGk6IG51bWJlciA9IG9wZXJhdGlvbkRpdklkeDtcclxuXHRcdHdoaWxlICghcmVkb1N0YWNrLmlzRW1wdHkoKSkge1xyXG5cdFx0XHQrK2k7XHJcblx0XHRcdGNvbnN0IGRpdklkOiBzdHJpbmcgPSBcIm9wZXJhdGlvbkRpdlwiICsgaTtcclxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGl2SWQpLnJlbW92ZSgpO1xyXG5cdFx0XHRjb25zdCBidXR0b25JZDogc3RyaW5nID0gXCJ0b2dnbGVCdXR0b25cIiArIGk7XHJcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGJ1dHRvbklkKS5yZW1vdmUoKTtcclxuXHRcdFx0cmVkb1N0YWNrLnBvcCgpO1xyXG5cdFx0XHRyZWRvTFN0YWNrLnBvcCgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gc2V0QXZhaWxhYmxlT3BlcmF0aW9ucygpOiB2b2lkIHtcclxuXHRcdGlmIChudWxsID09IFUpIHtcclxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXZTd2l0Y2hSb3dzXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXZBZGRSb3dzXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGl2U3dpdGNoUm93c1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpdkFkZFJvd3NcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHRcdH1cclxuXHR9XHJcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==