// The Mandelbrot set consists of all of those (complex) c-values for which the corresponding orbit of 0 under x^2 + c does not escape to infinity.
// Fix a value of c. The filled Julia set of x^2 + c is the collection of seeds whose orbit does not tend to infinity.

/*
The Mandelbrot set
- is a picture in the c-plane, also called the parameter plane,
- records the fate of the orbit of 0 for all possible c-values.

The filled Julia set
- is a picture in the x-plane, also called the dynamical plane,
- records the fate of all orbits for x^2 + c for a fixed c. There is one Julia set for each value of c.
*/

const orthonormalAxesColor: string = "#666600";
const orthonormalGridLinesColor: string = "#f0f0ff";
const unitSize: number = 20;
$(document).ready(() => {
	const canvas: HTMLCanvasElement = $("#graphCanvas")[0] as HTMLCanvasElement;
	const ctx: CanvasRenderingContext2D = canvas.getContext("2d");
	const canvasWidth: number = canvas.width;
	const canvasHeight: number = canvas.height;
	let offsetX: number = parseInt($("#xOffset").val() as string, 10);
	let offsetY: number = parseInt($("#yOffset").val() as string, 10);
	let zoom: number = parseInt($("#zoom").val() as string, 10);
	const originX: number = canvasWidth / 2;
	const originY: number = canvasHeight / 2;
	const maxSquaredAbsoluteValue: number = 2 * 2;
	const maxIterations: number = 1000;
	$("#legend").append($("<div></div>").text("Canvas size: " + canvasWidth + " x " + canvasHeight + " px"));
	$("#legend").append($("<div></div>").text("Canvas origin: " + originX + " x " + originY + " px"));
	drawFractal();
	function viewportToComplex(x: number, y: number): [number, number] {// Don't use the ComplexNumber for performance reasons
		return [offsetX + (x - originX) / zoom, offsetY + (y - originY) / zoom];
	}
	// orbit of x0 under iteration of x^2 + c.
	function diverges(cx: number, cy: number): boolean {
		let a: number = 0;
		let b: number = 0;
		let squaredAbsoluteValue: number = 0;
		let iteration: number = maxIterations;
		do {
			// x1 = x0^2 + c
			const temp: number = Math.pow(a, 2) - Math.pow(b, 2) + cx;
			b = 2 * a * b + cy;
			a = temp;
			squaredAbsoluteValue = Math.pow(a, 2) + Math.pow(b, 2);
			iteration--;
		}
		while (iteration > 0 && squaredAbsoluteValue < maxSquaredAbsoluteValue);
		return iteration === 0;
	}
	function drawFractal(): void {
		const redPixel: ImageData = ctx.createImageData(1, 1);
		redPixel.data[0] = 255;
		redPixel.data[1] = 0;
		redPixel.data[2] = 0;
		redPixel.data[3] = 255;
		const bluePixel: ImageData = ctx.createImageData(1, 1);
		bluePixel.data[0] = 0;
		bluePixel.data[1] = 0;
		bluePixel.data[2] = 255;
		bluePixel.data[3] = 255;
		for (let x: number = 0; x < canvasWidth; x++) {
			for (let y: number = 0; y < canvasHeight; y++) {
				const c = viewportToComplex(x, y);
				if (diverges(c[0], c[1])) {
					ctx.putImageData(redPixel, x, y);
				} else {
					ctx.putImageData(bluePixel, x, y);
				}
			}
		}
	}
	$("#xOffset").change(() => {
		offsetX = parseFloat($("#xOffset").val() as string);
		drawFractal();
	});
	$("#yOffset").change(() => {
		offsetY = parseFloat($("#yOffset").val() as string);
		drawFractal();
	});
	$("#zoom").change(() => {
		zoom = parseFloat($("#zoom").val() as string);
		drawFractal();
	});
});