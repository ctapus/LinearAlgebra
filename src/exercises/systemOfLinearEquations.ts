﻿import * as $ from "jquery";
import { SystemOfLinearEquationsGenerator } from "../generators/SystemOfLinearEquationsGenerator";
import { MatrixPresenter } from "../presenters/MatrixPresenter";
import { SystemOfLinearEquationsPresenter } from "../presenters/SystemOfLinearEquationsPresenter";
import { Matrix, MatrixIdentity } from "../structures/Matrix";
import { RationalNumber } from "../structures/RationalNumber";
import { Stack } from "../structures/Stack";
import { SystemOfLinearEquations } from "../structures/SystemOfLinearEquations";

$(document).ready(() => {
	const generator: SystemOfLinearEquationsGenerator = new SystemOfLinearEquationsGenerator();
	const systemOfEquations: SystemOfLinearEquations = generator.random();
	let undoStack: Stack<Matrix>;
	let redoStack: Stack<Matrix>;
	let workingMatrix: Matrix = null;
	let operationDivIdx: number = 0;
	init();
	$("#details").append("<div>System has solution: " + generator.hasSolution + "</div>");
	$("#details").append("<div>System has unique solution: " + generator.hasUniqueSolution + "</div>");
	$("#details").append("<div>System has dependent equations: " + generator.hasDependentEquations + "</div>");
	$("#details").append("<div>Number of variables: " + generator.numberOfVariables + "</div>");
	$("#details").append("<div>Number of leading variables: " + generator.numberOfLeadingVariables + "</div>");
	$("#details").append("<div>Number of free variables: " + generator.numberOfFreeVariables + "</div>");
	$("#details").append("<div>Number of equations: " + generator.numberOfEquations + "</div>");
	$("#details").append("<div>Number of independent equations: " + generator.numberOfIndependentEquations + "</div>");
	$("#details").append("<div>Number of dependent equations: " + generator.numberOfDependentEquations + "</div>");
	SystemOfLinearEquationsPresenter.printTableSystem(systemOfEquations, $("#content"));
	$("#toggleDetails").click(() => {
		$("#details").slideToggle();
	});
	$("#btnAugmentMatrix").click(() => {
		$("#error").text("");
		preProcessOperation();
		if ("A" === $("#selAugmentOptions1").val()) {
			workingMatrix = systemOfEquations.A.deepCopy();
		}
		if ("I" === $("#selAugmentOptions1").val()) {
			workingMatrix = new MatrixIdentity(systemOfEquations.noEquations);
		} else if ("b" === $("#selAugmentOptions1").val()) {
			workingMatrix = systemOfEquations.b.toMatrix();
		}
		if ("A" === $("#selAugmentOptions2").val()) {
			workingMatrix = Matrix.augment(workingMatrix, systemOfEquations.A);
		}
		if ("I" === $("#selAugmentOptions2").val()) {
			workingMatrix = Matrix.augment(workingMatrix, new MatrixIdentity(systemOfEquations.noEquations));
		} else if ("b" === $("#selAugmentOptions2").val()) {
			workingMatrix = Matrix.augment(workingMatrix, systemOfEquations.b);
		}
		postProcessOperation("Augmented " + $("#selAugmentOptions1").val() + " with " + $("#selAugmentOptions2").val() + ".");
	});
	$("#btnSwitchRows").click(() => {
		$("#error").text("");
		const idxRow1: number = Number($("#row1").val()) - 1;
		const idxRow2: number = Number($("#row2").val()) - 1;
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
		const idxRow: number = Number($("#rowIdx").val()) - 1;
		const scalar: RationalNumber = RationalNumber.fromString($("#scalar").val().toString());
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
		const idxRow1: number = Number($("#addRow1Idx").val()) - 1;
		const idxRow2: number = Number($("#addRow2Idx").val()) - 1;
		const scalar1: RationalNumber = RationalNumber.fromString($("#addRow1Mult").val().toString());
		const scalar2: RationalNumber = RationalNumber.fromString($("#addRow2Mult").val().toString());
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
		const buttonId: string = "toggleButton" + operationDivIdx;
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
		const buttonId: string = "toggleButton" + operationDivIdx;
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
		const divId: string = "operationDiv" + operationDivIdx;
		const div: JQuery = $("<div id='" + divId + "'></div>");
		const buttonId: string = "toggleButton" + operationDivIdx;
		const toggleButton: JQuery = $("<button id='" + buttonId + "'></button>").addClass("operationButton").text(title);
		$(document).on("click", "#" + buttonId, () => {
			$("#" + divId).toggle();
		});
		$("#content").append(toggleButton);
		$("#content").append(div);
		MatrixPresenter.printTableMatrix(workingMatrix, div);
		if (workingMatrix.isReducedRowEchelonForm()) {
			toggleButton.append(" Matrix is in reduced row eschelon form.");
		} else if (workingMatrix.isRowEchelonForm()) {
			toggleButton.append(" Matrix is in row eschelon form.");
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
			const divId: string = "operationDiv" + i;
			$("#" + divId).remove();
			const buttonId: string = "toggleButton" + i;
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