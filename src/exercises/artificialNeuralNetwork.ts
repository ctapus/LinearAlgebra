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
	}
	public feedForward(): void {
		for (const layer of this.layers) {
			layer.calculate();
		}
	}
}

$(document).ready(() => {

		const network: Network = new Network([5, 4, 3]); // 3 layers with 5, 4 and 3 neurons respectively
		network.layers[0].neurons[0].value = 1;
		network.layers[0].neurons[1].value = .123;
		network.layers[0].neurons[2].value = 1.12;
		network.layers[0].neurons[3].value = 1.56;
		network.layers[0].neurons[4].value = .89;
		network.feedForward();
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