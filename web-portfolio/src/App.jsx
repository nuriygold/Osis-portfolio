export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <header className="mx-auto max-w-6xl px-6 py-6 flex items-center justify-between">
        <div className="font-semibold tracking-tight">Osita Nwankwo</div>
        <nav className="flex gap-6 text-sm text-zinc-300">
          <a className="hover:text-white" href="#home">Home</a>
          <a className="hover:text-white" href="#projects">Projects</a>
          <a className="hover:text-white" href="#about">About</a>
          <a className="hover:text-white" href="#contact">Contact</a>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-6">
        <section id="home" className="py-16">
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            Digital products. Built to scale.
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
            {["Mechana AI", "Lowe’s Platform", "Pro Analytics", "Design Systems"].map((title) => (
              <div key={title} className="rounded-2xl border border-zinc-800 p-6 hover:bg-zinc-900/40 transition">
                <div className="text-sm text-zinc-400">Case Study</div>
                <div className="mt-2 text-lg font-semibold">{title}</div>
                <div className="mt-2 text-zinc-300 text-sm">
                  Short description goes here. (We’ll plug your real copy next.)
                </div>
                <div className="mt-4 text-sm text-white">View →</div>
              </div>
            ))}
          </div>
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