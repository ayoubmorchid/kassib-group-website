import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { company, navLinks } from "../../data/company";

const footerLinks = [...navLinks, { label: "Carrières", href: "/careers" }];

const expertiseItems = [
  "Construction métallique",
  "Soudure",
  "Fabrication technique",
  "Travaux spécialisés",
];

export default function Footer() {
  const addressLines = company.addressLines ?? [company.location];

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link to="/" className="footer-logo" aria-label="Accueil KASSIB GROUP">
              <img src="/logo.png" alt="KASSIB GROUP" />
            </Link>
            <p>
              KASSIB GROUP développe des solutions métalliques, techniques et
              industrielles adaptées aux besoins des professionnels.
            </p>
          </div>

          <nav className="footer-links" aria-label="Navigation du pied de page">
            <h3>Navigation</h3>
            <ul>
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer-expertise">
            <h3>Expertise</h3>
            <ul>
              {expertiseItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <address className="footer-contact">
            <h3>Contact</h3>
            <div>
              <MapPin size={17} aria-hidden="true" />
              <span>
                {addressLines.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </span>
            </div>
            <a href={company.phoneHref}>
              <Phone size={17} aria-hidden="true" />
              {company.phone}
            </a>
            <a href={company.emailHref}>
              <Mail size={17} aria-hidden="true" />
              {company.email}
            </a>
          </address>
        </div>

        <div className="footer-bottom">
          <p>© 2026 KASSIB GROUP. Tous droits réservés.</p>
          <div>
            <Link to="/privacy-policy">Politique de confidentialité</Link>
            <Link to="/terms-of-service">Conditions d'utilisation</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
