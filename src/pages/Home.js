import "../App.css";
import "../HomeHero.css";
import { HomeHeroMain } from "../components/HomeHeroMain";
import { HomeHeroTechStack } from "../components/HomeHeroTechStack";
import { HomeHeroSoftSkills } from "../components/HomeHeroSoftSkills";

export const Home = () => {
  return (
    <div className="home-hero-section">
      <HomeHeroMain />
      <HomeHeroTechStack />
      <HomeHeroSoftSkills />
    </div>
  );
};
