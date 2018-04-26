import { Matrix } from "../structures/Matrix";
import { RationalNumber } from "../structures/RationalNumber";
import { SystemOfLinearEquations } from "../structures/SystemOfLinearEquations";

export class SystemOfLinearEquationsGenerator {
	public probabilityToBeConsistent: number = 0.8; // 80% for the system to have solutions
	public probabilityToBeIndependent: number = 0.8; // 80% for all equation in the system to be linear independent
	public probabilityToHaveUniqueSolution: number = 0.8; // if the system has solution, 80% for the system to have a uniques solution
	public hasSolution: boolean = Math.random() <= this.probabilityToBeConsistent;
	public hasUniqueSolution: boolean = this.hasSolution ? Math.random() <= this.probabilityToHaveUniqueSolution : false;
	public numberOfVariablesMin: number = 3;
	public numberOfVariablesMax: number = 7;
	public numberOfVariables: number = Math.floor(Math.random() *
	 (this.numberOfVariablesMax - this.numberOfVariablesMin) + this.numberOfVariablesMin);
	public numberOfFreeVariablesMaxPercent: number = 0.4; // maximum 40% of total number of variables
	public numberOfFreeVariables: number = this.hasUniqueSolution ? 0 :
	 this.numberOfVariables - Math.floor(Math.random() * this.numberOfVariables * this.numberOfFreeVariablesMaxPercent + 1);
	 // between 1 and max percent of free variables out of total number of variables
	public numberOfLeadingVariables: number = this.numberOfVariables - this.numberOfFreeVariables;
	public hasDependentEquations: boolean = Math.random() >= this.probabilityToBeIndependent;
	public numberOfDependentEquationsMax: number = 0.4; // maximum 40% of total number of equations are not independent
	public numberOfIndependentEquations: number = this.numberOfLeadingVariables;
	public numberOfDependentEquations: number = this.hasDependentEquations ?
	 Math.floor(Math.random() * this.numberOfIndependentEquations * this.numberOfDependentEquationsMax + 1) : 0;
	public numberOfEquations: number = this.numberOfIndependentEquations + this.numberOfDependentEquations;
	public valueOfVariablesMin: number = -10;
	public valueOfVariablesMax: number = 10;
	public random(): SystemOfLinearEquations {
		const augmentedMatrix: Matrix = this.generateIndependentSystem();
		this.makeSystemDependent(augmentedMatrix); // based on the numberOfIndependentEquations and numberOfEquations
		this.makeSystemInconsistent(augmentedMatrix); // based on the hasSolution
		const ret: SystemOfLinearEquations = new SystemOfLinearEquations(augmentedMatrix.m, augmentedMatrix.n - 1);
		for (let i: number = 0; i < ret.noEquations; i++) {
			for (let j: number = 0; j < ret.noVariables; j++) {
				ret.A.elements[i][j] = augmentedMatrix.elements[i][j];
			}
		}
		for (let j: number = 0; j < ret.noEquations; j++) {
			ret.b.elements[j] = augmentedMatrix.elements[j][ret.noVariables];
		}
		return ret;
	}
	private randomVariableValue(): number {
		return Math.floor(Math.random() * (this.valueOfVariablesMax - this.valueOfVariablesMin) + this.valueOfVariablesMin);
	}
	// equation systems: independent, dependendt or inconsistent
	private generateIndependentSystem(): Matrix {
		const variables: number[] = [];
		for (let i: number = 0; i < this.numberOfVariables; i++) {
			variables[i] = this.randomVariableValue();
		}
		const augmentedMatrix: Matrix = new Matrix(this.numberOfIndependentEquations + this.numberOfDependentEquations, this.numberOfVariables + 1);
		// +1 becasue it represents the augmented matrix
		for (let i: number = 0; i < this.numberOfIndependentEquations; i++) {
			let freeTerm: RationalNumber = new RationalNumber(0);
			for (let j: number = 0; j < this.numberOfVariables; j++) {
				augmentedMatrix.elements[i][j] = new RationalNumber(Math.floor(Math.random() * 10 - 5)); // coeficients' range
				freeTerm = freeTerm.add(augmentedMatrix.elements[i][j].mult(variables[j]));
			}
			augmentedMatrix.elements[i][this.numberOfVariables] = freeTerm;
		}
		return augmentedMatrix;
	}
	private makeSystemDependent(augmentedMatrix: Matrix): void {
		for (let i: number = this.numberOfIndependentEquations; i < this.numberOfEquations; i++) {
			const row1: number = Math.floor(Math.random() * this.numberOfIndependentEquations);
			let row2: number = Math.floor(Math.random() * this.numberOfIndependentEquations);
			while (row1 === row2) {
				row2 = Math.floor(Math.random() * this.numberOfIndependentEquations);
			}
			const coeficient1: RationalNumber = new RationalNumber(Math.floor(Math.random() * 10 - 5));
			const coeficient2: RationalNumber = new RationalNumber(Math.floor(Math.random() * 10 - 5));
			for (let j: number = 0; j < (this.numberOfVariables + 1); j++) {
				augmentedMatrix.elements[i][j] = coeficient1.mult(augmentedMatrix.elements[row1][j])
				.add(coeficient2.mult(augmentedMatrix.elements[row2][j]));
			}
		}
	}
	private makeSystemInconsistent(augmentedMatrix: Matrix): void {
		if (!this.hasSolution) {
			for (let i: number = 0; i < this.numberOfEquations; i++) {
				augmentedMatrix.elements[i][this.numberOfVariables + 1] = new RationalNumber(Math.floor(Math.random() * 100 - 50));
				// just change the free variables random
			}
		}
	}
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
