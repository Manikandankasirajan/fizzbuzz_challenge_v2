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
	test('additional test case to return "FizzBuzz" for other numbers that are divisible by both 3 and 5', () => {
		expect(fizzbuzz(45)).toBe("FizzBuzz");
	});
	test("return the number if the number is not divisible by 3 or 5", () => {
		expect(fizzbuzz(1)).toBe(1);
	});
	test('return "FizzBuzz" if the number is 0 since 0 is divisible by both 3 and 5', () => {
		expect(fizzbuzz(0)).toBe("FizzBuzz");
	});
	test("test case to handle negative inputs", () => {
		expect(fizzbuzz(-3)).toBe("Fizz");
		expect(fizzbuzz(-5)).toBe("Buzz");
		expect(fizzbuzz(-15)).toBe("FizzBuzz");
	});

	test("return FizzBuzz sequence between any given range", () => {
		const result = [];
		for (let index = 1; index <= 15; index++) {
			result.push(fizzbuzz(index));
		}
		expect(result).toStrictEqual([
			1,
			2,
			"Fizz",
			4,
			"Buzz",
			"Fizz",
			7,
			8,
			"Fizz",
			"Buzz",
			11,
			"Fizz",
			13,
			14,
			"FizzBuzz",
		]);
	});
	test("return Error Message for invalid input", () => {
		expect(fizzbuzz("15")).toBe("Invalid Input");
	});
});
