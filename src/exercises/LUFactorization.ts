import { ALUGenerator } from "../generators/ALUGenerator";
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
	const generator: ALUGenerator = new ALUGenerator();
	let undoStack: Stack<Matrix>;
	let redoStack: Stack<Matrix>;
	let undoLStack: Stack<Matrix>;
	let redoLStack: Stack<Matrix>;
	const initialMatrix: Matrix = generator.random();
	let P: Matrix = null;
	let A: Matrix = null;
	let U: Matrix = null;
	let L: Matrix = null;
	let operationDivIdx: number = 0;
	init();
	MatrixPresenter.printTableMatrix(initialMatrix, (<HTMLDivElement>document.getElementById("content")));
	document.getElementById("btnSwitchRows").addEventListener("click", () => {
		document.getElementById("error").textContent = "";
		const idxRow1: number = Number((<HTMLInputElement>document.getElementById("row1")).value) - 1;
		const idxRow2: number = Number((<HTMLInputElement>document.getElementById("row2")).value) - 1;
		if (0 > idxRow1 || A.m < idxRow1 || 0 > idxRow2 || A.m < idxRow2) {
			document.getElementById("error").textContent = "Row index must be greater than 0 and smaller than " + A.m;
			return;
		}
		preProcessOperation();
		P.switchRows(idxRow1, idxRow2);
		U.switchRows(idxRow1, idxRow2);
		L.switchRows(idxRow1, idxRow2);
		postProcessOperation("Switched row " + (<HTMLInputElement>document.getElementById("row1")).value + " with row " + (<HTMLInputElement>document.getElementById("row2")).value + ".");
	});
	document.getElementById("btnAddRows").addEventListener("click", () => {
		document.getElementById("error").textContent = "";
		const idxRow1: number = Number((<HTMLInputElement>document.getElementById("addRow1Idx")).value) - 1;
		const idxRow2: number = Number((<HTMLInputElement>document.getElementById("addRow2Idx")).value) - 1;
		const scalar: RationalNumber = RationalNumber.fromString((<HTMLInputElement>document.getElementById("addRow1Mult")).value.toString());
		if (0 > idxRow1 || U.m < idxRow1 || 0 > idxRow2 || U.m < idxRow2) {
			document.getElementById("error").textContent = "Row index must be greater than 0 and smaller than " + U.m;
			return;
		}
		preProcessOperation();
		U.addRows(idxRow2, idxRow1, scalar);
		L.elements[idxRow2][idxRow1] = scalar.deepCopy().simplifiedForm()
		.mult(-1); // negative because it represents the inverse of an elimination matrix E
		postProcessOperation("Added " + scalar + " time(s) row " + (<HTMLInputElement>document.getElementById("addRow1Idx")).value + " to row" + (<HTMLInputElement>document.getElementById("addRow2Idx")).value + ".");
	});
	document.getElementById("btnUndo").addEventListener("click", () => {
		if (undoStack.isEmpty() || undoLStack.isEmpty()) { return; }
		redoStack.push(null != U ? U.deepCopy() : null);
		U = undoStack.pop();
		document.getElementById("operationDiv" + operationDivIdx).style.display = "none";
		document.getElementById("toggleButton" + operationDivIdx).style.display = "none";
		--operationDivIdx;
		document.getElementById("operationDiv" + operationDivIdx).style.display = "block";
		setEditOperations();
		setAvailableOperations();
	});
	document.getElementById("btnRedo").addEventListener("click", () => {
		if (redoStack.isEmpty() || redoLStack.isEmpty()) { return; }
		undoStack.push(null != U ? U.deepCopy() : null);
		U = redoStack.pop();
		undoLStack.push(null != L ? L.deepCopy() : null);
		L = redoLStack.pop();
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
		undoLStack = new Stack<Matrix>();
		redoLStack = new Stack<Matrix>();
		A = initialMatrix.deepCopy();
		U = initialMatrix.deepCopy();
		L = new MatrixIdentity(U.m);
		P = new MatrixIdentity(U.m);
		setEditOperations();
		setAvailableOperations();
	}
	function preProcessOperation(): void {
		undoStack.push(null != U ? U.deepCopy() : null);
		undoLStack.push(null != L ? L.deepCopy() : null);
	}
	function postProcessOperation(title: string): void {
		clearRedo();
		if (operationDivIdx > 0) { toggle("operationDiv" + operationDivIdx); }
		++operationDivIdx;
		const divId: string = "operationDiv" + operationDivIdx;
		const div: HTMLElement = document.createElement("div");
		div.id = divId;
		const buttonId: string = "toggleButton" + operationDivIdx;
		const toggleButton: HTMLElement = document.createElement("button");
		toggleButton.id = buttonId;
		toggleButton.className = "operationButton";
		toggleButton.textContent = title;
		toggleButton.addEventListener("click", () => {
			toggle(divId);
		});
		document.getElementById("content").appendChild(toggleButton);
		document.getElementById("content").appendChild(div);
		const previousMatrix: Matrix = undoStack.isEmpty() ? initialMatrix : undoStack.peek();
		const description: HTMLDivElement = document.createElement("div");
		description.appendChild(document.createTextNode("L*U=P*A"));
		MatrixPresenter.printMatrixEquality2(L, "*", U, P, "*", A, description);
		div.append(description);
		if (U.isUpperTriangular()) {
			toggleButton.append(" U matrix found!");
		}
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
			redoLStack.pop();
		}
	}

	function setAvailableOperations(): void {
		if (null == U) {
			document.getElementById("divSwitchRows").style.display = "none";
			document.getElementById("divAddRows").style.display = "none";
		} else {
			document.getElementById("divSwitchRows").style.display = "block";
			document.getElementById("divAddRows").style.display = "block";
		}
	}
});