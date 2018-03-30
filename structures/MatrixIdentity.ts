/// <reference path="RationalNumber.ts" />

class MatrixIdentity extends Matrix {
	constructor(m: number) {
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
	}
}