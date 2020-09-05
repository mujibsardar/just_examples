import React, { Component } from "react";


function Header() {
    return (    
        <header>
          <div class="Header-content">
            <div class="Logo">
              <a href="#" class="href Logo-in">
              <i class="material-icons Logo-star">code</i>          
                <div class="Logo-css">Just Examples</div>
              </a>
            </div>
            <div class="Nav-top">
              <nav>
                <ul class="Header-nav">
                  <li class="Header-li">
                  
                    <a href="#" class="href header-nav-grid">
                      Post
                    </a>
                  </li>
                  <li class="Header-li">
                   
                    <a href="#" class="href header-nav-grid">
                      Sign In
                    </a>
                  </li>
                  <li class="Header-li">
                    
                    <a href="#" class="href header-nav-grid">
                      Register
                    </a>
                  </li>
                  <li class="Header-li">
                   
                    <a href="#" class="href header-nav-grid">
                      About
                    </a>
                  </li>
                  <li class="Header-li">
                   
                    <a href="#" class="href header-nav-grid">
                      Support
                    </a>
                  </li>
                  <li class="Header-li">
                   
                    <a href="#" class="href header-nav-grid">
                      Repo
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
  
            <div class="Search">
              <input class="Search-po-site" placeholder="search examples ..." />
            </div>
          </div>
        </header>     
    );
  }
  
  export default Header;