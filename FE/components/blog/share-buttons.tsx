"use client"

import React, { useState } from "react"
import { Share2, Check, Copy, Linkedin, Twitter, Facebook } from "lucide-react"

interface ShareButtonsProps {
  url: string
  title: string
  tags?: string[]
}

export function ShareButtons({ url, title, tags = [] }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    } catch {
      // Fallback if clipboard API fails
      const input = document.createElement("input")
      input.value = url
      document.body.appendChild(input)
      input.select()
      document.execCommand("copy")
      document.body.removeChild(input)
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    }
  }

  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)
  const encodedTags = encodeURIComponent(tags.map(t => t.replace(/[^a-zA-Z0-9]/g, "")).join(","))

  const shareLinks = {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}&via=ndl_longnguyen${encodedTags ? `&hashtags=${encodedTags}` : ""}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
  }

  return (
    <div className="flex flex-wrap items-center gap-2.5 py-4 border-y border-border/40 my-8">
      <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground mr-1">
        <Share2 className="w-3.5 h-3.5 text-primary" />
        <span className="font-semibold uppercase tracking-wider">Share:</span>
      </div>

      {/* LinkedIn */}
      <a
        href={shareLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-card/60 hover:bg-[#0077b5]/15 hover:text-[#0077b5] border border-border/50 hover:border-[#0077b5]/40 text-muted-foreground transition-all duration-200"
      >
        <Linkedin className="w-3.5 h-3.5 text-[#0077b5]" />
        <span>LinkedIn</span>
      </a>

      {/* X / Twitter */}
      <a
        href={shareLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on X (Twitter)"
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-card/60 hover:bg-white/10 hover:text-white border border-border/50 hover:border-white/30 text-muted-foreground transition-all duration-200"
      >
        <Twitter className="w-3.5 h-3.5 text-sky-400" />
        <span>X / Twitter</span>
      </a>

      {/* Facebook */}
      <a
        href={shareLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Facebook"
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-card/60 hover:bg-[#1877f2]/15 hover:text-[#1877f2] border border-border/50 hover:border-[#1877f2]/40 text-muted-foreground transition-all duration-200"
      >
        <Facebook className="w-3.5 h-3.5 text-[#1877f2]" />
        <span>Facebook</span>
      </a>

      {/* Copy Link Button */}
      <button
        onClick={handleCopy}
        type="button"
        aria-label="Copy article link"
        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 cursor-pointer ${
          copied
            ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
            : "bg-card/60 hover:bg-primary/10 hover:text-primary border border-border/50 hover:border-primary/40 text-muted-foreground"
        }`}
      >
        {copied ? (
          <>
            <Check className="w-3.5 h-3.5 text-emerald-400" />
            <span className="font-semibold text-emerald-400">Link Copied!</span>
          </>
        ) : (
          <>
            <Copy className="w-3.5 h-3.5 text-primary" />
            <span>Copy Link</span>
          </>
        )}
      </button>
    </div>
  )
}
