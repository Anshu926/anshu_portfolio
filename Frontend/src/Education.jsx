import "./Education.css";

function Education() {
  const educationData = [
    {
      title: "B.Tech - Information Technology",
      year: "2023 - 2027",
      school: "St. Vincent Pallotti College Of Engineering & Technology , Nagpur",
      grade: "CGPA : 9.00"
    },
    {
      title: "Senior Secondary (XII) - Science",
      year: "2023",
      school: "Vidhya Vikas Junior Science College , Wardha",
      grade: "76.83%"
    },
    {
      title: "Secondary (X) - General",
      year: "2021",
      school: "Gunj Convent , Wardha",
      grade: "88.40%"
    }
  ];

  const experienceData = [
    {
    company: "Unified Mentor (Remote)",
    year: "25 Aug 2024 – 25 Sep 2024",
    duration: "1 Month",
    role: "Full Stack Web Development Intern",
    description:
      "Developed an E-Commerce Platform with product listing, management, and cart features. Improved backend workflows and built responsive UI to enhance customer experience."
  },
  {
    company: "Wire Fusion Metrics (Remote)",
    year: "15 Sep 2025 – 14 Oct 2025",
    duration: "1 Month",
    role: "Trainee — Full Stack Developer",
    description:
      "Built a Task Management Application with team collaboration, task priorities, and progress tracking. Focused on scalable backend, responsive UI, and efficient workflow design."
  },
  ];

  return (
    <div className="edu-exp-wrapper container">

      <div className="edu-exp-headings">
        <h1>Education</h1>
        <h1>Experience</h1>
      </div>

      <div className="edu-exp-grid">
        
        {/* LEFT COLUMN — EDUCATION */}
        <div className="edu-column">
          {educationData.map((edu, index) => (
            <div className="card" key={index}>
              <h3 className="card-title">{edu.title}</h3>
              <p className="card-year">{edu.year}</p>
              <p className="card-school">{edu.school}</p>
              <p className="card-grade">{edu.grade}</p>
            </div>
          ))}
        </div>

        {/* RIGHT COLUMN — EXPERIENCE */}
        <div className="exp-column">
          {experienceData.map((exp, index) => (
            <div className="card" key={index}>
              <h3 className="card-title">{exp.company}</h3>
              <p className="card-year">{exp.year}</p>
              <p className="card-duration">Duration: {exp.duration}</p>
              <p className="card-role">{exp.role}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Education;
