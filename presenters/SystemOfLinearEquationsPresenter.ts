import { SystemOfLinearEquations } from "../structures/SystemOfLinearEquations";

export class SystemOfLinearEquationsPresenter {
	public static printTableSystem(systemOfEquations: SystemOfLinearEquations, container: JQuery): void {
		let table0: JQuery = $("<table></table>");
		let tr0: JQuery = $("<tr></tr>");
		table0.append(tr0);
		let td01: JQuery = $("<td></td>");
		tr0.append(td01);
		let td02: JQuery = $("<td></td>").text("*").css("vertical-align", "middle").css("padding-left", "5px").css("padding-right", "5px");
		tr0.append(td02);
		let td03: JQuery = $("<td></td>");
		tr0.append(td03);
		let td04: JQuery = $("<td></td>").text("=").css("vertical-align", "middle").css("padding-left", "5px").css("padding-right", "5px");
		tr0.append(td04);
		let td05: JQuery = $("<td></td>");
		tr0.append(td05);
		let table: JQuery = $("<table></table>").addClass("matrix");
		for (let i: number = 0; i < systemOfEquations.A.m; i++) {
			let tr: JQuery = $("<tr></tr>");
			for (let j: number = 0; j < systemOfEquations.A.n; j++) {
				let td: JQuery = $("<td></td>").text(systemOfEquations.A.elements[i][j].toString()).css("padding-left", "5px")
				.css("padding-right", "5px");
				tr.append(td);
			}
			table.append(tr);
		}
		td01.append(table);
		table = $("<table></table>").addClass("matrix");
		for (let j: number = 0; j < systemOfEquations.noVariables; j++) {
			let tr: JQuery = $("<tr></tr>");
			let td: JQuery = $("<td></td>").text("x").css("padding-left", "5px").css("padding-right", "5px");
			let sub: JQuery = $("<sub></sub>").text(j.toString());
			td.append(sub);
			tr.append(td);
			table.append(tr);
		}
		td03.append(table);
		table = $("<table></table>").addClass("matrix");
		for (let j: number = 0; j < systemOfEquations.b.m; j++) {
			let tr: JQuery = $("<tr></tr>");
			let td: JQuery = $("<td></td>").text(systemOfEquations.b.elements[j].toString()).css("padding-left", "5px").css("padding-right", "5px");
			tr.append(td);
			table.append(tr);
		}
		td05.append(table);
		container.append(table0);
		container.append("<br />");
	}
}