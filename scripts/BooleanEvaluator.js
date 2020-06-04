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

      var _iterator = _createForOfIteratorHelper((_this$left = this.left) === null || _this$left === void 0 ? void 0 : _this$left.freeVariables()),
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

      var _iterator2 = _createForOfIteratorHelper((_this$right = this.right) === null || _this$right === void 0 ? void 0 : _this$right.freeVariables()),
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

      return freeVariables;
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0cnVjdHVyZXMvQm9vbGVhbkV2YWx1YXRvci50cyJdLCJuYW1lcyI6WyJCb29sZWFuVG9rZW5UeXBlIiwiQm9vbGVhblRva2VuIiwidHlwZSIsInZhcmlhYmxlIiwiQm9vbGVhbkxleGVyIiwidG9rZW5zIiwibGVuZ3RoIiwidG9rZW5JbmRleCIsIkVuZCIsImlucHV0IiwiZ2V0VG9rZW4iLCJFcnJvciIsInJlcGxhY2UiLCJtYXRjaCIsImlucHV0Q2hlY2tSZWdleCIsInRva2VuUmVnZXhPciIsInRlc3QiLCJPciIsInRva2VuUmVnZXhBbmQiLCJBbmQiLCJ0b2tlblJlZ2V4Tm90IiwiTm90IiwidG9rZW5SZWdleFZhcmlhYmxlIiwiVmFyaWFibGUiLCJ0b2tlblJlZ2V4VHJ1ZSIsIlRydWUiLCJ0b2tlblJlZ2V4RmFsc2UiLCJGYWxzZSIsInRva2VuUmVnZXhMUGFyZW4iLCJMUGFyZW4iLCJ0b2tlblJlZ2V4UlBhcmVuIiwiUlBhcmVuIiwiVW5rbm93biIsIk9wZXJhdGlvblR5cGUiLCJFeHByZXNzaW9uVHJlZSIsIm5vZGUiLCJmcmVlVmFyaWFibGVzIiwiU2V0IiwiYWRkIiwibGVmdCIsIngiLCJyaWdodCIsIlBhcnNlciIsImxleGVyVHlwZSIsImNvZGUiLCJsZXgiLCJleHByZXNzaW9uIiwiZXhwciIsInRva2VuIiwiZ2V0VG9rZW5BbmRBZHZhbmNlIiwiYm9vbGVhbkV4cHJlc3Npb25UcmVlIiwicmV2ZXJ0IiwiYmluYXJ5T3AiLCJ1bmFyeU9wIiwiQm9vbGVhbkxleGVyQ1MiLCJ0b2tlbml6ZSIsIkJvb2xlYW5MZXhlck1hdGgiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FB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WUFBcEM7QUFhTyxJQUFNb0QsZ0JBQWI7QUFBQTs7QUFBQTs7QUFPQyw0QkFBWS9DLEtBQVosRUFBMkI7QUFBQTs7QUFBQTs7QUFDMUI7O0FBRDBCLHVFQU5TLDZCQU1UOztBQUFBLG9FQUxNLElBS047O0FBQUEscUVBSk8sSUFJUDs7QUFBQSxxRUFITyxJQUdQOztBQUFBLHNFQUZRLEdBRVI7O0FBQUEsdUVBRFMsR0FDVDs7QUFFMUIsV0FBSzhDLFFBQUwsQ0FBYzlDLEtBQWQ7O0FBRjBCO0FBRzFCOztBQVZGO0FBQUEsRUFBc0NMLFlBQXRDO0FBYUEiLCJmaWxlIjoiLi9Cb29sZWFuRXZhbHVhdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvc3RydWN0dXJlcy9Cb29sZWFuRXZhbHVhdG9yLnRzXCIpO1xuIiwiZXhwb3J0IGVudW0gQm9vbGVhblRva2VuVHlwZSB7IE9yLCBBbmQsIE5vdCwgVHJ1ZSwgRmFsc2UsIFZhcmlhYmxlLCBMUGFyZW4sIFJQYXJlbiwgRW5kLCBVbmtub3duIH1cclxuZXhwb3J0IGNsYXNzIEJvb2xlYW5Ub2tlbiB7XHJcblx0cHVibGljIHR5cGU6IEJvb2xlYW5Ub2tlblR5cGU7XHJcblx0cHVibGljIHZhcmlhYmxlOiBzdHJpbmcgfCBib29sZWFuO1xyXG5cdGNvbnN0cnVjdG9yKHR5cGU6IEJvb2xlYW5Ub2tlblR5cGUsIHZhcmlhYmxlPzogc3RyaW5nIHwgYm9vbGVhbikge1xyXG5cdFx0dGhpcy50eXBlID0gdHlwZTtcclxuXHRcdHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcclxuXHR9XHJcbn1cclxuYWJzdHJhY3QgY2xhc3MgQm9vbGVhbkxleGVyIHtcclxuXHRwcm90ZWN0ZWQgaW5wdXRDaGVja1JlZ2V4OiBSZWdFeHA7XHJcblx0cHJvdGVjdGVkIHRva2VuUmVnZXhPcjogUmVnRXhwO1xyXG5cdHByb3RlY3RlZCB0b2tlblJlZ2V4QW5kOiBSZWdFeHA7XHJcblx0cHJvdGVjdGVkIHRva2VuUmVnZXhOb3Q6IFJlZ0V4cDtcclxuXHRwcm90ZWN0ZWQgdG9rZW5SZWdleFRydWU6IFJlZ0V4cDtcclxuXHRwcm90ZWN0ZWQgdG9rZW5SZWdleEZhbHNlOiBSZWdFeHA7XHJcblx0cHJvdGVjdGVkIHRva2VuUmVnZXhMUGFyZW46IFJlZ0V4cCA9IC9cXCgvO1xyXG5cdHByb3RlY3RlZCB0b2tlblJlZ2V4UlBhcmVuOiBSZWdFeHAgPSAvXFwpLztcclxuXHRwcm90ZWN0ZWQgdG9rZW5SZWdleFZhcmlhYmxlOiBSZWdFeHAgPSAvW0EtWl0vO1xyXG5cdHByaXZhdGUgdG9rZW5zOiBzdHJpbmdbXTtcclxuXHRwcml2YXRlIHRva2VuSW5kZXg6IG51bWJlcjtcclxuXHRwdWJsaWMgZ2V0VG9rZW5BbmRBZHZhbmNlKCk6IEJvb2xlYW5Ub2tlbiB7XHJcblx0XHRpZiAodGhpcy50b2tlbnMubGVuZ3RoIC0gMSA9PT0gdGhpcy50b2tlbkluZGV4KSB7IHJldHVybiBuZXcgQm9vbGVhblRva2VuKEJvb2xlYW5Ub2tlblR5cGUuRW5kKTsgfVxyXG5cdFx0Y29uc3QgaW5wdXQ6IHN0cmluZyA9IHRoaXMudG9rZW5zW3RoaXMudG9rZW5JbmRleCsrXTtcclxuXHRcdHJldHVybiB0aGlzLmdldFRva2VuKGlucHV0KTtcclxuXHR9XHJcblx0cHVibGljIHJldmVydCgpOiB2b2lkIHtcclxuXHRcdGlmICh0aGlzLnRva2VuSW5kZXggPD0gMCkgeyB0aHJvdyBFcnJvcihcIkluZGV4IG91dCBvZiByYW5nZVwiKTsgfVxyXG5cdFx0dGhpcy50b2tlbkluZGV4LS07XHJcblx0fVxyXG5cdHByb3RlY3RlZCB0b2tlbml6ZShpbnB1dDogc3RyaW5nKSB7XHJcblx0XHR0aGlzLnRva2VucyA9IGlucHV0LnJlcGxhY2UoXCIgXCIsIFwiXCIpLm1hdGNoKHRoaXMuaW5wdXRDaGVja1JlZ2V4KTtcclxuXHRcdHRoaXMudG9rZW5JbmRleCA9IDA7XHJcblx0fVxyXG5cdHByaXZhdGUgZ2V0VG9rZW4oaW5wdXQ6IHN0cmluZyk6IEJvb2xlYW5Ub2tlbiB7XHJcblx0XHRpZiAodGhpcy50b2tlblJlZ2V4T3IudGVzdChpbnB1dCkpIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBCb29sZWFuVG9rZW4oQm9vbGVhblRva2VuVHlwZS5Pcik7XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy50b2tlblJlZ2V4QW5kLnRlc3QoaW5wdXQpKSB7XHJcblx0XHRcdHJldHVybiBuZXcgQm9vbGVhblRva2VuKEJvb2xlYW5Ub2tlblR5cGUuQW5kKTtcclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLnRva2VuUmVnZXhOb3QudGVzdChpbnB1dCkpIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBCb29sZWFuVG9rZW4oQm9vbGVhblRva2VuVHlwZS5Ob3QpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMudG9rZW5SZWdleFZhcmlhYmxlLnRlc3QoaW5wdXQpKSB7XHJcblx0XHRcdHJldHVybiBuZXcgQm9vbGVhblRva2VuKEJvb2xlYW5Ub2tlblR5cGUuVmFyaWFibGUsIGlucHV0KTtcclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLnRva2VuUmVnZXhUcnVlLnRlc3QoaW5wdXQpKSB7XHJcblx0XHRcdHJldHVybiBuZXcgQm9vbGVhblRva2VuKEJvb2xlYW5Ub2tlblR5cGUuVHJ1ZSk7XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy50b2tlblJlZ2V4RmFsc2UudGVzdChpbnB1dCkpIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBCb29sZWFuVG9rZW4oQm9vbGVhblRva2VuVHlwZS5GYWxzZSk7XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy50b2tlblJlZ2V4TFBhcmVuLnRlc3QoaW5wdXQpKSB7XHJcblx0XHRcdHJldHVybiBuZXcgQm9vbGVhblRva2VuKEJvb2xlYW5Ub2tlblR5cGUuTFBhcmVuKTtcclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLnRva2VuUmVnZXhSUGFyZW4udGVzdChpbnB1dCkpIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBCb29sZWFuVG9rZW4oQm9vbGVhblRva2VuVHlwZS5SUGFyZW4pO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIG5ldyBCb29sZWFuVG9rZW4oQm9vbGVhblRva2VuVHlwZS5Vbmtub3duKTtcclxuXHR9XHJcbn1cclxuZW51bSBPcGVyYXRpb25UeXBlIHsgT3IsIEFuZCwgTm90fVxyXG5leHBvcnQgY2xhc3MgRXhwcmVzc2lvblRyZWUge1xyXG5cdHB1YmxpYyBsZWZ0OiBFeHByZXNzaW9uVHJlZTtcclxuXHRwdWJsaWMgbm9kZTogc3RyaW5nIHwgYm9vbGVhbiB8IE9wZXJhdGlvblR5cGU7XHJcblx0cHVibGljIHJpZ2h0OiBFeHByZXNzaW9uVHJlZTtcclxuXHRjb25zdHJ1Y3RvcihpbnB1dD86IHN0cmluZyB8IGJvb2xlYW4gfCBPcGVyYXRpb25UeXBlKSB7XHJcblx0XHR0aGlzLm5vZGUgPSBpbnB1dDtcclxuXHR9XHJcblx0cHVibGljIGZyZWVWYXJpYWJsZXMoKTogU2V0PHN0cmluZz4ge1xyXG5cdFx0Y29uc3QgZnJlZVZhcmlhYmxlczogU2V0PHN0cmluZz4gPSBuZXcgU2V0PHN0cmluZz4oKTtcclxuXHRcdGlmICh0eXBlb2YgdGhpcy5ub2RlID09PSBcInN0cmluZ1wiKSB7XHJcblx0XHRcdGZyZWVWYXJpYWJsZXMuYWRkKHRoaXMubm9kZSk7XHJcblx0XHR9XHJcblx0XHRmb3IgKGNvbnN0IHggb2YgdGhpcy5sZWZ0Py5mcmVlVmFyaWFibGVzKCkpIHtcclxuXHRcdFx0ZnJlZVZhcmlhYmxlcy5hZGQoeCk7XHJcblx0XHR9XHJcblx0XHRmb3IgKGNvbnN0IHggb2YgdGhpcy5yaWdodD8uZnJlZVZhcmlhYmxlcygpKSB7XHJcblx0XHRcdGZyZWVWYXJpYWJsZXMuYWRkKHgpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGZyZWVWYXJpYWJsZXM7XHJcblx0fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBQYXJzZXI8VCBleHRlbmRzIEJvb2xlYW5MZXhlcj4ge1xyXG5cdHByaXZhdGUgbGV4OiBUO1xyXG5cdHB1YmxpYyBwYXJzZShsZXhlclR5cGU6IG5ldyAoY29kZTogc3RyaW5nKSA9PiBULCBjb2RlOiBzdHJpbmcpOiBFeHByZXNzaW9uVHJlZSB7XHJcblx0XHR0aGlzLmxleCA9IG5ldyBsZXhlclR5cGUoY29kZSk7XHJcblx0XHRjb25zdCBleHByZXNzaW9uOiBFeHByZXNzaW9uVHJlZSA9IHRoaXMuZXhwcigpO1xyXG5cdFx0Y29uc3QgdG9rZW46IEJvb2xlYW5Ub2tlbiA9IHRoaXMubGV4LmdldFRva2VuQW5kQWR2YW5jZSgpO1xyXG5cdFx0aWYgKHRva2VuLnR5cGUgPT09IEJvb2xlYW5Ub2tlblR5cGUuRW5kKSB7XHJcblx0XHRcdHJldHVybiBleHByZXNzaW9uO1xyXG5cdFx0fVxyXG5cdFx0dGhyb3cgRXJyb3IoXCJFbmQgZXhwZWN0ZWRcIik7XHJcblx0fVxyXG5cdHByaXZhdGUgZXhwcigpOiBFeHByZXNzaW9uVHJlZSB7XHJcblx0XHRsZXQgYm9vbGVhbkV4cHJlc3Npb25UcmVlOiBFeHByZXNzaW9uVHJlZTtcclxuXHRcdGxldCB0b2tlbjogQm9vbGVhblRva2VuID0gdGhpcy5sZXguZ2V0VG9rZW5BbmRBZHZhbmNlKCk7XHJcblx0XHRpZiAodG9rZW4udHlwZSA9PT0gQm9vbGVhblRva2VuVHlwZS5FbmQpIHtcclxuXHRcdFx0cmV0dXJuIGJvb2xlYW5FeHByZXNzaW9uVHJlZTtcclxuXHRcdH1cclxuXHRcdGlmICh0b2tlbi50eXBlID09PSBCb29sZWFuVG9rZW5UeXBlLkxQYXJlbikge1xyXG5cdFx0XHRib29sZWFuRXhwcmVzc2lvblRyZWUgPSBuZXcgRXhwcmVzc2lvblRyZWUoKTtcclxuXHRcdFx0Ym9vbGVhbkV4cHJlc3Npb25UcmVlLmxlZnQgPSB0aGlzLmV4cHIoKTtcclxuXHRcdFx0dG9rZW4gPSB0aGlzLmxleC5nZXRUb2tlbkFuZEFkdmFuY2UoKTtcclxuXHRcdFx0aWYgKHRva2VuLnR5cGUgIT09IEJvb2xlYW5Ub2tlblR5cGUuUlBhcmVuKSB7XHJcblx0XHRcdFx0dGhyb3cgRXJyb3IoXCJVbmJhbGFuY2VkIHBhcmVudGhlc2lzLlwiKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0b2tlbiA9IHRoaXMubGV4LmdldFRva2VuQW5kQWR2YW5jZSgpO1xyXG5cdFx0XHRzd2l0Y2ggKHRva2VuLnR5cGUpIHtcclxuXHRcdFx0XHRjYXNlIEJvb2xlYW5Ub2tlblR5cGUuT3I6XHJcblx0XHRcdFx0XHRib29sZWFuRXhwcmVzc2lvblRyZWUubm9kZSA9IE9wZXJhdGlvblR5cGUuT3I7XHJcblx0XHRcdFx0XHRib29sZWFuRXhwcmVzc2lvblRyZWUucmlnaHQgPSB0aGlzLmV4cHIoKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgQm9vbGVhblRva2VuVHlwZS5BbmQ6XHJcblx0XHRcdFx0XHRib29sZWFuRXhwcmVzc2lvblRyZWUubm9kZSA9IE9wZXJhdGlvblR5cGUuQW5kO1xyXG5cdFx0XHRcdFx0Ym9vbGVhbkV4cHJlc3Npb25UcmVlLnJpZ2h0ID0gdGhpcy5leHByKCk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIEJvb2xlYW5Ub2tlblR5cGUuRW5kOlxyXG5cdFx0XHRcdFx0cmV0dXJuIGJvb2xlYW5FeHByZXNzaW9uVHJlZTtcclxuXHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdFx0dGhyb3cgRXJyb3IoXCJJbmNvcnJlY3Qgc3ludGF4LlwiKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5sZXgucmV2ZXJ0KCk7XHJcblx0XHRcdGJvb2xlYW5FeHByZXNzaW9uVHJlZSA9IHRoaXMuYmluYXJ5T3AoKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBib29sZWFuRXhwcmVzc2lvblRyZWU7XHJcblx0fVxyXG5cdHByaXZhdGUgYmluYXJ5T3AoKTogRXhwcmVzc2lvblRyZWUge1xyXG5cdFx0bGV0IGJvb2xlYW5FeHByZXNzaW9uVHJlZTogRXhwcmVzc2lvblRyZWU7XHJcblx0XHRsZXQgdG9rZW46IEJvb2xlYW5Ub2tlbiA9IHRoaXMubGV4LmdldFRva2VuQW5kQWR2YW5jZSgpO1xyXG5cdFx0aWYgKHRva2VuLnR5cGUgPT09IEJvb2xlYW5Ub2tlblR5cGUuVmFyaWFibGUgfHwgdG9rZW4udHlwZSA9PT0gQm9vbGVhblRva2VuVHlwZS5UcnVlIHx8IHRva2VuLnR5cGUgPT09IEJvb2xlYW5Ub2tlblR5cGUuRmFsc2UpIHtcclxuXHRcdFx0Ym9vbGVhbkV4cHJlc3Npb25UcmVlID0gbmV3IEV4cHJlc3Npb25UcmVlKCk7XHJcblx0XHRcdGJvb2xlYW5FeHByZXNzaW9uVHJlZS5sZWZ0ID0gbmV3IEV4cHJlc3Npb25UcmVlKHRva2VuLnZhcmlhYmxlKTtcclxuXHRcdFx0dG9rZW4gPSB0aGlzLmxleC5nZXRUb2tlbkFuZEFkdmFuY2UoKTtcclxuXHRcdFx0c3dpdGNoICh0b2tlbi50eXBlKSB7XHJcblx0XHRcdFx0Y2FzZSBCb29sZWFuVG9rZW5UeXBlLk9yOlxyXG5cdFx0XHRcdFx0Ym9vbGVhbkV4cHJlc3Npb25UcmVlLm5vZGUgPSBPcGVyYXRpb25UeXBlLk9yO1xyXG5cdFx0XHRcdFx0Ym9vbGVhbkV4cHJlc3Npb25UcmVlLnJpZ2h0ID0gdGhpcy5leHByKCk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIEJvb2xlYW5Ub2tlblR5cGUuQW5kOlxyXG5cdFx0XHRcdFx0Ym9vbGVhbkV4cHJlc3Npb25UcmVlLm5vZGUgPSBPcGVyYXRpb25UeXBlLkFuZDtcclxuXHRcdFx0XHRcdGJvb2xlYW5FeHByZXNzaW9uVHJlZS5yaWdodCA9IHRoaXMuZXhwcigpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRcdHRocm93IEVycm9yKFwiSW5jb3JyZWN0IHN5bnRheC5cIik7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMubGV4LnJldmVydCgpO1xyXG5cdFx0XHRib29sZWFuRXhwcmVzc2lvblRyZWUgPSB0aGlzLnVuYXJ5T3AoKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBib29sZWFuRXhwcmVzc2lvblRyZWU7XHJcblx0fVxyXG5cdHByaXZhdGUgdW5hcnlPcCgpOiBFeHByZXNzaW9uVHJlZSB7XHJcblx0XHRsZXQgYm9vbGVhbkV4cHJlc3Npb25UcmVlOiBFeHByZXNzaW9uVHJlZTtcclxuXHRcdGxldCB0b2tlbjogQm9vbGVhblRva2VuID0gdGhpcy5sZXguZ2V0VG9rZW5BbmRBZHZhbmNlKCk7XHJcblx0XHRpZiAodG9rZW4udHlwZSA9PT0gQm9vbGVhblRva2VuVHlwZS5Ob3QpIHtcclxuXHRcdFx0Ym9vbGVhbkV4cHJlc3Npb25UcmVlID0gbmV3IEV4cHJlc3Npb25UcmVlKE9wZXJhdGlvblR5cGUuTm90KTtcclxuXHRcdFx0dG9rZW4gPSB0aGlzLmxleC5nZXRUb2tlbkFuZEFkdmFuY2UoKTtcclxuXHRcdFx0aWYgKHRva2VuLnR5cGUgPT09IEJvb2xlYW5Ub2tlblR5cGUuVmFyaWFibGUgfHwgdG9rZW4udHlwZSA9PT0gQm9vbGVhblRva2VuVHlwZS5UcnVlIHx8IHRva2VuLnR5cGUgPT09IEJvb2xlYW5Ub2tlblR5cGUuRmFsc2UpIHtcclxuXHRcdFx0XHRib29sZWFuRXhwcmVzc2lvblRyZWUubGVmdCA9IG5ldyBFeHByZXNzaW9uVHJlZSh0b2tlbi52YXJpYWJsZSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5sZXgucmV2ZXJ0KCk7XHJcblx0XHRcdFx0aWYgKHRva2VuLnR5cGUgIT09IEJvb2xlYW5Ub2tlblR5cGUuRW5kKSB7XHJcblx0XHRcdFx0XHRib29sZWFuRXhwcmVzc2lvblRyZWUubGVmdCA9IHRoaXMuZXhwcigpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhyb3cgRXJyb3IoXCJJbmNvcnJlY3Qgc3ludGF4LlwiKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBib29sZWFuRXhwcmVzc2lvblRyZWU7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQm9vbGVhbkxleGVyQ1MgZXh0ZW5kcyBCb29sZWFuTGV4ZXIge1xyXG5cdHByb3RlY3RlZCBpbnB1dENoZWNrUmVnZXg6IFJlZ0V4cCA9IC9cXCh8XFwpfFtcXHxcXCZcXCFdfFtBLVpdfFsxMF0qL2c7XHJcblx0cHJvdGVjdGVkIHRva2VuUmVnZXhPcjogUmVnRXhwID0gL1xcfC87XHJcblx0cHJvdGVjdGVkIHRva2VuUmVnZXhBbmQ6IFJlZ0V4cCA9IC9cXCYvO1xyXG5cdHByb3RlY3RlZCB0b2tlblJlZ2V4Tm90OiBSZWdFeHAgPSAvXFwhLztcclxuXHRwcm90ZWN0ZWQgdG9rZW5SZWdleFRydWU6IFJlZ0V4cCA9IC8xLztcclxuXHRwcm90ZWN0ZWQgdG9rZW5SZWdleEZhbHNlOiBSZWdFeHAgPSAvMC87XHJcblx0Y29uc3RydWN0b3IoaW5wdXQ6IHN0cmluZykge1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdHRoaXMudG9rZW5pemUoaW5wdXQpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJvb2xlYW5MZXhlck1hdGggZXh0ZW5kcyBCb29sZWFuTGV4ZXIge1xyXG5cdHByb3RlY3RlZCBpbnB1dENoZWNrUmVnZXg6IFJlZ0V4cCA9IC9cXCh8XFwpfFtcXCtcXCpcXH5dfFtBLVpdfFsxMF0qL2c7XHJcblx0cHJvdGVjdGVkIHRva2VuUmVnZXhPcjogUmVnRXhwID0gL1xcKy87XHJcblx0cHJvdGVjdGVkIHRva2VuUmVnZXhBbmQ6IFJlZ0V4cCA9IC9cXCovO1xyXG5cdHByb3RlY3RlZCB0b2tlblJlZ2V4Tm90OiBSZWdFeHAgPSAvXFx+LztcclxuXHRwcm90ZWN0ZWQgdG9rZW5SZWdleFRydWU6IFJlZ0V4cCA9IC8xLztcclxuXHRwcm90ZWN0ZWQgdG9rZW5SZWdleEZhbHNlOiBSZWdFeHAgPSAvMC87XHJcblx0Y29uc3RydWN0b3IoaW5wdXQ6IHN0cmluZykge1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdHRoaXMudG9rZW5pemUoaW5wdXQpO1xyXG5cdH1cclxufVxyXG5cclxuLypcclxuZXhwclx0XHRcdDogTFBBUkFNIGV4cHIgUlBBUkFNICgoQU5EIHwgT1IpIGV4cHIpKlxyXG5cdFx0XHRcdHwgYmluYXJ5T3BcclxuYmluYXJ5T3BcdFx0OiAodmFyaWFibGVUZXJtIHwgYm9vbGVhblRlcm0pICgoQU5EIHwgT1IpIGV4cHIpK1xyXG5cdFx0XHRcdHwgdW5hcnlPcCAoKEFORCB8IE9SKSBleHByKStcclxudW5hcnlPcFx0XHRcdDogTk9UICh2YXJpYWJsZVRlcm0gfCBib29sZWFuVGVybSB8IExQQVJBTSBleHByIFJQQVJBTSlcclxudmFyaWFibGVUZXJtXHQ6IHZhcmlhYmxlXHJcbmJvb2xlYW5UZXJtXHRcdDogVFJVRSB8IEZBTFNFXHJcbiovIl0sInNvdXJjZVJvb3QiOiIifQ==