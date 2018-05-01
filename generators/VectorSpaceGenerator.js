import { Vector } from "../structures/Vector";
import { VectorSpace } from "../structures/VectorSpace";
export class VectorSpaceGenerator {
    constructor() {
        this.probabilityToBeLinearlyIndependent = 0.8; // 80% for the set to have linearly independent vectors
        this.isLinearlyIndependent = Math.random() >= this.probabilityToBeLinearlyIndependent;
        this.vectorSpaceDimensionMin = 3;
        this.vectorSpaceDimensionMax = 7;
        this.vectorSpaceDimension = Math.floor(Math.random() *
            (this.vectorSpaceDimensionMax - this.vectorSpaceDimensionMin) + this.vectorSpaceDimensionMin);
        this.numberOfVectors = Math.floor(Math.random() * 4 + this.vectorSpaceDimension);
    }
    random() {
        const ret = new VectorSpace(this.numberOfVectors);
        for (let i = 0; i < ret.m; i++) {
            const v = new Vector(this.vectorSpaceDimension);
            for (let j = 0; j < this.vectorSpaceDimension; j++) {
                v[j] = j === i ? 1 : 0;
            }
        }
        return ret;
    }
}
//# sourceMappingURL=VectorSpaceGenerator.js.map