import { RationalNumber } from "../structures/RationalNumber";

QUnit.module("Queue");
QUnit.test("isEmptyPositive", () => {
	// arange
	var queue: Queue<number> = new Queue<number>();
	// act
	// assert
	QUnit.assert.ok(queue, "identity returned null");
	QUnit.assert.equal(queue.isEmpty(), true, "stack is empty!");
});
QUnit.test("isEmptyNegative", () => {
	// arange
	var queue: Queue<number> = new Queue<number>();
	// act
	queue.enqueue(1);
	// assert
	QUnit.assert.ok(queue, "identity returned null");
	QUnit.assert.equal(queue.isEmpty(), false, "stack is not empty!");
});