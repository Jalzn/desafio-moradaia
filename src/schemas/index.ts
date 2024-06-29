import validation from "@/libs/validation"

export const saqueSchema = validation.object({
	valor: validation.schema().number(),
})
