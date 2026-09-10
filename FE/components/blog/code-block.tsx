"use client"

import React, { useState } from "react"
import { Copy, Check } from "lucide-react"

interface CodeBlockProps {
  language: string
  code: string
}

export function CodeBlock({ language, code }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      const input = document.createElement("textarea")
      input.value = code
      document.body.appendChild(input)
      input.select()
      document.execCommand("copy")
      document.body.removeChild(input)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="my-5 rounded-lg overflow-hidden border border-border bg-slate-950 font-mono text-xs sm:text-sm shadow-lg">
      <div className="flex items-center justify-between px-4 py-2 border-b border-border/60 bg-slate-900/80 text-muted-foreground text-xs uppercase tracking-wider">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
          <span className="ml-1.5 font-bold text-slate-300">{language}</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[11px] text-primary/80 font-mono hidden sm:inline">
            ndlong.site
          </span>
          <button
            onClick={handleCopy}
            type="button"
            aria-label="Copy code to clipboard"
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800/80 hover:bg-slate-700 text-slate-200 text-xs transition-colors cursor-pointer border border-slate-700/60"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400 font-semibold text-[11px]">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-400" />
                <span className="text-[11px]">Copy</span>
              </>
            )}
          </button>
        </div>
      </div>

      <pre className="p-4 overflow-x-auto text-slate-100 leading-relaxed font-mono">
        <code>{code}</code>
      </pre>
    </div>
  )
}
