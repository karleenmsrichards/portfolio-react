import "../pages/Home.css";
import "../App.css";
import "../components/HomeHero.css";
import portfolioImgMobile from "../images/portfolio-img-mobile.png";
import { ContactPopup } from "./ContactPopup";

export const HomeHero = ({ handleFormSubmit, showPopup, setShowPopup, email, subject, message, setEmail, setSubject, setMessage }) => {
  
  return (
    <div className="home-hero-container">
      <div className="home-hero-intro-container">
        <div className="home-hero-img-container">
          <img className="home-hero-img" src={portfolioImgMobile} alt="Karleen Richards" />
        </div>
        <div className="home-hero-intro-text-container">
          <p>Hi I'm <span>Karleen</span>,</p>
          <h1>Software Development graduate.</h1>
          <p className="home-hero-intro-text">I fancy tackling challenges through problem solving and using my creativity to craft solutions from the ground up. I am passionate about staying at the forefront of technology trends and enjoy continuously expanding my knowledge with the ever-evolving tech landscape.</p>
          <button className="cta" onClick={() => setShowPopup(true)}>Let's talk</button>
        </div>
      </div>
      <ContactPopup
                showPopup={showPopup}
                handleFormSubmit={handleFormSubmit}
                setShowPopup={setShowPopup}
                email={email}
                subject={subject}
                message={message}
                setEmail={setEmail}
                setSubject={setSubject}
                setMessage={setMessage}
      />
    </div>
  );
};
