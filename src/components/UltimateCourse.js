import React from "react";
import '../css/UltimateCourse.css';
import CourseCard from "./CourseCard";

const UltimateCourse = () => {
    const titles = [
        "Universal Banking Operation"
      ];
    const cardData = {
        bullets: [
            "Financial Banking Course",
            "Investment Banking Operations",
            "International Business and Retail Banking Operations",
            "NSE certification",
            "Placement Assistance",
            "Skills: Financial Statement Analysis, Modeling, Accounting, Budgeting, Forecasting,", 
            "Career paths: Investment Banking, Private Equity, FP&A, Corp Dev, and more",
        ],
        pricing: "Rs.50000",
        buttonText1: "Download Brochure",
          buttonText2: "Buy Now",
      };
    return(
        <div className="ucontainer">
      <div className="left">
        <h2 className="uheading">Our Ultimate & Most Assured Course</h2>
        <ul className="info">
            <li>A  6months long prestigious course curated by industry leaders Morgan Stanley, Credit Suisse, and seasoned stock market professionals.</li>
            <li>This comprehensive program provides you with an extensive and well-rounded education, encompassing:</li>
            <ul>
                <li>Financial Modeling</li>
                <li>Investment Banking Operations</li>
                <li>An in-depth Overview of International Business</li>
                <li>Retail Banking Operations, and</li>
                <li>A profound understanding of Technical Analysis, including the art of trading.</li>
            </ul>
        </ul>
      </div>
      <div className="right">
      <div className="cards ultimatecard">
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
    </div>
    );
};
export default UltimateCourse;