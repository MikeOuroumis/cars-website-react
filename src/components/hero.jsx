import React, { Component } from "react";
import "../App.css";

import "../styles/hero.css";
import ButtonMain from "./button-main";

const Hero = () => {
  return (
    <>
      <section className="hero-container">
        <h3 id="hero-subtitle">// COVERKING CUSTOM</h3>
        <h2 id="hero-title">
          Indoor Satin Stretch™<br></br>Car Cover
        </h2>
        <p id="hero-text">
          Made with an elastic synthetic fabric, the cover stretches in all
          directions and molds to the contours of your vehicle to highlight its
          design. The cover includes a unique fleece lining allowing for a soft
          enclosure all around.
        </p>

        <ButtonMain text="SHOP NOW" />
      </section>
    </>
  );
};

export default Hero;
