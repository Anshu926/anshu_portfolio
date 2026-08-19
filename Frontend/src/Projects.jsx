import "./Projects.css";
import proj1 from "./assets/food_ordering.png";
import proj2 from "./assets/wanderlust.png";
import proj3 from "./assets/e_eommerce.png";
import proj4 from "./assets/customer_analysis.png";
import proj5 from "./assets/gesture-calculator.png";

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
      live: "https://project1-eight-gold.vercel.app/",
      code: "https://github.com/Anshu926/SHOPPING-WEBSITE",
    },
    {
      img: proj4,
      title: "Customer Behavior Analytics Platform",
      desc: "AI-powered customer analytics platform to predict satisfaction, identify customer segments, and deliver insights through an interactive dashboard.",
      live: "https://customer-analytics-platform-xoovips4gkx6tcfrzh6mby.streamlit.app/",
      code: "https://github.com/Anshu926/Customer-Analytics-Platform",
    },
    {
      img: proj5,
      title: "Real-Time Virtual Gesture Calculator",
      desc: "AI-powered virtual gesture calculator for real-time interaction and control.",
      live: "https://github.com/Anshu926/Real-Time-Virtual-Gesture-Calculator",
      code: "https://github.com/Anshu926/Real-Time-Virtual-Gesture-Calculator",
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