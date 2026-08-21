import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./VerticalProgress.css";

const sections = [
  { id: "about" },
  { id: "education" },
  { id: "experience" },
  { id: "skills" },
  { id: "projects" },
  { id: "contact" },
];

export default function VerticalProgress({ position = "left" }) {
  const [activeSection, setActiveSection] = useState("about");

  // Scroll spy synchronized with the 5 navigation sections
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".custom-navbar");
      const navbarHeight = navbar ? navbar.offsetHeight : 90;
      const threshold = navbarHeight + 60;

      let current = sections[0].id;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const { top } = el.getBoundingClientRect();
          if (top <= threshold) {
            current = section.id;
          }
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeIndex = Math.max(0, sections.findIndex((s) => s.id === activeSection));
  const progressHeight = `${(activeIndex / (sections.length - 1)) * 100}%`;

  return (
    <div className={`v-progress-wrapper pos-${position}`} aria-hidden="true">
      {/* Background Glass Track */}
      <div className="v-progress-track">
        {/* Progress Fill Line up to Active Checkpoint */}
        <motion.div
          className="v-progress-fill"
          animate={{ height: progressHeight }}
          transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
        />

        {/* Exactly 5 Checkpoint Dots */}
        {sections.map((section, index) => {
          const topPercent = (index / (sections.length - 1)) * 100;
          const isActive = index === activeIndex;
          const isVisited = index < activeIndex;

          return (
            <span
              key={section.id}
              className={`v-progress-dot ${isActive ? "active" : isVisited ? "visited" : "upcoming"}`}
              style={{ top: `${topPercent}%` }}
            />
          );
        })}
      </div>
    </div>
  );
}
