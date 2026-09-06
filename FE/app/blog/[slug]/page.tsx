import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { BLOG_POSTS, type BlogPost } from "@/lib/blog-data"
import { SITE_URL } from "@/config/site"

interface PageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)

  if (!post) {
    return {
      title: "Article Not Found | Nguyen Dai Long",
    }
  }

  return {
    title: `${post.title} | Nguyen Dai Long`,
    description: post.excerpt,
    alternates: {
      canonical: `${SITE_URL}/blog/${post.slug}`,
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `${SITE_URL}/blog/${post.slug}`,
      publishedTime: post.date,
      authors: ["Nguyen Dai Long"],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const postIndex = BLOG_POSTS.findIndex((p) => p.slug === slug)

  if (postIndex === -1) {
    notFound()
  }

  const post = BLOG_POSTS[postIndex]
  const prevPost = postIndex > 0 ? BLOG_POSTS[postIndex - 1] : null
  const nextPost = postIndex < BLOG_POSTS.length - 1 ? BLOG_POSTS[postIndex + 1] : null

  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-6 sm:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        {/* Navigation / Header */}
        <div className="flex items-center justify-between pb-8 border-b border-border/40 mb-10">
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
          <div className="flex items-center gap-3">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-primary font-mono text-sm px-3.5 py-1.5 rounded border border-primary/40 hover:bg-primary/10 transition-colors"
            >
              ← All Articles
            </Link>
          </div>
        </div>

        {/* Article Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs font-mono text-muted-foreground mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-foreground truncate max-w-xs sm:max-w-md">{post.title}</span>
        </nav>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-muted-foreground mb-4">
            <span className="text-primary font-semibold px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20">
              {post.category}
            </span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Author info */}
          <div className="flex items-center gap-3.5 pt-4 border-t border-border/40">
            <div className="relative w-11 h-11 rounded-full overflow-hidden border border-primary/40 bg-primary/10">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-mono text-sm font-semibold text-foreground">
                {post.author.name}
              </p>
              <p className="text-xs text-muted-foreground">
                {post.author.title}
              </p>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <article className="space-y-10 text-foreground/90 leading-relaxed text-base sm:text-lg">
          {/* Intro callout */}
          <div className="p-6 rounded-xl border-l-4 border-primary bg-card/60 text-foreground text-base sm:text-lg italic font-normal">
            {post.content.intro}
          </div>

          {/* Sections */}
          {post.content.sections.map((section, idx) => (
            <section key={idx} className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-primary font-mono tracking-tight pt-4">
                {section.heading}
              </h2>
              <p className="text-foreground/90 leading-relaxed">
                {section.body}
              </p>

              {/* Code Snippet if present */}
              {section.codeSnippet && (
                <div className="my-5 rounded-lg overflow-hidden border border-border bg-slate-950 font-mono text-xs sm:text-sm">
                  <div className="flex items-center justify-between px-4 py-2 border-b border-border/60 bg-slate-900/80 text-muted-foreground text-xs uppercase tracking-wider">
                    <span>{section.codeSnippet.language}</span>
                    <span className="text-[11px] text-primary">ndlong.site</span>
                  </div>
                  <pre className="p-4 overflow-x-auto text-slate-100">
                    <code>{section.codeSnippet.code}</code>
                  </pre>
                </div>
              )}

              {/* Key Takeaways */}
              {section.keyTakeaways && section.keyTakeaways.length > 0 && (
                <div className="p-4 sm:p-5 rounded-lg border border-primary/25 bg-primary/5 space-y-2 mt-4">
                  <p className="font-mono text-xs uppercase tracking-wider text-primary font-semibold">
                    Key Implementation Takeaways:
                  </p>
                  <ul className="space-y-1.5 text-sm sm:text-base">
                    {section.keyTakeaways.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <span className="text-primary font-bold">✓</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>
          ))}

          {/* Conclusion */}
          <section className="pt-6 border-t border-border/40 space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-primary font-mono">
              Summary & Final Thoughts
            </h2>
            <p className="text-foreground/90 leading-relaxed">
              {post.content.conclusion}
            </p>
          </section>

          {/* Tags */}
          <div className="pt-6 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-xs px-2.5 py-1 rounded bg-muted/40 text-muted-foreground border border-border/40"
              >
                #{tag}
              </span>
            ))}
          </div>
        </article>

        {/* Author Bio Box */}
        <div className="mt-14 p-6 sm:p-8 rounded-xl border border-primary/30 bg-primary/5 flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-primary shrink-0">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-2">
            <h3 className="font-mono font-bold text-foreground text-lg">
              Written by {post.author.name}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Backend Engineer &amp; Backend Lead with 4+ years of hands-on experience building production systems, RESTful APIs, and cloud infrastructure using Python (Django), Laravel, PostgreSQL, and Google Cloud Platform.
            </p>
            <div className="pt-2 flex flex-wrap justify-center sm:justify-start gap-4 font-mono text-xs text-primary">
              <a
                href="https://www.linkedin.com/in/ndl-longnguyen/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LinkedIn Profile →
              </a>
              <a
                href="mailto:ndl.long.nguyendai@gmail.com"
                className="hover:underline"
              >
                Email Contact →
              </a>
            </div>
          </div>
        </div>

        {/* Next / Previous Navigation */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 border-t border-border/40">
          {prevPost ? (
            <Link
              href={`/blog/${prevPost.slug}`}
              className="p-4 rounded-lg border border-border/50 bg-card/40 hover:border-primary/50 transition-colors group"
            >
              <span className="font-mono text-xs text-muted-foreground block mb-1">
                ← Previous Article
              </span>
              <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                {prevPost.title}
              </span>
            </Link>
          ) : (
            <div />
          )}

          {nextPost ? (
            <Link
              href={`/blog/${nextPost.slug}`}
              className="p-4 rounded-lg border border-border/50 bg-card/40 hover:border-primary/50 transition-colors group sm:text-right"
            >
              <span className="font-mono text-xs text-muted-foreground block mb-1">
                Next Article →
              </span>
              <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                {nextPost.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  )
}
