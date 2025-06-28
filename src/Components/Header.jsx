import React from "react";
import "./Header.css"; // Create this file for header-specific styles

const Header = () => {
  return (
    <div className="header-bar">
      {["Home", "About", "Education", "Portfolio", "Contact"].map((text) => (
        <a
          key={text}
          href={`#${text.toLowerCase()}`}
          className="header-link"
        >
          {text === "Home" && (
            <span role="img" aria-label="punch">
              👊{" "}
            </span>
          )}
          {text}
        </a>
      ))}
    </div>
  );
};

export default Header;
