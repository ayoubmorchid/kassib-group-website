import { ArrowRight } from "lucide-react";
import Button from "../ui/Button";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

export default function Hero({
  eyebrow,
  title,
  text,
  image,
  primaryLabel,
  primaryTo,
  secondaryLabel,
  secondaryTo,
  compact = false,
}) {
  return (
    <section className={`hero-section ${compact ? "hero-compact" : ""}`}>
      <div
        className="hero-bg"
        style={{ backgroundImage: `url(${image})` }}
        aria-hidden="true"
      />
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-accent" aria-hidden="true" />

      <Container className="position-relative">
        <div className="row align-items-center">
          <div className="col-lg-8 col-xl-7">
            <SectionTitle eyebrow={eyebrow} title={title} text={text} light as="h1" />
            {(primaryLabel || secondaryLabel) && (
              <div className="d-flex flex-wrap gap-3 mt-4">
                {primaryLabel && (
                  <Button to={primaryTo}>
                    {primaryLabel}
                    <ArrowRight size={17} />
                  </Button>
                )}
                {secondaryLabel && (
                  <Button to={secondaryTo} variant="outline-light" className="brand-outline">
                    {secondaryLabel}
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
