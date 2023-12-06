import React from "react";
import "./service.css";

const Service = () => {
  return (
    <div className="service">
      <div className="service-line" style={{ display: "flex", alignItems: "center" }}>
        <div style={{ flex: 1, backgroundColor: "#838485", height: "3px" }} />
        <div className="service-title">Our Services</div>
        <div style={{ flex: 1, backgroundColor: "#838485", height: "3px" }} />
      </div>
    </div>
  );
};

export default Service;