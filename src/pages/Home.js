import "../App.css";
import "../HomeHero.css";
import { Header } from "../components/Header";
import { HomeHeroMain } from "../components/HomeHeroMain";
import { HomeHeroTechStack } from "../components/HomeHeroTechStack";
import { HomeHeroSoftSkills } from "../components/HomeHeroSoftSkills";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Header } from "./components/Header";
// import { Home } from "./pages/Home";
import { About} from "./About";
import { Resume } from "./Resume";
import { Portfolio } from "./Portfolio";
import { Contact } from "./Contact";

export const Home = () => {
  return (
    <div className="home-hero-section">
      {/* <Header /> */}
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
      {/* <HomeHeroMain />
      <HomeHeroTechStack />
      <HomeHeroSoftSkills /> */}
    </div>
  );
};
