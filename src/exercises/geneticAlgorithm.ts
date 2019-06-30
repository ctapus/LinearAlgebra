
export class Individual {
    public fitness: number = 0;
    public genes: string[];
    public static randomGene(): string {
        return String.fromCharCode("A".charCodeAt(0) + Math.floor(Math.random() * 26));
    }
    constructor() {
        this.genes = new Array(28); // TODO: write an Init or Random method
		for (let i:number = 0; i < this.genes.length; i++) {
            this.genes[i] = Individual.randomGene();
        }
    }
    public calculateFitness() {
        const target: string = "METHINKS IT IS LIKE A WEASEL";
        this.fitness = 0;
		for (let i:number = 0; i < this.genes.length; i++) {
            if(this.genes[i] === target[i]) {
                this.fitness++;
            }
        }
    }
}

export class Population {
    public individuals: Individual[];
    public generations: number = 0;
    constructor(numberOfIndividuals: number) {
        this.individuals = new Array(numberOfIndividuals);
		for (let i:number = 0; i < numberOfIndividuals; i++) {
            this.individuals[i] = new Individual();
        }
        this.calculateFitness();
    }
    public calculateFitness(): void {
		for (let individual of this.individuals) {
            individual.calculateFitness();
        }
    }
    public applySelection(): void {
        const individualsByFitness: Individual[] = this.individuals.sort((a, b) => a.fitness > b.fitness ? 1 : -1);
        const selectionPoint: number =  Math.floor(Math.random() * this.individuals.length);
        this.individuals = individualsByFitness.splice(selectionPoint);
    }
    public applyCrossover(individual1: Individual, individual2: Individual): Individual[] {
        let ret: Individual[] = [new Individual(), new Individual()];
        const crossoverPoint: number =  Math.floor(Math.random() * individual1.genes.length);
        for(let i: number = 0; i < crossoverPoint; i++ ) {
            ret[0].genes[i] = individual1.genes[i];
            ret[1].genes[i] = individual2.genes[i];
        }
        for(let i: number = crossoverPoint; i < individual1.genes.length; i++ ) {
            ret[0].genes[i] = individual2.genes[i];
            ret[1].genes[i] = individual1.genes[i];
        }
        return ret;
    }
    public applyMutation(individual: Individual): void {
        const mutationPoint: number =  Math.floor(Math.random() * individual.genes.length);
        individual.genes[mutationPoint] = Individual.randomGene();
    }
    public nextGeneration():void {
        this.generations++;
        this.applySelection();
        for(let i:number = 0; i < this.individuals.length / 2; i++) {
            this.individuals.concat(this.applyCrossover(this.individuals[i], this.individuals[this.individuals.length - 1]));
        }
        for(let i: number = 0; i < this.individuals.length; i++) {
            if(Math.floor(Math.random() * 2) + 1  < 7) {
                this.applyMutation(this.individuals[i]);
            }
        }
        this.calculateFitness();
    }
    public fittestIndividual(): Individual {
        return this.individuals.sort((a, b) => a.fitness > b.fitness ? 1 : -1)[0];
    }
}

$(document).ready(() => {
    const printPopulation = (population: Population) => {
        for (let i: number = 0; i < population.individuals.length; i++) {
            $(`#tbIndividualGenes${i}`).val(population.individuals[i].genes.join(""));
            $(`#tbIndividualFitness${i}`).val(population.individuals[i].fitness);
        }
        $("#tbGeneration").val(population.generations);
    }
    const testPopulation: Population = new Population(10);
    for (let i: number = 0; i < testPopulation.individuals.length; i++) {
        $("#divResult").append(`<div><input type="text" id="tbIndividualGenes${i}" style="width: 60%" />
        <input type="text" id="tbIndividualFitness${i}" style="width: 40px; text-align: right" /></div>`);
    }
    $("#divResult").append(`<div><span>Generation </span><input type="text" id="tbGeneration" style="width: 40px; text-align: right" /></div>`);
    $("#divResult").append(`<div><input type="button" id="btnRun" value="Run" /></div>`);
	$("#btnRun").click(() => {
        let timerId: number = setInterval(() => {
            printPopulation(testPopulation);
            testPopulation.nextGeneration();
            if (testPopulation.fittestIndividual().fitness > 10) {
                clearInterval(timerId);
            }
        }, 500);
    });
});