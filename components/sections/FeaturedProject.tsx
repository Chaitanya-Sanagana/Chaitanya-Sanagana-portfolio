import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import Tag from "../ui/Tag";
import { portfolioData } from "../../data/portfolio";

export default function FeaturedProject() {
  const project = portfolioData.featuredProject;

  return (
    <section id="projects" className="section-fade py-24">
      <Container>
        <div className="space-y-10">
          <SectionHeading
            eyebrow="Featured Project"
            title={project.title}
            description={project.subtitle}
          />

          <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="glass-panel soft-shadow rounded-[2rem] p-8 md:p-10">
              <p className="text-lg leading-8 text-white/75">{project.summary}</p>

              <div className="mt-8 grid gap-6">
                <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-6">
                  <h3 className="text-lg font-semibold text-white">Problem</h3>
                  <p className="mt-3 text-base leading-8 text-white/70">
                    {project.problem}
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-6">
                  <h3 className="text-lg font-semibold text-white">Solution</h3>
                  <p className="mt-3 text-base leading-8 text-white/70">
                    {project.solution}
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.techStack.map((tech) => (
                  <Tag key={tech} label={tech} />
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button href={project.github} variant="primary" external>
                  View GitHub
                </Button>
                <Button href={project.demo} variant="secondary" external>
                  View Demo
                </Button>
              </div>
            </div>

            <div className="grid gap-4">
              {project.features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-[1.6rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition duration-200 hover:bg-white/[0.07]"
                >
                  <h3 className="text-lg font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/70">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}