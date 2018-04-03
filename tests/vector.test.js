"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var Vector_1 = require("../structures/Vector");
describe("Vector test suite", function () {
    it("Can be constructed from an array", function () {
        var vector = new Vector_1.Vector([1, 2, 3]);
        // tslint:disable-next-line:no-unused-expression
        chai_1.expect(vector).to.not.be.null;
        chai_1.expect(vector.m).equal(3, "Should return: 3, but returned: " + vector.m);
        // tslint:disable-next-line:no-unused-expression
        chai_1.expect(vector.elements[0].equals(1)).to.be.true;
        // tslint:disable-next-line:no-unused-expression
        chai_1.expect(vector.elements[1].equals(2)).to.be.true;
        // tslint:disable-next-line:no-unused-expression
        chai_1.expect(vector.elements[2].equals(3)).to.be.true;
    });
    it("Can be constructed from a number", function () {
        var vector = new Vector_1.Vector(3);
        // tslint:disable-next-line:no-unused-expression
        chai_1.expect(vector).to.not.be.null;
        chai_1.expect(vector.m).to.equals(3, "Should return: 3, but returned: " + vector.m);
    });
    it("Can be added", function () {
        var v1 = new Vector_1.Vector([1, 2, 3]);
        var v2 = new Vector_1.Vector([1, 2, 3]);
        var vector = v1.add(v2);
        // tslint:disable-next-line:no-unused-expression
        chai_1.expect(vector).to.not.be.null;
        chai_1.expect(vector.m).to.equal(3, "Should return: 3, but returned: " + vector.m);
        // tslint:disable-next-line:no-unused-expression
        chai_1.expect(vector.elements[0].equals(2)).to.be.true;
        // tslint:disable-next-line:no-unused-expression
        chai_1.expect(vector.elements[1].equals(4)).to.be.true;
        // tslint:disable-next-line:no-unused-expression
        chai_1.expect(vector.elements[2].equals(6)).to.be.true;
    });
});
//# sourceMappingURL=vector.test.js.map