class MarkovState {
	public name: string;
	public probability: number;
}

class MarkovChain {
	public transitions: MarkovState[][];
}

document.addEventListener("DOMContentLoaded", () => {
	const markov: MarkovChain = new MarkovChain();
	const div: HTMLDivElement = <HTMLDivElement> document.getElementById("divMarkovChain");
});