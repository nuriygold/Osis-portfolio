import React from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Expertise from "./components/Expertise";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

const FONT_STACK =
  '"Labil Grotesk", "Plus Jakarta Sans", system-ui, sans-serif';

const PROJECTS = [
  {
    tag: "New Product | 2026",
    description:
      "I design decision-making systems for complex, high-stress user problems; automotive diagnostics is my latest example.",
    imageAlt: "Mechane AI app - If shops are expensive you're affordable",
  },
  {
    tag: "New Product | 2025",
    description:
      "One smart platform for orders, jobs, and deliveries. See how I built it.",
    imageAlt: "Lowes platform with charts and data",
  },
  {
    tag: "Redesign | 2024",
    description:
      "See how one smart dashboard makes life easier for pro contractors.",
    imageAlt: "Dashboard with data points and graphs",
  },
  {
    tag: "New Product | 2024",
    description:
      "Lowes Pro Business Analytics. Smarter insights for pro contractors.",
    imageAlt: "Business analytics on laptop and phone",
  },
];

const EXPERTISE_ITEMS = [
  {
    title: "UI / UX Design",
    description:
      "I use research driven insights and a modern design toolkit including Figma, Sketch, Adobe XD, and Creative Cloud to take ideas from concept to launch, combining strong UX, interface design, and visual depth.",
  },
  {
    title: "AI Integration Specialist",
    description:
      "I help companies automate business operations by designing AI-powered workflows and agents that reduce manual work, streamline processes, and improve speed, accuracy, and scalability across teams.",
  },
  {
    title: "AI Agent Architect",
    description:
      "Design of AI agents and intelligent workflows that automate manual processes and increase operational efficiency. Focused on building scalable systems that reduce overhead, improve visibility, and enable teams to operate faster and more effectively.",
  },
  {
    title: "AI Solutions Architect",
    description:
      "I design AI platforms and infrastructure that enable businesses to deploy intelligent systems, automate operations, and scale efficiently with reliable, production ready AI.",
  },
];

const NAV_LINKS = [
  { label: "Home", active: true, href: "/" },
  { label: "Projects", active: false, href: "#projects" },
  { label: "About", active: false, href: "#about" },
  { label: "Contact", active: false, href: "#contact" },
];

const EMAIL = "nwankwo908@gmail.com";

/**
 * Home - Dark Mode - Desktop
 * Composes Hero, Projects, Expertise, Testimonials, and Contact sections.
 */
export default function WebPortfolio() {
  return (
    <div
      className="min-h-screen bg-[#000000] text-[#FFFFFF] antialiased"
      style={{ fontFamily: FONT_STACK }}
    >
      <Header navLinks={NAV_LINKS} />
      <main>
        <Hero
          headline="Digital products. Built to Scale. For SMEs."
          email={EMAIL}
          introText="Hi, I'm Osita Nwankwo, a UX designer deeply immersed in AI and emerging technologies, with a strong focus on AI agents, integrations, and scalable solutions."
          scrollToId="#projects"
        />
        <Projects
          title="Projects"
          description="AI-driven UX and scalable design systems built to help SMEs move faster, stay competitive, and grow efficiently."
          moreHref="#more-projects"
          projects={PROJECTS}
        />
        <Expertise
          title="Expertise"
          items={EXPERTISE_ITEMS}
          trailingHeadline="Intelligent Scalable Experi..."
        />
        <Testimonials
          title="Testimonials"
          quote="He thinks things through properly, this is proper solution design, not just rush in and light up some features that normally ends in a crappy app"
          attribution="Alex Powell, Principal Design Director at Microsoft"
        />
        <Contact email={EMAIL} />
      </main>
      <Footer />
    </div>
  );
}

function Header({ navLinks }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header
      className="sticky top-0 z-50 bg-[#000000] flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5 lg:px-12"
      style={{ boxShadow: "0 12px 20px 0 rgba(0, 0, 0, 0.04)" }}
    >
      <a
        href="/"
        className="text-center font-['Cocogoose'] font-normal text-2xl text-white"
      >
        Osita Nwankwo
      </a>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main">
        {navLinks.map(({ label, active, href }) => (
          <a
            key={label}
            href={href}
            className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors md:px-4 md:py-2 md:text-sm lg:px-5 lg:py-2.5 lg:text-base ${
              active ? "bg-white text-[#141414]" : "text-white hover:bg-[#fef7ff14]"
            }`}
          >
            {label}
          </a>
        ))}
      </nav>
      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 text-white hover:bg-[#fef7ff14] rounded-full transition-colors"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
        aria-expanded={isMobileMenuOpen}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isMobileMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav
          className="absolute top-full left-0 right-0 bg-[#000000] border-t border-white/10 flex flex-col gap-2 p-4 md:hidden"
          aria-label="Main"
        >
          {navLinks.map(({ label, active, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`rounded-full px-4 py-3 text-base font-medium transition-colors ${
                active ? "bg-white text-[#141414]" : "text-white hover:bg-[#fef7ff14]"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-6 sm:px-6 md:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-xs text-[#C4C4C4] sm:text-sm">2023 © Osita Nwankwo</p>
        <div className="flex gap-4 text-xs text-[#C4C4C4] sm:gap-6 sm:text-sm">
          <a
            href="https://dribbble.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Dribble
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
