import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navLinks } from "../../data/company";
import Button from "../ui/Button";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled || mobileOpen ? "is-scrolled" : ""}`}>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link to="/" className="navbar-brand" onClick={() => setMobileOpen(false)}>
            <img src="/logo.png" alt="Kassib Group" />
          </Link>

          <button
            type="button"
            className="navbar-toggler"
            aria-label="Toggle navigation"
            aria-controls="main-navigation"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X size={25} /> : <Menu size={25} />}
          </button>

          <div
            id="main-navigation"
            className={`collapse navbar-collapse ${mobileOpen ? "show" : ""}`}
          >
            <ul className="navbar-nav mx-auto">
              {navLinks.map((link) => (
                <li className="nav-item" key={link.href}>
                  <NavLink
                    to={link.href}
                    end={link.href === "/"}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "active" : ""}`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            <Button to="/contact" className="nav-cta" onClick={() => setMobileOpen(false)}>
              Nous contacter
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
