import React from "react";

export default function Chips() {
const tags = ["HTML", "JavaScript", "Python", "C++", "jQuery"];


  return (
      <div className="align">
    {tags.map((tag, index) => (
        <a className="chip" key={index}>         
          {tag}
        </a>
      ))}
      </div>
  );
}
