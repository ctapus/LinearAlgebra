"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatrixPresenter = /** @class */ (function () {
    function MatrixPresenter() {
    }
    MatrixPresenter.printTableMatrix = function (matrix, container) {
        var rowEchelonForm = matrix.isRowEchelonForm();
        var reducedRowEchelonForm = rowEchelonForm ? matrix.isReducedRowEchelonForm() : false;
        var table = $("<table></table>").addClass("matrix");
        if (reducedRowEchelonForm) {
            table.addClass("reducedRowEchelonMatrix");
        }
        else if (rowEchelonForm) {
            table.addClass("rowEchelonMatrix");
        }
        for (var i = 0; i < matrix.m; i++) {
            var tr = $("<tr></tr>");
            for (var j = 0; j < matrix.n; j++) {
                var td = $("<td></td>").text(matrix.elements[i][j].toString()).addClass("matrixElement");
                if (reducedRowEchelonForm && j === i) {
                    td.addClass("pivotElement");
                }
                tr.append(td);
            }
            table.append(tr);
        }
        container.append(table);
        container.append("<br />");
    };
    MatrixPresenter.printMatrixEquality = function (matrix1, opeartor, matrix2, result, container) {
        var table = $("<table></table>");
        var tr0 = $("<tr></tr>");
        table.append(tr0);
        var td01 = $("<td></td>");
        tr0.append(td01);
        var td02 = $("<td></td>").text(opeartor).css("vertical-align", "middle").css("padding-left", "5px").css("padding-right", "5px");
        tr0.append(td02);
        var td03 = $("<td></td>");
        tr0.append(td03);
        var td04 = $("<td></td>").text("=").css("vertical-align", "middle").css("padding-left", "5px").css("padding-right", "5px");
        tr0.append(td04);
        var td05 = $("<td></td>");
        tr0.append(td05);
        var table1 = $("<table></table>").addClass("matrix");
        for (var i = 0; i < matrix1.m; i++) {
            var tr = $("<tr></tr>");
            for (var j = 0; j < matrix1.n; j++) {
                var td = $("<td></td>").text(matrix1.elements[i][j].toString()).css("padding-left", "5px").css("padding-right", "5px");
                tr.append(td);
            }
            table1.append(tr);
        }
        td01.append(table1);
        table1 = $("<table></table>").addClass("matrix");
        for (var i = 0; i < matrix2.m; i++) {
            var tr = $("<tr></tr>");
            for (var j = 0; j < matrix2.n; j++) {
                var td = $("<td></td>").text(matrix2.elements[i][j].toString()).css("padding-left", "5px").css("padding-right", "5px");
                tr.append(td);
            }
            table1.append(tr);
        }
        td03.append(table1);
        table1 = $("<table></table>").addClass("matrix");
        for (var i = 0; i < result.m; i++) {
            var tr = $("<tr></tr>");
            for (var j = 0; j < result.n; j++) {
                var td = $("<td></td>").text(result.elements[i][j].toString()).css("padding-left", "5px").css("padding-right", "5px");
                tr.append(td);
            }
            table1.append(tr);
        }
        td05.append(table1);
        container.append(table);
        container.append("<br />");
    };
    MatrixPresenter.printMatrixEquality2 = function (matrix1, opeartor1, matrix2, matrix3, opeartor2, matrix4, container) {
        var table = $("<table></table>");
        var tr0 = $("<tr></tr>");
        table.append(tr0);
        var td01 = $("<td></td>");
        tr0.append(td01);
        var td02 = $("<td></td>").text(opeartor1).css("vertical-align", "middle").css("padding-left", "5px").css("padding-right", "5px");
        tr0.append(td02);
        var td03 = $("<td></td>");
        tr0.append(td03);
        var td04 = $("<td></td>").text("=").css("vertical-align", "middle").css("padding-left", "5px").css("padding-right", "5px");
        tr0.append(td04);
        var td05 = $("<td></td>");
        tr0.append(td05);
        var td06 = $("<td></td>").text(opeartor2).css("vertical-align", "middle").css("padding-left", "5px").css("padding-right", "5px");
        tr0.append(td06);
        var td07 = $("<td></td>");
        tr0.append(td07);
        var table1 = $("<table></table>").addClass("matrix");
        for (var i = 0; i < matrix1.m; i++) {
            var tr = $("<tr></tr>");
            for (var j = 0; j < matrix1.n; j++) {
                var td = $("<td></td>").text(matrix1.elements[i][j].toString()).css("padding-left", "5px").css("padding-right", "5px");
                tr.append(td);
            }
            table1.append(tr);
        }
        td01.append(table1);
        table1 = $("<table></table>").addClass("matrix");
        for (var i = 0; i < matrix2.m; i++) {
            var tr = $("<tr></tr>");
            for (var j = 0; j < matrix2.n; j++) {
                var td = $("<td></td>").text(matrix2.elements[i][j].toString()).css("padding-left", "5px").css("padding-right", "5px");
                tr.append(td);
            }
            table1.append(tr);
        }
        td03.append(table1);
        table1 = $("<table></table>").addClass("matrix");
        for (var i = 0; i < matrix3.m; i++) {
            var tr = $("<tr></tr>");
            for (var j = 0; j < matrix3.n; j++) {
                var td = $("<td></td>").text(matrix3.elements[i][j].toString()).css("padding-left", "5px").css("padding-right", "5px");
                tr.append(td);
            }
            table1.append(tr);
        }
        td05.append(table1);
        table1 = $("<table></table>").addClass("matrix");
        for (var i = 0; i < matrix4.m; i++) {
            var tr = $("<tr></tr>");
            for (var j = 0; j < matrix4.n; j++) {
                var td = $("<td></td>").text(matrix4.elements[i][j].toString()).css("padding-left", "5px").css("padding-right", "5px");
                tr.append(td);
            }
            table1.append(tr);
        }
        td07.append(table1);
        container.append(table);
        container.append("<br />");
    };
    return MatrixPresenter;
}());
exports.MatrixPresenter = MatrixPresenter;
//# sourceMappingURL=MatrixPresenter.js.map