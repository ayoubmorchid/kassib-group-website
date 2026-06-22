import Hero from "../components/sections/Hero";
import CTASection from "../components/sections/CTASection";
import SEO from "../components/SEO";
import SectionTitle from "../components/ui/SectionTitle";

const themes = [
  ["Développement industriel", "Les prochaines communications pourront présenter l'évolution progressive des capacités techniques et métalliques de l'entreprise."],
  ["Savoir-faire technique", "Les contenus à venir pourront expliquer les métiers de la construction métallique, de la soudure et de la fabrication technique."],
  ["Engagements qualité", "KASSIB GROUP pourra partager ses démarches autour de la qualité, de la sécurité, de l'organisation et de l'amélioration continue."],
];

export default function News() {
  return (
    <>
      <SEO
        title="Actualités | Kassib Group"
        description="Les actualités officielles de KASSIB GROUP seront publiées lorsqu'elles seront confirmées."
        path="/news"
      />
      <Hero
        compact
        title="Actualités"
        text="Les informations officielles de KASSIB GROUP seront publiées lorsqu'elles seront disponibles et confirmées."
        image="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1500&h=800&fit=crop&auto=format"
      />

      <section className="section-padding">
        <div className="container">
          <SectionTitle
            eyebrow="À venir"
            title="Les actualités de KASSIB GROUP seront prochainement disponibles."
            text="Aucune actualité confirmée n'a été fournie pour le moment. Cette page évite volontairement les annonces, contrats ou partenariats non vérifiés."
            align="center"
          />
          <div className="row g-4 mt-2">
            {themes.map(([title, text]) => (
              <div className="col-md-4" key={title}>
                <div className="process-card h-100">
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-soft">
        <div className="container">
          <SectionTitle
            eyebrow="Ligne éditoriale"
            title="Des informations sobres, utiles et vérifiées."
            text="La page Actualités restera réservée aux informations réellement confirmées par KASSIB GROUP afin de préserver la crédibilité du site."
            align="center"
          />
        </div>
      </section>

      <CTASection />
    </>
  );
}
