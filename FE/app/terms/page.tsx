import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Terms of Service | Nguyen Dai Long (ndlong.site)",
  description:
    "Terms of Service for ndlong.site and affiliated web applications. Read about acceptable use, intellectual property, and service disclaimers.",
}

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-6 sm:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        {/* Navigation / Header */}
        <div className="flex items-center justify-between pb-8 border-b border-border/40 mb-10">
          <Link
            href="/"
            className="flex items-center gap-2.5 group hover:opacity-90 transition-opacity"
            aria-label="Back to Home"
          >
            <Image
              src="/logo.png"
              alt="Nguyen Dai Long Logo"
              width={36}
              height={36}
              className="w-9 h-9 object-contain drop-shadow-[0_2px_8px_rgba(212,175,55,0.3)] transition-transform duration-300 group-hover:scale-105"
            />
            <span className="text-primary font-mono text-xl font-bold tracking-wider">
              NDL
            </span>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary font-mono text-sm px-4 py-2 rounded border border-primary/40 hover:bg-primary/10 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>

        {/* Document Title */}
        <header className="mb-10">
          <p className="font-mono text-primary text-sm tracking-wide uppercase mb-2">
            Agreement & Conditions
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Terms of Service
          </h1>
          <p className="text-muted-foreground text-sm font-mono">
            Effective date: September 1, 2026 | Last updated: September 6, 2026
          </p>
        </header>

        {/* Content Body */}
        <div className="space-y-8 text-foreground/90 leading-relaxed text-base">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-primary font-mono">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using <strong>ndlong.site</strong> or any of its subdomains (collectively, the &ldquo;Website&rdquo; or &ldquo;Services&rdquo;), you accept and agree to be bound by the terms and provision of this agreement. In addition, when using particular tools, utilities, or games, you shall be subject to any posted guidelines or rules applicable to such services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-primary font-mono">
              2. Intellectual Property Rights
            </h2>
            <p>
              All original content, features, web application source code, and design assets developed by Nguyen Dai Long are protected by international copyright, trademark, and other intellectual property laws. You may not copy, reverse engineer, or redistribute our applications without prior written permission.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-primary font-mono">
              3. Use of Free Tools & Games
            </h2>
            <p>
              Our web applications (including URL shortener, image compressor, financial calculators, and browser arcade games) are provided free of charge for lawful personal and commercial utility:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-sm sm:text-base">
              <li>You agree not to use our tools to distribute malware, illegal content, spam, or phishing campaigns.</li>
              <li>You agree not to disrupt or overload our infrastructure or servers through automated bot abuse or DDoS attacks.</li>
              <li>We reserve the right to block access or remove shortened links that violate these terms.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-primary font-mono">
              4. Third-Party Links & Advertising
            </h2>
            <p>
              Our Website displays advertisements served by third-party advertising partners, including <strong>Google AdSense</strong>. We have no control over the content of third-party advertisements or websites linked to or from our pages. The inclusion of any link or advertisement does not imply endorsement. Your dealings with advertisers found on or through the Website are solely between you and the advertiser.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-primary font-mono">
              5. Disclaimer of Warranties
            </h2>
            <p>
              The Website and all tools are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without warranties of any kind, either express or implied. Nguyen Dai Long does not guarantee that the services will be uninterrupted, completely secure, or error-free. Financial information (such as bank interest rates) is provided for informational and comparative purposes only and should not be construed as certified professional financial advice.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-primary font-mono">
              6. Limitation of Liability
            </h2>
            <p>
              In no event shall Nguyen Dai Long or ndlong.site be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the website or tools.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-primary font-mono">
              7. Governing Law & Contact
            </h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of Vietnam. If you have any questions about these Terms, please contact us at:
            </p>
            <p className="font-mono text-sm text-muted-foreground">
              Email:{" "}
              <a
                href="mailto:ndl.long.nguyendai@gmail.com"
                className="text-primary hover:underline"
              >
                ndl.long.nguyendai@gmail.com
              </a>
              <br />
              Location: Da Nang, Vietnam
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
