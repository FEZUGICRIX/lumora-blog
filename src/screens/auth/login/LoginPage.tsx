import { LoginForm } from '@/features/auth/login'

export const LoginPage = () => {
	return (
		<section className='container mx-auto flex  justify-center'>
			<div className='flex items-center justify-center'>
				<LoginForm />
			</div>
		</section>
	)
}
