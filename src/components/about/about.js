import React from "react";
import "./about.css";
import lightBulbImage from "../../assets/light_bulb.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="about-line" style={{ display: "flex", alignItems: "center" }}>
        <div style={{ flex: 1, backgroundColor: "#838485", height: "3px" }} />
        <div className="about-title">About Us</div>
        <div style={{ flex: 1, backgroundColor: "#838485", height: "3px" }} />
      </div>

      <div className="about-content">
        <img
          src={lightBulbImage}
          className="about-image"
          alt="Light Bulb"
          style={{ float: "left", marginRight: "10px" }}
        />
        <div className="about-text">
          <div className="title">About ANM Electrical</div>
          <div className="body">
            Sample text Sample text Sample text Sample text Sample text Sample
            text Sample text Sample text Sample text Sample text Sample text
            Sample text Sample text Sample text Sample text Sample text Sample
            text Sample text Sample text Sample text Sample text Sample text
            Sample text Sample text Sample text Sample text Sample text Sample
            text Sample text Sample text Sample text Sample text Sample text
            Sample text
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
