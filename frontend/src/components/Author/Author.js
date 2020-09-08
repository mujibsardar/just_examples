import React, { Component } from "react";
import "./style.css";

export default function Author() {
    return (    
        <div className="article-author-grid article">
        <div className="author-img">
          <a href="#">
            <img src="https://www.vut.ac.za/wp-content/uploads/2016/02/blank-profile-picture-973460_1280-283x189.png" className="avatar" />
          </a>          
        </div>
         
        <div>
          <div className="pref">
          Author
          </div>
          <div className="article-arrow-grid" className="href">
            <div><a href="#" className="href under-pref">Joe Schmo</a></div>
          </div>
        </div>   
        <div>
          <div className="pref">
          Posted
          </div>
          <div className="article-arrow-grid" className="href">
            <div><a href="#" className="href under-pref">9-26-2020</a></div>
          </div>
        </div>        
      </div>
    );
  }
  
 