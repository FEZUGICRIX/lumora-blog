'use client'

import { Check, Copy, ExternalLink } from 'lucide-react'
import { useState } from 'react'

import { SOCIAL_LINKS } from '@/shared/constants'
import { CRYPTO_WALLETS } from '@/shared/constants/crypto-wallets'
import { Logo, NavLinks, SocialLinks } from '@/shared/ui/custom'

export const Footer = () => {
	const currentYear = new Date().getFullYear()
	const [copiedAddress, setCopiedAddress] = useState<null | string>(null)

	const copyToClipboard = (address: string) => {
		navigator.clipboard.writeText(address)
		setCopiedAddress(address)
		setTimeout(() => setCopiedAddress(null), 2000)
	}

	return (
		<footer className='border-border/50 bg-card/30 mt-8 border-t dark:text-white'>
			<div className='container mx-auto px-4 pt-10'>
				{/* Main footer content */}
				<div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
					{/* Brand section */}
					<div className='flex flex-col items-center justify-start sm:items-start lg:col-span-2'>
						<Logo />
						<p className='text-muted-foreground mt-4 max-w-full text-center text-sm sm:max-w-xs sm:text-left'>
							Платформа для разработчиков. Делимся знаниями, создаём сообщество.
						</p>
						{/* Social links */}
						<div className='mt-2'>
							<SocialLinks className='mt-4' />
						</div>
					</div>

					{/* Links sections */}
					<div>
						<h3 className='text-md mb-4 font-semibold'>Продукт</h3>
						<ul className='space-y-3'>
							<NavLinks
								direction='col'
								className='text-sm text-gray-500 dark:text-gray-400 dark:hover:text-pink-600'
							/>
						</ul>
					</div>

					{/* Support section */}
					<div>
						<h3 className='text-md mb-4 font-semibold'>Поддержать проект</h3>
						<div className='space-y-3'>
							{CRYPTO_WALLETS.map(wallet => (
								<button
									key={wallet.name}
									onClick={() => copyToClipboard(wallet.address)}
									className={`group border-border/50 relative w-full overflow-hidden rounded-xl border bg-gradient-to-r ${wallet.color} p-3 transition-all hover:scale-[1.02] ${wallet.borderColor}`}
								>
									<div className='flex items-center gap-3'>
										<div className='relative size-8 shrink-0 overflow-hidden rounded-lg bg-white/10 p-1'>
											<img
												src={wallet.icon}
												alt={wallet.name}
												// fill
												className='object-contain'
											/>
										</div>
										<div className='flex-1 text-left'>
											<div className='flex items-center justify-between'>
												<span className='text-sm font-medium'>
													{wallet.name}
												</span>
												<span className='text-muted-foreground text-xs'>
													{wallet.shortName}
												</span>
											</div>
											<div className='flex items-center gap-2'>
												<span className='text-muted-foreground truncate font-mono text-xs'>
													{wallet.address.slice(0, 10)}...
													{wallet.address.slice(-6)}
												</span>
												{copiedAddress === wallet.address ? (
													<Check className='size-3.5 shrink-0 text-emerald-500' />
												) : (
													<Copy className='text-muted-foreground size-3.5 shrink-0 opacity-0 transition-opacity group-hover:opacity-100' />
												)}
											</div>
										</div>
									</div>
								</button>
							))}

							{/* Author link */}
							<a
								href={SOCIAL_LINKS.github}
								target='_blank'
								rel='noopener noreferrer'
								className='text-muted-foreground hover:text-foreground mt-2 inline-flex items-center gap-2 text-sm transition-colors dark:hover:text-white'
							>
								<ExternalLink className='size-3.5' />
								<span>Автор проекта</span>
							</a>
						</div>
					</div>
				</div>

				{/* Bottom bar */}
				<div className='border-border/50 mt-12 flex flex-col items-center justify-between gap-4 border-t py-6 md:flex-row'>
					<p className='text-muted-foreground text-sm'>
						© {currentYear} Lumora. Все права защищены.
					</p>
					<p className='text-muted-foreground flex items-center gap-1.5 text-sm'>
						Powered by fezugicrix
					</p>
				</div>
			</div>
		</footer>
	)
}
