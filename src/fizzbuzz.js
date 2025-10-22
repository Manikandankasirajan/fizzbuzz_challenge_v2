import fizzRule from "./rules/fizzRules";

export default function fizzbuzz(num) {
	const rules = [fizzRule];
	for (const rule of rules) {
		const result = rule(num);
		if (result) {
			return result;
		}
	}
}
