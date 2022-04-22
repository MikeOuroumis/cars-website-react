import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";
import "../styles/customer-favorite-section.css";
import Card2 from "./card2";
import image1 from "../resources/Group 112.png";

const CustomerFavoriteSection = () => {
  return (
    <div className="customer-favorite-section-container">
      <h2>Shop Customer Favorites</h2>
      <ul className="cards2-container">
        <Card2
          image={image1}
          description="Luxurious, Top-Grade American Leather Seating Surfaces with Top-Stitch Seams"
          price="100"
        />
        <Card2
          image={image1}
          description="Luxurious, Top-Grade American Leather Seating Surfaces with Top-Stitch Seams"
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
