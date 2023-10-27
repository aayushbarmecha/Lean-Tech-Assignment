import React from "react";
import "../css/Alumni.css";
import Comp1 from "../assets/compLogo1.png";
import Comp2 from "../assets/compLogo2.png";
import Comp3 from "../assets/compLogo3.png";
import Comp4 from "../assets/compLogo4.png";
import Comp5 from "../assets/compLogo5.png";
import Comp6 from "../assets/compLogo6.png";
import Comp7 from "../assets/compLogo7.png";
const Alumni = () => {
  return (
    <div className="outer">
      <div className="alumni-container">
        <p className="alumni-heading">Where FutureEdge Alumni Work</p>
        <p className="alumni-subheading">
          Our Alumni are all placed in reputed firms in high positions due to
          the knowledge, skills and placement assistance gained from our
          courses.
        </p>
        <div className="image-container">
          <img src={Comp1} alt="" />
          <img src={Comp2} alt="" />
          <img src={Comp3} alt="" />
          <img src={Comp4} alt="" />
          <img src={Comp5} alt="" />
          <img src={Comp6} alt="" />
          <img src={Comp7} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Alumni;
