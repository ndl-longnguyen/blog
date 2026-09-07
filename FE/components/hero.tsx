"use client"

import { useEffect, useState } from "react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="min-h-screen flex flex-col justify-center pt-20">
      <div
        className={`transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <p className="text-primary font-mono mb-5">Hi, my name is</p>
      </div>

      <div
        className={`transition-all duration-700 delay-100 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-3">
          Nguyen Dai Long
        </h1>
      </div>

      <div
        className={`transition-all duration-700 delay-200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-muted-foreground mb-6">
          I build scalable backend systems.
        </h2>
      </div>

      <div
        className={`transition-all duration-700 delay-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <p className="text-muted-foreground max-w-xl text-lg leading-relaxed mb-12">
          Backend Engineer & Backend Lead with <span className="text-primary">4+ years</span> of experience 
          specializing in Python (Django/DRF), Laravel, and cloud architectures (AWS & GCP). 
          Experienced in building robust systems serving <span className="text-primary">30,000+ users</span>, 
          real-time messaging, and high-throughput APIs at{" "}
          <a href="https://soarig.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            SOARIG VIETNAM
          </a>
          .
        </p>
      </div>

      <div
        className={`transition-all duration-700 delay-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <a
          href="#contact"
          className="inline-block px-7 py-4 border border-primary text-primary font-mono rounded hover:bg-primary/10 transition-colors"
        >
          Get In Touch
        </a>
      </div>

      {/* Social Links - Fixed Left Side */}
      <div className="hidden lg:flex fixed left-10 bottom-0 flex-col items-center gap-6 after:content-[''] after:w-px after:h-24 after:bg-muted-foreground">
        <a
          href="https://www.linkedin.com/in/ndl-longnguyen/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all"
          aria-label="LinkedIn"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
            <rect x="2" y="9" width="4" height="12"/>
            <circle cx="4" cy="4" r="2"/>
          </svg>
        </a>
        <a
          href="mailto:ndl.long.nguyendai@gmail.com"
          className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all"
          aria-label="Email"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2"/>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
          </svg>
        </a>
        <a
          href="tel:0337263547"
          className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all"
          aria-label="Phone"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
        </a>
      </div>

      {/* Email - Fixed Right Side */}
      <div className="hidden lg:flex fixed right-10 bottom-0 flex-col items-center gap-6 after:content-[''] after:w-px after:h-24 after:bg-muted-foreground">
        <a
          href="mailto:ndl.long.nguyendai@gmail.com"
          className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
          style={{ writingMode: "vertical-rl" }}
        >
          ndl.long.nguyendai@gmail.com
        </a>
      </div>
    </section>
  )
}
