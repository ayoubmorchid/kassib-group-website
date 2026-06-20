import { ArrowRight } from "lucide-react";
import Button from "../ui/Button";
import Container from "../ui/Container";

export default function CTASection() {
  return (
    <section className="cta-section">
      <Container className="text-center position-relative">
        <p className="cta-eyebrow">Un besoin technique ?</p>
        <h2>Parlez-nous de votre projet métallique ou technique.</h2>
        <p>
          KASSIB GROUP accompagne les professionnels dans leurs besoins de
          construction métallique, soudure, fabrication technique et travaux
          spécialisés.
        </p>
        <Button to="/contact">
          Nous contacter
          <ArrowRight size={17} />
        </Button>
      </Container>
    </section>
  );
}
