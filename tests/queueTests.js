"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
QUnit.module("Queue");
QUnit.test("isEmptyPositive", function () {
    // arange
    var queue = new Queue();
    // act
    // assert
    QUnit.assert.ok(queue, "identity returned null");
    QUnit.assert.equal(queue.isEmpty(), true, "stack is empty!");
});
QUnit.test("isEmptyNegative", function () {
    // arange
    var queue = new Queue();
    // act
    queue.enqueue(1);
    // assert
    QUnit.assert.ok(queue, "identity returned null");
    QUnit.assert.equal(queue.isEmpty(), false, "stack is not empty!");
});
//# sourceMappingURL=queueTests.js.map