import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://longnd.vercel.app'),
  title: {
    default: 'Nguyen Dai Long | Backend Engineer & Backend Lead',
    template: '%s | Nguyen Dai Long'
  },
  description: 'Backend Engineer & Backend Lead with 4+ years of experience in Python (Django/DRF), Laravel, AWS, and GCP. Based in Da Nang, Vietnam. Specializing in architecting high-performance backend systems serving 30k+ users, database optimization, and cloud infrastructure.',
  keywords: [
    'Nguyen Dai Long', 'Nguyễn Đại Long', 'Software Engineer', 'Backend Engineer', 'Backend Lead',
    'Python Developer', 'Django REST Framework', 'Laravel', 'Amazon Web Services', 'AWS',
    'Google Cloud Platform', 'GCP', 'Docker', 'ITSS Level 3', 'Da Nang', 'Scalable Backend Systems',
    'Database Optimization', 'PostgreSQL', 'Redis', 'WebSockets', 'CI/CD Pipelines'
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
    title: 'Nguyen Dai Long | Backend Engineer & Backend Lead',
    description: 'Backend Engineer & Backend Lead with 4+ years of experience in Python (Django/DRF), Laravel, AWS, and GCP. Specializing in systems serving 30k+ users and cloud infrastructure.',
    siteName: 'Nguyen Dai Long Portfolio',
    images: [
      {
        url: '/android-chrome-512x512.png',
        width: 512,
        height: 512,
        alt: 'Nguyen Dai Long - Backend Engineer & Backend Lead',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nguyen Dai Long | Backend Engineer & Backend Lead',
    description: 'Backend Engineer & Backend Lead with 4+ years of experience in Python (Django/DRF), Laravel, AWS, and GCP.',
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
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9166964727480227"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
