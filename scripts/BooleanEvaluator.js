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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0cnVjdHVyZXMvQm9vbGVhbkV2YWx1YXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RydWN0dXJlcy9EaWN0aW9uYXJ5LnRzIl0sIm5hbWVzIjpbIkJvb2xlYW5Ub2tlblR5cGUiLCJCb29sZWFuVG9rZW4iLCJ0eXBlIiwidmFyaWFibGUiLCJCb29sZWFuTGV4ZXIiLCJ0b2tlbnMiLCJsZW5ndGgiLCJ0b2tlbkluZGV4IiwiRW5kIiwiaW5wdXQiLCJnZXRUb2tlbiIsIkVycm9yIiwicmVwbGFjZSIsIm1hdGNoIiwiaW5wdXRDaGVja1JlZ2V4IiwidG9rZW5SZWdleE9yIiwidGVzdCIsIk9yIiwidG9rZW5SZWdleEFuZCIsIkFuZCIsInRva2VuUmVnZXhOb3QiLCJOb3QiLCJ0b2tlblJlZ2V4VmFyaWFibGUiLCJWYXJpYWJsZSIsInRva2VuUmVnZXhUcnVlIiwiVHJ1ZSIsInRva2VuUmVnZXhGYWxzZSIsIkZhbHNlIiwidG9rZW5SZWdleExQYXJlbiIsIkxQYXJlbiIsInRva2VuUmVnZXhSUGFyZW4iLCJSUGFyZW4iLCJVbmtub3duIiwiT3BlcmF0aW9uVHlwZSIsIkV4cHJlc3Npb25UcmVlIiwibm9kZSIsImZyZWVWYXJpYWJsZXMiLCJTZXQiLCJhZGQiLCJsZWZ0QnJhbmNoIiwibGVmdCIsIngiLCJyaWdodEJyYW5jaCIsInJpZ2h0IiwidmFsdWVzRGljdGlvbmFyeSIsImV2YWx1YXRlIiwicmV0IiwiZ2VuZXJhdGVGcmVlVmFyaWFibGVWYWx1ZXNCcmFuY2hlcyIsIkRpY3Rpb25hcnkiLCJ0cnV0aFRhYmxlIiwia2V5cyIsIm5leHQiLCJ2YWx1ZSIsImJyYW5jaDEiLCJEZWVwQ29weSIsIkFkZCIsImJyYW5jaDIiLCJzaXplIiwibmV3RnJlZVZhcmlhYmxlczEiLCJEZWVwQ29weVNldCIsIm5ld0ZyZWVWYXJpYWJsZXMyIiwiY29uY2F0Iiwic2V0Iiwia2V5IiwiUGFyc2VyIiwibGV4ZXJUeXBlIiwiY29kZSIsImxleCIsImV4cHJlc3Npb24iLCJleHByIiwidG9rZW4iLCJnZXRUb2tlbkFuZEFkdmFuY2UiLCJib29sZWFuRXhwcmVzc2lvblRyZWUiLCJyZXZlcnQiLCJiaW5hcnlPcCIsInVuYXJ5T3AiLCJCb29sZWFuTGV4ZXJDUyIsInRva2VuaXplIiwiQm9vbGVhbkxleGVyTWF0aCIsIml0ZW1zIiwiaGFzT3duUHJvcGVydHkiLCJjb3VudCIsInZhbCIsImtleVNldCIsInByb3AiLCJwdXNoIiwidmFsdWVzIiwiaXRlbSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ08sSUFBS0EsZ0JBQVo7O1dBQVlBLGdCO0FBQUFBLGtCLENBQUFBLGdCO0FBQUFBLGtCLENBQUFBLGdCO0FBQUFBLGtCLENBQUFBLGdCO0FBQUFBLGtCLENB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RDs7QUFDRCxhQUFPRSxNQUFQO0FBQ0E7QUF6Q0Y7QUFBQTtBQUFBLCtCQTBDa0M7QUFDaEMsVUFBTXhDLEdBQWtCLEdBQUcsSUFBSUUsVUFBSixFQUEzQjs7QUFDQSxXQUFLLElBQU11QyxJQUFYLElBQW1CLEtBQUtSLEtBQXhCLEVBQStCO0FBQzlCakMsV0FBRyxDQUFDaUMsS0FBSixDQUFVUSxJQUFWLElBQWtCLEtBQUtSLEtBQUwsQ0FBV1EsSUFBWCxDQUFsQjtBQUNBOztBQUNEekMsU0FBRyxDQUFDbUMsS0FBSixHQUFZLEtBQUtBLEtBQWpCO0FBQ0EsYUFBT25DLEdBQVA7QUFDQTtBQWpERjs7QUFBQTtBQUFBLEkiLCJmaWxlIjoiLi9Cb29sZWFuRXZhbHVhdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvc3RydWN0dXJlcy9Cb29sZWFuRXZhbHVhdG9yLnRzXCIpO1xuIiwiaW1wb3J0IHsgRGljdGlvbmFyeSB9IGZyb20gXCIuL0RpY3Rpb25hcnlcIjtcclxuZXhwb3J0IGVudW0gQm9vbGVhblRva2VuVHlwZSB7IE9yLCBBbmQsIE5vdCwgVHJ1ZSwgRmFsc2UsIFZhcmlhYmxlLCBMUGFyZW4sIFJQYXJlbiwgRW5kLCBVbmtub3duIH1cclxuZXhwb3J0IGNsYXNzIEJvb2xlYW5Ub2tlbiB7XHJcblx0cHVibGljIHR5cGU6IEJvb2xlYW5Ub2tlblR5cGU7XHJcblx0cHVibGljIHZhcmlhYmxlOiBzdHJpbmcgfCBib29sZWFuO1xyXG5cdGNvbnN0cnVjdG9yKHR5cGU6IEJvb2xlYW5Ub2tlblR5cGUsIHZhcmlhYmxlPzogc3RyaW5nIHwgYm9vbGVhbikge1xyXG5cdFx0dGhpcy50eXBlID0gdHlwZTtcclxuXHRcdHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcclxuXHR9XHJcbn1cclxuYWJzdHJhY3QgY2xhc3MgQm9vbGVhbkxleGVyIHtcclxuXHRwcm90ZWN0ZWQgaW5wdXRDaGVja1JlZ2V4OiBSZWdFeHA7XHJcblx0cHJvdGVjdGVkIHRva2VuUmVnZXhPcjogUmVnRXhwO1xyXG5cdHByb3RlY3RlZCB0b2tlblJlZ2V4QW5kOiBSZWdFeHA7XHJcblx0cHJvdGVjdGVkIHRva2VuUmVnZXhOb3Q6IFJlZ0V4cDtcclxuXHRwcm90ZWN0ZWQgdG9rZW5SZWdleFRydWU6IFJlZ0V4cDtcclxuXHRwcm90ZWN0ZWQgdG9rZW5SZWdleEZhbHNlOiBSZWdFeHA7XHJcblx0cHJvdGVjdGVkIHRva2VuUmVnZXhMUGFyZW46IFJlZ0V4cCA9IC9cXCgvO1xyXG5cdHByb3RlY3RlZCB0b2tlblJlZ2V4UlBhcmVuOiBSZWdFeHAgPSAvXFwpLztcclxuXHRwcm90ZWN0ZWQgdG9rZW5SZWdleFZhcmlhYmxlOiBSZWdFeHAgPSAvW0EtWl0vO1xyXG5cdHByaXZhdGUgdG9rZW5zOiBzdHJpbmdbXTtcclxuXHRwcml2YXRlIHRva2VuSW5kZXg6IG51bWJlcjtcclxuXHRwdWJsaWMgZ2V0VG9rZW5BbmRBZHZhbmNlKCk6IEJvb2xlYW5Ub2tlbiB7XHJcblx0XHRpZiAodGhpcy50b2tlbnMubGVuZ3RoIC0gMSA9PT0gdGhpcy50b2tlbkluZGV4KSB7IHJldHVybiBuZXcgQm9vbGVhblRva2VuKEJvb2xlYW5Ub2tlblR5cGUuRW5kKTsgfVxyXG5cdFx0Y29uc3QgaW5wdXQ6IHN0cmluZyA9IHRoaXMudG9rZW5zW3RoaXMudG9rZW5JbmRleCsrXTtcclxuXHRcdHJldHVybiB0aGlzLmdldFRva2VuKGlucHV0KTtcclxuXHR9XHJcblx0cHVibGljIHJldmVydCgpOiB2b2lkIHtcclxuXHRcdGlmICh0aGlzLnRva2VuSW5kZXggPD0gMCkgeyB0aHJvdyBFcnJvcihcIkluZGV4IG91dCBvZiByYW5nZVwiKTsgfVxyXG5cdFx0dGhpcy50b2tlbkluZGV4LS07XHJcblx0fVxyXG5cdHByb3RlY3RlZCB0b2tlbml6ZShpbnB1dDogc3RyaW5nKSB7XHJcblx0XHR0aGlzLnRva2VucyA9IGlucHV0LnJlcGxhY2UoXCIgXCIsIFwiXCIpLm1hdGNoKHRoaXMuaW5wdXRDaGVja1JlZ2V4KTtcclxuXHRcdHRoaXMudG9rZW5JbmRleCA9IDA7XHJcblx0fVxyXG5cdHByaXZhdGUgZ2V0VG9rZW4oaW5wdXQ6IHN0cmluZyk6IEJvb2xlYW5Ub2tlbiB7XHJcblx0XHRpZiAodGhpcy50b2tlblJlZ2V4T3IudGVzdChpbnB1dCkpIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBCb29sZWFuVG9rZW4oQm9vbGVhblRva2VuVHlwZS5Pcik7XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy50b2tlblJlZ2V4QW5kLnRlc3QoaW5wdXQpKSB7XHJcblx0XHRcdHJldHVybiBuZXcgQm9vbGVhblRva2VuKEJvb2xlYW5Ub2tlblR5cGUuQW5kKTtcclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLnRva2VuUmVnZXhOb3QudGVzdChpbnB1dCkpIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBCb29sZWFuVG9rZW4oQm9vbGVhblRva2VuVHlwZS5Ob3QpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMudG9rZW5SZWdleFZhcmlhYmxlLnRlc3QoaW5wdXQpKSB7XHJcblx0XHRcdHJldHVybiBuZXcgQm9vbGVhblRva2VuKEJvb2xlYW5Ub2tlblR5cGUuVmFyaWFibGUsIGlucHV0KTtcclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLnRva2VuUmVnZXhUcnVlLnRlc3QoaW5wdXQpKSB7XHJcblx0XHRcdHJldHVybiBuZXcgQm9vbGVhblRva2VuKEJvb2xlYW5Ub2tlblR5cGUuVHJ1ZSk7XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy50b2tlblJlZ2V4RmFsc2UudGVzdChpbnB1dCkpIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBCb29sZWFuVG9rZW4oQm9vbGVhblRva2VuVHlwZS5GYWxzZSk7XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy50b2tlblJlZ2V4TFBhcmVuLnRlc3QoaW5wdXQpKSB7XHJcblx0XHRcdHJldHVybiBuZXcgQm9vbGVhblRva2VuKEJvb2xlYW5Ub2tlblR5cGUuTFBhcmVuKTtcclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLnRva2VuUmVnZXhSUGFyZW4udGVzdChpbnB1dCkpIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBCb29sZWFuVG9rZW4oQm9vbGVhblRva2VuVHlwZS5SUGFyZW4pO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIG5ldyBCb29sZWFuVG9rZW4oQm9vbGVhblRva2VuVHlwZS5Vbmtub3duKTtcclxuXHR9XHJcbn1cclxuZW51bSBPcGVyYXRpb25UeXBlIHsgT3IsIEFuZCwgTm90fVxyXG5leHBvcnQgY2xhc3MgRXhwcmVzc2lvblRyZWUge1xyXG5cdHB1YmxpYyBsZWZ0OiBFeHByZXNzaW9uVHJlZTtcclxuXHRwdWJsaWMgbm9kZTogc3RyaW5nIHwgYm9vbGVhbiB8IE9wZXJhdGlvblR5cGU7XHJcblx0cHVibGljIHJpZ2h0OiBFeHByZXNzaW9uVHJlZTtcclxuXHRjb25zdHJ1Y3RvcihpbnB1dD86IHN0cmluZyB8IGJvb2xlYW4gfCBPcGVyYXRpb25UeXBlKSB7XHJcblx0XHR0aGlzLm5vZGUgPSBpbnB1dDtcclxuXHR9XHJcblx0cHVibGljIGZyZWVWYXJpYWJsZXMoKTogU2V0PHN0cmluZz4ge1xyXG5cdFx0Y29uc3QgZnJlZVZhcmlhYmxlczogU2V0PHN0cmluZz4gPSBuZXcgU2V0PHN0cmluZz4oKTtcclxuXHRcdGlmICh0eXBlb2YgdGhpcy5ub2RlID09PSBcInN0cmluZ1wiKSB7XHJcblx0XHRcdGZyZWVWYXJpYWJsZXMuYWRkKHRoaXMubm9kZSk7XHJcblx0XHR9XHJcblx0XHRjb25zdCBsZWZ0QnJhbmNoOiBTZXQ8c3RyaW5nPiA9IHRoaXMubGVmdD8uZnJlZVZhcmlhYmxlcygpO1xyXG5cdFx0aWYgKGxlZnRCcmFuY2gpIHtcclxuXHRcdFx0Zm9yIChjb25zdCB4IG9mIGxlZnRCcmFuY2gpIHtcclxuXHRcdFx0XHRmcmVlVmFyaWFibGVzLmFkZCh4KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0Y29uc3QgcmlnaHRCcmFuY2g6IFNldDxzdHJpbmc+ID0gdGhpcy5yaWdodD8uZnJlZVZhcmlhYmxlcygpO1xyXG5cdFx0aWYgKHJpZ2h0QnJhbmNoKSB7XHJcblx0XHRcdGZvciAoY29uc3QgeCBvZiByaWdodEJyYW5jaCkge1xyXG5cdFx0XHRcdGZyZWVWYXJpYWJsZXMuYWRkKHgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZnJlZVZhcmlhYmxlcztcclxuXHR9XHJcblx0cHVibGljIGV2YWx1YXRlKHZhbHVlc0RpY3Rpb25hcnk6IERpY3Rpb25hcnk8Ym9vbGVhbj4pOiBib29sZWFuIHtcclxuXHRcdGlmICh0eXBlb2YgdGhpcy5ub2RlID09PSBcInN0cmluZ1wiKSB7XHJcblx0XHRcdC8vIHNlYXJjaCB0aGUgdmFsdWVzRGljdGlvbmFyeVxyXG5cdFx0XHQvLyBhbmQgcmV0dXJuXHJcblx0XHR9XHJcblx0XHRpZiAodHlwZW9mIHRoaXMubm9kZSA9PT0gXCJib29sZWFuXCIpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMubm9kZTtcclxuXHRcdH1cclxuXHRcdGNvbnN0IGxlZnQ6IGJvb2xlYW4gPSB0aGlzLmxlZnQuZXZhbHVhdGUodmFsdWVzRGljdGlvbmFyeSk7XHJcblx0XHRjb25zdCByaWdodDogYm9vbGVhbiA9IHRoaXMucmlnaHQuZXZhbHVhdGUodmFsdWVzRGljdGlvbmFyeSk7XHJcblx0XHRsZXQgcmV0OiBib29sZWFuO1xyXG5cdFx0Ly8gVGhlcmUgaXMgbm8gcG9zc2liaWxpdHkgdG8gY2hlY2sgdGhpcy5ub2RlIHdpdGggdHlwZW9mIG9yIGluc3RhY2VvZiBlbnVtXHJcblx0XHRpZiAodGhpcy5ub2RlID09PSBPcGVyYXRpb25UeXBlLk5vdCkge1xyXG5cdFx0XHRyZXQgPSAhbGVmdDtcclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLm5vZGUgPT09IE9wZXJhdGlvblR5cGUuQW5kKSB7XHJcblx0XHRcdHJldCA9IGxlZnQgJiYgcmlnaHQ7XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5ub2RlID09PSBPcGVyYXRpb25UeXBlLk9yKSB7XHJcblx0XHRcdHJldCA9IGxlZnQgfHwgcmlnaHQ7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmV0O1xyXG5cdH1cclxuXHRwdWJsaWMgZ2VuZXJhdGVGcmVlVmFyaWFibGVzVmFsdWVzKCk6IEFycmF5PERpY3Rpb25hcnk8Ym9vbGVhbj4+IHtcclxuXHRcdGNvbnN0IGZyZWVWYXJpYWJsZXM6IFNldDxzdHJpbmc+ID0gdGhpcy5mcmVlVmFyaWFibGVzKCk7XHJcblx0XHRyZXR1cm4gdGhpcy5nZW5lcmF0ZUZyZWVWYXJpYWJsZVZhbHVlc0JyYW5jaGVzKG5ldyBEaWN0aW9uYXJ5PGJvb2xlYW4+KCksIGZyZWVWYXJpYWJsZXMpO1xyXG5cdH1cclxuXHRwcml2YXRlIGdlbmVyYXRlRnJlZVZhcmlhYmxlVmFsdWVzQnJhbmNoZXModHJ1dGhUYWJsZTogRGljdGlvbmFyeTxib29sZWFuPiwgZnJlZVZhcmlhYmxlczogU2V0PHN0cmluZz4pOiBBcnJheTxEaWN0aW9uYXJ5PGJvb2xlYW4+PiB7XHJcblx0XHRjb25zdCB2YXJpYWJsZTogc3RyaW5nID0gZnJlZVZhcmlhYmxlcz8ua2V5cygpPy5uZXh0KCk/LnZhbHVlO1xyXG5cdFx0ZnJlZVZhcmlhYmxlcy5kZWxldGUodmFyaWFibGUpO1xyXG5cdFx0Y29uc3QgYnJhbmNoMSA9IHRydXRoVGFibGUuRGVlcENvcHkoKTtcclxuXHRcdGJyYW5jaDEuQWRkKHZhcmlhYmxlLCB0cnVlKTtcclxuXHRcdGNvbnN0IGJyYW5jaDIgPSB0cnV0aFRhYmxlLkRlZXBDb3B5KCk7XHJcblx0XHRicmFuY2gyLkFkZCh2YXJpYWJsZSwgZmFsc2UpO1xyXG5cdFx0aWYgKGZyZWVWYXJpYWJsZXMuc2l6ZSA+IDApIHtcclxuXHRcdFx0Y29uc3QgbmV3RnJlZVZhcmlhYmxlczE6IFNldDxzdHJpbmc+ID0gdGhpcy5EZWVwQ29weVNldChmcmVlVmFyaWFibGVzKTtcclxuXHRcdFx0Y29uc3QgbmV3RnJlZVZhcmlhYmxlczI6IFNldDxzdHJpbmc+ID0gdGhpcy5EZWVwQ29weVNldChmcmVlVmFyaWFibGVzKTtcclxuXHRcdFx0cmV0dXJuIHRoaXMuZ2VuZXJhdGVGcmVlVmFyaWFibGVWYWx1ZXNCcmFuY2hlcyhicmFuY2gxLCBuZXdGcmVlVmFyaWFibGVzMSkuY29uY2F0KHRoaXMuZ2VuZXJhdGVGcmVlVmFyaWFibGVWYWx1ZXNCcmFuY2hlcyhicmFuY2gyLCBuZXdGcmVlVmFyaWFibGVzMikpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIFticmFuY2gxLCBicmFuY2gyXTtcclxuXHRcdH1cclxuXHR9XHJcblx0cHJpdmF0ZSBEZWVwQ29weVNldChzZXQ6IFNldDxzdHJpbmc+KTogU2V0PHN0cmluZz4ge1xyXG5cdFx0Y29uc3QgcmV0OiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQ8c3RyaW5nPigpO1xyXG5cdFx0Zm9yIChjb25zdCBrZXkgb2Ygc2V0KSB7XHJcblx0XHRcdHJldC5hZGQoa2V5KTtcclxuXHRcdH1cclxuXHRcdHJldHVybiByZXQ7XHJcblx0fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBQYXJzZXI8VCBleHRlbmRzIEJvb2xlYW5MZXhlcj4ge1xyXG5cdHByaXZhdGUgbGV4OiBUO1xyXG5cdHB1YmxpYyBwYXJzZShsZXhlclR5cGU6IG5ldyAoY29kZTogc3RyaW5nKSA9PiBULCBjb2RlOiBzdHJpbmcpOiBFeHByZXNzaW9uVHJlZSB7XHJcblx0XHR0aGlzLmxleCA9IG5ldyBsZXhlclR5cGUoY29kZSk7XHJcblx0XHRjb25zdCBleHByZXNzaW9uOiBFeHByZXNzaW9uVHJlZSA9IHRoaXMuZXhwcigpO1xyXG5cdFx0Y29uc3QgdG9rZW46IEJvb2xlYW5Ub2tlbiA9IHRoaXMubGV4LmdldFRva2VuQW5kQWR2YW5jZSgpO1xyXG5cdFx0aWYgKHRva2VuLnR5cGUgPT09IEJvb2xlYW5Ub2tlblR5cGUuRW5kKSB7XHJcblx0XHRcdHJldHVybiBleHByZXNzaW9uO1xyXG5cdFx0fVxyXG5cdFx0dGhyb3cgRXJyb3IoXCJFbmQgZXhwZWN0ZWRcIik7XHJcblx0fVxyXG5cdHByaXZhdGUgZXhwcigpOiBFeHByZXNzaW9uVHJlZSB7XHJcblx0XHRsZXQgYm9vbGVhbkV4cHJlc3Npb25UcmVlOiBFeHByZXNzaW9uVHJlZTtcclxuXHRcdGxldCB0b2tlbjogQm9vbGVhblRva2VuID0gdGhpcy5sZXguZ2V0VG9rZW5BbmRBZHZhbmNlKCk7XHJcblx0XHRpZiAodG9rZW4udHlwZSA9PT0gQm9vbGVhblRva2VuVHlwZS5FbmQpIHtcclxuXHRcdFx0cmV0dXJuIGJvb2xlYW5FeHByZXNzaW9uVHJlZTtcclxuXHRcdH1cclxuXHRcdGlmICh0b2tlbi50eXBlID09PSBCb29sZWFuVG9rZW5UeXBlLkxQYXJlbikge1xyXG5cdFx0XHRib29sZWFuRXhwcmVzc2lvblRyZWUgPSBuZXcgRXhwcmVzc2lvblRyZWUoKTtcclxuXHRcdFx0Ym9vbGVhbkV4cHJlc3Npb25UcmVlLmxlZnQgPSB0aGlzLmV4cHIoKTtcclxuXHRcdFx0dG9rZW4gPSB0aGlzLmxleC5nZXRUb2tlbkFuZEFkdmFuY2UoKTtcclxuXHRcdFx0aWYgKHRva2VuLnR5cGUgIT09IEJvb2xlYW5Ub2tlblR5cGUuUlBhcmVuKSB7XHJcblx0XHRcdFx0dGhyb3cgRXJyb3IoXCJVbmJhbGFuY2VkIHBhcmVudGhlc2lzLlwiKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0b2tlbiA9IHRoaXMubGV4LmdldFRva2VuQW5kQWR2YW5jZSgpO1xyXG5cdFx0XHRzd2l0Y2ggKHRva2VuLnR5cGUpIHtcclxuXHRcdFx0XHRjYXNlIEJvb2xlYW5Ub2tlblR5cGUuT3I6XHJcblx0XHRcdFx0XHRib29sZWFuRXhwcmVzc2lvblRyZWUubm9kZSA9IE9wZXJhdGlvblR5cGUuT3I7XHJcblx0XHRcdFx0XHRib29sZWFuRXhwcmVzc2lvblRyZWUucmlnaHQgPSB0aGlzLmV4cHIoKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgQm9vbGVhblRva2VuVHlwZS5BbmQ6XHJcblx0XHRcdFx0XHRib29sZWFuRXhwcmVzc2lvblRyZWUubm9kZSA9IE9wZXJhdGlvblR5cGUuQW5kO1xyXG5cdFx0XHRcdFx0Ym9vbGVhbkV4cHJlc3Npb25UcmVlLnJpZ2h0ID0gdGhpcy5leHByKCk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIEJvb2xlYW5Ub2tlblR5cGUuRW5kOlxyXG5cdFx0XHRcdFx0cmV0dXJuIGJvb2xlYW5FeHByZXNzaW9uVHJlZTtcclxuXHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdFx0dGhyb3cgRXJyb3IoXCJJbmNvcnJlY3Qgc3ludGF4LlwiKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5sZXgucmV2ZXJ0KCk7XHJcblx0XHRcdGJvb2xlYW5FeHByZXNzaW9uVHJlZSA9IHRoaXMuYmluYXJ5T3AoKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBib29sZWFuRXhwcmVzc2lvblRyZWU7XHJcblx0fVxyXG5cdHByaXZhdGUgYmluYXJ5T3AoKTogRXhwcmVzc2lvblRyZWUge1xyXG5cdFx0bGV0IGJvb2xlYW5FeHByZXNzaW9uVHJlZTogRXhwcmVzc2lvblRyZWU7XHJcblx0XHRsZXQgdG9rZW46IEJvb2xlYW5Ub2tlbiA9IHRoaXMubGV4LmdldFRva2VuQW5kQWR2YW5jZSgpO1xyXG5cdFx0aWYgKHRva2VuLnR5cGUgPT09IEJvb2xlYW5Ub2tlblR5cGUuVmFyaWFibGUgfHwgdG9rZW4udHlwZSA9PT0gQm9vbGVhblRva2VuVHlwZS5UcnVlIHx8IHRva2VuLnR5cGUgPT09IEJvb2xlYW5Ub2tlblR5cGUuRmFsc2UpIHtcclxuXHRcdFx0Ym9vbGVhbkV4cHJlc3Npb25UcmVlID0gbmV3IEV4cHJlc3Npb25UcmVlKCk7XHJcblx0XHRcdGJvb2xlYW5FeHByZXNzaW9uVHJlZS5sZWZ0ID0gbmV3IEV4cHJlc3Npb25UcmVlKHRva2VuLnZhcmlhYmxlKTtcclxuXHRcdFx0dG9rZW4gPSB0aGlzLmxleC5nZXRUb2tlbkFuZEFkdmFuY2UoKTtcclxuXHRcdFx0c3dpdGNoICh0b2tlbi50eXBlKSB7XHJcblx0XHRcdFx0Y2FzZSBCb29sZWFuVG9rZW5UeXBlLk9yOlxyXG5cdFx0XHRcdFx0Ym9vbGVhbkV4cHJlc3Npb25UcmVlLm5vZGUgPSBPcGVyYXRpb25UeXBlLk9yO1xyXG5cdFx0XHRcdFx0Ym9vbGVhbkV4cHJlc3Npb25UcmVlLnJpZ2h0ID0gdGhpcy5leHByKCk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIEJvb2xlYW5Ub2tlblR5cGUuQW5kOlxyXG5cdFx0XHRcdFx0Ym9vbGVhbkV4cHJlc3Npb25UcmVlLm5vZGUgPSBPcGVyYXRpb25UeXBlLkFuZDtcclxuXHRcdFx0XHRcdGJvb2xlYW5FeHByZXNzaW9uVHJlZS5yaWdodCA9IHRoaXMuZXhwcigpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRcdHRocm93IEVycm9yKFwiSW5jb3JyZWN0IHN5bnRheC5cIik7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMubGV4LnJldmVydCgpO1xyXG5cdFx0XHRib29sZWFuRXhwcmVzc2lvblRyZWUgPSB0aGlzLnVuYXJ5T3AoKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBib29sZWFuRXhwcmVzc2lvblRyZWU7XHJcblx0fVxyXG5cdHByaXZhdGUgdW5hcnlPcCgpOiBFeHByZXNzaW9uVHJlZSB7XHJcblx0XHRsZXQgYm9vbGVhbkV4cHJlc3Npb25UcmVlOiBFeHByZXNzaW9uVHJlZTtcclxuXHRcdGxldCB0b2tlbjogQm9vbGVhblRva2VuID0gdGhpcy5sZXguZ2V0VG9rZW5BbmRBZHZhbmNlKCk7XHJcblx0XHRpZiAodG9rZW4udHlwZSA9PT0gQm9vbGVhblRva2VuVHlwZS5Ob3QpIHtcclxuXHRcdFx0Ym9vbGVhbkV4cHJlc3Npb25UcmVlID0gbmV3IEV4cHJlc3Npb25UcmVlKE9wZXJhdGlvblR5cGUuTm90KTtcclxuXHRcdFx0dG9rZW4gPSB0aGlzLmxleC5nZXRUb2tlbkFuZEFkdmFuY2UoKTtcclxuXHRcdFx0aWYgKHRva2VuLnR5cGUgPT09IEJvb2xlYW5Ub2tlblR5cGUuVmFyaWFibGUgfHwgdG9rZW4udHlwZSA9PT0gQm9vbGVhblRva2VuVHlwZS5UcnVlIHx8IHRva2VuLnR5cGUgPT09IEJvb2xlYW5Ub2tlblR5cGUuRmFsc2UpIHtcclxuXHRcdFx0XHRib29sZWFuRXhwcmVzc2lvblRyZWUubGVmdCA9IG5ldyBFeHByZXNzaW9uVHJlZSh0b2tlbi52YXJpYWJsZSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5sZXgucmV2ZXJ0KCk7XHJcblx0XHRcdFx0aWYgKHRva2VuLnR5cGUgIT09IEJvb2xlYW5Ub2tlblR5cGUuRW5kKSB7XHJcblx0XHRcdFx0XHRib29sZWFuRXhwcmVzc2lvblRyZWUubGVmdCA9IHRoaXMuZXhwcigpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhyb3cgRXJyb3IoXCJJbmNvcnJlY3Qgc3ludGF4LlwiKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBib29sZWFuRXhwcmVzc2lvblRyZWU7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQm9vbGVhbkxleGVyQ1MgZXh0ZW5kcyBCb29sZWFuTGV4ZXIge1xyXG5cdHByb3RlY3RlZCBpbnB1dENoZWNrUmVnZXg6IFJlZ0V4cCA9IC9cXCh8XFwpfFtcXHxcXCZcXCFdfFtBLVpdfFsxMF0qL2c7XHJcblx0cHJvdGVjdGVkIHRva2VuUmVnZXhPcjogUmVnRXhwID0gL1xcfC87XHJcblx0cHJvdGVjdGVkIHRva2VuUmVnZXhBbmQ6IFJlZ0V4cCA9IC9cXCYvO1xyXG5cdHByb3RlY3RlZCB0b2tlblJlZ2V4Tm90OiBSZWdFeHAgPSAvXFwhLztcclxuXHRwcm90ZWN0ZWQgdG9rZW5SZWdleFRydWU6IFJlZ0V4cCA9IC8xLztcclxuXHRwcm90ZWN0ZWQgdG9rZW5SZWdleEZhbHNlOiBSZWdFeHAgPSAvMC87XHJcblx0Y29uc3RydWN0b3IoaW5wdXQ6IHN0cmluZykge1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdHRoaXMudG9rZW5pemUoaW5wdXQpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJvb2xlYW5MZXhlck1hdGggZXh0ZW5kcyBCb29sZWFuTGV4ZXIge1xyXG5cdHByb3RlY3RlZCBpbnB1dENoZWNrUmVnZXg6IFJlZ0V4cCA9IC9cXCh8XFwpfFtcXCtcXCpcXH5dfFtBLVpdfFsxMF0qL2c7XHJcblx0cHJvdGVjdGVkIHRva2VuUmVnZXhPcjogUmVnRXhwID0gL1xcKy87XHJcblx0cHJvdGVjdGVkIHRva2VuUmVnZXhBbmQ6IFJlZ0V4cCA9IC9cXCovO1xyXG5cdHByb3RlY3RlZCB0b2tlblJlZ2V4Tm90OiBSZWdFeHAgPSAvXFx+LztcclxuXHRwcm90ZWN0ZWQgdG9rZW5SZWdleFRydWU6IFJlZ0V4cCA9IC8xLztcclxuXHRwcm90ZWN0ZWQgdG9rZW5SZWdleEZhbHNlOiBSZWdFeHAgPSAvMC87XHJcblx0Y29uc3RydWN0b3IoaW5wdXQ6IHN0cmluZykge1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdHRoaXMudG9rZW5pemUoaW5wdXQpO1xyXG5cdH1cclxufVxyXG5cclxuLypcclxuZXhwclx0XHRcdDogTFBBUkFNIGV4cHIgUlBBUkFNICgoQU5EIHwgT1IpIGV4cHIpKlxyXG5cdFx0XHRcdHwgYmluYXJ5T3BcclxuYmluYXJ5T3BcdFx0OiAodmFyaWFibGVUZXJtIHwgYm9vbGVhblRlcm0pICgoQU5EIHwgT1IpIGV4cHIpK1xyXG5cdFx0XHRcdHwgdW5hcnlPcCAoKEFORCB8IE9SKSBleHByKStcclxudW5hcnlPcFx0XHRcdDogTk9UICh2YXJpYWJsZVRlcm0gfCBib29sZWFuVGVybSB8IExQQVJBTSBleHByIFJQQVJBTSlcclxudmFyaWFibGVUZXJtXHQ6IHZhcmlhYmxlXHJcbmJvb2xlYW5UZXJtXHRcdDogVFJVRSB8IEZBTFNFXHJcbiovIiwiZXhwb3J0IGNsYXNzIERpY3Rpb25hcnk8VD4ge1xyXG5cdHByaXZhdGUgaXRlbXM6IHsgW2luZGV4OiBzdHJpbmddOiBUIH0gPSB7fTtcclxuXHRwcml2YXRlIGNvdW50OiBudW1iZXIgPSAwO1xyXG5cdHB1YmxpYyBBZGQoa2V5OiBzdHJpbmcsIHZhbHVlOiBUKTogdm9pZCB7XHJcblx0XHRpZiAoIXRoaXMuaXRlbXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG5cdFx0XHR0aGlzLmNvdW50Kys7XHJcblx0XHR9XHJcblx0XHR0aGlzLml0ZW1zW2tleV0gPSB2YWx1ZTtcclxuXHR9XHJcblx0cHVibGljIENvbnRhaW5zS2V5KGtleTogc3RyaW5nKTogYm9vbGVhbiB7XHJcblx0XHRyZXR1cm4gdGhpcy5pdGVtcy5oYXNPd25Qcm9wZXJ0eShrZXkpO1xyXG5cdH1cclxuXHRwdWJsaWMgQ291bnQoKTogbnVtYmVyIHtcclxuXHRcdHJldHVybiB0aGlzLmNvdW50O1xyXG5cdH1cclxuXHRwdWJsaWMgSXRlbShrZXk6IHN0cmluZyk6IFQge1xyXG5cdFx0cmV0dXJuIHRoaXMuaXRlbXNba2V5XTtcclxuXHR9XHJcblx0cHVibGljIFJlbW92ZShrZXk6IHN0cmluZyk6IFQge1xyXG5cdFx0Y29uc3QgdmFsID0gdGhpcy5pdGVtc1trZXldO1xyXG5cdFx0ZGVsZXRlIHRoaXMuaXRlbXNba2V5XTtcclxuXHRcdHRoaXMuY291bnQtLTtcclxuXHRcdHJldHVybiB2YWw7XHJcblx0fVxyXG5cdHB1YmxpYyBLZXlzKCk6IHN0cmluZ1tdIHtcclxuXHRcdGNvbnN0IGtleVNldDogc3RyaW5nW10gPSBbXTtcclxuXHRcdGZvciAoY29uc3QgcHJvcCBpbiB0aGlzLml0ZW1zKSB7XHJcblx0XHRcdGlmICh0aGlzLml0ZW1zLmhhc093blByb3BlcnR5KHByb3ApKSB7XHJcblx0XHRcdFx0a2V5U2V0LnB1c2gocHJvcCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiBrZXlTZXQ7XHJcblx0fVxyXG5cdHB1YmxpYyBWYWx1ZXMoKTogVFtdIHtcclxuXHRcdGNvbnN0IHZhbHVlczogVFtdID0gW107XHJcblx0XHRmb3IgKGNvbnN0IHByb3AgaW4gdGhpcy5pdGVtcykge1xyXG5cdFx0XHRpZiAodGhpcy5pdGVtcy5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xyXG5cdFx0XHRcdHZhbHVlcy5wdXNoKHRoaXMuaXRlbXNbcHJvcF0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdmFsdWVzO1xyXG5cdH1cclxuXHRwdWJsaWMgRGVlcENvcHkoKTogRGljdGlvbmFyeTxUPiB7XHJcblx0XHRjb25zdCByZXQ6IERpY3Rpb25hcnk8VD4gPSBuZXcgRGljdGlvbmFyeTxUPigpO1xyXG5cdFx0Zm9yIChjb25zdCBpdGVtIGluIHRoaXMuaXRlbXMpIHtcclxuXHRcdFx0cmV0Lml0ZW1zW2l0ZW1dID0gdGhpcy5pdGVtc1tpdGVtXTtcclxuXHRcdH1cclxuXHRcdHJldC5jb3VudCA9IHRoaXMuY291bnQ7XHJcblx0XHRyZXR1cm4gcmV0O1xyXG5cdH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=