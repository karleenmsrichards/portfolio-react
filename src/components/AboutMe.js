import { useNavigate } from "react-router-dom";

export const AboutMe = () => {
  const navigate = useNavigate();
  return (
    <div className="about-me-wrapper">
      <div className="subtitle-wrapper">
        <h2 className="subtitle animate__animated animate__backInLeft">
          This is <span className="text-dark bg">me</span>
        </h2>
      </div>
      <div className="about-me-text-wrapper">
        <p className="about-me-paragraph-text">
          I have always been fascinated with computers and my journey in{" "}
          <span className="text-dark"> tech</span> started when I studied
          Information Technology and excelled at it during my Secondary School
          years. I even remember the black screen and me writing{" "}
          <span className="text-dark">let</span> lol. I also remember memorizing
          the exact meaning of the word{" "}
          <span className="text-dark">algorithm</span>, fun memories indeed.{" "}
        </p>
        <p className="about-me-paragraph-text">
          I also have a knack for puzzles and to be more specific I love a
          challenge, so problem solving is my{" "}
          <span className="text-dark">thing</span>. Not the simple crossword, oh
          no, those are a tad too easy. I love{" "}
          <span className="text-dark">codeword puzzles</span>, they are such a
          blast and those tickle my fancy.
        </p>

        <p className="about-me-paragraph-text">
          I have always remained very passionate about the{" "}
          <span className="text-dark">design</span> and look of my projects and
          I love taking the opportunity to add a slice of my{" "}
          <span className="text-dark">creativity</span> to my projects. I am
          delighted that I have been able to maintain this{" "}
          <span className="text-dark">passion</span> throughout my journey to
          becoming a Software Engineer.
        </p>
        <div className="about-me-skills-wrapper">
          <div className="about-me-skills-content">
            <p>Team Player</p>
            <p className="bg-color-beige">Leadership</p>
          </div>
          <div className="about-me-skills-content">
            <p className="bg-color-black">Problem Solving</p>
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
