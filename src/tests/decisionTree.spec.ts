// tslint:disable:no-unused-expression
// tslint:disable:eofline
// tslint:disable:max-line-length
import { expect } from "chai";
import { DecisionTree, Feature, FeatureType, Question } from "../structures/DecisionTree";

describe("DecisionTree test suite", () => {
	it("can get a column", () => {
		const dataset: Feature[] = [
				["Green", 3, "Apple"],
				["Yellow", 3, "Apple"],
				["Red", 1, "Grape"],
				["Red", 1, "Grape"],
				["Yellow", 3, "Lemon"],
			];
		const res: Feature = DecisionTree.getColumnFromArray(dataset, 0);
		expect(res).to.contain("Green");
		expect(res).to.contain("Yellow");
		expect(res).to.contain("Red");
		expect(res.length).to.be.equal(5);
	});
	it("can find unique values for a column", () => {
		const dataset: Feature = ["Green", "Yellow", "Red", "Red", "Yellow"];
		const res: Feature = DecisionTree.getUniqueValues(dataset);
		expect(res).to.contain("Green");
		expect(res).to.contain("Yellow");
		expect(res).to.contain("Red");
		expect(res.length).to.be.equal(3);
	});
	it("can calculate gini impurity for a pure set", () => {
		const dataset: Feature[] = [["Apple"], ["Apple"]];
		const res: number = DecisionTree.calculateGiniImpurity(dataset, 0);
		expect(res).to.be.equal(0);
	});
	it("can calculate gini impurity for an impure set", () => {
		const dataset: Feature[] = [["Apple"], ["Orange"]];
		const res: number = DecisionTree.calculateGiniImpurity(dataset, 0);
		expect(res).to.be.equal(0.5);
	});
	it("can calculate gini impurity for an impure set 2", () => {
		const dataset: Feature[] = [["Apple"], ["Orange"], ["Grape"], ["Grapefruit"], ["Blueberry"]];
		const res: number = DecisionTree.calculateGiniImpurity(dataset, 0);
		expect(res).to.be.equal(0.7999999999999998);
	});
	it("can partition data", () => {
		const dataset: Feature[] = [
			["Green", 3, "Apple"],
			["Yellow", 3, "Apple"],
			["Red", 1, "Grape"],
			["Red", 1, "Grape"],
			["Yellow", 3, "Lemon"],
		];
		const [trueBranch, falseBranch]: [Feature[], Feature[]] = DecisionTree.partitionData(dataset, new Question(0, "Red"));
		expect(trueBranch.length).to.be.equal(2);
		expect(trueBranch[0][0]).to.be.equal("Red");
		expect(falseBranch[0][0]).to.be.equal("Green");
		expect(falseBranch.length).to.be.equal(3);
	});
	it("can calculate information gain", () => {
		const dataset: Feature[] = [
			["Green", 3, "Apple"],
			["Yellow", 3, "Apple"],
			["Red", 1, "Grape"],
			["Red", 1, "Grape"],
			["Yellow", 3, "Lemon"],
		];
		const currentImpurity: number = DecisionTree.calculateGiniImpurity(dataset, 2);
		const [trueBranch, falseBranch]: [Feature[], Feature[]] = DecisionTree.partitionData(dataset, new Question(0, "Green"));
		const informationGain: number = DecisionTree.calculateInformationGain(trueBranch, falseBranch, currentImpurity, 2);
		expect(informationGain).to.be.equal(0.1399999999999999);
	});
	it("can calculate the best split", () => {
		const dataset: Feature[] = [
			["Green", 3, "Apple"],
			["Yellow", 3, "Apple"],
			["Red", 1, "Grape"],
			["Red", 1, "Grape"],
			["Yellow", 3, "Lemon"],
		];
		const [informationGain, question]: [number, Question] = DecisionTree.calculateBestSplit(dataset, 2);
		expect(informationGain).to.be.equal(0.37333333333333324);
		expect(question.columnIndex).to.be.equal(1);
		expect(question.featureValue).to.be.equal(3);
	});
});