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
        title="Projects | Kassib Group"
        description="Discover Kassib Group project references across public works, rehabilitation, water infrastructure, road links, municipal equipment, and local services."
        path="/projects"
      />
      <Hero
        compact
        eyebrow="Our Portfolio"
        title="Projects"
        text="A selection of realistic references inspired by Kassib Group tender files: public works, rehabilitation, water infrastructure, roads, municipal equipment, and essential services."
        image="https://images.unsplash.com/photo-1460472178825-e5240623afd5?w=1500&h=800&fit=crop&auto=format"
      />

      <section className="section-padding bg-soft">
        <div className="container">
          <SectionTitle
            eyebrow="Selected Work"
            title="Projects shaped by public needs, site work, and disciplined follow-up."
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
              <p>Project approach</p>
              <h2>From tender review to attachments and delivery, every project needs organized execution.</h2>
            </div>
            <div className="portfolio-metrics">
              <span><strong>6</strong> Project references</span>
              <span><strong>7</strong> Service disciplines</span>
              <span><strong>1</strong> Public works focus</span>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
