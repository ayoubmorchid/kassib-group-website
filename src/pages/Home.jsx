import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  HardHat,
  ShieldCheck,
  Target,
  TrendingUp,
  Wrench,
} from "lucide-react";
import { Link } from "react-router-dom";
import Hero from "../components/sections/Hero";
import CTASection from "../components/sections/CTASection";
import ServicesSection from "../components/sections/ServicesSection";
import SEO from "../components/SEO";
import SectionTitle from "../components/ui/SectionTitle";

const stats = [
  ["Oulad Teima", "Base locale"],
  ["Souss-Massa", "Ancrage régional"],
  ["Métal", "Construction & soudure"],
  ["Industrie", "Développement progressif"],
];

const developmentPoints = [
  "Renforcer les capacités de fabrication métallique.",
  "Structurer les moyens techniques et opérationnels.",
  "Avancer progressivement avec une exigence de qualité.",
];

const processSteps = [
  [ClipboardCheck, "Analyser le besoin", "Comprendre les contraintes techniques, le contexte du projet et les priorités du client."],
  [Wrench, "Préparer la solution", "Définir une réponse adaptée en construction métallique, soudure ou fabrication technique."],
  [HardHat, "Exécuter avec rigueur", "Organiser les moyens, suivre l'avancement et maintenir une attention constante à la qualité."],
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
        image="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1800&h=1100&fit=crop&auto=format"
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
                  src="/images/home-metal-construction.avif"
                  alt="Structure métallique en cours de construction"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p className="image-caption">Base locale, approche technique et proximité terrain.</p>
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

      <section className="section-padding home-process-section">
        <div className="container">
          <SectionTitle
            eyebrow="Méthode"
            title="Une approche simple, lisible et orientée terrain."
            text="Chaque besoin est abordé avec une logique claire : comprendre, préparer, exécuter. Cette méthode permet de garder un projet technique maîtrisé et compréhensible."
            align="center"
          />
          <div className="home-process-list">
            {processSteps.map(([Icon, title, text], index) => (
              <div className="home-process-item" key={title}>
                <span className="home-process-number">{String(index + 1).padStart(2, "0")}</span>
                <Icon size={24} />
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServicesSection />

      <section className="home-strengths-band">
        <div className="container">
          <div className="home-strengths-list">
            {[
              [Target, "Savoir-faire technique", "Construction métallique, soudure, assemblage et fabrications adaptées aux besoins professionnels."],
              [ShieldCheck, "Qualité et sécurité", "Une attention particulière à l'organisation, à la prévention des risques et à la responsabilité."],
              [TrendingUp, "Vision industrielle", "Un renforcement progressif des capacités pour répondre à des projets plus complexes."],
            ].map(([Icon, title, text]) => (
              <div className="home-strength-item" key={title}>
                <Icon size={24} />
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding home-development-section">
        <div className="container">
          <div className="row align-items-start g-4">
            <div className="col-lg-6">
            <SectionTitle
              eyebrow="Développement"
              title="Notre développement industriel."
              text="KASSIB GROUP porte un projet de développement destiné à renforcer progressivement ses capacités de fabrication et de transformation métallique, avec une approche prudente, réaliste et tournée vers la qualité."
            />
            </div>
            <div className="col-lg-6">
            <div className="home-development-list">
              {developmentPoints.map((point) => (
                <span key={point}>
                  <CheckCircle2 size={18} />
                  {point}
                </span>
              ))}
            </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
