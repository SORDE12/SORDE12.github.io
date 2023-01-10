import React from "react";
import Skilldata from "../skills/SkillData";
import SkillCard from "../skills/SkillCard";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills">
      <div className="skills1" >
        <h1>Skills</h1>
      </div>
      <div className="skillsbox">
        {Skilldata.map((value) => {
          return (
            <SkillCard
              key={value.id}
              imgsrc={value.imgsrc}
              title={value.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
