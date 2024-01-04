import "../App.css";
import "../Portfolio.css";
import bookMeImg from "../images/BookMe-img.png";
import medicAppImg from "../images/bwc-medic-app-img.png";
import bookMeMobileImg from "../images/BookMe-mobile-img.png";
import weatherAppImg from "../images/Weather-app-img.png";
import leeTubeImg from "../images/LeeTube-img.png";
import leeTubeMobileImg from "../images/LeeTube-mobile-img.png";
import webTvImg from "../images/WebTv-img.png";
import empoweredImg from "../images/Empowered-img.png";
import quotesImg from "../images/quotes-img.png";
import juiceBarMobileImg from "../images/JuiceBar-mobile-img.png";
import { PortfolioSectionA } from "../components/PortfolioSectionA";
import { PortfolioSectionB } from "../components/PortfolioSectionB";

export const Portfolio = () => {
  return (
    <div className="page-wrapper">
      <div className="page-title-wrapper">
        <h1 className="page-title">
          <span className="bold-text">Portfolio</span>
        </h1>
      </div>
      <PortfolioSectionA
        portfolioImage={medicAppImg}
        portfolioTitle={"Medic App"}
        portfolioSiteLink="https://bwc-medical-app.netlify.app"
        portfolioGithubLink="https://github.com/Gayle-Thompson-Igwebike/medical-app"
        portfolioRole={"FULL STACK DEVELOPER"}
        portfolioTechStack="Custom CSS, Javascript, React, Node, Express, RESTful API, API Controller, AWS DynamoDB, AWS S3 Bucket."
        portfolioSummary={
          "This is a Team Portfolio that brings together medical professionals in various fields of medicine with the integration of Cloud services. This app specifically targets common diseases faced by people of african descent. Patients login to their account before accessing an appointment for medical advice."
        }
      />
      <PortfolioSectionB
        portfolioMobileImg={weatherAppImg}
        portfolioTitle={"Weather Wear"}
        portfolioSiteLink="https://weather-app-karleen.onrender.com"
        portfolioGithubLink="https://github.com/karleenmsrichards/weather-app"
        portfolioRole={"FRONTEND DEVELOPER"}
        portfolioTechStack="Custom CSS, Javascript, React, RESTful API."
        portfolioSummary={
          "Weather App is a front end website which displays the current weather and conditions or check the weather for any city in the world. A restful API was used to access the weather data. I also came up with an exciting solution for achieving animated weather icons for this app though they were not provided by the API."
        }
      />
      <PortfolioSectionA
        portfolioImage={bookMeImg}
        portfolioMobileImg={bookMeMobileImg}
        portfolioTitle={"BookMe"}
        portfolioSiteLink="https://starter-kit-all6.onrender.com"
        portfolioGithubLink="https://github.com/karleenmsrichards/final-Portfolio-gp2"
        portfolioRole="FULL STACK DEVELOPER"
        portfolioSummary="This is my Final Technical Group Portfolio, a website that connects experts in various areas of work to customers. Experts subscribe, then adds their google calendar to their profile in order for customers to book an appointment. Our team consisted of 4 members. The team used BDD and the Agile Framework, Continuous Integration and Sequelize ORM for database operations."
        portfolioTechStack="PERN, JavaScript, Google OAuth 2.0, Sequelize, Github Actions,  Material UI, Google Calendar."
      />
      <PortfolioSectionA
        portfolioImage={leeTubeImg}
        portfolioMobileImg={leeTubeMobileImg}
        portfolioTitle={"Lee Tube"}
        portfolioSiteLink="https://video-client-side-espj.onrender.com/"
        portfolioGithubLink="https://github.com/karleenmsrichards/Full-Stack-Portfolio-Assessment"
        portfolioRole={"FULL STACK DEVELOPER"}
        portfolioSummary={
          "As a user I can view all the videos stored in website's database. Users can also upload a video and it's title using it's url only if the yourube video does not already exist in the site's database. I utilized regex validation for form fields to check the authenticity of a given url."
        }
        portfolioTechStack="PERN (Postgres, Express, React, Node), JavaScript, Custom CSS"
      />
      <PortfolioSectionA
        portfolioImage={webTvImg}
        portfolioTitle={"WebTv"}
        portfolioSiteLink="https://cyf-karleenmsrichards-tv.netlify.app/"
        portfolioGithubLink="https://github.com/karleenmsrichards/tv-show-dom-Portfolio"
        portfolioRole={"FRONTEND DEVELOPER"}
        portfolioTechStack="HTML5, Custom CSS, JavaScript, RESTful API."
        portfolioSummary={
          "This is a website developed using Vanilla Javascript. My creativity and passion for the tech industry is visible in this TV Show Portfolio. Calls to TvMaze's RESTful API are made so that shows and movies are displayed. A few stretch goal features were also accomplished."
        }
      />
      <PortfolioSectionA
        portfolioImage={empoweredImg}
        portfolioTitle={"Empowered"}
        portfolioSiteLink="https://empowered.netlify.app"
        portfolioGithubLink="https://github.com/bazmurphy/buddy-group-Portfolio"
        portfolioRole={"UX/UI"}
        portfolioTechStack="HTML5, Custom CSS, JavaScript, Figma"
        portfolioSummary={
          "This website is a group effort that helps users lower the cost of their utility bills. In the process of developing this website, I communicated and collaborated well with all team members and came up with various ways to deal with difference of opinions. For instance, I listened to my teammates and weighed the pros and cons before making final decisions."
        }
      />
      <PortfolioSectionA
        portfolioImage={quotesImg}
        portfolioTitle={"tailoredQuote.com"}
        portfolioSiteLink="https://karleenmsrichards-quotes-site-ne4r-qf3fdamp4-karleenmsrichards.vercel.app/"
        portfolioGithubLink="https://github.com/karleenmsrichards/karleenmsrichards-quotes-site"
        portfolioRole={"FULL STACK DEVELOPER"}
        portfolioTechStack="JavaScript, React, Node, Express, RESTful API, Custom CSS."
        portfolioSummary={""}
      />
      <PortfolioSectionB
        portfolioMobileImg={juiceBarMobileImg}
        portfolioTitle={"Juice Bar"}
        portfolioRole={"FRONTEND DEVELOPER"}
        portfolioSiteLink=""
        portfolioTechStack="HTML5, Responsive Grid, Custom CSS."
        portfolioGithubLink="https://github.com/karleenmsrichards/responsive-grid-Portfolio"
        portfolioSummary={
          "This is a front-end website where I used the CSS grid property and media queries to change the layout of the page depending on the width of the viewport. I also used the CSS position property and rotate to complete my website."
        }
      />
    </div>
  );
};
