import { useNavigate } from "react-router-dom";
import heroImage from "../images/homeHeroImg.png";
import "../HomeHero.css";

export const HomeHero = () => {
  const navigate = useNavigate();
  return (
    <div className="home-hero-wrapper">
      <div className="home-hero-text-wrapper">
        <h1>
          I'm looking <span className="font-style-italic">for</span> a new{" "}
          <span className="bold-text">opportunity</span> to{" "}
          <span>display my</span>{" "}
          <span className="font-style-italic">creativity and</span>{" "}
          <span className="bold-text">skills</span> in{" "}
          <span className="font-style-italic">the</span>{" "}
          <span className="green-text-bgBlack">tech</span> industry.
        </h1>
        {/* <div className="home-hero-btn-wrapper">
          <button className="home-hero-btn-cv" onClick={() => navigate(`/cv`)}>
            CV
          </button>
          <button
            className="home-hero-btn-projects"
            onClick={() => navigate(`/projects`)}
          >
            Projects
          </button>
        </div> */}
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
