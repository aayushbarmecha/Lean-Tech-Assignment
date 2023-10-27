import React from "react";
import "../css/ChooseCard.css";

const ChooseCard = ({ image, title, info }) => {
  return (
    <div className="choose-card">
      <img className="feature-image" src={image} alt=""/>
      <h2 className="feature-name">{title}</h2>
      <p className="feature-info">{info}</p>
    </div>
  );
};
export default ChooseCard;
