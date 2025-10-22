import fizzRule from "./rules/fizzRule";
import buzzRule from "./rules/buzzRule";
import fizzbuzzRule from "./rules/fizzbuzzRule";

export default function fizzbuzz(num) {
	const rules = [fizzRule, buzzRule, fizzbuzzRule];
	for (const rule of rules) {
		const result = rule(num);
		if (result) {
			return result;
		}
	}
}
