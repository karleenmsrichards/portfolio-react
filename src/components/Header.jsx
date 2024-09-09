import { useState } from "react";
import "../components/Header.css";
import { NavBar } from "../components/NavBar";
import githubIcon from "../images/github-icon.png";
import linkedInIcon from "../images/linkedin-icon.png";

export const Header = ({ setShowPopup }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClose = () => setShowMenu(false);

  return (
    <header>
      <div className="header-logo-name-wrapper">
        <a href="/" className="header-logo-name-text">
          <span>Karleen</span> <span>Richards</span>
        </a>
      </div>
      <div className="header-menu-container">
        <button className="menu-btn" onClick={() => setShowMenu(true)}>
          Menu
        </button>
      </div>
      <div id="cv">
        <a className="nav-btn cv-btn" href="https://drive.google.com/file/d/1G9zXUw0_8bQEoiUebnhip_GXwQDRFVv9/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          CV
        </a>
      </div>

      <div id="projects-wrapper">
        <a href="/#projects" className="nav-btn">
          Projects
        </a>
      </div>

      <div id="skills-wrapper">
        <a href="/#skills" className="nav-btn">
          Skills
        </a>
      </div>

      <div id="tech-stack-wrapper">
        <a href="/#tech-stack" className="nav-btn">
          Tech Stack
        </a>
      </div>

      <div id="contact">
        <p className="nav-btn" onClick={() => setShowPopup(true)}>
          Contact
        </p>
      </div>

      <div id="social-media-links">
      <a
          className="nav-btn"
          href="https://www.linkedin.com/in/karleen-ms-richards/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="social-media-icon"
            src={linkedInIcon}
            alt="LinkedIn"
          />
        </a>
        <a
          className="nav-btn"
          href="https://github.com/karleenmsrichards"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="social-media-icon" src={githubIcon} alt="GitHub" />
        </a>
      </div>

      {showMenu && <NavBar showMenu={showMenu} handleClose={handleClose} setShowPopup={setShowPopup} setShowMenu={setShowMenu}/>}
      </header>
  );
};
