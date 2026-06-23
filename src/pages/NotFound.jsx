import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import "../styles/not-found.css";

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page introuvable | KASSIB GROUP"
        description="La page demandée sur le site KASSIB GROUP est introuvable."
        path="/404"
      />

      <main className="not-found-page">
        <div className="container">
          <div className="not-found-content">
            <span className="not-found-code">404</span>

            <h1>Page introuvable</h1>

            <p>
              La page que vous recherchez n’existe pas ou a été déplacée.
            </p>

            <div className="not-found-actions">
              <Link to="/" className="btn not-found-primary">
                Retour à l’accueil
              </Link>

              <Link to="/contact" className="btn not-found-secondary">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}