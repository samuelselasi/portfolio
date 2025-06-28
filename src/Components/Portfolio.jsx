/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of projects that showcase your backend skills,
 * design strengths, and engineering versatility.
 */
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
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
