import { RationalNumber } from "./RationalNumber";
import { Vector, RowVector, ColumnVector } from "./Vector";

export class Matrix {
	public m: number; // rows
	public n: number; // columns
	elements: RationalNumber[][];
	constructor(m: number, n: number) {
		this.m = m;
		this.n = n;
		this.elements = [];
		for (let i: number = 0; i < this.m; i++) {
			this.elements[i] = [];
		}
	}
	public equals(M: Matrix): boolean {
		if (this.m !== M.m || this.n !== M.n) {
			return false;
		}
		for (let i: number = 0; i < this.m; i++) {
			for (let j: number = 0; j < this.n; j++) {
				if (!this.elements[i][j].equals(M.elements[i][j])) { return false; }
			}
		}
		return true;
	}
	public add(x: Matrix): Matrix {
		if (this.m !== x.m || this.n !== x.n) { throw new Error("Mismatched dimensions."); }
		const res: Matrix = new Matrix(this.m, this.n);
		for (let i: number = 0; i < res.m; i++) {
			for (let j: number = 0; j < res.n; j++) {
				res.elements[i][j] = this.elements[i][j].add(x.elements[i][j]);
			}
		}
		return res;
	}
	public sub(x: Matrix): Matrix {
		if (this.m !== x.m || this.n !== x.n) { throw new Error("Mismatched dimensions."); }
		const res: Matrix = new Matrix(this.m, this.n);
		for (let i: number = 0; i < res.m; i++) {
			for (let j: number = 0; j < res.n; j++) {
				res.elements[i][j] = this.elements[i][j].sub(x.elements[i][j]);
			}
		}
		return res;
	}
	public mult(x: number | RationalNumber | Matrix): Matrix {
		let res: Matrix = null;
		if (typeof x === "number") {
			res = new Matrix(this.m, this.n);
			for (let i: number = 0; i < res.m; i++) {
				for (let j: number = 0; j < res.n; j++) {
					res.elements[i][j] = this.elements[i][j].mult(x);
				}
			}
		} else if (x instanceof RationalNumber) {
			res = new Matrix(this.m, this.n);
			for (let i: number = 0; i < res.m; i++) {
				for (let j: number = 0; j < res.n; j++) {
					res.elements[i][j] = this.elements[i][j].mult(x);
				}
			}
		} else {
			if (x instanceof Matrix) {
				if (this.n !== x.m) { throw new Error("Mismatched dimensions."); }
				res = new Matrix(this.m, x.n);
				for (let i: number = 0; i < res.m; i++) {
					for (let j: number = 0; j < res.n; j++) {
						let sum: RationalNumber = new RationalNumber(0);
						for (let k: number = 0; k < this.n; k++) {
							sum = sum.add(this.elements[i][k].mult(x.elements[k][j]));
						}
						res.elements[i][j] = sum;
					}
				}
			}
		}
		return res;
	}
	public vectorProduct(v: ColumnVector): ColumnVector {
		if (this.n !== v.m) { throw new Error("Mismatched dimensions."); }
		const res: ColumnVector = new ColumnVector(v.m);
		for (let i: number = 0; i < this.m; i++) {
			let sum: RationalNumber = new RationalNumber(0);
			for (let j: number = 0; j < this.n; j++) {
				sum = sum.add(this.elements[i][j].mult(v.elements[j]));
			}
			res.elements[i] = sum;
		}
		return res;
	}
	public transpose(): Matrix {
		const ret: Matrix = new Matrix(this.n, this.m);
		for (let i: number = 0; i < this.m; i++) {
			for (let j: number = 0; j < this.n; j++) {
				ret.elements[j][i] = this.elements[i][j];
			}
		}
		return ret;
	}
	public deepCopy(): Matrix {
		const ret: Matrix = new Matrix(this.m, this.n);
		for (let i: number = 0; i < this.m; i++) {
			for (let j: number = 0; j < this.n; j++) {
				ret.elements[i][j] = this.elements[i][j];
			}
		}
		return ret;
	}
	public switchRows(idx1: number, idx2: number): void {
		if (this.m < idx1 || this.m < idx2) { return; }
		for (let i: number = 0; i < this.n; i++) {
			const tmp: RationalNumber = this.elements[idx1][i];
			this.elements[idx1][i] = this.elements[idx2][i];
			this.elements[idx2][i] = tmp;
		}
	}
	public multiplyRow(idx: number, scalar: RationalNumber): void {
		if (this.m < idx) { return; }
		for (let i: number = 0; i < this.n; i++) {
			this.elements[idx][i] = this.elements[idx][i].mult(scalar).simplifiedForm();
		}
	}
	public addRows(idx1: number, idx2: number, scalar: RationalNumber): void {
		if (this.m < idx1 || this.m < idx2) { return; }
		for (let i: number = 0; i < this.n; i++) {
			this.elements[idx1][i] = this.elements[idx2][i].mult(scalar).add(this.elements[idx1][i]).simplifiedForm();
		}
	}
	public addRow1ToRow2(idx1: number, scalar1: RationalNumber, idx2: number, scalar2: RationalNumber): void {
		if (this.m < idx1 || this.m < idx2) { return; }
		for (let i: number = 0; i < this.n; i++) {
			this.elements[idx2][i] = this.elements[idx2][i].mult(scalar2).add(this.elements[idx1][i].mult(scalar1)).simplifiedForm();
		}
	}
	// a square matrix is a matrix with the same number of rows and columns
	public isSquare(): boolean {
		return this.m === this.n;
	}
	// a diagonal matrix is a matrix in which the entries outside the main diagonal are all zero
	public isDiagonal(): boolean {
		for (let i: number = 0; i < this.m; i++) {
			for (let j: number = 0; j < this.n; j++) {
				if (i === j) {
					continue;
				}
				if (!this.elements[i][j].equals(new RationalNumber(0))) { return false; }
			}
		}
		return true;
	}
	// the identity matrix of size n is the n × n square matrix with ones on the main diagonal and zeros elsewhere
	// [ALIASES]: unit matrix
	public isIdentity(): boolean {
		if (this.m !== this.n) { throw new Error("Not a square matrix."); }
		for (let i: number = 0; i < this.m; i++) {
			for (let j: number = 0; j < this.n; j++) {
				if (i === j) {
					if (!this.elements[i][j].equals(new RationalNumber(1))) { return false; }
					continue;
				}
				if (!this.elements[i][j].equals(new RationalNumber(0))) { return false; }
			}
		}
		return true;
	}
	// a matrix is normal if it commutes with its conjugate transpose
	public isNormal(): boolean {
		throw new Error("Not implemented");
	}
	// the conjugate transpose of an m-by-n matrix A with complex entries is the n-by-m matrix A∗ obtained from A
	// by taking the transpose and then taking the complex conjugate of each entry
	// [ALIASES]: Hermitian transpose
	public toConjugateTranspose(): Matrix {
		throw new Error("Not implemented");
	}
	public isUpperTriangular(): boolean {
		// todo: check if definition is valid for a non square matrix
		// if (this.m !== this.n) { throw new Error("Not a square matrix."); }
		for (let i: number = 1; i < this.m; i++) {
			for (let j: number = 0; j < i; j++) {
				if (!this.elements[i][j].equals(new RationalNumber(0))) { return false; }
			}
		}
		return true;
	}
	public isLowerTriangular(): boolean {
		// todo: check if definition is valid for a non square matrix
		// if (this.m !== this.n) { throw new Error("Not a square matrix."); }
		for (let i: number = 0; i < this.m; i++) {
			for (let j: number = i + 1; j < this.n; j++) {
				if (!this.elements[i][j].equals(new RationalNumber(0))) { return false; }
			}
		}
		return true;
	}
	// a symmetric matrix is a square matrix that is equal to its transpose
	public isSymmetric(): boolean {
		if (this.m !== this.n) { throw new Error("Not a square matrix."); }
		for (let i: number = 0; i < this.m; i++) {
			for (let j: number = 0; j < this.n; j++) {
				if (!this.elements[i][j].equals(this.elements[j][i])) { return false; }
			}
		}
		return true;
	}
	// an orthogonal matrix is a square matrix with real entries whose columns and rows are orthogonal unit vectors
	// [ALIASES]: real orthogonal matrix
	public isOrthogonal(): boolean {
		const MT: Matrix = this.transpose();
		return this.mult(MT).isIdentity();
	}
	public isRowEchelonForm(): boolean {
		let foundZeroRow: boolean = false;
		// all nonzero rows (rows with at least one nonzero element) are above any rows of all zeroes
		// (all zero rows, if any, belong at the bottom of the matrix)
		for (let i: number = 0; i < this.m; i++) {
			if (this.isZeroRow(i)) {
				foundZeroRow = true;
			} else {
				if (foundZeroRow) { return false; }
			}// if current row is not zero, but a previous row is zero, then matrix is not in row echelon form
		}
		// the leading coefficient (the first nonzero number from the left, also called the pivot) of a nonzero row
		// is always strictly to the right of the leading coefficient of the row above it
		let previousIdx: number = -1;
		for (let i: number = 0; i < this.m; i++) {
			const currentPivotIdx: number = this.rowPivotPosition(i);
			if (0 > currentPivotIdx) { continue; }// this is a zero row, no pivot
			// leading coefficient must be 1
			if (!this.elements[i][currentPivotIdx].equals(new RationalNumber(1))) { return false; }
			if (previousIdx < currentPivotIdx) {
				previousIdx = currentPivotIdx;
			} else { return false; }
		}
		return true;
	}
	public isReducedRowEchelonForm(): boolean {
		if (!this.isRowEchelonForm()) { return false; }
		// each leading coefficient is the only nonzero entry in its column
		for (let i: number = 0; i < this.m; i++) {
			const pivotPosition: number = this.rowPivotPosition(i);
			if (1 < this.numberOfNonZeroElementForColumn(pivotPosition)) { return false; }
		}
		return true;
	}
	public toReducedRowEchelonForm(): Matrix {
		const res: Matrix = this.deepCopy();
		let lead: number = 0;
		for (let r: number = 0; r < res.m; r++) {
			if (res.n <= lead) {
				break;
			}
			let i: number = r;
			while (res.elements[i][lead].equals(0)) {
				i++;
				if (res.m === i) {
					i = r;
					lead++;
					if (res.n === lead) {
						lead--;
						break;
					}
				}
			}
			res.switchRows(i, r);
			if (!res.elements[r][lead].equals(0)) {
				res.multiplyRow(r, res.elements[r][lead].reciprocal());
			}
			for (let j: number = 0; j < res.m; j++) {
				if (j !== r) {
					res.addRows(j, r, res.elements[j][lead].opposite());
				}
			}
			lead++;
		}
		return res;
	}
	public determinant(): RationalNumber {
		// todo: implement an optimized version, like A=PLU
		if (this.m !== this.n) {
			throw new Error("Determinant can only be calculated on a square matrix");
		}
		if (this.m === 1) {
			return this.elements[0][0];
		}
		let ret: RationalNumber = new RationalNumber(0);
		for (let i: number = 0; i < this.n; i++) {
			const minor: RationalNumber = this.elements[0][i].mult(this.cofactor(0, i).determinant());
			ret = ret.add(minor.mult((-1) ** i));
		}
		return ret;
	}

	private isZeroRow(rowId: number): boolean {
		for (let j: number = 0; j < this.n; j++) {
			if (!this.elements[rowId][j].equals(new RationalNumber(0))) { return false; }
		}
		return true;
	}
	private rowPivotPosition(rowId: number): number {
		for (let j: number = 0; j < this.n; j++) {
			if (!this.elements[rowId][j].equals(new RationalNumber(0))) { return j; }
		}
		return -1;
	}
	private numberOfNonZeroElementForColumn(columnId: number): number {
		let acc: number = 0;
		for (let j: number = 0; j < this.m; j++) {
			if (!this.elements[j][columnId].equals(new RationalNumber(0))) { acc++; }
		}
		return acc;
	}
	private cofactor(rowId: number, columnId: number): Matrix {
		const ret: Matrix = new Matrix(this.m - 1, this.n - 1);
		let rowOffset: number = 0;
		for (let i: number = 0; i < this.m - 1; i++) {
			if (i === rowId) {
				rowOffset = 1;
			}
			let columnOffset: number = 0;
			for (let j: number = 0; j < this.n - 1; j++) {
				if (j === columnId) {
					columnOffset = 1;
				}
				ret.elements[i][j] = this.elements[i + rowOffset][j + columnOffset];
			}
		}
		return ret;
	}

	public static augment(A: Matrix, B: Matrix | Vector): Matrix {
		if (A.m !== B.m) { throw new Error("The two matrices (vector) must have the same number of rows (elements)."); }
		let ret: Matrix = null;
		if (B instanceof Matrix) {
			ret = new Matrix(A.m, B.n + A.n);
			for (let i: number = 0; i < A.m; i++) {
				for (let j: number = 0; j < A.n; j++) {
					ret.elements[i][j] = A.elements[i][j];
				}
			}
			for (let i: number = 0; i < B.m; i++) {
				for (let j: number = 0; j < B.n; j++) {
					ret.elements[i][A.n + j] = B.elements[i][j];
				}
			}
		} else {
			if (B instanceof Vector) {
				ret = new Matrix(A.m, A.n + 1);
				for (let i: number = 0; i < A.m; i++) {
					for (let j: number = 0; j < A.n; j++) {
						ret.elements[i][j] = A.elements[i][j];
					}
				}
				for (let j: number = 0; j < B.m; j++) {
					ret.elements[j][A.n] = B.elements[j];
				}
			}
		}
		return ret;
	}
	// row-multiplying transformations
	public static multiplication(n: number, row1: number, row2: number, mult: number): Matrix {
		if (n < row1 || n < row2) { throw new Error("Column index must be less or equalt than matrix size."); }
		let matrix: Matrix = new MatrixIdentity(n);
		matrix.elements[row1][row2] = new RationalNumber(mult);
		return matrix;
	}
	public static randomSquare(): Matrix {
		const matrix: Matrix = new Matrix(Math.floor(Math.random() * 4) + 3, Math.floor(Math.random() * 4) + 3);// minimum size 3x3 matrix
		for (let i: number = 0; i < matrix.m; i++) {
			for (let j: number = 0; j < matrix.n; j++) {
				matrix.elements[i][j] = new RationalNumber(Math.floor(Math.random() * 100 - 50));
			}
		}
		return matrix;
	}
	public static random2(): Matrix {
		const numberOfUnknowns: number = Math.floor(Math.random() * 4 + 3);// between 3 and 7 unknonws
		const unknowns: number[] = [];
		for (let i: number = 0; i < numberOfUnknowns; i++) {
			unknowns[i] = Math.floor(Math.random() * 20 - 10);
		}
		// todo: change below
		const matrix: Matrix = new Matrix(Math.floor(Math.random() * 4) + 3, Math.floor(Math.random() * 4) + 3);
		return matrix;
	}
}

export class MatrixIdentity extends Matrix {
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

// elimination - multiply on the left (E*A); Row-addition transformations
// to mult*(row2 of Matrix A) add (row1 of Matrix A)
export class MatrixElimination extends Matrix {
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

// permutation - multiply on the right (A*P); Row-switching transformations
export class MatrixPermutation extends Matrix {
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