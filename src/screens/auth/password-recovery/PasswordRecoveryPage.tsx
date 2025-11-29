import { PasswordRecoveryForm } from '@/features/auth/password-recovery'

export const PasswordRecoveryPage = () => {
	return (
		<section className='container mx-auto flex h-[100vh] justify-center'>
			<div className='flex items-center justify-center'>
				<PasswordRecoveryForm />
			</div>
		</section>
	)
}
