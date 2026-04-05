import Container from "../ui/Container";
import Button from "../ui/Button";
import Tag from "../ui/Tag";
import { portfolioData } from "../../data/portfolio";

export default function Hero() {
  return (
    <section className="section-fade relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="grid-lines absolute inset-0" />
      </div>

      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="relative z-10 flex flex-col items-start">
            <div className="mb-6 flex flex-wrap gap-3">
              {portfolioData.heroBadges.map((badge) => (
                <Tag key={badge} label={badge} />
              ))}
            </div>

            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl xl:text-7xl">
              {portfolioData.tagline}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70 md:text-xl">
              {portfolioData.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="#projects" variant="primary">
                View Projects
              </Button>
              <Button href={portfolioData.resume.filePath} variant="secondary">
                Download Resume
              </Button>
              <Button
                href={portfolioData.contact.github}
                variant="ghost"
                external
              >
                GitHub
              </Button>
              <Button
                href={portfolioData.contact.linkedin}
                variant="ghost"
                external
              >
                LinkedIn
              </Button>
            </div>

            <p className="mt-6 text-sm text-white/55">{portfolioData.status}</p>
          </div>

          <div className="relative">
            <div className="absolute -left-6 -top-8 h-40 w-40 rounded-full bg-blue-500/15 blur-3xl" />
            <div className="absolute -bottom-10 right-4 h-40 w-40 rounded-full bg-violet-500/15 blur-3xl" />

            <div className="glass-panel soft-shadow relative rounded-[2rem] p-8 md:p-10">
              <p className="text-sm uppercase tracking-[0.2em] text-white/45">
                Professional Focus
              </p>

              <h2 className="mt-4 text-2xl font-semibold text-white md:text-3xl">
                {portfolioData.title}
              </h2>

              <p className="mt-3 max-w-xl text-base leading-7 text-white/65">
                Focused on practical AI systems that combine retrieval quality,
                domain understanding, and production-oriented backend design.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4 backdrop-blur-sm">
                  <p className="text-sm text-white/45">Experience</p>
                  <p className="mt-2 text-lg font-medium text-white">3+ Years</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-4 backdrop-blur-sm">
                  <p className="text-sm text-white/45">Domain</p>
                  <p className="mt-2 text-lg font-medium text-white">
                    Regulated Systems
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-4 backdrop-blur-sm">
                  <p className="text-sm text-white/45">Core Strength</p>
                  <p className="mt-2 text-lg font-medium text-white">RAG + LLMs</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-4 backdrop-blur-sm">
                  <p className="text-sm text-white/45">Build Style</p>
                  <p className="mt-2 text-lg font-medium text-white">
                    Backend + AI
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Tag label="Document Intelligence" />
                <Tag label="FastAPI" />
                <Tag label="Pharma AI" />
                <Tag label="Compliance Workflows" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}