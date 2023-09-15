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
                A few months after being welcomed by the Afril community, I was
                invited to become one of the Board's{" "}
                <span className="bold-text">Directors</span>. I was really happy
                about this opportunity because I knew I could help make a
                difference in the{" "}
                <span className="bold-text">Lewisham Borough of Sanctuary</span>{" "}
                since I am very passionate about promoting diversity, inclusion,
                and social justice.{" "}
              </p>

              <p className="more-about-me-text-content">
                I started this role in{" "}
                <span className="bold-text">September 2022</span> and it
                continues to be an honour to serve as a member of the Board. I
                have been involved in a number of events and{" "}
                <span className="bold-text">fundraising</span> initiatives. I am
                extremely proud that I have been able to help raise £1000 for
                the charity in 2023. I have also hosted workshops at a few
                schools on Afril's behalf during{" "}
                <span className="bold-text">Refugee Week 2023</span> in aid of
                Refugee awareness.
              </p>
            </div>
            <button onClick={() => navigate("/contact")}>Get in Touch</button>
          </div>
        </div>
      </div>
    </div>
  );
};
