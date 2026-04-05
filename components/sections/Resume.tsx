import Container from "../ui/Container";
import Button from "../ui/Button";
import SectionHeading from "../ui/SectionHeading";
import { portfolioData } from "../../data/portfolio";

export default function Resume() {
  return (
    <section id="resume" className="py-28">
      <Container>
        <div className="glass-panel soft-shadow rounded-[2rem] p-8 text-center md:p-14">
          <SectionHeading
            eyebrow="Resume"
            title="Download My Resume"
            description={portfolioData.resume.text}
            align="center"
          />

          <div className="mt-8 flex justify-center">
            <Button href={portfolioData.resume.filePath} variant="primary">
              {portfolioData.resume.buttonLabel}
            </Button>
          </div>

          <p className="mt-4 text-sm text-white/50">
            Resume download flow is ready. Tracking and watermarking can be added next.
          </p>
        </div>
      </Container>
    </section>
  );
}