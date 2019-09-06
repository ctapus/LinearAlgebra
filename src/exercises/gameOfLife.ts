type PrintCellDelegate = (row: number, column: number) => void;
class Game {
	private cells: number[][];
	public constructor(rows: number, columns: number) {
		this.cells = [];
		for (let r: number = 0; r < rows; r++) {
			this.cells[r] = [];
			for (let c: number; c < columns; c++) {
				this.cells[r][c] = 0;
			}
		}
	}
	public addCell(row: number, column: number): void {
		this.cells[row][column] = 1;
	}
	public printGame(printFunction: PrintCellDelegate): void {
		for (let r: number = 0; r < this.cells.length; r++) {
			for (let c: number = 0; c < this.cells[r].length; c++) {
				if (this.cells[r][c] === 1) {
					printFunction(r, c);
				}
			}
		}
	}
}

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
	const game: Game = new Game(30, 30);
	game.addCell(2, 3);
	game.addCell(8, 3);
	game.addCell(2, 15);
	game.printGame(drawCell);

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
	function drawCell(row: number, column: number): void {
		ctx.fillStyle = "#000000";
		ctx.fillRect(column * unitSize, row * unitSize, unitSize - 2, unitSize - 2);
	}
});