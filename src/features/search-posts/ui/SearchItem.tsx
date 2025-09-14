import Image from 'next/image'
import { highlightMatch } from '@/shared/lib'
import { BackgroundImage } from '@/shared/assets/images'
import { useFormattedDate } from '@/shared/config/dayjs'
import type { ArticlePreview } from '@/entities/article'

type SearchItemProps = Pick<
	ArticlePreview,
	'id' | 'title' | 'description' | 'coverImage' | 'createdAt' | 'author'
>

export const SearchItem = ({
	id,
	coverImage,
	title,
	description,
	author,
	createdAt,
	query,
}: SearchItemProps & { query: string }) => {
	const formattedDate = useFormattedDate(createdAt)

	return (
		<div
			key={id}
			className='glass dark:glass-dark hover:bg-card flex items-center gap-4 rounded-2xl p-3 shadow-sm backdrop-blur-lg transition'
		>
			{/* Изображение статьи */}
			<Image
				src={coverImage ?? BackgroundImage}
				alt={title}
				width={128}
				height={80}
				className='h-[70px] w-[100px] flex-shrink-0 rounded-xl object-cover lg:h-[88px] lg:w-[140px]'
			/>

			{/* Контент */}
			<div className='flex flex-col justify-between'>
				<h3 className='text-foreground line-clamp-2 text-base font-semibold hover:underline dark:text-white'>
					{highlightMatch(title, query)}
				</h3>
				<p className='text-muted-foreground line-clamp-2 text-sm'>
					{highlightMatch(description, query)}
				</p>

				<div className='text-muted-foreground mt-2 flex items-center gap-2 text-xs'>
					<img
						src={author.avatar}
						alt={author.firstName}
						className='h-5 max-w-5 rounded-full'
					/>

					<div className='gap-2 sm:flex'>
						<div>
							<span>{highlightMatch(author.firstName, query)} </span>
							{author.lastName && (
								<span>{highlightMatch(author.lastName, query)}</span>
							)}
						</div>
						<span className='hidden sm:block'>•</span>
						<span>{formattedDate}</span>
					</div>
				</div>
			</div>
		</div>
	)
}
