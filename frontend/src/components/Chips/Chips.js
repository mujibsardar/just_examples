import React from "react";
import "./style.css";

const tags = ['html', 'javascript', 'python', 'css'];

export default class Chips extends React.Component {
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
