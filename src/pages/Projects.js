import "../App.css";
import "../Projects.css";
import bookMeImg from "../images/BookMe-img.png";
import bookMeMobileImg from "../images/BookMe-mobile-img.png";
import weatherAppImg from "../images/Weather-app-img.png";
import leeTubeImg from "../images/LeeTube-img.png";
import leeTubeMobileImg from "../images/LeeTube-mobile-img.png";
import webTvImg from "../images/WebTv-img.png";
import empoweredImg from "../images/Empowered-img.png";
import chatImg from "../images/Chat-with-me-img.png";
import hotelImg from "../images/cyf-hotel-img.png";
import quotesImg from "../images/quotes-img.png";
import juiceBarMobileImg from "../images/JuiceBar-mobile-img.png";
import { ProjectSection } from "../components/ProjectSection";
import { ProjectSectionB } from "../components/ProjectSectionB";
import { ProjectSectionC } from "../components/ProjectSectionC";

export const Projects = () => {
  return (
    <div className="page-wrapper">
      <div className="page-title-wrapper">
        <h1 className="page-title">
          <span className="bold-text">Projects</span>
        </h1>
      </div>
      <ProjectSection
        projectImage={""}
        projectTitle={"Medic App"}
        projectSiteLink=""
        projectGithubLink="https://github.com/Gayle-Thompson-Igwebike/medical-app"
        projectRole={"FULL STACK DEVELOPER"}
        projectSummary={
          "This is a Group Project that brings together medical professionals in various fields of medicine. It is specifically targeted at common diseases that people of african descent face. Patients login to their account before accessing an appointmenr for medical advice."
        }
      />
      <ProjectSection
        projectImage={bookMeImg}
        projectMobileImg={bookMeMobileImg}
        projectTitle={"BookMe"}
        projectSiteLink="https://starter-kit-all6.onrender.com"
        projectGithubLink="https://github.com/karleenmsrichards/final-project-gp2"
        projectRole="FULL STACK DEVELOPER"
        projectSummary="This is my Final Technical Group Project, a website that connects experts in various areas of work to customers. Experts subscribe, then adds their google calendar to their profile in order for customers to book an appointment. Our team consisted of 4 members. The team used BDD and the Agile Framework , Continuous Integration and Sequelize ORM for database operations."
        projectTechStack="PERN, JavaScript, Google OAuth 2.0, Sequelize, Github Actions,  Material UI, Google Calendar."
      />
      <ProjectSectionB
        projectMobileImg={weatherAppImg}
        projectTitle={"Weather Wear"}
        projectSiteLink="https://weather-app-karleen.onrender.com"
        projectGithubLink="https://github.com/karleenmsrichards/weather-app"
        projectRole={"FRONTEND DEVELOPER"}
        projectSummary={
          "Weather App is a front end website which displays the current weather and conditions. Users can also check the weather for any city in the world. A restful API was used to access the weather data."
        }
      />
      <ProjectSection
        projectImage={leeTubeImg}
        projectMobileImg={leeTubeMobileImg}
        projectTitle={"Lee Tube"}
        projectSiteLink="https://video-client-side-espj.onrender.com/"
        projectGithubLink="https://github.com/karleenmsrichards/Full-Stack-Project-Assessment"
        projectRole={"FULL STACK DEVELOPER"}
        projectSummary={
          "As a user I can view all the videos stored in website's database. Users can also upload a video and it's title using it's url only if the yourube video does not already exist in the site's database. I utilized regex validation for form fields to check the authenticity of a given url."
        }
        projectTechStack="PERN (Postgres, Express, React, Node), JavaScript, Custom CSS"
      />
      <ProjectSectionC
        projectImage={webTvImg}
        projectTitle={"WebTv"}
        projectSiteLink="https://cyf-karleenmsrichards-tv.netlify.app/"
        projectGithubLink="https://github.com/karleenmsrichards/tv-show-dom-project"
        projectRole={"FRONTEND DEVELOPER"}
        projectSummary={
          "This is a website developed using Vanilla Javascript. My creativity and passion for the tech industry is visible in this TV Show Project. Calls to TvMaze's restful API is are made so that shows and movies are displayed. A few other stretch goal features were also accomplished. Please watch!"
        }
      />
      <ProjectSectionC
        projectImage={empoweredImg}
        projectTitle={"Empowered"}
        projectSiteLink="https://empowered.netlify.app"
        projectGithubLink="https://github.com/bazmurphy/buddy-group-project"
        projectRole={"UX/UI"}
        projectSummary={
          "This website is a group effort that helps users lower the cost of their utility bills. In the process of developing this website, I communicated and collaborated well with all team members and came up with various ways to deal with difference of opinions. For instance, I listened to my teammates and weighed the pros and cons before making final decisions."
        }
      />
      <ProjectSectionC
        projectImage={hotelImg}
        projectTitle={"CYF Hotel"}
        projectGithubLink="https://github.com/karleenmsrichards/cyf-hotel-react"
        projectRole={"FULL STACK DEVELOPER"}
        projectSummary={""}
      />
      <ProjectSectionC
        projectImage={quotesImg}
        projectTitle={"tailoredQuote.com"}
        projectSiteLink="https://karleenmsrichards-quotes-site-ne4r-qf3fdamp4-karleenmsrichards.vercel.app/"
        projectGithubLink="https://github.com/karleenmsrichards/karleenmsrichards-quotes-site"
        projectRole={"FULL STACK DEVELOPER"}
        projectSummary={""}
      />
      <ProjectSectionB
        projectMobileImg={juiceBarMobileImg}
        projectTitle={"Juice Bar"}
        projectRole={"FRONTEND DEVELOPER"}
        projectSiteLink=""
        projectGithubLink="https://github.com/karleenmsrichards/responsive-grid-project"
        projectSummary={
          "This is a front-end website where I used the CSS grid property and media queries to change the layout of the page depending on the width of the viewport. I also used the CSS position property and rotate to complete my website."
        }
      />
      <ProjectSectionC
        projectImage={chatImg}
        projectTitle={"Chat-with-me"}
        projectSiteLink="https://chat-with-me-client.onrender.com"
        projectGithubLink="https://github.com/karleenmsrichards/chat-with-me"
        projectRole={"FULL STACK DEVELOPER"}
        projectSummary={
          "Chat-with-me is a messaging app that uses Google Auth. This code using an ORM - Prisma to access the site's database. For styling I have utilized TailwindCSS."
        }
      />
    </div>
  );
};
