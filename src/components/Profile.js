import React from "react";
import "../css/Profile.css";
import Abhishek from "../assets/TestPhoto1.svg";

const Profile = ({ title, bullets, text1, text2 }) => {
  return (
    <div className="profile-card">
      <h2 className="profile-name">{title}</h2>
      <img className="aman" src={Abhishek} alt="Abhishek" />
      <ul>
        {bullets.map((bullet, index) => (
          <li key={index}>{bullet}</li>
        ))}
      </ul>
      <p className="profile-position">{text1}</p>
      <p className="profile-company">{text2}</p>
    </div>
  );
};

export default Profile;
