import "../App.css";
import "../CV.css";
import { CVSection } from "../components/CVSection";

export const CV = () => {
  const googleDocsFileId = process.env.REACT_APP_GOOGLE_DOCS_FILE_ID;
  const googleDocsExportUrl = `https://docs.google.com/document/d/${googleDocsFileId}/export?format=pdf`;
  return (
    <div className="page-wrapper">
      <div className="page-title-wrapper">
        <h1 className="page-title">
          <span className="bold-text">CV</span>
        </h1>
      </div>
      <div className="page-subsection-wrapper">
        <h2 className="page-summary-title">
          <span className="bold-text">Professional</span> Summary
        </h2>
        <p className="page-summary-text">
          I am a recent <span className="bold-text">Software Development</span>{" "}
          Graduate. I studied at Code Your Future, where I acquired a strong
          foundation in <span className="bold-text">coding skills</span>. I
          enjoy the responsibility of{" "}
          <span className="bold-text">problem solving</span> and I have a{" "}
          <span className="bold-text">meticulous eye</span>. I am a good
          communicator with a{" "}
          <span className="bold-text">collaborative spirit</span>, as evidenced
          by my 4 successful team projects.
        </p>
        <a className="download-cv-ahref" href={googleDocsExportUrl} download>
          Download CV
        </a>
      </div>

      <div className="page-subtitle-wrapper">
        <h2 className="page-subtitle">
          Soft <span className="bold-text">Skills</span>
        </h2>
      </div>
      <div className="soft-skills-wrapper">
        <div>
          <span className="about-me-skills">Time Management</span>
          <span className="about-me-skills">Leadership</span>
          <span className="about-me-skills-black about-me-skills-green-text">
            Team Player
          </span>
          <span className="about-me-skills">Community Outreach</span>
          <span className="about-me-skills">Stakeholder Management</span>
        </div>
        <div>
          <span className="about-me-skills">Public Speaking</span>
          <span className="about-me-skills-black about-me-skills-green-text">
            Problem Solving
          </span>
          <span className="about-me-skills">Active Learning</span>
          <span className="about-me-skills">Planning</span>
          <span className="about-me-skills-black about-me-skills-green-text">
            Communication
          </span>
        </div>
      </div>

      <div className="page-subtitle-wrapper">
        <h2 className="page-subtitle">
          Tech <span className="bold-text">Stack</span>
        </h2>
      </div>
      <div className="tech-stack-wrapper">
        <div>
          <p className="tech-stack-heading">Client-side:</p>
          <div className="tech-stack-text-wrapper">
            <span className="tech-stack-text">HTML5, </span>
            <span className="tech-stack-text">CSS3, </span>
            <span className="tech-stack-text">Javascript, </span>
            <span className="tech-stack-text">React</span>
          </div>
        </div>
        <div>
          <p className="tech-stack-heading">Server-side:</p>
          <div className="tech-stack-text-wrapper">
            <span className="tech-stack-text">REST API, </span>
            <span className="tech-stack-text">Node.js, </span>
            <span className="tech-stack-text">Express, </span>
            <span className="tech-stack-text">Database SQL, </span>
            <span className="tech-stack-text">Sequelize, </span>
            <span className="tech-stack-text">Prisma, </span>
            <span className="tech-stack-text">Cloud Services</span>
          </div>
        </div>
        <div>
          <p className="tech-stack-heading">Tools:</p>
          <div className="tech-stack-text-wrapper">
            <span className="tech-stack-text">Github, </span>
            <span className="tech-stack-text">Github Actions, </span>
            <span className="tech-stack-text">Figma</span>
          </div>
        </div>
      </div>

      <div className="page-subtitle-wrapper">
        <h2 className="page-subtitle">
          Work <span className="bold-text">Experience</span>
        </h2>
      </div>
      <CVSection
        time="2017 - 2019"
        subtitle="Accounting Assistant at University of the West Indies, Trinidad"
        paragraph="I communicated well with the Accountant and Accounts Department. I also managed clients Accounts Payables accounts strengthening my leadership and communication skills."
        personalAchievementsTitle="Achievements"
        achievementsA="
        – Problem solving Planning: Successfully established and managed a complimentary softcopy backup system of cheque records, in addition to the existing backup ensuring data availability during the software downtime."
        achievementsB="– Attention to Detail: Upheld the meticulous organisation of the critical filing system to prevent data loss and confusion."
      />
      <CVSection
        time="2007 - 2017"
        subtitle="Library Clerk at Guardian Media Limited, Trinidad"
        paragraph="I was responsible for archiving all newspaper articles both hard and softcopy as well as meeting with clients, companies and schools to supply articles. This allowed me to further develop my client interaction and communication skills, problem solving and research skills."
        personalAchievementsTitle="Achievements"
        achievementsA="– Brought the archival system up to date, ensuring accessibility of historical records for future reference."
        achievementsB="– Successful integration of email features to meet clients needs from concept to delivery."
        achievementsC="– Received an outstanding 90% customer satisfaction review rating in 2015."
      />
      <div className="page-subtitle-wrapper">
        <h2 className="page-subtitle">
          <span className="bold-text">Education</span>
        </h2>
      </div>
      <CVSection
        time="June 2022 - August 2023"
        subtitle="Code Your Future, United Kingdom"
        paragraph="Software Development"
        paragraph2="Product Management"
        paragraph3="Fundamentals of Software Development"
      />
      <CVSection
        time="2006 - 2009"
        subtitle="Omardeen School of Accounting, Trinidad"
        paragraph="ACCA Level 1 - Foundations in Accountancy"
        paragraph2="ACCA Level 2 - Finanancial and Management Accounting"
      />
      <CVSection
        time="2001 - 2002"
        subtitle="Johnson's Finishing School, Trinidad"
        paragraph="GCSE, A Levels in Mathematics B, Principles of Accounts B and English Language B"
      />
      <div className="page-subtitle-wrapper">
        <h2 className="page-subtitle">
          Volunteer <span className="bold-text">Work</span>
        </h2>
      </div>
      <CVSection
        time="September 2022 - present"
        subtitle="Board Member at Action for Refugees in Lewisham (Afril)"
        paragraph="I love giving back to my community and I am very passionate about social justice. My responsibilities as Trustee is to review financial statements, implement policies, manage funds and take care of other business."
        personalAchievementsTitle="Achievements"
        achievementsA="– Successfully assisted in raising £1000 with the Big Give Foundation in 2023."
        achievementsB="– Hosted 2 Refugee Week Workshops at schools in the Lewisham Borough of and Southwark in 2023."
      />
      <CVSection
        time="August 2023 - present"
        subtitle="Co-Producer at the Lewisham Borough of Sanctuary Stategy Plan"
        paragraph="I am one of the team of volunteers responsible for solving the current problems migrants face within the Lewisham Borough. We focus on tailoring the Sanctuary's Strategy to ensure it suits the needs of one of the most vulnerable groups of community members."
        personalAchievementsTitle="Achievements"
        achievementsA="– Develop conflict resolution strategy with the use of empathy and negociation."
        achievementsB="– Actively honing my communication skills to ensure effective collaboration and teamwork."
      />
      <div className="page-subtitle-wrapper">
        <h2 className="page-subtitle">
          <span className="bold-text">Hobbies</span>
        </h2>
      </div>
      <p className="position-summary-text hobbies-text">
        My hobbies include the art of balloon decoration and walking.
      </p>
    </div>
  );
};
