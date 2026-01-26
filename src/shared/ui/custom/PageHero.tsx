'use client'

import type { FullArticle } from '@/entities/article'
import { AuthorCard } from '@/entities/user/ui'

import { ImageDarkOverlay } from '@/shared/ui/custom'

import LightRays from '../ui-kit/LightRays'
import SplitText from '../ui-kit/SplitText'

interface PageHeroProps {
	title?: string
	subtitle?: string
	image?: string | null
	isCenter?: boolean
	isAnimatedTitle?: boolean
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
	isAnimatedTitle = true,
	children,
}: PageHeroProps) => {
	if (children) {
		return (
			<section className='relative mx-auto h-[40vh] min-h-100 w-full sm:min-h-95'>
				<div className='relative h-full w-full'>
					{image ? (
						<>
							<img
								src={image}
								alt={title}
								className='h-full w-full transform object-cover object-center transition-transform duration-700 ease-in-out group-hover:scale-105'
							/>
							<ImageDarkOverlay />
						</>
					) : (
						<LightRays
							raysSpeed={1.6}
							lightSpread={4}
							rayLength={8}
							fadeDistance={1.4}
							saturation={1.4}
							mouseInfluence={0.105}
							noiseAmount={0.39}
						/>
					)}
				</div>

				<div className='absolute inset-0 flex items-center'>
					<div className='container mx-auto'>{children}</div>
				</div>
			</section>
		)
	}
	return (
		<section className='group relative mx-auto h-[40vh] min-h-80 w-full overflow-hidden transition-all'>
			<div className='mx-auto h-full'>
				{children ? (
					<section className='relative mx-auto h-[40vh] min-h-85 w-full'>
						{children}
					</section>
				) : (
					<div className='relative h-full w-full'>
						{image ? (
							<>
								<img
									src={image}
									alt={title}
									className='h-full w-full transform object-cover object-center transition-transform duration-700 ease-in-out group-hover:scale-105'
								/>
								<ImageDarkOverlay />
							</>
						) : (
							<LightRays
								raysSpeed={1.6}
								lightSpread={4}
								rayLength={8}
								fadeDistance={1.4}
								saturation={1.4}
								mouseInfluence={0.105}
								noiseAmount={0.39}
							/>
						)}
					</div>
				)}

				<div className={`absolute inset-0 flex items-center`}>
					<div className='container mx-auto'>
						<div
							className={`container mt-20 flex flex-col md:mt-[50px] ${isCenter ? 'items-center' : 'items-start'} px-4`}
						>
							<div className='space-y-4'>
								<div className='space-y-3'>
									{isAnimatedTitle ? (
										title && (
											<SplitText
												text={title}
												className={`text-left text-4xl font-extrabold text-white dark:text-white ${!image && 'mix-blend-difference'}`}
												delay={100}
												duration={0.5}
												ease='power3.out'
												splitType='words'
												from={{ opacity: 0, y: 40 }}
												to={{ opacity: 1, y: 0 }}
												threshold={0.1}
												rootMargin='-100px'
												textAlign={isCenter ? 'center' : 'left'}
											/>
										)
									) : (
										<h1
											className={`z-10 text-4xl font-extrabold text-white ${!image && 'mix-blend-difference'}`}
										>
											{title}
										</h1>
									)}

									<p
										className={`text-ti mt-2 text-base text-white ${!image && 'mix-blend-difference'}`}
									>
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
