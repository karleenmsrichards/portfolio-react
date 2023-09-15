import "../App.css";
import "../CV.css";

export const CVSection = ({
  time,
  subtitle,
  paragraph,
  paragraph2,
  achievementsA,
  achievementsB,
  achievementsC,
  personalAchievementsTitle,
}) => {
  return (
    <div className="experience-subsection-wrapper">
      <p className="position-summary-text">{time}</p>
      <p className="experience-position">{subtitle}</p>
      <p className="position-summary-text">{paragraph}</p>
      <p className="position-summary-text">{paragraph2}</p>
      <p className="position-summary-text achievements-title">
        {personalAchievementsTitle}
      </p>
      <p className="position-summary-text achievments">{achievementsA}</p>
      <p className="position-summary-text achievments">{achievementsB}</p>
      <p className="position-summary-text achievments">{achievementsC}</p>
    </div>
  );
};
