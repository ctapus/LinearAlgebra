export class SystemOfLinearEquationsPresenter {
    static printTableSystem(systemOfEquations, container) {
        const table0 = $("<table></table>");
        const tr0 = $("<tr></tr>");
        table0.append(tr0);
        const td01 = $("<td></td>");
        tr0.append(td01);
        const td02 = $("<td></td>").text("*").css("vertical-align", "middle").css("padding-left", "5px").css("padding-right", "5px");
        tr0.append(td02);
        const td03 = $("<td></td>");
        tr0.append(td03);
        const td04 = $("<td></td>").text("=").css("vertical-align", "middle").css("padding-left", "5px").css("padding-right", "5px");
        tr0.append(td04);
        const td05 = $("<td></td>");
        tr0.append(td05);
        let table = $("<table></table>").addClass("matrix");
        for (let i = 0; i < systemOfEquations.A.m; i++) {
            const tr = $("<tr></tr>");
            for (let j = 0; j < systemOfEquations.A.n; j++) {
                const td = $("<td></td>").text(systemOfEquations.A.elements[i][j].toString()).css("padding-left", "5px")
                    .css("padding-right", "5px");
                tr.append(td);
            }
            table.append(tr);
        }
        td01.append(table);
        table = $("<table></table>").addClass("matrix");
        for (let j = 0; j < systemOfEquations.noVariables; j++) {
            const tr = $("<tr></tr>");
            const td = $("<td></td>").text("x").css("padding-left", "5px").css("padding-right", "5px");
            const sub = $("<sub></sub>").text(j.toString());
            td.append(sub);
            tr.append(td);
            table.append(tr);
        }
        td03.append(table);
        table = $("<table></table>").addClass("matrix");
        for (let j = 0; j < systemOfEquations.b.m; j++) {
            const tr = $("<tr></tr>");
            const td = $("<td></td>").text(systemOfEquations.b.elements[j].toString()).css("padding-left", "5px").css("padding-right", "5px");
            tr.append(td);
            table.append(tr);
        }
        td05.append(table);
        container.append(table0);
        container.append("<br />");
    }
}
//# sourceMappingURL=SystemOfLinearEquationsPresenter.js.map