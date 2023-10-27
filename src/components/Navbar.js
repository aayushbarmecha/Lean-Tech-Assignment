import React from "react";
// import { Link } from "react-router-dom";
import {  Link, animateScroll as scroll } from "react-scroll";
import "../css/Navbar.css";

const Navbar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="navbar">
      <div  className="nav-logo" >
        Future Edge
      </div>
      
      <div className="nav-menu">
        <Link
          activeClass="active"
          to="courses"
          spy={true}
          smooth={true}
          duration={500}
          className="nav-items"
        >
          Courses
        </Link>
        <Link
          activeClass="active"
          to="testimonials"
          spy={true}
          smooth={true}
          duration={500}
          className="nav-items"
        >
          Testimonials
        </Link>
        <Link
          activeClass="active"
          to="why-choose"
          spy={true}
          smooth={true}
          duration={500}
          className="nav-items"
        >
          Why FutureEdge
        </Link>
        <Link
          activeClass="active"
          to="alumni"
          spy={true}
          smooth={true}
          duration={500}
          className="nav-items"
        >
          Alumni
        </Link>
        <Link
          activeClass="active"
          to="instructors"
          spy={true}
          smooth={true}
          duration={500}
          className="nav-items"
        >
          Mentors
        </Link>
      </div>
      <div className="nav-buttons">
        <a href="/sign-in" className="signIn">
          Sign In
        </a>
        <button className="signUp">Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
