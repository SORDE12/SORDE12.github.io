import React from "react";
import "./Skills.css";
function SkillCard(props) {
  return (
    <div
      className="cardbox"
      style={{
        width: "100px",
        backgroundColor: "#fffdfa",
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
        cursor: "pointer",
        display:"flex",
        flexDirection:"column",
        margin:"auto",
       borderRadius:"1rem",
       alignItems:"center"
      
      }}
    >
      <img
        style={{ width: "60px", height: "60px", margin:"auto"  }}
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
