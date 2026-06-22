import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".section-padding, .dark-band, .cta-section, .about-mission-band, .home-service-line, .home-process-item, .home-strength-item, .service-card, .project-card, .process-card, .capability-card, .workflow-item, .about-indicator"
    );

    elements.forEach((element) => element.classList.add("reveal-on-scroll"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return null;
}
