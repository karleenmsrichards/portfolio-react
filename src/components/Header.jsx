import { useState } from "react";
import "../components/Header.css";
import NavBar from "../components/NavBar";
import githubIcon from "../images/github-icon.png";
import linkedInIcon from "../images/linkedin-icon.png";


export const Header = ({ setShowPopup }) => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu((s) => !s);

  const handleClose = () => setShowMenu(false);

  return (
    <header>
      <div className="header-logo-name-wrapper">
        <a href="/" className="header-logo-name-text">
          Karleen Richards
        </a>
      </div>

      <div id="cv">
        <a className="nav-btn cv-btn" href="https://drive.google.com/file/d/1n7f208HRcLGH9Kh2hBOh_2j9iH-n1_nm/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          CV
        </a>
      </div>

      <div id="projects-wrapper">
        <a href="/#javascript-projects" className="nav-btn">
          PROJECTS
        </a>
      </div>

      <div id="skills-wrapper">
        <a href="/#skills" className="nav-btn">
          SKILLS
        </a>
      </div>

      <div id="tech-stack-wrapper">
        <a href="/#tech-stack" className="nav-btn">
          TECH STACK
        </a>
      </div>

      <div id="contact">
        <p className="nav-btn" onClick={() => setShowPopup(true)}>
          CONTACT
        </p>
      </div>

      <div id="social-media-links">
        <a
          className="nav-btn"
          href="https://github.com/your_username"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="social-media-icon" src={githubIcon} alt="GitHub" />
        </a>

        <a
          className="nav-btn"
          href="https://linkedin.com/in/your_profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="social-media-icon"
            src={linkedInIcon}
            alt="LinkedIn"
          />
        </a>
      </div>

      {showMenu && <NavBar showMenu={showMenu} handleClose={handleClose} />}
    </header>
  );
};
