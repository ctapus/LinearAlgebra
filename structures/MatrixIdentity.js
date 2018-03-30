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
var MatrixIdentity = /** @class */ (function (_super) {
    __extends(MatrixIdentity, _super);
    function MatrixIdentity(m) {
        var _this = _super.call(this, m, m) || this;
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
        return _this;
    }
    return MatrixIdentity;
}(Matrix));
//# sourceMappingURL=MatrixIdentity.js.map