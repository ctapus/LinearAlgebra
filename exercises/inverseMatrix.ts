/// <reference path="../structures/Vector.ts" />
/// <reference path="../presenters/MatrixPresenter.ts" />

$(document).ready(() => {
	let undoStack: Stack<Matrix>;
	let redoStack: Stack<Matrix>;
	const initialMatrix: Matrix = Matrix.randomSquare();
	let workingMatrix: Matrix = null;
	let operationDivIdx: number = 0;
	init();
	MatrixPresenter.printTableMatrix(initialMatrix, $("#content"));
	$("#btnAugmentMatrix").click(() => {
		$("#error").text("");
		preProcessOperation();
		if ("A" === $("#selAugmentOptions1").val()) {
			workingMatrix = initialMatrix.deepCopy();
		}
		if ("I" === $("#selAugmentOptions1").val()) {
			workingMatrix = new MatrixIdentity(initialMatrix.m);
		}
		if ("A" === $("#selAugmentOptions2").val()) {
			workingMatrix = Matrix.augment(workingMatrix, initialMatrix);
		}
		if ("I" === $("#selAugmentOptions2").val()) {
			workingMatrix = Matrix.augment(workingMatrix, new MatrixIdentity(initialMatrix.m));
		}
		postProcessOperation("Augmented " + $("#selAugmentOptions1").val() + " with " + $("#selAugmentOptions2").val() + ".");
	});
	$("#btnSwitchRows").click(() => {
		$("#error").text("");
		let idxRow1: number = Number($("#row1").val()) - 1;
		let idxRow2: number = Number($("#row2").val()) - 1;
		if (0 > idxRow1 || workingMatrix.m < idxRow1 || 0 > idxRow2 || workingMatrix.m < idxRow2) {
			$("#error").text("Row index must be greater than 0 and smaller than " + workingMatrix.m);
			return;
		}
		preProcessOperation();
		workingMatrix.switchRows(idxRow1, idxRow2);
		postProcessOperation("Switched row " + $("#row1").val() + " with row " + $("#row2").val() + ".");
	});
	$("#btnMultiplyRow").click(() => {
		$("#error").text("");
		let idxRow: number = Number($("#rowIdx").val()) - 1;
		let scalar: RationalNumber = RationalNumber.fromString($("#scalar").val().toString());
		if (0 > idxRow || workingMatrix.m < idxRow) {
			$("#error").text("Row index must be greater than 0 and smaller than " + workingMatrix.m);
			return;
		}
		preProcessOperation();
		workingMatrix.multiplyRow(idxRow, scalar);
		postProcessOperation("Multiplied row " + $("#rowIdx").val() + " with scalar" + $("#scalar").val() + ".");
	});
	$("#btnAddRows").click(() => {
		$("#error").text("");
		let idxRow1: number = Number($("#addRow1Idx").val()) - 1;
		let idxRow2: number = Number($("#addRow2Idx").val()) - 1;
		let scalar1: RationalNumber = RationalNumber.fromString($("#addRow1Mult").val().toString());
		let scalar2: RationalNumber = RationalNumber.fromString($("#addRow2Mult").val().toString());
		if (0 > idxRow1 || workingMatrix.m < idxRow1 || 0 > idxRow2 || workingMatrix.m < idxRow2) {
			$("#error").text("Row index must be greater than 0 and smaller than " + workingMatrix.m);
			return;
		}
		preProcessOperation();
		workingMatrix.addRow1ToRow2(idxRow1, scalar1, idxRow2, scalar2);
		postProcessOperation(`Added ${scalar1} time(s) row ${$("#addRow1Idx").val()} to ${scalar2} time(s) row ${$("#addRow2Idx").val()}.`);
	});
	$("#btnUndo").click(() => {
		if (undoStack.isEmpty()) { return; }
		redoStack.push(null != workingMatrix ? workingMatrix.deepCopy() : null);
		workingMatrix = undoStack.pop();
		let divId: string = "operationDiv" + operationDivIdx;
		$("#" + divId).hide();
		let buttonId: string = "toggleButton" + operationDivIdx;
		$("#" + buttonId).hide();
		--operationDivIdx;
		divId = "operationDiv" + operationDivIdx;
		$("#" + divId).show();
		setEditOperations();
		setAvailableOperations();
	});
	$("#btnRedo").click(() => {
		if (redoStack.isEmpty()) { return; }
		undoStack.push(null != workingMatrix ? workingMatrix.deepCopy() : null);
		workingMatrix = redoStack.pop();
		let divId: string = "operationDiv" + operationDivIdx;
		$("#" + divId).hide();
		++operationDivIdx;
		divId = "operationDiv" + operationDivIdx;
		$("#" + divId).show();
		let buttonId: string = "toggleButton" + operationDivIdx;
		$("#" + buttonId).show();
		setEditOperations();
		setAvailableOperations();
	});
	$("#btnReset").click(() => {
		init();
		while (operationDivIdx > 0) {
			let divId: string = "operationDiv" + operationDivIdx;
			$("#" + divId).remove();
			let buttonId: string = "toggleButton" + operationDivIdx;
			$("#" + buttonId).remove();
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
		if (operationDivIdx > 0) { $("#" + "operationDiv" + operationDivIdx).toggle(); }
		++operationDivIdx;
		let divId: string = "operationDiv" + operationDivIdx;
		let div: JQuery = $("<div id='" + divId + "'></div>");
		let buttonId: string = "toggleButton" + operationDivIdx;
		let toggleButton: JQuery = $("<button id='" + buttonId + "'></button>").addClass("operationButton").text(title);
		$(document).on("click", "#" + buttonId, () => {
			$("#" + divId).toggle();
		});
		$("#content").append(toggleButton);
		$("#content").append(div);
		MatrixPresenter.printTableMatrix(workingMatrix, div);
		if (workingMatrix.isReducedRowEchelonForm()) {
			toggleButton.append(" Matrix is in reduced row eschelon form.");
		} else {
			if (workingMatrix.isRowEchelonForm()) {
				toggleButton.append(" Matrix is in row eschelon form.");
			}
		}
		$("#selAugmentOptions1").val("");
		$("#selAugmentOptions2").val("");
		$("#row1").val("");
		$("#row2").val("");
		$("#rowIdx").val("");
		$("#scalar").val("1");
		$("#addRow1Idx").val("");
		$("#addRow1Mult").val("1");
		$("#addRow2Idx").val("");
		$("#addRow2Mult").val("1");
		setEditOperations();
		setAvailableOperations();
	}
	function setEditOperations(): void {
		if (undoStack.isEmpty()) {
			$("#btnUndo").prop("disabled", true);
		} else {
			$("#btnUndo").prop("disabled", false);
		}
		if (redoStack.isEmpty()) {
			$("#btnRedo").prop("disabled", true);
		} else {
			$("#btnRedo").prop("disabled", false);
		}
	}
	function clearRedo(): void {
		let i: number = operationDivIdx;
		while (!redoStack.isEmpty()) {
			++i;
			let divId: string = "operationDiv" + i;
			$("#" + divId).remove();
			let buttonId: string = "toggleButton" + i;
			$("#" + buttonId).remove();
			redoStack.pop();
		}
	}

	function setAvailableOperations(): void {
		if (null == workingMatrix) {
			$("#divAugmentMatrix").show();
			$("#divSwitchRows").hide();
			$("#divMultiplyRow").hide();
			$("#divAddRows").hide();
		} else {
			$("#divAugmentMatrix").hide();
			$("#divSwitchRows").show();
			$("#divMultiplyRow").show();
			$("#divAddRows").show();
		}
	}
});