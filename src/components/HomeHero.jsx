import "../pages/Home.css";
import "../App.css";
import "../components/HomeHero.css";
import portfolioImg from "../images/portfolio-img.webP";
import { ContactPopup } from "./ContactPopup";

export const HomeHero = ({ handleFormSubmit, showPopup, setShowPopup, email, subject, message, setEmail, setSubject, setMessage }) => {
  
  return (
    <div className="home-hero-container">
      <h1>
        <span className="h1-span animate__animated animate__bounceInRight">Building</span> solutions from the ground up
      </h1>
      <div className="home-hero-text-wrapper">
        <p>As a software engineer, I am passionate about problem-solving and enjoy crafting solutions from beginning to end.</p>
        <p>I thrive on staying at the forefront of technology trends, continuously expanding my knowledge.</p>
      </div>
      <button className="cta" onClick={() => setShowPopup(true)}>Let's Talk →</button>
        <div className="home-hero-img-container">
          <img className="home-hero-img" src={portfolioImg} alt="Karleen Richards" />
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
