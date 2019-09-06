$(document).ready(() => {
	const canvas: HTMLCanvasElement = $("#graphCanvas")[0] as HTMLCanvasElement;
	const ctx: CanvasRenderingContext2D = canvas.getContext("2d");
	const canvasWidth: number = canvas.width;
	const canvasHeight: number = canvas.height;
	const originX: number = canvasWidth / 2;
	const originY: number = canvasHeight / 2;
	const orthonormalGridLinesColor: string = "#f0f0ff";
	const unitSize: number = 20;
	$("#legend").append($("<div></div>").text("Canvas size: " + canvasWidth + " x " + canvasHeight + " px"));
	$("#legend").append($("<div></div>").text("Canvas origin: " + originX + " x " + originY + " px"));
	drawOrthonormalGrid();

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
	}
});