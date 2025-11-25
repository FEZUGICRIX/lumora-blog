import z from 'zod'

export const SettingsSchema = z.object({
	displayName: z.string().min(1, { error: 'Введите имя' }),
	email: z.email({ error: 'Некорректный email' }),
	isTwoFactorEnabled: z.boolean(),
})

export type TypeSettingsSchema = z.infer<typeof SettingsSchema>
