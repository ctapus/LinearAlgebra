type Feature = Array<(string | number)>;
// DataSet
const dataset: Feature[] = [
    ["DK", "January", "February", 58, "M", "A", "February" ],
    ["ES", "January", "January", 71, "F", "A", "January" ],
    ["ES", "February", "March", 69, "M", "A", "March" ],
    ["AE", "February", "February", 60, "M", "D", "February" ],
    ["DO", "December", "January", 54, "F", "A", "January" ],
    ["ES", "January", "January", 66, "M", "A", "January" ],
    ["AE", "February", "March", 66, "F", "A", "March" ],
    ["TH", "February", "February", 56, "M", "A", "March" ],
    ["TH", "February", "March", 56, "M", "A", "March" ],
    ["IT", "December", "January", 67, "M", "D", "January" ],
    ["IT", "January", "January", 90, "M", "D", "January" ],
    ["NL", "December", "December", 70, "F", "A", "January" ],
    ["NL", "December", "January", 70, "F", "A", "January" ],
    ["ZA", "January", "January", 69, "F", "A", "January" ],
    ["ZA", "January", "January", 69, "F", "A", "January" ],
    ["ZA", "January", "January", 69, "F", "A", "January" ],
    ["ZA", "January", "January", 69, "F", "A", "January" ],
    ["ZA", "January", "January", 69, "F", "A", "January" ],
    ["ZA", "January", "January", 69, "F", "A", "January" ],
    ["ZA", "January", "January", 51, "F", "A", "January" ],
    ["ZA", "January", "January", 51, "F", "A", "January" ],
    ["ZA", "January", "January", 51, "F", "A", "January" ],
    ["ZA", "January", "January", 51, "F", "A", "January" ],
    ["ZA", "January", "January", 51, "F", "A", "January" ],
    ["NL", "February", "February", 57, "F", "A", "February" ],
    ["MX", "January", "February", 59, "F", "A", "February" ],
    ["DE", "January", "January", 80, "M", "A", "January" ],
    ["IT", "March", "March", 70, "M", "A", "March" ],
    ["ES", "February", "February", 43, "M", "A", "February" ],
    ["SR", "March", "March", 57, "M", "D", "March" ],
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
    let giniRow: string = "";
    for (let i: number = 0; i < dataset[0].length; i++) {
        const giniImpurity: number = DecisionTree.calculateGiniImpurity(DecisionTree.getColumnFromArray(dataset, i));
        giniRow += `<td>${giniImpurity}</td>`;
    }
    $("#tblDataset").append($(`<tr>${giniRow}</tr>`));
    let entropyRow: string = "";
    for (let i: number = 0; i < dataset[0].length; i++) {
        const entropy: number = DecisionTree.calculateEntropy(DecisionTree.getColumnFromArray(dataset, i));
        entropyRow += `<td>${entropy}</td>`;
    }
    $("#tblDataset").append($(`<tr>${entropyRow}</tr>`));
});

class DecisionTree {
    public Left: DecisionTree;
    public Right: DecisionTree;
    private getUniqueValues<T>(data: T[]): T[] {
        const res = new Set<T>();
        for (const item of data) {
            res.add(item);
        }
        return Array.from(res.values());
    }
    public static getColumnFromArray(data: Feature[], columnIndex: number): Feature {
        if (data === null || data.length === 0) {
            return null;
        }
        return data.map((x) => x[columnIndex]);
    }
    private calculateImpurityScore(data: []): number {// use Gini methos; TODO: allow for more methods
        if (data === null || data.length === 0) {
            return 0;
        }
        
    }

    public static calculateGiniImpurity(feature: Feature): number {
        const dictionary: { [key: string]: number } = {};
        for (const element of feature) {
            if (!dictionary.hasOwnProperty(element)) {
                dictionary[element] = 0;
            }
            else {
                dictionary[element] ++;
            }
        }
        let gini: number = 1;
        for (const key of Object.keys(dictionary)) {
            const value: number = dictionary[key];
            const pi: number = value/feature.length;
            gini -= Math.pow(pi, 2);
        }
        return gini;
    }
    public static calculateEntropy(feature: Feature): number {
        const dictionary: { [key: string]: number } = {};
        for (const element of feature) {
            if (!dictionary.hasOwnProperty(element)) {
                dictionary[element] = 0;
            }
            else {
                dictionary[element] ++;
            }
        }
        let entropy: number = 0;
        for (const key of Object.keys(dictionary)) {
            const value: number = dictionary[key];
            const pi: number = value/feature.length;
            entropy -= pi * Math.log2(pi);
        }
        return entropy;
    }
}