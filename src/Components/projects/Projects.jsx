import React from "react";
import "./Projects.css";
import Bindass from "../../Assets/Bindass.png"
//#081520
const Projects = () => {
  return (
    <>
      <div style={{ marginTop: "4rem" , background:"#081520" , paddingBottom:"3rem"}} className="projectContainer">
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
            alignItems:"center",
            paddingTop:"3rem"
          }}
        >
          <h1>Past Projects</h1>
        </div>

        <div className="card">
          <div className="imgbox" style={{ textAlign: "center" }}>
            <img
              className="proimg"
              alt="yes"
              src={Bindass}
            />

            <h1
              className="titleproject"
              style={{
                backgroundImage:
                  "radial-gradient( circle farthest-corner at 50.1% 52.3%,  rgba(255,231,98,1) 58.2%, rgba(251,212,0,1) 90.1% )",
              }}
            >
              Bindass Clone (React.Js, HTML, CSS)
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
              more at the best prices.The main intention of this application is to provide a quality products to the customer.
            </p>
            <div
              style={{
                width: "300px",
                margin: "auto",
                display: "flex",
                justifyContent: "space-between",
                paddingTop: "30px",
              }}
            >
              <div>
                <a href="https://github.com/akhtarfaizan20/Bindass">
                  <button
                    className="livelink"
                    style={{ padding: "10px", fontSize: "20px" }}
                  >
                    Code Base
                  </button>
                </a>
              </div>

              <div>
                <a href="https://bindass-bewakoof.netlify.app/">
                  <button
                    className="livelink"
                    style={{ padding: "10px", fontSize: "20px" }}
                  >
                    Live Link
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />


      </div>
    </>
  );
};

export default Projects;
