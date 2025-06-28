import React from "react";
import PropTypes from "prop-types";

import devDotToIcon from "../images/socials/devdotto.svg";
import envelopeIcon from "../images/socials/envelope.svg";
import gitHubIcon from "../images/socials/github.svg";
import instagramIcon from "../images/socials/instagram.svg";
import linkedInIcon from "../images/socials/linkedin.svg";
import mediumIcon from "../images/socials/medium.svg";
import twitterIcon from "../images/socials/twitter.svg";
import youTubeIcon from "../images/socials/youtube.svg";

const Footer = (props) => {
  const { devDotTo, email, gitHub, instagram, linkedIn, medium, name, twitter, youTube } = props;

  return (
    <footer
      id="footer"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2.5rem",
        padding: "5rem 0 3rem",
        background: "linear-gradient(135deg, rgba(255,226,89,0.85) 0%, rgba(255,167,81,0.85) 100%)",
        borderTop: "6px solid #e63946",
        width: "100vw",
        boxShadow: "0 -4px 24px #e6394622, 0 0 0 8px #fffbe6",
        fontFamily: "'Bangers', 'Montserrat', sans-serif",
        marginTop: "2rem",
        position: "relative",
        zIndex: 2,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2.5rem",
          flexWrap: "wrap",
        }}
      >
        {email && (
          <a href={`mailto:${email}`} className="footer-link" aria-label="Email">
            <img src={envelopeIcon} alt="email" className="socialIcon" />
          </a>
        )}
        {devDotTo && (
          <a
            href={`https://dev.to/${devDotTo}`}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            aria-label="Dev.to"
          >
            <img src={devDotToIcon} alt="Dev.to" className="socialIcon" />
          </a>
        )}
        {gitHub && (
          <a
            href={`https://github.com/${gitHub}`}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            aria-label="GitHub"
          >
            <img src={gitHubIcon} alt="GitHub" className="socialIcon" />
          </a>
        )}
        {instagram && (
          <a
            href={`https://www.instagram.com/${instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            aria-label="Instagram"
          >
            <img src={instagramIcon} alt="Instagram" className="socialIcon" />
          </a>
        )}
        {linkedIn && (
          <a
            href={`https://www.linkedin.com/in/${linkedIn}`}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            aria-label="LinkedIn"
          >
            <img src={linkedInIcon} alt="LinkedIn" className="socialIcon" />
          </a>
        )}
        {medium && (
          <a
            href={`https://medium.com/@${medium}`}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            aria-label="Medium"
          >
            <img src={mediumIcon} alt="Medium" className="socialIcon" />
          </a>
        )}
        {twitter && (
          <a
            href={`https://twitter.com/${twitter}`}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            aria-label="Twitter"
          >
            <img src={twitterIcon} alt="Twitter" className="socialIcon" />
          </a>
        )}
        {youTube && (
          <a
            href={`https://www.youtube.com/c/${youTube}`}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            aria-label="YouTube"
          >
            <img src={youTubeIcon} alt="YouTube" className="socialIcon" />
          </a>
        )}
      </div>
      <p
        className="small"
        style={{
          marginTop: 0,
          color: "#e63946",
          fontFamily: "'Bangers', cursive",
          fontSize: "1.2rem",
          textShadow: "1px 1px 0 #fff, 2px 2px 0 #e6394622",
        }}
      >
        Created by {name}
      </p>
      <style>
        {`
          .footer-link {
            background: #fffbe6;
            border: 3px solid #e63946;
            border-radius: 50%;
            padding: 0.5rem;
            margin: 0 0.2rem;
            transition: transform 0.2s cubic-bezier(.68,-0.55,.27,1.55), box-shadow 0.2s;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 2px 8px #e6394622;
          }
          .footer-link:hover {
            background: #ffe259;
            box-shadow: 0 4px 16px #e6394644, 0 0 0 6px #fffbe6;
            transform: scale(1.18) rotate(-5deg);
            border-color: #9c0402;
          }
          .socialIcon {
            height: 32px;
            width: 32px;
            display: block;
          }
        `}
      </style>
    </footer>
  );
};

Footer.defaultProps = {
  name: "",
};

Footer.propTypes = {
  devDotTo: PropTypes.string,
  email: PropTypes.string,
  gitHub: PropTypes.string,
  instagram: PropTypes.string,
  linkedIn: PropTypes.string,
  medium: PropTypes.string,
  name: PropTypes.string.isRequired,
  primaryColor: PropTypes.string,
  twitter: PropTypes.string,
  youTube: PropTypes.string,
};

export default Footer;
