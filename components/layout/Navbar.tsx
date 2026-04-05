import Container from "../ui/Container";
import Button from "../ui/Button";
import { portfolioData } from "../../data/portfolio";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Demos", href: "#demos" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-2xl">
      <Container className="flex h-20 items-center justify-between gap-4">
        <a href="#" className="flex min-w-0 items-center gap-3">
          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
            C
          </span>
          <span className="truncate text-lg font-semibold tracking-tight text-white">
            {portfolioData.name}
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-white/65 transition duration-200 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden sm:block">
          <Button href={portfolioData.resume.filePath} variant="primary">
            {portfolioData.resume.buttonLabel}
          </Button>
        </div>
      </Container>

      <div className="border-t border-white/8 lg:hidden">
        <Container className="flex flex-wrap gap-x-5 gap-y-3 py-3">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-white/60 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </Container>
      </div>
    </header>
  );
}