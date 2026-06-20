import { CalendarDays, ArrowRight } from "lucide-react";
import Card from "./Card";

export default function NewsCard({ article, featured = false }) {
  return (
    <Card className={`news-card h-100 ${featured ? "featured-news" : ""}`}>
      <div className="news-image">
        <img src={article.image} alt={article.title} loading="lazy" decoding="async" />
      </div>
      <div className="news-body">
        <div className="news-date">
          <CalendarDays size={15} />
          {article.date}
        </div>
        <h3>{article.title}</h3>
        <p>{article.summary}</p>
        <span className="card-link">
          Lire l'information <ArrowRight size={14} />
        </span>
      </div>
    </Card>
  );
}
