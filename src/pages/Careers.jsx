import { useState } from "react";
import {
  CheckCircle2,
  FileText,
  LoaderCircle,
  Send,
  X,
} from "lucide-react";

import Hero from "../components/sections/Hero";
import SEO from "../components/SEO";
import SectionTitle from "../components/ui/SectionTitle";

const acceptedExtensions = [".pdf", ".doc", ".docx"];
const maxFileSize = 5 * 1024 * 1024;

export default function Careers() {
  const [errors, setErrors] = useState({});
  const [fileName, setFileName] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateForm = (form) => {
    const formData = new FormData(form);

    const fullName = String(formData.get("fullName") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const position = String(formData.get("position") || "").trim();
    const cv = formData.get("cv");

    const nextErrors = {};

    if (!fullName) {
      nextErrors.fullName = "Le nom complet est obligatoire.";
    }

    if (!email) {
      nextErrors.email = "L'adresse e-mail est obligatoire.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Veuillez saisir une adresse e-mail valide.";
    }

    if (!phone) {
      nextErrors.phone = "Le numéro de téléphone est obligatoire.";
    } else if (!/^[+()\d\s.-]{8,}$/.test(phone)) {
      nextErrors.phone = "Veuillez saisir un numéro de téléphone valide.";
    }

    if (!position) {
      nextErrors.position = "Veuillez préciser le poste souhaité.";
    }

    if (!cv || cv.size === 0) {
      nextErrors.cv = "Veuillez ajouter votre CV.";
    } else {
      const validExtension = acceptedExtensions.some((extension) =>
        cv.name.toLowerCase().endsWith(extension)
      );

      if (!validExtension) {
        nextErrors.cv = "Formats acceptés : PDF, DOC et DOCX.";
      } else if (cv.size > maxFileSize) {
        nextErrors.cv = "Le CV ne doit pas dépasser 5 MB.";
      }
    }

    return nextErrors;
  };

  const clearFieldError = (event) => {
    const fieldName = event.target.name;

    setErrors((currentErrors) => {
      if (!currentErrors[fieldName]) {
        return currentErrors;
      }

      const updatedErrors = { ...currentErrors };
      delete updatedErrors[fieldName];

      return updatedErrors;
    });
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];

    setFileName(file?.name || "");
    clearFieldError(event);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const nextErrors = validateForm(form);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setIsSending(true);

    try {
      const formData = new FormData(form);


      console.log("Candidature :", {
        fullName: formData.get("fullName"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        position: formData.get("position"),
        message: formData.get("message"),
        cv: formData.get("cv")?.name,
      });

      await new Promise((resolve) => setTimeout(resolve, 700));

      form.reset();
      setFileName("");
      setSubmitted(true);
    } catch {
      setErrors({
        form: "Une erreur est survenue. Veuillez réessayer.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <SEO
        title="Carrières | KASSIB GROUP"
        description="Rejoignez Kassib Group dans les métiers du BTP, de la construction, du génie civil et de la gestion de projets."
        path="/careers"
      />

      <Hero
        compact
        title="Rejoignez Kassib Group"
        text="Participez à la réalisation de projets exigeants dans les métiers de la construction et du génie civil."
        image="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1600&h=900&fit=crop&auto=format"
      />

      <main>
        <section className="section-padding careers-introduction">
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-7">
                <SectionTitle
                  eyebrow="Travailler avec nous"
                  title="Des compétences au service de projets concrets."
                  text="Kassib Group souhaite collaborer avec des personnes sérieuses, responsables et engagées dans la qualité du travail."
                />

                <p className="careers-introduction-text">
                  Nous étudions les candidatures de professionnels expérimentés,
                  de jeunes diplômés et de profils de terrain, selon les besoins
                  de nos projets.
                </p>

                <a className="careers-apply-link" href="#apply">
                  Envoyer une candidature
                </a>
              </div>

              <div className="col-lg-5">
                <div className="careers-introduction-image">
                  <img
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1000&h=900&fit=crop&auto=format"
                    alt="Professionnels sur un chantier de construction"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding career-application" id="apply">
          <div className="container">
            <div className="career-form-header">
              <span>Candidature spontanée</span>
              <h2>Présentez-nous votre profil</h2>
              <p>Remplissez le formulaire et joignez votre CV.</p>
            </div>

            <div className="career-form-container">
              <form onSubmit={handleSubmit} noValidate>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label" htmlFor="career-full-name">
                      Nom complet *
                    </label>

                    <input
                      id="career-full-name"
                      className={`form-control ${
                        errors.fullName ? "is-invalid" : ""
                      }`}
                      type="text"
                      name="fullName"
                      autoComplete="name"
                      placeholder="Nom et prénom"
                      onChange={clearFieldError}
                    />

                    {errors.fullName && (
                      <div className="career-field-error">
                        {errors.fullName}
                      </div>
                    )}
                  </div>

                  <div className="col-md-6">
                    <label className="form-label" htmlFor="career-email">
                      Adresse e-mail *
                    </label>

                    <input
                      id="career-email"
                      className={`form-control ${
                        errors.email ? "is-invalid" : ""
                      }`}
                      type="email"
                      name="email"
                      autoComplete="email"
                      placeholder="vous@example.com"
                      onChange={clearFieldError}
                    />

                    {errors.email && (
                      <div className="career-field-error">{errors.email}</div>
                    )}
                  </div>

                  <div className="col-md-6">
                    <label className="form-label" htmlFor="career-phone">
                      Téléphone *
                    </label>

                    <input
                      id="career-phone"
                      className={`form-control ${
                        errors.phone ? "is-invalid" : ""
                      }`}
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                      placeholder="+212 6 00 00 00 00"
                      onChange={clearFieldError}
                    />

                    {errors.phone && (
                      <div className="career-field-error">{errors.phone}</div>
                    )}
                  </div>

                  <div className="col-md-6">
                    <label className="form-label" htmlFor="career-position">
                      Poste souhaité *
                    </label>

                    <input
                      id="career-position"
                      className={`form-control ${
                        errors.position ? "is-invalid" : ""
                      }`}
                      type="text"
                      name="position"
                      placeholder="Ex. Conducteur de travaux"
                      onChange={clearFieldError}
                    />

                    {errors.position && (
                      <div className="career-field-error">
                        {errors.position}
                      </div>
                    )}
                  </div>

                  <div className="col-12">
                    <label className="form-label" htmlFor="career-message">
                      Message
                    </label>

                    <textarea
                      id="career-message"
                      className="form-control"
                      name="message"
                      rows="3"
                      placeholder="Quelques mots sur votre expérience"
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label" htmlFor="career-cv">
                      Curriculum vitae *
                    </label>

                    <label
                      className={`career-file-field ${
                        errors.cv ? "has-error" : ""
                      }`}
                      htmlFor="career-cv"
                    >
                      <FileText size={20} />

                      <div>
                        <strong>
                          {fileName || "Sélectionner votre CV"}
                        </strong>
                        <span>PDF, DOC ou DOCX — 5 MB maximum</span>
                      </div>

                      <span className="career-file-action">Parcourir</span>
                    </label>

                    <input
                      id="career-cv"
                      className="visually-hidden"
                      type="file"
                      name="cv"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                    />

                    {errors.cv && (
                      <div className="career-field-error">{errors.cv}</div>
                    )}
                  </div>

                  {errors.form && (
                    <div className="col-12">
                      <div className="career-form-error">
                        {errors.form}
                      </div>
                    </div>
                  )}

                  <div className="col-12">
                    <button
                      className="btn btn-brand career-submit-button"
                      type="submit"
                      disabled={isSending}
                    >
                      {isSending ? (
                        <>
                          <LoaderCircle
                            className="career-spinner"
                            size={17}
                          />
                          Envoi en cours
                        </>
                      ) : (
                        <>
                          Envoyer la candidature
                          <Send size={16} />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      {submitted && (
        <div
          className="career-success-backdrop"
          role="presentation"
          onMouseDown={() => setSubmitted(false)}
        >
          <div
            className="career-success-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="career-success-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              className="career-success-close"
              type="button"
              onClick={() => setSubmitted(false)}
              aria-label="Fermer"
            >
              <X size={20} />
            </button>

            <CheckCircle2 size={40} />

            <h2 id="career-success-title">Candidature envoyée</h2>

            <p>Merci. Votre candidature a bien été prise en compte.</p>

            <button
              className="btn btn-brand"
              type="button"
              onClick={() => setSubmitted(false)}
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </>
  );
}