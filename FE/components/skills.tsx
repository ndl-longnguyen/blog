const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "PHP", "JavaScript", "SQL"],
  },
  {
    title: "Backend Frameworks",
    skills: ["Django REST Framework", "Laravel", "Django"],
  },
  {
    title: "Frontend",
    skills: ["HTML5/CSS3", "Bootstrap", "TailwindCSS", "VueJS"],
  },
  {
    title: "Database & Cache",
    skills: ["MySQL", "PostgreSQL", "Redis"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["Google Cloud Platform", "Docker", "CI/CD"],
  },
  {
    title: "Architecture & Security",
    skills: ["REST API Design", "OAuth2", "JWT", "WebSockets", "DB Schema Design", "OpenAPI"],
  },
  {
    title: "Tools",
    skills: ["Git", "Postman", "Figma"],
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
          Honors & Awards
        </h3>
        <div className="bg-card p-6 rounded-lg border border-border inline-block">
          <p className="text-primary font-mono text-sm mb-1">2024</p>
          <p className="text-foreground font-medium">Outstanding Employee of SOARIG VIETNAM</p>
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
              <p className="text-muted-foreground">Major: Software Engineering</p>
            </div>
            <div className="text-right">
              <p className="font-mono text-sm text-primary">Sep 2018 - Jun 2022</p>
              <p className="text-muted-foreground">GPA: 3.46/4</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
