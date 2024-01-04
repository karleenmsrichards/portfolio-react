import "../App.css";
import "../Portfolio.css";

export const PortfolioSectionA = ({
  portfolioImage,
  portfolioTitle,
  portfolioTechStack,
  portfolioSiteLink,
  portfolioGithubLink,
  portfolioRole,
  portfolioSummary,
}) => {
  return (
    <div className="portfolio-wrapper">
      <div className="portfolio-subtitle-wrapper">
        <h2 className="portfolio-subtitle">
          <span className="bold-text">{portfolioTitle}</span>
        </h2>
        <p className="portfolio-role">{portfolioRole}</p>
      </div>
      <div className="portfolio-img-text-wrapper">
        <div className="portfolio-text-wrapper">
          <p className="portfolio-text">{portfolioSummary}</p>
          <p className="portfolio-tech-stack-title bold-text">Technology used:</p>
          <p className="portfolio-tech-stack">{portfolioTechStack}</p>
          <div className="portfolio-links-wrapper">
            <a
              href={portfolioSiteLink}
              rel="noreferrer"
              target="blank"
              className="portfolio-link"
            >
              Visit Site
            </a>
            <a
              href={portfolioGithubLink}
              rel="noreferrer"
              target="blank"
              className="portfolio-link"
            >
              Github Repo
            </a>
          </div>
        </div>
      </div>
      <div className="portfolio-image-wrapper">
        <img className="portfolio-img-desktop" src={portfolioImage} alt="portfolio" />
      </div>
    </div>
  );
};
