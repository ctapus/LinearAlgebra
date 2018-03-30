/// <reference path="../structures/SystemOfLinearEquations.ts" />

class ALUGenerator {
	public probabilityToBeSquare: number = 0.8;// 80% to generate a square matrix
	public isSquare: boolean = Math.random() <= this.probabilityToBeSquare;
	public numberOfRowsMin: number = 3;
	public numberOfRowsMax: number = 7;
	public numberOfRows: number = Math.floor(Math.random() * (this.numberOfRowsMax - this.numberOfRowsMin) + this.numberOfRowsMin);
	public numberOfColsMin: number = 3;
	public numberOfColsMax: number = 7;
	public numberOfCols: number = this.isSquare ? this.numberOfRows :
	 Math.floor(Math.random() * (this.numberOfColsMax - this.numberOfColsMin) + this.numberOfColsMin);
	public valueOfElementsMin: number = -10;
	public valueOfElementsMax: number = 10;
	public random(): Matrix {
		// A=LU for A mxn => L is mxm and U is mxn OR L is mxn and U is nxn
		let L: Matrix = new Matrix(this.numberOfRows, this.numberOfRows);
		for (let i: number = 0; i < L.m; i++) {
			for (let j: number = 0; j < L.n; j++) {
				if (i === j) {
					L.elements[i][j] = this.randomNonZeroVariableValue();// new RationalNumber(1);
				} else {
					if (i > j) {
						L.elements[i][j] = this.randomVariableValue();
					} else {
						L.elements[i][j] = new RationalNumber(0);
					}
				}
			}
		}
		let U: Matrix = new Matrix(this.numberOfRows, this.numberOfCols);
		for (let i: number = 0; i < U.m; i++) {
			for (let j: number = 0; j < U.n; j++) {
				if (i === j) {
					U.elements[i][j] = this.randomNonZeroVariableValue();// new RationalNumber(1);
				} else {
					if (i < j) {
						U.elements[i][j] = this.randomVariableValue();
					} else {
						U.elements[i][j] = new RationalNumber(0);
					}
				}
			}
		}
		return L.mult(U);
	}
	private randomVariableValue(): RationalNumber {
		return new RationalNumber(Math.floor(Math.random() * (this.valueOfElementsMax - this.valueOfElementsMin) + this.valueOfElementsMin));
	}
	private randomNonZeroVariableValue(): RationalNumber {
		let r: RationalNumber = this.randomVariableValue();
		while (r.numerator === 0) {
			r = this.randomVariableValue();
		}
		return r;
	}
}