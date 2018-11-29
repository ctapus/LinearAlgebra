import * as $ from "jquery";
import { VectorSpaceGenerator } from "../generators/VectorSpaceGenerator";
import { VectorSpacePresenter } from "../presenters/VectorSpacePresenter";
import { Queue } from "../structures/Queue";
import { RationalNumber } from "../structures/RationalNumber";
import { Stack } from "../structures/Stack";
import { Vector } from "../structures/Vector";
import { VectorSpace } from "../structures/VectorSpace";

$(document).ready(() => {
	const generator: VectorSpaceGenerator = new VectorSpaceGenerator();
	const vectorSpace: VectorSpace = generator.random();
	VectorSpacePresenter.printVectorSpace(vectorSpace, $("#content"));
});