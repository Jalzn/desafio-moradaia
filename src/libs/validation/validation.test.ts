import validation from "."

describe("Validation schema", () => {
	it("Should success with valid number input", () => {
		const schema = validation.schema().number()
		const error = schema.validate(0)

		expect(error).toBeUndefined()
	})

	it("Should fail with not number input", () => {
		const schema = validation.schema().number()
		const error = schema.validate("foobar")

		expect(error).toBeDefined()
		expect(error).toBe("input is not a number.")
	})
})

describe("Validation object", () => {
	it("Should success to validate a object", () => {
		const schema = validation.object({
			a: validation.schema().number().equals(5),
			b: validation.schema().number().equals(8)
		})

		const errors = schema.validate({
			a: 5,
			b: 8
		})

		expect(errors).toBeUndefined()
	})

	it("Should success to validate a object", () => {
		const schema = validation.object({
			a: validation.schema().number().equals(5),
			b: validation.schema().number().equals(8)
		})

		const errors = schema.validate({
			a: 5,
			b: 10
		})

		expect(errors).toBeDefined()
		expect(errors).toMatchObject({
			b: "input is not equals 8."
		})
	})
})
