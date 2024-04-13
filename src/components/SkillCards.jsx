import React from 'react';
import '../components/SkillCards.css'; 

export const SkillCards = () => {
  const skills = [
    { name: 'Problem Solving', description: 'Ability to analyze complex problems and find effective solutions.'},
    { name: 'Attention to Detail', description: 'Meticulousness in ensuring accuracy and precision in work.'},
    { name: 'Team Player', description: 'Capability to collaborate effectively within a team towards common goals.'},
    { name: 'Communication', description: 'Proficiency in conveying ideas and information clearly and effectively.'},
    { name: 'Leadership', description: 'Skill in guiding and motivating others towards achieving objectives.'},
    { name: 'Collaboration', description: 'Ability to work cooperatively with others to achieve shared goals.'} 
];

    return (
        <div id="skills">
            <h3 className="skills-title" >Skills</h3>
            <div className="skill-cards-container">
                {skills.map((skill, index) => (
                <div key={index} className="skill-card">
                    <h3 className="skill-name">{skill.name}</h3>
                    <p className="skill-description">{skill.description}</p>
            </div>
            ))}
        </div>
        </div>
  );
};
