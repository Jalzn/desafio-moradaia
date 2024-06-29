import express from 'express'
import type { Request, Response } from 'express'
import { saqueSchema } from './schemas'
import { AtmService } from './services/atm.service'
import { AtmController } from './controllers/atm.controller'
import middlewares from './middlewares'

const app = express()
const port = 5000

const atmService = new AtmService()
const atmController = new AtmController(atmService)

app.use(express.json())

app.post("/api/saque",
	middlewares.validate(saqueSchema),
	(req: Request, res: Response) => atmController.saque(req, res))

app.use(middlewares.error())

app.listen(port, () => {
	console.log(`[Server] Listening on ${port}...`)
})
