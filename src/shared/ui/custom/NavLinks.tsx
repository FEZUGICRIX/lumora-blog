'use client'

import clsx from 'clsx'
import { usePathname } from 'next/navigation'
import type { JSX } from 'react'

import { Link } from '@/shared/config/i18n'
import { routes } from '@/shared/config/routes'
import { SheetClose } from '@/shared/ui/ui-kit'

type NavLink = {
	href: string
	label: string
	external?: boolean
	auth?: 'public' | 'auth' | 'guest'
	dynamic?: (isAuthenticated: boolean, username?: string) => string
}

const links: NavLink[] = [
	{ href: '/', label: 'Главная', auth: 'public' },
	{ href: routes.editor.new, label: 'Написать статью' },
	{ href: '/about', label: 'Обо мне', auth: 'public' },
]

type NavLinksProps = {
	isAuthenticated?: boolean
	username?: string
	direction?: 'row' | 'col'
	withSheetClose?: boolean
	className?: string
}

export const NavLinks = ({
	isAuthenticated = false,
	username,
	withSheetClose = false,
	direction = 'row',
	className = '',
}: NavLinksProps) => {
	const pathname = usePathname()

	const navClass = clsx(
		'text-lg lg:text-[17px] font-medium',
		direction === 'col'
			? 'flex flex-col gap-4 px-1 pt-2'
			: 'flex items-center gap-6',
		'text-zinc-800 dark:text-zinc-300',
	)

	const getLinkClass = (href: string) =>
		clsx(
			'transition-colors hover:text-pink-600',
			pathname === href && 'text-pink-500 font-semibold',
			className,
		)

	const wrapLink = (link: JSX.Element, href: string) =>
		withSheetClose ? (
			<SheetClose key={href} asChild>
				{link}
			</SheetClose>
		) : (
			<span key={href}>{link}</span>
		)

	const visibleLinks = filterLinksByAuth(links, isAuthenticated)

	// Добавляем профиль в рендере (на второе место)
	if (isAuthenticated && username) {
		visibleLinks.splice(1, 0, {
			href: routes.profile(username),
			label: 'Мой профиль',
			auth: 'auth',
		})
	}

	return (
		<nav className={navClass}>
			{visibleLinks.map(({ href, label, external }) =>
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

const filterLinksByAuth = (links: NavLink[], isAuthenticated: boolean) =>
	links.filter(link => {
		if (link.auth === 'auth') return isAuthenticated
		if (link.auth === 'guest') return !isAuthenticated
		return true
	})
