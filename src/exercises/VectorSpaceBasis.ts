import { VectorSpaceGenerator } from "../generators/VectorSpaceGenerator";
import { VectorSpacePresenter } from "../presenters/VectorSpacePresenter";
import { VectorSpace } from "../structures/VectorSpace";

document.addEventListener("DOMContentLoaded", () => {
	const generator: VectorSpaceGenerator = new VectorSpaceGenerator();
	const vectorSpace: VectorSpace = generator.random();
	VectorSpacePresenter.printVectorSpace(vectorSpace, <HTMLDivElement>document.getElementById("content"));
});