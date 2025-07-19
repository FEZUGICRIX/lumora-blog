'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SheetClose } from '@/shared/ui/ui-kit/sheet'
import clsx from 'clsx'
import type { JSX } from 'react'

type NavLink = {
	href: string
	label: string
	external?: boolean
}

const links: NavLink[] = [
	{ href: '/', label: 'Главная' },
	{ href: '/favorites', label: 'Понравившиеся' },
	{ href: '/about', label: 'Обо мне' },
	{ href: '/#contacts', label: 'Контакты' },
]

type Props = {
	direction?: 'row' | 'col'
	withSheetClose?: boolean
	className?: string
}

export const NavLinks = ({
	direction = 'row',
	withSheetClose = false,
	className = '',
}: Props) => {
	const pathname = usePathname()

	const navClass = clsx(
		'text-lg lg:text-[17px] font-medium',
		direction === 'col'
			? 'flex flex-col gap-4 px-1 pt-2'
			: 'flex items-center gap-6',
		'text-zinc-800 dark:text-zinc-300',
		className,
	)

	const getLinkClass = (href: string) =>
		clsx(
			'transition-colors hover:text-pink-600',
			pathname === href && 'text-pink-500 font-semibold',
		)

	const wrapLink = (link: JSX.Element, href: string) =>
		withSheetClose ? (
			<SheetClose key={href} asChild>
				{link}
			</SheetClose>
		) : (
			<span key={href}>{link}</span>
		)

	return (
		<nav className={navClass}>
			{links.map(({ href, label, external }) =>
				wrapLink(
					<Link
						href={href}
						target={external ? '_blank' : undefined}
						rel={external ? 'noopener noreferrer' : undefined}
						className={getLinkClass(href)}
					>
						{label}
					</Link>,
					href,
				),
			)}
		</nav>
	)
}
