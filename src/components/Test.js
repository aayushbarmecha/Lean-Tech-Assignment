import React from "react";
import "../css/Test.css";
import Abhishek from "../assets/TestPhoto1.svg";

const Test = () => {
  return (
    <div className="testimonial-card">
      <p className="test-name">Abhishek Gupta</p>
      <img className="abhi" src={Abhishek} alt="Abhishek" />
      <p className="testimonial-data">
        “This course has significantly enhanced my professional
        life,particularly in terms of data organization. Previously, it would
        take me hours to segregate data, but after completing the course, the
        process has become much more streamlined. Implementing this course
        effectively can give you a competitive edge.”
      </p>
      <p className="position">Currency Research Analyst</p>
      <p className="company">Barclays</p>
    </div>
  );
};

export default Test;
