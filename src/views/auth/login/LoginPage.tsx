import { LoginForm } from '@/features/auth/login'

const LoginPage = () => {
	return (
		<section className='container mx-auto flex h-[100vh] justify-center'>
			<div className='flex items-center justify-center'>
				<LoginForm />
			</div>
		</section>
	)
}

export default LoginPage
