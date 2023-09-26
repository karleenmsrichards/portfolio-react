import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "animate.css";
import "./NavBar.css";

function NavBar({ showMenu, handleClose }) {
  return (
    <nav
      showMenu={showMenu}
      className="navbar animate__animated animate__slideInRight"
    >
      <section className="btn">
        <button onClick={handleClose} className="close-btn">
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </section>
      <section className="menu-items">
        <a href="/" className="list-item" id="home">
          Home
        </a>
        <a href="/" className="list-item">
          About Me
        </a>
        <a href="/cv" className="list-item">
          CV
        </a>
        <a href="/projects" className="list-item">
          Projects
        </a>
        <a href="/contact" className="list-item">
          Contact
        </a>
      </section>
    </nav>
  );
}

export default NavBar;
