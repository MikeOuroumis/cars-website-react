import React, { Component } from "react";
import "../styles/testimonial-card.css";

const TestimonialCard = (props) => {
  return (
    <div className="testimonial-card-container" style={props.style}>
      <p>testimonial card</p>
    </div>
  );
};

export default TestimonialCard;
