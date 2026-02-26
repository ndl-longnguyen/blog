import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Nguyen Dai Long | Software Engineer - Backend Developer',
  description: 'Backend Developer with 3+ years of experience in Python, Django, Laravel, and cloud technologies. Based in Da Nang, Vietnam. Specializing in building scalable, high-performance backend systems.',
  keywords: [
    'Nguyen Dai Long', 'Nguyễn Đại Long', 'Software Engineer', 'Kỹ sư phần mềm',
    'Backend Developer', 'Phát triển Backend', 'Python Developer', 'Lập trình viên Python',
    'Django REST Framework', 'Laravel', 'Google Cloud Platform', 'GCP', 'Docker',
    'Software Engineer Da Nang', 'Kỹ sư phần mềm Đà Nẵng', 'Scalable Backend Systems',
    'Enterprise Management System', 'Electronic Contract Management'
  ],
  authors: [{ name: 'Nguyen Dai Long' }],
  creator: 'Nguyen Dai Long',
  publisher: 'Nguyen Dai Long',
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: '/favicon-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/favicon-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://longnd.vercel.app', // Update with actual URL if different
    title: 'Nguyen Dai Long | Software Engineer - Backend Developer',
    description: 'Backend Developer with 3+ years of experience in Python, Django, Laravel, and cloud technologies. Based in Da Nang, Vietnam.',
    siteName: 'Nguyen Dai Long Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nguyen Dai Long | Software Engineer',
    description: 'Backend Developer with 3+ years of experience in Python, Django, Laravel, and cloud technologies.',
    creator: '@ndl_longnguyen', // Update if applicable
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
