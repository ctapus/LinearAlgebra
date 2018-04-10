import { Matrix } from "../structures/Matrix";
import { Vector } from "../structures/Vector";
export class SystemOfLinearEquations {
    constructor(noEquations, noVariables) {
        this.noEquations = noEquations;
        this.noVariables = noVariables;
        this.A = new Matrix(noEquations, noVariables);
        this.b = new Vector(noEquations);
    }
}
//# sourceMappingURL=SystemOfLinearEquations.js.map