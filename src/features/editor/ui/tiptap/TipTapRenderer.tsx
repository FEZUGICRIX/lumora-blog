'use client'

import { useMemo, useState, useEffect } from 'react'
import { generateHTML } from '@tiptap/html'
import { extensions } from '@/features/editor/config/extensions'
import type { JSONContent } from '@tiptap/react'

interface TipTapRendererProps {
	/**
	 * JSON-контент из TipTap редактора для клиентского рендеринга
	 * Используется для интерактивных элементов и точного отображения
	 */
	contentJson: JSONContent | null

	/**
	 * Предварительно сгенерированный HTML для серверного рендеринга (SSR)
	 * Критически важен для SEO - обеспечивает индексацию контента поисковиками
	 * При отсутствии используется клиентский рендеринг из JSON
	 */
	contentHtml?: string

	/**
	 * Дополнительные CSS-классы для кастомизации внешнего вида
	 */
	className?: string
}

/**
 * Гибридный рендерер контента TipTap с поддержкой SEO
 *
 * ## Особенности работы:
 * 1. На сервере: Отображает предварительно сгенерированный HTML (contentHtml)
 *    для мгновенной отдачи контента поисковым ботам и пользователям
 * 2. На клиенте: После гидратации заменяет на рендеринг из JSON (contentJson)
 *    для поддержки интерактивных элементов и точного форматирования
 *
 * ## Почему это важно:
 * - ✅ Сохраняет SEO-оптимизацию (контент в исходном HTML)
 * - ✅ Обеспечивает плавный пользовательский опыт
 * - ✅ Поддерживает сложное форматирование TipTap
 * - ✅ Отказоустойчив - есть fallback на клиентский рендеринг
 *
 * @example
 * // Для максимального SEO используйте оба параметра:
 * <TipTapRenderer
 *   contentJson={article.contentJson}
 *   contentHtml={article.contentHtml}
 * />
 *
 * @example
 * // Минимальное использование (только клиентский рендеринг):
 * <TipTapRenderer contentJson={article.contentJson} />
 */
export function TipTapRenderer({
	contentJson,
	contentHtml = '',
	className = '',
}: TipTapRendererProps) {
	const [isClient, setIsClient] = useState(false)

	useEffect(() => {
		setIsClient(true)
	}, [])

	const htmlContent = useMemo(() => {
		if (!contentJson) return ''
		try {
			return generateHTML(contentJson, extensions)
		} catch (error) {
			console.error('Error generating HTML from TipTap JSON:', error)
			return ''
		}
	}, [contentJson])

	// SSR рендеринг - для поисковиков и первоначальной отрисовки
	if (!isClient && contentHtml) {
		return (
			<div
				className={`prose prose-md dark:prose-invert prose-headings:font-semibold max-w-none ${className}`}
				dangerouslySetInnerHTML={{ __html: contentHtml }}
			/>
		)
	}

	if (!htmlContent) return null

	// Клиентский рендеринг - после гидратации
	return (
		<div
			className={`prose prose-md dark:prose-invert prose-headings:font-semibold max-w-none ${className}`}
			dangerouslySetInnerHTML={{ __html: htmlContent }}
		/>
	)
}
