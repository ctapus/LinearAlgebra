export type FeatureType = string | number;
export type Feature = FeatureType[];
export class Question {
	public readonly columnIndex: number;
	public readonly featureValue: FeatureType;
	constructor(columnIndex: number, featureValue: FeatureType) {
		this.columnIndex = columnIndex;
		this.featureValue = featureValue;
	}
	public match(feature: FeatureType[]): boolean {
		switch (typeof this.featureValue) {
			case "number": return feature[this.columnIndex] >= this.featureValue;
			case "string": return feature[this.columnIndex] === this.featureValue;
		}
	}
	public toString = (): string => {
		return `Column ${this.columnIndex} is equal to ${this.featureValue}`;
	}
}
export class Leaf {
	public readonly predictions: { [key: string]: number };
	constructor(predictions: { [key: string]: number }) {
		this.predictions = predictions;
	}
	public toString = (): string => {
		let ret: string = "";
		let total: number = 0;
		for (let key in this.predictions) {
			total += this.predictions[key];
		}
		for (let key in this.predictions) {
			ret += `'${key}': ${this.predictions[key]*100/total}%; `;
		}
		return ret.slice(0, ret.length - 2);
	}
}
export class DecisionTree {
	public static getUniqueValues(data: Feature): Feature {
		const res = new Set(data);
		return Array.from(res.values());
	}
	public static getColumnFromArray(data: Feature[], columnIndex: number): Feature {
		if (data === null || data.length === 0) {
			return null;
		}
		return data.map((x) => x[columnIndex]);
	}
	public static partitionData(dataset: Feature[], question: Question): [Feature[], Feature[]] {
		const trueBranch: Feature[] = new Array<Feature>();
		const falseBranch: Feature[] = new Array<Feature>();
		for (const x of dataset) {
			if (question.match(x)) {
				trueBranch.push(x);
			} else {
				falseBranch.push(x);
			}
		}
		return [trueBranch, falseBranch];
	}
	public static getClassesCount(dataset: Feature[], labelsColumnIndex: number): { [key: string]: number } {
		/**
		 * @remarks
		 * Gets the probability of each type of example in a dataset
		 */
		const dictionary: { [key: string]: number } = {};
		for (const row of dataset) {
			const label: FeatureType = row[labelsColumnIndex];
			if (!dictionary.hasOwnProperty(label)) {
				dictionary[label] = 1;
			} else {
				dictionary[label] ++;
			}
		}
		return dictionary;
	}
	public static calculateGiniImpurity(dataset: Feature[], labelsColumnIndex: number): number {
		/**
		 * @remarks
		 * Gini impurity is a measure of how often a randomly chosen element from the set would be incorrectly labeled
		 * if it was randomly labeled according to the distribution of labels in the subset
		 */
		const dictionary: { [key: string]: number } = this.getClassesCount(dataset, labelsColumnIndex);
		let giniImpurity: number = 1;
		for (const key of Object.keys(dictionary)) {
			const value: number = dictionary[key];
			const pi: number = value / dataset.length;
			giniImpurity -= Math.pow(pi, 2);
		}
		return giniImpurity;
	}
	public static calculateEntropy(dataset: Feature[], labelsColumnIndex: number): number {
		const dictionary: { [key: string]: number } = this.getClassesCount(dataset, labelsColumnIndex);
		let entropy: number = 0;
		for (const key of Object.keys(dictionary)) {
			const value: number = dictionary[key];
			const pi: number = value / dataset.length;
			entropy -= pi * Math.log2(pi);
		}
		return entropy;
	}
	public static calculateInformationGain(left: Feature[], right: Feature[], currentImpurity: number, labelsColumnIndex: number): number {
		/**
		 * @remarks
		 * The uncertainty of the starting node, minus the weighted impurity of two child nodes
		 */
		const p: number = left.length / (left.length + right.length);
		return currentImpurity - p * this.calculateGiniImpurity(left, labelsColumnIndex) - (1 - p) * this.calculateGiniImpurity(right, labelsColumnIndex);
	}
	public static calculateBestSplit(dataset: Feature[], labelsColumnIndex: number): [number, Question] {
		// TODO: refactor the labelsColumnIndex
		/**
		 * @remarks
		 * Find the best question to ask by iterating over every feature / value and calculating the information gain
		 */
		let bestInformationGain: number = 0;
		let bestQuestion: Question = null;
		const currentUncertainty: number = this.calculateGiniImpurity(dataset, labelsColumnIndex);
		for (let colIdx = 0;  colIdx < dataset.length; colIdx++) {
			if (colIdx === labelsColumnIndex) {
				continue;
			}
			const values: Feature = this.getUniqueValues(this.getColumnFromArray(dataset, colIdx));
			for (const currentValue of values) {
				const question: Question = new Question(colIdx, currentValue);
				const [trueBranch, falseBranch]: [Feature[], Feature[]] = this.partitionData(dataset, question);
				if (trueBranch.length === 0 || falseBranch.length === 0) {
					continue;
				}
				const informationGain: number = this.calculateInformationGain(trueBranch, falseBranch, currentUncertainty, labelsColumnIndex);
				if (informationGain >= bestInformationGain) {
					bestInformationGain = informationGain;
					bestQuestion = question;
				}
			}
		}
		return [bestInformationGain, bestQuestion];
	}
	public static buildTree(dataset: Feature[], labelsColumnIndex: number): Leaf | DecisionTree {
		const [gain, question]: [number, Question] = this.calculateBestSplit(dataset, labelsColumnIndex);
		if (gain === 0) {
			return new Leaf(this.getClassesCount(dataset, labelsColumnIndex));
		}
		const [left, right]: [Feature[], Feature[]] = this.partitionData(dataset, question);
		const trueBranch: Leaf | DecisionTree = this.buildTree(left, labelsColumnIndex);
		const falseBranch: Leaf | DecisionTree = this.buildTree(right, labelsColumnIndex);
		return new DecisionTree(question, trueBranch, falseBranch);
	}
	public static classify(row: Feature, node: Leaf | DecisionTree): { [key: string]: number } {
		if (node instanceof Leaf) {
			return node.predictions;
		}
		if (node.question.match(row)) {
			return this.classify(row, node.trueBranch);
		} else {
			return this.classify(row, node.falseBranch);
		}
	}
	public static printTree(node: Leaf | DecisionTree): string {
		let ret: string = "";
		if (node instanceof Leaf) {
			return `<div style="margin-left: 20px">Predict ${node.toString()}</div>`;
		}
		ret += `<div style="margin-left: 20px">${node.question.toString()}`;
		ret += `<div style="margin-left: 20px">TRUE:<div>${this.printTree(node.trueBranch)}</div></div>`;
		ret += `<div style="margin-left: 20px">FALSE:<div>${this.printTree(node.falseBranch)}</div></div>`;
		ret += `</div>`;
		return ret;
	}
	public readonly question: Question;
	public readonly trueBranch: Leaf | DecisionTree;
	public readonly falseBranch: Leaf | DecisionTree;
	private constructor(question: Question, trueBranch: Leaf | DecisionTree, falseBranch: Leaf | DecisionTree){
		this.question = question;
		this.trueBranch = trueBranch;
		this.falseBranch = falseBranch;
	}
}