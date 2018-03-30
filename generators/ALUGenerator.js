/// <reference path="../structures/SystemOfLinearEquations.ts" />
var ALUGenerator = /** @class */ (function () {
    function ALUGenerator() {
        this.probabilityToBeSquare = 0.8; // 80% to generate a square matrix
        this.isSquare = Math.random() <= this.probabilityToBeSquare;
        this.numberOfRowsMin = 3;
        this.numberOfRowsMax = 7;
        this.numberOfRows = Math.floor(Math.random() * (this.numberOfRowsMax - this.numberOfRowsMin) + this.numberOfRowsMin);
        this.numberOfColsMin = 3;
        this.numberOfColsMax = 7;
        this.numberOfCols = this.isSquare ? this.numberOfRows :
            Math.floor(Math.random() * (this.numberOfColsMax - this.numberOfColsMin) + this.numberOfColsMin);
        this.valueOfElementsMin = -10;
        this.valueOfElementsMax = 10;
    }
    ALUGenerator.prototype.random = function () {
        // A=LU for A mxn => L is mxm and U is mxn OR L is mxn and U is nxn
        var L = new Matrix(this.numberOfRows, this.numberOfRows);
        for (var i = 0; i < L.m; i++) {
            for (var j = 0; j < L.n; j++) {
                if (i === j) {
                    L.elements[i][j] = this.randomNonZeroVariableValue(); // new RationalNumber(1);
                }
                else {
                    if (i > j) {
                        L.elements[i][j] = this.randomVariableValue();
                    }
                    else {
                        L.elements[i][j] = new RationalNumber(0);
                    }
                }
            }
        }
        var U = new Matrix(this.numberOfRows, this.numberOfCols);
        for (var i = 0; i < U.m; i++) {
            for (var j = 0; j < U.n; j++) {
                if (i === j) {
                    U.elements[i][j] = this.randomNonZeroVariableValue(); // new RationalNumber(1);
                }
                else {
                    if (i < j) {
                        U.elements[i][j] = this.randomVariableValue();
                    }
                    else {
                        U.elements[i][j] = new RationalNumber(0);
                    }
                }
            }
        }
        return L.mult(U);
    };
    ALUGenerator.prototype.randomVariableValue = function () {
        return new RationalNumber(Math.floor(Math.random() * (this.valueOfElementsMax - this.valueOfElementsMin) + this.valueOfElementsMin));
    };
    ALUGenerator.prototype.randomNonZeroVariableValue = function () {
        var r = this.randomVariableValue();
        while (r.numerator === 0) {
            r = this.randomVariableValue();
        }
        return r;
    };
    return ALUGenerator;
}());
//# sourceMappingURL=ALUGenerator.js.map