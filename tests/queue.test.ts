// tslint:disable:no-unused-expression
// tslint:disable:eofline
// tslint:disable:max-line-length
import { expect } from "chai";
import { Queue } from "../structures/Queue";

describe("Queue test suite", () => {
    it("isEmpty should return true for an empty queue", () => {
        const queue: Queue<number> = new Queue<number>();
        expect(queue).to.not.be.null;
        expect(queue.isEmpty()).to.be.true;
    });
    it("isEmpty should return false for a non-empty queue", () => {
        const queue: Queue<number> = new Queue<number>();
        queue.enqueue(1);
        expect(queue).to.not.be.null;
        expect(queue.isEmpty()).to.be.false;
    });
});