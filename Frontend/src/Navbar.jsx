import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [active, setActive] = useState("about");

  // CLOSE dropdown cleanly on mobile without layout shift delay
  const closeDropdown = () => {
    const navbar = document.getElementById("navbarCentered");
    const toggler = document.querySelector(".navbar-toggler");

    if (navbar && navbar.classList.contains("show")) {
      navbar.classList.remove("show", "collapsing");
      navbar.style.height = "";
      if (toggler) {
        toggler.setAttribute("aria-expanded", "false");
        toggler.classList.add("collapsed");
      }
    }
  };

  // Smooth scroll handler
  const smoothScroll = (sectionId) => {
    setActive(sectionId);
    closeDropdown();

    // requestAnimationFrame ensures browser reflows to collapsed navbar height before initiating scroll
    requestAnimationFrame(() => {
      const section = document.getElementById(sectionId);
      if (!section) return;

      section.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  // ─────────────────────────────────────────────────
  // SCROLL SPY — uses getBoundingClientRect()
  //
  // WHY the old offsetTop approach failed:
  //   • sec.offsetTop is relative to the nearest positioned
  //     ancestor (.page-content, position:relative), NOT the
  //     document top — different coordinate system to window.scrollY.
  //   • scroll-margin-top:90px causes scrollIntoView to stop
  //     with the section top at 90px from viewport, making the
  //     old formula consistently miss the active section.
  //
  // getBoundingClientRect() is always viewport-relative and
  // requires no manual offset calculations.
  // ─────────────────────────────────────────────────
  useEffect(() => {
    const sections = [
      "about",
      "education",
      "experience",
      "skills",
      "projects",
      "contact",
    ];

    const handleScroll = () => {
      const navbar = document.querySelector(".custom-navbar");
      const navbarHeight = navbar ? navbar.offsetHeight : 90;
      // Threshold: how far from viewport top counts as "in view"
      const threshold = navbarHeight + 50;

      // Walk sections top-to-bottom; the LAST one whose top
      // has crossed the threshold is the current active section.
      let current = "about";
      for (const id of sections) {
        const sec = document.getElementById(id);
        if (!sec) continue;
        const { top } = sec.getBoundingClientRect();
        if (top <= threshold) {
          current = id;
        }
      }
      setActive(current);
    };

    // Run once immediately on mount to set correct initial state
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid d-flex align-items-center">
        {/* Mobile Center Title */}
        <div className="navbar-brand mx-auto d-lg-none portfolio-title">
          Anshu Bongade
        </div>

        {/* Hamburger */}
        <button
          className="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCentered"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarCentered"
        >
          <ul className="navbar-nav gap-4 text-center">
            <li className="nav-item">
              <span
                className={`nav-link ${active === "about" ? "active-link" : ""}`}
                onClick={() => {
                  smoothScroll("about");
                  closeDropdown();
                }}
              >
                About
              </span>
            </li>

            <li className="nav-item">
              <span
                className={`nav-link ${active === "education" ? "active-link" : ""}`}
                onClick={() => {
                  smoothScroll("education");
                  closeDropdown();
                }}
              >
                Education
              </span>
            </li>

            <li className="nav-item">
              <span
                className={`nav-link ${active === "experience" ? "active-link" : ""}`}
                onClick={() => {
                  smoothScroll("experience");
                  closeDropdown();
                }}
              >
                Experience
              </span>
            </li>

            <li className="nav-item">
              <span
                className={`nav-link ${active === "skills" ? "active-link" : ""}`}
                onClick={() => {
                  smoothScroll("skills");
                  closeDropdown();
                }}
              >
                Skills
              </span>
            </li>

            <li className="nav-item">
              <span
                className={`nav-link ${active === "projects" ? "active-link" : ""}`}
                onClick={() => {
                  smoothScroll("projects");
                  closeDropdown();
                }}
              >
                Projects
              </span>
            </li>

            <li className="nav-item">
              <span
                className={`nav-link ${active === "contact" ? "active-link" : ""}`}
                onClick={() => {
                  smoothScroll("contact");
                  closeDropdown();
                }}
              >
                Contact
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
