import "../App.css";
import "../Resume.css";

export const ResumeSection = ({
  time,
  subtitle,
  paragraph,
  paragraph2,
  paragraph3,
  achievementsA,
  achievementsB,
  achievementsC,
  personalAchievementsTitle,
}) => {
  return (
    <div className="experience-subsection-wrapper">
      <p className="position-summary-text">{time}</p>
      <p className="experience-position">{subtitle}</p>
      <p className="position-summary-text">{paragraph2}</p>
      <p className="position-summary-text">{paragraph}</p>
      <p className="position-summary-text">{paragraph3}</p>
      <p className="position-summary-text achievements-title">
        {personalAchievementsTitle}
      </p>
      <p className="position-summary-text achievments">{achievementsA}</p>
      <p className="position-summary-text achievments">{achievementsB}</p>
      <p className="position-summary-text achievments">{achievementsC}</p>
    </div>
  );
};
