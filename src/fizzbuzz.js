import fizzRule from "./rules/fizzRule";
import buzzRule from "./rules/buzzRule";

export default function fizzbuzz(num) {
	const rules = [fizzRule, buzzRule];
	for (const rule of rules) {
		const result = rule(num);
		if (result) {
			return result;
		}
	}
}
