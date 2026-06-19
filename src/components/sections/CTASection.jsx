import { ArrowRight } from "lucide-react";
import Button from "../ui/Button";
import Container from "../ui/Container";

export default function CTASection() {
  return (
    <section className="cta-section">
      <Container className="text-center position-relative">
        <p className="cta-eyebrow">Ready to deliver?</p>
        <h2>Build stronger public works and local infrastructure with Kassib Group.</h2>
        <p>
          Our team brings tender organization, site coordination, supplier
          follow-up, and dependable execution to projects that need clarity from
          the first document to final delivery.
        </p>
        <Button to="/contact">
          Contact us
          <ArrowRight size={17} />
        </Button>
      </Container>
    </section>
  );
}
