import { HomeHero } from "../components/HomeHero";
import { AboutMe } from "../components/AboutMe";
import { MoreAboutMe } from "../components/MoreAboutMe";

export const Home = () => {
  return (
    <div>
      <HomeHero />
      <AboutMe />
      <MoreAboutMe />
    </div>
  );
};
