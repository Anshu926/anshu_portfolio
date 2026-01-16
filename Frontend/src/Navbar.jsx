import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [active, setActive] = useState("about");

  // Smooth scroll handler
  const smoothScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Scroll Spy Logic
  useEffect(() => {
    const sections = ["about", "education", "projects", "contact"];

    const handleScroll = () => {
      const scrollPos = window.scrollY + 200; // offset for navbar

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
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Hamburger */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCentered"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu Items */}
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarCentered"
        >
          <ul className="navbar-nav gap-4 text-center">
            <li className="nav-item">
              <span
                className={`nav-link ${
                  active === "about" ? "active-link" : ""
                }`}
                onClick={() => smoothScroll("about")}
              >
                About
              </span>
            </li>

            <li className="nav-item">
              <span
                className={`nav-link ${
                  active === "education" ? "active-link" : ""
                }`}
                onClick={() => smoothScroll("education")}
              >
                Academic
              </span>
            </li>

            <li className="nav-item">
              <span
                className={`nav-link ${
                  active === "projects" ? "active-link" : ""
                }`}
                onClick={() => smoothScroll("projects")}
              >
                Projects
              </span>
            </li>

            <li className="nav-item">
              <span
                className={`nav-link ${
                  active === "contact" ? "active-link" : ""
                }`}
                onClick={() => smoothScroll("contact")}
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
