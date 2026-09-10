"use client"

import React, { useEffect, useState } from "react"

export function ReadingProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop || document.body.scrollTop
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight

      if (totalHeight > 0) {
        const scrolled = (scrollPx / totalHeight) * 100
        setProgress(Math.min(100, Math.max(0, scrolled)))
      }
    }

    window.addEventListener("scroll", updateScrollProgress, { passive: true })
    updateScrollProgress()

    return () => window.removeEventListener("scroll", updateScrollProgress)
  }, [])

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-transparent pointer-events-none"
    >
      <div
        className="h-full bg-gradient-to-r from-primary via-amber-400 to-emerald-400 transition-all duration-75 ease-out shadow-[0_0_10px_rgba(212,175,55,0.6)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
