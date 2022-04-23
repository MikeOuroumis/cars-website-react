import React, { Component } from "react";
import "../styles/featured-collections-section.css";

const FeaturedCollectionsSection = () => {
  return (
    <>
      <h2 className="featured-collections-header">Featured Collections</h2>
      <ul>
        <li>Jeep</li>
        <ul>
          <li>Sports</li>
          <li>Camo</li>
        </ul>
      </ul>
    </>
  );
};

export default FeaturedCollectionsSection;
