/// <reference path="../generators/ALUGenerator.ts" />
/// <reference path="../presenters/MatrixPresenter.ts" />

$(document).ready(() => {
	var generator: ALUGenerator = new ALUGenerator();
	var undoStack: Stack<Matrix>;
	var redoStack: Stack<Matrix>;
	var undoLStack: Stack<Matrix>;
	var redoLStack: Stack<Matrix>;
	var initialMatrix: Matrix = generator.random();
	var P: Matrix = null;
	var A: Matrix = null;
	var U: Matrix = null;
	var L: Matrix = null;
	var operationDivIdx: number = 0;
	init();
	MatrixPresenter.printTableMatrix(initialMatrix, $("#content"));
	$("#btnSwitchRows").click(() => {
		$("#error").text("");
		var idxRow1: number = Number($("#row1").val()) - 1;
		var idxRow2: number = Number($("#row2").val()) - 1;
		if (0 > idxRow1 || A.m < idxRow1 || 0 > idxRow2 || A.m < idxRow2) {
			$("#error").text("Row index must be greater than 0 and smaller than " + A.m);
			return;
		}
		preProcessOperation();
		P.switchRows(idxRow1, idxRow2);
		U.switchRows(idxRow1, idxRow2);
		L.switchRows(idxRow1, idxRow2);
		postProcessOperation("Switched row " + $("#row1").val() + " with row " + $("#row2").val() + ".");
	});
	$("#btnAddRows").click(() => {
		$("#error").text("");
		var idxRow1: number = Number($("#addRow1Idx").val()) - 1;
		var idxRow2: number = Number($("#addRow2Idx").val()) - 1;
		var scalar: RationalNumber = RationalNumber.fromString($("#addRow1Mult").val().toString());
		if (0 > idxRow1 || U.m < idxRow1 || 0 > idxRow2 || U.m < idxRow2) {
			$("#error").text("Row index must be greater than 0 and smaller than " + U.m);
			return;
		}
		preProcessOperation();
		U.addRows(idxRow2, idxRow1, scalar);
		L.elements[idxRow2][idxRow1] = scalar.deepCopy().simplifiedForm()
		.mult(-1);// negative because it represents the inverse of an elimination matrix E
		postProcessOperation("Added " + scalar + " time(s) row " + $("#addRow1Idx").val() + " to row" + $("#addRow2Idx").val() + ".");
	});
	$("#btnUndo").click(() => {
		if (undoStack.isEmpty() || undoLStack.isEmpty()) { return; }
		redoStack.push(null != U ? U.deepCopy() : null);
		U = undoStack.pop();
		var divId: string = "operationDiv" + operationDivIdx;
		$("#" + divId).hide();
		var buttonId: string = "toggleButton" + operationDivIdx;
		$("#" + buttonId).hide();
		--operationDivIdx;
		divId = "operationDiv" + operationDivIdx;
		$("#" + divId).show();
		setEditOperations();
		setAvailableOperations();
	});
	$("#btnRedo").click(() => {
		if (redoStack.isEmpty() || redoLStack.isEmpty()) { return; }
		undoStack.push(null != U ? U.deepCopy() : null);
		U = redoStack.pop();
		undoLStack.push(null != L ? L.deepCopy() : null);
		L = redoLStack.pop();
		var divId: string = "operationDiv" + operationDivIdx;
		$("#" + divId).hide();
		++operationDivIdx;
		divId = "operationDiv" + operationDivIdx;
		$("#" + divId).show();
		var buttonId: string = "toggleButton" + operationDivIdx;
		$("#" + buttonId).show();
		setEditOperations();
		setAvailableOperations();
	});
	$("#btnReset").click(() => {
		init();
		while (operationDivIdx > 0) {
			const divId: string = "operationDiv" + operationDivIdx;
			$("#" + divId).remove();
			const buttonId: string = "toggleButton" + operationDivIdx;
			$("#" + buttonId).remove();
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
		if (operationDivIdx > 0) { $("#" + "operationDiv" + operationDivIdx).toggle(); }
		++operationDivIdx;
		var divId: string = "operationDiv" + operationDivIdx;
		const div: JQuery = $("<div id='" + divId + "'></div>");
		const buttonId: string = "toggleButton" + operationDivIdx;
		const toggleButton: JQuery = $("<button id='" + buttonId + "'></button>").addClass("operationButton").text(title);
		$(document).on("click", "#" + buttonId, () => {
			$("#" + divId).toggle();
		});
		$("#content").append(toggleButton);
		$("#content").append(div);
		const previousMatrix: Matrix = undoStack.isEmpty() ? initialMatrix : undoStack.peek();
		const description: JQuery = $("<div></div>").append("L*U=P*A");
		MatrixPresenter.printMatrixEquality2(L, "*", U, P, "*", A, description);
		div.append(description);
		if (U.isUpperTriangular()) {
			toggleButton.append(" U matrix found!");
		}
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
		} else { $("#btnUndo").prop("disabled", false); }
		if (redoStack.isEmpty()) {
			$("#btnRedo").prop("disabled", true);
		} else { $("#btnRedo").prop("disabled", false); }
	}
	function clearRedo(): void {
		let i: number = operationDivIdx;
		while (!redoStack.isEmpty()) {
			++i;
			const divId: string = "operationDiv" + i;
			$("#" + divId).remove();
			const buttonId: string = "toggleButton" + i;
			$("#" + buttonId).remove();
			redoStack.pop();
			redoLStack.pop();
		}
	}

	function setAvailableOperations(): void {
		if (null == U) {
			$("#divSwitchRows").hide();
			$("#divAddRows").hide();
		} else {
			$("#divSwitchRows").show();
			$("#divAddRows").show();
		}
	}
});