import React from "react";
import '../css/CourseCard.css';

const CourseCard = ({ title, bullets, pricing, buttonText1, buttonText2 }) => {
    return (
      <div className="card">
        <h2 className="ctitle">{title}</h2>
        <ul>
          {bullets.map((bullet, index) => <li key={index}>{bullet}</li>)}
        </ul>
        <p><strong>Pricing: </strong>{pricing}</p>
        <div className="buttons">
        <button className="dbutton">{buttonText1}</button>
        <button className="bbutton">{buttonText2}</button>
        </div>
      </div>
    );
  };
export default CourseCard;