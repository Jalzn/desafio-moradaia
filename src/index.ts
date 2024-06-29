import express from 'express'
import type { NextFunction, Request, Response } from 'express'
import { saqueSchema } from './schemas'

const app = express()
const port = 5000

app.use(express.json())

app.post("/api/saque", (req: Request, res: Response) => {
	const validationErrors = saqueSchema.validate(req.body)

	if (validationErrors) {
		return res.status(422).json(validationErrors)
	}

	throw new Error("Endpoint not implemented.")
})

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
	return res.status(500).json({
		message: err.message
	})
})

app.listen(port, () => {
	console.log(`[Server] Listening on ${port}...`)
})
