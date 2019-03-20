export type FeatureType = (string | number);
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
		return `Is equal to ${this.featureValue}`;
	}
}
export class DecisionTree {
	public Left: DecisionTree;
    public Right: DecisionTree;
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
    public static partitionData(data: Feature[], question: Question): [Feature[], Feature[]] {
        let left: Feature[] = new Array<Feature>();
        let right: Feature[] = new Array<Feature>();
        for(const x of data) {
            if(question.match(x)) {
                left.push(x);
            } else {
                right.push(x);
            }
        }
        return [left, right];
    }
    private static getClassesProbability(feature: Feature): { [key: string]: number } {
        /**
         * @remarks
         * Gets the probability of each type of example in a dataset
         */
        const dictionary: { [key: string]: number } = {};
        for (const element of feature) {
            if (!dictionary.hasOwnProperty(element)) {
                dictionary[element] = 1;
            }
            else {
                dictionary[element] ++;
            }
        }
        return dictionary;
    }
    public static calculateGiniImpurity(feature: Feature): number {
        /**
         * @remarks
         * Gini impurity is a measure of how often a randomly chosen element from the set would be incorrectly labeled
         * if it was randomly labeled according to the distribution of labels in the subset
         */
        const dictionary: { [key: string]: number } = this.getClassesProbability(feature);
        let giniImpurity: number = 1;
        for (const key of Object.keys(dictionary)) {
            const value: number = dictionary[key];
            const pi: number = value/feature.length;
            giniImpurity -= Math.pow(pi, 2);
        }
        return giniImpurity;
    }
    public static calculateEntropy(feature: Feature): number {
        const dictionary: { [key: string]: number } = this.getClassesProbability(feature);
        let entropy: number = 0;
        for (const key of Object.keys(dictionary)) {
            const value: number = dictionary[key];
            const pi: number = value/feature.length;
            entropy -= pi * Math.log2(pi);
        }
        return entropy;
    }
    public static calculateInformationGain(left: Feature, right: Feature, currentImpurity: number): number {
        /**
         * @remarks
         * The uncertainty of the starting node, minus the weighted impurity of two child nodes
         */
        const p: number = left.length / (left.length + right.length);
        return currentImpurity - p*this.calculateGiniImpurity(left) - (1-p)*this.calculateGiniImpurity(right);
    }
    public static calculateBestSplit(dataset: Feature[], labelsColumnIndex: number): [number, Question] {
        // TODO: refactor the labelsColumnIndex
        /**
         * @remarks
         * Find the best question to ask by iterating over every feature / value and calculating the information gain
         */
        let bestInformationGain: number = 0;
        let bestQuestion: Question = null;
        let currentUncertainty: number = this.calculateGiniImpurity(this.getColumnFromArray(dataset, labelsColumnIndex));
        for(let colIdx=0;  colIdx < dataset.length; colIdx++) {
            if(colIdx === labelsColumnIndex) {
                continue;
            }
            const values: Feature = this.getUniqueValues(this.getColumnFromArray(dataset, colIdx));
            for(const currentValue of values) {
                const question: Question = new Question(colIdx, currentValue);
                let partition: [Feature[], Feature[]] = this.partitionData(dataset, question);
                if(partition[0].length === 0 || partition[1].length === 0) {
                    continue;
                }
                const trueColumn: Feature = this.getColumnFromArray(partition[0], colIdx);
                const falseColumn: Feature = this.getColumnFromArray(partition[1], colIdx);
                const informationGain: number = this.calculateInformationGain(trueColumn, falseColumn, currentUncertainty);
                if(informationGain > bestInformationGain) {
                    bestInformationGain = informationGain;
                    bestQuestion = question;
                }
            }
        }
        return [bestInformationGain, bestQuestion];
    }
}