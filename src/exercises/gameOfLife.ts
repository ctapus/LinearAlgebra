type PrintCellDelegate = (row: number, column: number, isAlive: boolean) => void;
class Game {
	private cells: number[][];
	/**
	 * @density
	 * Probability that a cell is alive. Between 0 and 1.
	 */
	public constructor(rows: number, columns: number, density: number = 0) {
		this.cells = [];
		for (let r: number = 0; r < rows; r++) {
			this.cells[r] = [];
			for (let c: number = 0; c < columns; c++) {
				this.cells[r][c] = Math.random() < density ? 1 : 0;
			}
		}
	}
	public addCell(row: number, column: number): void {
		this.cells[row][column] = 1;
	}
	public printGame(printFunction: PrintCellDelegate): void {
		for (let r: number = 0; r < this.cells.length; r++) {
			for (let c: number = 0; c < this.cells[r].length; c++) {
				printFunction(r, c, this.cells[r][c] === 1);
			}
		}
	}
	public heartbeat(): void {
		const newCells: number[][] = [];
		for (let r: number = 0; r < this.cells.length; r++) {
			newCells[r] = [];
			for (let c: number = 0; c < this.cells[r].length; c++) {
				const neighbours: number[] = this.getCellNeighbours(r, c);
				const aliveNeighbours = neighbours.reduce((acc, cur) => acc + cur);
				newCells[r][c] = 0;
				if (this.cells[r][c] === 1) {
					// Any live cell with fewer than two live neighbours dies, as if by underpopulation.
					if (aliveNeighbours < 2) {
						newCells[r][c] = 0;
					}
					// Any live cell with two or three live neighbours lives on to the next generation.
					if (aliveNeighbours === 2 || aliveNeighbours === 3) {
						newCells[r][c] = 1;
					}
					// Any live cell with more than three live neighbours dies, as if by overpopulation.
					if (aliveNeighbours > 3) {
						newCells[r][c] = 0;
					}
				} else {
					// Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
					if (aliveNeighbours === 3) {
						newCells[r][c] = 1;
					}
				}
			}
		}
		this.cells = newCells;
	}
	private getCellNeighbours(row: number, column: number): number[] {
		let ret: number[] = [];
		let rows: number[] = [row];
		let columns: number[] = [column];
		if (row > 0) {
			rows = rows.concat(row - 1);
		}
		if (row < this.cells.length - 1) {
			rows = rows.concat(row + 1);
		}
		if (column > 0) {
			columns = columns.concat(column - 1);
		}
		if (column < this.cells[0].length - 1) {
			columns = columns.concat(column + 1);
		}
		for (const r of rows) {
			for (const c of columns) {
				if (r !== row || c !== column) {
					ret = ret.concat(this.cells[r][c]);
				}
			}
		}
		return ret;
	}
}

$(document).ready(() => {
	const canvas: HTMLCanvasElement = $("#graphCanvas")[0] as HTMLCanvasElement;
	const ctx: CanvasRenderingContext2D = canvas.getContext("2d");
	const canvasWidth: number = canvas.width;
	const canvasHeight: number = canvas.height;
	const orthonormalGridLinesColor: string = "#f0f0ff";
	const cellAliveFillStyle: string = "#000000";
	const cellDeadFillStyle: string = "#ffffff";
	const unitSize: number = 10;
	$("#legend").append($("<div></div>").text("Canvas size: " + canvasWidth + " x " + canvasHeight + " px"));
	drawOrthonormalGrid();
	let game: Game = new Game(canvasHeight / unitSize, canvasWidth / unitSize, 0.3);
	game.printGame(drawCell);
	let interval: number = 0;
	$("#btnRun").click(() => {
		if (interval === 0) {
			$("#btnRun").html("Pause <i class='fa fa-pause'></i>");
			interval = window.setInterval(() => {
				game.heartbeat();
				game.printGame(drawCell);
			}, 500);
		} else {
			window.clearInterval(interval);
			interval = 0;
			$("#btnRun").html("Run <i class='fa fa-play'></i>");
		}
	});
	$("#btnNew").click(() => {
		if (interval !== 0) {
			window.clearInterval(interval);
			interval = 0;
			$("#btnRun").html("Run <i class='fa fa-play'></i>");
		}
		game = new Game(canvasHeight / unitSize, canvasWidth / unitSize, 0.3);
		game.printGame(drawCell);
	});

	function drawOrthonormalGrid(): void {
		// grid
		ctx.beginPath();
		ctx.strokeStyle = orthonormalGridLinesColor;
		ctx.setLineDash([2, 2]);
		ctx.lineWidth = 1;
		for (let x: number = 0; x < canvasWidth; x += unitSize) {
			ctx.moveTo(x, 0);
			ctx.lineTo(x, canvasHeight);
			ctx.stroke();
		}
		for (let y: number = 0; y < canvasHeight; y += unitSize) {
			ctx.moveTo(0, y);
			ctx.lineTo(canvasWidth, y);
			ctx.stroke();
		}
	}
	function drawCell(row: number, column: number, isAlive: boolean): void {
		ctx.fillStyle = isAlive ? cellAliveFillStyle : cellDeadFillStyle;
		ctx.fillRect(column * unitSize + 1, row * unitSize + 1, unitSize - 2, unitSize - 2);
	}
});