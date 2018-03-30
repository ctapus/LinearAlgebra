/// <reference path="RationalNumber.ts" />

// elimination - multiply on the left (E*A); Row-addition transformations
// to mult*(row2 of Matrix A) add (row1 of Matrix A)
class MatrixElimination extends Matrix {
	public row1: number;
	public row2: number;
	constructor(m: number, r1: number, r2: number, mult: number | RationalNumber) {
		if (m < r1 || m < r2) { throw new Error("Column index must be less than or equal to the matrix size."); }
		super(m, m);
		this.row1 = r1;
		this.row2 = r2;
		this.elements = [];
		for (let i: number = 0; i < this.m; i++) {
			this.elements[i] = [];
			for (let j: number = 0; j < this.m; j++) {
				if (i === j) {
					this.elements[i][j] = new RationalNumber(1);
				} else { this.elements[i][j] = new RationalNumber(0); }
			}
		}
		if (typeof mult === "number") {
			this.elements[r1][r2] = new RationalNumber(mult);
		} else {
			if (mult instanceof RationalNumber) { this.elements[r1][r2] = mult; }
		}
	}
}