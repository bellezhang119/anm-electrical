import React from "react";
import BackgroundImage from "../../assets/rooftop.jpg";
import "./landing.css"; 

const Landing = () => {
  return (
    <div className="landing" style={{ backgroundImage: `url(${BackgroundImage})` }}>
      <div className="landing-content">
        <div className="landing-title">ANM Electrical Limited</div>
        <button className="contact-button">Contact Us</button>
      </div>
    </div>
  );
};

export default Landing;
