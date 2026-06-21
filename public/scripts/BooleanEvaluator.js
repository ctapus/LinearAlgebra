/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/structures/Dictionary.ts"
/*!**************************************!*\
  !*** ./src/structures/Dictionary.ts ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dictionary: () => (/* binding */ Dictionary)
/* harmony export */ });
class Dictionary {
    items = {};
    count = 0;
    Add(key, value) {
        if (!this.items.hasOwnProperty(key)) {
            this.count++;
        }
        this.items[key] = value;
    }
    ContainsKey(key) {
        return this.items.hasOwnProperty(key);
    }
    Count() {
        return this.count;
    }
    Item(key) {
        return this.items[key];
    }
    Remove(key) {
        const val = this.items[key];
        delete this.items[key];
        this.count--;
        return val;
    }
    Keys() {
        const keySet = [];
        for (const prop in this.items) {
            if (this.items.hasOwnProperty(prop)) {
                keySet.push(prop);
            }
        }
        return keySet;
    }
    Values() {
        const values = [];
        for (const prop in this.items) {
            if (this.items.hasOwnProperty(prop)) {
                values.push(this.items[prop]);
            }
        }
        return values;
    }
    DeepCopy() {
        const ret = new Dictionary();
        for (const item in this.items) {
            ret.items[item] = this.items[item];
        }
        ret.count = this.count;
        return ret;
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
/*!********************************************!*\
  !*** ./src/structures/BooleanEvaluator.ts ***!
  \********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BooleanLexerCS: () => (/* binding */ BooleanLexerCS),
/* harmony export */   BooleanLexerMath: () => (/* binding */ BooleanLexerMath),
/* harmony export */   BooleanToken: () => (/* binding */ BooleanToken),
/* harmony export */   BooleanTokenType: () => (/* binding */ BooleanTokenType),
/* harmony export */   ExpressionTree: () => (/* binding */ ExpressionTree),
/* harmony export */   Parser: () => (/* binding */ Parser)
/* harmony export */ });
/* harmony import */ var _Dictionary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dictionary */ "./src/structures/Dictionary.ts");

var BooleanTokenType;
(function (BooleanTokenType) {
    BooleanTokenType[BooleanTokenType["Or"] = 0] = "Or";
    BooleanTokenType[BooleanTokenType["And"] = 1] = "And";
    BooleanTokenType[BooleanTokenType["Not"] = 2] = "Not";
    BooleanTokenType[BooleanTokenType["True"] = 3] = "True";
    BooleanTokenType[BooleanTokenType["False"] = 4] = "False";
    BooleanTokenType[BooleanTokenType["Variable"] = 5] = "Variable";
    BooleanTokenType[BooleanTokenType["LParen"] = 6] = "LParen";
    BooleanTokenType[BooleanTokenType["RParen"] = 7] = "RParen";
    BooleanTokenType[BooleanTokenType["End"] = 8] = "End";
    BooleanTokenType[BooleanTokenType["Unknown"] = 9] = "Unknown";
})(BooleanTokenType || (BooleanTokenType = {}));
class BooleanToken {
    type;
    variable;
    constructor(type, variable) {
        this.type = type;
        this.variable = variable;
    }
}
class BooleanLexer {
    inputCheckRegex;
    tokenRegexOr;
    tokenRegexAnd;
    tokenRegexNot;
    tokenRegexTrue;
    tokenRegexFalse;
    tokenRegexLParen = /\(/;
    tokenRegexRParen = /\)/;
    tokenRegexVariable = /[A-Z]/;
    tokens;
    tokenIndex;
    getTokenAndAdvance() {
        if (this.tokens.length - 1 === this.tokenIndex) {
            return new BooleanToken(BooleanTokenType.End);
        }
        const input = this.tokens[this.tokenIndex++];
        return this.getToken(input);
    }
    revert() {
        if (this.tokenIndex <= 0) {
            throw Error("Index out of range");
        }
        this.tokenIndex--;
    }
    tokenize(input) {
        this.tokens = input.replace(" ", "").match(this.inputCheckRegex);
        this.tokenIndex = 0;
    }
    getToken(input) {
        if (this.tokenRegexOr.test(input)) {
            return new BooleanToken(BooleanTokenType.Or);
        }
        if (this.tokenRegexAnd.test(input)) {
            return new BooleanToken(BooleanTokenType.And);
        }
        if (this.tokenRegexNot.test(input)) {
            return new BooleanToken(BooleanTokenType.Not);
        }
        if (this.tokenRegexVariable.test(input)) {
            return new BooleanToken(BooleanTokenType.Variable, input);
        }
        if (this.tokenRegexTrue.test(input)) {
            return new BooleanToken(BooleanTokenType.True);
        }
        if (this.tokenRegexFalse.test(input)) {
            return new BooleanToken(BooleanTokenType.False);
        }
        if (this.tokenRegexLParen.test(input)) {
            return new BooleanToken(BooleanTokenType.LParen);
        }
        if (this.tokenRegexRParen.test(input)) {
            return new BooleanToken(BooleanTokenType.RParen);
        }
        return new BooleanToken(BooleanTokenType.Unknown);
    }
}
var OperationType;
(function (OperationType) {
    OperationType[OperationType["Or"] = 0] = "Or";
    OperationType[OperationType["And"] = 1] = "And";
    OperationType[OperationType["Not"] = 2] = "Not";
})(OperationType || (OperationType = {}));
class ExpressionTree {
    left;
    node;
    right;
    constructor(input) {
        this.node = input;
    }
    freeVariables() {
        const freeVariables = new Set();
        if (typeof this.node === "string") {
            freeVariables.add(this.node);
        }
        const leftBranch = this.left?.freeVariables();
        if (leftBranch) {
            for (const x of leftBranch) {
                freeVariables.add(x);
            }
        }
        const rightBranch = this.right?.freeVariables();
        if (rightBranch) {
            for (const x of rightBranch) {
                freeVariables.add(x);
            }
        }
        return freeVariables;
    }
    evaluate(valuesDictionary) {
        if (typeof this.node === "string") {
            // search the valuesDictionary
            // and return
        }
        if (typeof this.node === "boolean") {
            return this.node;
        }
        const left = this.left.evaluate(valuesDictionary);
        const right = this.right.evaluate(valuesDictionary);
        let ret;
        // There is no possibility to check this.node with typeof or instaceof enum
        if (this.node === OperationType.Not) {
            ret = !left;
        }
        if (this.node === OperationType.And) {
            ret = left && right;
        }
        if (this.node === OperationType.Or) {
            ret = left || right;
        }
        return ret;
    }
    generateFreeVariablesValues() {
        const freeVariables = this.freeVariables();
        return this.generateFreeVariableValuesBranches(new _Dictionary__WEBPACK_IMPORTED_MODULE_0__.Dictionary(), freeVariables);
    }
    generateFreeVariableValuesBranches(truthTable, freeVariables) {
        const variable = freeVariables?.keys()?.next()?.value;
        freeVariables.delete(variable);
        const branch1 = truthTable.DeepCopy();
        branch1.Add(variable, true);
        const branch2 = truthTable.DeepCopy();
        branch2.Add(variable, false);
        if (freeVariables.size > 0) {
            const newFreeVariables1 = this.DeepCopySet(freeVariables);
            const newFreeVariables2 = this.DeepCopySet(freeVariables);
            return this.generateFreeVariableValuesBranches(branch1, newFreeVariables1).concat(this.generateFreeVariableValuesBranches(branch2, newFreeVariables2));
        }
        else {
            return [branch1, branch2];
        }
    }
    DeepCopySet(set) {
        const ret = new Set();
        for (const key of set) {
            ret.add(key);
        }
        return ret;
    }
}
class Parser {
    lex;
    parse(lexerType, code) {
        this.lex = new lexerType(code);
        const expression = this.expr();
        const token = this.lex.getTokenAndAdvance();
        if (token.type === BooleanTokenType.End) {
            return expression;
        }
        throw Error("End expected");
    }
    expr() {
        let booleanExpressionTree;
        let token = this.lex.getTokenAndAdvance();
        if (token.type === BooleanTokenType.End) {
            return booleanExpressionTree;
        }
        if (token.type === BooleanTokenType.LParen) {
            booleanExpressionTree = new ExpressionTree();
            booleanExpressionTree.left = this.expr();
            token = this.lex.getTokenAndAdvance();
            if (token.type !== BooleanTokenType.RParen) {
                throw Error("Unbalanced parenthesis.");
            }
            token = this.lex.getTokenAndAdvance();
            switch (token.type) {
                case BooleanTokenType.Or:
                    booleanExpressionTree.node = OperationType.Or;
                    booleanExpressionTree.right = this.expr();
                    break;
                case BooleanTokenType.And:
                    booleanExpressionTree.node = OperationType.And;
                    booleanExpressionTree.right = this.expr();
                    break;
                case BooleanTokenType.End:
                    return booleanExpressionTree;
                default:
                    throw Error("Incorrect syntax.");
            }
        }
        else {
            this.lex.revert();
            booleanExpressionTree = this.binaryOp();
        }
        return booleanExpressionTree;
    }
    binaryOp() {
        let booleanExpressionTree;
        let token = this.lex.getTokenAndAdvance();
        if (token.type === BooleanTokenType.Variable || token.type === BooleanTokenType.True || token.type === BooleanTokenType.False) {
            booleanExpressionTree = new ExpressionTree();
            booleanExpressionTree.left = new ExpressionTree(token.variable);
            token = this.lex.getTokenAndAdvance();
            switch (token.type) {
                case BooleanTokenType.Or:
                    booleanExpressionTree.node = OperationType.Or;
                    booleanExpressionTree.right = this.expr();
                    break;
                case BooleanTokenType.And:
                    booleanExpressionTree.node = OperationType.And;
                    booleanExpressionTree.right = this.expr();
                    break;
                default:
                    throw Error("Incorrect syntax.");
            }
        }
        else {
            this.lex.revert();
            booleanExpressionTree = this.unaryOp();
        }
        return booleanExpressionTree;
    }
    unaryOp() {
        let booleanExpressionTree;
        let token = this.lex.getTokenAndAdvance();
        if (token.type === BooleanTokenType.Not) {
            booleanExpressionTree = new ExpressionTree(OperationType.Not);
            token = this.lex.getTokenAndAdvance();
            if (token.type === BooleanTokenType.Variable || token.type === BooleanTokenType.True || token.type === BooleanTokenType.False) {
                booleanExpressionTree.left = new ExpressionTree(token.variable);
            }
            else {
                this.lex.revert();
                if (token.type !== BooleanTokenType.End) {
                    booleanExpressionTree.left = this.expr();
                }
            }
        }
        else {
            throw Error("Incorrect syntax.");
        }
        return booleanExpressionTree;
    }
}
class BooleanLexerCS extends BooleanLexer {
    inputCheckRegex = /\(|\)|[\|\&\!]|[A-Z]|[10]*/g;
    tokenRegexOr = /\|/;
    tokenRegexAnd = /\&/;
    tokenRegexNot = /\!/;
    tokenRegexTrue = /1/;
    tokenRegexFalse = /0/;
    constructor(input) {
        super();
        this.tokenize(input);
    }
}
class BooleanLexerMath extends BooleanLexer {
    inputCheckRegex = /\(|\)|[\+\*\~]|[A-Z]|[10]*/g;
    tokenRegexOr = /\+/;
    tokenRegexAnd = /\*/;
    tokenRegexNot = /\~/;
    tokenRegexTrue = /1/;
    tokenRegexFalse = /0/;
    constructor(input) {
        super();
        this.tokenize(input);
    }
}
/*
expr			: LPARAM expr RPARAM ((AND | OR) expr)*
                | binaryOp
binaryOp		: (variableTerm | booleanTerm) ((AND | OR) expr)+
                | unaryOp ((AND | OR) expr)+
unaryOp			: NOT (variableTerm | booleanTerm | LPARAM expr RPARAM)
variableTerm	: variable
booleanTerm		: TRUE | FALSE
*/ 

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWEsR0FBVyxJQUFJLENBQUM7SUFDN0IsYUFBYSxHQUFXLElBQUksQ0FBQztJQUM3QixjQUFjLEdBQVcsR0FBRyxDQUFDO0lBQzdCLGVBQWUsR0FBVyxHQUFHLENBQUM7SUFDeEMsWUFBWSxLQUFhO1FBQ3hCLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0QixDQUFDO0NBQ0Q7QUFFTSxNQUFNLGdCQUFpQixTQUFRLFlBQVk7SUFDdkMsZUFBZSxHQUFXLDZCQUE2QixDQUFDO0lBQ3hELFlBQVksR0FBVyxJQUFJLENBQUM7SUFDNUIsYUFBYSxHQUFXLElBQUksQ0FBQztJQUM3QixhQUFhLEdBQVcsSUFBSSxDQUFDO0lBQzdCLGNBQWMsR0FBVyxHQUFHLENBQUM7SUFDN0IsZUFBZSxHQUFXLEdBQUcsQ0FBQztJQUN4QyxZQUFZLEtBQWE7UUFDeEIsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RCLENBQUM7Q0FDRDtBQUVEOzs7Ozs7OztFQVFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGluZWFyYWxnZWJyYS8uL3NyYy9zdHJ1Y3R1cmVzL0RpY3Rpb25hcnkudHMiLCJ3ZWJwYWNrOi8vbGluZWFyYWxnZWJyYS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9saW5lYXJhbGdlYnJhL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9saW5lYXJhbGdlYnJhL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbGluZWFyYWxnZWJyYS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2xpbmVhcmFsZ2VicmEvLi9zcmMvc3RydWN0dXJlcy9Cb29sZWFuRXZhbHVhdG9yLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBEaWN0aW9uYXJ5PFQ+IHtcclxuXHRwcml2YXRlIGl0ZW1zOiB7IFtpbmRleDogc3RyaW5nXTogVCB9ID0ge307XHJcblx0cHJpdmF0ZSBjb3VudDogbnVtYmVyID0gMDtcclxuXHRwdWJsaWMgQWRkKGtleTogc3RyaW5nLCB2YWx1ZTogVCk6IHZvaWQge1xyXG5cdFx0aWYgKCF0aGlzLml0ZW1zLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuXHRcdFx0dGhpcy5jb3VudCsrO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5pdGVtc1trZXldID0gdmFsdWU7XHJcblx0fVxyXG5cdHB1YmxpYyBDb250YWluc0tleShrZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuaXRlbXMuaGFzT3duUHJvcGVydHkoa2V5KTtcclxuXHR9XHJcblx0cHVibGljIENvdW50KCk6IG51bWJlciB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb3VudDtcclxuXHR9XHJcblx0cHVibGljIEl0ZW0oa2V5OiBzdHJpbmcpOiBUIHtcclxuXHRcdHJldHVybiB0aGlzLml0ZW1zW2tleV07XHJcblx0fVxyXG5cdHB1YmxpYyBSZW1vdmUoa2V5OiBzdHJpbmcpOiBUIHtcclxuXHRcdGNvbnN0IHZhbCA9IHRoaXMuaXRlbXNba2V5XTtcclxuXHRcdGRlbGV0ZSB0aGlzLml0ZW1zW2tleV07XHJcblx0XHR0aGlzLmNvdW50LS07XHJcblx0XHRyZXR1cm4gdmFsO1xyXG5cdH1cclxuXHRwdWJsaWMgS2V5cygpOiBzdHJpbmdbXSB7XHJcblx0XHRjb25zdCBrZXlTZXQ6IHN0cmluZ1tdID0gW107XHJcblx0XHRmb3IgKGNvbnN0IHByb3AgaW4gdGhpcy5pdGVtcykge1xyXG5cdFx0XHRpZiAodGhpcy5pdGVtcy5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xyXG5cdFx0XHRcdGtleVNldC5wdXNoKHByb3ApO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4ga2V5U2V0O1xyXG5cdH1cclxuXHRwdWJsaWMgVmFsdWVzKCk6IFRbXSB7XHJcblx0XHRjb25zdCB2YWx1ZXM6IFRbXSA9IFtdO1xyXG5cdFx0Zm9yIChjb25zdCBwcm9wIGluIHRoaXMuaXRlbXMpIHtcclxuXHRcdFx0aWYgKHRoaXMuaXRlbXMuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcclxuXHRcdFx0XHR2YWx1ZXMucHVzaCh0aGlzLml0ZW1zW3Byb3BdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHZhbHVlcztcclxuXHR9XHJcblx0cHVibGljIERlZXBDb3B5KCk6IERpY3Rpb25hcnk8VD4ge1xyXG5cdFx0Y29uc3QgcmV0OiBEaWN0aW9uYXJ5PFQ+ID0gbmV3IERpY3Rpb25hcnk8VD4oKTtcclxuXHRcdGZvciAoY29uc3QgaXRlbSBpbiB0aGlzLml0ZW1zKSB7XHJcblx0XHRcdHJldC5pdGVtc1tpdGVtXSA9IHRoaXMuaXRlbXNbaXRlbV07XHJcblx0XHR9XHJcblx0XHRyZXQuY291bnQgPSB0aGlzLmNvdW50O1xyXG5cdFx0cmV0dXJuIHJldDtcclxuXHR9XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdGlmICghKG1vZHVsZUlkIGluIF9fd2VicGFja19tb2R1bGVzX18pKSB7XG5cdFx0ZGVsZXRlIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgRGljdGlvbmFyeSB9IGZyb20gXCIuL0RpY3Rpb25hcnlcIjtcclxuZXhwb3J0IGVudW0gQm9vbGVhblRva2VuVHlwZSB7IE9yLCBBbmQsIE5vdCwgVHJ1ZSwgRmFsc2UsIFZhcmlhYmxlLCBMUGFyZW4sIFJQYXJlbiwgRW5kLCBVbmtub3duIH1cclxuZXhwb3J0IGNsYXNzIEJvb2xlYW5Ub2tlbiB7XHJcblx0cHVibGljIHR5cGU6IEJvb2xlYW5Ub2tlblR5cGU7XHJcblx0cHVibGljIHZhcmlhYmxlOiBzdHJpbmcgfCBib29sZWFuO1xyXG5cdGNvbnN0cnVjdG9yKHR5cGU6IEJvb2xlYW5Ub2tlblR5cGUsIHZhcmlhYmxlPzogc3RyaW5nIHwgYm9vbGVhbikge1xyXG5cdFx0dGhpcy50eXBlID0gdHlwZTtcclxuXHRcdHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcclxuXHR9XHJcbn1cclxuYWJzdHJhY3QgY2xhc3MgQm9vbGVhbkxleGVyIHtcclxuXHRwcm90ZWN0ZWQgaW5wdXRDaGVja1JlZ2V4OiBSZWdFeHA7XHJcblx0cHJvdGVjdGVkIHRva2VuUmVnZXhPcjogUmVnRXhwO1xyXG5cdHByb3RlY3RlZCB0b2tlblJlZ2V4QW5kOiBSZWdFeHA7XHJcblx0cHJvdGVjdGVkIHRva2VuUmVnZXhOb3Q6IFJlZ0V4cDtcclxuXHRwcm90ZWN0ZWQgdG9rZW5SZWdleFRydWU6IFJlZ0V4cDtcclxuXHRwcm90ZWN0ZWQgdG9rZW5SZWdleEZhbHNlOiBSZWdFeHA7XHJcblx0cHJvdGVjdGVkIHRva2VuUmVnZXhMUGFyZW46IFJlZ0V4cCA9IC9cXCgvO1xyXG5cdHByb3RlY3RlZCB0b2tlblJlZ2V4UlBhcmVuOiBSZWdFeHAgPSAvXFwpLztcclxuXHRwcm90ZWN0ZWQgdG9rZW5SZWdleFZhcmlhYmxlOiBSZWdFeHAgPSAvW0EtWl0vO1xyXG5cdHByaXZhdGUgdG9rZW5zOiBzdHJpbmdbXTtcclxuXHRwcml2YXRlIHRva2VuSW5kZXg6IG51bWJlcjtcclxuXHRwdWJsaWMgZ2V0VG9rZW5BbmRBZHZhbmNlKCk6IEJvb2xlYW5Ub2tlbiB7XHJcblx0XHRpZiAodGhpcy50b2tlbnMubGVuZ3RoIC0gMSA9PT0gdGhpcy50b2tlbkluZGV4KSB7IHJldHVybiBuZXcgQm9vbGVhblRva2VuKEJvb2xlYW5Ub2tlblR5cGUuRW5kKTsgfVxyXG5cdFx0Y29uc3QgaW5wdXQ6IHN0cmluZyA9IHRoaXMudG9rZW5zW3RoaXMudG9rZW5JbmRleCsrXTtcclxuXHRcdHJldHVybiB0aGlzLmdldFRva2VuKGlucHV0KTtcclxuXHR9XHJcblx0cHVibGljIHJldmVydCgpOiB2b2lkIHtcclxuXHRcdGlmICh0aGlzLnRva2VuSW5kZXggPD0gMCkgeyB0aHJvdyBFcnJvcihcIkluZGV4IG91dCBvZiByYW5nZVwiKTsgfVxyXG5cdFx0dGhpcy50b2tlbkluZGV4LS07XHJcblx0fVxyXG5cdHByb3RlY3RlZCB0b2tlbml6ZShpbnB1dDogc3RyaW5nKSB7XHJcblx0XHR0aGlzLnRva2VucyA9IGlucHV0LnJlcGxhY2UoXCIgXCIsIFwiXCIpLm1hdGNoKHRoaXMuaW5wdXRDaGVja1JlZ2V4KTtcclxuXHRcdHRoaXMudG9rZW5JbmRleCA9IDA7XHJcblx0fVxyXG5cdHByaXZhdGUgZ2V0VG9rZW4oaW5wdXQ6IHN0cmluZyk6IEJvb2xlYW5Ub2tlbiB7XHJcblx0XHRpZiAodGhpcy50b2tlblJlZ2V4T3IudGVzdChpbnB1dCkpIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBCb29sZWFuVG9rZW4oQm9vbGVhblRva2VuVHlwZS5Pcik7XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy50b2tlblJlZ2V4QW5kLnRlc3QoaW5wdXQpKSB7XHJcblx0XHRcdHJldHVybiBuZXcgQm9vbGVhblRva2VuKEJvb2xlYW5Ub2tlblR5cGUuQW5kKTtcclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLnRva2VuUmVnZXhOb3QudGVzdChpbnB1dCkpIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBCb29sZWFuVG9rZW4oQm9vbGVhblRva2VuVHlwZS5Ob3QpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMudG9rZW5SZWdleFZhcmlhYmxlLnRlc3QoaW5wdXQpKSB7XHJcblx0XHRcdHJldHVybiBuZXcgQm9vbGVhblRva2VuKEJvb2xlYW5Ub2tlblR5cGUuVmFyaWFibGUsIGlucHV0KTtcclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLnRva2VuUmVnZXhUcnVlLnRlc3QoaW5wdXQpKSB7XHJcblx0XHRcdHJldHVybiBuZXcgQm9vbGVhblRva2VuKEJvb2xlYW5Ub2tlblR5cGUuVHJ1ZSk7XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy50b2tlblJlZ2V4RmFsc2UudGVzdChpbnB1dCkpIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBCb29sZWFuVG9rZW4oQm9vbGVhblRva2VuVHlwZS5GYWxzZSk7XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy50b2tlblJlZ2V4TFBhcmVuLnRlc3QoaW5wdXQpKSB7XHJcblx0XHRcdHJldHVybiBuZXcgQm9vbGVhblRva2VuKEJvb2xlYW5Ub2tlblR5cGUuTFBhcmVuKTtcclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLnRva2VuUmVnZXhSUGFyZW4udGVzdChpbnB1dCkpIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBCb29sZWFuVG9rZW4oQm9vbGVhblRva2VuVHlwZS5SUGFyZW4pO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIG5ldyBCb29sZWFuVG9rZW4oQm9vbGVhblRva2VuVHlwZS5Vbmtub3duKTtcclxuXHR9XHJcbn1cclxuZW51bSBPcGVyYXRpb25UeXBlIHsgT3IsIEFuZCwgTm90fVxyXG5leHBvcnQgY2xhc3MgRXhwcmVzc2lvblRyZWUge1xyXG5cdHB1YmxpYyBsZWZ0OiBFeHByZXNzaW9uVHJlZTtcclxuXHRwdWJsaWMgbm9kZTogc3RyaW5nIHwgYm9vbGVhbiB8IE9wZXJhdGlvblR5cGU7XHJcblx0cHVibGljIHJpZ2h0OiBFeHByZXNzaW9uVHJlZTtcclxuXHRjb25zdHJ1Y3RvcihpbnB1dD86IHN0cmluZyB8IGJvb2xlYW4gfCBPcGVyYXRpb25UeXBlKSB7XHJcblx0XHR0aGlzLm5vZGUgPSBpbnB1dDtcclxuXHR9XHJcblx0cHVibGljIGZyZWVWYXJpYWJsZXMoKTogU2V0PHN0cmluZz4ge1xyXG5cdFx0Y29uc3QgZnJlZVZhcmlhYmxlczogU2V0PHN0cmluZz4gPSBuZXcgU2V0PHN0cmluZz4oKTtcclxuXHRcdGlmICh0eXBlb2YgdGhpcy5ub2RlID09PSBcInN0cmluZ1wiKSB7XHJcblx0XHRcdGZyZWVWYXJpYWJsZXMuYWRkKHRoaXMubm9kZSk7XHJcblx0XHR9XHJcblx0XHRjb25zdCBsZWZ0QnJhbmNoOiBTZXQ8c3RyaW5nPiA9IHRoaXMubGVmdD8uZnJlZVZhcmlhYmxlcygpO1xyXG5cdFx0aWYgKGxlZnRCcmFuY2gpIHtcclxuXHRcdFx0Zm9yIChjb25zdCB4IG9mIGxlZnRCcmFuY2gpIHtcclxuXHRcdFx0XHRmcmVlVmFyaWFibGVzLmFkZCh4KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0Y29uc3QgcmlnaHRCcmFuY2g6IFNldDxzdHJpbmc+ID0gdGhpcy5yaWdodD8uZnJlZVZhcmlhYmxlcygpO1xyXG5cdFx0aWYgKHJpZ2h0QnJhbmNoKSB7XHJcblx0XHRcdGZvciAoY29uc3QgeCBvZiByaWdodEJyYW5jaCkge1xyXG5cdFx0XHRcdGZyZWVWYXJpYWJsZXMuYWRkKHgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZnJlZVZhcmlhYmxlcztcclxuXHR9XHJcblx0cHVibGljIGV2YWx1YXRlKHZhbHVlc0RpY3Rpb25hcnk6IERpY3Rpb25hcnk8Ym9vbGVhbj4pOiBib29sZWFuIHtcclxuXHRcdGlmICh0eXBlb2YgdGhpcy5ub2RlID09PSBcInN0cmluZ1wiKSB7XHJcblx0XHRcdC8vIHNlYXJjaCB0aGUgdmFsdWVzRGljdGlvbmFyeVxyXG5cdFx0XHQvLyBhbmQgcmV0dXJuXHJcblx0XHR9XHJcblx0XHRpZiAodHlwZW9mIHRoaXMubm9kZSA9PT0gXCJib29sZWFuXCIpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMubm9kZTtcclxuXHRcdH1cclxuXHRcdGNvbnN0IGxlZnQ6IGJvb2xlYW4gPSB0aGlzLmxlZnQuZXZhbHVhdGUodmFsdWVzRGljdGlvbmFyeSk7XHJcblx0XHRjb25zdCByaWdodDogYm9vbGVhbiA9IHRoaXMucmlnaHQuZXZhbHVhdGUodmFsdWVzRGljdGlvbmFyeSk7XHJcblx0XHRsZXQgcmV0OiBib29sZWFuO1xyXG5cdFx0Ly8gVGhlcmUgaXMgbm8gcG9zc2liaWxpdHkgdG8gY2hlY2sgdGhpcy5ub2RlIHdpdGggdHlwZW9mIG9yIGluc3RhY2VvZiBlbnVtXHJcblx0XHRpZiAodGhpcy5ub2RlID09PSBPcGVyYXRpb25UeXBlLk5vdCkge1xyXG5cdFx0XHRyZXQgPSAhbGVmdDtcclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLm5vZGUgPT09IE9wZXJhdGlvblR5cGUuQW5kKSB7XHJcblx0XHRcdHJldCA9IGxlZnQgJiYgcmlnaHQ7XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5ub2RlID09PSBPcGVyYXRpb25UeXBlLk9yKSB7XHJcblx0XHRcdHJldCA9IGxlZnQgfHwgcmlnaHQ7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmV0O1xyXG5cdH1cclxuXHRwdWJsaWMgZ2VuZXJhdGVGcmVlVmFyaWFibGVzVmFsdWVzKCk6IEFycmF5PERpY3Rpb25hcnk8Ym9vbGVhbj4+IHtcclxuXHRcdGNvbnN0IGZyZWVWYXJpYWJsZXM6IFNldDxzdHJpbmc+ID0gdGhpcy5mcmVlVmFyaWFibGVzKCk7XHJcblx0XHRyZXR1cm4gdGhpcy5nZW5lcmF0ZUZyZWVWYXJpYWJsZVZhbHVlc0JyYW5jaGVzKG5ldyBEaWN0aW9uYXJ5PGJvb2xlYW4+KCksIGZyZWVWYXJpYWJsZXMpO1xyXG5cdH1cclxuXHRwcml2YXRlIGdlbmVyYXRlRnJlZVZhcmlhYmxlVmFsdWVzQnJhbmNoZXModHJ1dGhUYWJsZTogRGljdGlvbmFyeTxib29sZWFuPiwgZnJlZVZhcmlhYmxlczogU2V0PHN0cmluZz4pOiBBcnJheTxEaWN0aW9uYXJ5PGJvb2xlYW4+PiB7XHJcblx0XHRjb25zdCB2YXJpYWJsZTogc3RyaW5nID0gZnJlZVZhcmlhYmxlcz8ua2V5cygpPy5uZXh0KCk/LnZhbHVlO1xyXG5cdFx0ZnJlZVZhcmlhYmxlcy5kZWxldGUodmFyaWFibGUpO1xyXG5cdFx0Y29uc3QgYnJhbmNoMSA9IHRydXRoVGFibGUuRGVlcENvcHkoKTtcclxuXHRcdGJyYW5jaDEuQWRkKHZhcmlhYmxlLCB0cnVlKTtcclxuXHRcdGNvbnN0IGJyYW5jaDIgPSB0cnV0aFRhYmxlLkRlZXBDb3B5KCk7XHJcblx0XHRicmFuY2gyLkFkZCh2YXJpYWJsZSwgZmFsc2UpO1xyXG5cdFx0aWYgKGZyZWVWYXJpYWJsZXMuc2l6ZSA+IDApIHtcclxuXHRcdFx0Y29uc3QgbmV3RnJlZVZhcmlhYmxlczE6IFNldDxzdHJpbmc+ID0gdGhpcy5EZWVwQ29weVNldChmcmVlVmFyaWFibGVzKTtcclxuXHRcdFx0Y29uc3QgbmV3RnJlZVZhcmlhYmxlczI6IFNldDxzdHJpbmc+ID0gdGhpcy5EZWVwQ29weVNldChmcmVlVmFyaWFibGVzKTtcclxuXHRcdFx0cmV0dXJuIHRoaXMuZ2VuZXJhdGVGcmVlVmFyaWFibGVWYWx1ZXNCcmFuY2hlcyhicmFuY2gxLCBuZXdGcmVlVmFyaWFibGVzMSkuY29uY2F0KHRoaXMuZ2VuZXJhdGVGcmVlVmFyaWFibGVWYWx1ZXNCcmFuY2hlcyhicmFuY2gyLCBuZXdGcmVlVmFyaWFibGVzMikpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIFticmFuY2gxLCBicmFuY2gyXTtcclxuXHRcdH1cclxuXHR9XHJcblx0cHJpdmF0ZSBEZWVwQ29weVNldChzZXQ6IFNldDxzdHJpbmc+KTogU2V0PHN0cmluZz4ge1xyXG5cdFx0Y29uc3QgcmV0OiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQ8c3RyaW5nPigpO1xyXG5cdFx0Zm9yIChjb25zdCBrZXkgb2Ygc2V0KSB7XHJcblx0XHRcdHJldC5hZGQoa2V5KTtcclxuXHRcdH1cclxuXHRcdHJldHVybiByZXQ7XHJcblx0fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBQYXJzZXI8VCBleHRlbmRzIEJvb2xlYW5MZXhlcj4ge1xyXG5cdHByaXZhdGUgbGV4OiBUO1xyXG5cdHB1YmxpYyBwYXJzZShsZXhlclR5cGU6IG5ldyAoY29kZTogc3RyaW5nKSA9PiBULCBjb2RlOiBzdHJpbmcpOiBFeHByZXNzaW9uVHJlZSB7XHJcblx0XHR0aGlzLmxleCA9IG5ldyBsZXhlclR5cGUoY29kZSk7XHJcblx0XHRjb25zdCBleHByZXNzaW9uOiBFeHByZXNzaW9uVHJlZSA9IHRoaXMuZXhwcigpO1xyXG5cdFx0Y29uc3QgdG9rZW46IEJvb2xlYW5Ub2tlbiA9IHRoaXMubGV4LmdldFRva2VuQW5kQWR2YW5jZSgpO1xyXG5cdFx0aWYgKHRva2VuLnR5cGUgPT09IEJvb2xlYW5Ub2tlblR5cGUuRW5kKSB7XHJcblx0XHRcdHJldHVybiBleHByZXNzaW9uO1xyXG5cdFx0fVxyXG5cdFx0dGhyb3cgRXJyb3IoXCJFbmQgZXhwZWN0ZWRcIik7XHJcblx0fVxyXG5cdHByaXZhdGUgZXhwcigpOiBFeHByZXNzaW9uVHJlZSB7XHJcblx0XHRsZXQgYm9vbGVhbkV4cHJlc3Npb25UcmVlOiBFeHByZXNzaW9uVHJlZTtcclxuXHRcdGxldCB0b2tlbjogQm9vbGVhblRva2VuID0gdGhpcy5sZXguZ2V0VG9rZW5BbmRBZHZhbmNlKCk7XHJcblx0XHRpZiAodG9rZW4udHlwZSA9PT0gQm9vbGVhblRva2VuVHlwZS5FbmQpIHtcclxuXHRcdFx0cmV0dXJuIGJvb2xlYW5FeHByZXNzaW9uVHJlZTtcclxuXHRcdH1cclxuXHRcdGlmICh0b2tlbi50eXBlID09PSBCb29sZWFuVG9rZW5UeXBlLkxQYXJlbikge1xyXG5cdFx0XHRib29sZWFuRXhwcmVzc2lvblRyZWUgPSBuZXcgRXhwcmVzc2lvblRyZWUoKTtcclxuXHRcdFx0Ym9vbGVhbkV4cHJlc3Npb25UcmVlLmxlZnQgPSB0aGlzLmV4cHIoKTtcclxuXHRcdFx0dG9rZW4gPSB0aGlzLmxleC5nZXRUb2tlbkFuZEFkdmFuY2UoKTtcclxuXHRcdFx0aWYgKHRva2VuLnR5cGUgIT09IEJvb2xlYW5Ub2tlblR5cGUuUlBhcmVuKSB7XHJcblx0XHRcdFx0dGhyb3cgRXJyb3IoXCJVbmJhbGFuY2VkIHBhcmVudGhlc2lzLlwiKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0b2tlbiA9IHRoaXMubGV4LmdldFRva2VuQW5kQWR2YW5jZSgpO1xyXG5cdFx0XHRzd2l0Y2ggKHRva2VuLnR5cGUpIHtcclxuXHRcdFx0XHRjYXNlIEJvb2xlYW5Ub2tlblR5cGUuT3I6XHJcblx0XHRcdFx0XHRib29sZWFuRXhwcmVzc2lvblRyZWUubm9kZSA9IE9wZXJhdGlvblR5cGUuT3I7XHJcblx0XHRcdFx0XHRib29sZWFuRXhwcmVzc2lvblRyZWUucmlnaHQgPSB0aGlzLmV4cHIoKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgQm9vbGVhblRva2VuVHlwZS5BbmQ6XHJcblx0XHRcdFx0XHRib29sZWFuRXhwcmVzc2lvblRyZWUubm9kZSA9IE9wZXJhdGlvblR5cGUuQW5kO1xyXG5cdFx0XHRcdFx0Ym9vbGVhbkV4cHJlc3Npb25UcmVlLnJpZ2h0ID0gdGhpcy5leHByKCk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIEJvb2xlYW5Ub2tlblR5cGUuRW5kOlxyXG5cdFx0XHRcdFx0cmV0dXJuIGJvb2xlYW5FeHByZXNzaW9uVHJlZTtcclxuXHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdFx0dGhyb3cgRXJyb3IoXCJJbmNvcnJlY3Qgc3ludGF4LlwiKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5sZXgucmV2ZXJ0KCk7XHJcblx0XHRcdGJvb2xlYW5FeHByZXNzaW9uVHJlZSA9IHRoaXMuYmluYXJ5T3AoKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBib29sZWFuRXhwcmVzc2lvblRyZWU7XHJcblx0fVxyXG5cdHByaXZhdGUgYmluYXJ5T3AoKTogRXhwcmVzc2lvblRyZWUge1xyXG5cdFx0bGV0IGJvb2xlYW5FeHByZXNzaW9uVHJlZTogRXhwcmVzc2lvblRyZWU7XHJcblx0XHRsZXQgdG9rZW46IEJvb2xlYW5Ub2tlbiA9IHRoaXMubGV4LmdldFRva2VuQW5kQWR2YW5jZSgpO1xyXG5cdFx0aWYgKHRva2VuLnR5cGUgPT09IEJvb2xlYW5Ub2tlblR5cGUuVmFyaWFibGUgfHwgdG9rZW4udHlwZSA9PT0gQm9vbGVhblRva2VuVHlwZS5UcnVlIHx8IHRva2VuLnR5cGUgPT09IEJvb2xlYW5Ub2tlblR5cGUuRmFsc2UpIHtcclxuXHRcdFx0Ym9vbGVhbkV4cHJlc3Npb25UcmVlID0gbmV3IEV4cHJlc3Npb25UcmVlKCk7XHJcblx0XHRcdGJvb2xlYW5FeHByZXNzaW9uVHJlZS5sZWZ0ID0gbmV3IEV4cHJlc3Npb25UcmVlKHRva2VuLnZhcmlhYmxlKTtcclxuXHRcdFx0dG9rZW4gPSB0aGlzLmxleC5nZXRUb2tlbkFuZEFkdmFuY2UoKTtcclxuXHRcdFx0c3dpdGNoICh0b2tlbi50eXBlKSB7XHJcblx0XHRcdFx0Y2FzZSBCb29sZWFuVG9rZW5UeXBlLk9yOlxyXG5cdFx0XHRcdFx0Ym9vbGVhbkV4cHJlc3Npb25UcmVlLm5vZGUgPSBPcGVyYXRpb25UeXBlLk9yO1xyXG5cdFx0XHRcdFx0Ym9vbGVhbkV4cHJlc3Npb25UcmVlLnJpZ2h0ID0gdGhpcy5leHByKCk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIEJvb2xlYW5Ub2tlblR5cGUuQW5kOlxyXG5cdFx0XHRcdFx0Ym9vbGVhbkV4cHJlc3Npb25UcmVlLm5vZGUgPSBPcGVyYXRpb25UeXBlLkFuZDtcclxuXHRcdFx0XHRcdGJvb2xlYW5FeHByZXNzaW9uVHJlZS5yaWdodCA9IHRoaXMuZXhwcigpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRcdHRocm93IEVycm9yKFwiSW5jb3JyZWN0IHN5bnRheC5cIik7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMubGV4LnJldmVydCgpO1xyXG5cdFx0XHRib29sZWFuRXhwcmVzc2lvblRyZWUgPSB0aGlzLnVuYXJ5T3AoKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBib29sZWFuRXhwcmVzc2lvblRyZWU7XHJcblx0fVxyXG5cdHByaXZhdGUgdW5hcnlPcCgpOiBFeHByZXNzaW9uVHJlZSB7XHJcblx0XHRsZXQgYm9vbGVhbkV4cHJlc3Npb25UcmVlOiBFeHByZXNzaW9uVHJlZTtcclxuXHRcdGxldCB0b2tlbjogQm9vbGVhblRva2VuID0gdGhpcy5sZXguZ2V0VG9rZW5BbmRBZHZhbmNlKCk7XHJcblx0XHRpZiAodG9rZW4udHlwZSA9PT0gQm9vbGVhblRva2VuVHlwZS5Ob3QpIHtcclxuXHRcdFx0Ym9vbGVhbkV4cHJlc3Npb25UcmVlID0gbmV3IEV4cHJlc3Npb25UcmVlKE9wZXJhdGlvblR5cGUuTm90KTtcclxuXHRcdFx0dG9rZW4gPSB0aGlzLmxleC5nZXRUb2tlbkFuZEFkdmFuY2UoKTtcclxuXHRcdFx0aWYgKHRva2VuLnR5cGUgPT09IEJvb2xlYW5Ub2tlblR5cGUuVmFyaWFibGUgfHwgdG9rZW4udHlwZSA9PT0gQm9vbGVhblRva2VuVHlwZS5UcnVlIHx8IHRva2VuLnR5cGUgPT09IEJvb2xlYW5Ub2tlblR5cGUuRmFsc2UpIHtcclxuXHRcdFx0XHRib29sZWFuRXhwcmVzc2lvblRyZWUubGVmdCA9IG5ldyBFeHByZXNzaW9uVHJlZSh0b2tlbi52YXJpYWJsZSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5sZXgucmV2ZXJ0KCk7XHJcblx0XHRcdFx0aWYgKHRva2VuLnR5cGUgIT09IEJvb2xlYW5Ub2tlblR5cGUuRW5kKSB7XHJcblx0XHRcdFx0XHRib29sZWFuRXhwcmVzc2lvblRyZWUubGVmdCA9IHRoaXMuZXhwcigpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhyb3cgRXJyb3IoXCJJbmNvcnJlY3Qgc3ludGF4LlwiKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBib29sZWFuRXhwcmVzc2lvblRyZWU7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQm9vbGVhbkxleGVyQ1MgZXh0ZW5kcyBCb29sZWFuTGV4ZXIge1xyXG5cdHByb3RlY3RlZCBpbnB1dENoZWNrUmVnZXg6IFJlZ0V4cCA9IC9cXCh8XFwpfFtcXHxcXCZcXCFdfFtBLVpdfFsxMF0qL2c7XHJcblx0cHJvdGVjdGVkIHRva2VuUmVnZXhPcjogUmVnRXhwID0gL1xcfC87XHJcblx0cHJvdGVjdGVkIHRva2VuUmVnZXhBbmQ6IFJlZ0V4cCA9IC9cXCYvO1xyXG5cdHByb3RlY3RlZCB0b2tlblJlZ2V4Tm90OiBSZWdFeHAgPSAvXFwhLztcclxuXHRwcm90ZWN0ZWQgdG9rZW5SZWdleFRydWU6IFJlZ0V4cCA9IC8xLztcclxuXHRwcm90ZWN0ZWQgdG9rZW5SZWdleEZhbHNlOiBSZWdFeHAgPSAvMC87XHJcblx0Y29uc3RydWN0b3IoaW5wdXQ6IHN0cmluZykge1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdHRoaXMudG9rZW5pemUoaW5wdXQpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJvb2xlYW5MZXhlck1hdGggZXh0ZW5kcyBCb29sZWFuTGV4ZXIge1xyXG5cdHByb3RlY3RlZCBpbnB1dENoZWNrUmVnZXg6IFJlZ0V4cCA9IC9cXCh8XFwpfFtcXCtcXCpcXH5dfFtBLVpdfFsxMF0qL2c7XHJcblx0cHJvdGVjdGVkIHRva2VuUmVnZXhPcjogUmVnRXhwID0gL1xcKy87XHJcblx0cHJvdGVjdGVkIHRva2VuUmVnZXhBbmQ6IFJlZ0V4cCA9IC9cXCovO1xyXG5cdHByb3RlY3RlZCB0b2tlblJlZ2V4Tm90OiBSZWdFeHAgPSAvXFx+LztcclxuXHRwcm90ZWN0ZWQgdG9rZW5SZWdleFRydWU6IFJlZ0V4cCA9IC8xLztcclxuXHRwcm90ZWN0ZWQgdG9rZW5SZWdleEZhbHNlOiBSZWdFeHAgPSAvMC87XHJcblx0Y29uc3RydWN0b3IoaW5wdXQ6IHN0cmluZykge1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdHRoaXMudG9rZW5pemUoaW5wdXQpO1xyXG5cdH1cclxufVxyXG5cclxuLypcclxuZXhwclx0XHRcdDogTFBBUkFNIGV4cHIgUlBBUkFNICgoQU5EIHwgT1IpIGV4cHIpKlxyXG5cdFx0XHRcdHwgYmluYXJ5T3BcclxuYmluYXJ5T3BcdFx0OiAodmFyaWFibGVUZXJtIHwgYm9vbGVhblRlcm0pICgoQU5EIHwgT1IpIGV4cHIpK1xyXG5cdFx0XHRcdHwgdW5hcnlPcCAoKEFORCB8IE9SKSBleHByKStcclxudW5hcnlPcFx0XHRcdDogTk9UICh2YXJpYWJsZVRlcm0gfCBib29sZWFuVGVybSB8IExQQVJBTSBleHByIFJQQVJBTSlcclxudmFyaWFibGVUZXJtXHQ6IHZhcmlhYmxlXHJcbmJvb2xlYW5UZXJtXHRcdDogVFJVRSB8IEZBTFNFXHJcbiovIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9