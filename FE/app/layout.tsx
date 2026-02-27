import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://longnd.vercel.app'),
  title: {
    default: 'Nguyen Dai Long | Software Engineer',
    template: '%s | Nguyen Dai Long'
  },
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
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/icon.svg', color: '#0f172a' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['vi_VN'],
    url: 'https://longnd.vercel.app',
    title: 'Nguyen Dai Long | Software Engineer',
    description: 'Backend Developer with 3+ years of experience in Python, Django, Laravel, and cloud technologies. Based in Da Nang, Vietnam.',
    siteName: 'Nguyen Dai Long Portfolio',
    images: [
      {
        url: '/android-chrome-512x512.png',
        width: 512,
        height: 512,
        alt: 'Nguyen Dai Long - Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nguyen Dai Long | Software Engineer',
    description: 'Backend Developer with 3+ years of experience in Python, Django, Laravel, and cloud technologies.',
    creator: '@ndl_longnguyen',
    images: ['/android-chrome-512x512.png'],
  },
  verification: {
    google: 'f08a2d0e85e82e12',
  },
  alternates: {
    canonical: 'https://longnd.vercel.app',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
