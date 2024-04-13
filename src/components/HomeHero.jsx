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
        
          <h1 >Hi I'm <span>Karleen</span>,</h1>
          <p className="home-hero-intro-text">Software Development graduate. Ready to apply innovative solutions in a tech role.</p>

        <div className="home-hero-img-container">
          <img className="home-hero-img" src={portfolioImgMobile} alt="Karleen Richards"/>
        </div>
      </div>
      <div className="home-hero-journey-text-container" >
            <h2>My Full Stack Journey</h2>
            <p>I've delved into the world of full stack development. Along the way, I've discovered the power of <span>teamwork</span>, problem-solving and the joy of creating something from scratch.</p> 
          
            <p>From <span>debugging errors</span> to finding creative solutions, each challenge
            has strengthened my skills and fueled my passion for coding.</p>
          
            <p>Embracing the ethos of <span>continuous learning</span>, I've turned obstacles into opportunities to grow and improve.</p>
            <div className="home-hero-contact-container">
          <p> <span>Contact me:</span> karleenmsrichards@gmail.com</p>
          <div className="home-hero-social-media-icon-container">
            <a href="https://github.com/your_username" target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="GitHub" />
            </a>
            <a href="https://linkedin.com/in/your_profile" target="_blank" rel="noopener noreferrer">
              <img src={linkedInIcon} alt="LinkedIn" />
            </a>
          </div>
      </div>
      </div>
    </div>
  );
};
