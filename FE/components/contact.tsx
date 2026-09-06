export function Contact() {
  return (
    <section id="contact" className="py-24 text-center max-w-2xl mx-auto">
      <p className="font-mono text-primary mb-4">07. What&apos;s Next?</p>
      <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Get In Touch</h2>
      <p className="text-muted-foreground text-lg leading-relaxed mb-12">
        I&apos;m currently looking for new opportunities and my inbox is always open. 
        Whether you have a question, a project idea, or just want to say hi, 
        I&apos;ll try my best to get back to you!
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
        <a
          href="mailto:ndl.long.nguyendai@gmail.com"
          className="inline-flex items-center gap-2 px-8 py-4 border border-primary text-primary font-mono rounded hover:bg-primary/10 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
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
          Say Hello
        </a>
        <a
          href="https://www.linkedin.com/in/ndl-longnguyen/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-mono rounded hover:bg-primary/90 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
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
          LinkedIn
        </a>
      </div>

      {/* Contact Info Cards */}
      <div className="grid sm:grid-cols-3 gap-4 text-left">
        <div className="p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors">
          <div className="flex items-center gap-3 mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <span className="text-sm text-muted-foreground">Email</span>
          </div>
          <a
            href="mailto:ndl.long.nguyendai@gmail.com"
            className="text-foreground hover:text-primary transition-colors text-sm font-mono break-all"
          >
            ndl.long.nguyendai@gmail.com
          </a>
        </div>

        <div className="p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors">
          <div className="flex items-center gap-3 mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span className="text-sm text-muted-foreground">Phone</span>
          </div>
          <a
            href="tel:0337263547"
            className="text-foreground hover:text-primary transition-colors text-sm font-mono"
          >
            0337 263 547
          </a>
        </div>

        <div className="p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors">
          <div className="flex items-center gap-3 mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span className="text-sm text-muted-foreground">Location</span>
          </div>
          <p className="text-foreground text-sm font-mono">Da Nang, Vietnam</p>
        </div>
      </div>
    </section>
  )
}
