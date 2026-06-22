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
import { company } from "../data/company";

const indicators = [
  ["01", "Construction métallique"],
  ["02", "Soudure et assemblage"],
  ["03", "Fabrication technique"],
  ["04", "Travaux spécialisés"],
];

const capabilities = [
  [Lightbulb, "Construction métallique", "Ouvrages, structures, assemblages et réalisations métalliques adaptées aux besoins des professionnels."],
  [Award, "Soudure & exécution", "Travaux de soudure, montage, préparation de pièces et interventions techniques sur mesure."],
  [Handshake, "Services & fourniture", "Accompagnement technique, fourniture, négoce et solutions complémentaires selon les besoins du projet."],
  [Gem, "Signalétique", "Fabrication de panneaux publicitaires, panneaux de signalisation routière et supports spécialisés."],
];

const development = [
  "Découpage",
  "Pliage",
  "Roulage",
  "Usinage",
  "Assemblage / soudure",
  "Produit fini",
];

const values = [
  "Qualité",
  "Réactivité",
  "Professionnalisme",
  "Esprit d'équipe",
  "Intégrité",
  "Sécurité",
  "Responsabilité",
  "Amélioration continue",
];

export default function About() {
  return (
    <>
      <SEO
        title="À propos | KASSIB GROUP"
        description="Découvrez KASSIB GROUP, entreprise basée à Oulad Teima spécialisée dans la construction métallique, la soudure, la fabrication technique et les travaux spécialisés."
        path="/about"
      />
      <Hero
        compact
        eyebrow="À propos"
        title="À propos"
        text="Entreprise basée à Oulad Teima, spécialisée dans la construction métallique, la soudure et la fabrication technique."
        image="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1500&h=800&fit=crop&auto=format"
      />

      <section className="section-padding about-overview">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-lg-7">
              <SectionTitle
                eyebrow="Présentation"
                title="Une entreprise technique ancrée dans la région Souss-Massa."
                text={`Basée à ${company.location}, KASSIB GROUP accompagne les professionnels dans leurs besoins métalliques, techniques et industriels. L'entreprise intervient dans la construction métallique, la soudure, les travaux spécialisés, la signalétique, la fourniture, le négoce et les services techniques.`}
              />
              <p className="lead-copy">
                Son approche repose sur la qualité d'exécution, la réactivité,
                la proximité avec les clients et le développement progressif de
                ses capacités techniques.
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
              eyebrow="Notre savoir-faire"
              title="Des compétences orientées métal, technique et exécution."
              text="Les activités actuelles confirmées sont présentées comme des domaines d'intervention, sans créer de références ou de projets non vérifiés."
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
                  Fournir des solutions fiables, adaptées aux besoins des
                  professionnels et exécutées avec engagement, organisation et
                  professionnalisme.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mission-card red">
                <Eye size={30} />
                <h3>Vision</h3>
                <p>
                  Consolider les métiers actuels, renforcer progressivement les
                  capacités industrielles et élargir l'offre de solutions à plus
                  forte valeur ajoutée locale.
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
                eyebrow="Développement industriel"
                title="Une évolution progressive des capacités."
                text="Cette ambition est présentée comme un projet de développement, et non comme une capacité déjà entièrement opérationnelle."
              />
            </div>

            <div className="col-lg-8">
              <div className="about-workflow">
                {development.map((step, index) => (
                  <div className="workflow-item" key={step}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <h3>{step}</h3>
                      <p>
                        Renforcement progressif des capacités de fabrication et
                        de transformation métallique.
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="feature-list mt-4">
                <span><CheckCircle2 size={18} /> Projet de développement industriel</span>
                <span><CheckCircle2 size={18} /> Amélioration de la qualité et de la capacité de production</span>
                <span><CheckCircle2 size={18} /> Création de valeur ajoutée locale dans la région Souss-Massa</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-soft">
        <div className="container">
          <SectionTitle
            eyebrow="Valeurs"
            title="Des engagements simples et lisibles."
            text="KASSIB GROUP accorde une attention particulière à la qualité, à la sécurité, à l'intégrité, à la responsabilité et à l'amélioration continue."
            align="center"
          />
          <div className="about-values">
            {values.map((value) => (
              <span key={value}>{value}</span>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
