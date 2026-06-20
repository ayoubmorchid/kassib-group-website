import { ArrowRight } from "lucide-react";
import Card from "./Card";

export default function ServiceCard({ service, featured = false }) {
  const Icon = service.icon;

  return (
    <Card className={`service-card h-100 ${featured ? "featured" : ""}`}>
      <div className="icon-box">
        <Icon size={25} />
      </div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      {service.highlights && (
        <div className="tag-list">
          {service.highlights.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      )}
      {!service.highlights && (
        <span className="card-link">
          En savoir plus <ArrowRight size={14} />
        </span>
      )}
    </Card>
  );
}
