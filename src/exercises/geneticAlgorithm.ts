
export class Individual {
	public static genesAlphabet: string = " ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	public static randomGene(): string {
		const code: number = Math.floor(Math.random() * Individual.genesAlphabet.length);
		return Individual.genesAlphabet[code];
	}
	public fitness: number = 0;
	public genes: string[]; // chromosome
	constructor(individual?: Individual) {
		if (individual === undefined || individual === null) {
			this.genes = new Array(28); // TODO: write an Init or Random method
			for (let i: number = 0; i < this.genes.length; i++) {
				this.genes[i] = Individual.randomGene();
			}
			this.calculateFitness();
		} else {
			this.genes = new Array(individual.genes.length);
			for (let i: number = 0; i < individual.genes.length; i++) {
				this.genes[i] = individual.genes[i];
			}
			this.fitness = individual.fitness;
		}
	}
	public calculateFitness() {
		const target: string = "METHINKS IT IS LIKE A WEASEL";
		this.fitness = 0;
		for (let i: number = 0; i < this.genes.length; i++) {
			if (this.genes[i] === target[i]) {
				this.fitness++;
			}
		}
	}
}

export class Population {
	public maxNumberOfIndividuals: number;
	public individuals: Individual[];
	public generations: number = 0;
	constructor(numberOfIndividuals: number) {
		this.maxNumberOfIndividuals = numberOfIndividuals;
		this.individuals = new Array<Individual>(this.maxNumberOfIndividuals);
		for (let i: number = 0; i < this.maxNumberOfIndividuals; i++) {
			this.individuals[i] = new Individual();
		}
		this.calculateFitness();
	}
	public calculateFitness(): void {
		for (const individual of this.individuals) {
			individual.calculateFitness();
		}
	}
	public applySelection(): number {
		this.individuals.sort((a, b) => a.fitness < b.fitness ? 1 : -1);
		const selectionPoint: number = Math.floor(Math.random() * (this.individuals.length - 3) + 3); // keep at least the first two individuals
		return selectionPoint;
	}
	public applyCrossover(individual1: Individual, individual2: Individual): Individual[] {
		const ret: Individual[] = [new Individual(), new Individual()];
		const crossoverPoint: number =  Math.floor(Math.random() * individual1.genes.length);
		for (let i: number = 0; i < crossoverPoint; i++ ) {
			ret[0].genes[i] = individual1.genes[i];
			ret[1].genes[i] = individual2.genes[i];
		}
		for (let i: number = crossoverPoint; i < individual1.genes.length; i++ ) {
			ret[0].genes[i] = individual2.genes[i];
			ret[1].genes[i] = individual1.genes[i];
		}
		ret[0].calculateFitness();
		ret[1].calculateFitness();
		return ret;
	}
	public applyMutation(individual: Individual): Individual {
		const ret: Individual = new Individual(individual);
		const mutationPoint: number =  Math.floor(Math.random() * individual.genes.length);
		ret.genes[mutationPoint] = Individual.randomGene();
		ret.calculateFitness();
		return ret;
	}
	public nextGeneration(): void {
		this.generations++;
		const selectionPoint: number = this.applySelection();
		let temp: Individual[] = new Array<Individual>();
		for (let i: number = 0; i < this.individuals.length; i += 2) {
			temp = temp.concat(this.applyCrossover(this.individuals[i], this.individuals[i + 1]));
		}
		this.individuals.splice(selectionPoint);
		this.individuals = this.individuals.concat(temp);
		this.individuals.splice(this.maxNumberOfIndividuals);
		temp = new Array<Individual>();
		for (let i: number = 0; i < this.individuals.length; i++) {
			if (Math.floor(Math.random() * 2) + 1  < 7) {
				temp.push(this.applyMutation(this.individuals[i]));
			}
		}
		this.individuals = this.individuals.concat(temp);
		this.calculateFitness();
	}
	public fittestIndividual(): Individual {
		return this.individuals.sort((a, b) => a.fitness < b.fitness ? 1 : -1)[0];
	}
}

document.addEventListener("DOMContentLoaded", () => {
	const printPopulation = (population: Population) => {
		for (let i: number = 0; i < population.individuals.length; i++) {
			(<HTMLInputElement> document.getElementById(`tbIndividualGenes${i}`)).value = population.individuals[i].genes.join("");
			(<HTMLInputElement> document.getElementById(`tbIndividualFitness${i}`)).value = population.individuals[i].fitness.toString();
		}
		(<HTMLInputElement> document.getElementById("tbGeneration")).value = population.generations.toString();
	};
	const testPopulation: Population = new Population(10);
	let tableResults: HTMLTableElement = document.createElement("table");
	tableResults.id = "tablResults";
	tableResults.style.width = "100%";
	for (let i: number = 0; i < testPopulation.individuals.length; i++) {
		let tr: HTMLTableRowElement = document.createElement("tr");
		tableResults.append(tr);
		let td0: HTMLTableCellElement = document.createElement("td");
		tr.append(td0);
		let span: HTMLSpanElement = document.createElement("span");
		span.innerText = `Individual ${i}`;
		td0.append(span);
		let td1: HTMLTableCellElement = document.createElement("td");
		tr.append(td1);
		let tbIndividualGenes: HTMLInputElement = document.createElement("input");
		tbIndividualGenes.id = `tbIndividualGenes${i}`;
		tbIndividualGenes.style.width = "100%";
		td1.append(tbIndividualGenes);
		let td2: HTMLTableCellElement = document.createElement("td");
		tr.append(td2);
		let tbIndividualFitness: HTMLInputElement = document.createElement("input");
		tbIndividualFitness.id = `tbIndividualFitness${i}`;
		tbIndividualFitness.style.width = "40px";
		tbIndividualFitness.style.textAlign = "right";
		td2.append(tbIndividualFitness);
	}
	(<HTMLDivElement> document.getElementById("divResult")).append(tableResults);
	let divGeneration: HTMLDivElement = document.createElement("div");
	let spanGeneration: HTMLSpanElement = document.createElement("span");
	spanGeneration.innerText = "Generation ";
	divGeneration.append(spanGeneration);
	let tbGeneration: HTMLInputElement = document.createElement("input");
	tbGeneration.id = "tbGeneration";
	tbGeneration.style.width = "40px";
	tbGeneration.style.textAlign = "right";
	divGeneration.append(tbGeneration);
	(<HTMLDivElement> document.getElementById("divResult")).append(divGeneration);
	let timerId: number = 0;
	document.getElementById("btnRun").addEventListener("click", () => {
		timerId = window.setInterval(() => {
			printPopulation(testPopulation);
			testPopulation.nextGeneration();
			if (testPopulation.fittestIndividual().fitness === 28) {
				clearInterval(timerId);
			}
		}, 200);
	});
	document.getElementById("btnStop").addEventListener("click", () => {
		if (timerId !== 0) {
			clearInterval(timerId);
		}
	});
});