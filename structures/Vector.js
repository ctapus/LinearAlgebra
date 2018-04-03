"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var RationalNumber_1 = require("../structures/RationalNumber");
var Matrix_1 = require("../structures/Matrix");
var Vector = /** @class */ (function () {
    function Vector(n) {
        if (typeof n === "number") {
            this.m = n;
            this.elements = [];
        }
        else if (n instanceof Array) {
            this.m = n.length;
            this.elements = [];
            for (var i = 0; i < this.m; i++) {
                this.elements[i] = new RationalNumber_1.RationalNumber(n[i]);
            }
        }
    }
    Vector.prototype.add = function (x) {
        if (this.m !== x.m) {
            throw "Mismatched dimensions.";
        }
        var res = new Vector(this.m);
        for (var i = 0; i < res.m; i++) {
            res.elements[i] = this.elements[i].add(x.elements[i]);
        }
        return res;
    };
    Vector.prototype.sub = function (x) {
        if (this.m !== x.m) {
            throw "Mismatched dimensions.";
        }
        var res = new Vector(this.m);
        for (var i = 0; i < res.m; i++) {
            res.elements[i] = this.elements[i].sub(x.elements[i]);
        }
        return res;
    };
    Vector.prototype.mult = function (x) {
        var res = new Vector(this.m);
        for (var i = 0; i < res.m; i++) {
            res.elements[i] = this.elements[i].mult(x);
        }
        return res;
    };
    // [ALIASES]: innerProduct, projectionProduct, scalarProduct
    Vector.prototype.dotProduct = function (x) {
        if (this.m !== x.m) {
            throw "Mismatched dimensions.";
        }
        var res = new RationalNumber_1.RationalNumber(0);
        for (var i = 0; i < x.m; i++) {
            res = res.add(this.elements[i].mult(x.elements[i]));
        }
        return res;
    };
    // [ALIASES]: directedAreaProduct, vectorProduct
    Vector.prototype.crossProduct = function (x) {
        throw "Not implemented.";
    };
    Vector.prototype.deepCopy = function () {
        var ret = new Vector(this.m);
        for (var i = 0; i < this.m; i++) {
            ret.elements[i] = this.elements[i];
        }
        return ret;
    };
    Vector.prototype.toMatrix = function () {
        var ret = new Matrix_1.Matrix(this.m, 1);
        for (var i = 0; i < this.m; i++) {
            ret.elements[i][0] = this.elements[i];
        }
        return ret;
    };
    Vector.arelLinearlyIndependent = function (vectors) {
        var m = vectors.length;
        if (0 === m) {
            return true;
        }
        var n = vectors[0].m;
        for (var i = 1; i < vectors.length; i++) {
            if (n !== vectors[i].m) {
                throw "All vectors must have the same length.";
            }
        }
        if (m > n) {
            return false;
        }
    };
    return Vector;
}());
exports.Vector = Vector;
var ColumnVector = /** @class */ (function (_super) {
    __extends(ColumnVector, _super);
    function ColumnVector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ColumnVector;
}(Vector));
exports.ColumnVector = ColumnVector;
var RowVector = /** @class */ (function (_super) {
    __extends(RowVector, _super);
    function RowVector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RowVector.prototype.matrixProduct = function (m) {
        if (this.m !== m.n) {
            throw "Mismatched dimensions.";
        }
        var res = new RowVector(this.m);
        for (var i = 0; i < this.m; i++) {
            var sum = new RationalNumber_1.RationalNumber(0);
            for (var j = 0; j < m.n; j++) {
                sum = sum.add(m.elements[i][j].mult(this.elements[i]));
            }
            res.elements[i] = sum;
        }
        return res;
    };
    return RowVector;
}(Vector));
exports.RowVector = RowVector;
//# sourceMappingURL=Vector.js.map