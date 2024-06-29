import { AtmService } from "./atm.service"

describe("ATM Service", () => {
	it("Should return optimal solution for amount 12", () => {
		const atmService = new AtmService()

		const result = atmService.saque(12)

		expect(result).toMatchObject({
			100: 0,
			50: 0,
			20: 0,
			10: 1,
			5: 0,
			2: 1
		})
	})

	it("Should return optimal solution for amount 380", () => {
		const atmService = new AtmService()

		const result = atmService.saque(380)

		expect(result).toMatchObject({
			100: 3,
			50: 1,
			20: 1,
			10: 1,
			5: 0,
			2: 0
		})
	})

	it("Shoud fail to return with invalid amount", () => {
		const atmService = new AtmService()

		expect(() => atmService.saque(1)).toThrow()
	})
})
