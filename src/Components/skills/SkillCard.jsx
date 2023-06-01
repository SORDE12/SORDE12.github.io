import { border } from "@chakra-ui/react";
import React from "react";
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

function SkillCard(props) {
  return (
    <div
      className="cardbox"
      style={{
        width: "130px",
        backgroundColor: "#fffdfa",
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
        cursor: "pointer",
        display:"flex",
        flexDirection:"column",
        margin:"auto",
       borderRadius:"1rem",
       alignItems:"center",
      padding:"5px 10px 5px 10px",
      
      }}
    >
      <img
        style={{ width: "80px", height: "80px", margin:"auto"  }}
        src={props.imgsrc}
        alt="poster"
        className="imgposter"
      ></img>

      <p
        className="title"
        style={{ fontWeight: "normal", color:"#081520", paddingBottom: "12px" ,paddingTop:"10px" }}
      >
        {props.title}
      </p>
    </div>
  );
}
export default SkillCard;
