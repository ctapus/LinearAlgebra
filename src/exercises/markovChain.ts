class MarkovState {
	public name: string;
	public probability: number;
}

class MarkovChain {
	public transitions: MarkovState[][];
}

$(document).ready(() => {
	const markov: MarkovChain = new MarkovChain();
	const div: JQuery = $("#divMarkovChain");
});