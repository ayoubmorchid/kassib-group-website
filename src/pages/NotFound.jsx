import Hero from "../components/sections/Hero";
import SEO from "../components/SEO";

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found | Kassib Group"
        description="The requested Kassib Group website page could not be found. Return home or contact the team for assistance."
        path="/404"
      />
      <Hero
        compact
        eyebrow="404"
        title="Page Not Found"
        text="The page you are looking for does not exist."
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1500&h=800&fit=crop&auto=format"
        primaryLabel="Back Home"
        primaryTo="/"
        secondaryLabel="Contact Us"
        secondaryTo="/contact"
      />
    </>
  );
}
