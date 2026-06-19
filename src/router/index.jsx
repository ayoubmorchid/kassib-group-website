import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Services from "../pages/Services.jsx";
import Projects from "../pages/Projects.jsx";
import News from "../pages/News.jsx";
import Contact from "../pages/Contact.jsx";
import PrivacyPolicy from "../pages/PrivacyPolicy.jsx";
import TermsOfService from "../pages/TermsOfService.jsx";
import NotFound from "../pages/NotFound.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

export default function AppRouter() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
