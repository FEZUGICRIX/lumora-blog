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
	profile: (username: string) => string
	profileEdit: string
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
	profile: username => `/user/${username}`,
	profileEdit: '/settings/profile',
}
