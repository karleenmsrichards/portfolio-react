import "../components/Footer.css";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-email-wrapper footer-subsection">
        <p className="footer-text-title">Write</p>
        <p>karleenmsrichards@gmail.com</p>
      </div>

      <div className="footer-profiles-wrapper">
        <p className="footer-text-title">Follow</p>
        <div className="footer-profiles-iconss-wrapper">
          <p>
            <a
              target="blank"
              href="https://www.linkedin.com/in/karleen-ms-richards"
            >
              <img
                className="footer-linkedIn-icon"
                src="https://cdn-icons-png.flaticon.com/128/3128/3128219.png"
                alt="linkedIn"
              />
            </a>
            <a target="blank" href="https://github.com/karleenmsrichards">
              <img
                className="footer-github-icon"
                src="https://cdn-icons-png.flaticon.com/128/1240/1240971.png"
                alt="Github"
              />
            </a>
          </p>
        </div>
      </div>
      <div className="footer-copyright-wrapper">
        <p>© 2024 by Karleen M S Richards</p>
      </div>
    </footer>
  );
};
