import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { Button, Input, Textarea } from "@chakra-ui/react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import React from "react";
import "./Contact.css";
import { Icon } from "@chakra-ui/react";

//style={{border:"1px solid red"}}
const Contact = () => {
  return (
    <div id="contactScroll" style={{ backgroundColor: "#081520" }}>
      <div className="Contact">
        <h1>Contact</h1>
        <div className="Flex">
          <div
            className="ContactDetails"
            data-aos="fade-right"
            data-aos-offset="10"
            data-aos-delay="50"
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
          <a target={"_blank"} href="https://github.com/SORDE12">
            {" "}
            <Button className="btn2" bg="#A0AEC0">
              <Icon w={[4, 5]} h={12} as={BsGithub} />
            </Button>
          </a>
          <a
            target={"_blank"}
            href="https://www.linkedin.com/in/omkar-sorde-850a67246/"
          >
            {" "}
            <Button className="btn2" colorScheme="linkedin" ml="20px">
              <Icon w={[4, 5]} h={12} as={BsLinkedin} />
            </Button>
          </a>
          <a target={"_blank"} href="tel:+918421742445">
            {" "}
            <Button className="btn2" bg="#48BB78" ml="20px">
              <PhoneIcon w={[4, 5]} h={12} />
            </Button>
          </a>
          <a target={"_blank"} href="mailto:sordeomkar2564@gmail.com">
            {" "}
            <Button
              className="btn2"
              bgGradient={[
                "linear(to-tr, teal.300, yellow.400)",
                "linear(to-t, blue.200, teal.500)",
                "linear(to-b, orange.100, purple.300)",
              ]}
              ml="20px"
            >
              <EmailIcon w={[4, 5]} h={12} />
            </Button>
          </a>
        </div>
        <h4 className="footer" >Designed 💻 and Built by Omkar </h4>
      </div>
    </div>
  );
};

export default Contact;
