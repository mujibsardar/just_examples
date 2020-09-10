import React, { Component } from "react";
import "./style.css";

const tags = ['html', 'javascript', 'python', 'css', 'java', 'c++'];

export default class Chips extends Component {
 
  render() {
    return (
      <div className="chips-wrapper">
      {tags.map(tag => (
        <div class="chip">
          {tag}
        </div>
      ))}        
      </div>
    );
  }
}
