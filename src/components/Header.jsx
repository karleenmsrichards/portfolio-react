import { useState } from "react";
import "../components/Header.css";
import NavBar from "../components/NavBar";

export const Header = () => {
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

      <div id="portfolio-wrapper">
        <a href="/#javascript-projects" className="nav-btn">PORTFOLIO</a>
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
      {showMenu && <NavBar showMenu={showMenu} handleClose={handleClose} />}
    </header>
  );
};
