"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface HeaderProps {
  activeSection: string
}

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Products", href: "#products" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "#contact" },
]

export function Header({ activeSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      )}
    >
      <nav className="flex items-center justify-between px-6 lg:px-12 py-4">
        <a
          href="#"
          className="flex items-center gap-2.5 group hover:opacity-90 transition-opacity"
          aria-label="Home"
        >
          <Image
            src="/logo.png"
            alt="Nguyen Dai Long Logo"
            width={40}
            height={40}
            className="w-9 h-9 sm:w-10 sm:h-10 object-contain drop-shadow-[0_2px_8px_rgba(212,175,55,0.3)] transition-transform duration-300 group-hover:scale-105"
            priority
          />
          <span className="text-primary font-mono text-2xl font-bold tracking-wider">
            NDL
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "font-mono text-sm transition-colors",
                activeSection === item.href.slice(1)
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
              )}
            >
              <span className="text-primary">0{index + 1}.</span> {item.name}
            </a>
          ))}
          <a
            href="/CV_NGUYEN_DAI_LONG_Software_Engineer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-primary text-primary font-mono text-sm rounded hover:bg-primary/10 transition-colors"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-primary p-2"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-card/95 backdrop-blur-md border-b border-border">
          <div className="flex flex-col items-center py-6 gap-4">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "font-mono text-sm transition-colors",
                  activeSection === item.href.slice(1)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                )}
              >
                <span className="text-primary">0{index + 1}.</span> {item.name}
              </a>
            ))}
            <a
              href="/CV_NGUYEN_DAI_LONG_Software_Engineer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-primary text-primary font-mono text-sm rounded hover:bg-primary/10 transition-colors"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
