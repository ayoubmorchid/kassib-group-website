import Hero from "../components/sections/Hero";
import SEO from "../components/SEO";
import SectionTitle from "../components/ui/SectionTitle";
import { company } from "../data/company";

const sections = [
  ["Acceptation des conditions", "L'utilisation de ce site implique l'acceptation des présentes conditions d'utilisation."],
  ["Utilisation du site", "Le site présente les activités, services et informations générales de KASSIB GROUP à destination des visiteurs et partenaires."],
  ["Propriété intellectuelle", "Les contenus, textes, éléments graphiques et éléments de marque du site sont protégés et ne peuvent pas être reproduits sans autorisation."],
  ["Limitation de responsabilité", "KASSIB GROUP s'efforce de présenter des informations claires, mais ne garantit pas l'absence d'erreurs ou l'accès permanent au site."],
  ["Liens externes", "Le site peut contenir des liens ou services externes dont les contenus et politiques relèvent de leurs propres éditeurs."],
  ["Droit applicable", "Les présentes conditions sont interprétées selon les règles applicables au Maroc, sauf disposition obligatoire contraire."],
  ["Contact", `Pour toute question concernant ces conditions, contactez KASSIB GROUP à l'adresse ${company.email}.`],
];

export default function TermsOfService() {
  return (
    <>
      <SEO
        title="Conditions d'utilisation | KASSIB GROUP"
        description="Consultez les conditions d'utilisation du site web de KASSIB GROUP."
        path="/terms-of-service"
      />
      <Hero
        compact
        eyebrow="Conditions"
        title="Conditions d'utilisation"
        text="Les règles générales qui encadrent l'utilisation du site web de KASSIB GROUP."
        image="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1500&h=800&fit=crop&auto=format"
      />

      <section className="section-padding">
        <div className="container">
          <div className="legal-content">
            <SectionTitle
              eyebrow="Site web"
              title="Conditions générales d'utilisation."
              text="Ces conditions définissent un cadre simple pour l'accès aux informations publiées sur le site."
            />

            <div className="legal-sections">
              {sections.map(([title, text]) => (
                <article className="legal-section" key={title}>
                  <h2>{title}</h2>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
