import "../Footer.css";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-email-wrapper footer-subsection">
        <p className="footer-text-title">Write</p>
        <p>karleenmsrichards@gmail.com</p>
      </div>

      <div className="footer-profiles-wrapper footer-subsection">
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
      <div className="footer-attribution-wrapper">
        <p>© 2023 by Karleen M S Richards</p>
        <p>
          Inspired by{" "}
          <a
            className="attribution-link"
            target="blank"
            href="https://www.wix.com/website-template/view/html/2435?originUrl=https%3A%2F%2Fwww.wix.com%2Fwebsite%2Ftemplates%2Fhtml%2Fportfolio-cv%2Fresumes-cvs&tpClick=view_button&esi=011bfe60-39d6-4083-8cca-a53ebeebd190"
          >
            Wix.com
          </a>
        </p>
      </div>
    </footer>
  );
};
