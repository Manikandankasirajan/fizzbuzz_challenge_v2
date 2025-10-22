export default function buzzRule(num) {
	return num % 5 === 0 && num % 3 !== 0 ? "Buzz" : null;
}
