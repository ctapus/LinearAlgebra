"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SystemOfLinearEquationsPresenter = /** @class */ (function () {
    function SystemOfLinearEquationsPresenter() {
    }
    SystemOfLinearEquationsPresenter.printTableSystem = function (systemOfEquations, container) {
        var table0 = $("<table></table>");
        var tr0 = $("<tr></tr>");
        table0.append(tr0);
        var td01 = $("<td></td>");
        tr0.append(td01);
        var td02 = $("<td></td>").text("*").css("vertical-align", "middle").css("padding-left", "5px").css("padding-right", "5px");
        tr0.append(td02);
        var td03 = $("<td></td>");
        tr0.append(td03);
        var td04 = $("<td></td>").text("=").css("vertical-align", "middle").css("padding-left", "5px").css("padding-right", "5px");
        tr0.append(td04);
        var td05 = $("<td></td>");
        tr0.append(td05);
        var table = $("<table></table>").addClass("matrix");
        for (var i = 0; i < systemOfEquations.A.m; i++) {
            var tr = $("<tr></tr>");
            for (var j = 0; j < systemOfEquations.A.n; j++) {
                var td = $("<td></td>").text(systemOfEquations.A.elements[i][j].toString()).css("padding-left", "5px")
                    .css("padding-right", "5px");
                tr.append(td);
            }
            table.append(tr);
        }
        td01.append(table);
        table = $("<table></table>").addClass("matrix");
        for (var j = 0; j < systemOfEquations.noVariables; j++) {
            var tr = $("<tr></tr>");
            var td = $("<td></td>").text("x").css("padding-left", "5px").css("padding-right", "5px");
            var sub = $("<sub></sub>").text(j.toString());
            td.append(sub);
            tr.append(td);
            table.append(tr);
        }
        td03.append(table);
        table = $("<table></table>").addClass("matrix");
        for (var j = 0; j < systemOfEquations.b.m; j++) {
            var tr = $("<tr></tr>");
            var td = $("<td></td>").text(systemOfEquations.b.elements[j].toString()).css("padding-left", "5px").css("padding-right", "5px");
            tr.append(td);
            table.append(tr);
        }
        td05.append(table);
        container.append(table0);
        container.append("<br />");
    };
    return SystemOfLinearEquationsPresenter;
}());
exports.SystemOfLinearEquationsPresenter = SystemOfLinearEquationsPresenter;
//# sourceMappingURL=SystemOfLinearEquationsPresenter.js.map