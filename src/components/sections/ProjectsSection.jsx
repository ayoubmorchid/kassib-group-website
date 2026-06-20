import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { projects } from "../../data/projects";
import ProjectCard from "../ui/ProjectCard";
import SectionTitle from "../ui/SectionTitle";

export default function ProjectsSection() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="section-heading-row">
          <SectionTitle
            eyebrow="Domaines"
            title="Des domaines d'intervention présentés sans fausses références."
          />
          <Link to="/projects" className="text-link">
            Voir les domaines <ArrowRight size={16} />
          </Link>
        </div>
        <div className="row g-4">
          {projects.slice(0, 3).map((project) => (
            <div className="col-md-6 col-xl-4" key={project.title}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
