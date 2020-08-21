import React, { useState, useCallback } from "react";
import ReactDOM from "react-dom";

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
      <div className="tag-wrapper">
        <input
          type="text"
          onKeyUp={event => (event.key === "Enter" ? addTags(event) : null)}
          placeholder="Press enter to add tags"
        />
      
          {tags.map((tag, index) => (
          <div id="tags-wrapper"> 
            <a className="waves-effect waves-light btn">
                <i className="material-icons right" onClick={() => removeTags(index)}>delete</i>{tag}
                
              </a>                          
              </div>
          ))}
        
      </div>
    );
  }