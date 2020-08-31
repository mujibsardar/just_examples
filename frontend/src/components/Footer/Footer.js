import React from "react";
import "./style.css";

export default class Footer extends React.Component {
  render() {
    return (
        
        <footer className="footer-distributed">
<div class="container">
            <div class="row">
        <div className="footer-left">

            <h3>Just<span> Examples</span></h3>

            <p className="footer-links">
                <a href="#" className="link-1">Home</a>            

                <a href="#">About</a>
                
                <a href="#">Faq</a>
                
                <a href="#">Contact</a>
            </p>

            <p className="footer-company-name">Just Examples ©2020</p>
        </div>

        <div className="footer-center">          
            <div>
                <i className="fa fa-envelope"></i>
                <p><a href="mailto:support@company.com">support@company.com</a></p>
            </div>
        </div>

        <div className="footer-right">
            <p className="footer-company-about">
                <span>About the company</span>
                Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
            </p>

            <div className="footer-icons">
                <a href="#"><i className="fa fa-facebook"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
                <a href="#"><i className="fa fa-linkedin"></i></a>
                <a href="#"><i className="fa fa-github"></i></a>
            </div>
        </div>
        </div>
        </div>

    </footer>
    );
  }
}
