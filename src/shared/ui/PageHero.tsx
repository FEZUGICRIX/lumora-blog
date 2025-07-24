'use client'

import Image, { type StaticImageData } from 'next/image'
import type { Article } from '@/entities/article'
import { AuthorCard } from '@/entities/user'
import { ImageDarkOverlay } from './ImageDarkOverlay'

interface PageHeroProps {
	title: string
	subtitle: string
	image: StaticImageData | string
	isCenter?: boolean
	author?: Article['author']
	createdAt: number
}

export const PageHero = ({
	title,
	subtitle,
	image,
	author,
	createdAt,
	isCenter = false,
}: PageHeroProps) => {
	return (
		<section className='relative mx-auto h-[40vh] w-full pt-20'>
			<div className='mx-auto'>
				<Image
					src={image}
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

								{author && (
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
