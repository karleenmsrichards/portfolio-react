import { useNavigate } from "react-router-dom";

export const AboutMe = () => {
  const navigate = useNavigate();
  return (
    <div className="about-me-wrapper">
      <div className="about-me-title-wrapper">
        <h2 className="about-me-title">
          This is <span className="text-dark bg">me</span>
        </h2>
      </div>
      <div className="about-me-text-wrapper">
        <p className="about-me-text">
          I'm a paragraph. Click here to add your own text and edit me. It's
          easy. Just click “Edit Text” or double click me to add your own
          content and make changes to the font. Feel free to drag and drop me
          anywhere you like on your page. I'm a great place for you to tell a
          story and let your users know a little more about you.
        </p>
        <div className="about-me-skills-wrapper">
          <div className="about-me-skills-content">
            <p>Team Player</p>
            <p className="bg-color-beige">Leadership Skills</p>
          </div>
          <div className="about-me-skills-content">
            <p className="bg-color-black">Problem Solver</p>
            <p>Meticulous</p>
          </div>
          <div className="about-me-skills-content">
            <p>Strategist</p>
            <p className="bg-color-beige">Professional</p>
          </div>
        </div>
        <button onClick={() => navigate("/resume")}>See Full CV</button>
      </div>
    </div>
  );
};
