import "../App.css";
import "../Projects.css";

export const ProjectSectionB = ({
  projectMobileImg,
  projectTitle,
  projectTechStack,
  projectSiteLink,
  projectGithubLink,
  projectRole,
  projectSummary,
}) => {
  return (
    <div className="project-wrapper-b">
      <div className="project-subtitle-wrapper">
        <h2 className="project-subtitle">
          <span className="bold-text">{projectTitle}</span>
        </h2>
        <p className="project-role-b">{projectRole}</p>
      </div>
      <div className="project-img-text-wrapper-c">
        <div className="project-text-wrapper">
          <p className="project-text">{projectSummary}</p>
          <p className="project-tech-stack-title bold-text">Technology used:</p>
          <p className="project-tech-stack">{projectTechStack}</p>
          <div className="project-links-wrapper">
            <a
              href={projectSiteLink}
              rel="noreferrer"
              target="blank"
              className="project-link"
            >
              Visit Site
            </a>
            <a
              href={projectGithubLink}
              rel="noreferrer"
              target="blank"
              className="project-link"
            >
              Github Repo
            </a>
          </div>
        </div>
        <div className="project-image-wrapper">
          <img
            className="project-mobile-img-c"
            src={projectMobileImg}
            alt="project"
          />
        </div>
      </div>
    </div>
  );
};
