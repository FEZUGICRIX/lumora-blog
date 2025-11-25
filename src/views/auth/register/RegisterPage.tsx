import { RegisterForm } from '@/features/auth/register'

const RegisterPage = () => {
	return (
		<section className='container mx-auto flex h-[100vh] justify-center'>
			<div className='flex items-center justify-center'>
				<RegisterForm />
			</div>
		</section>
	)
}

export default RegisterPage
