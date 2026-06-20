import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import Hero from "../components/sections/Hero";
import CTASection from "../components/sections/CTASection";
import SEO from "../components/SEO";
import SectionTitle from "../components/ui/SectionTitle";
import ServiceCard from "../components/ui/ServiceCard";
import { services } from "../data/services";

const process = [
  ["01", "Comprendre le besoin", "Analyse du projet, des contraintes techniques, des délais et des attentes du client."],
  ["02", "Préparer la solution", "Organisation des moyens, choix des fournitures, coordination technique et préparation de l'exécution."],
  ["03", "Exécuter", "Réalisation des travaux métalliques, techniques ou spécialisés avec suivi opérationnel."],
  ["04", "Suivre et améliorer", "Contrôle, ajustements, documentation et amélioration continue des pratiques."],
];

export default function Services() {
  return (
    <>
      <SEO
        title="Services | Kassib Group"
        description="Découvrez les services de KASSIB GROUP en construction métallique, soudure, fabrication technique, signalétique, travaux spécialisés, fourniture et négoce."
        path="/services"
      />
      <Hero
        compact
        eyebrow="Nos services"
        title="Services"
        text="Des prestations techniques orientées construction métallique, soudure, fabrication, signalétique, travaux spécialisés, fourniture et négoce."
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1500&h=800&fit=crop&auto=format"
      />

      <section className="section-padding">
        <div className="container">
          <SectionTitle
            eyebrow="Domaines de service"
            title="Des solutions adaptées aux besoins professionnels."
            text="Les activités actuelles sont distinguées des capacités en développement afin de rester clair et crédible."
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
          <SectionTitle eyebrow="Méthode" title="Une approche simple et organisée." align="center" />
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
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <SectionTitle
                eyebrow="Développement industriel"
                title="Renforcement progressif des capacités."
                text="KASSIB GROUP porte une ambition de développement destinée à améliorer progressivement ses capacités de fabrication et de transformation métallique."
              />
              <div className="feature-list">
                {[
                  "Capacités futures présentées comme un projet de développement",
                  "Amélioration progressive de la qualité et de la production",
                  "Élargissement prudent de la gamme de solutions techniques",
                ].map((item) => (
                  <span key={item}><CheckCircle2 size={18} /> {item}</span>
                ))}
              </div>
              <Link to="/contact" className="btn btn-dark-brand mt-4">
                Discuter d'un besoin <ArrowRight size={17} />
              </Link>
            </div>
            <div className="col-lg-6">
              <div className="image-frame">
                <img
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=900&h=700&fit=crop&auto=format"
                  alt="Professionnels analysant un projet technique"
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
