import React from "react";

const Avatar = props => {
    return(
      <div 
        className="avatar img-fluid" 
        style={{backgroundImage: `url(${props.image})`}}
      />
    );
  };

  export default Avatar;