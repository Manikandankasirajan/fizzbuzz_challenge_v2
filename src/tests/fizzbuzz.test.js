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
	test("return the number if the number is not divisible by 3 or 5", () => {
		expect(fizzbuzz(1)).toBe(1);
	});
	test('return "FizzBuzz" if the number is 0 since 0 is divisible by both 3 and 5', () => {
		expect(fizzbuzz(0)).toBe("FizzBuzz");
	});
	test('return "Fizz" if any negative number is divisible by 3', () => {
		expect(fizzbuzz(-3)).toBe("Fizz");
	});
	test('return "Buzz" if negative number is divisible by 5', () => {
		expect(fizzbuzz(-5)).toBe("Buzz");
	});
});
