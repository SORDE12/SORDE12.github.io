import "./Navbar.css";
import React from "react";
import { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import resume from "../../Assets/fw20_0902-Omkar-Sorde-Resume.pdf"
import {Link} from "react-scroll"

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

 

  

  

  return (
    <div className="header">
     
      <div className="filltext">OMKAR</div>

      <div className="name2">
        <ul className={!click ? "navmenu active" : "navmenu"}>
          <li><Link to="myHome"
                spy={true}
                smooth={true}
                offset={-50}
                duration={1000} >Home</Link></li>
          <li ><Link  to="myAbout"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}>About
          </Link></li>

          <li ><Link to="mySkills"
                spy={true}
                smooth={true}
                offset={-50}
                duration={1000} >Skills
          </Link></li>
          <li ><Link to="myProject"
                spy={true}
                smooth={true}
                offset={-50}
                duration={1000} >Project
          </Link></li>
          <li ><Link  to="myContact"
                spy={true}
                smooth={true}
                offset={-50}
                duration={1000}>Contact
          </Link></li>
         
        
          <li><a href={resume} download onClick={()=>{
            window.open("https://drive.google.com/file/d/1wP0N8_95ZwGsSE-AUrCG3wBBL_x4UtWP/view?usp=share_link")
          }}>Resume</a> </li>
        </ul>
        <div className="hamburger"  onClick={handleClick}>
          {click ? <FaTimes size={28} /> : <FaBars size={28} />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
