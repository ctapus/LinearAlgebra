import { RationalNumber } from "../structures/RationalNumber";
import { Vector } from "../structures/Vector";
import { VectorSpace } from "../structures/VectorSpace";

export class VectorSpacePresenter {
    public static printVectorSpace(vectorSpace: VectorSpace, container: JQuery): void {
        const tableMain: JQuery = $("<table></table>");
        container.append(tableMain);
        const trMain: JQuery = $("<tr></tr>");
        tableMain.append(trMain);
        for (let i: number = 0; i < vectorSpace.m; i++) {
            const tdMain: JQuery = $("<td></td>");
            trMain.append(tdMain);
            if (i !== vectorSpace.m - 1) {
                const td2Main: JQuery = $("<td></td>").text(",").css("vertical-align", "bottom").css("padding-left", "5px").css("padding-right", "5px");
                trMain.append(td2Main);
            }
            const table: JQuery = $("<table></table>").addClass("matrix");
            tdMain.append(table);
            const vector: Vector = vectorSpace.elements[i];
            for (let j: number = 0; j < vector.m; j++) {
                const tr: JQuery = $("<tr></tr>");
                const td: JQuery = $("<td></td>").text(vector.elements[j].toString()).addClass("matrixElement");
                tr.append(td);
                table.append(tr);
            }
        }
        container.append("<br />");
    }
}