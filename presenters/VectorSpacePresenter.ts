import { RationalNumber } from "../structures/RationalNumber";
import { Vector } from "../structures/Vector";
import { VectorSpace } from "../structures/VectorSpace";

export class VectorSpacePresenter {
    public static printVectorSpace(vectorSpace: VectorSpace, container: JQuery): void {
        const table: JQuery = $("<table></table>").addClass("matrix");
        container.append(table);
        container.append("<br />");
        for (let i: number = 0; i < vectorSpace.m; i++) {
            const tr: JQuery = $("<tr></tr>");
            const vector: Vector = vectorSpace.elements[i];
            for (let j: number = 0; j < vector.m; j++) {
                const td: JQuery = $("<td></td>").text(vector.elements[j].toString()).addClass("matrixElement");
                tr.append(td);
            }
            table.append(tr);
        }
    }
}