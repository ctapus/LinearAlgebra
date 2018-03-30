var Queue = /** @class */ (function () {
    function Queue() {
        this.queue = [];
    }
    Queue.prototype.isEmpty = function () {
        return this.queue.length === 0;
    };
    Queue.prototype.enqueue = function (element) {
        this.queue.push(element);
    };
    Queue.prototype.dequeue = function () {
        if (this.isEmpty()) {
            throw "Queue is empty";
        }
        return this.queue.shift();
    };
    Queue.prototype.peek = function () {
        if (this.isEmpty()) {
            throw "Queue is empty";
        }
        return this.queue[0];
    };
    Queue.prototype.toArray = function () {
        return this.queue;
    };
    return Queue;
}());
//# sourceMappingURL=Queue.js.map