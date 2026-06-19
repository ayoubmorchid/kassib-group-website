import Hero from "../components/sections/Hero";
import SEO from "../components/SEO";
import SectionTitle from "../components/ui/SectionTitle";
import { company } from "../data/company";

const sections = [
  {
    title: "Acceptance of Terms",
    text: "By accessing or using this website, you agree to these Terms of Service. If you do not agree with these terms, you should discontinue use of the website.",
  },
  {
    title: "Use of Website",
    text: "This website is provided for general information about Kassib Group, its services, projects, news, and contact channels. Visitors agree not to misuse the website, interfere with its operation, or attempt unauthorized access.",
  },
  {
    title: "Intellectual Property",
    text: "Website content, text, images, layout, brand elements, and related materials are owned by or licensed to Kassib Group unless otherwise indicated. Content may not be copied, reproduced, or distributed without permission.",
  },
  {
    title: "Limitation of Liability",
    text: "The website is provided on an informational basis. Kassib Group makes reasonable efforts to keep information accurate, but does not guarantee completeness or uninterrupted availability and is not liable for indirect losses arising from website use.",
  },
  {
    title: "External Links",
    text: "The website may contain links or embedded services from third parties. Kassib Group is not responsible for the content, availability, privacy practices, or terms of external websites and services.",
  },
  {
    title: "Governing Law",
    text: "These terms are governed by applicable laws in Morocco, unless another mandatory legal framework applies. Any dispute should be handled through the competent authorities or courts.",
  },
  {
    title: "Contact Information",
    text: `For questions about these Terms of Service, contact Kassib Group at ${company.email} or by phone at ${company.phone}.`,
  },
];

export default function TermsOfService() {
  return (
    <>
      <SEO
        title="Terms of Service | Kassib Group"
        description="Review the Kassib Group Terms of Service covering website use, intellectual property, external links, liability, and contact information."
        path="/terms-of-service"
      />
      <Hero
        compact
        eyebrow="Legal"
        title="Terms of Service"
        text="The terms that apply when accessing and using the Kassib Group website."
        image="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1500&h=800&fit=crop&auto=format"
      />

      <section className="section-padding">
        <div className="container">
          <div className="legal-content">
            <SectionTitle
              eyebrow="Terms"
              title="Website access and usage terms."
              text="These terms help define responsible use of this website and the information provided by Kassib Group."
            />

            <div className="legal-sections">
              {sections.map((section) => (
                <article className="legal-section" key={section.title}>
                  <h2>{section.title}</h2>
                  <p>{section.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
