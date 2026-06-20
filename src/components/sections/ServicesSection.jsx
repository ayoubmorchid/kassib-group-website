import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { services } from "../../data/services";
import SectionTitle from "../ui/SectionTitle";
import ServiceCard from "../ui/ServiceCard";

export default function ServicesSection() {
  return (
    <section className="section-padding bg-soft">
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
        <div className="row g-4">
          {services.slice(0, 6).map((service, index) => (
            <div className="col-md-6 col-xl-4" key={service.title}>
              <ServiceCard service={service} featured={index === 0} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
