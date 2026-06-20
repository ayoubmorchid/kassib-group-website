import Hero from "../components/sections/Hero";
import SEO from "../components/SEO";

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page introuvable | KASSIB GROUP"
        description="La page demandée sur le site KASSIB GROUP est introuvable. Retournez à l'accueil ou contactez l'entreprise."
        path="/404"
      />
      <Hero
        compact
        eyebrow="404"
        title="Page introuvable"
        text="La page que vous recherchez n'existe pas."
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1500&h=800&fit=crop&auto=format"
        primaryLabel="Retour à l'accueil"
        primaryTo="/"
        secondaryLabel="Nous contacter"
        secondaryTo="/contact"
      />
    </>
  );
}
