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
          <p>Hi I'm <span className="home-hero-intro-name">Karleen</span>,</p>
          <p className="home-hero-intro-text"><span className="home-hero-intro-title">Software Engineer</span> that fancies problem solving and crafting solutions from the ground up. I enjoy staying at the forefront of technology trends by continuously expanding my knowledge.</p>
          <button className="cta" onClick={() => setShowPopup(true)}>LET'S TALK</button>
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
