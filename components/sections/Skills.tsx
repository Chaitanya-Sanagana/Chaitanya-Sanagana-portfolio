import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Tag from "../ui/Tag";
import { portfolioData } from "../../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <Container>
        <div className="space-y-12">
          <SectionHeading
            eyebrow="Skills"
            title="Skills & Tech Stack"
            description="A focused stack across Generative AI, retrieval systems, backend engineering, and regulated-domain software."
          />

          <div className="grid gap-6 md:grid-cols-2">
            {portfolioData.skills.map((group) => (
              <div
                key={group.title}
                className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-xl font-semibold text-white">
                  {group.title}
                </h3>

                <div className="mt-5 flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <Tag key={item} label={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}