import { Matrix } from "../structures/Matrix";
export class VectorSpace {
    constructor(n) {
        if (typeof n === "number") {
            this.m = n;
            this.elements = [];
        }
        else if (n instanceof Array) {
            if (!n || 0 >= n.length) {
                throw new Error("At least one vector is needed to construct a vector space.");
            }
            const x = n[0].m;
            for (let i = 1; i < n.length; i++) {
                if (x !== n[i].m) {
                    throw new Error("All vectors must have the same length.");
                }
            }
            this.m = n.length;
            this.elements = n;
        }
    }
    findBasis() {
        let dim = 0;
        const M = this.toColumnsMatrix().toReducedRowEchelonForm();
        for (let i = 0; i < M.m && i < M.n; i++) {
            if (M.elements[i][i].equals(1)) {
                dim++;
            }
        }
        const res = new VectorSpace(dim);
        for (let i = 0; i < dim; i++) {
            res.elements[i] = this.elements[i].deepCopy();
        }
        return res;
    }
    toColumnsMatrix() {
        const res = new Matrix(this.elements[0].m, this.m);
        for (let i = 0; i < res.n; i++) {
            for (let j = 0; j < res.m; j++) {
                res.elements[j][i] = this.elements[i].elements[j];
            }
        }
        return res;
    }
    toRowsMatrix() {
        const res = new Matrix(this.m, this.elements[0].m);
        for (let i = 0; i < res.m; i++) {
            for (let j = 0; j < res.n; j++) {
                res.elements[i][j] = this.elements[i].elements[j];
            }
        }
        return res;
    }
}
//# sourceMappingURL=VectorSpace.js.map