import React from "react";

import Typewriter from "typewriter-effect";
import "./Home.css";
import resume from "../../Assets/fw20_0902-Omkar-Sorde-Resume.pdf"

const Home = () => {


  return (
    <div className="home" id="myHome">
      <div className="myname">
        <p>Hi I'm</p>
        <h1> Omkar Sorde </h1>
        <Typewriter
          options={{
            strings: ["A Full Stack Web Developer", "A MERN Stack Developer"],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
            fontSize: "bold",
          }}
        />
        <a href={resume} download>
        <button 
        className="btn btn1"
        onClick={()=>{
          window.open("https://drive.google.com/file/d/1wP0N8_95ZwGsSE-AUrCG3wBBL_x4UtWP/view?usp=share_link")
        }}
        >RESUME</button>
        </a>
      </div>
      <div className="myname1">
        <img
          className="myphoto"
        
          src="https://avatars.githubusercontent.com/u/108116297?v=4"
        />
      </div>
    </div>
  );
};

export default Home;
