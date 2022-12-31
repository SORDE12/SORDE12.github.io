import React from "react";

import Typewriter from "typewriter-effect";
import "./About.css";

const About = () => {
  return (
    <div
      className="about"
      style={{
        width: "100%",
        padding: "150px",
        display: "flex",
        gap: "3rem",
        background:"#FFFDFA"
      }}
    >
      <div className="myname">
        <p style={{ color:"black", fontSize: "30px", fontWeight: "lighter" }}>
          Hello Everyone
        </p>
        <h1
          className="omkar"
          style={{ fontWeight: "normal", color: "#081520", fontSize: "60px" }}
        >
          Omkar Sorde
        </h1>

        <Typewriter
          style={{ color:"black",fontSize: "20px" }}
          options={{
            strings: ["A Full Stack Web Developer", "A MERN Stack Developer"],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
            
          }}
        />

        <div className="icon1">
          <a href="https://github.com/shivamsherje">
            <button className="gitbutton" class="button-87" role="button">
              <img
                style={{ width: "25px", height: "25px", marginTop: "4px" }}
                src="https://cdn-icons-png.flaticon.com/512/4926/4926625.png"
              />
            </button>
          </a>

          <a href="https://www.linkedin.com/in/omkar-sorde-850a67246/">
            <button className="gitbutton" class="button-87" role="button">
              <img
                style={{ width: "20px", height: "20px" }}
                src="https://cdn-icons-png.flaticon.com/512/2111/2111532.png"
              />
            </button>
          </a>

          <a href="mailto:sordeomkar2564@gmail.com">
            <button className="gitbutton" class="button-87" role="button">
              <img
                style={{ width: "22px", height: "22px", marginTop: "4px" }}
                src="https://cdn-icons-png.flaticon.com/512/542/542638.png"
              />
            </button>
          </a>
        </div>
        <div className="icon2" style={{marginLeft:"35px"}}>
        <a href="https://drive.google.com/file/d/1wP0N8_95ZwGsSE-AUrCG3wBBL_x4UtWP/view">
            <button style={{padding:"0.5rem 1rem", borderRadius:"4px",border:"2px solid orange"}} >
               Resume
            </button>
          </a>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          className="myphoto"
          style={{ borderRadius: "10%", height: "300px" }}
          src="https://avatars.githubusercontent.com/u/108116297?v=4"
        />
      </div>
    </div>
  );
};

export default About;
