import React from "react";

const projectList = [
  {
    title: "AfriLegal API",
    description:
      "An African constitution API backend built with Python's FastAPI and PostgreSQL. Includes a minimal landing page using HTML and CSS.",
    url: "https://github.com/samuelselasi/AfriLegal_API",
  },
  {
    title: "Airbnb Clone",
    description:
      "A full-stack clone of Airbnb using Flask, MySQL, and JavaScript. Includes dynamic content rendering and static page design.",
    url: "https://github.com/samuelselasi/AirBnB_clone_v4",
  },
  {
    title: "Simple Shell",
    description:
      "A custom Linux shell built with C. Supports aliases, separators, file-based input, and basic command execution on Ubuntu.",
    url: "https://github.com/samuelselasi/simple_shell",
  },
  {
    title: "WordPress Business Sites",
    description:
      "Designed and deployed websites for agribusiness and consulting firms using WordPress. Includes PM360 Consult, FESF Foundation, and Inicio BD.",
    url: "https://www.fesffoundation.com/",
  },
];

const Portfolio = () => {
  return (
    <section className="about-onepunch" id="portfolio">
      <h2 className="comic-main-title" style={{ textAlign: "center" }}>
        <span role="img" aria-label="star">
          🌟
        </span>{" "}
        Portfolio
      </h2>
      <div className="portfolio-comic-container" style={{ paddingTop: "3rem" }}>
        {projectList.map((project) => (
          <div className="portfolio-comic-card" key={project.title}>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <h3>{project.title}</h3>
            </a>
            <p className="small">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
