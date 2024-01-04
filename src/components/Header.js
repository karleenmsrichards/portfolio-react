import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "../Header.css";
import NavBar from "../NavBar";

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

      <div className="header-home-wrapper">
        <a href="/" className="header-home-text">
          HOME
        </a>
      </div>
      <div className="header-cv-wrapper">
        <a href="/resume" className="header-cv-text">
          RESUME
        </a>
      </div>

      <div className="header-projects-wrapper">
        <a href="/portfolio" className="header-projects-text">
          PORTFOLIO
        </a>
      </div>

      <div className="header-contact-wrapper">
        <a href="/contact" className="contact-text">
          CONTACT
        </a>
      </div>

      {/* <div className="mobile-header-top-wrapper">
        <div className="header-mobile-icon-wrapper">
          <div className="header-linkedIn-wrapper">
            <a
              target="blank"
              href="https://www.linkedin.com/in/karleen-ms-richards"
            >
              <img
                className="header-linkedIn-icon"
                src="https://cdn-icons-png.flaticon.com/128/3128/3128219.png"
                alt="linkedIn"
              />
            </a>
          </div>

          <div className="header-github-wrapper">
            <a
              target="blank"
              href="https://github.com/karleenmsrichards"
              className="github"
            >
              <img
                className="header-github-icon"
                src="https://cdn-icons-png.flaticon.com/128/3291/3291695.png"
                alt="Github"
              />
            </a>
          </div>
        </div>
        <button onClick={toggleMenu} className="header-menu-wrapper">
          <FontAwesomeIcon
            className="fa-2x"
            icon={faBars}
            style={{ marginBottom: "5px" }}
          />
        </button>
      </div>
      <div className="header-desktop-icon-wrapper">
        <div className="header-linkedIn-wrapper">
          <a
            target="blank"
            href="https://www.linkedin.com/in/karleen-ms-richards"
          >
            <img
              className="header-linkedIn-icon"
              src="https://cdn-icons-png.flaticon.com/128/3128/3128219.png"
              alt="linkedIn"
            />
          </a>
        </div>

        <div className="header-github-wrapper">
          <a
            target="blank"
            href="https://github.com/karleenmsrichards"
            className="github"
          >
            <img
              className="header-github-icon"
              src="https://cdn-icons-png.flaticon.com/128/3291/3291695.png"
              alt="Github"
            />
          </a>
        </div>
      </div> */}
      {showMenu && <NavBar showMenu={showMenu} handleClose={handleClose} />}
    </header>
  );
};
