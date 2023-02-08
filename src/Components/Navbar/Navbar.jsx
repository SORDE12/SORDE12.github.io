import "./Navbar.css";
import React from "react";
import { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const scrollTo1 = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const scrollTo2 = () => {
    window.scrollTo({
      top: "420",
      left: "0",
      behavior: "smooth",
    });
  };

  const scrollTo3 = () => {
    window.scrollTo({
      top: "900",
      left: "0",
      behavior: "smooth",
    });
  };

  const scrollTo5 = () => {
    window.scrollTo({
      top: "2200",
      left:"0",
      behavior: "smooth",
    });
  };

  return (
    <div className="header">
     
      <div className="filltext">OMKAR</div>

      <div className="name2">
        <ul className={!click ? "navmenu active" : "navmenu"}>
          <li onClick={scrollTo1}>Home</li>
          <li onClick={scrollTo2}>About</li>
          <li onClick={scrollTo3}>Skills</li>
          <li>Project</li>
          <li onClick={scrollTo5}>Contact</li>
        
          <li><a href="https://drive.google.com/file/d/1wP0N8_95ZwGsSE-AUrCG3wBBL_x4UtWP/view">Resume</a> </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
          {click ? <FaTimes size={28} /> : <FaBars size={28} />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
