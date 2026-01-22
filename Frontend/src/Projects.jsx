import "./Projects.css";
import proj1 from "./assets/food.webp";
import proj2 from "./assets/wanderlust.jpg";
import proj3 from "./assets/ecome.avif";

function Projects() {
  const projectData = [
    {
      img: proj1,
      title: "Food Ordering System",
      desc: "Dynamic food ordering platform with menus, ordering flow, and responsive UI.",
      live: "https://meal-matka-3.onrender.com/home",
      code: "https://github.com/Anshu926/meal_matka",
    },
    {
      img: proj2,
      title: "Destination Listing Platform",
      desc: "A lightweight travel listing system for viewing and managing accommodation details.",
      live: "https://wanderlust-1-jeji.onrender.com/listings",
      code: "https://github.com/Anshu926/wanderlust",
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
