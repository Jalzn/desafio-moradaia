type ValidationFunction = (value: any) => [boolean, string]
type SchemaNodes<T> = { [K in keyof T]: SchemaNode }

type ValidationErrors<T> = { [K in keyof T]: string }

export class SchemaObject<T> {
	private nodes: SchemaNodes<T>

	constructor(obj: object) {
		this.nodes = {} as SchemaNodes<T>

		Object.entries(obj).forEach(([key, value]) => {
			this.nodes[key as keyof SchemaNodes<T>] = value
		})
	}

	validate(values: Record<string, any>) {
		const errors: ValidationErrors<T> = {} as ValidationErrors<T>

		Object.entries<SchemaNode>(this.nodes).forEach(([key, schema]) => {
			const value = values[key]
			const error = schema.validate(value)

			if (error) {
				errors[key as keyof T] = error
			}
		})

		if (Object.entries(errors).length === 0) {
			return undefined
		}

		return errors
	}
}

export class SchemaNode {
	private stack: ValidationFunction[]

	constructor() {
		this.stack = []
	}


	number() {
		const fn: ValidationFunction = (value) => {
			if (typeof value !== "number") {
				return [false, "input is not a number."]
			}
			return [true, ""]
		}

		this.stack.unshift(fn)

		return this
	}

	equals(expected: number) {
		const fn: ValidationFunction = (val) => {
			if (val !== expected) {
				return [false, `input is not equals ${expected}.`]
			}
			return [true, ""]
		}

		this.stack.unshift(fn)

		return this
	}

	validate<T>(val: T) {
		let validation: string | undefined;

		this.stack.forEach(fn => {
			const [valid, message] = fn(val)

			if (!valid) {
				validation = message
				return
			}
		})

		return validation
	}
}

