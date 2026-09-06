import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { SITE_URL } from "@/config/site"

export const metadata: Metadata = {
  title: "Privacy Policy | Nguyen Dai Long (ndlong.site)",
  description:
    "Privacy Policy for ndlong.site and affiliated web tools & games. Learn how we handle your data, cookie usage, and third-party advertising compliance.",
}

export default function PrivacyPolicy() {
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
            Legal & Transparency
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground text-sm font-mono">
            Effective date: September 1, 2026 | Last updated: September 6, 2026
          </p>
        </header>

        {/* Content Body */}
        <div className="space-y-8 text-foreground/90 leading-relaxed text-base">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-primary font-mono">
              1. Introduction & Overview
            </h2>
            <p>
              Welcome to <strong>ndlong.site</strong> (operated by Nguyen Dai Long, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <strong>ndlong.site</strong> and our associated web tools and online games (including <em>arcade.ndlong.site</em>, <em>click.ndlong.site</em>, <em>image.ndlong.site</em>, <em>kids.ndlong.site</em>, <em>laisaut.ndlong.site</em>, and <em>link.ndlong.site</em>).
            </p>
            <p>
              We respect your personal privacy and are committed to protecting any data collected. If you have any questions or require more information about our Privacy Policy, please contact us at{" "}
              <a
                href="mailto:ndl.long.nguyendai@gmail.com"
                className="text-primary underline hover:text-primary/80"
              >
                ndl.long.nguyendai@gmail.com
              </a>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-primary font-mono">
              2. Log Files
            </h2>
            <p>
              Like many other websites, ndlong.site follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of this information is for analyzing trends, administering the site, tracking users&apos; movement around the website, and gathering demographic information.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-primary font-mono">
              3. Cookies and Web Beacons
            </h2>
            <p>
              ndlong.site uses &ldquo;cookies&rdquo; to store information including visitors&apos; preferences and the pages on the website that the visitor accessed or visited. The information is used to optimize the users&apos; experience by customizing our web page content based on visitors&apos; browser type and other information.
            </p>
          </section>

          <section className="space-y-3 p-6 rounded-lg border border-primary/30 bg-primary/5">
            <h2 className="text-xl font-semibold text-primary font-mono">
              4. Google DoubleClick DART Cookie & Third-Party Advertising
            </h2>
            <p>
              Google is one of the third-party vendors on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to ndlong.site and other sites on the internet.
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base pl-2">
              <li>
                Third-party vendors, including <strong>Google</strong>, use cookies to serve ads based on a user&apos;s prior visits to this website or other websites.
              </li>
              <li>
                Google&apos;s use of advertising cookies enables it and its partners to serve ads to our users based on their visit to our sites and/or other sites on the Internet.
              </li>
              <li>
                Users may opt out of personalized advertising by visiting{" "}
                <a
                  href="https://adssettings.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline font-medium hover:text-primary/80"
                >
                  Google Ads Settings
                </a>{" "}
                or by visiting{" "}
                <a
                  href="https://www.aboutads.info"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline font-medium hover:text-primary/80"
                >
                  www.aboutads.info
                </a>.
              </li>
            </ul>
            <p className="text-sm text-muted-foreground mt-2">
              Third-party ad servers or ad networks use technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on ndlong.site. They automatically receive your IP address when this occurs. ndlong.site has no access to or control over these cookies that are used by third-party advertisers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-primary font-mono">
              5. Client-Side Tools & Data Privacy
            </h2>
            <p>
              Several utilities on our platform (such as our Image Compressor) process files <strong>100% locally on your browser</strong> using client-side Web APIs (Canvas, Web Workers). Your files, images, and documents are never transmitted to, inspected by, or stored on our servers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-primary font-mono">
              6. GDPR & CCPA Data Protection Rights
            </h2>
            <p>
              We want to make sure you are fully aware of all of your data protection rights. Every user is entitled to:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-sm sm:text-base">
              <li><strong>The right to access</strong>: You have the right to request copies of your personal data.</li>
              <li><strong>The right to rectification</strong>: You have the right to request that we correct any information you believe is inaccurate.</li>
              <li><strong>The right to erasure</strong>: You have the right to request that we erase your personal data, under certain conditions.</li>
              <li><strong>The right to opt-out</strong>: Under CCPA, consumers have the right to request that a business not sell the consumer&apos;s personal data. We do not sell any personal information.</li>
            </ul>
            <p>
              If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-primary font-mono">
              7. Children&apos;s Information (COPPA Compliance)
            </h2>
            <p>
              Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
            </p>
            <p>
              ndlong.site does not knowingly collect any Personal Identifiable Information from children under the age of 13. For any games or educational tools designed for younger audiences, we do not require registration or personal data collection, and all ad requests comply with the Children&apos;s Online Privacy Protection Act (COPPA).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-primary font-mono">
              8. Consent & Updates
            </h2>
            <p>
              By using our website, you hereby consent to our Privacy Policy and agree to its terms. We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes.
            </p>
          </section>

          <section className="pt-6 border-t border-border/40 text-sm text-muted-foreground">
            <p>
              For inquiries regarding this Privacy Policy:
              <br />
              <strong>Nguyen Dai Long</strong>
              <br />
              Email:{" "}
              <a
                href="mailto:ndl.long.nguyendai@gmail.com"
                className="text-primary hover:underline"
              >
                ndl.long.nguyendai@gmail.com
              </a>
              <br />
              Website:{" "}
              <a href={SITE_URL} className="text-primary hover:underline">
                {SITE_URL}
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
