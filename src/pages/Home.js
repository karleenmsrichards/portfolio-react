import "../App.css";
import { HomeHero } from "../components/HomeHero";
import { JavaScriptProjects } from "../components/JavascriptProjects";
import { SkillCards } from "../components/SkillCards";
import { TechStack } from "../components/TechStack";


export const Home = () => {
  return (
    <div className="home-container">
      <HomeHero />
      <JavaScriptProjects />
      <SkillCards />
      <TechStack />
  </div>
  );
};
