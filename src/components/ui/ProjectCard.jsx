import Card from "./Card";

export default function ProjectCard({ project }) {
  return (
    <Card className="project-card h-100">
      <div className="project-image">
        <img src={project.image} alt={project.title} loading="lazy" decoding="async" />
        <span>{project.category}</span>
      </div>
      <div className="project-body">
        <p className="project-meta">{project.location} / {project.year}</p>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </Card>
  );
}
