import React from "react";
import "../css/WhyChoose.css";
import Placement from "../assets/PlacementAssistance.png";
import Feature1 from "../assets/f11.png";
import Feature2 from "../assets/f2.svg";
import Feature3 from "../assets/f3.svg";
import Feature4 from "../assets/f4.svg";
import Feature5 from "../assets/f1.svg";
import Feature6 from "../assets/f5.svg";
import ChooseCard from "./ChooseCard";
const WhyChoose = () => {
  const cardData = [
    {
      image:  Feature1 ,
      title: "In-Demand Certifications",
      info: "FutureEdge provides courses that offer industry-relevant professional certification from CIMA, ACCA, NSDC, FPSB India and others",
    },
    {
      image:  Feature2 ,
      title: "Hands-on Learning",
      info: "Our one-of-a-kind active learning system delivers concept-based application-oriented learning and skill upgradation.",
    },
    {
      image:  Feature3 ,
      title: "Convenient Flexible Learning  ",
      info: "The flexible learning method is designed to meet working professionals' and students' unique schedules and specific needs.",
    },
    {
      image:  Feature4 ,
      title: "Expert Faculty",
      info: "Our training faculty members of handpicked industry experts and experienced professionals deliver exceptional experiential training.",
    },
    {
      image:  Feature5 ,
      title: "Growth Support Mentors",
      info: "Growth support mentors help improve learning and enhance career aspirations with candidates' potential.",
    },
    {
      image:  Feature6 ,
      title: "3+ Year Placement Assistance",
      info: "Get jobs aligned with career goals and choose from a list of curated matching preferences. Comprehensive interview preparation and resume building.",
    },
  ];

  return (
    <div className="features-container" id="why-choose">
      <h2 className="features-heading">Why Choose Future Edge</h2>
      <div className="features-top">
        {cardData.map((card, index) => (
          <ChooseCard
            key={index}
            image={card.image}
            title={card.title}
            info={card.info}
          />
        ))}
      </div>
      <div className="features-bottom">
        <div className="bottom-left">
          <h2 className="bottom-heading">Exclusive Placement Assistance of 3+ Years</h2>
          <button className="features-button">Get Started</button>
        </div>
        <div>
          <img src={Placement} alt=""/>
        </div>
      </div>
    </div>
  );
};
export default WhyChoose;
