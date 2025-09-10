'use client'

import { useMemo, useState } from 'react'
import { useGetArticlesQuery } from '@/entities/article/api'
import { useFuseSearch } from '@/shared/hooks'
import { useDebounce } from '@/shared/hooks'
import { AnimatedHeight } from '@/shared/ui/AnimatedHeight'
import { AnimatePresence } from 'framer-motion'
import { SearchItem } from './SearchItem'
import { SearchModalSkeleton } from './skeletons/SearchModalSkeleton'
import { SearchIcon } from '@/shared/ui/icon'
import { Input } from '@/shared/ui/ui-kit/input'

// TODO: Реализовать запрос статей через RTK Query с правильной типизацией
export const SearchModal = () => {
	const [query, setQuery] = useState('')
	const debouncedQuery = useDebounce(query, 200)

	const { data, isLoading } = useGetArticlesQuery()

	const fuseOptions = useMemo(
		() => ({
			keys: [
				'title',
				'description',
				'author.firstName',
				'author.lastName',
			],
			threshold: 0.3,
		}),
		[],
	)

	const results = useFuseSearch(data ?? [], debouncedQuery, fuseOptions)

	if (isLoading) return <SearchModalSkeleton />

	return (
		<div className='space-y-6'>
			<div className='relative'>
				<SearchIcon className='absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2' />
				<Input
					onChange={(e) => setQuery(e.target.value)}
					placeholder='Поиск статьи...'
					type='search'
					className='glass-dark h-11 rounded-xl pl-10 shadow-sm backdrop-blur-md'
				/>
			</div>

			<AnimatePresence initial={false} mode='wait'>
				{results.length > 0 ? (
					<AnimatedHeight key='search-results'>
						<div className='space-y-4'>
							<p className='dark:text-muted-foreground text-sm text-gray-800'>
								Найдено: {results.length}
							</p>
							<div className='max-h-[70vh] space-y-4 overflow-y-auto pr-1'>
								{/* TODO: Реализовать запрос статей через RTK Query с правильной типизацией */}

								{results.map((article) => (
									<SearchItem
										key={article.id}
										id={article.id}
										coverImage={article.coverImage}
										title={article.title}
										description={article.description}
										author={article.author}
										createdAt={article.createdAt}
										query={query}
									/>
								))}
							</div>
						</div>
					</AnimatedHeight>
				) : (
					<AnimatedHeight key='no-results'>
						<h3 className='text-muted-foreground text-center text-xl'>
							Ничего не найдено
						</h3>
					</AnimatedHeight>
				)}
			</AnimatePresence>
		</div>
	)
}
