import React from "react";
import '../css/Footer.css';
import Logo from "../assets/logofull 1.png"

const Footer = () => {
    return(
        <div>
            <p className="footer-heading">Ready to Transform Your Career ?</p>
            <button className="footer-button">Get Started</button>
            <div className="footer">
                <div className="footer-top">
                <div className="footer-left">
                    <img src={Logo} alt=""/>
                </div>
                <div className="footer-right">
                    <div className="column">
                        <p className="column-top">Explore</p>
                        <a href="/home">Home</a>
                        <a href="/courses">Courses</a>
                        <a href="/about">About Us</a>
                        <a href="/features">Features</a>
                    </div>
                    <div className="column">
                        <p className="column-top">Company</p>
                        <a href="/terms">Terms & Conditions</a>
                        <a href="/privacy">Privacy Policy</a>
                        <a href="/contact">Contact Us</a>
                    </div>
                    <div className="column">
                        <p className="column-top">Get In Touch</p>
                        <p>B-1213 We Work, <br/>Andheri 400093</p>
                        <p>+91-8850991017  <br/>                   
                        +91-8424853124</p>
                        <p>info@FutureEdges.in</p>

                    </div>
                </div>
                </div>
                <div className="bottom-footer">
                    <p className="copyright">© 2021 FutureEdge. All rights reserved.</p>
                    <div className="footer-icons">
                    <a href="/">
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                    <a href="/">
                    <i class="fa fa-whatsapp" aria-hidden="true"></i>
                    </a>
                    <a href="/">
                        <i className="fa fa-linkedin-square"></i>
                    </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Footer;