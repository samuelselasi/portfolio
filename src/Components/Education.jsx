import React from "react";

const educationData = [
  {
    school: "University of Ghana, Legon",
    degree: "M.Sc. in Computer Science",
    period: "Oct 2024 - Oct 2025",
    badge: "Hero Training",
    color: "#e63946",
  },
  {
    school: "ALX Africa, Nairobi",
    degree: "Certificate in Software Engineering",
    period: "Nov 2022 - Dec 2023",
    badge: "Sidekick Bootcamp",
    color: "#ffa751",
  },
  {
    school: "University of Ghana, Legon",
    degree: "B.Sc. in Biomedical Engineering",
    period: "Oct 2016 - Oct 2020",
    badge: "Origin Story",
    color: "#ffe259",
  },
  {
    school: "IPMC, North-Legon",
    degree: "Certificate in Systems Engineering & Networking",
    period: "Oct 2016 - Mar 2017",
    badge: "Tech Power-Up",
    color: "#9c0402",
  },
];

const Education = () => {
  return (
    <section className="about-onepunch" id="education">
      <h2 className="comic-main-title" style={{ textAlign: "center" }}>
        <span role="img" aria-label="book">
          📚
        </span>{" "}
        Education Journey
      </h2>
      <div className="education-grid">
        {educationData.map((edu, idx) => (
          <div
            className="education-cell comic-edu-cell"
            key={idx}
            style={{ borderColor: edu.color }}
          >
            <div className="comic-edu-badge" style={{ background: edu.color }}>
              {edu.badge}
            </div>
            <strong>{edu.school}</strong>
            <div>{edu.degree}</div>
            <span>{edu.period}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
