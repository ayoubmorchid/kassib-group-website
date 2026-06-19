import Hero from "../components/sections/Hero";
import CTASection from "../components/sections/CTASection";
import SEO from "../components/SEO";
import SectionTitle from "../components/ui/SectionTitle";
import NewsCard from "../components/ui/NewsCard";
import { news } from "../data/news";

export default function News() {
  const [featured, ...articles] = news;

  return (
    <>
      <SEO
        title="News | Kassib Group"
        description="Read Kassib Group news and perspectives on public works, rehabilitation, tender follow-up, local infrastructure, and municipal equipment."
        path="/news"
      />
      <Hero
        compact
        eyebrow="Insights"
        title="News"
        text="Updates and perspectives on public works, rehabilitation, tender follow-up, local infrastructure, and municipal equipment."
        image="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1500&h=800&fit=crop&auto=format"
      />

      <section className="section-padding">
        <div className="container">
          <SectionTitle eyebrow="Featured" title="Latest from Kassib Group." />
          <NewsCard article={featured} featured />
        </div>
      </section>

      <section className="section-padding bg-soft">
        <div className="container">
          <SectionTitle eyebrow="Recent Articles" title="Public works perspectives." align="center" />
          <div className="row g-4 mt-2">
            {articles.map((article) => (
              <div className="col-md-6" key={article.title}>
                <NewsCard article={article} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
