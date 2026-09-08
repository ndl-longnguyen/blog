import Image from "next/image"

export function About() {
  const technologies = [
    "Python & Django REST",
    "PHP & Laravel",
    "PostgreSQL & MySQL",
    "Redis & Caching",
    "AWS & Google Cloud (GCP)",
    "Docker & CI/CD Pipelines",
    "WebSocket & Real-time",
    "RESTful API & System Architecture",
  ]

  return (
    <section id="about" className="py-24 max-w-4xl">
      <h2 className="flex items-center text-2xl md:text-3xl font-bold text-foreground mb-10">
        <span className="text-primary font-mono text-xl mr-2">01.</span>
        About Me
        <span className="ml-4 h-px bg-border flex-1 max-w-xs" />
      </h2>

      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-4 text-muted-foreground">
          <p className="leading-relaxed">
            Hello! I&apos;m Long, a dedicated Backend Engineer &amp; Backend Lead based in{" "}
            <span className="text-primary">Da Nang, Vietnam</span>. I specialize in designing robust 
            architectures, optimizing databases, and engineering high-availability backend systems 
            serving tens of thousands of active users.
          </p>

          <p className="leading-relaxed">
            With over <span className="text-primary">4+ years of professional experience</span>, 
            I evaluate at <span className="text-primary">ITSS Level 3</span>—demonstrating complete 
            autonomy in requirements analysis, complex system design, and leading backend teams 
            to deliver mission-critical enterprise software.
          </p>

          <p className="leading-relaxed">
            Currently, I serve as <span className="text-primary">Backend Lead / Backend Engineer</span> at{" "}
            <a 
              href="https://soarig.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary hover:underline"
            >
              SOARIG VIETNAM
            </a>
            . I mentor team members, enforce clean code conventions through rigorous code reviews, 
            orchestrate multi-cloud deployments (AWS &amp; GCP), and leverage modern AI tools to 
            continually accelerate development velocity and system quality.
          </p>

          <p className="leading-relaxed mb-4">
            Here are key technologies and platforms I frequently work with:
          </p>

          <ul className="grid grid-cols-2 gap-2 font-mono text-sm">
            {technologies.map((tech) => (
              <li key={tech} className="flex items-center gap-2">
                <span className="text-primary">▹</span>
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative group">
          <div className="relative rounded overflow-hidden">
            <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10" />
            <div className="w-full aspect-square bg-card rounded overflow-hidden flex items-center justify-center">
              <Image
                src="/logo-dark.webp"
                alt="Nguyen Dai Long"
                width={400}
                height={400}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
          <div className="absolute top-4 left-4 w-full h-full border-2 border-primary rounded -z-10 group-hover:top-2 group-hover:left-2 transition-all" />
        </div>
      </div>
    </section>
  )
}
