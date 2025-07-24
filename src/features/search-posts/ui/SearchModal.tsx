'use client'

import { useState } from 'react'
import { useFuseSearch } from '@/shared/hooks/useFuseSearch'
import { useDebounce } from '@/shared/hooks/useDebounce'
import { SearchItem } from './SearchItem'
import { AnimatedHeight } from '@/shared/ui/AnimatedHeight'
import { Input } from '@/shared/ui/ui-kit/input'
import { mockArticles } from '@/shared/constants/mock/mock-articles'
import { SearchIcon } from '@/shared/ui/icon'
import { AnimatePresence } from 'framer-motion'

export const SearchModal = () => {
	const [query, setQuery] = useState('')
	const debouncedQuery = useDebounce(query, 200)

	const results = useFuseSearch(mockArticles, debouncedQuery, {
		keys: ['title', 'excerpt', 'author.name'],
		threshold: 0.3,
	})

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
							<p className='text-muted-foreground text-sm'>
								Найдено: {results.length}
							</p>
							<div className='max-h-[70vh] space-y-4 overflow-y-auto pr-1'>
								{results.map((article) => (
									<SearchItem
										key={article.id}
										id={article.id}
										image={article.image}
										title={article.title}
										excerpt={article.excerpt}
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
