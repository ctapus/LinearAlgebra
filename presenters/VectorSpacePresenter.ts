import { RationalNumber } from "../structures/RationalNumber";
import { Vector } from "../structures/Vector";
import { VectorSpace } from "../structures/VectorSpace";

export class VectorSpacePresenter {
    public static printTableMatrix(vectorSpace: VectorSpace, container: JQuery): void {
        const table: JQuery = $("<table></table>").addClass("matrix");
        for (let i: number = 0; i < vectorSpace.m; i++) {
            const tr: JQuery = $("<tr></tr>");
            for (let j: number = 0; j < vectorSpace.m; j++) {
                const td: JQuery = $("<td></td>").text(vectorSpace.elements[i][j].toString()).addClass("matrixElement");
                tr.append(td);
            }
            table.append(tr);
        }
        container.append(table);
        container.append("<br />");
    }
}