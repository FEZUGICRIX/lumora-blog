import type { StaticImageData } from 'next/image'

export interface Article {
	id: string
	title: string
	slug: string
	excerpt: string
	image: string | StaticImageData
	createdAt: number
	tags: string[]
	category: string
	readingTime: string
	views: number
	comments: number
	likes: number
	isNew?: boolean
	isLiked?: boolean
	author: {
		id: string
		name: string
		avatar: string
	}
}
