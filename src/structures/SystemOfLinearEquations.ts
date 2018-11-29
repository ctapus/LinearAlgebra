import { Matrix } from "../structures/Matrix";
import { Vector } from "../structures/Vector";

export class SystemOfLinearEquations {
	public noEquations: number;
	public noVariables: number;
	public A: Matrix;
	public b: Vector;
	constructor(noEquations: number, noVariables: number) {
		this.noEquations = noEquations;
		this.noVariables = noVariables;
		this.A = new Matrix(noEquations, noVariables);
		this.b = new Vector(noEquations);
	}
}