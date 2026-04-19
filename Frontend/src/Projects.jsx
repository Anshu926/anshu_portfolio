import "./Projects.css";
import proj1 from "./assets/food.webp";
import proj2 from "./assets/wanderlust.jpg";
import proj3 from "./assets/ecome.avif";
import proj4 from "./assets/customer-analytics.png";

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
      desc: "Travel listing system for viewing and managing accommodation details.",
      live: "https://wanderlust-1-jeji.onrender.com/listings",
      code: "https://github.com/Anshu926/wanderlust",
    },
    {
      img: proj3,
      title: "E-Commerce Platform",
      desc: "Scalable e-commerce site with product catalog, cart, and secure checkout.",
      live: "https://ab-fashion.onrender.com/home",
      code: "https://github.com/Anshu926/AB_FASHION",
    },
    {
      img: proj4,
      title: "Customer Behavior Analytics Platform",
      desc: "AI-powered customer analytics platform to predict satisfaction, identify customer segments, and deliver insights through an interactive dashboard.",
      live: "https://chatgpt.com/backend-api/estuary/content?id=file_0000000008607208b1ff7964490afb94&ts=493496&p=fs&cid=1&sig=5494ae6293c7c5e7115a4384581a93f56523828a4ce4b06641b2d05bdd698001&v=0",
      code: "https://github.com/Anshu926/Customer-Analytics-Platform",
    }
  ];

  return (
    <div className="projects-wrapper container">
      <h1 className="projects-title">Projects</h1>

      <div className="projects-grid">
        {projectData.map((proj, index) => (
          <div className="project-card" key={index}>
            <img src={proj.img} className="project-img" alt={proj.title} />

            <div className="project-info">
              <h3>{proj.title}</h3>
              <p>{proj.desc}</p>

              <div className="project-buttons">
                <a href={proj.live} target="_blank" rel="noreferrer" className="project-btn live-btn">
                  Live Demo
                </a>

                <a href={proj.code} target="_blank" rel="noreferrer" className="project-btn code-btn">
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