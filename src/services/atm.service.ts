type SaqueNotas = {
	100: number,
	50: number,
	20: number,
	10: number,
	5: number
	2: number
}

export class AtmService {
	notas = [100, 50, 20, 10, 5, 2]

	saque(value: number): SaqueNotas {
		// Stores all previous calculated result
		const memo: Record<number, number[]> = {}

		// Calculate the minimum amount of notas to a given value
		// This function implements a dynamic programming algorithm for optimized result 
		const min = (amount: number, acc: number[]): number[] | undefined => {
			// Check if there is a already calculated result
			if (memo[amount]) {
				return memo[amount]
			}

			// If success returns empty value
			if (amount == 0) {
				return []
			}

			// Return undenfined means there is no solution for this node
			if (amount < 0) {
				return undefined
			}

			const results: number[][] = []

			// Calculate all cases for the remaining amount
			for (let i = 0; i < this.notas.length; i++) {
				const nota = this.notas[i]

				// Get the minimum notas for the remaining amount
				const result = min(amount - nota, [nota, ...acc])

				// Only use valid result for building result
				if (result) {
					results.push([nota, ...result])
				}
			}

			// If there is no valid solution return empty
			if (results.length === 0) {
				return undefined
			}

			// Get the result with minimum notas
			const minNotas = results.reduce((prev, curr) => prev.length <= curr.length ? prev : curr)

			// Save the non calculated result
			memo[amount] = minNotas

			return minNotas
		}

		const result = min(value, [])

		// If there is no notas for this amount throws error
		if (!result) {
			throw new Error("Failed to saque this amount.")
		}

		const notas: SaqueNotas = {
			100: 0,
			50: 0,
			20: 0,
			10: 0,
			5: 0,
			2: 0
		}

		result.forEach(nota => notas[nota as keyof SaqueNotas] += 1)

		return notas
	}
}
