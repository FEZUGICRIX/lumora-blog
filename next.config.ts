import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.jsdelivr.net',
			},
			{
				protocol: 'https',
				hostname: 'lh3.googleusercontent.com',
			},
			{
				protocol: 'https',
				hostname: 'cdn.jsdelivr.net',
			},
			{
				protocol: 'https',
				hostname: 'avatars.githubusercontent.com',
			},
			{
				protocol: 'https',
				hostname: 'd3jj28hjdifkqy.cloudfront.net',
			},
			{
				protocol: 'https',
				hostname: 'images.unsplash.com',
			},
			{
				protocol: 'https',
				hostname: 'picsum.photos',
			},
			{
				protocol: 'https',
				hostname: 'avatars.mds.yandex.net',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'i.pinimg.com',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'i.pravatar.cc',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'loremflickr.com',
				pathname: '/**',
			},
		],
	},
	experimental: {
		globalNotFound: true,
	},
}

const withNextIntl = createNextIntlPlugin('./src/shared/config/i18n/request.ts')
export default withNextIntl(nextConfig)
