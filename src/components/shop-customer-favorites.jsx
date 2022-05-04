import React, { Component, useState, useRef, Ref } from "react";
import { Button, Card, Pagination, Row, Col } from "react-bootstrap";
import "../styles/customer-favorite-section.css";
import Card2 from "./card2";
import image1 from "../resources/Group 112.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ButtonMain from "./button-main";
import image2 from "../resources/Screenshot 2022-05-02 151519.png";
import image3 from "../resources/Screenshot 2022-05-02 151612.png";
import image4 from "../resources/Screenshot 2022-05-02 151655.png";

const CustomerFavoriteSection = () => {
  const ref = useRef(null);
  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
    console.log(ref.current.scrollLeft);
  };

  return (
    <div className="customer-favorite-section-container">
      <h2>Shop Customer Favorites</h2>
      <div className="scrollButtons">
        <button className="prev" onClick={() => scroll(-100)}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button className="next" onClick={() => scroll(100)}>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
      <ul ref={ref} className="cards2-container">
        <Card2
          image={image1}
          description="Luxurious, Top-Grade American Leather Seating Surfaces with Top-Stitch Seams"
          price="100"
        />
        <Card2
          image={image2}
          description="Luxurious, Top-Grade American Leather Seating Surfaces with Top-Stitch Seams"
        />{" "}
        <Card2
          image={image3}
          description="Luxurious, Top-Grade American Leather Seating Surfaces with Top-Stitch Seams"
          price="100"
        />{" "}
        <Card2
          image={image4}
          description="Luxurious, Top-Grade American Leather Seating Surfaces with Top-Stitch Seams"
          price="100"
        />{" "}
        <Card2
          image={image1}
          description="Luxurious, Top-Grade American Leather Seating Surfaces with Top-Stitch Seams"
          price="100"
        />{" "}
        <Card2
          image={image1}
          description="Luxurious, Top-Grade American Leather Seating Surfaces with Top-Stitch Seams"
          price="100"
        />{" "}
        <Card2
          image={image1}
          description="Luxurious, Top-Grade American Leather Seating Surfaces with Top-Stitch Seams"
          price="100"
        />{" "}
        <Card2
          image={image1}
          description="Luxurious, Top-Grade American Leather Seating Surfaces with Top-Stitch Seams"
          price="100"
        />
      </ul>
    </div>
  );
};

export default CustomerFavoriteSection;
