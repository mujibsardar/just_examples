
import React from "react";
import Media from "./Media";

const Body = props => {
    return(
      <div className="body-text-content">
        <div className="body-text">{props.text}</div>
        {props.content.media ? (
          <Media media={props.content} />
        ) : (
          <span />
        )}
      </div>
    );
  };

  export default Body;