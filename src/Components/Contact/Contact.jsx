import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { Button, Input, Textarea } from "@chakra-ui/react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import React from "react";
import "./Contact.css";
import { Icon } from "@chakra-ui/react";

//style={{border:"1px solid red"}}
const Contact = () => {
  return (
    <div id="contactScroll"  style={{ backgroundColor: "#081520" ,border:"1px solid #081520" }}>
      <div id="myContact" className="Contact">
        <h1>Contact</h1>
        <div className="Flex">
          <div
            className="ContactDetails"
            data-aos-offset="10"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
          >
            <Input placeholder="enter your name" />
            <Input mt="40px" placeholder="enter your email" />
            <Textarea placeholder="Type your message..." />
            <Button style={{ background: "#66e0ff" }}>Send</Button>
          </div>
          <div
            className="ContactIcon"
            data-aos="fade-left"
            data-aos-offset="0"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
          >
            <div>
              <img src="https://gr7800.github.io/static/media/bg1.d4a402f4b5da5590c675.gif" />
            </div>
          </div>
        </div>
        <div 
          className="logo"
          data-aos="fade-up"
          data-aos-offset="-400"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-center"
          
        >
  
            {" "}
            <Button className="btn2" bg="#A0AEC0"
            onClick={()=>{
              window.open("https://github.com/SORDE12")
            }}
            >
              <Icon w={[4, 5]} h={12} as={BsGithub} />
            </Button>
          
            {" "}
            <Button className="btn2" colorScheme="linkedin" ml="20px"
             onClick={()=>{
              window.open("https://www.linkedin.com/in/omkar-sorde-850a67246/")
            }}
            >
              <Icon w={[4, 5]} h={12} as={BsLinkedin} />
            </Button>
          
        </div>
        <div style={{marginTop:"15px",gap:"15px", color:"#66e0ff"}}>
          <h1 style={{fontSize:"20px"}}><PhoneIcon/> 8421742445 </h1>
          
          <h1 style={{fontSize:"20px"}}><EmailIcon/> sordeomkar2564@gmail.com </h1>
        </div>
        <h4 className="footer"  >Made by Omkar Sorde</h4>
      </div>
    </div>
  );
};

export default Contact;
