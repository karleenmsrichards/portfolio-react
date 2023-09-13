import "../App.css";
import "../Resume.css";
import { ResumeSection } from "../components/Resume-section";

export const Resume = () => {
  return (
    <div className="cv-wrapper">
      <div className="cv-title-wrapper">
        <h1 className="cv-title">
          <span className="bold-text">CV</span>
        </h1>
      </div>
      <div className="resume-subsection-wrapper">
        <h2 className="resume-summary-title">
          <span className="bold-text">Professional</span> Summary
        </h2>
        <p className="page-summary-text">
          I studied Software Development at Code Your Future and I have recently
          completed the course and my{" "}
          <span className="bold-text">final technical group project</span>. I
          have been exposed to a very intense coding program and I also
          benefited from{" "}
          <span className="bold-text">professional development</span> and{" "}
          <span className="bold-text">community building</span> skills since
          July of 2022.
        </p>
        <p className="page-summary-text">
          I enjoy the responsibility of problem solving and I have a{" "}
          <span className="bold-text">meticulous eye</span>. My organisational
          and time management skills have matured through my experience as an
          Accounting Assistant. As a Trainee Software Developer, I continued to
          be a team player, <span className="bold-text">good communicator</span>{" "}
          and I had the opportunity to work on a number of group projects which
          has led to the development of my{" "}
          <span className="bold-text">team leadership skills</span>. My
          voluntary position as Board of Director at Action for Refugees in
          Lewisham has peaked my <span className="bold-text">presentation</span>{" "}
          and public speaking skills. I am also very passionate about coding and
          AI technology.
        </p>
        <button className="highlight-bg-btn">Download CV</button>
      </div>

      <div className="resume-subtitle-wrapper">
        <h2 className="resume-subtitle">
          <span className="bold-text">Skills</span>
        </h2>
      </div>
      <div className="resume-skills-wrapper">
        <div>
          <span className="about-me-skills">Time Management</span>
          <span className="about-me-skills">Leadership</span>
          <span className="about-me-skills-black">Team Player</span>
          <span className="about-me-skills">Community Outreach</span>
        </div>
        <div>
          <span className="about-me-skills">Public Speaking</span>
          <span className="about-me-skills-black">Problem Solving</span>
          <span className="about-me-skills">Active Learning</span>
          <span className="about-me-skills">Planning</span>
          <span className="about-me-skills-black">Communication</span>
        </div>
      </div>
      <div className="resume-subtitle-wrapper">
        <h2 className="resume-subtitle">
          Work <span className="bold-text">Experience</span>
        </h2>
      </div>
      <ResumeSection
        time="2017 - 2019"
        subtitle="Accounting Assistant at University of the West Indies, Trinidad"
        paragraph="I supported the Accountant and oversaw Accounts Receivables and Payables. I also managed client accounts."
        personalAchievementsTitle="Personal Achievements"
        achievementsA="
        – Successfully established a softcopy backup system of cheque records, in addition to the accounting software."
        achievementsB="– Diligently upheld the organisation of our critical filing system for the college."
      />
      <ResumeSection
        time="2007 - 2017"
        subtitle="Library Clerk at Guardian Media Limited, Trinidad"
        paragraph="I was responsible for archiving all newspaper articles both hard and softcopy as well as meeting with clients, companies and schools to supply articles. This allowed me to further develop my client interaction and communication skills, problem solving and research skills."
        personalAchievementsTitle="Personal Achievements"
        achievementsA="– Brought the archival system up to date, ensuring accessibility of historical records for future reference."
        achievementsB="– Successful integration of email features to meet clients needs from concept to delivery."
        achievementsC="– Received an outstanding 90% customer satisfaction review rating in 2015."
      />
      <div className="resume-subtitle-wrapper">
        <h2 className="resume-subtitle">
          <span className="bold-text">Education</span>
        </h2>
      </div>
      <ResumeSection
        time="June 2022 - August 2023"
        subtitle="Code Your Future, United Kingdom"
        paragraph="Software Development"
        paragraph2="Fundamentals of Software Development"
      />
      <ResumeSection
        time="2006 - 2009"
        subtitle="Omardeen School of Accounting, Trinidad"
        paragraph="ACCA Level 1 - Foundations in Accountancy"
        paragraph2="ACCA Level 2 - Finanancial and Management Accounting"
      />
      <ResumeSection
        time="2001 - 2002"
        subtitle="Johnson's Finishing School, Trinidad"
        paragraph="GCSE, A Levels in Mathematics B, Principles of Accounts B and English Language B"
      />
      <div className="resume-subtitle-wrapper">
        <h2 className="resume-subtitle">
          Volunteer <span className="bold-text">Work</span>
        </h2>
      </div>
      <ResumeSection
        time="September 2022 - present"
        subtitle="Board Member at Action for Refugees in Lewisham (Afril)"
        paragraph="I love giving back to my community, especially since I was supported by a number of charities since my migration to the United Kingdom. My responsibilities are reviewing financial statements, implementing policies, managing funds and other business."
        personalAchievementsTitle="Personal Achievements"
        achievementsA="– Successfully assisted in raising £1000 with the Big Give Foundation in 2023."
        achievementsB="– Hosted 2 Refugee Week Workshops at schools in the Lewisham Borough in 2023"
      />
      <ResumeSection
        time="August 2023 - present"
        subtitle="Co-Producer at the Lewisham Borough of Sanctuary Stategy Plan"
        paragraph="I am one of the team of volunteers who assist the Lewisham Borough Council fine tune it's priorities particular to migrants, asylum seekers and refugees. We focus on tailoring the Sanctuary's Strategy to ensure it bests suits the needs of the one of the most vulnerable group of community members."
      />
      <div className="resume-subtitle-wrapper">
        <h2 className="resume-subtitle">
          <span className="bold-text">Hobbies</span>
        </h2>
      </div>
      <p className="position-summary-text hobbies-text">
        My hobbies include the art of balloon decoration and walking.
      </p>
    </div>
  );
};
