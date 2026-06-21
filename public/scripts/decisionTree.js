/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/structures/decisionTree.ts"
/*!****************************************!*\
  !*** ./src/structures/decisionTree.ts ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DecisionTree: () => (/* binding */ DecisionTree),
/* harmony export */   Leaf: () => (/* binding */ Leaf),
/* harmony export */   Question: () => (/* binding */ Question)
/* harmony export */ });
class Question {
    columnIndex;
    featureValue;
    constructor(columnIndex, featureValue) {
        this.columnIndex = columnIndex;
        this.featureValue = featureValue;
    }
    match(feature) {
        switch (typeof this.featureValue) {
            case "number": return Number(feature[this.columnIndex]) >= Number(this.featureValue);
            case "string": return feature[this.columnIndex] === this.featureValue;
        }
    }
    toString = () => {
        return `Column ${this.columnIndex} is equal to ${this.featureValue}`;
    };
}
class Leaf {
    predictions;
    constructor(predictions) {
        this.predictions = predictions;
    }
    toString = () => {
        let ret = "";
        let total = 0;
        for (let key in this.predictions) {
            total += this.predictions[key];
        }
        for (let key in this.predictions) {
            ret += `'${key}': ${this.predictions[key] * 100 / total}%; `;
        }
        return ret.slice(0, ret.length - 2);
    };
}
class DecisionTree {
    static getUniqueValues(data) {
        const res = new Set(data);
        return Array.from(res.values());
    }
    static getColumnFromArray(data, columnIndex) {
        if (data === null || data.length === 0) {
            return null;
        }
        return data.map((x) => x[columnIndex]);
    }
    static partitionData(dataset, question) {
        const trueBranch = new Array();
        const falseBranch = new Array();
        for (const x of dataset) {
            if (question.match(x)) {
                trueBranch.push(x);
            }
            else {
                falseBranch.push(x);
            }
        }
        return [trueBranch, falseBranch];
    }
    static getClassesCount(dataset, labelsColumnIndex) {
        /**
         * @remarks
         * Gets the probability of each type of example in a dataset
         */
        const dictionary = {};
        for (const row of dataset) {
            const label = row[labelsColumnIndex];
            if (!dictionary.hasOwnProperty(label)) {
                dictionary[label] = 1;
            }
            else {
                dictionary[label]++;
            }
        }
        return dictionary;
    }
    static calculateGiniImpurity(dataset, labelsColumnIndex) {
        /**
         * @remarks
         * Gini impurity is a measure of how often a randomly chosen element from the set would be incorrectly labeled
         * if it was randomly labeled according to the distribution of labels in the subset
         */
        const dictionary = this.getClassesCount(dataset, labelsColumnIndex);
        let giniImpurity = 1;
        for (const key of Object.keys(dictionary)) {
            const value = dictionary[key];
            const pi = value / dataset.length;
            giniImpurity -= Math.pow(pi, 2);
        }
        return giniImpurity;
    }
    static calculateEntropy(dataset, labelsColumnIndex) {
        const dictionary = this.getClassesCount(dataset, labelsColumnIndex);
        let entropy = 0;
        for (const key of Object.keys(dictionary)) {
            const value = dictionary[key];
            const pi = value / dataset.length;
            entropy -= pi * Math.log2(pi);
        }
        return entropy;
    }
    static calculateInformationGain(left, right, currentImpurity, labelsColumnIndex) {
        /**
         * @remarks
         * The uncertainty of the starting node, minus the weighted impurity of two child nodes
         */
        const p = left.length / (left.length + right.length);
        return currentImpurity - p * this.calculateGiniImpurity(left, labelsColumnIndex) - (1 - p) * this.calculateGiniImpurity(right, labelsColumnIndex);
    }
    static calculateBestSplit(dataset, labelsColumnIndex) {
        // TODO: refactor the labelsColumnIndex
        /**
         * @remarks
         * Find the best question to ask by iterating over every feature / value and calculating the information gain
         */
        let bestInformationGain = 0;
        let bestQuestion = null;
        const currentUncertainty = this.calculateGiniImpurity(dataset, labelsColumnIndex);
        for (let colIdx = 0; colIdx < dataset.length; colIdx++) {
            if (colIdx === labelsColumnIndex) {
                continue;
            }
            const values = this.getUniqueValues(this.getColumnFromArray(dataset, colIdx));
            for (const currentValue of values) {
                const question = new Question(colIdx, currentValue);
                const [trueBranch, falseBranch] = this.partitionData(dataset, question);
                if (trueBranch.length === 0 || falseBranch.length === 0) {
                    continue;
                }
                const informationGain = this.calculateInformationGain(trueBranch, falseBranch, currentUncertainty, labelsColumnIndex);
                if (informationGain >= bestInformationGain) {
                    bestInformationGain = informationGain;
                    bestQuestion = question;
                }
            }
        }
        return [bestInformationGain, bestQuestion];
    }
    static buildTree(dataset, labelsColumnIndex) {
        const [gain, question] = this.calculateBestSplit(dataset, labelsColumnIndex);
        if (gain === 0) {
            return new Leaf(this.getClassesCount(dataset, labelsColumnIndex));
        }
        const [left, right] = this.partitionData(dataset, question);
        const trueBranch = this.buildTree(left, labelsColumnIndex);
        const falseBranch = this.buildTree(right, labelsColumnIndex);
        return new DecisionTree(question, trueBranch, falseBranch);
    }
    static classify(row, node) {
        if (node instanceof Leaf) {
            return node.predictions;
        }
        if (node.question.match(row)) {
            return this.classify(row, node.trueBranch);
        }
        else {
            return this.classify(row, node.falseBranch);
        }
    }
    static printTree(node) {
        if (node instanceof Leaf) {
            let div = document.createElement("div");
            div.style.marginLeft = "20px";
            div.textContent = `Predict ${node.toString()}`;
            return div;
        }
        let div = document.createElement("div");
        div.style.marginLeft = "20px";
        div.textContent = node.question.toString();
        let trueDiv = document.createElement("div");
        trueDiv.style.marginLeft = "20px";
        trueDiv.textContent = "TRUE:";
        trueDiv.appendChild(this.printTree(node.trueBranch));
        div.appendChild(trueDiv);
        let falseDiv = document.createElement("div");
        falseDiv.style.marginLeft = "20px";
        falseDiv.textContent = "FALSE:";
        falseDiv.appendChild(this.printTree(node.falseBranch));
        div.appendChild(falseDiv);
        return div;
    }
    question;
    trueBranch;
    falseBranch;
    constructor(question, trueBranch, falseBranch) {
        this.question = question;
        this.trueBranch = trueBranch;
        this.falseBranch = falseBranch;
    }
}


/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!***************************************!*\
  !*** ./src/exercises/decisionTree.ts ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _structures_decisionTree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../structures/decisionTree */ "./src/structures/decisionTree.ts");

// DataSet
const dataset = [
    ["DK", "January", "February", 58, "M", "A"],
    ["ES", "January", "January", 71, "F", "A"],
    ["ES", "February", "March", 69, "M", "A"],
    ["AE", "February", "February", 60, "M", "D"],
    ["DO", "December", "January", 54, "F", "A"],
    ["ES", "January", "January", 66, "M", "A"],
    ["AE", "February", "March", 66, "F", "A"],
    ["TH", "February", "February", 56, "M", "A"],
    ["TH", "February", "March", 56, "M", "A"],
    ["IT", "December", "January", 67, "M", "D"],
    ["IT", "January", "January", 90, "M", "D"],
    ["NL", "December", "December", 70, "F", "A"],
    ["NL", "December", "January", 70, "F", "A"],
    ["ZA", "January", "January", 69, "F", "A"],
    ["ZA", "January", "January", 69, "F", "A"],
    ["ZA", "January", "January", 69, "F", "A"],
    ["ZA", "January", "January", 69, "F", "A"],
    ["ZA", "January", "January", 69, "F", "A"],
    ["ZA", "January", "January", 69, "F", "A"],
    ["ZA", "January", "January", 51, "F", "A"],
    ["ZA", "January", "January", 51, "F", "A"],
    ["ZA", "January", "January", 51, "F", "A"],
    ["ZA", "January", "January", 51, "F", "A"],
    ["ZA", "January", "January", 51, "F", "A"],
    ["NL", "February", "February", 57, "F", "A"],
    ["MX", "January", "February", 59, "F", "A"],
    ["DE", "January", "January", 80, "M", "A"],
    ["IT", "March", "March", 70, "M", "A"],
    ["ES", "February", "February", 43, "M", "A"],
    ["SR", "March", "March", 57, "M", "D"],
];
// Types of decison trees:
// - Categorical variable decision tree
// - Continuous variable decision tree
document.addEventListener("DOMContentLoaded", () => {
    let table = document.getElementById("tblDataset");
    for (const row of dataset) {
        let tr = document.createElement("tr");
        for (const cell of row) {
            let td = document.createElement("td");
            td.textContent = cell.toString();
            tr.appendChild(td);
        }
        table.append(tr);
    }
    const decisionTree = _structures_decisionTree__WEBPACK_IMPORTED_MODULE_0__.DecisionTree.buildTree(dataset, 5);
    document.getElementById("divDecisionTree").append(_structures_decisionTree__WEBPACK_IMPORTED_MODULE_0__.DecisionTree.printTree(decisionTree));
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHLEVBQUUsR0FBRyxDQUFFO0lBQzdDLENBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUU7SUFDNUMsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBRTtJQUMzQyxDQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFFO0lBQzFDLENBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUU7SUFDN0MsQ0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBRTtJQUMxQyxDQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFFO0lBQzVDLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUU7SUFDM0MsQ0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBRTtJQUM3QyxDQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFFO0lBQzVDLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUU7SUFDM0MsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBRTtJQUMzQyxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFFO0lBQzNDLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUU7SUFDM0MsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBRTtJQUMzQyxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFFO0lBQzNDLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUU7SUFDM0MsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBRTtJQUMzQyxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFFO0lBQzNDLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUU7SUFDM0MsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBRTtJQUMzQyxDQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFFO0lBQzdDLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUU7SUFDNUMsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBRTtJQUMzQyxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFFO0lBQ3ZDLENBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUU7SUFDN0MsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBRTtDQUN2QyxDQUFDO0FBRUYsMEJBQTBCO0FBQzFCLHVDQUF1QztBQUN2QyxzQ0FBc0M7QUFDdEMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLEdBQUcsRUFBRTtJQUNsRCxJQUFJLEtBQUssR0FBd0MsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN2RixLQUFLLE1BQU0sR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQzNCLElBQUksRUFBRSxHQUF3QixRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNELEtBQUssTUFBTSxJQUFJLElBQUksR0FBRyxFQUFFLENBQUM7WUFDeEIsSUFBSSxFQUFFLEdBQXlCLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDNUQsRUFBRSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDakMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNwQixDQUFDO1FBQ0QsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNsQixDQUFDO0lBQ0QsTUFBTSxZQUFZLEdBQXdCLGtFQUFZLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM3RSxRQUFRLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLENBQUMsTUFBTSxDQUFDLGtFQUFZLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7QUFDekYsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saW5lYXJhbGdlYnJhLy4vc3JjL3N0cnVjdHVyZXMvZGVjaXNpb25UcmVlLnRzIiwid2VicGFjazovL2xpbmVhcmFsZ2VicmEvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbGluZWFyYWxnZWJyYS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbGluZWFyYWxnZWJyYS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2xpbmVhcmFsZ2VicmEvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9saW5lYXJhbGdlYnJhLy4vc3JjL2V4ZXJjaXNlcy9kZWNpc2lvblRyZWUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHR5cGUgRmVhdHVyZVR5cGUgPSBzdHJpbmcgfCBudW1iZXI7XHJcbmV4cG9ydCB0eXBlIEZlYXR1cmUgPSBGZWF0dXJlVHlwZVtdO1xyXG5leHBvcnQgY2xhc3MgUXVlc3Rpb24ge1xyXG5cdHB1YmxpYyByZWFkb25seSBjb2x1bW5JbmRleDogbnVtYmVyO1xyXG5cdHB1YmxpYyByZWFkb25seSBmZWF0dXJlVmFsdWU6IEZlYXR1cmVUeXBlO1xyXG5cdGNvbnN0cnVjdG9yKGNvbHVtbkluZGV4OiBudW1iZXIsIGZlYXR1cmVWYWx1ZTogRmVhdHVyZVR5cGUpIHtcclxuXHRcdHRoaXMuY29sdW1uSW5kZXggPSBjb2x1bW5JbmRleDtcclxuXHRcdHRoaXMuZmVhdHVyZVZhbHVlID0gZmVhdHVyZVZhbHVlO1xyXG5cdH1cclxuXHRwdWJsaWMgbWF0Y2goZmVhdHVyZTogRmVhdHVyZVR5cGVbXSk6IGJvb2xlYW4ge1xyXG5cdFx0c3dpdGNoICh0eXBlb2YgdGhpcy5mZWF0dXJlVmFsdWUpIHtcclxuXHRcdFx0Y2FzZSBcIm51bWJlclwiOiByZXR1cm4gTnVtYmVyKGZlYXR1cmVbdGhpcy5jb2x1bW5JbmRleF0pID49IE51bWJlcih0aGlzLmZlYXR1cmVWYWx1ZSk7XHJcblx0XHRcdGNhc2UgXCJzdHJpbmdcIjogcmV0dXJuIGZlYXR1cmVbdGhpcy5jb2x1bW5JbmRleF0gPT09IHRoaXMuZmVhdHVyZVZhbHVlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRwdWJsaWMgdG9TdHJpbmcgPSAoKTogc3RyaW5nID0+IHtcclxuXHRcdHJldHVybiBgQ29sdW1uICR7dGhpcy5jb2x1bW5JbmRleH0gaXMgZXF1YWwgdG8gJHt0aGlzLmZlYXR1cmVWYWx1ZX1gO1xyXG5cdH1cclxufVxyXG5leHBvcnQgY2xhc3MgTGVhZiB7XHJcblx0cHVibGljIHJlYWRvbmx5IHByZWRpY3Rpb25zOiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9O1xyXG5cdGNvbnN0cnVjdG9yKHByZWRpY3Rpb25zOiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9KSB7XHJcblx0XHR0aGlzLnByZWRpY3Rpb25zID0gcHJlZGljdGlvbnM7XHJcblx0fVxyXG5cdHB1YmxpYyB0b1N0cmluZyA9ICgpOiBzdHJpbmcgPT4ge1xyXG5cdFx0bGV0IHJldDogc3RyaW5nID0gXCJcIjtcclxuXHRcdGxldCB0b3RhbDogbnVtYmVyID0gMDtcclxuXHRcdGZvciAobGV0IGtleSBpbiB0aGlzLnByZWRpY3Rpb25zKSB7XHJcblx0XHRcdHRvdGFsICs9IHRoaXMucHJlZGljdGlvbnNba2V5XTtcclxuXHRcdH1cclxuXHRcdGZvciAobGV0IGtleSBpbiB0aGlzLnByZWRpY3Rpb25zKSB7XHJcblx0XHRcdHJldCArPSBgJyR7a2V5fSc6ICR7dGhpcy5wcmVkaWN0aW9uc1trZXldKjEwMC90b3RhbH0lOyBgO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJldC5zbGljZSgwLCByZXQubGVuZ3RoIC0gMik7XHJcblx0fVxyXG59XHJcbmV4cG9ydCBjbGFzcyBEZWNpc2lvblRyZWUge1xyXG5cdHB1YmxpYyBzdGF0aWMgZ2V0VW5pcXVlVmFsdWVzKGRhdGE6IEZlYXR1cmUpOiBGZWF0dXJlIHtcclxuXHRcdGNvbnN0IHJlcyA9IG5ldyBTZXQoZGF0YSk7XHJcblx0XHRyZXR1cm4gQXJyYXkuZnJvbShyZXMudmFsdWVzKCkpO1xyXG5cdH1cclxuXHRwdWJsaWMgc3RhdGljIGdldENvbHVtbkZyb21BcnJheShkYXRhOiBGZWF0dXJlW10sIGNvbHVtbkluZGV4OiBudW1iZXIpOiBGZWF0dXJlIHtcclxuXHRcdGlmIChkYXRhID09PSBudWxsIHx8IGRhdGEubGVuZ3RoID09PSAwKSB7XHJcblx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGRhdGEubWFwKCh4KSA9PiB4W2NvbHVtbkluZGV4XSk7XHJcblx0fVxyXG5cdHB1YmxpYyBzdGF0aWMgcGFydGl0aW9uRGF0YShkYXRhc2V0OiBGZWF0dXJlW10sIHF1ZXN0aW9uOiBRdWVzdGlvbik6IFtGZWF0dXJlW10sIEZlYXR1cmVbXV0ge1xyXG5cdFx0Y29uc3QgdHJ1ZUJyYW5jaDogRmVhdHVyZVtdID0gbmV3IEFycmF5PEZlYXR1cmU+KCk7XHJcblx0XHRjb25zdCBmYWxzZUJyYW5jaDogRmVhdHVyZVtdID0gbmV3IEFycmF5PEZlYXR1cmU+KCk7XHJcblx0XHRmb3IgKGNvbnN0IHggb2YgZGF0YXNldCkge1xyXG5cdFx0XHRpZiAocXVlc3Rpb24ubWF0Y2goeCkpIHtcclxuXHRcdFx0XHR0cnVlQnJhbmNoLnB1c2goeCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0ZmFsc2VCcmFuY2gucHVzaCh4KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIFt0cnVlQnJhbmNoLCBmYWxzZUJyYW5jaF07XHJcblx0fVxyXG5cdHB1YmxpYyBzdGF0aWMgZ2V0Q2xhc3Nlc0NvdW50KGRhdGFzZXQ6IEZlYXR1cmVbXSwgbGFiZWxzQ29sdW1uSW5kZXg6IG51bWJlcik6IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH0ge1xyXG5cdFx0LyoqXHJcblx0XHQgKiBAcmVtYXJrc1xyXG5cdFx0ICogR2V0cyB0aGUgcHJvYmFiaWxpdHkgb2YgZWFjaCB0eXBlIG9mIGV4YW1wbGUgaW4gYSBkYXRhc2V0XHJcblx0XHQgKi9cclxuXHRcdGNvbnN0IGRpY3Rpb25hcnk6IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH0gPSB7fTtcclxuXHRcdGZvciAoY29uc3Qgcm93IG9mIGRhdGFzZXQpIHtcclxuXHRcdFx0Y29uc3QgbGFiZWw6IEZlYXR1cmVUeXBlID0gcm93W2xhYmVsc0NvbHVtbkluZGV4XTtcclxuXHRcdFx0aWYgKCFkaWN0aW9uYXJ5Lmhhc093blByb3BlcnR5KGxhYmVsKSkge1xyXG5cdFx0XHRcdGRpY3Rpb25hcnlbbGFiZWxdID0gMTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRkaWN0aW9uYXJ5W2xhYmVsXSArKztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGRpY3Rpb25hcnk7XHJcblx0fVxyXG5cdHB1YmxpYyBzdGF0aWMgY2FsY3VsYXRlR2luaUltcHVyaXR5KGRhdGFzZXQ6IEZlYXR1cmVbXSwgbGFiZWxzQ29sdW1uSW5kZXg6IG51bWJlcik6IG51bWJlciB7XHJcblx0XHQvKipcclxuXHRcdCAqIEByZW1hcmtzXHJcblx0XHQgKiBHaW5pIGltcHVyaXR5IGlzIGEgbWVhc3VyZSBvZiBob3cgb2Z0ZW4gYSByYW5kb21seSBjaG9zZW4gZWxlbWVudCBmcm9tIHRoZSBzZXQgd291bGQgYmUgaW5jb3JyZWN0bHkgbGFiZWxlZFxyXG5cdFx0ICogaWYgaXQgd2FzIHJhbmRvbWx5IGxhYmVsZWQgYWNjb3JkaW5nIHRvIHRoZSBkaXN0cmlidXRpb24gb2YgbGFiZWxzIGluIHRoZSBzdWJzZXRcclxuXHRcdCAqL1xyXG5cdFx0Y29uc3QgZGljdGlvbmFyeTogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSA9IHRoaXMuZ2V0Q2xhc3Nlc0NvdW50KGRhdGFzZXQsIGxhYmVsc0NvbHVtbkluZGV4KTtcclxuXHRcdGxldCBnaW5pSW1wdXJpdHk6IG51bWJlciA9IDE7XHJcblx0XHRmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhkaWN0aW9uYXJ5KSkge1xyXG5cdFx0XHRjb25zdCB2YWx1ZTogbnVtYmVyID0gZGljdGlvbmFyeVtrZXldO1xyXG5cdFx0XHRjb25zdCBwaTogbnVtYmVyID0gdmFsdWUgLyBkYXRhc2V0Lmxlbmd0aDtcclxuXHRcdFx0Z2luaUltcHVyaXR5IC09IE1hdGgucG93KHBpLCAyKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBnaW5pSW1wdXJpdHk7XHJcblx0fVxyXG5cdHB1YmxpYyBzdGF0aWMgY2FsY3VsYXRlRW50cm9weShkYXRhc2V0OiBGZWF0dXJlW10sIGxhYmVsc0NvbHVtbkluZGV4OiBudW1iZXIpOiBudW1iZXIge1xyXG5cdFx0Y29uc3QgZGljdGlvbmFyeTogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSA9IHRoaXMuZ2V0Q2xhc3Nlc0NvdW50KGRhdGFzZXQsIGxhYmVsc0NvbHVtbkluZGV4KTtcclxuXHRcdGxldCBlbnRyb3B5OiBudW1iZXIgPSAwO1xyXG5cdFx0Zm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoZGljdGlvbmFyeSkpIHtcclxuXHRcdFx0Y29uc3QgdmFsdWU6IG51bWJlciA9IGRpY3Rpb25hcnlba2V5XTtcclxuXHRcdFx0Y29uc3QgcGk6IG51bWJlciA9IHZhbHVlIC8gZGF0YXNldC5sZW5ndGg7XHJcblx0XHRcdGVudHJvcHkgLT0gcGkgKiBNYXRoLmxvZzIocGkpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGVudHJvcHk7XHJcblx0fVxyXG5cdHB1YmxpYyBzdGF0aWMgY2FsY3VsYXRlSW5mb3JtYXRpb25HYWluKGxlZnQ6IEZlYXR1cmVbXSwgcmlnaHQ6IEZlYXR1cmVbXSwgY3VycmVudEltcHVyaXR5OiBudW1iZXIsIGxhYmVsc0NvbHVtbkluZGV4OiBudW1iZXIpOiBudW1iZXIge1xyXG5cdFx0LyoqXHJcblx0XHQgKiBAcmVtYXJrc1xyXG5cdFx0ICogVGhlIHVuY2VydGFpbnR5IG9mIHRoZSBzdGFydGluZyBub2RlLCBtaW51cyB0aGUgd2VpZ2h0ZWQgaW1wdXJpdHkgb2YgdHdvIGNoaWxkIG5vZGVzXHJcblx0XHQgKi9cclxuXHRcdGNvbnN0IHA6IG51bWJlciA9IGxlZnQubGVuZ3RoIC8gKGxlZnQubGVuZ3RoICsgcmlnaHQubGVuZ3RoKTtcclxuXHRcdHJldHVybiBjdXJyZW50SW1wdXJpdHkgLSBwICogdGhpcy5jYWxjdWxhdGVHaW5pSW1wdXJpdHkobGVmdCwgbGFiZWxzQ29sdW1uSW5kZXgpIC0gKDEgLSBwKSAqIHRoaXMuY2FsY3VsYXRlR2luaUltcHVyaXR5KHJpZ2h0LCBsYWJlbHNDb2x1bW5JbmRleCk7XHJcblx0fVxyXG5cdHB1YmxpYyBzdGF0aWMgY2FsY3VsYXRlQmVzdFNwbGl0KGRhdGFzZXQ6IEZlYXR1cmVbXSwgbGFiZWxzQ29sdW1uSW5kZXg6IG51bWJlcik6IFtudW1iZXIsIFF1ZXN0aW9uXSB7XHJcblx0XHQvLyBUT0RPOiByZWZhY3RvciB0aGUgbGFiZWxzQ29sdW1uSW5kZXhcclxuXHRcdC8qKlxyXG5cdFx0ICogQHJlbWFya3NcclxuXHRcdCAqIEZpbmQgdGhlIGJlc3QgcXVlc3Rpb24gdG8gYXNrIGJ5IGl0ZXJhdGluZyBvdmVyIGV2ZXJ5IGZlYXR1cmUgLyB2YWx1ZSBhbmQgY2FsY3VsYXRpbmcgdGhlIGluZm9ybWF0aW9uIGdhaW5cclxuXHRcdCAqL1xyXG5cdFx0bGV0IGJlc3RJbmZvcm1hdGlvbkdhaW46IG51bWJlciA9IDA7XHJcblx0XHRsZXQgYmVzdFF1ZXN0aW9uOiBRdWVzdGlvbiA9IG51bGw7XHJcblx0XHRjb25zdCBjdXJyZW50VW5jZXJ0YWludHk6IG51bWJlciA9IHRoaXMuY2FsY3VsYXRlR2luaUltcHVyaXR5KGRhdGFzZXQsIGxhYmVsc0NvbHVtbkluZGV4KTtcclxuXHRcdGZvciAobGV0IGNvbElkeCA9IDA7ICBjb2xJZHggPCBkYXRhc2V0Lmxlbmd0aDsgY29sSWR4KyspIHtcclxuXHRcdFx0aWYgKGNvbElkeCA9PT0gbGFiZWxzQ29sdW1uSW5kZXgpIHtcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjb25zdCB2YWx1ZXM6IEZlYXR1cmUgPSB0aGlzLmdldFVuaXF1ZVZhbHVlcyh0aGlzLmdldENvbHVtbkZyb21BcnJheShkYXRhc2V0LCBjb2xJZHgpKTtcclxuXHRcdFx0Zm9yIChjb25zdCBjdXJyZW50VmFsdWUgb2YgdmFsdWVzKSB7XHJcblx0XHRcdFx0Y29uc3QgcXVlc3Rpb246IFF1ZXN0aW9uID0gbmV3IFF1ZXN0aW9uKGNvbElkeCwgY3VycmVudFZhbHVlKTtcclxuXHRcdFx0XHRjb25zdCBbdHJ1ZUJyYW5jaCwgZmFsc2VCcmFuY2hdOiBbRmVhdHVyZVtdLCBGZWF0dXJlW11dID0gdGhpcy5wYXJ0aXRpb25EYXRhKGRhdGFzZXQsIHF1ZXN0aW9uKTtcclxuXHRcdFx0XHRpZiAodHJ1ZUJyYW5jaC5sZW5ndGggPT09IDAgfHwgZmFsc2VCcmFuY2gubGVuZ3RoID09PSAwKSB7XHJcblx0XHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y29uc3QgaW5mb3JtYXRpb25HYWluOiBudW1iZXIgPSB0aGlzLmNhbGN1bGF0ZUluZm9ybWF0aW9uR2Fpbih0cnVlQnJhbmNoLCBmYWxzZUJyYW5jaCwgY3VycmVudFVuY2VydGFpbnR5LCBsYWJlbHNDb2x1bW5JbmRleCk7XHJcblx0XHRcdFx0aWYgKGluZm9ybWF0aW9uR2FpbiA+PSBiZXN0SW5mb3JtYXRpb25HYWluKSB7XHJcblx0XHRcdFx0XHRiZXN0SW5mb3JtYXRpb25HYWluID0gaW5mb3JtYXRpb25HYWluO1xyXG5cdFx0XHRcdFx0YmVzdFF1ZXN0aW9uID0gcXVlc3Rpb247XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gW2Jlc3RJbmZvcm1hdGlvbkdhaW4sIGJlc3RRdWVzdGlvbl07XHJcblx0fVxyXG5cdHB1YmxpYyBzdGF0aWMgYnVpbGRUcmVlKGRhdGFzZXQ6IEZlYXR1cmVbXSwgbGFiZWxzQ29sdW1uSW5kZXg6IG51bWJlcik6IExlYWYgfCBEZWNpc2lvblRyZWUge1xyXG5cdFx0Y29uc3QgW2dhaW4sIHF1ZXN0aW9uXTogW251bWJlciwgUXVlc3Rpb25dID0gdGhpcy5jYWxjdWxhdGVCZXN0U3BsaXQoZGF0YXNldCwgbGFiZWxzQ29sdW1uSW5kZXgpO1xyXG5cdFx0aWYgKGdhaW4gPT09IDApIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBMZWFmKHRoaXMuZ2V0Q2xhc3Nlc0NvdW50KGRhdGFzZXQsIGxhYmVsc0NvbHVtbkluZGV4KSk7XHJcblx0XHR9XHJcblx0XHRjb25zdCBbbGVmdCwgcmlnaHRdOiBbRmVhdHVyZVtdLCBGZWF0dXJlW11dID0gdGhpcy5wYXJ0aXRpb25EYXRhKGRhdGFzZXQsIHF1ZXN0aW9uKTtcclxuXHRcdGNvbnN0IHRydWVCcmFuY2g6IExlYWYgfCBEZWNpc2lvblRyZWUgPSB0aGlzLmJ1aWxkVHJlZShsZWZ0LCBsYWJlbHNDb2x1bW5JbmRleCk7XHJcblx0XHRjb25zdCBmYWxzZUJyYW5jaDogTGVhZiB8IERlY2lzaW9uVHJlZSA9IHRoaXMuYnVpbGRUcmVlKHJpZ2h0LCBsYWJlbHNDb2x1bW5JbmRleCk7XHJcblx0XHRyZXR1cm4gbmV3IERlY2lzaW9uVHJlZShxdWVzdGlvbiwgdHJ1ZUJyYW5jaCwgZmFsc2VCcmFuY2gpO1xyXG5cdH1cclxuXHRwdWJsaWMgc3RhdGljIGNsYXNzaWZ5KHJvdzogRmVhdHVyZSwgbm9kZTogTGVhZiB8IERlY2lzaW9uVHJlZSk6IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH0ge1xyXG5cdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBMZWFmKSB7XHJcblx0XHRcdHJldHVybiBub2RlLnByZWRpY3Rpb25zO1xyXG5cdFx0fVxyXG5cdFx0aWYgKG5vZGUucXVlc3Rpb24ubWF0Y2gocm93KSkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5jbGFzc2lmeShyb3csIG5vZGUudHJ1ZUJyYW5jaCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5jbGFzc2lmeShyb3csIG5vZGUuZmFsc2VCcmFuY2gpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRwdWJsaWMgc3RhdGljIHByaW50VHJlZShub2RlOiBMZWFmIHwgRGVjaXNpb25UcmVlKTogSFRNTERpdkVsZW1lbnQge1xyXG5cdFx0aWYgKG5vZGUgaW5zdGFuY2VvZiBMZWFmKSB7XHJcblx0XHRcdGxldCBkaXY6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRcdFx0ZGl2LnN0eWxlLm1hcmdpbkxlZnQgPSBcIjIwcHhcIjtcclxuXHRcdFx0ZGl2LnRleHRDb250ZW50ID0gYFByZWRpY3QgJHtub2RlLnRvU3RyaW5nKCl9YDtcclxuXHRcdFx0cmV0dXJuIGRpdjtcclxuXHRcdH1cclxuXHRcdGxldCBkaXY6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHRcdGRpdi5zdHlsZS5tYXJnaW5MZWZ0ID0gXCIyMHB4XCI7XHJcblx0XHRkaXYudGV4dENvbnRlbnQgPSBub2RlLnF1ZXN0aW9uLnRvU3RyaW5nKCk7XHJcblx0XHRsZXQgdHJ1ZURpdjogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdFx0dHJ1ZURpdi5zdHlsZS5tYXJnaW5MZWZ0ID0gXCIyMHB4XCI7XHJcblx0XHR0cnVlRGl2LnRleHRDb250ZW50ID0gXCJUUlVFOlwiO1xyXG5cdFx0dHJ1ZURpdi5hcHBlbmRDaGlsZCh0aGlzLnByaW50VHJlZShub2RlLnRydWVCcmFuY2gpKTtcclxuXHRcdGRpdi5hcHBlbmRDaGlsZCh0cnVlRGl2KTtcclxuXHRcdGxldCBmYWxzZURpdjogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cdFx0ZmFsc2VEaXYuc3R5bGUubWFyZ2luTGVmdCA9IFwiMjBweFwiO1xyXG5cdFx0ZmFsc2VEaXYudGV4dENvbnRlbnQgPSBcIkZBTFNFOlwiO1xyXG5cdFx0ZmFsc2VEaXYuYXBwZW5kQ2hpbGQodGhpcy5wcmludFRyZWUobm9kZS5mYWxzZUJyYW5jaCkpO1xyXG5cdFx0ZGl2LmFwcGVuZENoaWxkKGZhbHNlRGl2KTtcclxuXHRcdHJldHVybiBkaXY7XHJcblx0fVxyXG5cdHB1YmxpYyByZWFkb25seSBxdWVzdGlvbjogUXVlc3Rpb247XHJcblx0cHVibGljIHJlYWRvbmx5IHRydWVCcmFuY2g6IExlYWYgfCBEZWNpc2lvblRyZWU7XHJcblx0cHVibGljIHJlYWRvbmx5IGZhbHNlQnJhbmNoOiBMZWFmIHwgRGVjaXNpb25UcmVlO1xyXG5cdHByaXZhdGUgY29uc3RydWN0b3IocXVlc3Rpb246IFF1ZXN0aW9uLCB0cnVlQnJhbmNoOiBMZWFmIHwgRGVjaXNpb25UcmVlLCBmYWxzZUJyYW5jaDogTGVhZiB8IERlY2lzaW9uVHJlZSl7XHJcblx0XHR0aGlzLnF1ZXN0aW9uID0gcXVlc3Rpb247XHJcblx0XHR0aGlzLnRydWVCcmFuY2ggPSB0cnVlQnJhbmNoO1xyXG5cdFx0dGhpcy5mYWxzZUJyYW5jaCA9IGZhbHNlQnJhbmNoO1xyXG5cdH1cclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0aWYgKCEobW9kdWxlSWQgaW4gX193ZWJwYWNrX21vZHVsZXNfXykpIHtcblx0XHRkZWxldGUgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBtb2R1bGVJZCArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJcclxuaW1wb3J0IHsgRGVjaXNpb25UcmVlLCBGZWF0dXJlLCBMZWFmIH0gZnJvbSBcIi4uL3N0cnVjdHVyZXMvZGVjaXNpb25UcmVlXCI7XHJcbi8vIERhdGFTZXRcclxuY29uc3QgZGF0YXNldDogRmVhdHVyZVtdID0gW1xyXG5cdFtcIkRLXCIsIFwiSmFudWFyeVwiLCBcIkZlYnJ1YXJ5XCIsIDU4LCBcIk1cIiwgXCJBXCIgXSxcclxuXHRbXCJFU1wiLCBcIkphbnVhcnlcIiwgXCJKYW51YXJ5XCIsIDcxLCBcIkZcIiwgXCJBXCIgXSxcclxuXHRbXCJFU1wiLCBcIkZlYnJ1YXJ5XCIsIFwiTWFyY2hcIiwgNjksIFwiTVwiLCBcIkFcIiBdLFxyXG5cdFtcIkFFXCIsIFwiRmVicnVhcnlcIiwgXCJGZWJydWFyeVwiLCA2MCwgXCJNXCIsIFwiRFwiIF0sXHJcblx0W1wiRE9cIiwgXCJEZWNlbWJlclwiLCBcIkphbnVhcnlcIiwgNTQsIFwiRlwiLCBcIkFcIiBdLFxyXG5cdFtcIkVTXCIsIFwiSmFudWFyeVwiLCBcIkphbnVhcnlcIiwgNjYsIFwiTVwiLCBcIkFcIiBdLFxyXG5cdFtcIkFFXCIsIFwiRmVicnVhcnlcIiwgXCJNYXJjaFwiLCA2NiwgXCJGXCIsIFwiQVwiIF0sXHJcblx0W1wiVEhcIiwgXCJGZWJydWFyeVwiLCBcIkZlYnJ1YXJ5XCIsIDU2LCBcIk1cIiwgXCJBXCIgXSxcclxuXHRbXCJUSFwiLCBcIkZlYnJ1YXJ5XCIsIFwiTWFyY2hcIiwgNTYsIFwiTVwiLCBcIkFcIiBdLFxyXG5cdFtcIklUXCIsIFwiRGVjZW1iZXJcIiwgXCJKYW51YXJ5XCIsIDY3LCBcIk1cIiwgXCJEXCIgXSxcclxuXHRbXCJJVFwiLCBcIkphbnVhcnlcIiwgXCJKYW51YXJ5XCIsIDkwLCBcIk1cIiwgXCJEXCIgXSxcclxuXHRbXCJOTFwiLCBcIkRlY2VtYmVyXCIsIFwiRGVjZW1iZXJcIiwgNzAsIFwiRlwiLCBcIkFcIiBdLFxyXG5cdFtcIk5MXCIsIFwiRGVjZW1iZXJcIiwgXCJKYW51YXJ5XCIsIDcwLCBcIkZcIiwgXCJBXCIgXSxcclxuXHRbXCJaQVwiLCBcIkphbnVhcnlcIiwgXCJKYW51YXJ5XCIsIDY5LCBcIkZcIiwgXCJBXCIgXSxcclxuXHRbXCJaQVwiLCBcIkphbnVhcnlcIiwgXCJKYW51YXJ5XCIsIDY5LCBcIkZcIiwgXCJBXCIgXSxcclxuXHRbXCJaQVwiLCBcIkphbnVhcnlcIiwgXCJKYW51YXJ5XCIsIDY5LCBcIkZcIiwgXCJBXCIgXSxcclxuXHRbXCJaQVwiLCBcIkphbnVhcnlcIiwgXCJKYW51YXJ5XCIsIDY5LCBcIkZcIiwgXCJBXCIgXSxcclxuXHRbXCJaQVwiLCBcIkphbnVhcnlcIiwgXCJKYW51YXJ5XCIsIDY5LCBcIkZcIiwgXCJBXCIgXSxcclxuXHRbXCJaQVwiLCBcIkphbnVhcnlcIiwgXCJKYW51YXJ5XCIsIDY5LCBcIkZcIiwgXCJBXCIgXSxcclxuXHRbXCJaQVwiLCBcIkphbnVhcnlcIiwgXCJKYW51YXJ5XCIsIDUxLCBcIkZcIiwgXCJBXCIgXSxcclxuXHRbXCJaQVwiLCBcIkphbnVhcnlcIiwgXCJKYW51YXJ5XCIsIDUxLCBcIkZcIiwgXCJBXCIgXSxcclxuXHRbXCJaQVwiLCBcIkphbnVhcnlcIiwgXCJKYW51YXJ5XCIsIDUxLCBcIkZcIiwgXCJBXCIgXSxcclxuXHRbXCJaQVwiLCBcIkphbnVhcnlcIiwgXCJKYW51YXJ5XCIsIDUxLCBcIkZcIiwgXCJBXCIgXSxcclxuXHRbXCJaQVwiLCBcIkphbnVhcnlcIiwgXCJKYW51YXJ5XCIsIDUxLCBcIkZcIiwgXCJBXCIgXSxcclxuXHRbXCJOTFwiLCBcIkZlYnJ1YXJ5XCIsIFwiRmVicnVhcnlcIiwgNTcsIFwiRlwiLCBcIkFcIiBdLFxyXG5cdFtcIk1YXCIsIFwiSmFudWFyeVwiLCBcIkZlYnJ1YXJ5XCIsIDU5LCBcIkZcIiwgXCJBXCIgXSxcclxuXHRbXCJERVwiLCBcIkphbnVhcnlcIiwgXCJKYW51YXJ5XCIsIDgwLCBcIk1cIiwgXCJBXCIgXSxcclxuXHRbXCJJVFwiLCBcIk1hcmNoXCIsIFwiTWFyY2hcIiwgNzAsIFwiTVwiLCBcIkFcIiBdLFxyXG5cdFtcIkVTXCIsIFwiRmVicnVhcnlcIiwgXCJGZWJydWFyeVwiLCA0MywgXCJNXCIsIFwiQVwiIF0sXHJcblx0W1wiU1JcIiwgXCJNYXJjaFwiLCBcIk1hcmNoXCIsIDU3LCBcIk1cIiwgXCJEXCIgXSxcclxuXTtcclxuXHJcbi8vIFR5cGVzIG9mIGRlY2lzb24gdHJlZXM6XHJcbi8vIC0gQ2F0ZWdvcmljYWwgdmFyaWFibGUgZGVjaXNpb24gdHJlZVxyXG4vLyAtIENvbnRpbnVvdXMgdmFyaWFibGUgZGVjaXNpb24gdHJlZVxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcblx0bGV0IHRhYmxlOiBIVE1MVGFibGVFbGVtZW50ID0gPEhUTUxUYWJsZUVsZW1lbnQ+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGJsRGF0YXNldFwiKTtcclxuXHRmb3IgKGNvbnN0IHJvdyBvZiBkYXRhc2V0KSB7XHJcblx0XHRsZXQgdHI6IEhUTUxUYWJsZVJvd0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcblx0XHRmb3IgKGNvbnN0IGNlbGwgb2Ygcm93KSB7XHJcblx0XHRcdGxldCB0ZDogSFRNTFRhYmxlQ2VsbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcblx0XHRcdHRkLnRleHRDb250ZW50ID0gY2VsbC50b1N0cmluZygpO1xyXG5cdFx0XHR0ci5hcHBlbmRDaGlsZCh0ZCk7XHJcblx0XHR9XHJcblx0XHR0YWJsZS5hcHBlbmQodHIpO1xyXG5cdH1cclxuXHRjb25zdCBkZWNpc2lvblRyZWU6IExlYWYgfCBEZWNpc2lvblRyZWUgPSBEZWNpc2lvblRyZWUuYnVpbGRUcmVlKGRhdGFzZXQsIDUpO1xyXG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGl2RGVjaXNpb25UcmVlXCIpLmFwcGVuZChEZWNpc2lvblRyZWUucHJpbnRUcmVlKGRlY2lzaW9uVHJlZSkpO1xyXG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=