import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";
import image from "../images/pngwing.com.png";

const imageAltText = "Saitama from One Punch Man anime";

const Home = ({ name, title }) => {
  return (
    <section id="home" className="min-height home-onepunch">
      <img className="background home-bg" src={image} alt={imageAltText} />
      <div className="home-comic-card">
        <h1 className="comic-main-title">
          <span role="img" aria-label="punch">
            👊
          </span>{" "}
          {name}
        </h1>
        <h2 className="comic-main-subtitle">{title}</h2>
      </div>
      <div className="comic-arrow">
        <img src={arrowSvg} style={{ height: "3rem", width: "3rem" }} alt="Scroll down" />
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
// This component displays a home section with a background image, title, subtitle, and a scroll down arrow.
