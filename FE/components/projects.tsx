const projects = [
  {
    title: "Team Management System",
    description:
      "Enterprise-grade system for business team management. Features real-time communication, payment integration with Stripe, and cryptocurrency exchange via Dotmoney API. Led the backend team in designing scalable architecture.",
    tech: ["Django REST Framework", "Next.js", "PostgreSQL", "Redis", "Docker", "GCP", "WebSocket", "Stripe"],
    role: "Lead BE Team, Backend Developer",
    period: "May 2024 - Present",
    teamSize: 8,
  },
  {
    title: "Electronic Contract Management System",
    description:
      "Digital contract management platform with complex business logic for electronic document signing and management. Built robust CI/CD pipelines for seamless deployment and ensured stable release delivery.",
    tech: ["Django REST Framework", "Next.js", "PostgreSQL", "Docker", "GCP", "Stripe Payment"],
    role: "Backend Developer",
    period: "Aug 2024 - Oct 2025",
    teamSize: 6,
  },
  {
    title: "Landing Page Builder via LINE Platform",
    description:
      "Full-stack application enabling users to create custom landing pages through LINE platform integration. Analyzed legacy systems, communicated directly with clients, and delivered features on schedule.",
    tech: ["Laravel", "VueJS", "LINE API"],
    role: "Full-stack Developer",
    period: "Oct 2023 - May 2024",
    teamSize: 4,
  },
  {
    title: "Online Shopping Website",
    description:
      "E-commerce platform with real-time notifications using Pusher and push notifications via Firebase Cloud Messaging. Developed APIs for mobile app integration and ensured on-time delivery.",
    tech: ["Laravel", "MySQL", "jQuery", "AJAX", "Bootstrap", "Pusher", "FCM"],
    role: "Backend Developer",
    period: "Apr 2023 - Sep 2023",
    teamSize: 6,
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <h2 className="flex items-center text-2xl md:text-3xl font-bold text-foreground mb-10">
        <span className="text-primary font-mono text-xl mr-2">03.</span>
        Key Projects
        <span className="ml-4 h-px bg-border flex-1 max-w-xs" />
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className="group relative bg-card rounded-lg p-6 hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/30 hover:-translate-y-1"
          >
            {/* Top Section */}
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                  />
                </svg>
              </div>
              <span className="font-mono text-xs text-primary bg-primary/10 px-2 py-1 rounded">
                #{String(index + 1).padStart(2, "0")}
              </span>
            </div>

            {/* Project Info */}
            <p className="font-mono text-xs text-primary mb-2">{project.role}</p>
            <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              {project.description}
            </p>

            {/* Meta Info */}
            <div className="flex items-center gap-4 text-xs text-muted-foreground font-mono mb-4 pb-4 border-b border-border">
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {project.teamSize} members
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {project.period}
              </span>
            </div>

            {/* Tech Stack */}
            <ul className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <li
                  key={t}
                  className="font-mono text-xs text-muted-foreground px-2 py-1 rounded bg-background/50"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
