import { RationalNumber } from "../structures/RationalNumber";

QUnit.module("Stack");
QUnit.test("isEmptyPositive", () => {
	// arange
	var stack: Stack<number> = new Stack<number>();
	// act
	// assert
	QUnit.assert.ok(stack, "identity returned null");
	QUnit.assert.equal(stack.isEmpty(), true, "stack is empty!");
});
QUnit.test("isEmptyNegative", () => {
	// arange
	var stack: Stack<number> = new Stack<number>();
	// act
	stack.push(1);
	// assert
	QUnit.assert.ok(stack, "identity returned null");
	QUnit.assert.equal(stack.isEmpty(), false, "stack is not empty!");
});