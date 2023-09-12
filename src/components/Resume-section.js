import "../App.css";
import "../Resume.css";

export const ResumeSection = ({ time, subtitle, paragraph, paragraph2 }) => {
  return (
    <div className="experience-subsection-wrapper">
      <p className="position-summary-text">{time}</p>
      <p className="experience-position">{subtitle}</p>
      <p className="position-summary-text">{paragraph}</p>
      <p className="position-summary-text">{paragraph2}</p>
    </div>
  );
};
