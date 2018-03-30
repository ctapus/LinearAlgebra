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
                    _this.elements[i][j] = new RationalNumber(1);
                }
                else {
                    _this.elements[i][j] = new RationalNumber(0);
                }
            }
        }
        if (typeof mult === "number") {
            _this.elements[r1][r2] = new RationalNumber(mult);
        }
        else {
            if (mult instanceof RationalNumber) {
                _this.elements[r1][r2] = mult;
            }
        }
        return _this;
    }
    return MatrixElimination;
}(Matrix));
//# sourceMappingURL=MatrixElimination.js.map