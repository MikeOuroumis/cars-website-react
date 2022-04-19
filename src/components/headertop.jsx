import React, { Component } from "react";
import vehicle_icon from "../resources/vehicle_icon.png";
import down_arrow from "../resources/Icon ionic-ios-arrow-down@2x.png";

const Headertop = () => {
  return (
    <>
      <div className="headertop-background">
        <div className="headertop-container">
          <div className="headertop-left-text">
            Help Center | Installation Videos
          </div>
          <div className="headertop-middle-text">
            Shop Coverking face masks! Trusted protection and tailored fit.{" "}
            <a href="#" style={{ color: "#91C5E7" }}>
              SHOP NOW
            </a>
          </div>
          <div className="headertop-right-text">
            <img src={vehicle_icon} className="vehicle-icon" />
            <span className="your-vehicle-text">Your Vehicle:</span> 2018
            Chevrolet Corvette Z06
            <img src={down_arrow} className="down-arrow-icon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Headertop;
