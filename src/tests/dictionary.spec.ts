// tslint:disable:no-unused-expression
// tslint:disable:eofline
// tslint:disable:max-line-length
import { expect } from "chai";
import { Dictionary } from "../structures/Dictionary";

describe("Dictionary test suite", () => {
	it("can deep copy", () => {
		const dictionary: Dictionary<boolean> = new Dictionary<boolean>();
		dictionary.Add("Key1", true);
		dictionary.Add("Key2", false);
		const cloneDictionary: Dictionary<boolean> = dictionary.DeepCopy();
		expect(cloneDictionary).to.not.be.null;
		expect(cloneDictionary.Item("Key1")).to.be.true;
		expect(cloneDictionary.Item("Key2")).to.be.false;
	});
});