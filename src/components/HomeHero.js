import { useNavigate } from "react-router-dom";
import heroImage from "../images/homeHeroImg.png";

export const HomeHero = () => {
  const navigate = useNavigate();
  return (
    <div className="home-hero-wrapper">
      <div className="home-hero-text-wrapper">
        <h1>
          Looking <span className="font-style-italic">for</span> a new{" "}
          <span className="text-dark">opportunity</span> to{" "}
          <span>display my</span>{" "}
          <span className="font-style-italic">creativity and</span>{" "}
          <span className="text-dark">skills</span> in{" "}
          <span className="font-style-italic">the</span>{" "}
          <span className="home-hero-text-bgColor">tech</span> industry.
        </h1>
        <div className="home-hero-btn-wrapper">
          <button
            className="home-hero-btn-resume"
            onClick={() => navigate(`/resume`)}
          >
            Resume
          </button>
          <button
            className="home-hero-btn-projects"
            onClick={() => navigate(`/projects`)}
          >
            Projects
          </button>
        </div>
      </div>
      <div className="home-hero-image-wrapper">
        <img
          src={heroImage}
          className="home-hero-image"
          alt="Karleen Richards"
        />
      </div>
    </div>
  );
};
