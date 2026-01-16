import "./Skills.css";
import Marquee from "react-fast-marquee";

function Skills() {
  const skills = [
    {
      name: "HTML",
      svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "Bootstrap",
      svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    {
      name: "React",
      svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Node.js",
      svg: "https://www.svgrepo.com/show/303266/nodejs-icon-logo.svg",
    },
    {
      name: "Express",
      svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      name: "MongoDB",
      svg: "https://www.svgrepo.com/show/331488/mongodb.svg",
    },
    {
      name: "GitHub",
      svg: "https://www.svgrepo.com/show/512317/github-142.svg",
    },
    {
      name: "Firebase",
      svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    },
    {
      name: "Flutter",
      svg: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    }
  ];

  return (
    <div className="skills-wrapper" id="skills">
      <h2 className="skills-title">My Skills</h2>

      <Marquee
        pauseOnHover
        speed={40}
        gradient={false}
      >
        {skills.map((skill, i) => (
          <div className="skill-card" key={i}>
            <img src={skill.svg} alt={skill.name} className="skill-svg" />
            <span>{skill.name}</span>
          </div>
        ))}
      </Marquee>
    </div>
  );
}

export default Skills;
