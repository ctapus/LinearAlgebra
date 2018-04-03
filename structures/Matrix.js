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
var Vector_1 = require("../structures/Vector");
var Matrix = /** @class */ (function () {
    function Matrix(m, n) {
        this.m = m;
        this.n = n;
        this.elements = [];
        for (var i = 0; i < this.m; i++) {
            this.elements[i] = [];
        }
    }
    Matrix.prototype.equals = function (M) {
        if (this.m !== M.m || this.n !== M.n) {
            return false;
        }
        for (var i = 0; i < this.m; i++) {
            for (var j = 0; j < this.n; j++) {
                if (!this.elements[i][j].equals(M.elements[i][j])) {
                    return false;
                }
            }
        }
        return true;
    };
    Matrix.prototype.add = function (x) {
        if (this.m !== x.m || this.n !== x.n) {
            throw "Mismatched dimensions.";
        }
        var res = new Matrix(this.m, this.n);
        for (var i = 0; i < res.m; i++) {
            for (var j = 0; j < res.n; j++) {
                res.elements[i][j] = this.elements[i][j].add(x.elements[i][j]);
            }
        }
        return res;
    };
    Matrix.prototype.sub = function (x) {
        if (this.m !== x.m || this.n !== x.n) {
            throw "Mismatched dimensions.";
        }
        var res = new Matrix(this.m, this.n);
        for (var i = 0; i < res.m; i++) {
            for (var j = 0; j < res.n; j++) {
                res.elements[i][j] = this.elements[i][j].sub(x.elements[i][j]);
            }
        }
        return res;
    };
    Matrix.prototype.mult = function (x) {
        var res = null;
        if (typeof x === "number") {
            res = new Matrix(this.m, this.n);
            for (var i = 0; i < res.m; i++) {
                for (var j = 0; j < res.n; j++) {
                    res.elements[i][j] = this.elements[i][j].mult(x);
                }
            }
        }
        else if (x instanceof RationalNumber_1.RationalNumber) {
            res = new Matrix(this.m, this.n);
            for (var i = 0; i < res.m; i++) {
                for (var j = 0; j < res.n; j++) {
                    res.elements[i][j] = this.elements[i][j].mult(x);
                }
            }
        }
        else {
            if (x instanceof Matrix) {
                if (this.n !== x.m) {
                    throw "Mismatched dimensions.";
                }
                res = new Matrix(this.m, x.n);
                for (var i = 0; i < res.m; i++) {
                    for (var j = 0; j < res.n; j++) {
                        var sum = new RationalNumber_1.RationalNumber(0);
                        for (var k = 0; k < this.n; k++) {
                            sum = sum.add(this.elements[i][k].mult(x.elements[k][j]));
                        }
                        res.elements[i][j] = sum;
                    }
                }
            }
        }
        return res;
    };
    Matrix.prototype.vectorProduct = function (v) {
        if (this.n !== v.m) {
            throw "Mismatched dimensions.";
        }
        var res = new Vector_1.ColumnVector(v.m);
        for (var i = 0; i < this.m; i++) {
            var sum = new RationalNumber_1.RationalNumber(0);
            for (var j = 0; j < this.n; j++) {
                sum = sum.add(this.elements[i][j].mult(v.elements[j]));
            }
            res.elements[i] = sum;
        }
        return res;
    };
    Matrix.prototype.transpose = function () {
        var ret = new Matrix(this.n, this.m);
        for (var i = 0; i < this.m; i++) {
            for (var j = 0; j < this.n; j++) {
                ret.elements[j][i] = this.elements[i][j];
            }
        }
        return ret;
    };
    Matrix.prototype.deepCopy = function () {
        var ret = new Matrix(this.m, this.n);
        for (var i = 0; i < this.m; i++) {
            for (var j = 0; j < this.n; j++) {
                ret.elements[i][j] = this.elements[i][j];
            }
        }
        return ret;
    };
    Matrix.prototype.switchRows = function (idx1, idx2) {
        if (this.m < idx1 || this.m < idx2) {
            return;
        }
        for (var i = 0; i < this.n; i++) {
            var tmp = this.elements[idx1][i];
            this.elements[idx1][i] = this.elements[idx2][i];
            this.elements[idx2][i] = tmp;
        }
    };
    Matrix.prototype.multiplyRow = function (idx, scalar) {
        if (this.m < idx) {
            return;
        }
        for (var i = 0; i < this.n; i++) {
            this.elements[idx][i] = this.elements[idx][i].mult(scalar).simplifiedForm();
        }
    };
    Matrix.prototype.addRows = function (idx1, idx2, scalar) {
        if (this.m < idx1 || this.m < idx2) {
            return;
        }
        for (var i = 0; i < this.n; i++) {
            this.elements[idx1][i] = this.elements[idx2][i].mult(scalar).add(this.elements[idx1][i]).simplifiedForm();
        }
    };
    Matrix.prototype.addRow1ToRow2 = function (idx1, scalar1, idx2, scalar2) {
        if (this.m < idx1 || this.m < idx2) {
            return;
        }
        for (var i = 0; i < this.n; i++) {
            this.elements[idx2][i] = this.elements[idx2][i].mult(scalar2).add(this.elements[idx1][i].mult(scalar1)).simplifiedForm();
        }
    };
    // a square matrix is a matrix with the same number of rows and columns
    Matrix.prototype.isSquare = function () {
        return this.m === this.n;
    };
    // a diagonal matrix is a matrix in which the entries outside the main diagonal are all zero
    Matrix.prototype.isDiagonal = function () {
        for (var i = 0; i < this.m; i++) {
            for (var j = 0; j < this.n; j++) {
                if (i === j) {
                    continue;
                }
                if (!this.elements[i][j].equals(new RationalNumber_1.RationalNumber(0))) {
                    return false;
                }
            }
        }
        return true;
    };
    // the identity matrix of size n is the n × n square matrix with ones on the main diagonal and zeros elsewhere
    // [ALIASES]: unit matrix
    Matrix.prototype.isIdentity = function () {
        if (this.m !== this.n) {
            throw new Error("Not a square matrix.");
        }
        for (var i = 0; i < this.m; i++) {
            for (var j = 0; j < this.n; j++) {
                if (i === j) {
                    if (!this.elements[i][j].equals(new RationalNumber_1.RationalNumber(1))) {
                        return false;
                    }
                    continue;
                }
                if (!this.elements[i][j].equals(new RationalNumber_1.RationalNumber(0))) {
                    return false;
                }
            }
        }
        return true;
    };
    // a matrix is normal if it commutes with its conjugate transpose
    Matrix.prototype.isNormal = function () {
        throw "Not implemented";
    };
    // the conjugate transpose of an m-by-n matrix A with complex entries is the n-by-m matrix A∗ obtained from A
    // by taking the transpose and then taking the complex conjugate of each entry
    // [ALIASES]: Hermitian transpose
    Matrix.prototype.toConjugateTranspose = function () {
        throw "Not implemented";
    };
    Matrix.prototype.isUpperTriangular = function () {
        // todo: check if definition is valid for a non square matrix
        // if (this.m !== this.n) { throw new Error("Not a square matrix."); }
        for (var i = 1; i < this.m; i++) {
            for (var j = 0; j < i; j++) {
                if (!this.elements[i][j].equals(new RationalNumber_1.RationalNumber(0))) {
                    return false;
                }
            }
        }
        return true;
    };
    Matrix.prototype.isLowerTriangular = function () {
        // todo: check if definition is valid for a non square matrix
        // if (this.m !== this.n) { throw new Error("Not a square matrix."); }
        for (var i = 0; i < this.m; i++) {
            for (var j = i + 1; j < this.n; j++) {
                if (!this.elements[i][j].equals(new RationalNumber_1.RationalNumber(0))) {
                    return false;
                }
            }
        }
        return true;
    };
    // a symmetric matrix is a square matrix that is equal to its transpose
    Matrix.prototype.isSymmetric = function () {
        if (this.m !== this.n) {
            throw new Error("Not a square matrix.");
        }
        for (var i = 0; i < this.m; i++) {
            for (var j = 0; j < this.n; j++) {
                if (!this.elements[i][j].equals(this.elements[j][i])) {
                    return false;
                }
            }
        }
        return true;
    };
    // an orthogonal matrix is a square matrix with real entries whose columns and rows are orthogonal unit vectors
    // [ALIASES]: real orthogonal matrix
    Matrix.prototype.isOrthogonal = function () {
        var MT = this.transpose();
        return this.mult(MT).isIdentity();
    };
    Matrix.prototype.isRowEchelonForm = function () {
        var foundZeroRow = false;
        // all nonzero rows (rows with at least one nonzero element) are above any rows of all zeroes
        // (all zero rows, if any, belong at the bottom of the matrix)
        for (var i = 0; i < this.m; i++) {
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
        var previousIdx = -1;
        for (var i = 0; i < this.m; i++) {
            var currentPivotIdx = this.rowPivotPosition(i);
            if (0 > currentPivotIdx) {
                continue;
            } // this is a zero row, no pivot
            // leading coefficient must be 1
            if (!this.elements[i][currentPivotIdx].equals(new RationalNumber_1.RationalNumber(1))) {
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
    };
    Matrix.prototype.isReducedRowEchelonForm = function () {
        if (!this.isRowEchelonForm()) {
            return false;
        }
        // each leading coefficient is the only nonzero entry in its column
        for (var i = 0; i < this.m; i++) {
            var pivotPosition = this.rowPivotPosition(i);
            if (1 < this.numberOfNonZeroElementForColumn(pivotPosition)) {
                return false;
            }
        }
        return true;
    };
    Matrix.prototype.toReducedRowEchelonForm = function () {
        var res = this.deepCopy();
        var lead = 0;
        for (var r = 0; r < res.m; r++) {
            if (res.n <= lead) {
                break;
            }
            var i = r;
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
            for (var j = 0; j < res.m; j++) {
                if (j !== r) {
                    res.addRows(j, r, res.elements[j][lead].opposite());
                }
            }
            lead++;
        }
        return res;
    };
    Matrix.prototype.determinant = function () {
        // todo: implement an optimized version, like A=PLU
        if (this.m !== this.n) {
            throw "Determinant can only be calculated on a square matrix";
        }
        if (this.m === 1) {
            return this.elements[0][0];
        }
        var ret = new RationalNumber_1.RationalNumber(0);
        for (var i = 0; i < this.n; i++) {
            var minor = this.elements[0][i].mult(this.cofactor(0, i).determinant());
            ret = ret.add(minor.mult(Math.pow((-1), i)));
        }
        return ret;
    };
    Matrix.prototype.isZeroRow = function (rowId) {
        for (var j = 0; j < this.n; j++) {
            if (!this.elements[rowId][j].equals(new RationalNumber_1.RationalNumber(0))) {
                return false;
            }
        }
        return true;
    };
    Matrix.prototype.rowPivotPosition = function (rowId) {
        for (var j = 0; j < this.n; j++) {
            if (!this.elements[rowId][j].equals(new RationalNumber_1.RationalNumber(0))) {
                return j;
            }
        }
        return -1;
    };
    Matrix.prototype.numberOfNonZeroElementForColumn = function (columnId) {
        var acc = 0;
        for (var j = 0; j < this.m; j++) {
            if (!this.elements[j][columnId].equals(new RationalNumber_1.RationalNumber(0))) {
                acc++;
            }
        }
        return acc;
    };
    Matrix.prototype.cofactor = function (rowId, columnId) {
        var ret = new Matrix(this.m - 1, this.n - 1);
        var rowOffset = 0;
        for (var i = 0; i < this.m - 1; i++) {
            if (i === rowId) {
                rowOffset = 1;
            }
            var columnOffset = 0;
            for (var j = 0; j < this.n - 1; j++) {
                if (j === columnId) {
                    columnOffset = 1;
                }
                ret.elements[i][j] = this.elements[i + rowOffset][j + columnOffset];
            }
        }
        return ret;
    };
    Matrix.augment = function (A, B) {
        if (A.m !== B.m) {
            throw new Error("The two matrices (vector) must have the same number of rows (elements).");
        }
        var ret = null;
        if (B instanceof Matrix) {
            ret = new Matrix(A.m, B.n + A.n);
            for (var i = 0; i < A.m; i++) {
                for (var j = 0; j < A.n; j++) {
                    ret.elements[i][j] = A.elements[i][j];
                }
            }
            for (var i = 0; i < B.m; i++) {
                for (var j = 0; j < B.n; j++) {
                    ret.elements[i][A.n + j] = B.elements[i][j];
                }
            }
        }
        else {
            if (B instanceof Vector_1.Vector) {
                ret = new Matrix(A.m, A.n + 1);
                for (var i = 0; i < A.m; i++) {
                    for (var j = 0; j < A.n; j++) {
                        ret.elements[i][j] = A.elements[i][j];
                    }
                }
                for (var j = 0; j < B.m; j++) {
                    ret.elements[j][A.n] = B.elements[j];
                }
            }
        }
        return ret;
    };
    // row-multiplying transformations
    Matrix.multiplication = function (n, row1, row2, mult) {
        if (n < row1 || n < row2) {
            throw new Error("Column index must be less or equalt than matrix size.");
        }
        var matrix = new MatrixIdentity(n);
        matrix.elements[row1][row2] = new RationalNumber_1.RationalNumber(mult);
        return matrix;
    };
    Matrix.randomSquare = function () {
        var matrix = new Matrix(Math.floor(Math.random() * 4) + 3, Math.floor(Math.random() * 4) + 3); // minimum size 3x3 matrix
        for (var i = 0; i < matrix.m; i++) {
            for (var j = 0; j < matrix.n; j++) {
                matrix.elements[i][j] = new RationalNumber_1.RationalNumber(Math.floor(Math.random() * 100 - 50));
            }
        }
        return matrix;
    };
    Matrix.random2 = function () {
        var numberOfUnknowns = Math.floor(Math.random() * 4 + 3); // between 3 and 7 unknonws
        var unknowns = [];
        for (var i = 0; i < numberOfUnknowns; i++) {
            unknowns[i] = Math.floor(Math.random() * 20 - 10);
        }
        // todo: change below
        var matrix = new Matrix(Math.floor(Math.random() * 4) + 3, Math.floor(Math.random() * 4) + 3);
        return matrix;
    };
    return Matrix;
}());
exports.Matrix = Matrix;
var MatrixIdentity = /** @class */ (function (_super) {
    __extends(MatrixIdentity, _super);
    function MatrixIdentity(m) {
        var _this = _super.call(this, m, m) || this;
        _this.elements = [];
        for (var i = 0; i < _this.m; i++) {
            _this.elements[i] = [];
            for (var j = 0; j < _this.m; j++) {
                if (i === j) {
                    _this.elements[i][j] = new RationalNumber_1.RationalNumber(1);
                }
                else {
                    _this.elements[i][j] = new RationalNumber_1.RationalNumber(0);
                }
            }
        }
        return _this;
    }
    return MatrixIdentity;
}(Matrix));
exports.MatrixIdentity = MatrixIdentity;
// elimination - multiply on the left (E*A); Row-addition transformations
// to mult*(row2 of Matrix A) add (row1 of Matrix A)
var MatrixElimination = /** @class */ (function (_super) {
    __extends(MatrixElimination, _super);
    function MatrixElimination(m, r1, r2, mult) {
        var _this = this;
        if (m < r1 || m < r2) {
            throw new Error("Column index must be less than or equal to the matrix size.");
        }
        _this = _super.call(this, m, m) || this;
        _this.row1 = r1;
        _this.row2 = r2;
        _this.elements = [];
        for (var i = 0; i < _this.m; i++) {
            _this.elements[i] = [];
            for (var j = 0; j < _this.m; j++) {
                if (i === j) {
                    _this.elements[i][j] = new RationalNumber_1.RationalNumber(1);
                }
                else {
                    _this.elements[i][j] = new RationalNumber_1.RationalNumber(0);
                }
            }
        }
        if (typeof mult === "number") {
            _this.elements[r1][r2] = new RationalNumber_1.RationalNumber(mult);
        }
        else {
            if (mult instanceof RationalNumber_1.RationalNumber) {
                _this.elements[r1][r2] = mult;
            }
        }
        return _this;
    }
    return MatrixElimination;
}(Matrix));
exports.MatrixElimination = MatrixElimination;
// permutation - multiply on the right (A*P); Row-switching transformations
var MatrixPermutation = /** @class */ (function (_super) {
    __extends(MatrixPermutation, _super);
    function MatrixPermutation(m, row1, row2) {
        var _this = this;
        if (m < row1 || m < row2) {
            throw new Error("Column index must be less than or equal to the matrix size.");
        }
        _this = _super.call(this, m, m) || this;
        _this.elements = [];
        for (var i = 0; i < _this.m; i++) {
            _this.elements[i] = [];
            for (var j = 0; j < _this.m; j++) {
                if (i === j) {
                    _this.elements[i][j] = new RationalNumber_1.RationalNumber(1);
                }
                else {
                    _this.elements[i][j] = new RationalNumber_1.RationalNumber(0);
                }
            }
        }
        _this.elements[row1][row1] = new RationalNumber_1.RationalNumber(0);
        _this.elements[row1][row2] = new RationalNumber_1.RationalNumber(1);
        _this.elements[row2][row2] = new RationalNumber_1.RationalNumber(0);
        _this.elements[row2][row1] = new RationalNumber_1.RationalNumber(1);
        return _this;
    }
    return MatrixPermutation;
}(Matrix));
exports.MatrixPermutation = MatrixPermutation;
//# sourceMappingURL=Matrix.js.map