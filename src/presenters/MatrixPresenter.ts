import { Matrix } from "../structures/Matrix";

export class MatrixPresenter {
	public static printTableMatrix(matrix: Matrix, container: HTMLDivElement): void {
		let rowEchelonForm: boolean = matrix.isRowEchelonForm();
		let reducedRowEchelonForm: boolean = rowEchelonForm ? matrix.isReducedRowEchelonForm() : false;
		let table: HTMLTableElement = document.createElement("table");
		table.className = "matrix";
		if (reducedRowEchelonForm) {
			table.className = "reducedRowEchelonMatrix";
		} else if (rowEchelonForm) {
			table.className = "rowEchelonMatrix";
		}
		for (let i:number = 0; i < matrix.m; i++) {
			let tr: HTMLTableRowElement = document.createElement("tr");
			for (let j: number = 0; j < matrix.n; j++) {
				let td: HTMLTableCellElement = document.createElement("td");
				td.innerText = matrix.elements[i][j].toString();
				td.className = "matrixElement";
				if (reducedRowEchelonForm && j === i) { td.className = "pivotElement"; }
				tr.append(td);
			}
			table.append(tr);
		}
		container.append(table);
		container.append(document.createElement("br"));
	}
	public static printMatrixEquality(matrix1: Matrix, opeartor: string, matrix2: Matrix, result: Matrix, container: HTMLDivElement): void {
		let table: HTMLTableElement = document.createElement("table");
		let tr0: HTMLTableRowElement = document.createElement("tr");
		table.append(tr0);
		let td01: HTMLTableCellElement = document.createElement("td");
		tr0.append(td01);
		let td02: HTMLTableCellElement = document.createElement("td");
		td02.innerText = opeartor;
		td02.style.verticalAlign = "middle";
		td02.style.paddingLeft = "5px";
		td02.style.paddingRight = "5px";
		tr0.append(td02);
		let td03: HTMLTableCellElement = document.createElement("td");
		tr0.append(td03);
		let td04: HTMLTableCellElement = document.createElement("td");
		td04.innerText = "=";
		td04.style.verticalAlign = "middle";
		td04.style.paddingLeft = "5px";
		td04.style.paddingRight = "5px";
		tr0.append(td04);
		let td05: HTMLTableCellElement = document.createElement("td");
		tr0.append(td05);
		let table1: HTMLTableElement = document.createElement("table");
		table1.className = "matrix";
		for (let i: number = 0; i < matrix1.m; i++) {
			let tr: HTMLTableRowElement = document.createElement("tr");
			for (let j: number = 0; j < matrix1.n; j++) {
				let td: HTMLTableCellElement = document.createElement("td");
				td.innerText = matrix1.elements[i][j].toString();
				td.style.paddingLeft = "5px";
				td.style.paddingRight = "5px";
				tr.append(td);
			}
			table1.append(tr);
		}
		td01.append(table1);
		table1 = document.createElement("table");
		table1.className = "matrix";
		for (let i: number = 0; i < matrix2.m; i++) {
			let tr: HTMLTableRowElement = document.createElement("tr");
			for (let j: number = 0; j < matrix2.n; j++) {
				let td: HTMLTableCellElement = document.createElement("td");
				td.innerText = matrix2.elements[i][j].toString();
				td.style.paddingLeft = "5px";
				td.style.paddingRight = "5px";
				tr.append(td);
			}
			table1.append(tr);
		}
		td03.append(table1);
		table1 = document.createElement("table");
		table1.className = "matrix";
		for (let i: number = 0; i < result.m; i++) {
			let tr: HTMLTableRowElement = document.createElement("tr");
			for (let j: number = 0; j < result.n; j++) {
				let td: HTMLTableCellElement = document.createElement("td");
				td.innerText = result.elements[i][j].toString();
				td.style.paddingLeft = "5px";
				td.style.paddingRight = "5px";
				tr.append(td);
			}
			table1.append(tr);
		}
		td05.append(table1);
		container.append(table);
		container.append(document.createElement("br"));
	}
	public static printMatrixEquality2(matrix1: Matrix, opeartor1: string, matrix2: Matrix, matrix3: Matrix, opeartor2: string, matrix4: Matrix, container: HTMLDivElement): void {
		let table: HTMLTableElement = document.createElement("table");
		let tr0: HTMLTableRowElement = document.createElement("tr");
		table.append(tr0);
		let td01: HTMLTableCellElement = document.createElement("td");
		tr0.append(td01);
		let td02: HTMLTableCellElement = document.createElement("td");
		td02.innerText = opeartor1;
		td02.style.verticalAlign = "middle";
		td02.style.paddingLeft = "5px";
		td02.style.paddingRight = "5px";
		tr0.append(td02);
		let td03: HTMLTableCellElement = document.createElement("td");
		tr0.append(td03);
		let td04: HTMLTableCellElement = document.createElement("td");
		td04.innerText = "=";
		td04.style.verticalAlign = "middle";
		td04.style.paddingLeft = "5px";
		td04.style.paddingRight = "5px";
		tr0.append(td04);
		let td05: HTMLTableCellElement = document.createElement("td");
		tr0.append(td05);
		let td06: HTMLTableCellElement = document.createElement("td");
		td06.innerText = opeartor2;
		td06.style.verticalAlign = "middle";
		td06.style.paddingLeft = "5px";
		td06.style.paddingRight = "5px";
		tr0.append(td06);
		let td07: HTMLTableCellElement = document.createElement("td");
		tr0.append(td07);
		let table1: HTMLTableElement = document.createElement("table");
		table1.className = "matrix";
		for (let i: number = 0; i < matrix1.m; i++) {
			let tr: HTMLTableRowElement = document.createElement("tr");
			for (let j: number = 0; j < matrix1.n; j++) {
				let td: HTMLTableCellElement = document.createElement("td");
				td.innerText = matrix1.elements[i][j].toString();
				td.style.paddingLeft = "5px";
				td.style.paddingRight = "5px";
				tr.append(td);
			}
			table1.append(tr);
		}
		td01.append(table1);
		table1 = document.createElement("table");
		table1.className = "matrix";
		for (let i: number = 0; i < matrix2.m; i++) {
			let tr: HTMLTableRowElement = document.createElement("tr");
			for (let j: number = 0; j < matrix2.n; j++) {
				let td: HTMLTableCellElement = document.createElement("td");
				td.innerText = matrix2.elements[i][j].toString();
				td.style.paddingLeft = "5px";
				td.style.paddingRight = "5px";
				tr.append(td);
			}
			table1.append(tr);
		}
		td03.append(table1);
		table1 = document.createElement("table");
		table1.className = "matrix";
		for (let i: number = 0; i < matrix3.m; i++) {
			let tr: HTMLTableRowElement = document.createElement("tr");
			for (let j: number = 0; j < matrix3.n; j++) {
				let td: HTMLTableCellElement = document.createElement("td");
				td.innerText = matrix3.elements[i][j].toString();
				td.style.paddingLeft = "5px";
				td.style.paddingRight = "5px";
				tr.append(td);
			}
			table1.append(tr);
		}
		td05.append(table1);
		table1 = document.createElement("table");
		table1.className = "matrix";
		for (let i: number = 0; i < matrix4.m; i++) {
			let tr: HTMLTableRowElement = document.createElement("tr");
			for (let j: number = 0; j < matrix4.n; j++) {
				let td: HTMLTableCellElement = document.createElement("td");
				td.innerText = matrix4.elements[i][j].toString();
				td.style.paddingLeft = "5px";
				td.style.paddingRight = "5px";
				tr.append(td);
			}
			table1.append(tr);
		}
		td07.append(table1);
		container.append(table);
		container.append(document.createElement("br"));
	}
}