import React, { Component } from "react";
import "./style.css";

export default function RecentExamples() {
    return (    
        <div class="recent-examples">
        <div class="recent-examples-in">
          <header>
            <h2>
              Recently
              <br />
              Posted
              <br />
              Examples
            </h2>
            <div class="href-button">
              <a href="#" class="button">
                Post example
              </a>
            </div>
          </header>
          <ul class="recent-examples-list">
            <li>
              <a href="#" class="Location href">
                <div>
                  <strong>Call-Em-All</strong> is hiring a Front End Engineer
                </div>
                <div></div>
              </a>
            </li>
            <li>
              <a href="#" class="Location href">
                <div class="Jobs-info">
                  <strong>Twenty Over Ten</strong>
                  is hiring a Web Designer / Front-End Developer
                </div>
              </a>
              <div></div>
            </li>
            <li>
              <a href="#" class="Location href">
                <div class="Jobs-info">
                  <strong>SDG </strong>
                  is hiring a Front End Web Developer
                </div>
                <div></div>
              </a>
            </li>
            <li>
              <a href="#" class="Location href">
                <div class="Jobs-info">
                  <strong>Unsplash</strong>
                  is hiring a React Engineer
                </div>
                <div></div>
              </a>
            </li>
            <li>
              <a href="#" class="Location href">
                <div class="Jobs-info">
                  <strong>Digital Bureau </strong>
                  is hiring a Full Stack Developer{" "}
                </div>
                <div></div>
              </a>
            </li>
            <li>
              <a href="#" class="Location href">
                <div class="Jobs-info">
                  <strong>Datto</strong>
                  is hiring a Senior Full Stack Web Developer
                </div>
                <div></div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
  
 