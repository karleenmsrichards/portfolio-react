import "../App.css";
import "../Projects.css";

export const ProjectSectionC = ({
  projectImage,
  projectTitle,
  projectTechStack,
  projectSiteLink,
  projectGithubLink,
  projectRole,
  projectSummary,
}) => {
  return (
    <div className="project-wrapper">
      <div className="page-subtitle-wrapper">
        <h2 className="page-subtitle">
          <span className="bold-text">{projectTitle}</span>
        </h2>
      </div>
      <div className="project-img-text-wrapper">
        <div className="project-text-wrapper">
          <p className="project-role">{projectRole}</p>
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
      </div>
      <img className="project-img" src={projectImage} alt="project" />
    </div>
  );
};
