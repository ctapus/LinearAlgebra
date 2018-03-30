/// <reference path="RationalNumber.ts" />

// permutation - multiply on the right (A*P); Row-switching transformations
class MatrixPermutation extends Matrix {
	constructor(m: number, row1: number, row2: number) {
		if (m < row1 || m < row2) { throw new Error("Column index must be less than or equal to the matrix size."); }
		super(m, m);
		this.elements = [];
		for (let i: number = 0; i < this.m; i++) {
			this.elements[i] = [];
			for (let j: number = 0; j < this.m; j++) {
				if (i === j) {
					this.elements[i][j] = new RationalNumber(1);
				} else { this.elements[i][j] = new RationalNumber(0); }
			}
		}
		this.elements[row1][row1] = new RationalNumber(0);
		this.elements[row1][row2] = new RationalNumber(1);
		this.elements[row2][row2] = new RationalNumber(0);
		this.elements[row2][row1] = new RationalNumber(1);
	}
}