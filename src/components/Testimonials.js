import React from "react";
import "../css/Testimonials.css";
import Test from "./Test";

const Testimonials = () => {
  return (
    <div className="testimonial" id="testimonials">
      <div className="test-container">
        <p className="testimonial-heading">What our Learners Say</p>
        <p className="testimonial-subheading">
        100+ thousand people have already joined FutureEdge
        </p>
        <div className="testimonial-container">
            <Test/>
            <Test/>
            <Test/>
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
