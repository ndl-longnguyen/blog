import React from "react"
import Link from "next/link"
import { SUBDOMAINS } from "@/config/site"
import { ExternalLink, Sparkles, ArrowRight, Layers } from "lucide-react"

interface ArticleContextualCTAProps {
  slug: string
}

export function ArticleContextualCTA({ slug }: ArticleContextualCTAProps) {
  if (slug === "client-side-image-compression-canvas-web-worker") {
    return (
      <div className="my-8 p-6 rounded-xl border border-sky-500/30 bg-gradient-to-r from-sky-500/10 via-sky-500/5 to-transparent relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-sky-400 font-mono text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-sky-400" />
              <span>Live Implementation Demo</span>
            </div>
            <h3 className="text-lg font-bold text-foreground">
              Try Image Compressor Online – 100% Free &amp; Private
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-xl leading-relaxed">
              Experience the in-browser Canvas &amp; Web Worker compression architecture described in this article. Zero server uploads, private, and instant.
            </p>
          </div>
          <a
            href={SUBDOMAINS.image}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-sky-500 text-slate-950 font-mono text-xs font-bold hover:bg-sky-400 transition-colors shrink-0 shadow-lg shadow-sky-500/20"
          >
            <span>Launch Tool</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    )
  }

  if (slug === "postgresql-query-optimization-redis-scaling" || slug === "websocket-realtime-notifications-redis") {
    return (
      <div className="my-8 p-6 rounded-xl border border-amber-500/30 bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>High-Throughput Showcase</span>
            </div>
            <h3 className="text-lg font-bold text-foreground">
              Click 2 Top — Real-Time Competitive Arcade
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-xl leading-relaxed">
              Test our real-time synchronization and high-frequency click handling live in action. Compete on the global Nations Cup leaderboard.
            </p>
          </div>
          <a
            href={SUBDOMAINS.click}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-amber-500 text-slate-950 font-mono text-xs font-bold hover:bg-amber-400 transition-colors shrink-0 shadow-lg shadow-amber-500/20"
          >
            <span>Play Click 2 Top</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    )
  }

  return null
}

export function ArticleEcosystemGrid() {
  const tools = [
    {
      name: "NDL Arcade",
      badge: "Free Games",
      desc: "Snake, Tetris, Space Invaders & Sudoku in your browser with no downloads.",
      url: SUBDOMAINS.arcade,
      color: "border-emerald-500/30 hover:border-emerald-500/60 bg-emerald-500/5",
      badgeColor: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    },
    {
      name: "ShortLink & QR Studio",
      badge: "Developer Tool",
      desc: "Production URL shortener, dynamic QR generator (SVG/PNG) & UTM builder.",
      url: SUBDOMAINS.link,
      color: "border-indigo-500/30 hover:border-indigo-500/60 bg-indigo-500/5",
      badgeColor: "bg-indigo-500/15 text-indigo-400 border-indigo-500/30",
    },
    {
      name: "Image Compressor",
      badge: "Client-Side Tool",
      desc: "100% private in-browser compression for WebP, JPEG, PNG using Web Workers.",
      url: SUBDOMAINS.image,
      color: "border-sky-500/30 hover:border-sky-500/60 bg-sky-500/5",
      badgeColor: "bg-sky-500/15 text-sky-400 border-sky-500/30",
    },
    {
      name: "Click 2 Top",
      badge: "Competitive",
      desc: "High-paced competitive coin clicker with real-time global Nations Cup ranking.",
      url: SUBDOMAINS.click,
      color: "border-amber-500/30 hover:border-amber-500/60 bg-amber-500/5",
      badgeColor: "bg-amber-500/15 text-amber-400 border-amber-500/30",
    },
  ]

  return (
    <section className="mt-16 pt-10 border-t border-border/40 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-primary font-mono text-xs font-semibold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5 text-primary" />
            <span>NDL Ecosystem</span>
          </div>
          <h3 className="text-xl font-bold text-foreground">
            Explore Free Web Tools &amp; Games
          </h3>
        </div>
        <Link
          href="/#products"
          className="text-xs font-mono text-primary hover:underline inline-flex items-center gap-1"
        >
          <span>View All Products</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {tools.map((t) => (
          <a
            key={t.name}
            href={t.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-4 rounded-xl border ${t.color} transition-all duration-200 group flex flex-col justify-between`}
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-foreground text-sm group-hover:text-primary transition-colors flex items-center gap-1.5">
                  {t.name}
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </span>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${t.badgeColor}`}>
                  {t.badge}
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {t.desc}
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-border/20 text-[11px] font-mono text-primary flex items-center gap-1">
              <span>Launch App</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
