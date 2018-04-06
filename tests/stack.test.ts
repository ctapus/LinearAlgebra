import { expect } from "chai";
import { Stack } from "../structures/Stack";
// tslint:disable:no-unused-expression
// tslint:disable:eofline
// tslint:disable:max-line-length

describe("Stack test suite", () => {
    it("isEmpty should return true for an empty stack", () => {
        const stack: Stack<number> = new Stack<number>();
        expect(stack).to.not.be.null;
        expect(stack.isEmpty()).to.be.true;
    });
    it("isEmpty should return false for a non-empty stack", () => {
        const stack: Stack<number> = new Stack<number>();
        stack.push(1);
        expect(stack).to.not.be.null;
        expect(stack.isEmpty()).to.be.false;
    });
});