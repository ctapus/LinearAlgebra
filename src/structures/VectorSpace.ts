import { Matrix } from "./Matrix";
import { Vector } from "./Vector";

export class VectorSpace {
	public m: number;
	public elements: Vector[];
	constructor(n: number | Vector[]);
	constructor(n: any) {
		if (typeof n === "number") {
			this.m = n;
			this.elements = [];
		} else if (n instanceof Array) {
			if (!n || 0 >= n.length) { throw new Error("At least one vector is needed to construct a vector space."); }
			const x: number = n[0].m;
			for (let i: number = 1; i < n.length; i++) {
				if (x !== n[i].m) { throw new Error("All vectors must have the same length."); }
			}
			this.m = n.length;
			this.elements = n;
		}
	}
	public findBasis(): VectorSpace {
		let dim: number = 0;
		const M: Matrix = this.toColumnsMatrix().toReducedRowEchelonForm();
		for (let i: number = 0; i < M.m && i < M.n; i++) {
			if (M.elements[i][i].equals(1)) {
				dim++;
			}
		}
		const res: VectorSpace = new VectorSpace(dim);
		for (let i: number = 0; i < dim; i++) {
			res.elements[i] = this.elements[i].deepCopy();
		}
		return res;
	}
	public toColumnsMatrix(): Matrix {
		const res: Matrix = new Matrix(this.elements[0].m, this.m);
		for (let i: number = 0; i < res.n; i++) {
			for (let j: number = 0; j < res.m; j++) {
				res.elements[j][i] = this.elements[i].elements[j];
			}
		}
		return res;
	}
	public toRowsMatrix(): Matrix {
		const res: Matrix = new Matrix(this.m, this.elements[0].m);
		for (let i: number = 0; i < res.m; i++) {
			for (let j: number = 0; j < res.n; j++) {
				res.elements[i][j] = this.elements[i].elements[j];
			}
		}
		return res;
	}
}