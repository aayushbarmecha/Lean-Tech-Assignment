import React from "react";
import "../css/Instructor.css";
import Profile from "./Profile";
const Instructor = () => {
  const cardData = [
    {
      title: "Aman Gupta",
      bullets: [
        "Has completed all three CFA levels in first attempt",
        "4+ Years Experience Training For Financial Modeling and Independent Trader",
      ],
      text1: "CFA, Commodity Trader",
      text2: "Morgan Stanley",
    },
    {
      title: "Nayan Tank",
      bullets: [
        "4+ years of Experience in- Risk Management & Valuation",
        "Ex BNY Mellon Risk Analyst",
        "Trained 1000+ Students & Independent CA in New Delhi",
      ],
      text1: "NITIE MBA, CA",
      text2: "Barclays",
    },
    {
      title: "Amar Gupta",
      bullets: [
        "10+ Year Experience Fund Manager, Product Management & Entrepreneurship",
        "Trained 10000+ students in premiere institution ",
        // eslint-disable-next-line
        "CFA Charter holder since 2020 \
Ex Co Founder – A.K Research",
      ],
      text1: "CFA,IIM-MBA, B-Tech",
      text2: "JP Morgan & Chase",
    },
  ];
  return (
    <div className="inst-container" id="instructors">
      <p className="instructor-heading">Meet Your Instructors</p>
      <p className="instructor-subheading">
        Our faculty are all professionally qualified and have rich industry
        experience, essential for giving a practical context to concepts.
      </p>
      <div className="instructor-container">
        {cardData.map((card, index) => (
          <Profile
            key={index}
            title={card.title}
            bullets={card.bullets}
            text1={card.text1}
            text2={card.text2}
          />
        ))}
      </div>
    </div>
  );
};
export default Instructor;
