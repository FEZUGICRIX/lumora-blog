import type { ArticleCardProps } from '@/entities/article'
import { BackgroundImage } from '@/shared/assets/images'
import { PageHero } from '@/shared/ui/PageHero'
import { Badge } from '@/shared/ui/ui-kit/badge'
import { Eye, HeartIcon, MessageSquareText } from 'lucide-react'

const ArticlePage = ({
	title,
	// slug,
	excerpt,
	image,
	// isNew,
	// readingTime,
	// category,
	// tags,
	// views,
	// comments,
	// likes,
	author,
	createdAt,
	// onLike,
	// isLiked,
}: ArticleCardProps) => {
	return (
		<div>
			<PageHero
				title={title}
				subtitle={excerpt}
				image={image ?? BackgroundImage}
				author={author}
				createdAt={createdAt}
			/>

			<section className='container mx-auto px-4 py-12'>
				<div className='md:p-10" bg-gray/10 rounded-2xl p-6 shadow-xl backdrop-blur-md dark:bg-zinc-900/80'>
					<article className='prose prose-neutral dark:prose-invert max-w-none'>
						<h1>
							Feature-Sliced Design (FSD): архитектура фронтенда, которая
							масштабируется
						</h1>

						<p>
							Когда мы начинаем разрабатывать фронтенд-приложения, всё
							кажется простым. Но с ростом проекта — появляются сложности:
							громоздкие компоненты, сложность переиспользования, боль при
							Code Review. Именно здесь на помощь приходит Feature-Sliced
							Design.
						</p>

						<blockquote>
							<p>
								В этой статье я расскажу, как работает FSD, чем он
								отличается от других подходов, и почему его стоит
								попробовать уже сегодня.
							</p>
						</blockquote>

						<h2>Что такое Feature-Sliced Design?</h2>
						<p>
							FSD — это архитектурный подход, сфокусированный на
							масштабируемости, независимости слоёв и удобстве командной
							разработки.
						</p>

						<p>Он делит проект на 5 уровней:</p>
						<ul>
							<li>
								<code>shared/</code> — утилиты, библиотеки, общие
								компоненты
							</li>
							<li>
								<code>entities/</code> — бизнес-сущности
							</li>
							<li>
								<code>features/</code> — пользовательские фичи
							</li>
							<li>
								<code>widgets/</code> — сборка UI-блоков
							</li>
							<li>
								<code>pages/</code> — страницы приложения
							</li>
						</ul>

						<p>Такой подход помогает:</p>
						<ul>
							<li>избегать пересечений ответственности</li>
							<li>не плодить «гигантские» компоненты</li>
							<li>быстро находить нужные части проекта</li>
						</ul>

						<h2>Почему FSD — это не просто ещё один подход</h2>
						<table>
							<thead>
								<tr>
									<th>Проблема</th>
									<th>Как решает FSD</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Сложно ориентироваться в большом проекте</td>
									<td>Строгая структура по слоям</td>
								</tr>
								<tr>
									<td>Мутный Code Review</td>
									<td>Фокус на границы ответственности</td>
								</tr>
								<tr>
									<td>Долгий онбординг</td>
									<td>Новички быстрее понимают, что где</td>
								</tr>
								<tr>
									<td>Невозможно переиспользовать</td>
									<td>
										Независимость <code>features</code> и{' '}
										<code>entities</code>
									</td>
								</tr>
							</tbody>
						</table>

						<h2>Как я внедрил FSD в свой pet-проект</h2>
						<p>
							Когда я начал работать над своим блогом на Next.js и
							Tailwind, я быстро столкнулся с ростом компонентов. Тогда я
							внедрил FSD:
						</p>
						<ul>
							<li>
								Разбил <code>components</code> на <code>shared</code>,{' '}
								<code>entities</code>, <code>widgets</code>
							</li>
							<li>Разделил бизнес-логику и UI</li>
							<li>Упростил навигацию по коду</li>
						</ul>

						<p>
							<strong>Результат?</strong> Стало в разы проще масштабировать
							проект, добавлять новые фичи и рефакторить.
						</p>

						<h2>Советы тем, кто хочет попробовать FSD</h2>
						<ul>
							<li>
								Начни с разбивки <code>shared</code>, <code>entities</code>
								, <code>features</code>
							</li>
							<li>
								Используй абсолютные импорты (
								<code>@/shared/ui/Button</code>)
							</li>
							<li>Постепенно выноси бизнес-логику из компонентов</li>
							<li>
								Изучи{' '}
								<a
									href='https://feature-sliced.design/'
									target='_blank'
									rel='noopener noreferrer'
								>
									официальную документацию FSD
								</a>
							</li>
						</ul>

						<h2>Заключение</h2>
						<p>
							FSD — не серебряная пуля, но это одна из самых зрелых и
							чётких архитектур для фронтенда. Я рекомендую попробовать её
							хотя бы в pet-проекте — и ты почувствуешь разницу.
						</p>
					</article>

					<div className='mt-10 flex flex-col gap-4 border-t border-zinc-200 pt-6 md:flex-row md:items-center md:justify-between dark:border-zinc-800'>
						<div className='flex flex-wrap gap-2'>
							<Badge variant='secondary'>#frontend</Badge>
							<Badge variant='secondary'>#FSD</Badge>
							<Badge variant='secondary'>#архитектура</Badge>
						</div>

						<div className='flex items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400'>
							<div className='flex items-center gap-1'>
								<HeartIcon />
								<span>128</span>
							</div>
							<div className='flex items-center gap-1'>
								<MessageSquareText />
								<span>412</span>
							</div>
							<div className='flex items-center gap-1'>
								<Eye />
								<span>6</span>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default ArticlePage
