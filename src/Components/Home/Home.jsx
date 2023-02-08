import React from "react";

import Typewriter from "typewriter-effect";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
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
