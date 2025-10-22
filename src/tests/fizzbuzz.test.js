import fizzbuzz from "../fizzbuzz";

test('return "Fizz" if number is divisible by 3', () => {
	expect(fizzbuzz(3)).toBe("Fizz");
});
