import React from 'react';
import '../components/SkillCards.css'; 
import problemSolvingIcon from '../images/problem-solving-icon.png'
import attentionToDetailIcon from '../images/attention-to-detail-icon.png'
import teamPlayerIcon from '../images/team-player.png'
import communicationIcon from '../images/communication-icon.png'
import leadershipIcon from '../images/leadership-icon.png'
import collaborationIcon from '../images/collaboration-icon.png'

export const SkillCards = () => {
  const skills = [
    { name: 'Problem Solving', description: 'Ability to analyze complex problems and find effective solutions.', icon: problemSolvingIcon},
    { name: 'Attention to Detail', description: 'Meticulousness in ensuring accuracy and precision in work.', icon: attentionToDetailIcon},
    { name: 'Team Player', description: 'Capability to collaborate effectively within a team towards common goals.', icon: teamPlayerIcon},
    { name: 'Communication', description: 'Proficiency in conveying ideas and information clearly and effectively.', icon: communicationIcon},
    { name: 'Leadership', description: 'Skill in guiding and motivating others towards achieving objectives.', icon: leadershipIcon},
    { name: 'Collaboration', description: 'Ability to work cooperatively with others to achieve shared goals.', icon: collaborationIcon} 
];

    return (
        <div id="skills">
            <h3 className="skills-title" >Skills</h3>
            <div className="skill-cards-container">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-card">
                        <img src={skill.icon} />
                    <h3 className="skill-name">{skill.name}</h3>
                    <p className="skill-description">{skill.description}</p>
            </div>
            ))}
        </div>
        </div>
  );
};
