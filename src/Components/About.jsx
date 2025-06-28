import React from "react";
import image from "../images/motion-background.jpg";

const imageAltText = "comic burst background in red and yellow";

const description =
  "I'm a Master's student in Computer Science at the University of Ghana, specializing in backend development. Like Saitama, I believe in relentless improvement and delivering results with a single, decisive punch. My code is clean, efficient, and always ready for the next challenge!";

const skillsList = [
  "Backend development",
  "API design (with a punch!)",
  "Database mastery",
  "Containerization (Docker Hero)",
  "Web server configuration",
  "Version control (Git Justice)",
  "Comic-style UI/UX",
  "Technical writing",
  "Project management",
];

const detailOrQuote =
  "“100 push-ups, 100 sit-ups, 100 squats, and a 10km run EVERY SINGLE DAY!” — I bring the same discipline to backend engineering. My mission: build systems so strong, they never need a second punch.";

const About = () => {
  return (
    <section className="about-onepunch" id="about">
      <img className="background comic-bg" src={image} alt={imageAltText} />
      <div className="about-comic-card punch-in">
        <h2>
          <span role="img" aria-label="punch">
            👊
          </span>{" "}
          About Myself
        </h2>
        <p className="large">{description}</p>
        <hr className="comic-hr" />
        <ul className="skills-comic-list">
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr className="comic-hr" />
        <p className="comic-quote">{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
