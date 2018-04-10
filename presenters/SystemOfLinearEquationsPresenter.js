export class SystemOfLinearEquationsPresenter {
    static printTableSystem(systemOfEquations, container) {
        let table0 = $("<table></table>");
        let tr0 = $("<tr></tr>");
        table0.append(tr0);
        let td01 = $("<td></td>");
        tr0.append(td01);
        let td02 = $("<td></td>").text("*").css("vertical-align", "middle").css("padding-left", "5px").css("padding-right", "5px");
        tr0.append(td02);
        let td03 = $("<td></td>");
        tr0.append(td03);
        let td04 = $("<td></td>").text("=").css("vertical-align", "middle").css("padding-left", "5px").css("padding-right", "5px");
        tr0.append(td04);
        let td05 = $("<td></td>");
        tr0.append(td05);
        let table = $("<table></table>").addClass("matrix");
        for (let i = 0; i < systemOfEquations.A.m; i++) {
            let tr = $("<tr></tr>");
            for (let j = 0; j < systemOfEquations.A.n; j++) {
                let td = $("<td></td>").text(systemOfEquations.A.elements[i][j].toString()).css("padding-left", "5px")
                    .css("padding-right", "5px");
                tr.append(td);
            }
            table.append(tr);
        }
        td01.append(table);
        table = $("<table></table>").addClass("matrix");
        for (let j = 0; j < systemOfEquations.noVariables; j++) {
            let tr = $("<tr></tr>");
            let td = $("<td></td>").text("x").css("padding-left", "5px").css("padding-right", "5px");
            let sub = $("<sub></sub>").text(j.toString());
            td.append(sub);
            tr.append(td);
            table.append(tr);
        }
        td03.append(table);
        table = $("<table></table>").addClass("matrix");
        for (let j = 0; j < systemOfEquations.b.m; j++) {
            let tr = $("<tr></tr>");
            let td = $("<td></td>").text(systemOfEquations.b.elements[j].toString()).css("padding-left", "5px").css("padding-right", "5px");
            tr.append(td);
            table.append(tr);
        }
        td05.append(table);
        container.append(table0);
        container.append("<br />");
    }
}
//# sourceMappingURL=SystemOfLinearEquationsPresenter.js.map