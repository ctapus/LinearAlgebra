"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var $ = require("jquery");
var MatrixPresenter_1 = require("../presenters/MatrixPresenter");
var Matrix_1 = require("../structures/Matrix");
var Queue_1 = require("../structures/Queue");
var RationalNumber_1 = require("../structures/RationalNumber");
var Vector_1 = require("../structures/Vector");
var Vector2D = /** @class */ (function (_super) {
    __extends(Vector2D, _super);
    function Vector2D(x, y) {
        var _this = _super.call(this, 2) || this;
        if (typeof x === "number") {
            _this.elements[0] = new RationalNumber_1.RationalNumber(x);
        }
        else if (x instanceof RationalNumber_1.RationalNumber) {
            _this.elements[0] = x;
        }
        if (typeof y === "number") {
            _this.elements[1] = new RationalNumber_1.RationalNumber(y);
        }
        else if (y instanceof RationalNumber_1.RationalNumber) {
            _this.elements[1] = y;
        }
        return _this;
    }
    Object.defineProperty(Vector2D.prototype, "x", {
        get: function () {
            return this.elements[0].toNumber();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vector2D.prototype, "y", {
        get: function () {
            return this.elements[1].toNumber();
        },
        enumerable: true,
        configurable: true
    });
    Vector2D.prototype.toRowVector = function () {
        var res = new Vector_1.RowVector(2);
        res.elements = [new RationalNumber_1.RationalNumber(this.x), new RationalNumber_1.RationalNumber(this.y)];
        return res;
    };
    Vector2D.prototype.toColumnVector = function () {
        var res = new Vector_1.ColumnVector(2);
        res.elements = [new RationalNumber_1.RationalNumber(this.x), new RationalNumber_1.RationalNumber(this.y)];
        return res;
    };
    Vector2D.fromVector = function (v) {
        if (v.m !== 2) {
            throw new Error("Vector dimension must be 2.");
        }
        return new Vector2D(v.elements[0], v.elements[1]);
    };
    Vector2D.GetScallingMatrix = function (scale) {
        var m = new Matrix_1.Matrix(2, 2);
        m.elements = [[new RationalNumber_1.RationalNumber(scale), new RationalNumber_1.RationalNumber(0)], [new RationalNumber_1.RationalNumber(0), new RationalNumber_1.RationalNumber(scale)]];
        return m;
    };
    Vector2D.GetRotationMatrix = function (angle) {
        var rotationAngle = angle * (180 / Math.PI); // converted to radians
        var m = new Matrix_1.Matrix(2, 2);
        m.elements = [[new RationalNumber_1.RationalNumber(Math.cos(rotationAngle)), new RationalNumber_1.RationalNumber(-Math.sin(rotationAngle))],
            [new RationalNumber_1.RationalNumber(Math.sin(rotationAngle)), new RationalNumber_1.RationalNumber(Math.cos(rotationAngle))]];
        return m;
    };
    return Vector2D;
}(Vector_1.Vector));
function randomVector2D() {
    return new Vector2D(Math.floor(Math.random() * 20) - 10, Math.floor(Math.random() * 20) - 10);
}
var orthonormalAxesColor = "#666600";
var orthonormalGridLinesColor = "#f0f0ff";
var vectorColor = "#3030f0";
var transformedVectorColor = "#909090";
var unitSize = 20;
var vector = randomVector2D();
var secondBasis = [new Vector2D(6, 2), new Vector2D(2, 6)];
var transformations = new Queue_1.Queue();
transformations.enqueue(Vector2D.GetScallingMatrix(0.5));
transformations.enqueue(Vector2D.GetRotationMatrix(60));
// const transformedVector: Vector2D = Vector2D.fromVector(vector.toRowVector().matrixProduct(T));
var secondVectorSpaceAxesColor = "#006666";
var secondVectorSpaceGridColor = "#fff0f0";
$(document).ready(function () {
    var canvas = $("#graphCanvas")[0];
    var ctx = canvas.getContext("2d");
    var canvasWidth = canvas.width;
    var canvasHeight = canvas.height;
    var originX = canvasWidth / 2;
    var originY = canvasHeight / 2;
    $("#legend").append($("<div></div>").text("Canvas size: " + canvasWidth + " x " + canvasHeight + " px"));
    $("#legend").append($("<div></div>").text("Canvas origin: " + originX + " x " + originY + " px"));
    $("#legend").append($("<div></div>").text("Vector: [" + vector.x + ", " + vector.y + "]").css("color", vectorColor));
    drawOrthonormalGrid();
    drawVector(vector);
    // drawTransformedVector(vector, transformations);
    drawChangeCoordinates();
    function drawOrthonormalGrid() {
        // grid
        ctx.beginPath();
        ctx.strokeStyle = orthonormalGridLinesColor;
        ctx.setLineDash([2, 2]);
        ctx.lineWidth = 1;
        var i = 0;
        do {
            ctx.moveTo(originX + unitSize * i, 0);
            ctx.lineTo(originX + unitSize * i, canvasHeight);
            ctx.stroke();
            ctx.moveTo(originX - unitSize * i, 0);
            ctx.lineTo(originX - unitSize * i, canvasHeight);
            ctx.stroke();
            i++;
        } while (originX + unitSize * i < canvasWidth);
        i = 0;
        do {
            ctx.moveTo(0, originY + unitSize * i);
            ctx.lineTo(canvasWidth, originY + unitSize * i);
            ctx.stroke();
            ctx.moveTo(0, originY - unitSize * i);
            ctx.lineTo(canvasWidth, originY - unitSize * i);
            ctx.stroke();
            i++;
        } while (originY + unitSize * i < canvasHeight);
        // axes
        ctx.beginPath();
        ctx.strokeStyle = orthonormalAxesColor;
        ctx.setLineDash([]);
        ctx.lineWidth = 2;
        ctx.moveTo(originX, 0);
        ctx.lineTo(originX, canvasHeight);
        ctx.stroke();
        ctx.moveTo(0, originY);
        ctx.lineTo(canvasWidth, originY);
        ctx.stroke();
    }
    function drawVector(vector, color, lineWidth) {
        if (color === void 0) { color = vectorColor; }
        if (lineWidth === void 0) { lineWidth = 2; }
        ctx.beginPath();
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = color;
        ctx.moveTo(originX, originY);
        // because the canvas origin is top left:
        ctx.lineTo(originX + unitSize * vector.elements[0].toNumber(), originY - unitSize * vector.elements[1].toNumber());
        ctx.stroke();
    }
    function drawTransformedVector(vector, transformations) {
        var transformedVector = vector;
        while (!transformations.isEmpty()) {
            var transformation = transformations.dequeue();
            transformedVector = Vector2D.fromVector(transformation.vectorProduct(transformedVector.toColumnVector()));
            drawVector(transformedVector, transformedVectorColor, 1);
            $("#legend").append($("<div></div>").text("Transformation matrix:"));
            var divMatrix = $("<div></div>");
            $("#legend").append(divMatrix);
            MatrixPresenter_1.MatrixPresenter.printTableMatrix(transformation, divMatrix);
            $("#legend").append($("<div></div>").text("Transformed vector: (" + transformedVector.x + ", " + transformedVector.y + ")")
                .css("color", transformedVectorColor));
        }
    }
    function drawChangeCoordinates() {
        drawVector(secondBasis[0], secondVectorSpaceAxesColor);
        drawVector(secondBasis[1], secondVectorSpaceAxesColor);
        var changeOfCoordinatesMatrix = new Matrix_1.Matrix(2, 2);
        changeOfCoordinatesMatrix.elements[0] = [new RationalNumber_1.RationalNumber(6), new RationalNumber_1.RationalNumber(2)];
        changeOfCoordinatesMatrix.elements[1] = [new RationalNumber_1.RationalNumber(2), new RationalNumber_1.RationalNumber(6)];
        var vectorSecondBasis = Vector2D.fromVector(changeOfCoordinatesMatrix
            .vectorProduct(vector.toColumnVector())); // it's the other way around
        $("#legend").append($("<div></div>").text("Change of basis matrix:"));
        var divMatrix = $("<div></div>");
        $("#legend").append(divMatrix);
        MatrixPresenter_1.MatrixPresenter.printTableMatrix(changeOfCoordinatesMatrix, divMatrix);
        $("#legend").append($("<div></div>").text("Vector in the new basis: (" + vectorSecondBasis.x + ", " + vectorSecondBasis.y + ")")
            .css("color", transformedVectorColor));
    }
});
//# sourceMappingURL=graph.js.map