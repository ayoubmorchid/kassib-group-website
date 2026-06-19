import {
  Award,
  CheckCircle2,
  Eye,
  Gem,
  Handshake,
  Lightbulb,
  Rocket,
} from "lucide-react";
import Hero from "../components/sections/Hero";
import CTASection from "../components/sections/CTASection";
import SEO from "../components/SEO";
import SectionTitle from "../components/ui/SectionTitle";

const indicators = [
  ["01", "Public works focus"],
  ["02", "Construction & rehabilitation"],
  ["03", "Tender and procurement follow-up"],
  ["04", "Site, stock, and logistics coordination"],
];

const capabilities = [
  [Lightbulb, "Tender Management", "Preparation, estimates, administrative follow-up, supplier situations, and project documentation."],
  [Award, "Technical Execution", "Civil works, rehabilitation, finishing, infrastructure works, and coordinated site supervision."],
  [Handshake, "Procurement Control", "Purchasing follow-up, supplier coordination, equipment needs, invoices, and purchase orders."],
  [Gem, "Operational Logistics", "Stock tracking, material movement, equipment availability, and support for active construction sites."],
];

const workflow = [
  ["Review", "Tender requirements, quantities, technical files, deadlines, and administrative obligations."],
  ["Prepare", "Planning, procurement needs, supplier coordination, estimates, and execution resources."],
  ["Execute", "Construction site coordination, rehabilitation works, logistics, supervision, and field reporting."],
  ["Follow Up", "Attachments, invoices, stock movements, supplier situations, and project documentation."],
];

export default function About() {
  return (
    <>
      <SEO
        title="About Kassib Group"
        description="Learn about Kassib Group, a Morocco-based company focused on public works, construction, rehabilitation, infrastructure, equipment supply, and tender follow-up."
        path="/about"
      />
      <Hero
        compact
        className="about-compact-hero"
        eyebrow="Who We Are"
        title="About Kassib Group"
        text="A structured construction and public works company supporting projects through technical execution, tender management, procurement, logistics, and site coordination."
        image="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1500&h=800&fit=crop&auto=format"
      />

      <section className="section-padding about-overview">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-lg-7">
              <SectionTitle
                eyebrow="Company Profile"
                title="Built for practical delivery, not just paperwork."
                text="Kassib Group works at the intersection of public works, construction, rehabilitation, municipal equipment, and tender follow-up. The company is organized around real project needs: clear documentation, controlled procurement, field supervision, stock coordination, and disciplined execution."
              />
              <p className="lead-copy">
                Based in Morocco with activity around Taroudant and Souss-Massa,
                Kassib Group supports public and local development projects that
                require technical reliability, administrative clarity, and
                operational follow-through.
              </p>
            </div>

            <div className="col-lg-5">
              <div className="about-indicators">
                {indicators.map(([number, label]) => (
                  <div className="about-indicator" key={label}>
                    <strong>{number}</strong>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-soft">
        <div className="container">
          <div className="section-heading-row">
            <SectionTitle
              eyebrow="Operational Strength"
              title="A company structured around execution."
              text="The work is supported by practical capabilities that help projects move from tender file to site delivery."
            />
          </div>

          <div className="row g-4">
            {capabilities.map(([Icon, title, text]) => (
              <div className="col-md-6" key={title}>
                <div className="capability-card">
                  <Icon size={25} />
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-mission-band">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="mission-card dark">
                <Rocket size={30} />
                <h3>Mission</h3>
                <p>
                  To help public and community projects move forward through
                  organized tender follow-up, technical execution, supplier
                  coordination, logistics, and reliable site delivery.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mission-card red">
                <Eye size={30} />
                <h3>Vision</h3>
                <p>
                  To become a trusted partner for public works, construction,
                  rehabilitation, and local infrastructure projects that require
                  discipline, clarity, and operational responsibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-lg-4">
              <SectionTitle
                eyebrow="How We Work"
                title="Clear steps from tender to delivery."
                text="Kassib Group keeps projects readable, coordinated, and ready for execution."
              />
            </div>

            <div className="col-lg-8">
              <div className="about-workflow">
                {workflow.map(([title, text], index) => (
                  <div className="workflow-item" key={title}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <h3>{title}</h3>
                      <p>{text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="feature-list mt-4">
                <span><CheckCircle2 size={18} /> Public tender, administrative, and operational follow-up</span>
                <span><CheckCircle2 size={18} /> Civil works, rehabilitation, industrial, and metal construction</span>
                <span><CheckCircle2 size={18} /> Field coordination with purchasing, suppliers, stock, and invoices</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
