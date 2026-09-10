import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Suspense } from "react"
import { BLOG_POSTS } from "@/lib/blog-data"
import { SITE_URL } from "@/config/site"
import { BlogFilter } from "@/components/blog/blog-filter"

export const metadata: Metadata = {
  title: "Engineering Blog & Technical Insights | Nguyen Dai Long",
  description:
    "Practical deep-dives into backend scalability, PostgreSQL optimization, Redis caching, Docker, Google Cloud Run, and real-time WebSockets by Nguyen Dai Long.",
  alternates: {
    canonical: `${SITE_URL}/blog`,
    types: {
      "application/rss+xml": `${SITE_URL}/feed.xml`,
    },
  },
  openGraph: {
    type: "website",
    title: "Engineering Blog & Technical Insights | Nguyen Dai Long",
    description:
      "Practical deep-dives into backend scalability, PostgreSQL optimization, Redis caching, Docker, Google Cloud Run, and real-time WebSockets.",
    url: `${SITE_URL}/blog`,
    siteName: "Nguyen Dai Long",
    images: [
      {
        url: `${SITE_URL}/android-chrome-512x512.png`,
        width: 512,
        height: 512,
        alt: "Nguyen Dai Long - Engineering Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering Blog & Technical Insights | Nguyen Dai Long",
    description:
      "Practical deep-dives into backend scalability, PostgreSQL optimization, Redis caching, Docker, and WebSockets.",
  },
}

export default function BlogIndexPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Engineering Blog",
        item: `${SITE_URL}/blog`,
      },
    ],
  }

  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-6 sm:px-12 lg:px-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="max-w-5xl mx-auto">
        {/* Navigation / Header */}
        <div className="flex items-center justify-between pb-8 border-b border-border/40 mb-12">
          <Link
            href="/"
            className="flex items-center gap-2.5 group hover:opacity-90 transition-opacity"
            aria-label="Back to Home"
          >
            <Image
              src="/logo.png"
              alt="Nguyen Dai Long Logo"
              width={36}
              height={36}
              className="w-9 h-9 object-contain drop-shadow-[0_2px_8px_rgba(212,175,55,0.3)] transition-transform duration-300 group-hover:scale-105"
            />
            <span className="text-primary font-mono text-xl font-bold tracking-wider">
              NDL
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary font-mono text-sm transition-colors"
            >
              ← Portfolio
            </Link>
            <Link
              href="/#contact"
              className="hidden sm:inline-flex items-center gap-2 text-primary font-mono text-sm px-3.5 py-1.5 rounded border border-primary/40 hover:bg-primary/10 transition-colors"
            >
              Get in touch
            </Link>
          </div>
        </div>

        {/* Hero Section */}
        <header className="mb-12">
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-2">
            01. Technical Insights &amp; Architecture
          </p>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight mb-4">
            Engineering Blog
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-3xl leading-relaxed">
            Case studies, architectural decisions, and production lessons learned while designing, building, and optimizing high-throughput backend systems, cloud infrastructure, and developer utilities.
          </p>
        </header>

        {/* Interactive Filter and Blog Post Grid */}
        <Suspense fallback={<div className="text-muted-foreground font-mono text-xs py-8">Loading articles...</div>}>
          <BlogFilter posts={BLOG_POSTS} />
        </Suspense>

        {/* Footer info */}
        <footer className="mt-16 pt-8 border-t border-border/40 text-center font-mono text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="text-primary">Nguyen Dai Long</span> (ndlong.site). All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  )
}
