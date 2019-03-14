export type Feature = Array<(string | number)>;
export 
class DecisionTree {
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
    private calculateImpurityScore(data: []): number {// use Gini methos; TODO: allow for more methods
        if (data === null || data.length === 0) {
            return 0;
        }
        
    }

    private static getClassesProbability(feature: Feature): { [key: string]: number } {
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
}