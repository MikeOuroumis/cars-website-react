import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";
import "../styles/customer-favorite-section.css";
import ButtonMain from "./button-main";

const Card2 = (props) => {
  return (
    <div className="card2-container">
      <Card style={{ width: "18rem" }} className="card2">
        <Card.Img variant="top" className="card2-image" src={props.image} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <div className="card2-flex">
            <div className="card2-price-text">
              <p className="starting-at-text">Starting at</p>
              <h6 className="card2-price-text">{props.price}$</h6>
            </div>
            <ButtonMain style={{ height: "20px" }} text="SHOP NOW" />
            {/* <Button variant="primary">Shop Now</Button> */}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Card2;
