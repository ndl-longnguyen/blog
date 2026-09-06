import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-10 text-center border-t border-border/30 mt-16">
      {/* Mobile Social Links */}
      <div className="flex justify-center gap-6 mb-6 lg:hidden">
        <a
          href="https://www.linkedin.com/in/ndl-longnguyen/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="LinkedIn"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </a>
        <a
          href="mailto:ndl.long.nguyendai@gmail.com"
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="Email"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
        </a>
        <a
          href="tel:0337263547"
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="Phone"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </a>
      </div>

      {/* Compliance / Policy Links (Required by Google AdSense) */}
      <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 mb-4 font-mono text-xs sm:text-sm text-muted-foreground">
        <Link
          href="/blog"
          className="hover:text-primary transition-colors underline-offset-4 hover:underline font-semibold text-primary"
        >
          Blog
        </Link>
        <span>•</span>
        <Link
          href="/privacy-policy"
          className="hover:text-primary transition-colors underline-offset-4 hover:underline"
        >
          Privacy Policy
        </Link>
        <span>•</span>
        <Link
          href="/terms"
          className="hover:text-primary transition-colors underline-offset-4 hover:underline"
        >
          Terms of Service
        </Link>
        <span>•</span>
        <a
          href="#contact"
          className="hover:text-primary transition-colors underline-offset-4 hover:underline"
        >
          Contact
        </a>
      </div>

      {/* Copyright & Author */}
      <div className="font-mono text-xs text-muted-foreground space-y-1">
        <p>
          © {currentYear}{" "}
          <span className="text-primary font-semibold">Nguyen Dai Long</span> (
          <a href="https://ndlong.site" className="hover:text-primary hover:underline">
            ndlong.site
          </a>
          ). All rights reserved.
        </p>
        <p className="text-[11px] opacity-75">
          Designed &amp; Built with Next.js &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  )
}

