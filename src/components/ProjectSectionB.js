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
    <div className="project-wrapper">
      <div className="project-img-text-wrapper">
        <img
          className="project-mobile-img"
          src={projectMobileImg}
          alt="project"
        />
        <div className="project-text-wrapper">
          <h3 className="project-title text-dark">{projectTitle}</h3>
          <p className="project-role">{projectRole}</p>
          <p className="project-text">{projectSummary}</p>
          <p className="project-tech-stack-title text-dark">Technology used:</p>
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
    </div>
  );
};
