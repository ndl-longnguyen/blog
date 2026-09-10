"use client"

import React, { useState, useMemo, useEffect } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import type { BlogPost } from "@/lib/blog-data"
import { Rss, Filter, ArrowRight, Tag } from "lucide-react"

interface BlogFilterProps {
  posts: BlogPost[]
}

export function BlogFilter({ posts }: BlogFilterProps) {
  const searchParams = useSearchParams()
  const initialCategory = searchParams.get("category") || "all"
  const initialTag = searchParams.get("tag") || ""

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory)
  const [selectedTag, setSelectedTag] = useState<string>(initialTag)

  // Sync if URL search params change
  useEffect(() => {
    const cat = searchParams.get("category")
    const tg = searchParams.get("tag")
    if (cat) setSelectedCategory(cat)
    if (tg) setSelectedTag(tg)
  }, [searchParams])

  const categories = useMemo(() => {
    const cats = Array.from(new Set(posts.map((p) => p.category)))
    return ["all", ...cats]
  }, [posts])

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchCategory =
        selectedCategory === "all" || post.category === selectedCategory
      const matchTag =
        !selectedTag || post.tags.some((t) => t.toLowerCase() === selectedTag.toLowerCase())
      return matchCategory && matchTag
    })
  }, [posts, selectedCategory, selectedTag])

  const clearFilters = () => {
    setSelectedCategory("all")
    setSelectedTag("")
  }

  return (
    <div className="space-y-8">
      {/* Category Pills & RSS Feed Link */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-border/30">
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground mr-1">
            <Filter className="w-3.5 h-3.5 text-primary" />
            <span>Filter:</span>
          </div>

          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat)
                setSelectedTag("")
              }}
              type="button"
              className={`px-3 py-1 rounded-full text-xs font-mono transition-all duration-200 cursor-pointer ${
                selectedCategory === cat && !selectedTag
                  ? "bg-primary text-primary-foreground font-bold shadow-sm"
                  : "bg-card/60 text-muted-foreground hover:text-foreground hover:bg-card border border-border/40"
              }`}
            >
              {cat === "all" ? "All Topics" : cat}
            </button>
          ))}
        </div>

        {/* RSS Feed Button */}
        <a
          href="/feed.xml"
          target="_blank"
          rel="noopener noreferrer"
          title="Subscribe via RSS Feed"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/30 transition-colors shrink-0 self-start sm:self-auto"
        >
          <Rss className="w-3.5 h-3.5" />
          <span>RSS Feed</span>
        </a>
      </div>

      {/* Active Filter Notice if Tag is active */}
      {selectedTag && (
        <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground bg-primary/5 p-3 rounded-lg border border-primary/20">
          <Tag className="w-3.5 h-3.5 text-primary" />
          <span>Filtering by tag:</span>
          <span className="font-bold text-primary">#{selectedTag}</span>
          <button
            onClick={clearFilters}
            type="button"
            className="ml-auto text-muted-foreground hover:text-foreground underline text-[11px]"
          >
            Clear filter
          </button>
        </div>
      )}

      {/* Filtered Posts List */}
      {filteredPosts.length === 0 ? (
        <div className="text-center py-16 p-8 rounded-xl border border-dashed border-border/60">
          <p className="text-muted-foreground text-sm font-mono mb-3">
            No articles found matching the selected filter.
          </p>
          <button
            onClick={clearFilters}
            type="button"
            className="text-primary font-mono text-xs hover:underline"
          >
            Reset all filters
          </button>
        </div>
      ) : (
        <div className="space-y-8">
          {filteredPosts.map((post) => (
            <article
              key={post.slug}
              className="p-6 sm:p-8 rounded-xl border border-border/50 bg-card/40 hover:border-primary/50 hover:bg-card/70 transition-all duration-300 group"
            >
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-muted-foreground mb-3">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory(post.category)
                    setSelectedTag("")
                  }}
                  className="text-primary font-semibold px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20 hover:bg-primary/20 transition-colors cursor-pointer"
                >
                  {post.category}
                </button>
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
                    <button
                      key={tag}
                      type="button"
                      onClick={() => setSelectedTag(tag)}
                      className="font-mono text-xs px-2 py-0.5 rounded bg-muted/40 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors cursor-pointer"
                    >
                      #{tag}
                    </button>
                  ))}
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="font-mono text-xs sm:text-sm text-primary font-semibold inline-flex items-center gap-1.5 group-hover:translate-x-1 transition-transform"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}
