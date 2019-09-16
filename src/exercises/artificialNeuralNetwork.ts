class Dendrite {
	public weight: number;
	public neuron: Neuron;
	public constructor(neuron: Neuron) {
		this.weight = Math.random();
		this.neuron = neuron;
	}
}
class Neuron {
	public dendrites: Dendrite[];
	public bias: number = Math.random() - 0.5;
	public value: number;
	public constructor(previousLayer: Layer) {
		if (previousLayer === null) {
			this.dendrites = new Array<Dendrite>();
			return;
		}
		this.dendrites = new Array<Dendrite>(previousLayer.neurons.length); // number of dendrites is equal to the number of neurons in the previous layer
		for (let i: number = 0; i < previousLayer.neurons.length; i++) {
			this.dendrites[i] = new Dendrite(previousLayer.neurons[i]);
		}
	}
	public calculate(): void {
		if (this.dendrites.length === 0) {
			return;
		}
		this.value = this.activate(this.bias + this.dendrites.map((x) => x.weight * x.neuron.value).reduce((acc, current) => acc + current));
	}
	private activate(value: number): number {
		return Math.tanh(value);
	}
}
class Layer {
	public neurons: Neuron[];
	public constructor(numberOfNeurons: number, previousLayer: Layer) {
		this.neurons = new Array<Neuron>(numberOfNeurons);
		for (let i: number = 0; i < numberOfNeurons; i++) {
			this.neurons[i] = new Neuron(previousLayer);
		}
	}
	public calculate(): void {
		for (const neuron of this.neurons) {
			neuron.calculate();
		}
	}
}
class Network {
	public layers: Layer[];
	public inputLayer: Layer;
	public outputLayer: Layer;
	public fitness: number;
	constructor(n: number | number[]);
	constructor(n: any) {
		if (typeof n === "number") {
			this.layers = new Array<Layer>(n);
		} else if (n instanceof Array) {
			this.layers = new Array<Layer>(n.length);
			this.layers[0] = new Layer(n[0], null);
			for (let i: number = 1; i < n.length; i++) {
				this.layers[i] = new Layer(n[i], this.layers[i - 1]);
			}
		}
		this.inputLayer = this.layers[0];
		this.outputLayer = this.layers[this.layers.length - 1];
	}
	public feedForward(inputs: number[]): number[] {
		if (inputs.length !== this.inputLayer.neurons.length) {
			throw new Error("Mismatch between inputs size and inputLayer size!");
		}
		for (let i: number = 0; i < inputs.length; i++) {
			this.inputLayer.neurons[i].value = inputs[i];
		}
		for (const layer of this.layers) {
			layer.calculate();
		}
		return this.outputLayer.neurons.map((x) => x.value);
	}
	public backPropagate(inputs: number[], expected: number[]) {
		const outputs: number[] = this.feedForward(inputs);
		throw new Error("Not implemented!");
	}
}

$(document).ready(() => {
		const network: Network = new Network([5, 4, 3]); // 3 layers with 5, 4 and 3 neurons respectively
		const outputs: number[] = network.feedForward([1, .123, 1.12, 1.56, .89]);
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
						span.append("<strong>V: " + neuron.value + "</strong><br/> B: " + neuron.bias + "<br/> D: [" + neuron.dendrites.map((x) => x.weight.toString()).join("; ") + "]");
				}
		}
});