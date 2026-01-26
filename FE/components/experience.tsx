"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const experiences = [
  {
    company: "SOARIG VIETNAM",
    role: "Software Engineer",
    period: "Oct 2023 - Present",
    url: "https://soarig.com",
    highlights: [
      "Led backend team: enforced coding conventions, performed code reviews, and maintained system quality and stability",
      "Designed database structures, developed backend features and RESTful APIs following project architecture",
      "Optimized database queries and backend performance to improve system throughput",
      "Supported cloud-related projects on Google Cloud Platform (GCP) including setup, configuration, and troubleshooting",
      "Mentored new team members, guided onboarding process, and improved team productivity",
      "Demonstrated strong task management, ensuring efficient workload distribution and on-time delivery",
    ],
  },
  {
    company: "HIKONI Co., Ltd",
    role: "Backend Developer",
    period: "Mar 2022 - Sep 2023",
    url: "#",
    highlights: [
      "Analyzed functional requirements, designed database schema, and developed server-rendered applications and APIs using Laravel",
      "Built software systems for Japanese customers with strict requirements for quality, performance, and security",
      "Improved application performance through query optimization and backend processing enhancements",
      "Applied Japanese coding standards (conventions, testing, code review) to maintain consistency and high quality",
      "Worked closely with cross-functional teams across requirements analysis, development, testing, and deployment phases",
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
