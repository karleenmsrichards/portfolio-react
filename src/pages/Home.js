import "../App.css";
import axios from "axios";
import { HomeHero } from "../components/HomeHero";
import { JavaScriptProjects } from "../components/JavascriptProjects";
import { SkillCards } from "../components/SkillCards";
import { TechStack } from "../components/TechStack";
import { useState } from "react";


export const Home = ({ showPopup, setShowPopup}) => {

  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
 
    try {
      const response = await axios.post("https://portfolio-server-n1m8.onrender.com/send_email", {
        email,
        subject,
        message,
      });
      console.log(response.data); 
      
      setEmail("");
      setSubject("");
      setMessage("");
      alert("Email successfully sent");
      setShowPopup(false);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <div className="home-container">
       <HomeHero
        handleFormSubmit={handleFormSubmit}
        showPopup={showPopup}
        setShowPopup={setShowPopup}
        email={email}
        setEmail={setEmail}
        subject={subject}
        setSubject={setSubject}
        message={message}
        setMessage={setMessage}
      />
      <JavaScriptProjects />
      <SkillCards />
      <TechStack />
  </div>
  );
};
