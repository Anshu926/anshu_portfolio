import "./Experience.css";

function Experience() {
  const experienceData = [
    {
      company: "Unified Mentor (Remote)",
      year: "25 Aug 2024 – 25 Sep 2024",
      role: "Full Stack Web Development Intern",
      duration: "1 Month",
    },
    {
      company: "Wire Fusion Metrics (Remote)",
      year: "15 Sep 2025 – 14 Oct 2025",
      role: "Trainee — Full Stack Developer Intern",
      duration: "1 Month",
    },
    {
      company: "IT DAKSH - Nagpur (Remote + Onsite)",
      year: "22 January 2026 – 22 July 2026",
      role: "Advanced Full-Stack Developer & AI/ML Intern",
      duration: "6 Months",
    }
  ];

  return (
    <div className="exp-wrapper container">

      <h1 className="exp-section-heading">Experience</h1>

      {/* Auto-grid for ANY number of experiences */}
      <div className="exp-two-col">
        {experienceData.map((exp, index) => (
          <div className="exp-box" key={index}>
            <h3 className="exp-company">{exp.company}</h3>
            <p className="exp-year">{exp.year}</p>
            <p className="exp-role">{exp.role}</p>
            <p className="exp-duration">{exp.duration}</p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Experience;