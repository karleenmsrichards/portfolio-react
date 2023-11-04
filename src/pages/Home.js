import { HomeHero } from "../components/HomeHero";
import { AboutMe } from "../components/AboutMe";
import { MoreAboutMe } from "../components/MoreAboutMe";

export const Home = () => {
  return (
    <div>
      <HomeHero />
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
      <MoreAboutMe />
    </div>
  );
};
