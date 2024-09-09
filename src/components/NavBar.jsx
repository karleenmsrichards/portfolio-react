import githubIcon from "../images/github-icon.png";
import linkedInIcon from "../images/linkedin-icon.png";
import "animate.css";
import "./NavBar.css";

export const NavBar = ({ showMenu, handleClose, setShowPopup, setShowMenu }) => {
  const handleClick = () => {
    setShowMenu(false);
  };

  const handleContact = () => {
    setShowPopup(true);
    setShowMenu(false);
  };

  return (
    <nav
      showMenu={showMenu}
      className="navbar animate__animated animate__slideInRight"
    >
      <section className="btn">
        <button onClick={handleClose} className="close-btn">
         Close
        </button>
      </section>
      <section className="menu-items">
        <a href="/" className="list-item" id="home" onClick={handleClick}>
          Home
        </a>
        <a
          className="list-item"
          href="https://drive.google.com/file/d/1G9zXUw0_8bQEoiUebnhip_GXwQDRFVv9/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
        >
          CV
        </a>
        <a
          href="/#projects"
          className="list-item"
          onClick={() => {
            handleClick();
            document.getElementById("projects").scrollIntoView();
          }}
        >
          Projects
        </a>
        <a
          href="/#skills"
          className="list-item"
          onClick={() => {
            handleClick();
            document.getElementById("skills").scrollIntoView();
          }}
        >
          Skills
        </a>
        <a
          href="/#tech-stack"
          className="list-item"
          onClick={() => {
            handleClick();
            document.getElementById("tech-stack").scrollIntoView();
          }}
        >
          Tech Stack
        </a>
        <div id="contact">
          <p className="list-item" onClick={handleContact}>
            Contact
          </p>
        </div>
        <div className="social-media-links">
        <a
            href="https://www.linkedin.com/in/karleen-ms-richards/"
            target="_blank"
            rel="noopener noreferrer"
            className="list-item"
          >
            <img src={linkedInIcon} alt="LinkedIn" onClick={handleClick} />
          </a>
          <a
            href="https://github.com/karleenmsrichards"
            target="_blank"
            rel="noopener noreferrer"
            className="list-item"
          >
            <img src={githubIcon} alt="GitHub" onClick={handleClick} />
          </a>
        </div>
      </section>
    </nav>
  );
}
