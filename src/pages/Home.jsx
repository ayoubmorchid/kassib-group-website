import { ArrowRight, CheckCircle2, ShieldCheck, Target, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import Hero from "../components/sections/Hero";
import CTASection from "../components/sections/CTASection";
import ServicesSection from "../components/sections/ServicesSection";
import SEO from "../components/SEO";
import SectionTitle from "../components/ui/SectionTitle";

const stats = [
  ["OT", "Basée à Oulad Teima"],
  ["SM", "Ancrage Souss-Massa"],
  ["CM", "Construction métallique"],
  ["DEV", "Développement industriel"],
];

export default function Home() {
  return (
    <>
      <SEO
        title="Kassib Group | Construction métallique & fabrication technique"
        description="KASSIB GROUP accompagne les professionnels dans leurs projets de construction métallique, soudure, fabrication technique et travaux spécialisés à Oulad Teima et dans la région Souss-Massa."
      />
      <Hero
        eyebrow="Construction métallique & fabrication technique"
        title="Des solutions métalliques conçues pour durer"
        text="KASSIB GROUP accompagne les professionnels dans leurs projets de construction métallique, de soudure, de fabrication technique et de travaux spécialisés à Oulad Teima et dans la région Souss-Massa."
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1800&h=1100&fit=crop&auto=format"
        primaryLabel="Découvrir nos services"
        primaryTo="/services"
        secondaryLabel="Nous contacter"
        secondaryTo="/contact"
      />

      <section className="stats-strip">
        <div className="container">
          <div className="row g-4">
            {stats.map(([value, label]) => (
              <div className="col-6 col-lg-3" key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <div className="image-frame">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&h=700&fit=crop&auto=format"
                  alt="Réunion professionnelle autour d'un projet technique"
                  loading="lazy"
                  decoding="async"
                />
                <div className="floating-badge">
                  <strong>Local</strong>
                  <span>et technique</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <SectionTitle
                eyebrow="Présentation"
                title="Une entreprise marocaine orientée solutions métalliques."
                text="Basée à Oulad Teima, KASSIB GROUP développe des solutions dans les domaines de la construction métallique, de la soudure, de la fabrication technique et des travaux spécialisés."
              />
              <div className="feature-list">
                {[
                  "Qualité d'exécution et professionnalisme",
                  "Réactivité et proximité avec les clients",
                  "Savoir-faire technique et amélioration continue",
                ].map((item) => (
                  <span key={item}><CheckCircle2 size={18} /> {item}</span>
                ))}
              </div>
              <Link to="/about" className="text-link">
                Découvrir l'entreprise <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ServicesSection />

      <section className="dark-band">
        <div className="container">
          <div className="row g-4">
            {[
              [Target, "Savoir-faire technique", "Construction métallique, soudure, assemblage et fabrications adaptées aux besoins professionnels."],
              [ShieldCheck, "Qualité et sécurité", "Une attention particulière à l'organisation, à la prévention des risques et à la responsabilité."],
              [TrendingUp, "Vision industrielle", "Un renforcement progressif des capacités pour répondre à des projets plus complexes."],
            ].map(([Icon, title, text]) => (
              <div className="col-md-4" key={title}>
                <div className="dark-feature">
                  <Icon size={26} />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <SectionTitle
            eyebrow="Développement"
            title="Notre développement industriel."
            text="KASSIB GROUP porte un projet de développement destiné à renforcer progressivement ses capacités de fabrication et de transformation métallique, avec une approche prudente, réaliste et tournée vers la qualité."
            align="center"
          />
        </div>
      </section>

      <CTASection />
    </>
  );
}
