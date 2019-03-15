export type FeatureType = (string | number);
export type Feature = FeatureType[];
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
    public static partitionData(data: Feature[], filter:(f: FeatureType[]) => boolean): [Feature[], Feature[]] {
        let left: Feature[] = new Array<Feature>();
        let right: Feature[] = new Array<Feature>();
        for(const x of data) {
            if(filter(x)) {
                left.concat(x);
            } else {
                right.concat(x);
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
    public static informationGain(left: Feature, right: Feature, currentImpurity: number): number {
        /**
         * @remarks
         * The uncertainty of the starting node, minus the weighted impurity of two child nodes
         */
        const p: number = left.length / (left.length + right.length);
        return currentImpurity - p*this.calculateGiniImpurity(left) - (1-p)*this.calculateGiniImpurity(right);
    }
}