import { Request, Response } from "express";

import { AtmService } from "@/services/atm.service";

export class AtmController {
	atmService: AtmService

	constructor(atmService: AtmService) {
		this.atmService = atmService
	}

	saque(req: Request, res: Response) {
		const { valor } = req.body

		const notas = this.atmService.saque(valor)

		return res.json(notas)
	}
}
