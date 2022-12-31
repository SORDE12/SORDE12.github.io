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
      top: "400px",
      left: "0",
      behavior: "smooth",
    });
  };

  const scrollTo3 = () => {
    window.scrollTo({
      top: "900px",
      left: "0",
      behavior: "smooth",
    });
  };

  const scrollTo4 = () => {
    window.scrollTo({
      top: "1200px",
      left:"0",
      behavior: "smooth",
    });
  };

  return (
    <div className="header">
      {/* <div className="name1">
        <h1 style={{color:"#2f35be"}}>Om</h1>
        <h1 style={{color:"#d89963"}}>kar</h1>
      </div>  */}
      <div className="filltext">OMKAR</div>

      <div className="name2">
        <ul className={!click ? "navmenu active" : "navmenu"}>
          <li onClick={scrollTo1}>Home</li>
          <li onClick={scrollTo2}>About</li>
          <li onClick={scrollTo3}>Skills</li>
          <li onClick={scrollTo4}>Project</li>
          <li>Contact</li>
          <li>Resume</li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
          {click ? <FaTimes size={28} /> : <FaBars size={28} />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
