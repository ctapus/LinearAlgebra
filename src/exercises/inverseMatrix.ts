import { MatrixPresenter } from "../presenters/MatrixPresenter";
import { Matrix, MatrixIdentity } from "../structures/Matrix";
import { RationalNumber } from "../structures/RationalNumber";
import { Stack } from "../structures/Stack";

document.addEventListener("DOMContentLoaded", () => {
	function toggle(id: string) {
		const element: HTMLElement = document.getElementById(id);
		if (element.style.display == 'none') {
			element.style.display = 'block'
		} else {
			element.style.display = 'none'
		}
	}
	let undoStack: Stack<Matrix>;
	let redoStack: Stack<Matrix>;
	const initialMatrix: Matrix = Matrix.randomSquare();
	let workingMatrix: Matrix = null;
	let operationDivIdx: number = 0;
	init();
	MatrixPresenter.printTableMatrix(initialMatrix, <HTMLDivElement>document.getElementById("content"));
	document.getElementById("btnAugmentMatrix").addEventListener("click", () => {
		document.getElementById("error").innerText = "";
		preProcessOperation();
		if ("A" === (<HTMLInputElement>document.getElementById("selAugmentOptions1")).value) {
			workingMatrix = initialMatrix.deepCopy();
		}
		if ("I" === (<HTMLInputElement>document.getElementById("selAugmentOptions1")).value) {
			workingMatrix = new MatrixIdentity(initialMatrix.m);
		}
		if ("A" === (<HTMLInputElement>document.getElementById("selAugmentOptions2")).value) {
			workingMatrix = Matrix.augment(workingMatrix, initialMatrix);
		}
		if ("I" === (<HTMLInputElement>document.getElementById("selAugmentOptions2")).value) {
			workingMatrix = Matrix.augment(workingMatrix, new MatrixIdentity(initialMatrix.m));
		}
		postProcessOperation("Augmented " + (<HTMLInputElement>document.getElementById("selAugmentOptions1")).value + " with " + (<HTMLInputElement>document.getElementById("selAugmentOptions2")).value + ".");
	});
	document.getElementById("btnSwitchRows").addEventListener("click", () => {
		document.getElementById("error").innerText = "";
		const idxRow1: number = Number((<HTMLInputElement>document.getElementById("row1")).value) - 1;
		const idxRow2: number = Number((<HTMLInputElement>document.getElementById("row2")).value) - 1;
		if (0 > idxRow1 || workingMatrix.m < idxRow1 || 0 > idxRow2 || workingMatrix.m < idxRow2) {
			document.getElementById("error").innerText = "Row index must be greater than 0 and smaller than " + workingMatrix.m;
			return;
		}
		preProcessOperation();
		workingMatrix.switchRows(idxRow1, idxRow2);
		postProcessOperation("Switched row " + (<HTMLInputElement>document.getElementById("row1")).value + " with row " + (<HTMLInputElement>document.getElementById("row2")).value + ".");
	});
	document.getElementById("btnMultiplyRow").addEventListener("click", () => {
		document.getElementById("error").innerText = "";
		const idxRow: number = Number((<HTMLInputElement>document.getElementById("rowIdx")).value) - 1;
		const scalar: RationalNumber = RationalNumber.fromString((<HTMLInputElement>document.getElementById("scalar")).value);
		if (0 > idxRow || workingMatrix.m < idxRow) {
			document.getElementById("error").innerText = "Row index must be greater than 0 and smaller than " + workingMatrix.m;
			return;
		}
		preProcessOperation();
		workingMatrix.multiplyRow(idxRow, scalar);
		postProcessOperation("Multiplied row " + (<HTMLInputElement>document.getElementById("rowIdx")).value + " with scalar" + (<HTMLInputElement>document.getElementById("scalar")).value + ".");
	});
	document.getElementById("btnAddRows").addEventListener("click", () => {
		document.getElementById("error").innerText = "";
		const idxRow1: number = Number((<HTMLInputElement>document.getElementById("addRow1Idx")).value) - 1;
		const idxRow2: number = Number((<HTMLInputElement>document.getElementById("addRow2Idx")).value) - 1;
		const scalar1: RationalNumber = RationalNumber.fromString((<HTMLInputElement>document.getElementById("addRow1Mult")).value);
		const scalar2: RationalNumber = RationalNumber.fromString((<HTMLInputElement>document.getElementById("addRow2Mult")).value);
		if (0 > idxRow1 || workingMatrix.m < idxRow1 || 0 > idxRow2 || workingMatrix.m < idxRow2) {
			document.getElementById("error").innerText = "Row index must be greater than 0 and smaller than " + workingMatrix.m;
			return;
		}
		preProcessOperation();
		workingMatrix.addRow1ToRow2(idxRow1, scalar1, idxRow2, scalar2);
		postProcessOperation(`Added ${scalar1} time(s) row ${(<HTMLInputElement>document.getElementById("addRow1Idx")).value} to ${scalar2} time(s) row ${(<HTMLInputElement>document.getElementById("addRow2Idx")).value}.`);
	});
	document.getElementById("btnUndo").addEventListener("click", () => {
		if (undoStack.isEmpty()) { return; }
		redoStack.push(null != workingMatrix ? workingMatrix.deepCopy() : null);
		workingMatrix = undoStack.pop();
		document.getElementById("operationDiv" + operationDivIdx).style.display = "none";
		document.getElementById("toggleButton" + operationDivIdx).style.display = "none";
		--operationDivIdx;
		document.getElementById("operationDiv" + operationDivIdx).style.display = "block";
		setEditOperations();
		setAvailableOperations();
	});
	document.getElementById("btnRedo").addEventListener("click", () => {
		if (redoStack.isEmpty()) { return; }
		undoStack.push(null != workingMatrix ? workingMatrix.deepCopy() : null);
		workingMatrix = redoStack.pop();
		document.getElementById("operationDiv" + operationDivIdx).style.display = "none";
		++operationDivIdx;
		document.getElementById("operationDiv" + operationDivIdx).style.display = "block";
		document.getElementById("toggleButton" + operationDivIdx).style.display = "block";
		setEditOperations();
		setAvailableOperations();
	});
	document.getElementById("btnReset").addEventListener("click", () => {
		init();
		while (operationDivIdx > 0) {
			document.getElementById("operationDiv" + operationDivIdx).remove();
			document.getElementById("toggleButton" + operationDivIdx).remove();
			--operationDivIdx;
		}
		setEditOperations();
		setAvailableOperations();
	});
	function init(): void {
		undoStack = new Stack<Matrix>();
		redoStack = new Stack<Matrix>();
		workingMatrix = null;
		setEditOperations();
		setAvailableOperations();
	}
	function preProcessOperation(): void {
		undoStack.push(null != workingMatrix ? workingMatrix.deepCopy() : null);
	}
	function postProcessOperation(title: string): void {
		clearRedo();
		if (operationDivIdx > 0) { toggle("operationDiv" + operationDivIdx); }
		++operationDivIdx;
		const divId: string = "operationDiv" + operationDivIdx;
		const div: HTMLDivElement = document.createElement("div");
		div.id = divId;
		const buttonId: string = "toggleButton" + operationDivIdx;
		const toggleButton: HTMLButtonElement = document.createElement("button");
		toggleButton.id = buttonId;
		toggleButton.classList.add("operationButton");
		toggleButton.textContent = title;
		toggleButton.addEventListener("click", () => {
			toggle(divId);
		});
		document.getElementById("content").append(toggleButton);
		document.getElementById("content").append(div);
		MatrixPresenter.printTableMatrix(workingMatrix, div);
		if (workingMatrix.isReducedRowEchelonForm()) {
			toggleButton.append(" Matrix is in reduced row eschelon form.");
		} else {
			if (workingMatrix.isRowEchelonForm()) {
				toggleButton.append(" Matrix is in row eschelon form.");
			}
		}
		(<HTMLInputElement>document.getElementById("selAugmentOptions1")).value = "";
		(<HTMLInputElement>document.getElementById("selAugmentOptions2")).value = "";
		(<HTMLInputElement>document.getElementById("row1")).value = "";
		(<HTMLInputElement>document.getElementById("row2")).value = "";
		(<HTMLInputElement>document.getElementById("rowIdx")).value = "";
		(<HTMLInputElement>document.getElementById("scalar")).value = "1";
		(<HTMLInputElement>document.getElementById("addRow1Idx")).value = "";
		(<HTMLInputElement>document.getElementById("addRow1Mult")).value = "1";
		(<HTMLInputElement>document.getElementById("addRow2Idx")).value = "";
		(<HTMLInputElement>document.getElementById("addRow2Mult")).value = "1";
		setEditOperations();
		setAvailableOperations();
	}
	function setEditOperations(): void {
		if (undoStack.isEmpty()) {
			document.getElementById("btnUndo").setAttribute("disabled", "disabled");
		} else {
			document.getElementById("btnUndo").removeAttribute("disabled");
		}
		if (redoStack.isEmpty()) {
			document.getElementById("btnRedo").setAttribute("disabled", "disabled");
		} else {
			document.getElementById("btnRedo").removeAttribute("disabled");
		}
	}
	function clearRedo(): void {
		let i: number = operationDivIdx;
		while (!redoStack.isEmpty()) {
			++i;
			document.getElementById("operationDiv" + i).remove();
			document.getElementById("toggleButton" + i).remove();
			redoStack.pop();
		}
	}

	function setAvailableOperations(): void {
		if (null == workingMatrix) {
			document.getElementById("divAugmentMatrix").style.display = "block";
			document.getElementById("divSwitchRows").style.display = "none";
			document.getElementById("divMultiplyRow").style.display = "none";
			document.getElementById("divAddRows").style.display = "none";
		} else {
			document.getElementById("divAugmentMatrix").style.display = "none";
			document.getElementById("divSwitchRows").style.display = "block";
			document.getElementById("divMultiplyRow").style.display = "block";
			document.getElementById("divAddRows").style.display = "block";
		}
	}
});