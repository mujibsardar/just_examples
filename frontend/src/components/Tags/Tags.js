import React from "react";

const TagsInput = (props) => {

  const [tags, setTags] = React.useState(["NodeJs", "MongoDB"]);
  
  const removeTags = (indexToRemove) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };
  
  const addTags = (event) => {
    if (event.target.value !== "") {
      setTags([...tags, event.target.value]);
      props.selectedTags([...tags, event.target.value]);
      event.target.value = "";
    }
  };

  return (
    <div className="tags-input">
      {tags.map((tag, index) => (
        <a className="waves-effect waves-light btn" key={index}>
          <i className="material-icons left" onClick={() => removeTags(index)}>
            delete
          </i>
          {tag}
        </a>
      ))}

      <input
        type="text"
        onKeyUp={(e) => e.key === "Enter" && addTags(e)}
        placeholder="Press enter to add tags"
      />
    </div>
  );
};

export default TagsInput;
