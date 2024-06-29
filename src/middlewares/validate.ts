import { SchemaObject } from "@/libs/validation/validation"
import { NextFunction, Response, Request } from "express"

export const validate = (schema: SchemaObject<any>) => (req: Request, res: Response, next: NextFunction) => {
	const errors = schema.validate(req.body)

	if (errors) {
		return res.status(422).json(errors)
	}

	return next()
}
