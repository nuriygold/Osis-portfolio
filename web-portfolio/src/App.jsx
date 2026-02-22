const PROJECTS = [
  {
    title: "Mechane AI",
    summary:
      "Decision-support experience for automotive diagnostics and service recommendations.",
    href: "#project-mechane-ai",
    type: "Case Study",
  },
  {
    title: "Lowe’s Platform",
    summary:
      "Unified operations dashboard for orders, job tracking, and delivery visibility.",
    href: "#project-lowes-platform",
    type: "Case Study",
  },
  {
    title: "Pro Analytics",
    summary:
      "Business insights workspace that helps contractor teams monitor performance.",
    href: "#project-pro-analytics",
    type: "Case Study",
  },
  {
    title: "Design Systems",
    summary:
      "Component and interaction framework for faster product iteration across teams.",
    href: "#project-design-systems",
    type: "Case Study",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <header className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-5 sm:gap-6 sm:px-6 sm:py-6">
        <div className="text-center font-['Cocogoose'] text-xl font-normal tracking-[-0.08em] sm:text-2xl">Osita Nwankwo</div>
        <nav
          aria-label="Main"
          className="flex w-full max-w-fit flex-wrap items-center justify-center gap-2 rounded-3xl bg-[#141414] px-2 py-2 text-sm font-normal tracking-[-0.01em] sm:gap-3 sm:px-3 sm:text-base"
        >
          <a
            href="#home"
            className="inline-flex rounded-full border border-black/10 bg-white px-3 py-2 text-[#141414] no-underline sm:px-5"
          >
            Home
          </a>
          <a
            href="#projects"
            className="flex items-center gap-2 rounded-full px-3 py-2 text-[#C4C4C4] no-underline sm:px-4"
          >
            <span
              className="inline-flex h-[22px] min-w-[22px] items-center justify-center rounded-full bg-[#4a4a4a] px-1.5 text-xs font-medium text-white"
            >
              {PROJECTS.length}
            </span>
            Projects
          </a>
          <a
            href="#about"
            className="inline-flex rounded-full px-3 py-2 text-[#C4C4C4] no-underline sm:px-4"
          >
            About
          </a>
          <a
            href="#contact"
            className="inline-flex rounded-full px-3 py-2 text-[#C4C4C4] no-underline sm:px-4"
          >
            Contact
          </a>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-4 sm:px-6">
        <section id="home" className="py-16">
          <h1 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-6xl">
            Digital products. Built to scale. For SMEs.
          </h1>
          <p className="mt-4 max-w-2xl text-zinc-300">
            UX designer focused on AI agents, integrations, and scalable systems.
          </p>

          <div className="mt-8 flex gap-3">
            <a
              href="#projects"
              className="inline-flex items-center rounded-xl bg-white text-black px-4 py-2 text-sm font-medium"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-xl border border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-100 hover:bg-zinc-900"
            >
              Let’s Talk
            </a>
          </div>
        </section>

        <section id="projects" className="py-12 border-t border-zinc-800">
          <h2 className="text-xl font-semibold">Projects</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {PROJECTS.map((project) => (
              <article key={project.title} className="rounded-2xl border border-zinc-800 p-6 hover:bg-zinc-900/40 transition">
                <div className="text-sm text-zinc-400">{project.type}</div>
                <div className="mt-2 text-lg font-semibold">{project.title}</div>
                <p className="mt-2 text-zinc-300 text-sm">{project.summary}</p>
                <a href={project.href} className="mt-4 inline-flex text-sm text-white underline underline-offset-4">
                  View →
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="project-mechane-ai" className="py-12 border-t border-zinc-800">
          <h3 className="text-lg font-semibold">Mechane AI</h3>
          <p className="mt-3 text-zinc-300 text-sm">Case study summary available on this page for now.</p>
        </section>
        <section id="project-lowes-platform" className="py-12 border-t border-zinc-800">
          <h3 className="text-lg font-semibold">Lowe’s Platform</h3>
          <p className="mt-3 text-zinc-300 text-sm">Case study summary available on this page for now.</p>
        </section>
        <section id="project-pro-analytics" className="py-12 border-t border-zinc-800">
          <h3 className="text-lg font-semibold">Pro Analytics</h3>
          <p className="mt-3 text-zinc-300 text-sm">Case study summary available on this page for now.</p>
        </section>
        <section id="project-design-systems" className="py-12 border-t border-zinc-800">
          <h3 className="text-lg font-semibold">Design Systems</h3>
          <p className="mt-3 text-zinc-300 text-sm">Case study summary available on this page for now.</p>
        </section>

        <section id="about" className="py-12 border-t border-zinc-800">
          <h2 className="text-xl font-semibold">About</h2>
          <p className="mt-4 max-w-2xl text-zinc-300">
            I design decision-making systems for complex, high-stress user problems—automotive diagnostics is my latest example.
          </p>
        </section>

        <section id="contact" className="py-12 border-t border-zinc-800">
          <h2 className="text-xl font-semibold">Contact</h2>
          <p className="mt-4 text-zinc-300">
            Email: <a className="underline hover:text-white" href="mailto:nwankwo908@gmail.com">nwankwo908@gmail.com</a>
          </p>
        </section>

        <footer className="py-10 text-sm text-zinc-500">
          © {new Date().getFullYear()} Osita Nwankwo
        </footer>
      </main>
    </div>
  );
}
