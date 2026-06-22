import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { services } from "../../data/services";
import SectionTitle from "../ui/SectionTitle";

export default function ServicesSection() {
  return (
    <section className="section-padding home-services-section">
      <div className="container">
        <div className="section-heading-row">
          <SectionTitle
            eyebrow="Nos métiers"
            title="Des services orientés construction métallique et travaux techniques."
          />
          <Link to="/services" className="text-link">
            Tous les services <ArrowRight size={16} />
          </Link>
        </div>
        <div className="home-services-list">
          {services.slice(0, 6).map((service) => (
            <div className="home-service-line" key={service.title}>
              <service.icon size={24} aria-hidden="true" />
              <div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
