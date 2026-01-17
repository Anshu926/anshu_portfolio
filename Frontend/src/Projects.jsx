import "./Projects.css";
import proj1 from "./assets/food.webp";
import proj2 from "./assets/task.avif";
import proj3 from "./assets/ecome.avif";

function Projects() {
  const projectData = [
    {
      img: proj1,
      title: "Online Food Ordering System",
      desc: "Dynamic food ordering platform with menus, ordering flow, and responsive UI.",
      live: "https://meal-matka-3.onrender.com/home",
      code: "https://github.com/Anshu926/meal_matka",
    },
    {
      img: proj2,
      title: "Task Management Application",
      desc: "Full-stack productivity app for creating, updating, and managing tasks.",
      live: "https://anshu926-task-management-software.onrender.com/home",
      code: "https://github.com/Anshu926/Task_Management_Software",
    },
    {
      img: proj3,
      title: "E-Commerce Platform",
      desc: "Scalable e-commerce site with product catalog, cart, and secure checkout.",
      live: "https://e-com-e.onrender.com/home",
      code: "https://github.com/Anshu926/E_com_E",
    }
  ];

  return (
    <div className="projects-wrapper container">
      <h1 className="projects-title">Projects</h1>
      <br />
      <div className="projects-grid">
        {projectData.map((proj, index) => (
          <div className="project-card" key={index}>

            <div className="gloss"></div>

            <img src={proj.img} className="project-img" alt="" />

            <div className="project-info">
              <h3>{proj.title}</h3>
              <p>{proj.desc}</p>

              <div className="project-buttons">
                <a href={proj.live} target="_blank" className="project-btn live-btn">
                  Live Demo
                </a>
                <a href={proj.code} target="_blank" className="project-btn code-btn">
                  View Code
                </a>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
