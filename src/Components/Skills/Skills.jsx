import React from "react";
import { motion } from "framer-motion";
import "./Skills.css";

const SkillCircle = ({ skill, percentage }) => {
  const circleVariants = {
    initial: { strokeDasharray: "0, 100" },
    animate: {
      strokeDasharray: `${percentage}, 100`,
      transition: { duration: 1.5, ease: "easeInOut" },
    },
  };

  return (
    <div className="skill-circle">
      <motion.svg className="progress-ring" viewBox="0 0 36 36">
        <motion.circle
          className="progress-ring__circle"
          cx="18"
          cy="18"
          r="15.91549430918954"
          fill="transparent"
          stroke="var(--accent-color)"
          strokeWidth="3"
          strokeDasharray="0, 100"
          variants={circleVariants}
          initial="initial"
          animate="animate"
        />
      </motion.svg>
      <div className="skill-text">
        <h2>{skill}</h2>
        <p>{percentage}%</p>
      </div>
    </div>
  );
};

const Skills = () => {
  const skills = [
    { skill: "JavaScript", percentage: 90 },
    { skill: "React", percentage: 85 },
    { skill: "Python", percentage: 80 },
    { skill: "Java", percentage: 70 },
    { skill: "CSS", percentage: 75 },
  ];

  return (
    <div className="skills">
      <h1 className="skills-title">My Skills</h1>
      <div className="skills-container">
        {skills.map((skillObj, index) => (
          <SkillCircle
            key={index}
            skill={skillObj.skill}
            percentage={skillObj.percentage}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
