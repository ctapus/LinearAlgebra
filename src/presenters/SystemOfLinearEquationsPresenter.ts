import { SystemOfLinearEquations } from "../structures/SystemOfLinearEquations";

export class SystemOfLinearEquationsPresenter {
	public static printTableSystem(systemOfEquations: SystemOfLinearEquations, container: HTMLDivElement): void {
		const table0: HTMLTableElement = document.createElement("table");
        table0.createTHead();
		const tr0: HTMLTableRowElement = table0.tHead.insertRow(-1);
		table0.appendChild(tr0);
		const td01: HTMLTableCellElement = tr0.insertCell(-1);
		tr0.appendChild(td01);
		const td02: HTMLTableCellElement = tr0.insertCell(-1);
		td02.innerText = "*";
		td02.style.verticalAlign = "middle";
		td02.style.paddingLeft = "5px";
		td02.style.paddingRight = "5px";
		tr0.appendChild(td02);
		const td03: HTMLTableCellElement = tr0.insertCell(-1);
		tr0.appendChild(td03);
		const td04: HTMLTableCellElement = tr0.insertCell(-1);
		td04.innerText = "=";
		td04.style.verticalAlign = "middle";
		td04.style.paddingLeft = "5px";
		td04.style.paddingRight = "5px";
		tr0.appendChild(td04);
		const td05: HTMLTableCellElement = tr0.insertCell(-1);
		tr0.appendChild(td05);
		let table: HTMLTableElement = document.createElement("table");
		table.className = "matrix";
        table.createTHead();
		for (let i: number = 0; i < systemOfEquations.A.m; i++) {
			const tr: HTMLTableRowElement = table.tHead.insertRow(-1);
			for (let j: number = 0; j < systemOfEquations.A.n; j++) {
				const td: HTMLTableCellElement = tr.insertCell(-1);
				td.innerText = systemOfEquations.A.elements[i][j].toString();
				td.style.paddingLeft = "5px";
				td.style.paddingRight = "5px";
				tr.append(td);
			}
			table.append(tr);
		}
		td01.append(table);
		table = document.createElement("table");
		table.className = "matrix";
		for (let j: number = 0; j < systemOfEquations.noVariables; j++) {
			const tr: HTMLTableRowElement = table.tHead.insertRow(-1);
			const td: HTMLTableCellElement = tr.insertCell(-1);
			td.innerText = "x";
			td.style.paddingLeft = "5px";
			td.style.paddingRight = "5px";
			const sub: HTMLElement = document.createElement("sub");
			sub.innerText = j.toString();
			td.appendChild(sub);
			tr.append(td);
			table.append(tr);
		}
		td03.append(table);
		table = document.createElement("table");
		table.className = "matrix";
		for (let j: number = 0; j < systemOfEquations.b.m; j++) {
			const tr: HTMLTableRowElement = table.tHead.insertRow(-1);
			const td: HTMLTableCellElement = tr.insertCell(-1);
			td.innerText = systemOfEquations.b.elements[j].toString();
			td.style.paddingLeft = "5px";
			td.style.paddingRight = "5px";
			tr.append(td);
			table.append(tr);
		}
		td05.append(table);
		container.append(table0);
		container.append("<br />");
	}
}
