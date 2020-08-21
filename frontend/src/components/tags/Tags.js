import React, { useState, useCallback } from "react";
import ReactDOM from "react-dom";
import "./tags.css";

export default function TagInput({ data }) {
    const [tags, setTags] = useState(data);
  
    const addTags = event => {
      setTags([...tags, event.target.value]);
      event.target.value = "";
    };
  
    const removeTags = id => {
      const updatedTags = tags.filter((_, index) => index !== id);
      setTags([...updatedTags]);
    };
  
    return (
      <div id="tags-wrapper">
        <input
          type="text"
          onKeyUp={event => (event.key === "Enter" ? addTags(event) : null)}
          placeholder="Press enter to add tags"
        />
        <ul>
          {tags.map((tag, index) => (
            <li>
              <span>{tag}</span>
              <button onClick={() => removeTags(index)}>x</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }