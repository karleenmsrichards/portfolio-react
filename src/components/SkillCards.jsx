import React from 'react';
import '../components/SkillCards.css'; 
import problemSolvingIcon from '../images/problem-solving-icon.webP'
import attentionToDetailIcon from '../images/attention-to-detail-icon.webP'
import teamPlayerIcon from '../images/team-player.webP'
import communicationIcon from '../images/communication-icon.webP'
import leadershipIcon from '../images/leadership-icon.webP'
import selfMotivationIcon from '../images/self-motivation-icon.webP'

export const SkillCards = () => {

    const skills = [
        { name: 'Self-Motivation', description: 'Demonstrated initiative and drive to independently tackle challenges.', icon: selfMotivationIcon},
        { name: 'Problem Solving', description: 'Ability to analyze complex problems and find effective solutions.', icon: problemSolvingIcon},
        { name: 'Attention to Detail', description: 'Meticulousness in ensuring accuracy and precision in work.', icon: attentionToDetailIcon},
        { name: 'Team Player', description: 'Capability to collaborate effectively within a team towards goals.', icon: teamPlayerIcon},
        { name: 'Communication', description: 'Proficiency in conveying ideas and information clearly and effectively.', icon: communicationIcon},
        { name: 'Leadership', description: 'Skill in guiding and motivating others towards achieving objectives.', icon: leadershipIcon},
    ];

    return (
        <div id="skills">
      <h2><span className="subtitle-span">My</span> Skills</h2>
            <div className="skill-cards-container">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-card">
                        <img src={skill.icon} alt={skill.name} />
                    <h3 className="skill-name">{skill.name}</h3>
                    <p className="skill-description">{skill.description}</p>
            </div>
            ))}
        </div>
        </div>
  );
};
