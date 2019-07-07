
export class Individual {
    public static genesAlphabet: string = " ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    public fitness: number = 0;
    public genes: string[]; // chromosome
    public static randomGene(): string {
        let code: number = Math.floor(Math.random() * Individual.genesAlphabet.length);
        return Individual.genesAlphabet[code];
    }
    constructor(individual?: Individual) {
        if( individual === undefined || individual === null) {
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
		for (let i:number = 0; i < this.genes.length; i++) {
            if(this.genes[i] === target[i]) {
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
		for (let i:number = 0; i < this.maxNumberOfIndividuals; i++) {
            this.individuals[i] = new Individual();
        }
        this.calculateFitness();
    }
    public calculateFitness(): void {
		for (let individual of this.individuals) {
            individual.calculateFitness();
        }
    }
    public applySelection(): number {
        this.individuals.sort((a, b) => a.fitness < b.fitness ? 1 : -1)[0];
        const selectionPoint: number = Math.floor(Math.random() * (this.individuals.length - 3) + 3);// keep at least the first two individuals
        return selectionPoint;
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
        ret[0].calculateFitness();
        ret[1].calculateFitness();
        return ret;
    }
    public applyMutation(individual: Individual): Individual {
        let ret: Individual = new Individual(individual);
        const mutationPoint: number =  Math.floor(Math.random() * individual.genes.length);
        ret.genes[mutationPoint] = Individual.randomGene();
        ret.calculateFitness();
        return ret;
    }
    public nextGeneration():void {
        this.generations++;
        let selectionPoint: number = this.applySelection();
        let temp: Individual[] = new Array<Individual>();
        for(let i:number = 0; i < this.individuals.length; i+=2) {
            temp = temp.concat(this.applyCrossover(this.individuals[i], this.individuals[i + 1]));
        }
        this.individuals.splice(selectionPoint);
        this.individuals = this.individuals.concat(temp);
        this.individuals.splice(this.maxNumberOfIndividuals);
        temp = new Array<Individual>();
        for(let i: number = 0; i < this.individuals.length; i++) {
            if(Math.floor(Math.random() * 2) + 1  < 7) {
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

$(document).ready(() => {
    const printPopulation = (population: Population) => {
        for (let i: number = 0; i < population.individuals.length; i++) {
            $(`#tbIndividualGenes${i}`).val(population.individuals[i].genes.join(""));
            $(`#tbIndividualFitness${i}`).val(population.individuals[i].fitness);
        }
        $("#tbGeneration").val(population.generations);
    }
    const testPopulation: Population = new Population(10);
    let tableResults: string = `<table id="tablResults" style="width: 100%">`;
    for (let i: number = 0; i < testPopulation.individuals.length; i++) {
        tableResults += `<tr><td><span>Individual ${i} </span></td>
        <td><input type="text" id="tbIndividualGenes${i}" style="width: 100%" /></td>
        <td><input type="text" id="tbIndividualFitness${i}" style="width: 40px; text-align: right" /></td>`;
    }
    tableResults += `</table>`;
    $("#divResult").append(tableResults);
    $("#divResult").append(`<div><span>Generation </span><input type="text" id="tbGeneration" style="width: 40px; text-align: right" /></div>`);
    let timerId: number = 0;
	$("#btnRun").click(() => {
        timerId = setInterval(() => {
            printPopulation(testPopulation);
            testPopulation.nextGeneration();
            if (testPopulation.fittestIndividual().fitness === 28) {
                clearInterval(timerId);
            }
        }, 200);
    });
	$("#btnStop").click(() => {
        if(timerId !== 0) {
            clearInterval(timerId);
        }
    });
});