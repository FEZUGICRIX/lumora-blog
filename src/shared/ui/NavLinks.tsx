import Link from 'next/link'

export const NavLinks = () => {
	return (
		<nav className='items-center gap-6 text-[15px] font-medium text-zinc-800 md:flex dark:text-zinc-300'>
			<Link href='#' className='transition hover:text-pink-600'>
				Главная
			</Link>
			<Link href='#' className='transition hover:text-pink-600'>
				Понравившиеся
			</Link>
			<Link href='#' className='transition hover:text-pink-600'>
				Обо мне
			</Link>
			<Link href='#contacts' className='transition hover:text-pink-600'>
				Контакты
			</Link>
		</nav>
	)
}
