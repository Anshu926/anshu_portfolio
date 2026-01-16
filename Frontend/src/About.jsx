import "./About.css";
import ThreeModel from "./ThreeModel";

function About() {
  return (
    <div className="about-wrapper container" id="about">
      <div className="row align-items-center">
        {/* LEFT SIDE */}
        <div className="col-md-6 text-start">
          <h2 className="hello-text">Hello,</h2>
          <h1 className="hero-name">I'm Anshu Bongade.</h1>

          {/* Static Role */}
          <h3 className="hero-job">Web & Mobile Application Developer</h3>

          <p className="hero-details mt-3">
            Motivated IT student skilled in full-stack web and mobile app
            development. I build responsive, user-focused applications with
            clean design and strong problem-solving.
          </p>

          {/* ⭐ SOCIAL ICONS ⭐ */}
          <div className="social-icons">
            <a
              href="https://github.com/Anshu926"
              target="_blank"
              className="icon github"
            >
              <i className="fab fa-github"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/anshu-bongade-18778b292/"
              target="_blank"
              className="icon linkedin"
            >
              <i className="fab fa-linkedin"></i>
            </a>

            <a
              href="https://leetcode.com/u/t67eRsiUHo/"
              target="_blank"
              className="icon leetcode"
            >
              <i className="fas fa-code"></i>
            </a>

            <a
              href="https://wa.me/7385065507"
              target="_blank"
              className="icon whatsapp"
            >
              <i className="fab fa-whatsapp"></i>
            </a>

            <a
              href="https://t.me/anshu_bongade"
              target="_blank"
              className="icon telegram"
            >
              <i className="fab fa-telegram"></i>
            </a>
          </div>

          <button
            className="hire-btn mt-4"
            onClick={() => {
              document.getElementById("contact").scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Available for Work
          </button>
        </div>

        {/* RIGHT SIDE — 3D MODEL */}
        <div className="col-md-6 text-center three-model-box">
          <ThreeModel />
        </div>
      </div>
    </div>
  );
}

export default About;
