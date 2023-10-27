import React from "react";
import "../css/Courses.css";
import CourseCard from "./CourseCard";

const Courses = () => {
  const titles = [
    "Financial Modelling",
    "Investment Banking Operations",
    "International Business & Retail Banking Operations"
  ];

  const cardData = {
    bullets: [
      "27 hands-on courses",
      "NSE certification",
      "3+ Year Placement Assistance",
      "Skills: Financial Statement Analysis, Modeling, Accounting, Budgeting, Forecasting",
      "Career paths: Investment Banking, Private Equity, FP&A, Corp Dev, and more",
    ],
    pricing: "Rs.23000",
    buttonText1: "Download Brochure",
      buttonText2: "Buy Now",
  };

  return (
    <div className="ccontainer">
      <p className="course-heading">Our Courses</p>
      <p className="course-sub-heading">
        All the below courses can be pursued after passing 12th exams and along
        with graduation
      </p>
      <div className="cards">
        {titles.map((title, index) => (
          <CourseCard
            key={index}
            title={title}
            bullets={cardData.bullets}
            pricing={cardData.pricing}
            buttonText1={cardData.buttonText1}
            buttonText2={cardData.buttonText2}
          />
        ))}
      </div>
    </div>
  );
};

export default Courses;
