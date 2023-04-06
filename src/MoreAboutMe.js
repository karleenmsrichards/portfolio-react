import aboutMeImage from "./aboutMeImage.jpg";
import { useNavigate } from "react-router-dom";

export const MoreAboutMe = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="more-about-me-wrapper">
        <img
          className="more-about-me-img"
          src={aboutMeImage}
          alt="Karleen Richards"
        />
        <div className="more-about-me-text">
          <h2 className="more-about-me-title">
            I <span className="text-dark">advise</span> companies and NGOs in
            initiatives and campaigns
          </h2>
          <div className="more-about-me-text-content-wrapper">
            <p className="more-about-me-text-content">
              I'm a paragraph. Click here to add your own text and edit me. It's
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. Feel free to drag and drop
              me anywhere you like on your page. I'm a great place for you to
              tell a story and let your users know a little more about you.{" "}
            </p>

            <p className="more-about-me-text-content">
              This is a great space to write a long text about your company and
              your services. You can use this space to go into a little more
              detail about your company. Talk about your team and what services
              you provide. Tell your visitors the story of how you came up with
              the idea for your business and what makes you different from your
              competitors. Make your company stand out and show your visitors
              who you are.
            </p>
          </div>
          <button onClick={() => navigate("/contact")}>Get in Touch</button>
        </div>
      </div>
    </div>
  );
};
