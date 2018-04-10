// tslint:disable:no-unused-expression
// tslint:disable:eofline
// tslint:disable:max-line-length
import { expect } from "chai";
import { Queue } from "../structures/Queue";
describe("Queue test suite", () => {
    it("isEmpty should return true for an empty queue", () => {
        const queue = new Queue();
        expect(queue).to.not.be.null;
        expect(queue.isEmpty()).to.be.true;
    });
    it("isEmpty should return false for a non-empty queue", () => {
        const queue = new Queue();
        queue.enqueue(1);
        expect(queue).to.not.be.null;
        expect(queue.isEmpty()).to.be.false;
    });
});
//# sourceMappingURL=queue.test.js.map