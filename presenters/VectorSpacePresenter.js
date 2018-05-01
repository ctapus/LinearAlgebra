export class VectorSpacePresenter {
    static printTableMatrix(vectorSpace, container) {
        const table = $("<table></table>").addClass("matrix");
        for (let i = 0; i < vectorSpace.m; i++) {
            const tr = $("<tr></tr>");
            for (let j = 0; j < vectorSpace.m; j++) {
                const td = $("<td></td>").text(vectorSpace.elements[i][j].toString()).addClass("matrixElement");
                tr.append(td);
            }
            table.append(tr);
        }
        container.append(table);
        container.append("<br />");
    }
}
//# sourceMappingURL=VectorSpacePresenter.js.map