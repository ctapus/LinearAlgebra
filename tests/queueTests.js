/// <reference path="../node_modules/@types/qunit/index.d.ts" />
/// <reference path="../structures/Queue.ts" />
/// <chutzpah_reference path="../structures/Queue.js" />
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