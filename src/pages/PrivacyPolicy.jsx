import Hero from "../components/sections/Hero";
import SEO from "../components/SEO";
import SectionTitle from "../components/ui/SectionTitle";
import { company } from "../data/company";

const sections = [
  {
    title: "Introduction",
    text: "This Privacy Policy explains how Kassib Group collects, uses, stores, and protects information when visitors use this website or contact us about public works, construction, rehabilitation, infrastructure, equipment, and tender management services.",
  },
  {
    title: "Information We Collect",
    text: "We may collect contact details such as name, email address, subject, and message content when you submit a contact request. We may also collect limited technical information such as browser type, device information, pages visited, and basic analytics data.",
  },
  {
    title: "How We Use Information",
    text: "We use information to respond to enquiries, manage business communications, improve website performance, maintain security, and understand how visitors interact with our content. We do not sell personal information.",
  },
  {
    title: "Data Protection",
    text: "We apply reasonable technical and organizational measures to protect personal information against unauthorized access, misuse, alteration, or loss. Where applicable, visitors may request access, correction, deletion, or restriction of their personal data.",
  },
  {
    title: "Cookies",
    text: "This website may use cookies or similar technologies to support basic functionality, measure performance, and improve the browsing experience. Visitors can manage cookie preferences through their browser settings.",
  },
  {
    title: "Third-Party Services",
    text: "The website may include third-party services such as maps, external media, hosting, analytics, or embedded content. These providers may process data according to their own privacy policies and technical requirements.",
  },
  {
    title: "Contact Information",
    text: `For privacy-related questions or requests, contact Kassib Group at ${company.email} or by phone at ${company.phone}.`,
  },
];

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy | Kassib Group"
        description="Read the Kassib Group Privacy Policy, including how information is collected, used, protected, and managed when using this website."
        path="/privacy-policy"
      />
      <Hero
        compact
        eyebrow="Legal"
        title="Privacy Policy"
        text="How Kassib Group handles information, privacy, cookies, third-party services, and data protection."
        image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1500&h=800&fit=crop&auto=format"
      />

      <section className="section-padding">
        <div className="container">
          <div className="legal-content">
            <SectionTitle
              eyebrow="Privacy"
              title="Information handling and data protection."
              text="This page is provided for website visitors, clients, suppliers, and partners who interact with Kassib Group online."
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
