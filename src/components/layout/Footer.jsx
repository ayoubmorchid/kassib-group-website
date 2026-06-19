import { Link } from "react-router-dom";
import { Globe2, Mail, MapPin, Phone } from "lucide-react";
import { company, navLinks } from "../../data/company";
import { services } from "../../data/services";

export default function Footer() {
  const quickLinks = navLinks.filter((link) => link.href !== "/");

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4">
            <Link to="/" className="footer-logo">
              <img src="/logo.png" alt="Kassib Group" />
            </Link>
            <p>
              Kassib Group works across public works, construction,
              rehabilitation, local infrastructure, municipal equipment, and
              tender follow-up in Morocco.
            </p>
            <div className="social-links">
              <a href={company.emailHref} aria-label="Email Kassib Group">
                <Mail size={17} />
              </a>
              <a href={company.phoneHref} aria-label="Call Kassib Group">
                <Phone size={17} />
              </a>
              <Link to="/contact" aria-label="Company contact page">
                <Globe2 size={17} />
              </Link>
            </div>
          </div>

          <div className="col-6 col-lg-2">
            <h3>Company</h3>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-6 col-lg-3">
            <h3>Services</h3>
            <ul>
              {services.slice(0, 6).map((service) => (
                <li key={service.title}>
                  <Link to="/services">{service.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-3">
            <h3>Contact</h3>
            <div className="footer-contact">
              <span><MapPin size={17} /> {company.location}</span>
              <a href={company.phoneHref}><Phone size={17} /> {company.phone}</a>
              <a href={company.emailHref}><Mail size={17} /> {company.email}</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>(c) 2026 Kassib Group. All Rights Reserved.</span>
          <div>
            <Link to="/contact">Privacy Policy</Link>
            <Link to="/contact">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
