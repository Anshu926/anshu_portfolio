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
    transition: { duration: 1.1, ease: "easeOut" }
  }
};

// Reusable separator
function Separator() {
  return (
    <div className="section-separator">
      <span className="dot">•</span>
      <span className="dot">•</span>
      <div className="line"></div>
      <span className="dot">•</span>
      <span className="dot">•</span>
    </div>
  );
}

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

      {/* ⭐ MAIN CONTENT */}
      <div className="page-content">

        {/* NAVBAR */}
        <Navbar />

        {/* ABOUT */}
        <motion.section
          id="about"
          variants={sectionVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <About />
        </motion.section>

        <Separator />

        {/* EDUCATION */}
        <motion.section
          id="education"
          variants={sectionVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Education />
        </motion.section>

        <Separator />

        {/* EXPERIENCE */}
        <motion.section
          id="experience"
          variants={sectionVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Experience />
        </motion.section>

        <Separator />

        {/* SKILLS */}
        <motion.section
          id="skills"
          variants={sectionVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Skills />
        </motion.section>

        <Separator />

        {/* PROJECTS */}
        <motion.section
          id="projects"
          variants={sectionVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Projects />
        </motion.section>

        <Separator />

        {/* CONTACT */}
        <motion.section
          id="contact"
          variants={sectionVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Contact />
        </motion.section>

        {/* FOOTER */}
        <Footer />

      </div>
    </>
  );
}

export default Home;
