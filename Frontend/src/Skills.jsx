import "./Skills.css";
import Marquee from "react-fast-marquee";
import { useEffect, useRef } from "react";

function Skills() {
  const skills = [
    { name: "Python", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "TensorFlow", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
    { name: "PyTorch", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
    { name: "Scikit-Learn", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
    { name: "OpenCV", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
    { name: "NumPy", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
    { name: "Pandas", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
    { name: "React", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Node.js", svg: "https://www.svgrepo.com/show/303266/nodejs-icon-logo.svg" },
    { name: "Express", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "MongoDB", svg: "https://www.svgrepo.com/show/331488/mongodb.svg" },
    { name: "JavaScript", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Flutter", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
    { name: "Firebase", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    { name: "HTML", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Bootstrap", svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "GitHub", svg: "https://www.svgrepo.com/show/512317/github-142.svg" }
  ];

  const dragRef = useRef(null);

  // DRAG SCROLL LOGIC (works on mobile + desktop)
  useEffect(() => {
    const slider = dragRef.current;
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener("mousedown", (e) => {
      isDown = true;
      slider.classList.add("active-drag");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener("mouseleave", () => {
      isDown = false;
      slider.classList.remove("active-drag");
    });

    slider.addEventListener("mouseup", () => {
      isDown = false;
      slider.classList.remove("active-drag");
    });

    slider.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2; // scroll speed
      slider.scrollLeft = scrollLeft - walk;
    });

    // ✨ MOBILE TOUCH SUPPORT
    slider.addEventListener("touchstart", (e) => {
      isDown = true;
      startX = e.touches[0].pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener("touchend", () => (isDown = false));
    slider.addEventListener("touchcancel", () => (isDown = false));

    slider.addEventListener("touchmove", (e) => {
      if (!isDown) return;
      const x = e.touches[0].pageX - slider.offsetLeft;
      const walk = (x - startX) * 2;
      slider.scrollLeft = scrollLeft - walk;
    });
  }, []);

  return (
    <div className="skills-wrapper container">
      <h2 className="skills-title">My Skills</h2>

      <div className="drag-scroll-container" ref={dragRef}>
        <Marquee pauseOnHover speed={35} gradient={false}>
          {skills.map((skill, i) => (
            <div className="skill-card" key={i}>
              <img src={skill.svg} alt={skill.name} className="skill-svg" />
              <span>{skill.name}</span>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default Skills;
