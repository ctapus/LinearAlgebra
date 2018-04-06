import { Matrix } from "../structures/Matrix";

export class MatrixPresenter {
	public static printTableMatrix(matrix: Matrix, container: JQuery): void {
		let rowEchelonForm: boolean = matrix.isRowEchelonForm();
		let reducedRowEchelonForm: boolean = rowEchelonForm ? matrix.isReducedRowEchelonForm() : false;
		let table: JQuery = $("<table></table>").addClass("matrix");
		if (reducedRowEchelonForm) {
			table.addClass("reducedRowEchelonMatrix");
		} else if (rowEchelonForm) {
			table.addClass("rowEchelonMatrix");
		}
		for (let i:number = 0; i < matrix.m; i++) {
			let tr: JQuery = $("<tr></tr>");
			for (let j: number = 0; j < matrix.n; j++) {
				let td: JQuery = $("<td></td>").text(matrix.elements[i][j].toString()).addClass("matrixElement");
				if (reducedRowEchelonForm && j === i) { td.addClass("pivotElement"); }
				tr.append(td);
			}
			table.append(tr);
		}
		container.append(table);
		container.append("<br />");
	}
	public static printMatrixEquality(matrix1: Matrix, opeartor: string, matrix2: Matrix, result: Matrix, container: JQuery): void {
		let table: JQuery = $("<table></table>");
		let tr0: JQuery = $("<tr></tr>");
		table.append(tr0);
		let td01: JQuery = $("<td></td>");
		tr0.append(td01);
		let td02: JQuery = $("<td></td>").text(opeartor).css("vertical-align", "middle").css("padding-left", "5px").css("padding-right", "5px");
		tr0.append(td02);
		let td03: JQuery = $("<td></td>");
		tr0.append(td03);
		let td04: JQuery = $("<td></td>").text("=").css("vertical-align", "middle").css("padding-left", "5px").css("padding-right", "5px");
		tr0.append(td04);
		let td05: JQuery = $("<td></td>");
		tr0.append(td05);
		let table1: JQuery = $("<table></table>").addClass("matrix");
		for (let i: number = 0; i < matrix1.m; i++) {
			let tr: JQuery = $("<tr></tr>");
			for (let j: number = 0; j < matrix1.n; j++) {
				let td: JQuery = $("<td></td>").text(matrix1.elements[i][j].toString()).css("padding-left", "5px").css("padding-right", "5px");
				tr.append(td);
			}
			table1.append(tr);
		}
		td01.append(table1);
		table1 = $("<table></table>").addClass("matrix");
		for (let i: number = 0; i < matrix2.m; i++) {
			let tr: JQuery = $("<tr></tr>");
			for (let j: number = 0; j < matrix2.n; j++) {
				let td: JQuery = $("<td></td>").text(matrix2.elements[i][j].toString()).css("padding-left", "5px").css("padding-right", "5px");
				tr.append(td);
			}
			table1.append(tr);
		}
		td03.append(table1);
		table1 = $("<table></table>").addClass("matrix");
		for (let i: number = 0; i < result.m; i++) {
			let tr: JQuery = $("<tr></tr>");
			for (let j: number = 0; j < result.n; j++) {
				let td: JQuery = $("<td></td>").text(result.elements[i][j].toString()).css("padding-left", "5px").css("padding-right", "5px");
				tr.append(td);
			}
			table1.append(tr);
		}
		td05.append(table1);
		container.append(table);
		container.append("<br />");
	}
	public static printMatrixEquality2(matrix1: Matrix, opeartor1: string, matrix2: Matrix, matrix3: Matrix,
		 opeartor2: string, matrix4: Matrix, container: JQuery): void {
		let table: JQuery = $("<table></table>");
		let tr0: JQuery = $("<tr></tr>");
		table.append(tr0);
		let td01: JQuery = $("<td></td>");
		tr0.append(td01);
		let td02: JQuery = $("<td></td>").text(opeartor1).css("vertical-align", "middle").css("padding-left", "5px").css("padding-right", "5px");
		tr0.append(td02);
		let td03: JQuery = $("<td></td>");
		tr0.append(td03);
		let td04: JQuery = $("<td></td>").text("=").css("vertical-align", "middle").css("padding-left", "5px").css("padding-right", "5px");
		tr0.append(td04);
		let td05: JQuery = $("<td></td>");
		tr0.append(td05);
		let td06: JQuery = $("<td></td>").text(opeartor2).css("vertical-align", "middle").css("padding-left", "5px").css("padding-right", "5px");
		tr0.append(td06);
		let td07: JQuery = $("<td></td>");
		tr0.append(td07);
		let table1: JQuery = $("<table></table>").addClass("matrix");
		for (let i: number = 0; i < matrix1.m; i++) {
			let tr: JQuery = $("<tr></tr>");
			for (let j: number = 0; j < matrix1.n; j++) {
				let td: JQuery = $("<td></td>").text(matrix1.elements[i][j].toString()).css("padding-left", "5px").css("padding-right", "5px");
				tr.append(td);
			}
			table1.append(tr);
		}
		td01.append(table1);
		table1 = $("<table></table>").addClass("matrix");
		for (let i: number = 0; i < matrix2.m; i++) {
			let tr: JQuery = $("<tr></tr>");
			for (let j: number = 0; j < matrix2.n; j++) {
				let td: JQuery = $("<td></td>").text(matrix2.elements[i][j].toString()).css("padding-left", "5px").css("padding-right", "5px");
				tr.append(td);
			}
			table1.append(tr);
		}
		td03.append(table1);
		table1 = $("<table></table>").addClass("matrix");
		for (let i: number = 0; i < matrix3.m; i++) {
			let tr: JQuery = $("<tr></tr>");
			for (let j: number = 0; j < matrix3.n; j++) {
				let td: JQuery = $("<td></td>").text(matrix3.elements[i][j].toString()).css("padding-left", "5px").css("padding-right", "5px");
				tr.append(td);
			}
			table1.append(tr);
		}
		td05.append(table1);
		table1 = $("<table></table>").addClass("matrix");
		for (let i: number = 0; i < matrix4.m; i++) {
			let tr: JQuery = $("<tr></tr>");
			for (let j: number = 0; j < matrix4.n; j++) {
				let td: JQuery = $("<td></td>").text(matrix4.elements[i][j].toString()).css("padding-left", "5px").css("padding-right", "5px");
				tr.append(td);
			}
			table1.append(tr);
		}
		td07.append(table1);
		container.append(table);
		container.append("<br />");
	}
}