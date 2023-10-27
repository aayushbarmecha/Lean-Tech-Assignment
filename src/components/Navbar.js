import React from "react";
import '../css/Navbar.css';
const Navbar = () => {
  const navItems = [
    { name: "Courses", path: "/courses" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Why FutureEdge", path: "/why-futureedge" },
    { name: "Mentors", path: "/mentors" },
    { name: "Alumni", path: "/alumni" },
  ];
  return (
    <div className="navbar">
        <a href="/" className="nav-logo">
            Future Edge
        </a>
        <ul className="nav-menu">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.path} className="nav-items">{item.name}</a>
              </li>
            ))}
          </ul>
        <div className="nav-buttons">
            <a href="/sign-in" className="signIn">
                Sign In
            </a>
            <button className="signUp">
                Sign Up
            </button>
        </div>
    </div>
  );
};

export default Navbar;
