export const Footer = () => {
  return (
    <footer>
      <div class="footer-number-wrapper footer-subsection">
        <p class="footer-text-title">Call</p>
        <p>+447706529992</p>
      </div>

      <div class="footer-email-wrapper footer-subsection">
        <p class="footer-text-title">Write</p>
        <p>karleenmsrichards@gmail.com</p>
      </div>

      <div class="footer-profiles-wrapper footer-subsection">
        <p class="footer-text-title">Follow</p>
        <div class="profiles-imgs-wrapper">
          <p>
            <a
              target="blank"
              href="https://www.linkedin.com/in/karleen-ms-richards"
            >
              <img
                class="footer-linkedIn-img"
                src="https://cdn-icons-png.flaticon.com/128/3128/3128219.png"
                alt="linkedIn"
              />
            </a>
            <a target="blank" href="https://github.com/karleenmsrichards">
              <img
                class="footer-github-img"
                src="https://cdn-icons-png.flaticon.com/128/1240/1240971.png"
                alt="Github"
              />
            </a>
          </p>
        </div>
      </div>
      <div class="footer-attribution-wrapper">
        <p>© 2023 by Karleen M S Richards</p>
        <p>
          Inspired by{" "}
          <a
            className="footer-attribution-link"
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
