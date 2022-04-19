import React, { Component } from "react";
import "../styles/since-1986-section.css";
import Card from "../components/card";
import Image1 from "../resources/CSC_2A2_00.png";
import Image2 from "../resources/84865968-2.png";
import Image3 from "../resources/CDCV1.png";

const Since1986 = () => {
  return (
    <div className="since-1986-section-container">
      <h3 id="since-1986">SINCE 1986</h3>
      <h2 id="got-you-covered">We’ve Got You Covered</h2>
      <div className="cards__wrapper">
        <ul className="cards__items">
          <Card
            src={Image1}
            text="Coverking’s unmatched quality of fit and finish designed specifically for your seat row. Available in 12 fabrics."
            label="CUSTOM SEAT COVERS"
            path="/Home"
          />
          <Card
            src={Image2}
            text="Amazing fit and protection tailored for your vehicle and your needs. Available in 8 fabrics."
            label="CUSTOM VEHICLE COVERS"
            path="/Home"
          />
          <Card
            src={Image3}
            text="Protected your new dash or hide your old with a sleek dash cover. Available in 4 fabrics."
            label="CUSTOM DASH COVERS"
            path="/Home"
          />
        </ul>
      </div>
    </div>
  );
};

export default Since1986;
