
import { DecisionTree, Feature, Leaf } from "../structures/DecisionTree";
// DataSet
const dataset: Feature[] = [
	["DK", "January", "February", 58, "M", "A" ],
	["ES", "January", "January", 71, "F", "A" ],
	["ES", "February", "March", 69, "M", "A" ],
	["AE", "February", "February", 60, "M", "D" ],
	["DO", "December", "January", 54, "F", "A" ],
	["ES", "January", "January", 66, "M", "A" ],
	["AE", "February", "March", 66, "F", "A" ],
	["TH", "February", "February", 56, "M", "A" ],
	["TH", "February", "March", 56, "M", "A" ],
	["IT", "December", "January", 67, "M", "D" ],
	["IT", "January", "January", 90, "M", "D" ],
	["NL", "December", "December", 70, "F", "A" ],
	["NL", "December", "January", 70, "F", "A" ],
	["ZA", "January", "January", 69, "F", "A" ],
	["ZA", "January", "January", 69, "F", "A" ],
	["ZA", "January", "January", 69, "F", "A" ],
	["ZA", "January", "January", 69, "F", "A" ],
	["ZA", "January", "January", 69, "F", "A" ],
	["ZA", "January", "January", 69, "F", "A" ],
	["ZA", "January", "January", 51, "F", "A" ],
	["ZA", "January", "January", 51, "F", "A" ],
	["ZA", "January", "January", 51, "F", "A" ],
	["ZA", "January", "January", 51, "F", "A" ],
	["ZA", "January", "January", 51, "F", "A" ],
	["NL", "February", "February", 57, "F", "A" ],
	["MX", "January", "February", 59, "F", "A" ],
	["DE", "January", "January", 80, "M", "A" ],
	["IT", "March", "March", 70, "M", "A" ],
	["ES", "February", "February", 43, "M", "A" ],
	["SR", "March", "March", 57, "M", "D" ],
];

// Types of decison trees:
// - Categorical variable decision tree
// - Continuous variable decision tree
$(document).ready(() => {
	for (const row of dataset) {
		let tr: string = "";
		for (const cell of row) {
			tr += `<td>${cell}</td>`;
		}
		$("#tblDataset").append($(`<tr>${tr}</tr>`));
	}
	const decisionTree: Leaf | DecisionTree = DecisionTree.buildTree(dataset, 5);
	$("#divDecisionTree").append(DecisionTree.printTree(decisionTree));
});