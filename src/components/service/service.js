import React from "react";
import "./service.css";
import ReusableCard from "../reusableCard/reusableCard";
import HomeIcon from "@mui/icons-material/Home";
import BusinessIcon from "@mui/icons-material/Business";
import FactoryIcon from "@mui/icons-material/Factory";

const Service = () => {
  return (
    <div className="service">
      <div
        className="service-line"
        style={{ display: "flex", alignItems: "center" }}
      >
        <div style={{ flex: 1, backgroundColor: "#838485", height: "3px" }} />
        <div className="service-title">Our Services</div>
        <div style={{ flex: 1, backgroundColor: "#838485", height: "3px" }} />
      </div>

      <div className="service-content">
        <ReusableCard
          icon={<HomeIcon style={{ fontSize: "80", color: "#198ccb" }} />}
          title="Residential"
          description="Custom description goes here."
        />

        <ReusableCard
          icon={<BusinessIcon style={{ fontSize: "80", color: "#198ccb" }} />}
          title="Commercial"
          description="Custom description goes here."
        />

        <ReusableCard
          icon={<FactoryIcon style={{ fontSize: "80", color: "#198ccb" }} />}
          title="Industrial"
          description="Custom description goes here."
        />
      </div>
    </div>
  );
};

export default Service;
