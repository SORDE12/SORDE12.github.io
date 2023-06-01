import React from "react";
//import Skilldata from "../skills/SkillData";
//import SkillCard from "../skills/SkillCard";
import "./Skills.css";
import chakraUI from "../../Assets/chakraUI.png"
import css from "../../Assets/css.png"
import express from "../../Assets/express.png"
import git from "../../Assets/git.png"
import github from "../../Assets/github.png"
import html from "../../Assets/html.png"
import js from "../../Assets/js.png"
import jsonserver from "../../Assets/jsonserver.png"
import materialUI from "../../Assets/materialUI.png"
import mongodb from "../../Assets/mongodb.png"
import netlify from "../../Assets/netlify.png"
import nodejs from "../../Assets/nodejs.png"
import npm from "../../Assets/npm.png"
import reactjs from "../../Assets/reactjs.png"
import redux from "../../Assets/redux.png"
import Vercel from "../../Assets/Vercel.png"
import typescript from "../../Assets/typescript.png"
import nextjs from "../../Assets/nextjs.png"


const Skills = () => {
  

const techs = [
  {
    id: 1,
    src: html,
    title: "HTML",
    style: "shadow-orange-500",
  },
  {
    id: 2,
    src: css,
    title: "CSS",
    style: "shadow-blue-500",
  },
  {
    id: 3,
    src: js,
    title: "JavaScript",
    style: "shadow-yellow-500",
  },
  {
    id: 4,
    src: reactjs,
    title: "ReactJs",
    style: "shadow-blue-600",
  },
  {
    id: 5,
    src: typescript,
    title: "Typescript",
    style: "shadow-gray-500",
  },
  {
    id: 6,
    src: redux,
    title: "Redux",
    style: "shadow-green-500",
  },
  {
    id: 7,
    src: nodejs,
    title: "nodejs",
    style: "shadow-red-500",
  },
  {
    id: 8,
    src: mongodb,
    title: "Mondo DB",
    style: "shadow-pink-400",
  },
  {
    id: 9,
    src: express,
    title: "Express JS",
    style: "shadow-blue-500",
  },
  {
    id: 10,
    src: chakraUI,
    title: "Chakra UI",
    style: "shadow-yellow-400",
  },
  {
    id: 11,
    src: materialUI,
    title: "Material UI",
    style: "shadow-pink-500",
  },
  {
    id: 12,
    src: nextjs,
    title: "Next JS",
    style: "shadow-pink-500",
  }
];
const tools = [
  {
    id: 1,
    src: jsonserver,
    title: "JSON server",
    style: "shadow-orange-500",
  },
  {
    id: 2,
    src: git,
    title: "GIT",
    style: "shadow-blue-500",
  },
  {
    id: 3,
    src: github,
    title: "Github",
    style: "shadow-yellow-500",
  },
  {
    id: 4,
    src: netlify,
    title: "Netlify",
    style: "shadow-blue-600",
  },
  {
    id: 5,
    src: npm,
    title: "npm",
    style: "shadow-green-500",
  }
];



  
  return (
    <div id="mySkills" className="skills">
      <div>
        <div className="skills1">
          <h1>TECH STACKS</h1>
        </div>
        <div className="skillsbox">
        {techs.map(({ id, src, title, style }) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
      <br/>
      
      <div>
        <div className="skills1">
          <h1>TOOLS</h1>
        </div>
        <div className="skillsbox">
        {tools.map(({ id, src, title, style }) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>


    </div>
  );
};

export default Skills;
