import type { StaticImageData } from 'next/image'

export interface Article {
	id: string
	title: string
	slug: string
	description: string
	content: string
	coverImage?: string | StaticImageData | null

	published: boolean
	publishedAt?: string
	tags: string[]
	createdAt: string
	updatedAt: string

	// TODO: Add type for category
	category: {
		id: string
		name: string
	}
	readingTime: number
	views: number

	//TODO: Add type for comments
	comments: {
		id: string
		content: string
		createdAt: string
		updatedAt: string
		author: {
			id: string
			firstName: string
			lastName?: string
			avatar?: string
		}
	}[]
	likes: number
	isNew?: boolean
	isLiked?: boolean

	// TODO: Add type for author
	author: {
		id: string
		firstName: string
		lastName?: string
		avatar?: string
	}
}
