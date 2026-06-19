import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { news } from "../../data/news";
import NewsCard from "../ui/NewsCard";
import SectionTitle from "../ui/SectionTitle";

export default function NewsSection() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="section-heading-row">
          <SectionTitle eyebrow="News" title="Updates from public works and project delivery." />
          <Link to="/news" className="text-link">
            All news <ArrowRight size={16} />
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
