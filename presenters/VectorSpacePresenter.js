export class VectorSpacePresenter {
    static printVectorSpace(vectorSpace, container) {
        const tableMain = $("<table></table>");
        container.append(tableMain);
        const trMain = $("<tr></tr>");
        tableMain.append(trMain);
        for (let i = 0; i < vectorSpace.m; i++) {
            const tdMain = $("<td></td>");
            trMain.append(tdMain);
            if (i !== vectorSpace.m - 1) {
                const td2Main = $("<td></td>").text(",").css("vertical-align", "bottom").css("padding-left", "5px").css("padding-right", "5px");
                trMain.append(td2Main);
            }
            const table = $("<table></table>").addClass("matrix");
            tdMain.append(table);
            const vector = vectorSpace.elements[i];
            for (let j = 0; j < vector.m; j++) {
                const tr = $("<tr></tr>");
                const td = $("<td></td>").text(vector.elements[j].toString()).addClass("matrixElement");
                tr.append(td);
                table.append(tr);
            }
        }
        container.append("<br />");
    }
}
//# sourceMappingURL=VectorSpacePresenter.js.map