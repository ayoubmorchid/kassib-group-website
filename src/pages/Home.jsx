import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, ShieldCheck, Target, TrendingUp } from "lucide-react";
import Hero from "../components/sections/Hero";
import CTASection from "../components/sections/CTASection";
import NewsSection from "../components/sections/NewsSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import ServicesSection from "../components/sections/ServicesSection";
import SectionTitle from "../components/ui/SectionTitle";

const stats = [
  ["7", "Operational service areas"],
  ["2026", "Tender files tracked"],
  ["TAR", "Taroudant project focus"],
  ["SM", "Souss-Massa presence"],
];

export default function Home() {
  return (
    <>
      <Hero
        eyebrow="Kassib Group"
        title="Embracing the Better Future"
        text="Kassib Group is active in public works, civil construction, rehabilitation, road links, water infrastructure, municipal equipment, and tender follow-up for projects across Taroudant and the Souss-Massa region."
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1800&h=1100&fit=crop&auto=format"
        primaryLabel="Explore Services"
        primaryTo="/services"
        secondaryLabel="About Kassib"
        secondaryTo="/about"
      />

      <section className="stats-strip">
        <div className="container">
          <div className="row g-4">
            {stats.map(([value, label]) => (
              <div className="col-6 col-lg-3" key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <div className="image-frame">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&h=700&fit=crop&auto=format"
                  alt="Professional team discussing a project"
                  loading="lazy"
                  decoding="async"
                />
                <div className="floating-badge">
                  <strong>Future</strong>
                  <span>ready solutions</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <SectionTitle
                eyebrow="About Kassib Group"
                title="A field-oriented company for public works and local development projects."
                text="We combine practical site execution, tender documentation, supplier follow-up, and disciplined project coordination to serve public and community-focused works."
              />
              <div className="feature-list">
                {[
                  "Experience with public tenders and administrative files",
                  "Execution across construction, rehabilitation, and equipment supply",
                  "Clear follow-up of estimates, attachments, invoices, and stock",
                ].map((item) => (
                  <span key={item}><CheckCircle2 size={18} /> {item}</span>
                ))}
              </div>
              <Link to="/about" className="text-link">
                Discover our story <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ServicesSection />

      <ProjectsSection />

      <section className="dark-band">
        <div className="container">
          <div className="row g-4">
            {[
              [Target, "Tender clarity", "Organized files, deadlines, costs, and technical requirements."],
              [ShieldCheck, "Reliable site control", "Daily follow-up of works, equipment, stock, and suppliers."],
              [TrendingUp, "Local impact", "Projects that improve mobility, facilities, water access, and services."],
            ].map(([Icon, title, text]) => (
              <div className="col-md-4" key={title}>
                <div className="dark-feature">
                  <Icon size={26} />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NewsSection />

      <CTASection />
    </>
  );
}
