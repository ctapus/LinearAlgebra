
document.addEventListener("DOMContentLoaded", () => {
	const canvas: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("graphCanvas");
	const ctx: CanvasRenderingContext2D = canvas.getContext("2d");
	const canvasWidth: number = canvas.width;
	const canvasHeight: number = canvas.height;
	const originX: number = canvasWidth / 2;
	const originY: number = canvasHeight / 2;
});