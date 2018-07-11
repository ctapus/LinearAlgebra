import * as $ from "jquery";
import { VectorSpaceGenerator } from "../generators/VectorSpaceGenerator";
import { VectorSpacePresenter } from "../presenters/VectorSpacePresenter";
$(document).ready(() => {
    const generator = new VectorSpaceGenerator();
    const vectorSpace = generator.random();
    VectorSpacePresenter.printVectorSpace(vectorSpace, $("#content"));
});
//# sourceMappingURL=VectorSpaceBasis.js.map