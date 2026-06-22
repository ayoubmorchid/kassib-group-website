import Hero from "../components/sections/Hero";
import CTASection from "../components/sections/CTASection";
import SEO from "../components/SEO";
import SectionTitle from "../components/ui/SectionTitle";
import ProjectCard from "../components/ui/ProjectCard";
import { projects } from "../data/projects";

const futureCapabilities = [
  "Découpe industrielle",
  "Pliage industriel",
  "Roulage",
  "Usinage",
  "Produits métalliques plus complexes",
  "Solutions à plus forte valeur ajoutée",
];

export default function Projects() {
  return (
    <>
      <SEO
        title="Domaines d'intervention | Kassib Group"
        description="Découvrez les domaines d'intervention de KASSIB GROUP en construction métallique, soudure, signalétique, travaux spécialisés et fabrications techniques."
        path="/projects"
      />
      <Hero
        compact
        eyebrow="Domaines"
        title="Domaines"
        text="Une présentation sobre des domaines d'activité de KASSIB GROUP, sans créer de fausses références de projets."
        image="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1500&h=800&fit=crop&auto=format"
      />

      <section className="section-padding bg-soft projects-overview-section">
        <div className="container">
          <SectionTitle
            eyebrow="Activités"
            title="Des domaines techniques clairement identifiés."
            text="Une lecture simple des principaux champs d'intervention de KASSIB GROUP, centrée sur les métiers réellement présentés par l'entreprise."
            align="center"
          />
          <div className="row g-4 mt-2 projects-grid">
            {projects.map((project) => (
              <div className="col-md-6" key={project.title}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="portfolio-band">
            <div>
              <p>Approche</p>
              <h2>Une présentation claire des métiers pour comprendre rapidement le périmètre technique de l'entreprise.</h2>
            </div>
            <div className="portfolio-metrics">
              <span><strong>4</strong> Domaines d'intervention</span>
              <span><strong>1</strong> Orientation technique</span>
              <span><strong>+</strong> Développement industriel</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-soft">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-lg-5">
              <SectionTitle
                eyebrow="Capacités en développement"
                title="Un périmètre futur présenté avec prudence."
                text="Certains sujets relèvent du projet de développement industriel et ne sont pas présentés comme des capacités déjà entièrement opérationnelles."
              />
            </div>
            <div className="col-lg-7">
              <div className="tag-list development-tags">
                {futureCapabilities.map((item) => (
                  <span key={item}>{item}</span>
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
