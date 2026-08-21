import "./Education.css";

function Education() {
  const educationData = [
    {
      title: "B.Tech - Information Technology",
      year: "2023 - 2027",
      school: "St. Vincent Pallotti College , Nagpur",
      grade: "CGPA : 8.5+",
    },
    {
      title: "Senior Secondary (XII) - Science",
      year: "2023",
      school: "Vidhya Vikas Junior Science College , Wardha",
      grade: "76.83%",
    },
    {
      title: "Secondary (X) - General",
      year: "2021",
      school: "Gunj Convent , Wardha",
      grade: "88.40%",
    },
  ];

  return (
    <div className="edu-exp-wrapper container">

      <h1 className="edu-section-heading">Education</h1>

      {/* 10th LEFT + 12th RIGHT */}
      <div className="edu-two-col">

        {/* LEFT (10th) */}
        <div className="col-box">
          <h3 className="edu-title">{educationData[2].title}</h3>
          <p className="edu-year">{educationData[2].year}</p>
          <p className="edu-school">{educationData[2].school}</p>
          <p className="edu-grade">{educationData[2].grade}</p>
        </div>

        {/* RIGHT (12th) */}
        <div className="col-box">
          <h3 className="edu-title">{educationData[1].title}</h3>
          <p className="edu-year">{educationData[1].year}</p>
          <p className="edu-school">{educationData[1].school}</p>
          <p className="edu-grade">{educationData[1].grade}</p>
        </div>

      </div>

      {/* B.Tech — Only LEFT side */}
      <div className="edu-two-col">

        {/* LEFT (B.Tech) */}
        <div className="col-box">
          <h3 className="edu-title">{educationData[0].title}</h3>
          <p className="edu-year">{educationData[0].year}</p>
          <p className="edu-school">{educationData[0].school}</p>
          <p className="edu-grade">{educationData[0].grade}</p>
        </div>

        {/* RIGHT (Hidden for now) */}
        <div className="col-box right-empty"></div>

      </div>

    </div>
  );
}

export default Education;
