import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { news } from "../../data/news";
import NewsCard from "../ui/NewsCard";
import SectionTitle from "../ui/SectionTitle";

export default function NewsSection() {
  if (news.length === 0) {
    return null;
  }

  return (
    <section className="section-padding">
      <div className="container">
        <div className="section-heading-row">
          <SectionTitle eyebrow="Actualités" title="Informations et publications de KASSIB GROUP." />
          <Link to="/news" className="text-link">
            Toutes les actualités <ArrowRight size={16} />
          </Link>
        </div>
        <div className="row g-4">
          {news.map((article) => (
            <div className="col-md-6 col-xl-4" key={article.title}>
              <NewsCard article={article} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
