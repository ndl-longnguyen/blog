import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { BLOG_POSTS } from "@/lib/blog-data"
import { SITE_URL } from "@/config/site"

export const metadata: Metadata = {
  title: "Engineering Blog & Technical Insights | Nguyen Dai Long",
  description:
    "Practical deep-dives into backend scalability, PostgreSQL optimization, Redis caching, Docker, Google Cloud Run, and real-time WebSockets by Nguyen Dai Long.",
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
}

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-6 sm:px-12 lg:px-24">
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
        <header className="mb-14">
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-2">
            01. Technical Insights & Architecture
          </p>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight mb-4">
            Engineering Blog
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-3xl leading-relaxed">
            Case studies, architectural decisions, and production lessons learned while designing, building, and optimizing high-throughput backend systems, cloud infrastructure, and developer utilities.
          </p>
        </header>

        {/* Blog Post Grid */}
        <div className="space-y-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              className="p-6 sm:p-8 rounded-xl border border-border/50 bg-card/40 hover:border-primary/50 hover:bg-card/70 transition-all duration-300 group"
            >
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-muted-foreground mb-3">
                <span className="text-primary font-semibold px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20">
                  {post.category}
                </span>
                <span>•</span>
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-3 leading-snug">
                <Link href={`/blog/${post.slug}`} className="focus:outline-none">
                  {post.title}
                </Link>
              </h2>

              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-border/30">
                <div className="flex flex-wrap gap-2">
                  {post.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs px-2 py-0.5 rounded bg-muted/40 text-muted-foreground"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="font-mono text-xs sm:text-sm text-primary font-semibold inline-flex items-center gap-1.5 group-hover:translate-x-1 transition-transform"
                >
                  Read Full Article →
                </Link>
              </div>
            </article>
          ))}
        </div>

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
