import { RationalNumber } from "../structures/RationalNumber";
import { Vector } from "../structures/Vector";
import { VectorSpace } from "../structures/VectorSpace";

export class VectorSpaceGenerator { // not necessarly a vector space
	public probabilityToBeLinearlyIndependent: number = 0.8; // 80% for the set to have linearly independent vectors
	public isLinearlyIndependent: boolean = Math.random() >= this.probabilityToBeLinearlyIndependent;
	public vectorSpaceDimensionMin: number = 3;
	public vectorSpaceDimensionMax: number = 7;
	public vectorSpaceDimension: number = Math.floor(Math.random() *
		(this.vectorSpaceDimensionMax - this.vectorSpaceDimensionMin) + this.vectorSpaceDimensionMin);
	public numberOfVectors: number = Math.floor(Math.random() * 4 + this.vectorSpaceDimension);
	public random(): VectorSpace {
		const ret: VectorSpace = new VectorSpace(this.numberOfVectors);
		for (let i: number = 0; i < ret.m; i++) {
			const v: Vector = new Vector(this.vectorSpaceDimension);
			for (let j: number = 0; j < this.vectorSpaceDimension; j++) {
				v[j] = j === i ? 1 : 0;
			}
		}
		return ret;
	}
}