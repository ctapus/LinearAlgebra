/// <reference path="../node_modules/@types/jquery/index.d.ts" />
import { RationalNumber } from "../structures/RationalNumber";
import { Vector, RowVector, ColumnVector } from "../structures/Vector";
import { Matrix } from "../structures/Matrix";
import { MatrixPresenter } from "../presenters/MatrixPresenter";

class Vector2D extends Vector {
	constructor(x: number | RationalNumber, y: number | RationalNumber) {
		super(2);
		if (typeof x === "number") {
			this.elements[0] = new RationalNumber(x);
		} else if (x instanceof RationalNumber) {
			this.elements[0] = x;
		}
		if (typeof y === "number") {
			this.elements[1] = new RationalNumber(y);
		} else if (y instanceof RationalNumber) {
			this.elements[1] = y;
		}
	}
	get x(): number {
		return this.elements[0].toNumber();
	}
	get y(): number {
		return this.elements[1].toNumber();
	}
	public toRowVector(): RowVector {
		const res: RowVector = new RowVector(2);
		res.elements = [new RationalNumber(this.x), new RationalNumber(this.y)];
		return res;
	}
	public toColumnVector(): ColumnVector {
		const res: ColumnVector = new ColumnVector(2);
		res.elements = [new RationalNumber(this.x), new RationalNumber(this.y)];
		return res;
	}
	public static fromVector(v: Vector): Vector2D {
		if (v.m !== 2) { throw "Vector dimension must be 2."; }
		return new Vector2D(v.elements[0], v.elements[1]);
	}
	public static GetScallingMatrix(scale: number): Matrix {
		let m: Matrix = new Matrix(2, 2);
		m.elements = [[new RationalNumber(scale), new RationalNumber(0)], [new RationalNumber(0), new RationalNumber(scale)]];
		return m;
	}
	public static GetRotationMatrix(angle: number): Matrix {
		let rotationAngle: number = angle * (180 / Math.PI);// converted to radians
		let m: Matrix = new Matrix(2, 2);
		m.elements = [[new RationalNumber(Math.cos(rotationAngle)), new RationalNumber(-Math.sin(rotationAngle))],
		 [new RationalNumber(Math.sin(rotationAngle)), new RationalNumber(Math.cos(rotationAngle))]];
		return m;
	}
}
function randomVector2D(): Vector2D {
	return new Vector2D(Math.floor(Math.random() * 20) - 10, Math.floor(Math.random() * 20) - 10);
}
const orthonormalAxesColor: string = "#666600";
const orthonormalGridLinesColor: string = "#f0f0ff";
const vectorColor: string = "#3030f0";
const transformedVectorColor: string = "#909090";
const unitSize: number = 20;
const vector: Vector2D = randomVector2D();
const secondBasis: Vector2D[] = [new Vector2D(6, 2), new Vector2D(2, 6)];
let transformations: Queue<Matrix> = new Queue<Matrix>();
transformations.enqueue(Vector2D.GetScallingMatrix(0.5));
transformations.enqueue(Vector2D.GetRotationMatrix(60));
// const transformedVector: Vector2D = Vector2D.fromVector(vector.toRowVector().matrixProduct(T));
const secondVectorSpaceAxesColor: string = "#006666";
const secondVectorSpaceGridColor: string = "#fff0f0";
$(document).ready(() => {
	const canvas: HTMLCanvasElement = <HTMLCanvasElement>$("#graphCanvas")[0];
	const ctx: CanvasRenderingContext2D = canvas.getContext("2d");
	const canvasWidth: number = canvas.width;
	const canvasHeight: number = canvas.height;
	const originX: number = canvasWidth / 2;
	const originY: number = canvasHeight / 2;
	$("#legend").append($("<div></div>").text("Canvas size: " + canvasWidth + " x " + canvasHeight + " px"));
	$("#legend").append($("<div></div>").text("Canvas origin: " + originX + " x " + originY + " px"));
	$("#legend").append($("<div></div>").text("Vector: [" + vector.x + ", " + vector.y + "]").css("color", vectorColor));
	drawOrthonormalGrid();
	drawVector(vector);
	// drawTransformedVector(vector, transformations);
	drawChangeCoordinates();


	function drawOrthonormalGrid(): void {
		// grid
		ctx.beginPath();
		ctx.strokeStyle = orthonormalGridLinesColor;
		ctx.setLineDash([2, 2]);
		ctx.lineWidth = 1;
		let i: number = 0;
		do {
			ctx.moveTo(originX + unitSize * i, 0);
			ctx.lineTo(originX + unitSize * i, canvasHeight);
			ctx.stroke();
			ctx.moveTo(originX - unitSize * i, 0);
			ctx.lineTo(originX - unitSize * i, canvasHeight);
			ctx.stroke();
			i++;
		}
		while (originX + unitSize * i < canvasWidth);
		i = 0;
		do {
			ctx.moveTo(0, originY + unitSize * i);
			ctx.lineTo(canvasWidth, originY + unitSize * i);
			ctx.stroke();
			ctx.moveTo(0, originY - unitSize * i);
			ctx.lineTo(canvasWidth, originY - unitSize * i);
			ctx.stroke();
			i++;
		}
		while (originY + unitSize * i < canvasHeight);
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
	function drawVector(vector: Vector2D, color: string = vectorColor, lineWidth: number = 2): void {
		ctx.beginPath();
		ctx.lineWidth = lineWidth;
		ctx.strokeStyle = color;
		ctx.moveTo(originX, originY);
		// because the canvas origin is top left:
		ctx.lineTo(originX + unitSize * vector.elements[0].toNumber(), originY - unitSize * vector.elements[1].toNumber());
		ctx.stroke();
	}
	function drawTransformedVector(vector: Vector2D, transformations: Queue<Matrix>): void {
		let transformedVector: Vector2D = vector;
		while (!transformations.isEmpty()) {
			let transformation: Matrix = transformations.dequeue();
			transformedVector = Vector2D.fromVector(transformation.vectorProduct(transformedVector.toColumnVector()));
			drawVector(transformedVector, transformedVectorColor, 1);
			$("#legend").append($("<div></div>").text("Transformation matrix:"));
			let divMatrix: JQuery = $("<div></div>");
			$("#legend").append(divMatrix);
			MatrixPresenter.printTableMatrix(transformation, divMatrix);
			$("#legend").append($("<div></div>").text(`Transformed vector: (${transformedVector.x}, ${transformedVector.y})`)
			.css("color", transformedVectorColor));
		}
	}
	function drawChangeCoordinates(): void {
		drawVector(secondBasis[0], secondVectorSpaceAxesColor);
		drawVector(secondBasis[1], secondVectorSpaceAxesColor);
		const changeOfCoordinatesMatrix: Matrix = new Matrix(2, 2);
		changeOfCoordinatesMatrix.elements[0] = [new RationalNumber(6), new RationalNumber(2)];
		changeOfCoordinatesMatrix.elements[1] = [new RationalNumber(2), new RationalNumber(6)];
		const vectorSecondBasis: Vector2D = Vector2D.fromVector(changeOfCoordinatesMatrix
			.vectorProduct(vector.toColumnVector()));// it's the other way around
		$("#legend").append($("<div></div>").text("Change of basis matrix:"));
		let divMatrix: JQuery = $("<div></div>");
		$("#legend").append(divMatrix);
		MatrixPresenter.printTableMatrix(changeOfCoordinatesMatrix, divMatrix);
		$("#legend").append($("<div></div>").text(`Vector in the new basis: (${vectorSecondBasis.x}, ${vectorSecondBasis.y})`)
		.css("color", transformedVectorColor));
	}
});