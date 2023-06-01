import React from "react";
import "./Projects.css";
import Bindass from "../../Assets/Bindass.png";
import Urban from "../../Assets/Urban.png";
import BodyCare from "../../Assets/BodyCare.png";
import spareCare from "../../Assets/spareCare.png";
//#081520
const Projects = () => {
  return (
    <>
      <div
        id="myProject"
        style={{ background: "#081520", paddingBottom: "3rem" }}
        className="projectContainer"
      >
        <div
          style={{
            textAlign: "center",
            width: "300px",
            margin: "auto",
            fontSize: "24px",
            textDecoration: "underline",
            textDecorationColor: "#66e0ff",
            textUnderlineOffset: "10px",
            color: "#66e0ff",
            marginBottom: "120px",
            alignItems: "center",
            paddingTop: "3rem",
          }}
        >
          <h1>Past Projects</h1>
        </div>

        <div className="card">
          <div className="imgbox" style={{ textAlign: "center" }}>
            <img className="proimg" alt="yes" src={Bindass} />

            <h1
              className="titleproject"
              style={{
                backgroundImage:
                  "radial-gradient( circle farthest-corner at 50.1% 52.3%,  rgba(255,231,98,1) 58.2%, rgba(251,212,0,1) 90.1% )",
              }}
            >
              Bindass (ReactJS , Redux , Javascript , ChakraUI , HTML , CSS)
            </h1>
          </div>
          <div
            className="content"
            style={{
              fontSize: "20px",
              fontWeight: "lighter",
              textAlign: "justify",
              color: "white",
            }}
          >
            <p>
              Bindass is an Online Shopping site for Men and Women Clothing.
              Shop from a wide range of T-shirts, Mobile Covers, Accessories and
              more at the best prices.The main intention of this application is
              to provide a quality products to the customer.
            </p>
            <div className="livelinkDiv">
              <div>
                <button
                  className="livelink"
                  onClick={() => {
                    window.open("https://github.com/akhtarfaizan20/Bindass");
                  }}
                  style={{ padding: "10px", fontSize: "20px" }}
                >
                  Code Base
                </button>
              </div>

              <div>
                <button
                  className="livelink"
                  style={{ padding: "10px", fontSize: "20px" }}
                  onClick={() => {
                    window.open("https://bindass-bewakoof.netlify.app/");
                  }}
                >
                  Live Link
                </button>
              </div>
            </div>
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <div className="card">
          <div className="imgbox" style={{ textAlign: "center" }}>
            <img className="proimg" alt="yes" src={spareCare} />

            <h1
              className="titleproject"
              style={{
                backgroundImage:
                  "radial-gradient( circle farthest-corner at 50.1% 52.3%,  rgba(255,231,98,1) 58.2%, rgba(251,212,0,1) 90.1% )",
              }}
            >
              Advance Spare Care (react , mongodb , node.Js, express ,
              JavaScript)
            </h1>
          </div>
          <div
            className="content"
            style={{
              fontSize: "20px",
              fontWeight: "lighter",
              textAlign: "justify",
              color: "white",
            }}
          >
            <p>
              Advance Spare Care is an scalable makeup auto parts website
              platform where the user can come and place their order. It is an
              Collaborative project. It has a admin panel where admin can do a
              lot of options.
            </p>
            <div className="livelinkDiv">
              <div>
                <button
                  className="livelink"
                  style={{ padding: "10px", fontSize: "20px" }}
                  onClick={() => {
                    window.open(
                      "https://github.com/SORDE12/Advance-Spare-Care"
                    );
                  }}
                >
                  Code Base
                </button>
              </div>

              <div>
                <button
                  className="livelink"
                  style={{ padding: "10px", fontSize: "20px" }}
                  onClick={() => {
                    window.open("https://advance-auto-parts.vercel.app/");
                  }}
                >
                  Live Link
                </button>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <div className="card">
          <div className="imgbox" style={{ textAlign: "center" }}>
            <img className="proimg" alt="yes" src={Urban} />

            <h1
              className="titleproject"
              style={{
                backgroundImage:
                  "radial-gradient( circle farthest-corner at 50.1% 52.3%,  rgba(255,231,98,1) 58.2%, rgba(251,212,0,1) 90.1% )",
              }}
            >
              Urban Company (HTML, CSS, JavaScript)
            </h1>
          </div>
          <div
            className="content"
            style={{
              fontSize: "20px",
              fontWeight: "lighter",
              textAlign: "justify",
              color: "white",
            }}
          >
            <p>
              Urban Company is Asia's largest online home services platform
              launched in 2014,Urban Company orerates in India and some other
              countries.The platform helps customers book services delivered by
              trained professionals at home.
            </p>
            <div className="livelinkDiv">
              <div>
                <button
                  className="livelink"
                  style={{ padding: "10px", fontSize: "20px" }}
                  onClick={() => {
                    window.open(
                      "https://github.com/hustler-abhi/Urbancompany-Clone"
                    );
                  }}
                >
                  Code Base
                </button>
              </div>

              <div>
                <button
                  className="livelink"
                  style={{ padding: "10px", fontSize: "20px" }}
                  onClick={() => {
                    window.open("https://jolly-donut-35e1f0.netlify.app/");
                  }}
                >
                  Live Link
                </button>
              </div>
            </div>
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <div className="card">
          <div className="imgbox" style={{ textAlign: "center" }}>
            <img className="proimg" alt="yes" src={BodyCare} />

            <h1
              className="titleproject"
              style={{
                backgroundImage:
                  "radial-gradient( circle farthest-corner at 50.1% 52.3%,  rgba(255,231,98,1) 58.2%, rgba(251,212,0,1) 90.1% )",
              }}
            >
              Body Care(HTML, CSS, JavaScript, React, Redux, ChakraUI)
            </h1>
          </div>
          <div
            className="content"
            style={{
              fontSize: "20px",
              fontWeight: "lighter",
              textAlign: "justify",
              color: "white",
            }}
          >
            <p>
              Body Care is online shopping platform launched to sell bath and
              body products, we have hundreds of quality products perfect for
              treating yourself or someone else.
            </p>
            <div className="livelinkDiv">
              <div>
                <button
                  className="livelink"
                  style={{ padding: "10px", fontSize: "20px" }}
                  onClick={() => {
                    window.open("https://github.com/SORDE12/Body-Care");
                  }}
                >
                  Code Base
                </button>
              </div>

              <div>
                <button
                  className="livelink"
                  style={{ padding: "10px", fontSize: "20px" }}
                  onClick={() => {
                    window.open("https://fluffy-unicorn-713224.netlify.app/");
                  }}
                >
                  Live Link
                </button>
              </div>
            </div>
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
};

export default Projects;
