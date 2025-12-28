import { RegisterForm } from '@/features/auth/register'

export const RegisterPage = () => {
	return (
		<section className='container mx-auto flex justify-center'>
			<div className='flex items-center justify-center'>
				<RegisterForm />
			</div>
		</section>
	)
}
