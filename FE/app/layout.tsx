import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import { SITE_URL, SUBDOMAINS } from '@/config/site'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Nguyen Dai Long | Backend Engineer & Creator of Free Tools & Games',
    template: '%s | Nguyen Dai Long'
  },
  description: 'Backend Engineer & Backend Lead with 4+ years of experience in Python (Django/DRF), Laravel, AWS, and GCP. Creator of NDL Arcade (free browser games), ShortLink (URL shortener), and other free web tools. Based in Da Nang, Vietnam.',
  keywords: [
    // Personal / Professional
    'Nguyen Dai Long', 'Nguyễn Đại Long', 'NDL', 'Software Engineer', 'Backend Engineer', 'Backend Lead',
    'Python Developer', 'Django REST Framework', 'Laravel', 'Amazon Web Services', 'AWS',
    'Google Cloud Platform', 'GCP', 'Docker', 'ITSS Level 3', 'Da Nang', 'Scalable Backend Systems',
    'Database Optimization', 'PostgreSQL', 'Redis', 'WebSockets', 'CI/CD Pipelines',
    // Products & Tools
    'NDL Arcade', 'free browser games', 'free online games', 'play games online free',
    'ShortLink', 'URL shortener free', 'QR code generator free', 'UTM builder',
    'Click 2 Top', 'coin clicker game', 'competitive arcade game',
    'Little Pathfinder', 'puzzle game for kids', 'maze game',
    'image compressor free', 'compress image online free',
    'lãi suất ngân hàng', 'so sánh lãi suất tiết kiệm',
  ],
  authors: [{ name: 'Nguyen Dai Long', url: SITE_URL }],
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
    url: SITE_URL,
    title: 'Nguyen Dai Long | Backend Engineer & Creator of Free Tools & Games',
    description: 'Backend Engineer & Backend Lead with 4+ years of experience. Creator of NDL Arcade (free browser games), ShortLink (URL shortener + QR Studio), and other free web tools.',
    siteName: 'Nguyen Dai Long',
    images: [
      {
        url: '/android-chrome-512x512.png',
        width: 512,
        height: 512,
        alt: 'Nguyen Dai Long - Backend Engineer & Creator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nguyen Dai Long | Backend Engineer & Creator of Free Tools & Games',
    description: 'Backend Engineer & Backend Lead. Creator of free browser games (NDL Arcade, Click 2 Top) and web tools (ShortLink, Image Compressor).',
    creator: '@ndl_longnguyen',
    images: ['/android-chrome-512x512.png'],
  },
  verification: {
    google: 'f08a2d0e85e82e12',
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      'en-US': SITE_URL,
      'vi-VN': SITE_URL,
    },
  },
}

// Schema.org structured data
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: "Nguyen Dai Long",
  alternateName: "NDL",
  url: SITE_URL,
  jobTitle: "Backend Engineer & Backend Lead",
  description: "Backend Engineer with 4+ years of experience in Python, Django, Laravel, AWS, and GCP. Creator of free web games and developer tools.",
  sameAs: [
    "https://www.linkedin.com/in/ndl-longnguyen/",
  ],
  owns: [
    {
      "@type": "WebApplication",
      name: "NDL Arcade",
      url: SUBDOMAINS.arcade,
      description: "Free browser arcade games: Snake, Tetris, Space Invaders, Breakout, Sudoku",
      applicationCategory: "GameApplication",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
    {
      "@type": "WebApplication",
      name: "Click 2 Top",
      url: SUBDOMAINS.click,
      description: "Competitive coin clicker arcade game with global Nations Cup leaderboard",
      applicationCategory: "GameApplication",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
    {
      "@type": "WebApplication",
      name: "Little Pathfinder",
      url: SUBDOMAINS.kids,
      description: "Charming maze puzzle game for kids and all ages",
      applicationCategory: "GameApplication",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
    {
      "@type": "WebApplication",
      name: "ShortLink – URL & QR Studio",
      url: SUBDOMAINS.link,
      description: "Free URL shortener with dynamic QR code generation, analytics, and UTM builder",
      applicationCategory: "BusinessApplication",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
    {
      "@type": "WebApplication",
      name: "Image Compressor",
      url: SUBDOMAINS.image,
      description: "Client-side image compression tool — private, free, no upload required",
      applicationCategory: "UtilitiesApplication",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
    {
      "@type": "WebApplication",
      name: "Lãi Suất Ngân Hàng",
      url: SUBDOMAINS.laisaut,
      description: "Công cụ tra cứu và so sánh lãi suất tiền gửi ngân hàng Việt Nam",
      applicationCategory: "FinanceApplication",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
  ],
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
        <meta name="google-adsense-account" content="ca-pub-9166964727480227" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9166964727480227"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
