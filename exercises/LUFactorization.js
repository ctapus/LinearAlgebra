"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RationalNumber_1 = require("../structures/RationalNumber");
var Matrix_1 = require("../structures/Matrix");
var ALUGenerator_1 = require("../generators/ALUGenerator");
var MatrixPresenter_1 = require("../presenters/MatrixPresenter");
$(document).ready(function () {
    var generator = new ALUGenerator_1.ALUGenerator();
    var undoStack;
    var redoStack;
    var undoLStack;
    var redoLStack;
    var initialMatrix = generator.random();
    var P = null;
    var A = null;
    var U = null;
    var L = null;
    var operationDivIdx = 0;
    init();
    MatrixPresenter_1.MatrixPresenter.printTableMatrix(initialMatrix, $("#content"));
    $("#btnSwitchRows").click(function () {
        $("#error").text("");
        var idxRow1 = Number($("#row1").val()) - 1;
        var idxRow2 = Number($("#row2").val()) - 1;
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
    $("#btnAddRows").click(function () {
        $("#error").text("");
        var idxRow1 = Number($("#addRow1Idx").val()) - 1;
        var idxRow2 = Number($("#addRow2Idx").val()) - 1;
        var scalar = RationalNumber_1.RationalNumber.fromString($("#addRow1Mult").val().toString());
        if (0 > idxRow1 || U.m < idxRow1 || 0 > idxRow2 || U.m < idxRow2) {
            $("#error").text("Row index must be greater than 0 and smaller than " + U.m);
            return;
        }
        preProcessOperation();
        U.addRows(idxRow2, idxRow1, scalar);
        L.elements[idxRow2][idxRow1] = scalar.deepCopy().simplifiedForm()
            .mult(-1); // negative because it represents the inverse of an elimination matrix E
        postProcessOperation("Added " + scalar + " time(s) row " + $("#addRow1Idx").val() + " to row" + $("#addRow2Idx").val() + ".");
    });
    $("#btnUndo").click(function () {
        if (undoStack.isEmpty() || undoLStack.isEmpty()) {
            return;
        }
        redoStack.push(null != U ? U.deepCopy() : null);
        U = undoStack.pop();
        var divId = "operationDiv" + operationDivIdx;
        $("#" + divId).hide();
        var buttonId = "toggleButton" + operationDivIdx;
        $("#" + buttonId).hide();
        --operationDivIdx;
        divId = "operationDiv" + operationDivIdx;
        $("#" + divId).show();
        setEditOperations();
        setAvailableOperations();
    });
    $("#btnRedo").click(function () {
        if (redoStack.isEmpty() || redoLStack.isEmpty()) {
            return;
        }
        undoStack.push(null != U ? U.deepCopy() : null);
        U = redoStack.pop();
        undoLStack.push(null != L ? L.deepCopy() : null);
        L = redoLStack.pop();
        var divId = "operationDiv" + operationDivIdx;
        $("#" + divId).hide();
        ++operationDivIdx;
        divId = "operationDiv" + operationDivIdx;
        $("#" + divId).show();
        var buttonId = "toggleButton" + operationDivIdx;
        $("#" + buttonId).show();
        setEditOperations();
        setAvailableOperations();
    });
    $("#btnReset").click(function () {
        init();
        while (operationDivIdx > 0) {
            var divId = "operationDiv" + operationDivIdx;
            $("#" + divId).remove();
            var buttonId = "toggleButton" + operationDivIdx;
            $("#" + buttonId).remove();
            --operationDivIdx;
        }
        setEditOperations();
        setAvailableOperations();
    });
    function init() {
        undoStack = new Stack();
        redoStack = new Stack();
        undoLStack = new Stack();
        redoLStack = new Stack();
        A = initialMatrix.deepCopy();
        U = initialMatrix.deepCopy();
        L = new Matrix_1.MatrixIdentity(U.m);
        P = new Matrix_1.MatrixIdentity(U.m);
        setEditOperations();
        setAvailableOperations();
    }
    function preProcessOperation() {
        undoStack.push(null != U ? U.deepCopy() : null);
        undoLStack.push(null != L ? L.deepCopy() : null);
    }
    function postProcessOperation(title) {
        clearRedo();
        if (operationDivIdx > 0) {
            $("#" + "operationDiv" + operationDivIdx).toggle();
        }
        ++operationDivIdx;
        var divId = "operationDiv" + operationDivIdx;
        var div = $("<div id='" + divId + "'></div>");
        var buttonId = "toggleButton" + operationDivIdx;
        var toggleButton = $("<button id='" + buttonId + "'></button>").addClass("operationButton").text(title);
        $(document).on("click", "#" + buttonId, function () {
            $("#" + divId).toggle();
        });
        $("#content").append(toggleButton);
        $("#content").append(div);
        var previousMatrix = undoStack.isEmpty() ? initialMatrix : undoStack.peek();
        var description = $("<div></div>").append("L*U=P*A");
        MatrixPresenter_1.MatrixPresenter.printMatrixEquality2(L, "*", U, P, "*", A, description);
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
    function setEditOperations() {
        if (undoStack.isEmpty()) {
            $("#btnUndo").prop("disabled", true);
        }
        else {
            $("#btnUndo").prop("disabled", false);
        }
        if (redoStack.isEmpty()) {
            $("#btnRedo").prop("disabled", true);
        }
        else {
            $("#btnRedo").prop("disabled", false);
        }
    }
    function clearRedo() {
        var i = operationDivIdx;
        while (!redoStack.isEmpty()) {
            ++i;
            var divId = "operationDiv" + i;
            $("#" + divId).remove();
            var buttonId = "toggleButton" + i;
            $("#" + buttonId).remove();
            redoStack.pop();
            redoLStack.pop();
        }
    }
    function setAvailableOperations() {
        if (null == U) {
            $("#divSwitchRows").hide();
            $("#divAddRows").hide();
        }
        else {
            $("#divSwitchRows").show();
            $("#divAddRows").show();
        }
    }
});
//# sourceMappingURL=LUFactorization.js.map