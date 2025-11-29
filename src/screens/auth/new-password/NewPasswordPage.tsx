import { NewPasswordForm } from '@/features/auth/new-password'

export const NewPasswordPage = () => {
	return (
		<section className='container mx-auto flex h-[100vh] justify-center'>
			<div className='flex items-center justify-center'>
				<NewPasswordForm />
			</div>
		</section>
	)
}
