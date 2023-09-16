import "../MoreAboutMe.css";
import aboutMeImage from "../images/about-me-img.jpeg";
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
        <div className="more-about-me-text-wrapper">
          <div className="more-about-me-text">
            <h2 className="more-about-me-title">
              Proud to be a <span className="bold-text">Trustee</span> at Action
              for Refugees in Lewisham (Afril)
            </h2>
            <div className="more-about-me-text-content-wrapper">
              <p className="more-about-me-text-content">
                I was officially welcomed as one of the{" "}
                <span className="bold-text">Board of Director's</span> at Action
                for Refugees in Lewisham (Afril) in September 2022. It continues
                to be an <span className="bold-text">honour </span>to serve
                because I am very passionate about promoting diversity,
                inclusion, and <span className="bold-text">social justice</span>
                .
              </p>
              <p className="more-about-me-text-content">
                I have proven to be a great asset to the charity and I have
                profitably worked on my{" "}
                <span className="bold-text"> communcation</span>, team player
                and stakeholder management skills by successfully{" "}
                <span className="bold-text">collaborating </span>
                with members of Afril and{" "}
                <span className="bold-text">stakeholders</span> at large. I had
                the glory of co-hosting 4 school workshops in aid of Refugee
                Awareness Week 2023 and for the Big Give Promotion with 2
                faithful members of the organisation. Afril was also successful
                in raising <span className="bold-text">£1000</span> from winning
                the Big Give Promotion in 2023.
              </p>
            </div>
            <button onClick={() => navigate("/contact")}>Get in Touch</button>
          </div>
        </div>
      </div>
    </div>
  );
};
