import { HomeHero } from "./HomeHero";
import { AboutMe } from "./AboutMe";
import { MoreAboutMe } from "./MoreAboutMe";

export const Home = () => {
  return (
    <div>
      <HomeHero />
      <AboutMe />
      <MoreAboutMe />
    </div>
  );
};
