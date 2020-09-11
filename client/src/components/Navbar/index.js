import React, { Component } from "react";
import "./style.css";

export default function Navbar() {
    return (
        <header>
          <div className="header-content">
            <div className="logo">
              <a href="/" className="href logo-in">
              <i className="material-icons logo-code">code</i>
                <div className="logo-name">Just Examples</div>
              </a>
            </div>
            <div>
              <nav>
                <ul className="header-nav">
                  <li className="header-li">
                    <a href="/add/example" className="href header-nav-grid">
                      Post
                    </a>
                  </li>
                  <li className="header-li">
                    <a href="/login" className="href header-nav-grid">
                      Sign In
                    </a>
                  </li>
                  <li className="header-li">
                    <a href="/register" className="href header-nav-grid">
                      Register
                    </a>
                  </li>
                  <li className="header-li">
                    <a href="#" className="href header-nav-grid">
                      About
                    </a>
                  </li>
                  <li className="header-li">
                    <a href="#" className="href header-nav-grid">
                      Support
                    </a>
                  </li>
                  <li className="header-li">
                    <a href="https://github.com/mujibsardar/just_examples" target="_blank" className="href header-nav-grid">
                      Repo
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="search">
              <input className="search-site" placeholder="search examples..." />
            </div>
          </div>
        </header>
    );
  }
