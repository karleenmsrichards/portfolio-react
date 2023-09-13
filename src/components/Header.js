export const Header = () => {
  return (
    <header>
      <div className="logo-name-wrapper">
        <a href="/" className="logo-name-text">
          I'm Karleen Richards.
        </a>
        <a href="/" className="logo-job-title">
          A <span className="logo-span">Software Engineer</span> and Social
          Justice Activist.
        </a>
      </div>

      <div className="about-me-header-wrapper">
        <a href="/" className="about-me-text-header">
          ABOUT ME
        </a>
      </div>

      <div className="resume-wrapper">
        <a href="/resume" className="resume-text">
          CV
        </a>
      </div>

      <div className="projects-wrapper">
        <a href="/projects" className="projects-text">
          PROJECTS
        </a>
      </div>

      <div className="contact-wrapper">
        <a href="/contact" className="contact-text">
          CONTACT
        </a>
      </div>
      <div className="mobile-header-icon-wrapper">
        <div className="linkedIn-wrapper">
          <a
            target="blank"
            href="https://www.linkedin.com/in/karleen-ms-richards"
            className="linkedIn"
          >
            <img
              className="linkedIn-icon"
              src="https://cdn-icons-png.flaticon.com/128/3128/3128219.png"
              alt="linkedIn"
            />
          </a>
        </div>

        <div className="github-wrapper">
          <a
            target="blank"
            href="https://github.com/karleenmsrichards"
            className="github"
          >
            <img
              className="github-icon"
              src="https://cdn-icons-png.flaticon.com/128/3291/3291695.png"
              alt="Github"
            />
          </a>
        </div>
      </div>
    </header>
  );
};
