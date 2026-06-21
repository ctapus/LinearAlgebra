import { SystemOfLinearEquationsGenerator } from "../generators/SystemOfLinearEquationsGenerator";
import { MatrixPresenter } from "../presenters/MatrixPresenter";
import { SystemOfLinearEquationsPresenter } from "../presenters/SystemOfLinearEquationsPresenter";
import { Matrix, MatrixIdentity } from "../structures/Matrix";
import { RationalNumber } from "../structures/RationalNumber";
import { Stack } from "../structures/Stack";
import { SystemOfLinearEquations } from "../structures/SystemOfLinearEquations";

document.addEventListener("DOMContentLoaded", () => {
	function toggle(id: string) {
		const element: HTMLElement = document.getElementById(id);
		if (element.style.display == 'none') {
			element.style.display = 'block'
		} else {
			element.style.display = 'none'
		}
	}
	const generator: SystemOfLinearEquationsGenerator = new SystemOfLinearEquationsGenerator();
	const systemOfEquations: SystemOfLinearEquations = generator.random();
	let undoStack: Stack<Matrix>;
	let redoStack: Stack<Matrix>;
	let workingMatrix: Matrix = null;
	let operationDivIdx: number = 0;
	init();
	document.getElementById("details").append(Object.assign(document.createElement("div"), { textContent: "System has solution: " + generator.hasSolution }));
	document.getElementById("details").append(Object.assign(document.createElement("div"), { textContent: "System has unique solution: " + generator.hasUniqueSolution }));
	document.getElementById("details").append(Object.assign(document.createElement("div"), { textContent: "System has dependent equations: " + generator.hasDependentEquations }));
	document.getElementById("details").append(Object.assign(document.createElement("div"), { textContent: "Number of variables: " + generator.numberOfVariables }));
	document.getElementById("details").append(Object.assign(document.createElement("div"), { textContent: "Number of leading variables: " + generator.numberOfLeadingVariables }));
	document.getElementById("details").append(Object.assign(document.createElement("div"), { textContent: "Number of free variables: " + generator.numberOfFreeVariables }));
	document.getElementById("details").append(Object.assign(document.createElement("div"), { textContent: "Number of equations: " + generator.numberOfEquations }));
	document.getElementById("details").append(Object.assign(document.createElement("div"), { textContent: "Number of independent equations: " + generator.numberOfIndependentEquations }));
	document.getElementById("details").append(Object.assign(document.createElement("div"), { textContent: "Number of dependent equations: " + generator.numberOfDependentEquations }));
	SystemOfLinearEquationsPresenter.printTableSystem(systemOfEquations, <HTMLDivElement>document.getElementById("content"));
	document.getElementById("toggleDetails").addEventListener("click", () => {
		toggle("details");
	});
	document.getElementById("btnAugmentMatrix").addEventListener("click", () => {
		document.getElementById("error").innerText = "";
		preProcessOperation();
		if ("A" === (<HTMLInputElement>document.getElementById("selAugmentOptions1")).value) {
			workingMatrix = systemOfEquations.A.deepCopy();
		}
		if ("I" === (<HTMLInputElement>document.getElementById("selAugmentOptions1")).value) {
			workingMatrix = new MatrixIdentity(systemOfEquations.noEquations);
		} else if ("b" === (<HTMLInputElement>document.getElementById("selAugmentOptions1")).value) {
			workingMatrix = systemOfEquations.b.toMatrix();
		}
		if ("A" === (<HTMLInputElement>document.getElementById("selAugmentOptions2")).value) {
			workingMatrix = Matrix.augment(workingMatrix, systemOfEquations.A);
		}
		if ("I" === (<HTMLInputElement>document.getElementById("selAugmentOptions2")).value) {
			workingMatrix = Matrix.augment(workingMatrix, new MatrixIdentity(systemOfEquations.noEquations));
		} else if ("b" === (<HTMLInputElement>document.getElementById("selAugmentOptions2")).value) {
			workingMatrix = Matrix.augment(workingMatrix, systemOfEquations.b);
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
		const scalar: RationalNumber = RationalNumber.fromString((<HTMLInputElement>document.getElementById("scalar")).value.toString());
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
		const scalar1: RationalNumber = RationalNumber.fromString((<HTMLInputElement>document.getElementById("addRow1Mult")).value.toString());
		const scalar2: RationalNumber = RationalNumber.fromString((<HTMLInputElement>document.getElementById("addRow2Mult")).value.toString());
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
		let divId: string = "operationDiv" + operationDivIdx;
		document.getElementById("" + divId).style.display = "none";
		const buttonId: string = "toggleButton" + operationDivIdx;
		document.getElementById("" + buttonId).style.display = "none";
		--operationDivIdx;
		divId = "operationDiv" + operationDivIdx;
		document.getElementById("" + divId).style.display = "block";
		setEditOperations();
		setAvailableOperations();
	});
	document.getElementById("btnRedo").addEventListener("click", () => {
		if (redoStack.isEmpty()) { return; }
		undoStack.push(null != workingMatrix ? workingMatrix.deepCopy() : null);
		workingMatrix = redoStack.pop();
		let divId: string = "operationDiv" + operationDivIdx;
		document.getElementById("" + divId).style.display = "none";
		++operationDivIdx;
		divId = "operationDiv" + operationDivIdx;
		document.getElementById("" + divId).style.display = "block";
		const buttonId: string = "toggleButton" + operationDivIdx;
		document.getElementById("" + buttonId).style.display = "block";
		setEditOperations();
		setAvailableOperations();
	});
	document.getElementById("btnReset").addEventListener("click", () => {
		init();
		while (operationDivIdx > 0) {
			const divId: string = "operationDiv" + operationDivIdx;
			document.getElementById("" + divId).remove();
			const buttonId: string = "toggleButton" + operationDivIdx;
			document.getElementById("" + buttonId).remove();
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
		if (operationDivIdx > 0) { toggle("" + "operationDiv" + operationDivIdx); }
		++operationDivIdx;
		const divId: string = "operationDiv" + operationDivIdx;
		const div: HTMLDivElement = document.createElement("div");
		div.id = divId;
		const buttonId: string = "toggleButton" + operationDivIdx;
		const toggleButton: HTMLButtonElement = document.createElement("button");
		toggleButton.id = buttonId;
		toggleButton.className = "operationButton";
		toggleButton.innerText = title;
		toggleButton.addEventListener("click", () => {
			toggle(divId);
		});
		document.getElementById("content").append(toggleButton);
		document.getElementById("content").append(div);
		MatrixPresenter.printTableMatrix(workingMatrix, div);
		if (workingMatrix.isReducedRowEchelonForm()) {
			toggleButton.append(" Matrix is in reduced row eschelon form.");
		} else if (workingMatrix.isRowEchelonForm()) {
			toggleButton.append(" Matrix is in row eschelon form.");
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
			const divId: string = "operationDiv" + i;
			document.getElementById("" + divId).remove();
			const buttonId: string = "toggleButton" + i;
			document.getElementById("" + buttonId).remove();
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