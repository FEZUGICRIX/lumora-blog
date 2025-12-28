import { dayjs } from '@/shared/config/dayjs'

const NEW_ARTICLE_DAYS_THRESHOLD = 3

/**
 * Проверяет, является ли статья "новой" (опубликована менее N дней назад)
 * @param createdAt - дата создания статьи (ISO string или timestamp)
 * @param thresholdDays - порог в днях (по умолчанию 3)
 */
export const isNewArticle = (
	createdAt: string | number | Date,
	thresholdDays: number = NEW_ARTICLE_DAYS_THRESHOLD
): boolean => {
	const articleDate = dayjs(createdAt)
	const now = dayjs()
	const diffInDays = now.diff(articleDate, 'day')

	return diffInDays < thresholdDays
}
