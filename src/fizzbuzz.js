import fizzRule from "./rules/fizzRule";
import buzzRule from "./rules/buzzRule";
import fizzbuzzRule from "./rules/fizzbuzzRule";
import defaultRule from "./rules/defaultRule";
import invalidInputRule from "./rules/invalidInputRule";

export default function fizzbuzz(num) {
	const rules = [
		invalidInputRule,
		fizzRule,
		buzzRule,
		fizzbuzzRule,
		defaultRule,
	];
	for (const rule of rules) {
		const result = rule(num);
		if (result) {
			return result;
		}
	}
}
