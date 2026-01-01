import { z } from 'zod'

// 1. Переиспользуемый опциональный URL-тип
// Принимает: Валидный URL, Пустую строку (''), или undefined
export const createZodOptionalUrl = (errorMessage: string) => z
	.union([
		z.literal(''),
		z.url(errorMessage),
	])
	.optional()

// Для обратной совместимости - используется ключ для перевода
export const ZodOptionalUrl = createZodOptionalUrl('invalidUrl')

export const ZodOptionalString = z.string().optional().or(z.literal(''))
