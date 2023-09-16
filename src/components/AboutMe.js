import "../AboutMe.css";
import { useNavigate } from "react-router-dom";

export const AboutMe = () => {
  const navigate = useNavigate();
  return (
    <div className="about-me-wrapper">
      <div className="about-me-subtitle-wrapper">
        <h2 className="about-me-subtitle">
          This is <span className="bold-text">me</span>
        </h2>
      </div>
      <div className="about-me-text-wrapper">
        <p className="about-me-paragraph-text">
          I have always been fascinated with computers and my journey in{" "}
          <span className="bold-text"> tech</span> started when I studied
          Information Technology and excelled at it during my Secondary School
          years. I even remember the black screen and me writing{" "}
          <span className="bold-text">let</span> lol. I also remember memorizing
          the exact meaning of the word{" "}
          <span className="bold-text">algorithm</span>, fun memories indeed.{" "}
        </p>
        <p className="about-me-paragraph-text">
          I also have a knack for puzzles and to be more specific, I love a
          challenge, so problem solving is my{" "}
          <span className="bold-text">thing</span>. Not the simple crossword, oh
          no, those are a tad too easy. I love{" "}
          <span className="bold-text">codeword puzzles</span>, they are such a
          blast and those brain workouts tickles my fancy.
        </p>

        <p className="about-me-paragraph-text">
          I have remained very passionate about the{" "}
          <span className="bold-text">design</span> and layout of my projects
          and I love taking the opportunity to add a slice of my{" "}
          <span className="bold-text">creativity</span> to them. This site was
          inspired by{" "}
          <a
            className="attribution-link"
            target="blank"
            href="https://www.wix.com/website-template/view/html/2435?originUrl=https%3A%2F%2Fwww.wix.com%2Fwebsite%2Ftemplates%2Fhtml%2Fportfolio-cv%2Fresumes-cvs&tpClick=view_button&esi=011bfe60-39d6-4083-8cca-a53ebeebd190"
          >
            Wix.com
          </a>{" "}
          , I fell for this design but it didn't feel complete until I added a
          touch of my magic. I am delighted that I have been able to maintain my
          creativity and <span className="bold-text">passion</span> for design
          throughout my journey to becoming a Software Engineer.
        </p>
        <div className="about-me-skills-wrapper">
          <div className="about-me-skills-text">
            <p>Strategist</p>
            <p className="about-me-skills-grey-text">Team Player</p>
          </div>
          <div className="about-me-skills-text">
            <p className="about-me-skills-black-bg">Problem Solving</p>
            <p>Meticulous</p>
          </div>
          <div className="about-me-skills-text">
            <p>Professional</p>
            <p className="about-me-skills-grey-text">Communication</p>
          </div>
        </div>
        <button onClick={() => navigate("/resume")}>See Full CV</button>
      </div>
    </div>
  );
};
