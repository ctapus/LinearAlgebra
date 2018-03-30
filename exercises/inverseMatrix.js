/// <reference path="../structures/Vector.ts" />
/// <reference path="../presenters/MatrixPresenter.ts" />
$(document).ready(function () {
    var undoStack;
    var redoStack;
    var initialMatrix = Matrix.randomSquare();
    var workingMatrix = null;
    var operationDivIdx = 0;
    init();
    MatrixPresenter.printTableMatrix(initialMatrix, $("#content"));
    $("#btnAugmentMatrix").click(function () {
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
    $("#btnSwitchRows").click(function () {
        $("#error").text("");
        var idxRow1 = Number($("#row1").val()) - 1;
        var idxRow2 = Number($("#row2").val()) - 1;
        if (0 > idxRow1 || workingMatrix.m < idxRow1 || 0 > idxRow2 || workingMatrix.m < idxRow2) {
            $("#error").text("Row index must be greater than 0 and smaller than " + workingMatrix.m);
            return;
        }
        preProcessOperation();
        workingMatrix.switchRows(idxRow1, idxRow2);
        postProcessOperation("Switched row " + $("#row1").val() + " with row " + $("#row2").val() + ".");
    });
    $("#btnMultiplyRow").click(function () {
        $("#error").text("");
        var idxRow = Number($("#rowIdx").val()) - 1;
        var scalar = RationalNumber.fromString($("#scalar").val().toString());
        if (0 > idxRow || workingMatrix.m < idxRow) {
            $("#error").text("Row index must be greater than 0 and smaller than " + workingMatrix.m);
            return;
        }
        preProcessOperation();
        workingMatrix.multiplyRow(idxRow, scalar);
        postProcessOperation("Multiplied row " + $("#rowIdx").val() + " with scalar" + $("#scalar").val() + ".");
    });
    $("#btnAddRows").click(function () {
        $("#error").text("");
        var idxRow1 = Number($("#addRow1Idx").val()) - 1;
        var idxRow2 = Number($("#addRow2Idx").val()) - 1;
        var scalar1 = RationalNumber.fromString($("#addRow1Mult").val().toString());
        var scalar2 = RationalNumber.fromString($("#addRow2Mult").val().toString());
        if (0 > idxRow1 || workingMatrix.m < idxRow1 || 0 > idxRow2 || workingMatrix.m < idxRow2) {
            $("#error").text("Row index must be greater than 0 and smaller than " + workingMatrix.m);
            return;
        }
        preProcessOperation();
        workingMatrix.addRow1ToRow2(idxRow1, scalar1, idxRow2, scalar2);
        postProcessOperation("Added " + scalar1 + " time(s) row " + $("#addRow1Idx").val() + " to " + scalar2 + " time(s) row " + $("#addRow2Idx").val() + ".");
    });
    $("#btnUndo").click(function () {
        if (undoStack.isEmpty()) {
            return;
        }
        redoStack.push(null != workingMatrix ? workingMatrix.deepCopy() : null);
        workingMatrix = undoStack.pop();
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
        if (redoStack.isEmpty()) {
            return;
        }
        undoStack.push(null != workingMatrix ? workingMatrix.deepCopy() : null);
        workingMatrix = redoStack.pop();
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
        workingMatrix = null;
        setEditOperations();
        setAvailableOperations();
    }
    function preProcessOperation() {
        undoStack.push(null != workingMatrix ? workingMatrix.deepCopy() : null);
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
        MatrixPresenter.printTableMatrix(workingMatrix, div);
        if (workingMatrix.isReducedRowEchelonForm()) {
            toggleButton.append(" Matrix is in reduced row eschelon form.");
        }
        else {
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
        }
    }
    function setAvailableOperations() {
        if (null == workingMatrix) {
            $("#divAugmentMatrix").show();
            $("#divSwitchRows").hide();
            $("#divMultiplyRow").hide();
            $("#divAddRows").hide();
        }
        else {
            $("#divAugmentMatrix").hide();
            $("#divSwitchRows").show();
            $("#divMultiplyRow").show();
            $("#divAddRows").show();
        }
    }
});
//# sourceMappingURL=inverseMatrix.js.map