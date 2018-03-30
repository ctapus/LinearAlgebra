/// <reference path="../node_modules/@types/jquery/index.d.ts" />
/// <reference path="../structures/Vector.ts" />
/// <reference path="../presenters/MatrixPresenter.ts" />
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
var Vector2D = /** @class */ (function (_super) {
    __extends(Vector2D, _super);
    function Vector2D(x, y) {
        var _this = _super.call(this, 2) || this;
        if (typeof x === "number") {
            _this.elements[0] = new RationalNumber(x);
        }
        else if (x instanceof RationalNumber) {
            _this.elements[0] = x;
        }
        if (typeof y === "number") {
            _this.elements[1] = new RationalNumber(y);
        }
        else if (y instanceof RationalNumber) {
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
        var res = new RowVector(2);
        res.elements = [new RationalNumber(this.x), new RationalNumber(this.y)];
        return res;
    };
    Vector2D.prototype.toColumnVector = function () {
        var res = new ColumnVector(2);
        res.elements = [new RationalNumber(this.x), new RationalNumber(this.y)];
        return res;
    };
    Vector2D.fromVector = function (v) {
        if (v.m !== 2) {
            throw "Vector dimension must be 2.";
        }
        return new Vector2D(v.elements[0], v.elements[1]);
    };
    Vector2D.GetScallingMatrix = function (scale) {
        var m = new Matrix(2, 2);
        m.elements = [[new RationalNumber(scale), new RationalNumber(0)], [new RationalNumber(0), new RationalNumber(scale)]];
        return m;
    };
    Vector2D.GetRotationMatrix = function (angle) {
        var rotationAngle = angle * (180 / Math.PI); // converted to radians
        var m = new Matrix(2, 2);
        m.elements = [[new RationalNumber(Math.cos(rotationAngle)), new RationalNumber(-Math.sin(rotationAngle))],
            [new RationalNumber(Math.sin(rotationAngle)), new RationalNumber(Math.cos(rotationAngle))]];
        return m;
    };
    return Vector2D;
}(Vector));
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
var transformations = new Queue();
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
            MatrixPresenter.printTableMatrix(transformation, divMatrix);
            $("#legend").append($("<div></div>").text("Transformed vector: (" + transformedVector.x + ", " + transformedVector.y + ")")
                .css("color", transformedVectorColor));
        }
    }
    function drawChangeCoordinates() {
        drawVector(secondBasis[0], secondVectorSpaceAxesColor);
        drawVector(secondBasis[1], secondVectorSpaceAxesColor);
        var changeOfCoordinatesMatrix = new Matrix(2, 2);
        changeOfCoordinatesMatrix.elements[0] = [new RationalNumber(6), new RationalNumber(2)];
        changeOfCoordinatesMatrix.elements[1] = [new RationalNumber(2), new RationalNumber(6)];
        var vectorSecondBasis = Vector2D.fromVector(changeOfCoordinatesMatrix
            .vectorProduct(vector.toColumnVector())); // it's the other way around
        $("#legend").append($("<div></div>").text("Change of basis matrix:"));
        var divMatrix = $("<div></div>");
        $("#legend").append(divMatrix);
        MatrixPresenter.printTableMatrix(changeOfCoordinatesMatrix, divMatrix);
        $("#legend").append($("<div></div>").text("Vector in the new basis: (" + vectorSecondBasis.x + ", " + vectorSecondBasis.y + ")")
            .css("color", transformedVectorColor));
    }
});
//# sourceMappingURL=graph.js.map