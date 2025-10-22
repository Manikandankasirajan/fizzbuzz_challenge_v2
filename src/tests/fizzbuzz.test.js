import fizzbuzz from "../fizzbuzz";

describe("Test cases for FizzBuzz program", () => {
	test('return "Fizz" if number is divisible by 3', () => {
		expect(fizzbuzz(3)).toBe("Fizz");
	});
	test('return "Buzz" if number is divisible by 5', () => {
		expect(fizzbuzz(5)).toBe("Buzz");
	});
});
