import React, { Component } from "react";
import "./style.css";

const tags = ['html', 'javascript', 'python', 'css', 'java', 'c++'];

export default class Tags extends Component {
  render() {
    return (
      <div className="chips-wrapper">
      {tags.map((tag, i) => (
        <div className="chip" key={i}>
          {tag}
        </div>
      ))}
      </div>
    );
  }
}
