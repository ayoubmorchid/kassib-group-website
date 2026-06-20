import Hero from "../components/sections/Hero";
import CTASection from "../components/sections/CTASection";
import SEO from "../components/SEO";
import SectionTitle from "../components/ui/SectionTitle";
import ProjectCard from "../components/ui/ProjectCard";
import { projects } from "../data/projects";

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
        title="Domaines d'intervention"
        text="Une présentation sobre des domaines d'activité de KASSIB GROUP, sans créer de fausses références de projets."
        image="https://images.unsplash.com/photo-1460472178825-e5240623afd5?w=1500&h=800&fit=crop&auto=format"
      />

      <section className="section-padding bg-soft">
        <div className="container">
          <SectionTitle
            eyebrow="Activités"
            title="Des domaines techniques clairement identifiés."
            text="Les éléments présentés ci-dessous décrivent des domaines d'intervention et non des chantiers, clients ou références non vérifiés."
            align="center"
          />
          <div className="row g-4 mt-2">
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
              <h2>Présenter les savoir-faire sans inventer de références permet de rester clair, professionnel et crédible.</h2>
            </div>
            <div className="portfolio-metrics">
              <span><strong>4</strong> Domaines présentés</span>
              <span><strong>0</strong> Faux projet</span>
              <span><strong>1</strong> Positionnement technique</span>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
