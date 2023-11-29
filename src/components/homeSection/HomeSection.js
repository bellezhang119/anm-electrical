import React from "react";
import BackgroundImage from "../../assets/rooftop.jpg";
import "./HomeSection.css"; // Import the CSS file

const HomeSection = () => {
  return (
    <div className="home-section" style={{ backgroundImage: `url(${BackgroundImage})` }}>
      <div className="content">
        <div className="title">ANM Electrical Limited</div>
        <button className="contact-button">Contact Us</button>
      </div>
    </div>
  );
};

export default HomeSection;
