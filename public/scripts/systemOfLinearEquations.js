/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/generators/SystemOfLinearEquationsGenerator.ts"
/*!************************************************************!*\
  !*** ./src/generators/SystemOfLinearEquationsGenerator.ts ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SystemOfLinearEquationsGenerator: () => (/* binding */ SystemOfLinearEquationsGenerator)
/* harmony export */ });
/* harmony import */ var _structures_Matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../structures/Matrix */ "./src/structures/Matrix.ts");
/* harmony import */ var _structures_RationalNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../structures/RationalNumber */ "./src/structures/RationalNumber.ts");
/* harmony import */ var _structures_SystemOfLinearEquations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../structures/SystemOfLinearEquations */ "./src/structures/SystemOfLinearEquations.ts");



class SystemOfLinearEquationsGenerator {
    probabilityToBeConsistent = 0.8; // 80% for the system to have solutions
    probabilityToBeIndependent = 0.8; // 80% for all equation in the system to be linear independent
    probabilityToHaveUniqueSolution = 0.8; // if the system has solution, 80% for the system to have a uniques solution
    hasSolution = Math.random() <= this.probabilityToBeConsistent;
    hasUniqueSolution = this.hasSolution ? Math.random() <= this.probabilityToHaveUniqueSolution : false;
    numberOfVariablesMin = 3;
    numberOfVariablesMax = 7;
    numberOfVariables = Math.floor(Math.random() *
        (this.numberOfVariablesMax - this.numberOfVariablesMin) + this.numberOfVariablesMin);
    numberOfFreeVariablesMaxPercent = 0.4; // maximum 40% of total number of variables
    numberOfFreeVariables = this.hasUniqueSolution ? 0 :
        this.numberOfVariables - Math.floor(Math.random() * this.numberOfVariables * this.numberOfFreeVariablesMaxPercent + 1);
    // between 1 and max percent of free variables out of total number of variables
    numberOfLeadingVariables = this.numberOfVariables - this.numberOfFreeVariables;
    hasDependentEquations = Math.random() >= this.probabilityToBeIndependent;
    numberOfDependentEquationsMax = 0.4; // maximum 40% of total number of equations are not independent
    numberOfIndependentEquations = this.numberOfLeadingVariables;
    numberOfDependentEquations = this.hasDependentEquations ?
        Math.floor(Math.random() * this.numberOfIndependentEquations * this.numberOfDependentEquationsMax + 1) : 0;
    numberOfEquations = this.numberOfIndependentEquations + this.numberOfDependentEquations;
    valueOfVariablesMin = -10;
    valueOfVariablesMax = 10;
    random() {
        const augmentedMatrix = this.generateIndependentSystem();
        this.makeSystemDependent(augmentedMatrix); // based on the numberOfIndependentEquations and numberOfEquations
        this.makeSystemInconsistent(augmentedMatrix); // based on the hasSolution
        const ret = new _structures_SystemOfLinearEquations__WEBPACK_IMPORTED_MODULE_2__.SystemOfLinearEquations(augmentedMatrix.m, augmentedMatrix.n - 1);
        for (let i = 0; i < ret.noEquations; i++) {
            for (let j = 0; j < ret.noVariables; j++) {
                ret.A.elements[i][j] = augmentedMatrix.elements[i][j];
            }
        }
        for (let j = 0; j < ret.noEquations; j++) {
            ret.b.elements[j] = augmentedMatrix.elements[j][ret.noVariables];
        }
        return ret;
    }
    randomVariableValue() {
        return Math.floor(Math.random() * (this.valueOfVariablesMax - this.valueOfVariablesMin) + this.valueOfVariablesMin);
    }
    // equation systems: independent, dependendt or inconsistent
    generateIndependentSystem() {
        const variables = [];
        for (let i = 0; i < this.numberOfVariables; i++) {
            variables[i] = this.randomVariableValue();
        }
        const augmentedMatrix = new _structures_Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(this.numberOfIndependentEquations + this.numberOfDependentEquations, this.numberOfVariables + 1);
        // +1 becasue it represents the augmented matrix
        for (let i = 0; i < this.numberOfIndependentEquations; i++) {
            let freeTerm = new _structures_RationalNumber__WEBPACK_IMPORTED_MODULE_1__.RationalNumber(0);
            for (let j = 0; j < this.numberOfVariables; j++) {
                augmentedMatrix.elements[i][j] = new _structures_RationalNumber__WEBPACK_IMPORTED_MODULE_1__.RationalNumber(Math.floor(Math.random() * 10 - 5)); // coeficients' range
                freeTerm = freeTerm.add(augmentedMatrix.elements[i][j].mult(variables[j]));
            }
            augmentedMatrix.elements[i][this.numberOfVariables] = freeTerm;
        }
        return augmentedMatrix;
    }
    makeSystemDependent(augmentedMatrix) {
        for (let i = this.numberOfIndependentEquations; i < this.numberOfEquations; i++) {
            const row1 = Math.floor(Math.random() * this.numberOfIndependentEquations);
            let row2 = Math.floor(Math.random() * this.numberOfIndependentEquations);
            while (row1 === row2) {
                row2 = Math.floor(Math.random() * this.numberOfIndependentEquations);
            }
            const coeficient1 = new _structures_RationalNumber__WEBPACK_IMPORTED_MODULE_1__.RationalNumber(Math.floor(Math.random() * 10 - 5));
            const coeficient2 = new _structures_RationalNumber__WEBPACK_IMPORTED_MODULE_1__.RationalNumber(Math.floor(Math.random() * 10 - 5));
            for (let j = 0; j < (this.numberOfVariables + 1); j++) {
                augmentedMatrix.elements[i][j] = coeficient1.mult(augmentedMatrix.elements[row1][j])
                    .add(coeficient2.mult(augmentedMatrix.elements[row2][j]));
            }
        }
    }
    makeSystemInconsistent(augmentedMatrix) {
        if (!this.hasSolution) {
            for (let i = 0; i < this.numberOfEquations; i++) {
                augmentedMatrix.elements[i][this.numberOfVariables + 1] = new _structures_RationalNumber__WEBPACK_IMPORTED_MODULE_1__.RationalNumber(Math.floor(Math.random() * 100 - 50));
                // just change the free variables random
            }
        }
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

/***/ "./src/presenters/SystemOfLinearEquationsPresenter.ts"
/*!************************************************************!*\
  !*** ./src/presenters/SystemOfLinearEquationsPresenter.ts ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SystemOfLinearEquationsPresenter: () => (/* binding */ SystemOfLinearEquationsPresenter)
/* harmony export */ });
class SystemOfLinearEquationsPresenter {
    static printTableSystem(systemOfEquations, container) {
        const table0 = document.createElement("table");
        table0.createTHead();
        const tr0 = table0.tHead.insertRow(-1);
        table0.appendChild(tr0);
        const td01 = tr0.insertCell(-1);
        tr0.appendChild(td01);
        const td02 = tr0.insertCell(-1);
        td02.innerText = "*";
        td02.style.verticalAlign = "middle";
        td02.style.paddingLeft = "5px";
        td02.style.paddingRight = "5px";
        tr0.appendChild(td02);
        const td03 = tr0.insertCell(-1);
        tr0.appendChild(td03);
        const td04 = tr0.insertCell(-1);
        td04.innerText = "=";
        td04.style.verticalAlign = "middle";
        td04.style.paddingLeft = "5px";
        td04.style.paddingRight = "5px";
        tr0.appendChild(td04);
        const td05 = tr0.insertCell(-1);
        tr0.appendChild(td05);
        let table = document.createElement("table");
        table.className = "matrix";
        table.createTHead();
        for (let i = 0; i < systemOfEquations.A.m; i++) {
            const tr = table.tHead.insertRow(-1);
            for (let j = 0; j < systemOfEquations.A.n; j++) {
                const td = tr.insertCell(-1);
                td.innerText = systemOfEquations.A.elements[i][j].toString();
                td.style.paddingLeft = "5px";
                td.style.paddingRight = "5px";
                tr.append(td);
            }
            table.append(tr);
        }
        td01.append(table);
        table = document.createElement("table");
        table.className = "matrix";
        for (let j = 0; j < systemOfEquations.noVariables; j++) {
            const tr = table.tHead.insertRow(-1);
            const td = tr.insertCell(-1);
            td.innerText = "x";
            td.style.paddingLeft = "5px";
            td.style.paddingRight = "5px";
            const sub = document.createElement("sub");
            sub.innerText = j.toString();
            td.appendChild(sub);
            tr.append(td);
            table.append(tr);
        }
        td03.append(table);
        table = document.createElement("table");
        table.className = "matrix";
        for (let j = 0; j < systemOfEquations.b.m; j++) {
            const tr = table.tHead.insertRow(-1);
            const td = tr.insertCell(-1);
            td.innerText = systemOfEquations.b.elements[j].toString();
            td.style.paddingLeft = "5px";
            td.style.paddingRight = "5px";
            tr.append(td);
            table.append(tr);
        }
        td05.append(table);
        container.append(table0);
        container.append("<br />");
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

/***/ "./src/structures/SystemOfLinearEquations.ts"
/*!***************************************************!*\
  !*** ./src/structures/SystemOfLinearEquations.ts ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SystemOfLinearEquations: () => (/* binding */ SystemOfLinearEquations)
/* harmony export */ });
/* harmony import */ var _Matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Matrix */ "./src/structures/Matrix.ts");
/* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Vector */ "./src/structures/Vector.ts");


class SystemOfLinearEquations {
    noEquations;
    noVariables;
    A;
    b;
    constructor(noEquations, noVariables) {
        this.noEquations = noEquations;
        this.noVariables = noVariables;
        this.A = new _Matrix__WEBPACK_IMPORTED_MODULE_0__.Matrix(noEquations, noVariables);
        this.b = new _Vector__WEBPACK_IMPORTED_MODULE_1__.Vector(noEquations);
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
/*!**************************************************!*\
  !*** ./src/exercises/systemOfLinearEquations.ts ***!
  \**************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _generators_SystemOfLinearEquationsGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../generators/SystemOfLinearEquationsGenerator */ "./src/generators/SystemOfLinearEquationsGenerator.ts");
/* harmony import */ var _presenters_MatrixPresenter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../presenters/MatrixPresenter */ "./src/presenters/MatrixPresenter.ts");
/* harmony import */ var _presenters_SystemOfLinearEquationsPresenter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../presenters/SystemOfLinearEquationsPresenter */ "./src/presenters/SystemOfLinearEquationsPresenter.ts");
/* harmony import */ var _structures_Matrix__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../structures/Matrix */ "./src/structures/Matrix.ts");
/* harmony import */ var _structures_RationalNumber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../structures/RationalNumber */ "./src/structures/RationalNumber.ts");
/* harmony import */ var _structures_Stack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../structures/Stack */ "./src/structures/Stack.ts");






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
    const generator = new _generators_SystemOfLinearEquationsGenerator__WEBPACK_IMPORTED_MODULE_0__.SystemOfLinearEquationsGenerator();
    const systemOfEquations = generator.random();
    let undoStack;
    let redoStack;
    let workingMatrix = null;
    let operationDivIdx = 0;
    init();
    document.getElementById("details").append("<div>System has solution: " + generator.hasSolution + "</div>");
    document.getElementById("details").append("<div>System has unique solution: " + generator.hasUniqueSolution + "</div>");
    document.getElementById("details").append("<div>System has dependent equations: " + generator.hasDependentEquations + "</div>");
    document.getElementById("details").append("<div>Number of variables: " + generator.numberOfVariables + "</div>");
    document.getElementById("details").append("<div>Number of leading variables: " + generator.numberOfLeadingVariables + "</div>");
    document.getElementById("details").append("<div>Number of free variables: " + generator.numberOfFreeVariables + "</div>");
    document.getElementById("details").append("<div>Number of equations: " + generator.numberOfEquations + "</div>");
    document.getElementById("details").append("<div>Number of independent equations: " + generator.numberOfIndependentEquations + "</div>");
    document.getElementById("details").append("<div>Number of dependent equations: " + generator.numberOfDependentEquations + "</div>");
    _presenters_SystemOfLinearEquationsPresenter__WEBPACK_IMPORTED_MODULE_2__.SystemOfLinearEquationsPresenter.printTableSystem(systemOfEquations, document.getElementById("content"));
    document.getElementById("toggleDetails").addEventListener("click", () => {
        toggle("details");
    });
    document.getElementById("btnAugmentMatrix").addEventListener("click", () => {
        document.getElementById("error").innerText = "";
        preProcessOperation();
        if ("A" === document.getElementById("selAugmentOptions1").value) {
            workingMatrix = systemOfEquations.A.deepCopy();
        }
        if ("I" === document.getElementById("selAugmentOptions1").value) {
            workingMatrix = new _structures_Matrix__WEBPACK_IMPORTED_MODULE_3__.MatrixIdentity(systemOfEquations.noEquations);
        }
        else if ("b" === document.getElementById("selAugmentOptions1").value) {
            workingMatrix = systemOfEquations.b.toMatrix();
        }
        if ("A" === document.getElementById("selAugmentOptions2").value) {
            workingMatrix = _structures_Matrix__WEBPACK_IMPORTED_MODULE_3__.Matrix.augment(workingMatrix, systemOfEquations.A);
        }
        if ("I" === document.getElementById("selAugmentOptions2").value) {
            workingMatrix = _structures_Matrix__WEBPACK_IMPORTED_MODULE_3__.Matrix.augment(workingMatrix, new _structures_Matrix__WEBPACK_IMPORTED_MODULE_3__.MatrixIdentity(systemOfEquations.noEquations));
        }
        else if ("b" === document.getElementById("selAugmentOptions2").value) {
            workingMatrix = _structures_Matrix__WEBPACK_IMPORTED_MODULE_3__.Matrix.augment(workingMatrix, systemOfEquations.b);
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
        const scalar = _structures_RationalNumber__WEBPACK_IMPORTED_MODULE_4__.RationalNumber.fromString(document.getElementById("scalar").value.toString());
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
        const scalar1 = _structures_RationalNumber__WEBPACK_IMPORTED_MODULE_4__.RationalNumber.fromString(document.getElementById("addRow1Mult").value.toString());
        const scalar2 = _structures_RationalNumber__WEBPACK_IMPORTED_MODULE_4__.RationalNumber.fromString(document.getElementById("addRow2Mult").value.toString());
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
        undoStack = new _structures_Stack__WEBPACK_IMPORTED_MODULE_5__.Stack();
        redoStack = new _structures_Stack__WEBPACK_IMPORTED_MODULE_5__.Stack();
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
            toggle("" + "operationDiv" + operationDivIdx);
        }
        ++operationDivIdx;
        const divId = "operationDiv" + operationDivIdx;
        const div = document.createElement("div");
        div.id = divId;
        const buttonId = "toggleButton" + operationDivIdx;
        const toggleButton = document.createElement("button");
        toggleButton.id = buttonId;
        toggleButton.className = "operationButton";
        toggleButton.innerText = title;
        toggleButton.addEventListener("click", () => {
            toggle(divId);
        });
        document.getElementById("content").append(toggleButton);
        document.getElementById("content").append(div);
        _presenters_MatrixPresenter__WEBPACK_IMPORTED_MODULE_1__.MatrixPresenter.printTableMatrix(workingMatrix, div);
        if (workingMatrix.isReducedRowEchelonForm()) {
            toggleButton.append(" Matrix is in reduced row eschelon form.");
        }
        else if (workingMatrix.isRowEchelonForm()) {
            toggleButton.append(" Matrix is in row eschelon form.");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zeXN0ZW1PZkxpbmVhckVxdWF0aW9ucy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUE4QztBQUNnQjtBQUNrQjtBQUV6RSxNQUFNLGdDQUFnQztJQUNyQyx5QkFBeUIsR0FBVyxHQUFHLENBQUMsQ0FBQyx1Q0FBdUM7SUFDaEYsMEJBQTBCLEdBQVcsR0FBRyxDQUFDLENBQUMsOERBQThEO0lBQ3hHLCtCQUErQixHQUFXLEdBQUcsQ0FBQyxDQUFDLDRFQUE0RTtJQUMzSCxXQUFXLEdBQVksSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLElBQUksQ0FBQyx5QkFBeUIsQ0FBQztJQUN2RSxpQkFBaUIsR0FBWSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksSUFBSSxDQUFDLCtCQUErQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDOUcsb0JBQW9CLEdBQVcsQ0FBQyxDQUFDO0lBQ2pDLG9CQUFvQixHQUFXLENBQUMsQ0FBQztJQUNqQyxpQkFBaUIsR0FBVyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7UUFDMUQsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDL0UsK0JBQStCLEdBQVcsR0FBRyxDQUFDLENBQUMsMkNBQTJDO0lBQzFGLHFCQUFxQixHQUFXLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsK0JBQStCLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdkgsK0VBQStFO0lBQ3pFLHdCQUF3QixHQUFXLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUM7SUFDdkYscUJBQXFCLEdBQVksSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLElBQUksQ0FBQywwQkFBMEIsQ0FBQztJQUNsRiw2QkFBNkIsR0FBVyxHQUFHLENBQUMsQ0FBQywrREFBK0Q7SUFDNUcsNEJBQTRCLEdBQVcsSUFBSSxDQUFDLHdCQUF3QixDQUFDO0lBQ3JFLDBCQUEwQixHQUFXLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyw0QkFBNEIsR0FBRyxJQUFJLENBQUMsNkJBQTZCLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyRyxpQkFBaUIsR0FBVyxJQUFJLENBQUMsNEJBQTRCLEdBQUcsSUFBSSxDQUFDLDBCQUEwQixDQUFDO0lBQ2hHLG1CQUFtQixHQUFXLENBQUMsRUFBRSxDQUFDO0lBQ2xDLG1CQUFtQixHQUFXLEVBQUUsQ0FBQztJQUNqQyxNQUFNO1FBQ1osTUFBTSxlQUFlLEdBQVcsSUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQUM7UUFDakUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsa0VBQWtFO1FBQzdHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLDJCQUEyQjtRQUN6RSxNQUFNLEdBQUcsR0FBNEIsSUFBSSx3RkFBdUIsQ0FBQyxlQUFlLENBQUMsQ0FBQyxFQUFFLGVBQWUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDM0csS0FBSyxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNsRCxLQUFLLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUNsRCxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZELENBQUM7UUFDRixDQUFDO1FBQ0QsS0FBSyxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNsRCxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNsRSxDQUFDO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDWixDQUFDO0lBQ08sbUJBQW1CO1FBQzFCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDckgsQ0FBQztJQUNELDREQUE0RDtJQUNwRCx5QkFBeUI7UUFDaEMsTUFBTSxTQUFTLEdBQWEsRUFBRSxDQUFDO1FBQy9CLEtBQUssSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUN6RCxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDM0MsQ0FBQztRQUNELE1BQU0sZUFBZSxHQUFXLElBQUksc0RBQU0sQ0FBQyxJQUFJLENBQUMsNEJBQTRCLEdBQUcsSUFBSSxDQUFDLDBCQUEwQixFQUFFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM1SSxnREFBZ0Q7UUFDaEQsS0FBSyxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyw0QkFBNEIsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ3BFLElBQUksUUFBUSxHQUFtQixJQUFJLHNFQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckQsS0FBSyxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUN6RCxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksc0VBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLHFCQUFxQjtnQkFDOUcsUUFBUSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1RSxDQUFDO1lBQ0QsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxRQUFRLENBQUM7UUFDaEUsQ0FBQztRQUNELE9BQU8sZUFBZSxDQUFDO0lBQ3hCLENBQUM7SUFDTyxtQkFBbUIsQ0FBQyxlQUF1QjtRQUNsRCxLQUFLLElBQUksQ0FBQyxHQUFXLElBQUksQ0FBQyw0QkFBNEIsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDekYsTUFBTSxJQUFJLEdBQVcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLDRCQUE0QixDQUFDLENBQUM7WUFDbkYsSUFBSSxJQUFJLEdBQVcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLDRCQUE0QixDQUFDLENBQUM7WUFDakYsT0FBTyxJQUFJLEtBQUssSUFBSSxFQUFFLENBQUM7Z0JBQ3RCLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsNEJBQTRCLENBQUMsQ0FBQztZQUN0RSxDQUFDO1lBQ0QsTUFBTSxXQUFXLEdBQW1CLElBQUksc0VBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzRixNQUFNLFdBQVcsR0FBbUIsSUFBSSxzRUFBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNGLEtBQUssSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUMvRCxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFDbkYsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0QsQ0FBQztRQUNGLENBQUM7SUFDRixDQUFDO0lBQ08sc0JBQXNCLENBQUMsZUFBdUI7UUFDckQsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUN2QixLQUFLLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ3pELGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksc0VBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDbkgsd0NBQXdDO1lBQ3pDLENBQUM7UUFDRixDQUFDO0lBQ0YsQ0FBQztDQWVEOzs7Ozs7Ozs7Ozs7Ozs7QUNsR00sTUFBTSxlQUFlO0lBQ3BCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFjLEVBQUUsU0FBeUI7UUFDdkUsSUFBSSxjQUFjLEdBQVksTUFBTSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDeEQsSUFBSSxxQkFBcUIsR0FBWSxjQUFjLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDL0YsSUFBSSxLQUFLLEdBQXFCLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDOUQsS0FBSyxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7UUFDM0IsSUFBSSxxQkFBcUIsRUFBRSxDQUFDO1lBQzNCLEtBQUssQ0FBQyxTQUFTLEdBQUcseUJBQXlCLENBQUM7UUFDN0MsQ0FBQzthQUFNLElBQUksY0FBYyxFQUFFLENBQUM7WUFDM0IsS0FBSyxDQUFDLFNBQVMsR0FBRyxrQkFBa0IsQ0FBQztRQUN0QyxDQUFDO1FBQ0QsS0FBSyxJQUFJLENBQUMsR0FBVSxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUMxQyxJQUFJLEVBQUUsR0FBd0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMzRCxLQUFLLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUMzQyxJQUFJLEVBQUUsR0FBeUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDNUQsRUFBRSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNoRCxFQUFFLENBQUMsU0FBUyxHQUFHLGVBQWUsQ0FBQztnQkFDL0IsSUFBSSxxQkFBcUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7b0JBQUMsRUFBRSxDQUFDLFNBQVMsR0FBRyxjQUFjLENBQUM7Z0JBQUMsQ0FBQztnQkFDeEUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNmLENBQUM7WUFDRCxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2xCLENBQUM7UUFDRCxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hCLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFDTSxNQUFNLENBQUMsbUJBQW1CLENBQUMsT0FBZSxFQUFFLFFBQWdCLEVBQUUsT0FBZSxFQUFFLE1BQWMsRUFBRSxTQUF5QjtRQUM5SCxJQUFJLEtBQUssR0FBcUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5RCxJQUFJLEdBQUcsR0FBd0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1RCxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLElBQUksSUFBSSxHQUF5QixRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlELEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakIsSUFBSSxJQUFJLEdBQXlCLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7UUFDMUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEdBQUcsUUFBUSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUMvQixJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDaEMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQixJQUFJLElBQUksR0FBeUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5RCxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pCLElBQUksSUFBSSxHQUF5QixRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQztRQUNwQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDL0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakIsSUFBSSxJQUFJLEdBQXlCLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQixJQUFJLE1BQU0sR0FBcUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMvRCxNQUFNLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUM1QixLQUFLLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQzVDLElBQUksRUFBRSxHQUF3QixRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzNELEtBQUssSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQzVDLElBQUksRUFBRSxHQUF5QixRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM1RCxFQUFFLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ2pELEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztnQkFDN0IsRUFBRSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO2dCQUM5QixFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2YsQ0FBQztZQUNELE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbkIsQ0FBQztRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEIsTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDekMsTUFBTSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7UUFDNUIsS0FBSyxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUM1QyxJQUFJLEVBQUUsR0FBd0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMzRCxLQUFLLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUM1QyxJQUFJLEVBQUUsR0FBeUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDNUQsRUFBRSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNqRCxFQUFFLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7Z0JBQzdCLEVBQUUsQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztnQkFDOUIsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNmLENBQUM7WUFDRCxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ25CLENBQUM7UUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BCLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3pDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQzVCLEtBQUssSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDM0MsSUFBSSxFQUFFLEdBQXdCLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDM0QsS0FBSyxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDM0MsSUFBSSxFQUFFLEdBQXlCLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzVELEVBQUUsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDaEQsRUFBRSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO2dCQUM3QixFQUFFLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7Z0JBQzlCLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDZixDQUFDO1lBQ0QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNuQixDQUFDO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQixTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hCLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFDTSxNQUFNLENBQUMsb0JBQW9CLENBQUMsT0FBZSxFQUFFLFNBQWlCLEVBQUUsT0FBZSxFQUFFLE9BQWUsRUFBRSxTQUFpQixFQUFFLE9BQWUsRUFBRSxTQUF5QjtRQUNySyxJQUFJLEtBQUssR0FBcUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5RCxJQUFJLEdBQUcsR0FBd0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1RCxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLElBQUksSUFBSSxHQUF5QixRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlELEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakIsSUFBSSxJQUFJLEdBQXlCLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEdBQUcsUUFBUSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUMvQixJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDaEMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQixJQUFJLElBQUksR0FBeUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5RCxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pCLElBQUksSUFBSSxHQUF5QixRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQztRQUNwQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDL0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakIsSUFBSSxJQUFJLEdBQXlCLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQixJQUFJLElBQUksR0FBeUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUM7UUFDcEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQy9CLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUNoQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pCLElBQUksSUFBSSxHQUF5QixRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlELEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakIsSUFBSSxNQUFNLEdBQXFCLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDL0QsTUFBTSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7UUFDNUIsS0FBSyxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUM1QyxJQUFJLEVBQUUsR0FBd0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMzRCxLQUFLLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUM1QyxJQUFJLEVBQUUsR0FBeUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDNUQsRUFBRSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNqRCxFQUFFLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7Z0JBQzdCLEVBQUUsQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztnQkFDOUIsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNmLENBQUM7WUFDRCxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ25CLENBQUM7UUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BCLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3pDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQzVCLEtBQUssSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDNUMsSUFBSSxFQUFFLEdBQXdCLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDM0QsS0FBSyxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDNUMsSUFBSSxFQUFFLEdBQXlCLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzVELEVBQUUsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDakQsRUFBRSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO2dCQUM3QixFQUFFLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7Z0JBQzlCLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDZixDQUFDO1lBQ0QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNuQixDQUFDO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQixNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN6QyxNQUFNLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUM1QixLQUFLLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQzVDLElBQUksRUFBRSxHQUF3QixRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzNELEtBQUssSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQzVDLElBQUksRUFBRSxHQUF5QixRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM1RCxFQUFFLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ2pELEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztnQkFDN0IsRUFBRSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO2dCQUM5QixFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2YsQ0FBQztZQUNELE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbkIsQ0FBQztRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEIsTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDekMsTUFBTSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7UUFDNUIsS0FBSyxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUM1QyxJQUFJLEVBQUUsR0FBd0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMzRCxLQUFLLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUM1QyxJQUFJLEVBQUUsR0FBeUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDNUQsRUFBRSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNqRCxFQUFFLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7Z0JBQzdCLEVBQUUsQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztnQkFDOUIsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNmLENBQUM7WUFDRCxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ25CLENBQUM7UUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BCLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEIsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDaEQsQ0FBQztDQUNEOzs7Ozs7Ozs7Ozs7Ozs7QUNyTE0sTUFBTSxnQ0FBZ0M7SUFDckMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLGlCQUEwQyxFQUFFLFNBQXlCO1FBQ25HLE1BQU0sTUFBTSxHQUFxQixRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNELE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMzQixNQUFNLEdBQUcsR0FBd0IsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1RCxNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLE1BQU0sSUFBSSxHQUF5QixHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEQsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QixNQUFNLElBQUksR0FBeUIsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQztRQUNwQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDL0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEIsTUFBTSxJQUFJLEdBQXlCLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0RCxHQUFHLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RCLE1BQU0sSUFBSSxHQUF5QixHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7UUFDckIsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEdBQUcsUUFBUSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUMvQixJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDaEMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QixNQUFNLElBQUksR0FBeUIsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RELEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEIsSUFBSSxLQUFLLEdBQXFCLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDOUQsS0FBSyxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7UUFDckIsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzFCLEtBQUssSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDeEQsTUFBTSxFQUFFLEdBQXdCLEtBQUssQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUQsS0FBSyxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDeEQsTUFBTSxFQUFFLEdBQXlCLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbkQsRUFBRSxDQUFDLFNBQVMsR0FBRyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUM3RCxFQUFFLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7Z0JBQzdCLEVBQUUsQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztnQkFDOUIsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNmLENBQUM7WUFDRCxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2xCLENBQUM7UUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25CLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3hDLEtBQUssQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBQzNCLEtBQUssSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNoRSxNQUFNLEVBQUUsR0FBd0IsS0FBSyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxRCxNQUFNLEVBQUUsR0FBeUIsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25ELEVBQUUsQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO1lBQ25CLEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztZQUM3QixFQUFFLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7WUFDOUIsTUFBTSxHQUFHLEdBQWdCLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdkQsR0FBRyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDN0IsRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNwQixFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2QsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNsQixDQUFDO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN4QyxLQUFLLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUMzQixLQUFLLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ3hELE1BQU0sRUFBRSxHQUF3QixLQUFLLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFELE1BQU0sRUFBRSxHQUF5QixFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkQsRUFBRSxDQUFDLFNBQVMsR0FBRyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQzFELEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztZQUM3QixFQUFFLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7WUFDOUIsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNkLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbEIsQ0FBQztRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkIsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6QixTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzVCLENBQUM7Q0FDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZFK0I7QUFDa0I7QUFDbEI7QUFFekIsTUFBTSxtQkFBbUI7SUFDeEIsTUFBTSxDQUFDLHVCQUF1QixDQUFDLElBQVk7UUFDakQsTUFBTSxNQUFNLEdBQWEsSUFBSSxDQUFDLEtBQUssQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxHQUFXLENBQUMsQ0FBQztRQUNsQixNQUFNLFdBQVcsR0FBa0IsSUFBSSx5Q0FBSyxFQUFVLENBQUM7UUFDdkQsTUFBTSxhQUFhLEdBQWtCLElBQUkseUNBQUssRUFBVSxDQUFDO1FBQ3pELE9BQU8sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUMxQixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztnQkFDOUIsV0FBVyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoQyxDQUFDO2lCQUFNLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO2dCQUN2QyxJQUFJLEdBQUcsR0FBVyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLE9BQU8sQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDO29CQUMxRSxJQUFJLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQzNHLENBQUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO3dCQUMzRyxXQUFXLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO29CQUMxQyxDQUFDO3lCQUFNLENBQUM7d0JBQ1AsTUFBTTtvQkFDUCxDQUFDO2dCQUNGLENBQUM7Z0JBQ0QsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN6QixDQUFDO2lCQUFNLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO2dCQUM5QixhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9CLENBQUM7aUJBQU0sSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7Z0JBQzlCLE9BQU8sQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLElBQUksYUFBYSxDQUFDLElBQUksRUFBRSxLQUFLLEdBQUcsRUFBRSxDQUFDO29CQUNqRSxXQUFXLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO2dCQUMxQyxDQUFDO2dCQUNELElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLElBQUksYUFBYSxDQUFDLElBQUksRUFBRSxLQUFLLEdBQUcsRUFBRSxDQUFDO29CQUM5RCxhQUFhLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBQ3JCLENBQUM7cUJBQU0sQ0FBQztvQkFDUCxNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7Z0JBQzVDLENBQUM7WUFDRixDQUFDO1lBQ0QsQ0FBQyxFQUFFLENBQUM7UUFDTCxDQUFDO1FBQ0QsT0FBTyxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDO1lBQ2pDLElBQUksYUFBYSxDQUFDLElBQUksRUFBRSxLQUFLLEdBQUcsRUFBRSxDQUFDO2dCQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7WUFDNUMsQ0FBQztpQkFBTSxDQUFDO2dCQUNQLFdBQVcsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDMUMsQ0FBQztRQUNGLENBQUM7UUFDRCxPQUFPLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBQ00sTUFBTSxDQUFDLGVBQWUsQ0FBQyxNQUFnQjtRQUM3QyxNQUFNLEtBQUssR0FBa0IsSUFBSSx5Q0FBSyxFQUFVLENBQUM7UUFDakQsS0FBSyxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNoRCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO2dCQUNqQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25DLENBQUM7aUJBQU0sQ0FBQztnQkFDUCxJQUFJLEdBQUcsR0FBVyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBQzlCLElBQUksR0FBRyxHQUFXLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQztnQkFDOUIsUUFBUSxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztvQkFDbkIsS0FBSyxHQUFHO3dCQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO3dCQUMvQixNQUFNO29CQUNQLEtBQUssR0FBRzt3QkFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQzt3QkFDL0IsTUFBTTtvQkFDUCxLQUFLLEdBQUc7d0JBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7d0JBQy9CLE1BQU07b0JBQ1AsS0FBSyxHQUFHO3dCQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO3dCQUMvQixNQUFNO29CQUNQLEtBQUssR0FBRzt3QkFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQzt3QkFDaEMsTUFBTTtnQkFDUixDQUFDO1lBQ0YsQ0FBQztRQUNGLENBQUM7UUFDRCxPQUFPLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBQ08sTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFZO1FBQ25DLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBQ08sTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFZO1FBQ3JDLE9BQU8sY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBQ08sTUFBTSxDQUFDLHlCQUF5QixDQUFDLFFBQWdCO1FBQ3hELE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBQ08sTUFBTSxDQUFDLDBCQUEwQixDQUFDLFFBQWdCO1FBQ3pELE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBQ08sTUFBTSxDQUFDLFVBQVUsQ0FBQyxRQUFnQjtRQUN6QyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUM1QixPQUFPLENBQUMsQ0FBQztRQUNYLENBQUM7UUFDRCxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUM1QixPQUFPLENBQUMsQ0FBQztRQUNYLENBQUM7UUFDRCxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUMxQixPQUFPLENBQUMsQ0FBQztRQUNYLENBQUM7UUFDRCxNQUFNLElBQUksS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDdEMsQ0FBQztDQUNEO0FBRUQsSUFBWSxTQUEyRjtBQUF2RyxXQUFZLFNBQVM7SUFBRyx5Q0FBSTtJQUFFLDJDQUFLO0lBQUUsaURBQVE7SUFBRSw2Q0FBTTtJQUFFLGlEQUFRO0lBQUUsNkNBQU07SUFBRSw2Q0FBTTtJQUFFLDZDQUFNO0lBQUUsdUNBQUc7SUFBRSwrQ0FBTztBQUFDLENBQUMsRUFBM0YsU0FBUyxLQUFULFNBQVMsUUFBa0Y7QUFDaEcsTUFBTSxLQUFLO0lBQ1YsSUFBSSxDQUFZO0lBQ2hCLEtBQUssQ0FBUztJQUNyQixZQUFZLElBQWUsRUFBRSxLQUFjO1FBQzFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3BCLENBQUM7Q0FDRDtBQUNNLE1BQU0sS0FBSztJQUNULE1BQU0sQ0FBVztJQUNqQixVQUFVLENBQVM7SUFDM0IsWUFBWSxLQUFhO1FBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7UUFDOUUsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUNNLFlBQVk7UUFDbEIsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDNUMsT0FBTyxJQUFJLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakMsQ0FBQztRQUNELElBQUksS0FBSyxHQUFXLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7UUFDbkQsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFDTSxlQUFlO1FBQ3JCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxLQUFLLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNoRCxPQUFPLElBQUksS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxDQUFDO1FBQ0QsSUFBSSxLQUFLLEdBQVcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDakQsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFDTSxNQUFNO1FBQ1osSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQUMsTUFBTSxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFDTyxRQUFRLENBQUMsS0FBYTtRQUM3QixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztZQUN0QixPQUFPLElBQUksS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQyxDQUFDO1FBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7WUFDdEIsT0FBTyxJQUFJLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkMsQ0FBQztRQUNELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO1lBQ3RCLE9BQU8sSUFBSSxLQUFLLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RDLENBQUM7UUFDRCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztZQUN0QixPQUFPLElBQUksS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQyxDQUFDO1FBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7WUFDdEIsT0FBTyxJQUFJLEtBQUssQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdEMsQ0FBQztRQUNELElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO1lBQy9CLE9BQU8sSUFBSSxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN2RCxDQUFDO1FBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7WUFDdEIsT0FBTyxJQUFJLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEMsQ0FBQztRQUNELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO1lBQ3RCLE9BQU8sSUFBSSxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BDLENBQUM7UUFDRCxPQUFPLElBQUksS0FBSyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNyQyxDQUFDO0NBQ0Q7QUFDTSxNQUFNLE1BQU07SUFDVixHQUFHLENBQVE7SUFDWixLQUFLLENBQUMsSUFBWTtRQUN4QixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNCLE1BQU0sVUFBVSxHQUFtQixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUMvRCxNQUFNLEtBQUssR0FBVSxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsMENBQTBDO1FBQzNGLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDbEMsT0FBTyxVQUFVLENBQUM7UUFDbkIsQ0FBQztRQUNELE1BQU0sS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFDRCw0QkFBNEI7SUFDcEIsb0JBQW9CO1FBQzNCLElBQUksVUFBVSxHQUFtQixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUM1RCxJQUFJLEtBQUssR0FBVSxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzNDLE9BQU8sS0FBSyxDQUFDLElBQUksS0FBSyxTQUFTLENBQUMsSUFBSSxJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3hFLElBQUksVUFBVSxHQUFtQixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztZQUM1RCxJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNuQyxVQUFVLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN6QyxDQUFDO2lCQUFNLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQzNDLFVBQVUsR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3pDLENBQUM7WUFDRCxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNqQyxDQUFDO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNsQixPQUFPLFVBQVUsQ0FBQztJQUNuQixDQUFDO0lBQ0QsOEJBQThCO0lBQ3RCLG1CQUFtQjtRQUMxQixJQUFJLE9BQU8sR0FBbUIsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDMUQsSUFBSSxLQUFLLEdBQVUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMzQyxPQUFPLEtBQUssQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDLFFBQVEsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUM3RSxJQUFJLE9BQU8sR0FBbUIsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7WUFDMUQsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDdkMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDakMsQ0FBQztpQkFBTSxJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUM1QyxPQUFPLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNoQyxDQUFDO1lBQ0QsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDakMsQ0FBQztRQUNELElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDbEIsT0FBTyxPQUFPLENBQUM7SUFDaEIsQ0FBQztJQUNELHNCQUFzQjtJQUNkLG9CQUFvQjtRQUMzQixJQUFJLE9BQU8sR0FBbUIsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDekQsSUFBSSxLQUFLLEdBQVUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMzQyxPQUFPLEtBQUssQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQzFDLElBQUksT0FBTyxHQUFtQixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztZQUN6RCxPQUFPLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMvQixLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNqQyxDQUFDO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNsQixPQUFPLE9BQU8sQ0FBQztJQUNoQixDQUFDO0lBQ0QsMEJBQTBCO0lBQ2xCLG1CQUFtQjtRQUMxQixJQUFJLEtBQUssR0FBbUIsSUFBSSwyREFBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xELElBQUksS0FBSyxHQUFVLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDM0MsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDckUsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDcEMsS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QixDQUFDO1lBQ0QsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDakMsQ0FBQztRQUNELElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDckMsS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUMsQ0FBQztZQUNoRCxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNoQyxJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUNyQyxNQUFNLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1lBQ3ZDLENBQUM7UUFDRixDQUFDO2FBQU0sQ0FBQztZQUNQLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ3JDLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQyxDQUFDO2lCQUFNLENBQUM7Z0JBQ1AsTUFBTSxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDN0IsQ0FBQztRQUNGLENBQUM7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNkLENBQUM7Q0FDRDtBQUVEOzs7Ozs7OztHQVFHO0FBRUg7Ozs7OztFQU1FOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pRZ0Q7QUFDRjtBQUV6QyxNQUFNLE1BQU07SUFDWCxNQUFNLENBQUMsT0FBTyxDQUFDLENBQVMsRUFBRSxDQUFrQjtRQUNsRCxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyx5RUFBeUUsQ0FBQyxDQUFDO1FBQUMsQ0FBQztRQUNoSCxJQUFJLEdBQUcsR0FBVyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLFlBQVksTUFBTSxFQUFFLENBQUM7WUFDekIsR0FBRyxHQUFHLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakMsS0FBSyxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDdEMsS0FBSyxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztvQkFDdEMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN2QyxDQUFDO1lBQ0YsQ0FBQztZQUNELEtBQUssSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ3RDLEtBQUssSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7b0JBQ3RDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM3QyxDQUFDO1lBQ0YsQ0FBQztRQUNGLENBQUM7YUFBTSxDQUFDO1lBQ1AsSUFBSSxDQUFDLFlBQVksMkNBQU0sRUFBRSxDQUFDO2dCQUN6QixHQUFHLEdBQUcsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixLQUFLLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO29CQUN0QyxLQUFLLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO3dCQUN0QyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3ZDLENBQUM7Z0JBQ0YsQ0FBQztnQkFDRCxLQUFLLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO29CQUN0QyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN0QyxDQUFDO1lBQ0YsQ0FBQztRQUNGLENBQUM7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNaLENBQUM7SUFDRCxrQ0FBa0M7SUFDM0IsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFTLEVBQUUsSUFBWSxFQUFFLElBQVksRUFBRSxJQUFZO1FBQy9FLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUM7WUFBQyxNQUFNLElBQUksS0FBSyxDQUFDLHVEQUF1RCxDQUFDLENBQUM7UUFBQyxDQUFDO1FBQ3ZHLE1BQU0sTUFBTSxHQUFXLElBQUksY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSwyREFBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZELE9BQU8sTUFBTSxDQUFDO0lBQ2YsQ0FBQztJQUNNLE1BQU0sQ0FBQyxZQUFZO1FBQ3pCLE1BQU0sTUFBTSxHQUFXLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLDBCQUEwQjtRQUNuSSxLQUFLLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQzNDLEtBQUssSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQzNDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSwyREFBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2xGLENBQUM7UUFDRixDQUFDO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDZixDQUFDO0lBQ00sTUFBTSxDQUFDLE9BQU87UUFDcEIsTUFBTSxnQkFBZ0IsR0FBVyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQywyQkFBMkI7UUFDL0YsTUFBTSxRQUFRLEdBQWEsRUFBRSxDQUFDO1FBQzlCLEtBQUssSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxnQkFBZ0IsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ25ELFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDbkQsQ0FBQztRQUNELHFCQUFxQjtRQUNyQixNQUFNLE1BQU0sR0FBVyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDeEcsT0FBTyxNQUFNLENBQUM7SUFDZixDQUFDO0lBQ00sQ0FBQyxDQUFTLENBQUMsT0FBTztJQUNsQixDQUFDLENBQVMsQ0FBQyxVQUFVO0lBQ3JCLFFBQVEsQ0FBcUI7SUFDcEMsWUFBWSxDQUFTLEVBQUUsQ0FBUztRQUMvQixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNYLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsS0FBSyxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUN6QyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUN2QixDQUFDO0lBQ0YsQ0FBQztJQUNNLE1BQU0sQ0FBQyxDQUFTO1FBQ3RCLElBQUksSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ3RDLE9BQU8sS0FBSyxDQUFDO1FBQ2QsQ0FBQztRQUNELEtBQUssSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDekMsS0FBSyxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDekMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO29CQUFDLE9BQU8sS0FBSyxDQUFDO2dCQUFDLENBQUM7WUFDckUsQ0FBQztRQUNGLENBQUM7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFDTSxHQUFHLENBQUMsQ0FBUztRQUNuQixJQUFJLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUFDLENBQUM7UUFDcEYsTUFBTSxHQUFHLEdBQVcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0MsS0FBSyxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUN4QyxLQUFLLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUN4QyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoRSxDQUFDO1FBQ0YsQ0FBQztRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ1osQ0FBQztJQUNNLEdBQUcsQ0FBQyxDQUFTO1FBQ25CLElBQUksSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQUMsQ0FBQztRQUNwRixNQUFNLEdBQUcsR0FBVyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvQyxLQUFLLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ3hDLEtBQUssSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ3hDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hFLENBQUM7UUFDRixDQUFDO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDWixDQUFDO0lBQ00sSUFBSSxDQUFDLENBQW1DO1FBQzlDLElBQUksR0FBRyxHQUFXLElBQUksQ0FBQztRQUN2QixJQUFJLE9BQU8sQ0FBQyxLQUFLLFFBQVEsRUFBRSxDQUFDO1lBQzNCLEdBQUcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqQyxLQUFLLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUN4QyxLQUFLLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO29CQUN4QyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNsRCxDQUFDO1lBQ0YsQ0FBQztRQUNGLENBQUM7YUFBTSxJQUFJLENBQUMsWUFBWSwyREFBYyxFQUFFLENBQUM7WUFDeEMsR0FBRyxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLEtBQUssSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ3hDLEtBQUssSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7b0JBQ3hDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xELENBQUM7WUFDRixDQUFDO1FBQ0YsQ0FBQzthQUFNLENBQUM7WUFDUCxJQUFJLENBQUMsWUFBWSxNQUFNLEVBQUUsQ0FBQztnQkFDekIsSUFBSSxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztvQkFBQyxNQUFNLElBQUksS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUM7Z0JBQUMsQ0FBQztnQkFDbEUsR0FBRyxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM5QixLQUFLLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO29CQUN4QyxLQUFLLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO3dCQUN4QyxJQUFJLEdBQUcsR0FBbUIsSUFBSSwyREFBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNoRCxLQUFLLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDOzRCQUN6QyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDM0QsQ0FBQzt3QkFDRCxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztvQkFDMUIsQ0FBQztnQkFDRixDQUFDO1lBQ0YsQ0FBQztRQUNGLENBQUM7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNaLENBQUM7SUFDTSxhQUFhLENBQUMsQ0FBZTtRQUNuQyxJQUFJLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQUMsQ0FBQztRQUNsRSxNQUFNLEdBQUcsR0FBaUIsSUFBSSxpREFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRCxLQUFLLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ3pDLElBQUksR0FBRyxHQUFtQixJQUFJLDJEQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEQsS0FBSyxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDekMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEQsQ0FBQztZQUNELEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQ3ZCLENBQUM7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNaLENBQUM7SUFDTSxTQUFTO1FBQ2YsTUFBTSxHQUFHLEdBQVcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0MsS0FBSyxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUN6QyxLQUFLLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUN6QyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUMsQ0FBQztRQUNGLENBQUM7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNaLENBQUM7SUFDTSxRQUFRO1FBQ2QsTUFBTSxHQUFHLEdBQVcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0MsS0FBSyxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUN6QyxLQUFLLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUN6QyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUMsQ0FBQztRQUNGLENBQUM7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNaLENBQUM7SUFDTSxVQUFVLENBQUMsSUFBWSxFQUFFLElBQVk7UUFDM0MsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDO1lBQUMsT0FBTztRQUFDLENBQUM7UUFDL0MsS0FBSyxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUN6QyxNQUFNLEdBQUcsR0FBbUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDOUIsQ0FBQztJQUNGLENBQUM7SUFDTSxXQUFXLENBQUMsR0FBVyxFQUFFLE1BQXNCO1FBQ3JELElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztZQUFDLE9BQU87UUFBQyxDQUFDO1FBQzdCLEtBQUssSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDekMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUM3RSxDQUFDO0lBQ0YsQ0FBQztJQUNNLE9BQU8sQ0FBQyxJQUFZLEVBQUUsSUFBWSxFQUFFLE1BQXNCO1FBQ2hFLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQztZQUFDLE9BQU87UUFBQyxDQUFDO1FBQy9DLEtBQUssSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDekMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzNHLENBQUM7SUFDRixDQUFDO0lBQ00sYUFBYSxDQUFDLElBQVksRUFBRSxPQUF1QixFQUFFLElBQVksRUFBRSxPQUF1QjtRQUNoRyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUM7WUFBQyxPQUFPO1FBQUMsQ0FBQztRQUMvQyxLQUFLLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ3pDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDMUgsQ0FBQztJQUNGLENBQUM7SUFDRCx1RUFBdUU7SUFDaEUsUUFBUTtRQUNkLE9BQU8sSUFBSSxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCw0RkFBNEY7SUFDckYsVUFBVTtRQUNoQixLQUFLLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ3pDLEtBQUssSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ3pDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO29CQUNiLFNBQVM7Z0JBQ1YsQ0FBQztnQkFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSwyREFBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztvQkFBQyxPQUFPLEtBQUssQ0FBQztnQkFBQyxDQUFDO1lBQzFFLENBQUM7UUFDRixDQUFDO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO0lBQ0QsOEdBQThHO0lBQzlHLHlCQUF5QjtJQUNsQixVQUFVO1FBQ2hCLElBQUksSUFBSSxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFBQyxNQUFNLElBQUksS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFBQyxDQUFDO1FBQ25FLEtBQUssSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDekMsS0FBSyxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDekMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7b0JBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksMkRBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7d0JBQUMsT0FBTyxLQUFLLENBQUM7b0JBQUMsQ0FBQztvQkFDekUsU0FBUztnQkFDVixDQUFDO2dCQUNELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLDJEQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO29CQUFDLE9BQU8sS0FBSyxDQUFDO2dCQUFDLENBQUM7WUFDMUUsQ0FBQztRQUNGLENBQUM7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFDRCxpRUFBaUU7SUFDMUQsUUFBUTtRQUNkLE1BQU0sSUFBSSxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBQ0QsNkdBQTZHO0lBQzdHLDhFQUE4RTtJQUM5RSxpQ0FBaUM7SUFDMUIsb0JBQW9CO1FBQzFCLE1BQU0sSUFBSSxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBQ00saUJBQWlCO1FBQ3ZCLDZEQUE2RDtRQUM3RCxzRUFBc0U7UUFDdEUsS0FBSyxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUN6QyxLQUFLLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLDJEQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO29CQUFDLE9BQU8sS0FBSyxDQUFDO2dCQUFDLENBQUM7WUFDMUUsQ0FBQztRQUNGLENBQUM7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFDTSxpQkFBaUI7UUFDdkIsNkRBQTZEO1FBQzdELHNFQUFzRTtRQUN0RSxLQUFLLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ3pDLEtBQUssSUFBSSxDQUFDLEdBQVcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUM3QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSwyREFBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztvQkFBQyxPQUFPLEtBQUssQ0FBQztnQkFBQyxDQUFDO1lBQzFFLENBQUM7UUFDRixDQUFDO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO0lBQ0QsdUVBQXVFO0lBQ2hFLFdBQVc7UUFDakIsSUFBSSxJQUFJLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUFDLENBQUM7UUFDbkUsS0FBSyxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUN6QyxLQUFLLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUN6QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7b0JBQUMsT0FBTyxLQUFLLENBQUM7Z0JBQUMsQ0FBQztZQUN4RSxDQUFDO1FBQ0YsQ0FBQztRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztJQUNELCtHQUErRztJQUMvRyxvQ0FBb0M7SUFDN0IsWUFBWTtRQUNsQixNQUFNLEVBQUUsR0FBVyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDcEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFDTSxnQkFBZ0I7UUFDdEIsSUFBSSxZQUFZLEdBQVksS0FBSyxDQUFDO1FBQ2xDLDZGQUE2RjtRQUM3Riw4REFBOEQ7UUFDOUQsS0FBSyxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUN6QyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztnQkFDdkIsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNyQixDQUFDO2lCQUFNLENBQUM7Z0JBQ1AsSUFBSSxZQUFZLEVBQUUsQ0FBQztvQkFBQyxPQUFPLEtBQUssQ0FBQztnQkFBQyxDQUFDO1lBQ3BDLENBQUMsa0dBQWlHO1FBQ25HLENBQUM7UUFDRCwyR0FBMkc7UUFDM0csaUZBQWlGO1FBQ2pGLElBQUksV0FBVyxHQUFXLENBQUMsQ0FBQyxDQUFDO1FBQzdCLEtBQUssSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDekMsTUFBTSxlQUFlLEdBQVcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pELElBQUksQ0FBQyxHQUFHLGVBQWUsRUFBRSxDQUFDO2dCQUFDLFNBQVM7WUFBQyxDQUFDLGdDQUErQjtZQUNyRSxnQ0FBZ0M7WUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksMkRBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBQUMsT0FBTyxLQUFLLENBQUM7WUFBQyxDQUFDO1lBQ3ZGLElBQUksV0FBVyxHQUFHLGVBQWUsRUFBRSxDQUFDO2dCQUNuQyxXQUFXLEdBQUcsZUFBZSxDQUFDO1lBQy9CLENBQUM7aUJBQU0sQ0FBQztnQkFBQyxPQUFPLEtBQUssQ0FBQztZQUFDLENBQUM7UUFDekIsQ0FBQztRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztJQUNNLHVCQUF1QjtRQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLEVBQUUsQ0FBQztZQUFDLE9BQU8sS0FBSyxDQUFDO1FBQUMsQ0FBQztRQUMvQyxtRUFBbUU7UUFDbkUsS0FBSyxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUN6QyxNQUFNLGFBQWEsR0FBVyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkQsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLCtCQUErQixDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUM7Z0JBQUMsT0FBTyxLQUFLLENBQUM7WUFBQyxDQUFDO1FBQy9FLENBQUM7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFDTSx1QkFBdUI7UUFDN0IsTUFBTSxHQUFHLEdBQVcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3BDLElBQUksSUFBSSxHQUFXLENBQUMsQ0FBQztRQUNyQixLQUFLLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ3hDLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztnQkFDbkIsTUFBTTtZQUNQLENBQUM7WUFDRCxJQUFJLENBQUMsR0FBVyxDQUFDLENBQUM7WUFDbEIsT0FBTyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO2dCQUN4QyxDQUFDLEVBQUUsQ0FBQztnQkFDSixJQUFJLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7b0JBQ2pCLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ04sSUFBSSxFQUFFLENBQUM7b0JBQ1AsSUFBSSxHQUFHLENBQUMsQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO3dCQUNwQixJQUFJLEVBQUUsQ0FBQzt3QkFDUCxNQUFNO29CQUNQLENBQUM7Z0JBQ0YsQ0FBQztZQUNGLENBQUM7WUFDRCxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztnQkFDdEMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO1lBQ3hELENBQUM7WUFDRCxLQUFLLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUN4QyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztvQkFDYixHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO2dCQUNyRCxDQUFDO1lBQ0YsQ0FBQztZQUNELElBQUksRUFBRSxDQUFDO1FBQ1IsQ0FBQztRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ1osQ0FBQztJQUNNLFdBQVc7UUFDakIsbURBQW1EO1FBQ25ELElBQUksSUFBSSxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDdkIsTUFBTSxJQUFJLEtBQUssQ0FBQyx1REFBdUQsQ0FBQyxDQUFDO1FBQzFFLENBQUM7UUFDRCxJQUFJLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7WUFDbEIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVCLENBQUM7UUFDRCxJQUFJLEdBQUcsR0FBbUIsSUFBSSwyREFBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hELEtBQUssSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDekMsTUFBTSxLQUFLLEdBQW1CLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7WUFDMUYsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0QyxDQUFDO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDWixDQUFDO0lBQ00sU0FBUyxDQUFDLE1BQWM7UUFDOUIsSUFBSSxNQUFNLENBQUMsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUFDLENBQUM7UUFDakYsSUFBSSxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztZQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0NBQW9DLENBQUMsQ0FBQztRQUFDLENBQUM7UUFDbEYsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLE1BQU0sR0FBRyxHQUFXLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9DLEtBQUssSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDekMsS0FBSyxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDekMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLDJEQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzNDLEtBQUssSUFBSSxFQUFFLEdBQVcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7b0JBQzlDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQzt3QkFDOUMsU0FBUztvQkFDVixDQUFDO29CQUNELEtBQUssSUFBSSxFQUFFLEdBQVcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7d0JBQzlDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQzs0QkFDOUMsU0FBUzt3QkFDVixDQUFDO3dCQUNELEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNwSCxDQUFDO2dCQUNGLENBQUM7WUFDRixDQUFDO1FBQ0YsQ0FBQztRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ1osQ0FBQztJQUVPLFNBQVMsQ0FBQyxLQUFhO1FBQzlCLEtBQUssSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDekMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksMkRBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBQUMsT0FBTyxLQUFLLENBQUM7WUFBQyxDQUFDO1FBQzlFLENBQUM7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFDTyxnQkFBZ0IsQ0FBQyxLQUFhO1FBQ3JDLEtBQUssSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDekMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksMkRBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBQUMsT0FBTyxDQUFDLENBQUM7WUFBQyxDQUFDO1FBQzFFLENBQUM7UUFDRCxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUNPLCtCQUErQixDQUFDLFFBQWdCO1FBQ3ZELElBQUksR0FBRyxHQUFXLENBQUMsQ0FBQztRQUNwQixLQUFLLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ3pDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLDJEQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO2dCQUFDLEdBQUcsRUFBRSxDQUFDO1lBQUMsQ0FBQztRQUMxRSxDQUFDO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDWixDQUFDO0lBQ08sUUFBUSxDQUFDLEtBQWEsRUFBRSxRQUFnQjtRQUMvQyxNQUFNLEdBQUcsR0FBVyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELElBQUksU0FBUyxHQUFXLENBQUMsQ0FBQztRQUMxQixLQUFLLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUM3QyxJQUFJLENBQUMsS0FBSyxLQUFLLEVBQUUsQ0FBQztnQkFDakIsU0FBUyxHQUFHLENBQUMsQ0FBQztZQUNmLENBQUM7WUFDRCxJQUFJLFlBQVksR0FBVyxDQUFDLENBQUM7WUFDN0IsS0FBSyxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQzdDLElBQUksQ0FBQyxLQUFLLFFBQVEsRUFBRSxDQUFDO29CQUNwQixZQUFZLEdBQUcsQ0FBQyxDQUFDO2dCQUNsQixDQUFDO2dCQUNELEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLFlBQVksQ0FBQyxDQUFDO1lBQ3JFLENBQUM7UUFDRixDQUFDO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDWixDQUFDO0NBQ0Q7QUFFTSxNQUFNLGNBQWUsU0FBUSxNQUFNO0lBQ3pDLFlBQVksQ0FBUztRQUNwQixLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ1osSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsS0FBSyxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUN6QyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUN0QixLQUFLLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUN6QyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztvQkFDYixJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksMkRBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDN0MsQ0FBQztxQkFBTSxDQUFDO29CQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSwyREFBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUFDLENBQUM7WUFDeEQsQ0FBQztRQUNGLENBQUM7SUFDRixDQUFDO0NBQ0Q7QUFFRCx5RUFBeUU7QUFDekUsb0RBQW9EO0FBQzdDLE1BQU0saUJBQWtCLFNBQVEsTUFBTTtJQUNyQyxJQUFJLENBQVM7SUFDYixJQUFJLENBQVM7SUFDcEIsWUFBWSxDQUFTLEVBQUUsRUFBVSxFQUFFLEVBQVUsRUFBRSxJQUE2QjtRQUMzRSxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDO1lBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyw2REFBNkQsQ0FBQyxDQUFDO1FBQUMsQ0FBQztRQUN6RyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ1osSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ25CLEtBQUssSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDekMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDdEIsS0FBSyxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDekMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7b0JBQ2IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLDJEQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzdDLENBQUM7cUJBQU0sQ0FBQztvQkFBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksMkRBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFBQyxDQUFDO1lBQ3hELENBQUM7UUFDRixDQUFDO1FBQ0QsSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLEVBQUUsQ0FBQztZQUM5QixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksMkRBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsRCxDQUFDO2FBQU0sQ0FBQztZQUNQLElBQUksSUFBSSxZQUFZLDJEQUFjLEVBQUUsQ0FBQztnQkFBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQztZQUFDLENBQUM7UUFDdEUsQ0FBQztJQUNGLENBQUM7Q0FDRDtBQUVELDJFQUEyRTtBQUNwRSxNQUFNLGlCQUFrQixTQUFRLE1BQU07SUFDNUMsWUFBWSxDQUFTLEVBQUUsSUFBWSxFQUFFLElBQVk7UUFDaEQsSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQztZQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsNkRBQTZELENBQUMsQ0FBQztRQUFDLENBQUM7UUFDN0csS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNaLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ25CLEtBQUssSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDekMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDdEIsS0FBSyxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDekMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7b0JBQ2IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLDJEQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzdDLENBQUM7cUJBQU0sQ0FBQztvQkFBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksMkRBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFBQyxDQUFDO1lBQ3hELENBQUM7UUFDRixDQUFDO1FBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLDJEQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLDJEQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLDJEQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLDJEQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkQsQ0FBQztDQUNEOzs7Ozs7Ozs7Ozs7Ozs7QUN4ZE0sTUFBTSxLQUFLO0lBQ1QsS0FBSyxDQUFNO0lBQ25CO1FBQ0MsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUNNLE9BQU87UUFDYixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBQ00sT0FBTyxDQUFDLE9BQVU7UUFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNNLE9BQU87UUFDYixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDO1lBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQUMsQ0FBQztRQUMxRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUNNLElBQUk7UUFDVixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDO1lBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQUMsQ0FBQztRQUMxRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUNNLE9BQU87UUFDYixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDbkIsQ0FBQztDQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QjhDO0FBQ2Y7QUFDQTtBQUV6QixNQUFNLGNBQWM7SUFDbkIsTUFBTSxDQUFDLHVCQUF1QixDQUFDLElBQVk7UUFDakQsTUFBTSxNQUFNLEdBQWEsSUFBSSxDQUFDLEtBQUssQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxHQUFXLENBQUMsQ0FBQztRQUNsQixNQUFNLFdBQVcsR0FBa0IsSUFBSSx5Q0FBSyxFQUFVLENBQUM7UUFDdkQsTUFBTSxhQUFhLEdBQWtCLElBQUkseUNBQUssRUFBVSxDQUFDO1FBQ3pELE9BQU8sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUMxQixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztnQkFDOUIsV0FBVyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoQyxDQUFDO2lCQUFNLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO2dCQUN2QyxNQUFNLEdBQUcsR0FBVyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzlCLE9BQU8sQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDO29CQUMxRSxJQUFJLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQzNHLENBQUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO3dCQUMzRyxXQUFXLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO29CQUMxQyxDQUFDO3lCQUFNLENBQUM7d0JBQ1AsTUFBTTtvQkFDUCxDQUFDO2dCQUNGLENBQUM7Z0JBQ0QsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN6QixDQUFDO2lCQUFNLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO2dCQUM5QixhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9CLENBQUM7aUJBQU0sSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7Z0JBQzlCLE9BQU8sQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLElBQUksYUFBYSxDQUFDLElBQUksRUFBRSxLQUFLLEdBQUcsRUFBRSxDQUFDO29CQUNqRSxXQUFXLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO2dCQUMxQyxDQUFDO2dCQUNELElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLElBQUksYUFBYSxDQUFDLElBQUksRUFBRSxLQUFLLEdBQUcsRUFBRSxDQUFDO29CQUM5RCxhQUFhLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBQ3JCLENBQUM7cUJBQU0sQ0FBQztvQkFDUCxNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7Z0JBQzVDLENBQUM7WUFDRixDQUFDO1lBQ0QsQ0FBQyxFQUFFLENBQUM7UUFDTCxDQUFDO1FBQ0QsT0FBTyxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDO1lBQ2pDLElBQUksYUFBYSxDQUFDLElBQUksRUFBRSxLQUFLLEdBQUcsRUFBRSxDQUFDO2dCQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7WUFDNUMsQ0FBQztpQkFBTSxDQUFDO2dCQUNQLFdBQVcsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDMUMsQ0FBQztRQUNGLENBQUM7UUFDRCxPQUFPLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBQ00sTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFZO1FBQ3BDLE1BQU0sQ0FBQyxHQUFXLElBQUksd0RBQU0sRUFBRSxDQUFDO1FBQy9CLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBQ00sTUFBTSxDQUFDLHFCQUFxQixDQUFDLENBQVMsRUFBRSxDQUFTO1FBQ3ZELE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMscUJBQXFCLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFDTSxNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBUyxFQUFFLENBQVM7UUFDckQsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsY0FBYyxDQUFDLHFCQUFxQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFDTyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQVk7UUFDbkMsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFDTyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQVk7UUFDckMsT0FBTyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFDTyxNQUFNLENBQUMseUJBQXlCLENBQUMsUUFBZ0I7UUFDeEQsT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFDTyxNQUFNLENBQUMsMEJBQTBCLENBQUMsUUFBZ0I7UUFDekQsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFDTyxNQUFNLENBQUMsVUFBVSxDQUFDLFFBQWdCO1FBQ3pDLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO1lBQzdCLE9BQU8sQ0FBQyxDQUFDO1FBQ1YsQ0FBQztRQUNELElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO1lBQzdCLE9BQU8sQ0FBQyxDQUFDO1FBQ1YsQ0FBQztRQUNELElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO1lBQzNCLE9BQU8sQ0FBQyxDQUFDO1FBQ1YsQ0FBQztRQUNELE1BQU0sSUFBSSxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBQ08sTUFBTSxDQUFDLGVBQWUsQ0FBQyxNQUFnQjtRQUM5QyxNQUFNLEtBQUssR0FBMEIsSUFBSSx5Q0FBSyxFQUFrQixDQUFDO1FBQ2pFLEtBQUssSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztnQkFDakMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLGNBQWMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZELENBQUM7aUJBQU0sQ0FBQztnQkFDUCxNQUFNLEdBQUcsR0FBbUIsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUN4QyxNQUFNLEdBQUcsR0FBbUIsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUN4QyxRQUFRLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO29CQUNuQixLQUFLLEdBQUc7d0JBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0JBQ2xDLE1BQU07b0JBQ1AsS0FBSyxHQUFHO3dCQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO3dCQUNsQyxNQUFNO29CQUNQLEtBQUssR0FBRzt3QkFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDbkMsTUFBTTtvQkFDUCxLQUFLLEdBQUc7d0JBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0JBQ2xDLE1BQU07b0JBQ1AsS0FBSyxHQUFHO3dCQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUM3QyxNQUFNO2dCQUNSLENBQUM7WUFDRixDQUFDO1FBQ0YsQ0FBQztRQUNELE9BQU8sS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFDTSxTQUFTLENBQVM7SUFDbEIsV0FBVyxDQUFTO0lBQzNCLFlBQVksQ0FBUyxFQUFFLElBQVksQ0FBQztRQUNuQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztZQUNiLE1BQU0sSUFBSSxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUN0QyxDQUFDO1FBQ0Qsb0hBQW9IO1FBQ3BILE1BQU0sSUFBSSxHQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFDTSxjQUFjO1FBQ3BCLE1BQU0sR0FBRyxHQUFXLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMzRixPQUFPLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxFQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUVNLE1BQU0sQ0FBQyxDQUEwQjtRQUN2QyxNQUFNLEdBQUcsR0FBbUIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ2xELElBQUksT0FBTyxDQUFDLEtBQUssUUFBUSxFQUFFLENBQUM7WUFDM0IsT0FBTyxHQUFHLENBQUMsU0FBUyxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsV0FBVyxLQUFLLENBQUMsQ0FBQztRQUNyRCxDQUFDO2FBQU0sQ0FBQztZQUNQLE1BQU0sR0FBRyxHQUFtQixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDL0MsT0FBTyxHQUFHLENBQUMsU0FBUyxLQUFLLEdBQUcsQ0FBQyxTQUFTLElBQUksR0FBRyxDQUFDLFdBQVcsS0FBSyxHQUFHLENBQUMsV0FBVyxDQUFDO1FBQy9FLENBQUM7SUFDRixDQUFDO0lBQ00sRUFBRSxDQUFDLENBQTBCO1FBQ25DLE1BQU0sR0FBRyxHQUFtQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbEQsSUFBSSxPQUFPLENBQUMsS0FBSyxRQUFRLEVBQUUsQ0FBQztZQUMzQixPQUFPLEdBQUcsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUM7UUFDNUMsQ0FBQzthQUFNLENBQUM7WUFDUCxNQUFNLEdBQUcsR0FBbUIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQy9DLE9BQU8sR0FBRyxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBQztRQUMxRSxDQUFDO0lBQ0YsQ0FBQztJQUNNLEVBQUUsQ0FBQyxDQUEwQjtRQUNuQyxNQUFNLEdBQUcsR0FBbUIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ2xELElBQUksT0FBTyxDQUFDLEtBQUssUUFBUSxFQUFFLENBQUM7WUFDM0IsT0FBTyxHQUFHLENBQUMsU0FBUyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFDO1FBQzdDLENBQUM7YUFBTSxDQUFDO1lBQ1AsTUFBTSxHQUFHLEdBQW1CLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUMvQyxPQUFPLEdBQUcsQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLFdBQVcsSUFBSSxHQUFHLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUM7UUFDM0UsQ0FBQztJQUNGLENBQUM7SUFDTSxFQUFFLENBQUMsQ0FBMEI7UUFDbkMsTUFBTSxHQUFHLEdBQW1CLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNsRCxJQUFJLE9BQU8sQ0FBQyxLQUFLLFFBQVEsRUFBRSxDQUFDO1lBQzNCLE9BQU8sR0FBRyxDQUFDLFNBQVMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBQztRQUM1QyxDQUFDO2FBQU0sQ0FBQztZQUNQLE1BQU0sR0FBRyxHQUFtQixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDL0MsT0FBTyxHQUFHLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFDO1FBQzFFLENBQUM7SUFDRixDQUFDO0lBQ00sRUFBRSxDQUFDLENBQTBCO1FBQ25DLE1BQU0sR0FBRyxHQUFtQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbEQsSUFBSSxPQUFPLENBQUMsS0FBSyxRQUFRLEVBQUUsQ0FBQztZQUMzQixPQUFPLEdBQUcsQ0FBQyxTQUFTLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUM7UUFDN0MsQ0FBQzthQUFNLENBQUM7WUFDUCxNQUFNLEdBQUcsR0FBbUIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQy9DLE9BQU8sR0FBRyxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUMsV0FBVyxJQUFJLEdBQUcsQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBQztRQUMzRSxDQUFDO0lBQ0YsQ0FBQztJQUVELHlCQUF5QjtJQUNsQixVQUFVO1FBQ2hCLElBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyxDQUFDLEVBQUUsQ0FBQztZQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUFDLENBQUM7UUFDckUsT0FBTyxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBQ0QsbUJBQW1CO0lBQ1osUUFBUTtRQUNkLE9BQU8sSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFDTSxHQUFHLENBQUMsQ0FBMEI7UUFDcEMsSUFBSSxPQUFPLENBQUMsS0FBSyxRQUFRLEVBQUUsQ0FBQztZQUMzQixPQUFPLElBQUksY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN0RixDQUFDO2FBQU0sQ0FBQztZQUNQLE1BQU0sR0FBRyxHQUFXLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN4RixNQUFNLEVBQUUsR0FBVyxJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQzNELE1BQU0sRUFBRSxHQUFXLENBQUMsQ0FBQyxTQUFTLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUM7WUFDckQsT0FBTyxJQUFJLGNBQWMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3pDLENBQUM7SUFDRixDQUFDO0lBQ00sR0FBRyxDQUFDLENBQTBCO1FBQ3BDLElBQUksT0FBTyxDQUFDLEtBQUssUUFBUSxFQUFFLENBQUM7WUFDM0IsT0FBTyxJQUFJLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDdEYsQ0FBQzthQUFNLENBQUM7WUFDUCxNQUFNLEdBQUcsR0FBVyxjQUFjLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDeEYsTUFBTSxFQUFFLEdBQVcsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUMzRCxNQUFNLEVBQUUsR0FBVyxDQUFDLENBQUMsU0FBUyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDO1lBQ3JELE9BQU8sSUFBSSxjQUFjLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN6QyxDQUFDO0lBQ0YsQ0FBQztJQUNNLElBQUksQ0FBQyxDQUEwQjtRQUNyQyxJQUFJLE9BQU8sQ0FBQyxLQUFLLFFBQVEsRUFBRSxDQUFDO1lBQzNCLE9BQU8sSUFBSSxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNuRSxDQUFDO2FBQU0sQ0FBQztZQUNQLE9BQU8sSUFBSSxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM3RixDQUFDO0lBQ0YsQ0FBQztJQUNNLEdBQUcsQ0FBQyxDQUEwQjtRQUNwQyxJQUFJLE9BQU8sQ0FBQyxLQUFLLFFBQVEsRUFBRSxDQUFDO1lBQzNCLE9BQU8sSUFBSSxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNuRSxDQUFDO2FBQU0sQ0FBQztZQUNQLE9BQU8sSUFBSSxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM3RixDQUFDO0lBQ0YsQ0FBQztJQUNNLEdBQUcsQ0FBQyxDQUEwQjtRQUNwQyxJQUFJLE9BQU8sQ0FBQyxLQUFLLFFBQVEsRUFBRSxDQUFDO1lBQzNCLE9BQU8sSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN2RSxDQUFDO2FBQU0sQ0FBQztZQUNQLElBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyxDQUFDLEVBQUUsQ0FBQztnQkFBQyxNQUFNLEtBQUssQ0FBQyxvREFBb0QsQ0FBQyxDQUFDO1lBQUMsQ0FBQztZQUNsRyxPQUFPLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMzRixDQUFDO0lBQ0YsQ0FBQztJQUNNLFFBQVE7UUFDZCxPQUFPLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQyxDQUFDO0lBQ00sUUFBUTtRQUNkLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDdEcsQ0FBQztJQUNNLFFBQVE7UUFDZCxPQUFPLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdELENBQUM7Q0FDRDs7Ozs7Ozs7Ozs7Ozs7O0FDbk9NLE1BQU0sS0FBSztJQUNULEtBQUssQ0FBTTtJQUNuQjtRQUNDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFDTSxPQUFPO1FBQ2IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUNNLElBQUksQ0FBQyxPQUFVO1FBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDTSxHQUFHO1FBQ1QsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQztZQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUFDLENBQUM7UUFDMUQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFDTSxJQUFJO1FBQ1YsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQztZQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUFDLENBQUM7UUFDMUQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFDTSxPQUFPO1FBQ2IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ25CLENBQUM7Q0FDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QmlDO0FBQ0E7QUFFM0IsTUFBTSx1QkFBdUI7SUFDNUIsV0FBVyxDQUFTO0lBQ3BCLFdBQVcsQ0FBUztJQUNwQixDQUFDLENBQVM7SUFDVixDQUFDLENBQVM7SUFDakIsWUFBWSxXQUFtQixFQUFFLFdBQW1CO1FBQ25ELElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSwyQ0FBTSxDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksMkNBQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNsQyxDQUFDO0NBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkaUM7QUFDZ0I7QUFFM0MsTUFBTSxNQUFNO0lBQ1gsTUFBTSxDQUFDLHNCQUFzQixDQUFDLE9BQWlCO1FBQ3JELE1BQU0sQ0FBQyxHQUFXLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFDakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7WUFBQyxPQUFPLElBQUksQ0FBQztRQUFDLENBQUM7UUFDN0IsTUFBTSxDQUFDLEdBQVcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvQixLQUFLLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ2pELElBQUksQ0FBQyxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztnQkFBQyxNQUFNLElBQUksS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUM7WUFBQyxDQUFDO1FBQ3ZFLENBQUM7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztZQUFDLE9BQU8sS0FBSyxDQUFDO1FBQUMsQ0FBQztRQUM1QixNQUFNLElBQUksS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDckMsQ0FBQztJQUNNLENBQUMsQ0FBUztJQUNWLFFBQVEsQ0FBbUI7SUFFbEMsWUFBWSxDQUFNO1FBQ2pCLElBQUksT0FBTyxDQUFDLEtBQUssUUFBUSxFQUFFLENBQUM7WUFDM0IsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDWCxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNwQixDQUFDO2FBQU0sSUFBSSxDQUFDLFlBQVksS0FBSyxFQUFFLENBQUM7WUFDL0IsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1lBQ25CLEtBQUssSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ3pDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSwyREFBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdDLENBQUM7UUFDRixDQUFDO0lBQ0YsQ0FBQztJQUNNLEdBQUcsQ0FBQyxDQUFTO1FBQ25CLElBQUksSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFBQyxNQUFNLElBQUksS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFBQyxDQUFDO1FBQ2xFLE1BQU0sR0FBRyxHQUFXLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QyxLQUFLLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ3hDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELENBQUM7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNaLENBQUM7SUFDTSxHQUFHLENBQUMsQ0FBUztRQUNuQixJQUFJLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQUMsQ0FBQztRQUNsRSxNQUFNLEdBQUcsR0FBVyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkMsS0FBSyxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUN4QyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2RCxDQUFDO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDWixDQUFDO0lBQ00sSUFBSSxDQUFDLENBQWlCO1FBQzVCLE1BQU0sR0FBRyxHQUFXLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QyxLQUFLLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ3hDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUMsQ0FBQztRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ1osQ0FBQztJQUNELDREQUE0RDtJQUNyRCxVQUFVLENBQUMsQ0FBUztRQUMxQixJQUFJLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQUMsQ0FBQztRQUNsRSxJQUFJLEdBQUcsR0FBbUIsSUFBSSwyREFBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hELEtBQUssSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDdEMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckQsQ0FBQztRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ1osQ0FBQztJQUNELGdEQUFnRDtJQUN6QyxZQUFZLENBQUMsQ0FBUztRQUM1QixNQUFNLElBQUksS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDckMsQ0FBQztJQUNELDZCQUE2QjtJQUN0QixNQUFNO1FBQ1osTUFBTSxNQUFNLEdBQW1CLElBQUksMkRBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyRCxLQUFLLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ3pDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlCLENBQUM7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNmLENBQUM7SUFDTSxRQUFRO1FBQ2QsTUFBTSxHQUFHLEdBQVcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLEtBQUssSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDekMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLENBQUM7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNaLENBQUM7SUFDTSxRQUFRO1FBQ2QsTUFBTSxHQUFHLEdBQVcsSUFBSSwyQ0FBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDMUMsS0FBSyxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUN6QyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkMsQ0FBQztRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ1osQ0FBQztDQUNEO0FBQ00sTUFBTSxZQUFhLFNBQVEsTUFBTTtDQUN2QztBQUNNLE1BQU0sU0FBVSxTQUFRLE1BQU07SUFDN0IsYUFBYSxDQUFDLENBQVM7UUFDN0IsSUFBSSxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUFDLENBQUM7UUFDbEUsTUFBTSxHQUFHLEdBQWMsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdDLEtBQUssSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDekMsSUFBSSxHQUFHLEdBQW1CLElBQUksMkRBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoRCxLQUFLLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUN0QyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4RCxDQUFDO1lBQ0QsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDdkIsQ0FBQztRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ1osQ0FBQztDQUNEOzs7Ozs7O1VDdkdEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDNUJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOa0c7QUFDbEM7QUFDa0M7QUFDcEM7QUFDQTtBQUNsQjtBQUc1QyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxFQUFFO0lBQ2xELFNBQVMsTUFBTSxDQUFDLEVBQVU7UUFDekIsTUFBTSxPQUFPLEdBQWdCLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDekQsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxNQUFNLEVBQUUsQ0FBQztZQUNyQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxPQUFPO1FBQ2hDLENBQUM7YUFBTSxDQUFDO1lBQ1AsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTTtRQUMvQixDQUFDO0lBQ0YsQ0FBQztJQUNELE1BQU0sU0FBUyxHQUFxQyxJQUFJLDBHQUFnQyxFQUFFLENBQUM7SUFDM0YsTUFBTSxpQkFBaUIsR0FBNEIsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3RFLElBQUksU0FBd0IsQ0FBQztJQUM3QixJQUFJLFNBQXdCLENBQUM7SUFDN0IsSUFBSSxhQUFhLEdBQVcsSUFBSSxDQUFDO0lBQ2pDLElBQUksZUFBZSxHQUFXLENBQUMsQ0FBQztJQUNoQyxJQUFJLEVBQUUsQ0FBQztJQUNQLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDLDRCQUE0QixHQUFHLFNBQVMsQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDLENBQUM7SUFDM0csUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLENBQUMsbUNBQW1DLEdBQUcsU0FBUyxDQUFDLGlCQUFpQixHQUFHLFFBQVEsQ0FBQyxDQUFDO0lBQ3hILFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDLHVDQUF1QyxHQUFHLFNBQVMsQ0FBQyxxQkFBcUIsR0FBRyxRQUFRLENBQUMsQ0FBQztJQUNoSSxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyw0QkFBNEIsR0FBRyxTQUFTLENBQUMsaUJBQWlCLEdBQUcsUUFBUSxDQUFDLENBQUM7SUFDakgsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLENBQUMsb0NBQW9DLEdBQUcsU0FBUyxDQUFDLHdCQUF3QixHQUFHLFFBQVEsQ0FBQyxDQUFDO0lBQ2hJLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDLGlDQUFpQyxHQUFHLFNBQVMsQ0FBQyxxQkFBcUIsR0FBRyxRQUFRLENBQUMsQ0FBQztJQUMxSCxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyw0QkFBNEIsR0FBRyxTQUFTLENBQUMsaUJBQWlCLEdBQUcsUUFBUSxDQUFDLENBQUM7SUFDakgsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLENBQUMsd0NBQXdDLEdBQUcsU0FBUyxDQUFDLDRCQUE0QixHQUFHLFFBQVEsQ0FBQyxDQUFDO0lBQ3hJLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDLHNDQUFzQyxHQUFHLFNBQVMsQ0FBQywwQkFBMEIsR0FBRyxRQUFRLENBQUMsQ0FBQztJQUNwSSwwR0FBZ0MsQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsRUFBa0IsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ3pILFFBQVEsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtRQUN2RSxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbkIsQ0FBQyxDQUFDLENBQUM7SUFDSCxRQUFRLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtRQUMxRSxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDaEQsbUJBQW1CLEVBQUUsQ0FBQztRQUN0QixJQUFJLEdBQUcsS0FBd0IsUUFBUSxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3JGLGFBQWEsR0FBRyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEQsQ0FBQztRQUNELElBQUksR0FBRyxLQUF3QixRQUFRLENBQUMsY0FBYyxDQUFDLG9CQUFvQixDQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDckYsYUFBYSxHQUFHLElBQUksOERBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNuRSxDQUFDO2FBQU0sSUFBSSxHQUFHLEtBQXdCLFFBQVEsQ0FBQyxjQUFjLENBQUMsb0JBQW9CLENBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUM1RixhQUFhLEdBQUcsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hELENBQUM7UUFDRCxJQUFJLEdBQUcsS0FBd0IsUUFBUSxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3JGLGFBQWEsR0FBRyxzREFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEUsQ0FBQztRQUNELElBQUksR0FBRyxLQUF3QixRQUFRLENBQUMsY0FBYyxDQUFDLG9CQUFvQixDQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDckYsYUFBYSxHQUFHLHNEQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxJQUFJLDhEQUFjLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUNsRyxDQUFDO2FBQU0sSUFBSSxHQUFHLEtBQXdCLFFBQVEsQ0FBQyxjQUFjLENBQUMsb0JBQW9CLENBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUM1RixhQUFhLEdBQUcsc0RBQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BFLENBQUM7UUFDRCxvQkFBb0IsQ0FBQyxZQUFZLEdBQXNCLFFBQVEsQ0FBQyxjQUFjLENBQUMsb0JBQW9CLENBQUUsQ0FBQyxLQUFLLEdBQUcsUUFBUSxHQUFzQixRQUFRLENBQUMsY0FBYyxDQUFDLG9CQUFvQixDQUFFLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ3pNLENBQUMsQ0FBQyxDQUFDO0lBQ0gsUUFBUSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO1FBQ3ZFLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNoRCxNQUFNLE9BQU8sR0FBVyxNQUFNLENBQW9CLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlGLE1BQU0sT0FBTyxHQUFXLE1BQU0sQ0FBb0IsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDOUYsSUFBSSxDQUFDLEdBQUcsT0FBTyxJQUFJLGFBQWEsQ0FBQyxDQUFDLEdBQUcsT0FBTyxJQUFJLENBQUMsR0FBRyxPQUFPLElBQUksYUFBYSxDQUFDLENBQUMsR0FBRyxPQUFPLEVBQUUsQ0FBQztZQUMxRixRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsR0FBRyxvREFBb0QsR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQ3BILE9BQU87UUFDUixDQUFDO1FBQ0QsbUJBQW1CLEVBQUUsQ0FBQztRQUN0QixhQUFhLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUMzQyxvQkFBb0IsQ0FBQyxlQUFlLEdBQXNCLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFFLENBQUMsS0FBSyxHQUFHLFlBQVksR0FBc0IsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUUsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDcEwsQ0FBQyxDQUFDLENBQUM7SUFDSCxRQUFRLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtRQUN4RSxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDaEQsTUFBTSxNQUFNLEdBQVcsTUFBTSxDQUFvQixRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMvRixNQUFNLE1BQU0sR0FBbUIsc0VBQWMsQ0FBQyxVQUFVLENBQW9CLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDakksSUFBSSxDQUFDLEdBQUcsTUFBTSxJQUFJLGFBQWEsQ0FBQyxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUM7WUFDNUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLEdBQUcsb0RBQW9ELEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUNwSCxPQUFPO1FBQ1IsQ0FBQztRQUNELG1CQUFtQixFQUFFLENBQUM7UUFDdEIsYUFBYSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDMUMsb0JBQW9CLENBQUMsaUJBQWlCLEdBQXNCLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFFLENBQUMsS0FBSyxHQUFHLGNBQWMsR0FBc0IsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUUsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDNUwsQ0FBQyxDQUFDLENBQUM7SUFDSCxRQUFRLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7UUFDcEUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2hELE1BQU0sT0FBTyxHQUFXLE1BQU0sQ0FBb0IsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEcsTUFBTSxPQUFPLEdBQVcsTUFBTSxDQUFvQixRQUFRLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwRyxNQUFNLE9BQU8sR0FBbUIsc0VBQWMsQ0FBQyxVQUFVLENBQW9CLFFBQVEsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDdkksTUFBTSxPQUFPLEdBQW1CLHNFQUFjLENBQUMsVUFBVSxDQUFvQixRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZJLElBQUksQ0FBQyxHQUFHLE9BQU8sSUFBSSxhQUFhLENBQUMsQ0FBQyxHQUFHLE9BQU8sSUFBSSxDQUFDLEdBQUcsT0FBTyxJQUFJLGFBQWEsQ0FBQyxDQUFDLEdBQUcsT0FBTyxFQUFFLENBQUM7WUFDMUYsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLEdBQUcsb0RBQW9ELEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUNwSCxPQUFPO1FBQ1IsQ0FBQztRQUNELG1CQUFtQixFQUFFLENBQUM7UUFDdEIsYUFBYSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNoRSxvQkFBb0IsQ0FBQyxTQUFTLE9BQU8sZ0JBQW1DLFFBQVEsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFFLENBQUMsS0FBSyxPQUFPLE9BQU8sZ0JBQW1DLFFBQVEsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFFLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztJQUN2TixDQUFDLENBQUMsQ0FBQztJQUNILFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtRQUNqRSxJQUFJLFNBQVMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDO1lBQUMsT0FBTztRQUFDLENBQUM7UUFDcEMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksYUFBYSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hFLGFBQWEsR0FBRyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDaEMsSUFBSSxLQUFLLEdBQVcsY0FBYyxHQUFHLGVBQWUsQ0FBQztRQUNyRCxRQUFRLENBQUMsY0FBYyxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUMzRCxNQUFNLFFBQVEsR0FBVyxjQUFjLEdBQUcsZUFBZSxDQUFDO1FBQzFELFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRSxHQUFHLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQzlELEVBQUUsZUFBZSxDQUFDO1FBQ2xCLEtBQUssR0FBRyxjQUFjLEdBQUcsZUFBZSxDQUFDO1FBQ3pDLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQzVELGlCQUFpQixFQUFFLENBQUM7UUFDcEIsc0JBQXNCLEVBQUUsQ0FBQztJQUMxQixDQUFDLENBQUMsQ0FBQztJQUNILFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtRQUNqRSxJQUFJLFNBQVMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDO1lBQUMsT0FBTztRQUFDLENBQUM7UUFDcEMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksYUFBYSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hFLGFBQWEsR0FBRyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDaEMsSUFBSSxLQUFLLEdBQVcsY0FBYyxHQUFHLGVBQWUsQ0FBQztRQUNyRCxRQUFRLENBQUMsY0FBYyxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUMzRCxFQUFFLGVBQWUsQ0FBQztRQUNsQixLQUFLLEdBQUcsY0FBYyxHQUFHLGVBQWUsQ0FBQztRQUN6QyxRQUFRLENBQUMsY0FBYyxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUM1RCxNQUFNLFFBQVEsR0FBVyxjQUFjLEdBQUcsZUFBZSxDQUFDO1FBQzFELFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRSxHQUFHLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQy9ELGlCQUFpQixFQUFFLENBQUM7UUFDcEIsc0JBQXNCLEVBQUUsQ0FBQztJQUMxQixDQUFDLENBQUMsQ0FBQztJQUNILFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtRQUNsRSxJQUFJLEVBQUUsQ0FBQztRQUNQLE9BQU8sZUFBZSxHQUFHLENBQUMsRUFBRSxDQUFDO1lBQzVCLE1BQU0sS0FBSyxHQUFXLGNBQWMsR0FBRyxlQUFlLENBQUM7WUFDdkQsUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDN0MsTUFBTSxRQUFRLEdBQVcsY0FBYyxHQUFHLGVBQWUsQ0FBQztZQUMxRCxRQUFRLENBQUMsY0FBYyxDQUFDLEVBQUUsR0FBRyxRQUFRLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNoRCxFQUFFLGVBQWUsQ0FBQztRQUNuQixDQUFDO1FBQ0QsaUJBQWlCLEVBQUUsQ0FBQztRQUNwQixzQkFBc0IsRUFBRSxDQUFDO0lBQzFCLENBQUMsQ0FBQyxDQUFDO0lBQ0gsU0FBUyxJQUFJO1FBQ1osU0FBUyxHQUFHLElBQUksb0RBQUssRUFBVSxDQUFDO1FBQ2hDLFNBQVMsR0FBRyxJQUFJLG9EQUFLLEVBQVUsQ0FBQztRQUNoQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLGlCQUFpQixFQUFFLENBQUM7UUFDcEIsc0JBQXNCLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBQ0QsU0FBUyxtQkFBbUI7UUFDM0IsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksYUFBYSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFDRCxTQUFTLG9CQUFvQixDQUFDLEtBQWE7UUFDMUMsU0FBUyxFQUFFLENBQUM7UUFDWixJQUFJLGVBQWUsR0FBRyxDQUFDLEVBQUUsQ0FBQztZQUFDLE1BQU0sQ0FBQyxFQUFFLEdBQUcsY0FBYyxHQUFHLGVBQWUsQ0FBQyxDQUFDO1FBQUMsQ0FBQztRQUMzRSxFQUFFLGVBQWUsQ0FBQztRQUNsQixNQUFNLEtBQUssR0FBVyxjQUFjLEdBQUcsZUFBZSxDQUFDO1FBQ3ZELE1BQU0sR0FBRyxHQUFtQixRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFELEdBQUcsQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDO1FBQ2YsTUFBTSxRQUFRLEdBQVcsY0FBYyxHQUFHLGVBQWUsQ0FBQztRQUMxRCxNQUFNLFlBQVksR0FBc0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6RSxZQUFZLENBQUMsRUFBRSxHQUFHLFFBQVEsQ0FBQztRQUMzQixZQUFZLENBQUMsU0FBUyxHQUFHLGlCQUFpQixDQUFDO1FBQzNDLFlBQVksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQy9CLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO1lBQzNDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNmLENBQUMsQ0FBQyxDQUFDO1FBQ0gsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDeEQsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDL0Msd0VBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDckQsSUFBSSxhQUFhLENBQUMsdUJBQXVCLEVBQUUsRUFBRSxDQUFDO1lBQzdDLFlBQVksQ0FBQyxNQUFNLENBQUMsMENBQTBDLENBQUMsQ0FBQztRQUNqRSxDQUFDO2FBQU0sSUFBSSxhQUFhLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxDQUFDO1lBQzdDLFlBQVksQ0FBQyxNQUFNLENBQUMsa0NBQWtDLENBQUMsQ0FBQztRQUN6RCxDQUFDO1FBQ2tCLFFBQVEsQ0FBQyxjQUFjLENBQUMsb0JBQW9CLENBQUUsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQzFELFFBQVEsQ0FBQyxjQUFjLENBQUMsb0JBQW9CLENBQUUsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQzFELFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFFLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUM1QyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBRSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDNUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUUsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQzlDLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFFLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUMvQyxRQUFRLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBRSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDbEQsUUFBUSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUUsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ3BELFFBQVEsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFFLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNsRCxRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBRSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDdkUsaUJBQWlCLEVBQUUsQ0FBQztRQUNwQixzQkFBc0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFDRCxTQUFTLGlCQUFpQjtRQUN6QixJQUFJLFNBQVMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDO1lBQ3pCLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUN6RSxDQUFDO2FBQU0sQ0FBQztZQUNQLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2hFLENBQUM7UUFDRCxJQUFJLFNBQVMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDO1lBQ3pCLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUN6RSxDQUFDO2FBQU0sQ0FBQztZQUNQLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2hFLENBQUM7SUFDRixDQUFDO0lBQ0QsU0FBUyxTQUFTO1FBQ2pCLElBQUksQ0FBQyxHQUFXLGVBQWUsQ0FBQztRQUNoQyxPQUFPLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUM7WUFDN0IsRUFBRSxDQUFDLENBQUM7WUFDSixNQUFNLEtBQUssR0FBVyxjQUFjLEdBQUcsQ0FBQyxDQUFDO1lBQ3pDLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQzdDLE1BQU0sUUFBUSxHQUFXLGNBQWMsR0FBRyxDQUFDLENBQUM7WUFDNUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFLEdBQUcsUUFBUSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDaEQsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLENBQUM7SUFDRixDQUFDO0lBQ0QsU0FBUyxzQkFBc0I7UUFDOUIsSUFBSSxJQUFJLElBQUksYUFBYSxFQUFFLENBQUM7WUFDM0IsUUFBUSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQ3BFLFFBQVEsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7WUFDaEUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1lBQ2pFLFFBQVEsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDOUQsQ0FBQzthQUFNLENBQUM7WUFDUCxRQUFRLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7WUFDbkUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUNqRSxRQUFRLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7WUFDbEUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUMvRCxDQUFDO0lBQ0YsQ0FBQztBQUNGLENBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGluZWFyYWxnZWJyYS8uL3NyYy9nZW5lcmF0b3JzL1N5c3RlbU9mTGluZWFyRXF1YXRpb25zR2VuZXJhdG9yLnRzIiwid2VicGFjazovL2xpbmVhcmFsZ2VicmEvLi9zcmMvcHJlc2VudGVycy9NYXRyaXhQcmVzZW50ZXIudHMiLCJ3ZWJwYWNrOi8vbGluZWFyYWxnZWJyYS8uL3NyYy9wcmVzZW50ZXJzL1N5c3RlbU9mTGluZWFyRXF1YXRpb25zUHJlc2VudGVyLnRzIiwid2VicGFjazovL2xpbmVhcmFsZ2VicmEvLi9zcmMvc3RydWN0dXJlcy9Bcml0aG1ldGljRXZhbHVhdG9yLnRzIiwid2VicGFjazovL2xpbmVhcmFsZ2VicmEvLi9zcmMvc3RydWN0dXJlcy9NYXRyaXgudHMiLCJ3ZWJwYWNrOi8vbGluZWFyYWxnZWJyYS8uL3NyYy9zdHJ1Y3R1cmVzL1F1ZXVlLnRzIiwid2VicGFjazovL2xpbmVhcmFsZ2VicmEvLi9zcmMvc3RydWN0dXJlcy9SYXRpb25hbE51bWJlci50cyIsIndlYnBhY2s6Ly9saW5lYXJhbGdlYnJhLy4vc3JjL3N0cnVjdHVyZXMvU3RhY2sudHMiLCJ3ZWJwYWNrOi8vbGluZWFyYWxnZWJyYS8uL3NyYy9zdHJ1Y3R1cmVzL1N5c3RlbU9mTGluZWFyRXF1YXRpb25zLnRzIiwid2VicGFjazovL2xpbmVhcmFsZ2VicmEvLi9zcmMvc3RydWN0dXJlcy9WZWN0b3IudHMiLCJ3ZWJwYWNrOi8vbGluZWFyYWxnZWJyYS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9saW5lYXJhbGdlYnJhL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9saW5lYXJhbGdlYnJhL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbGluZWFyYWxnZWJyYS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2xpbmVhcmFsZ2VicmEvLi9zcmMvZXhlcmNpc2VzL3N5c3RlbU9mTGluZWFyRXF1YXRpb25zLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1hdHJpeCB9IGZyb20gXCIuLi9zdHJ1Y3R1cmVzL01hdHJpeFwiO1xyXG5pbXBvcnQgeyBSYXRpb25hbE51bWJlciB9IGZyb20gXCIuLi9zdHJ1Y3R1cmVzL1JhdGlvbmFsTnVtYmVyXCI7XHJcbmltcG9ydCB7IFN5c3RlbU9mTGluZWFyRXF1YXRpb25zIH0gZnJvbSBcIi4uL3N0cnVjdHVyZXMvU3lzdGVtT2ZMaW5lYXJFcXVhdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTeXN0ZW1PZkxpbmVhckVxdWF0aW9uc0dlbmVyYXRvciB7XHJcblx0cHVibGljIHByb2JhYmlsaXR5VG9CZUNvbnNpc3RlbnQ6IG51bWJlciA9IDAuODsgLy8gODAlIGZvciB0aGUgc3lzdGVtIHRvIGhhdmUgc29sdXRpb25zXHJcblx0cHVibGljIHByb2JhYmlsaXR5VG9CZUluZGVwZW5kZW50OiBudW1iZXIgPSAwLjg7IC8vIDgwJSBmb3IgYWxsIGVxdWF0aW9uIGluIHRoZSBzeXN0ZW0gdG8gYmUgbGluZWFyIGluZGVwZW5kZW50XHJcblx0cHVibGljIHByb2JhYmlsaXR5VG9IYXZlVW5pcXVlU29sdXRpb246IG51bWJlciA9IDAuODsgLy8gaWYgdGhlIHN5c3RlbSBoYXMgc29sdXRpb24sIDgwJSBmb3IgdGhlIHN5c3RlbSB0byBoYXZlIGEgdW5pcXVlcyBzb2x1dGlvblxyXG5cdHB1YmxpYyBoYXNTb2x1dGlvbjogYm9vbGVhbiA9IE1hdGgucmFuZG9tKCkgPD0gdGhpcy5wcm9iYWJpbGl0eVRvQmVDb25zaXN0ZW50O1xyXG5cdHB1YmxpYyBoYXNVbmlxdWVTb2x1dGlvbjogYm9vbGVhbiA9IHRoaXMuaGFzU29sdXRpb24gPyBNYXRoLnJhbmRvbSgpIDw9IHRoaXMucHJvYmFiaWxpdHlUb0hhdmVVbmlxdWVTb2x1dGlvbiA6IGZhbHNlO1xyXG5cdHB1YmxpYyBudW1iZXJPZlZhcmlhYmxlc01pbjogbnVtYmVyID0gMztcclxuXHRwdWJsaWMgbnVtYmVyT2ZWYXJpYWJsZXNNYXg6IG51bWJlciA9IDc7XHJcblx0cHVibGljIG51bWJlck9mVmFyaWFibGVzOiBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKlxyXG5cdCAodGhpcy5udW1iZXJPZlZhcmlhYmxlc01heCAtIHRoaXMubnVtYmVyT2ZWYXJpYWJsZXNNaW4pICsgdGhpcy5udW1iZXJPZlZhcmlhYmxlc01pbik7XHJcblx0cHVibGljIG51bWJlck9mRnJlZVZhcmlhYmxlc01heFBlcmNlbnQ6IG51bWJlciA9IDAuNDsgLy8gbWF4aW11bSA0MCUgb2YgdG90YWwgbnVtYmVyIG9mIHZhcmlhYmxlc1xyXG5cdHB1YmxpYyBudW1iZXJPZkZyZWVWYXJpYWJsZXM6IG51bWJlciA9IHRoaXMuaGFzVW5pcXVlU29sdXRpb24gPyAwIDpcclxuXHQgdGhpcy5udW1iZXJPZlZhcmlhYmxlcyAtIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMubnVtYmVyT2ZWYXJpYWJsZXMgKiB0aGlzLm51bWJlck9mRnJlZVZhcmlhYmxlc01heFBlcmNlbnQgKyAxKTtcclxuXHQgLy8gYmV0d2VlbiAxIGFuZCBtYXggcGVyY2VudCBvZiBmcmVlIHZhcmlhYmxlcyBvdXQgb2YgdG90YWwgbnVtYmVyIG9mIHZhcmlhYmxlc1xyXG5cdHB1YmxpYyBudW1iZXJPZkxlYWRpbmdWYXJpYWJsZXM6IG51bWJlciA9IHRoaXMubnVtYmVyT2ZWYXJpYWJsZXMgLSB0aGlzLm51bWJlck9mRnJlZVZhcmlhYmxlcztcclxuXHRwdWJsaWMgaGFzRGVwZW5kZW50RXF1YXRpb25zOiBib29sZWFuID0gTWF0aC5yYW5kb20oKSA+PSB0aGlzLnByb2JhYmlsaXR5VG9CZUluZGVwZW5kZW50O1xyXG5cdHB1YmxpYyBudW1iZXJPZkRlcGVuZGVudEVxdWF0aW9uc01heDogbnVtYmVyID0gMC40OyAvLyBtYXhpbXVtIDQwJSBvZiB0b3RhbCBudW1iZXIgb2YgZXF1YXRpb25zIGFyZSBub3QgaW5kZXBlbmRlbnRcclxuXHRwdWJsaWMgbnVtYmVyT2ZJbmRlcGVuZGVudEVxdWF0aW9uczogbnVtYmVyID0gdGhpcy5udW1iZXJPZkxlYWRpbmdWYXJpYWJsZXM7XHJcblx0cHVibGljIG51bWJlck9mRGVwZW5kZW50RXF1YXRpb25zOiBudW1iZXIgPSB0aGlzLmhhc0RlcGVuZGVudEVxdWF0aW9ucyA/XHJcblx0IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMubnVtYmVyT2ZJbmRlcGVuZGVudEVxdWF0aW9ucyAqIHRoaXMubnVtYmVyT2ZEZXBlbmRlbnRFcXVhdGlvbnNNYXggKyAxKSA6IDA7XHJcblx0cHVibGljIG51bWJlck9mRXF1YXRpb25zOiBudW1iZXIgPSB0aGlzLm51bWJlck9mSW5kZXBlbmRlbnRFcXVhdGlvbnMgKyB0aGlzLm51bWJlck9mRGVwZW5kZW50RXF1YXRpb25zO1xyXG5cdHB1YmxpYyB2YWx1ZU9mVmFyaWFibGVzTWluOiBudW1iZXIgPSAtMTA7XHJcblx0cHVibGljIHZhbHVlT2ZWYXJpYWJsZXNNYXg6IG51bWJlciA9IDEwO1xyXG5cdHB1YmxpYyByYW5kb20oKTogU3lzdGVtT2ZMaW5lYXJFcXVhdGlvbnMge1xyXG5cdFx0Y29uc3QgYXVnbWVudGVkTWF0cml4OiBNYXRyaXggPSB0aGlzLmdlbmVyYXRlSW5kZXBlbmRlbnRTeXN0ZW0oKTtcclxuXHRcdHRoaXMubWFrZVN5c3RlbURlcGVuZGVudChhdWdtZW50ZWRNYXRyaXgpOyAvLyBiYXNlZCBvbiB0aGUgbnVtYmVyT2ZJbmRlcGVuZGVudEVxdWF0aW9ucyBhbmQgbnVtYmVyT2ZFcXVhdGlvbnNcclxuXHRcdHRoaXMubWFrZVN5c3RlbUluY29uc2lzdGVudChhdWdtZW50ZWRNYXRyaXgpOyAvLyBiYXNlZCBvbiB0aGUgaGFzU29sdXRpb25cclxuXHRcdGNvbnN0IHJldDogU3lzdGVtT2ZMaW5lYXJFcXVhdGlvbnMgPSBuZXcgU3lzdGVtT2ZMaW5lYXJFcXVhdGlvbnMoYXVnbWVudGVkTWF0cml4Lm0sIGF1Z21lbnRlZE1hdHJpeC5uIC0gMSk7XHJcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgcmV0Lm5vRXF1YXRpb25zOyBpKyspIHtcclxuXHRcdFx0Zm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IHJldC5ub1ZhcmlhYmxlczsgaisrKSB7XHJcblx0XHRcdFx0cmV0LkEuZWxlbWVudHNbaV1bal0gPSBhdWdtZW50ZWRNYXRyaXguZWxlbWVudHNbaV1bal07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCByZXQubm9FcXVhdGlvbnM7IGorKykge1xyXG5cdFx0XHRyZXQuYi5lbGVtZW50c1tqXSA9IGF1Z21lbnRlZE1hdHJpeC5lbGVtZW50c1tqXVtyZXQubm9WYXJpYWJsZXNdO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJldDtcclxuXHR9XHJcblx0cHJpdmF0ZSByYW5kb21WYXJpYWJsZVZhbHVlKCk6IG51bWJlciB7XHJcblx0XHRyZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHRoaXMudmFsdWVPZlZhcmlhYmxlc01heCAtIHRoaXMudmFsdWVPZlZhcmlhYmxlc01pbikgKyB0aGlzLnZhbHVlT2ZWYXJpYWJsZXNNaW4pO1xyXG5cdH1cclxuXHQvLyBlcXVhdGlvbiBzeXN0ZW1zOiBpbmRlcGVuZGVudCwgZGVwZW5kZW5kdCBvciBpbmNvbnNpc3RlbnRcclxuXHRwcml2YXRlIGdlbmVyYXRlSW5kZXBlbmRlbnRTeXN0ZW0oKTogTWF0cml4IHtcclxuXHRcdGNvbnN0IHZhcmlhYmxlczogbnVtYmVyW10gPSBbXTtcclxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLm51bWJlck9mVmFyaWFibGVzOyBpKyspIHtcclxuXHRcdFx0dmFyaWFibGVzW2ldID0gdGhpcy5yYW5kb21WYXJpYWJsZVZhbHVlKCk7XHJcblx0XHR9XHJcblx0XHRjb25zdCBhdWdtZW50ZWRNYXRyaXg6IE1hdHJpeCA9IG5ldyBNYXRyaXgodGhpcy5udW1iZXJPZkluZGVwZW5kZW50RXF1YXRpb25zICsgdGhpcy5udW1iZXJPZkRlcGVuZGVudEVxdWF0aW9ucywgdGhpcy5udW1iZXJPZlZhcmlhYmxlcyArIDEpO1xyXG5cdFx0Ly8gKzEgYmVjYXN1ZSBpdCByZXByZXNlbnRzIHRoZSBhdWdtZW50ZWQgbWF0cml4XHJcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5udW1iZXJPZkluZGVwZW5kZW50RXF1YXRpb25zOyBpKyspIHtcclxuXHRcdFx0bGV0IGZyZWVUZXJtOiBSYXRpb25hbE51bWJlciA9IG5ldyBSYXRpb25hbE51bWJlcigwKTtcclxuXHRcdFx0Zm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IHRoaXMubnVtYmVyT2ZWYXJpYWJsZXM7IGorKykge1xyXG5cdFx0XHRcdGF1Z21lbnRlZE1hdHJpeC5lbGVtZW50c1tpXVtqXSA9IG5ldyBSYXRpb25hbE51bWJlcihNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCAtIDUpKTsgLy8gY29lZmljaWVudHMnIHJhbmdlXHJcblx0XHRcdFx0ZnJlZVRlcm0gPSBmcmVlVGVybS5hZGQoYXVnbWVudGVkTWF0cml4LmVsZW1lbnRzW2ldW2pdLm11bHQodmFyaWFibGVzW2pdKSk7XHJcblx0XHRcdH1cclxuXHRcdFx0YXVnbWVudGVkTWF0cml4LmVsZW1lbnRzW2ldW3RoaXMubnVtYmVyT2ZWYXJpYWJsZXNdID0gZnJlZVRlcm07XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gYXVnbWVudGVkTWF0cml4O1xyXG5cdH1cclxuXHRwcml2YXRlIG1ha2VTeXN0ZW1EZXBlbmRlbnQoYXVnbWVudGVkTWF0cml4OiBNYXRyaXgpOiB2b2lkIHtcclxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IHRoaXMubnVtYmVyT2ZJbmRlcGVuZGVudEVxdWF0aW9uczsgaSA8IHRoaXMubnVtYmVyT2ZFcXVhdGlvbnM7IGkrKykge1xyXG5cdFx0XHRjb25zdCByb3cxOiBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLm51bWJlck9mSW5kZXBlbmRlbnRFcXVhdGlvbnMpO1xyXG5cdFx0XHRsZXQgcm93MjogbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5udW1iZXJPZkluZGVwZW5kZW50RXF1YXRpb25zKTtcclxuXHRcdFx0d2hpbGUgKHJvdzEgPT09IHJvdzIpIHtcclxuXHRcdFx0XHRyb3cyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5udW1iZXJPZkluZGVwZW5kZW50RXF1YXRpb25zKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjb25zdCBjb2VmaWNpZW50MTogUmF0aW9uYWxOdW1iZXIgPSBuZXcgUmF0aW9uYWxOdW1iZXIoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAgLSA1KSk7XHJcblx0XHRcdGNvbnN0IGNvZWZpY2llbnQyOiBSYXRpb25hbE51bWJlciA9IG5ldyBSYXRpb25hbE51bWJlcihNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCAtIDUpKTtcclxuXHRcdFx0Zm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8ICh0aGlzLm51bWJlck9mVmFyaWFibGVzICsgMSk7IGorKykge1xyXG5cdFx0XHRcdGF1Z21lbnRlZE1hdHJpeC5lbGVtZW50c1tpXVtqXSA9IGNvZWZpY2llbnQxLm11bHQoYXVnbWVudGVkTWF0cml4LmVsZW1lbnRzW3JvdzFdW2pdKVxyXG5cdFx0XHRcdC5hZGQoY29lZmljaWVudDIubXVsdChhdWdtZW50ZWRNYXRyaXguZWxlbWVudHNbcm93Ml1bal0pKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRwcml2YXRlIG1ha2VTeXN0ZW1JbmNvbnNpc3RlbnQoYXVnbWVudGVkTWF0cml4OiBNYXRyaXgpOiB2b2lkIHtcclxuXHRcdGlmICghdGhpcy5oYXNTb2x1dGlvbikge1xyXG5cdFx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5udW1iZXJPZkVxdWF0aW9uczsgaSsrKSB7XHJcblx0XHRcdFx0YXVnbWVudGVkTWF0cml4LmVsZW1lbnRzW2ldW3RoaXMubnVtYmVyT2ZWYXJpYWJsZXMgKyAxXSA9IG5ldyBSYXRpb25hbE51bWJlcihNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAgLSA1MCkpO1xyXG5cdFx0XHRcdC8vIGp1c3QgY2hhbmdlIHRoZSBmcmVlIHZhcmlhYmxlcyByYW5kb21cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHQvL1xyXG5cdC8vICAgICAgICAgICAgICAgICAgICAgICAgICBudW1iZXJPZlZhcmlhYmxlcyA9IG51bWJlck9mTGVhZGluZ1ZhcmlhYmxlcyArIG51bWJlck9mRnJlZVZhcmlhYmxlc1xyXG5cdC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xyXG5cdC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG5cdC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG5cdC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG5cdC8vICBudW1iZXJPZkVxdWF0aW9ucyA9ICAgICAgICAgICAgICAgICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG5cdC8vICBudW1iZXJPZkluZGVwZW5kZW50RXF1YXRpb25zICsgICAgICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG5cdC8vICBudW1iZXJPZkRlcGVuZGVkbnRFcXVhdGlvbnMgICAgICAgICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG5cdC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG5cdC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG5cdC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG5cdC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xyXG5cdC8vXHJcbn0iLCJpbXBvcnQgeyBNYXRyaXggfSBmcm9tIFwiLi4vc3RydWN0dXJlcy9NYXRyaXhcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBNYXRyaXhQcmVzZW50ZXIge1xyXG5cdHB1YmxpYyBzdGF0aWMgcHJpbnRUYWJsZU1hdHJpeChtYXRyaXg6IE1hdHJpeCwgY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudCk6IHZvaWQge1xyXG5cdFx0bGV0IHJvd0VjaGVsb25Gb3JtOiBib29sZWFuID0gbWF0cml4LmlzUm93RWNoZWxvbkZvcm0oKTtcclxuXHRcdGxldCByZWR1Y2VkUm93RWNoZWxvbkZvcm06IGJvb2xlYW4gPSByb3dFY2hlbG9uRm9ybSA/IG1hdHJpeC5pc1JlZHVjZWRSb3dFY2hlbG9uRm9ybSgpIDogZmFsc2U7XHJcblx0XHRsZXQgdGFibGU6IEhUTUxUYWJsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XHJcblx0XHR0YWJsZS5jbGFzc05hbWUgPSBcIm1hdHJpeFwiO1xyXG5cdFx0aWYgKHJlZHVjZWRSb3dFY2hlbG9uRm9ybSkge1xyXG5cdFx0XHR0YWJsZS5jbGFzc05hbWUgPSBcInJlZHVjZWRSb3dFY2hlbG9uTWF0cml4XCI7XHJcblx0XHR9IGVsc2UgaWYgKHJvd0VjaGVsb25Gb3JtKSB7XHJcblx0XHRcdHRhYmxlLmNsYXNzTmFtZSA9IFwicm93RWNoZWxvbk1hdHJpeFwiO1xyXG5cdFx0fVxyXG5cdFx0Zm9yIChsZXQgaTpudW1iZXIgPSAwOyBpIDwgbWF0cml4Lm07IGkrKykge1xyXG5cdFx0XHRsZXQgdHI6IEhUTUxUYWJsZVJvd0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcblx0XHRcdGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCBtYXRyaXgubjsgaisrKSB7XHJcblx0XHRcdFx0bGV0IHRkOiBIVE1MVGFibGVDZWxsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuXHRcdFx0XHR0ZC5pbm5lclRleHQgPSBtYXRyaXguZWxlbWVudHNbaV1bal0udG9TdHJpbmcoKTtcclxuXHRcdFx0XHR0ZC5jbGFzc05hbWUgPSBcIm1hdHJpeEVsZW1lbnRcIjtcclxuXHRcdFx0XHRpZiAocmVkdWNlZFJvd0VjaGVsb25Gb3JtICYmIGogPT09IGkpIHsgdGQuY2xhc3NOYW1lID0gXCJwaXZvdEVsZW1lbnRcIjsgfVxyXG5cdFx0XHRcdHRyLmFwcGVuZCh0ZCk7XHJcblx0XHRcdH1cclxuXHRcdFx0dGFibGUuYXBwZW5kKHRyKTtcclxuXHRcdH1cclxuXHRcdGNvbnRhaW5lci5hcHBlbmQodGFibGUpO1xyXG5cdFx0Y29udGFpbmVyLmFwcGVuZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xyXG5cdH1cclxuXHRwdWJsaWMgc3RhdGljIHByaW50TWF0cml4RXF1YWxpdHkobWF0cml4MTogTWF0cml4LCBvcGVhcnRvcjogc3RyaW5nLCBtYXRyaXgyOiBNYXRyaXgsIHJlc3VsdDogTWF0cml4LCBjb250YWluZXI6IEhUTUxEaXZFbGVtZW50KTogdm9pZCB7XHJcblx0XHRsZXQgdGFibGU6IEhUTUxUYWJsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XHJcblx0XHRsZXQgdHIwOiBIVE1MVGFibGVSb3dFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG5cdFx0dGFibGUuYXBwZW5kKHRyMCk7XHJcblx0XHRsZXQgdGQwMTogSFRNTFRhYmxlQ2VsbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcblx0XHR0cjAuYXBwZW5kKHRkMDEpO1xyXG5cdFx0bGV0IHRkMDI6IEhUTUxUYWJsZUNlbGxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG5cdFx0dGQwMi5pbm5lclRleHQgPSBvcGVhcnRvcjtcclxuXHRcdHRkMDIuc3R5bGUudmVydGljYWxBbGlnbiA9IFwibWlkZGxlXCI7XHJcblx0XHR0ZDAyLnN0eWxlLnBhZGRpbmdMZWZ0ID0gXCI1cHhcIjtcclxuXHRcdHRkMDIuc3R5bGUucGFkZGluZ1JpZ2h0ID0gXCI1cHhcIjtcclxuXHRcdHRyMC5hcHBlbmQodGQwMik7XHJcblx0XHRsZXQgdGQwMzogSFRNTFRhYmxlQ2VsbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcblx0XHR0cjAuYXBwZW5kKHRkMDMpO1xyXG5cdFx0bGV0IHRkMDQ6IEhUTUxUYWJsZUNlbGxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG5cdFx0dGQwNC5pbm5lclRleHQgPSBcIj1cIjtcclxuXHRcdHRkMDQuc3R5bGUudmVydGljYWxBbGlnbiA9IFwibWlkZGxlXCI7XHJcblx0XHR0ZDA0LnN0eWxlLnBhZGRpbmdMZWZ0ID0gXCI1cHhcIjtcclxuXHRcdHRkMDQuc3R5bGUucGFkZGluZ1JpZ2h0ID0gXCI1cHhcIjtcclxuXHRcdHRyMC5hcHBlbmQodGQwNCk7XHJcblx0XHRsZXQgdGQwNTogSFRNTFRhYmxlQ2VsbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcblx0XHR0cjAuYXBwZW5kKHRkMDUpO1xyXG5cdFx0bGV0IHRhYmxlMTogSFRNTFRhYmxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcclxuXHRcdHRhYmxlMS5jbGFzc05hbWUgPSBcIm1hdHJpeFwiO1xyXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IG1hdHJpeDEubTsgaSsrKSB7XHJcblx0XHRcdGxldCB0cjogSFRNTFRhYmxlUm93RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuXHRcdFx0Zm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IG1hdHJpeDEubjsgaisrKSB7XHJcblx0XHRcdFx0bGV0IHRkOiBIVE1MVGFibGVDZWxsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuXHRcdFx0XHR0ZC5pbm5lclRleHQgPSBtYXRyaXgxLmVsZW1lbnRzW2ldW2pdLnRvU3RyaW5nKCk7XHJcblx0XHRcdFx0dGQuc3R5bGUucGFkZGluZ0xlZnQgPSBcIjVweFwiO1xyXG5cdFx0XHRcdHRkLnN0eWxlLnBhZGRpbmdSaWdodCA9IFwiNXB4XCI7XHJcblx0XHRcdFx0dHIuYXBwZW5kKHRkKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0YWJsZTEuYXBwZW5kKHRyKTtcclxuXHRcdH1cclxuXHRcdHRkMDEuYXBwZW5kKHRhYmxlMSk7XHJcblx0XHR0YWJsZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XHJcblx0XHR0YWJsZTEuY2xhc3NOYW1lID0gXCJtYXRyaXhcIjtcclxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBtYXRyaXgyLm07IGkrKykge1xyXG5cdFx0XHRsZXQgdHI6IEhUTUxUYWJsZVJvd0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcblx0XHRcdGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCBtYXRyaXgyLm47IGorKykge1xyXG5cdFx0XHRcdGxldCB0ZDogSFRNTFRhYmxlQ2VsbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcblx0XHRcdFx0dGQuaW5uZXJUZXh0ID0gbWF0cml4Mi5lbGVtZW50c1tpXVtqXS50b1N0cmluZygpO1xyXG5cdFx0XHRcdHRkLnN0eWxlLnBhZGRpbmdMZWZ0ID0gXCI1cHhcIjtcclxuXHRcdFx0XHR0ZC5zdHlsZS5wYWRkaW5nUmlnaHQgPSBcIjVweFwiO1xyXG5cdFx0XHRcdHRyLmFwcGVuZCh0ZCk7XHJcblx0XHRcdH1cclxuXHRcdFx0dGFibGUxLmFwcGVuZCh0cik7XHJcblx0XHR9XHJcblx0XHR0ZDAzLmFwcGVuZCh0YWJsZTEpO1xyXG5cdFx0dGFibGUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xyXG5cdFx0dGFibGUxLmNsYXNzTmFtZSA9IFwibWF0cml4XCI7XHJcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgcmVzdWx0Lm07IGkrKykge1xyXG5cdFx0XHRsZXQgdHI6IEhUTUxUYWJsZVJvd0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcblx0XHRcdGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCByZXN1bHQubjsgaisrKSB7XHJcblx0XHRcdFx0bGV0IHRkOiBIVE1MVGFibGVDZWxsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuXHRcdFx0XHR0ZC5pbm5lclRleHQgPSByZXN1bHQuZWxlbWVudHNbaV1bal0udG9TdHJpbmcoKTtcclxuXHRcdFx0XHR0ZC5zdHlsZS5wYWRkaW5nTGVmdCA9IFwiNXB4XCI7XHJcblx0XHRcdFx0dGQuc3R5bGUucGFkZGluZ1JpZ2h0ID0gXCI1cHhcIjtcclxuXHRcdFx0XHR0ci5hcHBlbmQodGQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRhYmxlMS5hcHBlbmQodHIpO1xyXG5cdFx0fVxyXG5cdFx0dGQwNS5hcHBlbmQodGFibGUxKTtcclxuXHRcdGNvbnRhaW5lci5hcHBlbmQodGFibGUpO1xyXG5cdFx0Y29udGFpbmVyLmFwcGVuZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xyXG5cdH1cclxuXHRwdWJsaWMgc3RhdGljIHByaW50TWF0cml4RXF1YWxpdHkyKG1hdHJpeDE6IE1hdHJpeCwgb3BlYXJ0b3IxOiBzdHJpbmcsIG1hdHJpeDI6IE1hdHJpeCwgbWF0cml4MzogTWF0cml4LCBvcGVhcnRvcjI6IHN0cmluZywgbWF0cml4NDogTWF0cml4LCBjb250YWluZXI6IEhUTUxEaXZFbGVtZW50KTogdm9pZCB7XHJcblx0XHRsZXQgdGFibGU6IEhUTUxUYWJsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XHJcblx0XHRsZXQgdHIwOiBIVE1MVGFibGVSb3dFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG5cdFx0dGFibGUuYXBwZW5kKHRyMCk7XHJcblx0XHRsZXQgdGQwMTogSFRNTFRhYmxlQ2VsbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcblx0XHR0cjAuYXBwZW5kKHRkMDEpO1xyXG5cdFx0bGV0IHRkMDI6IEhUTUxUYWJsZUNlbGxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG5cdFx0dGQwMi5pbm5lclRleHQgPSBvcGVhcnRvcjE7XHJcblx0XHR0ZDAyLnN0eWxlLnZlcnRpY2FsQWxpZ24gPSBcIm1pZGRsZVwiO1xyXG5cdFx0dGQwMi5zdHlsZS5wYWRkaW5nTGVmdCA9IFwiNXB4XCI7XHJcblx0XHR0ZDAyLnN0eWxlLnBhZGRpbmdSaWdodCA9IFwiNXB4XCI7XHJcblx0XHR0cjAuYXBwZW5kKHRkMDIpO1xyXG5cdFx0bGV0IHRkMDM6IEhUTUxUYWJsZUNlbGxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG5cdFx0dHIwLmFwcGVuZCh0ZDAzKTtcclxuXHRcdGxldCB0ZDA0OiBIVE1MVGFibGVDZWxsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuXHRcdHRkMDQuaW5uZXJUZXh0ID0gXCI9XCI7XHJcblx0XHR0ZDA0LnN0eWxlLnZlcnRpY2FsQWxpZ24gPSBcIm1pZGRsZVwiO1xyXG5cdFx0dGQwNC5zdHlsZS5wYWRkaW5nTGVmdCA9IFwiNXB4XCI7XHJcblx0XHR0ZDA0LnN0eWxlLnBhZGRpbmdSaWdodCA9IFwiNXB4XCI7XHJcblx0XHR0cjAuYXBwZW5kKHRkMDQpO1xyXG5cdFx0bGV0IHRkMDU6IEhUTUxUYWJsZUNlbGxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG5cdFx0dHIwLmFwcGVuZCh0ZDA1KTtcclxuXHRcdGxldCB0ZDA2OiBIVE1MVGFibGVDZWxsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuXHRcdHRkMDYuaW5uZXJUZXh0ID0gb3BlYXJ0b3IyO1xyXG5cdFx0dGQwNi5zdHlsZS52ZXJ0aWNhbEFsaWduID0gXCJtaWRkbGVcIjtcclxuXHRcdHRkMDYuc3R5bGUucGFkZGluZ0xlZnQgPSBcIjVweFwiO1xyXG5cdFx0dGQwNi5zdHlsZS5wYWRkaW5nUmlnaHQgPSBcIjVweFwiO1xyXG5cdFx0dHIwLmFwcGVuZCh0ZDA2KTtcclxuXHRcdGxldCB0ZDA3OiBIVE1MVGFibGVDZWxsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuXHRcdHRyMC5hcHBlbmQodGQwNyk7XHJcblx0XHRsZXQgdGFibGUxOiBIVE1MVGFibGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xyXG5cdFx0dGFibGUxLmNsYXNzTmFtZSA9IFwibWF0cml4XCI7XHJcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgbWF0cml4MS5tOyBpKyspIHtcclxuXHRcdFx0bGV0IHRyOiBIVE1MVGFibGVSb3dFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG5cdFx0XHRmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgbWF0cml4MS5uOyBqKyspIHtcclxuXHRcdFx0XHRsZXQgdGQ6IEhUTUxUYWJsZUNlbGxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG5cdFx0XHRcdHRkLmlubmVyVGV4dCA9IG1hdHJpeDEuZWxlbWVudHNbaV1bal0udG9TdHJpbmcoKTtcclxuXHRcdFx0XHR0ZC5zdHlsZS5wYWRkaW5nTGVmdCA9IFwiNXB4XCI7XHJcblx0XHRcdFx0dGQuc3R5bGUucGFkZGluZ1JpZ2h0ID0gXCI1cHhcIjtcclxuXHRcdFx0XHR0ci5hcHBlbmQodGQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRhYmxlMS5hcHBlbmQodHIpO1xyXG5cdFx0fVxyXG5cdFx0dGQwMS5hcHBlbmQodGFibGUxKTtcclxuXHRcdHRhYmxlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcclxuXHRcdHRhYmxlMS5jbGFzc05hbWUgPSBcIm1hdHJpeFwiO1xyXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IG1hdHJpeDIubTsgaSsrKSB7XHJcblx0XHRcdGxldCB0cjogSFRNTFRhYmxlUm93RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuXHRcdFx0Zm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IG1hdHJpeDIubjsgaisrKSB7XHJcblx0XHRcdFx0bGV0IHRkOiBIVE1MVGFibGVDZWxsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuXHRcdFx0XHR0ZC5pbm5lclRleHQgPSBtYXRyaXgyLmVsZW1lbnRzW2ldW2pdLnRvU3RyaW5nKCk7XHJcblx0XHRcdFx0dGQuc3R5bGUucGFkZGluZ0xlZnQgPSBcIjVweFwiO1xyXG5cdFx0XHRcdHRkLnN0eWxlLnBhZGRpbmdSaWdodCA9IFwiNXB4XCI7XHJcblx0XHRcdFx0dHIuYXBwZW5kKHRkKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0YWJsZTEuYXBwZW5kKHRyKTtcclxuXHRcdH1cclxuXHRcdHRkMDMuYXBwZW5kKHRhYmxlMSk7XHJcblx0XHR0YWJsZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XHJcblx0XHR0YWJsZTEuY2xhc3NOYW1lID0gXCJtYXRyaXhcIjtcclxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBtYXRyaXgzLm07IGkrKykge1xyXG5cdFx0XHRsZXQgdHI6IEhUTUxUYWJsZVJvd0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcblx0XHRcdGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCBtYXRyaXgzLm47IGorKykge1xyXG5cdFx0XHRcdGxldCB0ZDogSFRNTFRhYmxlQ2VsbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcblx0XHRcdFx0dGQuaW5uZXJUZXh0ID0gbWF0cml4My5lbGVtZW50c1tpXVtqXS50b1N0cmluZygpO1xyXG5cdFx0XHRcdHRkLnN0eWxlLnBhZGRpbmdMZWZ0ID0gXCI1cHhcIjtcclxuXHRcdFx0XHR0ZC5zdHlsZS5wYWRkaW5nUmlnaHQgPSBcIjVweFwiO1xyXG5cdFx0XHRcdHRyLmFwcGVuZCh0ZCk7XHJcblx0XHRcdH1cclxuXHRcdFx0dGFibGUxLmFwcGVuZCh0cik7XHJcblx0XHR9XHJcblx0XHR0ZDA1LmFwcGVuZCh0YWJsZTEpO1xyXG5cdFx0dGFibGUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xyXG5cdFx0dGFibGUxLmNsYXNzTmFtZSA9IFwibWF0cml4XCI7XHJcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgbWF0cml4NC5tOyBpKyspIHtcclxuXHRcdFx0bGV0IHRyOiBIVE1MVGFibGVSb3dFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG5cdFx0XHRmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgbWF0cml4NC5uOyBqKyspIHtcclxuXHRcdFx0XHRsZXQgdGQ6IEhUTUxUYWJsZUNlbGxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG5cdFx0XHRcdHRkLmlubmVyVGV4dCA9IG1hdHJpeDQuZWxlbWVudHNbaV1bal0udG9TdHJpbmcoKTtcclxuXHRcdFx0XHR0ZC5zdHlsZS5wYWRkaW5nTGVmdCA9IFwiNXB4XCI7XHJcblx0XHRcdFx0dGQuc3R5bGUucGFkZGluZ1JpZ2h0ID0gXCI1cHhcIjtcclxuXHRcdFx0XHR0ci5hcHBlbmQodGQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRhYmxlMS5hcHBlbmQodHIpO1xyXG5cdFx0fVxyXG5cdFx0dGQwNy5hcHBlbmQodGFibGUxKTtcclxuXHRcdGNvbnRhaW5lci5hcHBlbmQodGFibGUpO1xyXG5cdFx0Y29udGFpbmVyLmFwcGVuZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIikpO1xyXG5cdH1cclxufSIsImltcG9ydCB7IFN5c3RlbU9mTGluZWFyRXF1YXRpb25zIH0gZnJvbSBcIi4uL3N0cnVjdHVyZXMvU3lzdGVtT2ZMaW5lYXJFcXVhdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTeXN0ZW1PZkxpbmVhckVxdWF0aW9uc1ByZXNlbnRlciB7XHJcblx0cHVibGljIHN0YXRpYyBwcmludFRhYmxlU3lzdGVtKHN5c3RlbU9mRXF1YXRpb25zOiBTeXN0ZW1PZkxpbmVhckVxdWF0aW9ucywgY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudCk6IHZvaWQge1xyXG5cdFx0Y29uc3QgdGFibGUwOiBIVE1MVGFibGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xyXG4gICAgICAgIHRhYmxlMC5jcmVhdGVUSGVhZCgpO1xyXG5cdFx0Y29uc3QgdHIwOiBIVE1MVGFibGVSb3dFbGVtZW50ID0gdGFibGUwLnRIZWFkLmluc2VydFJvdygtMSk7XHJcblx0XHR0YWJsZTAuYXBwZW5kQ2hpbGQodHIwKTtcclxuXHRcdGNvbnN0IHRkMDE6IEhUTUxUYWJsZUNlbGxFbGVtZW50ID0gdHIwLmluc2VydENlbGwoLTEpO1xyXG5cdFx0dHIwLmFwcGVuZENoaWxkKHRkMDEpO1xyXG5cdFx0Y29uc3QgdGQwMjogSFRNTFRhYmxlQ2VsbEVsZW1lbnQgPSB0cjAuaW5zZXJ0Q2VsbCgtMSk7XHJcblx0XHR0ZDAyLmlubmVyVGV4dCA9IFwiKlwiO1xyXG5cdFx0dGQwMi5zdHlsZS52ZXJ0aWNhbEFsaWduID0gXCJtaWRkbGVcIjtcclxuXHRcdHRkMDIuc3R5bGUucGFkZGluZ0xlZnQgPSBcIjVweFwiO1xyXG5cdFx0dGQwMi5zdHlsZS5wYWRkaW5nUmlnaHQgPSBcIjVweFwiO1xyXG5cdFx0dHIwLmFwcGVuZENoaWxkKHRkMDIpO1xyXG5cdFx0Y29uc3QgdGQwMzogSFRNTFRhYmxlQ2VsbEVsZW1lbnQgPSB0cjAuaW5zZXJ0Q2VsbCgtMSk7XHJcblx0XHR0cjAuYXBwZW5kQ2hpbGQodGQwMyk7XHJcblx0XHRjb25zdCB0ZDA0OiBIVE1MVGFibGVDZWxsRWxlbWVudCA9IHRyMC5pbnNlcnRDZWxsKC0xKTtcclxuXHRcdHRkMDQuaW5uZXJUZXh0ID0gXCI9XCI7XHJcblx0XHR0ZDA0LnN0eWxlLnZlcnRpY2FsQWxpZ24gPSBcIm1pZGRsZVwiO1xyXG5cdFx0dGQwNC5zdHlsZS5wYWRkaW5nTGVmdCA9IFwiNXB4XCI7XHJcblx0XHR0ZDA0LnN0eWxlLnBhZGRpbmdSaWdodCA9IFwiNXB4XCI7XHJcblx0XHR0cjAuYXBwZW5kQ2hpbGQodGQwNCk7XHJcblx0XHRjb25zdCB0ZDA1OiBIVE1MVGFibGVDZWxsRWxlbWVudCA9IHRyMC5pbnNlcnRDZWxsKC0xKTtcclxuXHRcdHRyMC5hcHBlbmRDaGlsZCh0ZDA1KTtcclxuXHRcdGxldCB0YWJsZTogSFRNTFRhYmxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcclxuXHRcdHRhYmxlLmNsYXNzTmFtZSA9IFwibWF0cml4XCI7XHJcbiAgICAgICAgdGFibGUuY3JlYXRlVEhlYWQoKTtcclxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBzeXN0ZW1PZkVxdWF0aW9ucy5BLm07IGkrKykge1xyXG5cdFx0XHRjb25zdCB0cjogSFRNTFRhYmxlUm93RWxlbWVudCA9IHRhYmxlLnRIZWFkLmluc2VydFJvdygtMSk7XHJcblx0XHRcdGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCBzeXN0ZW1PZkVxdWF0aW9ucy5BLm47IGorKykge1xyXG5cdFx0XHRcdGNvbnN0IHRkOiBIVE1MVGFibGVDZWxsRWxlbWVudCA9IHRyLmluc2VydENlbGwoLTEpO1xyXG5cdFx0XHRcdHRkLmlubmVyVGV4dCA9IHN5c3RlbU9mRXF1YXRpb25zLkEuZWxlbWVudHNbaV1bal0udG9TdHJpbmcoKTtcclxuXHRcdFx0XHR0ZC5zdHlsZS5wYWRkaW5nTGVmdCA9IFwiNXB4XCI7XHJcblx0XHRcdFx0dGQuc3R5bGUucGFkZGluZ1JpZ2h0ID0gXCI1cHhcIjtcclxuXHRcdFx0XHR0ci5hcHBlbmQodGQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRhYmxlLmFwcGVuZCh0cik7XHJcblx0XHR9XHJcblx0XHR0ZDAxLmFwcGVuZCh0YWJsZSk7XHJcblx0XHR0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcclxuXHRcdHRhYmxlLmNsYXNzTmFtZSA9IFwibWF0cml4XCI7XHJcblx0XHRmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgc3lzdGVtT2ZFcXVhdGlvbnMubm9WYXJpYWJsZXM7IGorKykge1xyXG5cdFx0XHRjb25zdCB0cjogSFRNTFRhYmxlUm93RWxlbWVudCA9IHRhYmxlLnRIZWFkLmluc2VydFJvdygtMSk7XHJcblx0XHRcdGNvbnN0IHRkOiBIVE1MVGFibGVDZWxsRWxlbWVudCA9IHRyLmluc2VydENlbGwoLTEpO1xyXG5cdFx0XHR0ZC5pbm5lclRleHQgPSBcInhcIjtcclxuXHRcdFx0dGQuc3R5bGUucGFkZGluZ0xlZnQgPSBcIjVweFwiO1xyXG5cdFx0XHR0ZC5zdHlsZS5wYWRkaW5nUmlnaHQgPSBcIjVweFwiO1xyXG5cdFx0XHRjb25zdCBzdWI6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN1YlwiKTtcclxuXHRcdFx0c3ViLmlubmVyVGV4dCA9IGoudG9TdHJpbmcoKTtcclxuXHRcdFx0dGQuYXBwZW5kQ2hpbGQoc3ViKTtcclxuXHRcdFx0dHIuYXBwZW5kKHRkKTtcclxuXHRcdFx0dGFibGUuYXBwZW5kKHRyKTtcclxuXHRcdH1cclxuXHRcdHRkMDMuYXBwZW5kKHRhYmxlKTtcclxuXHRcdHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xyXG5cdFx0dGFibGUuY2xhc3NOYW1lID0gXCJtYXRyaXhcIjtcclxuXHRcdGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCBzeXN0ZW1PZkVxdWF0aW9ucy5iLm07IGorKykge1xyXG5cdFx0XHRjb25zdCB0cjogSFRNTFRhYmxlUm93RWxlbWVudCA9IHRhYmxlLnRIZWFkLmluc2VydFJvdygtMSk7XHJcblx0XHRcdGNvbnN0IHRkOiBIVE1MVGFibGVDZWxsRWxlbWVudCA9IHRyLmluc2VydENlbGwoLTEpO1xyXG5cdFx0XHR0ZC5pbm5lclRleHQgPSBzeXN0ZW1PZkVxdWF0aW9ucy5iLmVsZW1lbnRzW2pdLnRvU3RyaW5nKCk7XHJcblx0XHRcdHRkLnN0eWxlLnBhZGRpbmdMZWZ0ID0gXCI1cHhcIjtcclxuXHRcdFx0dGQuc3R5bGUucGFkZGluZ1JpZ2h0ID0gXCI1cHhcIjtcclxuXHRcdFx0dHIuYXBwZW5kKHRkKTtcclxuXHRcdFx0dGFibGUuYXBwZW5kKHRyKTtcclxuXHRcdH1cclxuXHRcdHRkMDUuYXBwZW5kKHRhYmxlKTtcclxuXHRcdGNvbnRhaW5lci5hcHBlbmQodGFibGUwKTtcclxuXHRcdGNvbnRhaW5lci5hcHBlbmQoXCI8YnIgLz5cIik7XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7IFF1ZXVlIH0gZnJvbSBcIi4vUXVldWVcIjtcclxuaW1wb3J0IHsgUmF0aW9uYWxOdW1iZXIgfSBmcm9tIFwiLi9SYXRpb25hbE51bWJlclwiO1xyXG5pbXBvcnQgeyBTdGFjayB9IGZyb20gXCIuL1N0YWNrXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQXJpdGhtZXRpY0V2YWx1YXRvciB7XHJcblx0cHVibGljIHN0YXRpYyB0b1JldmVyc2VQb2xpc2hOb3RhdGlvbihjb2RlOiBzdHJpbmcpOiBzdHJpbmdbXSB7XHJcblx0XHRjb25zdCB0b2tlbnM6IHN0cmluZ1tdID0gY29kZS5tYXRjaCgvXFwofFxcKXxcXGQrKFxcLlxcZCspP3xcXHcrfFtcXCtcXC1cXCpcXC9cXF5dL2cpO1xyXG5cdFx0bGV0IGk6IG51bWJlciA9IDA7XHJcblx0XHRjb25zdCBvdXRwdXRRdWV1ZTogUXVldWU8c3RyaW5nPiA9IG5ldyBRdWV1ZTxzdHJpbmc+KCk7XHJcblx0XHRjb25zdCBvcGVyYXRvclN0YWNrOiBTdGFjazxzdHJpbmc+ID0gbmV3IFN0YWNrPHN0cmluZz4oKTtcclxuXHRcdHdoaWxlIChpIDwgdG9rZW5zLmxlbmd0aCkge1xyXG5cdFx0XHRpZiAodGhpcy5pc051bWJlcih0b2tlbnNbaV0pKSB7XHJcblx0XHRcdFx0b3V0cHV0UXVldWUuZW5xdWV1ZSh0b2tlbnNbaV0pO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMuaXNPcGVyYXRvcih0b2tlbnNbaV0pKSB7XHJcblx0XHRcdFx0bGV0IG9wMTogc3RyaW5nID0gdG9rZW5zW2ldO1xyXG5cdFx0XHRcdHdoaWxlICghb3BlcmF0b3JTdGFjay5pc0VtcHR5KCkgJiYgdGhpcy5pc09wZXJhdG9yKG9wZXJhdG9yU3RhY2sucGVlaygpKSkge1xyXG5cdFx0XHRcdFx0aWYgKCh0aGlzLmlzTGVmdEFzc29jaWF0aXZlT3BlcmF0b3Iob3AxKSAmJiAodGhpcy5wcmVjZWRlbmNlKG9wMSkgPD0gdGhpcy5wcmVjZWRlbmNlKG9wZXJhdG9yU3RhY2sucGVlaygpKSkpIHx8XHJcblx0XHRcdFx0XHRcdCh0aGlzLmlzUmlnaHRBc3NvY2lhdGl2ZU9wZXJhdG9yKG9wMSkgJiYgKHRoaXMucHJlY2VkZW5jZShvcDEpIDwgdGhpcy5wcmVjZWRlbmNlKG9wZXJhdG9yU3RhY2sucGVlaygpKSkpKSB7XHJcblx0XHRcdFx0XHRcdG91dHB1dFF1ZXVlLmVucXVldWUob3BlcmF0b3JTdGFjay5wb3AoKSk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0b3BlcmF0b3JTdGFjay5wdXNoKG9wMSk7XHJcblx0XHRcdH0gZWxzZSBpZiAodG9rZW5zW2ldID09PSBcIihcIikge1xyXG5cdFx0XHRcdG9wZXJhdG9yU3RhY2sucHVzaCh0b2tlbnNbaV0pO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHRva2Vuc1tpXSA9PT0gXCIpXCIpIHtcclxuXHRcdFx0XHR3aGlsZSAoIW9wZXJhdG9yU3RhY2suaXNFbXB0eSgpICYmIG9wZXJhdG9yU3RhY2sucGVlaygpICE9PSBcIihcIikge1xyXG5cdFx0XHRcdFx0b3V0cHV0UXVldWUuZW5xdWV1ZShvcGVyYXRvclN0YWNrLnBvcCgpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKCFvcGVyYXRvclN0YWNrLmlzRW1wdHkoKSAmJiBvcGVyYXRvclN0YWNrLnBlZWsoKSA9PT0gXCIoXCIpIHtcclxuXHRcdFx0XHRcdG9wZXJhdG9yU3RhY2sucG9wKCk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIk1pc21hdGNoZWQgcGFyZW50aGVzZXMuXCIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRpKys7XHJcblx0XHR9XHJcblx0XHR3aGlsZSAoIW9wZXJhdG9yU3RhY2suaXNFbXB0eSgpKSB7XHJcblx0XHRcdGlmIChvcGVyYXRvclN0YWNrLnBlZWsoKSA9PT0gXCIoXCIpIHtcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJNaXNtYXRjaGVkIHBhcmVudGhlc2VzLlwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRvdXRwdXRRdWV1ZS5lbnF1ZXVlKG9wZXJhdG9yU3RhY2sucG9wKCkpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gb3V0cHV0UXVldWUudG9BcnJheSgpO1xyXG5cdH1cclxuXHRwdWJsaWMgc3RhdGljIGV2YWx1YXRlRnJvbVJQTih0b2tlbnM6IHN0cmluZ1tdKTogbnVtYmVyIHtcclxuXHRcdGNvbnN0IHN0YWNrOiBTdGFjazxudW1iZXI+ID0gbmV3IFN0YWNrPG51bWJlcj4oKTtcclxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0aWYgKCF0aGlzLmlzT3BlcmF0b3IodG9rZW5zW2ldKSkge1xyXG5cdFx0XHRcdHN0YWNrLnB1c2gocGFyc2VGbG9hdCh0b2tlbnNbaV0pKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRsZXQgb3AxOiBudW1iZXIgPSBzdGFjay5wb3AoKTtcclxuXHRcdFx0XHRsZXQgb3AyOiBudW1iZXIgPSBzdGFjay5wb3AoKTtcclxuXHRcdFx0XHRzd2l0Y2ggKHRva2Vuc1tpXSkge1xyXG5cdFx0XHRcdFx0Y2FzZSBcIitcIjogc3RhY2sucHVzaChvcDIgKyBvcDEpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgXCItXCI6IHN0YWNrLnB1c2gob3AyIC0gb3AxKTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlIFwiKlwiOiBzdGFjay5wdXNoKG9wMiAqIG9wMSk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSBcIi9cIjogc3RhY2sucHVzaChvcDIgLyBvcDEpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgXCJeXCI6IHN0YWNrLnB1c2gob3AyICoqIG9wMSk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHN0YWNrLnBvcCgpO1xyXG5cdH1cclxuXHRwcml2YXRlIHN0YXRpYyBpc051bWJlcihjb2RlOiBzdHJpbmcpOiBib29sZWFuIHtcclxuXHRcdHJldHVybiAvXlxcZC8udGVzdChjb2RlKTtcclxuXHR9XHJcblx0cHJpdmF0ZSBzdGF0aWMgaXNPcGVyYXRvcihjb2RlOiBzdHJpbmcpOiBib29sZWFuIHtcclxuXHRcdHJldHVybiAvW1xcK1xcLVxcKlxcL1xcXl0vLnRlc3QoY29kZSk7XHJcblx0fVxyXG5cdHByaXZhdGUgc3RhdGljIGlzTGVmdEFzc29jaWF0aXZlT3BlcmF0b3Iob3BlcmF0b3I6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG5cdFx0cmV0dXJuIC9bXFwrXFwtXFwqXFwvXS8udGVzdChvcGVyYXRvcik7XHJcblx0fVxyXG5cdHByaXZhdGUgc3RhdGljIGlzUmlnaHRBc3NvY2lhdGl2ZU9wZXJhdG9yKG9wZXJhdG9yOiBzdHJpbmcpOiBib29sZWFuIHtcclxuXHRcdHJldHVybiAvW1xcXl0vLnRlc3Qob3BlcmF0b3IpO1xyXG5cdH1cclxuXHRwcml2YXRlIHN0YXRpYyBwcmVjZWRlbmNlKG9wZXJhdG9yOiBzdHJpbmcpOiBudW1iZXIge1xyXG5cdFx0aWYgKC9bXFwrXFwtXS8udGVzdChvcGVyYXRvcikpIHtcclxuXHRcdFx0IHJldHVybiAxO1xyXG5cdFx0fVxyXG5cdFx0aWYgKC9bXFwqXFwvXS8udGVzdChvcGVyYXRvcikpIHtcclxuXHRcdFx0IHJldHVybiAyO1xyXG5cdFx0fVxyXG5cdFx0aWYgKC9bXFxeXS8udGVzdChvcGVyYXRvcikpIHtcclxuXHRcdFx0IHJldHVybiAzO1xyXG5cdFx0fVxyXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiVW5rbm93biBvcGVyYXRvci5cIik7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZW51bSBUb2tlblR5cGUgeyBQbHVzLCBNaW51cywgTXVsdGlwbHksIERpdmlkZSwgRXhwb25lbnQsIE51bWJlciwgTFBhcmVuLCBSUGFyZW4sIEVuZCwgVW5rbm93biB9XHJcbmV4cG9ydCBjbGFzcyBUb2tlbiB7XHJcblx0cHVibGljIHR5cGU6IFRva2VuVHlwZTtcclxuXHRwdWJsaWMgdmFsdWU6IG51bWJlcjtcclxuXHRjb25zdHJ1Y3Rvcih0eXBlOiBUb2tlblR5cGUsIHZhbHVlPzogbnVtYmVyKSB7XHJcblx0XHR0aGlzLnR5cGUgPSB0eXBlO1xyXG5cdFx0dGhpcy52YWx1ZSA9IHZhbHVlO1xyXG5cdH1cclxufVxyXG5leHBvcnQgY2xhc3MgTGV4ZXIge1xyXG5cdHByaXZhdGUgdG9rZW5zOiBzdHJpbmdbXTtcclxuXHRwcml2YXRlIHRva2VuSW5kZXg6IG51bWJlcjtcclxuXHRjb25zdHJ1Y3RvcihpbnB1dDogc3RyaW5nKSB7XHJcblx0XHR0aGlzLnRva2VucyA9IGlucHV0LnJlcGxhY2UoXCIgXCIsIFwiXCIpLm1hdGNoKC9cXCh8XFwpfFxcZCsoXFwuXFxkKyk/fFtcXCtcXC1cXCpcXC9cXF5dL2cpO1xyXG5cdFx0dGhpcy50b2tlbkluZGV4ID0gMDtcclxuXHR9XHJcblx0cHVibGljIGdldE5leHRUb2tlbigpOiBUb2tlbiB7XHJcblx0XHRpZiAodGhpcy50b2tlbnMubGVuZ3RoID09PSB0aGlzLnRva2VuSW5kZXgpIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBUb2tlbihUb2tlblR5cGUuRW5kKTtcclxuXHRcdH1cclxuXHRcdGxldCBpbnB1dDogc3RyaW5nID0gdGhpcy50b2tlbnNbdGhpcy50b2tlbkluZGV4KytdO1xyXG5cdFx0cmV0dXJuIHRoaXMuZ2V0VG9rZW4oaW5wdXQpO1xyXG5cdH1cclxuXHRwdWJsaWMgZ2V0Q3VycmVudFRva2VuKCk6IFRva2VuIHtcclxuXHRcdGlmICh0aGlzLnRva2Vucy5sZW5ndGggLSAxID09PSB0aGlzLnRva2VuSW5kZXgpIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBUb2tlbihUb2tlblR5cGUuRW5kKTtcclxuXHRcdH1cclxuXHRcdGxldCBpbnB1dDogc3RyaW5nID0gdGhpcy50b2tlbnNbdGhpcy50b2tlbkluZGV4XTtcclxuXHRcdHJldHVybiB0aGlzLmdldFRva2VuKGlucHV0KTtcclxuXHR9XHJcblx0cHVibGljIHJldmVydCgpOiB2b2lkIHtcclxuXHRcdGlmICh0aGlzLnRva2VuSW5kZXggPD0gMCkgeyB0aHJvdyBFcnJvcihcIkluZGV4IG91dCBvZiByYW5nZVwiKTsgfVxyXG5cdFx0dGhpcy50b2tlbkluZGV4LS07XHJcblx0fVxyXG5cdHByaXZhdGUgZ2V0VG9rZW4oaW5wdXQ6IHN0cmluZyk6IFRva2VuIHtcclxuXHRcdGlmICgvXFwrLy50ZXN0KGlucHV0KSkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IFRva2VuKFRva2VuVHlwZS5QbHVzKTtcclxuXHRcdH1cclxuXHRcdGlmICgvXFwtLy50ZXN0KGlucHV0KSkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IFRva2VuKFRva2VuVHlwZS5NaW51cyk7XHJcblx0XHR9XHJcblx0XHRpZiAoL1xcKi8udGVzdChpbnB1dCkpIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBUb2tlbihUb2tlblR5cGUuTXVsdGlwbHkpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKC9cXC8vLnRlc3QoaW5wdXQpKSB7XHJcblx0XHRcdHJldHVybiBuZXcgVG9rZW4oVG9rZW5UeXBlLkRpdmlkZSk7XHJcblx0XHR9XHJcblx0XHRpZiAoL1xcXi8udGVzdChpbnB1dCkpIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBUb2tlbihUb2tlblR5cGUuRXhwb25lbnQpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKC9cXGQrKFxcLlxcZCspPy8udGVzdChpbnB1dCkpIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBUb2tlbihUb2tlblR5cGUuTnVtYmVyLCBwYXJzZUZsb2F0KGlucHV0KSk7XHJcblx0XHR9XHJcblx0XHRpZiAoL1xcKC8udGVzdChpbnB1dCkpIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBUb2tlbihUb2tlblR5cGUuTFBhcmVuKTtcclxuXHRcdH1cclxuXHRcdGlmICgvXFwpLy50ZXN0KGlucHV0KSkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IFRva2VuKFRva2VuVHlwZS5SUGFyZW4pO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIG5ldyBUb2tlbihUb2tlblR5cGUuVW5rbm93bik7XHJcblx0fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBQYXJzZXIge1xyXG5cdHByaXZhdGUgbGV4OiBMZXhlcjtcclxuXHRwdWJsaWMgcGFyc2UoY29kZTogc3RyaW5nKTogUmF0aW9uYWxOdW1iZXIge1xyXG5cdFx0dGhpcy5sZXggPSBuZXcgTGV4ZXIoY29kZSk7XHJcblx0XHRjb25zdCBleHByZXNzaW9uOiBSYXRpb25hbE51bWJlciA9IHRoaXMuZm91cnRoT3JkZXJPcGVyYXRvcnMoKTtcclxuXHRcdGNvbnN0IHRva2VuOiBUb2tlbiA9IHRoaXMubGV4LmdldEN1cnJlbnRUb2tlbigpOyAvLyBpcyBhbHJlYWR5IGFkdmFuY2VkIGJlY2F1c2Ugb2YgbnVtYmVyKClcclxuXHRcdGlmICh0b2tlbi50eXBlID09PSBUb2tlblR5cGUuRW5kKSB7XHJcblx0XHRcdHJldHVybiBleHByZXNzaW9uO1xyXG5cdFx0fVxyXG5cdFx0dGhyb3cgRXJyb3IoXCJFbmQgZXhwZWN0ZWRcIik7XHJcblx0fVxyXG5cdC8vIGFkZGl0aW9uIGFuZCBzdWJzdHJhY3Rpb25cclxuXHRwcml2YXRlIGZvdXJ0aE9yZGVyT3BlcmF0b3JzKCk6IFJhdGlvbmFsTnVtYmVyIHtcclxuXHRcdGxldCBjb21wb25lbnQxOiBSYXRpb25hbE51bWJlciA9IHRoaXMudGhpcmRPcmRlck9wZXJhdG9ycygpO1xyXG5cdFx0bGV0IHRva2VuOiBUb2tlbiA9IHRoaXMubGV4LmdldE5leHRUb2tlbigpO1xyXG5cdFx0d2hpbGUgKHRva2VuLnR5cGUgPT09IFRva2VuVHlwZS5QbHVzIHx8IHRva2VuLnR5cGUgPT09IFRva2VuVHlwZS5NaW51cykge1xyXG5cdFx0XHRsZXQgY29tcG9uZW50MjogUmF0aW9uYWxOdW1iZXIgPSB0aGlzLnRoaXJkT3JkZXJPcGVyYXRvcnMoKTtcclxuXHRcdFx0aWYgKHRva2VuLnR5cGUgPT09IFRva2VuVHlwZS5QbHVzKSB7XHJcblx0XHRcdFx0Y29tcG9uZW50MSA9IGNvbXBvbmVudDEuYWRkKGNvbXBvbmVudDIpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHRva2VuLnR5cGUgPT09IFRva2VuVHlwZS5NaW51cykge1xyXG5cdFx0XHRcdGNvbXBvbmVudDEgPSBjb21wb25lbnQxLnN1Yihjb21wb25lbnQyKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0b2tlbiA9IHRoaXMubGV4LmdldE5leHRUb2tlbigpO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5sZXgucmV2ZXJ0KCk7XHJcblx0XHRyZXR1cm4gY29tcG9uZW50MTtcclxuXHR9XHJcblx0Ly8gbXVsdGlwbGljYXRpb24gYW5kIGRpdmlzaW9uXHJcblx0cHJpdmF0ZSB0aGlyZE9yZGVyT3BlcmF0b3JzKCk6IFJhdGlvbmFsTnVtYmVyIHtcclxuXHRcdGxldCBmYWN0b3IxOiBSYXRpb25hbE51bWJlciA9IHRoaXMuc2Vjb25kT3JkZXJPcGVyYXRvcnMoKTtcclxuXHRcdGxldCB0b2tlbjogVG9rZW4gPSB0aGlzLmxleC5nZXROZXh0VG9rZW4oKTtcclxuXHRcdHdoaWxlICh0b2tlbi50eXBlID09PSBUb2tlblR5cGUuTXVsdGlwbHkgfHwgdG9rZW4udHlwZSA9PT0gVG9rZW5UeXBlLkRpdmlkZSkge1xyXG5cdFx0XHRsZXQgZmFjdG9yMjogUmF0aW9uYWxOdW1iZXIgPSB0aGlzLnNlY29uZE9yZGVyT3BlcmF0b3JzKCk7XHJcblx0XHRcdGlmICh0b2tlbi50eXBlID09PSBUb2tlblR5cGUuTXVsdGlwbHkpIHtcclxuXHRcdFx0XHRmYWN0b3IxID0gZmFjdG9yMS5tdWx0KGZhY3RvcjIpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHRva2VuLnR5cGUgPT09IFRva2VuVHlwZS5EaXZpZGUpIHtcclxuXHRcdFx0XHRmYWN0b3IxID0gZmFjdG9yMS5kaXYoZmFjdG9yMik7XHJcblx0XHRcdH1cclxuXHRcdFx0dG9rZW4gPSB0aGlzLmxleC5nZXROZXh0VG9rZW4oKTtcclxuXHRcdH1cclxuXHRcdHRoaXMubGV4LnJldmVydCgpO1xyXG5cdFx0cmV0dXJuIGZhY3RvcjE7XHJcblx0fVxyXG5cdC8vIGV4cG9uZW50cyBhbmQgcm9vdHNcclxuXHRwcml2YXRlIHNlY29uZE9yZGVyT3BlcmF0b3JzKCk6IFJhdGlvbmFsTnVtYmVyIHtcclxuXHRcdGxldCBmYWN0b3IxOiBSYXRpb25hbE51bWJlciA9IHRoaXMuZmlyc3RPcmRlck9wZXJhdG9ycygpO1xyXG5cdFx0bGV0IHRva2VuOiBUb2tlbiA9IHRoaXMubGV4LmdldE5leHRUb2tlbigpO1xyXG5cdFx0d2hpbGUgKHRva2VuLnR5cGUgPT09IFRva2VuVHlwZS5FeHBvbmVudCkge1xyXG5cdFx0XHRsZXQgZmFjdG9yMjogUmF0aW9uYWxOdW1iZXIgPSB0aGlzLmZpcnN0T3JkZXJPcGVyYXRvcnMoKTtcclxuXHRcdFx0ZmFjdG9yMSA9IGZhY3RvcjEuZXhwKGZhY3RvcjIpO1xyXG5cdFx0XHR0b2tlbiA9IHRoaXMubGV4LmdldE5leHRUb2tlbigpO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5sZXgucmV2ZXJ0KCk7XHJcblx0XHRyZXR1cm4gZmFjdG9yMTtcclxuXHR9XHJcblx0Ly8gbnVtYmVycyBhbmQgcGFyYW50aGVzZXNcclxuXHRwcml2YXRlIGZpcnN0T3JkZXJPcGVyYXRvcnMoKTogUmF0aW9uYWxOdW1iZXIge1xyXG5cdFx0bGV0IHZhbHVlOiBSYXRpb25hbE51bWJlciA9IG5ldyBSYXRpb25hbE51bWJlcigxKTtcclxuXHRcdGxldCB0b2tlbjogVG9rZW4gPSB0aGlzLmxleC5nZXROZXh0VG9rZW4oKTtcclxuXHRcdGlmICh0b2tlbi50eXBlID09PSBUb2tlblR5cGUuUGx1cyB8fCB0b2tlbi50eXBlID09PSBUb2tlblR5cGUuTWludXMpIHtcclxuXHRcdFx0aWYgKHRva2VuLnR5cGUgPT09IFRva2VuVHlwZS5NaW51cykge1xyXG5cdFx0XHRcdHZhbHVlID0gdmFsdWUubXVsdCgtMSk7XHJcblx0XHRcdH1cclxuXHRcdFx0dG9rZW4gPSB0aGlzLmxleC5nZXROZXh0VG9rZW4oKTtcclxuXHRcdH1cclxuXHRcdGlmICh0b2tlbi50eXBlID09PSBUb2tlblR5cGUuTFBhcmVuKSB7XHJcblx0XHRcdHZhbHVlID0gdmFsdWUubXVsdCh0aGlzLmZvdXJ0aE9yZGVyT3BlcmF0b3JzKCkpO1xyXG5cdFx0XHR0b2tlbiA9IHRoaXMubGV4LmdldE5leHRUb2tlbigpO1xyXG5cdFx0XHRpZiAodG9rZW4udHlwZSAhPT0gVG9rZW5UeXBlLlJQYXJlbikge1xyXG5cdFx0XHRcdHRocm93IEVycm9yKFwiVW5iYWxhbmNlZCBwYXJlbnRoZXNpc1wiKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKHRva2VuLnR5cGUgPT09IFRva2VuVHlwZS5OdW1iZXIpIHtcclxuXHRcdFx0XHR2YWx1ZSA9IHZhbHVlLm11bHQodG9rZW4udmFsdWUpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRocm93IEVycm9yKFwiTm90IGEgbnVtYmVyXCIpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdmFsdWU7XHJcblx0fVxyXG59XHJcblxyXG4vKlxyXG5cdHB1YmxpYyBzdGF0aWMgZXZhbHVhdGUoZXhwcmVzaW9uOiBzdHJpbmcpOiBSYXRpb25hbE51bWJlciB7XHJcblx0dmFyIGRpZ2l0UGF0dGVybiA9IG5ldyBSZWdFeHAoJzAgfCAxIHwgMiB8IDMgfCA0IHwgNSB8IDYgfCA3IHwgOCB8IDknKTtcclxuXHR2YXIgc2lnblBhdHRlcm4gPSBuZXcgUmVnRXhwKCdcXCt8XFwtJyk7XHJcblx0dmFyIG51bWJlclBhdHRlcm4gPSBuZXcgUmVnRXhwKCdbJyArIHNpZ25QYXR0ZXJuICsgJ10nICsgJ3snICsgZGlnaXRQYXR0ZXJuICsgJ30nKTtcclxuXHR2YXIgZmFjdG9yUGF0dGVybiA9IG5ldyBSZWdFeHAobnVtYmVyUGF0dGVybiArICd8XFwoJyArIGV4cHJlc3Npb25QYXR0ZXJuICsgJ1xcKScpO1xyXG5cdHZhciBjb21wb25lbnRQYXR0ZXJuID0gbmV3IFJlZ0V4cChmYWN0b3JQYXR0ZXJuICsgJ1t7KCBcXCogfCBcXC8gKScgKyBmYWN0b3JQYXR0ZXJuICsgJ31dJyk7XHJcblx0dmFyIGV4cHJlc3Npb25QYXR0ZXJuID0gbmV3IFJlZ0V4cChjb21wb25lbnRQYXR0ZXJuICsgJ1t7KCBcXCsgfCBcXC0pJyArIGNvbXBvbmVudFBhdHRlcm4gKyAnfV0nKTtcclxufSovXHJcblxyXG4vKlxyXG5leHBycjogNHRoT1JERVIrO1xyXG40dGhPUkRFUjogY29tcG9uZW50MT0zcmRPUkRFUiAoKFBMVVN8TUlOVVMpIGNvbXBvbmVudDI9M3JkT1JERVIpKztcclxuM3JkT1JERVI6IGZhY3RvcjE9Mk5ET1JERVIgKChNVUxUSVBMWXxESVZJREUpIGZhY3RvcjE9Mm5kT1JERVIpK1xyXG4ybmRPUkRFUjogZmFjdG9yMT0xc3RPUkRFUiAoRVhQT05FTlQgZmFjdG9yMj0xc3RPUkRFUikrXHJcbjFzdE9SREVSOiAoUExVU3xNSU5VU3xlbXB0eSkgKExQQVJFTiB2YWx1ZT00dGhPUkRFUiBSUEFSRU58IE5VTUJFUilcclxuKi8iLCJpbXBvcnQgeyBSYXRpb25hbE51bWJlciB9IGZyb20gXCIuL1JhdGlvbmFsTnVtYmVyXCI7XHJcbmltcG9ydCB7IENvbHVtblZlY3RvciwgVmVjdG9yIH0gZnJvbSBcIi4vVmVjdG9yXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTWF0cml4IHtcclxuXHRwdWJsaWMgc3RhdGljIGF1Z21lbnQoQTogTWF0cml4LCBCOiBNYXRyaXggfCBWZWN0b3IpOiBNYXRyaXgge1xyXG5cdFx0aWYgKEEubSAhPT0gQi5tKSB7IHRocm93IG5ldyBFcnJvcihcIlRoZSB0d28gbWF0cmljZXMgKHZlY3RvcikgbXVzdCBoYXZlIHRoZSBzYW1lIG51bWJlciBvZiByb3dzIChlbGVtZW50cykuXCIpOyB9XHJcblx0XHRsZXQgcmV0OiBNYXRyaXggPSBudWxsO1xyXG5cdFx0aWYgKEIgaW5zdGFuY2VvZiBNYXRyaXgpIHtcclxuXHRcdFx0cmV0ID0gbmV3IE1hdHJpeChBLm0sIEIubiArIEEubik7XHJcblx0XHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBBLm07IGkrKykge1xyXG5cdFx0XHRcdGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCBBLm47IGorKykge1xyXG5cdFx0XHRcdFx0cmV0LmVsZW1lbnRzW2ldW2pdID0gQS5lbGVtZW50c1tpXVtqXTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IEIubTsgaSsrKSB7XHJcblx0XHRcdFx0Zm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IEIubjsgaisrKSB7XHJcblx0XHRcdFx0XHRyZXQuZWxlbWVudHNbaV1bQS5uICsgal0gPSBCLmVsZW1lbnRzW2ldW2pdO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKEIgaW5zdGFuY2VvZiBWZWN0b3IpIHtcclxuXHRcdFx0XHRyZXQgPSBuZXcgTWF0cml4KEEubSwgQS5uICsgMSk7XHJcblx0XHRcdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IEEubTsgaSsrKSB7XHJcblx0XHRcdFx0XHRmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgQS5uOyBqKyspIHtcclxuXHRcdFx0XHRcdFx0cmV0LmVsZW1lbnRzW2ldW2pdID0gQS5lbGVtZW50c1tpXVtqXTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Zm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IEIubTsgaisrKSB7XHJcblx0XHRcdFx0XHRyZXQuZWxlbWVudHNbal1bQS5uXSA9IEIuZWxlbWVudHNbal07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmV0O1xyXG5cdH1cclxuXHQvLyByb3ctbXVsdGlwbHlpbmcgdHJhbnNmb3JtYXRpb25zXHJcblx0cHVibGljIHN0YXRpYyBtdWx0aXBsaWNhdGlvbihuOiBudW1iZXIsIHJvdzE6IG51bWJlciwgcm93MjogbnVtYmVyLCBtdWx0OiBudW1iZXIpOiBNYXRyaXgge1xyXG5cdFx0aWYgKG4gPCByb3cxIHx8IG4gPCByb3cyKSB7IHRocm93IG5ldyBFcnJvcihcIkNvbHVtbiBpbmRleCBtdXN0IGJlIGxlc3Mgb3IgZXF1YWx0IHRoYW4gbWF0cml4IHNpemUuXCIpOyB9XHJcblx0XHRjb25zdCBtYXRyaXg6IE1hdHJpeCA9IG5ldyBNYXRyaXhJZGVudGl0eShuKTtcclxuXHRcdG1hdHJpeC5lbGVtZW50c1tyb3cxXVtyb3cyXSA9IG5ldyBSYXRpb25hbE51bWJlcihtdWx0KTtcclxuXHRcdHJldHVybiBtYXRyaXg7XHJcblx0fVxyXG5cdHB1YmxpYyBzdGF0aWMgcmFuZG9tU3F1YXJlKCk6IE1hdHJpeCB7XHJcblx0XHRjb25zdCBtYXRyaXg6IE1hdHJpeCA9IG5ldyBNYXRyaXgoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCkgKyAzLCBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0KSArIDMpOyAvLyBtaW5pbXVtIHNpemUgM3gzIG1hdHJpeFxyXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IG1hdHJpeC5tOyBpKyspIHtcclxuXHRcdFx0Zm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IG1hdHJpeC5uOyBqKyspIHtcclxuXHRcdFx0XHRtYXRyaXguZWxlbWVudHNbaV1bal0gPSBuZXcgUmF0aW9uYWxOdW1iZXIoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwIC0gNTApKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIG1hdHJpeDtcclxuXHR9XHJcblx0cHVibGljIHN0YXRpYyByYW5kb20yKCk6IE1hdHJpeCB7XHJcblx0XHRjb25zdCBudW1iZXJPZlVua25vd25zOiBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0ICsgMyk7IC8vIGJldHdlZW4gMyBhbmQgNyB1bmtub253c1xyXG5cdFx0Y29uc3QgdW5rbm93bnM6IG51bWJlcltdID0gW107XHJcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgbnVtYmVyT2ZVbmtub3duczsgaSsrKSB7XHJcblx0XHRcdHVua25vd25zW2ldID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjAgLSAxMCk7XHJcblx0XHR9XHJcblx0XHQvLyB0b2RvOiBjaGFuZ2UgYmVsb3dcclxuXHRcdGNvbnN0IG1hdHJpeDogTWF0cml4ID0gbmV3IE1hdHJpeChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0KSArIDMsIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQpICsgMyk7XHJcblx0XHRyZXR1cm4gbWF0cml4O1xyXG5cdH1cclxuXHRwdWJsaWMgbTogbnVtYmVyOyAvLyByb3dzXHJcblx0cHVibGljIG46IG51bWJlcjsgLy8gY29sdW1uc1xyXG5cdHB1YmxpYyBlbGVtZW50czogUmF0aW9uYWxOdW1iZXJbXVtdO1xyXG5cdGNvbnN0cnVjdG9yKG06IG51bWJlciwgbjogbnVtYmVyKSB7XHJcblx0XHR0aGlzLm0gPSBtO1xyXG5cdFx0dGhpcy5uID0gbjtcclxuXHRcdHRoaXMuZWxlbWVudHMgPSBbXTtcclxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLm07IGkrKykge1xyXG5cdFx0XHR0aGlzLmVsZW1lbnRzW2ldID0gW107XHJcblx0XHR9XHJcblx0fVxyXG5cdHB1YmxpYyBlcXVhbHMoTTogTWF0cml4KTogYm9vbGVhbiB7XHJcblx0XHRpZiAodGhpcy5tICE9PSBNLm0gfHwgdGhpcy5uICE9PSBNLm4pIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMubTsgaSsrKSB7XHJcblx0XHRcdGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCB0aGlzLm47IGorKykge1xyXG5cdFx0XHRcdGlmICghdGhpcy5lbGVtZW50c1tpXVtqXS5lcXVhbHMoTS5lbGVtZW50c1tpXVtqXSkpIHsgcmV0dXJuIGZhbHNlOyB9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHRwdWJsaWMgYWRkKHg6IE1hdHJpeCk6IE1hdHJpeCB7XHJcblx0XHRpZiAodGhpcy5tICE9PSB4Lm0gfHwgdGhpcy5uICE9PSB4Lm4pIHsgdGhyb3cgbmV3IEVycm9yKFwiTWlzbWF0Y2hlZCBkaW1lbnNpb25zLlwiKTsgfVxyXG5cdFx0Y29uc3QgcmVzOiBNYXRyaXggPSBuZXcgTWF0cml4KHRoaXMubSwgdGhpcy5uKTtcclxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCByZXMubTsgaSsrKSB7XHJcblx0XHRcdGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCByZXMubjsgaisrKSB7XHJcblx0XHRcdFx0cmVzLmVsZW1lbnRzW2ldW2pdID0gdGhpcy5lbGVtZW50c1tpXVtqXS5hZGQoeC5lbGVtZW50c1tpXVtqXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXM7XHJcblx0fVxyXG5cdHB1YmxpYyBzdWIoeDogTWF0cml4KTogTWF0cml4IHtcclxuXHRcdGlmICh0aGlzLm0gIT09IHgubSB8fCB0aGlzLm4gIT09IHgubikgeyB0aHJvdyBuZXcgRXJyb3IoXCJNaXNtYXRjaGVkIGRpbWVuc2lvbnMuXCIpOyB9XHJcblx0XHRjb25zdCByZXM6IE1hdHJpeCA9IG5ldyBNYXRyaXgodGhpcy5tLCB0aGlzLm4pO1xyXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHJlcy5tOyBpKyspIHtcclxuXHRcdFx0Zm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IHJlcy5uOyBqKyspIHtcclxuXHRcdFx0XHRyZXMuZWxlbWVudHNbaV1bal0gPSB0aGlzLmVsZW1lbnRzW2ldW2pdLnN1Yih4LmVsZW1lbnRzW2ldW2pdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlcztcclxuXHR9XHJcblx0cHVibGljIG11bHQoeDogbnVtYmVyIHwgUmF0aW9uYWxOdW1iZXIgfCBNYXRyaXgpOiBNYXRyaXgge1xyXG5cdFx0bGV0IHJlczogTWF0cml4ID0gbnVsbDtcclxuXHRcdGlmICh0eXBlb2YgeCA9PT0gXCJudW1iZXJcIikge1xyXG5cdFx0XHRyZXMgPSBuZXcgTWF0cml4KHRoaXMubSwgdGhpcy5uKTtcclxuXHRcdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHJlcy5tOyBpKyspIHtcclxuXHRcdFx0XHRmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgcmVzLm47IGorKykge1xyXG5cdFx0XHRcdFx0cmVzLmVsZW1lbnRzW2ldW2pdID0gdGhpcy5lbGVtZW50c1tpXVtqXS5tdWx0KHgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIGlmICh4IGluc3RhbmNlb2YgUmF0aW9uYWxOdW1iZXIpIHtcclxuXHRcdFx0cmVzID0gbmV3IE1hdHJpeCh0aGlzLm0sIHRoaXMubik7XHJcblx0XHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCByZXMubTsgaSsrKSB7XHJcblx0XHRcdFx0Zm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IHJlcy5uOyBqKyspIHtcclxuXHRcdFx0XHRcdHJlcy5lbGVtZW50c1tpXVtqXSA9IHRoaXMuZWxlbWVudHNbaV1bal0ubXVsdCh4KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmICh4IGluc3RhbmNlb2YgTWF0cml4KSB7XHJcblx0XHRcdFx0aWYgKHRoaXMubiAhPT0geC5tKSB7IHRocm93IG5ldyBFcnJvcihcIk1pc21hdGNoZWQgZGltZW5zaW9ucy5cIik7IH1cclxuXHRcdFx0XHRyZXMgPSBuZXcgTWF0cml4KHRoaXMubSwgeC5uKTtcclxuXHRcdFx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgcmVzLm07IGkrKykge1xyXG5cdFx0XHRcdFx0Zm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IHJlcy5uOyBqKyspIHtcclxuXHRcdFx0XHRcdFx0bGV0IHN1bTogUmF0aW9uYWxOdW1iZXIgPSBuZXcgUmF0aW9uYWxOdW1iZXIoMCk7XHJcblx0XHRcdFx0XHRcdGZvciAobGV0IGs6IG51bWJlciA9IDA7IGsgPCB0aGlzLm47IGsrKykge1xyXG5cdFx0XHRcdFx0XHRcdHN1bSA9IHN1bS5hZGQodGhpcy5lbGVtZW50c1tpXVtrXS5tdWx0KHguZWxlbWVudHNba11bal0pKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRyZXMuZWxlbWVudHNbaV1bal0gPSBzdW07XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzO1xyXG5cdH1cclxuXHRwdWJsaWMgdmVjdG9yUHJvZHVjdCh2OiBDb2x1bW5WZWN0b3IpOiBDb2x1bW5WZWN0b3Ige1xyXG5cdFx0aWYgKHRoaXMubiAhPT0gdi5tKSB7IHRocm93IG5ldyBFcnJvcihcIk1pc21hdGNoZWQgZGltZW5zaW9ucy5cIik7IH1cclxuXHRcdGNvbnN0IHJlczogQ29sdW1uVmVjdG9yID0gbmV3IENvbHVtblZlY3Rvcih2Lm0pO1xyXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMubTsgaSsrKSB7XHJcblx0XHRcdGxldCBzdW06IFJhdGlvbmFsTnVtYmVyID0gbmV3IFJhdGlvbmFsTnVtYmVyKDApO1xyXG5cdFx0XHRmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgdGhpcy5uOyBqKyspIHtcclxuXHRcdFx0XHRzdW0gPSBzdW0uYWRkKHRoaXMuZWxlbWVudHNbaV1bal0ubXVsdCh2LmVsZW1lbnRzW2pdKSk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmVzLmVsZW1lbnRzW2ldID0gc3VtO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlcztcclxuXHR9XHJcblx0cHVibGljIHRyYW5zcG9zZSgpOiBNYXRyaXgge1xyXG5cdFx0Y29uc3QgcmV0OiBNYXRyaXggPSBuZXcgTWF0cml4KHRoaXMubiwgdGhpcy5tKTtcclxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLm07IGkrKykge1xyXG5cdFx0XHRmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgdGhpcy5uOyBqKyspIHtcclxuXHRcdFx0XHRyZXQuZWxlbWVudHNbal1baV0gPSB0aGlzLmVsZW1lbnRzW2ldW2pdO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmV0O1xyXG5cdH1cclxuXHRwdWJsaWMgZGVlcENvcHkoKTogTWF0cml4IHtcclxuXHRcdGNvbnN0IHJldDogTWF0cml4ID0gbmV3IE1hdHJpeCh0aGlzLm0sIHRoaXMubik7XHJcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5tOyBpKyspIHtcclxuXHRcdFx0Zm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IHRoaXMubjsgaisrKSB7XHJcblx0XHRcdFx0cmV0LmVsZW1lbnRzW2ldW2pdID0gdGhpcy5lbGVtZW50c1tpXVtqXTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJldDtcclxuXHR9XHJcblx0cHVibGljIHN3aXRjaFJvd3MoaWR4MTogbnVtYmVyLCBpZHgyOiBudW1iZXIpOiB2b2lkIHtcclxuXHRcdGlmICh0aGlzLm0gPCBpZHgxIHx8IHRoaXMubSA8IGlkeDIpIHsgcmV0dXJuOyB9XHJcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5uOyBpKyspIHtcclxuXHRcdFx0Y29uc3QgdG1wOiBSYXRpb25hbE51bWJlciA9IHRoaXMuZWxlbWVudHNbaWR4MV1baV07XHJcblx0XHRcdHRoaXMuZWxlbWVudHNbaWR4MV1baV0gPSB0aGlzLmVsZW1lbnRzW2lkeDJdW2ldO1xyXG5cdFx0XHR0aGlzLmVsZW1lbnRzW2lkeDJdW2ldID0gdG1wO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRwdWJsaWMgbXVsdGlwbHlSb3coaWR4OiBudW1iZXIsIHNjYWxhcjogUmF0aW9uYWxOdW1iZXIpOiB2b2lkIHtcclxuXHRcdGlmICh0aGlzLm0gPCBpZHgpIHsgcmV0dXJuOyB9XHJcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5uOyBpKyspIHtcclxuXHRcdFx0dGhpcy5lbGVtZW50c1tpZHhdW2ldID0gdGhpcy5lbGVtZW50c1tpZHhdW2ldLm11bHQoc2NhbGFyKS5zaW1wbGlmaWVkRm9ybSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRwdWJsaWMgYWRkUm93cyhpZHgxOiBudW1iZXIsIGlkeDI6IG51bWJlciwgc2NhbGFyOiBSYXRpb25hbE51bWJlcik6IHZvaWQge1xyXG5cdFx0aWYgKHRoaXMubSA8IGlkeDEgfHwgdGhpcy5tIDwgaWR4MikgeyByZXR1cm47IH1cclxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLm47IGkrKykge1xyXG5cdFx0XHR0aGlzLmVsZW1lbnRzW2lkeDFdW2ldID0gdGhpcy5lbGVtZW50c1tpZHgyXVtpXS5tdWx0KHNjYWxhcikuYWRkKHRoaXMuZWxlbWVudHNbaWR4MV1baV0pLnNpbXBsaWZpZWRGb3JtKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cdHB1YmxpYyBhZGRSb3cxVG9Sb3cyKGlkeDE6IG51bWJlciwgc2NhbGFyMTogUmF0aW9uYWxOdW1iZXIsIGlkeDI6IG51bWJlciwgc2NhbGFyMjogUmF0aW9uYWxOdW1iZXIpOiB2b2lkIHtcclxuXHRcdGlmICh0aGlzLm0gPCBpZHgxIHx8IHRoaXMubSA8IGlkeDIpIHsgcmV0dXJuOyB9XHJcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5uOyBpKyspIHtcclxuXHRcdFx0dGhpcy5lbGVtZW50c1tpZHgyXVtpXSA9IHRoaXMuZWxlbWVudHNbaWR4Ml1baV0ubXVsdChzY2FsYXIyKS5hZGQodGhpcy5lbGVtZW50c1tpZHgxXVtpXS5tdWx0KHNjYWxhcjEpKS5zaW1wbGlmaWVkRm9ybSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHQvLyBhIHNxdWFyZSBtYXRyaXggaXMgYSBtYXRyaXggd2l0aCB0aGUgc2FtZSBudW1iZXIgb2Ygcm93cyBhbmQgY29sdW1uc1xyXG5cdHB1YmxpYyBpc1NxdWFyZSgpOiBib29sZWFuIHtcclxuXHRcdHJldHVybiB0aGlzLm0gPT09IHRoaXMubjtcclxuXHR9XHJcblx0Ly8gYSBkaWFnb25hbCBtYXRyaXggaXMgYSBtYXRyaXggaW4gd2hpY2ggdGhlIGVudHJpZXMgb3V0c2lkZSB0aGUgbWFpbiBkaWFnb25hbCBhcmUgYWxsIHplcm9cclxuXHRwdWJsaWMgaXNEaWFnb25hbCgpOiBib29sZWFuIHtcclxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLm07IGkrKykge1xyXG5cdFx0XHRmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgdGhpcy5uOyBqKyspIHtcclxuXHRcdFx0XHRpZiAoaSA9PT0gaikge1xyXG5cdFx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmICghdGhpcy5lbGVtZW50c1tpXVtqXS5lcXVhbHMobmV3IFJhdGlvbmFsTnVtYmVyKDApKSkgeyByZXR1cm4gZmFsc2U7IH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cdC8vIHRoZSBpZGVudGl0eSBtYXRyaXggb2Ygc2l6ZSBuIGlzIHRoZSBuIMOXIG4gc3F1YXJlIG1hdHJpeCB3aXRoIG9uZXMgb24gdGhlIG1haW4gZGlhZ29uYWwgYW5kIHplcm9zIGVsc2V3aGVyZVxyXG5cdC8vIFtBTElBU0VTXTogdW5pdCBtYXRyaXhcclxuXHRwdWJsaWMgaXNJZGVudGl0eSgpOiBib29sZWFuIHtcclxuXHRcdGlmICh0aGlzLm0gIT09IHRoaXMubikgeyB0aHJvdyBuZXcgRXJyb3IoXCJOb3QgYSBzcXVhcmUgbWF0cml4LlwiKTsgfVxyXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMubTsgaSsrKSB7XHJcblx0XHRcdGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCB0aGlzLm47IGorKykge1xyXG5cdFx0XHRcdGlmIChpID09PSBqKSB7XHJcblx0XHRcdFx0XHRpZiAoIXRoaXMuZWxlbWVudHNbaV1bal0uZXF1YWxzKG5ldyBSYXRpb25hbE51bWJlcigxKSkpIHsgcmV0dXJuIGZhbHNlOyB9XHJcblx0XHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKCF0aGlzLmVsZW1lbnRzW2ldW2pdLmVxdWFscyhuZXcgUmF0aW9uYWxOdW1iZXIoMCkpKSB7IHJldHVybiBmYWxzZTsgfVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblx0Ly8gYSBtYXRyaXggaXMgbm9ybWFsIGlmIGl0IGNvbW11dGVzIHdpdGggaXRzIGNvbmp1Z2F0ZSB0cmFuc3Bvc2VcclxuXHRwdWJsaWMgaXNOb3JtYWwoKTogYm9vbGVhbiB7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJOb3QgaW1wbGVtZW50ZWRcIik7XHJcblx0fVxyXG5cdC8vIHRoZSBjb25qdWdhdGUgdHJhbnNwb3NlIG9mIGFuIG0tYnktbiBtYXRyaXggQSB3aXRoIGNvbXBsZXggZW50cmllcyBpcyB0aGUgbi1ieS1tIG1hdHJpeCBB4oiXIG9idGFpbmVkIGZyb20gQVxyXG5cdC8vIGJ5IHRha2luZyB0aGUgdHJhbnNwb3NlIGFuZCB0aGVuIHRha2luZyB0aGUgY29tcGxleCBjb25qdWdhdGUgb2YgZWFjaCBlbnRyeVxyXG5cdC8vIFtBTElBU0VTXTogSGVybWl0aWFuIHRyYW5zcG9zZVxyXG5cdHB1YmxpYyB0b0Nvbmp1Z2F0ZVRyYW5zcG9zZSgpOiBNYXRyaXgge1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiTm90IGltcGxlbWVudGVkXCIpO1xyXG5cdH1cclxuXHRwdWJsaWMgaXNVcHBlclRyaWFuZ3VsYXIoKTogYm9vbGVhbiB7XHJcblx0XHQvLyB0b2RvOiBjaGVjayBpZiBkZWZpbml0aW9uIGlzIHZhbGlkIGZvciBhIG5vbiBzcXVhcmUgbWF0cml4XHJcblx0XHQvLyBpZiAodGhpcy5tICE9PSB0aGlzLm4pIHsgdGhyb3cgbmV3IEVycm9yKFwiTm90IGEgc3F1YXJlIG1hdHJpeC5cIik7IH1cclxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDE7IGkgPCB0aGlzLm07IGkrKykge1xyXG5cdFx0XHRmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgaTsgaisrKSB7XHJcblx0XHRcdFx0aWYgKCF0aGlzLmVsZW1lbnRzW2ldW2pdLmVxdWFscyhuZXcgUmF0aW9uYWxOdW1iZXIoMCkpKSB7IHJldHVybiBmYWxzZTsgfVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblx0cHVibGljIGlzTG93ZXJUcmlhbmd1bGFyKCk6IGJvb2xlYW4ge1xyXG5cdFx0Ly8gdG9kbzogY2hlY2sgaWYgZGVmaW5pdGlvbiBpcyB2YWxpZCBmb3IgYSBub24gc3F1YXJlIG1hdHJpeFxyXG5cdFx0Ly8gaWYgKHRoaXMubSAhPT0gdGhpcy5uKSB7IHRocm93IG5ldyBFcnJvcihcIk5vdCBhIHNxdWFyZSBtYXRyaXguXCIpOyB9XHJcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5tOyBpKyspIHtcclxuXHRcdFx0Zm9yIChsZXQgajogbnVtYmVyID0gaSArIDE7IGogPCB0aGlzLm47IGorKykge1xyXG5cdFx0XHRcdGlmICghdGhpcy5lbGVtZW50c1tpXVtqXS5lcXVhbHMobmV3IFJhdGlvbmFsTnVtYmVyKDApKSkgeyByZXR1cm4gZmFsc2U7IH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cdC8vIGEgc3ltbWV0cmljIG1hdHJpeCBpcyBhIHNxdWFyZSBtYXRyaXggdGhhdCBpcyBlcXVhbCB0byBpdHMgdHJhbnNwb3NlXHJcblx0cHVibGljIGlzU3ltbWV0cmljKCk6IGJvb2xlYW4ge1xyXG5cdFx0aWYgKHRoaXMubSAhPT0gdGhpcy5uKSB7IHRocm93IG5ldyBFcnJvcihcIk5vdCBhIHNxdWFyZSBtYXRyaXguXCIpOyB9XHJcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5tOyBpKyspIHtcclxuXHRcdFx0Zm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IHRoaXMubjsgaisrKSB7XHJcblx0XHRcdFx0aWYgKCF0aGlzLmVsZW1lbnRzW2ldW2pdLmVxdWFscyh0aGlzLmVsZW1lbnRzW2pdW2ldKSkgeyByZXR1cm4gZmFsc2U7IH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cdC8vIGFuIG9ydGhvZ29uYWwgbWF0cml4IGlzIGEgc3F1YXJlIG1hdHJpeCB3aXRoIHJlYWwgZW50cmllcyB3aG9zZSBjb2x1bW5zIGFuZCByb3dzIGFyZSBvcnRob2dvbmFsIHVuaXQgdmVjdG9yc1xyXG5cdC8vIFtBTElBU0VTXTogcmVhbCBvcnRob2dvbmFsIG1hdHJpeFxyXG5cdHB1YmxpYyBpc09ydGhvZ29uYWwoKTogYm9vbGVhbiB7XHJcblx0XHRjb25zdCBNVDogTWF0cml4ID0gdGhpcy50cmFuc3Bvc2UoKTtcclxuXHRcdHJldHVybiB0aGlzLm11bHQoTVQpLmlzSWRlbnRpdHkoKTtcclxuXHR9XHJcblx0cHVibGljIGlzUm93RWNoZWxvbkZvcm0oKTogYm9vbGVhbiB7XHJcblx0XHRsZXQgZm91bmRaZXJvUm93OiBib29sZWFuID0gZmFsc2U7XHJcblx0XHQvLyBhbGwgbm9uemVybyByb3dzIChyb3dzIHdpdGggYXQgbGVhc3Qgb25lIG5vbnplcm8gZWxlbWVudCkgYXJlIGFib3ZlIGFueSByb3dzIG9mIGFsbCB6ZXJvZXNcclxuXHRcdC8vIChhbGwgemVybyByb3dzLCBpZiBhbnksIGJlbG9uZyBhdCB0aGUgYm90dG9tIG9mIHRoZSBtYXRyaXgpXHJcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5tOyBpKyspIHtcclxuXHRcdFx0aWYgKHRoaXMuaXNaZXJvUm93KGkpKSB7XHJcblx0XHRcdFx0Zm91bmRaZXJvUm93ID0gdHJ1ZTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRpZiAoZm91bmRaZXJvUm93KSB7IHJldHVybiBmYWxzZTsgfVxyXG5cdFx0XHR9Ly8gaWYgY3VycmVudCByb3cgaXMgbm90IHplcm8sIGJ1dCBhIHByZXZpb3VzIHJvdyBpcyB6ZXJvLCB0aGVuIG1hdHJpeCBpcyBub3QgaW4gcm93IGVjaGVsb24gZm9ybVxyXG5cdFx0fVxyXG5cdFx0Ly8gdGhlIGxlYWRpbmcgY29lZmZpY2llbnQgKHRoZSBmaXJzdCBub256ZXJvIG51bWJlciBmcm9tIHRoZSBsZWZ0LCBhbHNvIGNhbGxlZCB0aGUgcGl2b3QpIG9mIGEgbm9uemVybyByb3dcclxuXHRcdC8vIGlzIGFsd2F5cyBzdHJpY3RseSB0byB0aGUgcmlnaHQgb2YgdGhlIGxlYWRpbmcgY29lZmZpY2llbnQgb2YgdGhlIHJvdyBhYm92ZSBpdFxyXG5cdFx0bGV0IHByZXZpb3VzSWR4OiBudW1iZXIgPSAtMTtcclxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLm07IGkrKykge1xyXG5cdFx0XHRjb25zdCBjdXJyZW50UGl2b3RJZHg6IG51bWJlciA9IHRoaXMucm93UGl2b3RQb3NpdGlvbihpKTtcclxuXHRcdFx0aWYgKDAgPiBjdXJyZW50UGl2b3RJZHgpIHsgY29udGludWU7IH0vLyB0aGlzIGlzIGEgemVybyByb3csIG5vIHBpdm90XHJcblx0XHRcdC8vIGxlYWRpbmcgY29lZmZpY2llbnQgbXVzdCBiZSAxXHJcblx0XHRcdGlmICghdGhpcy5lbGVtZW50c1tpXVtjdXJyZW50UGl2b3RJZHhdLmVxdWFscyhuZXcgUmF0aW9uYWxOdW1iZXIoMSkpKSB7IHJldHVybiBmYWxzZTsgfVxyXG5cdFx0XHRpZiAocHJldmlvdXNJZHggPCBjdXJyZW50UGl2b3RJZHgpIHtcclxuXHRcdFx0XHRwcmV2aW91c0lkeCA9IGN1cnJlbnRQaXZvdElkeDtcclxuXHRcdFx0fSBlbHNlIHsgcmV0dXJuIGZhbHNlOyB9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblx0cHVibGljIGlzUmVkdWNlZFJvd0VjaGVsb25Gb3JtKCk6IGJvb2xlYW4ge1xyXG5cdFx0aWYgKCF0aGlzLmlzUm93RWNoZWxvbkZvcm0oKSkgeyByZXR1cm4gZmFsc2U7IH1cclxuXHRcdC8vIGVhY2ggbGVhZGluZyBjb2VmZmljaWVudCBpcyB0aGUgb25seSBub256ZXJvIGVudHJ5IGluIGl0cyBjb2x1bW5cclxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLm07IGkrKykge1xyXG5cdFx0XHRjb25zdCBwaXZvdFBvc2l0aW9uOiBudW1iZXIgPSB0aGlzLnJvd1Bpdm90UG9zaXRpb24oaSk7XHJcblx0XHRcdGlmICgxIDwgdGhpcy5udW1iZXJPZk5vblplcm9FbGVtZW50Rm9yQ29sdW1uKHBpdm90UG9zaXRpb24pKSB7IHJldHVybiBmYWxzZTsgfVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cdHB1YmxpYyB0b1JlZHVjZWRSb3dFY2hlbG9uRm9ybSgpOiBNYXRyaXgge1xyXG5cdFx0Y29uc3QgcmVzOiBNYXRyaXggPSB0aGlzLmRlZXBDb3B5KCk7XHJcblx0XHRsZXQgbGVhZDogbnVtYmVyID0gMDtcclxuXHRcdGZvciAobGV0IHI6IG51bWJlciA9IDA7IHIgPCByZXMubTsgcisrKSB7XHJcblx0XHRcdGlmIChyZXMubiA8PSBsZWFkKSB7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdFx0bGV0IGk6IG51bWJlciA9IHI7XHJcblx0XHRcdHdoaWxlIChyZXMuZWxlbWVudHNbaV1bbGVhZF0uZXF1YWxzKDApKSB7XHJcblx0XHRcdFx0aSsrO1xyXG5cdFx0XHRcdGlmIChyZXMubSA9PT0gaSkge1xyXG5cdFx0XHRcdFx0aSA9IHI7XHJcblx0XHRcdFx0XHRsZWFkKys7XHJcblx0XHRcdFx0XHRpZiAocmVzLm4gPT09IGxlYWQpIHtcclxuXHRcdFx0XHRcdFx0bGVhZC0tO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0cmVzLnN3aXRjaFJvd3MoaSwgcik7XHJcblx0XHRcdGlmICghcmVzLmVsZW1lbnRzW3JdW2xlYWRdLmVxdWFscygwKSkge1xyXG5cdFx0XHRcdHJlcy5tdWx0aXBseVJvdyhyLCByZXMuZWxlbWVudHNbcl1bbGVhZF0ucmVjaXByb2NhbCgpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgcmVzLm07IGorKykge1xyXG5cdFx0XHRcdGlmIChqICE9PSByKSB7XHJcblx0XHRcdFx0XHRyZXMuYWRkUm93cyhqLCByLCByZXMuZWxlbWVudHNbal1bbGVhZF0ub3Bwb3NpdGUoKSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGxlYWQrKztcclxuXHRcdH1cclxuXHRcdHJldHVybiByZXM7XHJcblx0fVxyXG5cdHB1YmxpYyBkZXRlcm1pbmFudCgpOiBSYXRpb25hbE51bWJlciB7XHJcblx0XHQvLyB0b2RvOiBpbXBsZW1lbnQgYW4gb3B0aW1pemVkIHZlcnNpb24sIGxpa2UgQT1QTFVcclxuXHRcdGlmICh0aGlzLm0gIT09IHRoaXMubikge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJEZXRlcm1pbmFudCBjYW4gb25seSBiZSBjYWxjdWxhdGVkIG9uIGEgc3F1YXJlIG1hdHJpeFwiKTtcclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLm0gPT09IDEpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuZWxlbWVudHNbMF1bMF07XHJcblx0XHR9XHJcblx0XHRsZXQgcmV0OiBSYXRpb25hbE51bWJlciA9IG5ldyBSYXRpb25hbE51bWJlcigwKTtcclxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLm47IGkrKykge1xyXG5cdFx0XHRjb25zdCBtaW5vcjogUmF0aW9uYWxOdW1iZXIgPSB0aGlzLmVsZW1lbnRzWzBdW2ldLm11bHQodGhpcy5jb2ZhY3RvcigwLCBpKS5kZXRlcm1pbmFudCgpKTtcclxuXHRcdFx0cmV0ID0gcmV0LmFkZChtaW5vci5tdWx0KCgtMSkgKiogaSkpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJldDtcclxuXHR9XHJcblx0cHVibGljIGNvbnZvbHV0ZShrZXJuZWw6IE1hdHJpeCk6IE1hdHJpeCB7XHJcblx0XHRpZiAoa2VybmVsLm0gIT09IGtlcm5lbC5uKSB7IHRocm93IG5ldyBFcnJvcihcIktlcm5lbCBpcyBub3QgYSBzcXVhcmUgbWF0cml4LlwiKTsgfVxyXG5cdFx0aWYgKGtlcm5lbC5tICUgMiA9PT0gMCkgeyB0aHJvdyBuZXcgRXJyb3IoXCJLZXJuZWwgaXMgbm90IGFuIGV2ZW4gc2l6ZSBtYXRyaXguXCIpOyB9XHJcblx0XHRjb25zdCBzeiA9IE1hdGguZmxvb3Ioa2VybmVsLm0gLyAyKTtcclxuXHRcdGNvbnN0IHJlczogTWF0cml4ID0gbmV3IE1hdHJpeCh0aGlzLm0sIHRoaXMubik7XHJcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5tOyBpKyspIHtcclxuXHRcdFx0Zm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IHRoaXMubjsgaisrKSB7XHJcblx0XHRcdFx0cmVzLmVsZW1lbnRzW2ldW2pdID0gbmV3IFJhdGlvbmFsTnVtYmVyKDApO1xyXG5cdFx0XHRcdGZvciAobGV0IHRpOiBudW1iZXIgPSAwOyB0aSA8IGtlcm5lbC5tOyB0aSsrKSB7XHJcblx0XHRcdFx0XHRpZiAoaSArIHRpIC0gc3ogPCAwIHx8IGkgKyB0aSAtIHN6ID49IHRoaXMubSkge1xyXG5cdFx0XHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGZvciAobGV0IHRqOiBudW1iZXIgPSAwOyB0aiA8IGtlcm5lbC5uOyB0aisrKSB7XHJcblx0XHRcdFx0XHRcdGlmIChqICsgdGogLSBzeiA8IDAgfHwgaiArIHRqIC0gc3ogPj0gdGhpcy5uKSB7XHJcblx0XHRcdFx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0cmVzLmVsZW1lbnRzW2ldW2pdID0gcmVzLmVsZW1lbnRzW2ldW2pdLmFkZCh0aGlzLmVsZW1lbnRzW2kgKyB0aSAtIHN6XVtqICsgdGogLSBzel0ubXVsdChrZXJuZWwuZWxlbWVudHNbdGldW3RqXSkpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlcztcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgaXNaZXJvUm93KHJvd0lkOiBudW1iZXIpOiBib29sZWFuIHtcclxuXHRcdGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCB0aGlzLm47IGorKykge1xyXG5cdFx0XHRpZiAoIXRoaXMuZWxlbWVudHNbcm93SWRdW2pdLmVxdWFscyhuZXcgUmF0aW9uYWxOdW1iZXIoMCkpKSB7IHJldHVybiBmYWxzZTsgfVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cdHByaXZhdGUgcm93UGl2b3RQb3NpdGlvbihyb3dJZDogbnVtYmVyKTogbnVtYmVyIHtcclxuXHRcdGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCB0aGlzLm47IGorKykge1xyXG5cdFx0XHRpZiAoIXRoaXMuZWxlbWVudHNbcm93SWRdW2pdLmVxdWFscyhuZXcgUmF0aW9uYWxOdW1iZXIoMCkpKSB7IHJldHVybiBqOyB9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gLTE7XHJcblx0fVxyXG5cdHByaXZhdGUgbnVtYmVyT2ZOb25aZXJvRWxlbWVudEZvckNvbHVtbihjb2x1bW5JZDogbnVtYmVyKTogbnVtYmVyIHtcclxuXHRcdGxldCBhY2M6IG51bWJlciA9IDA7XHJcblx0XHRmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgdGhpcy5tOyBqKyspIHtcclxuXHRcdFx0aWYgKCF0aGlzLmVsZW1lbnRzW2pdW2NvbHVtbklkXS5lcXVhbHMobmV3IFJhdGlvbmFsTnVtYmVyKDApKSkgeyBhY2MrKzsgfVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGFjYztcclxuXHR9XHJcblx0cHJpdmF0ZSBjb2ZhY3Rvcihyb3dJZDogbnVtYmVyLCBjb2x1bW5JZDogbnVtYmVyKTogTWF0cml4IHtcclxuXHRcdGNvbnN0IHJldDogTWF0cml4ID0gbmV3IE1hdHJpeCh0aGlzLm0gLSAxLCB0aGlzLm4gLSAxKTtcclxuXHRcdGxldCByb3dPZmZzZXQ6IG51bWJlciA9IDA7XHJcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5tIC0gMTsgaSsrKSB7XHJcblx0XHRcdGlmIChpID09PSByb3dJZCkge1xyXG5cdFx0XHRcdHJvd09mZnNldCA9IDE7XHJcblx0XHRcdH1cclxuXHRcdFx0bGV0IGNvbHVtbk9mZnNldDogbnVtYmVyID0gMDtcclxuXHRcdFx0Zm9yIChsZXQgajogbnVtYmVyID0gMDsgaiA8IHRoaXMubiAtIDE7IGorKykge1xyXG5cdFx0XHRcdGlmIChqID09PSBjb2x1bW5JZCkge1xyXG5cdFx0XHRcdFx0Y29sdW1uT2Zmc2V0ID0gMTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0LmVsZW1lbnRzW2ldW2pdID0gdGhpcy5lbGVtZW50c1tpICsgcm93T2Zmc2V0XVtqICsgY29sdW1uT2Zmc2V0XTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJldDtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBNYXRyaXhJZGVudGl0eSBleHRlbmRzIE1hdHJpeCB7XHJcblx0Y29uc3RydWN0b3IobTogbnVtYmVyKSB7XHJcblx0XHRzdXBlcihtLCBtKTtcclxuXHRcdHRoaXMuZWxlbWVudHMgPSBbXTtcclxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLm07IGkrKykge1xyXG5cdFx0XHR0aGlzLmVsZW1lbnRzW2ldID0gW107XHJcblx0XHRcdGZvciAobGV0IGo6IG51bWJlciA9IDA7IGogPCB0aGlzLm07IGorKykge1xyXG5cdFx0XHRcdGlmIChpID09PSBqKSB7XHJcblx0XHRcdFx0XHR0aGlzLmVsZW1lbnRzW2ldW2pdID0gbmV3IFJhdGlvbmFsTnVtYmVyKDEpO1xyXG5cdFx0XHRcdH0gZWxzZSB7IHRoaXMuZWxlbWVudHNbaV1bal0gPSBuZXcgUmF0aW9uYWxOdW1iZXIoMCk7IH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuLy8gZWxpbWluYXRpb24gLSBtdWx0aXBseSBvbiB0aGUgbGVmdCAoRSpBKTsgUm93LWFkZGl0aW9uIHRyYW5zZm9ybWF0aW9uc1xyXG4vLyB0byBtdWx0Kihyb3cyIG9mIE1hdHJpeCBBKSBhZGQgKHJvdzEgb2YgTWF0cml4IEEpXHJcbmV4cG9ydCBjbGFzcyBNYXRyaXhFbGltaW5hdGlvbiBleHRlbmRzIE1hdHJpeCB7XHJcblx0cHVibGljIHJvdzE6IG51bWJlcjtcclxuXHRwdWJsaWMgcm93MjogbnVtYmVyO1xyXG5cdGNvbnN0cnVjdG9yKG06IG51bWJlciwgcjE6IG51bWJlciwgcjI6IG51bWJlciwgbXVsdDogbnVtYmVyIHwgUmF0aW9uYWxOdW1iZXIpIHtcclxuXHRcdGlmIChtIDwgcjEgfHwgbSA8IHIyKSB7IHRocm93IG5ldyBFcnJvcihcIkNvbHVtbiBpbmRleCBtdXN0IGJlIGxlc3MgdGhhbiBvciBlcXVhbCB0byB0aGUgbWF0cml4IHNpemUuXCIpOyB9XHJcblx0XHRzdXBlcihtLCBtKTtcclxuXHRcdHRoaXMucm93MSA9IHIxO1xyXG5cdFx0dGhpcy5yb3cyID0gcjI7XHJcblx0XHR0aGlzLmVsZW1lbnRzID0gW107XHJcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5tOyBpKyspIHtcclxuXHRcdFx0dGhpcy5lbGVtZW50c1tpXSA9IFtdO1xyXG5cdFx0XHRmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgdGhpcy5tOyBqKyspIHtcclxuXHRcdFx0XHRpZiAoaSA9PT0gaikge1xyXG5cdFx0XHRcdFx0dGhpcy5lbGVtZW50c1tpXVtqXSA9IG5ldyBSYXRpb25hbE51bWJlcigxKTtcclxuXHRcdFx0XHR9IGVsc2UgeyB0aGlzLmVsZW1lbnRzW2ldW2pdID0gbmV3IFJhdGlvbmFsTnVtYmVyKDApOyB9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmICh0eXBlb2YgbXVsdCA9PT0gXCJudW1iZXJcIikge1xyXG5cdFx0XHR0aGlzLmVsZW1lbnRzW3IxXVtyMl0gPSBuZXcgUmF0aW9uYWxOdW1iZXIobXVsdCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAobXVsdCBpbnN0YW5jZW9mIFJhdGlvbmFsTnVtYmVyKSB7IHRoaXMuZWxlbWVudHNbcjFdW3IyXSA9IG11bHQ7IH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi8vIHBlcm11dGF0aW9uIC0gbXVsdGlwbHkgb24gdGhlIHJpZ2h0IChBKlApOyBSb3ctc3dpdGNoaW5nIHRyYW5zZm9ybWF0aW9uc1xyXG5leHBvcnQgY2xhc3MgTWF0cml4UGVybXV0YXRpb24gZXh0ZW5kcyBNYXRyaXgge1xyXG5cdGNvbnN0cnVjdG9yKG06IG51bWJlciwgcm93MTogbnVtYmVyLCByb3cyOiBudW1iZXIpIHtcclxuXHRcdGlmIChtIDwgcm93MSB8fCBtIDwgcm93MikgeyB0aHJvdyBuZXcgRXJyb3IoXCJDb2x1bW4gaW5kZXggbXVzdCBiZSBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gdGhlIG1hdHJpeCBzaXplLlwiKTsgfVxyXG5cdFx0c3VwZXIobSwgbSk7XHJcblx0XHR0aGlzLmVsZW1lbnRzID0gW107XHJcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5tOyBpKyspIHtcclxuXHRcdFx0dGhpcy5lbGVtZW50c1tpXSA9IFtdO1xyXG5cdFx0XHRmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgdGhpcy5tOyBqKyspIHtcclxuXHRcdFx0XHRpZiAoaSA9PT0gaikge1xyXG5cdFx0XHRcdFx0dGhpcy5lbGVtZW50c1tpXVtqXSA9IG5ldyBSYXRpb25hbE51bWJlcigxKTtcclxuXHRcdFx0XHR9IGVsc2UgeyB0aGlzLmVsZW1lbnRzW2ldW2pdID0gbmV3IFJhdGlvbmFsTnVtYmVyKDApOyB9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHRoaXMuZWxlbWVudHNbcm93MV1bcm93MV0gPSBuZXcgUmF0aW9uYWxOdW1iZXIoMCk7XHJcblx0XHR0aGlzLmVsZW1lbnRzW3JvdzFdW3JvdzJdID0gbmV3IFJhdGlvbmFsTnVtYmVyKDEpO1xyXG5cdFx0dGhpcy5lbGVtZW50c1tyb3cyXVtyb3cyXSA9IG5ldyBSYXRpb25hbE51bWJlcigwKTtcclxuXHRcdHRoaXMuZWxlbWVudHNbcm93Ml1bcm93MV0gPSBuZXcgUmF0aW9uYWxOdW1iZXIoMSk7XHJcblx0fVxyXG59IiwiZXhwb3J0IGNsYXNzIFF1ZXVlPFQ+IHtcclxuXHRwcml2YXRlIHF1ZXVlOiBUW107XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLnF1ZXVlID0gW107XHJcblx0fVxyXG5cdHB1YmxpYyBpc0VtcHR5KCk6IGJvb2xlYW4ge1xyXG5cdFx0cmV0dXJuIHRoaXMucXVldWUubGVuZ3RoID09PSAwO1xyXG5cdH1cclxuXHRwdWJsaWMgZW5xdWV1ZShlbGVtZW50OiBUKTogdm9pZCB7XHJcblx0XHR0aGlzLnF1ZXVlLnB1c2goZWxlbWVudCk7XHJcblx0fVxyXG5cdHB1YmxpYyBkZXF1ZXVlKCk6IFQge1xyXG5cdFx0aWYgKHRoaXMuaXNFbXB0eSgpKSB7IHRocm93IG5ldyBFcnJvcihcIlF1ZXVlIGlzIGVtcHR5XCIpOyB9XHJcblx0XHRyZXR1cm4gdGhpcy5xdWV1ZS5zaGlmdCgpO1xyXG5cdH1cclxuXHRwdWJsaWMgcGVlaygpOiBUIHtcclxuXHRcdGlmICh0aGlzLmlzRW1wdHkoKSkgeyB0aHJvdyBuZXcgRXJyb3IoXCJRdWV1ZSBpcyBlbXB0eVwiKTsgfVxyXG5cdFx0cmV0dXJuIHRoaXMucXVldWVbMF07XHJcblx0fVxyXG5cdHB1YmxpYyB0b0FycmF5KCk6IFRbXSB7XHJcblx0XHRyZXR1cm4gdGhpcy5xdWV1ZTtcclxuXHR9XHJcbn0iLCJpbXBvcnQgeyBQYXJzZXIgfSBmcm9tIFwiLi9Bcml0aG1ldGljRXZhbHVhdG9yXCI7XHJcbmltcG9ydCB7IFF1ZXVlIH0gZnJvbSBcIi4vUXVldWVcIjtcclxuaW1wb3J0IHsgU3RhY2sgfSBmcm9tIFwiLi9TdGFja1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJhdGlvbmFsTnVtYmVyIHtcclxuXHRwdWJsaWMgc3RhdGljIHRvUmV2ZXJzZVBvbGlzaE5vdGF0aW9uKGNvZGU6IHN0cmluZyk6IHN0cmluZ1tdIHtcclxuXHRcdGNvbnN0IHRva2Vuczogc3RyaW5nW10gPSBjb2RlLm1hdGNoKC9cXCh8XFwpfFxcZCsoXFwuXFxkKyk/fFxcdyt8W1xcK1xcLVxcKlxcL1xcXl0vZyk7XHJcblx0XHRsZXQgaTogbnVtYmVyID0gMDtcclxuXHRcdGNvbnN0IG91dHB1dFF1ZXVlOiBRdWV1ZTxzdHJpbmc+ID0gbmV3IFF1ZXVlPHN0cmluZz4oKTtcclxuXHRcdGNvbnN0IG9wZXJhdG9yU3RhY2s6IFN0YWNrPHN0cmluZz4gPSBuZXcgU3RhY2s8c3RyaW5nPigpO1xyXG5cdFx0d2hpbGUgKGkgPCB0b2tlbnMubGVuZ3RoKSB7XHJcblx0XHRcdGlmICh0aGlzLmlzTnVtYmVyKHRva2Vuc1tpXSkpIHtcclxuXHRcdFx0XHRvdXRwdXRRdWV1ZS5lbnF1ZXVlKHRva2Vuc1tpXSk7XHJcblx0XHRcdH0gZWxzZSBpZiAodGhpcy5pc09wZXJhdG9yKHRva2Vuc1tpXSkpIHtcclxuXHRcdFx0XHRjb25zdCBvcDE6IHN0cmluZyA9IHRva2Vuc1tpXTtcclxuXHRcdFx0XHR3aGlsZSAoIW9wZXJhdG9yU3RhY2suaXNFbXB0eSgpICYmIHRoaXMuaXNPcGVyYXRvcihvcGVyYXRvclN0YWNrLnBlZWsoKSkpIHtcclxuXHRcdFx0XHRcdGlmICgodGhpcy5pc0xlZnRBc3NvY2lhdGl2ZU9wZXJhdG9yKG9wMSkgJiYgKHRoaXMucHJlY2VkZW5jZShvcDEpIDw9IHRoaXMucHJlY2VkZW5jZShvcGVyYXRvclN0YWNrLnBlZWsoKSkpKSB8fFxyXG5cdFx0XHRcdFx0XHQodGhpcy5pc1JpZ2h0QXNzb2NpYXRpdmVPcGVyYXRvcihvcDEpICYmICh0aGlzLnByZWNlZGVuY2Uob3AxKSA8IHRoaXMucHJlY2VkZW5jZShvcGVyYXRvclN0YWNrLnBlZWsoKSkpKSkge1xyXG5cdFx0XHRcdFx0XHRvdXRwdXRRdWV1ZS5lbnF1ZXVlKG9wZXJhdG9yU3RhY2sucG9wKCkpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdG9wZXJhdG9yU3RhY2sucHVzaChvcDEpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHRva2Vuc1tpXSA9PT0gXCIoXCIpIHtcclxuXHRcdFx0XHRvcGVyYXRvclN0YWNrLnB1c2godG9rZW5zW2ldKTtcclxuXHRcdFx0fSBlbHNlIGlmICh0b2tlbnNbaV0gPT09IFwiKVwiKSB7XHJcblx0XHRcdFx0d2hpbGUgKCFvcGVyYXRvclN0YWNrLmlzRW1wdHkoKSAmJiBvcGVyYXRvclN0YWNrLnBlZWsoKSAhPT0gXCIoXCIpIHtcclxuXHRcdFx0XHRcdG91dHB1dFF1ZXVlLmVucXVldWUob3BlcmF0b3JTdGFjay5wb3AoKSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmICghb3BlcmF0b3JTdGFjay5pc0VtcHR5KCkgJiYgb3BlcmF0b3JTdGFjay5wZWVrKCkgPT09IFwiKFwiKSB7XHJcblx0XHRcdFx0XHRvcGVyYXRvclN0YWNrLnBvcCgpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJNaXNtYXRjaGVkIHBhcmVudGhlc2VzLlwiKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0aSsrO1xyXG5cdFx0fVxyXG5cdFx0d2hpbGUgKCFvcGVyYXRvclN0YWNrLmlzRW1wdHkoKSkge1xyXG5cdFx0XHRpZiAob3BlcmF0b3JTdGFjay5wZWVrKCkgPT09IFwiKFwiKSB7XHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiTWlzbWF0Y2hlZCBwYXJlbnRoZXNlcy5cIik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0b3V0cHV0UXVldWUuZW5xdWV1ZShvcGVyYXRvclN0YWNrLnBvcCgpKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIG91dHB1dFF1ZXVlLnRvQXJyYXkoKTtcclxuXHR9XHJcblx0cHVibGljIHN0YXRpYyBmcm9tU3RyaW5nKGNvZGU6IHN0cmluZyk6IFJhdGlvbmFsTnVtYmVyIHtcclxuXHRcdGNvbnN0IHA6IFBhcnNlciA9IG5ldyBQYXJzZXIoKTtcclxuXHRcdHJldHVybiBwLnBhcnNlKGNvZGUpO1xyXG5cdH1cclxuXHRwdWJsaWMgc3RhdGljIGdyZWF0ZXN0Q29tbW9uRGl2aXNvcihhOiBudW1iZXIsIGI6IG51bWJlcik6IG51bWJlciB7XHJcblx0XHRyZXR1cm4gYiA/IFJhdGlvbmFsTnVtYmVyLmdyZWF0ZXN0Q29tbW9uRGl2aXNvcihiLCBhICUgYikgOiBhO1xyXG5cdH1cclxuXHRwdWJsaWMgc3RhdGljIGxlYXN0Q29tbW9uTXVsdGlwbGUoYTogbnVtYmVyLCBiOiBudW1iZXIpOiBudW1iZXIge1xyXG5cdFx0cmV0dXJuIE1hdGguYWJzKGEgKiBiIC8gUmF0aW9uYWxOdW1iZXIuZ3JlYXRlc3RDb21tb25EaXZpc29yKGEsIGIpKTtcclxuXHR9XHJcblx0cHJpdmF0ZSBzdGF0aWMgaXNOdW1iZXIoY29kZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcblx0XHRyZXR1cm4gL15cXGQvLnRlc3QoY29kZSk7XHJcblx0fVxyXG5cdHByaXZhdGUgc3RhdGljIGlzT3BlcmF0b3IoY29kZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcblx0XHRyZXR1cm4gL1tcXCtcXC1cXCpcXC9cXF5dLy50ZXN0KGNvZGUpO1xyXG5cdH1cclxuXHRwcml2YXRlIHN0YXRpYyBpc0xlZnRBc3NvY2lhdGl2ZU9wZXJhdG9yKG9wZXJhdG9yOiBzdHJpbmcpOiBib29sZWFuIHtcclxuXHRcdHJldHVybiAvW1xcK1xcLVxcKlxcL10vLnRlc3Qob3BlcmF0b3IpO1xyXG5cdH1cclxuXHRwcml2YXRlIHN0YXRpYyBpc1JpZ2h0QXNzb2NpYXRpdmVPcGVyYXRvcihvcGVyYXRvcjogc3RyaW5nKTogYm9vbGVhbiB7XHJcblx0XHRyZXR1cm4gL1tcXF5dLy50ZXN0KG9wZXJhdG9yKTtcclxuXHR9XHJcblx0cHJpdmF0ZSBzdGF0aWMgcHJlY2VkZW5jZShvcGVyYXRvcjogc3RyaW5nKTogbnVtYmVyIHtcclxuXHRcdGlmICgvW1xcK1xcLV0vLnRlc3Qob3BlcmF0b3IpKSB7XHJcblx0XHRcdHJldHVybiAxO1xyXG5cdFx0fVxyXG5cdFx0aWYgKC9bXFwqXFwvXS8udGVzdChvcGVyYXRvcikpIHtcclxuXHRcdFx0cmV0dXJuIDI7XHJcblx0XHR9XHJcblx0XHRpZiAoL1tcXF5dLy50ZXN0KG9wZXJhdG9yKSkge1xyXG5cdFx0XHRyZXR1cm4gMztcclxuXHRcdH1cclxuXHRcdHRocm93IG5ldyBFcnJvcihcIlVua25vd24gb3BlcmF0b3IuXCIpO1xyXG5cdH1cclxuXHRwcml2YXRlIHN0YXRpYyBldmFsdWF0ZUZyb21SUE4odG9rZW5zOiBzdHJpbmdbXSk6IFJhdGlvbmFsTnVtYmVyIHtcclxuXHRcdGNvbnN0IHN0YWNrOiBTdGFjazxSYXRpb25hbE51bWJlcj4gPSBuZXcgU3RhY2s8UmF0aW9uYWxOdW1iZXI+KCk7XHJcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGlmICghdGhpcy5pc09wZXJhdG9yKHRva2Vuc1tpXSkpIHtcclxuXHRcdFx0XHRzdGFjay5wdXNoKG5ldyBSYXRpb25hbE51bWJlcihwYXJzZUZsb2F0KHRva2Vuc1tpXSkpKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRjb25zdCBvcDE6IFJhdGlvbmFsTnVtYmVyID0gc3RhY2sucG9wKCk7XHJcblx0XHRcdFx0Y29uc3Qgb3AyOiBSYXRpb25hbE51bWJlciA9IHN0YWNrLnBvcCgpO1xyXG5cdFx0XHRcdHN3aXRjaCAodG9rZW5zW2ldKSB7XHJcblx0XHRcdFx0XHRjYXNlIFwiK1wiOiBzdGFjay5wdXNoKG9wMi5hZGQob3AxKSk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSBcIi1cIjogc3RhY2sucHVzaChvcDIuc3ViKG9wMSkpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgXCIqXCI6IHN0YWNrLnB1c2gob3AyLm11bHQob3AxKSk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSBcIi9cIjogc3RhY2sucHVzaChvcDIuZGl2KG9wMSkpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgXCJeXCI6IHN0YWNrLnB1c2gob3AyLmV4cChvcDEudG9OdW1iZXIoKSkpO1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiBzdGFjay5wb3AoKS5zaW1wbGlmaWVkRm9ybSgpO1xyXG5cdH1cclxuXHRwdWJsaWMgbnVtZXJhdG9yOiBudW1iZXI7XHJcblx0cHVibGljIGRlbm9taW5hdG9yOiBudW1iZXI7XHJcblx0Y29uc3RydWN0b3IobjogbnVtYmVyLCBkOiBudW1iZXIgPSAxKSB7XHJcblx0XHRpZiAoZCA9PT0gMCkge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJEaXZpc2lvbiBieSB6ZXJvIVwiKTtcclxuXHRcdH1cclxuXHRcdC8vIHRvZG86IHBvdGVudGlhbCBmb3Igb3ZlcmZsb3cuIFdoZW4gTWF0aC5zaWduIGJlY29tZXMgYXZhaWxhYmxlIGluIFR5cGVTY3JpcHQgdXNlIGl0IGluc3RlYWQgb2YgdGhlIG11bHRpcGxpY2F0aW9uXHJcblx0XHRjb25zdCBzaWduOiBudW1iZXIgPSBuICogZCA+PSAwID8gMSA6IC0xO1xyXG5cdFx0dGhpcy5udW1lcmF0b3IgPSBzaWduICogTWF0aC5hYnMobik7XHJcblx0XHR0aGlzLmRlbm9taW5hdG9yID0gTWF0aC5hYnMoZCk7XHJcblx0fVxyXG5cdHB1YmxpYyBzaW1wbGlmaWVkRm9ybSgpOiBSYXRpb25hbE51bWJlciB7XHJcblx0XHRjb25zdCBnY2Q6IG51bWJlciA9IFJhdGlvbmFsTnVtYmVyLmdyZWF0ZXN0Q29tbW9uRGl2aXNvcih0aGlzLm51bWVyYXRvciwgdGhpcy5kZW5vbWluYXRvcik7XHJcblx0XHRyZXR1cm4gbmV3IFJhdGlvbmFsTnVtYmVyKHRoaXMubnVtZXJhdG9yIC8gZ2NkLCB0aGlzLmRlbm9taW5hdG9yIC8gZ2NkKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBlcXVhbHMoeDogbnVtYmVyIHwgUmF0aW9uYWxOdW1iZXIpOiBib29sZWFuIHtcclxuXHRcdGNvbnN0IHJuMTogUmF0aW9uYWxOdW1iZXIgPSB0aGlzLnNpbXBsaWZpZWRGb3JtKCk7XHJcblx0XHRpZiAodHlwZW9mIHggPT09IFwibnVtYmVyXCIpIHtcclxuXHRcdFx0cmV0dXJuIHJuMS5udW1lcmF0b3IgPT09IHggJiYgcm4xLmRlbm9taW5hdG9yID09PSAxO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y29uc3Qgcm4yOiBSYXRpb25hbE51bWJlciA9IHguc2ltcGxpZmllZEZvcm0oKTtcclxuXHRcdFx0cmV0dXJuIHJuMS5udW1lcmF0b3IgPT09IHJuMi5udW1lcmF0b3IgJiYgcm4xLmRlbm9taW5hdG9yID09PSBybjIuZGVub21pbmF0b3I7XHJcblx0XHR9XHJcblx0fVxyXG5cdHB1YmxpYyBsdCh4OiBudW1iZXIgfCBSYXRpb25hbE51bWJlcik6IGJvb2xlYW4ge1xyXG5cdFx0Y29uc3Qgcm4xOiBSYXRpb25hbE51bWJlciA9IHRoaXMuc2ltcGxpZmllZEZvcm0oKTtcclxuXHRcdGlmICh0eXBlb2YgeCA9PT0gXCJudW1iZXJcIikge1xyXG5cdFx0XHRyZXR1cm4gcm4xLm51bWVyYXRvciA8IHggKiBybjEuZGVub21pbmF0b3I7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjb25zdCBybjI6IFJhdGlvbmFsTnVtYmVyID0geC5zaW1wbGlmaWVkRm9ybSgpO1xyXG5cdFx0XHRyZXR1cm4gcm4xLm51bWVyYXRvciAqIHJuMi5kZW5vbWluYXRvciA8IHJuMi5udW1lcmF0b3IgKiBybjEuZGVub21pbmF0b3I7XHJcblx0XHR9XHJcblx0fVxyXG5cdHB1YmxpYyBsZSh4OiBudW1iZXIgfCBSYXRpb25hbE51bWJlcik6IGJvb2xlYW4ge1xyXG5cdFx0Y29uc3Qgcm4xOiBSYXRpb25hbE51bWJlciA9IHRoaXMuc2ltcGxpZmllZEZvcm0oKTtcclxuXHRcdGlmICh0eXBlb2YgeCA9PT0gXCJudW1iZXJcIikge1xyXG5cdFx0XHRyZXR1cm4gcm4xLm51bWVyYXRvciA8PSB4ICogcm4xLmRlbm9taW5hdG9yO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y29uc3Qgcm4yOiBSYXRpb25hbE51bWJlciA9IHguc2ltcGxpZmllZEZvcm0oKTtcclxuXHRcdFx0cmV0dXJuIHJuMS5udW1lcmF0b3IgKiBybjIuZGVub21pbmF0b3IgPD0gcm4yLm51bWVyYXRvciAqIHJuMS5kZW5vbWluYXRvcjtcclxuXHRcdH1cclxuXHR9XHJcblx0cHVibGljIGd0KHg6IG51bWJlciB8IFJhdGlvbmFsTnVtYmVyKTogYm9vbGVhbiB7XHJcblx0XHRjb25zdCBybjE6IFJhdGlvbmFsTnVtYmVyID0gdGhpcy5zaW1wbGlmaWVkRm9ybSgpO1xyXG5cdFx0aWYgKHR5cGVvZiB4ID09PSBcIm51bWJlclwiKSB7XHJcblx0XHRcdHJldHVybiBybjEubnVtZXJhdG9yID4geCAqIHJuMS5kZW5vbWluYXRvcjtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNvbnN0IHJuMjogUmF0aW9uYWxOdW1iZXIgPSB4LnNpbXBsaWZpZWRGb3JtKCk7XHJcblx0XHRcdHJldHVybiBybjEubnVtZXJhdG9yICogcm4yLmRlbm9taW5hdG9yID4gcm4yLm51bWVyYXRvciAqIHJuMS5kZW5vbWluYXRvcjtcclxuXHRcdH1cclxuXHR9XHJcblx0cHVibGljIGdlKHg6IG51bWJlciB8IFJhdGlvbmFsTnVtYmVyKTogYm9vbGVhbiB7XHJcblx0XHRjb25zdCBybjE6IFJhdGlvbmFsTnVtYmVyID0gdGhpcy5zaW1wbGlmaWVkRm9ybSgpO1xyXG5cdFx0aWYgKHR5cGVvZiB4ID09PSBcIm51bWJlclwiKSB7XHJcblx0XHRcdHJldHVybiBybjEubnVtZXJhdG9yID49IHggKiBybjEuZGVub21pbmF0b3I7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjb25zdCBybjI6IFJhdGlvbmFsTnVtYmVyID0geC5zaW1wbGlmaWVkRm9ybSgpO1xyXG5cdFx0XHRyZXR1cm4gcm4xLm51bWVyYXRvciAqIHJuMi5kZW5vbWluYXRvciA+PSBybjIubnVtZXJhdG9yICogcm4xLmRlbm9taW5hdG9yO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly8gbXVsdGlwbGljYXRpdmUgaW52ZXJzZVxyXG5cdHB1YmxpYyByZWNpcHJvY2FsKCk6IFJhdGlvbmFsTnVtYmVyIHtcclxuXHRcdGlmICh0aGlzLmRlbm9taW5hdG9yID09PSAwKSB7IHRocm93IG5ldyBFcnJvcihcIkRpdmlzaW9uIGJ5IHplcm8hXCIpOyB9XHJcblx0XHRyZXR1cm4gbmV3IFJhdGlvbmFsTnVtYmVyKHRoaXMuZGVub21pbmF0b3IsIHRoaXMubnVtZXJhdG9yKTtcclxuXHR9XHJcblx0Ly8gYWRkaXRpdmUgaW52ZXJzZVxyXG5cdHB1YmxpYyBvcHBvc2l0ZSgpOiBSYXRpb25hbE51bWJlciB7XHJcblx0XHRyZXR1cm4gbmV3IFJhdGlvbmFsTnVtYmVyKHRoaXMubnVtZXJhdG9yICogKC0xKSwgdGhpcy5kZW5vbWluYXRvcik7XHJcblx0fVxyXG5cdHB1YmxpYyBhZGQoeDogbnVtYmVyIHwgUmF0aW9uYWxOdW1iZXIpOiBSYXRpb25hbE51bWJlciB7XHJcblx0XHRpZiAodHlwZW9mIHggPT09IFwibnVtYmVyXCIpIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBSYXRpb25hbE51bWJlcigodGhpcy5udW1lcmF0b3IgKyB4ICogdGhpcy5kZW5vbWluYXRvciksIHRoaXMuZGVub21pbmF0b3IpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y29uc3QgbGNtOiBudW1iZXIgPSBSYXRpb25hbE51bWJlci5sZWFzdENvbW1vbk11bHRpcGxlKHRoaXMuZGVub21pbmF0b3IsIHguZGVub21pbmF0b3IpO1xyXG5cdFx0XHRjb25zdCBuMTogbnVtYmVyID0gdGhpcy5udW1lcmF0b3IgKiBsY20gLyB0aGlzLmRlbm9taW5hdG9yO1xyXG5cdFx0XHRjb25zdCBuMjogbnVtYmVyID0geC5udW1lcmF0b3IgKiBsY20gLyB4LmRlbm9taW5hdG9yO1xyXG5cdFx0XHRyZXR1cm4gbmV3IFJhdGlvbmFsTnVtYmVyKG4xICsgbjIsIGxjbSk7XHJcblx0XHR9XHJcblx0fVxyXG5cdHB1YmxpYyBzdWIoeDogbnVtYmVyIHwgUmF0aW9uYWxOdW1iZXIpOiBSYXRpb25hbE51bWJlciB7XHJcblx0XHRpZiAodHlwZW9mIHggPT09IFwibnVtYmVyXCIpIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBSYXRpb25hbE51bWJlcigodGhpcy5udW1lcmF0b3IgLSB4ICogdGhpcy5kZW5vbWluYXRvciksIHRoaXMuZGVub21pbmF0b3IpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y29uc3QgbGNtOiBudW1iZXIgPSBSYXRpb25hbE51bWJlci5sZWFzdENvbW1vbk11bHRpcGxlKHRoaXMuZGVub21pbmF0b3IsIHguZGVub21pbmF0b3IpO1xyXG5cdFx0XHRjb25zdCBuMTogbnVtYmVyID0gdGhpcy5udW1lcmF0b3IgKiBsY20gLyB0aGlzLmRlbm9taW5hdG9yO1xyXG5cdFx0XHRjb25zdCBuMjogbnVtYmVyID0geC5udW1lcmF0b3IgKiBsY20gLyB4LmRlbm9taW5hdG9yO1xyXG5cdFx0XHRyZXR1cm4gbmV3IFJhdGlvbmFsTnVtYmVyKG4xIC0gbjIsIGxjbSk7XHJcblx0XHR9XHJcblx0fVxyXG5cdHB1YmxpYyBtdWx0KHg6IG51bWJlciB8IFJhdGlvbmFsTnVtYmVyKTogUmF0aW9uYWxOdW1iZXIge1xyXG5cdFx0aWYgKHR5cGVvZiB4ID09PSBcIm51bWJlclwiKSB7XHJcblx0XHRcdHJldHVybiBuZXcgUmF0aW9uYWxOdW1iZXIoKHRoaXMubnVtZXJhdG9yICogeCksIHRoaXMuZGVub21pbmF0b3IpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBSYXRpb25hbE51bWJlcigodGhpcy5udW1lcmF0b3IgKiB4Lm51bWVyYXRvciksIHguZGVub21pbmF0b3IgKiB0aGlzLmRlbm9taW5hdG9yKTtcclxuXHRcdH1cclxuXHR9XHJcblx0cHVibGljIGRpdih4OiBudW1iZXIgfCBSYXRpb25hbE51bWJlcik6IFJhdGlvbmFsTnVtYmVyIHtcclxuXHRcdGlmICh0eXBlb2YgeCA9PT0gXCJudW1iZXJcIikge1xyXG5cdFx0XHRyZXR1cm4gbmV3IFJhdGlvbmFsTnVtYmVyKCh0aGlzLm51bWVyYXRvciksIHRoaXMuZGVub21pbmF0b3IgKiB4KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiBuZXcgUmF0aW9uYWxOdW1iZXIoKHRoaXMubnVtZXJhdG9yICogeC5kZW5vbWluYXRvciksIHgubnVtZXJhdG9yICogdGhpcy5kZW5vbWluYXRvcik7XHJcblx0XHR9XHJcblx0fVxyXG5cdHB1YmxpYyBleHAoeDogbnVtYmVyIHwgUmF0aW9uYWxOdW1iZXIpOiBSYXRpb25hbE51bWJlciB7XHJcblx0XHRpZiAodHlwZW9mIHggPT09IFwibnVtYmVyXCIpIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBSYXRpb25hbE51bWJlcih0aGlzLm51bWVyYXRvciAqKiB4LCB0aGlzLmRlbm9taW5hdG9yICoqIHgpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKHRoaXMuZGVub21pbmF0b3IgIT09IDEpIHsgdGhyb3cgRXJyb3IoXCJFeHBvbmVudGlhdGlvbiB3aXRoIHJhdGlvbmFsIHBvd2VycyBub3Qgc3VwcG9ydGVkLlwiKTsgfVxyXG5cdFx0XHRyZXR1cm4gbmV3IFJhdGlvbmFsTnVtYmVyKHRoaXMubnVtZXJhdG9yICoqIHgubnVtZXJhdG9yLCB0aGlzLmRlbm9taW5hdG9yICoqIHgubnVtZXJhdG9yKTtcclxuXHRcdH1cclxuXHR9XHJcblx0cHVibGljIHRvTnVtYmVyKCk6IG51bWJlciB7XHJcblx0XHRyZXR1cm4gdGhpcy5udW1lcmF0b3IgLyB0aGlzLmRlbm9taW5hdG9yO1xyXG5cdH1cclxuXHRwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcclxuXHRcdHJldHVybiB0aGlzLm51bWVyYXRvci50b1N0cmluZygpICsgKDEgPT09IHRoaXMuZGVub21pbmF0b3IgPyBcIlwiIDogXCIvXCIgKyB0aGlzLmRlbm9taW5hdG9yLnRvU3RyaW5nKCkpO1xyXG5cdH1cclxuXHRwdWJsaWMgZGVlcENvcHkoKTogUmF0aW9uYWxOdW1iZXIge1xyXG5cdFx0cmV0dXJuIG5ldyBSYXRpb25hbE51bWJlcih0aGlzLm51bWVyYXRvciwgdGhpcy5kZW5vbWluYXRvcik7XHJcblx0fVxyXG59IiwiZXhwb3J0IGNsYXNzIFN0YWNrPFQ+IHtcclxuXHRwcml2YXRlIHN0YWNrOiBUW107XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLnN0YWNrID0gW107XHJcblx0fVxyXG5cdHB1YmxpYyBpc0VtcHR5KCk6IGJvb2xlYW4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuc3RhY2subGVuZ3RoID09PSAwO1xyXG5cdH1cclxuXHRwdWJsaWMgcHVzaChlbGVtZW50OiBUKTogdm9pZCB7XHJcblx0XHR0aGlzLnN0YWNrLnB1c2goZWxlbWVudCk7XHJcblx0fVxyXG5cdHB1YmxpYyBwb3AoKTogVCB7XHJcblx0XHRpZiAodGhpcy5pc0VtcHR5KCkpIHsgdGhyb3cgbmV3IEVycm9yKFwiU3RhY2sgaXMgZW1wdHlcIik7IH1cclxuXHRcdHJldHVybiB0aGlzLnN0YWNrLnBvcCgpO1xyXG5cdH1cclxuXHRwdWJsaWMgcGVlaygpOiBUIHtcclxuXHRcdGlmICh0aGlzLmlzRW1wdHkoKSkgeyB0aHJvdyBuZXcgRXJyb3IoXCJTdGFjayBpcyBlbXB0eVwiKTsgfVxyXG5cdFx0cmV0dXJuIHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXTtcclxuXHR9XHJcblx0cHVibGljIHRvQXJyYXkoKTogVFtdIHtcclxuXHRcdHJldHVybiB0aGlzLnN0YWNrO1xyXG5cdH1cclxufSIsImltcG9ydCB7IE1hdHJpeCB9IGZyb20gXCIuL01hdHJpeFwiO1xyXG5pbXBvcnQgeyBWZWN0b3IgfSBmcm9tIFwiLi9WZWN0b3JcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTeXN0ZW1PZkxpbmVhckVxdWF0aW9ucyB7XHJcblx0cHVibGljIG5vRXF1YXRpb25zOiBudW1iZXI7XHJcblx0cHVibGljIG5vVmFyaWFibGVzOiBudW1iZXI7XHJcblx0cHVibGljIEE6IE1hdHJpeDtcclxuXHRwdWJsaWMgYjogVmVjdG9yO1xyXG5cdGNvbnN0cnVjdG9yKG5vRXF1YXRpb25zOiBudW1iZXIsIG5vVmFyaWFibGVzOiBudW1iZXIpIHtcclxuXHRcdHRoaXMubm9FcXVhdGlvbnMgPSBub0VxdWF0aW9ucztcclxuXHRcdHRoaXMubm9WYXJpYWJsZXMgPSBub1ZhcmlhYmxlcztcclxuXHRcdHRoaXMuQSA9IG5ldyBNYXRyaXgobm9FcXVhdGlvbnMsIG5vVmFyaWFibGVzKTtcclxuXHRcdHRoaXMuYiA9IG5ldyBWZWN0b3Iobm9FcXVhdGlvbnMpO1xyXG5cdH1cclxufSIsImltcG9ydCB7IE1hdHJpeCB9IGZyb20gXCIuL01hdHJpeFwiO1xyXG5pbXBvcnQgeyBSYXRpb25hbE51bWJlciB9IGZyb20gXCIuL1JhdGlvbmFsTnVtYmVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVmVjdG9yIHtcclxuXHRwdWJsaWMgc3RhdGljIGFyZUxpbmVhcmx5SW5kZXBlbmRlbnQodmVjdG9yczogVmVjdG9yW10pOiBib29sZWFuIHtcclxuXHRcdGNvbnN0IG06IG51bWJlciA9IHZlY3RvcnMubGVuZ3RoO1xyXG5cdFx0aWYgKDAgPT09IG0pIHsgcmV0dXJuIHRydWU7IH1cclxuXHRcdGNvbnN0IG46IG51bWJlciA9IHZlY3RvcnNbMF0ubTtcclxuXHRcdGZvciAobGV0IGk6IG51bWJlciA9IDE7IGkgPCB2ZWN0b3JzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGlmIChuICE9PSB2ZWN0b3JzW2ldLm0pIHsgdGhyb3cgbmV3IEVycm9yKFwiTWlzbWF0Y2hlZCBkaW1lbnNpb25zLlwiKTsgfVxyXG5cdFx0fVxyXG5cdFx0aWYgKG0gPiBuKSB7IHJldHVybiBmYWxzZTsgfVxyXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiTm90IGltcGxlbWVudGVkLlwiKTtcclxuXHR9XHJcblx0cHVibGljIG06IG51bWJlcjtcclxuXHRwdWJsaWMgZWxlbWVudHM6IFJhdGlvbmFsTnVtYmVyW107XHJcblx0Y29uc3RydWN0b3IobjogbnVtYmVyIHwgbnVtYmVyW10pO1xyXG5cdGNvbnN0cnVjdG9yKG46IGFueSkge1xyXG5cdFx0aWYgKHR5cGVvZiBuID09PSBcIm51bWJlclwiKSB7XHJcblx0XHRcdHRoaXMubSA9IG47XHJcblx0XHRcdHRoaXMuZWxlbWVudHMgPSBbXTtcclxuXHRcdH0gZWxzZSBpZiAobiBpbnN0YW5jZW9mIEFycmF5KSB7XHJcblx0XHRcdHRoaXMubSA9IG4ubGVuZ3RoO1xyXG5cdFx0XHR0aGlzLmVsZW1lbnRzID0gW107XHJcblx0XHRcdGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLm07IGkrKykge1xyXG5cdFx0XHRcdHRoaXMuZWxlbWVudHNbaV0gPSBuZXcgUmF0aW9uYWxOdW1iZXIobltpXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0cHVibGljIGFkZCh4OiBWZWN0b3IpOiBWZWN0b3Ige1xyXG5cdFx0aWYgKHRoaXMubSAhPT0geC5tKSB7IHRocm93IG5ldyBFcnJvcihcIk1pc21hdGNoZWQgZGltZW5zaW9ucy5cIik7IH1cclxuXHRcdGNvbnN0IHJlczogVmVjdG9yID0gbmV3IFZlY3Rvcih0aGlzLm0pO1xyXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHJlcy5tOyBpKyspIHtcclxuXHRcdFx0cmVzLmVsZW1lbnRzW2ldID0gdGhpcy5lbGVtZW50c1tpXS5hZGQoeC5lbGVtZW50c1tpXSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzO1xyXG5cdH1cclxuXHRwdWJsaWMgc3ViKHg6IFZlY3Rvcik6IFZlY3RvciB7XHJcblx0XHRpZiAodGhpcy5tICE9PSB4Lm0pIHsgdGhyb3cgbmV3IEVycm9yKFwiTWlzbWF0Y2hlZCBkaW1lbnNpb25zLlwiKTsgfVxyXG5cdFx0Y29uc3QgcmVzOiBWZWN0b3IgPSBuZXcgVmVjdG9yKHRoaXMubSk7XHJcblx0XHRmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgcmVzLm07IGkrKykge1xyXG5cdFx0XHRyZXMuZWxlbWVudHNbaV0gPSB0aGlzLmVsZW1lbnRzW2ldLnN1Yih4LmVsZW1lbnRzW2ldKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiByZXM7XHJcblx0fVxyXG5cdHB1YmxpYyBtdWx0KHg6IFJhdGlvbmFsTnVtYmVyKTogVmVjdG9yIHtcclxuXHRcdGNvbnN0IHJlczogVmVjdG9yID0gbmV3IFZlY3Rvcih0aGlzLm0pO1xyXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHJlcy5tOyBpKyspIHtcclxuXHRcdFx0cmVzLmVsZW1lbnRzW2ldID0gdGhpcy5lbGVtZW50c1tpXS5tdWx0KHgpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlcztcclxuXHR9XHJcblx0Ly8gW0FMSUFTRVNdOiBpbm5lclByb2R1Y3QsIHByb2plY3Rpb25Qcm9kdWN0LCBzY2FsYXJQcm9kdWN0XHJcblx0cHVibGljIGRvdFByb2R1Y3QoeDogVmVjdG9yKTogUmF0aW9uYWxOdW1iZXIge1xyXG5cdFx0aWYgKHRoaXMubSAhPT0geC5tKSB7IHRocm93IG5ldyBFcnJvcihcIk1pc21hdGNoZWQgZGltZW5zaW9ucy5cIik7IH1cclxuXHRcdGxldCByZXM6IFJhdGlvbmFsTnVtYmVyID0gbmV3IFJhdGlvbmFsTnVtYmVyKDApO1xyXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHgubTsgaSsrKSB7XHJcblx0XHRcdHJlcyA9IHJlcy5hZGQodGhpcy5lbGVtZW50c1tpXS5tdWx0KHguZWxlbWVudHNbaV0pKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiByZXM7XHJcblx0fVxyXG5cdC8vIFtBTElBU0VTXTogZGlyZWN0ZWRBcmVhUHJvZHVjdCwgdmVjdG9yUHJvZHVjdFxyXG5cdHB1YmxpYyBjcm9zc1Byb2R1Y3QoeDogVmVjdG9yKTogVmVjdG9yIHtcclxuXHRcdHRocm93IG5ldyBFcnJvcihcIk5vdCBpbXBsZW1lbnRlZC5cIik7XHJcblx0fVxyXG5cdC8vIFtBTElBU0VTXTogbWFnbml0dWRlLCBub3JtXHJcblx0cHVibGljIGxlbmd0aCgpOiBSYXRpb25hbE51bWJlciB7XHJcblx0XHRjb25zdCBsZW5ndGg6IFJhdGlvbmFsTnVtYmVyID0gbmV3IFJhdGlvbmFsTnVtYmVyKDApO1xyXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMubTsgaSsrKSB7XHJcblx0XHRcdGxlbmd0aC5hZGQodGhpcy5lbGVtZW50c1tpXSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gbGVuZ3RoO1xyXG5cdH1cclxuXHRwdWJsaWMgZGVlcENvcHkoKTogVmVjdG9yIHtcclxuXHRcdGNvbnN0IHJldDogVmVjdG9yID0gbmV3IFZlY3Rvcih0aGlzLm0pO1xyXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMubTsgaSsrKSB7XHJcblx0XHRcdHJldC5lbGVtZW50c1tpXSA9IHRoaXMuZWxlbWVudHNbaV07XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmV0O1xyXG5cdH1cclxuXHRwdWJsaWMgdG9NYXRyaXgoKTogTWF0cml4IHtcclxuXHRcdGNvbnN0IHJldDogTWF0cml4ID0gbmV3IE1hdHJpeCh0aGlzLm0sIDEpO1xyXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMubTsgaSsrKSB7XHJcblx0XHRcdHJldC5lbGVtZW50c1tpXVswXSA9IHRoaXMuZWxlbWVudHNbaV07XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmV0O1xyXG5cdH1cclxufVxyXG5leHBvcnQgY2xhc3MgQ29sdW1uVmVjdG9yIGV4dGVuZHMgVmVjdG9yIHtcclxufVxyXG5leHBvcnQgY2xhc3MgUm93VmVjdG9yIGV4dGVuZHMgVmVjdG9yIHtcclxuXHRwdWJsaWMgbWF0cml4UHJvZHVjdChtOiBNYXRyaXgpOiBSb3dWZWN0b3Ige1xyXG5cdFx0aWYgKHRoaXMubSAhPT0gbS5uKSB7IHRocm93IG5ldyBFcnJvcihcIk1pc21hdGNoZWQgZGltZW5zaW9ucy5cIik7IH1cclxuXHRcdGNvbnN0IHJlczogUm93VmVjdG9yID0gbmV3IFJvd1ZlY3Rvcih0aGlzLm0pO1xyXG5cdFx0Zm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMubTsgaSsrKSB7XHJcblx0XHRcdGxldCBzdW06IFJhdGlvbmFsTnVtYmVyID0gbmV3IFJhdGlvbmFsTnVtYmVyKDApO1xyXG5cdFx0XHRmb3IgKGxldCBqOiBudW1iZXIgPSAwOyBqIDwgbS5uOyBqKyspIHtcclxuXHRcdFx0XHRzdW0gPSBzdW0uYWRkKG0uZWxlbWVudHNbaV1bal0ubXVsdCh0aGlzLmVsZW1lbnRzW2ldKSk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmVzLmVsZW1lbnRzW2ldID0gc3VtO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlcztcclxuXHR9XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdGlmICghKG1vZHVsZUlkIGluIF9fd2VicGFja19tb2R1bGVzX18pKSB7XG5cdFx0ZGVsZXRlIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgU3lzdGVtT2ZMaW5lYXJFcXVhdGlvbnNHZW5lcmF0b3IgfSBmcm9tIFwiLi4vZ2VuZXJhdG9ycy9TeXN0ZW1PZkxpbmVhckVxdWF0aW9uc0dlbmVyYXRvclwiO1xyXG5pbXBvcnQgeyBNYXRyaXhQcmVzZW50ZXIgfSBmcm9tIFwiLi4vcHJlc2VudGVycy9NYXRyaXhQcmVzZW50ZXJcIjtcclxuaW1wb3J0IHsgU3lzdGVtT2ZMaW5lYXJFcXVhdGlvbnNQcmVzZW50ZXIgfSBmcm9tIFwiLi4vcHJlc2VudGVycy9TeXN0ZW1PZkxpbmVhckVxdWF0aW9uc1ByZXNlbnRlclwiO1xyXG5pbXBvcnQgeyBNYXRyaXgsIE1hdHJpeElkZW50aXR5IH0gZnJvbSBcIi4uL3N0cnVjdHVyZXMvTWF0cml4XCI7XHJcbmltcG9ydCB7IFJhdGlvbmFsTnVtYmVyIH0gZnJvbSBcIi4uL3N0cnVjdHVyZXMvUmF0aW9uYWxOdW1iZXJcIjtcclxuaW1wb3J0IHsgU3RhY2sgfSBmcm9tIFwiLi4vc3RydWN0dXJlcy9TdGFja1wiO1xyXG5pbXBvcnQgeyBTeXN0ZW1PZkxpbmVhckVxdWF0aW9ucyB9IGZyb20gXCIuLi9zdHJ1Y3R1cmVzL1N5c3RlbU9mTGluZWFyRXF1YXRpb25zXCI7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcblx0ZnVuY3Rpb24gdG9nZ2xlKGlkOiBzdHJpbmcpIHtcclxuXHRcdGNvbnN0IGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG5cdFx0aWYgKGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9PSAnbm9uZScpIHtcclxuXHRcdFx0ZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0ZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcblx0XHR9XHJcblx0fVxyXG5cdGNvbnN0IGdlbmVyYXRvcjogU3lzdGVtT2ZMaW5lYXJFcXVhdGlvbnNHZW5lcmF0b3IgPSBuZXcgU3lzdGVtT2ZMaW5lYXJFcXVhdGlvbnNHZW5lcmF0b3IoKTtcclxuXHRjb25zdCBzeXN0ZW1PZkVxdWF0aW9uczogU3lzdGVtT2ZMaW5lYXJFcXVhdGlvbnMgPSBnZW5lcmF0b3IucmFuZG9tKCk7XHJcblx0bGV0IHVuZG9TdGFjazogU3RhY2s8TWF0cml4PjtcclxuXHRsZXQgcmVkb1N0YWNrOiBTdGFjazxNYXRyaXg+O1xyXG5cdGxldCB3b3JraW5nTWF0cml4OiBNYXRyaXggPSBudWxsO1xyXG5cdGxldCBvcGVyYXRpb25EaXZJZHg6IG51bWJlciA9IDA7XHJcblx0aW5pdCgpO1xyXG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGV0YWlsc1wiKS5hcHBlbmQoXCI8ZGl2PlN5c3RlbSBoYXMgc29sdXRpb246IFwiICsgZ2VuZXJhdG9yLmhhc1NvbHV0aW9uICsgXCI8L2Rpdj5cIik7XHJcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXRhaWxzXCIpLmFwcGVuZChcIjxkaXY+U3lzdGVtIGhhcyB1bmlxdWUgc29sdXRpb246IFwiICsgZ2VuZXJhdG9yLmhhc1VuaXF1ZVNvbHV0aW9uICsgXCI8L2Rpdj5cIik7XHJcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXRhaWxzXCIpLmFwcGVuZChcIjxkaXY+U3lzdGVtIGhhcyBkZXBlbmRlbnQgZXF1YXRpb25zOiBcIiArIGdlbmVyYXRvci5oYXNEZXBlbmRlbnRFcXVhdGlvbnMgKyBcIjwvZGl2PlwiKTtcclxuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRldGFpbHNcIikuYXBwZW5kKFwiPGRpdj5OdW1iZXIgb2YgdmFyaWFibGVzOiBcIiArIGdlbmVyYXRvci5udW1iZXJPZlZhcmlhYmxlcyArIFwiPC9kaXY+XCIpO1xyXG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGV0YWlsc1wiKS5hcHBlbmQoXCI8ZGl2Pk51bWJlciBvZiBsZWFkaW5nIHZhcmlhYmxlczogXCIgKyBnZW5lcmF0b3IubnVtYmVyT2ZMZWFkaW5nVmFyaWFibGVzICsgXCI8L2Rpdj5cIik7XHJcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXRhaWxzXCIpLmFwcGVuZChcIjxkaXY+TnVtYmVyIG9mIGZyZWUgdmFyaWFibGVzOiBcIiArIGdlbmVyYXRvci5udW1iZXJPZkZyZWVWYXJpYWJsZXMgKyBcIjwvZGl2PlwiKTtcclxuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRldGFpbHNcIikuYXBwZW5kKFwiPGRpdj5OdW1iZXIgb2YgZXF1YXRpb25zOiBcIiArIGdlbmVyYXRvci5udW1iZXJPZkVxdWF0aW9ucyArIFwiPC9kaXY+XCIpO1xyXG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGV0YWlsc1wiKS5hcHBlbmQoXCI8ZGl2Pk51bWJlciBvZiBpbmRlcGVuZGVudCBlcXVhdGlvbnM6IFwiICsgZ2VuZXJhdG9yLm51bWJlck9mSW5kZXBlbmRlbnRFcXVhdGlvbnMgKyBcIjwvZGl2PlwiKTtcclxuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRldGFpbHNcIikuYXBwZW5kKFwiPGRpdj5OdW1iZXIgb2YgZGVwZW5kZW50IGVxdWF0aW9uczogXCIgKyBnZW5lcmF0b3IubnVtYmVyT2ZEZXBlbmRlbnRFcXVhdGlvbnMgKyBcIjwvZGl2PlwiKTtcclxuXHRTeXN0ZW1PZkxpbmVhckVxdWF0aW9uc1ByZXNlbnRlci5wcmludFRhYmxlU3lzdGVtKHN5c3RlbU9mRXF1YXRpb25zLCA8SFRNTERpdkVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpKTtcclxuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZ2dsZURldGFpbHNcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuXHRcdHRvZ2dsZShcImRldGFpbHNcIik7XHJcblx0fSk7XHJcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG5BdWdtZW50TWF0cml4XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVycm9yXCIpLmlubmVyVGV4dCA9IFwiXCI7XHJcblx0XHRwcmVQcm9jZXNzT3BlcmF0aW9uKCk7XHJcblx0XHRpZiAoXCJBXCIgPT09ICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlbEF1Z21lbnRPcHRpb25zMVwiKSkudmFsdWUpIHtcclxuXHRcdFx0d29ya2luZ01hdHJpeCA9IHN5c3RlbU9mRXF1YXRpb25zLkEuZGVlcENvcHkoKTtcclxuXHRcdH1cclxuXHRcdGlmIChcIklcIiA9PT0gKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VsQXVnbWVudE9wdGlvbnMxXCIpKS52YWx1ZSkge1xyXG5cdFx0XHR3b3JraW5nTWF0cml4ID0gbmV3IE1hdHJpeElkZW50aXR5KHN5c3RlbU9mRXF1YXRpb25zLm5vRXF1YXRpb25zKTtcclxuXHRcdH0gZWxzZSBpZiAoXCJiXCIgPT09ICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlbEF1Z21lbnRPcHRpb25zMVwiKSkudmFsdWUpIHtcclxuXHRcdFx0d29ya2luZ01hdHJpeCA9IHN5c3RlbU9mRXF1YXRpb25zLmIudG9NYXRyaXgoKTtcclxuXHRcdH1cclxuXHRcdGlmIChcIkFcIiA9PT0gKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VsQXVnbWVudE9wdGlvbnMyXCIpKS52YWx1ZSkge1xyXG5cdFx0XHR3b3JraW5nTWF0cml4ID0gTWF0cml4LmF1Z21lbnQod29ya2luZ01hdHJpeCwgc3lzdGVtT2ZFcXVhdGlvbnMuQSk7XHJcblx0XHR9XHJcblx0XHRpZiAoXCJJXCIgPT09ICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlbEF1Z21lbnRPcHRpb25zMlwiKSkudmFsdWUpIHtcclxuXHRcdFx0d29ya2luZ01hdHJpeCA9IE1hdHJpeC5hdWdtZW50KHdvcmtpbmdNYXRyaXgsIG5ldyBNYXRyaXhJZGVudGl0eShzeXN0ZW1PZkVxdWF0aW9ucy5ub0VxdWF0aW9ucykpO1xyXG5cdFx0fSBlbHNlIGlmIChcImJcIiA9PT0gKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VsQXVnbWVudE9wdGlvbnMyXCIpKS52YWx1ZSkge1xyXG5cdFx0XHR3b3JraW5nTWF0cml4ID0gTWF0cml4LmF1Z21lbnQod29ya2luZ01hdHJpeCwgc3lzdGVtT2ZFcXVhdGlvbnMuYik7XHJcblx0XHR9XHJcblx0XHRwb3N0UHJvY2Vzc09wZXJhdGlvbihcIkF1Z21lbnRlZCBcIiArICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlbEF1Z21lbnRPcHRpb25zMVwiKSkudmFsdWUgKyBcIiB3aXRoIFwiICsgKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VsQXVnbWVudE9wdGlvbnMyXCIpKS52YWx1ZSArIFwiLlwiKTtcclxuXHR9KTtcclxuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0blN3aXRjaFJvd3NcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXJyb3JcIikuaW5uZXJUZXh0ID0gXCJcIjtcclxuXHRcdGNvbnN0IGlkeFJvdzE6IG51bWJlciA9IE51bWJlcigoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb3cxXCIpKS52YWx1ZSkgLSAxO1xyXG5cdFx0Y29uc3QgaWR4Um93MjogbnVtYmVyID0gTnVtYmVyKCg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvdzJcIikpLnZhbHVlKSAtIDE7XHJcblx0XHRpZiAoMCA+IGlkeFJvdzEgfHwgd29ya2luZ01hdHJpeC5tIDwgaWR4Um93MSB8fCAwID4gaWR4Um93MiB8fCB3b3JraW5nTWF0cml4Lm0gPCBpZHhSb3cyKSB7XHJcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXJyb3JcIikuaW5uZXJUZXh0ID0gXCJSb3cgaW5kZXggbXVzdCBiZSBncmVhdGVyIHRoYW4gMCBhbmQgc21hbGxlciB0aGFuIFwiICsgd29ya2luZ01hdHJpeC5tO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRwcmVQcm9jZXNzT3BlcmF0aW9uKCk7XHJcblx0XHR3b3JraW5nTWF0cml4LnN3aXRjaFJvd3MoaWR4Um93MSwgaWR4Um93Mik7XHJcblx0XHRwb3N0UHJvY2Vzc09wZXJhdGlvbihcIlN3aXRjaGVkIHJvdyBcIiArICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvdzFcIikpLnZhbHVlICsgXCIgd2l0aCByb3cgXCIgKyAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb3cyXCIpKS52YWx1ZSArIFwiLlwiKTtcclxuXHR9KTtcclxuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bk11bHRpcGx5Um93XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVycm9yXCIpLmlubmVyVGV4dCA9IFwiXCI7XHJcblx0XHRjb25zdCBpZHhSb3c6IG51bWJlciA9IE51bWJlcigoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb3dJZHhcIikpLnZhbHVlKSAtIDE7XHJcblx0XHRjb25zdCBzY2FsYXI6IFJhdGlvbmFsTnVtYmVyID0gUmF0aW9uYWxOdW1iZXIuZnJvbVN0cmluZygoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzY2FsYXJcIikpLnZhbHVlLnRvU3RyaW5nKCkpO1xyXG5cdFx0aWYgKDAgPiBpZHhSb3cgfHwgd29ya2luZ01hdHJpeC5tIDwgaWR4Um93KSB7XHJcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXJyb3JcIikuaW5uZXJUZXh0ID0gXCJSb3cgaW5kZXggbXVzdCBiZSBncmVhdGVyIHRoYW4gMCBhbmQgc21hbGxlciB0aGFuIFwiICsgd29ya2luZ01hdHJpeC5tO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRwcmVQcm9jZXNzT3BlcmF0aW9uKCk7XHJcblx0XHR3b3JraW5nTWF0cml4Lm11bHRpcGx5Um93KGlkeFJvdywgc2NhbGFyKTtcclxuXHRcdHBvc3RQcm9jZXNzT3BlcmF0aW9uKFwiTXVsdGlwbGllZCByb3cgXCIgKyAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb3dJZHhcIikpLnZhbHVlICsgXCIgd2l0aCBzY2FsYXJcIiArICg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNjYWxhclwiKSkudmFsdWUgKyBcIi5cIik7XHJcblx0fSk7XHJcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG5BZGRSb3dzXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVycm9yXCIpLmlubmVyVGV4dCA9IFwiXCI7XHJcblx0XHRjb25zdCBpZHhSb3cxOiBudW1iZXIgPSBOdW1iZXIoKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkUm93MUlkeFwiKSkudmFsdWUpIC0gMTtcclxuXHRcdGNvbnN0IGlkeFJvdzI6IG51bWJlciA9IE51bWJlcigoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRSb3cySWR4XCIpKS52YWx1ZSkgLSAxO1xyXG5cdFx0Y29uc3Qgc2NhbGFyMTogUmF0aW9uYWxOdW1iZXIgPSBSYXRpb25hbE51bWJlci5mcm9tU3RyaW5nKCg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFJvdzFNdWx0XCIpKS52YWx1ZS50b1N0cmluZygpKTtcclxuXHRcdGNvbnN0IHNjYWxhcjI6IFJhdGlvbmFsTnVtYmVyID0gUmF0aW9uYWxOdW1iZXIuZnJvbVN0cmluZygoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRSb3cyTXVsdFwiKSkudmFsdWUudG9TdHJpbmcoKSk7XHJcblx0XHRpZiAoMCA+IGlkeFJvdzEgfHwgd29ya2luZ01hdHJpeC5tIDwgaWR4Um93MSB8fCAwID4gaWR4Um93MiB8fCB3b3JraW5nTWF0cml4Lm0gPCBpZHhSb3cyKSB7XHJcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXJyb3JcIikuaW5uZXJUZXh0ID0gXCJSb3cgaW5kZXggbXVzdCBiZSBncmVhdGVyIHRoYW4gMCBhbmQgc21hbGxlciB0aGFuIFwiICsgd29ya2luZ01hdHJpeC5tO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRwcmVQcm9jZXNzT3BlcmF0aW9uKCk7XHJcblx0XHR3b3JraW5nTWF0cml4LmFkZFJvdzFUb1JvdzIoaWR4Um93MSwgc2NhbGFyMSwgaWR4Um93Miwgc2NhbGFyMik7XHJcblx0XHRwb3N0UHJvY2Vzc09wZXJhdGlvbihgQWRkZWQgJHtzY2FsYXIxfSB0aW1lKHMpIHJvdyAkeyg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFJvdzFJZHhcIikpLnZhbHVlfSB0byAke3NjYWxhcjJ9IHRpbWUocykgcm93ICR7KDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkUm93MklkeFwiKSkudmFsdWV9LmApO1xyXG5cdH0pO1xyXG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuVW5kb1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG5cdFx0aWYgKHVuZG9TdGFjay5pc0VtcHR5KCkpIHsgcmV0dXJuOyB9XHJcblx0XHRyZWRvU3RhY2sucHVzaChudWxsICE9IHdvcmtpbmdNYXRyaXggPyB3b3JraW5nTWF0cml4LmRlZXBDb3B5KCkgOiBudWxsKTtcclxuXHRcdHdvcmtpbmdNYXRyaXggPSB1bmRvU3RhY2sucG9wKCk7XHJcblx0XHRsZXQgZGl2SWQ6IHN0cmluZyA9IFwib3BlcmF0aW9uRGl2XCIgKyBvcGVyYXRpb25EaXZJZHg7XHJcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIlwiICsgZGl2SWQpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHRcdGNvbnN0IGJ1dHRvbklkOiBzdHJpbmcgPSBcInRvZ2dsZUJ1dHRvblwiICsgb3BlcmF0aW9uRGl2SWR4O1xyXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJcIiArIGJ1dHRvbklkKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblx0XHQtLW9wZXJhdGlvbkRpdklkeDtcclxuXHRcdGRpdklkID0gXCJvcGVyYXRpb25EaXZcIiArIG9wZXJhdGlvbkRpdklkeDtcclxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiXCIgKyBkaXZJZCkuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHRcdHNldEVkaXRPcGVyYXRpb25zKCk7XHJcblx0XHRzZXRBdmFpbGFibGVPcGVyYXRpb25zKCk7XHJcblx0fSk7XHJcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG5SZWRvXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcblx0XHRpZiAocmVkb1N0YWNrLmlzRW1wdHkoKSkgeyByZXR1cm47IH1cclxuXHRcdHVuZG9TdGFjay5wdXNoKG51bGwgIT0gd29ya2luZ01hdHJpeCA/IHdvcmtpbmdNYXRyaXguZGVlcENvcHkoKSA6IG51bGwpO1xyXG5cdFx0d29ya2luZ01hdHJpeCA9IHJlZG9TdGFjay5wb3AoKTtcclxuXHRcdGxldCBkaXZJZDogc3RyaW5nID0gXCJvcGVyYXRpb25EaXZcIiArIG9wZXJhdGlvbkRpdklkeDtcclxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiXCIgKyBkaXZJZCkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cdFx0KytvcGVyYXRpb25EaXZJZHg7XHJcblx0XHRkaXZJZCA9IFwib3BlcmF0aW9uRGl2XCIgKyBvcGVyYXRpb25EaXZJZHg7XHJcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIlwiICsgZGl2SWQpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcblx0XHRjb25zdCBidXR0b25JZDogc3RyaW5nID0gXCJ0b2dnbGVCdXR0b25cIiArIG9wZXJhdGlvbkRpdklkeDtcclxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiXCIgKyBidXR0b25JZCkuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHRcdHNldEVkaXRPcGVyYXRpb25zKCk7XHJcblx0XHRzZXRBdmFpbGFibGVPcGVyYXRpb25zKCk7XHJcblx0fSk7XHJcblx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG5SZXNldFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG5cdFx0aW5pdCgpO1xyXG5cdFx0d2hpbGUgKG9wZXJhdGlvbkRpdklkeCA+IDApIHtcclxuXHRcdFx0Y29uc3QgZGl2SWQ6IHN0cmluZyA9IFwib3BlcmF0aW9uRGl2XCIgKyBvcGVyYXRpb25EaXZJZHg7XHJcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiXCIgKyBkaXZJZCkucmVtb3ZlKCk7XHJcblx0XHRcdGNvbnN0IGJ1dHRvbklkOiBzdHJpbmcgPSBcInRvZ2dsZUJ1dHRvblwiICsgb3BlcmF0aW9uRGl2SWR4O1xyXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIlwiICsgYnV0dG9uSWQpLnJlbW92ZSgpO1xyXG5cdFx0XHQtLW9wZXJhdGlvbkRpdklkeDtcclxuXHRcdH1cclxuXHRcdHNldEVkaXRPcGVyYXRpb25zKCk7XHJcblx0XHRzZXRBdmFpbGFibGVPcGVyYXRpb25zKCk7XHJcblx0fSk7XHJcblx0ZnVuY3Rpb24gaW5pdCgpOiB2b2lkIHtcclxuXHRcdHVuZG9TdGFjayA9IG5ldyBTdGFjazxNYXRyaXg+KCk7XHJcblx0XHRyZWRvU3RhY2sgPSBuZXcgU3RhY2s8TWF0cml4PigpO1xyXG5cdFx0d29ya2luZ01hdHJpeCA9IG51bGw7XHJcblx0XHRzZXRFZGl0T3BlcmF0aW9ucygpO1xyXG5cdFx0c2V0QXZhaWxhYmxlT3BlcmF0aW9ucygpO1xyXG5cdH1cclxuXHRmdW5jdGlvbiBwcmVQcm9jZXNzT3BlcmF0aW9uKCk6IHZvaWQge1xyXG5cdFx0dW5kb1N0YWNrLnB1c2gobnVsbCAhPSB3b3JraW5nTWF0cml4ID8gd29ya2luZ01hdHJpeC5kZWVwQ29weSgpIDogbnVsbCk7XHJcblx0fVxyXG5cdGZ1bmN0aW9uIHBvc3RQcm9jZXNzT3BlcmF0aW9uKHRpdGxlOiBzdHJpbmcpOiB2b2lkIHtcclxuXHRcdGNsZWFyUmVkbygpO1xyXG5cdFx0aWYgKG9wZXJhdGlvbkRpdklkeCA+IDApIHsgdG9nZ2xlKFwiXCIgKyBcIm9wZXJhdGlvbkRpdlwiICsgb3BlcmF0aW9uRGl2SWR4KTsgfVxyXG5cdFx0KytvcGVyYXRpb25EaXZJZHg7XHJcblx0XHRjb25zdCBkaXZJZDogc3RyaW5nID0gXCJvcGVyYXRpb25EaXZcIiArIG9wZXJhdGlvbkRpdklkeDtcclxuXHRcdGNvbnN0IGRpdjogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdFx0ZGl2LmlkID0gZGl2SWQ7XHJcblx0XHRjb25zdCBidXR0b25JZDogc3RyaW5nID0gXCJ0b2dnbGVCdXR0b25cIiArIG9wZXJhdGlvbkRpdklkeDtcclxuXHRcdGNvbnN0IHRvZ2dsZUJ1dHRvbjogSFRNTEJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG5cdFx0dG9nZ2xlQnV0dG9uLmlkID0gYnV0dG9uSWQ7XHJcblx0XHR0b2dnbGVCdXR0b24uY2xhc3NOYW1lID0gXCJvcGVyYXRpb25CdXR0b25cIjtcclxuXHRcdHRvZ2dsZUJ1dHRvbi5pbm5lclRleHQgPSB0aXRsZTtcclxuXHRcdHRvZ2dsZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG5cdFx0XHR0b2dnbGUoZGl2SWQpO1xyXG5cdFx0fSk7XHJcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikuYXBwZW5kKHRvZ2dsZUJ1dHRvbik7XHJcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikuYXBwZW5kKGRpdik7XHJcblx0XHRNYXRyaXhQcmVzZW50ZXIucHJpbnRUYWJsZU1hdHJpeCh3b3JraW5nTWF0cml4LCBkaXYpO1xyXG5cdFx0aWYgKHdvcmtpbmdNYXRyaXguaXNSZWR1Y2VkUm93RWNoZWxvbkZvcm0oKSkge1xyXG5cdFx0XHR0b2dnbGVCdXR0b24uYXBwZW5kKFwiIE1hdHJpeCBpcyBpbiByZWR1Y2VkIHJvdyBlc2NoZWxvbiBmb3JtLlwiKTtcclxuXHRcdH0gZWxzZSBpZiAod29ya2luZ01hdHJpeC5pc1Jvd0VjaGVsb25Gb3JtKCkpIHtcclxuXHRcdFx0dG9nZ2xlQnV0dG9uLmFwcGVuZChcIiBNYXRyaXggaXMgaW4gcm93IGVzY2hlbG9uIGZvcm0uXCIpO1xyXG5cdFx0fVxyXG5cdFx0KDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VsQXVnbWVudE9wdGlvbnMxXCIpKS52YWx1ZSA9IFwiXCI7XHJcblx0XHQoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWxBdWdtZW50T3B0aW9uczJcIikpLnZhbHVlID0gXCJcIjtcclxuXHRcdCg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvdzFcIikpLnZhbHVlID0gXCJcIjtcclxuXHRcdCg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvdzJcIikpLnZhbHVlID0gXCJcIjtcclxuXHRcdCg8SFRNTElucHV0RWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvd0lkeFwiKSkudmFsdWUgPSBcIlwiO1xyXG5cdFx0KDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2NhbGFyXCIpKS52YWx1ZSA9IFwiMVwiO1xyXG5cdFx0KDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkUm93MUlkeFwiKSkudmFsdWUgPSBcIlwiO1xyXG5cdFx0KDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkUm93MU11bHRcIikpLnZhbHVlID0gXCIxXCI7XHJcblx0XHQoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRSb3cySWR4XCIpKS52YWx1ZSA9IFwiXCI7XHJcblx0XHQoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRSb3cyTXVsdFwiKSkudmFsdWUgPSBcIjFcIjtcclxuXHRcdHNldEVkaXRPcGVyYXRpb25zKCk7XHJcblx0XHRzZXRBdmFpbGFibGVPcGVyYXRpb25zKCk7XHJcblx0fVxyXG5cdGZ1bmN0aW9uIHNldEVkaXRPcGVyYXRpb25zKCk6IHZvaWQge1xyXG5cdFx0aWYgKHVuZG9TdGFjay5pc0VtcHR5KCkpIHtcclxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG5VbmRvXCIpLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0blVuZG9cIikucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XHJcblx0XHR9XHJcblx0XHRpZiAocmVkb1N0YWNrLmlzRW1wdHkoKSkge1xyXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0blJlZG9cIikuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlZFwiKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuUmVkb1wiKS5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcclxuXHRcdH1cclxuXHR9XHJcblx0ZnVuY3Rpb24gY2xlYXJSZWRvKCk6IHZvaWQge1xyXG5cdFx0bGV0IGk6IG51bWJlciA9IG9wZXJhdGlvbkRpdklkeDtcclxuXHRcdHdoaWxlICghcmVkb1N0YWNrLmlzRW1wdHkoKSkge1xyXG5cdFx0XHQrK2k7XHJcblx0XHRcdGNvbnN0IGRpdklkOiBzdHJpbmcgPSBcIm9wZXJhdGlvbkRpdlwiICsgaTtcclxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJcIiArIGRpdklkKS5yZW1vdmUoKTtcclxuXHRcdFx0Y29uc3QgYnV0dG9uSWQ6IHN0cmluZyA9IFwidG9nZ2xlQnV0dG9uXCIgKyBpO1xyXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIlwiICsgYnV0dG9uSWQpLnJlbW92ZSgpO1xyXG5cdFx0XHRyZWRvU3RhY2sucG9wKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cdGZ1bmN0aW9uIHNldEF2YWlsYWJsZU9wZXJhdGlvbnMoKTogdm9pZCB7XHJcblx0XHRpZiAobnVsbCA9PSB3b3JraW5nTWF0cml4KSB7XHJcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGl2QXVnbWVudE1hdHJpeFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpdlN3aXRjaFJvd3NcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpdk11bHRpcGx5Um93XCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXZBZGRSb3dzXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGl2QXVnbWVudE1hdHJpeFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGl2U3dpdGNoUm93c1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpdk11bHRpcGx5Um93XCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGl2QWRkUm93c1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5cdFx0fVxyXG5cdH1cclxufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9