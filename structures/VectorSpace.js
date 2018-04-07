"use strict";
exports.__esModule = true;
var Matrix_1 = require("../structures/Matrix");
var VectorSpace = /** @class */ (function () {
    function VectorSpace(n) {
        if (typeof n === "number") {
            this.m = n;
            this.elements = [];
        }
        else if (n instanceof Array) {
            if (!n || 0 >= n.length) {
                throw new Error("At least one vector is needed to construct a vector space.");
            }
            var x = n[0].m;
            for (var i = 1; i < n.length; i++) {
                if (x !== n[i].m) {
                    throw new Error("All vectors must have the same length.");
                }
            }
            this.m = n.length;
            this.elements = n;
        }
    }
    VectorSpace.prototype.findBasis = function () {
        var dim = 0;
        var M = this.toColumnsMatrix().toReducedRowEchelonForm();
        for (var i = 0; i < M.m && i < M.n; i++) {
            if (M.elements[i][i].equals(1)) {
                dim++;
            }
        }
        var res = new VectorSpace(dim);
        for (var i = 0; i < dim; i++) {
            res.elements[i] = this.elements[i].deepCopy();
        }
        return res;
    };
    VectorSpace.prototype.toColumnsMatrix = function () {
        var res = new Matrix_1.Matrix(this.elements[0].m, this.m);
        for (var i = 0; i < res.n; i++) {
            for (var j = 0; j < res.m; j++) {
                res.elements[j][i] = this.elements[i].elements[j];
            }
        }
        return res;
    };
    VectorSpace.prototype.toRowsMatrix = function () {
        var res = new Matrix_1.Matrix(this.m, this.elements[0].m);
        for (var i = 0; i < res.m; i++) {
            for (var j = 0; j < res.n; j++) {
                res.elements[i][j] = this.elements[i].elements[j];
            }
        }
        return res;
    };
    return VectorSpace;
}());
exports.VectorSpace = VectorSpace;
//# sourceMappingURL=VectorSpace.js.map