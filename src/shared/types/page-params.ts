import type { Locale } from '@/features/locale-switcher'

export interface ArticlePageParams {
	params: {
		slug: string
		locale: Locale
	}
}
