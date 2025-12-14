'use client'

import type { FullArticle } from '@/entities/article'
import { AuthorCard } from '@/entities/user/ui'

import { ImageDarkOverlay } from '@/shared/ui/custom'

interface PageHeroProps {
	title?: string
	subtitle?: string
	image?: string
	isCenter?: boolean
	author?: FullArticle['author']
	createdAt?: string | Date
	children?: React.ReactNode
}

export const PageHero = ({
	subtitle,
	image,
	title,
	author,
	createdAt,
	isCenter = false,
	children,
}: PageHeroProps) => {
	if (children) {
		return (
			<section className='relative mx-auto h-[40vh] min-h-80 w-full'>
				{children}
			</section>
		)
	}
	return (
		<section className='group relative mx-auto h-[40vh] min-h-80 w-full overflow-hidden transition-all duration-700'>
			<div className='mx-auto h-full'>
				{children ? (
					<section className='relative mx-auto h-[40vh] min-h-85 w-full'>
						{children}
					</section>
				) : (
					<div className='relative h-full w-full'>
						<img
							src={image}
							alt={title}
							className='h-full w-full transform object-cover object-center transition-transform duration-700 ease-in-out group-hover:scale-110'
						/>
						<ImageDarkOverlay />
					</div>
				)}

				<div className={`absolute inset-0 flex items-center`}>
					<div className='container mx-auto'>
						<div
							className={`container mt-[80px] flex flex-col md:mt-[50px] ${isCenter ? 'items-center' : 'items-start'} px-4`}
						>
							<div className='space-y-4'>
								<div className='space-y-3'>
									<h1 className='text-4xl font-extrabold text-white'>
										{title}
									</h1>
									<p className='mt-2 text-base text-zinc-300'>{subtitle}</p>
								</div>

								{author && typeof createdAt === 'number' && (
									<AuthorCard author={author} createdAt={createdAt} />
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
