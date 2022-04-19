import React, { Component } from "react";
import "../App.css";

import "../styles/hero.css";

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
        <button id="hero-button">
          SHOP NOW{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-right"
            viewBox="0 0 16 9"
          >
            <path
              fill-rule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
            />
          </svg>
        </button>
      </section>
    </>
  );
};

export default Hero;
