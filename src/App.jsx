/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import Education from "./Components/Education";
import bgImage from "./images/pngwing.com_1.png";
import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Samuel Selasi",
  title: "Software Engineer",
  email: "sskporvie001@st.ug.edu.gh",
  gitHub: "samuelselasi",
  instagram: "",
  linkedIn: "samuel-selasi-kporvie",
  medium: "onepunchcoder",
  twitter: "",
  youTube: "OnePunchCoder",
};

// Define primary and secondary colors for the theme
const primaryColor = "#9c0402";
const secondaryColor = "#d2eff1";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <div
        className="about-onepunch comic-bg-wrap"
        style={{
          background: `linear-gradient(135deg, rgba(255,226,89,0.7) 0%, rgba(255,167,81,0.7) 100%), url(${bgImage}) center/cover no-repeat fixed`,
          width: "100vw",
        }}
      >
        <Education />
        <Portfolio />
        <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
      </div>
    </div>
  );
};

export default App;
