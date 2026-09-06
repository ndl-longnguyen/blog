"use client"

import { useState } from "react"

type Category = "all" | "game" | "tool"

interface Product {
  id: string
  name: string
  description: string
  url: string
  category: "game" | "tool"
  tags: string[]
  emoji: string
  badge?: string
  color: string
}

const PRODUCTS: Product[] = [
  {
    id: "ndl-arcade",
    name: "NDL Arcade",
    description:
      "Free browser arcade games with no download required. Play Snake (5 maps), Tetris (10 difficulty levels), Space Invaders with boss battles, Breakout, and Sudoku. Global leaderboard & mobile-friendly.",
    url: "https://arcade.ndlong.site",
    category: "game",
    tags: ["Snake", "Tetris", "Space Invaders", "Breakout", "Sudoku"],
    emoji: "🕹️",
    badge: "Popular",
    color: "from-emerald-500/20 to-green-500/10",
  },
  {
    id: "click2top",
    name: "Click 2 Top",
    description:
      "Fast-paced competitive coin clicker arcade game. Tap coins, dodge bombs, upgrade passive generators, and compete on the global Nations Cup leaderboard. Real-time world rankings by country.",
    url: "https://click.ndlong.site",
    category: "game",
    tags: ["Clicker", "Nations Cup", "Leaderboard", "Competitive"],
    emoji: "🪙",
    badge: "New",
    color: "from-amber-500/20 to-yellow-500/10",
  },
  {
    id: "little-pathfinder",
    name: "Little Pathfinder",
    description:
      "A charming puzzle game for kids and all ages. Guide your character through challenging mazes and discover the path to the finish. Great for logic training and spatial reasoning.",
    url: "https://kids.ndlong.site",
    category: "game",
    tags: ["Puzzle", "Kids", "Maze", "Pathfinding"],
    emoji: "🧩",
    color: "from-purple-500/20 to-violet-500/10",
  },
  {
    id: "ndllink",
    name: "ShortLink – URL & QR Studio",
    description:
      "Production-ready URL shortener with dynamic QR code generation (PNG/SVG), privacy-safe click analytics, password-protected links, custom alias support, and UTM campaign builder. No sign-up required.",
    url: "https://link.ndlong.site",
    category: "tool",
    tags: ["URL Shortener", "QR Code", "Analytics", "UTM Builder"],
    emoji: "🔗",
    badge: "Free",
    color: "from-indigo-500/20 to-blue-500/10",
  },
  {
    id: "image-compressor",
    name: "Image Compressor",
    description:
      "Client-side image compression tool that runs entirely in your browser — no upload, no server, fully private. Supports JPEG, PNG, WebP. Drag & drop, adjust quality, and download instantly.",
    url: "https://image.ndlong.site",
    category: "tool",
    tags: ["Image", "Compression", "Privacy", "Client-side"],
    emoji: "🖼️",
    badge: "Free",
    color: "from-sky-500/20 to-cyan-500/10",
  },
  // NOTE: Temporarily hidden during Google AdSense review to avoid third-party copyright / video downloader policy flags.
  // Can be re-enabled after site approval.
  /*
  {
    id: "fbdownloader",
    name: "FB Video Downloader",
    description:
      "Simple and fast Facebook video downloader. Paste the video URL and get a direct download link in seconds — supports public videos in HD and SD quality. No login required.",
    url: "https://fb.ndlong.site",
    category: "tool",
    tags: ["Facebook", "Video", "Downloader", "Free"],
    emoji: "⬇️",
    color: "from-blue-500/20 to-indigo-500/10",
  },
  */
  {
    id: "laisuatnganhang",
    name: "Lãi Suất Ngân Hàng",
    description:
      "Công cụ tra cứu và so sánh lãi suất tiền gửi các ngân hàng Việt Nam theo kỳ hạn. Cập nhật thường xuyên, hỗ trợ tính lãi tự động. Dành cho người gửi tiết kiệm cá nhân và doanh nghiệp.",
    url: "https://laisaut.ndlong.site",
    category: "tool",
    tags: ["Lãi suất", "Ngân hàng", "Tiết kiệm", "Tài chính"],
    emoji: "🏦",
    color: "from-green-500/20 to-teal-500/10",
  },
]

const CATEGORIES: { label: string; value: Category }[] = [
  { label: "All", value: "all" },
  { label: "🕹️ Games", value: "game" },
  { label: "🔧 Tools", value: "tool" },
]

const BADGE_STYLES: Record<string, string> = {
  Popular: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30",
  New: "bg-amber-500/15 text-amber-400 border border-amber-500/30",
  Free: "bg-sky-500/15 text-sky-400 border border-sky-500/30",
}

export function Products() {
  const [activeCategory, setActiveCategory] = useState<Category>("all")

  const filtered =
    activeCategory === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory)

  return (
    <section id="products" className="py-24">
      {/* Section Header */}
      <h2 className="flex items-center text-2xl md:text-3xl font-bold text-foreground mb-4">
        <span className="text-primary font-mono text-xl mr-2">06.</span>
        My Products &amp; Open Source
        <span className="ml-4 h-px bg-border flex-1 max-w-xs" />
      </h2>
      <p className="text-muted-foreground text-sm mb-8 max-w-2xl">
        A collection of free tools and games I build and maintain outside of work. All products are{" "}
        <span className="text-primary">100% free</span> to use — no paywalls, no login required.
      </p>

      {/* Category Filter */}
      <div
        className="flex gap-2 mb-8"
        role="group"
        aria-label="Filter products by category"
      >
        {CATEGORIES.map((cat) => (
          <button
            key={cat.value}
            type="button"
            onClick={() => setActiveCategory(cat.value)}
            aria-pressed={activeCategory === cat.value}
            className={`px-4 py-1.5 rounded-full font-mono text-xs transition-all border ${
              activeCategory === cat.value
                ? "bg-primary text-background border-primary"
                : "bg-transparent text-muted-foreground border-border hover:border-primary hover:text-primary"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <ul
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        aria-label="NDL products and tools"
      >
        {filtered.map((product) => (
          <li key={product.id}>
            <a
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${product.name}`}
              className="group flex flex-col h-full bg-card rounded-xl border border-border hover:border-primary/40 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Card gradient top bar */}
              <div className={`h-1 w-full bg-gradient-to-r ${product.color} opacity-80`} />

              <div className="flex flex-col flex-1 p-5 gap-3">
                {/* Header */}
                <div className="flex items-start justify-between gap-2">
                  <span
                    className="text-2xl"
                    role="img"
                    aria-label={product.name}
                  >
                    {product.emoji}
                  </span>
                  {product.badge && (
                    <span
                      className={`font-mono text-[10px] px-2 py-0.5 rounded-full ${
                        BADGE_STYLES[product.badge] ?? ""
                      }`}
                    >
                      {product.badge}
                    </span>
                  )}
                </div>

                {/* Name */}
                <h3 className="font-bold text-foreground text-base group-hover:text-primary transition-colors leading-tight">
                  {product.name}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-xs leading-relaxed flex-1">
                  {product.description}
                </p>

                {/* Tags */}
                <ul className="flex flex-wrap gap-1.5 mt-auto pt-2 border-t border-border">
                  {product.tags.map((tag) => (
                    <li
                      key={tag}
                      className="font-mono text-[10px] text-muted-foreground/70 px-2 py-0.5 rounded bg-background/60"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="flex items-center gap-1 font-mono text-xs text-primary mt-1 group-hover:gap-2 transition-all">
                  <span>Visit</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>

      {/* Footer note */}
      <p className="mt-8 font-mono text-xs text-muted-foreground/60 text-center">
        All products are self-funded side projects, built with Next.js &amp; deployed on Vercel.
      </p>
    </section>
  )
}
