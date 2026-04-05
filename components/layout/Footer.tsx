import Container from "../ui/Container";
import { portfolioData } from "../../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-base font-semibold text-white">
            {portfolioData.name} — {portfolioData.title}
          </p>
          <p className="mt-2 max-w-2xl text-sm leading-7 text-white/55">
            {portfolioData.footer.text}
          </p>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-white/65">
          <a
            href={portfolioData.contact.github}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            GitHub
          </a>
          <a
            href={portfolioData.contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href={portfolioData.resume.filePath}
            className="transition hover:text-white"
          >
            Resume
          </a>
          <a
            href={`mailto:${portfolioData.contact.email}`}
            className="transition hover:text-white"
          >
            Email
          </a>
        </div>
      </Container>
    </footer>
  );
}