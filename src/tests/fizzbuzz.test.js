import fizzbuzz from "../fizzbuzz";

describe("Test cases for FizzBuzz program", () => {
	test('return "Fizz" if number is divisible by 3', () => {
		expect(fizzbuzz(3)).toBe("Fizz");
	});
	test('return "Buzz" if number is divisible by 5', () => {
		expect(fizzbuzz(5)).toBe("Buzz");
	});
	test('return "FizzBuzz" if number is divisible by both 3 and 5', () => {
		expect(fizzbuzz(15)).toBe("FizzBuzz");
	});
});
