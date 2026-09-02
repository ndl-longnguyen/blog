const skillCategories = [
  {
    title: "Backend Frameworks",
    skills: ["Django REST Framework", "Laravel", "Django", "ASP.NET Core", "Flask"],
  },
  {
    title: "Programming Languages",
    skills: ["Python", "PHP", "JavaScript", "SQL", "C#"],
  },
  {
    title: "Databases & Caching",
    skills: ["PostgreSQL", "MySQL", "Redis", "MongoDB", "DB Schema Design", "Query Tuning"],
  },
  {
    title: "Cloud & Infrastructure",
    skills: ["AWS", "Google Cloud Platform (GCP)", "Cloud Run", "Cloud Build", "Docker"],
  },
  {
    title: "Realtime & Architecture",
    skills: ["REST API Design", "WebSocket", "OpenAPI", "OAuth2", "JWT", "Background Jobs"],
  },
  {
    title: "DevOps & Engineering",
    skills: ["CI/CD Pipelines", "Git", "Postman", "Clean Code", "Code Review", "AI-Assisted Workflow"],
  },
  {
    title: "Frontend",
    skills: ["VueJS", "Next.js", "TailwindCSS", "HTML5/CSS3", "Bootstrap"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <h2 className="flex items-center text-2xl md:text-3xl font-bold text-foreground mb-10">
        <span className="text-primary font-mono text-xl mr-2">04.</span>
        Technical Skills
        <span className="ml-4 h-px bg-border flex-1 max-w-xs" />
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="group p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors"
          >
            <h3 className="text-lg font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-background text-muted-foreground text-sm font-mono rounded border border-border hover:border-primary hover:text-primary transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Awards Section */}
      <div className="mt-16">
        <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
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
            className="text-primary"
          >
            <circle cx="12" cy="8" r="6" />
            <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
          </svg>
          Honors &amp; Awards
        </h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-card p-6 rounded-lg border border-border hover:border-primary/40 transition-colors">
            <p className="text-primary font-mono text-sm mb-1">2025</p>
            <p className="text-foreground font-medium text-lg">Project of the Year (Team Award)</p>
            <p className="text-muted-foreground text-sm mt-1">SOARIG VIETNAM</p>
          </div>
          <div className="bg-card p-6 rounded-lg border border-border hover:border-primary/40 transition-colors">
            <p className="text-primary font-mono text-sm mb-1">2024</p>
            <p className="text-foreground font-medium text-lg">Outstanding Employee of the Year</p>
            <p className="text-muted-foreground text-sm mt-1">SOARIG VIETNAM</p>
          </div>
        </div>
      </div>

      {/* ITSS Certification & Standards */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
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
            className="text-primary"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
            <path d="m9 12 2 2 4-4" />
          </svg>
          ITSS Level 3 Skill Evaluation (Japan Standard)
        </h3>
        <div className="bg-card p-6 rounded-lg border border-border">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-4 border-b border-border">
            <div>
              <span className="font-mono text-primary font-bold text-lg">ITSS Level 3</span>
              <span className="text-muted-foreground text-sm ml-2">— Autonomous Engineer &amp; Technical Leader</span>
            </div>
            <span className="text-xs font-mono px-3 py-1 rounded bg-primary/10 text-primary border border-primary/20">
              Verified 2026/07
            </span>
          </div>
          <ul className="grid md:grid-cols-2 gap-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">▹</span>
              <span>Completely autonomous in backend delivery and complex requirements (spec) clarification</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">▹</span>
              <span>Experienced in mentoring team members and providing proactive technical support</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">▹</span>
              <span>Demonstrated backend leadership, task breakdown, sprint estimation, and schedule management</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1">▹</span>
              <span>Strict adherence to Clean Code, coding standards, and rigorous code reviews</span>
            </li>
            <li className="flex items-start gap-2 md:col-span-2">
              <span className="text-primary mt-1">▹</span>
              <span>Continuous integration of modern AI tools to accelerate development velocity and reduce man-hours</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Education Section */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
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
            className="text-primary"
          >
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
          </svg>
          Education
        </h3>
        <div className="bg-card p-6 rounded-lg border border-border">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <div>
              <h4 className="text-foreground font-medium text-lg">Duy Tan University</h4>
              <p className="text-muted-foreground">Bachelor of Software Engineering</p>
            </div>
            <div className="md:text-right">
              <p className="font-mono text-sm text-primary">Sep 2018 - Jun 2022</p>
              <p className="text-muted-foreground font-mono text-sm">GPA: 3.46 / 4.0</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
