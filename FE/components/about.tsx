export function About() {
  const technologies = [
    "Python",
    "Django REST Framework",
    "Laravel",
    "PostgreSQL",
    "Redis",
    "Google Cloud Platform",
    "Docker",
    "RESTful APIs",
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
            Hello! I&apos;m Long, a passionate Backend Developer based in{" "}
            <span className="text-primary">Da Nang, Vietnam</span>. I specialize in building robust, 
            scalable backend systems that power modern web applications.
          </p>

          <p className="leading-relaxed">
            With over <span className="text-primary">3 years of experience</span>, I&apos;ve worked on 
            diverse projects ranging from enterprise management systems to e-commerce platforms. 
            I take pride in writing clean, efficient code and implementing best practices in 
            system architecture.
          </p>

          <p className="leading-relaxed">
            Currently, I&apos;m working as a <span className="text-primary">Software Engineer</span> at{" "}
            <a 
              href="https://soarig.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              SOARIG VIETNAM
            </a>
            , where I lead backend teams, design database structures, and build high-performance 
            APIs using Django REST Framework.
          </p>

          <p className="leading-relaxed mb-4">
            Here are some technologies I&apos;ve been working with:
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
            <div className="w-full aspect-square bg-card rounded flex items-center justify-center">
              <div className="text-6xl font-bold text-primary/30">NDL</div>
            </div>
          </div>
          <div className="absolute top-4 left-4 w-full h-full border-2 border-primary rounded -z-10 group-hover:top-2 group-hover:left-2 transition-all" />
        </div>
      </div>
    </section>
  )
}
