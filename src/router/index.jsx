import { lazy, Suspense, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

const Home = lazy(() => import("../pages/Home.jsx"));
const About = lazy(() => import("../pages/About.jsx"));
const Services = lazy(() => import("../pages/Services.jsx"));
const Projects = lazy(() => import("../pages/Projects.jsx"));
const News = lazy(() => import("../pages/News.jsx"));
const Contact = lazy(() => import("../pages/Contact.jsx"));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

function PageFallback() {
  return <div className="page-fallback" aria-label="Loading page" />;
}

export default function AppRouter() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </>
  );
}
