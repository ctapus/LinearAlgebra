"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable:no-unused-expression
// tslint:disable:eofline
// tslint:disable:max-line-length
var chai_1 = require("chai");
var Stack_1 = require("../structures/Stack");
describe("Stack test suite", function () {
    it("isEmpty should return true for an empty stack", function () {
        var stack = new Stack_1.Stack();
        chai_1.expect(stack).to.not.be.null;
        chai_1.expect(stack.isEmpty()).to.be.true;
    });
    it("isEmpty should return false for a non-empty stack", function () {
        var stack = new Stack_1.Stack();
        stack.push(1);
        chai_1.expect(stack).to.not.be.null;
        chai_1.expect(stack.isEmpty()).to.be.false;
    });
});
//# sourceMappingURL=stack.test.js.map