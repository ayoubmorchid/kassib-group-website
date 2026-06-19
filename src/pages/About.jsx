import { Award, CheckCircle2, Eye, Gem, Handshake, Lightbulb, Rocket } from "lucide-react";
import Hero from "../components/sections/Hero";
import CTASection from "../components/sections/CTASection";
import SectionTitle from "../components/ui/SectionTitle";

const values = [
  ["01", "Execution", "We focus on practical site delivery, reliable coordination, and respect for project requirements."],
  ["02", "Transparency", "We keep tender files, estimates, invoices, attachments, suppliers, and stock follow-up organized."],
  ["03", "Responsiveness", "We adapt to the needs of public authorities, local communities, and operational deadlines."],
  ["04", "Public Value", "We support projects that improve facilities, mobility, water access, cleanliness, and local services."],
];

export default function About() {
  return (
    <>
      <Hero
        compact
        eyebrow="Who We Are"
        title="About Kassib Group"
        text="A professional company working in public works, construction, rehabilitation, infrastructure, equipment supply, and tender follow-up."
        image="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1500&h=800&fit=crop&auto=format"
      />

      <section className="section-padding">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <SectionTitle
                eyebrow="Our History"
                title="Built around field execution and public project discipline."
                text="Kassib Group's files show a company close to real operational needs: public tenders, rehabilitation works, road links, water infrastructure, municipal equipment, supplier situations, stock follow-up, estimates, attachments, and invoices."
              />
              <p className="lead-copy">
                Based in Morocco with strong activity around Taroudant and Souss-Massa, Kassib Group supports public and local development projects that require practical coordination and dependable execution.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="image-frame">
                <img
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900&h=700&fit=crop&auto=format"
                  alt="Business partners shaking hands"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-soft">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="mission-card dark">
                <Rocket size={30} />
                <h3>Mission</h3>
                <p>
                  To accompany clients in the successful delivery of ambitious
                  public works and community projects by combining site execution,
                  tender follow-up, supplier coordination, and a constant
                  commitment to reliable delivery.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mission-card red">
                <Eye size={30} />
                <h3>Vision</h3>
                <p>
                  To become a trusted reference for future-ready development,
                  recognized for quality public works, disciplined documentation,
                  local impact, and responsible service to communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <SectionTitle eyebrow="Values" title="The principles behind our work." align="center" />
          <div className="row g-4 mt-2">
            {values.map(([number, title, text]) => (
              <div className="col-md-6" key={title}>
                <div className="value-card">
                  <strong>{number}</strong>
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

      <section className="section-padding bg-soft">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5">
              <SectionTitle
                eyebrow="Why Choose Us"
                title="A focused partner for public works and local authority projects."
                text="Kassib Group brings practical organization to projects where deadlines, documentation, procurement, and site execution must move together."
              />
            </div>
            <div className="col-lg-7">
              <div className="row g-3">
                {[
                  [Lightbulb, "Practical solutions"],
                  [Award, "Professional execution"],
                  [Handshake, "Public client focus"],
                  [Gem, "Community value"],
                ].map(([Icon, label]) => (
                  <div className="col-sm-6" key={label}>
                    <div className="why-card">
                      <Icon size={24} />
                      <span>{label}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="feature-list mt-4">
                <span><CheckCircle2 size={18} /> Public tender and administrative follow-up</span>
                <span><CheckCircle2 size={18} /> Civil works, rehabilitation, and equipment supply</span>
                <span><CheckCircle2 size={18} /> Field coordination with suppliers, stock, and invoices</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
