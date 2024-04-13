import "../pages/Home.css";
import "../App.css";
import "../components/HomeHero.css";
import portfolioImgMobile from "../images/portfolio-img-mobile.png"
import githubIcon from "../images/github-icon.png"
import linkedInIcon from "../images/linkedin-icon.png"

 
export const HomeHero = () => {
  
  return (
    <div className="home-hero-container">
      <div className="home-hero-intro-container">
        <div className="home-hero-img-container">
          <img className="home-hero-img" src={portfolioImgMobile} alt="Karleen Richards"/>
        </div>
        <div className="home-hero-intro-text-container">
          <h1 >Hi I'm <span>Karleen</span>,</h1>
          <p className="home-hero-intro-text">Software Development graduate. I enjoy tackling challenges through problem solving and using my creativity to craft solutions from the ground up.</p>
        </div>
      </div>
      {/* <div className="home-hero-social-media-icon-container">
        <a href="https://github.com/your_username" target="_blank" rel="noopener noreferrer">
          <img className="home-hero-social-media-icon" src={githubIcon} alt="GitHub" />
        </a>
        <a href="https://linkedin.com/in/your_profile" target="_blank" rel="noopener noreferrer">
           <img  className="home-hero-social-media-icon" src={linkedInIcon} alt="LinkedIn" />
        </a>
      </div> */}
    </div>
  );
};
