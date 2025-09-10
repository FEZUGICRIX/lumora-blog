'use client'

import Image, { type StaticImageData } from 'next/image'
import type { FullArticle } from '@/entities/article'
import { AuthorCard } from '@/entities/user'
import { ImageDarkOverlay } from './ImageDarkOverlay'
import { BackgroundImage } from '../assets/images'

interface PageHeroProps {
	title: string
	subtitle: string
	image: StaticImageData | string
	isCenter?: boolean
	author?: FullArticle['author']
	createdAt?: string
}

export const PageHero = ({
	subtitle,
	image,
	title,
	author,
	createdAt,
	isCenter = false,
}: PageHeroProps) => {
	return (
		<section className='relative mx-auto h-[40vh] min-h-80 w-full pt-20'>
			<div className='mx-auto'>
				{/* TODO: если image невалидный, рендерить BackgroundImage */}
				<Image
					src={image ?? BackgroundImage}
					alt='Banner'
					fill
					className='object-cover object-center'
					priority
				/>
				<ImageDarkOverlay />
				<div className={`absolute inset-0 z-[2] flex items-center`}>
					<div className='container mx-auto'>
						<div
							className={`container mt-[80px] flex flex-col md:mt-[50px] ${isCenter ? 'items-center' : 'items-start'} px-4`}
						>
							<div className='space-y-4'>
								<div className='space-y-3'>
									<h1 className='text-4xl font-extrabold text-white'>
										{title}
									</h1>
									<p className='mt-2 text-base text-zinc-300'>
										{subtitle}
									</p>
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
