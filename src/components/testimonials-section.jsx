import { React, useRef, Ref } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import "../styles/testimonials-section.css";
import Card2 from "./card2";
import image1 from "../resources/CDCV1.png";
import TestimonialCard from "./testimonial-card";

const TestimonialsSection = () => {
  const ref = useRef(null);
  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
    console.log(ref.current.scrollLeft);
  };
  const opacity = 0.5;
  return (
    <>
      <div className="testimonials-container">
        <div className="scrollButtons">
          <button className="prev" onClick={() => scroll(-500)}>
            Left
          </button>
          <button className="next" onClick={() => scroll(500)}>
            Right
          </button>
        </div>
        <ul ref={ref} className="cards2-container">
          <TestimonialCard style={{ opacity }} />
          <TestimonialCard style={{ opacity }} />
          <TestimonialCard style={{ opacity }} />
          <TestimonialCard style={{ opacity }} />
          <TestimonialCard style={{ opacity }} />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </ul>
        {/* <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.pinimg.com/564x/e5/60/54/e56054ac4fc07a5477d815d47a76d4ae.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.pinimg.com/564x/e5/60/54/e56054ac4fc07a5477d815d47a76d4ae.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.pinimg.com/564x/e5/60/54/e56054ac4fc07a5477d815d47a76d4ae.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel> */}
      </div>
    </>
  );
};

export default TestimonialsSection;
