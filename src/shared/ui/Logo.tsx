import { LogoImage } from '@/shared/assets/images'
import { routes } from '@/shared/config/routes'
import Image from 'next/image'
import Link from 'next/link'

export const Logo = () => {
	return (
		<Link href={routes.home} className='flex items-center gap-1.5'>
			<Image
				src={LogoImage}
				alt='logo'
				className='h-11 w-11 drop-shadow-[0_1px_2px_rgba(0,0,0,0.15)] transition-all duration-300'
			/>
			<span className='text-[22px] font-semibold tracking-tight text-zinc-800 dark:text-zinc-300'>
				Lumora
			</span>
		</Link>
	)
}
