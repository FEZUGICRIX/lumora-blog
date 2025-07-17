export interface Article {
	id: string
	title: string
	excerpt: string
	image: string
	createdAt: string
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
