import type { ArticleCardProps } from '@/entities/article'
// import { BackgroundImage } from '@/shared/assets/images'

export const mockArticles: ArticleCardProps[] = [
	// {
	// 	id: '1',
	// 	title: 'Почему стоит изучать FSD',
	// 	slug: 'pochemu-stoit-izuchat-fsd',
	// 	excerpt:
	// 		'Feature-Sliced Design помогает масштабировать фронтенд-проекты. Разбираемся, почему это важно.',
	// 	image: BackgroundImage,
	// 	isNew: true,
	// 	readingTime: '5',
	// 	category: 'Frontend',
	// 	tags: ['fsd', 'архитектура'],
	// 	views: 143,
	// 	comments: 8,
	// 	likes: 24,
	// 	author: {
	// 		id: '1',
	// 		name: 'Патрик Бейтман',
	// 		avatar: 'https://i.pravatar.cc/40?img=3',
	// 	},
	// 	createdAt: 1752091200000, // 10 июля 2025, timestamp with time zone
	// },
	// {
	// 	id: '2',
	// 	title: 'TypeScript или JavaScript?',
	// 	slug: 'typescript-ili-javascript',
	// 	excerpt:
	// 		'Сравниваем два языка и рассматриваем, когда стоит использовать TypeScript.',
	// 	image:
	// 		'https://avatars.mds.yandex.net/get-mpic/5142344/img_id3533609405011891245.jpeg/orig',
	// 	isNew: false,
	// 	readingTime: '3',
	// 	category: 'TypeScript',
	// 	tags: ['typescript', 'js'],
	// 	views: 311,
	// 	comments: 12,
	// 	likes: 41,
	// 	author: {
	// 		id: '2',
	// 		name: 'Людвиг Кодер',
	// 		avatar: 'https://i.pravatar.cc/40?img=5',
	// 	},
	// 	createdAt: 1752004800000, // 9 июля 2025, timestamp with time zone
	// },
	// {
	// 	id: '3',
	// 	title: 'Как работает useEffect на самом деле',
	// 	slug: 'kak-rabotaet-useeffect-na-samom-dele',
	// 	excerpt:
	// 		'Глубокое погружение в lifecycle React и подводные камни хука useEffect.',
	// 	image:
	// 		'https://avatars.mds.yandex.net/get-mpic/5236119/img_id1964841732144344380.jpeg/orig',
	// 	isNew: false,
	// 	readingTime: '4',
	// 	category: 'React',
	// 	tags: ['react', 'hooks'],
	// 	views: 512,
	// 	comments: 18,
	// 	likes: 72,
	// 	author: {
	// 		id: '3',
	// 		name: 'Джейн Фронтендер',
	// 		avatar: 'https://i.pravatar.cc/40?img=10',
	// 	},
	// 	createdAt: 1751587200000, // 5 июля 2025, timestamp with time zone
	// },
	// {
	// 	id: '4',
	// 	title: 'Tailwind против обычного CSS',
	// 	slug: 'tailwind-protiv-obichnogo-css',
	// 	excerpt: 'Почему Tailwind стал популярен и когда он может не подойти.',
	// 	image:
	// 		'https://avatars.mds.yandex.net/i?id=08b2b281335b106e0f2d04395359cd47_l-4357367-images-thumbs&n=13',
	// 	isNew: false,
	// 	readingTime: '6',
	// 	category: 'CSS',
	// 	tags: ['tailwind', 'css'],
	// 	views: 210,
	// 	comments: 4,
	// 	likes: 35,
	// 	author: {
	// 		id: '4',
	// 		name: 'Николай Стили',
	// 		avatar: 'https://i.pravatar.cc/40?img=7',
	// 	},
	// 	createdAt: 1751587200000, // 2 июля 2025, timestamp with time zone
	// },
	// {
	// 	id: '5',
	// 	title: '10 расширений VSCode, которые реально ускоряют работу',
	// 	slug: '10-rasshireniy-vscode-kotorye-realno-uskorayut-rabotu',
	// 	excerpt: 'Подборка must-have расширений для фронтенд-разработчиков.',
	// 	image:
	// 		'https://avatars.mds.yandex.net/i?id=5578771dd2195259ffd591b98f161204_l-4984230-images-thumbs&n=13',
	// 	isNew: true,
	// 	readingTime: '2',
	// 	category: 'Tools',
	// 	tags: ['vscode', 'инструменты'],
	// 	views: 890,
	// 	comments: 22,
	// 	likes: 94,
	// 	author: {
	// 		id: '5',
	// 		name: 'Иван Тулов',
	// 		avatar: 'https://i.pravatar.cc/40?img=12',
	// 	},
	// 	createdAt: 1751500800000, // 1 июля 2025, timestamp with time zone
	// },
	// {
	// 	id: '6',
	// 	title: 'Как настроить dark mode в Next.js + Tailwind + shadcn/ui',
	// 	slug: 'kak-nastroit-dark-mode-v-next-js-tailwind-shadcn-ui',
	// 	excerpt: 'Полный гайд по созданию тёмной темы с минимальным кодом.',
	// 	image:
	// 		'https://avatars.mds.yandex.net/i?id=ae89e392533ad72cae0aa1a28da67a12_l-13092708-images-thumbs&n=13',
	// 	isNew: false,
	// 	readingTime: '5',
	// 	category: 'UI/UX',
	// 	tags: ['darkmode', 'tailwind', 'shadcn'],
	// 	views: 624,
	// 	comments: 14,
	// 	likes: 57,
	// 	author: {
	// 		id: '6',
	// 		name: 'Алина Интерфейсова',
	// 		avatar: 'https://i.pravatar.cc/40?img=15',
	// 	},
	// 	createdAt: 1751414400000, // 30 июня 2025, timestamp with time zone
	// },
	// {
	// 	id: '7',
	// 	title: 'Как работает Redux Toolkit под капотом',
	// 	slug: 'kak-rabotaet-redux-toolkit-pod-kapotom',
	// 	excerpt: 'Объясняем, почему RTK проще и мощнее классического Redux.',
	// 	image:
	// 		'https://avatars.mds.yandex.net/i?id=088501c99c5c50944bd8da3d7bf46764b7d88a76-5355392-images-thumbs&n=13',
	// 	isNew: false,
	// 	readingTime: '7',
	// 	category: 'State Management',
	// 	tags: ['redux', 'rtk'],
	// 	views: 479,
	// 	comments: 11,
	// 	likes: 38,
	// 	author: {
	// 		id: '7',
	// 		name: 'Сергей Стор',
	// 		avatar: 'https://i.pravatar.cc/40?img=20',
	// 	},
	// 	createdAt: 1751328000000, // 29 июня 2025, timestamp with time zone
	// },
	// {
	// 	id: '8',
	// 	title: 'Лучшая структура папок для Next.js проекта',
	// 	slug: 'luchshaya-struktura-papok-dlya-next-js-proekta',
	// 	excerpt: 'Как организовать проект, чтобы не захлебнуться в хаосе.',
	// 	image:
	// 		'https://i.pinimg.com/originals/87/b1/41/87b14167561f5bfdb2ac455ad70d07e8.jpg',
	// 	isNew: false,
	// 	readingTime: '4',
	// 	category: 'Architecture',
	// 	tags: ['nextjs', 'структура'],
	// 	views: 301,
	// 	comments: 9,
	// 	likes: 26,
	// 	author: {
	// 		id: '8',
	// 		name: 'Кирилл Архитекторов',
	// 		avatar: 'https://i.pravatar.cc/40?img=9',
	// 	},
	// 	createdAt: 1751155200000, // 27 июня 2025, timestamp with time zone
	// },
	// {
	// 	id: '9',
	// 	title: 'Как улучшить производительность сайта',
	// 	slug: 'kak-uluchshit-proizvoditelnost-sayta',
	// 	excerpt: 'Советы и трюки для оптимизации загрузки и рендеринга.',
	// 	image:
	// 		'https://i.pinimg.com/originals/0e/96/a6/0e96a687063f78cc93ba81ab4b7dea9a.jpg',
	// 	isNew: true,
	// 	readingTime: '6',
	// 	category: 'Optimization',
	// 	tags: ['оптимизация', 'perf'],
	// 	views: 198,
	// 	comments: 3,
	// 	likes: 17,
	// 	author: {
	// 		id: '9',
	// 		name: 'Оптимус Гик',
	// 		avatar: 'https://i.pravatar.cc/40?img=18',
	// 	},
	// 	createdAt: 1750982400000, // 25 июня 2025, timestamp with time zone
	// },
	// {
	// 	id: '10',
	// 	title: 'Нужен ли вообще Git в 2025?',
	// 	slug: 'nuzhen-li-voobsche-git-v-2025',
	// 	excerpt: 'Размышления о будущем git и альтернативах.',
	// 	image:
	// 		'https://avatars.mds.yandex.net/i?id=10ccd7d2b5e15699ec1ee14eb62a60fb_l-5220614-images-thumbs&n=13',
	// 	isNew: false,
	// 	readingTime: '5',
	// 	category: 'Tools',
	// 	tags: ['git', 'version-control'],
	// 	views: 120,
	// 	comments: 2,
	// 	likes: 9,
	// 	author: {
	// 		id: '10',
	// 		name: 'Гриша Контрольный',
	// 		avatar: 'https://i.pravatar.cc/40?img=14',
	// 	},
	// 	createdAt: 1750540800000, // 20 июня 2025, timestamp with time zone
	// },
]
