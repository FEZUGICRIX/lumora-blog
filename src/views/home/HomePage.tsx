import Image from 'next/image'
import { BackgroundImage } from '@/shared/assets/images'

const HomePage = () => {
	return (
		<div>
			<section className='relative h-[35vh] w-full pt-20'>
				<Image
					src={BackgroundImage}
					alt='Banner'
					fill
					className='-z-10 object-cover object-center'
					priority
				/>
				<div className='bg-dark/10 absolute inset-0 flex items-center justify-center text-center dark:bg-black/70'>
					<div className='mt-[50px] px-4'>
						<h1 className='text-4xl font-extrabold text-white'>
							Мой блог о фронтенде
						</h1>
						<p className='mt-2 text-base text-zinc-300'>
							Пишу про React, TypeScript, архитектуру и pet-проекты
						</p>
					</div>
				</div>
			</section>
		</div>
	)
}

export default HomePage
