import "./Home.css";

import { motion } from "framer-motion";

import Navbar from "./Navbar.jsx";
import About from "./About.jsx";
import Skills from "./Skills.jsx";
import Education from "./Education.jsx";
import Experience from "./Experience.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";

// Animation settings for all sections
const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.1,
      ease: "easeOut"
    }
  }
};

function Home() {
  return (
    <>
      {/* ⭐ FIXED BACKGROUND (Stars + Bubbles) */}
      <div className="space-background">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
        <div className="bubbles"></div>
      </div>

      {/* ⭐ PAGE CONTENT */}
      <div className="page-content">

        {/* 🔹 NAVBAR */}
        <Navbar />

        {/* 🔹 ABOUT SECTION */}
        <motion.section
          id="about"
          variants={sectionVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <About />
        </motion.section>

        {/* 🔹 SEPARATOR */}
        <div className="section-separator">
          <span className="dot">•</span>
          <span className="dot">•</span>
          <div className="line"></div>
          <span className="dot">•</span>
          <span className="dot">•</span>
        </div>

        {/* 🔹 SKILLS SECTION */}
        <motion.section
          id="skills"
          variants={sectionVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Skills />
        </motion.section>

        {/* 🔹 SEPARATOR */}
        <div className="section-separator">
          <span className="dot">•</span>
          <span className="dot">•</span>
          <div className="line"></div>
          <span className="dot">•</span>
          <span className="dot">•</span>
        </div>

        {/* 🔹 EDUCATION SECTION */}
        <motion.section
          id="education"
          variants={sectionVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Education />
        </motion.section>

        {/* 🔹 SEPARATOR */}
        <div className="section-separator">
          <span className="dot">•</span>
          <span className="dot">•</span>
          <div className="line"></div>
          <span className="dot">•</span>
          <span className="dot">•</span>
        </div>

        {/* 🔹 Experience SECTION */}
        <motion.section
          id="experience"
          variants={sectionVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Experience />
        </motion.section>

        {/* 🔹 SEPARATOR */}
        <div className="section-separator">
          <span className="dot">•</span>
          <span className="dot">•</span>
          <div className="line"></div>
          <span className="dot">•</span>
          <span className="dot">•</span>
        </div>

        {/* 🔹 PROJECTS SECTION */}
        <motion.section
          id="projects"
          variants={sectionVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Projects />
        </motion.section>

        {/* 🔹 SEPARATOR */}
        <div className="section-separator">
          <span className="dot">•</span>
          <span className="dot">•</span>
          <div className="line"></div>
          <span className="dot">•</span>
          <span className="dot">•</span>
        </div>

        {/* 🔹 CONTACT SECTION */}
        <motion.section
          id="contact"
          variants={sectionVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Contact />
        </motion.section>

        {/* 🔹 FOOTER */}
        <Footer />

      </div>
    </>
  );
}

export default Home;
 