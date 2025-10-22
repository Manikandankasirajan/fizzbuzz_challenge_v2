import fizzRule from "./fizzRule";
import buzzRule from "./buzzRule";
import fizzbuzzRule from "./fizzbuzzRule";
import defaultRule from "./defaultRule";

export default function rangeRule(rangeArray) {
	const rules = [fizzRule, buzzRule, fizzbuzzRule, defaultRule];
	const resultArray = [];
	for (let index = rangeArray[0]; index <= rangeArray[1]; index++) {
		for (const rule of rules) {
			const result = rule(index);
			if (result) {
				resultArray.push(result);
			}
		}
	}
	return resultArray;
}
