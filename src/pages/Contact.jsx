import { useState } from "react";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import Hero from "../components/sections/Hero";
import SEO from "../components/SEO";
import SectionTitle from "../components/ui/SectionTitle";
import { company } from "../data/company";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = (form) => {
    const formData = new FormData(form);
    const name = formData.get("name").trim();
    const email = formData.get("email").trim();
    const subject = formData.get("subject").trim();
    const message = formData.get("message").trim();
    const nextErrors = {};

    if (!name) {
      nextErrors.name = "Le nom est obligatoire.";
    }

    if (!email) {
      nextErrors.email = "L'email est obligatoire.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Veuillez saisir une adresse email valide.";
    }

    if (!subject) {
      nextErrors.subject = "Le sujet est obligatoire.";
    }

    if (!message) {
      nextErrors.message = "Le message est obligatoire.";
    } else if (message.length < 10) {
      nextErrors.message = "Le message doit contenir au moins 10 caractères.";
    }

    return nextErrors;
  };

  const clearFieldError = (event) => {
    const { name } = event.target;

    if (errors[name]) {
      setErrors((currentErrors) => {
        const remainingErrors = { ...currentErrors };
        delete remainingErrors[name];
        return remainingErrors;
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validateForm(event.currentTarget);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setSubmitted(false);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  return (
    <>
      <SEO
        title="Contact KASSIB GROUP"
        description="Contactez KASSIB GROUP pour discuter d'un besoin en construction métallique, soudure, fabrication technique ou travaux spécialisés."
        path="/contact"
      />
      <Hero
        compact
        eyebrow="Contact"
        title="Contact"
        text="Contactez KASSIB GROUP pour discuter d'un besoin technique, métallique ou industriel."
        image="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1500&h=800&fit=crop&auto=format"
      />

      <section className="section-padding bg-soft">
        <div className="container">
          <div className="row g-4 align-items-start">
            <div className="col-lg-4">
              <SectionTitle
                eyebrow="Informations"
                title="Commençons par un échange clair."
                text="Notre équipe est disponible pour étudier vos besoins en construction métallique, soudure, fabrication technique, fourniture ou travaux spécialisés."
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
                    <h2>Message reçu</h2>
                    <p>
                      Merci d'avoir contacté KASSIB GROUP. Votre demande a été
                      prise en compte visuellement par ce formulaire.
                    </p>

                    <button
                      className="btn btn-dark-brand"
                      type="button"
                      onClick={() => setSubmitted(false)}
                    >
                      Envoyer un autre message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="row g-4">
                      <div className="col-md-6">
                        <label className="form-label" htmlFor="contact-name">
                          Nom
                        </label>
                        <input
                          id="contact-name"
                          className={`form-control ${errors.name ? "is-invalid" : ""}`}
                          type="text"
                          name="name"
                          autoComplete="name"
                          required
                          aria-invalid={errors.name ? "true" : "false"}
                          aria-describedby={errors.name ? "contact-name-error" : undefined}
                          onChange={clearFieldError}
                          placeholder="Votre nom"
                        />
                        {errors.name && (
                          <div className="field-error" id="contact-name-error">
                            {errors.name}
                          </div>
                        )}
                      </div>

                      <div className="col-md-6">
                        <label className="form-label" htmlFor="contact-email">
                          Email
                        </label>
                        <input
                          id="contact-email"
                          className={`form-control ${errors.email ? "is-invalid" : ""}`}
                          type="email"
                          name="email"
                          autoComplete="email"
                          required
                          aria-invalid={errors.email ? "true" : "false"}
                          aria-describedby={errors.email ? "contact-email-error" : undefined}
                          onChange={clearFieldError}
                          placeholder="you@example.com"
                        />
                        {errors.email && (
                          <div className="field-error" id="contact-email-error">
                            {errors.email}
                          </div>
                        )}
                      </div>

                      <div className="col-12">
                        <label className="form-label" htmlFor="contact-subject">
                          Sujet
                        </label>
                        <input
                          id="contact-subject"
                          className={`form-control ${errors.subject ? "is-invalid" : ""}`}
                          type="text"
                          name="subject"
                          required
                          aria-invalid={errors.subject ? "true" : "false"}
                          aria-describedby={errors.subject ? "contact-subject-error" : undefined}
                          onChange={clearFieldError}
                          placeholder="Demande technique"
                        />
                        {errors.subject && (
                          <div className="field-error" id="contact-subject-error">
                            {errors.subject}
                          </div>
                        )}
                      </div>

                      <div className="col-12">
                        <label className="form-label" htmlFor="contact-message">
                          Message
                        </label>
                        <textarea
                          id="contact-message"
                          className={`form-control ${errors.message ? "is-invalid" : ""}`}
                          rows="6"
                          name="message"
                          required
                          minLength="10"
                          aria-invalid={errors.message ? "true" : "false"}
                          aria-describedby={errors.message ? "contact-message-error" : undefined}
                          onChange={clearFieldError}
                          placeholder="Décrivez votre besoin technique ou métallique"
                        />
                        {errors.message && (
                          <div className="field-error" id="contact-message-error">
                            {errors.message}
                          </div>
                        )}
                      </div>

                      <div className="col-12">
                        <button className="btn btn-brand" type="submit">
                          Envoyer le message <Send size={16} />
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
              <span className="eyebrow">Localisation</span>
              <h2>Oulad Teima / Souss-Massa</h2>
              <p>
                Oulad Teima, Région Souss-Massa, Maroc
              </p>
            </div>

            <div className="map-frame">
              <iframe
                title="Localisation KASSIB GROUP"
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
