import React, { Component } from "react";
import "./style.css";

const TagsInput = (props) => {

  const [tags, setTags] = React.useState(["NodeJs", "MongoDB"]);

  const removeTags = (indexToRemove) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  const addTags = (event) => {
    event.preventDefault();
    if (event.target.value !== "") {
      setTags([...tags, event.target.value]);
      props.onNewTagSubmission([...tags, event.target.value]);
      event.target.value = "";
    }
  };

  return (
    <div className="chips-wrapper">
    {tags.map(tag => (
      <div className="chip">
      <i class="close material-icons">close</i>
        {tag}
      </div>
    ))}

      <input
        type="text"
        onKeyUp={(e) => e.key == "Enter" && addTags(e)}
        placeholder="Press enter to add tags"
        onChange={props.handleInput}
      />
    </div>
  );
};

export default TagsInput;
