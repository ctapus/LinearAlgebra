/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/structures/BooleanEvaluator.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/structures/BooleanEvaluator.ts":
/*!********************************************!*\
  !*** ./src/structures/BooleanEvaluator.ts ***!
  \********************************************/
/*! exports provided: BooleanTokenType, BooleanToken, ExpressionTree, Parser, BooleanLexerCS, BooleanLexerMath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooleanTokenType", function() { return BooleanTokenType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooleanToken", function() { return BooleanToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpressionTree", function() { return ExpressionTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Parser", function() { return Parser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooleanLexerCS", function() { return BooleanLexerCS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooleanLexerMath", function() { return BooleanLexerMath; });
/* harmony import */ var _Dictionary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dictionary */ "./src/structures/Dictionary.ts");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


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

var BooleanToken = function BooleanToken(type, variable) {
  _classCallCheck(this, BooleanToken);

  _defineProperty(this, "type", void 0);

  _defineProperty(this, "variable", void 0);

  this.type = type;
  this.variable = variable;
};

var BooleanLexer = /*#__PURE__*/function () {
  function BooleanLexer() {
    _classCallCheck(this, BooleanLexer);

    _defineProperty(this, "inputCheckRegex", void 0);

    _defineProperty(this, "tokenRegexOr", void 0);

    _defineProperty(this, "tokenRegexAnd", void 0);

    _defineProperty(this, "tokenRegexNot", void 0);

    _defineProperty(this, "tokenRegexTrue", void 0);

    _defineProperty(this, "tokenRegexFalse", void 0);

    _defineProperty(this, "tokenRegexLParen", /\(/);

    _defineProperty(this, "tokenRegexRParen", /\)/);

    _defineProperty(this, "tokenRegexVariable", /[A-Z]/);

    _defineProperty(this, "tokens", void 0);

    _defineProperty(this, "tokenIndex", void 0);
  }

  _createClass(BooleanLexer, [{
    key: "getTokenAndAdvance",
    value: function getTokenAndAdvance() {
      if (this.tokens.length - 1 === this.tokenIndex) {
        return new BooleanToken(BooleanTokenType.End);
      }

      var input = this.tokens[this.tokenIndex++];
      return this.getToken(input);
    }
  }, {
    key: "revert",
    value: function revert() {
      if (this.tokenIndex <= 0) {
        throw Error("Index out of range");
      }

      this.tokenIndex--;
    }
  }, {
    key: "tokenize",
    value: function tokenize(input) {
      this.tokens = input.replace(" ", "").match(this.inputCheckRegex);
      this.tokenIndex = 0;
    }
  }, {
    key: "getToken",
    value: function getToken(input) {
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
  }]);

  return BooleanLexer;
}();

var OperationType;

(function (OperationType) {
  OperationType[OperationType["Or"] = 0] = "Or";
  OperationType[OperationType["And"] = 1] = "And";
  OperationType[OperationType["Not"] = 2] = "Not";
})(OperationType || (OperationType = {}));

var ExpressionTree = /*#__PURE__*/function () {
  function ExpressionTree(input) {
    _classCallCheck(this, ExpressionTree);

    _defineProperty(this, "left", void 0);

    _defineProperty(this, "node", void 0);

    _defineProperty(this, "right", void 0);

    this.node = input;
  }

  _createClass(ExpressionTree, [{
    key: "freeVariables",
    value: function freeVariables() {
      var _this$left, _this$right;

      var freeVariables = new Set();

      if (typeof this.node === "string") {
        freeVariables.add(this.node);
      }

      var leftBranch = (_this$left = this.left) === null || _this$left === void 0 ? void 0 : _this$left.freeVariables();

      if (leftBranch) {
        var _iterator = _createForOfIteratorHelper(leftBranch),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var x = _step.value;
            freeVariables.add(x);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      var rightBranch = (_this$right = this.right) === null || _this$right === void 0 ? void 0 : _this$right.freeVariables();

      if (rightBranch) {
        var _iterator2 = _createForOfIteratorHelper(rightBranch),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _x = _step2.value;
            freeVariables.add(_x);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }

      return freeVariables;
    }
  }, {
    key: "evaluate",
    value: function evaluate(valuesDictionary) {
      if (typeof this.node === "string") {// search the valuesDictionary
        // and return
      }

      if (typeof this.node === "boolean") {
        return this.node;
      }

      var left = this.left.evaluate(valuesDictionary);
      var right = this.right.evaluate(valuesDictionary);
      var ret; // There is no possibility to check this.node with typeof or instaceof enum

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
  }, {
    key: "generateFreeVariablesValues",
    value: function generateFreeVariablesValues() {
      var freeVariables = this.freeVariables();
      return this.generateFreeVariableValuesBranches(new _Dictionary__WEBPACK_IMPORTED_MODULE_0__["Dictionary"](), freeVariables);
    }
  }, {
    key: "generateFreeVariableValuesBranches",
    value: function generateFreeVariableValuesBranches(truthTable, freeVariables) {
      var _freeVariables$keys, _freeVariables$keys$n;

      var variable = freeVariables === null || freeVariables === void 0 ? void 0 : (_freeVariables$keys = freeVariables.keys()) === null || _freeVariables$keys === void 0 ? void 0 : (_freeVariables$keys$n = _freeVariables$keys.next()) === null || _freeVariables$keys$n === void 0 ? void 0 : _freeVariables$keys$n.value;
      freeVariables["delete"](variable);
      var branch1 = truthTable.DeepCopy();
      branch1.Add(variable, true);
      var branch2 = truthTable.DeepCopy();
      branch2.Add(variable, false);

      if (freeVariables.size > 0) {
        var newFreeVariables1 = this.DeepCopySet(freeVariables);
        var newFreeVariables2 = this.DeepCopySet(freeVariables);
        return this.generateFreeVariableValuesBranches(branch1, newFreeVariables1).concat(this.generateFreeVariableValuesBranches(branch2, newFreeVariables2));
      } else {
        return [branch1, branch2];
      }
    }
  }, {
    key: "DeepCopySet",
    value: function DeepCopySet(set) {
      var ret = new Set();

      var _iterator3 = _createForOfIteratorHelper(set),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var key = _step3.value;
          ret.add(key);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      return ret;
    }
  }]);

  return ExpressionTree;
}();
var Parser = /*#__PURE__*/function () {
  function Parser() {
    _classCallCheck(this, Parser);

    _defineProperty(this, "lex", void 0);
  }

  _createClass(Parser, [{
    key: "parse",
    value: function parse(lexerType, code) {
      this.lex = new lexerType(code);
      var expression = this.expr();
      var token = this.lex.getTokenAndAdvance();

      if (token.type === BooleanTokenType.End) {
        return expression;
      }

      throw Error("End expected");
    }
  }, {
    key: "expr",
    value: function expr() {
      var booleanExpressionTree;
      var token = this.lex.getTokenAndAdvance();

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
      } else {
        this.lex.revert();
        booleanExpressionTree = this.binaryOp();
      }

      return booleanExpressionTree;
    }
  }, {
    key: "binaryOp",
    value: function binaryOp() {
      var booleanExpressionTree;
      var token = this.lex.getTokenAndAdvance();

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
      } else {
        this.lex.revert();
        booleanExpressionTree = this.unaryOp();
      }

      return booleanExpressionTree;
    }
  }, {
    key: "unaryOp",
    value: function unaryOp() {
      var booleanExpressionTree;
      var token = this.lex.getTokenAndAdvance();

      if (token.type === BooleanTokenType.Not) {
        booleanExpressionTree = new ExpressionTree(OperationType.Not);
        token = this.lex.getTokenAndAdvance();

        if (token.type === BooleanTokenType.Variable || token.type === BooleanTokenType.True || token.type === BooleanTokenType.False) {
          booleanExpressionTree.left = new ExpressionTree(token.variable);
        } else {
          this.lex.revert();

          if (token.type !== BooleanTokenType.End) {
            booleanExpressionTree.left = this.expr();
          }
        }
      } else {
        throw Error("Incorrect syntax.");
      }

      return booleanExpressionTree;
    }
  }]);

  return Parser;
}();
var BooleanLexerCS = /*#__PURE__*/function (_BooleanLexer) {
  _inherits(BooleanLexerCS, _BooleanLexer);

  var _super = _createSuper(BooleanLexerCS);

  function BooleanLexerCS(input) {
    var _this;

    _classCallCheck(this, BooleanLexerCS);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "inputCheckRegex", /\(|\)|[\|\&\!]|[A-Z]|[10]*/g);

    _defineProperty(_assertThisInitialized(_this), "tokenRegexOr", /\|/);

    _defineProperty(_assertThisInitialized(_this), "tokenRegexAnd", /\&/);

    _defineProperty(_assertThisInitialized(_this), "tokenRegexNot", /\!/);

    _defineProperty(_assertThisInitialized(_this), "tokenRegexTrue", /1/);

    _defineProperty(_assertThisInitialized(_this), "tokenRegexFalse", /0/);

    _this.tokenize(input);

    return _this;
  }

  return BooleanLexerCS;
}(BooleanLexer);
var BooleanLexerMath = /*#__PURE__*/function (_BooleanLexer2) {
  _inherits(BooleanLexerMath, _BooleanLexer2);

  var _super2 = _createSuper(BooleanLexerMath);

  function BooleanLexerMath(input) {
    var _this2;

    _classCallCheck(this, BooleanLexerMath);

    _this2 = _super2.call(this);

    _defineProperty(_assertThisInitialized(_this2), "inputCheckRegex", /\(|\)|[\+\*\~]|[A-Z]|[10]*/g);

    _defineProperty(_assertThisInitialized(_this2), "tokenRegexOr", /\+/);

    _defineProperty(_assertThisInitialized(_this2), "tokenRegexAnd", /\*/);

    _defineProperty(_assertThisInitialized(_this2), "tokenRegexNot", /\~/);

    _defineProperty(_assertThisInitialized(_this2), "tokenRegexTrue", /1/);

    _defineProperty(_assertThisInitialized(_this2), "tokenRegexFalse", /0/);

    _this2.tokenize(input);

    return _this2;
  }

  return BooleanLexerMath;
}(BooleanLexer);
/*
expr			: LPARAM expr RPARAM ((AND | OR) expr)*
				| binaryOp
binaryOp		: (variableTerm | booleanTerm) ((AND | OR) expr)+
				| unaryOp ((AND | OR) expr)+
unaryOp			: NOT (variableTerm | booleanTerm | LPARAM expr RPARAM)
variableTerm	: variable
booleanTerm		: TRUE | FALSE
*/

/***/ }),

/***/ "./src/structures/Dictionary.ts":
/*!**************************************!*\
  !*** ./src/structures/Dictionary.ts ***!
  \**************************************/
/*! exports provided: Dictionary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dictionary", function() { return Dictionary; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Dictionary = /*#__PURE__*/function () {
  function Dictionary() {
    _classCallCheck(this, Dictionary);

    _defineProperty(this, "items", {});

    _defineProperty(this, "count", 0);
  }

  _createClass(Dictionary, [{
    key: "Add",
    value: function Add(key, value) {
      if (!this.items.hasOwnProperty(key)) {
        this.count++;
      }

      this.items[key] = value;
    }
  }, {
    key: "ContainsKey",
    value: function ContainsKey(key) {
      return this.items.hasOwnProperty(key);
    }
  }, {
    key: "Count",
    value: function Count() {
      return this.count;
    }
  }, {
    key: "Item",
    value: function Item(key) {
      return this.items[key];
    }
  }, {
    key: "Remove",
    value: function Remove(key) {
      var val = this.items[key];
      delete this.items[key];
      this.count--;
      return val;
    }
  }, {
    key: "Keys",
    value: function Keys() {
      var keySet = [];

      for (var prop in this.items) {
        if (this.items.hasOwnProperty(prop)) {
          keySet.push(prop);
        }
      }

      return keySet;
    }
  }, {
    key: "Values",
    value: function Values() {
      var values = [];

      for (var prop in this.items) {
        if (this.items.hasOwnProperty(prop)) {
          values.push(this.items[prop]);
        }
      }

      return values;
    }
  }, {
    key: "DeepCopy",
    value: function DeepCopy() {
      var ret = new Dictionary();

      for (var item in this.items) {
        ret.items[item] = this.items[item];
      }

      ret.count = this.count;
      return ret;
    }
  }]);

  return Dictionary;
}();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0cnVjdHVyZXMvQm9vbGVhbkV2YWx1YXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RydWN0dXJlcy9EaWN0aW9uYXJ5LnRzIl0sIm5hbWVzIjpbIkJvb2xlYW5Ub2tlblR5cGUiLCJCb29sZWFuVG9rZW4iLCJ0eXBlIiwidmFyaWFibGUiLCJCb29sZWFuTGV4ZXIiLCJ0b2tlbnMiLCJsZW5ndGgiLCJ0b2tlbkluZGV4IiwiRW5kIiwiaW5wdXQiLCJnZXRUb2tlbiIsIkVycm9yIiwicmVwbGFjZSIsIm1hdGNoIiwiaW5wdXRDaGVja1JlZ2V4IiwidG9rZW5SZWdleE9yIiwidGVzdCIsIk9yIiwidG9rZW5SZWdleEFuZCIsIkFuZCIsInRva2VuUmVnZXhOb3QiLCJOb3QiLCJ0b2tlblJlZ2V4VmFyaWFibGUiLCJWYXJpYWJsZSIsInRva2VuUmVnZXhUcnVlIiwiVHJ1ZSIsInRva2VuUmVnZXhGYWxzZSIsIkZhbHNlIiwidG9rZW5SZWdleExQYXJlbiIsIkxQYXJlbiIsInRva2VuUmVnZXhSUGFyZW4iLCJSUGFyZW4iLCJVbmtub3duIiwiT3BlcmF0aW9uVHlwZSIsIkV4cHJlc3Npb25UcmVlIiwibm9kZSIsImZyZWVWYXJpYWJsZXMiLCJTZXQiLCJhZGQiLCJsZWZ0QnJhbmNoIiwibGVmdCIsIngiLCJyaWdodEJyYW5jaCIsInJpZ2h0IiwidmFsdWVzRGljdGlvbmFyeSIsImV2YWx1YXRlIiwicmV0IiwiZ2VuZXJhdGVGcmVlVmFyaWFibGVWYWx1ZXNCcmFuY2hlcyIsIkRpY3Rpb25hcnkiLCJ0cnV0aFRhYmxlIiwia2V5cyIsIm5leHQiLCJ2YWx1ZSIsImJyYW5jaDEiLCJEZWVwQ29weSIsIkFkZCIsImJyYW5jaDIiLCJzaXplIiwibmV3RnJlZVZhcmlhYmxlczEiLCJEZWVwQ29weVNldCIsIm5ld0ZyZWVWYXJpYWJsZXMyIiwiY29uY2F0Iiwic2V0Iiwia2V5IiwiUGFyc2VyIiwibGV4ZXJUeXBlIiwiY29kZSIsImxleCIsImV4cHJlc3Npb24iLCJleHByIiwidG9rZW4iLCJnZXRUb2tlbkFuZEFkdmFuY2UiLCJib29sZWFuRXhwcmVzc2lvblRyZWUiLCJyZXZlcnQiLCJiaW5hcnlPcCIsInVuYXJ5T3AiLCJCb29sZWFuTGV4ZXJDUyIsInRva2VuaXplIiwiQm9vbGVhbkxleGVyTWF0aCIsIml0ZW1zIiwiaGFzT3duUHJvcGVydHkiLCJjb3VudCIsInZhbCIsImtleVNldCIsInByb3AiLCJwdXNoIiwidmFsdWVzIiwiaXRlbSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ08sSUFBS0EsZ0JBQVo7O1dBQVlBLGdCO0FBQUFBLGtCLENBQUFBLGdCO0FBQUFBLGtCLENBQUFBLGdCO0FBQUFBLGtCLENBQUFBLGdCO0FBQUFBLGtCLENB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QUFLTixLQUFMLENBQVdLLElBQVgsQ0FBWjtBQUNBO0FBQ0Q7O0FBQ0QsYUFBT0UsTUFBUDtBQUNBO0FBekNGO0FBQUE7QUFBQSwrQkEwQ2tDO0FBQ2hDLFVBQU14QyxHQUFrQixHQUFHLElBQUlFLFVBQUosRUFBM0I7O0FBQ0EsV0FBSyxJQUFNdUMsSUFBWCxJQUFtQixLQUFLUixLQUF4QixFQUErQjtBQUM5QmpDLFdBQUcsQ0FBQ2lDLEtBQUosQ0FBVVEsSUFBVixJQUFrQixLQUFLUixLQUFMLENBQVdRLElBQVgsQ0FBbEI7QUFDQTs7QUFDRHpDLFNBQUcsQ0FBQ21DLEtBQUosR0FBWSxLQUFLQSxLQUFqQjtBQUNBLGFBQU9uQyxHQUFQO0FBQ0E7QUFqREY7O0FBQUE7QUFBQSxJIiwiZmlsZSI6Ii4vQm9vbGVhbkV2YWx1YXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3N0cnVjdHVyZXMvQm9vbGVhbkV2YWx1YXRvci50c1wiKTtcbiIsImltcG9ydCB7IERpY3Rpb25hcnkgfSBmcm9tIFwiLi9EaWN0aW9uYXJ5XCI7XHJcbmV4cG9ydCBlbnVtIEJvb2xlYW5Ub2tlblR5cGUgeyBPciwgQW5kLCBOb3QsIFRydWUsIEZhbHNlLCBWYXJpYWJsZSwgTFBhcmVuLCBSUGFyZW4sIEVuZCwgVW5rbm93biB9XHJcbmV4cG9ydCBjbGFzcyBCb29sZWFuVG9rZW4ge1xyXG5cdHB1YmxpYyB0eXBlOiBCb29sZWFuVG9rZW5UeXBlO1xyXG5cdHB1YmxpYyB2YXJpYWJsZTogc3RyaW5nIHwgYm9vbGVhbjtcclxuXHRjb25zdHJ1Y3Rvcih0eXBlOiBCb29sZWFuVG9rZW5UeXBlLCB2YXJpYWJsZT86IHN0cmluZyB8IGJvb2xlYW4pIHtcclxuXHRcdHRoaXMudHlwZSA9IHR5cGU7XHJcblx0XHR0aGlzLnZhcmlhYmxlID0gdmFyaWFibGU7XHJcblx0fVxyXG59XHJcbmFic3RyYWN0IGNsYXNzIEJvb2xlYW5MZXhlciB7XHJcblx0cHJvdGVjdGVkIGlucHV0Q2hlY2tSZWdleDogUmVnRXhwO1xyXG5cdHByb3RlY3RlZCB0b2tlblJlZ2V4T3I6IFJlZ0V4cDtcclxuXHRwcm90ZWN0ZWQgdG9rZW5SZWdleEFuZDogUmVnRXhwO1xyXG5cdHByb3RlY3RlZCB0b2tlblJlZ2V4Tm90OiBSZWdFeHA7XHJcblx0cHJvdGVjdGVkIHRva2VuUmVnZXhUcnVlOiBSZWdFeHA7XHJcblx0cHJvdGVjdGVkIHRva2VuUmVnZXhGYWxzZTogUmVnRXhwO1xyXG5cdHByb3RlY3RlZCB0b2tlblJlZ2V4TFBhcmVuOiBSZWdFeHAgPSAvXFwoLztcclxuXHRwcm90ZWN0ZWQgdG9rZW5SZWdleFJQYXJlbjogUmVnRXhwID0gL1xcKS87XHJcblx0cHJvdGVjdGVkIHRva2VuUmVnZXhWYXJpYWJsZTogUmVnRXhwID0gL1tBLVpdLztcclxuXHRwcml2YXRlIHRva2Vuczogc3RyaW5nW107XHJcblx0cHJpdmF0ZSB0b2tlbkluZGV4OiBudW1iZXI7XHJcblx0cHVibGljIGdldFRva2VuQW5kQWR2YW5jZSgpOiBCb29sZWFuVG9rZW4ge1xyXG5cdFx0aWYgKHRoaXMudG9rZW5zLmxlbmd0aCAtIDEgPT09IHRoaXMudG9rZW5JbmRleCkgeyByZXR1cm4gbmV3IEJvb2xlYW5Ub2tlbihCb29sZWFuVG9rZW5UeXBlLkVuZCk7IH1cclxuXHRcdGNvbnN0IGlucHV0OiBzdHJpbmcgPSB0aGlzLnRva2Vuc1t0aGlzLnRva2VuSW5kZXgrK107XHJcblx0XHRyZXR1cm4gdGhpcy5nZXRUb2tlbihpbnB1dCk7XHJcblx0fVxyXG5cdHB1YmxpYyByZXZlcnQoKTogdm9pZCB7XHJcblx0XHRpZiAodGhpcy50b2tlbkluZGV4IDw9IDApIHsgdGhyb3cgRXJyb3IoXCJJbmRleCBvdXQgb2YgcmFuZ2VcIik7IH1cclxuXHRcdHRoaXMudG9rZW5JbmRleC0tO1xyXG5cdH1cclxuXHRwcm90ZWN0ZWQgdG9rZW5pemUoaW5wdXQ6IHN0cmluZykge1xyXG5cdFx0dGhpcy50b2tlbnMgPSBpbnB1dC5yZXBsYWNlKFwiIFwiLCBcIlwiKS5tYXRjaCh0aGlzLmlucHV0Q2hlY2tSZWdleCk7XHJcblx0XHR0aGlzLnRva2VuSW5kZXggPSAwO1xyXG5cdH1cclxuXHRwcml2YXRlIGdldFRva2VuKGlucHV0OiBzdHJpbmcpOiBCb29sZWFuVG9rZW4ge1xyXG5cdFx0aWYgKHRoaXMudG9rZW5SZWdleE9yLnRlc3QoaW5wdXQpKSB7XHJcblx0XHRcdHJldHVybiBuZXcgQm9vbGVhblRva2VuKEJvb2xlYW5Ub2tlblR5cGUuT3IpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMudG9rZW5SZWdleEFuZC50ZXN0KGlucHV0KSkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IEJvb2xlYW5Ub2tlbihCb29sZWFuVG9rZW5UeXBlLkFuZCk7XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy50b2tlblJlZ2V4Tm90LnRlc3QoaW5wdXQpKSB7XHJcblx0XHRcdHJldHVybiBuZXcgQm9vbGVhblRva2VuKEJvb2xlYW5Ub2tlblR5cGUuTm90KTtcclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLnRva2VuUmVnZXhWYXJpYWJsZS50ZXN0KGlucHV0KSkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IEJvb2xlYW5Ub2tlbihCb29sZWFuVG9rZW5UeXBlLlZhcmlhYmxlLCBpbnB1dCk7XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy50b2tlblJlZ2V4VHJ1ZS50ZXN0KGlucHV0KSkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IEJvb2xlYW5Ub2tlbihCb29sZWFuVG9rZW5UeXBlLlRydWUpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMudG9rZW5SZWdleEZhbHNlLnRlc3QoaW5wdXQpKSB7XHJcblx0XHRcdHJldHVybiBuZXcgQm9vbGVhblRva2VuKEJvb2xlYW5Ub2tlblR5cGUuRmFsc2UpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMudG9rZW5SZWdleExQYXJlbi50ZXN0KGlucHV0KSkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IEJvb2xlYW5Ub2tlbihCb29sZWFuVG9rZW5UeXBlLkxQYXJlbik7XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy50b2tlblJlZ2V4UlBhcmVuLnRlc3QoaW5wdXQpKSB7XHJcblx0XHRcdHJldHVybiBuZXcgQm9vbGVhblRva2VuKEJvb2xlYW5Ub2tlblR5cGUuUlBhcmVuKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBuZXcgQm9vbGVhblRva2VuKEJvb2xlYW5Ub2tlblR5cGUuVW5rbm93bik7XHJcblx0fVxyXG59XHJcbmVudW0gT3BlcmF0aW9uVHlwZSB7IE9yLCBBbmQsIE5vdH1cclxuZXhwb3J0IGNsYXNzIEV4cHJlc3Npb25UcmVlIHtcclxuXHRwdWJsaWMgbGVmdDogRXhwcmVzc2lvblRyZWU7XHJcblx0cHVibGljIG5vZGU6IHN0cmluZyB8IGJvb2xlYW4gfCBPcGVyYXRpb25UeXBlO1xyXG5cdHB1YmxpYyByaWdodDogRXhwcmVzc2lvblRyZWU7XHJcblx0Y29uc3RydWN0b3IoaW5wdXQ/OiBzdHJpbmcgfCBib29sZWFuIHwgT3BlcmF0aW9uVHlwZSkge1xyXG5cdFx0dGhpcy5ub2RlID0gaW5wdXQ7XHJcblx0fVxyXG5cdHB1YmxpYyBmcmVlVmFyaWFibGVzKCk6IFNldDxzdHJpbmc+IHtcclxuXHRcdGNvbnN0IGZyZWVWYXJpYWJsZXM6IFNldDxzdHJpbmc+ID0gbmV3IFNldDxzdHJpbmc+KCk7XHJcblx0XHRpZiAodHlwZW9mIHRoaXMubm9kZSA9PT0gXCJzdHJpbmdcIikge1xyXG5cdFx0XHRmcmVlVmFyaWFibGVzLmFkZCh0aGlzLm5vZGUpO1xyXG5cdFx0fVxyXG5cdFx0Y29uc3QgbGVmdEJyYW5jaDogU2V0PHN0cmluZz4gPSB0aGlzLmxlZnQ/LmZyZWVWYXJpYWJsZXMoKTtcclxuXHRcdGlmIChsZWZ0QnJhbmNoKSB7XHJcblx0XHRcdGZvciAoY29uc3QgeCBvZiBsZWZ0QnJhbmNoKSB7XHJcblx0XHRcdFx0ZnJlZVZhcmlhYmxlcy5hZGQoeCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGNvbnN0IHJpZ2h0QnJhbmNoOiBTZXQ8c3RyaW5nPiA9IHRoaXMucmlnaHQ/LmZyZWVWYXJpYWJsZXMoKTtcclxuXHRcdGlmIChyaWdodEJyYW5jaCkge1xyXG5cdFx0XHRmb3IgKGNvbnN0IHggb2YgcmlnaHRCcmFuY2gpIHtcclxuXHRcdFx0XHRmcmVlVmFyaWFibGVzLmFkZCh4KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGZyZWVWYXJpYWJsZXM7XHJcblx0fVxyXG5cdHB1YmxpYyBldmFsdWF0ZSh2YWx1ZXNEaWN0aW9uYXJ5OiBEaWN0aW9uYXJ5PGJvb2xlYW4+KTogYm9vbGVhbiB7XHJcblx0XHRpZiAodHlwZW9mIHRoaXMubm9kZSA9PT0gXCJzdHJpbmdcIikge1xyXG5cdFx0XHQvLyBzZWFyY2ggdGhlIHZhbHVlc0RpY3Rpb25hcnlcclxuXHRcdFx0Ly8gYW5kIHJldHVyblxyXG5cdFx0fVxyXG5cdFx0aWYgKHR5cGVvZiB0aGlzLm5vZGUgPT09IFwiYm9vbGVhblwiKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLm5vZGU7XHJcblx0XHR9XHJcblx0XHRjb25zdCBsZWZ0OiBib29sZWFuID0gdGhpcy5sZWZ0LmV2YWx1YXRlKHZhbHVlc0RpY3Rpb25hcnkpO1xyXG5cdFx0Y29uc3QgcmlnaHQ6IGJvb2xlYW4gPSB0aGlzLnJpZ2h0LmV2YWx1YXRlKHZhbHVlc0RpY3Rpb25hcnkpO1xyXG5cdFx0bGV0IHJldDogYm9vbGVhbjtcclxuXHRcdC8vIFRoZXJlIGlzIG5vIHBvc3NpYmlsaXR5IHRvIGNoZWNrIHRoaXMubm9kZSB3aXRoIHR5cGVvZiBvciBpbnN0YWNlb2YgZW51bVxyXG5cdFx0aWYgKHRoaXMubm9kZSA9PT0gT3BlcmF0aW9uVHlwZS5Ob3QpIHtcclxuXHRcdFx0cmV0ID0gIWxlZnQ7XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5ub2RlID09PSBPcGVyYXRpb25UeXBlLkFuZCkge1xyXG5cdFx0XHRyZXQgPSBsZWZ0ICYmIHJpZ2h0O1xyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMubm9kZSA9PT0gT3BlcmF0aW9uVHlwZS5Pcikge1xyXG5cdFx0XHRyZXQgPSBsZWZ0IHx8IHJpZ2h0O1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJldDtcclxuXHR9XHJcblx0cHVibGljIGdlbmVyYXRlRnJlZVZhcmlhYmxlc1ZhbHVlcygpOiBBcnJheTxEaWN0aW9uYXJ5PGJvb2xlYW4+PiB7XHJcblx0XHRjb25zdCBmcmVlVmFyaWFibGVzOiBTZXQ8c3RyaW5nPiA9IHRoaXMuZnJlZVZhcmlhYmxlcygpO1xyXG5cdFx0cmV0dXJuIHRoaXMuZ2VuZXJhdGVGcmVlVmFyaWFibGVWYWx1ZXNCcmFuY2hlcyhuZXcgRGljdGlvbmFyeTxib29sZWFuPigpLCBmcmVlVmFyaWFibGVzKTtcclxuXHR9XHJcblx0cHJpdmF0ZSBnZW5lcmF0ZUZyZWVWYXJpYWJsZVZhbHVlc0JyYW5jaGVzKHRydXRoVGFibGU6IERpY3Rpb25hcnk8Ym9vbGVhbj4sIGZyZWVWYXJpYWJsZXM6IFNldDxzdHJpbmc+KTogQXJyYXk8RGljdGlvbmFyeTxib29sZWFuPj4ge1xyXG5cdFx0Y29uc3QgdmFyaWFibGU6IHN0cmluZyA9IGZyZWVWYXJpYWJsZXM/LmtleXMoKT8ubmV4dCgpPy52YWx1ZTtcclxuXHRcdGZyZWVWYXJpYWJsZXMuZGVsZXRlKHZhcmlhYmxlKTtcclxuXHRcdGNvbnN0IGJyYW5jaDEgPSB0cnV0aFRhYmxlLkRlZXBDb3B5KCk7XHJcblx0XHRicmFuY2gxLkFkZCh2YXJpYWJsZSwgdHJ1ZSk7XHJcblx0XHRjb25zdCBicmFuY2gyID0gdHJ1dGhUYWJsZS5EZWVwQ29weSgpO1xyXG5cdFx0YnJhbmNoMi5BZGQodmFyaWFibGUsIGZhbHNlKTtcclxuXHRcdGlmIChmcmVlVmFyaWFibGVzLnNpemUgPiAwKSB7XHJcblx0XHRcdGNvbnN0IG5ld0ZyZWVWYXJpYWJsZXMxOiBTZXQ8c3RyaW5nPiA9IHRoaXMuRGVlcENvcHlTZXQoZnJlZVZhcmlhYmxlcyk7XHJcblx0XHRcdGNvbnN0IG5ld0ZyZWVWYXJpYWJsZXMyOiBTZXQ8c3RyaW5nPiA9IHRoaXMuRGVlcENvcHlTZXQoZnJlZVZhcmlhYmxlcyk7XHJcblx0XHRcdHJldHVybiB0aGlzLmdlbmVyYXRlRnJlZVZhcmlhYmxlVmFsdWVzQnJhbmNoZXMoYnJhbmNoMSwgbmV3RnJlZVZhcmlhYmxlczEpLmNvbmNhdCh0aGlzLmdlbmVyYXRlRnJlZVZhcmlhYmxlVmFsdWVzQnJhbmNoZXMoYnJhbmNoMiwgbmV3RnJlZVZhcmlhYmxlczIpKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiBbYnJhbmNoMSwgYnJhbmNoMl07XHJcblx0XHR9XHJcblx0fVxyXG5cdHByaXZhdGUgRGVlcENvcHlTZXQoc2V0OiBTZXQ8c3RyaW5nPik6IFNldDxzdHJpbmc+IHtcclxuXHRcdGNvbnN0IHJldDogU2V0PHN0cmluZz4gPSBuZXcgU2V0PHN0cmluZz4oKTtcclxuXHRcdGZvciAoY29uc3Qga2V5IG9mIHNldCkge1xyXG5cdFx0XHRyZXQuYWRkKGtleSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmV0O1xyXG5cdH1cclxufVxyXG5leHBvcnQgY2xhc3MgUGFyc2VyPFQgZXh0ZW5kcyBCb29sZWFuTGV4ZXI+IHtcclxuXHRwcml2YXRlIGxleDogVDtcclxuXHRwdWJsaWMgcGFyc2UobGV4ZXJUeXBlOiBuZXcgKGNvZGU6IHN0cmluZykgPT4gVCwgY29kZTogc3RyaW5nKTogRXhwcmVzc2lvblRyZWUge1xyXG5cdFx0dGhpcy5sZXggPSBuZXcgbGV4ZXJUeXBlKGNvZGUpO1xyXG5cdFx0Y29uc3QgZXhwcmVzc2lvbjogRXhwcmVzc2lvblRyZWUgPSB0aGlzLmV4cHIoKTtcclxuXHRcdGNvbnN0IHRva2VuOiBCb29sZWFuVG9rZW4gPSB0aGlzLmxleC5nZXRUb2tlbkFuZEFkdmFuY2UoKTtcclxuXHRcdGlmICh0b2tlbi50eXBlID09PSBCb29sZWFuVG9rZW5UeXBlLkVuZCkge1xyXG5cdFx0XHRyZXR1cm4gZXhwcmVzc2lvbjtcclxuXHRcdH1cclxuXHRcdHRocm93IEVycm9yKFwiRW5kIGV4cGVjdGVkXCIpO1xyXG5cdH1cclxuXHRwcml2YXRlIGV4cHIoKTogRXhwcmVzc2lvblRyZWUge1xyXG5cdFx0bGV0IGJvb2xlYW5FeHByZXNzaW9uVHJlZTogRXhwcmVzc2lvblRyZWU7XHJcblx0XHRsZXQgdG9rZW46IEJvb2xlYW5Ub2tlbiA9IHRoaXMubGV4LmdldFRva2VuQW5kQWR2YW5jZSgpO1xyXG5cdFx0aWYgKHRva2VuLnR5cGUgPT09IEJvb2xlYW5Ub2tlblR5cGUuRW5kKSB7XHJcblx0XHRcdHJldHVybiBib29sZWFuRXhwcmVzc2lvblRyZWU7XHJcblx0XHR9XHJcblx0XHRpZiAodG9rZW4udHlwZSA9PT0gQm9vbGVhblRva2VuVHlwZS5MUGFyZW4pIHtcclxuXHRcdFx0Ym9vbGVhbkV4cHJlc3Npb25UcmVlID0gbmV3IEV4cHJlc3Npb25UcmVlKCk7XHJcblx0XHRcdGJvb2xlYW5FeHByZXNzaW9uVHJlZS5sZWZ0ID0gdGhpcy5leHByKCk7XHJcblx0XHRcdHRva2VuID0gdGhpcy5sZXguZ2V0VG9rZW5BbmRBZHZhbmNlKCk7XHJcblx0XHRcdGlmICh0b2tlbi50eXBlICE9PSBCb29sZWFuVG9rZW5UeXBlLlJQYXJlbikge1xyXG5cdFx0XHRcdHRocm93IEVycm9yKFwiVW5iYWxhbmNlZCBwYXJlbnRoZXNpcy5cIik7XHJcblx0XHRcdH1cclxuXHRcdFx0dG9rZW4gPSB0aGlzLmxleC5nZXRUb2tlbkFuZEFkdmFuY2UoKTtcclxuXHRcdFx0c3dpdGNoICh0b2tlbi50eXBlKSB7XHJcblx0XHRcdFx0Y2FzZSBCb29sZWFuVG9rZW5UeXBlLk9yOlxyXG5cdFx0XHRcdFx0Ym9vbGVhbkV4cHJlc3Npb25UcmVlLm5vZGUgPSBPcGVyYXRpb25UeXBlLk9yO1xyXG5cdFx0XHRcdFx0Ym9vbGVhbkV4cHJlc3Npb25UcmVlLnJpZ2h0ID0gdGhpcy5leHByKCk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIEJvb2xlYW5Ub2tlblR5cGUuQW5kOlxyXG5cdFx0XHRcdFx0Ym9vbGVhbkV4cHJlc3Npb25UcmVlLm5vZGUgPSBPcGVyYXRpb25UeXBlLkFuZDtcclxuXHRcdFx0XHRcdGJvb2xlYW5FeHByZXNzaW9uVHJlZS5yaWdodCA9IHRoaXMuZXhwcigpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSBCb29sZWFuVG9rZW5UeXBlLkVuZDpcclxuXHRcdFx0XHRcdHJldHVybiBib29sZWFuRXhwcmVzc2lvblRyZWU7XHJcblx0XHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRcdHRocm93IEVycm9yKFwiSW5jb3JyZWN0IHN5bnRheC5cIik7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMubGV4LnJldmVydCgpO1xyXG5cdFx0XHRib29sZWFuRXhwcmVzc2lvblRyZWUgPSB0aGlzLmJpbmFyeU9wKCk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gYm9vbGVhbkV4cHJlc3Npb25UcmVlO1xyXG5cdH1cclxuXHRwcml2YXRlIGJpbmFyeU9wKCk6IEV4cHJlc3Npb25UcmVlIHtcclxuXHRcdGxldCBib29sZWFuRXhwcmVzc2lvblRyZWU6IEV4cHJlc3Npb25UcmVlO1xyXG5cdFx0bGV0IHRva2VuOiBCb29sZWFuVG9rZW4gPSB0aGlzLmxleC5nZXRUb2tlbkFuZEFkdmFuY2UoKTtcclxuXHRcdGlmICh0b2tlbi50eXBlID09PSBCb29sZWFuVG9rZW5UeXBlLlZhcmlhYmxlIHx8IHRva2VuLnR5cGUgPT09IEJvb2xlYW5Ub2tlblR5cGUuVHJ1ZSB8fCB0b2tlbi50eXBlID09PSBCb29sZWFuVG9rZW5UeXBlLkZhbHNlKSB7XHJcblx0XHRcdGJvb2xlYW5FeHByZXNzaW9uVHJlZSA9IG5ldyBFeHByZXNzaW9uVHJlZSgpO1xyXG5cdFx0XHRib29sZWFuRXhwcmVzc2lvblRyZWUubGVmdCA9IG5ldyBFeHByZXNzaW9uVHJlZSh0b2tlbi52YXJpYWJsZSk7XHJcblx0XHRcdHRva2VuID0gdGhpcy5sZXguZ2V0VG9rZW5BbmRBZHZhbmNlKCk7XHJcblx0XHRcdHN3aXRjaCAodG9rZW4udHlwZSkge1xyXG5cdFx0XHRcdGNhc2UgQm9vbGVhblRva2VuVHlwZS5PcjpcclxuXHRcdFx0XHRcdGJvb2xlYW5FeHByZXNzaW9uVHJlZS5ub2RlID0gT3BlcmF0aW9uVHlwZS5PcjtcclxuXHRcdFx0XHRcdGJvb2xlYW5FeHByZXNzaW9uVHJlZS5yaWdodCA9IHRoaXMuZXhwcigpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSBCb29sZWFuVG9rZW5UeXBlLkFuZDpcclxuXHRcdFx0XHRcdGJvb2xlYW5FeHByZXNzaW9uVHJlZS5ub2RlID0gT3BlcmF0aW9uVHlwZS5BbmQ7XHJcblx0XHRcdFx0XHRib29sZWFuRXhwcmVzc2lvblRyZWUucmlnaHQgPSB0aGlzLmV4cHIoKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0XHR0aHJvdyBFcnJvcihcIkluY29ycmVjdCBzeW50YXguXCIpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLmxleC5yZXZlcnQoKTtcclxuXHRcdFx0Ym9vbGVhbkV4cHJlc3Npb25UcmVlID0gdGhpcy51bmFyeU9wKCk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gYm9vbGVhbkV4cHJlc3Npb25UcmVlO1xyXG5cdH1cclxuXHRwcml2YXRlIHVuYXJ5T3AoKTogRXhwcmVzc2lvblRyZWUge1xyXG5cdFx0bGV0IGJvb2xlYW5FeHByZXNzaW9uVHJlZTogRXhwcmVzc2lvblRyZWU7XHJcblx0XHRsZXQgdG9rZW46IEJvb2xlYW5Ub2tlbiA9IHRoaXMubGV4LmdldFRva2VuQW5kQWR2YW5jZSgpO1xyXG5cdFx0aWYgKHRva2VuLnR5cGUgPT09IEJvb2xlYW5Ub2tlblR5cGUuTm90KSB7XHJcblx0XHRcdGJvb2xlYW5FeHByZXNzaW9uVHJlZSA9IG5ldyBFeHByZXNzaW9uVHJlZShPcGVyYXRpb25UeXBlLk5vdCk7XHJcblx0XHRcdHRva2VuID0gdGhpcy5sZXguZ2V0VG9rZW5BbmRBZHZhbmNlKCk7XHJcblx0XHRcdGlmICh0b2tlbi50eXBlID09PSBCb29sZWFuVG9rZW5UeXBlLlZhcmlhYmxlIHx8IHRva2VuLnR5cGUgPT09IEJvb2xlYW5Ub2tlblR5cGUuVHJ1ZSB8fCB0b2tlbi50eXBlID09PSBCb29sZWFuVG9rZW5UeXBlLkZhbHNlKSB7XHJcblx0XHRcdFx0Ym9vbGVhbkV4cHJlc3Npb25UcmVlLmxlZnQgPSBuZXcgRXhwcmVzc2lvblRyZWUodG9rZW4udmFyaWFibGUpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMubGV4LnJldmVydCgpO1xyXG5cdFx0XHRcdGlmICh0b2tlbi50eXBlICE9PSBCb29sZWFuVG9rZW5UeXBlLkVuZCkge1xyXG5cdFx0XHRcdFx0Ym9vbGVhbkV4cHJlc3Npb25UcmVlLmxlZnQgPSB0aGlzLmV4cHIoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRocm93IEVycm9yKFwiSW5jb3JyZWN0IHN5bnRheC5cIik7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gYm9vbGVhbkV4cHJlc3Npb25UcmVlO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJvb2xlYW5MZXhlckNTIGV4dGVuZHMgQm9vbGVhbkxleGVyIHtcclxuXHRwcm90ZWN0ZWQgaW5wdXRDaGVja1JlZ2V4OiBSZWdFeHAgPSAvXFwofFxcKXxbXFx8XFwmXFwhXXxbQS1aXXxbMTBdKi9nO1xyXG5cdHByb3RlY3RlZCB0b2tlblJlZ2V4T3I6IFJlZ0V4cCA9IC9cXHwvO1xyXG5cdHByb3RlY3RlZCB0b2tlblJlZ2V4QW5kOiBSZWdFeHAgPSAvXFwmLztcclxuXHRwcm90ZWN0ZWQgdG9rZW5SZWdleE5vdDogUmVnRXhwID0gL1xcIS87XHJcblx0cHJvdGVjdGVkIHRva2VuUmVnZXhUcnVlOiBSZWdFeHAgPSAvMS87XHJcblx0cHJvdGVjdGVkIHRva2VuUmVnZXhGYWxzZTogUmVnRXhwID0gLzAvO1xyXG5cdGNvbnN0cnVjdG9yKGlucHV0OiBzdHJpbmcpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLnRva2VuaXplKGlucHV0KTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBCb29sZWFuTGV4ZXJNYXRoIGV4dGVuZHMgQm9vbGVhbkxleGVyIHtcclxuXHRwcm90ZWN0ZWQgaW5wdXRDaGVja1JlZ2V4OiBSZWdFeHAgPSAvXFwofFxcKXxbXFwrXFwqXFx+XXxbQS1aXXxbMTBdKi9nO1xyXG5cdHByb3RlY3RlZCB0b2tlblJlZ2V4T3I6IFJlZ0V4cCA9IC9cXCsvO1xyXG5cdHByb3RlY3RlZCB0b2tlblJlZ2V4QW5kOiBSZWdFeHAgPSAvXFwqLztcclxuXHRwcm90ZWN0ZWQgdG9rZW5SZWdleE5vdDogUmVnRXhwID0gL1xcfi87XHJcblx0cHJvdGVjdGVkIHRva2VuUmVnZXhUcnVlOiBSZWdFeHAgPSAvMS87XHJcblx0cHJvdGVjdGVkIHRva2VuUmVnZXhGYWxzZTogUmVnRXhwID0gLzAvO1xyXG5cdGNvbnN0cnVjdG9yKGlucHV0OiBzdHJpbmcpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLnRva2VuaXplKGlucHV0KTtcclxuXHR9XHJcbn1cclxuXHJcbi8qXHJcbmV4cHJcdFx0XHQ6IExQQVJBTSBleHByIFJQQVJBTSAoKEFORCB8IE9SKSBleHByKSpcclxuXHRcdFx0XHR8IGJpbmFyeU9wXHJcbmJpbmFyeU9wXHRcdDogKHZhcmlhYmxlVGVybSB8IGJvb2xlYW5UZXJtKSAoKEFORCB8IE9SKSBleHByKStcclxuXHRcdFx0XHR8IHVuYXJ5T3AgKChBTkQgfCBPUikgZXhwcikrXHJcbnVuYXJ5T3BcdFx0XHQ6IE5PVCAodmFyaWFibGVUZXJtIHwgYm9vbGVhblRlcm0gfCBMUEFSQU0gZXhwciBSUEFSQU0pXHJcbnZhcmlhYmxlVGVybVx0OiB2YXJpYWJsZVxyXG5ib29sZWFuVGVybVx0XHQ6IFRSVUUgfCBGQUxTRVxyXG4qLyIsImV4cG9ydCBjbGFzcyBEaWN0aW9uYXJ5PFQ+IHtcclxuXHRwcml2YXRlIGl0ZW1zOiB7IFtpbmRleDogc3RyaW5nXTogVCB9ID0ge307XHJcblx0cHJpdmF0ZSBjb3VudDogbnVtYmVyID0gMDtcclxuXHRwdWJsaWMgQWRkKGtleTogc3RyaW5nLCB2YWx1ZTogVCk6IHZvaWQge1xyXG5cdFx0aWYgKCF0aGlzLml0ZW1zLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuXHRcdFx0dGhpcy5jb3VudCsrO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5pdGVtc1trZXldID0gdmFsdWU7XHJcblx0fVxyXG5cdHB1YmxpYyBDb250YWluc0tleShrZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuaXRlbXMuaGFzT3duUHJvcGVydHkoa2V5KTtcclxuXHR9XHJcblx0cHVibGljIENvdW50KCk6IG51bWJlciB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb3VudDtcclxuXHR9XHJcblx0cHVibGljIEl0ZW0oa2V5OiBzdHJpbmcpOiBUIHtcclxuXHRcdHJldHVybiB0aGlzLml0ZW1zW2tleV07XHJcblx0fVxyXG5cdHB1YmxpYyBSZW1vdmUoa2V5OiBzdHJpbmcpOiBUIHtcclxuXHRcdGNvbnN0IHZhbCA9IHRoaXMuaXRlbXNba2V5XTtcclxuXHRcdGRlbGV0ZSB0aGlzLml0ZW1zW2tleV07XHJcblx0XHR0aGlzLmNvdW50LS07XHJcblx0XHRyZXR1cm4gdmFsO1xyXG5cdH1cclxuXHRwdWJsaWMgS2V5cygpOiBzdHJpbmdbXSB7XHJcblx0XHRjb25zdCBrZXlTZXQ6IHN0cmluZ1tdID0gW107XHJcblx0XHRmb3IgKGNvbnN0IHByb3AgaW4gdGhpcy5pdGVtcykge1xyXG5cdFx0XHRpZiAodGhpcy5pdGVtcy5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xyXG5cdFx0XHRcdGtleVNldC5wdXNoKHByb3ApO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4ga2V5U2V0O1xyXG5cdH1cclxuXHRwdWJsaWMgVmFsdWVzKCk6IFRbXSB7XHJcblx0XHRjb25zdCB2YWx1ZXM6IFRbXSA9IFtdO1xyXG5cdFx0Zm9yIChjb25zdCBwcm9wIGluIHRoaXMuaXRlbXMpIHtcclxuXHRcdFx0aWYgKHRoaXMuaXRlbXMuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcclxuXHRcdFx0XHR2YWx1ZXMucHVzaCh0aGlzLml0ZW1zW3Byb3BdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHZhbHVlcztcclxuXHR9XHJcblx0cHVibGljIERlZXBDb3B5KCk6IERpY3Rpb25hcnk8VD4ge1xyXG5cdFx0Y29uc3QgcmV0OiBEaWN0aW9uYXJ5PFQ+ID0gbmV3IERpY3Rpb25hcnk8VD4oKTtcclxuXHRcdGZvciAoY29uc3QgaXRlbSBpbiB0aGlzLml0ZW1zKSB7XHJcblx0XHRcdHJldC5pdGVtc1tpdGVtXSA9IHRoaXMuaXRlbXNbaXRlbV07XHJcblx0XHR9XHJcblx0XHRyZXQuY291bnQgPSB0aGlzLmNvdW50O1xyXG5cdFx0cmV0dXJuIHJldDtcclxuXHR9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9