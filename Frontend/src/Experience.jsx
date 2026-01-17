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
      role: "Trainee — Full Stack Developer",
      duration: "1 Month",
    },
    {
      company: "Cognifyz Technologies (Remote)",
      year: "31 Aug 2024",
      role: "Full Stack Development Intern",
      duration: "1 Month",
    }
  ];

  return (
    <div className="exp-wrapper container">

      <h1 className="section-heading">Experience</h1>
      <br /><br />

      {/* Auto-grid for ANY number of experiences */}
      <div className="exp-two-col">
        {experienceData.map((exp, index) => (
          <div className="exp-box" key={index}>
            <h3 className="title">{exp.company}</h3>
            <p className="year">{exp.year}</p>
            <p className="role">{exp.role}</p>
            <p className="duration">{exp.duration}</p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Experience;
 