import { z } from 'zod'

const envSchema = z.object({
	apiUrl: z.url(),
	googleRecaptchaSiteKey: z.string(),
	nodeEnv: z.enum(['development', 'production', 'test']).default('development'),
})

// TODO: сделать так, чтобы если есть ошибка, падал при сборке
export const env = Object.freeze(
	envSchema.parse({
		apiUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
		googleRecaptchaSiteKey: process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY,
		nodeEnv: process.env.NODE_ENV,
	}),
)
