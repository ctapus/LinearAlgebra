import { RationalNumber } from "../structures/RationalNumber";
import { Matrix } from "../structures/Matrix";

export class Vector {
	public m: number;
	public elements: RationalNumber[];
	constructor(n: number);
	constructor(elements: number[]);
	constructor(n: any) {
		if (typeof n === "number") {
			this.m = n;
			this.elements = [];
		} else if (n instanceof Array) {
			this.m = n.length;
			this.elements = [];
			for (let i: number = 0; i < this.m; i++) {
				this.elements[i] = new RationalNumber(n[i]);
			}
		}
	}
	public add(x: Vector): Vector {
		if (this.m !== x.m) { throw "Mismatched dimensions."; }
		const res: Vector = new Vector(this.m);
		for (let i: number = 0; i < res.m; i++) {
			res.elements[i] = this.elements[i].add(x.elements[i]);
		}
		return res;
	}
	public sub(x: Vector): Vector {
		if (this.m !== x.m) { throw "Mismatched dimensions."; }
		const res: Vector = new Vector(this.m);
		for (let i: number = 0; i < res.m; i++) {
			res.elements[i] = this.elements[i].sub(x.elements[i]);
		}
		return res;
	}
	public mult(x: RationalNumber): Vector {
		const res: Vector = new Vector(this.m);
		for (let i: number = 0; i < res.m; i++) {
			res.elements[i] = this.elements[i].mult(x);
		}
		return res;
	}
	// [ALIASES]: innerProduct, projectionProduct, scalarProduct
	public dotProduct(x: Vector): RationalNumber {
		if (this.m !== x.m) { throw "Mismatched dimensions."; }
		let res: RationalNumber = new RationalNumber(0);
		for (let i: number = 0; i < x.m; i++) {
			res = res.add(this.elements[i].mult(x.elements[i]));
		}
		return res;
	}
	// [ALIASES]: directedAreaProduct, vectorProduct
	public crossProduct(x: Vector): Vector {
		throw "Not implemented.";
	}
	public deepCopy(): Vector {
		const ret: Vector = new Vector(this.m);
		for (let i: number = 0; i < this.m; i++) {
			ret.elements[i] = this.elements[i];
		}
		return ret;
	}
	public toMatrix(): Matrix {
		const ret: Matrix = new Matrix(this.m, 1);
		for (let i: number = 0; i < this.m; i++) {
			ret.elements[i][0] = this.elements[i];
		}
		return ret;
	}
	public static arelLinearlyIndependent(vectors: Vector[]): boolean {
		let m: number = vectors.length;
		if (0 === m) { return true; }
		let n: number = vectors[0].m;
		for (let i: number = 1; i < vectors.length; i++) {
			if (n !== vectors[i].m) { throw "All vectors must have the same length."; }
		}
		if (m > n) { return false; }

	}
}
export class ColumnVector extends Vector {
}
export class RowVector extends Vector {
	public matrixProduct(m: Matrix): RowVector {
		if (this.m !== m.n) { throw "Mismatched dimensions."; }
		const res: RowVector = new RowVector(this.m);
		for (let i: number = 0; i < this.m; i++) {
			let sum: RationalNumber = new RationalNumber(0);
			for (let j: number = 0; j < m.n; j++) {
				sum = sum.add(m.elements[i][j].mult(this.elements[i]));
			}
			res.elements[i] = sum;
		}
		return res;
	}
}