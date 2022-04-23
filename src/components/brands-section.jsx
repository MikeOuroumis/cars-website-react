import React, { Component } from "react";
import "../styles/brands-section.css";
import audiImg from "../resources/audi logo@2x.png";
import bmwImg from "../resources/bmw logo@2x.png";
import chevroletImg from "../resources/chevrolet logo@2x.png";
import fordImg from "../resources/ford logo@2x.png";
import hondaImg from "../resources/honda logo@2x.png";
import jaguarImg from "../resources/jaguar logo@2x.png";
import porscheImg from "../resources/porsche logo@2x.png";
import toyotaImg from "../resources/toyota logo@2x.png";
import ButtonMain from "./button-main";

const BrandsSection = () => {
  return (
    <>
      <h2 className="brands-header">SHOP POPULAR BRANDS</h2>
      <ul className="brands-list">
        <li>
          <img src={audiImg}></img>
        </li>
        <li>
          <img src={bmwImg}></img>
        </li>
        <li>
          <img src={chevroletImg}></img>
        </li>
        <li>
          <img src={fordImg}></img>
        </li>
        <li>
          <img src={hondaImg}></img>
        </li>
        <li>
          <img src={jaguarImg}></img>
        </li>
        <li>
          <img src={porscheImg}></img>
        </li>
        <li>
          <img src={toyotaImg}></img>
        </li>
      </ul>
      <button className="brands-section-button">
        SEE ALL BRANDS
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
      </button>{" "}
    </>
  );
};

export default BrandsSection;
