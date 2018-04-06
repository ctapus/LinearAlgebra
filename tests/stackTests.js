"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
QUnit.module("Stack");
QUnit.test("isEmptyPositive", function () {
    // arange
    var stack = new Stack();
    // act
    // assert
    QUnit.assert.ok(stack, "identity returned null");
    QUnit.assert.equal(stack.isEmpty(), true, "stack is empty!");
});
QUnit.test("isEmptyNegative", function () {
    // arange
    var stack = new Stack();
    // act
    stack.push(1);
    // assert
    QUnit.assert.ok(stack, "identity returned null");
    QUnit.assert.equal(stack.isEmpty(), false, "stack is not empty!");
});
//# sourceMappingURL=stackTests.js.map