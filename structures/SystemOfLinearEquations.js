/// <reference path="Vector.ts" />
/// <reference path="Matrix.ts" />
var SystemOfLinearEquations = /** @class */ (function () {
    function SystemOfLinearEquations(noEquations, noVariables) {
        this.noEquations = noEquations;
        this.noVariables = noVariables;
        this.A = new Matrix(noEquations, noVariables);
        this.b = new Vector(noEquations);
    }
    return SystemOfLinearEquations;
}());
//# sourceMappingURL=SystemOfLinearEquations.js.map