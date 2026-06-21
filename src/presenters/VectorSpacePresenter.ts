import { Vector } from "../structures/Vector";
import { VectorSpace } from "../structures/VectorSpace";

export class VectorSpacePresenter {
    public static printVectorSpace(vectorSpace: VectorSpace, container: HTMLDivElement): void {
		let tableMain: HTMLTableElement = document.createElement("table");
        container.append(tableMain);
        const trMain: HTMLTableRowElement = document.createElement("tr");
        tableMain.append(trMain);
        for (let i: number = 0; i < vectorSpace.m; i++) {
            const tdMain: HTMLTableCellElement = document.createElement("td");
            trMain.append(tdMain);
            if (i !== vectorSpace.m - 1) {
                const td2Main: HTMLTableCellElement = document.createElement("td");
                td2Main.innerText = ",";
                td2Main.style.verticalAlign = "bottom";
                td2Main.style.paddingLeft = "5px";
                td2Main.style.paddingRight = "5px";
                trMain.append(td2Main);
            }
            const table: HTMLTableElement = document.createElement("table");
            table.classList.add("matrix");
            tdMain.append(table);
            const vector: Vector = vectorSpace.elements[i];
            for (let j: number = 0; j < vector.m; j++) {
                const tr: HTMLTableRowElement = document.createElement("tr");
                const td: HTMLTableCellElement = document.createElement("td");
                td.innerText = vector.elements[j].toString();
                td.classList.add("matrixElement");
                tr.append(td);
                table.append(tr);
            }
        }
        const br: HTMLElement = document.createElement("br");
        container.append(br);
    }
}