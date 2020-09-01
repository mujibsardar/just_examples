import React from "react";

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
    <div className="tags-input">
      {tags.map((tag, index) => (
        <a className="waves-effect waves-light btn blue accent-4" key={index}>
          <i className="material-icons left" onClick={() => removeTags(index)}>
            delete
          </i>
          {tag}
        </a>
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
