import { z } from 'zod'

// 1. Переиспользуемый опциональный URL-тип
// Принимает: Валидный URL, Пустую строку (''), или undefined
export const ZodOptionalUrl = z
	.union([
		z.literal(''),
		z.url('URL-адрес должен быть валидным (например, https://lumora.dev)'),
	])
	.optional()

export const ZodOptionalString = z.string().optional().or(z.literal(''))
