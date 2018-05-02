export class VectorSpacePresenter {
    static printVectorSpace(vectorSpace, container) {
        console.log(vectorSpace);
        const table = $("<table></table>").addClass("matrix");
        container.append(table);
        container.append("<br />");
        for (let i = 0; i < vectorSpace.m; i++) {
            const tr = $("<tr></tr>");
            const vector = vectorSpace.elements[i];
            for (let j = 0; j < vector.m; j++) {
                const td = $("<td></td>").text(vector.elements[j].toString()).addClass("matrixElement");
                tr.append(td);
            }
            table.append(tr);
        }
    }
}
//# sourceMappingURL=VectorSpacePresenter.js.map