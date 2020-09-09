import React, { Component } from "react";
import "./style.css";

export default function Navbar() {
    return (
        <header>
          <div class="header-content">
            <div class="logo">
              <a href="/" class="href logo-in">
              <i class="material-icons logo-code">code</i>
                <div class="logo-name">Just Examples</div>
              </a>
            </div>
            <div>
              <nav>
                <ul class="header-nav">
                  <li class="header-li">
                    <a href="/new-example" class="href header-nav-grid">
                      Post
                    </a>
                  </li>
                  <li class="header-li">
                    <a href="/login" class="href header-nav-grid">
                      Sign In
                    </a>
                  </li>
                  <li class="header-li">
                    <a href="/register" class="href header-nav-grid">
                      Register
                    </a>
                  </li>
                  <li class="header-li">
                    <a href="#" class="href header-nav-grid">
                      About
                    </a>
                  </li>
                  <li class="header-li">
                    <a href="#" class="href header-nav-grid">
                      Support
                    </a>
                  </li>
                  <li class="header-li">
                    <a href="https://github.com/mujibsardar/just_examples" target="_blank" class="href header-nav-grid">
                      Repo
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="search">
              <input class="search-site" placeholder="search examples..." />
            </div>
          </div>
        </header>
    );
  }
