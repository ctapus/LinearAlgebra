/// <reference path="RationalNumber.ts" />
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
                    _this.elements[i][j] = new RationalNumber(1);
                }
                else {
                    _this.elements[i][j] = new RationalNumber(0);
                }
            }
        }
        _this.elements[row1][row1] = new RationalNumber(0);
        _this.elements[row1][row2] = new RationalNumber(1);
        _this.elements[row2][row2] = new RationalNumber(0);
        _this.elements[row2][row1] = new RationalNumber(1);
        return _this;
    }
    return MatrixPermutation;
}(Matrix));
//# sourceMappingURL=MatrixPermutation.js.map