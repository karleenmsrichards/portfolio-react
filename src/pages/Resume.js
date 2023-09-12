import "../App.css";
import "../Resume.css";
import { ResumeSection } from "../components/Resume-section";

export const Resume = () => {
  return (
    <div className="page">
      <div className="cv-title-wrapper">
        <h1 className="cv-title">
          <span className="text-dark bg">CV</span>
        </h1>
      </div>
      <div className="resume-subsection-wrapper">
        <h2 className="resume-summary-title">
          <span className="text-dark">Professional</span> Summary
        </h2>
        <p className="page-summary-text">
          I studied Software Development at Code Your Future and I have recently
          completed the course and my{" "}
          <span className="text-dark">final technical group project</span>. I
          have been exposed to a very intense coding program and I also
          benefited from{" "}
          <span className="text-dark">professional development</span> and{" "}
          <span className="text-dark">community building</span> skills since
          July of 2022.
        </p>
        <p className="page-summary-text">
          I enjoy the responsibility of problem solving and I have a{" "}
          <span className="text-dark">meticulous eye</span>. My organisational
          and time management skills have matured through my experience as an
          Accounting Assistant. As a Trainee Software Developer, I continued to
          be a team player, <span className="text-dark">good communicator</span>{" "}
          and I had the opportunity to work on a number of group projects which
          has led to the development of my{" "}
          <span className="text-dark">team leadership skills</span>. My
          voluntary position as Board of Director at Action for Refugees in
          Lewisham has peaked my <span className="text-dark">presentation</span>{" "}
          and public speaking skills. I am very passionate about coding and AI
          technology.
        </p>
        <button className="highlight-bg-btn">Download CV</button>
      </div>

      <div className="resume-subtitle-wrapper">
        <h1 className="resume-subtitle">
          <span className="text-dark bg">Skills</span>
        </h1>
      </div>
      <div className="resume-skills-wrapper">
        <div>
          <span className="about-me-skills">Team Player</span>
          <span className="about-me-skills">Problem Solving</span>
          <span className="about-me-skills">Time Management</span>
          <span className="about-me-skills">Community Outreach</span>
        </div>
        <div>
          <span className="about-me-skills">Public Speaking</span>
          <span className="about-me-skills">Leadership</span>
          <span className="about-me-skills">Active Learning</span>
          <span className="about-me-skills">Planning</span>
          <span className="about-me-skills">Communication</span>
        </div>
      </div>
      <div className="resume-subtitle-wrapper">
        <h2 className="resume-subtitle">
          Work <span className="text-dark">Experience</span>
        </h2>
      </div>
      <ResumeSection
        time="2017 - 2019"
        subtitle="Accounting Assistant at University of the West Indies, Trinidad"
        paragraph="  I supported the Accountant and oversaw receivables and payables.I
      wrote comprehensive reports and managed clients accounts (bookkeeping
      and VAT). I also allocated and record-kept all financial records (hard
      and softcopy)."
      />
      <ResumeSection
        time="2007 - 2017"
        subtitle="Library Clerk at Guardian Media Limited, Trinidad"
        paragraph="I was responsible for archiving all newspaper articles both hard and softcopy and meeting with clients (companies, schools, individuals) to supply articles. 
        I developed online versions of the printed Newspaper articles using the company's web application. I also conducted and coordinated appointments with clients. I supplied journalist, editors and Editor-in-Chief with required articles 
        and maintained hardcopy files of articles."
      />
      <ResumeSection
        time="2007 - 2007"
        subtitle="Vault-Clerk at the Ministry of Legal Affairs, Trinidad"
        paragraph="I coordinated clients' requests for national Real Property Ordinance (Deeds and Wills). I also gathered Deeds and Wills as per clients' request and maintained efficient filing of Real Property Ordinance (hardcopy)."
      />
      <div className="resume-subtitle-wrapper">
        <h2 className="resume-subtitle">
          <span className="text-dark">Education</span>
        </h2>
      </div>
      <ResumeSection
        time="2006-2009"
        subtitle="Omardeen School of Accounting"
        paragraph="ACCA Level 1 - Foundations in Accountancy"
        paragraph2="ACCA Level 2 - Finanancial and Management Accounting"
      />
      <ResumeSection
        time="2001-2002"
        subtitle="Johnson's Finishing School"
        paragraph="GCSE, A Levels in Mathematics B, Principles of Accounts B and English Language B"
      />
      <div className="resume-subtitle-wrapper">
        <h2 className="resume-subtitle">
          <span className="text-dark">Volunteer Work</span>
        </h2>
      </div>
      <ResumeSection
        time="September 2022 - present"
        subtitle="Board member at Action for Refugees in Lewisham (Afril)"
        paragraph="I love giving back to my community and as a Trustee I am required to review financial statements, policies, management of funds and other business. I also speak at events to raise awareness about refugees 
        and attend fundraising events."
      />
      <ResumeSection
        time="August 2023 - present"
        subtitle="Co-Producer at the Lewisham Borough of Sanctuary Stategy Plan"
        paragraph="I am one of the team of volunteers who assist the Lewisham Borough Council fine tune it's priorities particular to migrants, asylum seekers and refugees. We focus on tailoring the Sanctuary's Strategy to ensure it bests suits the needs of the one of the most vulnerable group of community members."
      />
    </div>
  );
};
