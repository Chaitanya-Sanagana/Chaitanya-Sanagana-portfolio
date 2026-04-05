import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import { portfolioData } from "../../data/portfolio";

export default function Demos() {
  return (
    <section id="demos" className="section-fade py-28">
      <Container>
        <div className="space-y-12">
          <SectionHeading
            eyebrow="Demos"
            title="Live Demos"
            description="Interactive demos, prototypes, and deployment-ready AI experiences."
          />

          <div className="grid gap-6 md:grid-cols-2">
            {portfolioData.demos.map((demo) => (
              <div
                key={demo.title}
                className="glass-panel soft-shadow rounded-[1.75rem] p-6 transition duration-200 hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold text-white">
                  {demo.title}
                </h3>

                <p className="mt-4 text-base leading-7 text-white/70">
                  {demo.description}
                </p>

                <div className="mt-6">
                  {demo.link ? (
                    <Button href={demo.link} variant="secondary" external>
                      View Demo
                    </Button>
                  ) : (
                    <span className="text-sm text-white/50">
                      Available on request
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}