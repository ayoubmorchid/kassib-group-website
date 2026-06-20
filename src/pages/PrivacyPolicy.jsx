import Hero from "../components/sections/Hero";
import SEO from "../components/SEO";
import SectionTitle from "../components/ui/SectionTitle";
import { company } from "../data/company";

const sections = [
  ["Introduction", "Cette politique explique comment KASSIB GROUP traite les informations transmises via son site web, notamment lors d'une demande de contact."],
  ["Informations collectées", "Le site peut collecter le nom, l'adresse email, le sujet et le contenu du message envoyé via le formulaire de contact."],
  ["Utilisation des informations", "Les informations sont utilisées pour répondre aux demandes, améliorer les échanges professionnels et assurer le suivi des contacts."],
  ["Protection des données", "KASSIB GROUP accorde une attention particulière à la confidentialité, à l'organisation et à la protection raisonnable des informations reçues."],
  ["Cookies", "Le site peut utiliser des cookies ou technologies similaires pour le fonctionnement technique et l'amélioration de l'expérience de navigation."],
  ["Services tiers", "Certains contenus ou services externes, comme la carte, peuvent être soumis aux politiques de confidentialité de leurs fournisseurs."],
  ["Contact", `Pour toute question relative à la confidentialité, contactez KASSIB GROUP à l'adresse ${company.email}.`],
];

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Politique de confidentialité | KASSIB GROUP"
        description="Consultez la politique de confidentialité de KASSIB GROUP concernant les informations collectées via le site web."
        path="/privacy-policy"
      />
      <Hero
        compact
        eyebrow="Confidentialité"
        title="Politique de confidentialité"
        text="Une présentation claire de la manière dont les informations transmises via le site sont traitées."
        image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1500&h=800&fit=crop&auto=format"
      />

      <section className="section-padding">
        <div className="container">
          <div className="legal-content">
            <SectionTitle
              eyebrow="Confidentialité"
              title="Traitement des informations."
              text="Cette page concerne les visiteurs, clients potentiels et partenaires qui utilisent le site web de KASSIB GROUP."
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
