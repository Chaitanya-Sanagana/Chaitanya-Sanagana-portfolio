import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { portfolioData } from "../../data/portfolio";

export default function Contact() {
  // Define the structure once
  const contactLinks = [
    { label: "Email", value: portfolioData.contact.email, href: `mailto:${portfolioData.contact.email}`, sub: "Send an email" },
    { label: "GitHub", value: "View Profile", href: portfolioData.contact.github, sub: "Explore repositories" },
    { label: "LinkedIn", value: "Connect", href: portfolioData.contact.linkedin, sub: "Professional profile" },
    { label: "Hugging Face", value: "Explore Demos", href: portfolioData.contact.huggingface, sub: "Models and spaces" },
  ];

  return (
    <section id="contact" className="section-fade py-24">
      <Container>
        <div className="space-y-10">
          <SectionHeading
            eyebrow="Contact"
            title={portfolioData.contactSection.heading}
            description={portfolioData.contactSection.text}
            align="center"
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label !== "Email" ? "_blank" : undefined}
                rel="noreferrer"
                className="flex min-h-[160px] flex-col justify-between rounded-[1.5rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition duration-200 hover:-translate-y-1 hover:bg-white/[0.07]"
              >
                <div>
                  <p className="text-sm text-white/50">{link.label}</p>
                  <p className="mt-3 break-all text-base font-medium leading-7 text-white md:text-lg">
                    {link.value}
                  </p>
                </div>
                <span className="mt-6 text-sm text-white/40">{link.sub}</span>
              </a>
            ))}
          </div>

          <p className="mx-auto max-w-2xl text-center text-base leading-8 text-white/60">
            {portfolioData.contactSection.closing}
          </p>
        </div>
      </Container>
    </section>
  );
}