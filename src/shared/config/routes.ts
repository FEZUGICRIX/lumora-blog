type Routes = {
	home: string
	blog: {
		root: string
		post: (slug: string) => string
	}
	auth: {
		login: string
		register: string
		passwordRecovery: string
		newPassword: string
		verifyEmail: string
	}
	dashboard: {
		root: string
		settings: string
	}
	profile: (username: string) => string
}

export const routes: Routes = {
	home: '/',
	blog: {
		root: '/blog',
		post: slug => `/blog/${slug}`,
	},
	auth: {
		login: '/auth/login',
		register: '/auth/register',
		passwordRecovery: '/auth/password-recovery',
		newPassword: '/auth/new-password',
		verifyEmail: '/auth/verify-email',
	},
	dashboard: {
		root: '/dashboard',
		settings: '/dashboard/settings',
	},
	profile: username => `/users/${username}`,
}
