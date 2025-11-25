import { VerifyEmail } from '@/features/auth/verify-email'

const VerifyEmailPage = () => {
	return (
		<section className='container mx-auto flex h-[100vh] justify-center'>
			<div className='flex items-center justify-center'>
				<VerifyEmail />
			</div>
		</section>
	)
}

export default VerifyEmailPage
