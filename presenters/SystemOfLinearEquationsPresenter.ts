import { SystemOfLinearEquations } from "../structures/SystemOfLinearEquations";

export class SystemOfLinearEquationsPresenter {
	public static printTableSystem(systemOfEquations: SystemOfLinearEquations, container: JQuery): void {
		const table0: JQuery = $("<table></table>");
		const tr0: JQuery = $("<tr></tr>");
		table0.append(tr0);
		const td01: JQuery = $("<td></td>");
		tr0.append(td01);
		const td02: JQuery = $("<td></td>").text("*").css("vertical-align", "middle").css("padding-left", "5px").css("padding-right", "5px");
		tr0.append(td02);
		const td03: JQuery = $("<td></td>");
		tr0.append(td03);
		const td04: JQuery = $("<td></td>").text("=").css("vertical-align", "middle").css("padding-left", "5px").css("padding-right", "5px");
		tr0.append(td04);
		const td05: JQuery = $("<td></td>");
		tr0.append(td05);
		let table: JQuery = $("<table></table>").addClass("matrix");
		for (let i: number = 0; i < systemOfEquations.A.m; i++) {
			const tr: JQuery = $("<tr></tr>");
			for (let j: number = 0; j < systemOfEquations.A.n; j++) {
				const td: JQuery = $("<td></td>").text(systemOfEquations.A.elements[i][j].toString()).css("padding-left", "5px")
				.css("padding-right", "5px");
				tr.append(td);
			}
			table.append(tr);
		}
		td01.append(table);
		table = $("<table></table>").addClass("matrix");
		for (let j: number = 0; j < systemOfEquations.noVariables; j++) {
			const tr: JQuery = $("<tr></tr>");
			const td: JQuery = $("<td></td>").text("x").css("padding-left", "5px").css("padding-right", "5px");
			const sub: JQuery = $("<sub></sub>").text(j.toString());
			td.append(sub);
			tr.append(td);
			table.append(tr);
		}
		td03.append(table);
		table = $("<table></table>").addClass("matrix");
		for (let j: number = 0; j < systemOfEquations.b.m; j++) {
			const tr: JQuery = $("<tr></tr>");
			const td: JQuery = $("<td></td>").text(systemOfEquations.b.elements[j].toString()).css("padding-left", "5px").css("padding-right", "5px");
			tr.append(td);
			table.append(tr);
		}
		td05.append(table);
		container.append(table0);
		container.append("<br />");
	}
}
