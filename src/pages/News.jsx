import Hero from "../components/sections/Hero";
import CTASection from "../components/sections/CTASection";
import SEO from "../components/SEO";
import SectionTitle from "../components/ui/SectionTitle";

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
        eyebrow="Actualités"
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
        </div>
      </section>

      <CTASection />
    </>
  );
}
