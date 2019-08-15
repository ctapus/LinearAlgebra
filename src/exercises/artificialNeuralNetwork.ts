class Dendrite {
    public weight: number = Math.random();
}
class Neuron {
    public dendrites: Dendrite[];
    public bias: number = Math.random() - 0.5;
    public value: number;
    public constructor(numberOfDendrites: number) {
        this.dendrites = new Array<Dendrite>(numberOfDendrites); // number of dendrites is equal to the number of neurons in the previous layer
        for(let i: number = 0; i < numberOfDendrites; i++) {
            this.dendrites[i] = new Dendrite();
        }
    }
}
class Layer {
    public neurons: Neuron[];
    public constructor(numberOfNeurons: number, previousLayerNumberOfNeurons: number) {
        this.neurons = new Array<Neuron>(numberOfNeurons);
        for(let i: number = 0; i < numberOfNeurons; i++) {
            this.neurons[i] = new Neuron(previousLayerNumberOfNeurons);
        }
    }
}
class Network {
    public layers: Layer[];
	constructor(n: number | number[]);
	constructor(n: any) {
		if (typeof n === "number") {
			this.layers = new Array<Layer>(n);
		} else if (n instanceof Array) {
			this.layers = new Array<Layer>(n.length);
            this.layers[0] = new Layer(n[0], 0);
			for (let i: number = 1; i < n.length; i++) {
				this.layers[i] = new Layer(n[i], n[i-1]);
			}
		}
	}
}

$(document).ready(() => {

    const network: Network = new Network([5, 4, 3]); // 3 layers with 5, 4 and 3 neurons respectively
    const div: JQuery = $("#divArtificialNeuralNetwork");
    for (const layer of network.layers) {
        const table: JQuery = $("<table  style='float: left; margin: 5px;'></table>");
        div.append(table);
        for (const neuron of layer.neurons) {
            const tr: JQuery = $("<tr></tr>");
            table.append(tr);
            const td: JQuery = $("<td></td>");
            tr.append(td);
            const span: JQuery = $("<span></span>");
            td.append(span);
            span.append("B: " + neuron.bias + ". D: [" + neuron.dendrites.map((value) => { value.weight.toString(); }).join("; ") + "]");
        }
    }
});