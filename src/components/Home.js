import React from "react";
import "../css/Home.css";
import Photo from "../assets/headerimg.png";
import p1 from "../assets/p1.svg";
import p2 from "../assets/p2.svg";
import p3 from "../assets/p3.svg";
import p4 from "../assets/p4.svg";
import p5 from "../assets/p5.svg";
import p6 from "../assets/p6.svg";
import p7 from "../assets/p7.svg";
const Person = ({ image }) => {
    return (
      <div className="person">
        <img src={image} alt="" />
      </div>
    );
  };
const Home = () => {
  const people = [
    { image: p1 },
    { image: p2 },
    { image: p3 },
    { image: p4 },
    { image: p5 },
    { image: p6 },
    { image: p7 },
  ];
  return (
    <div className="container">
      <div className="left">
        <h2 className="heading">Unlock Your Potential in Finance & Banking</h2>
        <h4 className="sub-heading">Transform your dreams into Careers</h4>
        <p className="text">
          Learn, build your job profile with exclusive placement assistance for
          3+ years and get placed in your dream company. Join the collaborative
          community of live trainers, catering to various Finance Skills needed
          in the finance industry.
        </p>
        <button className="start">Get Started</button>
        <div className="img-txt">
          <div className="group">
            {people.map((person, index) => (
              <Person key={index} image={person.image} />
            ))}
          </div>
          <p className="overlay-text">1600 students have already registered their interest just within the last month.</p>
        </div>
      </div>
      <div className="right">
        <img className="solid-logo" src={Photo} alt="" />
      </div>
    </div>
  );
};

export default Home;
