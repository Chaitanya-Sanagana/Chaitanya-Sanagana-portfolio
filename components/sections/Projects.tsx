import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import Tag from "../ui/Tag";
import { portfolioData } from "../../data/portfolio";

export default function Projects() {
  return (
    <section className="section-fade py-24">
      <Container>
        <div className="space-y-12">
          <SectionHeading
            eyebrow="Projects"
            title="Selected Projects"
            description="A selection of AI, retrieval, and compliance-oriented systems that extend the core ideas behind my portfolio work."
          />

          <div className="grid gap-6 md:grid-cols-2">
            {portfolioData.projects.map((project) => (
              <div
                key={project.title}
                className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition duration-200 hover:-translate-y-1 hover:bg-white/[0.07]"
              >
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>

                <p className="mt-4 text-base leading-7 text-white/70">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <Tag key={tag} label={tag} />
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-4">
                  <Button href={project.github} variant="secondary" external>
                    GitHub
                  </Button>

                  {project.demo ? (
                    <Button href={project.demo} variant="ghost" external>
                      Demo
                    </Button>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}