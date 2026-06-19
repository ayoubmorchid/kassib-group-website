import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import Hero from "../components/sections/Hero";
import CTASection from "../components/sections/CTASection";
import SectionTitle from "../components/ui/SectionTitle";
import ServiceCard from "../components/ui/ServiceCard";
import { services } from "../data/services";

const process = [
  ["01", "Tender Review", "Read the public tender, quantities, specifications, deadlines, guarantees, and delivery constraints."],
  ["02", "Estimate & Planning", "Prepare prices, procurement needs, labor, equipment, site planning, and supplier coordination."],
  ["03", "Execution", "Manage works on site across civil works, finishing, sanitation, electricity, roads, or equipment delivery."],
  ["04", "Attachments & Billing", "Follow attachments, invoices, purchase orders, stock movements, payments, and supplier situations."],
];

export default function Services() {
  return (
    <>
      <Hero
        compact
        eyebrow="What We Do"
        title="Services"
        text="Integrated services for public works, building rehabilitation, road links, water and sanitation networks, municipal supplies, and tender administration."
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1500&h=800&fit=crop&auto=format"
      />

      <section className="section-padding">
        <div className="container">
          <SectionTitle
            eyebrow="Service Areas"
            title="Capabilities built for public works and local development."
            align="center"
          />
          <div className="row g-4 mt-2">
            {services.map((service, index) => (
              <div className="col-md-6 col-xl-4" key={service.title}>
                <ServiceCard service={service} featured={index === 0} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-soft">
        <div className="container">
          <SectionTitle eyebrow="How We Work" title="A clear engagement process." align="center" />
          <div className="process-grid mt-4">
            {process.map(([step, title, text]) => (
              <div className="process-card" key={step}>
                <strong>{step}</strong>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <SectionTitle
                eyebrow="The Kassib Difference"
                title="Reliable structure from tender file to site delivery."
                text="Our work is organized around practical delivery: clear quantities, supplier follow-up, stock control, attachments, invoices, and coordination between public requirements and field execution."
              />
              <div className="feature-list">
                {[
                  "Experience with price schedules and estimated quantity files",
                  "Coordination of suppliers, equipment, labor, and site needs",
                  "Follow-up of stock, purchase orders, invoices, and attachments",
                  "Delivery focused on public value and local community needs",
                ].map((item) => (
                  <span key={item}><CheckCircle2 size={18} /> {item}</span>
                ))}
              </div>
              <Link to="/contact" className="btn btn-dark-brand mt-4">
                Start a conversation <ArrowRight size={17} />
              </Link>
            </div>
            <div className="col-lg-6">
              <div className="image-frame">
                <img
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=900&h=700&fit=crop&auto=format"
                  alt="Engineers reviewing technical work"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
