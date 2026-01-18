import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [active, setActive] = useState("about");

  // Smooth scroll handler
  const smoothScroll = (sectionId) => {
  const section = document.getElementById(sectionId);

  if (!section) return;

  // Smooth scroll WITHOUT manual offset
  section.scrollIntoView({ behavior: "smooth", block: "start" });
};


  // CLOSE dropdown after click (mobile)
  const closeDropdown = () => {
    const navbar = document.getElementById("navbarCentered");
    if (navbar && navbar.classList.contains("show")) {
      navbar.classList.remove("show");
    }
  };

  // Scroll Spy Logic
  useEffect(() => {
    const sections = [
      "about",
      "education",
      "experience",
      "projects",
      "contact",
    ];

    const handleScroll = () => {
      const navbar = document.querySelector(".custom-navbar");
      const navbarHeight = navbar ? navbar.offsetHeight : 100;
      const scrollPos = window.scrollY + navbarHeight + 20;

      for (let id of sections) {
        const sec = document.getElementById(id);
        if (
          sec &&
          scrollPos >= sec.offsetTop &&
          scrollPos < sec.offsetTop + sec.offsetHeight
        ) {
          setActive(id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
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
