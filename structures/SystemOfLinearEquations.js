"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="Vector.ts" />
/// <reference path="Matrix.ts" />
var Vector_1 = require("../structures/Vector");
var Matrix_1 = require("../structures/Matrix");
var SystemOfLinearEquations = /** @class */ (function () {
    function SystemOfLinearEquations(noEquations, noVariables) {
        this.noEquations = noEquations;
        this.noVariables = noVariables;
        this.A = new Matrix_1.Matrix(noEquations, noVariables);
        this.b = new Vector_1.Vector(noEquations);
    }
    return SystemOfLinearEquations;
}());
exports.SystemOfLinearEquations = SystemOfLinearEquations;
//# sourceMappingURL=SystemOfLinearEquations.js.map