import { Divider } from '@/shared/ui/custom/Divider'
import { GithubIcon } from '@/shared/ui/icon'
import { GoogleIcon } from '@/shared/ui/icon/google-icon'
import { Button } from '@/shared/ui/ui-kit'

export const AuthSocial = () => {
	return (
		<div className='flex flex-col'>
			<div className='grid w-full grid-cols-2 gap-3'>
				<Button className='w-full'>
					<GoogleIcon />
					Google
				</Button>

				<Button className='w-full'>
					<GithubIcon className='rounded-4xl text-white dark:text-black' />
					GitHub
				</Button>
			</div>

			<Divider label='Или' />
		</div>
	)
}
