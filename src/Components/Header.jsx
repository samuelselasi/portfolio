import React from "react";

const headerStyle = {
  position: "fixed",
  display: "flex",
  justifyContent: "center",
  gap: "2rem",
  background: "rgba(255,255,255,0.92)",
  padding: "1rem 0.5rem",
  top: 0,
  width: "100%",
  zIndex: 10,
  boxShadow: "0 4px 16px rgba(230,57,70,0.08)",
  borderBottom: "4px solid #e63946",
  fontFamily: "'Bangers', 'Montserrat', sans-serif",
  letterSpacing: "1px",
};

const linkStyle = {
  color: "#e63946",
  fontSize: "1.5rem",
  textDecoration: "none",
  padding: "0.3rem 1.2rem",
  borderRadius: "12px",
  transition: "all 0.2s cubic-bezier(.68,-0.55,.27,1.55)",
  fontFamily: "'Bangers', cursive",
  position: "relative",
};

const Header = () => {
  return (
    <div style={headerStyle}>
      {["Home", "About", "Education", "Portfolio", "Contact"].map((text) => (
        <a key={text} href={`#${text.toLowerCase()}`} style={linkStyle} className="header-link">
          {text === "Home" && (
            <span role="img" aria-label="punch">
              👊{" "}
            </span>
          )}
          {text}
        </a>
      ))}
      <style>
        {`
          .header-link:hover {
            background: #ffe259;
            color: #9c0402;
            box-shadow: 0 2px 12px #ffa75199;
            transform: scale(1.12) rotate(-2deg);
            text-shadow: 2px 2px 0 #fff, 4px 4px 0 #e63946;
          }
        `}
      </style>
    </div>
  );
};

export default Header;
