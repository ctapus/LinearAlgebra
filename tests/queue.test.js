"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var Queue_1 = require("../structures/Queue");
// tslint:disable:no-unused-expression
// tslint:disable:eofline
// tslint:disable:max-line-length
describe("Queue test suite", function () {
    it("isEmpty should return true for an empty queue", function () {
        var queue = new Queue_1.Queue();
        chai_1.expect(queue).to.not.be.null;
        chai_1.expect(queue.isEmpty()).to.be.true;
    });
    it("isEmpty should return false for a non-empty queue", function () {
        var queue = new Queue_1.Queue();
        queue.enqueue(1);
        chai_1.expect(queue).to.not.be.null;
        chai_1.expect(queue.isEmpty()).to.be.false;
    });
});
//# sourceMappingURL=queue.test.js.map