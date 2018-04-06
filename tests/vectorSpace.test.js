"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var Vector_1 = require("../structures/Vector");
var VectorSpace_1 = require("../structures/VectorSpace");
// tslint:disable:no-unused-expression
// tslint:disable:eofline
// tslint:disable:max-line-length
describe("VectorSpace test suite", function () {
    it("Can be constructed from a number", function () {
        var vectorSpace = new VectorSpace_1.VectorSpace(3);
        vectorSpace.elements[0] = new Vector_1.Vector([1, 2, 3]);
        vectorSpace.elements[1] = new Vector_1.Vector([4, 5, 6]);
        chai_1.expect(vectorSpace).to.not.be.null;
        chai_1.expect(vectorSpace.m).equal(3);
        chai_1.expect(vectorSpace.elements[0].elements[0].equals(1)).to.be.true;
        chai_1.expect(vectorSpace.elements[0].elements[1].equals(2)).to.be.true;
        chai_1.expect(vectorSpace.elements[0].elements[2].equals(3)).to.be.true;
        chai_1.expect(vectorSpace.elements[1].elements[0].equals(4)).to.be.true;
        chai_1.expect(vectorSpace.elements[1].elements[1].equals(5)).to.be.true;
        chai_1.expect(vectorSpace.elements[1].elements[2].equals(6)).to.be.true;
    });
    it("Can be constructed from an array", function () {
        var vectorSpace = new VectorSpace_1.VectorSpace([new Vector_1.Vector([1, 2, 3]), new Vector_1.Vector([4, 5, 6])]);
        chai_1.expect(vectorSpace).to.not.be.null;
        chai_1.expect(vectorSpace.m).equal(2);
        chai_1.expect(vectorSpace.elements[0].elements[0].equals(1)).to.be.true;
        chai_1.expect(vectorSpace.elements[0].elements[1].equals(2)).to.be.true;
        chai_1.expect(vectorSpace.elements[0].elements[2].equals(3)).to.be.true;
        chai_1.expect(vectorSpace.elements[1].elements[0].equals(4)).to.be.true;
        chai_1.expect(vectorSpace.elements[1].elements[1].equals(5)).to.be.true;
        chai_1.expect(vectorSpace.elements[1].elements[2].equals(6)).to.be.true;
    });
    it("Can be cast to a ColumnsMatrix", function () {
        var vectorSpace = new VectorSpace_1.VectorSpace([new Vector_1.Vector([1, 2, 3]), new Vector_1.Vector([4, 5, 6])]);
        var M = vectorSpace.toColumnsMatrix();
        chai_1.expect(M).to.not.be.null;
        chai_1.expect(M.m).equal(3);
        chai_1.expect(M.n).equal(2);
        chai_1.expect(M.elements[0][0].equals(1)).to.be.true;
        chai_1.expect(M.elements[1][0].equals(2)).to.be.true;
        chai_1.expect(M.elements[2][0].equals(3)).to.be.true;
        chai_1.expect(M.elements[0][1].equals(4)).to.be.true;
        chai_1.expect(M.elements[1][1].equals(5)).to.be.true;
        chai_1.expect(M.elements[2][1].equals(6)).to.be.true;
    });
    it("Can be cast to a RowsMatrix", function () {
        var vectorSpace = new VectorSpace_1.VectorSpace([new Vector_1.Vector([1, 2, 3]), new Vector_1.Vector([4, 5, 6])]);
        var M = vectorSpace.toRowsMatrix();
        chai_1.expect(M).to.not.be.null;
        chai_1.expect(M.m).equal(2);
        chai_1.expect(M.n).equal(3);
        chai_1.expect(M.elements[0][0].equals(1)).to.be.true;
        chai_1.expect(M.elements[0][1].equals(2)).to.be.true;
        chai_1.expect(M.elements[0][2].equals(3)).to.be.true;
        chai_1.expect(M.elements[1][0].equals(4)).to.be.true;
        chai_1.expect(M.elements[1][1].equals(5)).to.be.true;
        chai_1.expect(M.elements[1][2].equals(6)).to.be.true;
    });
    it("Can find a basis", function () {
        var vectorSpace = new VectorSpace_1.VectorSpace([new Vector_1.Vector([1, 1, -2, 0, -1]),
            new Vector_1.Vector([1, 2, 0, -4, 1]), new Vector_1.Vector([0, 1, 3, -3, 2]), new Vector_1.Vector([2, 3, 0, -2, 0])]);
        var basis = vectorSpace.findBasis();
        chai_1.expect(basis).to.not.be.null;
        chai_1.expect(basis.m).equal(3);
        chai_1.expect(basis.elements[0].elements[0].equals(1)).to.be.true;
        chai_1.expect(basis.elements[0].elements[1].equals(1)).to.be.true;
        chai_1.expect(basis.elements[0].elements[2].equals(-2)).to.be.true;
        chai_1.expect(basis.elements[0].elements[3].equals(0)).to.be.true;
        chai_1.expect(basis.elements[0].elements[4].equals(-1)).to.be.true;
        chai_1.expect(basis.elements[1].elements[0].equals(1)).to.be.true;
        chai_1.expect(basis.elements[1].elements[1].equals(2)).to.be.true;
        chai_1.expect(basis.elements[1].elements[2].equals(0)).to.be.true;
        chai_1.expect(basis.elements[1].elements[3].equals(-4)).to.be.true;
        chai_1.expect(basis.elements[1].elements[4].equals(1)).to.be.true;
        chai_1.expect(basis.elements[2].elements[0].equals(0)).to.be.true;
        chai_1.expect(basis.elements[2].elements[1].equals(1)).to.be.true;
        chai_1.expect(basis.elements[2].elements[2].equals(3)).to.be.true;
        chai_1.expect(basis.elements[2].elements[3].equals(-3)).to.be.true;
        chai_1.expect(basis.elements[2].elements[4].equals(2)).to.be.true;
    });
});
//# sourceMappingURL=vectorSpace.test.js.map