import { RationalNumber } from "../structures/RationalNumber";
import { Matrix } from "../structures/Matrix";
import { SystemOfLinearEquations } from "../structures/SystemOfLinearEquations";
export class SystemOfLinearEquationsGenerator {
    constructor() {
        this.probabilityToBeConsistent = 0.8; // 80% for the system to have solutions
        this.probabilityToBeIndependent = 0.8; // 80% for all equation in the system to be linear independent
        this.probabilityToHaveUniqueSolution = 0.8; // if the system has solution, 80% for the system to have a uniques solution
        this.hasSolution = Math.random() <= this.probabilityToBeConsistent;
        this.hasUniqueSolution = this.hasSolution ? Math.random() <= this.probabilityToHaveUniqueSolution : false;
        this.numberOfVariablesMin = 3;
        this.numberOfVariablesMax = 7;
        this.numberOfVariables = Math.floor(Math.random() *
            (this.numberOfVariablesMax - this.numberOfVariablesMin) + this.numberOfVariablesMin);
        this.numberOfFreeVariablesMaxPercent = 0.4; // maximum 40% of total number of variables
        this.numberOfFreeVariables = this.hasUniqueSolution ? 0 :
            this.numberOfVariables - Math.floor(Math.random() * this.numberOfVariables * this.numberOfFreeVariablesMaxPercent + 1);
        // between 1 and max percent of free variables out of total number of variables
        this.numberOfLeadingVariables = this.numberOfVariables - this.numberOfFreeVariables;
        this.hasDependentEquations = Math.random() >= this.probabilityToBeIndependent;
        this.numberOfDependentEquationsMax = 0.4; // maximum 40% of total number of equations are not independent
        this.numberOfIndependentEquations = this.numberOfLeadingVariables;
        this.numberOfDependentEquations = this.hasDependentEquations ?
            Math.floor(Math.random() * this.numberOfIndependentEquations * this.numberOfDependentEquationsMax + 1) : 0;
        this.numberOfEquations = this.numberOfIndependentEquations + this.numberOfDependentEquations;
        this.valueOfVariablesMin = -10;
        this.valueOfVariablesMax = 10;
        //
        //                          numberOfVariables = numberOfLeadingVariables + numberOfFreeVariables
        //                                      _____________________________
        //                                      |                           |
        //                                      |                           |
        //                                      |                           |
        //  numberOfEquations =                 |                           |
        //  numberOfIndependentEquations +      |                           |
        //  numberOfDependedntEquations         |                           |
        //                                      |                           |
        //                                      |                           |
        //                                      |                           |
        //                                      _____________________________
        //
    }
    random() {
        let augmentedMatrix = this.generateIndependentSystem();
        this.makeSystemDependent(augmentedMatrix); // based on the numberOfIndependentEquations and numberOfEquations
        this.makeSystemInconsistent(augmentedMatrix); // based on the hasSolution
        let ret = new SystemOfLinearEquations(augmentedMatrix.m, augmentedMatrix.n - 1);
        for (let i = 0; i < ret.noEquations; i++) {
            for (let j = 0; j < ret.noVariables; j++) {
                ret.A.elements[i][j] = augmentedMatrix.elements[i][j];
            }
        }
        for (let j = 0; j < ret.noEquations; j++) {
            ret.b.elements[j] = augmentedMatrix.elements[j][ret.noVariables];
        }
        return ret;
    }
    randomVariableValue() {
        return Math.floor(Math.random() * (this.valueOfVariablesMax - this.valueOfVariablesMin) + this.valueOfVariablesMin);
    }
    // equation systems: independent, dependendt or inconsistent
    generateIndependentSystem() {
        let variables = [];
        for (var i = 0; i < this.numberOfVariables; i++) {
            variables[i] = this.randomVariableValue();
        }
        let augmentedMatrix = new Matrix(this.numberOfIndependentEquations + this.numberOfDependentEquations, this.numberOfVariables + 1);
        // +1 becasue it represents the augmented matrix
        for (let i = 0; i < this.numberOfIndependentEquations; i++) {
            let freeTerm = new RationalNumber(0);
            for (let j = 0; j < this.numberOfVariables; j++) {
                augmentedMatrix.elements[i][j] = new RationalNumber(Math.floor(Math.random() * 10 - 5)); // coeficients' range
                freeTerm = freeTerm.add(augmentedMatrix.elements[i][j].mult(variables[j]));
            }
            augmentedMatrix.elements[i][this.numberOfVariables] = freeTerm;
        }
        return augmentedMatrix;
    }
    makeSystemDependent(augmentedMatrix) {
        for (let i = this.numberOfIndependentEquations; i < this.numberOfEquations; i++) {
            let row1 = Math.floor(Math.random() * this.numberOfIndependentEquations);
            let row2 = Math.floor(Math.random() * this.numberOfIndependentEquations);
            while (row1 === row2) {
                row2 = Math.floor(Math.random() * this.numberOfIndependentEquations);
            }
            let coeficient1 = new RationalNumber(Math.floor(Math.random() * 10 - 5));
            let coeficient2 = new RationalNumber(Math.floor(Math.random() * 10 - 5));
            for (let j = 0; j < (this.numberOfVariables + 1); j++) {
                augmentedMatrix.elements[i][j] = coeficient1.mult(augmentedMatrix.elements[row1][j])
                    .add(coeficient2.mult(augmentedMatrix.elements[row2][j]));
            }
        }
    }
    makeSystemInconsistent(augmentedMatrix) {
        if (!this.hasSolution) {
            for (let i = 0; i < this.numberOfEquations; i++) {
                augmentedMatrix.elements[i][this.numberOfVariables + 1] = new RationalNumber(Math.floor(Math.random() * 100 - 50));
                // just change the free variables random
            }
        }
    }
}
//# sourceMappingURL=SystemOfLinearEquationsGenerator.js.map