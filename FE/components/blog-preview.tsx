import Link from "next/link"
import { BLOG_POSTS } from "@/lib/blog-data"

export function BlogPreview() {
  const featuredPosts = BLOG_POSTS.slice(0, 3)

  return (
    <section id="blog" className="py-24 border-t border-border/30">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
        <div>
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-2">
            06. Insights & Case Studies
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Engineering Blog
          </h2>
        </div>
        <Link
          href="/blog"
          className="font-mono text-sm text-primary hover:underline inline-flex items-center gap-1 self-start sm:self-auto"
        >
          View All {BLOG_POSTS.length} Articles →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuredPosts.map((post) => (
          <article
            key={post.slug}
            className="p-6 rounded-xl border border-border/50 bg-card/40 hover:border-primary/50 hover:bg-card/70 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-muted-foreground mb-3">
                <span className="text-primary font-semibold px-2 py-0.5 rounded bg-primary/10 border border-primary/20">
                  {post.category}
                </span>
                <span>{post.readTime}</span>
              </div>

              <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2.5 leading-snug line-clamp-2">
                <Link href={`/blog/${post.slug}`} className="focus:outline-none">
                  {post.title}
                </Link>
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-6">
                {post.excerpt}
              </p>
            </div>

            <div className="pt-4 border-t border-border/30 flex items-center justify-between">
              <span className="font-mono text-xs text-muted-foreground">
                {post.date}
              </span>
              <Link
                href={`/blog/${post.slug}`}
                className="font-mono text-xs text-primary font-semibold inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
              >
                Read →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
