import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import './globals.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
	title: {
		template: '%s | Lumora',
		default: 'Lumora',
	},
}

// export const metadata: Metadata = {
// 	title: {
// 		template: '%s | Lumora',
// 		default: 'Lumora',
// 	},
// 	description:
// 		'Lumora — a sleek technical blog about web development, programming, and architecture. Built with Next.js, TypeScript, Tailwind CSS, and FSD.',
// }


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
