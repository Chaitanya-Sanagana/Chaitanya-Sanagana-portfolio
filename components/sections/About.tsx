import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { portfolioData } from "../../data/portfolio";

export default function About() {
  return (
    <section id="about" className="section-fade py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="About"
            title={portfolioData.about.heading}
            description="A strong mix of GenAI engineering, backend development, document intelligence, and regulated-domain experience."
          />

          <div className="space-y-6">
            {portfolioData.about.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-base leading-8 text-white/75 md:text-lg"
              >
                {paragraph}
              </p>
            ))}

            <div className="grid gap-4 pt-4 md:grid-cols-2">
              {portfolioData.about.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition duration-200 hover:bg-white/[0.07]"
                >
                  <p className="text-sm leading-7 text-white/80">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}