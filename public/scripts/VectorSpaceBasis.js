/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/generators/VectorSpaceGenerator.ts"
/*!************************************************!*\
  !*** ./src/generators/VectorSpaceGenerator.ts ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VectorSpaceGenerator: () => (/* binding */ VectorSpaceGenerator)
/* harmony export */ });
/* harmony import */ var _structures_RationalNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../structures/RationalNumber */ "./src/structures/RationalNumber.ts");
/* harmony import */ var _structures_Vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../structures/Vector */ "./src/structures/Vector.ts");
/* harmony import */ var _structures_VectorSpace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../structures/VectorSpace */ "./src/structures/VectorSpace.ts");



class VectorSpaceGenerator {
    probabilityToBeLinearlyIndependent = 0.8; // 80% for the set to have linearly independent vectors
    isLinearlyIndependent = Math.random() >= this.probabilityToBeLinearlyIndependent;
    vectorSpaceDimensionMin = 3;
    vectorSpaceDimensionMax = 7;
    vectorSpaceDimension = Math.floor(Math.random() *
        (this.vectorSpaceDimensionMax - this.vectorSpaceDimensionMin) + this.vectorSpaceDimensionMin);
    numberOfVectors = Math.floor(Math.random() * 4 + this.vectorSpaceDimension);
    random() {
        const ret = new _structures_VectorSpace__WEBPACK_IMPORTED_MODULE_2__.VectorSpace(this.numberOfVectors);
        for (let i = 0; i < ret.m; i++) {
            const v = new _structures_Vector__WEBPACK_IMPORTED_MODULE_1__.Vector(this.vectorSpaceDimension);
            for (let j = 0; j < v.m; j++) {
                v.elements[j] = new _structures_RationalNumber__WEBPACK_IMPORTED_MODULE_0__.RationalNumber(j === i ? 1 : 0);
            }
            ret.elements[i] = v;
        }
        return ret;
    }
}


/***/ },

/***/ "./src/presenters/VectorSpacePresenter.ts"
/*!************************************************!*\
  !*** ./src/presenters/VectorSpacePresenter.ts ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VectorSpacePresenter: () => (/* binding */ VectorSpacePresenter)
/* harmony export */ });
class VectorSpacePresenter {
    static printVectorSpace(vectorSpace, container) {
        let tableMain = document.createElement("table");
        container.append(tableMain);
        const trMain = document.createElement("tr");
        tableMain.append(trMain);
        for (let i = 0; i < vectorSpace.m; i++) {
            const tdMain = document.createElement("td");
            trMain.append(tdMain);
            if (i !== vectorSpace.m - 1) {
                const td2Main = document.createElement("td");
                td2Main.innerText = ",";
                td2Main.style.verticalAlign = "bottom";
                td2Main.style.paddingLeft = "5px";
                td2Main.style.paddingRight = "5px";
                trMain.append(td2Main);
            }
            const table = document.createElement("table");
            table.classList.add("matrix");
            tdMain.append(table);
            const vector = vectorSpace.elements[i];
            for (let j = 0; j < vector.m; j++) {
                const tr = document.createElement("tr");
                const td = document.createElement("td");
                td.innerText = vector.elements[j].toString();
                td.classList.add("matrixElement");
                tr.append(td);
                table.append(tr);
            }
        }
        const br = document.createElement("br");
        container.append(br);
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


/***/ },

/***/ "./src/structures/VectorSpace.ts"
/*!***************************************!*\
  !*** ./src/structures/VectorSpace.ts ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VectorSpace: () => (/* binding */ VectorSpace)
/* harmony export */ });
/* harmony import */ var _Matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Matrix */ "./src/structures/Matrix.ts");

class VectorSpace {
    m;
    elements;
    constructor(n) {
        if (typeof n === "number") {
            this.m = n;
            this.elements = [];
        }
        else if (n instanceof Array) {
            if (!n || 0 >= n.length) {
                throw new Error("At least one vector is needed to construct a vector space.");
            }
            const x = n[0].m;
            for (let i = 1; i < n.length; i++) {
                if (x !== n[i].m) {
                    throw new Error("All vectors must have the same length.");
                }
            }
            this.m = n.length;
            this.elements = n;
        }
    }
    findBasis() {
        let dim = 0;
        const M = this.toColumnsMatrix().toReducedRowEchelonForm();
        for (let i = 0; i < M.m && i < M.n; i++) {
            if (M.elements[i][i].equals(1)) {
                dim++;
            }
        }
        const res = new VectorSpace(dim);
        for (let i = 0; i < dim; i++) {
            res.elements[i] = this.elements[i].deepCopy();
        }
        return res;
    }
    toColumnsMatrix() {
        const res = new _Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(this.elements[0].m, this.m);
        for (let i = 0; i < res.n; i++) {
            for (let j = 0; j < res.m; j++) {
                res.elements[j][i] = this.elements[i].elements[j];
            }
        }
        return res;
    }
    toRowsMatrix() {
        const res = new _Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(this.m, this.elements[0].m);
        for (let i = 0; i < res.m; i++) {
            for (let j = 0; j < res.n; j++) {
                res.elements[i][j] = this.elements[i].elements[j];
            }
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
/*!*******************************************!*\
  !*** ./src/exercises/VectorSpaceBasis.ts ***!
  \*******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _generators_VectorSpaceGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../generators/VectorSpaceGenerator */ "./src/generators/VectorSpaceGenerator.ts");
/* harmony import */ var _presenters_VectorSpacePresenter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../presenters/VectorSpacePresenter */ "./src/presenters/VectorSpacePresenter.ts");


document.addEventListener("DOMContentLoaded", () => {
    const generator = new _generators_VectorSpaceGenerator__WEBPACK_IMPORTED_MODULE_0__.VectorSpaceGenerator();
    const vectorSpace = generator.random();
    _presenters_VectorSpacePresenter__WEBPACK_IMPORTED_MODULE_1__.VectorSpacePresenter.printVectorSpace(vectorSpace, document.getElementById("content"));
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7QUNOMEU7QUFDQTtBQUcxRSxRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxFQUFFO0lBQ2xELE1BQU0sU0FBUyxHQUF5QixJQUFJLGtGQUFvQixFQUFFLENBQUM7SUFDbkUsTUFBTSxXQUFXLEdBQWdCLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNwRCxrRkFBb0IsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQWtCLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztBQUN4RyxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xpbmVhcmFsZ2VicmEvLi9zcmMvZ2VuZXJhdG9ycy9WZWN0b3JTcGFjZUdlbmVyYXRvci50cyIsIndlYnBhY2s6Ly9saW5lYXJhbGdlYnJhLy4vc3JjL3ByZXNlbnRlcnMvVmVjdG9yU3BhY2VQcmVzZW50ZXIudHMiLCJ3ZWJwYWNrOi8vbGluZWFyYWxnZWJyYS8uL3NyYy9zdHJ1Y3R1cmVzL0FyaXRobWV0aWNFdmFsdWF0b3IudHMiLCJ3ZWJwYWNrOi8vbGluZWFyYWxnZWJyYS8uL3NyYy9zdHJ1Y3R1cmVzL01hdHJpeC50cyIsIndlYnBhY2s6Ly9saW5lYXJhbGdlYnJhLy4vc3JjL3N0cnVjdHVyZXMvUXVldWUudHMiLCJ3ZWJwYWNrOi8vbGluZWFyYWxnZWJyYS8uL3NyYy9zdHJ1Y3R1cmVzL1JhdGlvbmFsTnVtYmVyLnRzIiwid2VicGFjazovL2xpbmVhcmFsZ2VicmEvLi9zcmMvc3RydWN0dXJlcy9TdGFjay50cyIsIndlYnBhY2s6Ly9saW5lYXJhbGdlYnJhLy4vc3JjL3N0cnVjdHVyZXMvVmVjdG9yLnRzIiwid2VicGFjazovL2xpbmVhcmFsZ2VicmEvLi9zcmMvc3RydWN0dXJlcy9WZWN0b3JTcGFjZS50cyIsIndlYnBhY2s6Ly9saW5lYXJhbGdlYnJhL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xpbmVhcmFsZ2VicmEvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2xpbmVhcmFsZ2VicmEvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9saW5lYXJhbGdlYnJhL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbGluZWFyYWxnZWJyYS8uL3NyYy9leGVyY2lzZXMvVmVjdG9yU3BhY2VCYXNpcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSYXRpb25hbE51bWJlciB9IGZyb20gXCIuLi9zdHJ1Y3R1cmVzL1JhdGlvbmFsTnVtYmVyXCI7XHJcbmltcG9ydCB7IFZlY3RvciB9IGZyb20gXCIuLi9zdHJ1Y3R1cmVzL1ZlY3RvclwiO1xyXG5pbXBvcnQgeyBWZWN0b3JTcGFjZSB9IGZyb20gXCIuLi9zdHJ1Y3R1cmVzL1ZlY3RvclNwYWNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVmVjdG9yU3BhY2VHZW5lcmF0b3IgeyAvLyBub3QgbmVjZXNzYXJseSBhIHZlY3RvciBzcGFjZVxyXG5cdHB1YmxpYyBwcm9iYWJpbGl0eVRvQmVMaW5lYXJseUluZGVwZW5kZW50OiBudW1iZXIgPSAwLjg7IC8vIDgwJSBmb3IgdGhlIHNldCB0byBoYXZlIGxpbmVhcmx5IGluZGVwZW5kZW50IHZlY3RvcnNcclxuXHRwdWJsaWMgaXNMaW5lYXJseUluZGVwZW5kZW50OiBib29sZWFuID0gTWF0aC5yYW5kb20oKSA+PSB0aGlzLnByb2JhYmlsaXR5VG9CZUxpbmVhcmx5SW5kZXBlbmRlbnQ7XHJcblx0cHVibGljIHZlY3RvclNwYWNlRGltZW5zaW9uTWluOiBudW1iZXIgPSAzO1xyXG5cdHB1YmxpYyB2ZWN0b3JTcGFjZURpbWVuc2lvbk1heDogbnVtYmVyID0gNztcclxuXHRwdWJsaWMgdmVjdG9yU3BhY2VEaW1lbnNpb246IG51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqXHJcblx0XHQodGhpcy52ZWN0b3JTcGFjZURpbWVuc2lvbk1heCAtIHRoaXMudmVjdG9yU3BhY2VEaW1lbnNpb25NaW4pICsgdGhpcy52ZWN0b3JTcGFjZURpbWVuc2lvbk1pbik7XHJcblx0cHVibGljIG51bWJlck9mVmVjdG9yczogbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCArIHRoaXMudmVjdG9yU3BhY2VEaW1lbnNpb24pO1xyXG5cdHB1YmxpYyByYW5kb20oKTogVmVjdG9yU3BhY2Uge1xyXG5cdFx0Y29uc3QgcmV0OiBWZWN0b3JTcGFjZSA9IG5ldyBWZWN0b3JTcGFjZSh0aGlzLm51bWJlck9mVmVjdG9ycyk7XHJcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgcmV0Lm07IGkrKykge1xyXG5cdFx0XHRjb25zdCB2OiBWZWN0b3IgPSBuZXcgVmVjdG9yKHRoaXMudmVjdG9yU3BhY2VEaW1lbnNpb24pO1xyXG5cdFx0XHRmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgdi5tOyBqKyspIHtcclxuXHRcdFx0XHR2LmVsZW1lbnRzW2pdID0gbmV3IFJhdGlvbmFsTnVtYmVyKGogPT09IGkgPyAxIDogMCk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0LmVsZW1lbnRzW2ldID0gdjtcclxuXHRcdH1cclxuXHRcdHJldHVybiByZXQ7XHJcblx0fVxyXG59IiwiaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSBcIi4uL3N0cnVjdHVyZXMvVmVjdG9yXCI7XHJcbmltcG9ydCB7IFZlY3RvclNwYWNlIH0gZnJvbSBcIi4uL3N0cnVjdHVyZXMvVmVjdG9yU3BhY2VcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBWZWN0b3JTcGFjZVByZXNlbnRlciB7XHJcbiAgICBwdWJsaWMgc3RhdGljIHByaW50VmVjdG9yU3BhY2UodmVjdG9yU3BhY2U6IFZlY3RvclNwYWNlLCBjb250YWluZXI6IEhUTUxEaXZFbGVtZW50KTogdm9pZCB7XHJcblx0XHRsZXQgdGFibGVNYWluOiBIVE1MVGFibGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQodGFibGVNYWluKTtcclxuICAgICAgICBjb25zdCB0ck1haW46IEhUTUxUYWJsZVJvd0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICAgICAgdGFibGVNYWluLmFwcGVuZCh0ck1haW4pO1xyXG4gICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB2ZWN0b3JTcGFjZS5tOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgdGRNYWluOiBIVE1MVGFibGVDZWxsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICAgICAgdHJNYWluLmFwcGVuZCh0ZE1haW4pO1xyXG4gICAgICAgICAgICBpZiAoaSAhPT0gdmVjdG9yU3BhY2UubSAtIDEpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRkMk1haW46IEhUTUxUYWJsZUNlbGxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgICAgICAgICAgdGQyTWFpbi5pbm5lclRleHQgPSBcIixcIjtcclxuICAgICAgICAgICAgICAgIHRkMk1haW4uc3R5bGUudmVydGljYWxBbGlnbiA9IFwiYm90dG9tXCI7XHJcbiAgICAgICAgICAgICAgICB0ZDJNYWluLnN0eWxlLnBhZGRpbmdMZWZ0ID0gXCI1cHhcIjtcclxuICAgICAgICAgICAgICAgIHRkMk1haW4uc3R5bGUucGFkZGluZ1JpZ2h0ID0gXCI1cHhcIjtcclxuICAgICAgICAgICAgICAgIHRyTWFpbi5hcHBlbmQodGQyTWFpbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgdGFibGU6IEhUTUxUYWJsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XHJcbiAgICAgICAgICAgIHRhYmxlLmNsYXNzTGlzdC5hZGQoXCJtYXRyaXhcIik7XHJcbiAgICAgICAgICAgIHRkTWFpbi5hcHBlbmQodGFibGUpO1xyXG4gICAgICAgICAgICBjb25zdCB2ZWN0b3I6IFZlY3RvciA9IHZlY3RvclNwYWNlLmVsZW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgdmVjdG9yLm07IGorKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdHI6IEhUTUxUYWJsZVJvd0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0ZDogSFRNTFRhYmxlQ2VsbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgICAgICAgICB0ZC5pbm5lclRleHQgPSB2ZWN0b3IuZWxlbWVudHNbal0udG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIHRkLmNsYXNzTGlzdC5hZGQoXCJtYXRyaXhFbGVtZW50XCIpO1xyXG4gICAgICAgICAgICAgICAgdHIuYXBwZW5kKHRkKTtcclxuICAgICAgICAgICAgICAgIHRhYmxlLmFwcGVuZCh0cik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgYnI6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpO1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQoYnIpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgUXVldWUgfSBmcm9tIFwiLi9RdWV1ZVwiO1xyXG5pbXBvcnQgeyBSYXRpb25hbE51bWJlciB9IGZyb20gXCIuL1JhdGlvbmFsTnVtYmVyXCI7XHJcbmltcG9ydCB7IFN0YWNrIH0gZnJvbSBcIi4vU3RhY2tcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBBcml0aG1ldGljRXZhbHVhdG9yIHtcclxuXHRwdWJsaWMgc3RhdGljIHRvUmV2ZXJzZVBvbGlzaE5vdGF0aW9uKGNvZGU6IHN0cmluZyk6IHN0cmluZ1tdIHtcclxuXHRcdGNvbnN0IHRva2Vuczogc3RyaW5nW10gPSBjb2RlLm1hdGNoKC9cXCh8XFwpfFxcZCsoXFwuXFxkKyk/fFxcdyt8W1xcK1xcLVxcKlxcL1xcXl0vZyk7XHJcblx0XHRsZXQgaTogbnVtYmVyID0gMDtcclxuXHRcdGNvbnN0IG91dHB1dFF1ZXVlOiBRdWV1ZTxzdHJpbmc+ID0gbmV3IFF1ZXVlPHN0cmluZz4oKTtcclxuXHRcdGNvbnN0IG9wZXJhdG9yU3RhY2s6IFN0YWNrPHN0cmluZz4gPSBuZXcgU3RhY2s8c3RyaW5nPigpO1xyXG5cdFx0d2hpbGUgKGkgPCB0b2tlbnMubGVuZ3RoKSB7XHJcblx0XHRcdGlmICh0aGlzLmlzTnVtYmVyKHRva2Vuc1tpXSkpIHtcclxuXHRcdFx0XHRvdXRwdXRRdWV1ZS5lbnF1ZXVlKHRva2Vuc1tpXSk7XHJcblx0XHRcdH0gZWxzZSBpZiAodGhpcy5pc09wZXJhdG9yKHRva2Vuc1tpXSkpIHtcclxuXHRcdFx0XHRsZXQgb3AxOiBzdHJpbmcgPSB0b2tlbnNbaV07XHJcblx0XHRcdFx0d2hpbGUgKCFvcGVyYXRvclN0YWNrLmlzRW1wdHkoKSAmJiB0aGlzLmlzT3BlcmF0b3Iob3BlcmF0b3JTdGFjay5wZWVrKCkpKSB7XHJcblx0XHRcdFx0XHRpZiAoKHRoaXMuaXNMZWZ0QXNzb2NpYXRpdmVPcGVyYXRvcihvcDEpICYmICh0aGlzLnByZWNlZGVuY2Uob3AxKSA8PSB0aGlzLnByZWNlZGVuY2Uob3BlcmF0b3JTdGFjay5wZWVrKCkpKSkgfHxcclxuXHRcdFx0XHRcdFx0KHRoaXMuaXNSaWdodEFzc29jaWF0aXZlT3BlcmF0b3Iob3AxKSAmJiAodGhpcy5wcmVjZWRlbmNlKG9wMSkgPCB0aGlzLnByZWNlZGVuY2Uob3BlcmF0b3JTdGFjay5wZWVrKCkpKSkpIHtcclxuXHRcdFx0XHRcdFx0b3V0cHV0UXVldWUuZW5xdWV1ZShvcGVyYXRvclN0YWNrLnBvcCgpKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRvcGVyYXRvclN0YWNrLnB1c2gob3AxKTtcclxuXHRcdFx0fSBlbHNlIGlmICh0b2tlbnNbaV0gPT09IFwiKFwiKSB7XHJcblx0XHRcdFx0b3BlcmF0b3JTdGFjay5wdXNoKHRva2Vuc1tpXSk7XHJcblx0XHRcdH0gZWxzZSBpZiAodG9rZW5zW2ldID09PSBcIilcIikge1xyXG5cdFx0XHRcdHdoaWxlICghb3BlcmF0b3JTdGFjay5pc0VtcHR5KCkgJiYgb3BlcmF0b3JTdGFjay5wZWVrKCkgIT09IFwiKFwiKSB7XHJcblx0XHRcdFx0XHRvdXRwdXRRdWV1ZS5lbnF1ZXVlKG9wZXJhdG9yU3RhY2sucG9wKCkpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoIW9wZXJhdG9yU3RhY2suaXNFbXB0eSgpICYmIG9wZXJhdG9yU3RhY2sucGVlaygpID09PSBcIihcIikge1xyXG5cdFx0XHRcdFx0b3BlcmF0b3JTdGFjay5wb3AoKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiTWlzbWF0Y2hlZCBwYXJlbnRoZXNlcy5cIik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGkrKztcclxuXHRcdH1cclxuXHRcdHdoaWxlICghb3BlcmF0b3JTdGFjay5pc0VtcHR5KCkpIHtcclxuXHRcdFx0aWYgKG9wZXJhdG9yU3RhY2sucGVlaygpID09PSBcIihcIikge1xyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIk1pc21hdGNoZWQgcGFyZW50aGVzZXMuXCIpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdG91dHB1dFF1ZXVlLmVucXVldWUob3BlcmF0b3JTdGFjay5wb3AoKSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiBvdXRwdXRRdWV1ZS50b0FycmF5KCk7XHJcblx0fVxyXG5cdHB1YmxpYyBzdGF0aWMgZXZhbHVhdGVGcm9tUlBOKHRva2Vuczogc3RyaW5nW10pOiBudW1iZXIge1xyXG5cdFx0Y29uc3Qgc3RhY2s6IFN0YWNrPG51bWJlcj4gPSBuZXcgU3RhY2s8bnVtYmVyPigpO1xyXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRpZiAoIXRoaXMuaXNPcGVyYXRvcih0b2tlbnNbaV0pKSB7XHJcblx0XHRcdFx0c3RhY2sucHVzaChwYXJzZUZsb2F0KHRva2Vuc1tpXSkpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGxldCBvcDE6IG51bWJlciA9IHN0YWNrLnBvcCgpO1xyXG5cdFx0XHRcdGxldCBvcDI6IG51bWJlciA9IHN0YWNrLnBvcCgpO1xyXG5cdFx0XHRcdHN3aXRjaCAodG9rZW5zW2ldKSB7XHJcblx0XHRcdFx0XHRjYXNlIFwiK1wiOiBzdGFjay5wdXNoKG9wMiArIG9wMSk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSBcIi1cIjogc3RhY2sucHVzaChvcDIgLSBvcDEpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgXCIqXCI6IHN0YWNrLnB1c2gob3AyICogb3AxKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlIFwiL1wiOiBzdGFjay5wdXNoKG9wMiAvIG9wMSk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSBcIl5cIjogc3RhY2sucHVzaChvcDIgKiogb3AxKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gc3RhY2sucG9wKCk7XHJcblx0fVxyXG5cdHByaXZhdGUgc3RhdGljIGlzTnVtYmVyKGNvZGU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG5cdFx0cmV0dXJuIC9eXFxkLy50ZXN0KGNvZGUpO1xyXG5cdH1cclxuXHRwcml2YXRlIHN0YXRpYyBpc09wZXJhdG9yKGNvZGU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG5cdFx0cmV0dXJuIC9bXFwrXFwtXFwqXFwvXFxeXS8udGVzdChjb2RlKTtcclxuXHR9XHJcblx0cHJpdmF0ZSBzdGF0aWMgaXNMZWZ0QXNzb2NpYXRpdmVPcGVyYXRvcihvcGVyYXRvcjogc3RyaW5nKTogYm9vbGVhbiB7XHJcblx0XHRyZXR1cm4gL1tcXCtcXC1cXCpcXC9dLy50ZXN0KG9wZXJhdG9yKTtcclxuXHR9XHJcblx0cHJpdmF0ZSBzdGF0aWMgaXNSaWdodEFzc29jaWF0aXZlT3BlcmF0b3Iob3BlcmF0b3I6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG5cdFx0cmV0dXJuIC9bXFxeXS8udGVzdChvcGVyYXRvcik7XHJcblx0fVxyXG5cdHByaXZhdGUgc3RhdGljIHByZWNlZGVuY2Uob3BlcmF0b3I6IHN0cmluZyk6IG51bWJlciB7XHJcblx0XHRpZiAoL1tcXCtcXC1dLy50ZXN0KG9wZXJhdG9yKSkge1xyXG5cdFx0XHQgcmV0dXJuIDE7XHJcblx0XHR9XHJcblx0XHRpZiAoL1tcXCpcXC9dLy50ZXN0KG9wZXJhdG9yKSkge1xyXG5cdFx0XHQgcmV0dXJuIDI7XHJcblx0XHR9XHJcblx0XHRpZiAoL1tcXF5dLy50ZXN0KG9wZXJhdG9yKSkge1xyXG5cdFx0XHQgcmV0dXJuIDM7XHJcblx0XHR9XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmtub3duIG9wZXJhdG9yLlwiKTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFRva2VuVHlwZSB7IFBsdXMsIE1pbnVzLCBNdWx0aXBseSwgRGl2aWRlLCBFeHBvbmVudCwgTnVtYmVyLCBMUGFyZW4sIFJQYXJlbiwgRW5kLCBVbmtub3duIH1cclxuZXhwb3J0IGNsYXNzIFRva2VuIHtcclxuXHRwdWJsaWMgdHlwZTogVG9rZW5UeXBlO1xyXG5cdHB1YmxpYyB2YWx1ZTogbnVtYmVyO1xyXG5cdGNvbnN0cnVjdG9yKHR5cGU6IFRva2VuVHlwZSwgdmFsdWU/OiBudW1iZXIpIHtcclxuXHRcdHRoaXMudHlwZSA9IHR5cGU7XHJcblx0XHR0aGlzLnZhbHVlID0gdmFsdWU7XHJcblx0fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBMZXhlciB7XHJcblx0cHJpdmF0ZSB0b2tlbnM6IHN0cmluZ1tdO1xyXG5cdHByaXZhdGUgdG9rZW5JbmRleDogbnVtYmVyO1xyXG5cdGNvbnN0cnVjdG9yKGlucHV0OiBzdHJpbmcpIHtcclxuXHRcdHRoaXMudG9rZW5zID0gaW5wdXQucmVwbGFjZShcIiBcIiwgXCJcIikubWF0Y2goL1xcKHxcXCl8XFxkKyhcXC5cXGQrKT98W1xcK1xcLVxcKlxcL1xcXl0vZyk7XHJcblx0XHR0aGlzLnRva2VuSW5kZXggPSAwO1xyXG5cdH1cclxuXHRwdWJsaWMgZ2V0TmV4dFRva2VuKCk6IFRva2VuIHtcclxuXHRcdGlmICh0aGlzLnRva2Vucy5sZW5ndGggPT09IHRoaXMudG9rZW5JbmRleCkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IFRva2VuKFRva2VuVHlwZS5FbmQpO1xyXG5cdFx0fVxyXG5cdFx0bGV0IGlucHV0OiBzdHJpbmcgPSB0aGlzLnRva2Vuc1t0aGlzLnRva2VuSW5kZXgrK107XHJcblx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihpbnB1dCk7XHJcblx0fVxyXG5cdHB1YmxpYyBnZXRDdXJyZW50VG9rZW4oKTogVG9rZW4ge1xyXG5cdFx0aWYgKHRoaXMudG9rZW5zLmxlbmd0aCAtIDEgPT09IHRoaXMudG9rZW5JbmRleCkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IFRva2VuKFRva2VuVHlwZS5FbmQpO1xyXG5cdFx0fVxyXG5cdFx0bGV0IGlucHV0OiBzdHJpbmcgPSB0aGlzLnRva2Vuc1t0aGlzLnRva2VuSW5kZXhdO1xyXG5cdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oaW5wdXQpO1xyXG5cdH1cclxuXHRwdWJsaWMgcmV2ZXJ0KCk6IHZvaWQge1xyXG5cdFx0aWYgKHRoaXMudG9rZW5JbmRleCA8PSAwKSB7IHRocm93IEVycm9yKFwiSW5kZXggb3V0IG9mIHJhbmdlXCIpOyB9XHJcblx0XHR0aGlzLnRva2VuSW5kZXgtLTtcclxuXHR9XHJcblx0cHJpdmF0ZSBnZXRUb2tlbihpbnB1dDogc3RyaW5nKTogVG9rZW4ge1xyXG5cdFx0aWYgKC9cXCsvLnRlc3QoaW5wdXQpKSB7XHJcblx0XHRcdHJldHVybiBuZXcgVG9rZW4oVG9rZW5UeXBlLlBsdXMpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKC9cXC0vLnRlc3QoaW5wdXQpKSB7XHJcblx0XHRcdHJldHVybiBuZXcgVG9rZW4oVG9rZW5UeXBlLk1pbnVzKTtcclxuXHRcdH1cclxuXHRcdGlmICgvXFwqLy50ZXN0KGlucHV0KSkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IFRva2VuKFRva2VuVHlwZS5NdWx0aXBseSk7XHJcblx0XHR9XHJcblx0XHRpZiAoL1xcLy8udGVzdChpbnB1dCkpIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBUb2tlbihUb2tlblR5cGUuRGl2aWRlKTtcclxuXHRcdH1cclxuXHRcdGlmICgvXFxeLy50ZXN0KGlucHV0KSkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IFRva2VuKFRva2VuVHlwZS5FeHBvbmVudCk7XHJcblx0XHR9XHJcblx0XHRpZiAoL1xcZCsoXFwuXFxkKyk/Ly50ZXN0KGlucHV0KSkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IFRva2VuKFRva2VuVHlwZS5OdW1iZXIsIHBhcnNlRmxvYXQoaW5wdXQpKTtcclxuXHRcdH1cclxuXHRcdGlmICgvXFwoLy50ZXN0KGlucHV0KSkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IFRva2VuKFRva2VuVHlwZS5MUGFyZW4pO1xyXG5cdFx0fVxyXG5cdFx0aWYgKC9cXCkvLnRlc3QoaW5wdXQpKSB7XHJcblx0XHRcdHJldHVybiBuZXcgVG9rZW4oVG9rZW5UeXBlLlJQYXJlbik7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gbmV3IFRva2VuKFRva2VuVHlwZS5Vbmtub3duKTtcclxuXHR9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFBhcnNlciB7XHJcblx0cHJpdmF0ZSBsZXg6IExleGVyO1xyXG5cdHB1YmxpYyBwYXJzZShjb2RlOiBzdHJpbmcpOiBSYXRpb25hbE51bWJlciB7XHJcblx0XHR0aGlzLmxleCA9IG5ldyBMZXhlcihjb2RlKTtcclxuXHRcdGNvbnN0IGV4cHJlc3Npb246IFJhdGlvbmFsTnVtYmVyID0gdGhpcy5mb3VydGhPcmRlck9wZXJhdG9ycygpO1xyXG5cdFx0Y29uc3QgdG9rZW46IFRva2VuID0gdGhpcy5sZXguZ2V0Q3VycmVudFRva2VuKCk7IC8vIGlzIGFscmVhZHkgYWR2YW5jZWQgYmVjYXVzZSBvZiBudW1iZXIoKVxyXG5cdFx0aWYgKHRva2VuLnR5cGUgPT09IFRva2VuVHlwZS5FbmQpIHtcclxuXHRcdFx0cmV0dXJuIGV4cHJlc3Npb247XHJcblx0XHR9XHJcblx0XHR0aHJvdyBFcnJvcihcIkVuZCBleHBlY3RlZFwiKTtcclxuXHR9XHJcblx0Ly8gYWRkaXRpb24gYW5kIHN1YnN0cmFjdGlvblxyXG5cdHByaXZhdGUgZm91cnRoT3JkZXJPcGVyYXRvcnMoKTogUmF0aW9uYWxOdW1iZXIge1xyXG5cdFx0bGV0IGNvbXBvbmVudDE6IFJhdGlvbmFsTnVtYmVyID0gdGhpcy50aGlyZE9yZGVyT3BlcmF0b3JzKCk7XHJcblx0XHRsZXQgdG9rZW46IFRva2VuID0gdGhpcy5sZXguZ2V0TmV4dFRva2VuKCk7XHJcblx0XHR3aGlsZSAodG9rZW4udHlwZSA9PT0gVG9rZW5UeXBlLlBsdXMgfHwgdG9rZW4udHlwZSA9PT0gVG9rZW5UeXBlLk1pbnVzKSB7XHJcblx0XHRcdGxldCBjb21wb25lbnQyOiBSYXRpb25hbE51bWJlciA9IHRoaXMudGhpcmRPcmRlck9wZXJhdG9ycygpO1xyXG5cdFx0XHRpZiAodG9rZW4udHlwZSA9PT0gVG9rZW5UeXBlLlBsdXMpIHtcclxuXHRcdFx0XHRjb21wb25lbnQxID0gY29tcG9uZW50MS5hZGQoY29tcG9uZW50Mik7XHJcblx0XHRcdH0gZWxzZSBpZiAodG9rZW4udHlwZSA9PT0gVG9rZW5UeXBlLk1pbnVzKSB7XHJcblx0XHRcdFx0Y29tcG9uZW50MSA9IGNvbXBvbmVudDEuc3ViKGNvbXBvbmVudDIpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRva2VuID0gdGhpcy5sZXguZ2V0TmV4dFRva2VuKCk7XHJcblx0XHR9XHJcblx0XHR0aGlzLmxleC5yZXZlcnQoKTtcclxuXHRcdHJldHVybiBjb21wb25lbnQxO1xyXG5cdH1cclxuXHQvLyBtdWx0aXBsaWNhdGlvbiBhbmQgZGl2aXNpb25cclxuXHRwcml2YXRlIHRoaXJkT3JkZXJPcGVyYXRvcnMoKTogUmF0aW9uYWxOdW1iZXIge1xyXG5cdFx0bGV0IGZhY3RvcjE6IFJhdGlvbmFsTnVtYmVyID0gdGhpcy5zZWNvbmRPcmRlck9wZXJhdG9ycygpO1xyXG5cdFx0bGV0IHRva2VuOiBUb2tlbiA9IHRoaXMubGV4LmdldE5leHRUb2tlbigpO1xyXG5cdFx0d2hpbGUgKHRva2VuLnR5cGUgPT09IFRva2VuVHlwZS5NdWx0aXBseSB8fCB0b2tlbi50eXBlID09PSBUb2tlblR5cGUuRGl2aWRlKSB7XHJcblx0XHRcdGxldCBmYWN0b3IyOiBSYXRpb25hbE51bWJlciA9IHRoaXMuc2Vjb25kT3JkZXJPcGVyYXRvcnMoKTtcclxuXHRcdFx0aWYgKHRva2VuLnR5cGUgPT09IFRva2VuVHlwZS5NdWx0aXBseSkge1xyXG5cdFx0XHRcdGZhY3RvcjEgPSBmYWN0b3IxLm11bHQoZmFjdG9yMik7XHJcblx0XHRcdH0gZWxzZSBpZiAodG9rZW4udHlwZSA9PT0gVG9rZW5UeXBlLkRpdmlkZSkge1xyXG5cdFx0XHRcdGZhY3RvcjEgPSBmYWN0b3IxLmRpdihmYWN0b3IyKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0b2tlbiA9IHRoaXMubGV4LmdldE5leHRUb2tlbigpO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5sZXgucmV2ZXJ0KCk7XHJcblx0XHRyZXR1cm4gZmFjdG9yMTtcclxuXHR9XHJcblx0Ly8gZXhwb25lbnRzIGFuZCByb290c1xyXG5cdHByaXZhdGUgc2Vjb25kT3JkZXJPcGVyYXRvcnMoKTogUmF0aW9uYWxOdW1iZXIge1xyXG5cdFx0bGV0IGZhY3RvcjE6IFJhdGlvbmFsTnVtYmVyID0gdGhpcy5maXJzdE9yZGVyT3BlcmF0b3JzKCk7XHJcblx0XHRsZXQgdG9rZW46IFRva2VuID0gdGhpcy5sZXguZ2V0TmV4dFRva2VuKCk7XHJcblx0XHR3aGlsZSAodG9rZW4udHlwZSA9PT0gVG9rZW5UeXBlLkV4cG9uZW50KSB7XHJcblx0XHRcdGxldCBmYWN0b3IyOiBSYXRpb25hbE51bWJlciA9IHRoaXMuZmlyc3RPcmRlck9wZXJhdG9ycygpO1xyXG5cdFx0XHRmYWN0b3IxID0gZmFjdG9yMS5leHAoZmFjdG9yMik7XHJcblx0XHRcdHRva2VuID0gdGhpcy5sZXguZ2V0TmV4dFRva2VuKCk7XHJcblx0XHR9XHJcblx0XHR0aGlzLmxleC5yZXZlcnQoKTtcclxuXHRcdHJldHVybiBmYWN0b3IxO1xyXG5cdH1cclxuXHQvLyBudW1iZXJzIGFuZCBwYXJhbnRoZXNlc1xyXG5cdHByaXZhdGUgZmlyc3RPcmRlck9wZXJhdG9ycygpOiBSYXRpb25hbE51bWJlciB7XHJcblx0XHRsZXQgdmFsdWU6IFJhdGlvbmFsTnVtYmVyID0gbmV3IFJhdGlvbmFsTnVtYmVyKDEpO1xyXG5cdFx0bGV0IHRva2VuOiBUb2tlbiA9IHRoaXMubGV4LmdldE5leHRUb2tlbigpO1xyXG5cdFx0aWYgKHRva2VuLnR5cGUgPT09IFRva2VuVHlwZS5QbHVzIHx8IHRva2VuLnR5cGUgPT09IFRva2VuVHlwZS5NaW51cykge1xyXG5cdFx0XHRpZiAodG9rZW4udHlwZSA9PT0gVG9rZW5UeXBlLk1pbnVzKSB7XHJcblx0XHRcdFx0dmFsdWUgPSB2YWx1ZS5tdWx0KC0xKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0b2tlbiA9IHRoaXMubGV4LmdldE5leHRUb2tlbigpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHRva2VuLnR5cGUgPT09IFRva2VuVHlwZS5MUGFyZW4pIHtcclxuXHRcdFx0dmFsdWUgPSB2YWx1ZS5tdWx0KHRoaXMuZm91cnRoT3JkZXJPcGVyYXRvcnMoKSk7XHJcblx0XHRcdHRva2VuID0gdGhpcy5sZXguZ2V0TmV4dFRva2VuKCk7XHJcblx0XHRcdGlmICh0b2tlbi50eXBlICE9PSBUb2tlblR5cGUuUlBhcmVuKSB7XHJcblx0XHRcdFx0dGhyb3cgRXJyb3IoXCJVbmJhbGFuY2VkIHBhcmVudGhlc2lzXCIpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAodG9rZW4udHlwZSA9PT0gVG9rZW5UeXBlLk51bWJlcikge1xyXG5cdFx0XHRcdHZhbHVlID0gdmFsdWUubXVsdCh0b2tlbi52YWx1ZSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhyb3cgRXJyb3IoXCJOb3QgYSBudW1iZXJcIik7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiB2YWx1ZTtcclxuXHR9XHJcbn1cclxuXHJcbi8qXHJcblx0cHVibGljIHN0YXRpYyBldmFsdWF0ZShleHByZXNpb246IHN0cmluZyk6IFJhdGlvbmFsTnVtYmVyIHtcclxuXHR2YXIgZGlnaXRQYXR0ZXJuID0gbmV3IFJlZ0V4cCgnMCB8IDEgfCAyIHwgMyB8IDQgfCA1IHwgNiB8IDcgfCA4IHwgOScpO1xyXG5cdHZhciBzaWduUGF0dGVybiA9IG5ldyBSZWdFeHAoJ1xcK3xcXC0nKTtcclxuXHR2YXIgbnVtYmVyUGF0dGVybiA9IG5ldyBSZWdFeHAoJ1snICsgc2lnblBhdHRlcm4gKyAnXScgKyAneycgKyBkaWdpdFBhdHRlcm4gKyAnfScpO1xyXG5cdHZhciBmYWN0b3JQYXR0ZXJuID0gbmV3IFJlZ0V4cChudW1iZXJQYXR0ZXJuICsgJ3xcXCgnICsgZXhwcmVzc2lvblBhdHRlcm4gKyAnXFwpJyk7XHJcblx0dmFyIGNvbXBvbmVudFBhdHRlcm4gPSBuZXcgUmVnRXhwKGZhY3RvclBhdHRlcm4gKyAnW3soIFxcKiB8IFxcLyApJyArIGZhY3RvclBhdHRlcm4gKyAnfV0nKTtcclxuXHR2YXIgZXhwcmVzc2lvblBhdHRlcm4gPSBuZXcgUmVnRXhwKGNvbXBvbmVudFBhdHRlcm4gKyAnW3soIFxcKyB8IFxcLSknICsgY29tcG9uZW50UGF0dGVybiArICd9XScpO1xyXG59Ki9cclxuXHJcbi8qXHJcbmV4cHJyOiA0dGhPUkRFUis7XHJcbjR0aE9SREVSOiBjb21wb25lbnQxPTNyZE9SREVSICgoUExVU3xNSU5VUykgY29tcG9uZW50Mj0zcmRPUkRFUikrO1xyXG4zcmRPUkRFUjogZmFjdG9yMT0yTkRPUkRFUiAoKE1VTFRJUExZfERJVklERSkgZmFjdG9yMT0ybmRPUkRFUikrXHJcbjJuZE9SREVSOiBmYWN0b3IxPTFzdE9SREVSIChFWFBPTkVOVCBmYWN0b3IyPTFzdE9SREVSKStcclxuMXN0T1JERVI6IChQTFVTfE1JTlVTfGVtcHR5KSAoTFBBUkVOIHZhbHVlPTR0aE9SREVSIFJQQVJFTnwgTlVNQkVSKVxyXG4qLyIsImltcG9ydCB7IFJhdGlvbmFsTnVtYmVyIH0gZnJvbSBcIi4vUmF0aW9uYWxOdW1iZXJcIjtcclxuaW1wb3J0IHsgQ29sdW1uVmVjdG9yLCBWZWN0b3IgfSBmcm9tIFwiLi9WZWN0b3JcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBNYXRyaXgge1xyXG5cdHB1YmxpYyBzdGF0aWMgYXVnbWVudChBOiBNYXRyaXgsIEI6IE1hdHJpeCB8IFZlY3Rvcik6IE1hdHJpeCB7XHJcblx0XHRpZiAoQS5tICE9PSBCLm0pIHsgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHR3byBtYXRyaWNlcyAodmVjdG9yKSBtdXN0IGhhdmUgdGhlIHNhbWUgbnVtYmVyIG9mIHJvd3MgKGVsZW1lbnRzKS5cIik7IH1cclxuXHRcdGxldCByZXQ6IE1hdHJpeCA9IG51bGw7XHJcblx0XHRpZiAoQiBpbnN0YW5jZW9mIE1hdHJpeCkge1xyXG5cdFx0XHRyZXQgPSBuZXcgTWF0cml4KEEubSwgQi5uICsgQS5uKTtcclxuXHRcdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IEEubTsgaSsrKSB7XHJcblx0XHRcdFx0Zm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IEEubjsgaisrKSB7XHJcblx0XHRcdFx0XHRyZXQuZWxlbWVudHNbaV1bal0gPSBBLmVsZW1lbnRzW2ldW2pdO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgQi5tOyBpKyspIHtcclxuXHRcdFx0XHRmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgQi5uOyBqKyspIHtcclxuXHRcdFx0XHRcdHJldC5lbGVtZW50c1tpXVtBLm4gKyBqXSA9IEIuZWxlbWVudHNbaV1bal07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAoQiBpbnN0YW5jZW9mIFZlY3Rvcikge1xyXG5cdFx0XHRcdHJldCA9IG5ldyBNYXRyaXgoQS5tLCBBLm4gKyAxKTtcclxuXHRcdFx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgQS5tOyBpKyspIHtcclxuXHRcdFx0XHRcdGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCBBLm47IGorKykge1xyXG5cdFx0XHRcdFx0XHRyZXQuZWxlbWVudHNbaV1bal0gPSBBLmVsZW1lbnRzW2ldW2pdO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgQi5tOyBqKyspIHtcclxuXHRcdFx0XHRcdHJldC5lbGVtZW50c1tqXVtBLm5dID0gQi5lbGVtZW50c1tqXTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXQ7XHJcblx0fVxyXG5cdC8vIHJvdy1tdWx0aXBseWluZyB0cmFuc2Zvcm1hdGlvbnNcclxuXHRwdWJsaWMgc3RhdGljIG11bHRpcGxpY2F0aW9uKG46IG51bWJlciwgcm93MTogbnVtYmVyLCByb3cyOiBudW1iZXIsIG11bHQ6IG51bWJlcik6IE1hdHJpeCB7XHJcblx0XHRpZiAobiA8IHJvdzEgfHwgbiA8IHJvdzIpIHsgdGhyb3cgbmV3IEVycm9yKFwiQ29sdW1uIGluZGV4IG11c3QgYmUgbGVzcyBvciBlcXVhbHQgdGhhbiBtYXRyaXggc2l6ZS5cIik7IH1cclxuXHRcdGNvbnN0IG1hdHJpeDogTWF0cml4ID0gbmV3IE1hdHJpeElkZW50aXR5KG4pO1xyXG5cdFx0bWF0cml4LmVsZW1lbnRzW3JvdzFdW3JvdzJdID0gbmV3IFJhdGlvbmFsTnVtYmVyKG11bHQpO1xyXG5cdFx0cmV0dXJuIG1hdHJpeDtcclxuXHR9XHJcblx0cHVibGljIHN0YXRpYyByYW5kb21TcXVhcmUoKTogTWF0cml4IHtcclxuXHRcdGNvbnN0IG1hdHJpeDogTWF0cml4ID0gbmV3IE1hdHJpeChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0KSArIDMsIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQpICsgMyk7IC8vIG1pbmltdW0gc2l6ZSAzeDMgbWF0cml4XHJcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgbWF0cml4Lm07IGkrKykge1xyXG5cdFx0XHRmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgbWF0cml4Lm47IGorKykge1xyXG5cdFx0XHRcdG1hdHJpeC5lbGVtZW50c1tpXVtqXSA9IG5ldyBSYXRpb25hbE51bWJlcihNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAgLSA1MCkpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gbWF0cml4O1xyXG5cdH1cclxuXHRwdWJsaWMgc3RhdGljIHJhbmRvbTIoKTogTWF0cml4IHtcclxuXHRcdGNvbnN0IG51bWJlck9mVW5rbm93bnM6IG51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQgKyAzKTsgLy8gYmV0d2VlbiAzIGFuZCA3IHVua25vbndzXHJcblx0XHRjb25zdCB1bmtub3duczogbnVtYmVyW10gPSBbXTtcclxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBudW1iZXJPZlVua25vd25zOyBpKyspIHtcclxuXHRcdFx0dW5rbm93bnNbaV0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyMCAtIDEwKTtcclxuXHRcdH1cclxuXHRcdC8vIHRvZG86IGNoYW5nZSBiZWxvd1xyXG5cdFx0Y29uc3QgbWF0cml4OiBNYXRyaXggPSBuZXcgTWF0cml4KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQpICsgMywgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCkgKyAzKTtcclxuXHRcdHJldHVybiBtYXRyaXg7XHJcblx0fVxyXG5cdHB1YmxpYyBtOiBudW1iZXI7IC8vIHJvd3NcclxuXHRwdWJsaWMgbjogbnVtYmVyOyAvLyBjb2x1bW5zXHJcblx0cHVibGljIGVsZW1lbnRzOiBSYXRpb25hbE51bWJlcltdW107XHJcblx0Y29uc3RydWN0b3IobTogbnVtYmVyLCBuOiBudW1iZXIpIHtcclxuXHRcdHRoaXMubSA9IG07XHJcblx0XHR0aGlzLm4gPSBuO1xyXG5cdFx0dGhpcy5lbGVtZW50cyA9IFtdO1xyXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMubTsgaSsrKSB7XHJcblx0XHRcdHRoaXMuZWxlbWVudHNbaV0gPSBbXTtcclxuXHRcdH1cclxuXHR9XHJcblx0cHVibGljIGVxdWFscyhNOiBNYXRyaXgpOiBib29sZWFuIHtcclxuXHRcdGlmICh0aGlzLm0gIT09IE0ubSB8fCB0aGlzLm4gIT09IE0ubikge1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5tOyBpKyspIHtcclxuXHRcdFx0Zm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IHRoaXMubjsgaisrKSB7XHJcblx0XHRcdFx0aWYgKCF0aGlzLmVsZW1lbnRzW2ldW2pdLmVxdWFscyhNLmVsZW1lbnRzW2ldW2pdKSkgeyByZXR1cm4gZmFsc2U7IH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cdHB1YmxpYyBhZGQoeDogTWF0cml4KTogTWF0cml4IHtcclxuXHRcdGlmICh0aGlzLm0gIT09IHgubSB8fCB0aGlzLm4gIT09IHgubikgeyB0aHJvdyBuZXcgRXJyb3IoXCJNaXNtYXRjaGVkIGRpbWVuc2lvbnMuXCIpOyB9XHJcblx0XHRjb25zdCByZXM6IE1hdHJpeCA9IG5ldyBNYXRyaXgodGhpcy5tLCB0aGlzLm4pO1xyXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHJlcy5tOyBpKyspIHtcclxuXHRcdFx0Zm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IHJlcy5uOyBqKyspIHtcclxuXHRcdFx0XHRyZXMuZWxlbWVudHNbaV1bal0gPSB0aGlzLmVsZW1lbnRzW2ldW2pdLmFkZCh4LmVsZW1lbnRzW2ldW2pdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlcztcclxuXHR9XHJcblx0cHVibGljIHN1Yih4OiBNYXRyaXgpOiBNYXRyaXgge1xyXG5cdFx0aWYgKHRoaXMubSAhPT0geC5tIHx8IHRoaXMubiAhPT0geC5uKSB7IHRocm93IG5ldyBFcnJvcihcIk1pc21hdGNoZWQgZGltZW5zaW9ucy5cIik7IH1cclxuXHRcdGNvbnN0IHJlczogTWF0cml4ID0gbmV3IE1hdHJpeCh0aGlzLm0sIHRoaXMubik7XHJcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgcmVzLm07IGkrKykge1xyXG5cdFx0XHRmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgcmVzLm47IGorKykge1xyXG5cdFx0XHRcdHJlcy5lbGVtZW50c1tpXVtqXSA9IHRoaXMuZWxlbWVudHNbaV1bal0uc3ViKHguZWxlbWVudHNbaV1bal0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzO1xyXG5cdH1cclxuXHRwdWJsaWMgbXVsdCh4OiBudW1iZXIgfCBSYXRpb25hbE51bWJlciB8IE1hdHJpeCk6IE1hdHJpeCB7XHJcblx0XHRsZXQgcmVzOiBNYXRyaXggPSBudWxsO1xyXG5cdFx0aWYgKHR5cGVvZiB4ID09PSBcIm51bWJlclwiKSB7XHJcblx0XHRcdHJlcyA9IG5ldyBNYXRyaXgodGhpcy5tLCB0aGlzLm4pO1xyXG5cdFx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgcmVzLm07IGkrKykge1xyXG5cdFx0XHRcdGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCByZXMubjsgaisrKSB7XHJcblx0XHRcdFx0XHRyZXMuZWxlbWVudHNbaV1bal0gPSB0aGlzLmVsZW1lbnRzW2ldW2pdLm11bHQoeCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2UgaWYgKHggaW5zdGFuY2VvZiBSYXRpb25hbE51bWJlcikge1xyXG5cdFx0XHRyZXMgPSBuZXcgTWF0cml4KHRoaXMubSwgdGhpcy5uKTtcclxuXHRcdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHJlcy5tOyBpKyspIHtcclxuXHRcdFx0XHRmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgcmVzLm47IGorKykge1xyXG5cdFx0XHRcdFx0cmVzLmVsZW1lbnRzW2ldW2pdID0gdGhpcy5lbGVtZW50c1tpXVtqXS5tdWx0KHgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKHggaW5zdGFuY2VvZiBNYXRyaXgpIHtcclxuXHRcdFx0XHRpZiAodGhpcy5uICE9PSB4Lm0pIHsgdGhyb3cgbmV3IEVycm9yKFwiTWlzbWF0Y2hlZCBkaW1lbnNpb25zLlwiKTsgfVxyXG5cdFx0XHRcdHJlcyA9IG5ldyBNYXRyaXgodGhpcy5tLCB4Lm4pO1xyXG5cdFx0XHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCByZXMubTsgaSsrKSB7XHJcblx0XHRcdFx0XHRmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgcmVzLm47IGorKykge1xyXG5cdFx0XHRcdFx0XHRsZXQgc3VtOiBSYXRpb25hbE51bWJlciA9IG5ldyBSYXRpb25hbE51bWJlcigwKTtcclxuXHRcdFx0XHRcdFx0Zm9yIChsZXQgazogbnVtYmVyID0gMDsgayA8IHRoaXMubjsgaysrKSB7XHJcblx0XHRcdFx0XHRcdFx0c3VtID0gc3VtLmFkZCh0aGlzLmVsZW1lbnRzW2ldW2tdLm11bHQoeC5lbGVtZW50c1trXVtqXSkpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdHJlcy5lbGVtZW50c1tpXVtqXSA9IHN1bTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXM7XHJcblx0fVxyXG5cdHB1YmxpYyB2ZWN0b3JQcm9kdWN0KHY6IENvbHVtblZlY3Rvcik6IENvbHVtblZlY3RvciB7XHJcblx0XHRpZiAodGhpcy5uICE9PSB2Lm0pIHsgdGhyb3cgbmV3IEVycm9yKFwiTWlzbWF0Y2hlZCBkaW1lbnNpb25zLlwiKTsgfVxyXG5cdFx0Y29uc3QgcmVzOiBDb2x1bW5WZWN0b3IgPSBuZXcgQ29sdW1uVmVjdG9yKHYubSk7XHJcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5tOyBpKyspIHtcclxuXHRcdFx0bGV0IHN1bTogUmF0aW9uYWxOdW1iZXIgPSBuZXcgUmF0aW9uYWxOdW1iZXIoMCk7XHJcblx0XHRcdGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCB0aGlzLm47IGorKykge1xyXG5cdFx0XHRcdHN1bSA9IHN1bS5hZGQodGhpcy5lbGVtZW50c1tpXVtqXS5tdWx0KHYuZWxlbWVudHNbal0pKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXMuZWxlbWVudHNbaV0gPSBzdW07XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzO1xyXG5cdH1cclxuXHRwdWJsaWMgdHJhbnNwb3NlKCk6IE1hdHJpeCB7XHJcblx0XHRjb25zdCByZXQ6IE1hdHJpeCA9IG5ldyBNYXRyaXgodGhpcy5uLCB0aGlzLm0pO1xyXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMubTsgaSsrKSB7XHJcblx0XHRcdGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCB0aGlzLm47IGorKykge1xyXG5cdFx0XHRcdHJldC5lbGVtZW50c1tqXVtpXSA9IHRoaXMuZWxlbWVudHNbaV1bal07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXQ7XHJcblx0fVxyXG5cdHB1YmxpYyBkZWVwQ29weSgpOiBNYXRyaXgge1xyXG5cdFx0Y29uc3QgcmV0OiBNYXRyaXggPSBuZXcgTWF0cml4KHRoaXMubSwgdGhpcy5uKTtcclxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLm07IGkrKykge1xyXG5cdFx0XHRmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgdGhpcy5uOyBqKyspIHtcclxuXHRcdFx0XHRyZXQuZWxlbWVudHNbaV1bal0gPSB0aGlzLmVsZW1lbnRzW2ldW2pdO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmV0O1xyXG5cdH1cclxuXHRwdWJsaWMgc3dpdGNoUm93cyhpZHgxOiBudW1iZXIsIGlkeDI6IG51bWJlcik6IHZvaWQge1xyXG5cdFx0aWYgKHRoaXMubSA8IGlkeDEgfHwgdGhpcy5tIDwgaWR4MikgeyByZXR1cm47IH1cclxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLm47IGkrKykge1xyXG5cdFx0XHRjb25zdCB0bXA6IFJhdGlvbmFsTnVtYmVyID0gdGhpcy5lbGVtZW50c1tpZHgxXVtpXTtcclxuXHRcdFx0dGhpcy5lbGVtZW50c1tpZHgxXVtpXSA9IHRoaXMuZWxlbWVudHNbaWR4Ml1baV07XHJcblx0XHRcdHRoaXMuZWxlbWVudHNbaWR4Ml1baV0gPSB0bXA7XHJcblx0XHR9XHJcblx0fVxyXG5cdHB1YmxpYyBtdWx0aXBseVJvdyhpZHg6IG51bWJlciwgc2NhbGFyOiBSYXRpb25hbE51bWJlcik6IHZvaWQge1xyXG5cdFx0aWYgKHRoaXMubSA8IGlkeCkgeyByZXR1cm47IH1cclxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLm47IGkrKykge1xyXG5cdFx0XHR0aGlzLmVsZW1lbnRzW2lkeF1baV0gPSB0aGlzLmVsZW1lbnRzW2lkeF1baV0ubXVsdChzY2FsYXIpLnNpbXBsaWZpZWRGb3JtKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cdHB1YmxpYyBhZGRSb3dzKGlkeDE6IG51bWJlciwgaWR4MjogbnVtYmVyLCBzY2FsYXI6IFJhdGlvbmFsTnVtYmVyKTogdm9pZCB7XHJcblx0XHRpZiAodGhpcy5tIDwgaWR4MSB8fCB0aGlzLm0gPCBpZHgyKSB7IHJldHVybjsgfVxyXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMubjsgaSsrKSB7XHJcblx0XHRcdHRoaXMuZWxlbWVudHNbaWR4MV1baV0gPSB0aGlzLmVsZW1lbnRzW2lkeDJdW2ldLm11bHQoc2NhbGFyKS5hZGQodGhpcy5lbGVtZW50c1tpZHgxXVtpXSkuc2ltcGxpZmllZEZvcm0oKTtcclxuXHRcdH1cclxuXHR9XHJcblx0cHVibGljIGFkZFJvdzFUb1JvdzIoaWR4MTogbnVtYmVyLCBzY2FsYXIxOiBSYXRpb25hbE51bWJlciwgaWR4MjogbnVtYmVyLCBzY2FsYXIyOiBSYXRpb25hbE51bWJlcik6IHZvaWQge1xyXG5cdFx0aWYgKHRoaXMubSA8IGlkeDEgfHwgdGhpcy5tIDwgaWR4MikgeyByZXR1cm47IH1cclxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLm47IGkrKykge1xyXG5cdFx0XHR0aGlzLmVsZW1lbnRzW2lkeDJdW2ldID0gdGhpcy5lbGVtZW50c1tpZHgyXVtpXS5tdWx0KHNjYWxhcjIpLmFkZCh0aGlzLmVsZW1lbnRzW2lkeDFdW2ldLm11bHQoc2NhbGFyMSkpLnNpbXBsaWZpZWRGb3JtKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cdC8vIGEgc3F1YXJlIG1hdHJpeCBpcyBhIG1hdHJpeCB3aXRoIHRoZSBzYW1lIG51bWJlciBvZiByb3dzIGFuZCBjb2x1bW5zXHJcblx0cHVibGljIGlzU3F1YXJlKCk6IGJvb2xlYW4ge1xyXG5cdFx0cmV0dXJuIHRoaXMubSA9PT0gdGhpcy5uO1xyXG5cdH1cclxuXHQvLyBhIGRpYWdvbmFsIG1hdHJpeCBpcyBhIG1hdHJpeCBpbiB3aGljaCB0aGUgZW50cmllcyBvdXRzaWRlIHRoZSBtYWluIGRpYWdvbmFsIGFyZSBhbGwgemVyb1xyXG5cdHB1YmxpYyBpc0RpYWdvbmFsKCk6IGJvb2xlYW4ge1xyXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMubTsgaSsrKSB7XHJcblx0XHRcdGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCB0aGlzLm47IGorKykge1xyXG5cdFx0XHRcdGlmIChpID09PSBqKSB7XHJcblx0XHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKCF0aGlzLmVsZW1lbnRzW2ldW2pdLmVxdWFscyhuZXcgUmF0aW9uYWxOdW1iZXIoMCkpKSB7IHJldHVybiBmYWxzZTsgfVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblx0Ly8gdGhlIGlkZW50aXR5IG1hdHJpeCBvZiBzaXplIG4gaXMgdGhlIG4gw5cgbiBzcXVhcmUgbWF0cml4IHdpdGggb25lcyBvbiB0aGUgbWFpbiBkaWFnb25hbCBhbmQgemVyb3MgZWxzZXdoZXJlXHJcblx0Ly8gW0FMSUFTRVNdOiB1bml0IG1hdHJpeFxyXG5cdHB1YmxpYyBpc0lkZW50aXR5KCk6IGJvb2xlYW4ge1xyXG5cdFx0aWYgKHRoaXMubSAhPT0gdGhpcy5uKSB7IHRocm93IG5ldyBFcnJvcihcIk5vdCBhIHNxdWFyZSBtYXRyaXguXCIpOyB9XHJcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5tOyBpKyspIHtcclxuXHRcdFx0Zm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IHRoaXMubjsgaisrKSB7XHJcblx0XHRcdFx0aWYgKGkgPT09IGopIHtcclxuXHRcdFx0XHRcdGlmICghdGhpcy5lbGVtZW50c1tpXVtqXS5lcXVhbHMobmV3IFJhdGlvbmFsTnVtYmVyKDEpKSkgeyByZXR1cm4gZmFsc2U7IH1cclxuXHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoIXRoaXMuZWxlbWVudHNbaV1bal0uZXF1YWxzKG5ldyBSYXRpb25hbE51bWJlcigwKSkpIHsgcmV0dXJuIGZhbHNlOyB9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHQvLyBhIG1hdHJpeCBpcyBub3JtYWwgaWYgaXQgY29tbXV0ZXMgd2l0aCBpdHMgY29uanVnYXRlIHRyYW5zcG9zZVxyXG5cdHB1YmxpYyBpc05vcm1hbCgpOiBib29sZWFuIHtcclxuXHRcdHRocm93IG5ldyBFcnJvcihcIk5vdCBpbXBsZW1lbnRlZFwiKTtcclxuXHR9XHJcblx0Ly8gdGhlIGNvbmp1Z2F0ZSB0cmFuc3Bvc2Ugb2YgYW4gbS1ieS1uIG1hdHJpeCBBIHdpdGggY29tcGxleCBlbnRyaWVzIGlzIHRoZSBuLWJ5LW0gbWF0cml4IEHiiJcgb2J0YWluZWQgZnJvbSBBXHJcblx0Ly8gYnkgdGFraW5nIHRoZSB0cmFuc3Bvc2UgYW5kIHRoZW4gdGFraW5nIHRoZSBjb21wbGV4IGNvbmp1Z2F0ZSBvZiBlYWNoIGVudHJ5XHJcblx0Ly8gW0FMSUFTRVNdOiBIZXJtaXRpYW4gdHJhbnNwb3NlXHJcblx0cHVibGljIHRvQ29uanVnYXRlVHJhbnNwb3NlKCk6IE1hdHJpeCB7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJOb3QgaW1wbGVtZW50ZWRcIik7XHJcblx0fVxyXG5cdHB1YmxpYyBpc1VwcGVyVHJpYW5ndWxhcigpOiBib29sZWFuIHtcclxuXHRcdC8vIHRvZG86IGNoZWNrIGlmIGRlZmluaXRpb24gaXMgdmFsaWQgZm9yIGEgbm9uIHNxdWFyZSBtYXRyaXhcclxuXHRcdC8vIGlmICh0aGlzLm0gIT09IHRoaXMubikgeyB0aHJvdyBuZXcgRXJyb3IoXCJOb3QgYSBzcXVhcmUgbWF0cml4LlwiKTsgfVxyXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMTsgaSA8IHRoaXMubTsgaSsrKSB7XHJcblx0XHRcdGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCBpOyBqKyspIHtcclxuXHRcdFx0XHRpZiAoIXRoaXMuZWxlbWVudHNbaV1bal0uZXF1YWxzKG5ldyBSYXRpb25hbE51bWJlcigwKSkpIHsgcmV0dXJuIGZhbHNlOyB9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHRwdWJsaWMgaXNMb3dlclRyaWFuZ3VsYXIoKTogYm9vbGVhbiB7XHJcblx0XHQvLyB0b2RvOiBjaGVjayBpZiBkZWZpbml0aW9uIGlzIHZhbGlkIGZvciBhIG5vbiBzcXVhcmUgbWF0cml4XHJcblx0XHQvLyBpZiAodGhpcy5tICE9PSB0aGlzLm4pIHsgdGhyb3cgbmV3IEVycm9yKFwiTm90IGEgc3F1YXJlIG1hdHJpeC5cIik7IH1cclxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLm07IGkrKykge1xyXG5cdFx0XHRmb3IgKGxldCBqOiBudW1iZXIgPSBpICsgMTsgaiA8IHRoaXMubjsgaisrKSB7XHJcblx0XHRcdFx0aWYgKCF0aGlzLmVsZW1lbnRzW2ldW2pdLmVxdWFscyhuZXcgUmF0aW9uYWxOdW1iZXIoMCkpKSB7IHJldHVybiBmYWxzZTsgfVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblx0Ly8gYSBzeW1tZXRyaWMgbWF0cml4IGlzIGEgc3F1YXJlIG1hdHJpeCB0aGF0IGlzIGVxdWFsIHRvIGl0cyB0cmFuc3Bvc2VcclxuXHRwdWJsaWMgaXNTeW1tZXRyaWMoKTogYm9vbGVhbiB7XHJcblx0XHRpZiAodGhpcy5tICE9PSB0aGlzLm4pIHsgdGhyb3cgbmV3IEVycm9yKFwiTm90IGEgc3F1YXJlIG1hdHJpeC5cIik7IH1cclxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLm07IGkrKykge1xyXG5cdFx0XHRmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgdGhpcy5uOyBqKyspIHtcclxuXHRcdFx0XHRpZiAoIXRoaXMuZWxlbWVudHNbaV1bal0uZXF1YWxzKHRoaXMuZWxlbWVudHNbal1baV0pKSB7IHJldHVybiBmYWxzZTsgfVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblx0Ly8gYW4gb3J0aG9nb25hbCBtYXRyaXggaXMgYSBzcXVhcmUgbWF0cml4IHdpdGggcmVhbCBlbnRyaWVzIHdob3NlIGNvbHVtbnMgYW5kIHJvd3MgYXJlIG9ydGhvZ29uYWwgdW5pdCB2ZWN0b3JzXHJcblx0Ly8gW0FMSUFTRVNdOiByZWFsIG9ydGhvZ29uYWwgbWF0cml4XHJcblx0cHVibGljIGlzT3J0aG9nb25hbCgpOiBib29sZWFuIHtcclxuXHRcdGNvbnN0IE1UOiBNYXRyaXggPSB0aGlzLnRyYW5zcG9zZSgpO1xyXG5cdFx0cmV0dXJuIHRoaXMubXVsdChNVCkuaXNJZGVudGl0eSgpO1xyXG5cdH1cclxuXHRwdWJsaWMgaXNSb3dFY2hlbG9uRm9ybSgpOiBib29sZWFuIHtcclxuXHRcdGxldCBmb3VuZFplcm9Sb3c6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHRcdC8vIGFsbCBub256ZXJvIHJvd3MgKHJvd3Mgd2l0aCBhdCBsZWFzdCBvbmUgbm9uemVybyBlbGVtZW50KSBhcmUgYWJvdmUgYW55IHJvd3Mgb2YgYWxsIHplcm9lc1xyXG5cdFx0Ly8gKGFsbCB6ZXJvIHJvd3MsIGlmIGFueSwgYmVsb25nIGF0IHRoZSBib3R0b20gb2YgdGhlIG1hdHJpeClcclxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLm07IGkrKykge1xyXG5cdFx0XHRpZiAodGhpcy5pc1plcm9Sb3coaSkpIHtcclxuXHRcdFx0XHRmb3VuZFplcm9Sb3cgPSB0cnVlO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGlmIChmb3VuZFplcm9Sb3cpIHsgcmV0dXJuIGZhbHNlOyB9XHJcblx0XHRcdH0vLyBpZiBjdXJyZW50IHJvdyBpcyBub3QgemVybywgYnV0IGEgcHJldmlvdXMgcm93IGlzIHplcm8sIHRoZW4gbWF0cml4IGlzIG5vdCBpbiByb3cgZWNoZWxvbiBmb3JtXHJcblx0XHR9XHJcblx0XHQvLyB0aGUgbGVhZGluZyBjb2VmZmljaWVudCAodGhlIGZpcnN0IG5vbnplcm8gbnVtYmVyIGZyb20gdGhlIGxlZnQsIGFsc28gY2FsbGVkIHRoZSBwaXZvdCkgb2YgYSBub256ZXJvIHJvd1xyXG5cdFx0Ly8gaXMgYWx3YXlzIHN0cmljdGx5IHRvIHRoZSByaWdodCBvZiB0aGUgbGVhZGluZyBjb2VmZmljaWVudCBvZiB0aGUgcm93IGFib3ZlIGl0XHJcblx0XHRsZXQgcHJldmlvdXNJZHg6IG51bWJlciA9IC0xO1xyXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMubTsgaSsrKSB7XHJcblx0XHRcdGNvbnN0IGN1cnJlbnRQaXZvdElkeDogbnVtYmVyID0gdGhpcy5yb3dQaXZvdFBvc2l0aW9uKGkpO1xyXG5cdFx0XHRpZiAoMCA+IGN1cnJlbnRQaXZvdElkeCkgeyBjb250aW51ZTsgfS8vIHRoaXMgaXMgYSB6ZXJvIHJvdywgbm8gcGl2b3RcclxuXHRcdFx0Ly8gbGVhZGluZyBjb2VmZmljaWVudCBtdXN0IGJlIDFcclxuXHRcdFx0aWYgKCF0aGlzLmVsZW1lbnRzW2ldW2N1cnJlbnRQaXZvdElkeF0uZXF1YWxzKG5ldyBSYXRpb25hbE51bWJlcigxKSkpIHsgcmV0dXJuIGZhbHNlOyB9XHJcblx0XHRcdGlmIChwcmV2aW91c0lkeCA8IGN1cnJlbnRQaXZvdElkeCkge1xyXG5cdFx0XHRcdHByZXZpb3VzSWR4ID0gY3VycmVudFBpdm90SWR4O1xyXG5cdFx0XHR9IGVsc2UgeyByZXR1cm4gZmFsc2U7IH1cclxuXHRcdH1cclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHRwdWJsaWMgaXNSZWR1Y2VkUm93RWNoZWxvbkZvcm0oKTogYm9vbGVhbiB7XHJcblx0XHRpZiAoIXRoaXMuaXNSb3dFY2hlbG9uRm9ybSgpKSB7IHJldHVybiBmYWxzZTsgfVxyXG5cdFx0Ly8gZWFjaCBsZWFkaW5nIGNvZWZmaWNpZW50IGlzIHRoZSBvbmx5IG5vbnplcm8gZW50cnkgaW4gaXRzIGNvbHVtblxyXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMubTsgaSsrKSB7XHJcblx0XHRcdGNvbnN0IHBpdm90UG9zaXRpb246IG51bWJlciA9IHRoaXMucm93UGl2b3RQb3NpdGlvbihpKTtcclxuXHRcdFx0aWYgKDEgPCB0aGlzLm51bWJlck9mTm9uWmVyb0VsZW1lbnRGb3JDb2x1bW4ocGl2b3RQb3NpdGlvbikpIHsgcmV0dXJuIGZhbHNlOyB9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblx0cHVibGljIHRvUmVkdWNlZFJvd0VjaGVsb25Gb3JtKCk6IE1hdHJpeCB7XHJcblx0XHRjb25zdCByZXM6IE1hdHJpeCA9IHRoaXMuZGVlcENvcHkoKTtcclxuXHRcdGxldCBsZWFkOiBudW1iZXIgPSAwO1xyXG5cdFx0Zm9yIChsZXQgcjogbnVtYmVyID0gMDsgciA8IHJlcy5tOyByKyspIHtcclxuXHRcdFx0aWYgKHJlcy5uIDw9IGxlYWQpIHtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0XHRsZXQgaTogbnVtYmVyID0gcjtcclxuXHRcdFx0d2hpbGUgKHJlcy5lbGVtZW50c1tpXVtsZWFkXS5lcXVhbHMoMCkpIHtcclxuXHRcdFx0XHRpKys7XHJcblx0XHRcdFx0aWYgKHJlcy5tID09PSBpKSB7XHJcblx0XHRcdFx0XHRpID0gcjtcclxuXHRcdFx0XHRcdGxlYWQrKztcclxuXHRcdFx0XHRcdGlmIChyZXMubiA9PT0gbGVhZCkge1xyXG5cdFx0XHRcdFx0XHRsZWFkLS07XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRyZXMuc3dpdGNoUm93cyhpLCByKTtcclxuXHRcdFx0aWYgKCFyZXMuZWxlbWVudHNbcl1bbGVhZF0uZXF1YWxzKDApKSB7XHJcblx0XHRcdFx0cmVzLm11bHRpcGx5Um93KHIsIHJlcy5lbGVtZW50c1tyXVtsZWFkXS5yZWNpcHJvY2FsKCkpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCByZXMubTsgaisrKSB7XHJcblx0XHRcdFx0aWYgKGogIT09IHIpIHtcclxuXHRcdFx0XHRcdHJlcy5hZGRSb3dzKGosIHIsIHJlcy5lbGVtZW50c1tqXVtsZWFkXS5vcHBvc2l0ZSgpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0bGVhZCsrO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlcztcclxuXHR9XHJcblx0cHVibGljIGRldGVybWluYW50KCk6IFJhdGlvbmFsTnVtYmVyIHtcclxuXHRcdC8vIHRvZG86IGltcGxlbWVudCBhbiBvcHRpbWl6ZWQgdmVyc2lvbiwgbGlrZSBBPVBMVVxyXG5cdFx0aWYgKHRoaXMubSAhPT0gdGhpcy5uKSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIkRldGVybWluYW50IGNhbiBvbmx5IGJlIGNhbGN1bGF0ZWQgb24gYSBzcXVhcmUgbWF0cml4XCIpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMubSA9PT0gMSkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5lbGVtZW50c1swXVswXTtcclxuXHRcdH1cclxuXHRcdGxldCByZXQ6IFJhdGlvbmFsTnVtYmVyID0gbmV3IFJhdGlvbmFsTnVtYmVyKDApO1xyXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMubjsgaSsrKSB7XHJcblx0XHRcdGNvbnN0IG1pbm9yOiBSYXRpb25hbE51bWJlciA9IHRoaXMuZWxlbWVudHNbMF1baV0ubXVsdCh0aGlzLmNvZmFjdG9yKDAsIGkpLmRldGVybWluYW50KCkpO1xyXG5cdFx0XHRyZXQgPSByZXQuYWRkKG1pbm9yLm11bHQoKC0xKSAqKiBpKSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmV0O1xyXG5cdH1cclxuXHRwdWJsaWMgY29udm9sdXRlKGtlcm5lbDogTWF0cml4KTogTWF0cml4IHtcclxuXHRcdGlmIChrZXJuZWwubSAhPT0ga2VybmVsLm4pIHsgdGhyb3cgbmV3IEVycm9yKFwiS2VybmVsIGlzIG5vdCBhIHNxdWFyZSBtYXRyaXguXCIpOyB9XHJcblx0XHRpZiAoa2VybmVsLm0gJSAyID09PSAwKSB7IHRocm93IG5ldyBFcnJvcihcIktlcm5lbCBpcyBub3QgYW4gZXZlbiBzaXplIG1hdHJpeC5cIik7IH1cclxuXHRcdGNvbnN0IHN6ID0gTWF0aC5mbG9vcihrZXJuZWwubSAvIDIpO1xyXG5cdFx0Y29uc3QgcmVzOiBNYXRyaXggPSBuZXcgTWF0cml4KHRoaXMubSwgdGhpcy5uKTtcclxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLm07IGkrKykge1xyXG5cdFx0XHRmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgdGhpcy5uOyBqKyspIHtcclxuXHRcdFx0XHRyZXMuZWxlbWVudHNbaV1bal0gPSBuZXcgUmF0aW9uYWxOdW1iZXIoMCk7XHJcblx0XHRcdFx0Zm9yIChsZXQgdGk6IG51bWJlciA9IDA7IHRpIDwga2VybmVsLm07IHRpKyspIHtcclxuXHRcdFx0XHRcdGlmIChpICsgdGkgLSBzeiA8IDAgfHwgaSArIHRpIC0gc3ogPj0gdGhpcy5tKSB7XHJcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Zm9yIChsZXQgdGo6IG51bWJlciA9IDA7IHRqIDwga2VybmVsLm47IHRqKyspIHtcclxuXHRcdFx0XHRcdFx0aWYgKGogKyB0aiAtIHN6IDwgMCB8fCBqICsgdGogLSBzeiA+PSB0aGlzLm4pIHtcclxuXHRcdFx0XHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRyZXMuZWxlbWVudHNbaV1bal0gPSByZXMuZWxlbWVudHNbaV1bal0uYWRkKHRoaXMuZWxlbWVudHNbaSArIHRpIC0gc3pdW2ogKyB0aiAtIHN6XS5tdWx0KGtlcm5lbC5lbGVtZW50c1t0aV1bdGpdKSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBpc1plcm9Sb3cocm93SWQ6IG51bWJlcik6IGJvb2xlYW4ge1xyXG5cdFx0Zm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IHRoaXMubjsgaisrKSB7XHJcblx0XHRcdGlmICghdGhpcy5lbGVtZW50c1tyb3dJZF1bal0uZXF1YWxzKG5ldyBSYXRpb25hbE51bWJlcigwKSkpIHsgcmV0dXJuIGZhbHNlOyB9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblx0cHJpdmF0ZSByb3dQaXZvdFBvc2l0aW9uKHJvd0lkOiBudW1iZXIpOiBudW1iZXIge1xyXG5cdFx0Zm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IHRoaXMubjsgaisrKSB7XHJcblx0XHRcdGlmICghdGhpcy5lbGVtZW50c1tyb3dJZF1bal0uZXF1YWxzKG5ldyBSYXRpb25hbE51bWJlcigwKSkpIHsgcmV0dXJuIGo7IH1cclxuXHRcdH1cclxuXHRcdHJldHVybiAtMTtcclxuXHR9XHJcblx0cHJpdmF0ZSBudW1iZXJPZk5vblplcm9FbGVtZW50Rm9yQ29sdW1uKGNvbHVtbklkOiBudW1iZXIpOiBudW1iZXIge1xyXG5cdFx0bGV0IGFjYzogbnVtYmVyID0gMDtcclxuXHRcdGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCB0aGlzLm07IGorKykge1xyXG5cdFx0XHRpZiAoIXRoaXMuZWxlbWVudHNbal1bY29sdW1uSWRdLmVxdWFscyhuZXcgUmF0aW9uYWxOdW1iZXIoMCkpKSB7IGFjYysrOyB9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gYWNjO1xyXG5cdH1cclxuXHRwcml2YXRlIGNvZmFjdG9yKHJvd0lkOiBudW1iZXIsIGNvbHVtbklkOiBudW1iZXIpOiBNYXRyaXgge1xyXG5cdFx0Y29uc3QgcmV0OiBNYXRyaXggPSBuZXcgTWF0cml4KHRoaXMubSAtIDEsIHRoaXMubiAtIDEpO1xyXG5cdFx0bGV0IHJvd09mZnNldDogbnVtYmVyID0gMDtcclxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLm0gLSAxOyBpKyspIHtcclxuXHRcdFx0aWYgKGkgPT09IHJvd0lkKSB7XHJcblx0XHRcdFx0cm93T2Zmc2V0ID0gMTtcclxuXHRcdFx0fVxyXG5cdFx0XHRsZXQgY29sdW1uT2Zmc2V0OiBudW1iZXIgPSAwO1xyXG5cdFx0XHRmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgdGhpcy5uIC0gMTsgaisrKSB7XHJcblx0XHRcdFx0aWYgKGogPT09IGNvbHVtbklkKSB7XHJcblx0XHRcdFx0XHRjb2x1bW5PZmZzZXQgPSAxO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXQuZWxlbWVudHNbaV1bal0gPSB0aGlzLmVsZW1lbnRzW2kgKyByb3dPZmZzZXRdW2ogKyBjb2x1bW5PZmZzZXRdO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmV0O1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE1hdHJpeElkZW50aXR5IGV4dGVuZHMgTWF0cml4IHtcclxuXHRjb25zdHJ1Y3RvcihtOiBudW1iZXIpIHtcclxuXHRcdHN1cGVyKG0sIG0pO1xyXG5cdFx0dGhpcy5lbGVtZW50cyA9IFtdO1xyXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMubTsgaSsrKSB7XHJcblx0XHRcdHRoaXMuZWxlbWVudHNbaV0gPSBbXTtcclxuXHRcdFx0Zm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IHRoaXMubTsgaisrKSB7XHJcblx0XHRcdFx0aWYgKGkgPT09IGopIHtcclxuXHRcdFx0XHRcdHRoaXMuZWxlbWVudHNbaV1bal0gPSBuZXcgUmF0aW9uYWxOdW1iZXIoMSk7XHJcblx0XHRcdFx0fSBlbHNlIHsgdGhpcy5lbGVtZW50c1tpXVtqXSA9IG5ldyBSYXRpb25hbE51bWJlcigwKTsgfVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4vLyBlbGltaW5hdGlvbiAtIG11bHRpcGx5IG9uIHRoZSBsZWZ0IChFKkEpOyBSb3ctYWRkaXRpb24gdHJhbnNmb3JtYXRpb25zXHJcbi8vIHRvIG11bHQqKHJvdzIgb2YgTWF0cml4IEEpIGFkZCAocm93MSBvZiBNYXRyaXggQSlcclxuZXhwb3J0IGNsYXNzIE1hdHJpeEVsaW1pbmF0aW9uIGV4dGVuZHMgTWF0cml4IHtcclxuXHRwdWJsaWMgcm93MTogbnVtYmVyO1xyXG5cdHB1YmxpYyByb3cyOiBudW1iZXI7XHJcblx0Y29uc3RydWN0b3IobTogbnVtYmVyLCByMTogbnVtYmVyLCByMjogbnVtYmVyLCBtdWx0OiBudW1iZXIgfCBSYXRpb25hbE51bWJlcikge1xyXG5cdFx0aWYgKG0gPCByMSB8fCBtIDwgcjIpIHsgdGhyb3cgbmV3IEVycm9yKFwiQ29sdW1uIGluZGV4IG11c3QgYmUgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIHRoZSBtYXRyaXggc2l6ZS5cIik7IH1cclxuXHRcdHN1cGVyKG0sIG0pO1xyXG5cdFx0dGhpcy5yb3cxID0gcjE7XHJcblx0XHR0aGlzLnJvdzIgPSByMjtcclxuXHRcdHRoaXMuZWxlbWVudHMgPSBbXTtcclxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLm07IGkrKykge1xyXG5cdFx0XHR0aGlzLmVsZW1lbnRzW2ldID0gW107XHJcblx0XHRcdGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCB0aGlzLm07IGorKykge1xyXG5cdFx0XHRcdGlmIChpID09PSBqKSB7XHJcblx0XHRcdFx0XHR0aGlzLmVsZW1lbnRzW2ldW2pdID0gbmV3IFJhdGlvbmFsTnVtYmVyKDEpO1xyXG5cdFx0XHRcdH0gZWxzZSB7IHRoaXMuZWxlbWVudHNbaV1bal0gPSBuZXcgUmF0aW9uYWxOdW1iZXIoMCk7IH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKHR5cGVvZiBtdWx0ID09PSBcIm51bWJlclwiKSB7XHJcblx0XHRcdHRoaXMuZWxlbWVudHNbcjFdW3IyXSA9IG5ldyBSYXRpb25hbE51bWJlcihtdWx0KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmIChtdWx0IGluc3RhbmNlb2YgUmF0aW9uYWxOdW1iZXIpIHsgdGhpcy5lbGVtZW50c1tyMV1bcjJdID0gbXVsdDsgfVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuLy8gcGVybXV0YXRpb24gLSBtdWx0aXBseSBvbiB0aGUgcmlnaHQgKEEqUCk7IFJvdy1zd2l0Y2hpbmcgdHJhbnNmb3JtYXRpb25zXHJcbmV4cG9ydCBjbGFzcyBNYXRyaXhQZXJtdXRhdGlvbiBleHRlbmRzIE1hdHJpeCB7XHJcblx0Y29uc3RydWN0b3IobTogbnVtYmVyLCByb3cxOiBudW1iZXIsIHJvdzI6IG51bWJlcikge1xyXG5cdFx0aWYgKG0gPCByb3cxIHx8IG0gPCByb3cyKSB7IHRocm93IG5ldyBFcnJvcihcIkNvbHVtbiBpbmRleCBtdXN0IGJlIGxlc3MgdGhhbiBvciBlcXVhbCB0byB0aGUgbWF0cml4IHNpemUuXCIpOyB9XHJcblx0XHRzdXBlcihtLCBtKTtcclxuXHRcdHRoaXMuZWxlbWVudHMgPSBbXTtcclxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLm07IGkrKykge1xyXG5cdFx0XHR0aGlzLmVsZW1lbnRzW2ldID0gW107XHJcblx0XHRcdGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCB0aGlzLm07IGorKykge1xyXG5cdFx0XHRcdGlmIChpID09PSBqKSB7XHJcblx0XHRcdFx0XHR0aGlzLmVsZW1lbnRzW2ldW2pdID0gbmV3IFJhdGlvbmFsTnVtYmVyKDEpO1xyXG5cdFx0XHRcdH0gZWxzZSB7IHRoaXMuZWxlbWVudHNbaV1bal0gPSBuZXcgUmF0aW9uYWxOdW1iZXIoMCk7IH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0dGhpcy5lbGVtZW50c1tyb3cxXVtyb3cxXSA9IG5ldyBSYXRpb25hbE51bWJlcigwKTtcclxuXHRcdHRoaXMuZWxlbWVudHNbcm93MV1bcm93Ml0gPSBuZXcgUmF0aW9uYWxOdW1iZXIoMSk7XHJcblx0XHR0aGlzLmVsZW1lbnRzW3JvdzJdW3JvdzJdID0gbmV3IFJhdGlvbmFsTnVtYmVyKDApO1xyXG5cdFx0dGhpcy5lbGVtZW50c1tyb3cyXVtyb3cxXSA9IG5ldyBSYXRpb25hbE51bWJlcigxKTtcclxuXHR9XHJcbn0iLCJleHBvcnQgY2xhc3MgUXVldWU8VD4ge1xyXG5cdHByaXZhdGUgcXVldWU6IFRbXTtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMucXVldWUgPSBbXTtcclxuXHR9XHJcblx0cHVibGljIGlzRW1wdHkoKTogYm9vbGVhbiB7XHJcblx0XHRyZXR1cm4gdGhpcy5xdWV1ZS5sZW5ndGggPT09IDA7XHJcblx0fVxyXG5cdHB1YmxpYyBlbnF1ZXVlKGVsZW1lbnQ6IFQpOiB2b2lkIHtcclxuXHRcdHRoaXMucXVldWUucHVzaChlbGVtZW50KTtcclxuXHR9XHJcblx0cHVibGljIGRlcXVldWUoKTogVCB7XHJcblx0XHRpZiAodGhpcy5pc0VtcHR5KCkpIHsgdGhyb3cgbmV3IEVycm9yKFwiUXVldWUgaXMgZW1wdHlcIik7IH1cclxuXHRcdHJldHVybiB0aGlzLnF1ZXVlLnNoaWZ0KCk7XHJcblx0fVxyXG5cdHB1YmxpYyBwZWVrKCk6IFQge1xyXG5cdFx0aWYgKHRoaXMuaXNFbXB0eSgpKSB7IHRocm93IG5ldyBFcnJvcihcIlF1ZXVlIGlzIGVtcHR5XCIpOyB9XHJcblx0XHRyZXR1cm4gdGhpcy5xdWV1ZVswXTtcclxuXHR9XHJcblx0cHVibGljIHRvQXJyYXkoKTogVFtdIHtcclxuXHRcdHJldHVybiB0aGlzLnF1ZXVlO1xyXG5cdH1cclxufSIsImltcG9ydCB7IFBhcnNlciB9IGZyb20gXCIuL0FyaXRobWV0aWNFdmFsdWF0b3JcIjtcclxuaW1wb3J0IHsgUXVldWUgfSBmcm9tIFwiLi9RdWV1ZVwiO1xyXG5pbXBvcnQgeyBTdGFjayB9IGZyb20gXCIuL1N0YWNrXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUmF0aW9uYWxOdW1iZXIge1xyXG5cdHB1YmxpYyBzdGF0aWMgdG9SZXZlcnNlUG9saXNoTm90YXRpb24oY29kZTogc3RyaW5nKTogc3RyaW5nW10ge1xyXG5cdFx0Y29uc3QgdG9rZW5zOiBzdHJpbmdbXSA9IGNvZGUubWF0Y2goL1xcKHxcXCl8XFxkKyhcXC5cXGQrKT98XFx3K3xbXFwrXFwtXFwqXFwvXFxeXS9nKTtcclxuXHRcdGxldCBpOiBudW1iZXIgPSAwO1xyXG5cdFx0Y29uc3Qgb3V0cHV0UXVldWU6IFF1ZXVlPHN0cmluZz4gPSBuZXcgUXVldWU8c3RyaW5nPigpO1xyXG5cdFx0Y29uc3Qgb3BlcmF0b3JTdGFjazogU3RhY2s8c3RyaW5nPiA9IG5ldyBTdGFjazxzdHJpbmc+KCk7XHJcblx0XHR3aGlsZSAoaSA8IHRva2Vucy5sZW5ndGgpIHtcclxuXHRcdFx0aWYgKHRoaXMuaXNOdW1iZXIodG9rZW5zW2ldKSkge1xyXG5cdFx0XHRcdG91dHB1dFF1ZXVlLmVucXVldWUodG9rZW5zW2ldKTtcclxuXHRcdFx0fSBlbHNlIGlmICh0aGlzLmlzT3BlcmF0b3IodG9rZW5zW2ldKSkge1xyXG5cdFx0XHRcdGNvbnN0IG9wMTogc3RyaW5nID0gdG9rZW5zW2ldO1xyXG5cdFx0XHRcdHdoaWxlICghb3BlcmF0b3JTdGFjay5pc0VtcHR5KCkgJiYgdGhpcy5pc09wZXJhdG9yKG9wZXJhdG9yU3RhY2sucGVlaygpKSkge1xyXG5cdFx0XHRcdFx0aWYgKCh0aGlzLmlzTGVmdEFzc29jaWF0aXZlT3BlcmF0b3Iob3AxKSAmJiAodGhpcy5wcmVjZWRlbmNlKG9wMSkgPD0gdGhpcy5wcmVjZWRlbmNlKG9wZXJhdG9yU3RhY2sucGVlaygpKSkpIHx8XHJcblx0XHRcdFx0XHRcdCh0aGlzLmlzUmlnaHRBc3NvY2lhdGl2ZU9wZXJhdG9yKG9wMSkgJiYgKHRoaXMucHJlY2VkZW5jZShvcDEpIDwgdGhpcy5wcmVjZWRlbmNlKG9wZXJhdG9yU3RhY2sucGVlaygpKSkpKSB7XHJcblx0XHRcdFx0XHRcdG91dHB1dFF1ZXVlLmVucXVldWUob3BlcmF0b3JTdGFjay5wb3AoKSk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0b3BlcmF0b3JTdGFjay5wdXNoKG9wMSk7XHJcblx0XHRcdH0gZWxzZSBpZiAodG9rZW5zW2ldID09PSBcIihcIikge1xyXG5cdFx0XHRcdG9wZXJhdG9yU3RhY2sucHVzaCh0b2tlbnNbaV0pO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHRva2Vuc1tpXSA9PT0gXCIpXCIpIHtcclxuXHRcdFx0XHR3aGlsZSAoIW9wZXJhdG9yU3RhY2suaXNFbXB0eSgpICYmIG9wZXJhdG9yU3RhY2sucGVlaygpICE9PSBcIihcIikge1xyXG5cdFx0XHRcdFx0b3V0cHV0UXVldWUuZW5xdWV1ZShvcGVyYXRvclN0YWNrLnBvcCgpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKCFvcGVyYXRvclN0YWNrLmlzRW1wdHkoKSAmJiBvcGVyYXRvclN0YWNrLnBlZWsoKSA9PT0gXCIoXCIpIHtcclxuXHRcdFx0XHRcdG9wZXJhdG9yU3RhY2sucG9wKCk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIk1pc21hdGNoZWQgcGFyZW50aGVzZXMuXCIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRpKys7XHJcblx0XHR9XHJcblx0XHR3aGlsZSAoIW9wZXJhdG9yU3RhY2suaXNFbXB0eSgpKSB7XHJcblx0XHRcdGlmIChvcGVyYXRvclN0YWNrLnBlZWsoKSA9PT0gXCIoXCIpIHtcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJNaXNtYXRjaGVkIHBhcmVudGhlc2VzLlwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRvdXRwdXRRdWV1ZS5lbnF1ZXVlKG9wZXJhdG9yU3RhY2sucG9wKCkpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gb3V0cHV0UXVldWUudG9BcnJheSgpO1xyXG5cdH1cclxuXHRwdWJsaWMgc3RhdGljIGZyb21TdHJpbmcoY29kZTogc3RyaW5nKTogUmF0aW9uYWxOdW1iZXIge1xyXG5cdFx0Y29uc3QgcDogUGFyc2VyID0gbmV3IFBhcnNlcigpO1xyXG5cdFx0cmV0dXJuIHAucGFyc2UoY29kZSk7XHJcblx0fVxyXG5cdHB1YmxpYyBzdGF0aWMgZ3JlYXRlc3RDb21tb25EaXZpc29yKGE6IG51bWJlciwgYjogbnVtYmVyKTogbnVtYmVyIHtcclxuXHRcdHJldHVybiBiID8gUmF0aW9uYWxOdW1iZXIuZ3JlYXRlc3RDb21tb25EaXZpc29yKGIsIGEgJSBiKSA6IGE7XHJcblx0fVxyXG5cdHB1YmxpYyBzdGF0aWMgbGVhc3RDb21tb25NdWx0aXBsZShhOiBudW1iZXIsIGI6IG51bWJlcik6IG51bWJlciB7XHJcblx0XHRyZXR1cm4gTWF0aC5hYnMoYSAqIGIgLyBSYXRpb25hbE51bWJlci5ncmVhdGVzdENvbW1vbkRpdmlzb3IoYSwgYikpO1xyXG5cdH1cclxuXHRwcml2YXRlIHN0YXRpYyBpc051bWJlcihjb2RlOiBzdHJpbmcpOiBib29sZWFuIHtcclxuXHRcdHJldHVybiAvXlxcZC8udGVzdChjb2RlKTtcclxuXHR9XHJcblx0cHJpdmF0ZSBzdGF0aWMgaXNPcGVyYXRvcihjb2RlOiBzdHJpbmcpOiBib29sZWFuIHtcclxuXHRcdHJldHVybiAvW1xcK1xcLVxcKlxcL1xcXl0vLnRlc3QoY29kZSk7XHJcblx0fVxyXG5cdHByaXZhdGUgc3RhdGljIGlzTGVmdEFzc29jaWF0aXZlT3BlcmF0b3Iob3BlcmF0b3I6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG5cdFx0cmV0dXJuIC9bXFwrXFwtXFwqXFwvXS8udGVzdChvcGVyYXRvcik7XHJcblx0fVxyXG5cdHByaXZhdGUgc3RhdGljIGlzUmlnaHRBc3NvY2lhdGl2ZU9wZXJhdG9yKG9wZXJhdG9yOiBzdHJpbmcpOiBib29sZWFuIHtcclxuXHRcdHJldHVybiAvW1xcXl0vLnRlc3Qob3BlcmF0b3IpO1xyXG5cdH1cclxuXHRwcml2YXRlIHN0YXRpYyBwcmVjZWRlbmNlKG9wZXJhdG9yOiBzdHJpbmcpOiBudW1iZXIge1xyXG5cdFx0aWYgKC9bXFwrXFwtXS8udGVzdChvcGVyYXRvcikpIHtcclxuXHRcdFx0cmV0dXJuIDE7XHJcblx0XHR9XHJcblx0XHRpZiAoL1tcXCpcXC9dLy50ZXN0KG9wZXJhdG9yKSkge1xyXG5cdFx0XHRyZXR1cm4gMjtcclxuXHRcdH1cclxuXHRcdGlmICgvW1xcXl0vLnRlc3Qob3BlcmF0b3IpKSB7XHJcblx0XHRcdHJldHVybiAzO1xyXG5cdFx0fVxyXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiVW5rbm93biBvcGVyYXRvci5cIik7XHJcblx0fVxyXG5cdHByaXZhdGUgc3RhdGljIGV2YWx1YXRlRnJvbVJQTih0b2tlbnM6IHN0cmluZ1tdKTogUmF0aW9uYWxOdW1iZXIge1xyXG5cdFx0Y29uc3Qgc3RhY2s6IFN0YWNrPFJhdGlvbmFsTnVtYmVyPiA9IG5ldyBTdGFjazxSYXRpb25hbE51bWJlcj4oKTtcclxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0aWYgKCF0aGlzLmlzT3BlcmF0b3IodG9rZW5zW2ldKSkge1xyXG5cdFx0XHRcdHN0YWNrLnB1c2gobmV3IFJhdGlvbmFsTnVtYmVyKHBhcnNlRmxvYXQodG9rZW5zW2ldKSkpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGNvbnN0IG9wMTogUmF0aW9uYWxOdW1iZXIgPSBzdGFjay5wb3AoKTtcclxuXHRcdFx0XHRjb25zdCBvcDI6IFJhdGlvbmFsTnVtYmVyID0gc3RhY2sucG9wKCk7XHJcblx0XHRcdFx0c3dpdGNoICh0b2tlbnNbaV0pIHtcclxuXHRcdFx0XHRcdGNhc2UgXCIrXCI6IHN0YWNrLnB1c2gob3AyLmFkZChvcDEpKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlIFwiLVwiOiBzdGFjay5wdXNoKG9wMi5zdWIob3AxKSk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSBcIipcIjogc3RhY2sucHVzaChvcDIubXVsdChvcDEpKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlIFwiL1wiOiBzdGFjay5wdXNoKG9wMi5kaXYob3AxKSk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSBcIl5cIjogc3RhY2sucHVzaChvcDIuZXhwKG9wMS50b051bWJlcigpKSk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHN0YWNrLnBvcCgpLnNpbXBsaWZpZWRGb3JtKCk7XHJcblx0fVxyXG5cdHB1YmxpYyBudW1lcmF0b3I6IG51bWJlcjtcclxuXHRwdWJsaWMgZGVub21pbmF0b3I6IG51bWJlcjtcclxuXHRjb25zdHJ1Y3RvcihuOiBudW1iZXIsIGQ6IG51bWJlciA9IDEpIHtcclxuXHRcdGlmIChkID09PSAwKSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIkRpdmlzaW9uIGJ5IHplcm8hXCIpO1xyXG5cdFx0fVxyXG5cdFx0Ly8gdG9kbzogcG90ZW50aWFsIGZvciBvdmVyZmxvdy4gV2hlbiBNYXRoLnNpZ24gYmVjb21lcyBhdmFpbGFibGUgaW4gVHlwZVNjcmlwdCB1c2UgaXQgaW5zdGVhZCBvZiB0aGUgbXVsdGlwbGljYXRpb25cclxuXHRcdGNvbnN0IHNpZ246IG51bWJlciA9IG4gKiBkID49IDAgPyAxIDogLTE7XHJcblx0XHR0aGlzLm51bWVyYXRvciA9IHNpZ24gKiBNYXRoLmFicyhuKTtcclxuXHRcdHRoaXMuZGVub21pbmF0b3IgPSBNYXRoLmFicyhkKTtcclxuXHR9XHJcblx0cHVibGljIHNpbXBsaWZpZWRGb3JtKCk6IFJhdGlvbmFsTnVtYmVyIHtcclxuXHRcdGNvbnN0IGdjZDogbnVtYmVyID0gUmF0aW9uYWxOdW1iZXIuZ3JlYXRlc3RDb21tb25EaXZpc29yKHRoaXMubnVtZXJhdG9yLCB0aGlzLmRlbm9taW5hdG9yKTtcclxuXHRcdHJldHVybiBuZXcgUmF0aW9uYWxOdW1iZXIodGhpcy5udW1lcmF0b3IgLyBnY2QsIHRoaXMuZGVub21pbmF0b3IgLyBnY2QpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGVxdWFscyh4OiBudW1iZXIgfCBSYXRpb25hbE51bWJlcik6IGJvb2xlYW4ge1xyXG5cdFx0Y29uc3Qgcm4xOiBSYXRpb25hbE51bWJlciA9IHRoaXMuc2ltcGxpZmllZEZvcm0oKTtcclxuXHRcdGlmICh0eXBlb2YgeCA9PT0gXCJudW1iZXJcIikge1xyXG5cdFx0XHRyZXR1cm4gcm4xLm51bWVyYXRvciA9PT0geCAmJiBybjEuZGVub21pbmF0b3IgPT09IDE7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjb25zdCBybjI6IFJhdGlvbmFsTnVtYmVyID0geC5zaW1wbGlmaWVkRm9ybSgpO1xyXG5cdFx0XHRyZXR1cm4gcm4xLm51bWVyYXRvciA9PT0gcm4yLm51bWVyYXRvciAmJiBybjEuZGVub21pbmF0b3IgPT09IHJuMi5kZW5vbWluYXRvcjtcclxuXHRcdH1cclxuXHR9XHJcblx0cHVibGljIGx0KHg6IG51bWJlciB8IFJhdGlvbmFsTnVtYmVyKTogYm9vbGVhbiB7XHJcblx0XHRjb25zdCBybjE6IFJhdGlvbmFsTnVtYmVyID0gdGhpcy5zaW1wbGlmaWVkRm9ybSgpO1xyXG5cdFx0aWYgKHR5cGVvZiB4ID09PSBcIm51bWJlclwiKSB7XHJcblx0XHRcdHJldHVybiBybjEubnVtZXJhdG9yIDwgeCAqIHJuMS5kZW5vbWluYXRvcjtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNvbnN0IHJuMjogUmF0aW9uYWxOdW1iZXIgPSB4LnNpbXBsaWZpZWRGb3JtKCk7XHJcblx0XHRcdHJldHVybiBybjEubnVtZXJhdG9yICogcm4yLmRlbm9taW5hdG9yIDwgcm4yLm51bWVyYXRvciAqIHJuMS5kZW5vbWluYXRvcjtcclxuXHRcdH1cclxuXHR9XHJcblx0cHVibGljIGxlKHg6IG51bWJlciB8IFJhdGlvbmFsTnVtYmVyKTogYm9vbGVhbiB7XHJcblx0XHRjb25zdCBybjE6IFJhdGlvbmFsTnVtYmVyID0gdGhpcy5zaW1wbGlmaWVkRm9ybSgpO1xyXG5cdFx0aWYgKHR5cGVvZiB4ID09PSBcIm51bWJlclwiKSB7XHJcblx0XHRcdHJldHVybiBybjEubnVtZXJhdG9yIDw9IHggKiBybjEuZGVub21pbmF0b3I7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjb25zdCBybjI6IFJhdGlvbmFsTnVtYmVyID0geC5zaW1wbGlmaWVkRm9ybSgpO1xyXG5cdFx0XHRyZXR1cm4gcm4xLm51bWVyYXRvciAqIHJuMi5kZW5vbWluYXRvciA8PSBybjIubnVtZXJhdG9yICogcm4xLmRlbm9taW5hdG9yO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRwdWJsaWMgZ3QoeDogbnVtYmVyIHwgUmF0aW9uYWxOdW1iZXIpOiBib29sZWFuIHtcclxuXHRcdGNvbnN0IHJuMTogUmF0aW9uYWxOdW1iZXIgPSB0aGlzLnNpbXBsaWZpZWRGb3JtKCk7XHJcblx0XHRpZiAodHlwZW9mIHggPT09IFwibnVtYmVyXCIpIHtcclxuXHRcdFx0cmV0dXJuIHJuMS5udW1lcmF0b3IgPiB4ICogcm4xLmRlbm9taW5hdG9yO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y29uc3Qgcm4yOiBSYXRpb25hbE51bWJlciA9IHguc2ltcGxpZmllZEZvcm0oKTtcclxuXHRcdFx0cmV0dXJuIHJuMS5udW1lcmF0b3IgKiBybjIuZGVub21pbmF0b3IgPiBybjIubnVtZXJhdG9yICogcm4xLmRlbm9taW5hdG9yO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRwdWJsaWMgZ2UoeDogbnVtYmVyIHwgUmF0aW9uYWxOdW1iZXIpOiBib29sZWFuIHtcclxuXHRcdGNvbnN0IHJuMTogUmF0aW9uYWxOdW1iZXIgPSB0aGlzLnNpbXBsaWZpZWRGb3JtKCk7XHJcblx0XHRpZiAodHlwZW9mIHggPT09IFwibnVtYmVyXCIpIHtcclxuXHRcdFx0cmV0dXJuIHJuMS5udW1lcmF0b3IgPj0geCAqIHJuMS5kZW5vbWluYXRvcjtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNvbnN0IHJuMjogUmF0aW9uYWxOdW1iZXIgPSB4LnNpbXBsaWZpZWRGb3JtKCk7XHJcblx0XHRcdHJldHVybiBybjEubnVtZXJhdG9yICogcm4yLmRlbm9taW5hdG9yID49IHJuMi5udW1lcmF0b3IgKiBybjEuZGVub21pbmF0b3I7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvLyBtdWx0aXBsaWNhdGl2ZSBpbnZlcnNlXHJcblx0cHVibGljIHJlY2lwcm9jYWwoKTogUmF0aW9uYWxOdW1iZXIge1xyXG5cdFx0aWYgKHRoaXMuZGVub21pbmF0b3IgPT09IDApIHsgdGhyb3cgbmV3IEVycm9yKFwiRGl2aXNpb24gYnkgemVybyFcIik7IH1cclxuXHRcdHJldHVybiBuZXcgUmF0aW9uYWxOdW1iZXIodGhpcy5kZW5vbWluYXRvciwgdGhpcy5udW1lcmF0b3IpO1xyXG5cdH1cclxuXHQvLyBhZGRpdGl2ZSBpbnZlcnNlXHJcblx0cHVibGljIG9wcG9zaXRlKCk6IFJhdGlvbmFsTnVtYmVyIHtcclxuXHRcdHJldHVybiBuZXcgUmF0aW9uYWxOdW1iZXIodGhpcy5udW1lcmF0b3IgKiAoLTEpLCB0aGlzLmRlbm9taW5hdG9yKTtcclxuXHR9XHJcblx0cHVibGljIGFkZCh4OiBudW1iZXIgfCBSYXRpb25hbE51bWJlcik6IFJhdGlvbmFsTnVtYmVyIHtcclxuXHRcdGlmICh0eXBlb2YgeCA9PT0gXCJudW1iZXJcIikge1xyXG5cdFx0XHRyZXR1cm4gbmV3IFJhdGlvbmFsTnVtYmVyKCh0aGlzLm51bWVyYXRvciArIHggKiB0aGlzLmRlbm9taW5hdG9yKSwgdGhpcy5kZW5vbWluYXRvcik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjb25zdCBsY206IG51bWJlciA9IFJhdGlvbmFsTnVtYmVyLmxlYXN0Q29tbW9uTXVsdGlwbGUodGhpcy5kZW5vbWluYXRvciwgeC5kZW5vbWluYXRvcik7XHJcblx0XHRcdGNvbnN0IG4xOiBudW1iZXIgPSB0aGlzLm51bWVyYXRvciAqIGxjbSAvIHRoaXMuZGVub21pbmF0b3I7XHJcblx0XHRcdGNvbnN0IG4yOiBudW1iZXIgPSB4Lm51bWVyYXRvciAqIGxjbSAvIHguZGVub21pbmF0b3I7XHJcblx0XHRcdHJldHVybiBuZXcgUmF0aW9uYWxOdW1iZXIobjEgKyBuMiwgbGNtKTtcclxuXHRcdH1cclxuXHR9XHJcblx0cHVibGljIHN1Yih4OiBudW1iZXIgfCBSYXRpb25hbE51bWJlcik6IFJhdGlvbmFsTnVtYmVyIHtcclxuXHRcdGlmICh0eXBlb2YgeCA9PT0gXCJudW1iZXJcIikge1xyXG5cdFx0XHRyZXR1cm4gbmV3IFJhdGlvbmFsTnVtYmVyKCh0aGlzLm51bWVyYXRvciAtIHggKiB0aGlzLmRlbm9taW5hdG9yKSwgdGhpcy5kZW5vbWluYXRvcik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjb25zdCBsY206IG51bWJlciA9IFJhdGlvbmFsTnVtYmVyLmxlYXN0Q29tbW9uTXVsdGlwbGUodGhpcy5kZW5vbWluYXRvciwgeC5kZW5vbWluYXRvcik7XHJcblx0XHRcdGNvbnN0IG4xOiBudW1iZXIgPSB0aGlzLm51bWVyYXRvciAqIGxjbSAvIHRoaXMuZGVub21pbmF0b3I7XHJcblx0XHRcdGNvbnN0IG4yOiBudW1iZXIgPSB4Lm51bWVyYXRvciAqIGxjbSAvIHguZGVub21pbmF0b3I7XHJcblx0XHRcdHJldHVybiBuZXcgUmF0aW9uYWxOdW1iZXIobjEgLSBuMiwgbGNtKTtcclxuXHRcdH1cclxuXHR9XHJcblx0cHVibGljIG11bHQoeDogbnVtYmVyIHwgUmF0aW9uYWxOdW1iZXIpOiBSYXRpb25hbE51bWJlciB7XHJcblx0XHRpZiAodHlwZW9mIHggPT09IFwibnVtYmVyXCIpIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBSYXRpb25hbE51bWJlcigodGhpcy5udW1lcmF0b3IgKiB4KSwgdGhpcy5kZW5vbWluYXRvcik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gbmV3IFJhdGlvbmFsTnVtYmVyKCh0aGlzLm51bWVyYXRvciAqIHgubnVtZXJhdG9yKSwgeC5kZW5vbWluYXRvciAqIHRoaXMuZGVub21pbmF0b3IpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRwdWJsaWMgZGl2KHg6IG51bWJlciB8IFJhdGlvbmFsTnVtYmVyKTogUmF0aW9uYWxOdW1iZXIge1xyXG5cdFx0aWYgKHR5cGVvZiB4ID09PSBcIm51bWJlclwiKSB7XHJcblx0XHRcdHJldHVybiBuZXcgUmF0aW9uYWxOdW1iZXIoKHRoaXMubnVtZXJhdG9yKSwgdGhpcy5kZW5vbWluYXRvciAqIHgpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBSYXRpb25hbE51bWJlcigodGhpcy5udW1lcmF0b3IgKiB4LmRlbm9taW5hdG9yKSwgeC5udW1lcmF0b3IgKiB0aGlzLmRlbm9taW5hdG9yKTtcclxuXHRcdH1cclxuXHR9XHJcblx0cHVibGljIGV4cCh4OiBudW1iZXIgfCBSYXRpb25hbE51bWJlcik6IFJhdGlvbmFsTnVtYmVyIHtcclxuXHRcdGlmICh0eXBlb2YgeCA9PT0gXCJudW1iZXJcIikge1xyXG5cdFx0XHRyZXR1cm4gbmV3IFJhdGlvbmFsTnVtYmVyKHRoaXMubnVtZXJhdG9yICoqIHgsIHRoaXMuZGVub21pbmF0b3IgKiogeCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAodGhpcy5kZW5vbWluYXRvciAhPT0gMSkgeyB0aHJvdyBFcnJvcihcIkV4cG9uZW50aWF0aW9uIHdpdGggcmF0aW9uYWwgcG93ZXJzIG5vdCBzdXBwb3J0ZWQuXCIpOyB9XHJcblx0XHRcdHJldHVybiBuZXcgUmF0aW9uYWxOdW1iZXIodGhpcy5udW1lcmF0b3IgKiogeC5udW1lcmF0b3IsIHRoaXMuZGVub21pbmF0b3IgKiogeC5udW1lcmF0b3IpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRwdWJsaWMgdG9OdW1iZXIoKTogbnVtYmVyIHtcclxuXHRcdHJldHVybiB0aGlzLm51bWVyYXRvciAvIHRoaXMuZGVub21pbmF0b3I7XHJcblx0fVxyXG5cdHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xyXG5cdFx0cmV0dXJuIHRoaXMubnVtZXJhdG9yLnRvU3RyaW5nKCkgKyAoMSA9PT0gdGhpcy5kZW5vbWluYXRvciA/IFwiXCIgOiBcIi9cIiArIHRoaXMuZGVub21pbmF0b3IudG9TdHJpbmcoKSk7XHJcblx0fVxyXG5cdHB1YmxpYyBkZWVwQ29weSgpOiBSYXRpb25hbE51bWJlciB7XHJcblx0XHRyZXR1cm4gbmV3IFJhdGlvbmFsTnVtYmVyKHRoaXMubnVtZXJhdG9yLCB0aGlzLmRlbm9taW5hdG9yKTtcclxuXHR9XHJcbn0iLCJleHBvcnQgY2xhc3MgU3RhY2s8VD4ge1xyXG5cdHByaXZhdGUgc3RhY2s6IFRbXTtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuc3RhY2sgPSBbXTtcclxuXHR9XHJcblx0cHVibGljIGlzRW1wdHkoKTogYm9vbGVhbiB7XHJcblx0XHRyZXR1cm4gdGhpcy5zdGFjay5sZW5ndGggPT09IDA7XHJcblx0fVxyXG5cdHB1YmxpYyBwdXNoKGVsZW1lbnQ6IFQpOiB2b2lkIHtcclxuXHRcdHRoaXMuc3RhY2sucHVzaChlbGVtZW50KTtcclxuXHR9XHJcblx0cHVibGljIHBvcCgpOiBUIHtcclxuXHRcdGlmICh0aGlzLmlzRW1wdHkoKSkgeyB0aHJvdyBuZXcgRXJyb3IoXCJTdGFjayBpcyBlbXB0eVwiKTsgfVxyXG5cdFx0cmV0dXJuIHRoaXMuc3RhY2sucG9wKCk7XHJcblx0fVxyXG5cdHB1YmxpYyBwZWVrKCk6IFQge1xyXG5cdFx0aWYgKHRoaXMuaXNFbXB0eSgpKSB7IHRocm93IG5ldyBFcnJvcihcIlN0YWNrIGlzIGVtcHR5XCIpOyB9XHJcblx0XHRyZXR1cm4gdGhpcy5zdGFja1t0aGlzLnN0YWNrLmxlbmd0aCAtIDFdO1xyXG5cdH1cclxuXHRwdWJsaWMgdG9BcnJheSgpOiBUW10ge1xyXG5cdFx0cmV0dXJuIHRoaXMuc3RhY2s7XHJcblx0fVxyXG59IiwiaW1wb3J0IHsgTWF0cml4IH0gZnJvbSBcIi4vTWF0cml4XCI7XHJcbmltcG9ydCB7IFJhdGlvbmFsTnVtYmVyIH0gZnJvbSBcIi4vUmF0aW9uYWxOdW1iZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBWZWN0b3Ige1xyXG5cdHB1YmxpYyBzdGF0aWMgYXJlTGluZWFybHlJbmRlcGVuZGVudCh2ZWN0b3JzOiBWZWN0b3JbXSk6IGJvb2xlYW4ge1xyXG5cdFx0Y29uc3QgbTogbnVtYmVyID0gdmVjdG9ycy5sZW5ndGg7XHJcblx0XHRpZiAoMCA9PT0gbSkgeyByZXR1cm4gdHJ1ZTsgfVxyXG5cdFx0Y29uc3QgbjogbnVtYmVyID0gdmVjdG9yc1swXS5tO1xyXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMTsgaSA8IHZlY3RvcnMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0aWYgKG4gIT09IHZlY3RvcnNbaV0ubSkgeyB0aHJvdyBuZXcgRXJyb3IoXCJNaXNtYXRjaGVkIGRpbWVuc2lvbnMuXCIpOyB9XHJcblx0XHR9XHJcblx0XHRpZiAobSA+IG4pIHsgcmV0dXJuIGZhbHNlOyB9XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJOb3QgaW1wbGVtZW50ZWQuXCIpO1xyXG5cdH1cclxuXHRwdWJsaWMgbTogbnVtYmVyO1xyXG5cdHB1YmxpYyBlbGVtZW50czogUmF0aW9uYWxOdW1iZXJbXTtcclxuXHRjb25zdHJ1Y3RvcihuOiBudW1iZXIgfCBudW1iZXJbXSk7XHJcblx0Y29uc3RydWN0b3IobjogYW55KSB7XHJcblx0XHRpZiAodHlwZW9mIG4gPT09IFwibnVtYmVyXCIpIHtcclxuXHRcdFx0dGhpcy5tID0gbjtcclxuXHRcdFx0dGhpcy5lbGVtZW50cyA9IFtdO1xyXG5cdFx0fSBlbHNlIGlmIChuIGluc3RhbmNlb2YgQXJyYXkpIHtcclxuXHRcdFx0dGhpcy5tID0gbi5sZW5ndGg7XHJcblx0XHRcdHRoaXMuZWxlbWVudHMgPSBbXTtcclxuXHRcdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMubTsgaSsrKSB7XHJcblx0XHRcdFx0dGhpcy5lbGVtZW50c1tpXSA9IG5ldyBSYXRpb25hbE51bWJlcihuW2ldKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRwdWJsaWMgYWRkKHg6IFZlY3Rvcik6IFZlY3RvciB7XHJcblx0XHRpZiAodGhpcy5tICE9PSB4Lm0pIHsgdGhyb3cgbmV3IEVycm9yKFwiTWlzbWF0Y2hlZCBkaW1lbnNpb25zLlwiKTsgfVxyXG5cdFx0Y29uc3QgcmVzOiBWZWN0b3IgPSBuZXcgVmVjdG9yKHRoaXMubSk7XHJcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgcmVzLm07IGkrKykge1xyXG5cdFx0XHRyZXMuZWxlbWVudHNbaV0gPSB0aGlzLmVsZW1lbnRzW2ldLmFkZCh4LmVsZW1lbnRzW2ldKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiByZXM7XHJcblx0fVxyXG5cdHB1YmxpYyBzdWIoeDogVmVjdG9yKTogVmVjdG9yIHtcclxuXHRcdGlmICh0aGlzLm0gIT09IHgubSkgeyB0aHJvdyBuZXcgRXJyb3IoXCJNaXNtYXRjaGVkIGRpbWVuc2lvbnMuXCIpOyB9XHJcblx0XHRjb25zdCByZXM6IFZlY3RvciA9IG5ldyBWZWN0b3IodGhpcy5tKTtcclxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCByZXMubTsgaSsrKSB7XHJcblx0XHRcdHJlcy5lbGVtZW50c1tpXSA9IHRoaXMuZWxlbWVudHNbaV0uc3ViKHguZWxlbWVudHNbaV0pO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlcztcclxuXHR9XHJcblx0cHVibGljIG11bHQoeDogUmF0aW9uYWxOdW1iZXIpOiBWZWN0b3Ige1xyXG5cdFx0Y29uc3QgcmVzOiBWZWN0b3IgPSBuZXcgVmVjdG9yKHRoaXMubSk7XHJcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgcmVzLm07IGkrKykge1xyXG5cdFx0XHRyZXMuZWxlbWVudHNbaV0gPSB0aGlzLmVsZW1lbnRzW2ldLm11bHQoeCk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzO1xyXG5cdH1cclxuXHQvLyBbQUxJQVNFU106IGlubmVyUHJvZHVjdCwgcHJvamVjdGlvblByb2R1Y3QsIHNjYWxhclByb2R1Y3RcclxuXHRwdWJsaWMgZG90UHJvZHVjdCh4OiBWZWN0b3IpOiBSYXRpb25hbE51bWJlciB7XHJcblx0XHRpZiAodGhpcy5tICE9PSB4Lm0pIHsgdGhyb3cgbmV3IEVycm9yKFwiTWlzbWF0Y2hlZCBkaW1lbnNpb25zLlwiKTsgfVxyXG5cdFx0bGV0IHJlczogUmF0aW9uYWxOdW1iZXIgPSBuZXcgUmF0aW9uYWxOdW1iZXIoMCk7XHJcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgeC5tOyBpKyspIHtcclxuXHRcdFx0cmVzID0gcmVzLmFkZCh0aGlzLmVsZW1lbnRzW2ldLm11bHQoeC5lbGVtZW50c1tpXSkpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlcztcclxuXHR9XHJcblx0Ly8gW0FMSUFTRVNdOiBkaXJlY3RlZEFyZWFQcm9kdWN0LCB2ZWN0b3JQcm9kdWN0XHJcblx0cHVibGljIGNyb3NzUHJvZHVjdCh4OiBWZWN0b3IpOiBWZWN0b3Ige1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiTm90IGltcGxlbWVudGVkLlwiKTtcclxuXHR9XHJcblx0Ly8gW0FMSUFTRVNdOiBtYWduaXR1ZGUsIG5vcm1cclxuXHRwdWJsaWMgbGVuZ3RoKCk6IFJhdGlvbmFsTnVtYmVyIHtcclxuXHRcdGNvbnN0IGxlbmd0aDogUmF0aW9uYWxOdW1iZXIgPSBuZXcgUmF0aW9uYWxOdW1iZXIoMCk7XHJcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5tOyBpKyspIHtcclxuXHRcdFx0bGVuZ3RoLmFkZCh0aGlzLmVsZW1lbnRzW2ldKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBsZW5ndGg7XHJcblx0fVxyXG5cdHB1YmxpYyBkZWVwQ29weSgpOiBWZWN0b3Ige1xyXG5cdFx0Y29uc3QgcmV0OiBWZWN0b3IgPSBuZXcgVmVjdG9yKHRoaXMubSk7XHJcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5tOyBpKyspIHtcclxuXHRcdFx0cmV0LmVsZW1lbnRzW2ldID0gdGhpcy5lbGVtZW50c1tpXTtcclxuXHRcdH1cclxuXHRcdHJldHVybiByZXQ7XHJcblx0fVxyXG5cdHB1YmxpYyB0b01hdHJpeCgpOiBNYXRyaXgge1xyXG5cdFx0Y29uc3QgcmV0OiBNYXRyaXggPSBuZXcgTWF0cml4KHRoaXMubSwgMSk7XHJcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5tOyBpKyspIHtcclxuXHRcdFx0cmV0LmVsZW1lbnRzW2ldWzBdID0gdGhpcy5lbGVtZW50c1tpXTtcclxuXHRcdH1cclxuXHRcdHJldHVybiByZXQ7XHJcblx0fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBDb2x1bW5WZWN0b3IgZXh0ZW5kcyBWZWN0b3Ige1xyXG59XHJcbmV4cG9ydCBjbGFzcyBSb3dWZWN0b3IgZXh0ZW5kcyBWZWN0b3Ige1xyXG5cdHB1YmxpYyBtYXRyaXhQcm9kdWN0KG06IE1hdHJpeCk6IFJvd1ZlY3RvciB7XHJcblx0XHRpZiAodGhpcy5tICE9PSBtLm4pIHsgdGhyb3cgbmV3IEVycm9yKFwiTWlzbWF0Y2hlZCBkaW1lbnNpb25zLlwiKTsgfVxyXG5cdFx0Y29uc3QgcmVzOiBSb3dWZWN0b3IgPSBuZXcgUm93VmVjdG9yKHRoaXMubSk7XHJcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5tOyBpKyspIHtcclxuXHRcdFx0bGV0IHN1bTogUmF0aW9uYWxOdW1iZXIgPSBuZXcgUmF0aW9uYWxOdW1iZXIoMCk7XHJcblx0XHRcdGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCBtLm47IGorKykge1xyXG5cdFx0XHRcdHN1bSA9IHN1bS5hZGQobS5lbGVtZW50c1tpXVtqXS5tdWx0KHRoaXMuZWxlbWVudHNbaV0pKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXMuZWxlbWVudHNbaV0gPSBzdW07XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzO1xyXG5cdH1cclxufSIsImltcG9ydCB7IE1hdHJpeCB9IGZyb20gXCIuL01hdHJpeFwiO1xyXG5pbXBvcnQgeyBWZWN0b3IgfSBmcm9tIFwiLi9WZWN0b3JcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBWZWN0b3JTcGFjZSB7XHJcblx0cHVibGljIG06IG51bWJlcjtcclxuXHRwdWJsaWMgZWxlbWVudHM6IFZlY3RvcltdO1xyXG5cdGNvbnN0cnVjdG9yKG46IG51bWJlciB8IFZlY3RvcltdKTtcclxuXHRjb25zdHJ1Y3RvcihuOiBhbnkpIHtcclxuXHRcdGlmICh0eXBlb2YgbiA9PT0gXCJudW1iZXJcIikge1xyXG5cdFx0XHR0aGlzLm0gPSBuO1xyXG5cdFx0XHR0aGlzLmVsZW1lbnRzID0gW107XHJcblx0XHR9IGVsc2UgaWYgKG4gaW5zdGFuY2VvZiBBcnJheSkge1xyXG5cdFx0XHRpZiAoIW4gfHwgMCA+PSBuLmxlbmd0aCkgeyB0aHJvdyBuZXcgRXJyb3IoXCJBdCBsZWFzdCBvbmUgdmVjdG9yIGlzIG5lZWRlZCB0byBjb25zdHJ1Y3QgYSB2ZWN0b3Igc3BhY2UuXCIpOyB9XHJcblx0XHRcdGNvbnN0IHg6IG51bWJlciA9IG5bMF0ubTtcclxuXHRcdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMTsgaSA8IG4ubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRpZiAoeCAhPT0gbltpXS5tKSB7IHRocm93IG5ldyBFcnJvcihcIkFsbCB2ZWN0b3JzIG11c3QgaGF2ZSB0aGUgc2FtZSBsZW5ndGguXCIpOyB9XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5tID0gbi5sZW5ndGg7XHJcblx0XHRcdHRoaXMuZWxlbWVudHMgPSBuO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRwdWJsaWMgZmluZEJhc2lzKCk6IFZlY3RvclNwYWNlIHtcclxuXHRcdGxldCBkaW06IG51bWJlciA9IDA7XHJcblx0XHRjb25zdCBNOiBNYXRyaXggPSB0aGlzLnRvQ29sdW1uc01hdHJpeCgpLnRvUmVkdWNlZFJvd0VjaGVsb25Gb3JtKCk7XHJcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgTS5tICYmIGkgPCBNLm47IGkrKykge1xyXG5cdFx0XHRpZiAoTS5lbGVtZW50c1tpXVtpXS5lcXVhbHMoMSkpIHtcclxuXHRcdFx0XHRkaW0rKztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0Y29uc3QgcmVzOiBWZWN0b3JTcGFjZSA9IG5ldyBWZWN0b3JTcGFjZShkaW0pO1xyXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IGRpbTsgaSsrKSB7XHJcblx0XHRcdHJlcy5lbGVtZW50c1tpXSA9IHRoaXMuZWxlbWVudHNbaV0uZGVlcENvcHkoKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiByZXM7XHJcblx0fVxyXG5cdHB1YmxpYyB0b0NvbHVtbnNNYXRyaXgoKTogTWF0cml4IHtcclxuXHRcdGNvbnN0IHJlczogTWF0cml4ID0gbmV3IE1hdHJpeCh0aGlzLmVsZW1lbnRzWzBdLm0sIHRoaXMubSk7XHJcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgcmVzLm47IGkrKykge1xyXG5cdFx0XHRmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgcmVzLm07IGorKykge1xyXG5cdFx0XHRcdHJlcy5lbGVtZW50c1tqXVtpXSA9IHRoaXMuZWxlbWVudHNbaV0uZWxlbWVudHNbal07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXM7XHJcblx0fVxyXG5cdHB1YmxpYyB0b1Jvd3NNYXRyaXgoKTogTWF0cml4IHtcclxuXHRcdGNvbnN0IHJlczogTWF0cml4ID0gbmV3IE1hdHJpeCh0aGlzLm0sIHRoaXMuZWxlbWVudHNbMF0ubSk7XHJcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgcmVzLm07IGkrKykge1xyXG5cdFx0XHRmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgcmVzLm47IGorKykge1xyXG5cdFx0XHRcdHJlcy5lbGVtZW50c1tpXVtqXSA9IHRoaXMuZWxlbWVudHNbaV0uZWxlbWVudHNbal07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXM7XHJcblx0fVxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRpZiAoIShtb2R1bGVJZCBpbiBfX3dlYnBhY2tfbW9kdWxlc19fKSkge1xuXHRcdGRlbGV0ZSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIG1vZHVsZUlkICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IFZlY3RvclNwYWNlR2VuZXJhdG9yIH0gZnJvbSBcIi4uL2dlbmVyYXRvcnMvVmVjdG9yU3BhY2VHZW5lcmF0b3JcIjtcclxuaW1wb3J0IHsgVmVjdG9yU3BhY2VQcmVzZW50ZXIgfSBmcm9tIFwiLi4vcHJlc2VudGVycy9WZWN0b3JTcGFjZVByZXNlbnRlclwiO1xyXG5pbXBvcnQgeyBWZWN0b3JTcGFjZSB9IGZyb20gXCIuLi9zdHJ1Y3R1cmVzL1ZlY3RvclNwYWNlXCI7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcblx0Y29uc3QgZ2VuZXJhdG9yOiBWZWN0b3JTcGFjZUdlbmVyYXRvciA9IG5ldyBWZWN0b3JTcGFjZUdlbmVyYXRvcigpO1xyXG5cdGNvbnN0IHZlY3RvclNwYWNlOiBWZWN0b3JTcGFjZSA9IGdlbmVyYXRvci5yYW5kb20oKTtcclxuXHRWZWN0b3JTcGFjZVByZXNlbnRlci5wcmludFZlY3RvclNwYWNlKHZlY3RvclNwYWNlLCA8SFRNTERpdkVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpKTtcclxufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9