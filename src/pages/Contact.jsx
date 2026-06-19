import { useState } from "react";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import Hero from "../components/sections/Hero";
import SectionTitle from "../components/ui/SectionTitle";
import { company } from "../data/company";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Hero
        compact
        eyebrow="Get in Touch"
        title="Contact"
        text="Reach Kassib Group to discuss public works, rehabilitation, road links, municipal equipment, tender files, or field execution needs."
        image="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1500&h=800&fit=crop&auto=format"
      />

      <section className="section-padding bg-soft">
        <div className="container">
          <div className="row g-5 align-items-start">
            <div className="col-lg-4">
              <SectionTitle
                eyebrow="Contact Information"
                title="Let's start with a clear conversation."
                text="Our team is available for public project enquiries, tender follow-up, supplier coordination, and site execution discussions."
              />

              <div className="contact-info">
                <span>
                  <MapPin size={18} />
                  {company.location}
                </span>

                <a href={company.phoneHref}>
                  <Phone size={18} />
                  {company.phone}
                </a>

                <a href={company.emailHref}>
                  <Mail size={18} />
                  {company.email}
                </a>

                <span>
                  <Clock size={18} />
                  {company.hours}
                </span>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="contact-panel">
                {submitted ? (
                  <div className="success-state">
                    <Send size={34} />
                    <h2>Message received</h2>
                    <p>
                      Thank you for contacting Kassib Group. This demo form has
                      prevented reload and confirmed your request visually.
                    </p>

                    <button
                      className="btn btn-dark-brand"
                      type="button"
                      onClick={() => setSubmitted(false)}
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="row g-4">
                      <div className="col-md-6">
                        <label className="form-label" htmlFor="contact-name">
                          Name
                        </label>
                        <input
                          id="contact-name"
                          className="form-control"
                          type="text"
                          name="name"
                          autoComplete="name"
                          required
                          placeholder="Your name"
                        />
                      </div>

                      <div className="col-md-6">
                        <label className="form-label" htmlFor="contact-email">
                          Email
                        </label>
                        <input
                          id="contact-email"
                          className="form-control"
                          type="email"
                          name="email"
                          autoComplete="email"
                          required
                          placeholder="you@example.com"
                        />
                      </div>

                      <div className="col-12">
                        <label className="form-label" htmlFor="contact-subject">
                          Subject
                        </label>
                        <input
                          id="contact-subject"
                          className="form-control"
                          type="text"
                          name="subject"
                          required
                          placeholder="Public works enquiry"
                        />
                      </div>

                      <div className="col-12">
                        <label className="form-label" htmlFor="contact-message">
                          Message
                        </label>
                        <textarea
                          id="contact-message"
                          className="form-control"
                          rows="6"
                          name="message"
                          required
                          placeholder="Tell us about your tender, works, or equipment needs"
                        />
                      </div>

                      <div className="col-12">
                        <button className="btn btn-brand" type="submit">
                          Send message <Send size={16} />
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding map-area">
        <div className="container">
          <div className="map-card">
            <div className="map-content">
              <span className="eyebrow">Location</span>
              <h2>Oulad Teima / Souss-Massa</h2>
              <p>
                N° 02 Kissariat El Hanaa, Boulevard Mohammed V, Oulad Teima,
                Morocco
              </p>
            </div>

            <div className="map-frame">
              <iframe
                title="Kassib Group Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441.4480151326948!2d-9.210752621520669!3d30.395028388387356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3b6bf7ce0583d%3A0xf2532b7ac6e50342!2sAv.%20Mohammed%20V%2C%20Oulad%20Teima!5e0!3m2!1sen!2sma!4v1781876332265!5m2!1sen!2sma"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}