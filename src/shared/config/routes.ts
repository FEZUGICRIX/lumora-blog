type Routes = {
	home: string
	blog: {
		root: string
		post: (slug: string) => string
	}
	auth: {
		login: string
		register: string
	}
	profile: (username: string) => string
}

export const routes: Routes = {
	home: '/',
	blog: {
		root: '/blog',
		post: (slug) => `/blog/${slug}`,
	},
	auth: {
		login: '/login',
		register: '/register',
	},
	profile: (username) => `/users/${username}`,
}
