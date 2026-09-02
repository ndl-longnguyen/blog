"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const experiences = [
  {
    company: "SOARIG VIETNAM",
    role: "Backend Engineer / Backend Lead",
    period: "Oct 2023 - Present",
    url: "https://soarig.com",
    highlights: [
      "Lead the backend engineering team: architect database schemas, enforce clean code conventions, and conduct rigorous code reviews to ensure system quality and stability",
      "Develop scalable backend services and high-throughput RESTful APIs using Django REST Framework (DRF) and PostgreSQL",
      "Architect and implement real-time communication features utilizing Redis and WebSocket",
      "Build and maintain automated CI/CD deployment pipelines using Google Cloud Build and Cloud Run with Docker",
      "Optimize database queries, indexing strategies, and caching layers to elevate system throughput and responsiveness",
      "Engineer robust notification pipelines handling bulk emails and push notifications for critical system alerts",
      "Mentor junior team members, streamline onboarding, and integrate AI-assisted coding tools to maximize team velocity",
    ],
  },
  {
    company: "HIKONI Co., Ltd",
    role: "Backend Developer",
    period: "Mar 2022 - Sep 2023",
    url: "#",
    highlights: [
      "Developed enterprise-grade backend systems and RESTful APIs using Laravel and MySQL for Japanese corporate clients",
      "Designed relational database schemas and implemented complex backend business logic adhering to strict Japanese software quality and security standards",
      "Tuned database queries and optimized backend data processing to maintain high performance under peak loads",
      "Collaborated closely with cross-functional teams throughout requirements analysis, system design, testing, and deployment phases",
      "Maintained and enhanced live production applications with continuous monitoring and zero-downtime releases",
    ],
  },
]

export function Experience() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="experience" className="py-24 max-w-3xl">
      <h2 className="flex items-center text-2xl md:text-3xl font-bold text-foreground mb-10">
        <span className="text-primary font-mono text-xl mr-2">02.</span>
        Where I&apos;ve Worked
        <span className="ml-4 h-px bg-border flex-1 max-w-xs" />
      </h2>

      <div className="flex flex-col md:flex-row gap-4">
        {/* Tab List */}
        <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-border">
          {experiences.map((exp, index) => (
            <button
              key={exp.company}
              type="button"
              onClick={() => setActiveTab(index)}
              className={cn(
                "px-5 py-3 font-mono text-sm text-left whitespace-nowrap transition-colors",
                activeTab === index
                  ? "text-primary bg-card border-b-2 md:border-b-0 md:border-l-2 border-primary md:-ml-px"
                  : "text-muted-foreground hover:text-primary hover:bg-card/50"
              )}
            >
              {exp.company}
            </button>
          ))}
        </div>

        {/* Tab Panels */}
        <div className="py-2 md:py-0 md:pl-6 min-h-[320px]">
          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              className={cn(
                "transition-opacity duration-300",
                activeTab === index ? "block opacity-100" : "hidden opacity-0"
              )}
            >
              <h3 className="text-xl font-medium text-foreground">
                {exp.role}{" "}
                <a
                  href={exp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  @ {exp.company}
                </a>
              </h3>
              <p className="font-mono text-sm text-muted-foreground mb-6">{exp.period}</p>
              <ul className="space-y-3">
                {exp.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 text-muted-foreground">
                    <span className="text-primary mt-1.5">▹</span>
                    <span className="leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
