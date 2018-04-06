"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Stack = /** @class */ (function () {
    function Stack() {
        this.stack = [];
    }
    Stack.prototype.isEmpty = function () {
        return this.stack.length === 0;
    };
    Stack.prototype.push = function (element) {
        this.stack.push(element);
    };
    Stack.prototype.pop = function () {
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        return this.stack.pop();
    };
    Stack.prototype.peek = function () {
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        return this.stack[this.stack.length - 1];
    };
    Stack.prototype.toArray = function () {
        return this.stack;
    };
    return Stack;
}());
exports.Stack = Stack;
//# sourceMappingURL=Stack.js.map