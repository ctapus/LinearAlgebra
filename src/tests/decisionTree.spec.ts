// tslint:disable:no-unused-expression
// tslint:disable:eofline
// tslint:disable:max-line-length
import { expect } from "chai";
import { DecisionTree, Feature } from "../structures/DecisionTree";

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
		const dataset: Feature = ["Apple", "Apple"];
		const res: number = DecisionTree.calculateGiniImpurity(dataset);
		expect(res).to.be.equal(0);
	});
	it("can calculate gini impurity for an impure set", () => {
		const dataset: Feature = ["Apple", "Orange"];
		const res: number = DecisionTree.calculateGiniImpurity(dataset);
		expect(res).to.be.equal(0.5);
	});
	it("can calculate gini impurity for an impure set 2", () => {
		const dataset: Feature = ["Apple", "Orange", "Grape", "Grapefruit", "Blueberry"];
		const res: number = DecisionTree.calculateGiniImpurity(dataset);
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
		const res: [Feature[], Feature[]] = DecisionTree.partitionData(dataset, (x: Feature) => x[0] === "Red");
		expect(res[0].length).to.be.equal(2);
		expect(res[0][0][0]).to.be.equal("Red");
		expect(res[1][0][0]).to.be.equal("Green");
		expect(res[1].length).to.be.equal(3);
	});
	it("can calculate information gain", () => {
		const dataset: Feature[] = [
			["Green", 3, "Apple"],
			["Yellow", 3, "Apple"],
			["Red", 1, "Grape"],
			["Red", 1, "Grape"],
			["Yellow", 3, "Lemon"],
		];
		const currentImpurity: number = DecisionTree.calculateGiniImpurity(DecisionTree.getColumnFromArray(dataset, 2));
		const split: [Feature[], Feature[]] = DecisionTree.partitionData(dataset, (x: Feature) => x[0] === "Green");
		const informationGain: number = DecisionTree.calculateInformationGain(DecisionTree.getColumnFromArray(split[0], 2), DecisionTree.getColumnFromArray(split[1], 2), currentImpurity);
		expect(informationGain).to.be.equal(0.1399999999999999);
	});
});